// Final team totals exactly as the site computes them (harness = the site's buildYear + scoring), vs the published top ten.
const H=require('./harness.js'); const YEAR=+process.argv[2]; const PUB={}; process.argv[3].split(';').forEach(kv=>{const [k,v]=kv.split('=');PUB[k]=+v;});
const Y=H.buildYear(YEAR); const t={}; Y.scores.teams.forEach(x=>t[x.school]=x.total);
console.log(YEAR, (Object.keys(PUB).filter(s=>t[s]===PUB[s]).length+'/10 exact').padEnd(10), Object.keys(PUB).map(s=>s+' '+t[s]+(t[s]===PUB[s]?'✓':' ('+(t[s]>PUB[s]?'+':'')+(t[s]-PUB[s])+')')).join(', '));
