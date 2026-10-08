#!/usr/bin/env python3
"""Functional test for the homepage (home.html): hub, links into Tournament Central, page weight, fallback.
Usage: python3 tools/home/test_home_candidate.py [REPO_ROOT]   (exit code 0 = all pass). Firebase is stubbed (tools/home/stubs.py)."""
import asyncio, functools, http.server, os, sys, threading
from playwright.async_api import async_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from stubs import APP, FS, AUTH
ROOT = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, '..', '..'))
H = functools.partial(type('Q', (http.server.SimpleHTTPRequestHandler,), {'log_message': lambda *a: None}), directory=ROOT)
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8803), H); threading.Thread(target=srv.serve_forever, daemon=True).start()
BASE = 'http://127.0.0.1:8803/'
HEAVY = ('historical-careers.js', 'historical-seeds.js', 'historical-mode.js', 'tournament-core.js')
results = []
def check(name, ok, detail=''):
    results.append(ok); print(('PASS ' if ok else 'FAIL ') + name + ('' if ok else '  -- ' + str(detail)[:500]))
async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch()
        async def page(block_data=False):
            pg = await br.new_page(viewport={'width': 1440, 'height': 900}); pg.errs = []; pg.reqs = []
            pg.on('pageerror', lambda e: pg.errs.append(str(e))); pg.on('request', lambda r: pg.reqs.append(r.url))
            async def route(r):
                u = r.request.url; await r.fulfill(status=200, content_type='application/javascript', body=APP if 'firebase-app' in u else FS if 'firestore' in u else AUTH)
            await pg.route('https://www.gstatic.com/**', route); await pg.route('https://fonts.googleapis.com/**', lambda r: r.fulfill(status=200, body=''))
            if block_data: await pg.route('**/home-data.js', lambda r: r.fulfill(status=404, body=''))
            return pg
        pg = await page(); await pg.goto(BASE + 'home.html'); await pg.wait_for_timeout(900)
        files = sorted(set(u.split('/')[-1].split('?')[0] for u in pg.reqs if u.startswith(BASE)))
        check('page loads without errors', not pg.errs, pg.errs)
        check('lightweight: no Career registry, history facts, year files or app scripts are requested', not any(f in HEAVY or f.startswith('results') for f in files), files)
        n = await pg.evaluate("document.querySelectorAll('#comb button.hx').length"); gap = await pg.evaluate("Array.from(document.querySelectorAll('#comb .hx.gap')).map(e=>e.getAttribute('aria-label'))")
        check('honeycomb: 56 selectable championships and a hollow 2020', n == 56 and gap == ['2020, championships canceled'], (n, gap))
        sel = await pg.evaluate("document.querySelector('#comb [aria-pressed=true]').getAttribute('aria-label')")
        check('default selection is the latest championship (2026)', sel.startswith('2026 '), sel)
        await pg.click('#comb button[aria-label^="1981 "]'); await pg.wait_for_timeout(150)
        panel = await pg.evaluate("({ yr: document.querySelector('.p-yr').textContent, ch: document.querySelector('.p-ch b').textContent, era: document.querySelector('.p-era').textContent, w: Array.from(document.querySelectorAll('.wts a')).map(a => a.textContent), href: Array.from(document.querySelectorAll('.wts a')).map(a => a.getAttribute('href')), scores: document.querySelector('.p-act .btn').getAttribute('href') })")
        check('1981 panel: champion Iowa, 1979–1984 era, the era\u2019s own weight classes', panel['yr'] == '1981' and panel['ch'] == 'Iowa' and '1979–1984' in panel['era'] and panel['w'] == ['118','126','134','142','150','158','167','177','190','UNL'], panel)
        check('1981 panel links are deep links', panel['href'][2] == 'index.html?view=history&year=1981&weight=134' and panel['scores'] == 'index.html?view=history&year=1981&show=scores', panel)
        await pg.focus('#comb button[aria-label^="1999 "]'); await pg.keyboard.press('Enter'); await pg.wait_for_timeout(150)
        check('keyboard: Enter on a year selects it', (await pg.evaluate("document.querySelector('.p-yr').textContent")) == '1999')
        eras = await pg.evaluate("Array.from(document.querySelectorAll('.era')).map(e => [e.querySelector('.era-y').firstChild.textContent, e.querySelector('.era-go a').getAttribute('href'), e.querySelectorAll('details p').length])")
        check('seven scoring eras, each with exact rules and a Team Scores link', [e[0] for e in eras] == ['1970–1971', '1972–1978','1979–1984','1985–1987','1988–1994','1995','1996–2026'] and all(e[2] >= 3 and 'show=scores' in e[1] for e in eras), eras)
        arc = await pg.evaluate("({ t: document.querySelector('.arc h3').textContent, nil: document.querySelector('.ledger .nil dd').textContent, links: Array.from(document.querySelectorAll('.arc-side a')).map(a => a.getAttribute('href')) })")
        check('archives: the Lewis story with its record and links', 'nobody finished 8th' in arc['t'] and arc['nil'] == 'None' and arc['links'] == ['index.html?view=history&year=1981&weight=134', 'index.html?view=history&year=1981&show=scores'], arc)
        doors = await pg.evaluate("Array.from(document.querySelectorAll('.door')).map(d => [d.getAttribute('href'), d.querySelector('.sub').textContent])")
        check('doors deep-link to Official, My Bracket and History; History reads 56 NCAA Championships', [d[0] for d in doors] == ['index.html?view=official','index.html?view=picks','#history'] and doors[2][1] == '56 NCAA Championships · 1970–2026', doors)
        # follow links into Tournament Central (the router does the rest)
        for href, want in (('index.html?view=history&year=1981&weight=134', '1981 134'), ('index.html?view=history&year=1981&show=scores', 'scores')):
            t = await page(); await t.goto(BASE + href); await t.wait_for_timeout(4500)
            st = await t.evaluate("({ s: (document.getElementById('hist-status') || {}).textContent || '', os: getComputedStyle(document.getElementById('off-scores-view')).display, title: ((document.querySelector('#off-scores-view .os-title, #off-scores-view h1, #off-scores-view h2') || {}).textContent || '') })")
            ok = (st['s'].startswith('1981 134') and 'read-only historical bracket' in st['s']) if want != 'scores' else (st['os'] != 'none' and '1981' in st['title'])
            check(f'link {href} opens the right Tournament Central view', ok and not t.errs, (st, t.errs)); await t.close()
        await pg.close()
        fb = await page(block_data=True); await fb.goto(BASE + 'home.html'); await fb.wait_for_timeout(700)
        txt = await fb.evaluate("document.getElementById('panel').innerText")
        check('fallback: without the data file the hub offers a plain link into NCAA History, no errors', 'Open NCAA History' in txt and not fb.errs, (txt, fb.errs)); await fb.close()
        m = await br.new_page(viewport={'width': 390, 'height': 844}); await m.route('https://fonts.googleapis.com/**', lambda r: r.fulfill(status=200, body=''))
        await m.goto(BASE + 'home.html'); await m.wait_for_timeout(700)
        over = await m.evaluate("document.documentElement.scrollWidth - window.innerWidth")
        check('phone (390 px): no horizontal overflow', over <= 0, over); await m.close()
        await br.close()
    print(f'\n{sum(results)}/{len(results)} homepage tests passed'); sys.exit(0 if all(results) else 1)
asyncio.run(main())
