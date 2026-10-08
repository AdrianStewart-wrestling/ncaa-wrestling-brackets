#!/usr/bin/env node
// Builds home-data.js: the small static data file the homepage (home.html) reads, generated from the completed
// historical baseline through the SAME replay harness the validators use. The homepage never loads the Career registry,
// the history facts or any year file. Every factual claim the homepage makes is CHECKED here; any failed check stops the
// build (exit 1) and nothing is written.
// Usage: node tools/home/build_home_data.js            (writes ./home-data.js at the repo root)
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = path.join(__dirname, '..', '..');
const H = require(path.join(ROOT, 'tools', 'pre1999', 'harness.js'));
const fails = [];
const check = (ok, msg) => { if (!ok) fails.push(msg); return ok; };

// ---------------------------------------------------------------- years, champions, weight classes
// every championship with a data file (no hard-coded boundary): historical-data/resultsYYYY.js
const YEARS = fs.readdirSync(path.join(ROOT, 'historical-data')).map(f => /^results(\d{4})\.js$/.exec(f)).filter(Boolean).map(m => +m[1]).sort((a, b) => a - b);
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
check(years.length === YEARS.length && years.length > 0 && !YEARS.includes(2020), `championship list inconsistent: ${years.length} of ${YEARS.length}`);

// ---------------------------------------------------------------- scoring eras (rule text straight from the model)
const norm = l => l.replace(/\(\d{4} NCAA rules\)/g, '');
const ERA_DEFS = [
  // 1970-1971 structure: finalist repechage (a distinct topology, not the 1972-1978 semifinalist wrestleback). Its scoring period is the
  // NCAA rule range 1970-1971; the label is the covered part of it ("1971" now, "1970-1971" once 1970 is covered).
  { id: 'eR', from: YEARS[0], to: 1971, name: 'Finalist repechage', sample: 1971,
    shared: 'Six places are scored. Only wrestlers beaten by one of the two finalists wrestle back, each finalist\'s victims in his own chain, in the order he beat them (his R1 and R2 victims meet, or, if he came through a wrestle-in, his wrestle-in victim first meets his R1 victim; the winner then meets his QF victim, then his SF victim); the two chain winners wrestle for 3rd and the two chain losers for 5th. There is no 7th-place bout.',
    periods: [
      { from: 1970, to: 1971, text: 'places 12-9-7-5-3-1; championship advancement 1 (none for the final) and repechage advancement 1 for each repechage win; a fall, default or forfeit earns 1 bonus point, with no bonus for a DQ or a decision margin; no bye points; every school scores.',
        checks: [[0, /1 per repechage win/], [0, /No bye points/], [1, /Bonus \(1970–1971 rules\)/], [1, /no bonus for a DQ or for a decision margin/], [2, /Place: 12-9-7-5-3-1 \(six places, 1970–1971/], [2, /finalist repechage/]] } ] },
  { id: 'e0', from: 1972, to: 1978, name: 'Six places, no 7th-place bout', sample: 1978,
    shared: 'Six places are scored; there is no 7th-place bout. Only wrestlers beaten by a semifinalist wrestle back, and first-round byes earned no advancement point.',
    // scoring sub-periods inside one structural era: each has a fixed historical range; its label is derived from the years
    // actually covered, and every covered year is checked against the period's own production scoring key
    periods: [
      { from: 1972, to: 1973, text: 'places 12-9-7-5-3-1; championship advancement 1 and consolation advancement 1; a fall, forfeit, default or DQ earns 1 bonus point and a decision won by 10 or more earns ½. There is no major or superior decision.',
        checks: [[0, /1 per consolation win/], [1, /Decision by 10 or more ½/], [1, /no major or superior decision/], [2, /Place: 12-9-7-5-3-1/]] },
      { from: 1974, to: 1975, text: 'places 16-12-9-7-5-3; championship advancement 1 and consolation advancement ½; a fall, forfeit, default or DQ earns 1 bonus point and a decision won by 10 or more earns ½. There is no major or superior decision.',
        checks: [[0, /½ per consolation win/], [1, /Decision by 10 or more ½/], [1, /no major or superior decision/], [2, /Place: 16-12-9-7-5-3 \(six places/]] },
      { from: 1976, to: 1978, text: 'places 16-12-9-7-5-3; championship advancement 1 and consolation advancement ½; a major decision (8–11) earns ½ and a superior decision (12+) ¾. Tech falls were not yet used.',
        checks: [[0, /½ per consolation win/], [1, /Major Decision \(8–11\) ½ · Superior Decision \(12\+\) ¾/], [2, /Place: 16-12-9-7-5-3 \(six places/]] } ] },
  { id: 'e1', from: 1979, to: 1984, name: 'Superior decisions, no tech falls', sample: 1981,
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
  // active sub-periods: clipped to the covered years; label and reference year derived, never hard-coded
  const per = (e.periods || []).map(p => { const py = yrs.filter(y => y >= p.from && y <= p.to); return py.length ? Object.assign({}, p, { years: py, sample: py[py.length - 1], label: py[0] === py[py.length - 1] ? String(py[0]) : py[0] + '–' + py[py.length - 1] }) : null; }).filter(Boolean);
  if (e.periods) { e.summary = [e.shared, ...per.map(p => p.label + ': ' + p.text)]; check(per.reduce((a, p) => a + p.years.length, 0) === yrs.length, `era ${e.id}: every covered year must fall in exactly one scoring sub-period`); }
  let rules;
  if (e.to <= 1995) {   // history-layer model: its own key text, identical across the era apart from the consolation shape
    const bonusLine = l => l.find(x => /^Bonus/.test(x));
    rules = e.periods ? per.flatMap(p => [0, 1, 2].map(i => p.label + ' · ' + built[p.sample].scores.keyLines[i]))
                      : built[e.sample].scores.keyLines.slice(0, 3);
    for (const y of yrs) check(Array.isArray(built[y].scores.keyLines), `${y}: expected a history-layer scoring key (era ${e.id})`);
    for (const y of yrs) { const p = e.periods ? per.find(q => q.years.includes(y)) : null;
      if (p) { [0, 1, 2].forEach(i => check(built[y].scores.keyLines[i] === built[p.sample].scores.keyLines[i], `${y}: scoring key line ${i} differs from its sub-period ${p.label} in era ${e.id}`));
               p.checks.forEach(([i, re]) => check(re.test(built[y].scores.keyLines[i]), `${y}: sub-period ${p.label} description not supported by its scoring key (${re})`)); }
      else check(bonusLine(built[y].scores.keyLines) === bonusLine(built[e.sample].scores.keyLines), `${y}: bonus rule differs from era ${e.id}'s`); }
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
check(/six places/.test(built[1978].scores.keyLines[2]) && /no 7th-place bout/.test(built[1978].scores.keyLines[2]) && /Major Decision \(8–11\) ½ · Superior Decision \(12\+\) ¾/.test(built[1978].scores.keyLines[1]) && /semifinalist/.test(built[1978].scores.keyLines[2]) && /No bye points/.test(built[1978].scores.keyLines[0]), 'era e0 summary not supported by the 1978 rule text');
for (const y of YEARS.filter(y => y >= 1972 && y <= 1975)) check(/1972–1975 rules/.test(built[y].scores.keyLines[1]) && /Decision by 10 or more ½/.test(built[y].scores.keyLines[1]) && /no major or superior decision/.test(built[y].scores.keyLines[1]) && /six places/.test(built[y].scores.keyLines[2]) && /No bye points/.test(built[y].scores.keyLines[0]), `${y}: era e0 1972–1975 sub-period summary not supported by its rule text`);
check(/1972–1975 rules/.test(built[1975].scores.keyLines[1]) && /Decision by 10 or more ½/.test(built[1975].scores.keyLines[1]) && /no major or superior decision/.test(built[1975].scores.keyLines[1]) && /six places/.test(built[1975].scores.keyLines[2]) && /No bye points/.test(built[1975].scores.keyLines[0]), 'era e0 (1975 period) summary not supported by the 1975 rule text');
check(/No bye points/.test(built[1981].scores.keyLines[0]) && /no tech fall/.test(built[1981].scores.keyLines[1]) && /semifinalist/.test(built[1981].scores.keyLines[2]), 'era e1 summary not supported by the 1981 rule text');
check(/Tech Fall 1\b/.test(built[1985].scores.keyLines[1]) && /bye counts as an advancement/.test(built[1985].scores.keyLines[0]) && /semifinalist/.test(built[1985].scores.keyLines[2]) && /quarterfinalist/.test(built[1986].scores.keyLines[2]), 'era e2 summary not supported');
check(/Major Decision 0\.5 · Tech Fall 0\.75/.test(built[1990].scores.keyLines[1]), 'era e3 summary not supported');
check(/DQ 2 · Major Decision 1 · Match Termination \(15\+\) 1/.test(built[1995].scores.keyLines[1]), 'era e4 summary not supported');
years.forEach(r => { r.era = eras.find(e => r.y >= e.from && r.y <= e.to).id; });

// ---------------------------------------------------------------- scoring validation 1980-1995 (the published top-ten checks)
// Where the WrestlingStats summary page and the NCAA's official team scoring disagree on a top-ten total, the NCAA figure controls
// (source policy). Each entry is a documented disagreement; the validation counts the reconstruction against the NCAA value.
const NCAA_TOP10_TARGETS = {
  1974: { 'Washington': { ncaa: 44, wrestlingstats: 44.5, source: '1975 NCAA Official Wrestling Guide (Guide 38), 1974 Division I team scoring' } },
  1976: { 'Minnesota': { ncaa: 43, wrestlingstats: 42.5, source: '1977 NCAA Official Wrestling Guide (Guide 40), 1976 Division I team scoring' } },
  1973: { 'Brigham Young': { ncaa: 42.5, wrestlingstats: 43.5, source: '1974 NCAA Official Wrestling Guide (Guide 37), 1973 University Division team scoring' } }
};
// Where the NCAA's official top-ten SET itself differs from the WrestlingStats summary (not just one total), the NCAA set is the
// validation target: each entry is the published NCAA total (source data), checked against the reconstructed total from the replay.
const NCAA_TOP10_SETS = {
  1972: { source: '1973 NCAA Official Wrestling Guide (Guide 36), 1972 team scoring; the WrestlingStats summary lists nine and omits Clarion St. (NCAA 6th)',
    entries: [['Iowa State', 'Iowa State', 103], ['Mich. State', 'Michigan State', 72.5], ['Oklahoma State', 'Oklahoma State', 57], ['Washington', 'Washington', 54], ['Oklahoma', 'Oklahoma', 45.5],
              ['Clarion St.', 'Clarion', 36], ['Oregon St.', 'Oregon State', 28], ['Penn State', 'Penn State', 26.5], ['Navy', 'Navy', 26], ['Ohio U.', 'Ohio', 26]] }
};
let exact = 0, of = 0; const perYear = {}, perYearOf = {};
for (const y of YEARS.filter(y => y <= 1995 && NCAA_TOP10_SETS[y])) {   // NCAA-authoritative sets: denominator = the set's own length
  const S = NCAA_TOP10_SETS[y], tot = Object.fromEntries(built[y].scores.teams.map(t => [t.school, t.total]));
  const tenth = S.entries.slice().sort((a, b) => b[2] - a[2])[9][2];
  check(S.entries.length >= 10 && S.entries.every(e => e[2] >= tenth), `${y}: the NCAA top-ten set must hold every school at or above 10th place (ties included)`);
  for (const [g, c] of S.entries) check(tot[c] !== undefined, `${y}: NCAA top-ten school ${g} (${c}) has no reconstructed total`);
  const n = S.entries.filter(([g, c, v]) => tot[c] === v).length;
  exact += n; of += S.entries.length; perYear[y] = n; if (S.entries.length !== 10) perYearOf[y] = S.entries.length;
}
for (const y of YEARS.filter(y => y <= 1995 && !NCAA_TOP10_SETS[y])) {
  const out = cp.execFileSync('node', [path.join(ROOT, 'tools', 'pre1999', 'tscore_wb.js'), String(y), path.join(ROOT, 'tools', 'pre1999', 'extracted', 'x' + y + '.json')], { encoding: 'utf8' });
  const m = /(\d+)\/(\d+) published top-ten totals exact/.exec(out); check(!!m, `${y}: no scoring validation line`);   // tied top tens can list more than 10 schools
  let n = m ? +m[1] : 0;
  for (const [school, t] of Object.entries(NCAA_TOP10_TARGETS[y] || {})) {
    const row = out.split('\n').find(l => new RegExp('^\\s*\\d+\\s+' + school.replace(/[.()]/g, '\\$&') + '\\s{2,}').test(l));
    const mm = row && /published (\S+)\s+model (\S+)/.exec(row);
    check(!!mm && +mm[1] === t.wrestlingstats, `${y} ${school}: expected the documented WrestlingStats figure ${t.wrestlingstats}`);
    if (mm) { const wasExact = +mm[2] === +mm[1], isExact = +mm[2] === t.ncaa; n += (isExact ? 1 : 0) - (wasExact ? 1 : 0); }
  }
  if (m) { exact += n; of += +m[2]; perYear[y] = n; if (+m[2] !== 10) (perYearOf[y] = +m[2]); }
}
check(exact === 208 && of === 262, `scoring validation is ${exact}/${of}, expected 208/262 (the documented figure, ${YEARS[0]}-1995)`);

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
    text: 'The NCAA\u2019s own 1981 annual records Joe Solorio\u2019s wrestle-in win as a default; the compiled bracket printed a fall. Both readings are recorded. Same bonus either way.',
    ok: RES.boutOverrides.some(o => o.year === '1980' && o.kind === 'sourceCorrection' && o.winner === 'Joe Solorio') },
  { y: 1981, w: '134', title: 'A wrestle-in only the NCAA annual printed',
    text: 'Jim Gibbons pinned Cliff Porter in a wrestle-in the compiled bracket omits. It explains the consolation bout Porter wrestled next.',
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
  sources: ['NCAA annual \u201c1982 NCAA Wrestling\u201d (1981 results), for the championship rounds',
            '1981 compiled championship bracket and summary (\u201c7th: Randy Lewis [3] - Iowa (WFT)\u201d)'],
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
check(/OFFICIAL NCAA 2012 draw/.test(header(2012)) && /compiled championship bracket, structure from the official NCAA draw/.test(fs.readFileSync(path.join(ROOT, 'career-panel.js'), 'utf8')), 'sources: 2012 wording not supported');
YEARS.filter(y => y >= 2016).forEach(y => check(!/source|transcrib|official/i.test(header(y)), `sources: ${y}'s data file now names a source; review the 2016–2026 wording`));
const matrix = fs.readFileSync(path.join(ROOT, 'MATRIX.md'), 'utf8');
check(/Podiums additionally cross-checked against official\/published results for 2019 \(all\), 2021 \(all\), 2016\/125, 2016\/149, 2025\/174, 2026\/125/.test(matrix), 'sources: the MATRIX.md cross-check statement changed');
check(fs.existsSync(path.join(ROOT, 'historical-data', 'results2009-provenance.js')) && fs.existsSync(path.join(ROOT, 'historical-data', 'results2012-provenance.js')) && !fs.existsSync(path.join(ROOT, 'historical-data', 'results2010-provenance.js')), 'sources: per-bout provenance coverage (1980–2009, 2012) changed');

if (fails.length) { console.error('HOME DATA CHECKS FAILED (' + fails.length + '):\n  ' + fails.join('\n  ')); process.exit(1); }
const DATA = {
  baseline: 'TC-' + YEARS[0] + '-' + YEARS[YEARS.length - 1],
  counts: { championships: years.length, first: YEARS[0], last: YEARS[YEARS.length - 1], bouts, careers, appearances,
            validated: { exact, of, from: YEARS[0], to: 1995, perYear, perYearOf } },
  years, canceled: [{ y: 2020, note: 'Championships canceled' }], eras, exceptions, archives,
  sources: [
    { years: YEARS[0] + '–2009', text: 'Reconstructed bout by bout from compiled championship brackets and checked against the NCAA\u2019s own record: the official team scoring and top tens in the NCAA Wrestling Guides and Records Book. Where the NCAA\u2019s annual material supplies or corrects a result, both readings are recorded.' },
    { years: '2010–2011, 2013–2015', text: 'Transcribed from the official NCAA championship brackets, as recorded in each year\u2019s data file.' },
    { years: '2012', text: 'Results from a compiled championship bracket; bracket structure from the official NCAA draw.' },
    { years: '2016–2026', text: 'The data files for these years do not name a source document. Placings were cross-checked against official published results for all of 2019 and 2021, and for some weights in 2016, 2025 and 2026.' }
  ]
};
const DATA_BASELINE = 'TC-' + YEARS[0] + '-' + YEARS[YEARS.length - 1];
const out = '// GENERATED by tools/home/build_home_data.js from the ' + DATA_BASELINE + ' historical baseline. Do not edit by hand.\n' +
            'window.TC_HOME_DATA = ' + JSON.stringify(DATA) + ';\n';
fs.writeFileSync(path.join(ROOT, 'home-data.js'), out);
console.log(`home-data.js written: ${(out.length / 1024).toFixed(1)} KB · ${years.length} championships · ${bouts} bouts · ${careers} careers · ` +
            `validation ${exact}/${of} · ${exceptions.length} exceptions · ${archives.length} archive story · all ${Object.keys(claim).length + 3} story claims verified`);
