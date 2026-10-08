// Headless replay of a historical year through the REAL Tournament Central files (no browser, no Firebase).
// Loads the same scripts the page loads, defines BoutModel exactly as index.html does, then mirrors
// historical-mode.js buildYear() and index.html historicalScoresModel().
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = process.env.ROOT || __dirname;
global.window = global; global.self = global;
function load(f) { vm.runInThisContext(fs.readFileSync(path.join(ROOT, f), 'utf8').replace(/^const (\w+) =/m, 'var $1 ='), { filename: f }); }
['tournament-core.js'].forEach(load);
// BoutModel: copied from index.html (lines 836-873)
{ const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const a = src.indexOf('const WEIGHT_ORDER = [125'), b = src.indexOf('// Round mapping (matches the click UI');
  vm.runInThisContext(src.slice(a, b).replace('const WEIGHT_ORDER', 'var WEIGHT_ORDER')); }
['historical-seeds.js', 'historical-core.js', 'historical-adapter.js', 'historical-state-builder.js', 'historical-rules.js', 'historical-adjustments.js', 'official-scoring.js'].forEach(load);
{ const m = fs.readFileSync(path.join(ROOT, 'historical-mode.js'), 'utf8'); vm.runInThisContext(m.slice(0, m.indexOf('const HistoryMode = (function')).replace('const HistoricalWeights', 'var HistoricalWeights')); }
if (!global.OfficialScoring) global.OfficialScoring = require(path.join(ROOT, 'official-scoring.js'));
const bonusOfResult = code => { const t = (TournamentCore.RESULT_TYPES || []).find(x => x.code === code); return t ? t.bonus : undefined; };

function readData(year) {
  const t = fs.readFileSync(path.join(ROOT, 'historical-data', 'results' + year + '.js'), 'utf8');
  const m = t.match(/(?:const|window\.)\s*resultData\s*=\s*(\[[\s\S]*?\]);/)[1];
  try { return JSON.parse(m); } catch (e) { return (0, eval)('(' + m + ')'); }   // same fallback as historical-mode.js
}
// weight classes for the year: label (data) -> engine slot. Identity for 1999+.
function classes(year) {
  const HW = global.HistoricalWeights;
  return BoutModel.WEIGHT_ORDER.map(slot => ({ slot, label: HW ? HW.labelOf(year, slot) : slot }));
}
function buildYear(year) {
  const data = readData(year);
  const Y = { year: Number(year), weights: [], cores: {}, books: {}, schoolOf: {}, idsBySchool: {}, records: [], problems: [], warnings: [],
              adjustments: (global.HistoricalAdjustments && HistoricalAdjustments.forYear(year)) || null, place: {} };
  classes(year).forEach(({ slot, label }) => {
    let b;
    if (global.HistoricalWrestleback && HistoricalWrestleback.isWrestleback(year, label)) b = HistoricalWrestleback.build(data, year, String(label), String(slot));   // 1990-1995 shape
    else { const mr = HistoricalAdapter.buildCanonicalBracketModel(data, year, String(label));
      if (!mr.ok) { Y.problems.push(label + ': ' + mr.problems.join('; ')); return; }
      b = HistoricalStateBuilder.build(mr.model, String(slot)); }
    if (!b.ok) { Y.problems.push(label + ': ' + b.problems.join('; ')); return; }
    if (b.fieldWarnings && b.fieldWarnings.length) Y.warnings.push(label + ': ' + b.fieldWarnings.length + ' field warning(s)');
    Y.weights.push(slot); Y.cores[slot] = b.core; Y.books[slot] = b.book;
    const st = b.book.states[slot];
    const entrants = (st.pigtails || [st.pigtail]).reduce((a, m) => a.concat([m.a, m.b]), []).concat(st.champ[0].reduce((a, m) => a.concat([m.a, m.b]), []));
    entrants.forEach(x => { if (!x) return; const id = TournamentCore.wrestlerId(slot, x), school = String(x.s || '').trim();
      if (Y.schoolOf[id] !== undefined) return; Y.schoolOf[id] = school; (Y.idsBySchool[school] = Y.idsBySchool[school] || []).push(id); });
    const recs = b.core.toRecords(b.book);
    const pend = typeof b.core.pending === 'function' ? b.core.pending(b.book) : null;
    Y.pendingCount = (Y.pendingCount || 0) + (Array.isArray(pend) ? pend.filter(d => String(d.weight) === String(slot)).length : 0);
    Y.records = Y.records.concat(recs);
    // placers from the placement bouts (same keys HistoricalRules reads)
    const nameOf = {}; entrants.forEach(x => { if (x) nameOf[TournamentCore.wrestlerId(slot, x)] = x.n; });
    const P = {}; recs.forEach(r => { const set = (w, l, a, c) => { P[a] = nameOf[r.winnerId]; P[c] = nameOf[r.loserId]; };
      if (r.key === 'champ:4:0') set(0, 0, 1, 2); if (r.key === 'p3:0:0') set(0, 0, 3, 4); if (r.key === 'p5:0:0') set(0, 0, 5, 6); if (r.key === 'p7:0:0') set(0, 0, 7, 8); });
    // placements decided by a printed bye (1981 source exceptions): no bout record exists -- read the placement from the bracket state
    [[3, 'place3'], [5, 'place5'], [7, 'place7']].forEach(([pl, k]) => { const m = st[k]; if (m && m.bye && m.w && !P[pl]) { P[pl] = m[m.w].n; (Y.byePlacements = Y.byePlacements || []).push(Object.assign({ id: TournamentCore.wrestlerId(slot, m[m.w]), round: pl + (pl === 3 ? 'rd' : 'th') }, m.forfeitBonus ? { forfeitBonus: true } : {})); } });
    Y.place[label] = P;
  });
  if (global.HistoricalRules) { const ap = HistoricalRules.apply(year, Y.records, id => Y.schoolOf[id], Y.adjustments);
    if (ap) { Y.adjustments = ap.adjustments; Y.byeCredits = ap.credits; } }
  const wbYear = global.HistoricalWrestleback && classes(year).some(({ label }) => HistoricalWrestleback.isWrestleback(year, label));
  Y.scores = wbYear ? HistoricalWrestlebackScoring.compute(year, Y.records, id => Y.schoolOf[id] || '', Object.keys(Y.idsBySchool), Object.assign({ shape: HistoricalWrestleback.shapeOf(year, classes(year)[0].label) }, Y.byePlacements ? { byePlacements: Y.byePlacements } : {}))   // 1972-1995 model
                    : OfficialScoring.compute(Y.records, { bonusOf: bonusOfResult, schoolOf: id => Y.schoolOf[id] || '', adjustments: Y.adjustments || undefined, schools: Object.keys(Y.idsBySchool) });
  return Y;
}
module.exports = { buildYear, readData };
if (require.main === module) {
  const Y = buildYear(process.argv[2]);
  console.log('year', Y.year, 'weights', Y.weights.length, 'records', Y.records.length, 'problems', Y.problems.length);
  Y.problems.forEach(p => console.log('  PROBLEM', p));
  const rows = (Y.scores.teams || Y.scores.rows || Y.scores).slice ? (Y.scores.teams || Y.scores.rows || Y.scores) : [];
  console.log(JSON.stringify(Object.keys(Y.scores)).slice(0, 200));
}
