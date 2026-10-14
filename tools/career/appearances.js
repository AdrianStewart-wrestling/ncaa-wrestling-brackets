// NCAA Career — step 1: every historical appearance, read from the REAL Tournament Central engine (via the headless harness).
// Output: appearances.json = [{ year, id, key, weight (engine slot), label (real weight class), seed, seeded, name, school }]
//   key = "year:id" where id = TournamentCore.wrestlerId(slot, entrant) = "slot-NN" -- the key the site looks up (index.html careerKeyFor).
// Usage (from the repo root or anywhere):  node tools/career/appearances.js [YEARS=all available]
const fs = require('fs'), path = require('path');
const ROOT = process.env.ROOT || path.join(__dirname, '..', '..');
process.env.ROOT = ROOT;
const H = require(path.join(ROOT, 'tools', 'pre1999', 'harness.js'));
const avail = fs.readdirSync(path.join(ROOT, 'historical-data')).map(f => /^results(\d{4})\.js$/.exec(f)).filter(Boolean).map(m => +m[1]).sort();
const years = process.argv[2] ? process.argv[2].split(',').map(Number) : avail;
const out = [];
for (const year of years) {
  const Y = H.buildYear(year);
  if (Y.problems.length) throw new Error(year + ' did not build: ' + Y.problems.join('; '));
  const T = (global.HistoricalSeeds.table[String(year)]) || {};
  Y.weights.forEach(slot => {
    const label = global.HistoricalWeights ? global.HistoricalWeights.labelOf(year, slot) : slot;
    const st = Y.books[slot].states[slot];
    const ents = (st.pigtails || [st.pigtail]).reduce((a, m) => a.concat([m.a, m.b]), []).concat(st.champ[0].reduce((a, m) => a.concat([m.a, m.b]), []));
    const seen = new Set();
    ents.forEach(x => { if (!x) return; const id = TournamentCore.wrestlerId(slot, x); if (seen.has(id)) return; seen.add(id);
      const printed = (T[String(label)] || {})[x.n];
      out.push({ year, id, key: year + ':' + id, weight: slot, label, seed: Number(id.split('-')[1]), seeded: printed !== undefined, printedSeed: printed === undefined ? null : printed, name: String(x.n).trim(), school: String(x.s || '').trim() }); });
  });
}
const keys = new Set(out.map(a => a.key)); if (keys.size !== out.length) throw new Error('appearance keys are not unique');
fs.writeFileSync(path.join(__dirname, 'appearances.json'), JSON.stringify(out));
console.log('appearances:', out.length, 'from', years.length, 'years (' + years[0] + '-' + years[years.length - 1] + ')');
