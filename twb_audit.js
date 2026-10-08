// Structural audit of a wrestleback year: per weight, bout counts by round (from the replayed records), placers vs summary page.
const H=require('./harness.js'); const YEAR=+process.argv[2]; const S=JSON.parse(require('fs').readFileSync(process.argv[3]));
const Y=H.buildYear(YEAR); let ok=0,bad=[];
for(const [wt,pl] of Object.entries(S)) for(const [p,n] of Object.entries(pl)){ if((Y.place[wt]||{})[p]===n) ok++; else bad.push(wt+' '+p+': summary '+n+' / replay '+(Y.place[wt]||{})[p]); }
console.log('problems',Y.problems.length,'| placers',ok+'/'+(ok+bad.length)); bad.forEach(b=>console.log('  ',b));
const byW={}; Y.records.forEach(r=>{ const k=r.key.replace(/:\d+$/,''); (byW[r.weight]=byW[r.weight]||{}); byW[r.weight][k]=(byW[r.weight][k]||0)+1; });
Object.entries(byW).forEach(([w,c])=>console.log(' ',w, Object.entries(c).sort().map(([k,n])=>k+'='+n).join(' ')));
