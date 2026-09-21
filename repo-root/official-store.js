/* ============================================================================
   OFFICIAL STORE — Phase 3B (pure; no DOM, no Firebase)
   Turns the documents read from Firestore `officialResults` into an OFFICIAL book using the
   approved tournament-core.js.

   LEGACY DOCUMENTS ARE NEVER GUESSED.
   The old admin flow wrote slot-based documents (winnerSlot / winnerName / winnerSchool, no wrestler
   identity). A slot is not reliable across replays, and a name+school match would be a guess. So:
     • a document is applied ONLY if it carries an explicit string `winnerId` ("125-17");
     • every other document is counted and reported as "legacy" and is NOT applied;
     • `winnerSlot`, `winnerName` and `winnerSchool` are never read to decide who won.
   Identity documents that are invalid (no result type, winner not in the bout, unknown bout, duplicate…)
   are reported by the core and not applied.
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialStore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function iso(v) {                       // Firestore Timestamp -> ISO string; strings pass through
    if (v && typeof v.toDate === 'function') { try { return v.toDate().toISOString(); } catch (e) { return null; } }
    return typeof v === 'string' ? v : null;
  }
  function isIdentityDoc(d) { return !!d && typeof d === 'object' && typeof d.winnerId === 'string' && d.winnerId.trim() !== ''; }

  // core: a TournamentCore instance (create(engine)); docs: array of plain objects (optionally with __id)
  function build(core, docs) {
    docs = Array.isArray(docs) ? docs : [];
    const records = [], legacy = [], unreadable = [];
    docs.forEach(function (d) {
      if (!d || typeof d !== 'object' || Array.isArray(d)) { unreadable.push(null); return; }
      if (isIdentityDoc(d)) {
        records.push({
          boutId: d.boutId, weight: d.weight, winnerId: d.winnerId.trim(), loserId: d.loserId,
          resultType: d.resultType, score: d.score, time: d.time,
          recordedAt: iso(d.recordedAt), recordedBy: d.recordedBy, source: d.source, revision: d.revision
        });
      } else {
        legacy.push(d);
      }
    });
    const built = core.fromRecords(records);              // strict: no legacy option, nothing inferred
    const sample = legacy.slice(0, 25).map(function (d) {
      return { id: d.__id || null, weight: d.weight, bracket: d.bracket, round: d.round, roundIndex: d.roundIndex, matchIndex: d.matchIndex };
    });
    return {
      book: built.book,
      info: {
        docsRead: docs.length,
        identityDocs: records.length,
        applied: built.book.decisions.size,
        legacyIgnored: legacy.length,
        legacySample: sample,
        legacyIds: legacy.map(function (d) { return d.__id; }).filter(function (x) { return typeof x === 'string'; }),   // lets the recorder warn before replacing an older record
        unreadable: unreadable.length,
        problems: built.problems
      }
    };
  }

  return { build: build, isIdentityDoc: isIdentityDoc };
});
