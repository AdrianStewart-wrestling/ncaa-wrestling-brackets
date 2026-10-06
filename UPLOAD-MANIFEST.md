# Upload manifest — TC-1990-2026 (supersedes TC-1994-2026.zip and TC-1996-1998.zip)

## 1. Goes live on GitHub Pages (loaded by the site) — upload at the same paths

| File | Changed vs TC-1994-2026? | What |
|---|---|---|
| `index.html` | **yes** | scores page: model-provided subtitle/explanation (opt-in); exact quarter-point display (halves unchanged); [from TC-1994-2026: consolation headers from state, wrestle-in filter, scoring-pending guard] |
| `official-path.js` | no | optional core round-label hook (from TC-1994-2026; unchanged this batch) |
| `historical-state-builder.js` | **yes** | wrestleback engine: printed sides (defaults unchanged) |
| `historical-rules.js` | **yes** | 1990–1995 history-layer scoring model appended (HistoricalWrestlebackScoring) |
| `historical-mode.js` | **yes** | 1990–1992 years/classes; 1990–1995 scored by the model (no longer pending) |
| `historical-seeds.js` | **yes** | 1990, 1991, 1992 seeds/draw lines/wrestleback facts inserted; every other year byte-identical |
| `historical-adjustments.js` | **yes** | 1999 printed-MT entries (Iowa, Wisconsin −0.5 each) |
| `historical-careers.js` | **yes** | NCAA Career 1990–1992 + 1994–2026; all published career IDs unchanged |
| `career-panel.js` | **yes** | coverage 1990–1992 and 1994–2026; exact quarter points |
| `team-panel.js` | **yes** | exact quarter points (halves unchanged) |
| `path-panel.js` | **yes** | exact quarter points (halves unchanged) |
| `historical-data/results1990.js` | **yes** | NEW |
| `historical-data/results1990-provenance.js` | **yes** | NEW |
| `historical-data/results1991.js` | **yes** | NEW |
| `historical-data/results1991-provenance.js` | **yes** | NEW |
| `historical-data/results1992.js` | **yes** | NEW |
| `historical-data/results1992-provenance.js` | **yes** | NEW |
| `historical-data/results1994.js` | no | unchanged since TC-1994-2026 |
| `historical-data/results1994-provenance.js` | no | unchanged since TC-1994-2026 |
| `historical-data/results1995.js` | no | unchanged since TC-1994-2026 |
| `historical-data/results1995-provenance.js` | no | unchanged since TC-1994-2026 |
| `historical-data/results1996.js` | no | unchanged since TC-1994-2026 |
| `historical-data/results1996-provenance.js` | no | unchanged since TC-1994-2026 |
| `historical-data/results1997.js` | no | unchanged since TC-1994-2026 |
| `historical-data/results1997-provenance.js` | no | unchanged since TC-1994-2026 |
| `historical-data/results1998.js` | no | unchanged since TC-1994-2026 |
| `historical-data/results1998-provenance.js` | no | unchanged since TC-1994-2026 |

If TC-1994-2026 is live, uploading the **yes** rows is enough; uploading every row is also safe.

## 2. Kept in the repo, NOT loaded by the site — `tools/`

| Folder | Contents |
|---|---|
| `tools/pre1999/` | extractors (`extract.py`, `assemble.py`, `assemble_wb.py`, `gen_js.py`, `gen_js_wb.py`, `placers.py`), `wb_exceptions.json`, batch scripts (`run_wb_year.sh`, `install_year.py`), validators (`harness.js`, `fingerprint.js`, `regress.js`, `twb_audit.js`, `tscore_wb.js`, `tbye_wb.js`, `tcheck.js`, `gen_mt_adjustments.js`), `extracted/` (1990–1995 extractions), summary placers 1990–1998, README |
| `tools/career/` | NCAA Career builder (`appearances.js`, `build_registry.js`, `career_step.sh`), `career-decisions.txt`, `school_aliases.json`, `appearances.json`, `derive_decisions.js`, reports in `out/`, README |

## 3. Reports (top of this ZIP, not uploaded)

`BATCH-REPORT.md` · `SCORING-REPORT.md` · `REGRESSION-REPORT.md` · `CAREER-REVIEW-REPORT.md` · `MANIFEST-SHA256.txt`
