// node tcheck.js YEAR placers.json 'School=pts;School=pts;...'   -> placers vs summary page + scoring-rule variants vs published top ten
const H=require('./harness.js'); const [,,YEAR,PL,PUBS]=process.argv;
const Y=H.buildYear(Number(YEAR)); const S=JSON.parse(require('fs').readFileSync(PL));
let ok=0,bad=[]; for(const [wt,pl] of Object.entries(S)) for(const [p,n] of Object.entries(pl)){ if((Y.place[wt]||{})[p]===n) ok++; else bad.push(`${wt} ${p}: summary ${n} / replay ${(Y.place[wt]||{})[p]}`); }
console.log(`placers: ${ok}/${ok+bad.length}`); bad.forEach(b=>console.log('  ',b));
const PUB={}; PUBS.split(';').forEach(kv=>{const [k,v]=kv.split('=');PUB[k]=Number(v);});
const OLD=[16,12,9,7,5,3,2,1], bonus=c=>{const t=(TournamentCore.RESULT_TYPES||[]).find(x=>x.code===c);return t?t.bonus:undefined};
for (const [label,uP,uB] of [['modern',0,0],['old place',1,0],['bye pts',0,1],['old place + bye pts',1,1]]) {
  const adj={}, add=(id,p)=>{const s=Y.schoolOf[id]; if(s) (adj[s]=adj[s]||{points:0,kind:'scoring-rule',reason:'t'}).points+=p;};
  if(uP) Object.entries(HistoricalRules.placementDeltas(Y.records,OLD)).forEach(([i,d])=>add(i,d));
  if(uB) Object.entries(HistoricalRules.byeCredits(Y.records)).forEach(([i,d])=>add(i,d));
  const sc=OfficialScoring.compute(Y.records,{bonusOf:bonus,schoolOf:i=>Y.schoolOf[i]||'',adjustments:adj,schools:Object.keys(Y.idsBySchool)});
  const tot={}; sc.teams.forEach(t=>tot[t.school]=t.total);
  console.log(label.padEnd(20), Object.keys(PUB).filter(s=>tot[s]===PUB[s]).length+'/'+Object.keys(PUB).length,' ', Object.keys(PUB).map(s=>s.split(' ')[0]+' '+tot[s]+(tot[s]===PUB[s]?'✓':'('+(tot[s]>PUB[s]?'+':'')+(tot[s]-PUB[s])+')')).join(' '));
}
