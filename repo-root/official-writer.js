/* ============================================================================
   OFFICIAL WRITER — Phase 3C (pure; no DOM, no Firebase)
   Turns "record this result" into the two documents that must be written, WITHOUT touching the live book.

   • The request is validated by the approved tournament-core.js on a CLONE of the official book
     (winner really is in the bout, both wrestlers known, not already decided, result type required, …).
   • The result document reuses the existing officialResults document id scheme (weight_bracket_roundIndex_matchIndex)
     and carries BOTH the identity fields (winnerId/loserId — authoritative) and the legacy-compatible fields
     (winnerSlot/winnerName/winnerSchool/bracket/round/roundIndex/matchIndex) so the existing pick'em
     leaderboard code keeps reading these documents unchanged.
   • The caller (index.html) supplies `stamp` (a Firestore serverTimestamp sentinel) and performs the single
     atomic batch write. The live book changes only after the server confirms.
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialWriter = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function fail(code, message, extra) { return Object.assign({ ok: false, code: code, message: message }, extra); }

  function cloneBook(core, book) {
    const r = core.fromRecords(core.toRecords(book));
    return r.problems.length ? null : r.book;
  }

  // core: TournamentCore instance; book: the live OFFICIAL book (never modified here)
  // req: { boutId, winnerId, resultType, score, time }   ctx: { email, stamp }
  function buildRecordWrite(core, book, req, ctx) {
    req = req || {}; ctx = ctx || {};
    const email = typeof ctx.email === 'string' ? ctx.email.trim().toLowerCase() : '';
    if (!email) return fail('not_operator', 'Sign in as an authorized operator to record results.');
    const scratch = cloneBook(core, book);
    if (!scratch) return fail('internal', 'The official results on screen are inconsistent, so recording is switched off. Press Refresh.');

    const res = core.record(scratch, {
      boutId: req.boutId, winnerId: req.winnerId, resultType: req.resultType, score: req.score, time: req.time,
      recordedBy: email, source: 'central'
    });
    if (!res.ok) return res;                                   // { code, message, errors? } straight from the core

    const rec = res.record, d = core.describe(scratch, rec.boutId), lg = d.legacy;
    const winner = d.winnerSlot === 'a' ? d.a : d.b;
    const docId = core.legacyDocId(rec.weight, rec.key);

    const resultDoc = {
      boutId: rec.boutId, weight: rec.weight,
      bracket: lg.bracket, round: lg.round, roundIndex: lg.roundIndex, matchIndex: parseInt(rec.key.split(':')[2], 10),
      winnerId: rec.winnerId, loserId: rec.loserId,
      winnerSlot: d.winnerSlot, winnerName: winner.name, winnerSchool: winner.school,
      resultType: rec.resultType,
      recordedAt: ctx.stamp, recordedBy: email, source: 'central', revision: 1
    };
    if (rec.score) resultDoc.score = rec.score;
    if (rec.time) resultDoc.time = rec.time;

    const logDoc = {
      boutId: rec.boutId, weight: rec.weight, action: 'record', docId: docId,
      winnerId: rec.winnerId, loserId: rec.loserId, resultType: rec.resultType, revision: 1,
      by: email, at: ctx.stamp, source: 'central'
    };
    if (rec.score) logDoc.score = rec.score;
    if (rec.time) logDoc.time = rec.time;

    return { ok: true, docId: docId, resultDoc: resultDoc, logDoc: logDoc, record: rec, book: scratch, warnings: res.warnings || [] };
  }

  return { buildRecordWrite: buildRecordWrite };
});
