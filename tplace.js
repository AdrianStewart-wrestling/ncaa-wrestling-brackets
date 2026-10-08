const H=require('./harness.js'); const Y=H.buildYear(1998);
const S=JSON.parse(require('fs').readFileSync('/home/claude/y98/summary_placers.json'));
let ok=0,bad=[];
for(const [wt,pl] of Object.entries(S)) for(const [p,name] of Object.entries(pl)){ const got=(Y.place[wt]||{})[p]; if(got===name) ok++; else bad.push(`${wt} ${p}: summary ${name} / replay ${got}`); }
console.log('placers matching the summary page:',ok,'of',ok+bad.length); bad.forEach(b=>console.log('  ',b));
