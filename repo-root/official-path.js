/* ============================================================================
   OFFICIAL PATH — "Path to the Finals": one wrestler's whole tournament, from the OFFICIAL book.
   Pure: no DOM, no Firebase, no clock, no randomness. NO routing logic of its own: it walks the bouts the ONE core already describes
   (core.describe) along the edges the ONE core already owns (core.routes). It works for EVERY wrestler in the field — the same code path for a
   champion, a placer, a 0-2 wrestler, a pigtail wrestler or anyone eliminated — because it never asks "did he place?" or "is he an All-American?":
   it only follows his bouts until they stop. Placement and All-American status are OPTIONAL extra information (opts.floors / opts.events) that
   can add a badge and a team-points line but can never change the journey, the opponents or the outcome.

   compute(core, book, wrestlerId, opts) -> {
     ok, wrestler:{id,name,school,seed,record,weight}, journey:[ row ], next: {...}|null, outcome:{code,label,place,...}, points, aa, problems }
       row = { boutId, key, round, bracket, status:'decided'|'pending'|'waiting', result:'W'|'L'|null, opponent|null, resultType, method, score, time, points }
       outcome.code: 'champion' | 'placed' | 'eliminated' | 'competing'
   opts (all optional): { events: scoring events (official-scoring.js), floors: { wrestlerId: guaranteed place } }
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialPath = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var CHAMP = ['R32', 'R16', 'QF', 'SF', 'FINAL'];
  var CON = ['Con R1', 'Con R2', 'Con R3', 'Blood Round', 'Con QF', 'Con SF'];
  var METHOD = { Dec: 'Dec', MajDec: 'MD', TechFall: 'TF', Fall: 'Fall', MedFFT: 'Med FF', FFT: 'FF', DQ: 'DQ' };
  // The four bouts that END a wrestler's tournament with a finish: [place if he wins, place if he loses]. (Everything else either continues or eliminates.)
  var FINISH = { 'champ:4:0': [1, 2], 'p3:0:0': [3, 4], 'p5:0:0': [5, 6], 'p7:0:0': [7, 8] };

  function roundLabel(key) {
    var p = String(key || '').split(':'), b = p[0], ri = parseInt(p[1], 10);
    if (b === 'pigtail') return 'Pigtail';
    if (b === 'conPigtail') return 'Con Pigtail';
    if (b === 'p3') return '3rd Place';
    if (b === 'p5') return '5th Place';
    if (b === 'p7') return '7th Place';
    if (b === 'champ' && CHAMP[ri]) return CHAMP[ri];
    if (b === 'con' && CON[ri]) return CON[ri];
    return String(key);
  }
  function bracketOf(key) { var b = String(key).split(':')[0]; return b === 'champ' || b === 'pigtail' ? 'championship' : b === 'con' || b === 'conPigtail' ? 'consolation' : 'placement'; }
  function ordinal(n) { return n === 1 ? '1st' : n === 2 ? '2nd' : n === 3 ? '3rd' : n + 'th'; }
  function fail(code, message) { return { ok: false, code: code, message: message }; }
  function person(w) { return w ? { id: w.id, name: String(w.name || '').trim(), school: String(w.school || '').trim(), seed: w.seed, record: w.record || '' } : null; }

  function compute(core, book, wrestlerId, opts) {
    opts = opts || {};
    var m = /^(\d{3})-(\d{2})$/.exec(String(wrestlerId));
    if (!m) return fail('bad_id', 'Not a wrestler id.');
    var weight = parseInt(m[1], 10), ids = [], descs = {}, first = null, problems = [];
    core.keys.forEach(function (k) { var b = core.boutIdOf(weight, k); if (b) ids.push(b); });
    if (!ids.length) return fail('unknown_weight', 'No bouts for weight ' + weight + '.');
    ids.sort(function (a, b) { return a - b; });
    ids.forEach(function (b) {
      var d = core.describe(book, b); descs[b] = d;
      if (first === null && d && ((d.a && d.a.id === wrestlerId) || (d.b && d.b.id === wrestlerId))) first = b;
    });
    if (first === null) return fail('unknown_wrestler', 'That wrestler is not in the field.');

    var events = Array.isArray(opts.events) ? opts.events : null;
    function pointsFor(boutId) {
      if (!events) return null;
      return events.reduce(function (a, e) { return e.wrestlerId === wrestlerId && e.boutId === boutId ? a + e.points : a; }, 0);
    }
    function isMe(w) { return !!w && w.id === wrestlerId; }

    // ---- follow his bouts along the core's own routes until they stop
    var rows = [], cur = first, guard = 0, terminal = null, me = null;
    while (cur !== null && cur !== undefined && guard++ < 24) {
      var d = descs[cur]; if (!d) break;
      var mine = isMe(d.a) ? d.a : isMe(d.b) ? d.b : null;
      if (!mine) { problems.push('bout ' + cur + ' does not contain him'); break; }
      if (!me) me = mine;
      var opp = isMe(d.a) ? d.b : d.a, decided = d.status === 'decided', won = decided && d.winnerId === wrestlerId;
      var res = d.result || null;
      rows.push({
        boutId: cur, key: d.key, round: roundLabel(d.key), bracket: bracketOf(d.key), status: d.status,
        result: decided ? (won ? 'W' : 'L') : null, opponent: person(opp),
        resultType: decided && res ? res.resultType : null, method: decided && res ? (METHOD[res.resultType] || '') : '',
        score: decided && res ? (res.score || '') : '', time: decided && res ? (res.time || '') : '', points: pointsFor(cur)
      });
      if (!decided) break;
      var r = core.routes(cur), nxt = won ? r.winnerTo : r.loserTo;
      if (nxt === null || nxt === undefined) { terminal = { boutId: cur, key: d.key, won: won, champion: won && !!r.winnerIsChampion }; break; }
      cur = nxt;
    }
    if (!me) return fail('unknown_wrestler', 'That wrestler is not in the field.');

    // ---- outcome
    var last = rows[rows.length - 1], outcome;
    if (terminal) {
      var fin = FINISH[terminal.key];
      if (terminal.champion) outcome = { code: 'champion', place: 1, label: 'NCAA Champion', round: last.round };
      else if (fin) { var pl = terminal.won ? fin[0] : fin[1]; outcome = { code: 'placed', place: pl, label: 'Finished ' + ordinal(pl), round: last.round }; }
      else if (!terminal.won) outcome = { code: 'eliminated', place: null, label: 'Eliminated in ' + last.round, round: last.round };
      else { outcome = { code: 'competing', place: null, label: 'Competing', round: last.round }; problems.push('a win ended his path at ' + last.round); }
    } else outcome = { code: 'competing', place: null, label: last.status === 'pending' ? 'Competing — bout ready' : 'Competing — waiting for an opponent', round: last.round };

    // ---- what is next (only while he is still in the tournament)
    var next = null;
    if (!terminal && (last.status === 'pending' || last.status === 'waiting')) {
      var rt = core.routes(last.boutId), destOf = function (b, kind) {
        if (kind === 'win' && rt.winnerIsChampion) return { kind: 'champion', label: 'NCAA Champion' };
        var to = kind === 'win' ? rt.winnerTo : rt.loserTo, fin2 = FINISH[last.key];
        if (to !== null && to !== undefined) return { kind: 'advance', boutId: to, round: roundLabel(core.locate(to).key), label: (kind === 'win' ? 'Advances to ' : 'Drops to ') + roundLabel(core.locate(to).key) };
        if (fin2) return { kind: 'finish', place: fin2[kind === 'win' ? 0 : 1], label: 'Finishes ' + ordinal(fin2[kind === 'win' ? 0 : 1]) };
        return { kind: 'eliminated', label: 'Eliminated' };
      };
      next = { boutId: last.boutId, round: last.round, status: last.status, opponent: last.opponent, waitingOn: null, ifWin: destOf(last.boutId, 'win'), ifLose: destOf(last.boutId, 'lose') };
      if (last.status === 'waiting') {                                             // who will he meet? the bout that feeds the empty slot
        var prev = rows.length > 1 ? rows[rows.length - 2].boutId : null;
        var feeders = ids.filter(function (b) { if (b === prev || b === last.boutId) return false; var q = core.routes(b); return q.winnerTo === last.boutId || q.loserTo === last.boutId; });
        next.waitingOn = feeders.map(function (b) {
          var fd = descs[b], q = core.routes(b);
          return { boutId: b, round: roundLabel(fd.key), via: q.winnerTo === last.boutId ? 'winner' : 'loser', status: fd.status, a: person(fd.a), b: person(fd.b) };
        });
      }
    }

    // ---- team points earned (optional): what this wrestler has earned for his school
    var pts = null;
    if (events) {
      pts = { adv: 0, bonus: 0, place: 0, total: 0 };
      events.forEach(function (e) { if (e.wrestlerId !== wrestlerId) return; if (e.category === 'Advancement') pts.adv += e.points; else if (e.category === 'Bonus') pts.bonus += e.points; else pts.place += e.points; pts.total += e.points; });
    }
    var floors = opts.floors || null;
    return {
      ok: true, wrestler: Object.assign(person(me), { weight: weight }), journey: rows, next: next, outcome: outcome, points: pts,
      aa: floors ? (floors[wrestlerId] !== undefined && floors[wrestlerId] <= 8) : null, problems: problems
    };
  }

  return { compute: compute, roundLabel: roundLabel, ordinal: ordinal, FINISH: FINISH };
});
