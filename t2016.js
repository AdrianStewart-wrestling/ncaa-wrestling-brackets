const H=require('./harness.js'); const Y=H.buildYear(process.argv[2]||2016);
console.log('records',Y.records.length,'scored',Y.scores.stats.records,'problems',Y.problems.length,'pending',Y.pendingCount);
Y.scores.teams.slice(0,8).forEach(t=>console.log(' ',String(t.rank||'').padStart(2),t.school.padEnd(20),t.total));
