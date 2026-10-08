/* ============================================================================
   HISTORY MODE -- Tournament Central integration, read-only, native-bracket pipeline.
   ----------------------------------------------------------------------------
   This file is data preparation only: fetch a historical year's results, build
   the canonical bracket model (HistoricalAdapter, frozen, unmodified), then
   build an isolated TournamentCore instance from it (HistoricalStateBuilder,
   also unmodified from its own last revision). The actual bracket DOM and
   Path to the Finals are NOT built here -- this hands the finished core+book
   to window.showHistoricalBracket(), a function defined inside index.html's
   own module (because viewMode/CW/render() are module-scoped and this script,
   being separate, cannot assign them directly), which does the rendering by
   calling the SAME render() that OFFICIAL and MY PICKS already use.

   READ-ONLY, by construction: nothing in this file ever references
   officialBook, officialCore, states (MY PICKS), or any Firebase API.
   ============================================================================ */

/* ---- HISTORICAL WEIGHT CLASSES (pre-1999 years) -------------------------------------------------------------------
   The engine numbers bouts by weight SLOT (the 10 positions of BoutModel.WEIGHT_ORDER: 125 ... 285). A year with a
   different set of weight classes keeps its REAL labels in its data (results1998.js says "118") and is mapped onto the
   same 10 slots, in order, only when a bracket is handed to the engine; every label the user sees is the real one.
   Years not listed here use the modern labels unchanged (identity), so 1999-2026 behave exactly as before.
   Sources: the WrestlingStats 1996, 1997 and 1998 compiled brackets (weight-class pages 118 ... 275). */
const HistoricalWeights = (function () {
  const MODERN = [125, 133, 141, 149, 157, 165, 174, 184, 197, 285];
  const CLASSES = { 1970: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1971: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1972: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1973: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1974: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1975: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1976: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1977: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1978: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1979: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1980: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1980: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1981: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1981: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1982: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1983: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1984: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1985: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1986: [118, 126, 134, 142, 150, 158, 167, 177, 190, 'UNL'], 1987: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1988: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1989: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1990: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1991: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1992: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1993: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1994: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1995: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1996: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1997: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275], 1998: [118, 126, 134, 142, 150, 158, 167, 177, 190, 275] };
  const of = year => CLASSES[Number(year)] || MODERN;
  return {
    classes: of,                                                                  // labels for a year, lightest first
    labelOf(year, slot) { const i = MODERN.indexOf(Number(slot)); return i < 0 ? Number(slot) : of(year)[i]; },
    slotOf(year, label) { const i = of(year).findIndex(l => String(l) === String(label)); return i < 0 ? Number(label) : MODERN[i]; },   // string compare: 1986 heavyweight label is 'UNL'
    isMapped: year => !!CLASSES[Number(year)],
    // Text for a weight label: numbers keep their unit exactly as before ('118 lbs' / 'the 118 lb bracket'); 'UNL' (unlimited, pre-1987) shows as printed.
    unit: label => /^\d+$/.test(String(label)) ? label + ' lbs' : String(label),
    bracketName: label => /^\d+$/.test(String(label)) ? label + ' lb' : String(label),
    // On-screen label for an engine weight slot. Only while the History controls are showing (History mode), using the same
    // year precedence index.html uses for "View the ___ lb bracket"; everywhere else (2026 OFFICIAL, MY BRACKET) it returns the
    // slot unchanged, so non-history views can never be relabelled.
    display(slot) {
      const hc = typeof document !== 'undefined' && document.getElementById('history-controls');
      if (!hc || hc.style.display === 'none') return slot;
      const y = window.historicalPathYear || (window.historicalYear && window.historicalYear.year) || window.historicalBracketYear;
      return y ? this.labelOf(y, slot) : slot;
    },
    // Seed-table alias for a mapped year: index.html's histSeedView() reads printed seeds by the wrestler id's engine slot
    // ("125-07"), while the table is keyed by the real label ("118"). For mapped years only, each label's table is also
    // registered under its slot (the label and slot sets never overlap: 118-275 vs 125-285). Nothing else reads those keys.
    aliasSeeds(year) {
      const T = window.HistoricalSeeds && window.HistoricalSeeds.table && window.HistoricalSeeds.table[String(year)];
      if (!T || !CLASSES[Number(year)]) return;
      of(year).forEach((label, i) => { if (T[String(label)] && !T[String(MODERN[i])]) T[String(MODERN[i])] = T[String(label)]; });
    }
  };
})();
if (typeof window !== 'undefined') window.HistoricalWeights = HistoricalWeights;

const HistoryMode = (function () {

  // CONFIGURATION: where the historical results live -- a separate repository from Tournament Central. Edit
  // this to the real historical results site's URL for your deployment; for local testing, point it at
  // wherever you're serving that site's results*.js files (see README for options).
  const HISTORY_DATA_BASE_URL = './historical-data/';

  const SCORING_PENDING = new Set([]);   // none: 1985-1987 rules approved Oct 6 2026 (history-layer model)   // years whose team-scoring rule is awaiting approval (none: 1990-1995 approved Oct 6 2026, history-layer model)
  const AVAILABLE_YEARS = [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1980,1981,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2021,2022,2023,2024,2025,2026]; // matches the frozen validation matrix

  let initialized = false;

  function init() {
    const yearSel = document.getElementById('hist-year');
    if (!initialized) {
      [...new Set(AVAILABLE_YEARS)].sort((a, b) => b - a).forEach(y => {   // de-duplicated, newest first
        const opt = document.createElement('option');
        opt.value = y; opt.textContent = y;
        if (y === 2016) opt.selected = true; // this milestone's one acceptance case
        yearSel.appendChild(opt);
      });
      yearSel.addEventListener('change', function () { closePath(); closeTeam(); fillWeights(); });
      document.getElementById('hist-show-btn').addEventListener('click', showBracket);
      const scoresBtn = document.getElementById('hist-scores-btn');
      if (scoresBtn) scoresBtn.addEventListener('click', showTeamScores);
      initialized = true;
    }
  }

  // Weight select: the year's own weight classes (1998: 118 ... 275; every other year: 125 ... 285, unchanged). The selected
  // POSITION is kept when the year changes (149 <-> 142 are both the 4th class).
  function fillWeights() {
    const ws = document.getElementById('hist-weight'), year = document.getElementById('hist-year').value;
    if (!ws) return;
    const labels = HistoricalWeights.classes(year).map(String);
    if (Array.from(ws.options).map(o => o.value).join() === labels.join()) return;
    const pos = Math.max(0, ws.selectedIndex);
    ws.innerHTML = '';
    labels.forEach((l, i) => { const o = document.createElement('option'); o.value = l; o.textContent = l; if (i === pos) o.selected = true; ws.appendChild(o); });
  }

  function setStatus(msg, isError) {
    const el = document.getElementById('hist-status');
    el.textContent = msg;
    el.style.color = isError ? '#e08a8a' : 'var(--t2)';
  }

  // Fetches one year's results via fetch() + extracting just the array literal from the response text --
  // deliberately not by injecting <script src="..."> and reading a global, since results*.js declares "const
  // resultData = [...]" and a second script tag with the same top-level const would throw on a repeated load
  // (confirmed the hard way in this project's earlier milestone).
  function loadYearData(year) {
    const url = HISTORY_DATA_BASE_URL + 'results' + year + '.js?v=' + Date.now();
    return fetch(url).then(r => {
      if (!r.ok) throw new Error('Could not load ' + url + ' (HTTP ' + r.status + ') -- check HISTORY_DATA_BASE_URL in historical-mode.js.');
      return r.text();
    }).then(text => {
      const m = text.match(/(?:const|window\.)\s*resultData\s*=\s*(\[[\s\S]*?\]);/);
      if (!m) throw new Error('results' + year + '.js did not define the expected resultData array.');
      let data;
      try { data = JSON.parse(m[1]); }
      catch (e) { try { data = (0, eval)('(' + m[1] + ')'); } catch (e2) { throw new Error('Could not parse the resultData array in results' + year + '.js.'); } }
      if (!Array.isArray(data)) throw new Error('results' + year + '.js did not define the expected resultData array.');
      return data;
    });
  }

  // Increments on every SHOW BRACKET click, so a slower, earlier load can never paint over a newer selection.
  let loadSeq = 0;

  // Any failed load clears the previously shown historical bracket + All-Americans (via index.html's
  // clearHistoricalBracket) before reporting, so stale data from the last weight is never displayed under an
  // error that belongs to the new one.
  function fail(year, weight, msg) {
    if (typeof window.clearHistoricalBracket === 'function') {
      window.clearHistoricalBracket('No bracket shown — ' + year + '/' + weight + ' failed to load. See the message above.');
    }
    setStatus(msg, true);
  }

  // A Path to the Finals belongs to one championship: close any open Path whenever the historical year or view changes,
  // so it can never stay visible over another year's bracket or team scores. (Career-opened Paths change no year or view.)
  function closePath() { if (window.PathPanel && window.PathPanel.isOpen && window.PathPanel.isOpen()) window.PathPanel.close(); }
  // The Team panel is year-level: close it when the year changes (a new view already closes it, in hideHistoricalScoresView).
  function closeTeam() { if (window.TeamPanel && window.TeamPanel.isOpen && window.TeamPanel.isOpen()) window.TeamPanel.close(); }
  function showBracket() {
    closePath();
    const year = document.getElementById('hist-year').value;
    const weight = document.getElementById('hist-weight').value;
    const mySeq = ++loadSeq;
    setStatus('Loading ' + year + ' results…');

    loadYearData(year).then(resultData => {
      if (mySeq !== loadSeq) return; // superseded by a newer SHOW BRACKET click
      if (typeof HistoricalAdapter === 'undefined') throw new Error('historical-adapter.js did not load.');
      if (typeof HistoricalStateBuilder === 'undefined') throw new Error('historical-state-builder.js did not load.');

      const slot = HistoricalWeights.slotOf(year, weight);              // engine slot (identity for 1999-2026)
      HistoricalWeights.aliasSeeds(year);
      let built;
      if (window.HistoricalWrestleback && HistoricalWrestleback.isWrestleback(year, weight)) built = HistoricalWrestleback.build(resultData, year, weight, String(slot));   // 1990-1995 shape
      else {
        const modelResult = HistoricalAdapter.buildCanonicalBracketModel(resultData, year, weight);
        if (!modelResult.ok) { fail(year, weight, year + '/' + weight + ' could not be rendered: ' + modelResult.problems.join('; ')); return; }
        built = HistoricalStateBuilder.build(modelResult.model, String(slot));
      }
      if (!built.ok) { fail(year, weight, year + '/' + weight + ' could not be built: ' + built.problems.join('; ')); return; }

      if (typeof window.showHistoricalBracket !== 'function') throw new Error('showHistoricalBracket() is not available on this page.');
      window.showHistoricalBracket(Number(slot), built.core, built.book, Number(year));
      setStatus(year + ' ' + HistoricalWeights.unit(weight) + ' — read-only historical bracket. Separate from the 2026 Master; no live data.');
    }).catch(err => {
      if (mySeq !== loadSeq) return;
      fail(year, weight, 'Error: ' + err.message);
    });
  }

  // ---- HISTORICAL TEAM SCORES: data preparation only (no scoring code here) ---------------------------------------
  // Builds ALL 10 weights of one year with the frozen adapter + frozen builder (one isolated TournamentCore per weight;
  // wrestler ids are weight-prefixed and bout ids are per-weight, so they never collide). index.html feeds the combined
  // records to the EXISTING OfficialScoring.compute() and draws them with the EXISTING scores / team-detail / Path UI.
  // Read-only: nothing here touches officialBook, officialCore, states (MY PICKS), or Firebase.
  const yearCache = {};   // year -> built year (only successful builds are cached; the source data is static)

  function buildYear(year, resultData) {
    const TC = window.TournamentCore, weights = (window.BoutModel && window.BoutModel.WEIGHT_ORDER) || [];
    const Y = { year: Number(year), weights: [], cores: {}, books: {}, schoolOf: {}, idsBySchool: {}, records: [], problems: [],
                adjustments: (window.HistoricalAdjustments && window.HistoricalAdjustments.forYear(year)) || null };
    HistoricalWeights.aliasSeeds(year);
    weights.forEach(w => {
      const label = HistoricalWeights.labelOf(year, w);                 // the year's real weight class (identity for 1999-2026)
      let b;
      if (window.HistoricalWrestleback && HistoricalWrestleback.isWrestleback(year, label)) b = HistoricalWrestleback.build(resultData, year, String(label), String(w));   // 1990-1995 shape
      else { const mr = HistoricalAdapter.buildCanonicalBracketModel(resultData, year, String(label));
        if (!mr.ok) { Y.problems.push(label + ': ' + mr.problems.join('; ')); return; }
        b = HistoricalStateBuilder.build(mr.model, String(w)); }
      if (!b.ok) { Y.problems.push(label + ': ' + b.problems.join('; ')); return; }
      Y.weights.push(w); Y.cores[w] = b.core; Y.books[w] = b.book;
      const st = b.book.states[w];
      const entrants = (st.pigtails || [st.pigtail]).reduce((a, m) => a.concat([m.a, m.b]), []).concat(st.champ[0].reduce((a, m) => a.concat([m.a, m.b]), []));
      entrants.forEach(x => {
        if (!x) return;
        const id = TC.wrestlerId(w, x), school = String(x.s || '').trim();
        if (Y.schoolOf[id] !== undefined) return;
        Y.schoolOf[id] = school;
        (Y.idsBySchool[school] = Y.idsBySchool[school] || []).push(id);
      });
      Y.records = Y.records.concat(b.core.toRecords(b.book));
    });
    // 1990-1995 (quarterfinal wrestleback): team scoring is NOT computed until a historical scoring rule is approved -- the modern
    // scorer's round semantics and the published quarter-point totals do not apply as-is. Brackets, Path and Career work normally.
    if (SCORING_PENDING.has(Number(year))) { Y.scoringPending = true; return Y; }
    if (window.HistoricalWrestlebackScoring && Y.weights.some(w => window.HistoricalWrestleback && HistoricalWrestleback.isWrestleback(year, HistoricalWeights.labelOf(year, w)))) {
      const shape = HistoricalWrestleback.shapeOf(year, HistoricalWeights.labelOf(year, Y.weights[0]));
      const byePlacements = [];   // placements decided by a printed bye (1981 source exceptions): no bout record -- read from the bracket state
      Y.weights.forEach(w => { const st = Y.books[w] && Y.books[w].states[w]; if (!st) return;
        [[3, 'place3'], [5, 'place5'], [7, 'place7']].forEach(([pl, k]) => { const m = st[k]; if (m && m.bye && m.w) byePlacements.push(Object.assign({ id: TournamentCore.wrestlerId(w, m[m.w]), round: pl + (pl === 3 ? 'rd' : 'th') }, m.forfeitBonus ? { forfeitBonus: true } : {})); }); });
      Y.scores = HistoricalWrestlebackScoring.compute(year, Y.records, id => Y.schoolOf[id] || '', Object.keys(Y.idsBySchool), Object.assign({ shape }, byePlacements.length ? { byePlacements } : {}));   // 1972-1995 history-layer model
      return Y; }
    // Year/format-driven historical scoring rules (History layer only; the OFFICIAL scorer is untouched).
    if (window.HistoricalRules) { const ap = window.HistoricalRules.apply(year, Y.records, id => Y.schoolOf[id], Y.adjustments);
      if (ap) { Y.adjustments = ap.adjustments; Y.byeCredits = ap.credits; window.HistoricalRules.register(year, ap.credits, ap.placeDeltas); } }
    return Y;
  }

  function showTeamScores() {
    closePath();
    const year = document.getElementById('hist-year').value;
    if (SCORING_PENDING.has(Number(year))) { setStatus(year + ' team scores are not shown yet: the ' + year + ' scoring rules (quarterfinal-wrestleback era) are awaiting review. Brackets, Path to the Finals and NCAA Career are available.', true); return; }
    const mySeq = ++loadSeq;
    setStatus('Building ' + year + ' team scores (all 10 weights)…');
    const ready = yearCache[year] ? Promise.resolve(yearCache[year]) : loadYearData(year).then(data => {
      if (typeof HistoricalAdapter === 'undefined') throw new Error('historical-adapter.js did not load.');
      if (typeof HistoricalStateBuilder === 'undefined') throw new Error('historical-state-builder.js did not load.');
      return buildYear(year, data);
    });
    ready.then(Y => {
      if (mySeq !== loadSeq) return;
      if (Y.problems.length || Y.weights.length !== 10) {
        fail(year, 'team scores', year + ' team scores could not be built: ' + (Y.problems.join('; ') || 'not all 10 weights are available'));
        return;
      }
      yearCache[year] = Y;
      if (typeof window.showHistoricalScores !== 'function') throw new Error('showHistoricalScores() is not available on this page.');
      window.showHistoricalScores(Y);
      setStatus(year + ' team scores — read-only, all 10 weights replayed. Separate from the 2026 Master; no live data.');
    }).catch(err => {
      if (mySeq !== loadSeq) return;
      fail(year, 'team scores', 'Error: ' + err.message);
    });
  }

  // Path to the Finals "View the ___ lb bracket" while in History: open that historical year at that weight, through
  // the same Show Bracket flow (sets the two selects, then showBracket()). Never leaves History.
  function openBracket(year, weight) {
    const ys = document.getElementById('hist-year'), ws = document.getElementById('hist-weight');
    if (!ys || !ws) return false;
    ys.value = String(year); fillWeights();
    const label = String(HistoricalWeights.labelOf(year, weight));        // Path passes the engine slot
    ws.value = label;
    if (ys.value !== String(year) || ws.value !== label) return false; // unknown year/weight option
    showBracket();
    return true;
  }

  // NCAA Career: one historical year, built once and cached through the SAME loadYearData + buildYear path as Team Scores.
  function getYear(year) {
    const k = String(year);
    if (yearCache[k]) return Promise.resolve(yearCache[k]);
    return loadYearData(k).then(data => {
      const Y = buildYear(k, data);
      if (Y.problems.length || Y.weights.length !== 10) throw new Error(k + ' could not be built: ' + (Y.problems.join('; ') || 'not all 10 weights are available'));
      yearCache[k] = Y; return Y;
    });
  }

  return { init: init, buildYear: buildYear, openBracket: openBracket, getYear: getYear, scoringPending: y => SCORING_PENDING.has(Number(y)) };
})();

window.HistoryMode = HistoryMode; // 'const' at script scope does not attach to window on its own -- needed since
                                   // switchHistory() in index.html checks window.HistoryMode explicitly.
