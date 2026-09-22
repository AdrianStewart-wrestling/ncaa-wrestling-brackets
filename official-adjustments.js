/* ============================================================================
   OFFICIAL TEAM ADJUSTMENTS — the operator write path (pure; no DOM, no Firebase). ONE document per school, keyed by a slug
   of the school name (docId). Never touches officialResults / officialLog / the bout-scoring engine: this is a strictly
   additive, team-level layer, applied on TOP of official-scoring.js's bout-derived total via its optional `adjustments`
   parameter. Deleting or never creating a team's adjustment leaves that team's score exactly as the bout results say.
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialAdjustments = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  function fail(code, message) { return { ok: false, code: code, message: message }; }
  function slug(school) { return String(school).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
  function validPoints(p) { return typeof p === 'number' && isFinite(p) && Math.round(p * 2) === p * 2 && Math.abs(p) <= 200; }   // halves only, a sane bound

  // req: { school, points, reason }. existing: the current stored doc for this school (or null/undefined if none).
  // ctx: { email, stamp() }. Returns the ONE document to write (create if none exists, update with revision+1 otherwise) + the audit-log entry.
  function planSet(req, existing, ctx) {
    var school = req && typeof req.school === 'string' ? req.school.trim() : '';
    if (!school) return fail('bad_school', 'A team is required.');
    if (!validPoints(req.points)) return fail('bad_points', 'Points must be a number in half-point steps, at most 200 in size.');
    var reason = typeof req.reason === 'string' ? req.reason.trim() : '';
    if (!reason) return fail('bad_reason', 'A reason is required for every adjustment (shown to anyone who looks).');
    if (!ctx || !ctx.email) return fail('not_operator', 'Sign in as an operator first.');
    var docId = slug(school); if (!docId) return fail('bad_school', 'That team name does not resolve to a valid id.');
    var revision = existing && typeof existing.revision === 'number' ? existing.revision + 1 : 1;
    var data = { school: school, points: req.points, reason: reason, recordedAt: ctx.stamp(), recordedBy: ctx.email, revision: revision };
    var log = { school: school, action: existing ? 'update' : 'create', points: req.points, previousPoints: existing ? existing.points : null, reason: reason, by: ctx.email, at: ctx.stamp() };
    return { ok: true, docId: docId, data: data, logDoc: log };
  }

  // Clearing a team's adjustment removes the document entirely (its score then comes ONLY from bout results, same as any team with none).
  function planClear(school, existing, ctx) {
    if (!existing) return fail('not_found', 'That team has no recorded adjustment.');
    if (!ctx || !ctx.email) return fail('not_operator', 'Sign in as an operator first.');
    var docId = slug(school);
    var log = { school: school, action: 'clear', points: null, previousPoints: existing.points, reason: '', by: ctx.email, at: ctx.stamp() };
    return { ok: true, docId: docId, logDoc: log };
  }

  return { planSet: planSet, planClear: planClear, slug: slug, validPoints: validPoints };
});
