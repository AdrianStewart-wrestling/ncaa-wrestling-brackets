/* ============================================================================
   HISTORICAL ADAPTER -- pure data transformation, zero DOM dependency.
   ----------------------------------------------------------------------------
   YEARresults.js (raw rows) -> CANONICAL BRACKET MODEL

   This file knows nothing about the Historical Results site's index.html, its
   dropdowns, its buttons, or any rendering at all. It is meant to be portable:
   Tournament Central (or anything else) can require/import just this file and
   get a plain, JSON-serializable canonical model back, with no further
   dependency on this repo's pages.

   CANONICAL PHASE NAMES, used as the keys of the model's `phases` object,
   regardless of what text a given year's data happens to use for each one:
     pigtail, r1, consPre, r2, c1, r3, c2, c3, r4, c4, c5, c6, third, fifth,
     seventh, r5

   NORMALIZATION STRATEGY (name-first, position as fallback only):
   Every raw round label actually observed across results2016.js through
   results2026.js (inventoried directly, not assumed) is mapped to its
   canonical phase by NAME, via CANONICAL_PHASE_MAP below -- never by its
   position in the sequence. This is what correctly handles schemas where the
   phase order itself differs (2024/2025/2026 list ChampR2 before ConsPrelims,
   and list placement matches as 7th/5th/3rd instead of 3rd/5th/7th -- both
   handled automatically here by matching the names, with zero special-casing
   for any specific year). Positional inference (treating the Nth distinct
   round name as the Nth canonical phase) is used ONLY when a round label is
   not found in the table at all, as an explicit, logged fallback -- never as
   the primary mechanism.
   ============================================================================ */

const HistoricalAdapter = (function () {

  const PHASE_ORDER = ['pigtail','r1','consPre','r2','c1','r3','c2','c3','r4','c4','c5','c6','third','fifth','seventh','r5'];
  const EXPECTED_COUNTS = { pigtail:1, r1:16, consPre:1, r2:8, c1:8, r3:4, c2:8, c3:4, r4:2, c4:4, c5:2, c6:2, third:1, fifth:1, seventh:1, r5:1 };

  // Every raw label actually observed in results2016.js .. results2026.js, inventoried directly against the real
  // files before writing this table (not guessed). Keys are normalized (lowercased, alphanumeric only).
  const CANONICAL_PHASE_MAP = {
    'prelims': 'pigtail',
    'champr1': 'r1',
    'conspre': 'consPre', 'consprelims': 'consPre',
    'champr2': 'r2',
    'consr1': 'c1',
    'quarterfinals': 'r3', 'qtrfinals': 'r3',
    'consr2': 'c2',
    'consr3': 'c3',
    'semifinals': 'r4',
    'consr4': 'c4',
    'consr5': 'c5', 'consqtr': 'c5', 'consqtrfinals': 'c5',
    'conssemi': 'c6', 'conssemifinals': 'c6',
    '3rdplace': 'third',
    '5thplace': 'fifth',
    '7thplace': 'seventh',
    'finals': 'r5',
  };

  function normalizeRoundName(s) {
    return String(s||'').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  // Maps every bout's round label to a canonical phase, by name first. Returns which labels were recognized by
  // name vs. had to fall back to positional inference, so that fallback use is always visible, never silent.
  function mapPhasesByName(weightBouts) {
    const sorted = weightBouts.slice().sort((a,b) => (a.bout||0)-(b.bout||0));
    const distinctLabels = [];
    sorted.forEach(r => { if (distinctLabels.indexOf(r.round) === -1) distinctLabels.push(r.round); });

    const slotFor = {};
    const unrecognized = [];
    distinctLabels.forEach(label => {
      const canonical = CANONICAL_PHASE_MAP[normalizeRoundName(label)];
      if (canonical) slotFor[label] = canonical;
      else unrecognized.push(label);
    });

    const usedFallback = [];
    if (unrecognized.length) {
      // FALLBACK, only for labels the name table doesn't know: infer by position in the full expected sequence,
      // filling in whichever canonical slots the name-matched labels did NOT already claim, in the order the
      // unrecognized labels appear. This never overrides a name match; it only fills genuine gaps.
      const claimedSlots = {}; Object.values(slotFor).forEach(s => claimedSlots[s] = true);
      const remainingSlots = PHASE_ORDER.filter(s => !claimedSlots[s]);
      unrecognized.forEach((label, i) => {
        const guess = remainingSlots[i];
        if (guess) { slotFor[label] = guess; usedFallback.push({ label, guessedSlot: guess }); }
      });
    }
    return { slotFor, usedFallback };
  }

  function personFromRow(r, side) {
    const name = side === 'winner' ? r.winner : r.loser;
    const school = side === 'winner' ? r.winner_school : r.loser_school;
    return { name: name || null, school: school || null };
  }

  function matchRecord(r) {
    if (r.__bye) return { bye: true, a: { name: r.wrestler, school: r.__school || '' }, b: null, winner: { name: r.wrestler, school: r.__school || '' }, bout: r.bout, result: 'BYE' };
    return { a: personFromRow(r,'winner'), b: personFromRow(r,'loser'), winner: personFromRow(r,'winner'), bout: r.bout, result: r.result || '' };
  }

  // Builds the canonical bracket model for one (resultData, weight). Pure function -- no DOM, no globals besides
  // its own inputs. Returns { ok, model, problems, fallbacksUsed } -- problems are reported, never silently
  // patched over, and a recognized legitimate structural variant (see below) is distinguished from a genuine gap.
  function buildCanonicalBracketModel(resultData, year, weight) {
    const weightStr = String(weight);
    const bouts = resultData.filter(r => String(r.weight) === weightStr);
    if (!bouts.length) return { ok:false, model:null, problems:[`No bouts found for weight ${weightStr}.`], fallbacksUsed:[] };

    const { slotFor, usedFallback } = mapPhasesByName(bouts);
    const byslot = {}; PHASE_ORDER.forEach(s => byslot[s] = []);
    bouts.forEach(r => { const slot = slotFor[r.round]; if (slot) byslot[slot].push(r); });
    // EXPLICIT SOURCED BYES (HistoricalSeeds.facts[year][weight].byes): a printed BYE has no bout row. It becomes a bye
    // record at its printed bout number -- the present wrestler, no opponent, no result -- so slot positions stay exact.
    const F_ = (typeof window !== 'undefined' && window.HistoricalSeeds && window.HistoricalSeeds.facts) || null;
    const byeFacts = (F_ && F_[String(year)] && F_[String(year)][weightStr] && F_[String(year)][weightStr].byes) || [];
    byeFacts.forEach(b => { if (byslot[b.phase]) byslot[b.phase].push({ __bye: true, bout: b.bout, wrestler: b.wrestler }); });
    PHASE_ORDER.forEach(s => byslot[s].sort((a,b) => (a.bout||0)-(b.bout||0)));

    const problems = [];
    byeFacts.forEach(b => { const row = bouts.find(r => r.winner === b.wrestler || r.loser === b.wrestler);
      const rec = byslot[b.phase] && byslot[b.phase].find(x => x.__bye && x.bout === b.bout);
      if (!row) problems.push(`Bye wrestler ${b.wrestler} (bout ${b.bout}) appears in no bout.`); else if (rec) rec.__school = row.winner === b.wrestler ? row.winner_school : row.loser_school;
      if (bouts.some(r => r.bout === b.bout)) problems.push(`Bye bout ${b.bout} also appears as a result row.`); });

    // Recognized legitimate structural variant: a bracket with exactly 32 entrants needs no pigtail and no
    // consolation pre-match at all. Detected here (both absent together), not assumed for any specific year.
    const noPigtailVariant = byslot.pigtail.length === 0 && byslot.consPre.length === 0;

    // N wrestle-ins (pre-2009 variable field sizes): N championship and N consolation wrestle-ins, N read from the data.
    // N <= 1 is checked exactly as before; N >= 2 requires equal counts and is carried as lists (pigtails / consPres).
    const nPig = byslot.pigtail.length, multiPig = nPig >= 2;
    if (multiPig && byslot.consPre.length !== nPig) problems.push(`${nPig} wrestle-ins but ${byslot.consPre.length} consolation wrestle-ins.`);
    PHASE_ORDER.forEach(slot => {
      const count = byslot[slot].length;
      const expected = EXPECTED_COUNTS[slot];
      if ((slot === 'pigtail' || slot === 'consPre') && noPigtailVariant) return; // legitimate, not a problem
      if ((slot === 'pigtail' || slot === 'consPre') && multiPig) return;         // N >= 2: checked above
      if (count !== expected) {
        problems.push(`Phase "${slot}" has ${count} bout(s), expected ${expected}.`);
      }
    });

    if (problems.length) return { ok:false, model:null, problems, fallbacksUsed: usedFallback };

    const phases = {
      pigtail: noPigtailVariant ? null : matchRecord(byslot.pigtail[0]),
      r1: byslot.r1.map(matchRecord),
      consPre: noPigtailVariant ? null : matchRecord(byslot.consPre[0]),
      r2: byslot.r2.map(matchRecord),
      c1: byslot.c1.map(matchRecord),
      r3: byslot.r3.map(matchRecord),
      c2: byslot.c2.map(matchRecord),
      c3: byslot.c3.map(matchRecord),
      r4: byslot.r4.map(matchRecord),
      c4: byslot.c4.map(matchRecord),
      c5: byslot.c5.map(matchRecord),
      c6: byslot.c6.map(matchRecord),
      third: matchRecord(byslot.third[0]),
      fifth: matchRecord(byslot.fifth[0]),
      seventh: matchRecord(byslot.seventh[0]),
      r5: matchRecord(byslot.r5[0]),
    };

    return {
      ok: true,
      problems: [],
      fallbacksUsed: usedFallback,
      model: multiPig ? { year: year, weight: weightStr, hasPigtail: true, pigtailCount: nPig, phases: Object.assign(phases, { pigtails: byslot.pigtail.map(matchRecord), consPres: byslot.consPre.map(matchRecord) }) }
                      : { year: year, weight: weightStr, hasPigtail: !noPigtailVariant, phases: phases }
    };
  }

  return { CANONICAL_PHASE_MAP, normalizeRoundName, mapPhasesByName, buildCanonicalBracketModel, PHASE_ORDER, EXPECTED_COUNTS };
})();

if (typeof module === 'object' && module.exports) module.exports = HistoricalAdapter;
