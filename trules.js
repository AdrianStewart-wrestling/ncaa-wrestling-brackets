const H=require('./harness.js');
const PUB={'Iowa':115,'Minnesota':102,'Oklahoma State':99.5,'Penn State':70.5,'Central Michigan':53,'Iowa State':49.5,'West Virginia':48,'Illinois':48,'Oregon State':43.5,'Ohio':43.5};
const Y=H.buildYear(1998);
const OLD=[16,12,9,7,5,3,2,1];
const bonus=c=>{const t=(TournamentCore.RESULT_TYPES||[]).find(x=>x.code===c);return t?t.bonus:undefined};
for (const [label,usePlace,useBye] of [['modern',0,0],['old place',1,0],['bye pts',0,1],['old place + bye pts',1,1]]) {
  const adj={};
  const add=(id,p)=>{const s=Y.schoolOf[id]; if(!s) return; (adj[s]=adj[s]||{points:0,kind:'scoring-rule',reason:'test'}).points+=p;};
  if(usePlace) Object.entries(HistoricalRules.placementDeltas(Y.records,OLD)).forEach(([id,d])=>add(id,d));
  if(useBye) Object.entries(HistoricalRules.byeCredits(Y.records)).forEach(([id,d])=>add(id,d));
  const sc=OfficialScoring.compute(Y.records,{bonusOf:bonus,schoolOf:id=>Y.schoolOf[id]||'',adjustments:adj,schools:Object.keys(Y.idsBySchool)});
  const tot={}; sc.teams.forEach(t=>tot[t.school]=t.total);
  const exact=Object.keys(PUB).filter(s=>tot[s]===PUB[s]);
  console.log(label.padEnd(22), exact.length+'/10 exact  ', Object.keys(PUB).map(s=>s.split(' ')[0]+' '+tot[s]+(tot[s]===PUB[s]?'✓':'('+(tot[s]-PUB[s]>0?'+':'')+(tot[s]-PUB[s])+')')).join('  '));
}
