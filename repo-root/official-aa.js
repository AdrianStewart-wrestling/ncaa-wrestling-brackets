/* ============================================================================
   OFFICIAL ALL-AMERICANS — who has CLINCHED a top-8 finish, weight by weight, from the OFFICIAL book. Pure: no DOM, no Firebase, no clock.
   No routing logic of its own:
     • WHO is an All-American = the scoring model's guaranteed-finish data (floors): a wrestler whose worst possible finish is already 8th or
       better (a championship-quarterfinal or blood-round win clinches it; the semifinal / consolation rounds improve the guarantee).
     • Is his PLACE final? That is the Path model's question (his tournament is over: champion / finished 2nd..8th); otherwise he is "clinched".
   compute(core, book, { weights, floors, path }) -> {
     ok, weights: [{ weight, wrestlers: [ row ], final, clinched, open }], totals: { clinched, final, of }, teams: [{ school, aa, rank, rankLabel }], problems }
       row = { state: 'final'|'clinched'|'open', id, name, school, seed, place (final only), floor, hint }
   Rows are ordered: final places 1..8 first, then clinched-but-unplaced by strongest guarantee, then TBD slots up to 8.
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialAA = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SLOTS = 8;
  function ordinal(n) { return n === 1 ? '1st' : n === 2 ? '2nd' : n === 3 ? '3rd' : n + 'th'; }
  function hintFor(floor) { return floor >= 8 ? 'Top 8 clinched' : ordinal(floor) + ' or better'; }
  function cmp(a, b) { return a < b ? -1 : a > b ? 1 : 0; }

  function compute(core, book, opts) {
    opts = opts || {};
    var weights = opts.weights, floors = opts.floors, PATH = opts.path;
    if (!Array.isArray(weights) || !floors || !PATH || typeof PATH.compute !== 'function') return { ok: false, code: 'bad_input', message: 'weights, floors and the path model are required.' };
    var problems = [], byWeight = {}, out = [];
    weights.forEach(function (w) { byWeight[w] = []; });
    Object.keys(floors).forEach(function (id) {
      var f = floors[id]; if (!(f <= 8)) return;                                   // clinched top 8
      var w = parseInt(String(id).split('-')[0], 10); if (!byWeight[w]) return;
      var p = PATH.compute(core, book, id, {});                                    // placement / All-American data deliberately NOT passed: only his bouts decide "final"
      if (!p.ok) { problems.push(id + ': ' + (p.message || p.code)); return; }
      var fin = p.outcome.code === 'champion' || p.outcome.code === 'placed';
      if (p.outcome.code === 'eliminated') problems.push(id + ': eliminated but has a top-8 guarantee');
      byWeight[w].push({ state: fin ? 'final' : 'clinched', id: id, name: p.wrestler.name, school: p.wrestler.school, seed: p.wrestler.seed, place: fin ? p.outcome.place : null, floor: f, hint: fin ? '' : hintFor(f) });
    });
    var totals = { clinched: 0, final: 0, of: SLOTS * weights.length }, bySchool = {};
    weights.forEach(function (w) {
      var rows = byWeight[w].sort(function (a, b) {
        if (a.state !== b.state) return a.state === 'final' ? -1 : 1;
        if (a.state === 'final') return (a.place - b.place) || cmp(a.id, b.id);
        return (a.floor - b.floor) || (a.seed - b.seed) || cmp(a.name, b.name);
      });
      if (rows.length > SLOTS) problems.push('weight ' + w + ': ' + rows.length + ' wrestlers with a top-8 guarantee');
      var fin = rows.filter(function (r) { return r.state === 'final'; }).length;
      var places = rows.filter(function (r) { return r.state === 'final'; }).map(function (r) { return r.place; });
      if (new Set(places).size !== places.length) problems.push('weight ' + w + ': two wrestlers share a final place');
      rows.forEach(function (r) { bySchool[r.school] = (bySchool[r.school] || 0) + 1; });
      var open = Math.max(0, SLOTS - rows.length), padded = rows.slice(0, SLOTS);
      for (var i = 0; i < open; i++) padded.push({ state: 'open', id: null, name: '', school: '', seed: null, place: null, floor: null, hint: '' });
      totals.clinched += rows.length; totals.final += fin;
      out.push({ weight: w, wrestlers: padded, final: fin, clinched: rows.length - fin, open: open });
    });
    var teams = Object.keys(bySchool).map(function (s) { return { school: s, aa: bySchool[s] }; }).sort(function (a, b) { return (b.aa - a.aa) || cmp(a.school, b.school); });
    teams.forEach(function (t) { t.rank = 1 + teams.filter(function (o) { return o.aa > t.aa; }).length; t.rankLabel = teams.some(function (o) { return o !== t && o.aa === t.aa; }) ? 'T-' + t.rank : String(t.rank); });
    return { ok: true, weights: out, totals: totals, teams: teams, problems: problems };
  }

  return { compute: compute, hintFor: hintFor, SLOTS: SLOTS };
});
