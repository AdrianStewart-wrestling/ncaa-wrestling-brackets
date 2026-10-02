# Known issues / deferred cleanup (logged separately from the Historical Team Scores milestone)

## KI-1 — Historical seed labels: R1 slot-15 orientation (cosmetic; NOT fixed in the scoring milestone)
- Where: `historical-state-builder.js` `buildHistoricalFields()`, ordinary-slot rule.
- What: seeds are derived from historical draw position with `m.a` (the bout winner) getting `PAIRS[i][0]+1`. For R1 slot 15
  the pair is `[30, 1]`, so the winner gets seed **31** and the loser seed **2** — the reverse of the code's own comment
  ("winner side gets the lower seed number").
- Visible effect: e.g. 2016/149 shows Brandon Sorensen as "#31" in Path to the Finals and Nick Barber as "2" in the
  bracket; 2016/125 shows Alfredo Rodriguez as "2" instead of Joey Dance.
- Not affected: results, routing, placements, team scores, Path journeys (ids only need to be unique).
- Why deferred: changing seeds changes wrestler ids (`weight-seed`), i.e. bracket identity — a separate, frozen-baseline
  change that must be regression-tested on its own, not combined with scoring.

## KI-2 — Injury default representation (deferred until scoring is frozen)
- The authoritative `tournament-core.js` now has a `Default` result type (bonus 2) and `official-path.js` labels it "Def".
- Historical data still records injury defaults ("Inj.", "Default", "DEF", "Def") as `MedFFT` (label "Med FF"), per the
  documented policy in `historical-state-builder.js` `parseResult()`.
- Team points are identical either way (both bonus 2) — confirmed by the 2016 acceptance test (Gardner-Webb's injury
  default scores exactly the published total).
- Cleanup: map injury defaults to `Default` in the parser; then re-run the 100/100 replay matrix and the team-score
  matrix to confirm no totals change. Separate change, after scoring is frozen.
