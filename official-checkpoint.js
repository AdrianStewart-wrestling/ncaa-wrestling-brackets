/* ============================================================================
   OFFICIAL CHECKPOINT — "Saturday-morning" historical snapshot. Pure: no DOM, no Firebase, no clock. This is a lookup
   table (round name -> tournament day) plus one function that turns it into the exact bout IDs to remove for a given
   checkpoint. No routing or scoring logic of its own — it only classifies bout keys the ONE core already owns, the same
   way official-scoring.js / official-path.js already classify keys into round names.

   THU/FRI/SAT — the standard NCAA DI three-session schedule, confirmed with the user:
     Thursday : Championship Pigtail, R32, R16 · Consolation Pigtail, Con R1
     Friday   : Championship QF · Con R2, Con R3, Blood Round
     Saturday : Championship SF, Final · Con QF, Con SF · 7th, 5th, 3rd place
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialCheckpoint = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var DAY = Object.freeze({
    ChampPigtail: 'Thu', R32: 'Thu', R16: 'Thu', ConsPigtail: 'Thu', ConsR1: 'Thu',
    QF: 'Fri', ConsR2: 'Fri', ConsR3: 'Fri', BloodRound: 'Fri',
    SF: 'Sat', Final: 'Sat', ConsQF: 'Sat', ConsSF: 'Sat', '7th': 'Sat', '5th': 'Sat', '3rd': 'Sat'
  });
  var CHAMP = ['R32', 'R16', 'QF', 'SF', 'Final'], CON = ['ConsR1', 'ConsR2', 'ConsR3', 'BloodRound', 'ConsQF', 'ConsSF'];
  function roundOfKey(key) {                                                     // identical mapping to official-scoring.js's roundOfKey; kept local so this module has zero dependency on that one
    var p = String(key || '').split(':'), b = p[0], ri = parseInt(p[1], 10);
    if (b === 'pigtail') return 'ChampPigtail'; if (b === 'conPigtail') return 'ConsPigtail';
    if (b === 'p3') return '3rd'; if (b === 'p5') return '5th'; if (b === 'p7') return '7th';
    if (b === 'champ' && CHAMP[ri]) return CHAMP[ri]; if (b === 'con' && CON[ri]) return CON[ri];
    return null;
  }

  // core: the ONE tournament core (needs .keys and .boutIdOf). weights: the list of weight classes.
  // Returns { checkpoints: { sat: { label, keepThrough, removeDays, ids: [...], byRound: {...} } } } — one entry today (Sat), structured so a future checkpoint (e.g. Friday-morning) is a one-line addition, not a new engine.
  function plan(core, weights) {
    var all = [];
    weights.forEach(function (w) { core.keys.forEach(function (k) { var b = core.boutIdOf(w, k); if (b) all.push({ id: b, round: roundOfKey(k) }); }); });
    var byId = {}; all.forEach(function (r) { byId[r.id] = r.round; });
    function idsFor(days) { return all.filter(function (r) { return days.indexOf(DAY[r.round]) >= 0; }).map(function (r) { return r.id; }).sort(function (a, b) { return a - b; }); }
    var sat = idsFor(['Sat']), byRound = {};
    sat.forEach(function (id) { var r = byId[id]; byRound[r] = (byRound[r] || 0) + 1; });
    return {
      total: all.length,
      dayOf: function (id) { var r = byId[id]; return r ? DAY[r] : null; },
      checkpoints: { sat: { label: 'Saturday morning (before wrestling began)', keepThrough: 'Friday night', removeLabel: 'Saturday', ids: sat, byRound: byRound, keepCount: all.length - sat.length } }
    };
  }

  return { plan: plan, DAY: DAY, roundOfKey: roundOfKey };
});
