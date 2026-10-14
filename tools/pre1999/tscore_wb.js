// 1990-1995 scoring validation: model totals vs every published top-ten total (summary page). Usage: node tscore_wb.js YEAR x<YEAR>.json
const H=require(require('path').join(__dirname,'harness.js')); const fs=require('fs');
const YEAR=+process.argv[2]; const X=JSON.parse(fs.readFileSync(process.argv[3]));
const SCH={'Cal State-Bakersfield':'CSU Bakersfield','North Carolina State':'NC State','Pennsylvania':'Penn','Ohio University':'Ohio','Franklin & Marshall':'Franklin and Marshall','Southwestern Oklaho':'Southwestern Oklahoma','Cal Poly-SLO':'Cal Poly','Cal State-Fullerton':'Cal State Fullerton','Tennessee-Chattanooga':'Chattanooga','SUNY-Buffalo':'Buffalo','Virginia Military':'VMI','North Carolina-Greensboro':'UNC Greensboro','California-Davis':'UC Davis'};
const pub=[]; X.summary.split('\n').forEach(l=>{ const re=/(\d+) ([A-Za-z][A-Za-z .&'\-]+?) (\d+(?:\.\d+)?)(?: \(\d+\))?(?= \d+ [A-Za-z]|$)/g; let m; while((m=re.exec(l))) pub.push({rank:+m[1],school:SCH[m[2].trim()]||m[2].trim(),total:+m[3]}); });
const Y=H.buildYear(YEAR); const t={}; Y.scores.teams.forEach(x=>t[x.school]=x);
let exact=0; const lines=pub.sort((a,b)=>a.rank-b.rank).map(p=>{ const m=t[p.school]; const v=m?m.total:null; if(v===p.total) exact++;
  return '  '+String(p.rank).padStart(2)+' '+p.school.padEnd(22)+' published '+String(p.total).padEnd(7)+' model '+String(v).padEnd(7)+(v===p.total?'exact':'residual '+(v>p.total?'+':'')+(v-p.total))+(m?'   (adv '+m.adv+', bonus '+m.bonus+', place '+m.place+')':''); });
console.log(YEAR+': '+exact+'/'+pub.length+' published top-ten totals exact; scoring problems: '+Y.scores.problems.length); console.log(lines.join('\n'));
