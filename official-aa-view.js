/* ============================================================================
   OFFICIAL ALL-AMERICANS — the screen. Read-only: it only calls TCEngine.aaFor() and builds everything with textContent.
   Rows are clickable (Path to the Finals opens). MY PICKS' own All-Americans view is a different element and is not touched.
   ============================================================================ */
(function () {
  'use strict';
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  var MEDAL = { 1: '🥇', 2: '🥈', 3: '🥉' };

  function card(w) {
    var c = el('div', 'aa-wcard'); c.setAttribute('data-weight', String(w.weight));
    var h = el('div', 'aa-wcard-hdr'); h.appendChild(el('span', 'aa-wcard-wt', String(w.weight))); h.appendChild(el('span', 'aa-wcard-lbs', 'lbs'));
    h.appendChild(el('span', 'oaa-count', 'AA ' + (w.final + w.clinched) + ' of 8')); c.appendChild(h);
    w.wrestlers.forEach(function (r) {
      var row = el('div', 'aa-wcard-row' + (r.state === 'final' ? ' place-' + r.place : '') + (r.state === 'clinched' ? ' oaa-clinched' : '') + (r.state === 'open' ? ' oaa-open' : ''));
      row.setAttribute('data-state', r.state);
      row.appendChild(el('div', 'aa-wcard-place' + (r.state === 'clinched' ? ' oaa-aa' : ''), r.state === 'final' ? String(r.place) : r.state === 'clinched' ? 'AA' : '·'));
      row.appendChild(el('div', 'aa-wcard-medal', r.state === 'final' ? (MEDAL[r.place] || '') : ''));
      var info = el('div', 'aa-wcard-info');
      if (r.state === 'open') info.appendChild(el('div', 'aa-wcard-tbd', 'TBD'));
      else {
        info.appendChild(el('div', 'aa-wcard-name', r.name)); info.appendChild(el('div', 'aa-wcard-school', r.school));
        if (r.state === 'clinched') info.appendChild(el('div', 'oaa-hint', r.hint));
        row.setAttribute('data-wid', r.id); row.setAttribute('role', 'button'); row.setAttribute('tabindex', '0'); row.setAttribute('aria-label', 'Path to the Finals: ' + r.name);
      }
      row.appendChild(info); c.appendChild(row);
    });
    return c;
  }

  function render() {
    var root = document.getElementById('oaa-root'), view = document.getElementById('off-aa-view'); if (!root || !view) return;
    clear(root);
    var A = window.TCEngine && window.TCEngine.aaFor ? window.TCEngine.aaFor() : { mode: 'unavailable', text: 'OFFICIAL All-Americans are not available in this session.', model: null };
    var head = el('div', 'os-head'); head.appendChild(el('span', 'os-badge', '🔒 OFFICIAL')); head.appendChild(el('div', 'os-title', 'OFFICIAL ALL-AMERICANS'));
    head.appendChild(el('div', 'os-sub', 'Actual NCAA tournament — top-8 finishers, shown the moment each is clinched · not picks')); root.appendChild(head);
    var st = el('div', 'os-status os-status--' + A.mode, A.text); st.id = 'oaa-status'; st.setAttribute('role', 'status'); st.setAttribute('aria-live', 'polite'); root.appendChild(st);
    view.setAttribute('data-oaa-state', A.mode);
    var m = A.model; if (!m) return;
    root.appendChild(el('div', 'oaa-sum', 'All-Americans clinched: ' + m.totals.clinched + ' of ' + m.totals.of + ' · places final: ' + m.totals.final + ' of ' + m.totals.of));
    root.appendChild(el('div', 'oaa-legend', 'AA = has clinched a top-8 finish. A place appears once the wrestler\'s tournament is over; until then his best guaranteed finish is shown. Click a name for his Path to the Finals.'));
    if (m.problems && m.problems.length) root.appendChild(el('div', 'os-note os-note--warn', m.problems.length + ' problem' + (m.problems.length === 1 ? '' : 's') + ' found while working out the All-Americans.'));
    var grid = el('div', 'oaa-grid'); m.weights.forEach(function (w) { grid.appendChild(card(w)); }); root.appendChild(grid);
    if (m.teams.length) {
      var wrap = el('div', 'os-table-wrap oaa-teams'), tb = el('table', 'os-table'); tb.appendChild(el('caption', '', 'ALL-AMERICANS BY TEAM'));
      var hr = el('tr'); ['Rank', 'Team', 'AA'].forEach(function (h) { hr.appendChild(el('th', '', h)); }); var th = el('thead'); th.appendChild(hr); tb.appendChild(th);
      var body = el('tbody'); m.teams.forEach(function (t) { var tr = el('tr', 'os-row' + (t.rank === 1 ? ' os-rank-1' : ''));
        tr.appendChild(el('td', 'os-rank', t.rankLabel));
        var td = el('td', 'os-team'), b = el('button', 'os-team-btn', t.school); b.type = 'button'; b.setAttribute('data-team', t.school); td.appendChild(b); tr.appendChild(td);
        tr.appendChild(el('td', 'os-total', String(t.aa))); body.appendChild(tr); });
      tb.appendChild(body); wrap.appendChild(tb); root.appendChild(wrap);
    }
  }
  window.OfficialAAView = { render: render };
})();
