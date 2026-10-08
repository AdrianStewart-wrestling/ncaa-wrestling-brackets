const H=require('./harness.js'); const Y=H.buildYear(process.argv[2]);
Y.problems.forEach(p=>console.log('PROBLEM',p.slice(0,700)));
