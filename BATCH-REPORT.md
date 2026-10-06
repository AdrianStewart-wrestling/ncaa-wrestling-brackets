# 1985–1987 scoring, Superior Decision, #null fix, and 1985 (semifinalist wrestleback) — report (Oct 6 2026)

**Completed: 1986 and 1987 team scoring; 1985 (new semifinalist-wrestleback shape) to the full standard. Stopped at 1984**: its bracket
assembles cleanly, but it is the first year with a genuinely new historical issue (below). Coverage is now continuous 1985–2026.

## Approved items delivered
1. **1985–1987 scoring** (history-layer model): fall / forfeit / default / DQ 1 · major decision (8–11) ½ · **superior decision (12+) ¾** ·
   tech fall 1; consolation advancement ½; places 16-12-9-7-5-3-2-1; 1985 bye rule (established reading). No adjustments.
2. **Superior Decision display**: year-scoped (1976–1987) through an optional core hook; Path to the Finals (also opened from Career) shows
   "Sup. Dec." for 12+ decisions (37 bouts in 1986, 25 in 1987, plus 1985). Later years unchanged ("MD" in 1989, 1999, 2016 verified).
   Note: bracket boxes show names and seeds only, for every year — no result method is displayed there for any result type, so there is
   nothing to relabel; Career rows show finishes, and their Path shows the method.
3. **"TF 5:38"** notation: approved and in place (time kept, no score).
4. **#null fix** (path-panel.js, one line): unseeded opponents show the school only; seeded opponents identical (1–33 verified).

## Scoring results (every published top-ten total)
```
1987: 1/10 published top-ten totals exact; scoring problems: 0
   1 Iowa State             published 133     model 132.5  residual -0.5
   2 Iowa                   published 108     model 108    exact
   3 Penn State             published 97.75   model 97.25  residual -0.5
   4 Oklahoma State         published 85.25   model 84.75  residual -0.5
   5 Bloomsburg             published 47.25   model 46.25  residual -1
   6 Clarion                published 46      model 46.5   residual +0.5
   7 North Carolina         published 42.75   model 42.25  residual -0.5
   8 Edinboro               published 38.25   model 37.75  residual -0.5
   9 Arizona State          published 35.75   model 36.25  residual +0.5
  10 Lehigh                 published 32.25   model 31.75  residual -0.5

1986: 5/10 published top-ten totals exact; scoring problems: 0
   1 Iowa                   published 158     model 158    exact
   2 Oklahoma               published 84.75   model 85.75  residual +1
   3 Oklahoma State         published 77.25   model 77.25  exact
   4 Iowa State             published 71      model 70     residual -1
   5 Penn State             published 47.25   model 46.25  residual -1
   6 North Carolina         published 38.75   model 38.75  exact
   7 Bloomsburg             published 37.75   model 37.75  exact
   8 Arizona State          published 36.5    model 36     residual -0.5
   9 Lehigh                 published 32.75   model 32.75  exact
  10 Michigan               published 32      model 33     residual +1

1985: 5/10 published top-ten totals exact; scoring problems: 0
   1 Iowa                   published 145.25  model 145.25 exact
   2 Oklahoma               published 98.5    model 98.5   exact
   3 Iowa State             published 70      model 70.5   residual +0.5
   4 Oklahoma State         published 56      model 56.5   residual +0.5
   5 Michigan               published 52      model 52     exact
   6 Arizona State          published 50.75   model 51.25  residual +0.5
   7 Penn State             published 46.75   model 46.75  exact
   8 Tennessee              published 32.5    model 34.5   residual +2
   9 Lehigh                 published 31.5    model 31.5   exact
  10 Bloomsburg             published 31      model 30.5   residual -0.5
```
1987: residuals are mostly −0.5 (7 of 10 teams). Diagnostics (not acted on): the residuals do not track tech-fall or superior-decision
counts (e.g. Edinboro −0.5 with no tech falls; Clarion +0.5 with three and no superior decisions); the bye-rule alternatives score 0/10.
Unexplained; no tuning applied. 1986: residuals ±0.5/±1. 1985: Tennessee +2, others ±0.5.

## 1985 — semifinalist wrestleback (new shape, approved)
Its own shape (`consFormat: 'sf-wrestleback'`): consolation 4-4-2-2 — each semifinalist's R1 v R2 victim → v quarterfinal losers (winners
clinch All-American) → pairs (losers 7th) → v semifinal losers (winners 3rd, losers 5th). New assembler `assemble_sf.py` and emitter
`gen_js_sf.py`; the engine and scorer take a shape table. **The generalization was proven: all 40 completed years byte-identical** after
the engine change and again after the scorer change.
| 1985 | |
|---|---|
| Venue · published champion | Oklahoma City · Iowa 145.25 |
| Bouts | 492 (28 wrestle-ins / 4 consolation wrestle-ins, 0 byes) |
| Replay · placers | 0 problems, 0 pending · 80/80 |
| Every SC1 seat | matches the semifinalist rule; crossovers: QF losers straight, SF losers crossed [1,0] — identical in all 10 weights |
| Team totals exact | 5/10 |
| Career | 157 careers extended, 191 new, 24 review cases; every existing ID kept (13,293/13,293) |
| Seeds not printed | none |
**Flagged, outside the list:** "17-1, 5:44" (1985) — score + stoppage time, no "TF" label; margin 15+ → tech fall by the existing
margin derivation, printed text in provenance.

## Why the batch stops at 1984 (read-only dry run)
1984 assembles with 0 problems (494 bouts, all results recognized, 80 placers) through the semifinalist pipeline. But:
* **Tech falls did not exist before 1985.** 20 championship-side 1984 bouts were won by 15+ points (printed as plain scores). The converter's
  standing margin rule would store them as tech falls; historically they were superior decisions (12+, 1976 rule) — a result-classification
  change for 1980–1984 that needs your decision.
* **Scoring 1980–1984**: no tech fall; **no bye-point rule** (it begins in 1985); superior decision ¾, major ½, fall 1 — a different scale
  and bye treatment from the approved 1985–87 model.
Proposed: for 1980–1984, (a) classify 15+ decisions as Superior Decision (no tech-fall derivation), (b) score with the 1976–1984 rules (no
bye points), validated against every published top ten. Awaiting approval.

## Open source ambiguity (completed years)
1986 has one tech fall derived from a printed score with no time ("19-4"); under the 1985–87 rules it could be a tech fall (1) or a
superior decision (¾). Left as stored; ¼ point at most.
