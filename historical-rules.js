/* ============================================================================
   HISTORICAL SCORING RULES -- History layer only (the OFFICIAL / MY BRACKET scorer is never modified).
   ----------------------------------------------------------------------------
   byePoints64: years whose 33-man brackets were "treated as a 64-wrestler bracket" for team scoring. In a 64-wrestler
   bracket every entrant except the two wrestle-in wrestlers holds a first-round bye, and NCAA scoring awards bye points
   to a wrestler who wins his next bout:
     - championship +1: a wrestler who did not wrestle the wrestle-in and WON his first championship bout actually wrestled
       (a printed BYE is not a bout, so a printed-bye recipient earns this once, on his first real bout);
     - consolation +0.5: a first-round loser who did not wrestle the consolation wrestle-in and WON his first
       consolation bout actually wrestled; and the wrestle-in loser who WINS the consolation wrestle-in.
   Credits are emitted per wrestler (Career) and summed per school into the scorer's EXISTING `adjustments` option,
   exactly as documented adjustments are. Activated per year only after reconciliation against the published standings
   (see FREEZE.md evidence).
   ============================================================================ */
const HistoricalRules = (function () {
  const SRC = 'Printed bracket note ("For team score purposes, this is treated as a 64-wrestler bracket"); reconciled against the published NCAA team standings';
  // placementTable (1999, 2000): pre-2001 NCAA placement points 16-12-9-7-5-3-2-1.
  // PROVENANCE: WrestlingStats compiled chronology ("NCAA Wrestling Rules for Scoring": 1979 eight places scored 16-12-9-7-5-3-2-1;
  // 2001 team scoring changed to 16-12-10-9-7-6-4-3); validated against the NCAA published standings (1999 54/70, 2000 62/72 exact
  // with the table vs 27/70 and 36/72 without; the old table fails for 2001: 40/71 vs 60/71); contemporary NCAA rules text not located.
  // The tech-fall near-fall distinction (1 point without a near fall) is NOT modelled: the sources do not record near falls.
  const OLD_PLACE = [16, 12, 9, 7, 5, 3, 2, 1], MODERN_PLACE = [16, 12, 10, 9, 7, 6, 4, 3];
  const PLACE_SRC = 'Pre-2001 placement table 16-12-9-7-5-3-2-1 (WrestlingStats compiled chronology; validated against NCAA published standings; contemporary NCAA rules text not located)';
  const RULES = { 1996: { byePoints64: true, placementTable: OLD_PLACE }, 1997: { byePoints64: true, placementTable: OLD_PLACE }, 1998: { byePoints64: true, placementTable: OLD_PLACE }, 1999: { byePoints64: true, placementTable: OLD_PLACE }, 2000: { byePoints64: true, placementTable: OLD_PLACE }, 2001: { byePoints64: true }, 2002: { byePoints64: true }, 2003: { byePoints64: true }, 2004: { byePoints64: true }, 2005: { byePoints64: true }, 2006: { byePoints64: true }, 2007: { byePoints64: true }, 2008: { byePoints64: true }, 2009: { byePoints64: true }, 2010: { byePoints64: true }, 2011: { byePoints64: true }, 2012: { byePoints64: true } };   // 2012 brackets print the 64-wrestler note; reconciled below
  // 1998 (pre-1999 weight classes 118-275; same 32-line + wrestle-in format as 1999): the 1999 rule set, validated against the
  // ten team totals printed on the WrestlingStats 1998 summary page -- 6/10 exact with the rule set vs 1/10 (modern table, no bye
  // points), 0/10 (old table only), 1/10 (bye points only); 7/10 with the printed-MT bonus (historical-adjustments.js). Residuals
  // Oklahoma State +2, Illinois +1.5, Oregon State +0.5 are NOT reconciled: no source itemizes them.
  // 1996 (same format and weights): the same rule set plus the printed-MT bonus (historical-adjustments.js) -- 6/10 exact on the
  // WrestlingStats 1996 summary page (3/10 without the MT bonus; 1/10 old table only; 0/10 modern). Residuals Iowa +1, Iowa State +1,
  // CSU Bakersfield +1, Oklahoma State +1 are NOT reconciled (no source itemizes them).
  // 1997 (same format and weights as 1998): the same rule set, validated against the ten totals printed on the WrestlingStats 1997
  // summary page -- 6/10 exact vs 2/10 modern, 0/10 old table only, 1/10 bye points only; 7/10 with the printed-MT bonus
  // (historical-adjustments.js). Residuals Iowa +1, Oklahoma State +0.5, Illinois +1 are NOT reconciled (no source itemizes them).
  // Generalized by the 2008 evidence (variable field sizes): a weight WITH at least one wrestle-in is a 64-line bracket
  // (every non-wrestle-in entrant holds a first-round bye: the 2009-2012 rule below); a weight with NO wrestle-in is a
  // 32-line bracket where only an ACTUAL bye earns a credit -- a wrestler with no R1 bout who wins his first real bout (+1),
  // or an R1 loser with no consolation-R1 bout who wins his first consolation bout (+0.5). Every 2009-2012 weight has a
  // wrestle-in, so those years are unchanged.
  function byeCredits(records) {
    const byW = {}; records.forEach(r => (byW[r.weight] = byW[r.weight] || []).push(r)); const out = {};
    Object.values(byW).forEach(recs => { const part = recs.some(r => /^pigtail:/.test(r.key)) ? byeCredits64(recs) : actualByeCredits(recs);
      Object.entries(part).forEach(([id, p]) => { out[id] = (out[id] || 0) + p; }); });
    return out; }
  function actualByeCredits(recs) {
    const rk = k => { const m = /^(champ|con):(\d+):(\d+)$/.exec(k); return m ? { b: m[1], r: +m[2] } : null; };
    const first = {}, r1Loser = new Set(), champIds = new Set();
    recs.forEach(rec => { const k = rk(rec.key); if (!k) return; [rec.winnerId, rec.loserId].forEach(id => { const key = id + '|' + k.b; if (!first[key] || k.r < first[key].r) first[key] = { r: k.r, won: id === rec.winnerId }; if (k.b === 'champ') champIds.add(id); });
      if (k.b === 'champ' && k.r === 0) r1Loser.add(rec.loserId); });
    const out = {};
    champIds.forEach(id => { const f = first[id + '|champ']; if (f && f.r === 1 && f.won) out[id] = (out[id] || 0) + 1; });           // no R1 bout (printed bye), won his first bout
    r1Loser.forEach(id => { const f = first[id + '|con']; if (f && f.r === 1 && f.won) out[id] = (out[id] || 0) + 0.5; });            // no consolation-R1 bout (vacancy), won his first
    return out; }
  function byeCredits64(records) {
    const pigLoser = new Set(), inPig = new Set(), inConPig = new Set(), firstChamp = {}, firstCon = {}, r1Loser = new Set();
    const rk = k => { const m = /^(champ|con):(\d+):(\d+)$/.exec(k); return m ? { b: m[1], r: +m[2] } : null; };
    records.forEach(rec => { if (/^pigtail:/.test(rec.key)) { inPig.add(rec.winnerId); inPig.add(rec.loserId); pigLoser.add(rec.loserId); }
      if (/^conPigtail:/.test(rec.key)) { inConPig.add(rec.winnerId); inConPig.add(rec.loserId); } });
    records.forEach(rec => { const k = rk(rec.key); if (!k) return;
      [rec.winnerId, rec.loserId].forEach(id => { const won = id === rec.winnerId, slot = k.b === 'champ' ? firstChamp : firstCon;
        if (!slot[id] || k.r < slot[id].r) slot[id] = { r: k.r, won }; });
      if (k.b === 'champ' && k.r === 0) r1Loser.add(rec.loserId); });
    const out = {};
    Object.entries(firstChamp).forEach(([id, f]) => { if (!inPig.has(id) && f.won) out[id] = (out[id] || 0) + 1; });
    Object.entries(firstCon).forEach(([id, f]) => { if (r1Loser.has(id) && !inConPig.has(id) && f.won) out[id] = (out[id] || 0) + 0.5; });
    // the wrestle-in loser drops into a consolation round where he holds a bye; winning his next bout (the consolation
    // wrestle-in) earns the consolation bye point
    records.forEach(rec => { if (/^conPigtail:/.test(rec.key) && pigLoser.has(rec.winnerId)) out[rec.winnerId] = (out[rec.winnerId] || 0) + 0.5; });
    return out; }
  // Returns { credits: {wrestlerId: pts}, adjustments: merged {school: {points, kind, reason}} } or null when no rule applies.
  function placementDeltas(records, table) {      // wrestlerId -> (historical table - modern table) for his final place
    const place = {}; records.forEach(r => { if (r.key === 'champ:4:0') { place[r.winnerId] = 1; place[r.loserId] = 2; }
      if (r.key === 'p3:0:0') { place[r.winnerId] = 3; place[r.loserId] = 4; } if (r.key === 'p5:0:0') { place[r.winnerId] = 5; place[r.loserId] = 6; }
      if (r.key === 'p7:0:0') { place[r.winnerId] = 7; place[r.loserId] = 8; } });
    const out = {}; Object.entries(place).forEach(([id, p]) => { const d = table[p - 1] - MODERN_PLACE[p - 1]; if (d) out[id] = d; }); return out; }
  function apply(year, records, schoolOf, baseAdjustments, opts) {
    const r = RULES[Number(year)]; if (!r || !r.byePoints64 || (opts && opts.disable)) return null;
    const credits = byeCredits(records), adj = JSON.parse(JSON.stringify(baseAdjustments || {}));
    const pdel = r.placementTable ? placementDeltas(records, r.placementTable) : {};
    Object.entries(pdel).forEach(([id, d]) => { const s = schoolOf(id); if (!s) return; const a = adj[s] || (adj[s] = { points: 0, kind: 'scoring-rule', reason: '' }); a.points += d; a.placeDelta = (a.placeDelta || 0) + d; });
    Object.entries(credits).forEach(([id, pts]) => { const s = schoolOf(id); if (!s) return;
      const a = adj[s] || (adj[s] = { points: 0, kind: 'scoring-rule', reason: '' }); a.points += pts;
      a.byePts = (a.byePts || 0) + pts; });
    Object.values(adj).forEach(a => { const parts = [];
      if (a.byePts) parts.push('64-wrestler bracket bye points (' + a.byePts + '). Source: ' + SRC);
      if (a.placeDelta) parts.push('placement-table difference (' + a.placeDelta + '). Source: ' + PLACE_SRC);
      if (a.kind === 'scoring-rule') a.reason = parts.join('; ') + '.';
      else if (parts.length) a.reason = (a.reason || '') + ' Also: ' + parts.join('; ') + '.';   // a sourced base adjustment (e.g. 1996-1998 printed MT) keeps its own reason; the rule parts are appended
    });
    return { credits, adjustments: adj, placeDeltas: pdel }; }
  const registry = {};   // year -> { wrestlerId: credit }, set when a year is built
  const placeReg = {};
  function register(year, credits, placeDeltas) { registry[Number(year)] = credits || {}; placeReg[Number(year)] = placeDeltas || {}; }
  function creditOf(year, id) { const r = registry[Number(year)]; return (r && r[id]) || 0; }
  function placeDeltaOf(year, id) { const r = placeReg[Number(year)]; return (r && r[id]) || 0; }
  return { apply: apply, byeCredits: byeCredits, rules: RULES, register: register, creditOf: creditOf, placeDeltaOf: placeDeltaOf, placementDeltas: placementDeltas };
})();
if (typeof window !== 'undefined') window.HistoricalRules = HistoricalRules;
if (typeof module === 'object' && module.exports) module.exports = HistoricalRules;

/* ============================================================================================================================
   1990-1995 TEAM SCORING (quarterfinal-wrestleback era) -- an explicit HISTORY-LAYER model built from the documented rules
   (WrestlingStats "NCAA Wrestling Rules for Scoring", https://www.wrestlingstats.com/ncaa/pdf/NCAA%20Bout%20Scoring.pdf):
     1974 consolation advancement = 1/2 point (championship advancement 1)       1979 eight places = 16-12-9-7-5-3-2-1
     1985 a bye counts as an advancement provided the wrestler wins his next bout
     1988 tech fall = 3/4 point (superior decision eliminated); fall / forfeit / default / DQ = 1; major decision = 1/2
     1995 fall / forfeit / default / DQ = 2; major decision = 1; tech fall replaced by match termination = 1
   Placement is credited on the WRESTLEBACK schedule (its own: WB3 winners clinch 8th, WB4 6th, WB5 4th; QF win 6th, SF win 2nd).
   No reconciliation adjustments; no tuning to published totals. Output shape = official-scoring.js (teams/events/floors/stats), so
   the existing scores page, team panel, Path and Career display it unchanged.
   ============================================================================================================================ */
const HistoricalWrestlebackScoring = (function () {
  const NONE = 9, PLACE = { 1: 16, 2: 12, 3: 9, 4: 7, 5: 5, 6: 3, 7: 2, 8: 1 };
  const BONUS = {
    '1988-1994': { Fall: 1, FFT: 1, MedFFT: 1, Default: 1, DQ: 1, MajDec: 0.5, TechFall: 0.75, Dec: 0 },
    '1995':      { Fall: 2, FFT: 2, MedFFT: 2, Default: 2, DQ: 2, MajDec: 1, TechFall: 1, Dec: 0 }      // 1995: TechFall = match termination
  };
  BONUS['1985-1987'] = { Fall: 1, FFT: 1, MedFFT: 1, Default: 1, DQ: 1, MajDec: 0.5, TechFall: 1, Dec: 0, SupDec: 0.75 };   // approved Oct 6 2026
  const bonusTable = y => (Number(y) >= 1995 ? BONUS['1995'] : Number(y) >= 1988 ? BONUS['1988-1994'] : BONUS['1985-1987']);
  const isSuperior = (y, r) => { if (Number(y) > 1987 || r.resultType !== 'MajDec') return false; const m = /^(\d+)-(\d+)$/.exec(String(r.score || '')); return !!m && (+m[1] - +m[2]) >= 12; };
  const ADV = { ChampPigtail: 1, R32: 1, R16: 1, QF: 1, SF: 1, Final: 0, ConsPigtail: 0.5, ConsR1: 0.5, ConsR2: 0.5, ConsR3: 0.5, ConsAA: 0.5, ConsQF: 0.5, ConsSF: 0.5, '3rd': 0, '5th': 0, '7th': 0 };
  const SCHEDULE = { QF: [NONE, 6, NONE], SF: [6, 2, 6], Final: [2, 1, 2], ConsR3: [NONE, 8, NONE], ConsAA: [NONE, 8, NONE], ConsQF: [8, 6, 8], ConsSF: [6, 4, 6], '3rd': [4, 3, 4], '5th': [6, 5, 6], '7th': [8, 7, 8] };
  const CHAMP = ['R32', 'R16', 'QF', 'SF', 'Final'];
  // consolation round names per shape: 1986-1995 (qf) 5 rounds, AA clinched in round 3; 1972-1985 (sf) 4 rounds, AA clinched in round 2 ('ConsAA')
  const CONS = { 'qf-wrestleback': ['ConsR1', 'ConsR2', 'ConsR3', 'ConsQF', 'ConsSF'], 'sf-wrestleback': ['ConsR1', 'ConsAA', 'ConsQF', 'ConsSF'] };
  let CON = CONS['qf-wrestleback'];
  function roundOfKey(key) { const p = String(key).split(':'), b = p[0], ri = +p[1];
    return b === 'pigtail' ? 'ChampPigtail' : b === 'conPigtail' ? 'ConsPigtail' : b === 'p3' ? '3rd' : b === 'p5' ? '5th' : b === 'p7' ? '7th' : b === 'champ' ? CHAMP[ri] : b === 'con' ? CON[ri] : null; }
  const worth = p => PLACE[p] || 0, label = p => p >= NONE ? 'none' : p === 1 ? '1st' : p === 2 ? '2nd' : p === 3 ? '3rd' : p + 'th';
  // 1985 bye rule on the replayed records: a wrestler whose first championship bout is R16 (printed R1 bye) and who wins it: +1;
  // an R2 loser whose first consolation bout is WB2 (his WB1 seat was a printed vacancy) and who wins it: +1/2.
  function byeCredits(records) {
    const byW = {}; records.forEach(r => (byW[r.weight] = byW[r.weight] || []).push(r)); const out = [];
    Object.values(byW).forEach(recs => {
      const k = r => { const p = r.key.split(':'); return { b: p[0], ri: +p[1] }; };
      const first = {}; const note = (id, b, ri, r, won) => { const key = id + '|' + b; if (!first[key] || ri < first[key].ri) first[key] = { ri, r, won }; };
      const inPig = new Set(), r2Loser = new Set();
      recs.forEach(r => { const q = k(r); if (q.b === 'pigtail') { inPig.add(r.winnerId); inPig.add(r.loserId); }
        if (q.b === 'champ' || q.b === 'con') { note(r.winnerId, q.b, q.ri, r, true); if (r.loserId) note(r.loserId, q.b, q.ri, r, false); }
        if (q.b === 'champ' && q.ri === 1 && r.loserId) r2Loser.add(r.loserId); });
      Object.entries(first).forEach(([key, f]) => { const [id, b] = key.split('|');
        if (b === 'champ' && f.ri === 1 && f.won && !inPig.has(id)) out.push({ id, points: 1, r: f.r, round: 'R16', why: 'R1 bye (1985 rule)' });
        if (b === 'con' && f.ri === 1 && f.won && r2Loser.has(id)) out.push({ id, points: 0.5, r: f.r, round: 'ConsR2', why: 'consolation bye (1985 rule)' }); });
    });
    return out;
  }
  function compute(year, records, schoolOf, schools, opts) {
    CON = CONS[(opts && opts.shape) || 'qf-wrestleback'] || CONS['qf-wrestleback'];
    const sfShape = !!(opts && opts.shape === 'sf-wrestleback');
    const B = bonusTable(year), problems = [], events = [], byTeam = {}, floors = {}, schoolOfW = {};
    const team = s => byTeam[s] || (byTeam[s] = { school: s, adv: 0, bonus: 0, place: 0 });
    (schools || []).forEach(s => { s = String(s || '').trim(); if (s) team(s); });
    const add = (s, cat, pts, src, r, round, who) => { if (!pts) return; const t = team(s); if (cat === 'Advancement') t.adv += pts; else if (cat === 'Bonus') t.bonus += pts; else t.place += pts;
      events.push({ school: s, wrestlerId: who, weight: r.weight, boutId: r.boutId, round, category: cat, points: pts, source: src }); };
    const floor = (w, p, s) => { schoolOfW[w] = s; if (floors[w] === undefined || p < floors[w]) floors[w] = p; };
    records.slice().sort((a, b) => (a.boutId - b.boutId) || (a.key < b.key ? -1 : 1)).forEach(r => {
      const round = roundOfKey(r.key); if (!round) { problems.push({ boutId: r.boutId, code: 'unknown_bout', message: 'unrecognised bout ' + r.key }); return; }
      const ws = schoolOf(r.winnerId); if (!ws) { problems.push({ boutId: r.boutId, code: 'unknown_wrestler', message: 'no school for ' + r.winnerId }); return; }
      const sup = isSuperior(year, r); const bonus = sup ? B.SupDec : B[r.resultType]; if (typeof bonus !== 'number') problems.push({ boutId: r.boutId, code: 'unknown_result_type', message: 'unknown result type ' + r.resultType });
      add(ws, 'Bonus', bonus || 0, 'Rule ' + (Number(year) >= 1995 ? '1995' : Number(year) >= 1988 ? '1988' : '1976/1985') + ': ' + (sup ? 'Superior decision' : r.resultType), r, round, r.winnerId);
      add(ws, 'Advancement', ADV[round] || 0, 'Rule 1974 (champ 1 / cons 1/2)', r, round, r.winnerId);
      const sch = SCHEDULE[round];
      if (sch) { const [entry, win, lose] = sch;
        add(ws, 'Placement', worth(win) - worth(entry), 'Floor ' + label(entry) + ' -> ' + label(win), r, round, r.winnerId); floor(r.winnerId, win, ws);
        const ls = r.loserId ? schoolOf(r.loserId) : ''; if (ls) { add(ls, 'Placement', worth(lose) - worth(entry), 'Floor ' + label(entry) + ' -> ' + label(lose), r, round, r.loserId); floor(r.loserId, lose, ls); } }
    });
    // Bye points: the 1985 rule read EXACTLY as established and validated for 1996-2012 (HistoricalRules.byeCredits, unchanged):
    // in a weight with wrestle-ins the bracket counts as 64 lines (every non-wrestle-in entrant holds a first-round bye); otherwise
    // printed byes only. (byeCredits() below = the narrower printed-byes-only reading, kept for the sensitivity report.)
    const firstBout = {}; records.forEach(r => [r.winnerId, r.loserId].forEach(id => { if (id && (!firstBout[id] || r.boutId < firstBout[id].boutId)) firstBout[id] = r; }));
    Object.entries(HistoricalRules.byeCredits(records)).forEach(([id, pts]) => { const s = schoolOf(id); if (!s) return;
      const after = records.filter(r => r.winnerId === id).sort((a, b) => a.boutId - b.boutId)[0] || firstBout[id];
      add(s, 'Advancement', pts, 'Bye (1985 rule; 1996-2012 reading)', after, roundOfKey(after.key), id); });
    const aaBy = {}; Object.keys(floors).forEach(w => { if (floors[w] <= 8) aaBy[schoolOfW[w]] = (aaBy[schoolOfW[w]] || 0) + 1; });
    const teams = Object.values(byTeam).map(t => ({ school: t.school, adv: t.adv, bonus: t.bonus, place: t.place, aa: aaBy[t.school] || 0, total: t.adv + t.bonus + t.place }));
    teams.sort((a, b) => (b.total - a.total) || (a.school < b.school ? -1 : 1));
    teams.forEach(t => { t.rank = 1 + teams.filter(o => o.total > t.total).length; t.tied = teams.some(o => o !== t && o.total === t.total); t.rankLabel = t.tied ? 'T-' + t.rank : String(t.rank); });
    const y = Number(year), b = bonusTable(y);
    const keyLines = [
      'Adv: 1 per championship win, ½ per consolation win (placement bouts and the Final add none). Byes: a bye counts as an advancement when the wrestler wins his next bout (1985 rule; in weights with wrestle-ins every other entrant holds a first-round bye).',
      y <= 1987 ? 'Bonus (1985–1987 rules): Fall / Forfeit / Default / DQ 1 · Major Decision (8–11) ½ · Superior Decision (12+) ¾ · Tech Fall 1.' :
      'Bonus (' + (y >= 1995 ? '1995 rules' : '1988–1994 rules') + '): Fall / Forfeit / Default / DQ ' + b.Fall + ' · Major Decision ' + b.MajDec + ' · ' + (y >= 1995 ? 'Match Termination (15+) ' : 'Tech Fall ') + b.TechFall + '.',
      sfShape ? 'Place: 16-12-9-7-5-3-2-1 (1979), counted the moment a finish is clinched on this era’s consolation (only wrestlers beaten by a semifinalist wrestle back): QF win clinches 6th · SF win 2nd · Con. Rd 2 win 8th · Con. Qtrs win 6th · Con. Semis win 4th.'
              : 'Place: 16-12-9-7-5-3-2-1 (1979), counted the moment a finish is clinched on this era’s consolation (only wrestlers beaten by a quarterfinalist wrestle back): QF win clinches 6th · SF win 2nd · Con. Rd 3 win 8th · Con. Qtrs win 6th · Con. Semis win 4th.',
      'Rules source: WrestlingStats “NCAA Wrestling Rules for Scoring”. No adjustments are applied; differences from the published totals are reported, not reconciled. Click a team name for its roster.'];
    return { teams, events, problems, floors, stats: { records: records.length, teams: teams.length, events: events.length }, model: 'wrestleback-1990s',
      subtitle: 'Final NCAA results replayed from historical bout data · read-only · scored with the ' + y + ' NCAA rules (history-layer model)', keyTitle: 'How these scores work (' + y + ' NCAA rules)', keyLines };
  }
  return { compute, byeCredits /* printed-only reading, sensitivity only */, BONUS, ADV, SCHEDULE, PLACE };
})();
if (typeof window !== 'undefined') window.HistoricalWrestlebackScoring = HistoricalWrestlebackScoring;
if (typeof globalThis !== 'undefined') globalThis.HistoricalWrestlebackScoring = HistoricalWrestlebackScoring;
