/* ============================================================================
   TOURNAMENT CENTRAL — Phase 3C (reads the OFFICIAL store; operators can RECORD a result)
   ----------------------------------------------------------------------------
   The operator landing view: ten weight tiles + Quick Bout Lookup.

   HARD RULES for this file
   • It talks to the tournament ONLY through window.TCEngine, a frozen facade defined in index.html.
     It never calls pick(), swap(), applyPick(), advanceChamp() or advanceCon(), and has no way to reach them.
   • OFFICIAL, not picks. Every lookup describes the OFFICIAL tournament state.
   • RECORDING (3C): the "Record official result" panel appears ONLY for a signed-in authorized operator, ONLY on a
     Pending bout (both wrestlers known, no result). It calls TCEngine.recordOfficial(), which validates, writes one
     result + one audit-log entry atomically, and only then changes anything. There are NO correct / clear controls yet.
   • ONE bout-number mapping, owned by tournament-core.js. TCEngine.selfCheck() says whether it is healthy.
   • CLEAR is UI-only: it empties this view's own input/message/card/draft and nothing else.
   • Weight tiles open the OFFICIAL bracket through TCEngine.openWeight(), which uses the existing switchW(weight).
   ============================================================================ */
(function () {
  'use strict';

  var root = document.getElementById('tc-view');
  if (!root) return;                                   // nothing to attach to: do nothing

  var state = {
    min: 1, max: 640,
    lookupOK: false,      // false if the official store is unavailable or its self-check failed
    problems: [],
    lastId: null,         // last successfully looked-up bout (so the card can refresh on show)
    dom: {}
  };

  /* ------------------------------------------------------------------ helpers */
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;             // textContent only: data is never parsed as HTML
    return e;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  /* ----------------------------------------------------------- input validation */
  function fail(code, message) { return { ok: false, code: code, message: message }; }

  // Friendly parsing: never throws.
  function parseBoutId(raw) {
    var min = state.min, max = state.max;
    var text = String(raw == null ? '' : raw).trim();
    var shown = text.length > 24 ? text.slice(0, 24) + '…' : text;
    if (text === '') return fail('empty', 'Enter a Bout ID (' + min + '–' + max + '), then click LOOK UP.');
    if (/^[+-]?(\d+\.\d*|\.\d+)$/.test(text)) return fail('decimal', '“' + shown + '” isn’t a whole number. Bout IDs run from ' + min + ' to ' + max + '.');
    if (/^-\d+$/.test(text)) return fail('negative', 'Bout IDs can’t be negative. They run from ' + min + ' to ' + max + '.');
    if (!/^\+?\d+$/.test(text)) return fail('nan', '“' + shown + '” isn’t a number. Bout IDs are whole numbers from ' + min + ' to ' + max + '.');
    var n = Number(text.replace(/^\+/, ''));
    if (!Number.isSafeInteger(n) || n < min || n > max) return fail('range', 'Bout ' + shown + ' doesn’t exist. Bout IDs run from ' + min + ' to ' + max + '.');
    return { ok: true, id: n };
  }

  /* -------------------------------------------------------------- bout description */
  function fmtWrestler(w) {
    if (!w) return null;
    return { id: w.id, name: String(w.name || '').trim(), school: String(w.school || '').trim(), seed: w.seed, record: String(w.record || '').trim() };
  }

  // Pure read of the OFFICIAL store: null for an unknown bout number, otherwise a plain descriptor.
  //   status: 'waiting' (an entrant is not known yet) | 'pending' (both known, no result) | 'decided'
  function describeBout(no) {
    if (!window.TCEngine || !window.TCEngine.officialAvailable()) return null;
    var d = window.TCEngine.describeOfficial(no);
    if (!d) return null;
    var winnerSlot = d.winnerSlot;
    return {
      bout: no,
      weight: d.weight,
      round: d.legacy ? d.legacy.round : '',
      bracket: d.legacy ? d.legacy.bracket : '',
      a: fmtWrestler(d.a),
      b: fmtWrestler(d.b),
      status: d.status,
      winner: winnerSlot ? fmtWrestler(d[winnerSlot]) : null,
      winnerSlot: winnerSlot
    };
  }

  /* ------------------------------------------------------------------- rendering */
  var STATUS_TEXT = { waiting: 'Waiting', pending: 'Pending', decided: 'Decided' };
  var STATUS_NOTE = {
    waiting: 'Waiting — one or both wrestlers are not set yet. They come from earlier bouts that have not been decided.',
    pending: 'Both wrestlers are set. No result has been recorded for this bout.',
    decided: ''
  };

  function wrestlerRow(label, w, opts) {
    var row = el('div', 'tc-wr' + (opts.isWinner ? ' is-winner' : '') + (opts.isLoser ? ' is-loser' : '') + (w ? '' : ' is-tbd'));
    row.appendChild(el('div', 'tc-wr-label', label));
    var body = el('div', 'tc-wr-body');
    if (!w) {
      body.appendChild(el('div', 'tc-wr-name', 'TBD'));
      body.appendChild(el('div', 'tc-wr-meta', 'not decided yet'));
    } else {
      var name = el('div', 'tc-wr-name');
      if (w.seed != null && w.seed !== '') name.appendChild(el('span', 'tc-wr-seed', '(' + w.seed + ')'));
      name.appendChild(document.createTextNode(w.name));
      body.appendChild(name);
      var meta = [w.school, w.record].filter(Boolean).join(' · ');
      if (meta) body.appendChild(el('div', 'tc-wr-meta', meta));
    }
    row.appendChild(body);
    if (opts.isWinner) row.appendChild(el('div', 'tc-wr-tag', 'WINNER'));
    return row;
  }

  /* ------------------------------------------------------------ record panel (Phase 3C) */
  var draft = null;       // { boutId, winner, type, score, time, step: 'edit'|'confirm'|'saving'|'failed', note }
  var slowTimer = null;
  function stopSlowTimer() { if (slowTimer) { clearTimeout(slowTimer); slowTimer = null; } }
  function operatorNow() { var e = window.TCEngine; return e && e.operatorState ? e.operatorState().state === 'operator' : false; }
  function typeInfo(code) {
    var ts = window.TCEngine.resultTypes();
    for (var i = 0; i < ts.length; i++) if (ts[i].code === code) return ts[i];
    return null;
  }

  // Built ONCE per bout. Typing/choosing only calls update() (never rebuilds), so focus is never lost.
  function buildRecordPanel(d) {
    var eng = window.TCEngine;
    if (d.status === 'waiting' && operatorNow()) {
      draft = null;
      return el('div', 'tc-rec tc-rec--note', 'Recording opens once both wrestlers are known (an earlier bout is still undecided).');
    }
    if (d.status !== 'pending' || !state.lookupOK || !operatorNow()) { draft = null; return null; }
    if (!draft || draft.boutId !== d.bout) { stopSlowTimer(); draft = { boutId: d.bout, winner: null, type: '', score: '', time: '', step: 'edit', note: '' }; }

    var root = el('div', 'tc-rec');
    root.setAttribute('data-bout', String(d.bout));
    root.appendChild(el('h3', 'tc-rec-h', 'Record official result'));
    if (eng.legacyRecordExists(d.bout)) root.appendChild(el('div', 'tc-rec-warn', 'An older record exists for this bout. Recording will replace it.'));

    // 1. winner
    var g1 = el('div', 'tc-rec-group'); g1.appendChild(el('div', 'tc-fact-k', 'Winner'));
    var wins = el('div', 'tc-rec-wins'), winBtns = {};
    ['a', 'b'].forEach(function (slot) {
      var w = d[slot], b = el('button', 'tc-rec-win'); b.type = 'button'; b.setAttribute('data-slot', slot);
      b.appendChild(el('span', 'tc-rec-win-k', slot === 'a' ? 'Wrestler A' : 'Wrestler B'));
      b.appendChild(el('span', 'tc-rec-win-n', w.name));
      if (w.school) b.appendChild(el('span', 'tc-rec-win-s', w.school));
      b.addEventListener('click', function () { if (draft.step !== 'edit') return; draft.winner = slot; update(); });
      wins.appendChild(b); winBtns[slot] = b;
    });
    g1.appendChild(wins); root.appendChild(g1);

    // 2. result type (required, no default)
    var g2 = el('div', 'tc-rec-group'); var l2 = el('label', 'tc-fact-k', 'Result type'); l2.setAttribute('for', 'tc-rec-type'); g2.appendChild(l2);
    var sel = el('select', 'tc-rec-type'); sel.id = 'tc-rec-type';
    var o0 = el('option', null, 'Choose result type…'); o0.value = ''; sel.appendChild(o0);
    eng.resultTypes().forEach(function (t) { var o = el('option', null, t.label); o.value = t.code; sel.appendChild(o); });
    sel.addEventListener('change', function () {
      if (draft.step !== 'edit') return; draft.type = sel.value;
      var m = typeInfo(draft.type); if (m && m.score === 'none') draft.score = ''; if (m && m.time === 'none') draft.time = '';
      update();
    });
    g2.appendChild(sel); root.appendChild(g2);

    // 3. optional score / time (only where the type uses them)
    var g3 = el('div', 'tc-rec-fields');
    function field(labelText, cls, placeholder, key) {
      var wrap = el('div', 'tc-rec-field'); var lab = el('label', 'tc-fact-k', labelText); var id = 'tc-rec-' + key; lab.setAttribute('for', id);
      var inp = el('input', 'tc-input ' + cls); inp.type = 'text'; inp.id = id; inp.setAttribute('autocomplete', 'off'); inp.setAttribute('maxlength', '40'); inp.setAttribute('placeholder', placeholder);
      inp.addEventListener('input', function () { if (draft.step !== 'edit') return; draft[key] = inp.value; update(); });
      wrap.appendChild(lab); wrap.appendChild(inp); g3.appendChild(wrap); return inp;
    }
    var inScore = field('Score (optional)', 'tc-rec-score', 'e.g. 9-1', 'score');
    var inTime = field('Time (optional)', 'tc-rec-time', 'e.g. 3:31', 'time');
    root.appendChild(g3);

    var msgs = el('div', 'tc-rec-msgs'); msgs.setAttribute('aria-live', 'polite'); root.appendChild(msgs);
    var actions = el('div', 'tc-rec-actions');
    var go = el('button', 'tc-btn tc-btn--go tc-rec-go', 'RECORD RESULT'); go.type = 'button';
    actions.appendChild(go); root.appendChild(actions);
    var conf = el('div', 'tc-rec-confirm'); conf.hidden = true;
    var confText = el('div', 'tc-rec-confirm-text'); conf.appendChild(confText);
    var confRow = el('div', 'tc-rec-actions');
    var yes = el('button', 'tc-btn tc-btn--go tc-rec-yes', 'CONFIRM & SAVE'); yes.type = 'button';
    var back = el('button', 'tc-btn tc-btn--clear tc-rec-back', 'BACK'); back.type = 'button';
    confRow.appendChild(yes); confRow.appendChild(back); conf.appendChild(confRow); root.appendChild(conf);
    var status = el('div', 'tc-rec-status'); status.setAttribute('role', 'status'); status.hidden = true;
    var retry = el('button', 'tc-btn tc-btn--clear tc-rec-retry', 'TRY AGAIN'); retry.type = 'button'; retry.hidden = true;
    root.appendChild(status); root.appendChild(retry);

    function summary() {
      var w = d[draft.winner], l = d[draft.winner === 'a' ? 'b' : 'a'], t = typeInfo(draft.type);
      var bits = [t.label]; if (draft.score) bits.push(draft.score.trim()); if (draft.time) bits.push(draft.time.trim());
      return { w: w, l: l, text: 'Bout ' + d.bout + ' · ' + d.weight + ' lbs — ' + w.name + (w.school ? ' (' + w.school + ')' : '') + ' def. ' + l.name + (l.school ? ' (' + l.school + ')' : '') + ' — ' + bits.join(' · ') };
    }
    function update() {
      var editing = draft.step === 'edit', busy = draft.step === 'saving';
      ['a', 'b'].forEach(function (slot) { var on = draft.winner === slot; winBtns[slot].classList.toggle('on', on); winBtns[slot].setAttribute('aria-pressed', on ? 'true' : 'false'); winBtns[slot].disabled = !editing; });
      sel.value = draft.type; sel.disabled = !editing;
      var m = typeInfo(draft.type);
      inScore.disabled = !editing || !m || m.score === 'none'; inTime.disabled = !editing || !m || m.time === 'none';
      inScore.value = draft.score; inTime.value = draft.time;
      var v = eng.validateResult({ resultType: draft.type, score: draft.score, time: draft.time });
      clear(msgs);
      v.errors.forEach(function (e) { if (e.code !== 'required') msgs.appendChild(el('div', 'tc-rec-err', e.message)); });
      v.warnings.forEach(function (w) { msgs.appendChild(el('div', 'tc-rec-warnmsg', w.message)); });
      var ready = !!draft.winner && !!draft.type && v.ok;
      go.disabled = !(editing && ready); go.hidden = draft.step === 'confirm' || busy;
      conf.hidden = draft.step !== 'confirm' && draft.step !== 'saving';
      if (!conf.hidden && ready) confText.textContent = summary().text;
      yes.disabled = busy; back.disabled = busy; yes.hidden = busy; back.hidden = busy;
      status.hidden = !draft.note; status.textContent = draft.note || '';
      status.className = 'tc-rec-status' + (busy ? ' tc-rec-status--saving' : '') + (draft.step === 'failed' ? ' tc-rec-status--failed' : '');
      retry.hidden = draft.step !== 'failed';
    }
    go.addEventListener('click', function () { if (go.disabled) return; draft.step = 'confirm'; draft.note = ''; update(); });
    back.addEventListener('click', function () { draft.step = 'edit'; draft.note = ''; update(); });
    retry.addEventListener('click', function () { draft.step = 'edit'; draft.note = ''; update(); });
    yes.addEventListener('click', function () {
      if (draft.step !== 'confirm') return;
      var sm = summary(), winnerId = d[draft.winner].id, req = { boutId: draft.boutId, winnerId: winnerId, resultType: draft.type, score: draft.score, time: draft.time };
      var bout = draft.boutId, typeLabel = typeInfo(draft.type).label;
      draft.step = 'saving'; draft.note = 'SAVING…'; update();
      stopSlowTimer();
      slowTimer = setTimeout(function () { if (draft && draft.step === 'saving') { draft.note = 'SAVING… still waiting for the server. Do not enter this result again.'; update(); } }, 12000);
      window.TCEngine.recordOfficial(req).then(function (res) {
        stopSlowTimer();
        if (res && res.ok) {
          draft = null; state.lastId = bout; renderCard(describeBout(bout));
          setMessage('SAVED ✓  ' + sm.text.replace(/^Bout \d+ · \d+ lbs — /, 'Bout ' + bout + ': '), 'info');
          if (state.dom.input) { state.dom.input.value = ''; try { state.dom.input.focus(); } catch (e) { /* ignore */ } }
        } else {
          draft.step = 'failed';
          draft.note = 'NOT SAVED — ' + ((res && res.message) || 'unknown problem') + (res && res.errors && res.errors.length ? ' ' + res.errors.map(function (e) { return e.message; }).join(' ') : '');
          update();
        }
      }, function (err) {
        stopSlowTimer(); draft.step = 'failed'; draft.note = 'NOT SAVED — ' + String((err && err.message) || err); update();
      });
    });
    panelRef = root; update();
    return root;
  }
  var panelRef = null;

  function renderCard(d) {
    var card = state.dom.card;
    clear(card);
    panelRef = null;
    if (!d) { card.hidden = true; draft = null; stopSlowTimer(); return; }
    card.hidden = false;
    card.className = 'tc-card tc-card--' + d.status;

    var top = el('div', 'tc-card-top');
    top.appendChild(el('div', 'tc-card-bout', 'BOUT ' + d.bout));
    top.appendChild(el('div', 'tc-pill tc-pill--' + d.status, STATUS_TEXT[d.status]));
    card.appendChild(top);

    var facts = el('div', 'tc-facts');
    [['Weight', d.weight + ' lbs'], ['Round', d.round]].forEach(function (f) {
      var box = el('div', 'tc-fact');
      box.appendChild(el('div', 'tc-fact-k', f[0]));
      box.appendChild(el('div', 'tc-fact-v', f[1]));
      facts.appendChild(box);
    });
    card.appendChild(facts);

    var wrs = el('div', 'tc-wrs');
    wrs.appendChild(wrestlerRow('Wrestler A', d.a, { isWinner: d.winnerSlot === 'a', isLoser: d.winnerSlot === 'b' }));
    wrs.appendChild(wrestlerRow('Wrestler B', d.b, { isWinner: d.winnerSlot === 'b', isLoser: d.winnerSlot === 'a' }));
    card.appendChild(wrs);

    var res = el('div', 'tc-result');
    res.appendChild(el('div', 'tc-fact-k', 'Winner'));
    if (d.status === 'decided' && d.winner) {
      var wv = el('div', 'tc-fact-v tc-winner-name', d.winner.name);
      if (d.winner.school) wv.appendChild(el('span', 'tc-winner-school', ' (' + d.winner.school + ')'));
      res.appendChild(wv);
    } else {
      res.appendChild(el('div', 'tc-fact-v tc-muted', '—'));
    }
    card.appendChild(res);

    if (STATUS_NOTE[d.status]) card.appendChild(el('div', 'tc-note', STATUS_NOTE[d.status]));
    var rec = buildRecordPanel(d);                  // Phase 3C: only for a signed-in authorized operator
    if (rec) card.appendChild(rec);

    var foot = el('div', 'tc-card-foot');
    var open = el('button', 'tc-link', 'Open ' + d.weight + ' bracket →');
    open.type = 'button';
    open.addEventListener('click', function () { openWeight(d.weight); });
    foot.appendChild(open);
    card.appendChild(foot);
  }

  function setMessage(text, kind) {
    var m = state.dom.msg;
    m.textContent = text || '';
    m.className = 'tc-msg' + (text ? ' tc-msg--' + (kind || 'info') : '');
    m.hidden = !text;
  }

  /* --------------------------------------------------------------------- actions */
  function openWeight(weight) {
    if (window.TCEngine && window.TCEngine.openWeight) window.TCEngine.openWeight(weight);   // OFFICIAL bracket, via the existing switchW()
  }

  // LOOK UP. Never throws; never changes bracket state.
  function lookup(raw) {
    try {
      if (!state.lookupOK) {
        setMessage('Bout lookup is switched off (official results are unavailable or failed their self-check). The weight tiles still work.', 'error');
        renderCard(null);
        return { ok: false, code: 'disabled' };
      }
      var p = parseBoutId(raw);
      if (!p.ok) {
        state.lastId = null;
        renderCard(null);
        setMessage(p.message, 'warn');
        return p;
      }
      var d = describeBout(p.id);
      if (!d) {
        state.lastId = null;
        renderCard(null);
        setMessage('Bout ' + p.id + ' could not be read. Nothing was changed.', 'warn');
        return { ok: false, code: 'unreadable' };
      }
      state.lastId = p.id;
      setMessage('', 'info');
      renderCard(d);
      return { ok: true, id: p.id, descriptor: d };
    } catch (err) {
      if (window.console) console.error('Tournament Central lookup failed:', err);
      state.lastId = null;
      try { renderCard(null); setMessage('Something went wrong looking that up. Nothing was changed.', 'error'); } catch (e2) { /* ignore */ }
      return { ok: false, code: 'error' };
    }
  }

  // CLEAR / new lookup. UI ONLY: resets this view's own controls and nothing else.
  function clearForm() {
    state.lastId = null;
    state.dom.input.value = '';
    setMessage('', 'info');
    renderCard(null);
    state.dom.input.focus();
  }

  // The one-line source note under the lookup form (OFFICIAL, how many results, how fresh).
  function renderOfficialStatus() {
    var node = state.dom && state.dom.stat; if (!node) return;
    var info = window.TCEngine && window.TCEngine.officialAvailable() ? window.TCEngine.officialInfo() : null;
    var text = '';
    if (!info) text = 'Official results are not available in this session.';
    else if (info.state === 'loading' && !info.loadedAt) text = 'Loading official results…';
    else if (info.state === 'error') text = info.loadedAt ? 'Could not refresh — showing official results from ' + info.loadedAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) + '.' : 'Official results are unavailable right now.';
    else if (info.loadedAt) text = 'Source: OFFICIAL results — ' + info.applied + ' recorded · updated ' + info.loadedAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) + '.';
    else text = 'Source: OFFICIAL results.';
    node.textContent = text;
  }

  // Called by index.html each time the view is shown: refresh the card from the OFFICIAL store.
  function onShow() {
    renderOfficialStatus();
    if (state.lookupOK && state.lastId != null) {
      var d = describeBout(state.lastId);
      if (d) renderCard(d);
    }
    if (state.dom.input && window.matchMedia && window.matchMedia('(pointer: fine)').matches) state.dom.input.focus();
  }

  // Called by index.html when a (re)load of the official results finishes.
  function onOfficialChanged() {
    renderOfficialStatus();
    if (state.lookupOK && state.lastId != null) {
      var d = describeBout(state.lastId);
      // a live update elsewhere must not rebuild the panel under someone who is typing: keep it while the bout is still Pending
      if (d && d.status === 'pending' && panelRef && panelRef.isConnected && draft && draft.boutId === d.bout) return;
      if (d) renderCard(d);
    }
  }
  // Called when sign-in state changes (operator appears / disappears).
  function onOperatorChanged() {
    if (!operatorNow()) { draft = null; stopSlowTimer(); }
    if (state.lookupOK && state.lastId != null) { var d = describeBout(state.lastId); if (d) renderCard(d); }
  }

  /* ------------------------------------------------------------------------ build */
  function build() {
    clear(root);
    var wrap = el('div', 'tc-wrap');

    // --- title block (mirrors the OG Excel Tournament Central header)
    var head = el('div', 'tc-head');
    head.appendChild(el('h1', 'tc-title', 'TOURNAMENT CENTRAL'));
    var sub = el('div', 'tc-sub', 'Operator console — look up any bout and open any weight class.');
    head.appendChild(sub);
    head.appendChild(el('span', 'tc-badge', 'Read-only'));
    wrap.appendChild(head);

    // --- weight tiles
    var sec1 = el('section', 'tc-section');
    sec1.appendChild(el('h2', 'tc-h', 'Weight Classes'));
    var tiles = el('div', 'tc-tiles');
    tiles.setAttribute('role', 'group');
    tiles.setAttribute('aria-label', 'Weight classes');
    window.TCEngine.weights.forEach(function (w) {
      var b = el('button', 'tc-tile');
      b.type = 'button';
      b.setAttribute('data-weight', String(w));
      b.setAttribute('aria-label', 'Open the ' + w + ' lb bracket');
      b.appendChild(el('span', 'tc-tile-num', String(w)));
      b.appendChild(el('span', 'tc-tile-lbs', 'lbs'));
      b.addEventListener('click', function () { openWeight(w); });
      tiles.appendChild(b);
    });
    sec1.appendChild(tiles);
    wrap.appendChild(sec1);

    // --- quick bout lookup
    var sec2 = el('section', 'tc-section');
    var h2 = el('h2', 'tc-h', 'Quick Bout Lookup');
    h2.appendChild(el('span', 'tc-src', 'OFFICIAL'));
    sec2.appendChild(h2);

    var form = el('form', 'tc-form');
    form.setAttribute('novalidate', 'novalidate');
    form.setAttribute('autocomplete', 'off');
    var lab = el('label', 'tc-label', 'Bout ID');
    lab.setAttribute('for', 'tc-bout-id');
    var input = el('input', 'tc-input');
    input.type = 'text';
    input.id = 'tc-bout-id';
    input.setAttribute('inputmode', 'numeric');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('placeholder', state.min + ' – ' + state.max);
    input.setAttribute('maxlength', '12');
    var btnGo = el('button', 'tc-btn tc-btn--go', 'LOOK UP');
    btnGo.type = 'submit';
    var btnClear = el('button', 'tc-btn tc-btn--clear', 'CLEAR');
    btnClear.type = 'button';
    btnClear.id = 'tc-clear';
    form.appendChild(lab); form.appendChild(input); form.appendChild(btnGo); form.appendChild(btnClear);
    sec2.appendChild(form);

    var stat = el('div', 'tc-official-status');
    sec2.appendChild(stat);

    var msg = el('div', 'tc-msg');
    msg.setAttribute('role', 'alert');
    msg.setAttribute('aria-live', 'polite');
    msg.hidden = true;
    sec2.appendChild(msg);

    var card = el('div', 'tc-card');
    card.hidden = true;
    card.setAttribute('aria-live', 'polite');
    sec2.appendChild(card);
    wrap.appendChild(sec2);

    root.appendChild(wrap);

    state.dom = { input: input, msg: msg, card: card, form: form, go: btnGo, clear: btnClear, stat: stat };
    renderOfficialStatus();

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      lookup(input.value);
      try { input.select(); } catch (e) { /* ignore */ }     // next lookup: just type over it
    });
    btnClear.addEventListener('click', clearForm);

    if (!state.lookupOK) {
      input.disabled = true; btnGo.disabled = true; btnClear.disabled = true;
      var why = window.TCEngine.officialAvailable() ? 'the bout-number self-check failed (' + state.problems.slice(0, 3).join('; ') + ')' : 'official results are unavailable in this session';
      var bad = el('div', 'tc-msg tc-msg--error', 'Bout lookup is switched off: ' + why + '. The weight tiles still work.');
      sec2.insertBefore(bad, msg);
    }
  }

  /* ------------------------------------------------------------------------- init */
  function init() {
    if (window.TournamentCentral && window.TournamentCentral.ready) return;
    try {
      var eng = window.TCEngine;
      var sc = eng.officialAvailable() ? eng.selfCheck() : { ok: false, problems: ['official results unavailable'], stats: null };
      state.problems = sc.problems.slice();
      state.lookupOK = sc.ok;
      if (sc.ok && sc.stats) { state.min = 1; state.max = sc.stats.bouts; }
      if (!state.lookupOK && window.console) console.warn('Tournament Central lookups disabled:', state.problems);
      build();
      window.TournamentCentral = {
        ready: true,
        version: '3c-operator-recording',
        lookupEnabled: state.lookupOK,
        problems: state.problems.slice(),
        parseBoutId: parseBoutId,
        describeBout: describeBout,
        lookup: lookup,
        clear: clearForm,
        onShow: onShow,
        onOfficialChanged: onOfficialChanged,
        onOperatorChanged: onOperatorChanged
      };
      document.dispatchEvent(new CustomEvent('tc-ready'));
    } catch (err) {
      if (window.console) console.error('Tournament Central failed to start:', err);
      clear(root);
      root.appendChild(el('div', 'tc-loading', 'Tournament Central could not start. The weight brackets still work — use the tabs above.'));
    }
  }

  if (window.TCEngine) init();
  else document.addEventListener('tc-engine-ready', init, { once: true });
})();
