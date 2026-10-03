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
  const RULES = { 2010: { byePoints64: true }, 2011: { byePoints64: true } };
  function byeCredits(records) {
    const pigLoser = new Set(), inPig = new Set(), inConPig = new Set(), firstChamp = {}, firstCon = {}, r1Loser = new Set();
    const rk = k => { const m = /^(champ|con):(\d+):(\d+)$/.exec(k); return m ? { b: m[1], r: +m[2] } : null; };
    records.forEach(rec => { if (rec.key === 'pigtail:0:0') { inPig.add(rec.winnerId); inPig.add(rec.loserId); pigLoser.add(rec.loserId); }
      if (rec.key === 'conPigtail:0:0') { inConPig.add(rec.winnerId); inConPig.add(rec.loserId); } });
    records.forEach(rec => { const k = rk(rec.key); if (!k) return;
      [rec.winnerId, rec.loserId].forEach(id => { const won = id === rec.winnerId, slot = k.b === 'champ' ? firstChamp : firstCon;
        if (!slot[id] || k.r < slot[id].r) slot[id] = { r: k.r, won }; });
      if (k.b === 'champ' && k.r === 0) r1Loser.add(rec.loserId); });
    const out = {};
    Object.entries(firstChamp).forEach(([id, f]) => { if (!inPig.has(id) && f.won) out[id] = (out[id] || 0) + 1; });
    Object.entries(firstCon).forEach(([id, f]) => { if (r1Loser.has(id) && !inConPig.has(id) && f.won) out[id] = (out[id] || 0) + 0.5; });
    // the wrestle-in loser drops into a consolation round where he holds a bye; winning his next bout (the consolation
    // wrestle-in) earns the consolation bye point
    records.forEach(rec => { if (rec.key === 'conPigtail:0:0' && pigLoser.has(rec.winnerId)) out[rec.winnerId] = (out[rec.winnerId] || 0) + 0.5; });
    return out; }
  // Returns { credits: {wrestlerId: pts}, adjustments: merged {school: {points, kind, reason}} } or null when no rule applies.
  function apply(year, records, schoolOf, baseAdjustments, opts) {
    const r = RULES[Number(year)]; if (!r || !r.byePoints64 || (opts && opts.disable)) return null;
    const credits = byeCredits(records), adj = JSON.parse(JSON.stringify(baseAdjustments || {}));
    Object.entries(credits).forEach(([id, pts]) => { const s = schoolOf(id); if (!s) return;
      const a = adj[s] || (adj[s] = { points: 0, kind: 'scoring-rule', reason: '' }); a.points += pts;
      if (a.kind === 'scoring-rule') a.reason = '64-wrestler bracket bye points (' + a.points + '). Source: ' + SRC + '.'; });
    return { credits, adjustments: adj }; }
  const registry = {};   // year -> { wrestlerId: credit }, set when a year is built
  function register(year, credits) { registry[Number(year)] = credits || {}; }
  function creditOf(year, id) { const r = registry[Number(year)]; return (r && r[id]) || 0; }
  return { apply: apply, byeCredits: byeCredits, rules: RULES, register: register, creditOf: creditOf };
})();
if (typeof window !== 'undefined') window.HistoricalRules = HistoricalRules;
if (typeof module === 'object' && module.exports) module.exports = HistoricalRules;
