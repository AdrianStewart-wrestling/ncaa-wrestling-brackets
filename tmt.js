const fs=require('fs'); const YEAR=process.argv[2]; const res=JSON.parse(process.argv[3]);
const D=require('./harness.js').readData(YEAR); const P=eval(fs.readFileSync('historical-data/results'+YEAR+'-provenance.js','utf8').replace(/^const \w+ = /m,'(').replace(/;\s*if \(typeof module[\s\S]*$/,')'));
for(const [s,r] of Object.entries(res)){ const mine=D.filter(x=>x.winner_school===s); const mt=mine.filter(x=>/^MT/.test((P[x.weight+':'+x.bout]||{}).printed||'')).length; const tf=mine.filter(x=>/^TF/.test((P[x.weight+':'+x.bout]||{}).printed||'')).length;
 console.log(s.padEnd(18),'residual',String(r).padEnd(5),'MT wins',mt,'(x0.5 =',mt*0.5+')','  TF wins',tf); }
