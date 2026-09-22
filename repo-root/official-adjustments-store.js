/* ============================================================================
   OFFICIAL ADJUSTMENTS STORE — reads the officialAdjustments collection into the plain map official-scoring.js expects:
   { school: { points, reason, recordedBy, revision } }. Pure: no DOM, no Firebase, no clock. One document per school; a
   document with points === 0 (an operator explicitly recorded "no adjustment needed") still creates an entry, so it stays
   distinguishable from "no adjustment was ever entered" (which is simply absent from the map and renders blank).
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialAdjustmentsStore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  function iso(v) { if (v && typeof v.toDate === 'function') { try { return v.toDate().toISOString(); } catch (e) { return null; } } return typeof v === 'string' ? v : null; }
  function isValid(d) { return !!d && typeof d === 'object' && typeof d.school === 'string' && d.school.trim() !== '' && typeof d.points === 'number' && isFinite(d.points); }

  // docs: array of plain objects (each optionally carrying __id, the Firestore document id)
  function build(docs) {
    docs = Array.isArray(docs) ? docs : [];
    var map = {}, invalid = [], duplicate = [];
    docs.forEach(function (d) {
      if (!isValid(d)) { invalid.push(d && d.__id); return; }
      var s = d.school.trim();
      if (map[s]) duplicate.push(s);                                   // two documents for the same school: keep the first, report it (should never happen; the doc id IS the school)
      else map[s] = { points: d.points, reason: typeof d.reason === 'string' ? d.reason : '', recordedBy: d.recordedBy || '', recordedAt: iso(d.recordedAt), revision: d.revision, __id: d.__id };
    });
    return { adjustments: map, info: { applied: Object.keys(map).length, invalid: invalid, duplicate: duplicate } };
  }

  return { build: build };
});
