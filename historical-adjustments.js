/* ============================================================================
   HISTORICAL TEAM-SCORE ADJUSTMENTS -- data only, read-only, never Firebase.
   ----------------------------------------------------------------------------
   Passed to OfficialScoring.compute() through its EXISTING `adjustments` option ({ school: { points, reason } }), exactly
   the way OFFICIAL passes its own adjustments -- no scoring logic here.

   Every entry is explicit and sourced. Nothing is derived at runtime.
   kind 'deduction': a team-point deduction whose occurrence AND cause are documented by the cited source.
   kind 'reconciliation': the published NCAA final team total differs from the bout-by-bout calculation and no source
   found itemizes why. The entry reconciles to the PUBLISHED total, with the published total as its evidence. It does
   NOT state or imply a reason (e.g. a deduction) that the sources do not document.

   Keys are the school strings used in that year's historical data (historical-data/resultsYYYY.js).
   ============================================================================ */
const HistoricalAdjustments = (function () {
  const RECON = 'Reconciliation to the published NCAA final team total';
  const SRC_2016_BOOK = 'NCAA Division I Wrestling Championships Records Book (2016 final team standings)';
  const SRC_2016_FULL = 'Published 2016 NCAA final team scores, all 72 teams (uSports.org, Mar 21 2016; Iowa State recap, Wide Right & Natty Lite, Mar 21 2016)';

  const SRC_2018_OSU = 'FloWrestling, "Retrospective: Ohio State\'s 2018 NCAA Tournament" (officials deducted a team point when Kyle Snyder threw his headgear into the crowd after the finals; 134.5 -> 133.5); NCAA Division I Wrestling Championships Records Book 2018-19 (Ohio St. 133.5)';

  // kind 'printed-bonus': the official NCAA bracket prints a result whose team-scoring bonus differs from the engine's
  // fixed value for that result type. The bout keeps its printed type (Tech Fall); this entry applies the documented
  // difference. 2015: tech falls printed 'TF-1' (1 bonus point); the engine scores every tech fall at 1.5.
  const SRC_2015_PDF = 'Official NCAA 2015 Division I Wrestling Championships bracket PDF';
  const DATA = {
    2015: {
      'Wisconsin':     { points: -0.5, kind: 'printed-bonus', source: SRC_2015_PDF, reason: 'Printed tech-fall bonus: 133 lbs bout 42, Bradley Taylor (Wisconsin) over Mitch Finesilver, printed "TF-1 5:58 (23-8)" (1 bonus point; engine scores tech falls 1.5). Source: ' + SRC_2015_PDF + ', 133 page.' },
      'Virginia Tech': { points: -0.5, kind: 'printed-bonus', source: SRC_2015_PDF, reason: 'Printed tech-fall bonus: 141 lbs bout 50, Devin Carter (Virginia Tech) over Tyler Small, printed "TF-1 6:59 (23-7)" (1 bonus point; engine scores tech falls 1.5). Source: ' + SRC_2015_PDF + ', 141 page.' }
    },
    // kind 'deduction': a team-point deduction DOCUMENTED by a source (what happened is stated by the source).
    2018: {
      'Ohio State':        { points: -1, kind: 'deduction', publishedTotal: 133.5, source: SRC_2018_OSU, reason: 'Documented team-point deduction (1 point): officials deducted a point when Kyle Snyder threw his headgear into the crowd after the finals. Published NCAA final team total 133.5. Source: ' + SRC_2018_OSU + '.' }
    },
    2016: {
      'Virginia Tech':     { points: -1, kind: 'reconciliation', publishedTotal: 82, source: SRC_2016_BOOK, reason: RECON + ' (82). Source: ' + SRC_2016_BOOK + '.' },
      'Iowa':              { points: -1, kind: 'reconciliation', publishedTotal: 81, source: SRC_2016_BOOK, reason: RECON + ' (81). Source: ' + SRC_2016_BOOK + '.' },
      'Indiana':           { points: -1, kind: 'reconciliation', publishedTotal: 13, source: SRC_2016_FULL, reason: RECON + ' (13). Source: ' + SRC_2016_FULL + '.' },
      'Northern Colorado': { points: -1, kind: 'reconciliation', publishedTotal: -1, source: SRC_2016_FULL, reason: RECON + ' (-1). Source: ' + SRC_2016_FULL + '.' }
    }
  };

  // Returns the { school: {points, reason, ...} } map for a year, or null when the year has none (OfficialScoring then
  // behaves exactly as it does with no adjustments supplied).
  function forYear(year) { const d = DATA[Number(year)]; return d ? JSON.parse(JSON.stringify(d)) : null; }

  return { forYear: forYear };
})();

if (typeof window !== 'undefined') window.HistoricalAdjustments = HistoricalAdjustments;
if (typeof module === 'object' && module.exports) module.exports = HistoricalAdjustments;
