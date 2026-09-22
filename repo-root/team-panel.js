/* ============================================================================
   TEAM DETAIL — click a team name (OFFICIAL Scores or All-Americans by team) for its roster: every wrestler in the field for
   that school, his current status and team points earned. Read-only: only calls TCEngine.teamRoster() / PathPanel.open().
   Writes nothing; builds its screen with textContent only. Listens globally for [data-team] buttons (os-team-btn class).
   ============================================================================ */
(function () {
  'use strict';
  var st = { open: false, school: null, root: null, body: null, lastFocus: null };
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function fmtN(n) { return n % 1 === 0 ? String(n) : n.toFixed(1); }

  function ensure() {
    if (st.root) return;
    var root = el('div', 'pp-overlay tp-overlay'); root.id = 'team-panel'; root.hidden = true;
    var sheet = el('div', 'pp-sheet'); sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-modal', 'true'); sheet.setAttribute('aria-labelledby', 'tp-title');
    var bar = el('div', 'pp-bar'); bar.appendChild(el('span', 'pp-bar-t', 'TEAM DETAIL'));
    var close = el('button', 'pp-btn pp-x', '×'); close.type = 'button'; close.setAttribute('aria-label', 'Close'); close.addEventListener('click', closePanel); bar.appendChild(close);
    var body = el('div', 'pp-body'); sheet.appendChild(bar); sheet.appendChild(body); root.appendChild(sheet); document.body.appendChild(root);
    root.addEventListener('click', function (ev) { if (ev.target === root) closePanel(); });
    st.root = root; st.body = body;
  }

  function render() {
    var eng = window.TCEngine; clear(st.body);
    var r = eng && eng.teamRoster ? eng.teamRoster(st.school) : { ok: false, message: 'unavailable' };
    if (!r.ok) { st.body.appendChild(el('div', 'pp-empty', 'Team detail is not available' + (r.message ? ': ' + r.message : '.'))); return; }
    var b = st.body, h = el('h2', 'pp-name', r.school); h.id = 'tp-title'; b.appendChild(h);
    var t = r.team;
    if (t) {
      var chips = el('div', 'pp-chips');
      chips.appendChild(el('span', 'pp-chip', t.rankLabel + ' place · ' + fmtN(t.total) + ' pts'));
      if ('adj' in t && t.adj) chips.appendChild(el('span', 'pp-chip pp-chip--aa', (t.adj > 0 ? '+' : '') + fmtN(t.adj) + ' adjustment'));
      if (t.aa) chips.appendChild(el('span', 'pp-chip pp-chip--aa', t.aa + ' All-American' + (t.aa === 1 ? '' : 's')));
      b.appendChild(chips);
      var brk = el('div', 'tp-breakdown', 'Adv ' + fmtN(t.adv) + ' · Bonus ' + fmtN(t.bonus) + ' · Place ' + fmtN(t.place) + ('adj' in t ? ' · Adj ' + (t.adj >= 0 ? '+' : '') + fmtN(t.adj) : '')); b.appendChild(brk);
      if (t.adjReason) b.appendChild(el('div', 'tp-reason', 'Adjustment: ' + t.adjReason));
    } else b.appendChild(el('div', 'pp-empty', 'No official results yet for this team.'));
    if (!r.wrestlers.length) { b.appendChild(el('div', 'pp-empty', 'No wrestlers found for this school.')); return; }
    var ol = el('ol', 'pp-list tp-list');
    r.wrestlers.forEach(function (p) {
      var li = el('li', 'pp-row tp-row');
      li.appendChild(el('span', 'pp-rd', p.wrestler.weight + ' lbs'));
      var main = el('span', 'pp-main'); var nb = el('button', 'pp-opp', p.wrestler.name); nb.type = 'button';
      nb.addEventListener('click', function () { closePanel(); if (window.PathPanel) window.PathPanel.open(p.wrestler.id); });
      main.appendChild(nb); main.appendChild(el('span', 'pp-osc', '#' + p.wrestler.seed + (p.aa ? ' · ★ AA' : '')));
      li.appendChild(main);
      li.appendChild(el('span', 'pp-res', p.outcome.label));
      if (p.points) li.appendChild(el('span', 'pp-pt', fmtN(p.points.total) + ' pts'));
      ol.appendChild(li);
    });
    b.appendChild(ol);
  }

  function openPanel(school) {
    ensure(); if (window.PathPanel && window.PathPanel.isOpen()) window.PathPanel.close();
    st.lastFocus = document.activeElement; st.school = school; st.open = true; st.root.hidden = false; document.body.classList.add('pp-open'); render();
    var closeBtn = st.root.querySelector('.pp-x'); try { closeBtn.focus(); } catch (e) { /* ignore */ }
  }
  function closePanel() {
    if (!st.root || !st.open) return; st.open = false; st.root.hidden = true; document.body.classList.remove('pp-open');
    try { if (st.lastFocus && st.lastFocus.focus) st.lastFocus.focus(); } catch (e) { /* ignore */ }
  }
  function refresh() { if (st.open) render(); }

  document.addEventListener('click', function (ev) {
    var t = ev.target && ev.target.closest ? ev.target.closest('[data-team]') : null; if (!t) return;
    ev.preventDefault(); openPanel(t.getAttribute('data-team'));
  });
  document.addEventListener('keydown', function (ev) { if (st.open && ev.key === 'Escape') { ev.preventDefault(); closePanel(); } });
  window.TeamPanel = { open: openPanel, close: closePanel, refresh: refresh, isOpen: function () { return st.open; } };
})();
