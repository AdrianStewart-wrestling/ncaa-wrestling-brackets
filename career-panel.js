/* ============================================================================
   NCAA CAREER — HISTORY ONLY. Opened from the History Path to the Finals panel ("NCAA Career"). One wrestler's NCAA
   Championships appearances WITHIN TOURNAMENT CENTRAL'S HISTORICAL DATA (1981–2026, no 2020 Championships; 1999–2009 and 2012 results from a fallback source), identified by
   the Career Registry (historical-careers.js) — never by name. Read-only: only calls TCEngine.careerLoad() and
   PathPanel.open(); writes nothing; builds its screen with textContent only. OFFICIAL / MY PICKS never reach this panel.
   ============================================================================ */
(function () {
  'use strict';
  var st = { open: false, id: null, root: null, body: null, lastFocus: null, seq: 0 };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function pending(y) { return !!(window.HistoryMode && window.HistoryMode.scoringPending && window.HistoryMode.scoringPending(y)); }
  function fmtN(n) { return n % 1 === 0 ? String(n) : String(Math.round(n * 100) / 100); }   // halves unchanged; quarter points exact (1988-1994)
  var POINTS_TIP = 'Tournament Points are calculated by Tournament Central from the historical bout results (advancement, bonus and placement points). Team-level deductions are not attributable to individual wrestlers, so these can differ from official team totals.';
  var COVERAGE = 'Covers the 1981–2026 NCAA Championships in Tournament Central (there were no 2020 Championships; 2012 completed results come from the WrestlingStats fallback, structure from the official NCAA draw; 1981–2009 bracket and results come from the WrestlingStats fallback, checked against the NCAA Records Book; 2009 bracket and results come from the WrestlingStats fallback). Appearances before 1981 are not included, so this may not be his complete NCAA career.';

  function ensureStyle() {
    if (document.getElementById('cp-style')) return;
    var s = el('style'); s.id = 'cp-style';
    s.textContent = '.cp-cov{font-size:12px;opacity:.75;margin:6px 0 12px;line-height:1.4}' +
      '.cp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(96px,1fr));gap:8px;margin:0 0 14px}' +
      '.cp-stat{border:1px solid rgba(127,127,127,.35);border-radius:8px;padding:8px;text-align:center}' +
      '.cp-stat-v{font-size:20px;font-weight:700}.cp-stat-l{font-size:11px;opacity:.75;letter-spacing:.04em}' +
      '.cp-tip{cursor:help;border-bottom:1px dotted currentColor}' +
      '.cp-list{list-style:none;margin:0;padding:0}.cp-row{margin:0 0 6px}' +
      '.cp-app{display:block;width:100%;text-align:left;border:1px solid rgba(127,127,127,.35);border-radius:8px;padding:8px 10px;background:transparent;color:inherit;cursor:pointer;font:inherit}' +
      '.cp-app:hover,.cp-app:focus{border-color:currentColor}' +
      '.pp-career{width:100%;margin-top:6px;padding:10px;background:var(--tc-navy);color:#f0c15a;border-color:var(--tc-gold)}' +
      '.cp-l1{font-weight:700}.cp-l2{font-size:12px;opacity:.85;margin-top:2px}.cp-aa{margin-left:6px}';
    document.head.appendChild(s);
  }
  function ensure() {
    if (st.root) return;
    ensureStyle();
    var root = el('div', 'pp-overlay cp-overlay'); root.id = 'career-panel'; root.hidden = true;
    var sheet = el('div', 'pp-sheet'); sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-modal', 'true'); sheet.setAttribute('aria-labelledby', 'cp-title');
    var bar = el('div', 'pp-bar'); bar.appendChild(el('span', 'pp-bar-t', 'NCAA CAREER'));
    var close = el('button', 'pp-btn pp-x', '×'); close.type = 'button'; close.setAttribute('aria-label', 'Close'); close.addEventListener('click', closePanel); bar.appendChild(close);
    var body = el('div', 'pp-body'); sheet.appendChild(bar); sheet.appendChild(body); root.appendChild(sheet); document.body.appendChild(root);
    root.addEventListener('click', function (ev) { if (ev.target === root) closePanel(); });
    st.root = root; st.body = body; st.close = close;
  }
  function stat(grid, value, label, tip) {
    var s = el('div', 'cp-stat'); s.appendChild(el('div', 'cp-stat-v', value));
    var l = el('div', 'cp-stat-l' + (tip ? ' cp-tip' : ''), label); if (tip) { l.title = tip; s.title = tip; } s.appendChild(l); grid.appendChild(s);
  }
  function render(c) {
    var b = st.body; clear(b);
    if (!c || !c.ok && !(c && c.rows)) { b.appendChild(el('div', 'pp-empty', 'The NCAA career is not available' + (c && c.message ? ': ' + c.message : '.'))); return; }
    var h = el('h2', 'pp-name', c.name); h.id = 'cp-title'; b.appendChild(h);
    b.appendChild(el('div', 'pp-sub', c.schools.join(' → ')));
    b.appendChild(el('div', 'cp-cov', COVERAGE));
    var s = c.summary, g = el('div', 'cp-grid');
    // All-American = placed 1st-8th. Scored years carry it from the scoring model; scoring-pending years (1990-1995) take it from the finish.
    (c.rows || []).forEach(function (r) { if (r.ok && !r.aa && pending(r.year) && (r.finishCode === 'champion' || r.finishCode === 'placed')) r.aa = true; });
    var aaCount = (c.rows || []).filter(function (r) { return r.ok && r.aa; }).length;
    stat(g, String(s.appearances), 'NCAA APPEARANCES'); stat(g, String(s.titles), 'NCAA TITLES'); stat(g, String(aaCount), 'ALL-AMERICAN');
    var pend = (c.rows || []).some(function (r) { return pending(r.year); });   // 1990-1995 points are not computed yet: the total would be incomplete
    stat(g, s.w + '-' + s.l, 'NCAA W-L'); stat(g, pend ? '—' : fmtN(s.points), pend ? 'TOURNAMENT POINTS (pending)' : 'TOURNAMENT POINTS ⓘ', pend ? 'Team points for 1986–1987 appearances are not computed yet: the 1985–1987 scoring rules are under review.' : POINTS_TIP); b.appendChild(g);
    var ol = el('ol', 'cp-list');
    c.rows.forEach(function (r) {
      var li = el('li', 'cp-row');
      if (!r.ok) { li.appendChild(el('div', 'pp-empty', r.year + ': this appearance could not be loaded.')); ol.appendChild(li); return; }
      var btn = el('button', 'cp-app'); btn.type = 'button';
      btn.setAttribute('aria-label', r.year + ' Path to the Finals: ' + c.name);
      var l1 = el('div', 'cp-l1', r.year + ' · ' + (window.HistoricalWeights ? window.HistoricalWeights.unit(window.HistoricalWeights.labelOf(r.year, r.weight)) : r.weight + ' lbs') + ' · ' + r.school);   // the year's real weight class (1996-1998: 118-275)
      if (r.aa) l1.appendChild(el('span', 'cp-aa', '★ All-American'));
      btn.appendChild(l1);
      btn.appendChild(el('div', 'cp-l2', (r.seed == null ? 'Unseeded' : '#' + r.seed + ' seed') + ' · ' + (r.finishCode === 'champion' ? '🏆 ' : '') + r.finish +
        ' · ' + r.w + '-' + r.l + (pending(r.year) ? ' · team points pending (scoring rules under review)' : ' · ' + fmtN(r.points) + ' pts' + (r.bonus ? ' (bonus ' + fmtN(r.bonus) + ')' : ''))));
      btn.addEventListener('click', function () { closePanel(); if (window.PathPanel) window.PathPanel.open(r.pathId); });
      li.appendChild(btn); ol.appendChild(li);
    });
    b.appendChild(ol);
  }
  function openPanel(id) {
    ensure(); var eng = window.TCEngine;
    if (window.PathPanel && window.PathPanel.isOpen()) window.PathPanel.close();
    if (window.TeamPanel && window.TeamPanel.isOpen()) window.TeamPanel.close();
    if (!st.open) st.lastFocus = document.activeElement;
    st.open = true; st.id = String(id); st.root.hidden = false; document.body.classList.add('pp-open');
    clear(st.body); st.body.appendChild(el('div', 'pp-empty', 'Loading NCAA career…'));
    var mySeq = ++st.seq;
    var p = eng && eng.careerLoad ? eng.careerLoad(id) : Promise.resolve({ ok: false, message: 'unavailable' });
    Promise.resolve(p).then(function (c) { if (mySeq === st.seq && st.open) render(c); },
      function (e) { if (mySeq === st.seq && st.open) render({ ok: false, message: e && e.message }); });
    try { st.close.focus(); } catch (e) { /* ignore */ }
  }
  function closePanel() {
    if (!st.root || !st.open) return; st.open = false; st.root.hidden = true; document.body.classList.remove('pp-open');
    try { if (st.lastFocus && st.lastFocus.focus) st.lastFocus.focus(); } catch (e) { /* ignore */ }
  }
  document.addEventListener('keydown', function (ev) { if (st.open && ev.key === 'Escape') { ev.preventDefault(); closePanel(); } });
  if (document.head) ensureStyle(); else document.addEventListener('DOMContentLoaded', ensureStyle);
  window.CareerPanel = { open: openPanel, close: closePanel, isOpen: function () { return st.open; } };
})();
