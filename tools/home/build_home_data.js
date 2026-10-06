#!/usr/bin/env node
// Builds home-candidate-data.js: the small static data file the candidate homepage reads, generated from the frozen
// TC-1980-2026 baseline through the SAME replay harness the validators use. The homepage never loads the Career registry,
// the history facts or any year file. Every factual claim the homepage makes is CHECKED here; any failed check stops the
// build (exit 1) and nothing is written.
// Usage: node tools/home/build_home_data.js            (writes ./home-candidate-data.js at the repo root)
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = path.join(__dirname, '..', '..');
const H = require(path.join(ROOT, 'tools', 'pre1999', 'harness.js'));
const fails = [];
const check = (ok, msg) => { if (!ok) fails.push(msg); return ok; };

// ---------------------------------------------------------------- years, champions, weight classes
const YEARS = []; for (let y = 1980; y <= 2026; y++) if (y !== 2020) YEARS.push(y);
const built = {}, years = [];
let bouts = 0;
for (const y of YEARS) {
  const Y = H.buildYear(y); built[y] = Y;
  check(!Y.problems.length && !(Y.pendingCount || 0), `${y}: replay problems ${Y.problems.length}, pending ${Y.pendingCount || 0}`);
  bouts += Y.records.length;
  const top = Y.scores.teams[0];
  years.push({ y, champ: top.school, tied: !!top.tied, weights: global.HistoricalWeights.classes(y).map(String),
               adj: Y.scores.teams.filter(t => t.adj).length });
}
check(years.length === 46, `expected 46 championships, got ${years.length}`);

// ---------------------------------------------------------------- scoring eras (rule text straight from the model)
const norm = l => l.replace(/\(\d{4} NCAA rules\)/g, '');
const ERA_DEFS = [
  { id: 'e1', from: 1980, to: 1984, name: 'Superior decisions, no tech falls', sample: 1981,
    summary: ['A fall, forfeit, default or DQ earns 1 bonus point; a major decision (8–11) earns ½ and a superior decision (12+) ¾.',
              'Tech falls were not yet used, and first-round byes earned no advancement point.',
              'Only wrestlers beaten by a semifinalist wrestle back.'] },
  { id: 'e2', from: 1985, to: 1987, name: 'The tech fall and the bye rule arrive', sample: 1986,
    summary: ['A tech fall now earns 1 bonus point; superior decisions still earn ¾.',
              'A first-round bye counts as an advancement once the wrestler wins his next bout.',
              'From 1986, wrestlers beaten by a quarterfinalist wrestle back (1985 still used the semifinalist rule).'] },
  { id: 'e3', from: 1988, to: 1994, name: 'Quarter-point tech falls', sample: 1990,
    summary: ['A major decision earns ½ and a tech fall ¾; a fall, forfeit, default or DQ still earns 1.',
              'Wrestlers beaten by a quarterfinalist wrestle back.'] },
  { id: 'e4', from: 1995, to: 1995, name: 'Bonus points double', sample: 1995,
    summary: ['A fall, forfeit, default or DQ earns 2; a major decision and a match termination (15+) each earn 1.'] },
  { id: 'e5', from: 1996, to: 2026, name: 'The modern model', sample: 2016,
    summary: ['Major decision 1, tech fall 1½, fall, forfeit or DQ 2; places pay 16-12-10-9-7-6-4-3.',
              'Where a published NCAA team total differs from this calculation, the difference is shown as a reconciliation (Adj) with its reason and source.'] }
];
const OS = global.OfficialScoring, RT = global.TournamentCore.RESULT_TYPES;
const bonusOf = c => (RT.find(t => t.code === c) || {}).bonus;
const eras = ERA_DEFS.map(e => {
  const yrs = YEARS.filter(y => y >= e.from && y <= e.to);
  let rules;
  if (e.to <= 1995) {   // history-layer model: its own key text, identical across the era apart from the consolation shape
    rules = built[e.sample].scores.keyLines.slice(0, 3);
    for (const y of yrs) check(Array.isArray(built[y].scores.keyLines), `${y}: expected a history-layer scoring key (era ${e.id})`);
    const bonusLine = l => l.find(x => /^Bonus/.test(x));
    for (const y of yrs) check(bonusLine(built[y].scores.keyLines) === bonusLine(built[e.sample].scores.keyLines), `${y}: bonus rule differs from era ${e.id}'s`);
  } else {              // the official model, described from its own tables (as Team Scores does for these years)
    for (const y of yrs) check(!built[y].scores.keyLines, `${y}: expected the official model (era ${e.id})`);
    check(bonusOf('MajDec') === 1 && bonusOf('TechFall') === 1.5 && bonusOf('Fall') === 2 && bonusOf('FFT') === 2 && bonusOf('DQ') === 2, 'official bonus table changed');
    const pp = [1, 2, 3, 4, 5, 6, 7, 8].map(k => OS.PLACE_POINTS[k]).join('-');
    check(pp === '16-12-10-9-7-6-4-3', `official place points changed: ${pp}`);
    rules = [`Adv: 1 per championship win, ½ per consolation win. Bonus: Major Decision ${bonusOf('MajDec')} · Tech Fall ${bonusOf('TechFall')} · Fall / Forfeit / DQ ${bonusOf('Fall')}.`,
             `Place: ${pp}, counted the moment a finish is clinched.`,
             'Adj: reconciliation to the published NCAA final team total, shown only where it differs from the bout-by-bout calculation, with its reason and source.'];
  }
  const adjTeams = yrs.map(y => years.find(r => r.y === y).adj);
  return { id: e.id, from: e.from, to: e.to, name: e.name, sample: e.sample, summary: e.summary, rules, years: yrs.length,
           adjByYear: e.to > 1995 ? Object.fromEntries(yrs.map((y, i) => [y, adjTeams[i]])) : undefined };
});
// checks behind the era summaries
check(/No bye points/.test(built[1981].scores.keyLines[0]) && /no tech fall/.test(built[1981].scores.keyLines[1]) && /semifinalist/.test(built[1981].scores.keyLines[2]), 'era e1 summary not supported by the 1981 rule text');
check(/Tech Fall 1\b/.test(built[1985].scores.keyLines[1]) && /bye counts as an advancement/.test(built[1985].scores.keyLines[0]) && /semifinalist/.test(built[1985].scores.keyLines[2]) && /quarterfinalist/.test(built[1986].scores.keyLines[2]), 'era e2 summary not supported');
check(/Major Decision 0\.5 · Tech Fall 0\.75/.test(built[1990].scores.keyLines[1]), 'era e3 summary not supported');
check(/DQ 2 · Major Decision 1 · Match Termination \(15\+\) 1/.test(built[1995].scores.keyLines[1]), 'era e4 summary not supported');
years.forEach(r => { r.era = eras.find(e => r.y >= e.from && r.y <= e.to).id; });

// ---------------------------------------------------------------- scoring validation 1980-1995 (the published top-ten checks)
let exact = 0, of = 0; const perYear = {};
for (const y of YEARS.filter(y => y <= 1995)) {
  const out = cp.execFileSync('node', [path.join(ROOT, 'tools', 'pre1999', 'tscore_wb.js'), String(y), path.join(ROOT, 'tools', 'pre1999', 'extracted', 'x' + y + '.json')], { encoding: 'utf8' });
  const m = /(\d+)\/10 published top-ten totals exact/.exec(out); check(!!m, `${y}: no scoring validation line`);
  if (m) { exact += +m[1]; of += 10; perYear[y] = +m[1]; }
}
check(exact === 114 && of === 160, `scoring validation is ${exact}/${of}, expected 114/160 (the documented figure)`);

// ---------------------------------------------------------------- Career registry size (read here, never by the homepage)
const reg = (() => { const t = fs.readFileSync(path.join(ROOT, 'historical-careers.js'), 'utf8'); return JSON.parse(t.slice(t.indexOf('/*JSON*/') + 8, t.indexOf('/*END*/'))); })();
const careers = Object.keys(reg.careers).length, appearances = Object.keys(reg.byKey).length;

// ---------------------------------------------------------------- documented source exceptions (each must exist in the tool files)
const WBX = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'pre1999', 'wb_exceptions.json'), 'utf8'));
const RES = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'pre1999', 'bout_resolutions.json'), 'utf8'));
const SUP = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'pre1999', 'bout_supplements.json'), 'utf8'));
const exceptions = [
  { y: 1980, w: '126 · 142 · 150', title: 'Three consolation wins with no printed result',
    text: 'The source prints only the winner\u2019s name. They count as wins (advancement only, no bonus) and show as \u201cWin (result not printed)\u201d.',
    ok: RES.boutOverrides.filter(o => o.year === '1980' && o.kind === 'resultNotPrinted').length === 3 },
  { y: 1980, w: '150', title: 'A default, not a fall',
    text: 'The NCAA\u2019s own 1981 annual records Joe Solorio\u2019s wrestle-in win as a default; WrestlingStats printed a fall. Same bonus either way.',
    ok: RES.boutOverrides.some(o => o.year === '1980' && o.kind === 'sourceCorrection' && o.winner === 'Joe Solorio') },
  { y: 1981, w: '134', title: 'A wrestle-in only the NCAA annual printed',
    text: 'Jim Gibbons pinned Cliff Porter in a wrestle-in WrestlingStats omits. It explains the consolation bout Porter wrestled next.',
    ok: SUP.supplements.some(s => s.year === '1981' && s.winner === 'Jim Gibbons' && s.loser === 'Cliff Porter') },
  { y: 1981, w: '134 · 190', title: 'Empty consolation seats after quarterfinal forfeits',
    text: 'Represented exactly as printed: byes where seats were empty, no bouts invented for absent wrestlers.',
    ok: !!(WBX['1981:134'] && WBX['1981:134'].printedVacancies && WBX['1981:190'] && WBX['1981:190'].printedVacancies) },
  { y: 1982, w: '190', title: 'A printed consolation seat kept as printed',
    text: 'Mark Young appears where the bracket structure expects another wrestler; an external record confirms the printed bout.',
    ok: !!(WBX['1982:190'] && WBX['1982:190'].sc2Entry) },
  { y: 1983, w: '190', title: 'A misprinted consolation seat corrected',
    text: 'The seat is printed \u201cBauman, Boise State\u201d; the bracket, the next result and the placings all name Jim Baumgardner.',
    ok: (RES.seatCorrections || []).some(s => s.year === '1983' && s.seat === 'Jim Baumgardner') }
];
exceptions.forEach(e => check(e.ok, `documented exception missing from the tool files: ${e.y} ${e.title}`));
exceptions.forEach(e => delete e.ok);

// ---------------------------------------------------------------- From the Archives: Randy Lewis, 1981, 134 lbs (every claim checked)
const Y80 = built[1980], Y81 = built[1981];
const recs = (Y, label) => Y.records.filter(r => r.weight === global.HistoricalWeights.slotOf(Y.year, label));
// wrestler ids are numeric (slot-line); names come from the bracket entrants, as the harness builds placements
const namesOf = Y => { const m = {}; Object.keys(Y.books).forEach(slot => { const st = Y.books[slot].states[slot];
  (st.pigtails || [st.pigtail]).concat(st.champ[0]).forEach(mt => { if (!mt) return; [mt.a, mt.b].forEach(x => { if (x) m[global.TournamentCore.wrestlerId(slot, x)] = x.n; }); }); }); return m; };
const N81 = namesOf(Y81);
const r134 = recs(Y81, '134').map(r => Object.assign({}, r, { winnerId: N81[r.winnerId] || r.winnerId, loserId: N81[r.loserId] || r.loserId }));
const facts = global.HistoricalSeeds && global.HistoricalSeeds.facts && global.HistoricalSeeds.facts[1981] && global.HistoricalSeeds.facts[1981]['134'];
const seed = global.HistoricalSeeds && global.HistoricalSeeds.table && global.HistoricalSeeds.table[1981] && global.HistoricalSeeds.table[1981]['134'];
const claim = {};
claim.champ1980 = check(Y80.place['134'] && Y80.place['134'][1] === 'Randy Lewis', 'archives: Randy Lewis is not the 1980 134 champion');
claim.seed3 = check(seed && seed['Randy Lewis'] === 3, 'archives: Lewis is not the 1981 134 #3 seed');
claim.qfLoss = check(r134.some(r => /^champ:2:/.test(r.key) && /Jim Gibbons/.test(r.winnerId) && /Randy Lewis/.test(r.loserId)), 'archives: Lewis did not lose his 1981 quarterfinal to Jim Gibbons');
claim.gibbonsChamp = check(Y81.place['134'][1] === 'Jim Gibbons', 'archives: Jim Gibbons is not the 1981 134 champion');
claim.conLoss = check(r134.some(r => /^con:/.test(r.key) && /Ricky Dellagatta/.test(r.winnerId) && /Randy Lewis/.test(r.loserId)), 'archives: Lewis did not lose in the consolations to Ricky Dellagatta');
claim.seventh = check(Y81.place['134'][7] === 'Randy Lewis', 'archives: Lewis is not 7th');
claim.noEighth = check(!Y81.place['134'][8], 'archives: an 8th-place finisher exists');
claim.noBout = check(!r134.some(r => r.key === 'p7:0:0'), 'archives: a 7th-place bout record exists');
claim.forfeitEvent = check((Y81.byePlacements || []).some(b => N81[b.id] === 'Randy Lewis' && b.round === '7th' && b.forfeitBonus), 'archives: the printed 7th-place forfeit is not a scoring event');
claim.vacancy = check(!!(facts && facts.wb && facts.wb.vacant && facts.wb.vacant.length && facts.wb.absentEligible.some(a => /Selmon/.test(a))), 'archives: the quarterfinal-forfeit vacancy is not in the facts');
claim.iowa = check(Y81.scores.teams[0].school === 'Iowa' && Y81.scores.teams[0].total === 129.75, 'archives: Iowa 1981 is not 129.75');
const archives = [{
  id: 'lewis-1981', year: 1981, weight: '134',
  title: 'The defending champion who finished 7th, and nobody finished 8th',
  dek: 'Randy Lewis won the 134-pound title in 1980. A year later, he was awarded 7th by forfeit \u2014 without an opponent.',
  body: [
    'Iowa\u2019s Randy Lewis came to Princeton in 1981 as the defending 134-pound champion, seeded third. Iowa State\u2019s Jim Gibbons beat him 13-6 in the quarterfinals and went on to win the title.',
    'In the consolations Lewis won once, then was pinned by Kentucky\u2019s Ricky Dellagatta in 26 seconds. That sent him to the 7th-place bout, where there was no one waiting.',
    'Clar Anderson had won his quarterfinal on that side of the bracket by forfeit. The printed consolation bracket shows three empty seats there: the forfeiting wrestler\u2019s, and those of Anderson\u2019s two earlier opponents. The source gives no reason for the last two. The empty seats carried all the way to the 7th-place bout.',
    'The championship record lists Lewis 7th, won by forfeit, and no one in 8th. Iowa\u2019s published team total of 129\u00be only adds up with that forfeit counted.'
  ],
  record: [
    ['1980 · 134 lbs', 'Champion: Randy Lewis, Iowa'],
    ['1981 · Quarterfinal', 'Jim Gibbons (Iowa State) def. Lewis, 13-6'],
    ['1981 · Consolation', 'Ricky Dellagatta (Kentucky) def. Lewis, fall 0:26'],
    ['1981 · 7th place', 'Lewis, won by forfeit, no opponent'],
    ['1981 · 8th place', 'None'],
    ['Iowa team total', '129.75, matching the published total']
  ],
  sources: ['WrestlingStats 1981 compiled bracket and summary (\u201c7th: Randy Lewis [3] - Iowa (WFT)\u201d)',
            'NCAA annual \u201c1982 NCAA Wrestling\u201d (1981 results), for the championship rounds'],
  links: [['Open the 1981 134-lb bracket', 'index.html?view=history&year=1981&weight=134'],
          ['See 1981 team scores', 'index.html?view=history&year=1981&show=scores']]
}];
// two story numbers checked against the records as well
check(r134.some(r => /Jim Gibbons/.test(r.winnerId) && /Randy Lewis/.test(r.loserId) && r.score === '13-6'), 'archives: the 13-6 score is not in the record');
check(r134.some(r => /Ricky Dellagatta/.test(r.winnerId) && /Randy Lewis/.test(r.loserId) && r.time === '0:26'), 'archives: the 0:26 fall is not in the record');
check(facts && facts.wb.absentEligible.some(a => /Selmon/.test(a)) && r134.some(r => /^champ:2:/.test(r.key) && /Clar Anderson/.test(r.winnerId) && /Johnnie Selmon/.test(r.loserId)), 'archives: Anderson did not beat Selmon in the quarterfinal');

// checks behind the revised story wording: exactly three printed vacancies (Selmon's seat + Anderson's R1/R2 victims' pair),
// and Iowa reaches the published 129.75 only with the forfeit scoring event (1 point) counted
check(facts.wb.vacant.length === 3 && ['Steve Rosenstein', 'Thomas Landrum'].every(n => facts.wb.absentEligible.includes(n)), 'archives: the three printed empty seats are not as described');
check(Y81.scores.events.some(e => e.category === 'Bonus' && e.points === 1 && N81[e.wrestlerId] === 'Randy Lewis' && /forfeit/i.test(e.source)) && Y81.scores.teams[0].total - 1 !== 129.75, 'archives: Iowa\u2019s published total does not depend on the forfeit event');
check(r134.some(r => /Clar Anderson/.test(r.winnerId) && /Steve Rosenstein/.test(r.loserId)) && r134.some(r => /Clar Anderson/.test(r.winnerId) && /Thomas Landrum/.test(r.loserId)), 'archives: Rosenstein and Landrum were not Anderson\u2019s earlier opponents');

// ---------------------------------------------------------------- source wording must match what the repository documents
// (no provenance inferred from adjacent years): each year's data-file header and MATRIX.md
const header = y => { const t = fs.readFileSync(path.join(ROOT, 'historical-data', 'results' + y + '.js'), 'utf8').slice(0, 600); return (t.match(/^\/\/.*$/gm) || []).join(' '); };
[2010, 2011, 2013, 2014, 2015].forEach(y => check(/official NCAA (final )?bracket/i.test(header(y)), `sources: ${y}'s data file does not document the official NCAA bracket`));
check(/OFFICIAL NCAA 2012 draw/.test(header(2012)) && /WrestlingStats/i.test(fs.readFileSync(path.join(ROOT, 'career-panel.js'), 'utf8')), 'sources: 2012 wording not supported');
YEARS.filter(y => y >= 2016).forEach(y => check(!/source|transcrib|official/i.test(header(y)), `sources: ${y}'s data file now names a source; review the 2016–2026 wording`));
const matrix = fs.readFileSync(path.join(ROOT, 'MATRIX.md'), 'utf8');
check(/Podiums additionally cross-checked against official\/published results for 2019 \(all\), 2021 \(all\), 2016\/125, 2016\/149, 2025\/174, 2026\/125/.test(matrix), 'sources: the MATRIX.md cross-check statement changed');
check(fs.existsSync(path.join(ROOT, 'historical-data', 'results2009-provenance.js')) && fs.existsSync(path.join(ROOT, 'historical-data', 'results2012-provenance.js')) && !fs.existsSync(path.join(ROOT, 'historical-data', 'results2010-provenance.js')), 'sources: per-bout provenance coverage (1980–2009, 2012) changed');

if (fails.length) { console.error('HOME DATA CHECKS FAILED (' + fails.length + '):\n  ' + fails.join('\n  ')); process.exit(1); }
const DATA = {
  baseline: 'TC-1980-2026',
  counts: { championships: years.length, first: YEARS[0], last: YEARS[YEARS.length - 1], bouts, careers, appearances,
            validated: { exact, of, from: 1980, to: 1995, perYear } },
  years, canceled: [{ y: 2020, note: 'Championships canceled' }], eras, exceptions, archives,
  sources: [
    { years: '1980–2009', text: 'WrestlingStats compiled brackets, checked against the NCAA Records Book. In a few documented cases the NCAA\u2019s own annual guides supply or correct a result; both sources are recorded.' },
    { years: '2010–2011, 2013–2015', text: 'Transcribed from the official NCAA championship brackets, as recorded in each year\u2019s data file.' },
    { years: '2012', text: 'Results from the WrestlingStats compiled bracket; bracket structure from the official NCAA draw.' },
    { years: '2016–2026', text: 'The data files for these years do not name a source document. Placings were cross-checked against official published results for all of 2019 and 2021, and for some weights in 2016, 2025 and 2026.' }
  ]
};
const out = '// GENERATED by tools/home/build_home_data.js from the TC-1980-2026 baseline. Do not edit by hand.\n' +
            'window.TC_HOME_DATA = ' + JSON.stringify(DATA) + ';\n';
fs.writeFileSync(path.join(ROOT, 'home-candidate-data.js'), out);
console.log(`home-candidate-data.js written: ${(out.length / 1024).toFixed(1)} KB · ${years.length} championships · ${bouts} bouts · ${careers} careers · ` +
            `validation ${exact}/${of} · ${exceptions.length} exceptions · ${archives.length} archive story · all ${Object.keys(claim).length + 3} story claims verified`);
