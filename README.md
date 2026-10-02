# Historical Team Scores — CANDIDATE (not frozen)

Base: HISTORY-100-OF-100 (unchanged and still the frozen baseline).

## Install for localhost testing
Copy over your Tournament Central files: index.html, historical-mode.js, historical-adjustments.js (new),
official-scoring.js (see below), and historical-data/results2016.js (one result corrected). Other files are identical
to HISTORY-100-OF-100 (historical-state-builder.js / historical-adapter.js unchanged). tournament-core.js and
official-path.js are YOUR authoritative files — not touched, not included.
In History mode: choose a year, click TEAM SCORES. Click a team for its roster; click a wrestler for Path to the Finals.

## Shared-code change (approved Option A)
official-scoring.js: optional `opts.schools` (one executable line; see official-scoring.diff). Omitted -> output
byte-identical (18,546-case regression, 0 differences). OFFICIAL's officialScoresModel() does not pass it.

## 2016 acceptance: 72/72 published team totals exact
Penn St. 123 · Oklahoma St. 97.5 · Ohio St. 86 · Virginia Tech 82 · Iowa 81 · ... · Michigan State 0 · The Citadel 0 ·
VMI 0 · Northern Colorado -1. Uses: Rider bout 411 corrected to MD 19-6 (Tier R, Rider University release); four
labeled reconciliations to the published NCAA final totals (historical-adjustments.js; no reason stated or implied).

## Not frozen: all-years matrix incomplete — see the report in chat / KNOWN-ISSUES.md.
