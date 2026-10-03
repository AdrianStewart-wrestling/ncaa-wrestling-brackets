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
    const loserOf = m => (norm(m.a.name) === norm(m.winner.name)) ? m.b : m.a;
    const hasName = (m, name) => norm(m.a.name) === norm(name) || norm(m.b.name) === norm(name);

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
      const seedVals = Object.values(printedSeed).sort((x, y) => x - y);
      if (!(N >= 1 && N <= 33) || seedVals.length !== N || seedVals.some((v, i) => v !== i + 1)) problems.push('printed seeds are not exactly 1..' + N + ' (found ' + seedVals.join(',') + ').');
      const used = new Array(32).fill(false);
      const lineOfP = person => lineOf[norm(person && person.name)];
      const ptW = model.hasPigtail ? model.phases.pigtail.winner : null, ptL = model.hasPigtail ? loserOf(model.phases.pigtail) : null;
      const isPtW = person => ptW && norm(person.name) === norm(ptW.name);
      r1.forEach((m, i) => [m.a, m.b].forEach(x => { const L = lineOfP(x);
        if (L === undefined) { problems.push('R1 slot ' + i + ': no printed line for ' + x.name + '.'); return; }
        if (L !== 2 * i && L !== 2 * i + 1) problems.push('R1 slot ' + i + ': ' + x.name + ' is on printed line ' + L + ', not in this bout (lines ' + (2 * i) + '/' + (2 * i + 1) + ').');
        if (used[L]) problems.push('printed line ' + L + ' is used twice.'); used[L] = true;
        const sd = printedSeed[norm(x.name)]; if (sd !== undefined && LINE_NO[L] !== sd) problems.push(x.name + ' (#' + sd + ') is printed on line ' + L + ', which is draw line #' + LINE_NO[L] + '.'); }));
      if (used.some(u => !u)) problems.push('printed lines not all used: ' + used.map((u, i) => u ? null : i).filter(v => v !== null).join(','));
      if (ptL && lineOfP(ptL) !== undefined) problems.push('wrestle-in loser ' + ptL.name + ' must not have a printed R1 line.');
      if (!problems.length) {
        const dsOf = x => printedSeed[norm(x.name)] || 0;
        let vacated = null;
        if (model.hasPigtail) {
          const ordered = [ptW, ptL].slice().sort((x, y) => norm(x.name) < norm(y.name) ? -1 : norm(x.name) > norm(y.name) ? 1 : 0);
          setSeed(32, ordered[0], dsOf(ordered[0])); setSeed(33, ordered[1], dsOf(ordered[1]));
          if (p !== 0) vacated = LINE_NO[lineOfP(ptW)];
        }
        r1.forEach((m, i) => {
          const top = lineOfP(m.a) === 2 * i ? m.a : m.b, bot = top === m.a ? m.b : m.a;
          const numOf = (x, L) => (i === 0 && L === 1 && vacated !== null) ? vacated : LINE_NO[L];
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

  function buildEngine(fields, weight, engineR1, pigtailSlot, conPigtailSlot) {
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
      else if (bracket === 'conPigtail') { if (CPT !== null) st.con[0][CPT >> 1][CPT % 2 ? 'b' : 'a'] = winner; }
      else if (bracket === 'champ') advanceChamp(st, ri, mi, winner, loser);
      else if (bracket === 'con') advanceCon(st, ri, mi, winner, loser);
    }
    function advanceChamp(st, ri, mi, winner, loser) {
      if (ri < 4) { const nm = st.champ[ri + 1][Math.floor(mi / 2)]; if (mi % 2 === 0) nm.a = winner; else nm.b = winner; }
      else { st.champion = winner; }
      if (ri === 0) {
        // OFFICIAL's verbatim table is: R1 slot i loser -> con[0][i>>1] side a/b by parity, except slot 8 ->
        // conPigtail.b. Same rule here with the exception at CPT (== the verbatim table when CPT=8).
        const d = (mi === CPT) ? ['conPigtail', null, null, 'b'] : ['con', 0, mi >> 1, mi % 2 ? 'b' : 'a'];
        if (d[0] === 'conPigtail') st.conPigtail.b = loser; else st.con[d[1]][d[2]][d[3]] = loser;
      } else if (ri === 1) {
        const dropMap = { 0:{m:7,slot:'a'},1:{m:6,slot:'a'},2:{m:5,slot:'a'},3:{m:4,slot:'a'},4:{m:3,slot:'a'},5:{m:2,slot:'a'},6:{m:1,slot:'a'},7:{m:0,slot:'a'} };
        const d = dropMap[mi]; if (d) st.con[1][d.m][d.slot] = loser;
      } else if (ri === 2) { const qfToCon4 = [1,0,3,2]; st.con[3][qfToCon4[mi]].a = loser; }
      else if (ri === 3) { const sfToConSemi = [1,0]; st.con[5][sfToConSemi[mi]].a = loser; }
    }
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
      phaseList.unshift(['pigtail', [model.phases.pigtail]]);
      phaseList.splice(2, 0, ['consPre', [model.phases.consPre]]);
    }
    phaseList.forEach(([label, matches]) => {
      matches.forEach(m => {
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
  function buildUnsafe(model, weight) {
    if (!window.TournamentCore || !window.BoutModel) return { ok: false, problems: ['TournamentCore / BoutModel are not available on this page.'] };
    const { fields, engineR1, pigtailSlot, conPigtailSlot, warnings: fieldWarnings, problems: fieldProblems } = buildHistoricalFields(model);
    if (fieldProblems.length) return { ok: false, problems: fieldProblems, fieldWarnings: fieldWarnings };
    const core = buildEngine(fields, Number(weight), engineR1, pigtailSlot, conPigtailSlot);
    const book = core.newBook();
    const problems = replayModel(core, book, model, Number(weight));
    return { ok: problems.length === 0, core: core, book: book, problems: problems, fieldWarnings: fieldWarnings, pigtailSlot: pigtailSlot, conPigtailSlot: conPigtailSlot };
  }

  return { build: build, buildHistoricalFields: buildHistoricalFields, parseResult: parseResult };
})();

if (typeof module === 'object' && module.exports) module.exports = HistoricalStateBuilder;
