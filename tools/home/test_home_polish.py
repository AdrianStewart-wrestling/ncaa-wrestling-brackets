#!/usr/bin/env python3
"""Checks for the approved polish pass on home.html (phone menu, nav label, archives layout, wording, tap targets).
Usage: python3 tools/home/test_home_polish.py [REPO_ROOT]   (exit code 0 = all pass)"""
import asyncio, functools, http.server, os, sys, threading
from playwright.async_api import async_playwright
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, '..', '..'))
H = functools.partial(type('Q', (http.server.SimpleHTTPRequestHandler,), {'log_message': lambda *a: None}), directory=ROOT)
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8804), H); threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = 'http://127.0.0.1:8804/home.html'; res = []
def check(n, ok, d=''): res.append(ok); print(('PASS ' if ok else 'FAIL ') + n + ('' if ok else '  -- ' + str(d)[:400]))
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        async def page(w, h):
            pg = await b.new_page(viewport={'width': w, 'height': h}); pg.errs = []; pg.on('pageerror', lambda e: pg.errs.append(str(e)))
            await pg.route('https://fonts.googleapis.com/**', lambda r: r.fulfill(status=200, body='')); await pg.goto(URL)
            await pg.add_style_tag(content='html{scroll-behavior:auto !important}'); await pg.wait_for_timeout(600); return pg
        d = await page(1440, 900)
        nav = await d.evaluate("(()=>{const n=document.querySelector('.top nav'); const a=[...n.querySelectorAll('a')].filter(x=>getComputedStyle(x).display!=='none'); const r=n.getBoundingClientRect(), br=document.querySelector('.brand').getBoundingClientRect(); return {labels:a.map(x=>x.innerText.trim()), fits: r.right<=innerWidth && br.right < r.left, wraps: a.some(x=>{const g=document.createRange(); g.selectNodeContents(x); return new Set([...g.getClientRects()].map(q=>Math.round(q.top))).size>1;}), menu:getComputedStyle(document.querySelector('.mnav')).display};})()")
        check('desktop 1440: nav reads FROM THE ARCHIVES and fits on one line beside the logo', 'FROM THE ARCHIVES' in nav['labels'] and nav['fits'] and not nav['wraps'] and nav['menu'] == 'none', nav)
        t = await d.evaluate("({ h: document.getElementById('eras-h').textContent, e1: document.querySelector('#era-e1 ul').innerText, dek: document.querySelector('.arc .dek').textContent, full: document.querySelector('.arc-full').open, sum: getComputedStyle(document.querySelector('.arc-full summary')).display, bodyVisible: document.querySelector('.arc-full p.b').getBoundingClientRect().height > 0, note: [...document.querySelectorAll('#sources .note')].map(x=>x.textContent).join(' | ') })")
        check('scoring section titled "How the tournament changed"', t['h'] == 'How the tournament changed', t['h'])
        check('1980–1984 plain-language sentence updated', 'Tech falls were not yet used, and first-round byes earned no advancement point.' in t['e1'] and 'There is no tech fall' not in t['e1'], t['e1'])
        check('archives gold summary updated; headline unchanged', t['dek'] == 'Randy Lewis won the 134-pound title in 1980. A year later, he was awarded 7th by forfeit \u2014 without an opponent.' and (await d.evaluate("document.querySelector('.arc h3').textContent")) == 'The defending champion who finished 7th, and nobody finished 8th', t['dek'])
        check('desktop: the full story stays expanded, no "Read the full story" control', t['full'] and t['sum'] == 'none' and t['bodyVisible'], t)
        check('Data & Sources: universal per-bout wording (1970-2026), principal sources, "Nothing is reconciled silently." kept, no WrestlingStats', 'For every championship from 1970 to 2026' in t['note'] and 'Nothing is reconciled silently.' in t['note'] and 'Hammond' in t['note'] and 'National Wrestling Hall of Fame' in t['note'] and 'WrestlingStats' not in t['note'] and 'For every bout from 1980 to 2009' not in t['note'], t['note'])
        for w in (1180, 1101):    # full nav from 1101 px; the long label only where it fits (1181+)
            m = await page(w, 800); r = await m.evaluate("(()=>{const n=document.querySelector('.top nav'); const a=[...n.querySelectorAll('a')]; const br=document.querySelector('.brand').getBoundingClientRect(), r=n.getBoundingClientRect(); return {labels:a.map(x=>x.innerText.trim()), fits:r.right<=innerWidth && br.right<r.left, wraps:a.some(x=>{const g=document.createRange(); g.selectNodeContents(x); return new Set([...g.getClientRects()].map(q=>Math.round(q.top))).size>1;}), over: document.documentElement.scrollWidth-innerWidth};})()")
            check(f'{w} px: full nav fits on one line (short ARCHIVES label)', r['fits'] and not r['wraps'] and r['over'] <= 0 and 'ARCHIVES' in r['labels'], r); await m.close()
        for w in (1024, 800):     # tablets: the compact Menu, as on phones
            m = await page(w, 800); r = await m.evaluate("({ nav: getComputedStyle(document.querySelector('.top nav')).display, menu: getComputedStyle(document.querySelector('.mnav')).display, over: document.documentElement.scrollWidth - innerWidth })")
            check(f'{w} px: compact Menu, no overflow', r['nav'] == 'none' and r['menu'] == 'block' and r['over'] <= 0, r); await m.close()
        await d.close()
        m = await page(390, 844)
        hdr = await m.evaluate("({ nav: getComputedStyle(document.querySelector('.top nav')).display, menu: getComputedStyle(document.querySelector('.mnav')).display, over: document.documentElement.scrollWidth - innerWidth, h: document.querySelector('.top .wrap').getBoundingClientRect().height })")
        check('phone 390: header shows the logo and a compact Menu, no overflow', hdr['nav'] == 'none' and hdr['menu'] == 'block' and hdr['over'] <= 0 and hdr['h'] <= 61, hdr)
        await m.click('.mnav summary'); await m.wait_for_timeout(150)
        links = await m.evaluate("[...document.querySelectorAll('.mnav-list a')].filter(a=>a.getBoundingClientRect().height>0).map(a=>[a.textContent,a.getAttribute('href')])")
        check('phone menu offers every destination', [l[0] for l in links] == ['Tournament Central','NCAA History','From the Archives','Data & Sources','About'], links)
        await m.click('.mnav-list a[href="#sources"]'); await m.wait_for_timeout(300)
        st = await m.evaluate("({ open: document.querySelector('.mnav').open, top: Math.round(document.getElementById('sources').getBoundingClientRect().top) })")
        check('choosing Data & Sources jumps there and closes the menu', not st['open'] and 0 <= st['top'] < 140, st)
        for target in ('#archives', '#about'):
            await m.click('.mnav summary'); await m.wait_for_timeout(100); await m.click(f'.mnav-list a[href="{target}"]'); await m.wait_for_timeout(300)
            top = await m.evaluate(f"Math.round(document.querySelector('{target}').getBoundingClientRect().top)")
            check(f'phone: {target} reachable from the menu', 0 <= top < 140, top)
        order = await m.evaluate("""(()=>{const pick={'title':'.arc h3','summary':'.arc .dek','record':'.arc-side h4','links':'.arc-side .p-act','full':'.arc-full summary','sources':'.arc-src'};
           return Object.entries(pick).map(([k,s])=>[k,document.querySelector(s).getBoundingClientRect().top]).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);})()""")
        check('phone archives order: headline, summary, record, links, Read the full story, sources', order == ['title','summary','record','links','full','sources'], order)
        col = await m.evaluate("({ open: document.querySelector('.arc-full').open, body: document.querySelector('.arc-full p.b').getBoundingClientRect().height })")
        await m.click('.arc-full summary'); await m.wait_for_timeout(150)
        exp = await m.evaluate("document.querySelector('.arc-full p.b').getBoundingClientRect().height")
        check('phone: full story collapsed until "Read the full story" is tapped', not col['open'] and col['body'] == 0 and exp > 0, (col, exp))
        tap = await m.evaluate("(()=>{const r=[...document.querySelectorAll('#comb button.hx')].map(x=>x.getBoundingClientRect()); let ov=0; for(let i=0;i<r.length;i++)for(let j=i+1;j<r.length;j++){const a=r[i],c=r[j]; if(a.left<c.right-.5&&c.left<a.right-.5&&a.top<c.bottom-.5&&c.top<a.bottom-.5) ov++;} return {w:r[0].width,h:r[0].height,ov};})()")
        await m.evaluate("document.getElementById('comb').scrollIntoView({block:'center'})"); await m.wait_for_timeout(100)
        bx = await m.evaluate("(()=>{const r=document.querySelector('#comb button[aria-label^=\"1985 \"]').getBoundingClientRect(); return [r.left+1.5, r.top+2];})()")
        await m.mouse.click(bx[0], bx[1]); await m.wait_for_timeout(100)
        check('phone: whole hex box is the tap target (corner tap selects), boxes never overlap', (await m.evaluate("document.querySelector('.p-yr').textContent")) == '1985' and tap['ov'] == 0, tap)
        check('no page errors', not m.errs, m.errs); await m.close(); await b.close()
    print(f'\n{sum(res)}/{len(res)} polish checks passed'); sys.exit(0 if all(res) else 1)
asyncio.run(main())
