// NCAA Career Registry builder (deterministic; complete; every input is a file in tools/career/ or the repo).
//
// Inputs
//   appearances.json        every historical appearance, from appearances.js (the real engine)
//   school_aliases.json     spelling-only aliases (same institution); optional per-year scoping
//   career-decisions.txt    reviewed LINK / SPLIT decisions (each with evidence + source)
//   <repo>/historical-careers.js   the PREVIOUS registry -- career IDs are PERSISTENT
// Output (tools/career/out/)
//   historical-careers.js   the registry the site loads (copy to the repo root to publish)
//   registry_report.txt     counts + every UNRESOLVED review case (kept split until a decision is added)
//
// Rules (unchanged from the original 2026 builder; recovered from its source):
//   AUTOMATIC link = same normalized name AND same canonical school AND no two appearances in one year AND span <= 6 seasons
//                    AND every step's weight move is at most 2 classes up or 1 class down.
//   Everything else is a REVIEW CASE: it stays split unless career-decisions.txt says LINK (with evidence + source).
//   Gates: a SPLIT decision's keys must end up in different careers; no career may have two appearances in one year.
//
// Usage:  node tools/career/build_registry.js [--prev <registry.js>] [--years 1999-2026]
const fs = require('fs'), path = require('path');
const HERE = __dirname, ROOT = process.env.ROOT || path.join(HERE, '..', '..');
const arg = (n, d) => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : d; };
const PREV = arg('--prev', path.join(ROOT, 'historical-careers.js'));
const OUTDIR = arg('--out', path.join(HERE, 'out')); fs.mkdirSync(OUTDIR, { recursive: true });
const OUT = path.join(OUTDIR, 'historical-careers.js');
const yr = arg('--years', null), YMIN = yr ? +yr.split('-')[0] : -Infinity, YMAX = yr ? +yr.split('-')[1] : Infinity;

const apps = JSON.parse(fs.readFileSync(path.join(HERE, 'appearances.json'), 'utf8')).filter(a => a.year >= YMIN && a.year <= YMAX);
const SAFILE = JSON.parse(fs.readFileSync(path.join(HERE, 'school_aliases.json'), 'utf8'));
// school_aliases.json: { "aliases": { "Printed": "Canonical", ... }, "scoped": { "Printed": { "to": "Canonical", "years": [..], "why": ".." } } }
const SA = SAFILE.aliases, SCOPED = SAFILE.scoped || {};
const W = [125, 133, 141, 149, 157, 165, 174, 184, 197, 285], wi = w => W.indexOf(w);
const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[`'’.,]/g, '').toLowerCase().replace(/[^a-z]+/g, ' ').trim().replace(/ (jr|sr|ii|iii|iv)$/, '').trim();
const canon = (s, year) => { const sc = SCOPED[s]; if (sc && sc.years.includes(year)) return sc.to; return SA[s] || s; };
const byKey = {}; apps.forEach(a => { a.canon = canon(a.school, a.year); byKey[a.key] = a; });
if (Object.keys(byKey).length !== apps.length) throw new Error('appearance keys are not unique');

// union-find
const P = {}; const find = k => P[k] === k ? k : (P[k] = find(P[k])); const union = (x, y) => { x = find(x); y = find(y); if (x !== y) P[y] = x; };
apps.forEach(a => P[a.key] = a.key);
const prov = {}; const addProv = (k, p) => { (prov[k] = prov[k] || new Set()).add(p); };

// 1) AUTOMATIC rule
const plausible = g => { const ys = g.map(a => a.year); if (ys.length !== new Set(ys).size) return false; if (ys[ys.length - 1] - ys[0] > 6) return false;
  for (let j = 1; j < g.length; j++) { const dw = wi(g[j].weight) - wi(g[j - 1].weight); if (dw > 2 || dw < -1) return false; } return true; };
const groups = {}; apps.forEach(a => { const k = norm(a.name) + '|' + a.canon; (groups[k] = groups[k] || []).push(a); });
Object.values(groups).forEach(g => { g.sort((x, y) => x.year - y.year); if (g.length < 2 || !plausible(g)) return; for (let j = 1; j < g.length; j++) union(g[0].key, g[j].key); g.forEach(a => addProv(a.key, 'auto')); });

// 2) DECISIONS   CASE | LINK|SPLIT | key,key,... | evidence | source [| display name]
const decs = fs.readFileSync(path.join(HERE, 'career-decisions.txt'), 'utf8').split('\n').filter(l => /^[A-Z]\d+ \|/.test(l)).map(l => {
  const [cse, d, keys, ev, src, dn] = l.split(' | '); return { cse, d: d.trim(), keys: keys.split(',').map(s => s.trim()), ev, src, dn: dn && dn.trim() }; })
  .filter(x => x.keys.every(k => { const y = +k.split(':')[0]; return y >= YMIN && y <= YMAX; }));
decs.forEach(x => { if (!['LINK', 'SPLIT'].includes(x.d)) throw new Error(x.cse + ': decision must be LINK or SPLIT');
  x.keys.forEach(k => { if (!byKey[k]) throw new Error(x.cse + ': unknown appearance key ' + k); }); if (!x.ev || !x.src) throw new Error(x.cse + ': decision without evidence/source'); });
decs.filter(x => x.d === 'LINK').forEach(x => { for (let j = 1; j < x.keys.length; j++) union(x.keys[0], x.keys[j]); x.keys.forEach(k => addProv(k, 'decision ' + x.cse)); });

// 3) components + gates
const comp = {}; apps.forEach(a => { const r = find(a.key); (comp[r] = comp[r] || []).push(a); });
const errors = [];
decs.filter(x => x.d === 'SPLIT').forEach(x => { const roots = new Set(x.keys.map(find)); if (roots.size !== x.keys.length) errors.push(x.cse + ': SPLIT keys ended up in one career'); x.keys.forEach(k => addProv(k, 'decision ' + x.cse)); });
Object.values(comp).forEach(c => { const ys = c.map(a => a.year); if (ys.length !== new Set(ys).size) errors.push('career with two appearances in one year: ' + c.map(a => a.key + ' ' + a.name).join(', ')); });
if (errors.length) { console.log('REGISTRY GATE FAILURES:\n' + errors.join('\n')); process.exit(1); }

// 4) persistent IDs (an existing appearance keeps its career ID; new careers continue after the highest ID)
let prev = null; if (PREV && fs.existsSync(PREV)) { const t = fs.readFileSync(PREV, 'utf8'); prev = JSON.parse(t.slice(t.indexOf('/*JSON*/') + 8, t.indexOf('/*END*/'))); }
const ordered = Object.values(comp).map(c => c.sort((x, y) => x.year - y.year || x.weight - y.weight || x.seed - y.seed)).sort((p, q) => { const a = p[0], b = q[0]; return a.year - b.year || a.weight - b.weight || a.seed - b.seed; });
// CAREER ID ALIASES (Oct 2026): every career ID ever published stays resolvable and is never reissued. When a merge retires
// an ID it becomes an alias of the surviving (earliest-established) career: aliases: { retiredId: canonicalId }.
const prevAliases = (prev && prev.aliases) || {};
const everIssued = prev ? Object.keys(prev.careers).concat(Object.keys(prevAliases)) : [];
const used = new Set(); let next = 1; if (prev) next = 1 + Math.max(0, ...everIssued.map(id => +id.slice(1)));   // never reuse an ID, alias or live
const careers = {}, keyToCareer = {}, idOrder = [];
ordered.forEach(c => { let id = null;
  if (prev) { for (const a of c) { const pid = prev.byKey[a.key]; if (pid && !used.has(pid)) { id = pid; break; } } }
  if (!id) id = 'C' + String(prev ? next++ : (idOrder.length + 1)).padStart(4, '0');
  used.add(id); idOrder.push(id);
  const pv = [...new Set(c.flatMap(a => [...(prov[a.key] || [])]))];
  const named = decs.find(x => x.dn && x.keys.some(k => c.some(a => a.key === k)));
  careers[id] = { name: named ? named.dn : c[c.length - 1].name, keys: c.map(a => a.key), provenance: pv.length ? pv : ['single appearance'] };
  c.forEach(a => keyToCareer[a.key] = id); });
// careers in the original order (by first appearance), byKey in the original order (career order, then appearance order)
// previous aliases carry forward; a previous career ID with no career of its own becomes an alias of the career that now holds
// its first appearance; chains are flattened so every alias points at a live career. Gate: every ID ever issued resolves.
const aliases = {};
if (prev) {
  Object.entries(prevAliases).forEach(([a, t]) => { aliases[a] = t; });
  Object.entries(prev.careers).forEach(([pid, pc]) => { if (!careers[pid]) { const t = keyToCareer[pc.keys[0]]; if (t) aliases[pid] = t; } });
  const live = id => { let g = 0; while (!careers[id] && aliases[id] && g++ < 50) id = aliases[id]; return id; };
  Object.keys(aliases).forEach(a => { aliases[a] = live(aliases[a]); });
  const bad = everIssued.filter(id => !careers[id] && !(aliases[id] && careers[aliases[id]]));
  Object.keys(aliases).filter(a => careers[a]).forEach(a => bad.push(a + ' (both alias and live career)'));
  if (bad.length) { console.log('REGISTRY GATE FAILURES:\npreviously issued career IDs that no longer resolve: ' + bad.join(', ')); process.exit(1); }
}
const years = [...new Set(apps.map(a => a.year))].sort((a, b) => a - b);
const flatAliases = Object.assign({ _note: 'Spelling-only school aliases (same institution). Each value is the canonical school name.' }, SA,
  Object.fromEntries(Object.entries(SCOPED).map(([k, v]) => [k, v.to])));   // display map (index.html reads aliases[school]); see README "scoped aliases"
const reg = { version: 1, coverage: { years, note: years[0] + '-' + years[years.length - 1] + ' NCAA Championships in Tournament Central (no 2020 Championships)' },
  schoolAliases: SAFILE.displayOrder ? Object.fromEntries(SAFILE.displayOrder.map(k => [k, flatAliases[k]])) : flatAliases, careers, byKey: keyToCareer, ...(Object.keys(aliases).length ? { aliases } : {}) };
const js = '/* Tournament Central — NCAA Career Registry. GENERATED by build_registry.js from historical appearances (year:weight-seed),\n' +
  '   the spelling-only school alias table and the reviewed career-decisions.txt. Do not hand-edit; career IDs are persistent. */\n' +
  'const HistoricalCareers = /*JSON*/' + JSON.stringify(reg) + '/*END*/;\n' +
  '// resolve(id): a live career ID or a retired one (alias) -> the live canonical ID; null if never issued\n' +
  "HistoricalCareers.resolve = function (id) { return HistoricalCareers.careers[id] ? id : (HistoricalCareers.aliases && HistoricalCareers.aliases[id]) || null; };\n" +
  "if (typeof window !== 'undefined') window.HistoricalCareers = HistoricalCareers;\nif (typeof module === 'object' && module.exports) module.exports = HistoricalCareers;\n";
fs.writeFileSync(OUT, js);

// 5) review cases (never auto-linked; listed so they can be decided) and report
const ids = Object.keys(careers), multi = ids.filter(id => careers[id].keys.length > 1);
const fmt = g => g.map(a => a.year + '/' + a.label + ' ' + a.name + ' (' + a.canon + ')').join(' > ');
const decidedTogether = ks => { const cov = new Set(decs.flatMap(x => x.keys)); return ks.every(k => cov.has(k)); };   // decided only when EVERY appearance in the case is covered by a decision (a partial decision, e.g. carried-forward R4, leaves the rest open)
const careerOf = a => keyToCareer[a.key];
const cases = [];
// A. exact name, different canonical school, within 6 seasons, in different careers
const byName = {}; apps.forEach(a => (byName[norm(a.name)] = byName[norm(a.name)] || []).push(a));
Object.values(byName).forEach(g => { const cs = [...new Set(g.map(careerOf))]; if (cs.length < 2) return; g.sort((x, y) => x.year - y.year);
  if (g[g.length - 1].year - g[0].year > 6) { cases.push({ t: 'B', g }); return; }
  if (new Set(g.map(a => a.canon)).size > 1) cases.push({ t: 'A', g }); else cases.push({ t: 'B', g }); });
// C. same surname + same canonical school + same first initial, different normalized name, within 6 seasons, different careers
const bySur = {}; apps.forEach(a => { const n = norm(a.name).split(' '); (bySur[n[n.length - 1] + '|' + n[0][0] + '|' + a.canon] = bySur[n[n.length - 1] + '|' + n[0][0] + '|' + a.canon] || []).push(a); });
Object.values(bySur).forEach(g => { if (new Set(g.map(a => norm(a.name))).size < 2) return; if (new Set(g.map(careerOf)).size < 2) return;
  g.sort((x, y) => x.year - y.year); if (g[g.length - 1].year - g[0].year > 6) return; cases.push({ t: 'C', g }); });
const unresolved = cases.filter(c => !decidedTogether(c.g.map(a => a.key)));
const NEWY = prev ? new Set(years.filter(y => !(prev.coverage.years || []).includes(y))) : new Set();
const isNew = c => c.g.some(a => NEWY.has(a.year));
const rep = ['years: ' + years[0] + '-' + years[years.length - 1] + ' (' + years.length + ')', 'appearances: ' + apps.length, 'unique careers: ' + ids.length,
  'multi-year careers: ' + multi.length, 'single-appearance careers: ' + (ids.length - multi.length),
  'decisions: ' + decs.length + ' (LINK ' + decs.filter(x => x.d === 'LINK').length + ', SPLIT ' + decs.filter(x => x.d === 'SPLIT').length + ')',
  'review cases UNRESOLVED (kept split): ' + unresolved.length + (NEWY.size ? ' -- of which involve the new years ' + [...NEWY].join(',') + ': ' + unresolved.filter(isNew).length : ''),
  'new careers this build: ' + (prev ? ids.filter(id => !prev.careers[id]).length : ids.length)];
fs.writeFileSync(path.join(OUTDIR, 'registry_report.txt'), rep.join('\n') + '\n\n' +
  'UNRESOLVED REVIEW CASES INVOLVING NEW YEARS (A = same name, different school; B = same name, implausible as one career; C = spelling variant)\n' +
  'Each stays split. To link one, add a LINK line to career-decisions.txt with evidence and a source, then rebuild.\n' +
  unresolved.filter(c => !NEWY.size || isNew(c)).map(c => c.t + '  ' + fmt(c.g) + '\n     keys: ' + c.g.map(a => a.key).join(',')).join('\n') + '\n');
console.log(rep.join('\n'));
console.log('wrote', path.relative(process.cwd(), OUT), 'and registry_report.txt');
