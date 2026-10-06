/* ============================================================================
   HISTORICAL STATE BUILDER
   ----------------------------------------------------------------------------
   Bridges the frozen, unmodified canonical bracket model (historical-adapter.js)
   into Tournament Central's own native bracket engine (window.TournamentCore),
   so historical brackets render through the EXACT SAME render()/slotHTML() DOM
   code, and the EXACT SAME official-path.js, that OFFICIAL and MY PICKS already
   use. This file does not reimplement bracket structure or rendering -- PAIRS,
   mkW, mkMatch, initBracket, applyPick, advanceChamp, advanceCon, boutNumbers
   below are copied verbatim from index.html's own OFFICIAL-side construction
   (the proven, already-shipped machinery), because that structure (33-entrant
   bracket shape, round routing) is universal across years, not 2026-specific.
   Only the ROSTER (FIELDS) differs per year/weight, and that's computed here
   from the canonical model.

   Pipeline:
     canonical bracket model (historical-adapter.js, frozen)
       -> assignSeeds()          [new, this file: derives seeds from bracket position]
       -> build a historical FIELDS roster, feed the proven engine machinery
       -> window.TournamentCore.create(historicalAdapter)   [reused, unmodified]
       -> replay every real historical result through core.record()
       -> { core, book }  <- what index.html's viewState()/pathFor() consume
          when viewMode === 'historical'

   READ-ONLY: this file never touches officialBook, officialCore, states (the
   live MY PICKS store), or Firebase. It builds one isolated, independent core
   and book per (year, weight) requested, held only in this module's own
   private memory.
   ============================================================================ */

const HistoricalStateBuilder = (function () {

  // ---- Seed assignment: derived from bracket position, not present in the raw data (confirmed by direct
  // inspection of every results*.js file -- no seed field exists anywhere in the source). NCAA bracket
  // convention makes this positionally deterministic: round-1 slot i always pairs seeds PAIRS[i][0]+1 and
  // PAIRS[i][1]+1 (slot 0 is the universal #1-seed-vs-pigtail-winner bye). This is the SAME PAIRS table already
  // in index.html's own OFFICIAL-side construction -- reused, not reinvented.
  const PAIRS = [
    [0, null],[15,16],[8,23],[7,24],[4,27],[11,20],[12,19],[3,28],
    [2,29],[13,18],[10,21],[5,26],[6,25],[9,22],[14,17],[30,1],
  ];

  function norm(v){ return String(v==null?'':v).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim(); }

  // Returns { fields: [ {n,s,r,seed} x33 in seed order ], engineR1: [[seedA, seedB|null] x16],
  //           pigtailSlot, conPigtailSlot, warnings, problems }.
  //
  // WRESTLE-IN (PIGTAIL) POSITION IS A PROPERTY OF THE YEAR'S DRAW, NOT A CONSTANT:
  //  - 2019+ (33 seeded wrestlers): the #32/#33 wrestle-in winner faces the #1 seed -> R1 slot 0. This is the
  //    shape Tournament Central's OFFICIAL engine hardcodes.
  //  - 2018 and earlier (16 seeds): the wrestle-in could be drawn anywhere. E.g. 2016/149 feeds R1 slot 0
  //    (Retherford); 2016/157 feeds slot 10 (Steiert/Chino -> Luke Smith); 2016/125 feeds slot 8 (Megaludis).
  // Both facts are READ FROM THE DATA, never assumed:
  //  - pigtailSlot (p): the R1 bout the wrestle-in winner appears in;
  //  - conPigtailSlot (q): the R1 bout whose loser meets the wrestle-in loser in the consolation pre-match.
  // The R1 DRAW ORDER IS PRESERVED EXACTLY AS IN THE SOURCE -- no rotation/reordering. The engine routing below
  // takes p and q as parameters; with p=0, q=8 it is identical to the verbatim OFFICIAL routing (2019+).
  //
  // SEED LABELS are derived from historical draw position (slot 0's top line is #1). Wrestler ids are
  // weight-seed (tournament-core.js wrestlerId), so seeds only need to be unique 1..33.
  function buildHistoricalFields(model) {
    const warnings = [];
    const problems = [];
    const bySeed = new Array(33).fill(null);
    const nameToSeed = {};
    const r1 = model.phases.r1;

    const setSeed = (seedNum, person, ds) => {
      if (!person || !person.name) return;
      bySeed[seedNum - 1] = { n: person.name, s: person.school || '', r: '', seed: seedNum };
      if (ds !== undefined) bySeed[seedNum - 1].ds = ds;          // printed-line years only: the PRINTED seed (0 = unseeded)
      nameToSeed[norm(person.name)] = seedNum;
    };
    const loserOf = m => m.bye ? { name: '' } : ((norm(m.a.name) === norm(m.winner.name)) ? m.b : m.a);
    const hasName = (m, name) => (m.a && norm(m.a.name) === norm(name)) || (m.b && norm(m.b.name) === norm(name));

    // Historical R1 slot the wrestle-in winner was drawn into (p).
    let p = 0, q = 8; // modern defaults (2019+ / OFFICIAL shape); overwritten from the data below
    if (model.hasPigtail) {
      const pt = model.phases.pigtail;
      const ptWinner = pt.winner.name;
      const ptLoser = loserOf(pt).name;
      const hits = [];
      r1.forEach((m, i) => { if (hasName(m, ptWinner)) hits.push(i); });
      if (hits.length !== 1) {
        problems.push('pigtail winner ' + ptWinner + ' appears in ' + hits.length + ' R1 bouts (expected exactly 1).');
      } else {
        p = hits[0];
        // Consolation pre-match partner: the loser of R1 slot q (read from the data, not assumed).
        const cp = model.phases.consPre;
        if (cp && hasName(cp, ptLoser)) {
          const partner = norm(cp.a.name) === norm(ptLoser) ? cp.b.name : cp.a.name;
          q = r1.findIndex(m => norm(loserOf(m).name) === norm(partner));
          if (q < 0 || q === p) {
            problems.push('consolation pre-match partner ' + partner + ' is not the loser of a usable R1 bout (slot ' + q + ').');
          }
        } else {
          problems.push('consolation pre-match does not include the pigtail loser ' + ptLoser + '.');
        }
      }
    }

    // ---- PRINTED-LINE MODE (historical bracket FACTS, generic): used when HistoricalSeeds.facts[year][weight] exists.
    // facts = { seedCount, lines: { dataName: printedLine 0..31 } } transcribed from the printed draw; seeds from table[year][weight].
    // Every R1 wrestler sits on his PRINTED line; his identity number is the standard NCAA 32-line draw number of that line,
    // validated against every printed seed (a mismatch, a missing line, or a duplicate fails the build -- nothing is guessed,
    // and nothing is inferred from who won). Engine-fixed positions: wrestle-in entrants are #32/#33 (alphabetical, as KI-1);
    // when the wrestle-in feeds slot p > 0, slot 0's printed line-1 wrestler takes the number of the line the wrestle-in
    // winner occupies (the KI-1 'vacated' rule). Each field carries ds = the PRINTED seed (0 = unseeded) for display.
    const factsAll = (typeof window !== 'undefined' && window.HistoricalSeeds && window.HistoricalSeeds.facts) || null;
    const facts = factsAll && factsAll[String(model.year)] && factsAll[String(model.year)][String(model.weight)];
    const histPair = new Array(16); // historical slot -> [seed on line a, seed on line b | null]
    if (facts) {
      const LINE_NO = [1,32,17,16,9,24,25,8,5,28,21,12,13,20,29,4,3,30,19,14,11,22,27,6,7,26,23,10,15,18,31,2];
      const tableAll = (window.HistoricalSeeds && window.HistoricalSeeds.table) || {};
      const yS = (tableAll[String(model.year)] || {})[String(model.weight)] || {};
      const printedSeed = {}; Object.keys(yS).forEach(k => { printedSeed[norm(k)] = yS[k]; });
      const lineOf = {}; Object.keys(facts.lines || {}).forEach(k => { lineOf[norm(k)] = facts.lines[k]; });
      const N = facts.seedCount;
      // seedsNotPrinted: seeds the available sources do not print (declared per weight; never derived) complete the 1..N check
      const notPrinted = (facts.seedsNotPrinted || []).map(x => x.seed);
      const seedVals = Object.values(printedSeed).concat(notPrinted).sort((x, y) => x - y);
      if (!(N >= 1 && N <= 33) || seedVals.length !== N || seedVals.some((v, i) => v !== i + 1)) problems.push('printed seeds are not exactly 1..' + N + ' (found ' + seedVals.join(',') + ').');
      const used = new Array(32).fill(false);
      const lineOfP = person => lineOf[norm(person && person.name)];
      const ptW = model.hasPigtail ? model.phases.pigtail.winner : null, ptL = model.hasPigtail ? loserOf(model.phases.pigtail) : null;
      const isPtW = person => ptW && norm(person.name) === norm(ptW.name);
      const byeLines = new Set((facts.byes || []).filter(b => b.phase === 'r1').map(b => b.line));
      r1.forEach((m, i) => [m.a, m.b].filter(Boolean).forEach(x => { const L = lineOfP(x);
        if (L === undefined) { problems.push('R1 slot ' + i + ': no printed line for ' + x.name + '.'); return; }
        if (L !== 2 * i && L !== 2 * i + 1) problems.push('R1 slot ' + i + ': ' + x.name + ' is on printed line ' + L + ', not in this bout (lines ' + (2 * i) + '/' + (2 * i + 1) + ').');
        if (used[L]) problems.push('printed line ' + L + ' is used twice.'); used[L] = true;
        const sd = printedSeed[norm(x.name)]; if (sd !== undefined && LINE_NO[L] !== sd) (byeLines.size || facts.nonStandardSeedLines ? warnings : problems).push(x.name + ' (#' + sd + ') is printed on line ' + L + ', which is draw line #' + LINE_NO[L] + (byeLines.size ? ' (short field with printed byes: the draw need not follow the 32-line seeding pattern)' : '') + '.'); }));
      byeLines.forEach(l => { if (used[l]) problems.push('printed BYE line ' + l + ' holds a wrestler.'); used[l] = true; });
      if (used.some(u => !u)) problems.push('printed lines not all used: ' + used.map((u, i) => u ? null : i).filter(v => v !== null).join(','));
      if (ptL && lineOfP(ptL) !== undefined) problems.push('wrestle-in loser ' + ptL.name + ' must not have a printed R1 line.');
      if (!problems.length) {
        const dsOf = x => printedSeed[norm(x.name)] || 0;
        let vacated = null;
        if (model.hasPigtail) {
          const ordered = [ptW, ptL].slice().sort((x, y) => norm(x.name) < norm(y.name) ? -1 : norm(x.name) > norm(y.name) ? 1 : 0);
          setSeed(32, ordered[0], dsOf(ordered[0])); setSeed(33, ordered[1], dsOf(ordered[1]));
          vacated = LINE_NO[lineOfP(ptW)];   // the draw number the wrestle-in winner's printed line frees (he is engine #32/#33)
        }
        r1.forEach((m, i) => {
          const top = lineOfP(m.a) === 2 * i ? m.a : m.b, bot = top === m.a ? m.b : m.a;
          const numOf = (x, L) => ((LINE_NO[L] === 32 || LINE_NO[L] === 33) && vacated !== null && vacated !== LINE_NO[L]) ? vacated : LINE_NO[L];   // reserved #32/#33 -> freed number
          if (m.bye) { const n = numOf(m.a, lineOfP(m.a)); setSeed(n, m.a, dsOf(m.a)); histPair[i] = [n, null]; return; }   // printed BYE: one wrestler, empty line
          if (model.hasPigtail && i === p) {
            const real = isPtW(m.a) ? m.b : m.a; const n = numOf(real, lineOfP(real));
            setSeed(n, real, dsOf(real)); histPair[i] = [n, null];
          } else {
            const nt = numOf(top, 2 * i), nb = numOf(bot, 2 * i + 1);
            setSeed(nt, top, dsOf(top)); setSeed(nb, bot, dsOf(bot)); histPair[i] = [nt, nb];
          }
        });
      }
    } else {
    // ---- KI-1: SEED IDENTITY COMES FROM THE SOURCED SEED TABLE (historical-seeds.js), NEVER FROM THE RESULT.
    // The adapter's R1 bouts are {a: winner, b: loser}, so a/b carry no draw information. Each wrestler's seed is
    // looked up by name in HistoricalSeeds.table[year][weight] (keyed by the data's own spelling):
    //  - 2019+ (all 33 seeded): every wrestler takes his official seed, including #32 vs #33 in the wrestle-in.
    //  - pre-2019 (16 seeds): in every R1 slot exactly one line is a seeded line (the lower number of PAIRS[i]);
    //    the seeded wrestler takes it and his unseeded opponent takes the other (unseeded) line of that slot.
    //    The two unseeded wrestle-in entrants have no seed at all; they take the identity labels 32/33 in
    //    alphabetical order of name (outcome-independent, documented convention).
    // Any table/draw inconsistency is a PROBLEM (the build fails closed) -- there is no fallback to the old rule.
    const seedTable = (typeof window !== 'undefined' && window.HistoricalSeeds && window.HistoricalSeeds.table) || null;
    const ySeeds = seedTable && seedTable[String(model.year)] && seedTable[String(model.year)][String(model.weight)];
    const officialSeed = {};
    if (!ySeeds) problems.push('no sourced seed table for ' + model.year + '/' + model.weight + ' (historical-seeds.js).');
    else Object.keys(ySeeds).forEach(k => { officialSeed[norm(k)] = ySeeds[k]; });
    const seedOf = person => officialSeed[norm(person && person.name)];
    const modern = !!ySeeds && Object.keys(ySeeds).some(k => ySeeds[k] > 16); // 2019+: all entrants seeded

    if (model.hasPigtail) {
      const pt = model.phases.pigtail;
      const entrants = [pt.a, pt.b];
      if (modern) {
        entrants.forEach(e => {
          const sd = seedOf(e);
          if (sd !== 32 && sd !== 33) problems.push('wrestle-in entrant ' + e.name + ' has sourced seed ' + sd + ' (expected 32 or 33).');
          else setSeed(sd, e);
        });
      } else {
        entrants.forEach(e => { if (seedOf(e) !== undefined) problems.push('wrestle-in entrant ' + e.name + ' is seeded (' + seedOf(e) + ') in a 16-seed year.'); });
        const ordered = entrants.slice().sort((x, y) => norm(x.name) < norm(y.name) ? -1 : norm(x.name) > norm(y.name) ? 1 : 0);
        setSeed(32, ordered[0]);
        setSeed(33, ordered[1]);
      }
    }

    const ptWinnerNorm = model.hasPigtail ? norm(model.phases.pigtail.winner.name) : null;
    const isPtWinner = person => ptWinnerNorm !== null && norm(person && person.name) === ptWinnerNorm;
    // Seat a slot's two wrestlers on its two seed lines (lo = better seed, hi = other), using only sourced seeds.
    const seatSlot = (i, x, y, lo, hi) => {
      if (modern) {
        const sx = seedOf(x), sy = seedOf(y);
        if (!((sx === lo && sy === hi) || (sx === hi && sy === lo))) {
          problems.push('R1 slot ' + i + ': sourced seeds ' + x.name + '=' + sx + ', ' + y.name + '=' + sy + ' do not match draw lines ' + lo + '/' + hi + '.');
          return;
        }
        setSeed(sx, x); setSeed(sy, y);
      } else {
        const sx = seedOf(x), sy = seedOf(y);
        const seeded = (sx !== undefined) ? x : (sy !== undefined) ? y : null;
        const other = seeded === x ? y : x;
        if (!seeded || (sx !== undefined && sy !== undefined)) {
          problems.push('R1 slot ' + i + ': expected exactly one seeded wrestler (' + x.name + '=' + sx + ', ' + y.name + '=' + sy + ').');
          return;
        }
        if (seedOf(seeded) !== lo) { problems.push('R1 slot ' + i + ': ' + seeded.name + ' sourced seed ' + seedOf(seeded) + ' is not this slot\'s seeded line ' + lo + '.'); return; }
        setSeed(lo, seeded); setSeed(hi, other);
      }
    };

    // Seats follow HISTORICAL DRAW POSITION; the R1 draw order and wrestle-in routing are unchanged. Two slots are
    // special when the wrestle-in exists: slot p holds the wrestle-in winner (already seeded 32/33) and one real
    // entrant; slot 0 (pre-2019, p !== 0) then holds #1 and the entrant who sits on the line the wrestle-in winner
    // vacated in PAIRS[p] (the higher number). When p === 0 these collapse to the modern 1-vs-wrestle-in shape.
 // historical slot -> [seed on line a, seed on line b | null]
    r1.forEach((m, i) => {
      const lo = (PAIRS[i][1] === null) ? 1 : Math.min(PAIRS[i][0], PAIRS[i][1]) + 1;
      const hi = (PAIRS[i][1] === null) ? null : Math.max(PAIRS[i][0], PAIRS[i][1]) + 1;
      if (model.hasPigtail && i === p) {
        const real = isPtWinner(m.a) ? m.b : m.a;
        const want = (i === 0) ? 1 : lo;
        if (seedOf(real) !== want) { problems.push('R1 slot ' + i + ' (fed by the wrestle-in): ' + real.name + ' sourced seed ' + seedOf(real) + ', expected ' + want + '.'); return; }
        setSeed(want, real);
        histPair[i] = [want, null]; // second entrant is the wrestle-in winner, delivered by the engine
      } else if (i === 0) {
        const one = seedOf(m.a) === 1 ? m.a : seedOf(m.b) === 1 ? m.b : null;
        if (!one) { problems.push('R1 slot 0: no wrestler holds sourced seed 1 (' + m.a.name + ', ' + m.b.name + ').'); return; }
        const other = one === m.a ? m.b : m.a;
        setSeed(1, one);
        if (model.hasPigtail) {
          const vacated = Math.max(PAIRS[p][0], PAIRS[p][1]) + 1;
          if (modern) { problems.push('R1 slot 0 has two real entrants in a 33-seed year (wrestle-in fed slot ' + p + ').'); return; }
          if (seedOf(other) !== undefined) { problems.push('R1 slot 0: ' + other.name + ' is seeded (' + seedOf(other) + ') but sits on the vacated unseeded line ' + vacated + '.'); return; }
          setSeed(vacated, other);
          histPair[i] = [1, vacated];
        } else {
          // 32-man bracket, no wrestle-in (e.g. 2021/285, 2024/141): a direct 1-vs-32 pairing.
          if (modern && seedOf(other) !== 32) { problems.push('R1 slot 0 (32-man): ' + other.name + ' sourced seed ' + seedOf(other) + ', expected 32.'); return; }
          setSeed(32, other);
          histPair[i] = [1, 32];
        }
      } else {
        seatSlot(i, m.a, m.b, lo, hi);
        histPair[i] = [PAIRS[i][0] + 1, PAIRS[i][1] + 1]; // fixed lines by draw position, independent of result
      }
    });

    }

    // Engine R1 pairing = the source draw order, unchanged. Slot p's b side is left null -- the engine fills it
    // with the wrestle-in winner (OFFICIAL does the same at slot 0).
    const engineR1 = histPair.slice();

    if (!model.hasPigtail) { p = null; q = null; } // no wrestle-in: nothing feeds R1, no consolation pre-match
    return { fields: bySeed, engineR1: engineR1, pigtailSlot: p, conPigtailSlot: q, warnings: warnings, problems: problems, nameToSeed: nameToSeed };
  }

  // ---- Result-text parsing: historical result strings -> the {resultType, score, time} shape tournament-core.js's
  // validateResult() requires. Every format below was inventoried directly from results2016..2026.js (not guessed).
  // tournament-core.js RESULT_TYPES: Dec / MajDec / TechFall (score+time optional), Fall (time optional),
  // MedFFT / FFT / DQ (neither). Score must be winner-first and winner-ahead; an OT note may follow ("9-7 SV-1").
  //
  // Policy (documented, never silent):
  //  - INJURY DEFAULT ("Inj. 6:30", "Default 5:00", "DEF 3:45", "Def") has no engine type. It is recorded as MedFFT:
  //    same shape (no score/time) and same team bonus (2) as an NCAA injury default, so brackets and points are
  //    right; only the method label reads "Med FF". A true InjDef type would need a shared-engine change.
  //  - TIED OT SCORES ("TB-2 (RT) 3-3", "Dec 2-OT 2-2": winner decided on riding time) and OT codes with no score
  //    ("TB-2", "TB-2 ;RT") are recorded as Dec with no score -- the engine rejects a non-winning score, and a margin
  //    is never invented.
  function otCode(t) { // "SV1"/"SV-1"/"SV" -> "SV-1"/"SV-1"/"SV"; same for TB/UTB
    const m = /^(SV|TB|UTB)-?(\d)?$/i.exec(t || ''); return m ? m[1].toUpperCase() + (m[2] ? '-' + m[2] : '') : null;
  }
  function decWithScore(w, l, ot) {
    w = Number(w); l = Number(l);
    if (!(w > l)) return { resultType: 'Dec', score: '', time: '' }; // tied/odd OT score: keep Dec, drop score
    return { resultType: 'Dec', score: w + '-' + l + (ot ? ' ' + ot : ''), time: '' };
  }
  function parseResult(raw) {
    // Normalize: trim, drop ';' / ',' separators, collapse whitespace. ("TF 4:25 ;19-4", "TF  5:21 19-4", "Dec TB1, 4-1")
    const s = String(raw || '').replace(/[;,]/g, ' ').replace(/\s+/g, ' ').trim();
    let m;
    const T = '(\\d{1,2}:\\d{2}|:\\d{2})', S = '(\\d+)\\s*-\\s*(\\d+)';
    const fixTime = t => (t && t[0] === ':') ? '0' + t : (t || ''); // "Fall :23" -> "0:23"
    // Decision / major decision. Accepted trailers: an OT code after the score ("Dec 8-5 SV", "Dec 2-1 TB1",
    // "Dec 2-2 UTB"), a rideout marker ("Dec 2-2RO"), a riding-time marker ("Dec 9-3;RT"), or a stray second
    // score ("Dec 7-3;19-3", "MD 16-3;17-2": the first is the match score). A REGULATION decision whose winner is
    // not ahead ("Dec 6-8") is a data anomaly -> null (reported), never silently scoreless.
    if ((m = new RegExp('^(Dec|MD) ' + S + '(?: ?(RO)| (SV|TB|UTB)-?(\\d)?| RT| ' + S + ')?$', 'i').exec(s))) {
      const ot = m[5] ? otCode(m[5] + (m[6] || '')) : (m[4] ? 'RO' : null);
      if (!(Number(m[2]) > Number(m[3])) && !ot) return null;
      if (/^MD$/i.test(m[1])) return { resultType: 'MajDec', score: m[2] + '-' + m[3], time: '' };
      return decWithScore(m[2], m[3], ot === 'RO' ? null : ot);
    }
    // Tech fall: "TF-1.5 3:56 (18-2)", "TF-1.5 18-2", "TF-1.5 6:34", "TF 4:25 19-4", "TF 19-4 6:51", "TF 19-3", "TF 4:22"
    if ((m = /^TF(?:-\d+(?:\.\d+)?)?\s+(.*)$/i.exec(s))) {          // any printed bonus: TF-1.5, TF-1, TF
      // a stray trailing integer after a complete "time (score)" is ignored ("TF-1.5 4:24 (17-1) 395")
      const rest = m[1].replace(/[()]/g, ' ').replace(/\s+/g, ' ').trim().replace(/^(\d{1,2}:\d{2} \d+-\d+) \d+$/, '$1');
      const tm = new RegExp(T).exec(rest), sc = new RegExp(S).exec(rest.replace(new RegExp(T), ' '));
      const leftover = rest.replace(new RegExp(T), ' ').replace(new RegExp(S), ' ').trim();
      if (!leftover && (tm || sc)) return { resultType: 'TechFall', score: sc ? sc[1] + '-' + sc[2] : '', time: tm ? fixTime(tm[1]) : '' };
    }
    // Fall: "Fall 6:12", "Fall :23", "Fall"; sudden-victory fall "SV-1 (Fall) 7:50"
    if ((m = new RegExp('^Fall(?: ' + T + ')?(?: (?:SV|TB|UTB)-?\\d?)?$', 'i').exec(s))) return { resultType: 'Fall', score: '', time: fixTime(m[1]) }; // "Fall 7:57 SV" 
    if ((m = new RegExp('^(?:SV|TB|UTB)-?\\d? \\(Fall\\) ' + T + '$', 'i').exec(s))) return { resultType: 'Fall', score: '', time: fixTime(m[1]) };
    // Overtime decisions. Historical text puts the OT code BEFORE the score ("SV-1 9-7", "Dec SV1 4-1"); the engine
    // expects it AFTER as a suffix ("9-7 SV-1") -- reordered here. Riding-time markers "(RT)"/"RT" are dropped.
    if ((m = new RegExp('^(?:Dec )?(SV|TB|UTB)-?(\\d)?(?: \\(?RT\\)?)? ' + S + '$', 'i').exec(s))) return decWithScore(m[3], m[4], otCode(m[1] + (m[2] || '')));
    if ((m = /^(?:Dec )?(SV|TB|UTB)-?(\d)?(?: \(?RT\)?)?$/i.exec(s))) return { resultType: 'Dec', score: '', time: '' };
    if ((m = new RegExp('^Dec \\d-OT ' + S + '$', 'i').exec(s))) return decWithScore(m[1], m[2], null); // "Dec 2-OT 2-2"
    // Forfeits / DQ / injury default (see policy above)
    if (/^(M\s*FOR|M\.\s*For\.?|MFFL|MedFFT)$/i.test(s)) return { resultType: 'MedFFT', score: '', time: '' };
    if (/^(FOR|For\.|FFT)$/i.test(s)) return { resultType: 'FFT', score: '', time: '' };
    if (/^DQ$/i.test(s)) return { resultType: 'DQ', score: '', time: '' };
    if (new RegExp('^(Inj\\.?|Default|DEF|Def)(?: ' + T + '| ' + S + ')?$', 'i').test(s)) return { resultType: 'MedFFT', score: '', time: '' };
    return null; // unrecognized -- caller reports this rather than guessing
  }

  // ---- The proven engine machinery, copied verbatim from index.html's own OFFICIAL-side construction (the
  // same code already validated throughout this project's Verify work as real_official_core.js). Not modified.
  function mkW(field, idx0) {
    const f = field[idx0];
    if (!f) return null;
    const o = { n: f.n, s: f.s, r: f.r || '', seed: idx0 + 1 };
    if (f.ds !== undefined) o.ds = f.ds;                          // printed-line years only
    return o;
  }
  function mkMatch(a, b) { return { a, b, w: null }; }

  function buildEngine(fields, weight, engineR1, pigtailSlot, conPigtailSlot, drops, byes) {
    // Printed R1-loser -> consolation R1 seat (facts drops.r1 = [[match, side] x16]); default = the 2013+ layout.
    const DROP_R1 = (drops && drops.r1) || null;
    const seatOf = mi => DROP_R1 ? DROP_R1[mi] : [mi >> 1, mi % 2 ? 'b' : 'a'];
    const BYE_R1 = (byes || []).filter(b => b.phase === 'r1').map(b => b.slot);
    // Printed consolation drop-in crossovers (facts[year][weight].drops), default = the 2013+ layout below.
    const DROP_R2 = (drops && drops.r2) || [7, 6, 5, 4, 3, 2, 1, 0], DROP_QF = (drops && drops.qf) || [1, 0, 3, 2], DROP_SF = (drops && drops.sf) || [1, 0];
    const PT = pigtailSlot, CPT = conPigtailSlot; // R1 slot fed by the wrestle-in; R1 slot whose loser meets its loser
    const states = {};
    function initBracket(wt) {
      const F = fields;
      const pigtail = (PT === null) ? mkMatch(null, null) : mkMatch(mkW(F, 31), mkW(F, 32)); // 32-man: no wrestle-in
      // R1 entrants come from the historical-position -> engine-slot mapping computed in buildHistoricalFields()
      // (identical to the PAIRS table whenever the pigtail was drawn into R1 slot 0). Seeds are 1-based here.
      const r1 = engineR1.map(([sa, sb]) => mkMatch(mkW(F, sa - 1), sb === null ? null : mkW(F, sb - 1)));
      const r2 = Array.from({ length: 8 }, () => mkMatch(null, null));
      const r3 = Array.from({ length: 4 }, () => mkMatch(null, null));
      const r4 = Array.from({ length: 2 }, () => mkMatch(null, null));
      const r5 = [mkMatch(null, null)];
      const con = [
        Array.from({ length: 8 }, () => mkMatch(null, null)),
        Array.from({ length: 8 }, () => mkMatch(null, null)),
        Array.from({ length: 4 }, () => mkMatch(null, null)),
        Array.from({ length: 4 }, () => mkMatch(null, null)),
        Array.from({ length: 2 }, () => mkMatch(null, null)),
        Array.from({ length: 2 }, () => mkMatch(null, null)),
      ];
      states[wt] = {
        pigtail, conPigtail: mkMatch(null, null),
        champ: [r1, r2, r3, r4, r5], con,
        place3: mkMatch(null, null), place5: mkMatch(null, null), place7: mkMatch(null, null),
        champion: null,
        // Read by render() in historical mode only, to draw the Pigtail / Con Pigtail beside the bouts they
        // actually feed. Absent on OFFICIAL / MY PICKS states, which keep the modern top layout.
        pigtailSlot: PT, conPigtailSlot: CPT
      };
      // Printed BYEs (no phantom): the R1 match keeps its single wrestler, is decided at construction, and he advances;
      // the consolation seat its loser would take is marked vacant, so whoever arrives in that match advances unopposed.
      BYE_R1.forEach(i => { const st = states[wt], m = st.champ[0][i]; m.w = 'a'; m.bye = true;
        const nm = st.champ[1][Math.floor(i / 2)]; if (i % 2 === 0) nm.a = m.a; else nm.b = m.a;
        const [cm, side] = seatOf(i); st.con[0][cm].vacant = side; });
    }
    function applyPick(st, bracket, ri, mi, slot) {
      let match;
      if (bracket === 'pigtail') match = st.pigtail;
      else if (bracket === 'conPigtail') match = st.conPigtail;
      else if (bracket === 'champ') match = st.champ[ri][mi];
      else if (bracket === 'con') match = st.con[ri][mi];
      else if (bracket === 'p3') match = st.place3;
      else if (bracket === 'p5') match = st.place5;
      else if (bracket === 'p7') match = st.place7;
      if (!match || !match.a || !match.b || match.w) return;
      const winner = slot === 'a' ? match.a : match.b;
      const loser = slot === 'a' ? match.b : match.a;
      match.w = slot;
      // Wrestle-in feeds R1 slot PT (OFFICIAL: always 0); con pre-match winner takes the Con R1 seat that the
      // slot-CPT R1 loser would otherwise occupy (OFFICIAL: CPT=8 -> con[0][4].a). Identical when PT=0, CPT=8.
      if (bracket === 'pigtail') { if (PT !== null) { st.champ[0][PT].b = winner; st.conPigtail.a = loser; } }
      else if (bracket === 'conPigtail') { if (CPT !== null) { const [cm, side] = seatOf(CPT); st.con[0][cm][side] = winner; resolveVacant(st, cm); } }
      else if (bracket === 'champ') advanceChamp(st, ri, mi, winner, loser);
      else if (bracket === 'con') advanceCon(st, ri, mi, winner, loser);
    }
    function advanceChamp(st, ri, mi, winner, loser) {
      if (ri < 4) { const nm = st.champ[ri + 1][Math.floor(mi / 2)]; if (mi % 2 === 0) nm.a = winner; else nm.b = winner; }
      else { st.champion = winner; }
      if (ri === 0) {
        // OFFICIAL's verbatim table is: R1 slot i loser -> con[0][i>>1] side a/b by parity, except slot 8 ->
        // conPigtail.b. Same rule here with the exception at CPT (== the verbatim table when CPT=8).
        if (mi === CPT) st.conPigtail.b = loser; else { const [cm, side] = seatOf(mi); st.con[0][cm][side] = loser; resolveVacant(st, cm); }
      } else if (ri === 1) {
        if (DROP_R2[mi] !== undefined) st.con[1][DROP_R2[mi]].a = loser;
      } else if (ri === 2) { st.con[3][DROP_QF[mi]].a = loser; }
      else if (ri === 3) { st.con[5][DROP_SF[mi]].a = loser; }
    }
    function resolveVacant(st, cm) { const m = st.con[0][cm]; if (!m.vacant || m.w) return; const present = m.vacant === 'a' ? 'b' : 'a';
      if (m[present]) { m.w = present; m.bye = true; advanceCon(st, 0, cm, m[present], null); } }
    function advanceCon(st, ri, mi, winner, loser) {
      if (ri === 0) { st.con[1][mi].b = winner; }
      else if (ri === 1) { const nm = st.con[2][Math.floor(mi / 2)]; if (mi % 2 === 0) nm.b = winner; else nm.a = winner; }
      else if (ri === 2) { st.con[3][mi].b = winner; }
      else if (ri === 3) { const nm = st.con[4][Math.floor(mi / 2)]; if (mi % 2 === 0) nm.a = winner; else nm.b = winner; }
      else if (ri === 4) { st.con[5][mi].b = winner; if (!st.place7.a) st.place7.a = loser; else st.place7.b = loser; }
      else if (ri === 5) { if (!st.place3.a) st.place3.a = winner; else st.place3.b = winner; if (!st.place5.a) st.place5.a = loser; else st.place5.b = loser; }
    }

    const adapter = {
      weights: [weight],
      boutNumbers: window.BoutModel.boutNumbers, // reused directly -- bout numbering is universal, not year-specific
      newState: function (wt) { initBracket(wt); return states[wt]; },
      applyPick: applyPick,
      roundNames: { champ: ['Round 1','Rd of 16','Quarterfinals','Semifinals','Finals'], con: ['Con. Rd 1','Con. Rd 2','Con. Rd 3','Con. Rd 4','Con. Qtrs','Con. Semis'] }
    };
    return window.TournamentCore.create(adapter);
  }

  // core.pendingForWeight is not a native TournamentCore method -- it's built here from the three methods that
  // are (keys, boutIdOf, describe), the exact same way this project's existing Verify work already does it.
  function pendingForWeight(core, book, wt) {
    return core.keys.map(k => core.boutIdOf(wt, k)).filter(Boolean).map(id => core.describe(book, id)).filter(d => d && d.status === 'pending');
  }

  // ---- Replay: apply every real historical result, in the canonical model's own phase order (already
  // bracket-dependency-ordered by historical-adapter.js), via core.record(). No multi-pass retry needed, since
  // historical data -- unlike a live CSV export -- is already complete and correctly ordered.
  function replayModel(core, book, model, weight) {
    const problems = [];
    const phaseList = [
      ['r1', model.phases.r1], ['r2', model.phases.r2], ['r3', model.phases.r3], ['r4', model.phases.r4],
      ['c1', model.phases.c1], ['c2', model.phases.c2], ['c3', model.phases.c3], ['c4', model.phases.c4],
      ['c5', model.phases.c5], ['c6', model.phases.c6],
      ['third', [model.phases.third]], ['fifth', [model.phases.fifth]], ['seventh', [model.phases.seventh]],
      ['r5', [model.phases.r5]],
    ];
    if (model.hasPigtail) {
      phaseList.unshift(['pigtail', model.pigtailCount >= 2 ? model.phases.pigtails : [model.phases.pigtail]]);
      phaseList.splice(2, 0, ['consPre', model.pigtailCount >= 2 ? model.phases.consPres : [model.phases.consPre]]);
    }
    phaseList.forEach(([label, matches]) => {
      matches.forEach(m => {
        if (m.bye) return;   // printed BYE: decided at construction, no bout to replay
        const loserName = (norm(m.a.name) === norm(m.winner.name)) ? m.b.name : m.a.name;
        const pending = pendingForWeight(core, book, weight);
        const candidate = pending.find(d =>
          (norm(d.a && d.a.name) === norm(m.winner.name) && norm(d.b && d.b.name) === norm(loserName)) ||
          (norm(d.b && d.b.name) === norm(m.winner.name) && norm(d.a && d.a.name) === norm(loserName))
        );
        if (!candidate) { problems.push(label + ': no pending bout found for ' + m.winner.name + ' vs ' + loserName); return; }
        const winnerId = norm(candidate.a.name) === norm(m.winner.name) ? candidate.a.id : candidate.b.id;
        const parsed = parseResult(m.result);
        if (!parsed) { problems.push(label + ': could not parse result text "' + m.result + '" for ' + m.winner.name); return; }
        const rec = { boutId: candidate.boutId, winnerId: winnerId, resultType: parsed.resultType, score: parsed.score, time: parsed.time, source: 'historical-replay' };
        const applied = core.record(book, rec);
        if (!applied.ok) problems.push(label + ': ' + m.winner.name + ' vs ' + loserName + ' -- ' + (applied.message || applied.code));
      });
    });
    return problems;
  }

  // Public: builds { ok, core, book, problems, fieldWarnings } for one (model, weight). model is the unmodified
  // output of HistoricalAdapter.buildCanonicalBracketModel -- this function does not alter it.
  function build(model, weight) {
    try { return buildUnsafe(model, weight); }
    catch (e) { return { ok: false, problems: ['historical state could not be built: ' + (e && e.message ? e.message : e)] }; }
  }

  // ================= N >= 2 WRESTLE-INS (pre-2009 variable field sizes) — generic, data-driven, FAIL-CLOSED =================
  // Used ONLY when the canonical model carries pigtailCount >= 2; every other weight (all of 2009-2026) uses the code above
  // unchanged. Nothing here caps N. Rules (each violation is a PROBLEM -- never a guess):
  //  - every wrestle-in winner holds a printed R1 line, distinct, inside the R1 bout he actually wrestled; losers hold none;
  //  - an R1 bout fed by one wrestle-in takes it on side b (as for N = 1); fed by two, the printed line order gives a/b;
  //  - each consolation wrestle-in pairs EXACTLY ONE wrestle-in loser with EXACTLY ONE R1 loser; every wrestle-in is covered once;
  //  - draw numbers: the 2N wrestle-in entrants take the top 2N numbers (33-N .. 32+N, pairs in bout order, alphabetical inside a
  //    pair); a real entrant whose natural line number falls in the reserved range takes a freed number (the winners' lines'
  //    numbers below the range), in printed-line order. For N = 1 this is exactly the single-wrestle-in rule above.
  const LINE_NO_ALL = [1,32,17,16,9,24,25,8,5,28,21,12,13,20,29,4,3,30,19,14,11,22,27,6,7,26,23,10,15,18,31,2];
  function buildMultiFields(model) {
    const problems = [], warnings = [], N = model.pigtailCount, r1 = model.phases.r1, pigs = model.phases.pigtails, cps = model.phases.consPres;
    const loserOf = m => m.bye ? null : ((norm(m.a.name) === norm(m.winner.name)) ? m.b : m.a);
    const FA = (typeof window !== 'undefined' && window.HistoricalSeeds && window.HistoricalSeeds.facts) || {};
    const facts = (FA[String(model.year)] || {})[String(model.weight)] || null;
    if (!facts || !facts.lines) return { problems: ['N = ' + N + ' wrestle-ins: no printed draw lines (facts) for ' + model.year + '/' + model.weight + '.'], warnings };
    const TA = (window.HistoricalSeeds && window.HistoricalSeeds.table) || {}, yS = (TA[String(model.year)] || {})[String(model.weight)] || {};
    const nk = k => { const i = k.indexOf('|'); return i < 0 ? norm(k) : norm(k.slice(0, i)) + '|' + norm(k.slice(i + 1)); };   // 'Name' or 'Name|School' (duplicated names)
    const printedSeed = {}; Object.keys(yS).forEach(k => { printedSeed[nk(k)] = yS[k]; });
    const idk = x => norm(x && x.name) + '|' + norm(x && x.school);
    const notPrinted = (facts.seedsNotPrinted || []).map(x => x.seed), sv = Object.values(printedSeed).concat(notPrinted).sort((x, y) => x - y);
    if (sv.length !== facts.seedCount || sv.some((v, i) => v !== i + 1)) problems.push('printed seeds are not exactly 1..' + facts.seedCount + ' (found ' + sv.join(',') + ').');
    const lineOf = {}; Object.keys(facts.lines).forEach(k => { lineOf[nk(k)] = facts.lines[k]; }); const lineOfP = x => lineOf[idk(x)] !== undefined ? lineOf[idk(x)] : lineOf[norm(x && x.name)];
    const dsOf = x => printedSeed[idk(x)] || printedSeed[norm(x.name)] || 0;
    const W = pigs.map(m => m.winner), L = pigs.map(loserOf);
    const P = W.map(w => lineOfP(w));
    W.forEach((w, k) => { if (P[k] === undefined) problems.push('wrestle-in ' + k + ': winner ' + w.name + ' has no printed R1 line.'); });
    if (new Set(P).size !== N) problems.push('wrestle-in winners do not hold distinct printed lines.');
    L.forEach(l => { if (l && lineOfP(l) !== undefined) problems.push('wrestle-in loser ' + l.name + ' must not have a printed R1 line.'); });
    const isW = x => W.some(w => idk(w) === idk(x));
    const used = new Array(32).fill(false), byeLines = new Set((facts.byes || []).filter(b => b.phase === 'r1').map(b => b.line));
    r1.forEach((m, i) => [m.a, m.b].filter(Boolean).forEach(x => { const Ln = lineOfP(x);
      if (Ln === undefined) { problems.push('R1 slot ' + i + ': no printed line for ' + x.name + '.'); return; }
      if (Ln !== 2 * i && Ln !== 2 * i + 1) problems.push('R1 slot ' + i + ': ' + x.name + ' is on printed line ' + Ln + ', not in this bout.');
      if (used[Ln]) problems.push('printed line ' + Ln + ' is used twice.'); used[Ln] = true;
      const sd = printedSeed[idk(x)] !== undefined ? printedSeed[idk(x)] : printedSeed[norm(x.name)]; if (sd !== undefined && LINE_NO_ALL[Ln] !== sd) { const seedLine = LINE_NO_ALL.indexOf(sd);
        // a seeded WRESTLE-IN WINNER may be printed on the other line of his own seed's R1 pair (same bout; side is cosmetic)
        if (isW(x) && (seedLine >> 1) === (Ln >> 1)) warnings.push(x.name + ' (#' + sd + ', wrestle-in winner) is printed on line ' + Ln + ' of his seed\'s R1 pair (line ' + seedLine + ').');
        else (byeLines.size || facts.nonStandardSeedLines ? warnings : problems).push(x.name + ' (#' + sd + ') is printed on line ' + Ln + ', which is draw line #' + LINE_NO_ALL[Ln] + (byeLines.size ? ' (short field with printed byes)' : '') + '.'); } }));
    byeLines.forEach(l => { if (used[l]) problems.push('printed BYE line ' + l + ' holds a wrestler.'); used[l] = true; });
    if (used.some(u => !u)) problems.push('printed lines not all used: ' + used.map((u, i) => u ? null : i).filter(v => v !== null).join(','));
    P.forEach((Ln, k) => { if (Ln === undefined) return; const m = r1[Ln >> 1]; if (!m || ![m.a, m.b].some(x => x && idk(x) === idk(W[k]))) problems.push('wrestle-in ' + k + ' winner ' + W[k].name + ' does not wrestle the R1 bout of his printed line.'); });
    if (problems.length) return { problems, warnings };
    // feeders per R1 slot -> engine side
    const feeds = P.map(Ln => ({ slot: Ln >> 1, line: Ln, side: null }));
    for (let i = 0; i < 16; i++) { const f = feeds.filter(x => x.slot === i).sort((a, b) => a.line - b.line);
      if (f.length === 1) f[0].side = 'b'; else if (f.length === 2) { f[0].side = 'a'; f[1].side = 'b'; } else if (f.length > 2) problems.push('R1 slot ' + i + ' fed by ' + f.length + ' wrestle-ins.'); }
    // numbering
    const base = 33 - N, bySeed = new Array(32 + N).fill(null);
    const setSeed = (num, person, ds) => { if (bySeed[num - 1]) problems.push('draw number ' + num + ' assigned twice.'); bySeed[num - 1] = { n: person.name, s: person.school || '', r: '', seed: num, ds: ds }; };
    const pairNums = pigs.map((m, k) => { const pr = [m.winner, loserOf(m)].sort((x, y) => norm(x.name) < norm(y.name) ? -1 : norm(x.name) > norm(y.name) ? 1 : 0);
      setSeed(base + 2 * k, pr[0], dsOf(pr[0])); setSeed(base + 2 * k + 1, pr[1], dsOf(pr[1])); return [base + 2 * k, base + 2 * k + 1]; });
    const freed = P.map(Ln => LINE_NO_ALL[Ln]).filter(n => n < base).sort((a, b) => a - b);
    const reals = []; r1.forEach(m => [m.a, m.b].filter(Boolean).forEach(x => { if (!isW(x)) reals.push({ x, line: lineOfP(x) }); }));
    reals.sort((a, b) => a.line - b.line);
    const needing = reals.filter(r => LINE_NO_ALL[r.line] >= base);
    if (needing.length !== freed.length) problems.push('draw numbering: ' + needing.length + ' entrants on reserved numbers but ' + freed.length + ' freed numbers.');
    const numOf = new Map(); reals.forEach(r => numOf.set(r, LINE_NO_ALL[r.line])); needing.forEach((r, j) => numOf.set(r, freed[j]));
    reals.forEach(r => setSeed(numOf.get(r), r.x, dsOf(r.x)));
    const numByName = {}; reals.forEach(r => { numByName[idk(r.x)] = numOf.get(r); });
    const engineR1 = r1.map((m, i) => { const f = feeds.filter(x => x.slot === i);
      if (m.bye) return [numByName[idk(m.a)], null];
      if (f.length === 2) return [null, null];
      if (f.length === 1) { const real = [m.a, m.b].find(x => !isW(x)); return [numByName[idk(real)], null]; }
      const top = lineOfP(m.a) === 2 * i ? m.a : m.b, bot = top === m.a ? m.b : m.a; return [numByName[idk(top)], numByName[idk(bot)]]; });
    // consolation wrestle-ins as SEAT CHAINS, in bout order: each pairs exactly one current seat occupant (initially the seat's
    // R1 loser) with exactly one wrestle-in loser not yet used; the winner becomes the seat's occupant. A plain consolation
    // wrestle-in is a chain of length 1. Anything not uniquely defined is a PROBLEM.
    const r1L = r1.map(loserOf), occ = r1L.slice(), cpt = new Array(N).fill(null), cpNext = new Array(N).fill(null), lastInSeat = {}, cpFirst = {};
    cps.forEach((c, j) => { const ent = [c.a, c.b];
      const roles = ent.map(x => ({ seats: occ.map((o, i) => o && idk(o) === idk(x) ? i : -1).filter(i => i >= 0), k: L.findIndex((l, i) => l && cpt[i] === null && idk(l) === idk(x)) }));
      const opts = [[0, 1], [1, 0]].filter(([o, n]) => roles[o].seats.length === 1 && roles[n].k >= 0);
      if (opts.length !== 1) { problems.push('consolation wrestle-in ' + j + ' (' + ent.map(x => x.name).join(' v ') + '): not uniquely one seat occupant + one unused wrestle-in loser.'); return; }
      const [o, n] = opts[0], s0 = roles[o].seats[0], k = roles[n].k;
      cpt[k] = s0; if (lastInSeat[s0] !== undefined) cpNext[lastInSeat[s0]] = k; else cpFirst[s0] = k; lastInSeat[s0] = k;
      occ[s0] = c.winner; });
    if (cpt.some(x => x === null)) problems.push('not every wrestle-in has its consolation wrestle-in.');
    return { fields: bySeed, engineR1, feeds, cpt, cpNext, cpFirst, pairNums, problems, warnings };
  }
  function buildEngineMulti(fields, weight, engineR1, feeds, cpt, pairNums, drops, byes, cpNext, cpFirst) {
    cpNext = cpNext || cpt.map(() => null); cpFirst = cpFirst || (() => { const f = {}; cpt.forEach((s, k) => { f[s] = k; }); return f; })();
    const N = feeds.length, states = {};
    const DROP_R1 = (drops && drops.r1) || null, seatOf = mi => DROP_R1 ? DROP_R1[mi] : [mi >> 1, mi % 2 ? 'b' : 'a'];
    const DROP_R2 = (drops && drops.r2) || [7, 6, 5, 4, 3, 2, 1, 0], DROP_QF = (drops && drops.qf) || [1, 0, 3, 2], DROP_SF = (drops && drops.sf) || [1, 0];
    const BYE_R1 = (byes || []).filter(b => b.phase === 'r1').map(b => b.slot);
    function initBracket(wt) {
      const F = fields;
      const pigtails = pairNums.map(([x, y]) => mkMatch(mkW(F, x - 1), mkW(F, y - 1))), conPigtails = pairNums.map(() => mkMatch(null, null));
      const r1 = engineR1.map(([sa, sb]) => mkMatch(sa == null ? null : mkW(F, sa - 1), sb == null ? null : mkW(F, sb - 1)));
      const A = n => Array.from({ length: n }, () => mkMatch(null, null));
      states[wt] = { pigtail: pigtails[0], conPigtail: conPigtails[0], pigtails, conPigtails,
        champ: [r1, A(8), A(4), A(2), A(1)], con: [A(8), A(8), A(4), A(4), A(2), A(2)],
        place3: mkMatch(null, null), place5: mkMatch(null, null), place7: mkMatch(null, null), champion: null,
        pigtailSlot: feeds[0].slot, conPigtailSlot: cpt[0], pigtailSlots: feeds.map(f => f.slot), pigtailSides: feeds.map(f => f.side), conPigtailSlots: cpt.slice() };
      BYE_R1.forEach(i => { const st = states[wt], m = st.champ[0][i]; m.w = 'a'; m.bye = true;
        const nm = st.champ[1][Math.floor(i / 2)]; if (i % 2 === 0) nm.a = m.a; else nm.b = m.a; const [cm, side] = seatOf(i); st.con[0][cm].vacant = side; });
    }
    function resolveVacant(st, cm) { const m = st.con[0][cm]; if (!m.vacant || m.w) return; const present = m.vacant === 'a' ? 'b' : 'a';
      if (m[present]) { m.w = present; m.bye = true; advanceCon(st, 0, cm, m[present], null); } }
    function applyPick(st, bracket, ri, mi, slot) {
      let match;
      if (bracket === 'pigtail') match = st.pigtails[ri]; else if (bracket === 'conPigtail') match = st.conPigtails[ri];
      else if (bracket === 'champ') match = st.champ[ri][mi]; else if (bracket === 'con') match = st.con[ri][mi];
      else if (bracket === 'p3') match = st.place3; else if (bracket === 'p5') match = st.place5; else if (bracket === 'p7') match = st.place7;
      if (!match || !match.a || !match.b || match.w) return;
      const winner = slot === 'a' ? match.a : match.b, loser = slot === 'a' ? match.b : match.a; match.w = slot;
      if (bracket === 'pigtail') { const f = feeds[ri]; st.champ[0][f.slot][f.side] = winner; st.conPigtails[ri].a = loser; }
      else if (bracket === 'conPigtail') { if (cpNext[ri] !== null) st.conPigtails[cpNext[ri]].b = winner; else { const [cm, side] = seatOf(cpt[ri]); st.con[0][cm][side] = winner; resolveVacant(st, cm); } }
      else if (bracket === 'champ') advanceChamp(st, ri, mi, winner, loser);
      else if (bracket === 'con') advanceCon(st, ri, mi, winner, loser);
    }
    function advanceChamp(st, ri, mi, winner, loser) {
      if (ri < 4) { const nm = st.champ[ri + 1][Math.floor(mi / 2)]; if (mi % 2 === 0) nm.a = winner; else nm.b = winner; } else { st.champion = winner; }
      if (ri === 0) { const k = cpFirst[mi]; if (k !== undefined) st.conPigtails[k].b = loser; else { const [cm, side] = seatOf(mi); st.con[0][cm][side] = loser; resolveVacant(st, cm); } }
      else if (ri === 1) { if (DROP_R2[mi] !== undefined) st.con[1][DROP_R2[mi]].a = loser; }
      else if (ri === 2) { st.con[3][DROP_QF[mi]].a = loser; }
      else if (ri === 3) { st.con[5][DROP_SF[mi]].a = loser; }
    }
    function advanceCon(st, ri, mi, winner, loser) {
      if (ri === 0) { st.con[1][mi].b = winner; }
      else if (ri === 1) { const nm = st.con[2][Math.floor(mi / 2)]; if (mi % 2 === 0) nm.b = winner; else nm.a = winner; }
      else if (ri === 2) { st.con[3][mi].b = winner; }
      else if (ri === 3) { const nm = st.con[4][Math.floor(mi / 2)]; if (mi % 2 === 0) nm.a = winner; else nm.b = winner; }
      else if (ri === 4) { st.con[5][mi].b = winner; if (!st.place7.a) st.place7.a = loser; else st.place7.b = loser; }
      else if (ri === 5) { if (!st.place3.a) st.place3.a = winner; else st.place3.b = winner; if (!st.place5.a) st.place5.a = loser; else st.place5.b = loser; }
    }
    const adapter = { weights: [weight], pigtailCount: N, boutNumbers: window.BoutModel.boutNumbers,
      newState: function (wt) { initBracket(wt); return states[wt]; }, applyPick: applyPick,
      roundNames: { champ: ['Round 1','Rd of 16','Quarterfinals','Semifinals','Finals'], con: ['Con. Rd 1','Con. Rd 2','Con. Rd 3','Con. Rd 4','Con. Qtrs','Con. Semis'] } };
    return window.HistoricalCore.create(adapter);
  }

  function buildUnsafe(model, weight) {
    if (!window.TournamentCore || !window.BoutModel) return { ok: false, problems: ['TournamentCore / BoutModel are not available on this page.'] };
    if (model.pigtailCount >= 2) {                     // N >= 2 wrestle-ins: generic History path (HistoricalCore)
      if (!window.HistoricalCore) return { ok: false, problems: ['HistoricalCore is not available on this page.'] };
      const mf = buildMultiFields(model); if (mf.problems.length) return { ok: false, problems: mf.problems, fieldWarnings: mf.warnings };
      const FM = (window.HistoricalSeeds && window.HistoricalSeeds.facts) || {}, fx = (FM[String(model.year)] || {})[String(model.weight)] || {};
      const core = buildEngineMulti(mf.fields, Number(weight), mf.engineR1, mf.feeds, mf.cpt, mf.pairNums, fx.drops || null, fx.byes || null, mf.cpNext, mf.cpFirst);
      const book = core.newBook(), problems = replayModel(core, book, model, Number(weight));
      return { ok: problems.length === 0, core, book, problems, fieldWarnings: mf.warnings, pigtailSlot: mf.feeds[0].slot, conPigtailSlot: mf.cpt[0] };
    }
    const { fields, engineR1, pigtailSlot, conPigtailSlot, warnings: fieldWarnings, problems: fieldProblems } = buildHistoricalFields(model);
    if (fieldProblems.length) return { ok: false, problems: fieldProblems, fieldWarnings: fieldWarnings };
    const F_ = (typeof window !== 'undefined' && window.HistoricalSeeds && window.HistoricalSeeds.facts) || {};
    const drops = ((F_[String(model.year)] || {})[String(model.weight)] || {}).drops || null;
    const byes = ((F_[String(model.year)] || {})[String(model.weight)] || {}).byes || null;
    const core = buildEngine(fields, Number(weight), engineR1, pigtailSlot, conPigtailSlot, drops, byes);
    const book = core.newBook();
    const problems = replayModel(core, book, model, Number(weight));
    return { ok: problems.length === 0, core: core, book: book, problems: problems, fieldWarnings: fieldWarnings, pigtailSlot: pigtailSlot, conPigtailSlot: conPigtailSlot };
  }

  return { build: build, buildHistoricalFields: buildHistoricalFields, buildMultiFields: buildMultiFields, parseResult: parseResult };
})();

if (typeof module === 'object' && module.exports) module.exports = HistoricalStateBuilder;

/* ============================================================================================================================
   QUARTERFINAL WRESTLEBACK (1990-1995) -- ITS OWN historical bracket shape. Selected ONLY by HistoricalSeeds.facts[year][weight]
   .consFormat === 'qf-wrestleback'; never used for any other year (1996-2026 keep the code above, unchanged).
   Consolation = 5 rounds: WB1 (8) quarterfinalists' R1/wrestle-in victim vs R2 victim -> WB2 (4) pairs -> WB3 (4) vs quarterfinal losers
   -> WB4 (2) pairs, losers to 7th -> WB5 (2) vs semifinal losers, winners to 3rd, losers to 5th. Who wrestles back is a historical
   FACT read from the printed consolation bracket (facts.wb, each seat checked against the rule by assemble_wb.py); a loser with no seat
   is eliminated. Runs on the existing cores unchanged (TournamentCore for 0-1 wrestle-ins, HistoricalCore for 2+), which discover the
   routing by probing this engine's applyPick. Bout numbers: wrestleback session order (same as results{YEAR}.js).
   ============================================================================================================================ */
(function () {
  const LINE_NO = [1,32,17,16,9,24,25,8,5,28,21,12,13,20,29,4,3,30,19,14,11,22,27,6,7,26,23,10,15,18,31,2];
  const WEIGHTS = [125, 133, 141, 149, 157, 165, 174, 184, 197, 285];
  const ORDER = ['Prelims', 'ChampR1', 'ConsPrelims', 'ChampR2', 'WbConsR1', 'QuarterFinals', 'WbConsR2', 'WbConsR3', 'SemiFinals', 'WbConsR4', 'WbConsR5', '7thPlace', '5thPlace', '3rdPlace', 'Finals'];
  const PATH_CON = ['Con R1', 'Con R2', 'Con R3', 'Con QF', 'Con SF'];                    // Path to the Finals labels (5 rounds)
  const RENDER_CON = ['Con. Rd 1', 'Con. Rd 2', 'Con. Rd 3', 'Con. Qtrs', 'Con. Semis'];  // bracket column headers (5 rounds)
  const norm = s => String(s || '').toLowerCase().replace(/[^a-z]/g, '');
  function factsOf(year, label) { const F = typeof window !== 'undefined' && window.HistoricalSeeds && window.HistoricalSeeds.facts; return (F && F[String(year)] && F[String(year)][String(label)]) || null; }
  function isWrestleback(year, label) { const f = factsOf(year, label); return !!(f && f.consFormat === 'qf-wrestleback'); }
  function boutNumbers(weight) { const wi = WEIGHTS.indexOf(Number(weight));
    return { pigtail: 1 + wi, r1Start: 11 + 16 * wi, r2Start: 171 + 8 * wi, preCons: 251 + wi, c1Start: 261 + 8 * wi, qfStart: 341 + 4 * wi, c2Start: 381 + 4 * wi,
             c3Start: 421 + 4 * wi, semiStart: 461 + 2 * wi, c4Start: 481 + 2 * wi, cQtrsStart: 501 + 2 * wi, cSemisStart: 511 + 2 * wi,
             seventh: 521 + wi, fifth: 531 + wi, third: 541 + wi, final: 551 + wi }; }
  function roundLabel(key) { const p = String(key).split(':'); return p[0] === 'con' ? (PATH_CON[+p[1]] || null) : null; }

  function build(resultData, year, label, slotWeight) {
    const problems = [], F = factsOf(year, label);
    if (!F || F.consFormat !== 'qf-wrestleback') return { ok: false, problems: ['no qf-wrestleback facts for ' + year + '/' + label] };
    const rows = resultData.filter(r => String(r.weight) === String(label));
    const T = ((window.HistoricalSeeds.table || {})[String(year)] || {})[String(label)] || {};
    const WB = F.wb, N = rows.filter(r => r.round === 'Prelims').length, M = rows.filter(r => r.round === 'ConsPrelims').length;
    const school = {}; rows.forEach(r => { school[r.winner] = r.winner_school; school[r.loser] = r.loser_school; });
    // identity: a wrestler on a printed line takes that line's standard draw number; wrestle-in losers (no line) take 33, 34, ... in order
    const fieldOf = {}; Object.entries(F.lines).forEach(([n, L]) => { fieldOf[n] = { n, s: school[n] || '', r: '', seed: LINE_NO[L], ds: T[n] || 0 }; });
    const pigRows = rows.filter(r => r.round === 'Prelims').sort((a, b) => a.bout - b.bout);
    let nextNo = 33; pigRows.forEach(r => [r.winner, r.loser].forEach(n => { if (!fieldOf[n]) fieldOf[n] = { n, s: school[n] || '', r: '', seed: nextNo++, ds: T[n] || 0 }; }));
    rows.forEach(r => [r.winner, r.loser].forEach(n => { if (!fieldOf[n]) problems.push(n + ' has no printed line and is not a wrestle-in entrant'); }));
    if (problems.length) return { ok: false, problems };
    const W = n => { const f = fieldOf[n]; return f ? { n: f.n, s: f.s, r: '', seed: f.seed, ds: f.ds } : null; };
    const lineName = {}; Object.entries(F.lines).forEach(([n, L]) => { lineName[L] = n; });
    const feeds = WB.feeds || [], fedSeat = {}; feeds.forEach(f => { fedSeat[f.slot + f.side] = f.k; });
    const byesR1 = (F.byes || []).filter(b => b.phase === 'r1'), vacant = (F.byes || []).filter(b => b.phase === 'wb1').map(b => b.slot);
    const mk = (a, b) => ({ a, b, w: null });
    const states = {};
    function initBracket(wt) {
      const r1 = Array.from({ length: 16 }, (_, i) => mk(fedSeat[i + 'a'] !== undefined ? null : W(lineName[2 * i]), fedSeat[i + 'b'] !== undefined ? null : W(lineName[2 * i + 1])));
      const pigs = pigRows.map(r => { const e = [r.winner, r.loser].sort((x, y) => norm(x) < norm(y) ? -1 : 1); return mk(W(e[0]), W(e[1])); });
      const conPigs = Array.from({ length: Math.max(N, 1) }, () => mk(null, null));
      const st = { champ: [r1, Array.from({ length: 8 }, () => mk(null, null)), Array.from({ length: 4 }, () => mk(null, null)), Array.from({ length: 2 }, () => mk(null, null)), [mk(null, null)]],
        con: [8, 4, 4, 2, 2].map(n => Array.from({ length: n }, () => mk(null, null))),
        place3: mk(null, null), place5: mk(null, null), place7: mk(null, null), champion: null,
        wrestleback: true, conRoundNames: RENDER_CON };
      if (N >= 2) { st.pigtails = pigs; st.conPigtails = conPigs; st.pigtail = pigs[0]; st.conPigtail = conPigs[0];
        st.pigtailSlots = feeds.map(f => f.slot); st.conPigtailSlots = conPigs.map((m, j) => WB.conPigSeat[j] !== undefined ? 2 * WB.conPigSeat[j] : 0); }
      else { st.pigtail = N === 1 ? pigs[0] : mk(null, null); st.conPigtail = conPigs[0];
        st.pigtailSlot = N === 1 ? feeds[0].slot : null; st.conPigtailSlot = (M === 1 && WB.conPigSeat[0] !== undefined) ? 2 * WB.conPigSeat[0] : (N === 1 ? 0 : null); }
      vacant.forEach(p => { st.con[0][p].vacant = 'a'; });
      byesR1.forEach(b => { const m = st.champ[0][b.slot]; m.a = W(b.wrestler); m.b = null; m.w = 'a'; m.bye = true; const nm = st.champ[1][b.slot >> 1]; if (b.slot % 2 === 0) nm.a = m.a; else nm.b = m.a; });
      states[wt] = st;
    }
    const seat = (m, side, x) => { m[side] = x; };
    function resolveVacant(st, p) { const m = st.con[0][p]; if (!m.vacant || m.w) return; const present = m.vacant === 'a' ? 'b' : 'a';
      if (m[present]) { m.w = present; m.bye = true; advCon(st, 0, p, m[present], null); } }
    function advCon(st, ri, mi, w, l) {
      if (ri === 0) seat(st.con[1][mi >> 1], mi % 2 ? 'b' : 'a', w);
      else if (ri === 1) seat(st.con[2][mi], 'b', w);
      else if (ri === 2) seat(st.con[3][mi >> 1], mi % 2 ? 'b' : 'a', w);
      else if (ri === 3) { seat(st.con[4][mi], 'b', w); if (l) { if (!st.place7.a) st.place7.a = l; else st.place7.b = l; } }
      else if (ri === 4) { if (!st.place3.a) st.place3.a = w; else st.place3.b = w; if (l) { if (!st.place5.a) st.place5.a = l; else st.place5.b = l; } }
    }
    function applyPick(st, bracket, ri, mi, slot) {
      let m = null;
      if (bracket === 'pigtail') m = N >= 2 ? st.pigtails[ri] : st.pigtail;
      else if (bracket === 'conPigtail') m = N >= 2 ? st.conPigtails[ri] : st.conPigtail;
      else if (bracket === 'champ') m = st.champ[ri][mi];
      else if (bracket === 'con') m = st.con[ri][mi];
      else if (bracket === 'p3') m = st.place3; else if (bracket === 'p5') m = st.place5; else if (bracket === 'p7') m = st.place7;
      if (!m || !m.a || !m.b || m.w) return;
      const w = slot === 'a' ? m.a : m.b, l = slot === 'a' ? m.b : m.a; m.w = slot;
      if (bracket === 'pigtail') { const k = N >= 2 ? ri : 0, f = feeds[k]; if (f) seat(st.champ[0][f.slot], f.side, w);
        const j = WB.pigCons[k]; if (j !== undefined) seat(N >= 2 ? st.conPigtails[j] : st.conPigtail, 'a', l); }
      else if (bracket === 'conPigtail') { const j = N >= 2 ? ri : 0, p = WB.conPigSeat[j]; if (p !== undefined) { seat(st.con[0][p], 'a', w); resolveVacant(st, p); } }
      else if (bracket === 'champ') {
        if (ri < 4) seat(st.champ[ri + 1][mi >> 1], mi % 2 ? 'b' : 'a', w); else st.champion = w;
        if (ri === 0) { const d = WB.r1Dest[mi]; if (d && d.wb1 !== undefined) { seat(st.con[0][d.wb1], 'a', l); resolveVacant(st, d.wb1); } else if (d && d.conPig !== undefined) seat(N >= 2 ? st.conPigtails[d.conPig] : st.conPigtail, 'b', l); }
        else if (ri === 1) { const p = WB.r2Seat[mi]; if (p !== undefined) { seat(st.con[0][p], 'b', l); resolveVacant(st, p); } }
        else if (ri === 2) seat(st.con[2][WB.qfSeat[mi]], 'a', l);
        else if (ri === 3) seat(st.con[4][WB.sfSeat[mi]], 'a', l);
      }
      else if (bracket === 'con') advCon(st, ri, mi, w, l);
    }
    const adapter = { weights: [Number(slotWeight)], pigtailCount: N, boutNumbers, newState: wt => { initBracket(wt); return states[wt]; }, applyPick,
      roundNames: { champ: ['Round 1', 'Rd of 16', 'Quarterfinals', 'Semifinals', 'Finals'], con: RENDER_CON } };
    const core = N >= 2 ? window.HistoricalCore.create(adapter) : window.TournamentCore.create(adapter);
    core.roundLabel = roundLabel;      // optional hook read by official-path.js (absent on every other core)
    const book = core.newBook(), wt = Number(slotWeight);
    const pending = () => core.keys.map(k => core.boutIdOf(wt, k)).filter(Boolean).map(id => core.describe(book, id)).filter(d => d && d.status === 'pending');
    const parse = (typeof HistoricalStateBuilder !== 'undefined' ? HistoricalStateBuilder : window.HistoricalStateBuilder).parseResult;   // same file: the top-level const (not on window in browsers)
    rows.slice().sort((a, b) => ORDER.indexOf(a.round) - ORDER.indexOf(b.round) || a.bout - b.bout).forEach(r => {
      if (ORDER.indexOf(r.round) < 0) { problems.push('unknown round ' + r.round); return; }
      const c = pending().find(d => (norm(d.a && d.a.name) === norm(r.winner) && norm(d.b && d.b.name) === norm(r.loser)) || (norm(d.b && d.b.name) === norm(r.winner) && norm(d.a && d.a.name) === norm(r.loser)));
      if (!c) { problems.push(r.round + ': no pending bout for ' + r.winner + ' vs ' + r.loser); return; }
      const pr = parse(r.result); if (!pr) { problems.push(r.round + ': could not parse "' + r.result + '"'); return; }
      const res = core.record(book, { boutId: c.boutId, winnerId: norm(c.a.name) === norm(r.winner) ? c.a.id : c.b.id, resultType: pr.resultType, score: pr.score, time: pr.time, source: 'historical-replay' });
      if (!res.ok) problems.push(r.round + ': ' + r.winner + ' vs ' + r.loser + ' -- ' + (res.message || res.code));
    });
    const left = pending(); if (left.length && !problems.length) problems.push(left.length + ' bout(s) left pending');
    return { ok: problems.length === 0, core, book, problems, wrestleback: true };
  }
  const api = { isWrestleback, build, boutNumbers, roundLabel, PATH_CON, RENDER_CON };
  if (typeof window !== 'undefined') window.HistoricalWrestleback = api;
  if (typeof globalThis !== 'undefined') globalThis.HistoricalWrestleback = api;
})();
