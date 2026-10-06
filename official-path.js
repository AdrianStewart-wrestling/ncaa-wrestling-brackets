/* ============================================================================
   OFFICIAL PATH — "Path to the Finals": one wrestler's whole tournament, from the OFFICIAL book.
   Pure: no DOM, no Firebase, no clock, no randomness. NO routing logic of its own: it walks the bouts the ONE core already describes
   (core.describe) along the edges the ONE core already owns (core.routes). It works for EVERY wrestler in the field — the same code path for a
   champion, a placer, a 0-2 wrestler, a pigtail wrestler or anyone eliminated — because it never asks "did he place?" or "is he an All-American?":
   it only follows his bouts until they stop. Placement and All-American status are OPTIONAL extra information (opts.floors / opts.events) that
   can add a badge and a team-points line but can never change the journey, the opponents or the outcome.

   compute(core, book, wrestlerId, opts) -> {
     ok, wrestler:{id,name,school,seed,record,weight}, journey:[ row ], next: {...}|null, outcome:{code,label,place,...}, points, aa, problems }
       row = { boutId, key, round, bracket, status:'decided'|'pending'|'waiting', result:'W'|'L'|null, opponent|null, resultType, method, score, time, points }
       outcome.code: 'champion' | 'placed' | 'eliminated' | 'competing'
   opts (all optional): { events: scoring events (official-scoring.js), floors: { wrestlerId: guaranteed place } }
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialPath = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var CHAMP = ['R32', 'R16', 'QF', 'SF', 'FINAL'];
  var CON = ['Con R1', 'Con R2', 'Con R3', 'Blood Round', 'Con QF', 'Con SF'];
  var METHOD = { Dec: 'Dec', MajDec: 'MD', TechFall: 'TF', Fall: 'Fall', MedFFT: 'Med FF', FFT: 'FF', DQ: 'DQ', Default: 'Def' };
  // The four bouts that END a wrestler's tournament with a finish: [place if he wins, place if he loses]. (Everything else either continues or eliminates.)
  var FINISH = { 'champ:4:0': [1, 2], 'p3:0:0': [3, 4], 'p5:0:0': [5, 6], 'p7:0:0': [7, 8] };

  function roundLabel(key) {
    var p = String(key || '').split(':'), b = p[0], ri = parseInt(p[1], 10);
    if (b === 'pigtail') return 'Pigtail';
    if (b === 'conPigtail') return 'Con Pigtail';
    if (b === 'p3') return '3rd Place';
    if (b === 'p5') return '5th Place';
    if (b === 'p7') return '7th Place';
    if (b === 'champ' && CHAMP[ri]) return CHAMP[ri];
    if (b === 'con' && CON[ri]) return CON[ri];
    return String(key);
  }
  function labelFor(core, key) { var x = core && typeof core.roundLabel === 'function' ? core.roundLabel(key) : null; return x || roundLabel(key); }   // optional core hook (1990-1995 wrestleback); every other core -> roundLabel
  function methodFor(core, key, res) { var x = core && typeof core.methodLabel === 'function' ? core.methodLabel(key, res) : null; return x || METHOD[res.resultType] || ''; }   // optional core hook (1976-1987 'Sup. Dec.'); every other core -> METHOD
  function bracketOf(key) { var b = String(key).split(':')[0]; return b === 'champ' || b === 'pigtail' ? 'championship' : b === 'con' || b === 'conPigtail' ? 'consolation' : 'placement'; }
  function ordinal(n) { return n === 1 ? '1st' : n === 2 ? '2nd' : n === 3 ? '3rd' : n + 'th'; }
  function fail(code, message) { return { ok: false, code: code, message: message }; }
  function person(w) { return w ? { id: w.id, name: String(w.name || '').trim(), school: String(w.school || '').trim(), seed: w.seed, record: w.record || '' } : null; }

  function compute(core, book, wrestlerId, opts) {
    opts = opts || {};
    var m = /^(\d{3})-(\d{2})$/.exec(String(wrestlerId));
    if (!m) return fail('bad_id', 'Not a wrestler id.');
    var weight = parseInt(m[1], 10), ids = [], descs = {}, first = null, problems = [];
    core.keys.forEach(function (k) { var b = core.boutIdOf(weight, k); if (b) ids.push(b); });
    if (!ids.length) return fail('unknown_weight', 'No bouts for weight ' + weight + '.');
    ids.sort(function (a, b) { return a - b; });
    ids.forEach(function (b) {
      var d = core.describe(book, b); descs[b] = d;
      if (first === null && d && ((d.a && d.a.id === wrestlerId) || (d.b && d.b.id === wrestlerId))) first = b;
    });
    if (first === null) return fail('unknown_wrestler', 'That wrestler is not in the field.');

    var events = Array.isArray(opts.events) ? opts.events : null;
    function pointsFor(boutId) {
      if (!events) return null;
      return events.reduce(function (a, e) { return e.wrestlerId === wrestlerId && e.boutId === boutId ? a + e.points : a; }, 0);
    }
    function isMe(w) { return !!w && w.id === wrestlerId; }

    // ---- follow his bouts along the core's own routes until they stop
    var rows = [], cur = first, guard = 0, terminal = null, me = null;
    while (cur !== null && cur !== undefined && guard++ < 24) {
      var d = descs[cur]; if (!d) break;
      var mine = isMe(d.a) ? d.a : isMe(d.b) ? d.b : null;
      if (!mine) { problems.push('bout ' + cur + ' does not contain him'); break; }
      if (!me) me = mine;
      var opp = isMe(d.a) ? d.b : d.a, decided = d.status === 'decided', won = decided && d.winnerId === wrestlerId;
      var res = d.result || null;
      rows.push({
        boutId: cur, key: d.key, round: labelFor(core, d.key), bracket: bracketOf(d.key), status: d.status,
        result: decided ? (won ? 'W' : 'L') : null, opponent: person(opp),
        resultType: decided && res ? res.resultType : null, method: decided && res ? methodFor(core, d.key, res) : '',
        score: decided && res ? (res.score || '') : '', time: decided && res ? (res.time || '') : '', points: pointsFor(cur)
      });
      if (!decided) break;
      var r = core.routes(cur), nxt = won ? r.winnerTo : r.loserTo;
      if (nxt === null || nxt === undefined) { terminal = { boutId: cur, key: d.key, won: won, champion: won && !!r.winnerIsChampion }; break; }
      cur = nxt;
    }
    if (!me) return fail('unknown_wrestler', 'That wrestler is not in the field.');

    // ---- outcome
    var last = rows[rows.length - 1], outcome;
    if (terminal) {
      var fin = FINISH[terminal.key];
      if (terminal.champion) outcome = { code: 'champion', place: 1, label: 'NCAA Champion', round: last.round };
      else if (fin) { var pl = terminal.won ? fin[0] : fin[1]; outcome = { code: 'placed', place: pl, label: 'Finished ' + ordinal(pl), round: last.round }; }
      else if (!terminal.won) outcome = { code: 'eliminated', place: null, label: 'Eliminated in ' + last.round, round: last.round };
      else { outcome = { code: 'competing', place: null, label: 'Competing', round: last.round }; problems.push('a win ended his path at ' + last.round); }
    } else outcome = { code: 'competing', place: null, label: last.status === 'pending' ? 'Competing — bout ready' : 'Competing — waiting for an opponent', round: last.round };

    // ---- what is next (only while he is still in the tournament)
    var next = null;
    if (!terminal && (last.status === 'pending' || last.status === 'waiting')) {
      var rt = core.routes(last.boutId), destOf = function (b, kind) {
        if (kind === 'win' && rt.winnerIsChampion) return { kind: 'champion', label: 'NCAA Champion' };
        var to = kind === 'win' ? rt.winnerTo : rt.loserTo, fin2 = FINISH[last.key];
        if (to !== null && to !== undefined) return { kind: 'advance', boutId: to, round: labelFor(core, core.locate(to).key), label: (kind === 'win' ? 'Advances to ' : 'Drops to ') + labelFor(core, core.locate(to).key) };
        if (fin2) return { kind: 'finish', place: fin2[kind === 'win' ? 0 : 1], label: 'Finishes ' + ordinal(fin2[kind === 'win' ? 0 : 1]) };
        return { kind: 'eliminated', label: 'Eliminated' };
      };
      next = { boutId: last.boutId, round: last.round, status: last.status, opponent: last.opponent, waitingOn: null, ifWin: destOf(last.boutId, 'win'), ifLose: destOf(last.boutId, 'lose') };
      if (last.status === 'waiting') {                                             // who will he meet? the bout that feeds the empty slot
        var prev = rows.length > 1 ? rows[rows.length - 2].boutId : null;
        var feeders = ids.filter(function (b) { if (b === prev || b === last.boutId) return false; var q = core.routes(b); return q.winnerTo === last.boutId || q.loserTo === last.boutId; });
        next.waitingOn = feeders.map(function (b) {
          var fd = descs[b], q = core.routes(b);
          return { boutId: b, round: labelFor(core, fd.key), via: q.winnerTo === last.boutId ? 'winner' : 'loser', status: fd.status, a: person(fd.a), b: person(fd.b) };
        });
      }
    }

    // ---- team points earned (optional): what this wrestler has earned for his school
    var pts = null;
    if (events) {
      pts = { adv: 0, bonus: 0, place: 0, total: 0 };
      events.forEach(function (e) { if (e.wrestlerId !== wrestlerId) return; if (e.category === 'Advancement') pts.adv += e.points; else if (e.category === 'Bonus') pts.bonus += e.points; else pts.place += e.points; pts.total += e.points; });
    }
    var floors = opts.floors || null;
    return {
      ok: true, wrestler: Object.assign(person(me), { weight: weight }), journey: rows, next: next, outcome: outcome, points: pts,
      aa: floors ? (floors[wrestlerId] !== undefined && floors[wrestlerId] <= 8) : null, problems: problems
    };
  }



  // ---- forward-looking championship road ---------------------------------
  // Pure/read-only. For each championship bout on this wrestler's winner path,
  // show the wrestlers who can still emerge from the OPPOSITE branch. This is
  // deliberately derived from core.describe() + core.routes(); there is no
  // second NCAA routing table here. As OFFICIAL results arrive, decided feeder
  // bouts collapse to their winner automatically, so the list narrows live.
  function project(core, book, wrestlerId) {
    var base = compute(core, book, wrestlerId, {});
    if (!base.ok) return base;
    var weight = base.wrestler.weight, ids = [], descs = {}, incoming = {};
    core.keys.forEach(function (k) { var id = core.boutIdOf(weight, k); if (id) ids.push(id); });
    ids.forEach(function (id) { descs[id] = core.describe(book, id); incoming[id] = []; });
    ids.forEach(function (id) {
      var r = core.routes(id);
      if (r && r.winnerTo !== null && r.winnerTo !== undefined && incoming[r.winnerTo]) incoming[r.winnerTo].push(id);
    });

    function champLike(id) {
      var d = descs[id], b = d && String(d.key || '').split(':')[0];
      return b === 'champ' || b === 'pigtail';
    }
    function uniqPeople(list) {
      var seen = {}, out = [];
      (list || []).forEach(function (p) { if (p && p.id && !seen[p.id]) { seen[p.id] = true; out.push(person(p)); } });
      out.sort(function (a, b) { return (+a.seed || 99) - (+b.seed || 99); });
      return out;
    }
    var memo = {};
    function possibleWinners(id, guard) {
      guard = guard || 0; if (guard > 12 || !descs[id]) return [];
      if (memo[id]) return memo[id].slice();
      var d = descs[id];
      if (d.status === 'decided' && d.winnerId) {
        var w = d.a && d.a.id === d.winnerId ? d.a : d.b && d.b.id === d.winnerId ? d.b : null;
        memo[id] = uniqPeople([w]); return memo[id].slice();
      }
      var all = [];
      if (d.a) all.push(d.a); if (d.b) all.push(d.b);
      (incoming[id] || []).forEach(function (f) { if (champLike(f)) all = all.concat(possibleWinners(f, guard + 1)); });
      memo[id] = uniqPeople(all); return memo[id].slice();
    }
    function sameSet(a, b) {
      var aa = a.map(function (x) { return x.id; }).sort().join('|');
      var bb = b.map(function (x) { return x.id; }).sort().join('|');
      return aa === bb;
    }
    function branches(id) {
      var d = descs[id], out = [];
      // Feeder winners are the natural branches for later rounds.
      (incoming[id] || []).forEach(function (f) { if (champLike(f)) { var q = possibleWinners(f); if (q.length) out.push(q); } });
      // R32/direct seeded slots (and the direct side opposite a pigtail feeder).
      [d.a, d.b].forEach(function (p) {
        if (!p) return;
        var already = out.some(function (q) { return q.some(function (x) { return x.id === p.id; }); });
        if (!already) out.push([person(p)]);
      });
      // Avoid duplicate branches after a feeder has already resolved into a slot.
      return out.filter(function (q, i) { return !out.slice(0, i).some(function (z) { return sameSet(q, z); }); });
    }

    // Once he loses on the championship side, there is no longer a road to the final.
    var champRows = base.journey.filter(function (r) { return r.bracket === 'championship'; });
    var champLoss = champRows.some(function (r) { return r.status === 'decided' && r.result === 'L'; });
    if (champLoss) return { ok: true, wrestler: base.wrestler, active: false, reason: 'Dropped to the consolation bracket', rounds: [] };
    if (base.outcome && base.outcome.code === 'champion') return { ok: true, wrestler: base.wrestler, active: false, complete: true, reason: 'NCAA Champion', rounds: [] };

    // Start with his current/last championship bout, then follow winnerTo to the title.
    var start = champRows.length ? champRows[champRows.length - 1].boutId : null;
    if (start === null) return { ok: true, wrestler: base.wrestler, active: false, reason: 'No championship path available', rounds: [] };
    var sd = descs[start];
    if (sd && sd.status === 'decided' && sd.winnerId === wrestlerId) {
      var sr = core.routes(start); if (sr && sr.winnerTo !== null && sr.winnerTo !== undefined) start = sr.winnerTo;
      else return { ok: true, wrestler: base.wrestler, active: false, complete: true, reason: 'NCAA Champion', rounds: [] };
    }

    var rounds = [], cur = start, guard = 0;
    while (cur !== null && cur !== undefined && guard++ < 8 && descs[cur] && champLike(cur)) {
      var d = descs[cur], bs = branches(cur), mine = -1;
      bs.forEach(function (q, i) { if (mine < 0 && q.some(function (x) { return x.id === wrestlerId; })) mine = i; });
      // For a future round, his feeder branch contains him among several possible winners.
      // If the current state has not propagated him there yet, find that branch recursively.
      if (mine < 0) {
        bs.forEach(function (q, i) { if (mine < 0 && q.some(function (x) { return x.id === wrestlerId; })) mine = i; });
      }
      var opp = [];
      bs.forEach(function (q, i) { if (i !== mine) opp = opp.concat(q); });
      opp = uniqPeople(opp).filter(function (x) { return x.id !== wrestlerId; });
      rounds.push({ boutId: cur, key: d.key, round: labelFor(core, d.key), status: d.status, opponents: opp });
      var rt = core.routes(cur);
      if (!rt || rt.winnerIsChampion || rt.winnerTo === null || rt.winnerTo === undefined) break;
      cur = rt.winnerTo;
    }
    return { ok: true, wrestler: base.wrestler, active: true, rounds: rounds };
  }

  return { compute: compute, project: project, roundLabel: roundLabel, ordinal: ordinal, FINISH: FINISH };
});
