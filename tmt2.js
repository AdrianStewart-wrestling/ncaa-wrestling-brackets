const H=require('./harness.js'), fs=require('fs'); const YEAR=+process.argv[2]; const PUB={}; process.argv[3].split(';').forEach(kv=>{const [k,v]=kv.split('=');PUB[k]=+v;});
const Y=H.buildYear(YEAR), OLD=[16,12,9,7,5,3,2,1], bonus=c=>{const t=(TournamentCore.RESULT_TYPES||[]).find(x=>x.code===c);return t?t.bonus:undefined};
const D=H.readData(YEAR); const P=eval(fs.readFileSync('historical-data/results'+YEAR+'-provenance.js','utf8').replace(/^const \w+ = /m,'(').replace(/;\s*if \(typeof module[\s\S]*$/,')'));
const mtWins={}; D.forEach(x=>{ if(/^MT/.test((P[x.weight+':'+x.bout]||{}).printed||'')) mtWins[x.winner_school]=(mtWins[x.winner_school]||0)+1; });
const byW={}; Y.records.forEach(r=>(byW[r.weight]=byW[r.weight]||[]).push(r));
const credits=(mode)=>{ const out={}; Object.values(byW).forEach(recs=>{ let c;
   if(mode==='rule') c=HistoricalRules.byeCredits(recs);
   else if(mode==='champ-only') { c=HistoricalRules.byeCredits(recs); Object.keys(c).forEach(k=>{ c[k]=Math.floor(c[k]); }); }
   else if(mode==='none') c={};
   Object.entries(c).forEach(([i,p])=>out[i]=(out[i]||0)+p); }); return out; };
for (const [label,mt,mode] of [['rule set',0,'rule'],['rule set + MT=1',1,'rule'],['MT=1 + champ bye pts only (no 0.5 cons)',1,'champ-only'],['MT=1 + no bye pts',1,'none']]) {
  const adj={}, add=(s,p)=>{ if(s)(adj[s]=adj[s]||{points:0,kind:'scoring-rule',reason:'t'}).points+=p; };
  Object.entries(HistoricalRules.placementDeltas(Y.records,OLD)).forEach(([i,d])=>add(Y.schoolOf[i],d));
  Object.entries(credits(mode)).forEach(([i,d])=>add(Y.schoolOf[i],d));
  if(mt) Object.entries(mtWins).forEach(([s,n])=>add(s,-0.5*n));
  const sc=OfficialScoring.compute(Y.records,{bonusOf:bonus,schoolOf:i=>Y.schoolOf[i]||'',adjustments:adj,schools:Object.keys(Y.idsBySchool)});
  const t={}; sc.teams.forEach(x=>t[x.school]=x.total);
  console.log((Object.keys(PUB).filter(s=>t[s]===PUB[s]).length+'/'+Object.keys(PUB).length).padEnd(6), label.padEnd(42), Object.keys(PUB).map(s=>s.split(' ')[0]+(t[s]===PUB[s]?'✓':(t[s]>PUB[s]?'+':'')+(t[s]-PUB[s]))).join(' '));
}
