/* ============================================================================
   OFFICIAL IMPORT — one-time transfer of a complete set of results (the workbook) into officialResults.
   Pure orchestration: NO DOM, NO Firebase. Every side effect is an injected function (read the server, commit one batch), so the
   whole thing is testable against a fake Firestore that enforces the rules.

   It adds NO new routing / dependency / scoring logic and NO new document builder:
     • the tournament is validated by replaying every result through the ONE core (tournament-core.js);
     • every result document + audit-log entry is built by official-writer.js (buildRecordWrite / planChange) — the same code the
       Record / Correct buttons use — then re-tagged source 'workbook-import';
     • the result is read back through official-store.js and scored by official-scoring.js.

   Safety properties (each is tested):
     • ANALYZE is read-only. It classifies each bout: create · replace an older record · correct an identity record · skip (identical)
       · blocked (an identity record with a DIFFERENT winner is never overwritten).
     • Each older record's winner (name + school) is compared with the workbook's winner: agree / DISAGREE / unverifiable.
     • RUN writes in ascending bout order in small atomic batches, so a stop at ANY point leaves a valid partial state and re-running
       resumes (identical bouts are skipped). Batches stay under Firestore's 20 rules-lookups-per-batch limit.
     • VERIFY re-reads the server and requires "nothing left to do" + a clean store build + the expected totals.
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialImport = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var BATCH_BOUTS = 8;                       // 8 bouts = 16 writes (result + audit log each) — under the 20-lookup limit even if repeated lookups are not de-duplicated
  var SOURCE = 'workbook-import';
  var NO_SCORE = { Fall: 1, MedFFT: 1, FFT: 1, DQ: 1 };

  /* ------------------------------------------------------------ score notation */
  // The core wants "W-L" (winner first, winner ahead) plus an optional short note ("SV", "TB1", "SV-1"). Workbooks often write the tag first.
  // Only reorders; a score that cannot be expressed (tied regulation score) is dropped rather than invented.
  var CORE_SCORE = /^(\d{1,3})\s*-\s*(\d{1,3})(?:\s+([A-Za-z0-9][A-Za-z0-9 \-]{0,11}))?$/;
  function coreAccepts(s) { var m = CORE_SCORE.exec(s); return !!m && parseInt(m[1], 10) > parseInt(m[2], 10); }
  function normalizeScore(type, raw) {
    var o = raw == null ? '' : String(raw).trim(); if (o === 'None') o = '';
    if (!o) return { score: '', changed: false, dropped: false, original: '' };
    if (NO_SCORE[type]) return { score: '', changed: true, dropped: true, original: o };
    if (coreAccepts(o)) return { score: o, changed: false, dropped: false, original: o };
    var m = /^(SV|TB)\s*-?\s*(\d*)\s*,?\s*(\d{1,3}-\d{1,3})$/i.exec(o);                       // "SV 4-1", "SV1 4-1", "TB1, 4-1", "TB 2-1"
    if (m) { var fixed = m[3] + ' ' + m[1].toUpperCase() + m[2]; if (coreAccepts(fixed)) return { score: fixed, changed: true, dropped: false, original: o }; }
    return { score: '', changed: true, dropped: true, original: o };
  }

  function norm(s) { return String(s == null ? '' : s).toLowerCase().replace(/[^a-z0-9]+/g, ''); }    // "Grant O`Dell " == "Grant O'Dell"
  function isModern(d) { return !!d && typeof d.winnerId === 'string' && d.winnerId.trim() !== ''; }
  function fingerprint(decisions) {                                                                  // FNV-1a over the decisions, shown to the operator
    var h = 2166136261, s = JSON.stringify(decisions.map(function (x) { return [x.boutId, x.winnerId, x.loserId, x.resultType, x.score || '']; }));
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return ('00000000' + h.toString(16)).slice(-8);
  }
  function toDecisions(data) {                                                                       // compact [b,w,l,t,s] arrays or objects
    return (data || []).map(function (x) { return Array.isArray(x) ? { boutId: x[0], winnerId: x[1], loserId: x[2], resultType: x[3], score: x[4] || '' } : { boutId: x.boutId, winnerId: x.winnerId, loserId: x.loserId, resultType: x.resultType, score: x.score || '' }; })
      .sort(function (a, b) { return a.boutId - b.boutId; });
  }

  function create(deps) {
    var core = deps.core, Store = deps.store, Writer = deps.writer, Scoring = deps.scoring;

    /* -------------------------------------------------------------- analyze (read-only) */
    // input: { decisions, docs: [{ id, data }], nameOf(id), schoolOf(id) }
    function analyze(input) {
      var decisions = toDecisions(input.decisions), docs = input.docs || [], problems = [], items = [];
      // 1. the data itself must be a legal complete tournament (replayed through the ONE core, strict)
      var seen = {}, dupe = 0; decisions.forEach(function (d) { if (seen[d.boutId]) dupe++; seen[d.boutId] = 1; });
      if (decisions.length !== 640 || dupe) problems.push({ code: 'data_count', message: 'Expected 640 distinct results, found ' + decisions.length + (dupe ? ' (' + dupe + ' duplicates)' : '') + '.' });
      var book = core.newBook();
      decisions.forEach(function (d) {
        var r = core.record(book, { boutId: d.boutId, winnerId: d.winnerId, resultType: d.resultType, score: d.score, time: '' });
        if (!r.ok) { problems.push({ boutId: d.boutId, code: 'data_refused', message: 'Bout ' + d.boutId + ': ' + (r.message || r.code) }); return; }
        var rec = core.toRecords(book).filter(function (x) { return x.boutId === d.boutId; })[0];
        if (rec && rec.loserId !== d.loserId) problems.push({ boutId: d.boutId, code: 'loser_mismatch', message: 'Bout ' + d.boutId + ': the workbook loser is not the other wrestler.' });
      });
      var dataOk = problems.length === 0;

      // 2. compare with what is stored now
      var byId = {}; docs.forEach(function (d) { if (d && typeof d.id === 'string') byId[d.id] = d.data || {}; });
      var expectedIds = {}, counts = { create: 0, replace: 0, correct: 0, skip: 0, blocked: 0, agree: 0, disagree: 0, unverifiable: 0 }, disagreements = [];
      decisions.forEach(function (d) {
        var loc = core.locate(d.boutId); if (!loc) { problems.push({ boutId: d.boutId, code: 'unknown_bout', message: 'Bout ' + d.boutId + ' does not exist.' }); return; }
        var docId = core.legacyDocId(loc.weight, loc.key); expectedIds[docId] = 1;
        var ex = byId[docId], item = { boutId: d.boutId, weight: loc.weight, docId: docId, existing: 'none', check: 'n/a', action: 'create' };
        if (ex !== undefined && isModern(ex)) {
          item.existing = 'modern';
          if (String(ex.winnerId).trim() !== d.winnerId) { item.action = 'blocked'; item.reason = 'An identity result with a DIFFERENT winner already exists; it is never overwritten by the import.'; }
          else if (ex.resultType === d.resultType && (ex.score || '') === (d.score || '') && (ex.time || '') === '') item.action = 'skip';
          else item.action = 'correct';
        } else if (ex !== undefined) {
          item.existing = 'legacy'; item.action = 'replace';
          var nm = ex.winnerName, sc = ex.winnerSchool;
          if (typeof nm !== 'string' || typeof sc !== 'string' || !nm.trim() || !sc.trim()) item.check = 'unverifiable';
          else if (norm(nm) === norm(input.nameOf(d.winnerId)) && norm(sc) === norm(input.schoolOf(d.winnerId))) item.check = 'agree';
          else {
            item.check = 'disagree';
            disagreements.push({ boutId: d.boutId, weight: loc.weight, round: ex.round || '', workbook: { id: d.winnerId, name: input.nameOf(d.winnerId), school: input.schoolOf(d.winnerId) }, existing: { name: nm.trim(), school: sc.trim(), slot: ex.winnerSlot || '' } });
          }
        }
        counts[item.action]++; if (item.check !== 'n/a') counts[item.check]++;
        items.push(item);
      });
      var extras = Object.keys(byId).filter(function (id) { return !expectedIds[id]; });
      var blocking = !dataOk || counts.blocked > 0;
      return {
        ok: true, dataOk: dataOk, blocking: blocking, needsAck: counts.disagree > 0, problems: problems, items: items, disagreements: disagreements, extras: extras,
        summary: Object.assign({ bouts: decisions.length, extras: extras.length, existingDocs: docs.length, fingerprint: fingerprint(decisions) }, counts)
      };
    }

    /* ---------------------------------------------------------------- run (writes) */
    // input: analyze's input + { email, stamp(), commitBatch(ops), readServerDocs(), ack: { backup, disagreements }, onProgress(p), batchBouts, expected }
    function run(input) {
      var email = String(input.email || '').trim().toLowerCase(), batchBouts = input.batchBouts || BATCH_BOUTS;
      function refuse(code, message, extra) { return Object.assign({ ok: false, code: code, message: message }, extra || {}); }
      if (!email) return Promise.resolve(refuse('not_operator', 'Sign in as an authorized operator first.'));
      var plan = analyze(input);
      if (plan.blocking) return Promise.resolve(refuse('blocked', 'The import is blocked: ' + (plan.problems[0] ? plan.problems[0].message : plan.summary.blocked + ' bout(s) already have a different winner.'), { plan: plan }));
      if (!input.ack || !input.ack.backup) return Promise.resolve(refuse('no_backup', 'Download the backup first.', { plan: plan }));
      if (plan.needsAck && !input.ack.disagreements) return Promise.resolve(refuse('needs_ack', plan.summary.disagree + ' older record(s) name a different winner than the workbook. Review them and confirm.', { plan: plan }));

      var seed = Store.build(core, (input.docs || []).map(function (d) { return Object.assign({ __id: d.id }, d.data); }));
      if (seed.info.problems && seed.info.problems.length) return Promise.resolve(refuse('existing_inconsistent', 'The identity results already stored are inconsistent; the import will not build on them.', { plan: plan }));
      var book = seed.book, byBout = {}; plan.items.forEach(function (i) { byBout[i.boutId] = i; });
      var groups = [], cur = [], cnt = 0;
      var decisions = toDecisions(input.decisions);
      for (var k = 0; k < decisions.length; k++) {
        var d = decisions[k], item = byBout[d.boutId];
        if (item.action === 'skip') continue;
        var req = { boutId: d.boutId, winnerId: d.winnerId, resultType: d.resultType, score: d.score, time: '' }, ctx = { email: email, stamp: input.stamp() }, made;
        if (item.action === 'correct') {
          made = Writer.planChange(core, book, Object.assign({ action: 'correct' }, req), ctx);
          if (!made.ok) return Promise.resolve(refuse('plan_failed', 'Bout ' + d.boutId + ': ' + (made.message || made.code), { plan: plan }));
          var set = made.ops.filter(function (o) { return o.type === 'set'; });
          if (made.ops.length !== 1 || set.length !== 1) return Promise.resolve(refuse('plan_failed', 'Bout ' + d.boutId + ': the correction would touch other results; refusing.', { plan: plan }));
          set[0].data.source = SOURCE; made.logDoc.source = SOURCE;
          cur.push({ kind: 'result', docId: set[0].docId, data: set[0].data }, { kind: 'log', data: made.logDoc });
        } else {
          made = Writer.buildRecordWrite(core, book, req, ctx);
          if (!made.ok) return Promise.resolve(refuse('plan_failed', 'Bout ' + d.boutId + ': ' + (made.message || made.code), { plan: plan }));
          made.resultDoc.source = SOURCE; made.logDoc.source = SOURCE;
          cur.push({ kind: 'result', docId: made.docId, data: made.resultDoc }, { kind: 'log', data: made.logDoc });
        }
        book = made.book; cnt++;
        if (cnt % batchBouts === 0) { groups.push({ ops: cur, bouts: batchBouts }); cur = []; }
      }
      if (cur.length) groups.push({ ops: cur, bouts: cnt % batchBouts || batchBouts });
      var totalBouts = cnt, done = 0;
      // commit one batch at a time, in ascending bout order: every prefix is a valid book, so a stop anywhere is safe and resumable
      return groups.reduce(function (p, g, gi) {
        return p.then(function (state) {
          if (state.failed) return state;
          return Promise.resolve().then(function () { return input.commitBatch(g.ops); }).then(function () {
            done += g.bouts; if (input.onProgress) input.onProgress({ done: done, total: totalBouts, batch: gi + 1, batches: groups.length });
            return state;
          }, function (err) { return { failed: true, error: err, batch: gi + 1 }; });
        });
      }, Promise.resolve({ failed: false })).then(function (state) {
        if (state.failed) return refuse('batch_failed', 'Batch ' + state.batch + ' of ' + groups.length + ' was refused. Nothing in that batch was written; ' + done + ' of ' + totalBouts + ' results were written before it. Fix the cause and run the import again: it resumes where it stopped.', { written: done, total: totalBouts, error: String((state.error && state.error.message) || state.error), errorCode: state.error && state.error.code, plan: plan });
        return verify(input).then(function (v) { return { ok: v.ok, written: done, total: totalBouts, batches: groups.length, verify: v, plan: plan }; });
      });
    }

    /* -------------------------------------------------------------- verify (read-only) */
    function verify(input) {
      return Promise.resolve(input.readServerDocs()).then(function (docs) {
        var plan = analyze(Object.assign({}, input, { docs: docs })), issues = [];
        if (plan.blocking) issues.push('The stored results still conflict with the workbook.');
        ['create', 'replace', 'correct'].forEach(function (a) { if (plan.summary[a]) issues.push(plan.summary[a] + ' bout(s) still need to be ' + (a === 'create' ? 'written' : a === 'replace' ? 'converted' : 'corrected') + '.'); });
        if (plan.summary.skip !== 640) issues.push('Only ' + plan.summary.skip + ' of 640 stored results match the workbook.');
        var built = Store.build(core, docs.map(function (d) { return Object.assign({ __id: d.id }, d.data); }));
        if (built.info.applied !== 640) issues.push('The site applies ' + built.info.applied + ' of 640 results.');
        if (built.info.legacyIgnored) issues.push(built.info.legacyIgnored + ' older record(s) remain.');
        if (built.info.problems && built.info.problems.length) issues.push(built.info.problems.length + ' stored result(s) could not be applied.');
        var totals = null;
        if (Scoring && input.schoolOf) {
          var res = Scoring.compute(core.toRecords(built.book), { bonusOf: input.bonusOf, schoolOf: input.schoolOf });
          totals = { teams: res.teams.length, total: res.teams.reduce(function (a, t) { return a + t.total; }, 0), aa: res.teams.reduce(function (a, t) { return a + t.aa; }, 0), problems: res.problems.length };
          if (totals.problems) issues.push(totals.problems + ' result(s) could not be scored.');
          var ex = input.expected;
          if (ex && (ex.teams !== totals.teams || ex.totalPoints !== totals.total || ex.allAmericans !== totals.aa)) issues.push('Team-score totals differ from the workbook (' + totals.teams + ' teams, ' + totals.total + ' points, ' + totals.aa + ' AA).');
        }
        return { ok: issues.length === 0, issues: issues, applied: built.info.applied, totals: totals, summary: plan.summary };
      });
    }

    return { analyze: analyze, run: run, verify: verify, BATCH_BOUTS: BATCH_BOUTS };
  }

  return { create: create, normalizeScore: normalizeScore, fingerprint: fingerprint, toDecisions: toDecisions, norm: norm, BATCH_BOUTS: BATCH_BOUTS, SOURCE: SOURCE };
});
