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

const HistoryMode = (function () {

  // CONFIGURATION: where the historical results live -- a separate repository from Tournament Central. Edit
  // this to the real historical results site's URL for your deployment; for local testing, point it at
  // wherever you're serving that site's results*.js files (see README for options).
  const HISTORY_DATA_BASE_URL = './historical-data/';

  const AVAILABLE_YEARS = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2021,2022,2023,2024,2025,2026]; // matches the frozen validation matrix

  let initialized = false;

  function init() {
    const yearSel = document.getElementById('hist-year');
    if (!initialized) {
      AVAILABLE_YEARS.slice().reverse().forEach(y => {
        const opt = document.createElement('option');
        opt.value = y; opt.textContent = y;
        if (y === 2016) opt.selected = true; // this milestone's one acceptance case
        yearSel.appendChild(opt);
      });
      document.getElementById('hist-show-btn').addEventListener('click', showBracket);
      const scoresBtn = document.getElementById('hist-scores-btn');
      if (scoresBtn) scoresBtn.addEventListener('click', showTeamScores);
      initialized = true;
    }
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

  function showBracket() {
    const year = document.getElementById('hist-year').value;
    const weight = document.getElementById('hist-weight').value;
    const mySeq = ++loadSeq;
    setStatus('Loading ' + year + ' results…');

    loadYearData(year).then(resultData => {
      if (mySeq !== loadSeq) return; // superseded by a newer SHOW BRACKET click
      if (typeof HistoricalAdapter === 'undefined') throw new Error('historical-adapter.js did not load.');
      if (typeof HistoricalStateBuilder === 'undefined') throw new Error('historical-state-builder.js did not load.');

      const modelResult = HistoricalAdapter.buildCanonicalBracketModel(resultData, year, weight);
      if (!modelResult.ok) { fail(year, weight, year + '/' + weight + ' could not be rendered: ' + modelResult.problems.join('; ')); return; }

      const built = HistoricalStateBuilder.build(modelResult.model, weight);
      if (!built.ok) { fail(year, weight, year + '/' + weight + ' could not be built: ' + built.problems.join('; ')); return; }

      if (typeof window.showHistoricalBracket !== 'function') throw new Error('showHistoricalBracket() is not available on this page.');
      window.showHistoricalBracket(Number(weight), built.core, built.book, Number(year));
      setStatus(year + ' ' + weight + ' lbs — read-only historical bracket. No OFFICIAL or Firebase involvement.');
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
    weights.forEach(w => {
      const mr = HistoricalAdapter.buildCanonicalBracketModel(resultData, year, String(w));
      if (!mr.ok) { Y.problems.push(w + ': ' + mr.problems.join('; ')); return; }
      const b = HistoricalStateBuilder.build(mr.model, String(w));
      if (!b.ok) { Y.problems.push(w + ': ' + b.problems.join('; ')); return; }
      Y.weights.push(w); Y.cores[w] = b.core; Y.books[w] = b.book;
      const st = b.book.states[w];
      const entrants = [st.pigtail.a, st.pigtail.b].concat(st.champ[0].reduce((a, m) => a.concat([m.a, m.b]), []));
      entrants.forEach(x => {
        if (!x) return;
        const id = TC.wrestlerId(w, x), school = String(x.s || '').trim();
        if (Y.schoolOf[id] !== undefined) return;
        Y.schoolOf[id] = school;
        (Y.idsBySchool[school] = Y.idsBySchool[school] || []).push(id);
      });
      Y.records = Y.records.concat(b.core.toRecords(b.book));
    });
    // Year/format-driven historical scoring rules (History layer only; the OFFICIAL scorer is untouched).
    if (window.HistoricalRules) { const ap = window.HistoricalRules.apply(year, Y.records, id => Y.schoolOf[id], Y.adjustments);
      if (ap) { Y.adjustments = ap.adjustments; Y.byeCredits = ap.credits; window.HistoricalRules.register(year, ap.credits); } }
    return Y;
  }

  function showTeamScores() {
    const year = document.getElementById('hist-year').value;
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
      setStatus(year + ' team scores — read-only, all 10 weights replayed. No OFFICIAL or Firebase involvement.');
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
    ys.value = String(year); ws.value = String(weight);
    if (ys.value !== String(year) || ws.value !== String(weight)) return false; // unknown year/weight option
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

  return { init: init, buildYear: buildYear, openBracket: openBracket, getYear: getYear };
})();

window.HistoryMode = HistoryMode; // 'const' at script scope does not attach to window on its own -- needed since
                                   // switchHistory() in index.html checks window.HistoryMode explicitly.
