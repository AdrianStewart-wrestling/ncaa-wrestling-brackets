# Upload manifest — TC-1985-2026 (supersedes TC-1986-2026.zip and every earlier package)

## 1. Goes live on GitHub Pages (loaded by the site) — upload at the same paths

| File | Changed vs TC-1986-2026? | What |
|---|---|---|
| `index.html` | no | unchanged since TC-1986-2026 |
| `official-path.js` | **yes** | optional core method-label hook (1976–1987 "Sup. Dec."); otherwise identical |
| `historical-state-builder.js` | **yes** | wrestleback engine: shape table (1972–1985 semifinalist + 1986–1995 quarterfinal); 1976–1987 Sup. Dec. label |
| `historical-rules.js` | **yes** | 1985–1987 bonus scale with superior decision; shape-aware placement schedule |
| `historical-mode.js` | **yes** | 1985 added; 1986–1987 scored (no longer pending); shape passed to the scorer |
| `historical-seeds.js` | **yes** | 1985 seeds/draw lines/semifinalist facts inserted; every other year byte-identical |
| `historical-adjustments.js` | no | unchanged since TC-1986-2026 |
| `historical-careers.js` | **yes** | NCAA Career continuous 1985–2026; all published career IDs unchanged |
| `career-panel.js` | **yes** | coverage text 1985–2026 |
| `team-panel.js` | no | unchanged since TC-1986-2026 |
| `path-panel.js` | **yes** | #null fix: unseeded opponents show school only (seeded unchanged) |
| `historical-data/results1985.js` | **yes** | NEW |
| `historical-data/results1985-provenance.js` | **yes** | NEW |
| `historical-data/results1986.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1986-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1987.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1987-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1988.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1988-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1989.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1989-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1990.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1990-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1991.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1991-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1992.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1992-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1993.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1993-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1994.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1994-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1995.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1995-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1996.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1996-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1997.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1997-provenance.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1998.js` | no | unchanged since TC-1986-2026 |
| `historical-data/results1998-provenance.js` | no | unchanged since TC-1986-2026 |

If TC-1986-2026 is live, uploading the **yes** rows is enough; uploading every row is also safe. `index.html` unchanged.

## 2. Kept in the repo, NOT loaded by the site — `tools/`

| Folder | Contents |
|---|---|
| `tools/pre1999/` | extractors (`assemble.py`, `assemble_wb.py`, **`assemble_sf.py`**, `gen_js*.py` incl. **`gen_js_sf.py`**, `placers.py`), `wb_exceptions.json`, `bout_resolutions.json`, batch scripts (incl. **`run_sf_year.sh`**), validators, `extracted/` (1985–1995), summary placers, README |
| `tools/career/` | NCAA Career builder, decisions (R1–R5), aliases, appearances, reports in `out/`, README |

## 3. Reports (top of this ZIP, not uploaded)

`BATCH-REPORT.md` · `SCORING-REPORT.md` · `REGRESSION-REPORT.md` · `CAREER-REVIEW-REPORT.md` · `MANIFEST-SHA256.txt`
