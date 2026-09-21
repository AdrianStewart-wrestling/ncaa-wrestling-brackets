/* ============================================================================
   TOURNAMENT CORE — Phase 3A  (pure logic; NOT loaded by the application yet)
   ----------------------------------------------------------------------------
   Everything needed to keep an OFFICIAL tournament state, with no DOM, no Firebase
   and no routing of its own:

   • ONE ENGINE. The bracket engine is injected (see create()). All advancement and
     consolation routing is performed by the app's real applyPick(). This file contains
     no routing table. Even the "who depends on whom" graph is DISCOVERED by probing the
     real applyPick() with marker wrestlers.
   • IDENTITY, NOT SLOT. A decision is stored as WHO won (wrestler id "125-17" = weight-seed),
     never as an A/B slot. The slot is derived at replay time. (The engine fills the 3rd/5th/7th
     slots "first free", so a stored slot is not reliable across replays.)
   • DEPENDENCY-AWARE CORRECTION. Changing or clearing a result reverts exactly that bout and
     the bouts downstream of it — never anything else — with an explicit preview + confirmation.
   • ATOMIC. Every operation either fully succeeds or leaves the book untouched.

   Works in Node (require) and in the browser (window.TournamentCore).
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.TournamentCore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /* ------------------------------------------------------------------ result types */
  // Codes and bonus values follow the OG Excel ScoringRules (tblBonusPoints).
  // score/time: 'optional' = may be supplied; 'none' = must be empty.
  const RESULT_TYPES = Object.freeze([
    { code: 'Dec',      label: 'Decision',          bonus: 0,   score: 'optional', time: 'none' },
    { code: 'MajDec',   label: 'Major Decision',    bonus: 1,   score: 'optional', time: 'none' },
    { code: 'TechFall', label: 'Technical Fall',    bonus: 1.5, score: 'optional', time: 'optional' },
    { code: 'Fall',     label: 'Fall',              bonus: 2,   score: 'none',     time: 'optional' },
    { code: 'MedFFT',   label: 'Medical Forfeit',   bonus: 2,   score: 'none',     time: 'none' },
    { code: 'FFT',      label: 'Forfeit',           bonus: 2,   score: 'none',     time: 'none' },
    { code: 'DQ',       label: 'Disqualification',  bonus: 2,   score: 'none',     time: 'none' }
  ].map(Object.freeze));
  const TYPE_BY_CODE = {};
  RESULT_TYPES.forEach(function (t) { TYPE_BY_CODE[t.code] = t; });

  const clone = function (o) { return JSON.parse(JSON.stringify(o)); };
  const text = function (v) { return v == null ? '' : String(v).replace(/\s+/g, ' ').trim(); };

  // Validates + normalizes result details. Never throws.
  //   errors   -> block recording (malformed / not applicable)
  //   warnings -> advisory only (e.g. margin does not look like the chosen type)
  function validateResult(input) {
    const errors = [], warnings = [];
    const out = { resultType: null, score: '', time: '' };
    input = input || {};
    const code = input.resultType;
    const type = code ? TYPE_BY_CODE[code] : null;
    if (!code) errors.push({ field: 'resultType', code: 'required', message: 'Choose a result type.' });
    else if (!type) errors.push({ field: 'resultType', code: 'unknown', message: '“' + text(code).slice(0, 30) + '” is not a valid result type.' });
    else out.resultType = code;

    let score = text(input.score), time = text(input.time);
    if (score.length > 40) { errors.push({ field: 'score', code: 'too_long', message: 'Score is too long.' }); score = ''; }
    if (time.length > 20) { errors.push({ field: 'time', code: 'too_long', message: 'Time is too long.' }); time = ''; }

    if (type && score && type.score === 'none') { errors.push({ field: 'score', code: 'not_applicable', message: 'A score is not used for ' + type.label + '.' }); score = ''; }
    if (type && time && type.time === 'none') { errors.push({ field: 'time', code: 'not_applicable', message: 'A time is not used for ' + type.label + '.' }); time = ''; }

    if (score) {
      // winner-first "W-L", optional short overtime note (e.g. "5-3 SV-1", "4-3 TB-2")
      const m = /^(\d{1,3})\s*-\s*(\d{1,3})(?:\s+([A-Za-z0-9][A-Za-z0-9 \-]{0,11}))?$/.exec(score);
      if (!m) errors.push({ field: 'score', code: 'format', message: 'Score should look like 9-1 (winner’s points first).' });
      else {
        const w = parseInt(m[1], 10), l = parseInt(m[2], 10), margin = w - l;
        if (margin <= 0) errors.push({ field: 'score', code: 'winner_not_ahead', message: 'The winner’s points must be higher than the loser’s.' });
        else {
          out.score = w + '-' + l + (m[3] ? ' ' + m[3].toUpperCase() : '');
          if (type && type.code === 'MajDec' && (margin < 8 || margin > 14)) warnings.push({ field: 'score', code: 'margin', message: 'A major decision is normally an 8–14 point margin (this is ' + margin + ').' });
          if (type && type.code === 'TechFall' && margin < 15) warnings.push({ field: 'score', code: 'margin', message: 'A technical fall is normally a 15+ point margin (this is ' + margin + ').' });
          if (type && type.code === 'Dec' && margin >= 8) warnings.push({ field: 'score', code: 'margin', message: 'A margin of ' + margin + ' would normally be a major decision or technical fall.' });
        }
      }
    }
    if (time) {
      const m = /^(\d{1,2}):([0-5]\d)$/.exec(time);
      if (!m) errors.push({ field: 'time', code: 'format', message: 'Time should look like 3:31 (minutes:seconds).' });
      else {
        out.time = parseInt(m[1], 10) + ':' + m[2];
        if (parseInt(m[1], 10) > 15) warnings.push({ field: 'time', code: 'long', message: 'That is a very long time for a bout (' + out.time + ').' });
      }
    }
    return { ok: errors.length === 0, errors: errors, warnings: warnings, value: out };
  }

  /* ------------------------------------------------------------------ identity helpers */
  // "125-17" = weight 125, seed 17 (same ids as the OG Excel Wrestlers table).
  function wrestlerId(weight, w) { return w ? weight + '-' + String(w.seed).padStart(2, '0') : null; }
  function parseKey(ks) { const p = ks.split(':'); return [p[0], +p[1], +p[2]]; }
  function keyOf(b, ri, mi) { return b + ':' + ri + ':' + mi; }

  // Which field of engine.boutNumbers(weight) starts each round (pairing NAMES only; every number comes from boutNumbers()).
  const BASE_FIELD = {
    pigtail: 'pigtail', conPigtail: 'preCons', p3: 'third', p5: 'fifth', p7: 'seventh',
    champ: ['r1Start', 'r2Start', 'qfStart', 'semiStart', 'final'],
    con: ['c1Start', 'c2Start', 'c3Start', 'c4Start', 'cQtrsStart', 'cSemisStart']
  };
  const PLACEMENT = { p3: 1, p5: 1, p7: 1 };

  /* ==================================================================== create() */
  // engine = {
  //   weights:            [125, 133, …]
  //   boutNumbers(weight) the existing bout-number mapping
  //   newState(weight)    returns a FRESH pristine bracket state each call (never shared)
  //   applyPick(st, bracket, roundIdx, matchIdx, slot)   the REAL engine function
  //   roundNames:         { champ:[…], con:[…] }  (optional; used only by legacyRef)
  // }
  // options = { now: () => ISO string }
  function create(engine, options) {
    if (!engine || !engine.weights || !engine.boutNumbers || !engine.newState || !engine.applyPick) throw new Error('TournamentCore: incomplete engine');
    const nowFn = (options && options.now) || function () { return new Date().toISOString(); };

    /* ---------- structure (derived from the engine's own state object) ---------- */
    const proto = engine.newState(engine.weights[0]);
    const KEYS = ['pigtail:0:0', 'conPigtail:0:0', 'p3:0:0', 'p5:0:0', 'p7:0:0'];
    proto.champ.forEach(function (r, ri) { r.forEach(function (m, mi) { KEYS.push(keyOf('champ', ri, mi)); }); });
    proto.con.forEach(function (r, ri) { r.forEach(function (m, mi) { KEYS.push(keyOf('con', ri, mi)); }); });

    function matchOf(st, ks) {
      const k = parseKey(ks);
      switch (k[0]) {
        case 'pigtail': return st.pigtail;
        case 'conPigtail': return st.conPigtail;
        case 'p3': return st.place3;
        case 'p5': return st.place5;
        case 'p7': return st.place7;
        case 'champ': return st.champ[k[1]][k[2]];
        case 'con': return st.con[k[1]][k[2]];
      }
      return null;
    }

    /* ---------- bout index (built from the existing boutNumbers) ---------- */
    const byId = new Map(), byWeightKey = new Map();
    function boutIdOf(weight, ks) {
      const B = engine.boutNumbers(weight), k = parseKey(ks);
      if (k[0] === 'champ') return B[BASE_FIELD.champ[k[1]]] + k[2];
      if (k[0] === 'con') return B[BASE_FIELD.con[k[1]]] + k[2];
      return B[BASE_FIELD[k[0]]];
    }
    engine.weights.forEach(function (weight) {
      KEYS.forEach(function (ks) {
        const id = boutIdOf(weight, ks);
        byId.set(id, { boutId: id, weight: weight, key: ks });
        byWeightKey.set(weight + '|' + ks, id);
      });
    });
    function locate(boutId) { return byId.get(boutId) || null; }

    /* ---------- dependency graph, DISCOVERED by probing the real applyPick ---------- */
    const edges = {}, probeProblems = [];
    KEYS.forEach(function (ks) {
      const st = engine.newState(engine.weights[0]), k = parseKey(ks), m = matchOf(st, ks);
      const WIN = { n: '@@WIN', s: '', r: '', seed: 9001 }, LOS = { n: '@@LOS', s: '', r: '', seed: 9002 };
      m.a = WIN; m.b = LOS; m.w = null;
      engine.applyPick(st, k[0], k[1], k[2], 'a');
      const dest = { winner: null, loser: null, winnerIsChampion: false };
      let winHits = 0, losHits = 0;
      KEYS.forEach(function (q) {
        if (q === ks) return;
        const mm = matchOf(st, q);
        ['a', 'b'].forEach(function (slot) {
          if (mm[slot] === WIN) { dest.winner = q; winHits++; }
          if (mm[slot] === LOS) { dest.loser = q; losHits++; }
        });
      });
      if (st.champion === WIN) { dest.winnerIsChampion = true; winHits++; }
      if (winHits > 1 || losHits > 1) probeProblems.push('probe of ' + ks + ' placed a marker more than once');
      edges[ks] = dest;
    });
    const descMemo = {};
    function descendantsOf(ks) {          // transitive closure over winner/loser edges (keys)
      if (descMemo[ks]) return descMemo[ks];
      const out = new Set(), stack = [ks];
      while (stack.length) {
        const cur = stack.pop(), e = edges[cur];
        [e.winner, e.loser].forEach(function (d) { if (d && !out.has(d)) { out.add(d); stack.push(d); } });
      }
      return (descMemo[ks] = out);
    }

    function selfCheck() {
      const problems = probeProblems.slice();
      const ids = Array.from(byId.keys()).sort(function (a, b) { return a - b; });
      if (KEYS.length !== 64) problems.push('expected 64 bouts per weight, found ' + KEYS.length);
      if (ids.length !== KEYS.length * engine.weights.length) problems.push('bout numbers are not unique');
      for (let i = 0; i < ids.length; i++) if (ids[i] !== i + 1) { problems.push('bout numbers are not contiguous 1..N (gap near ' + (i + 1) + ')'); break; }
      KEYS.forEach(function (ks) { if (descendantsOf(ks).has(ks)) problems.push('routing cycle through ' + ks); });
      let edgeCount = 0;
      KEYS.forEach(function (ks) { const e = edges[ks]; if (e.winner) edgeCount++; if (e.loser) edgeCount++; });
      return { ok: problems.length === 0, problems: problems, stats: { keysPerWeight: KEYS.length, bouts: ids.length, edges: edgeCount } };
    }

    // Destination BOUT NUMBERS for a bout (for tests/UI). champion => winnerIsChampion, no bout.
    function routes(boutId) {
      const loc = locate(boutId); if (!loc) return null;
      const e = edges[loc.key];
      return {
        winnerTo: e.winner ? byWeightKey.get(loc.weight + '|' + e.winner) : null,
        winnerIsChampion: e.winnerIsChampion,
        loserTo: e.loser ? byWeightKey.get(loc.weight + '|' + e.loser) : null
      };
    }
    function dependentsOf(boutId) {       // all downstream bout numbers (decided or not), ascending
      const loc = locate(boutId); if (!loc) return null;
      return Array.from(descendantsOf(loc.key)).map(function (ks) { return byWeightKey.get(loc.weight + '|' + ks); }).sort(function (a, b) { return a - b; });
    }

    // Identity of a match in the EXISTING persistence format (buildWeightPayload / officialResults doc ids).
    function legacyRef(ks) {
      const k = parseKey(ks), rn = engine.roundNames || { champ: [], con: [] };
      switch (k[0]) {
        case 'pigtail': return { bracket: 'Pigtail', round: 'Pigtail', roundIndex: 0, matchIndex: 0 };
        case 'champ': return { bracket: 'Championship', round: rn.champ[k[1]], roundIndex: k[1], matchIndex: k[2] };
        case 'conPigtail': return { bracket: 'Consolation', round: 'Con Pigtail', roundIndex: -1, matchIndex: 0 };
        case 'con': return { bracket: 'Consolation', round: rn.con[k[1]], roundIndex: k[1], matchIndex: k[2] };
        case 'p3': return { bracket: 'Placement', round: '3rd Place', roundIndex: 0, matchIndex: 0 };
        case 'p5': return { bracket: 'Placement', round: '5th Place', roundIndex: 1, matchIndex: 0 };
        case 'p7': return { bracket: 'Placement', round: '7th Place', roundIndex: 2, matchIndex: 0 };
      }
      return null;
    }
    function legacyDocId(weight, ks) { const r = legacyRef(ks); return weight + '_' + r.bracket + '_' + r.roundIndex + '_' + r.matchIndex; }

    /* ---------- the Book: identity records + derived engine states ---------- */
    // book.decisions : Map(boutId -> record)      (the source of truth)
    // book.states    : { weight -> engine state } (derived; always == replay(decisions))
    // All pristine weight states exist from the start, so a rejected request never has to create (i.e. change) anything.
    function newBook() {
      const book = { decisions: new Map(), states: {}, version: 0 };
      engine.weights.forEach(function (w) { book.states[w] = engine.newState(w); });
      return book;
    }
    function stateFor(book, weight) { return book.states[weight]; }

    function entrantId(weight, m, slot) { return wrestlerId(weight, m[slot]); }
    function slotOf(weight, m, winnerId) {
      if (m.a && entrantId(weight, m, 'a') === winnerId) return 'a';
      if (m.b && entrantId(weight, m, 'b') === winnerId) return 'b';
      return null;
    }
    function apply(st, ks, slot) { const k = parseKey(ks); engine.applyPick(st, k[0], k[1], k[2], slot); }

    // Rebuild one weight from identity records (fixed-point: order-independent).
    function replay(weight, records) {
      const st = engine.newState(weight);
      const left = new Map(); records.forEach(function (r) { left.set(r.key, r); });
      let progress = true;
      while (progress && left.size) {
        progress = false;
        Array.from(left.keys()).forEach(function (ks) {
          const r = left.get(ks), m = matchOf(st, ks);
          if (!m.a || !m.b || m.w) return;
          const slot = slotOf(weight, m, r.winnerId);
          if (!slot) return;
          apply(st, ks, slot); left.delete(ks); progress = true;
        });
      }
      return { state: st, unresolved: Array.from(left.values()).map(function (r) { return r.boutId; }).sort(function (a, b) { return a - b; }) };
    }
    function recordsOfWeight(book, weight) {
      const out = []; book.decisions.forEach(function (r) { if (r.weight === weight) out.push(r); }); return out;
    }

    // Canonical form of a state (3rd/5th/7th entrants compared as unordered pairs: their A/B order is click-order dependent).
    function canonicalState(weight, st) {
      const o = {};
      KEYS.forEach(function (ks) {
        const m = matchOf(st, ks); let a = wrestlerId(weight, m.a), b = wrestlerId(weight, m.b);
        if (PLACEMENT[parseKey(ks)[0]] && a && b && a > b) { const t = a; a = b; b = t; }
        o[ks] = { a: a, b: b, w: m.w ? wrestlerId(weight, m[m.w]) : null };
      });
      o.champion = st.champion ? wrestlerId(weight, st.champion) : null;
      return o;
    }

    function ok(extra) { return Object.assign({ ok: true }, extra); }
    function fail(code, message, extra) { return Object.assign({ ok: false, code: code, message: message }, extra); }

    function describeWrestler(weight, w) {
      return w ? { id: wrestlerId(weight, w), name: text(w.n), school: text(w.s), seed: w.seed, record: text(String(w.r || '').replace(/[()]/g, '')) } : null;
    }
    function metaOf(r) {
      return r ? { resultType: r.resultType, score: r.score, time: r.time, recordedAt: r.recordedAt, recordedBy: r.recordedBy, source: r.source, revision: r.revision } : null;
    }

    // Read-only description of one bout (same status vocabulary as Tournament Central).
    function describe(book, boutId) {
      const loc = locate(boutId); if (!loc) return null;
      const m = matchOf(stateFor(book, loc.weight), loc.key), rec = book.decisions.get(boutId) || null;
      return {
        boutId: boutId, weight: loc.weight, key: loc.key, legacy: legacyRef(loc.key),
        status: m.w ? 'decided' : (m.a && m.b ? 'pending' : 'waiting'),
        a: describeWrestler(loc.weight, m.a), b: describeWrestler(loc.weight, m.b),
        winnerId: m.w ? wrestlerId(loc.weight, m[m.w]) : null, winnerSlot: m.w || null,
        result: metaOf(rec)
      };
    }

    /* ---------- record ---------- */
    // req: { boutId, winnerId, resultType, score, time, recordedBy, source, expectedRevision? }
    function record(book, req) {
      req = req || {};
      const v = validateResult(req);
      if (!v.ok) return fail('invalid_result', 'The result details are not valid.', { errors: v.errors, warnings: v.warnings });
      const loc = locate(req.boutId);
      if (!loc) return fail('unknown_bout', 'Bout ' + text(req.boutId) + ' does not exist.');
      if (book.decisions.has(loc.boutId)) return fail('already_decided', 'Bout ' + loc.boutId + ' already has a result. Use a correction to change it.');
      const st = stateFor(book, loc.weight), m = matchOf(st, loc.key);
      if (!m.a || !m.b) return fail('not_ready', 'Bout ' + loc.boutId + ' is waiting: one or both wrestlers are not set yet.', { missing: [m.a ? null : 'a', m.b ? null : 'b'].filter(Boolean) });
      const slot = slotOf(loc.weight, m, req.winnerId);
      if (!slot) return fail('winner_not_entrant', 'That wrestler is not in bout ' + loc.boutId + '.');
      const winner = m[slot], loser = m[slot === 'a' ? 'b' : 'a'];
      try { apply(st, loc.key, slot); } catch (e) { book.states[loc.weight] = replay(loc.weight, recordsOfWeight(book, loc.weight)).state; return fail('internal', 'The engine rejected the result.'); }
      if (m.w !== slot) { book.states[loc.weight] = replay(loc.weight, recordsOfWeight(book, loc.weight)).state; return fail('internal', 'The engine did not apply the result.'); }
      const rec = {
        boutId: loc.boutId, weight: loc.weight, key: loc.key,
        winnerId: wrestlerId(loc.weight, winner), loserId: wrestlerId(loc.weight, loser),
        resultType: v.value.resultType, score: v.value.score, time: v.value.time,
        recordedAt: nowFn(), recordedBy: text(req.recordedBy) || null, source: text(req.source) || null, revision: 1
      };
      book.decisions.set(loc.boutId, rec); book.version++;
      return ok({ record: clone(rec), warnings: v.warnings });
    }

    /* ---------- dependency-aware preview / clear / correct ---------- */
    function decidedDependents(book, boutId) {
      return (dependentsOf(boutId) || []).filter(function (id) { return book.decisions.has(id); });
    }
    function brief(book, id) { const r = book.decisions.get(id); return { boutId: id, winnerId: r.winnerId, resultType: r.resultType, legacy: legacyRef(r.key) }; }

    // Read-only: what would clearing (or correcting) this bout revert?
    function preview(book, boutId, action) {
      const rec = book.decisions.get(boutId);
      if (!rec) return fail('not_decided', 'Bout ' + text(boutId) + ' has no recorded result.');
      const deps = decidedDependents(book, boutId);
      return ok({
        boutId: boutId, action: action || 'clear',
        dependents: deps.map(function (id) { return brief(book, id); }),
        willRevert: [boutId].concat(deps),
        requiresConfirmation: deps.length > 0
      });
    }

    // Atomic commit of "remove these decisions, rebuild the weight, optionally then record one more".
    function rebuildWeight(book, weight, removeIds, thenRecord) {
      const remaining = recordsOfWeight(book, weight).filter(function (r) { return removeIds.indexOf(r.boutId) < 0; });
      const rp = replay(weight, remaining);
      if (rp.unresolved.length) return { error: fail('internal', 'Remaining results could not be replayed (' + rp.unresolved.join(', ') + ').') };
      let added = null;
      if (thenRecord) {
        const m = matchOf(rp.state, thenRecord.key);
        if (!m.a || !m.b) return { error: fail('not_ready', 'The bout’s wrestlers are not both set.') };
        const slot = slotOf(weight, m, thenRecord.winnerId);
        if (!slot) return { error: fail('winner_not_entrant', 'That wrestler is not in this bout.') };
        apply(rp.state, thenRecord.key, slot);
        added = {
          winnerId: wrestlerId(weight, m[slot]), loserId: wrestlerId(weight, m[slot === 'a' ? 'b' : 'a'])
        };
      }
      return { state: rp.state, added: added };
    }
    function commit(book, weight, removeIds, newState, newRecord) {
      removeIds.forEach(function (id) { book.decisions.delete(id); });
      if (newRecord) book.decisions.set(newRecord.boutId, newRecord);
      book.states[weight] = newState; book.version++;
    }
    function staleCheck(rec, req) {
      if (req && req.expectedRevision != null && req.expectedRevision !== rec.revision)
        return fail('stale_revision', 'Bout ' + rec.boutId + ' was changed since you loaded it (revision ' + rec.revision + ', expected ' + req.expectedRevision + ').', { currentRevision: rec.revision });
      return null;
    }

    // Return a bout (and only what depends on it) to Pending.
    // opts: { cascade: true } is REQUIRED when decided dependents exist; { expectedRevision }
    function clear(book, boutId, opts) {
      opts = opts || {};
      const rec = book.decisions.get(boutId);
      if (!rec) return fail('not_decided', 'Bout ' + text(boutId) + ' has no recorded result.');
      const stale = staleCheck(rec, opts); if (stale) return stale;
      const deps = decidedDependents(book, boutId);
      if (deps.length && opts.cascade !== true)
        return fail('needs_confirmation', 'Clearing bout ' + boutId + ' would also revert ' + deps.length + ' later bout(s).', { preview: preview(book, boutId, 'clear') });
      const removeIds = [boutId].concat(deps);
      const removedRecords = removeIds.map(function (id) { return clone(book.decisions.get(id)); });
      const rb = rebuildWeight(book, rec.weight, removeIds, null);
      if (rb.error) return rb.error;
      commit(book, rec.weight, removeIds, rb.state, null);
      return ok({ cleared: removeIds, removedRecords: removedRecords });
    }

    // Change ONLY the details (type/score/time) of a decided bout: never affects routing, never cascades.
    function editDetails(book, boutId, req) {
      req = req || {};
      const rec = book.decisions.get(boutId);
      if (!rec) return fail('not_decided', 'Bout ' + text(boutId) + ' has no recorded result.');
      const stale = staleCheck(rec, req); if (stale) return stale;
      const v = validateResult(req);
      if (!v.ok) return fail('invalid_result', 'The result details are not valid.', { errors: v.errors, warnings: v.warnings });
      const previous = clone(rec);
      rec.resultType = v.value.resultType; rec.score = v.value.score; rec.time = v.value.time;
      rec.recordedAt = nowFn(); rec.recordedBy = text(req.recordedBy) || rec.recordedBy; rec.source = text(req.source) || rec.source; rec.revision++;
      book.version++;
      return ok({ record: clone(rec), previous: previous, warnings: v.warnings, cleared: [] });
    }

    // Change the WINNER of a decided bout. Reverts exactly the bouts downstream of it, then records the new winner.
    // req: { winnerId, resultType, score, time, recordedBy, source, cascade, expectedRevision }
    function correct(book, boutId, req) {
      req = req || {};
      const rec = book.decisions.get(boutId);
      if (!rec) return fail('not_decided', 'Bout ' + text(boutId) + ' has no recorded result.');
      const stale = staleCheck(rec, req); if (stale) return stale;
      const v = validateResult(req);
      if (!v.ok) return fail('invalid_result', 'The result details are not valid.', { errors: v.errors, warnings: v.warnings });
      if (req.winnerId === rec.winnerId) return editDetails(book, boutId, req);          // same winner = details only
      if (req.winnerId !== rec.loserId) return fail('winner_not_entrant', 'That wrestler is not in bout ' + boutId + '.');
      const deps = decidedDependents(book, boutId);
      if (deps.length && req.cascade !== true)
        return fail('needs_confirmation', 'Changing bout ' + boutId + ' would also revert ' + deps.length + ' later bout(s).', { preview: preview(book, boutId, 'correct') });
      const removeIds = [boutId].concat(deps);
      const removedRecords = removeIds.map(function (id) { return clone(book.decisions.get(id)); });
      const draft = {
        boutId: boutId, weight: rec.weight, key: rec.key, winnerId: req.winnerId, loserId: rec.winnerId,
        resultType: v.value.resultType, score: v.value.score, time: v.value.time,
        recordedAt: nowFn(), recordedBy: text(req.recordedBy) || null, source: text(req.source) || null, revision: rec.revision + 1
      };
      const rb = rebuildWeight(book, rec.weight, removeIds, draft);
      if (rb.error) return rb.error;
      draft.winnerId = rb.added.winnerId; draft.loserId = rb.added.loserId;
      commit(book, rec.weight, removeIds, rb.state, draft);
      return ok({ record: clone(draft), previous: removedRecords[0], cleared: deps, removedRecords: removedRecords, warnings: v.warnings });
    }

    /* ---------- import / export ---------- */
    function toRecords(book) {
      return Array.from(book.decisions.values()).sort(function (a, b) { return a.boutId - b.boutId; }).map(clone);
    }
    // Rebuild a book from stored identity records. Bad records are REPORTED, never silently applied.
    // opts: { legacy: true } accepts records that lack resultType (old officialResults docs) and flags them.
    function fromRecords(records, opts) {
      opts = opts || {};
      const book = newBook(), problems = [], byWeight = {}, seen = new Set();
      (records || []).forEach(function (raw) {
        const boutId = raw && raw.boutId, loc = locate(boutId);
        if (!loc) { problems.push({ boutId: boutId, code: 'unknown_bout', message: 'Unknown bout ' + text(boutId) + '.' }); return; }
        if (seen.has(boutId)) { problems.push({ boutId: boutId, code: 'duplicate', message: 'More than one record for bout ' + boutId + '.' }); return; }
        seen.add(boutId);
        if (raw.weight != null && raw.weight !== loc.weight) { problems.push({ boutId: boutId, code: 'weight_mismatch', message: 'Record weight does not match bout ' + boutId + '.' }); return; }
        if (typeof raw.winnerId !== 'string' || !raw.winnerId) { problems.push({ boutId: boutId, code: 'no_winner_id', message: 'Bout ' + boutId + ' has no winner identity.' }); return; }
        const v = validateResult(raw);
        let meta = v.value;
        if (!v.ok) {
          const onlyMissingType = opts.legacy && v.errors.length === 1 && v.errors[0].code === 'required';
          if (!onlyMissingType) { problems.push({ boutId: boutId, code: 'invalid_result', message: 'Bout ' + boutId + ': ' + v.errors[0].message }); return; }
          meta = { resultType: null, score: '', time: '' };
          problems.push({ boutId: boutId, code: 'legacy_no_type', level: 'warning', message: 'Bout ' + boutId + ' has no result type (legacy record).' });
        }
        (byWeight[loc.weight] = byWeight[loc.weight] || []).push({
          boutId: boutId, weight: loc.weight, key: loc.key, winnerId: raw.winnerId, loserId: raw.loserId || null,
          resultType: meta.resultType, score: meta.score, time: meta.time,
          recordedAt: raw.recordedAt || null, recordedBy: raw.recordedBy || null, source: raw.source || null,
          revision: Number.isInteger(raw.revision) && raw.revision > 0 ? raw.revision : 1
        });
      });
      Object.keys(byWeight).forEach(function (w) {
        const weight = +w, rp = replay(weight, byWeight[w]);
        byWeight[w].forEach(function (r) {
          if (rp.unresolved.indexOf(r.boutId) >= 0) { problems.push({ boutId: r.boutId, code: 'unresolved', message: 'Bout ' + r.boutId + ': the winner is not in that bout given the earlier results.' }); return; }
          const m = matchOf(rp.state, r.key);
          r.loserId = wrestlerId(weight, m[m.w === 'a' ? 'b' : 'a']);
          book.decisions.set(r.boutId, r);
        });
        // rebuild from ONLY the accepted records so state == replay(decisions)
        book.states[weight] = replay(weight, recordsOfWeight(book, weight)).state;
      });
      book.version = 1;
      return { book: book, problems: problems };
    }

    /* ---------- invariants ---------- */
    function checkInvariants(book) {
      const problems = [];
      engine.weights.forEach(function (weight) {
        const recs = recordsOfWeight(book, weight);
        const st = book.states[weight];
        if (!st) { problems.push('weight ' + weight + ' has no state'); return; }
        const rp = replay(weight, recs);
        if (rp.unresolved.length) problems.push('weight ' + weight + ': records cannot be replayed (' + rp.unresolved.join(',') + ')');
        if (JSON.stringify(canonicalState(weight, st)) !== JSON.stringify(canonicalState(weight, rp.state))) problems.push('weight ' + weight + ': state differs from a replay of its records');
        let decided = 0;
        KEYS.forEach(function (ks) {
          const m = matchOf(st, ks), id = byWeightKey.get(weight + '|' + ks), r = book.decisions.get(id);
          if (m.w) {
            decided++;
            if (!m.a || !m.b) problems.push('bout ' + id + ' is decided without both wrestlers');
            if (!r) problems.push('bout ' + id + ' is decided but has no record');
            else if (r.winnerId !== wrestlerId(weight, m[m.w])) problems.push('bout ' + id + ' record winner differs from the state');
          } else if (r) problems.push('bout ' + id + ' has a record but is not decided');
        });
        if (decided !== recs.length) problems.push('weight ' + weight + ': ' + decided + ' decided bouts but ' + recs.length + ' records');
      });
      book.decisions.forEach(function (r) {
        if (!locate(r.boutId)) problems.push('record for unknown bout ' + r.boutId);
        if (!TYPE_BY_CODE[r.resultType] && r.resultType !== null) problems.push('bout ' + r.boutId + ' has an unknown result type');
        if (!(Number.isInteger(r.revision) && r.revision >= 1)) problems.push('bout ' + r.boutId + ' has a bad revision');
      });
      return { ok: problems.length === 0, problems: problems };
    }

    return {
      version: '3A',
      keys: KEYS.slice(),
      selfCheck: selfCheck,
      locate: locate, boutIdOf: function (weight, ks) { return byWeightKey.get(weight + '|' + ks) || null; },
      routes: routes, dependentsOf: dependentsOf,
      legacyRef: legacyRef, legacyDocId: legacyDocId,
      newBook: newBook, describe: describe,
      record: record, preview: preview, clear: clear, correct: correct, editDetails: editDetails,
      toRecords: toRecords, fromRecords: fromRecords,
      checkInvariants: checkInvariants, canonicalState: canonicalState,
      _replayForTests: replay
    };
  }

  return { create: create, RESULT_TYPES: RESULT_TYPES, validateResult: validateResult, wrestlerId: wrestlerId };
});
