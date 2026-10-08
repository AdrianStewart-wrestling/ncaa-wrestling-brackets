const H=require('./harness.js'); const YEAR=+process.argv[2]; const PUB={}; process.argv[3].split(';').forEach(kv=>{const [k,v]=kv.split('=');PUB[k]=+v;});
const Y=H.buildYear(YEAR), OLD=[16,12,9,7,5,3,2,1], bonus=c=>{const t=(TournamentCore.RESULT_TYPES||[]).find(x=>x.code===c);return t?t.bonus:undefined};
const byW={}; Y.records.forEach(r=>(byW[r.weight]=byW[r.weight]||[]).push(r));
const hasPig=recs=>recs.some(r=>/^pigtail:/.test(r.key));
const variants={
 'rule set (64-line where wrestle-ins, actual byes elsewhere)': w=>HistoricalRules.byeCredits(byW[w]),
 'actual byes only, every weight':                               w=>HistoricalRules.byeCredits(byW[w].filter(r=>!/^(pigtail|conPigtail):/.test(r.key)).length===byW[w].length?byW[w]:byW[w]),
 '64-line where wrestle-ins, NO credit for printed byes':        w=>hasPig(byW[w])?HistoricalRules.byeCredits(byW[w]):{},
 'no bye points at all':                                          w=>({}),
};
for(const [name,f] of Object.entries(variants)){
  const adj={}, add=(id,p)=>{const s=Y.schoolOf[id]; if(s)(adj[s]=adj[s]||{points:0,kind:'scoring-rule',reason:'t'}).points+=p;};
  Object.entries(HistoricalRules.placementDeltas(Y.records,OLD)).forEach(([i,d])=>add(i,d));
  Object.keys(byW).forEach(w=>Object.entries(f(w)).forEach(([i,d])=>add(i,d)));
  const sc=OfficialScoring.compute(Y.records,{bonusOf:bonus,schoolOf:i=>Y.schoolOf[i]||'',adjustments:adj,schools:Object.keys(Y.idsBySchool)});
  const t={}; sc.teams.forEach(x=>t[x.school]=x.total);
  console.log((Object.keys(PUB).filter(s=>t[s]===PUB[s]).length+'/10').padEnd(6), name.padEnd(58), Object.keys(PUB).map(s=>s.split(' ')[0]+(t[s]===PUB[s]?'✓':(t[s]>PUB[s]?'+':'')+(t[s]-PUB[s]))).join(' '));
}
