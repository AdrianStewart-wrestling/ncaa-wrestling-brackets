# Upload manifest — TC-1981-2026 (relative to the LIVE baseline TC-1982-2026; supersedes it and every earlier package)

1980 did not complete (see BATCH-REPORT.md), so this package covers 1981–2026 rather than 1980–2026.

## 1. Goes live on GitHub Pages (loaded by the site) — upload at the same paths

| File | Changed vs live TC-1982-2026? | What |
|---|---|---|
| `index.html` | no | unchanged since TC-1982-2026 |
| `official-path.js` | no | unchanged since TC-1982-2026 |
| `historical-state-builder.js` | **yes** | printed-vacancy carry-forward for the wrestleback engine (only when a year lists vacant seats: 1981) |
| `historical-rules.js` | **yes** | a placement decided by a printed bye counts as that placement (placement credit only; used only by 1981) |
| `historical-mode.js` | **yes** | 1981 added; passes printed-bye placements to the scorer (none in any other year) |
| `historical-seeds.js` | **yes** | 1981 seeds/draw lines/semifinalist facts (incl. printed vacancies) inserted; every other year byte-identical |
| `historical-adjustments.js` | no | unchanged since TC-1982-2026 |
| `historical-careers.js` | **yes** | NCAA Career continuous 1981–2026; all published career IDs unchanged |
| `career-panel.js` | **yes** | coverage text 1981–2026 |
| `team-panel.js` | no | unchanged since TC-1982-2026 |
| `path-panel.js` | **yes** | decided bout with no opponent: "No opponent (printed forfeit / bye)" + finish wording (1981 only; fixes an error) |
| `historical-data/results1981.js` | **yes** | NEW |
| `historical-data/results1981-provenance.js` | **yes** | NEW |
| `historical-data/results1982.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1982-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1983.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1983-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1984.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1984-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1985.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1985-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1986.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1986-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1987.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1987-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1988.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1988-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1989.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1989-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1990.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1990-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1991.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1991-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1992.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1992-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1993.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1993-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1994.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1994-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1995.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1995-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1996.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1996-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1997.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1997-provenance.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1998.js` | no | unchanged since TC-1982-2026 |
| `historical-data/results1998-provenance.js` | no | unchanged since TC-1982-2026 |

Upload the **yes** rows to update the live 1982–2026 site to 1981–2026 (uploading every row is also safe). `index.html` unchanged.

## 2. Kept in the repo, NOT loaded by the site — `tools/`

| Folder | Contents |
|---|---|
| `tools/pre1999/` | extractors (`assemble_sf.py` with the printed-vacancy path), `wb_exceptions.json` (1981:134, 1981:190, 1982:190, 1986:118, 1991:118), `bout_resolutions.json`, **`bout_supplements.json`** (new), batch scripts, validators, `extracted/` (1981–1995), summary placers, README |
| `tools/career/` | NCAA Career builder, decisions (R1–R5), aliases, appearances, reports in `out/`, README |

## 3. Reports (top of this ZIP, not uploaded)

`BATCH-REPORT.md` · `SCORING-REPORT.md` · `REGRESSION-REPORT.md` · `CAREER-REVIEW-REPORT.md` · `MANIFEST-SHA256.txt`
