/* ============================================================================
   OFFICIAL SCORING — Official Team Scores (pure; no DOM, no Firebase, no engine, no clock, no randomness)
   A pure function of the OFFICIAL results: records -> team scores.

   Scoring model = the Phase 6b OG Excel model, expressed as three small tables (NOT a port of the VBA):
     • ADVANCEMENT  normal NCAA advancement points only: championship win 1, consolation win 0.5; none for the Final and
                    the 3rd / 5th / 7th place bouts.
     • BONUS        to the winner, by result type, in any round (values supplied by the caller — the app passes the
                    core's RESULT_TYPES so there is ONE source of truth).
     • PLACEMENT    INCREMENTAL. Each round has a "floor schedule": the finish a wrestler is guaranteed at least on
                    entering the bout, and the finish a win / a loss guarantees. The wrestler is credited only the
                    DIFFERENCE in placement value between the two floors, at the moment the result is recorded.
                    (QF win -> guaranteed 6th; SF win -> guaranteed 2nd; the Final adds only 2nd -> 1st ...)
   The schedule was derived from the routing topology (min-max over every possible future) and reconciled with the OG
   advancement values; the test-kit re-derives it independently from the Excel routing table.

   Nothing here reads or writes any store. Given the same set of records it returns the same answer regardless of the
   order the records are supplied or were entered: correcting or clearing a result simply changes the input.
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialScoring = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var NONE = 9;                                                    // "no placement yet" (worth 0)
  var PLACE_POINTS = Object.freeze({ 1: 16, 2: 12, 3: 10, 4: 9, 5: 7, 6: 6, 7: 4, 8: 3 });   // NCAA Division I team points

  var ADVANCEMENT = Object.freeze({
    ChampPigtail: 1, R32: 1, R16: 1, QF: 1, SF: 1, Final: 0,
    ConsPigtail: 0.5, ConsR1: 0.5, ConsR2: 0.5, ConsR3: 0.5, BloodRound: 0.5, ConsQF: 0.5, ConsSF: 0.5,
    '3rd': 0, '5th': 0, '7th': 0
  });

  // round -> [ floor on entering, floor a WIN guarantees, floor a LOSS guarantees ]   (place numbers; 9 = none)
  var SCHEDULE = Object.freeze({
    QF:         Object.freeze([NONE, 6, NONE]),
    SF:         Object.freeze([6, 2, 6]),
    Final:      Object.freeze([2, 1, 2]),
    BloodRound: Object.freeze([NONE, 8, NONE]),
    ConsQF:     Object.freeze([8, 6, 8]),
    ConsSF:     Object.freeze([6, 4, 6]),
    '3rd':      Object.freeze([4, 3, 4]),
    '5th':      Object.freeze([6, 5, 6]),
    '7th':      Object.freeze([8, 7, 8])
  });

  var CHAMP_ROUNDS = ['R32', 'R16', 'QF', 'SF', 'Final'];
  var CON_ROUNDS = ['ConsR1', 'ConsR2', 'ConsR3', 'BloodRound', 'ConsQF', 'ConsSF'];

  // Bout key ("champ:2:1", "con:3:0", "p5:0:0", "pigtail:0:0", "conPigtail:0:0") -> round name; null if unknown.
  function roundOfKey(key) {
    var p = String(key || '').split(':'), b = p[0], ri = parseInt(p[1], 10);
    if (b === 'pigtail') return 'ChampPigtail';
    if (b === 'conPigtail') return 'ConsPigtail';
    if (b === 'p3') return '3rd';
    if (b === 'p5') return '5th';
    if (b === 'p7') return '7th';
    if (b === 'champ' && ri >= 0 && ri < CHAMP_ROUNDS.length) return CHAMP_ROUNDS[ri];
    if (b === 'con' && ri >= 0 && ri < CON_ROUNDS.length) return CON_ROUNDS[ri];
    return null;
  }

  function worth(place) { return PLACE_POINTS[place] || 0; }
  function label(place) { return place >= NONE ? 'none' : place === 1 ? '1st' : place === 2 ? '2nd' : place === 3 ? '3rd' : place + 'th'; }
  function cmp(a, b) { return a < b ? -1 : a > b ? 1 : 0; }         // locale-independent, deterministic

  // records: [{ weight, key, boutId, winnerId, loserId, resultType }]  (exactly what TournamentCore.toRecords() returns)
  // opts:    { bonusOf(resultType) -> number | undefined,  schoolOf(wrestlerId) -> string | '' }
  // returns: { teams: [{ school, total, adv, bonus, place, aa, rank, tied, rankLabel }], events: [...], problems: [...],
//            floors: { wrestlerId: best guaranteed place }, stats }
  //   total is ALWAYS adv + bonus + place.   aa = wrestlers who have CLINCHED a top-8 finish.
  function compute(records, opts) {
    opts = opts || {};
    var bonusFn = opts.bonusOf || function () { return undefined; };
    var schoolFn = opts.schoolOf || function () { return ''; };
    // a failing lookup is a reported problem, never an exception in the middle of drawing a live scoreboard
    function bonusOf(t) { try { return bonusFn(t); } catch (e) { return undefined; } }
    function schoolOf(id) { try { return schoolFn(id) || ''; } catch (e) { return ''; } }
    var problems = [], events = [], byTeam = Object.create(null), floors = Object.create(null), schoolOfWrestler = Object.create(null);

    function team(s) { return byTeam[s] || (byTeam[s] = { school: s, adv: 0, bonus: 0, place: 0 }); }
    function add(s, cat, pts, src, r, round, who) {
      if (!pts) return;
      var t = team(s); if (cat === 'Advancement') t.adv += pts; else if (cat === 'Bonus') t.bonus += pts; else t.place += pts;
      events.push({ school: s, wrestlerId: who, weight: r.weight, boutId: r.boutId, round: round, category: cat, points: pts, source: src });
    }
    function floor(who, place, s) { schoolOfWrestler[who] = s; if (floors[who] === undefined || place < floors[who]) floors[who] = place; }

    // a fixed processing order (by bout number) makes the result independent of the order the records arrive in
    var recs = (records || []).slice().sort(function (a, b) { return (a.boutId - b.boutId) || cmp(String(a.key), String(b.key)); });
    recs.forEach(function (r) {
      var round = roundOfKey(r.key);
      if (!round) { problems.push({ boutId: r.boutId, code: 'unknown_bout', message: 'unrecognised bout ' + r.key }); return; }
      var ws = schoolOf(r.winnerId);
      if (!ws) { problems.push({ boutId: r.boutId, code: 'unknown_wrestler', message: 'no school for ' + r.winnerId }); return; }

      var bonus = bonusOf(r.resultType);
      if (typeof bonus !== 'number') { problems.push({ boutId: r.boutId, code: 'unknown_result_type', message: 'unknown result type ' + r.resultType }); bonus = 0; }
      add(ws, 'Bonus', bonus, 'ResultType', r, round, r.winnerId);
      add(ws, 'Advancement', ADVANCEMENT[round] || 0, 'RoundTable', r, round, r.winnerId);

      var sch = SCHEDULE[round];
      if (sch) {
        var entry = sch[0], win = sch[1], lose = sch[2];
        add(ws, 'Placement', worth(win) - worth(entry), 'Floor ' + label(entry) + ' -> ' + label(win), r, round, r.winnerId);
        floor(r.winnerId, win, ws);
        var ls = r.loserId ? schoolOf(r.loserId) : '';
        if (ls) {
          add(ls, 'Placement', worth(lose) - worth(entry), 'Floor ' + label(entry) + ' -> ' + label(lose), r, round, r.loserId);
          floor(r.loserId, lose, ls);
        }
      }
    });

    var aaBy = Object.create(null);
    Object.keys(floors).forEach(function (w) { if (floors[w] <= 8) aaBy[schoolOfWrestler[w]] = (aaBy[schoolOfWrestler[w]] || 0) + 1; });

    var teams = Object.keys(byTeam).map(function (s) {
      var t = byTeam[s];
      return { school: s, total: t.adv + t.bonus + t.place, adv: t.adv, bonus: t.bonus, place: t.place, aa: aaBy[s] || 0 };
    });
    teams.sort(function (a, b) { return (b.total - a.total) || cmp(a.school, b.school); });       // total, then alphabetical (ordering only)
    teams.forEach(function (t) {
      var better = 0; teams.forEach(function (o) { if (o.total > t.total) better++; });
      t.rank = better + 1;                                                                     // competition rank by TOTAL only
      t.tied = teams.some(function (o) { return o !== t && o.total === t.total; });
      t.rankLabel = t.tied ? 'T-' + t.rank : String(t.rank);
    });
    return { teams: teams, events: events, problems: problems, floors: Object.assign({}, floors), stats: { records: recs.length, teams: teams.length, events: events.length } };
  }

  // "Top N": the first N rows, extended so a tie group is never split by the cut.
  function topRows(teams, limit) {
    if (teams.length <= limit) return teams.slice();
    var n = limit;
    while (n < teams.length && teams[n].rank === teams[n - 1].rank) n++;
    return teams.slice(0, n);
  }

  return {
    compute: compute, topRows: topRows, roundOfKey: roundOfKey, label: label,
    ADVANCEMENT: ADVANCEMENT, SCHEDULE: SCHEDULE, PLACE_POINTS: PLACE_POINTS, NONE: NONE
  };
});
