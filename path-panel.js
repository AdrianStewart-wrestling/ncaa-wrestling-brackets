/* ============================================================================
   PATH TO THE FINALS — the panel (OFFICIAL brackets only). Click a wrestler's name on an OFFICIAL bracket: his whole tournament, how he got there
   and what is next. Read-only: it only calls TCEngine.pathFor() and TCEngine.openWeight(); it writes nothing and builds its screen with textContent
   only. In MY PICKS the bracket names carry no data-wid, so this never opens there (a click there still makes a pick).
   ============================================================================ */
(function () {
  'use strict';
  var st = { open: false, stack: [], root: null, body: null, back: null, close: null, lastFocus: null };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function fmtN(n) { return n % 1 === 0 ? String(n) : n.toFixed(1); }
  function who(p) { return p.name + ', ' + p.school + ' (#' + p.seed + ')'; }
  // Live record: the roster carries only the wrestler's SEASON record at seeding time (e.g. "21-0"), never updated.
  // This adds his DECIDED tournament bouts on top of it, purely for display -- it reads only m.wrestler.record and
  // m.journey (already computed by official-path.js for every row in the panel). No data is written; no other feature
  // is touched. If the season record is not in the expected W-L shape, the original text is shown unchanged.
  function liveRecord(w, journey) {
    var m = /^\s*(\d+)\s*-\s*(\d+)\s*$/.exec(w.record || '');
    if (!m) return w.record || '';
    var wins = parseInt(m[1], 10), losses = parseInt(m[2], 10);
    (journey || []).forEach(function (row) { if (row.result === 'W') wins++; else if (row.result === 'L') losses++; });
    return wins + '-' + losses;
  }

  function res(r) { return (r.method || '') + (r.score ? ' ' + r.score : '') + (r.time ? ' ' + r.time : ''); }

  function ensure() {
    if (st.root) return;
    var root = el('div', 'pp-overlay'); root.id = 'path-panel'; root.hidden = true;
    var sheet = el('div', 'pp-sheet'); sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-modal', 'true'); sheet.setAttribute('aria-labelledby', 'pp-title');
    var bar = el('div', 'pp-bar');
    var back = el('button', 'pp-btn', '‹ Back'); back.type = 'button'; back.addEventListener('click', goBack);
    var close = el('button', 'pp-btn pp-x', '×'); close.type = 'button'; close.setAttribute('aria-label', 'Close'); close.addEventListener('click', closePanel);
    bar.appendChild(back); bar.appendChild(el('span', 'pp-bar-t', 'PATH TO THE FINALS')); bar.appendChild(close);
    var body = el('div', 'pp-body'); sheet.appendChild(bar); sheet.appendChild(body); root.appendChild(sheet); document.body.appendChild(root);
    root.addEventListener('click', function (ev) { if (ev.target === root) closePanel(); });
    st.root = root; st.body = body; st.back = back; st.close = close;
  }

  function render() {
    var id = st.stack[st.stack.length - 1], eng = window.TCEngine; clear(st.body); st.back.hidden = st.stack.length < 2;
    var m = eng && eng.pathFor ? eng.pathFor(id) : { ok: false, message: 'unavailable' };
    if (!m.ok) { st.body.appendChild(el('div', 'pp-empty', 'This path is not available' + (m.message ? ': ' + m.message : '.'))); return; }
    var w = m.wrestler, o = m.outcome, b = st.body;
    var h = el('h2', 'pp-name', w.name); h.id = 'pp-title'; b.appendChild(h);
    var lr = liveRecord(w, m.journey);
    b.appendChild(el('div', 'pp-sub', w.weight + ' lbs · #' + w.seed + ' seed · ' + w.school + (lr ? ' · ' + lr : '')));
    var chips = el('div', 'pp-chips'); chips.appendChild(el('span', 'pp-chip pp-chip--' + o.code, o.code === 'champion' ? '🏆 ' + o.label : o.label));
    if (m.aa === true) chips.appendChild(el('span', 'pp-chip pp-chip--aa', '★ All-American')); b.appendChild(chips);

    var ol = el('ol', 'pp-list');
    m.journey.forEach(function (r) {
      var cls = r.status === 'decided' ? (r.result === 'W' ? 'pp-row pp-w' : 'pp-row pp-l') : (r.status === 'pending' ? 'pp-row pp-now' : 'pp-row pp-wait');
      var li = el('li', cls); li.appendChild(el('span', 'pp-rd', r.round));
      li.appendChild(el('span', 'pp-mk', r.status === 'decided' ? (r.result === 'W' ? '✓' : '✗') : '→'));
      var main = el('span', 'pp-main');
      if (r.opponent) { var ob = el('button', 'pp-opp', r.opponent.name); ob.type = 'button'; ob.addEventListener('click', function () { openPanel(r.opponent.id); }); main.appendChild(ob); main.appendChild(el('span', 'pp-osc', r.opponent.school + ' · #' + r.opponent.seed)); }
      else main.appendChild(el('span', 'pp-tbd', 'Opponent not decided yet'));
      li.appendChild(main);
      li.appendChild(el('span', 'pp-res', r.status === 'decided' ? res(r) : 'Bout ' + r.boutId));
      if (r.points) li.appendChild(el('span', 'pp-pt', '+' + fmtN(r.points)));
      ol.appendChild(li);
    });
    b.appendChild(ol);

    var last = m.journey[m.journey.length - 1];
    if (m.next) {
      var nx = el('div', 'pp-next'); nx.appendChild(el('div', 'pp-next-h', 'WHAT\'S NEXT'));
      if (m.next.status === 'pending') nx.appendChild(el('div', 'pp-next-l', 'Bout ' + m.next.boutId + ' · ' + m.next.round + ' vs ' + who(m.next.opponent)));
      else {
        nx.appendChild(el('div', 'pp-next-l', 'Bout ' + m.next.boutId + ' · ' + m.next.round + ' — waiting for his opponent'));
        (m.next.waitingOn || []).forEach(function (f) { nx.appendChild(el('div', 'pp-next-s', 'The ' + f.via + ' of Bout ' + f.boutId + ' (' + f.round + '): ' + (f.a ? who(f.a) : 'TBD') + ' vs ' + (f.b ? who(f.b) : 'TBD'))); });
      }
      nx.appendChild(el('div', 'pp-next-s', 'If he wins: ' + m.next.ifWin.label + '  ·  If he loses: ' + m.next.ifLose.label)); b.appendChild(nx);
    } else {
      var t = el('div', 'pp-out pp-out--' + o.code);
      if (o.code === 'champion') t.textContent = '🏆 NCAA Champion — beat ' + who(last.opponent) + ' in the final (' + res(last) + ')';
      else if (o.code === 'placed') t.textContent = o.label + (last.result === 'W' ? ' — beat ' : ' — lost to ') + who(last.opponent) + ' in the ' + last.round + ' (' + res(last) + ')';
      else t.textContent = o.label + ' — lost to ' + who(last.opponent) + ' (' + res(last) + ')';
      b.appendChild(t);
    }
    if (m.points) {
      var pt = el('div', 'pp-pts'); pt.appendChild(el('div', 'pp-pts-h', 'TEAM POINTS EARNED'));
      pt.appendChild(el('div', 'pp-pts-v', fmtN(m.points.total) + ' for ' + w.school)); pt.appendChild(el('div', 'pp-pts-s', 'Advancement ' + fmtN(m.points.adv) + ' · Bonus ' + fmtN(m.points.bonus) + ' · Placement ' + fmtN(m.points.place))); b.appendChild(pt);
    }
    var vb = el('button', 'pp-btn pp-view', 'View the ' + w.weight + ' lb bracket'); vb.type = 'button';
    vb.addEventListener('click', function () { closePanel(); if (eng.openWeight) eng.openWeight(w.weight); }); b.appendChild(vb);
  }

  function openPanel(id) {
    ensure(); if (window.TeamPanel && window.TeamPanel.isOpen()) window.TeamPanel.close();
    if (!st.open) { st.lastFocus = document.activeElement; st.stack = []; }
    st.stack.push(String(id)); st.open = true; st.root.hidden = false; document.body.classList.add('pp-open'); render();
    try { st.close.focus(); } catch (e) { /* ignore */ }
  }
  function goBack() { if (st.stack.length > 1) { st.stack.pop(); render(); } }
  function closePanel() {
    if (!st.root || !st.open) return; st.open = false; st.stack = []; st.root.hidden = true; document.body.classList.remove('pp-open');
    try { if (st.lastFocus && st.lastFocus.focus) st.lastFocus.focus(); } catch (e) { /* ignore */ }
  }
  function refresh() { if (st.open) render(); }

  // names on an OFFICIAL bracket or in the OFFICIAL All-Americans view are clickable (MY PICKS elements never carry data-wid)
  function inScope(t) { var a = document.getElementById('area'), b = document.getElementById('off-aa-view'); return !!((a && a.contains(t)) || (b && b.contains(t))); }
  document.addEventListener('click', function (ev) {
    var t = ev.target && ev.target.closest ? ev.target.closest('[data-wid]') : null;
    if (!t || !inScope(t)) return; ev.preventDefault(); openPanel(t.getAttribute('data-wid'));
  });
  document.addEventListener('keydown', function (ev) {
    if (st.open && ev.key === 'Escape') { ev.preventDefault(); closePanel(); return; }
    if (ev.key !== 'Enter' && ev.key !== ' ') return;
    var t = ev.target && ev.target.getAttribute && ev.target.getAttribute('data-wid') ? ev.target : null;
    if (t && inScope(t)) { ev.preventDefault(); openPanel(t.getAttribute('data-wid')); }
  });
  window.PathPanel = { open: openPanel, close: closePanel, back: goBack, refresh: refresh, isOpen: function () { return st.open; } };
})();
