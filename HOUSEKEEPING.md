# Housekeeping list (separate from feature work; nothing here has been changed)

Recorded Oct 6 2026. Each item is cosmetic or administrative and is deliberately NOT mixed into the homepage or history work.
Fix only with its own approval, verification and regression run.

| # | Item | Where | Effect today |
|---|---|---|---|
| 1 | `AVAILABLE_YEARS` lists 1980 and 1981 twice (`[1980,1980,1981,1981,...]`) | `historical-mode.js` | None: the year list is de-duplicated at runtime (`new Set`) |
| 2 | Four old copies of the app are publicly reachable at the site root: `5-11-2026index.html`, `5-13-930.html`, `noon-index.html`, `fix-return-index.html` | site root | Stale pages can be opened by URL |
| 3 | The data files for 2016–2026 carry no source header (2010–2015 do) | `historical-data/results2016.js` … `results2026.js` | Data & Sources can only describe these years conservatively |
| 4 | `career-panel.js` header comment still reads "1999–2009 and 2012 results from a fallback source" (the visible text is correct: 1980–2009, 2012) | `career-panel.js` line 3 (comment only) | None (not displayed) |
