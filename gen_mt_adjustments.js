// Generates 'printed-bonus' adjustments for WrestlingStats "MT" tech falls (1 team point; the engine scores tech falls 1.5).
const fs=require('fs'), H=require('./harness.js');
const out={};
for (const YEAR of [1996,1997,1998]) {
  const D=H.readData(YEAR); const P=eval(fs.readFileSync('historical-data/results'+YEAR+'-provenance.js','utf8').replace(/^const \w+ = /m,'(').replace(/;\s*if \(typeof module[\s\S]*$/,')'));
  const by={}; D.forEach(x=>{ const pv=P[x.weight+':'+x.bout]; if(pv && /^MT /.test(pv.printed)) (by[x.winner_school]=by[x.winner_school]||[]).push(x.weight+' lbs, '+x.round+': '+x.winner+' over '+x.loser+', printed "'+pv.printed+'"'); });
  out[YEAR]=Object.fromEntries(Object.entries(by).sort().map(([s,list])=>[s,{points:-0.5*list.length, kind:'printed-bonus', source:'SRC_WS_'+YEAR, bouts:list}]));
}
let js='';
for (const [y,schools] of Object.entries(out)) {
  js+='    '+y+': {\n'+Object.entries(schools).map(([s,a])=>'      '+JSON.stringify(s)+': { points: '+a.points+", kind: 'printed-bonus', source: SRC_WS_MT("+y+"), reason: 'Printed MT tech-fall bonus (1 team point each; engine scores tech falls 1.5): ' + "+JSON.stringify(a.bouts.join('; '))+" + '. Source: ' + SRC_WS_MT("+y+") + '.' }").join(',\n')+'\n    },\n';
}
process.stdout.write(js);
