const H=require(require('path').join(process.env.ROOT,'harness.js'));
const years=[1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2021,2022,2023,2024,2025,2026];
const out={};
for(const y of years){ const Y=H.buildYear(y);
  out[y]={problems:Y.problems, pending:Y.pendingCount||0, records:Y.records.map(r=>[r.key,r.weight,r.winnerId,r.loserId,r.resultType,r.score,r.time].join('|')).sort(),
          place:Y.place, totals:Y.scores.teams.map(t=>t.school+'='+t.total), byeCredits:Y.byeCredits||null}; }
process.stdout.write(JSON.stringify(out));
