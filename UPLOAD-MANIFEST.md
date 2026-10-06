# Upload manifest — TC-1987-2026-v2 (supersedes TC-1987-2026.zip and every earlier package)

## 1. Goes live on GitHub Pages (loaded by the site) — upload at the same paths

| File | Changed vs TC-1987-2026? | What |
|---|---|---|
| `index.html` | no | unchanged since TC-1987-2026 |
| `official-path.js` | no | unchanged since TC-1987-2026 |
| `historical-state-builder.js` | no | unchanged since TC-1987-2026 |
| `historical-rules.js` | no | unchanged since TC-1987-2026 |
| `historical-mode.js` | **yes** | 1988 and 1993 added to the year list and weight classes |
| `historical-seeds.js` | **yes** | 1988 and 1993 seeds/draw lines/wrestleback facts inserted; every other year byte-identical |
| `historical-adjustments.js` | no | unchanged since TC-1987-2026 |
| `historical-careers.js` | **yes** | NCAA Career continuous 1987–2026; all published career IDs unchanged |
| `career-panel.js` | **yes** | coverage text 1987–2026 |
| `team-panel.js` | no | unchanged since TC-1987-2026 |
| `path-panel.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1987.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1987-provenance.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1988.js` | **yes** | NEW |
| `historical-data/results1988-provenance.js` | **yes** | NEW |
| `historical-data/results1989.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1989-provenance.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1990.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1990-provenance.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1991.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1991-provenance.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1992.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1992-provenance.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1993.js` | **yes** | NEW |
| `historical-data/results1993-provenance.js` | **yes** | NEW |
| `historical-data/results1994.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1994-provenance.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1995.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1995-provenance.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1996.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1996-provenance.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1997.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1997-provenance.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1998.js` | no | unchanged since TC-1987-2026 |
| `historical-data/results1998-provenance.js` | no | unchanged since TC-1987-2026 |

If TC-1987-2026 is live, uploading the **yes** rows is enough; uploading every row is also safe. `index.html` unchanged.

## 2. Kept in the repo, NOT loaded by the site — `tools/`

| Folder | Contents |
|---|---|
| `tools/pre1999/` | extractors, `wb_exceptions.json`, **`bout_resolutions.json` (new)**, batch scripts, validators, `extracted/` (1987–1995), summary placers, README |
| `tools/career/` | NCAA Career builder, decisions (R1–R4), aliases, appearances, reports in `out/`, README |

## 3. Reports (top of this ZIP, not uploaded)

`BATCH-REPORT.md` · `SCORING-REPORT.md` · `REGRESSION-REPORT.md` · `CAREER-REVIEW-REPORT.md` · `MANIFEST-SHA256.txt`
