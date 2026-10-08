// Career Registry regression tests (Oct 2026). Run: node tools/career/test_registry.js
// 1) the registry rebuilds byte-for-byte from the current one (deterministic, no ID movement);
// 2) every approved merge in merge_fixture.json sits on its canonical (first-issued) ID with exactly its appearances,
//    and every alias resolves to that canonical ID; 3) every alias points at a live career and no alias is also a live career;
// 4) the canonical rule holds: no alias of a merged career is numbered below its canonical ID;
// 5) groups recorded as different people do not share a career.
const fs = require('fs'), path = require('path'), cp = require('child_process');
const HERE = __dirname, ROOT = path.join(HERE, '..', '..');
const rd = f => { const t = fs.readFileSync(f, 'utf8'); return JSON.parse(t.slice(t.indexOf('/*JSON*/') + 8, t.indexOf('/*END*/'))); };
let pass = 0, fail = 0; const check = (n, ok, d) => { ok ? pass++ : fail++; console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok || d === undefined ? '' : '  -- ' + JSON.stringify(d).slice(0, 300))); };
cp.execFileSync(process.execPath, [path.join(HERE, 'build_registry.js')], { stdio: 'ignore' });
check('registry rebuilds byte-for-byte (deterministic, no ID moved)', fs.readFileSync(path.join(HERE, 'out', 'historical-careers.js'), 'utf8') === fs.readFileSync(path.join(ROOT, 'historical-careers.js'), 'utf8'));
const R = rd(path.join(ROOT, 'historical-careers.js')), A = R.aliases || {};
const resolve = id => R.careers[id] ? id : A[id] || null;
const F = JSON.parse(fs.readFileSync(path.join(HERE, 'merge_fixture.json'), 'utf8'));
const bad = F.merges.filter(m => !R.careers[m.canonical] || JSON.stringify(R.careers[m.canonical].keys.slice().sort()) !== JSON.stringify(m.keys.slice().sort()) || m.keys.some(k => R.byKey[k] !== m.canonical));
check(`approved merges on their canonical ID with exactly their appearances (${F.merges.length})`, bad.length === 0, bad.map(m => m.name));
const badA = F.merges.filter(m => m.aliases.some(a => resolve(a) !== m.canonical));
check(`aliases of approved merges resolve to the canonical ID (${F.merges.reduce((n, m) => n + m.aliases.length, 0)})`, badA.length === 0, badA.map(m => m.name));
check('every alias points at a live career; no alias is also a live career', Object.entries(A).every(([a, t]) => R.careers[t] && !R.careers[a]));
check('canonical rule: first-issued ID wins (no alias numbered below its canonical)', F.merges.every(m => m.aliases.every(a => +a.slice(1) > +m.canonical.slice(1))));
const badS = F.heldSplit.groups.filter(g => new Set(g.keys.map(k => R.byKey[k])).size < 2);
check(`groups recorded as different people stay in separate careers (${F.heldSplit.groups.length})`, badS.length === 0, badS.map(g => g.name));
console.log(`\n${pass}/${pass + fail} Career Registry tests passed`); process.exit(fail ? 1 : 0);
