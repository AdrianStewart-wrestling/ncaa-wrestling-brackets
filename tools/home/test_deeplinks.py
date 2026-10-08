#!/usr/bin/env python3
"""Deep-link router tests for index.html (navigation only).

Serves two copies of the site side by side: BASELINE = this repo with tools/home/baseline/index-pre-router.html as index.html
(the page before the router), CANDIDATE = this repo as is. Each test compares page state snapshots. Firebase is stubbed
(tools/home/stubs.py: a signed-out visitor), so nothing is read from or written to Firestore.
Usage: python3 tools/home/test_deeplinks.py [REPO_ROOT]      (exit code 0 = all tests pass)
"""
import asyncio, functools, http.server, os, shutil, sys, tempfile, threading
from playwright.async_api import async_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from stubs import APP, FS, AUTH
ROOT = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, '..', '..'))

def serve(directory, port):
    H = functools.partial(type('Q', (http.server.SimpleHTTPRequestHandler,), {'log_message': lambda *a: None}), directory=directory)
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', port), H); threading.Thread(target=srv.serve_forever, daemon=True).start(); return srv

SNAP = """() => { const vis = id => { const e = document.getElementById(id); return !e ? 'missing' : e.hidden ? 'hidden' : getComputedStyle(e).display; };
  const os = document.getElementById('off-scores-view');
  return {
    vis: Object.fromEntries(['tc-view','history-controls','area','scores-view','mode-banner','wtabs','off-scores-view'].map(id => [id, vis(id)])),
    osState: os ? os.getAttribute('data-os-state') : null,
    osTitle: ((document.querySelector('#off-scores-view .os-title, #off-scores-view h1, #off-scores-view h2') || {}).textContent || '').trim().slice(0, 120),
    topnav: Array.from(document.querySelectorAll('.topnav-btn')).map(b => b.className),
    histYear: (document.getElementById('hist-year') || {}).value || null, histWeight: (document.getElementById('hist-weight') || {}).value || null,
    histStatus: ((document.getElementById('hist-status') || {}).textContent || '').trim(),
    bkt: ((document.getElementById('bkt') || {}).innerText || '').replace(/\\s+/g, ' ').slice(0, 400),
    opsButton: /Operator sign-in/.test(document.body.innerText) }; }"""

async def main():
    base = tempfile.mkdtemp(prefix='tc-base-')
    for n in os.listdir(ROOT):
        if n in ('tools', '.git'): continue
        s, d = os.path.join(ROOT, n), os.path.join(base, n)
        (shutil.copytree if os.path.isdir(s) else shutil.copy2)(s, d)
    shutil.copy2(os.path.join(HERE, 'baseline', 'index-pre-router.html'), os.path.join(base, 'index.html'))
    serve(base, 8801); serve(ROOT, 8802)
    B, C = 'http://127.0.0.1:8801/index.html', 'http://127.0.0.1:8802/index.html'
    results = []
    async with async_playwright() as p:
        br = await p.chromium.launch()
        async def page():
            pg = await br.new_page(viewport={'width': 1500, 'height': 1000}); pg.errs = []
            pg.on('pageerror', lambda e: pg.errs.append(str(e)))
            async def route(r):
                u = r.request.url; await r.fulfill(status=200, content_type='application/javascript', body=APP if 'firebase-app' in u else FS if 'firestore' in u else AUTH)
            await pg.route('https://www.gstatic.com/**', route); await pg.route('https://fonts.googleapis.com/**', lambda r: r.fulfill(status=200, body=''))
            return pg
        async def load(url, wait=2600):
            pg = await page(); await pg.goto(url); await pg.wait_for_timeout(wait); return pg
        async def snap(pg): return await pg.evaluate(SNAP)
        def check(name, ok, detail=''):
            results.append((name, ok, detail)); print(('PASS ' if ok else 'FAIL ') + name + ('' if ok else '  -- ' + detail))
        async def manual_history(pg, year=None, weight=None, scores=False):   # what a visitor does by hand on the baseline page
            await pg.click('.topnav-btn[data-mode="history"]'); await pg.wait_for_timeout(400)
            if year: await pg.select_option('#hist-year', str(year)); await pg.wait_for_timeout(200)
            if scores: await pg.click('#hist-scores-btn')
            elif weight: await pg.select_option('#hist-weight', str(weight)); await pg.click('#hist-show-btn')
            await pg.wait_for_timeout(2200)

        # 1. bare index.html (and the other untouched landings) behave exactly as before
        # front door (approved): the bare URL now opens the homepage (home.html); every ?... URL is unchanged
        fd = await page(); await fd.goto(C); await fd.wait_for_timeout(1500)
        check('1. bare index.html: front door opens the homepage (home.html)', fd.url.endswith('home.html') and not fd.errs, (fd.url, fd.errs)); await fd.close()
        for q in ('?view=official', '?view=bracket', '?view=nonsense'):
            a, b = await load(B + q), await load(C + q); sa, sb = await snap(a), await snap(b)
            check(f'1. {q or "bare index.html"}: identical to the pre-router page', sa == sb and not b.errs, f'{sa} != {sb} errs={b.errs}')
            await a.close(); await b.close()
        # 2. ?view=official opens Official (the default landing)
        c = await load(C + '?view=official'); s = await snap(c)
        check('2. ?view=official opens 2026 Official', s['vis']['tc-view'] not in ('none', 'hidden', 'missing') and s['topnav'][0].endswith(' on') and not c.errs, str(s)); await c.close()
        # 3. ?view=picks opens My Bracket = the same state as clicking MY BRACKET on the baseline page
        a = await load(B); await a.click('.topnav-btn[data-mode="picks"]'); await a.wait_for_timeout(800); sa = await snap(a)
        c = await load(C + '?view=picks'); sc = await snap(c)
        check('3. ?view=picks opens My Bracket (same state as clicking MY BRACKET)', sc == sa and sc['topnav'][1].endswith(' on') and sc['vis']['area'] == 'flex' and not c.errs, f'{sc} != {sa}'); await a.close(); await c.close()
        # 4. ?view=history opens NCAA History = clicking NCAA HISTORY
        a = await load(B); await manual_history(a); sa = await snap(a)
        c = await load(C + '?view=history'); sc = await snap(c)
        check('4. ?view=history opens NCAA History (same state as clicking NCAA HISTORY)', sc == sa and sc['topnav'][2].endswith(' on') and sc['vis']['history-controls'] == 'flex' and not c.errs, f'{sc} != {sa}'); await a.close(); await c.close()
        # 5. year + weight opens that bracket = choosing them by hand
        for y, w in (('1981', '134'), ('2016', '157'), ('1980', 'UNL'), ('1999', '285')):
            a = await load(B); await manual_history(a, y, w); sa = await snap(a)
            c = await load(C + f'?view=history&year={y}&weight={w}', 4800); sc = await snap(c)
            check(f'5. ?view=history&year={y}&weight={w} opens that bracket', sc == sa and sc['histStatus'].startswith(y + ' ' + w) and 'read-only historical bracket' in sc['histStatus'] and not c.errs, f'{sc} != {sa}'); await a.close(); await c.close()
        c = await load(C + '?view=history&year=1980&weight=unl', 4800); sc = await snap(c)
        check('5. weight matching is case-insensitive (unl = UNL)', sc['histStatus'].startswith('1980 UNL') and 'read-only historical bracket' in sc['histStatus'] and sc['histWeight'] == 'UNL' and not c.errs, str(sc)); await c.close()
        # 6. show=scores opens that year's Team Scores = clicking Team Scores
        for y in ('1981', '2026'):
            a = await load(B); await manual_history(a, y, scores=True); sa = await snap(a)
            c = await load(C + f'?view=history&year={y}&show=scores', 4800); sc = await snap(c)
            check(f'6. ?view=history&year={y}&show=scores opens {y} Team Scores', sc == sa and sc['vis']['off-scores-view'] not in ('none', 'hidden', 'missing') and y in sc['osTitle'] and not c.errs, f'{sc} != {sa}'); await a.close(); await c.close()
        # 7. 2020 and invalid years/weights fail safely to the History landing (no bracket, no error, a plain message)
        for q, want in (('year=2020', 'no 2020'), ('year=1969', '1969 is not available'), ('year=abc', 'abc is not available'), ('year=19811', 'not available'),
                        ('year=2020&show=scores', 'no 2020'), ('year=1981&weight=999', 'has no 999'), ('year=1981&weight=125', 'has no 125'), ('year=1981&weight=', '')):
            c = await load(C + '?view=history&' + q, 3200); sc = await snap(c)
            ok = sc['topnav'][2].endswith(' on') and 'read-only historical bracket' not in sc['histStatus'] and sc['vis']['off-scores-view'] in ('none', 'hidden') and want.lower() in sc['histStatus'].lower() and not c.errs
            check(f'7. ?view=history&{q} fails safely', ok, str(sc)); await c.close()
        c = await load(C + '?view=history&year=1981', 3200); sc = await snap(c)
        check('7. year only: History with that year selected, no bracket opened', sc['topnav'][2].endswith(' on') and sc['histYear'] == '1981' and 'read-only historical bracket' not in sc['histStatus'] and not c.errs, str(sc)); await c.close()
        # 8. ?ops=1 operator behaviour unchanged (and combined with a deep link)
        a, c = await load(B + '?ops=1'), await load(C + '?ops=1'); sa, sc = await snap(a), await snap(c)
        check('8. ?ops=1 identical to the pre-router page (operator sign-in offered)', sa == sc and sc['opsButton'] and not c.errs, f'{sa} != {sc}'); await a.close(); await c.close()
        a, c = await load(B + '?view=bracket&ops=1'), await load(C + '?view=bracket&ops=1'); sa, sc = await snap(a), await snap(c)
        check('8. ?view=bracket&ops=1 identical to the pre-router page', sa == sc and not c.errs, f'{sa} != {sc}'); await a.close(); await c.close()
        await br.close()
    shutil.rmtree(base, ignore_errors=True)
    bad = [r for r in results if not r[1]]
    print(f'\n{len(results) - len(bad)}/{len(results)} deep-link tests passed'); sys.exit(1 if bad else 0)
asyncio.run(main())
