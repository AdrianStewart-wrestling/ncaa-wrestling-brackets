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
  const RULES = { 1998: { byePoints64: true, placementTable: OLD_PLACE }, 1999: { byePoints64: true, placementTable: OLD_PLACE }, 2000: { byePoints64: true, placementTable: OLD_PLACE }, 2001: { byePoints64: true }, 2002: { byePoints64: true }, 2003: { byePoints64: true }, 2004: { byePoints64: true }, 2005: { byePoints64: true }, 2006: { byePoints64: true }, 2007: { byePoints64: true }, 2008: { byePoints64: true }, 2009: { byePoints64: true }, 2010: { byePoints64: true }, 2011: { byePoints64: true }, 2012: { byePoints64: true } };   // 2012 brackets print the 64-wrestler note; reconciled below
  // 1998 (pre-1999 weight classes 118-275; same 32-line + wrestle-in format as 1999): the 1999 rule set, validated against the
  // ten team totals printed on the WrestlingStats 1998 summary page -- 6/10 exact with the rule set vs 1/10 (modern table, no bye
  // points), 0/10 (old table only), 1/10 (bye points only). Residuals Iowa +0.5, Oklahoma State +2, Illinois +1.5, Oregon State +0.5
  // are NOT reconciled: no source itemizes them, and the unmodelled tech-fall near-fall rule cannot account for all of them.
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
    Object.values(adj).forEach(a => { if (a.kind !== 'scoring-rule') return; const parts = [];
      if (a.byePts) parts.push('64-wrestler bracket bye points (' + a.byePts + '). Source: ' + SRC);
      if (a.placeDelta) parts.push('placement-table difference (' + a.placeDelta + '). Source: ' + PLACE_SRC); a.reason = parts.join('; ') + '.'; });
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
