# 1988–1995 team scoring (1987 pending) — report (Oct 6 2026)

## Model (approved; history layer: `HistoricalWrestlebackScoring` in historical-rules.js)
Built only from the documented rules (WrestlingStats "NCAA Wrestling Rules for Scoring",
https://www.wrestlingstats.com/ncaa/pdf/NCAA%20Bout%20Scoring.pdf):
| Component | 1990–1994 | 1995 | Rule |
|---|---|---|---|
| Championship advancement | 1 per win (Final 0) | same | 1955 / established |
| Consolation advancement | ½ per win (placement bouts 0) | same | 1974 |
| Fall, forfeit, default, DQ | 1 | 2 | 1988 scale / 1995 |
| Major decision | ½ | 1 | 1976 / 1995 |
| Tech fall | ¾ | — (replaced by match termination = 1) | 1988 / 1995 |
| Placement | 16-12-9-7-5-3-2-1 on the wrestleback schedule | same | 1979 |
| Byes | a bye counts as an advancement if the next bout is won | same | 1985 |
Bye reading: the 1985 rule exactly as already established and validated for 1996–2012 (`HistoricalRules.byeCredits`, unchanged): in a
weight with wrestle-ins the bracket counts as 64 lines (every non-wrestle-in entrant holds a first-round bye); otherwise printed byes only.
Disclosure: the first draft read the rule as printed byes only (7/50 exact over the five years); the established reading gives 38/50.
Both are shown below. No reconciliation adjustments, no per-year tuning; residuals are reported, not forced.

## Results against every published top-ten total (summary page of each year's WrestlingStats bracket)
Exact: 1988 6/10 · 1989 6/10 · 1993 7/10 · 1995 8/10 · 1994 9/10 · 1992 6/10 · 1991 7/10 · 1990 8/10 — **57/80** (1988–1995). 1993 not scored (held, see batch report).
```
1995: 8/10 published top-ten totals exact; scoring problems: 0
   1 Iowa                   published 134     model 134    exact   (adv 36, bonus 26, place 72)
   2 Oregon State           published 77.5    model 77.5   exact   (adv 20.5, bonus 15, place 42)
   3 Michigan State         published 69.5    model 69.5   exact   (adv 21.5, bonus 7, place 41)
   4 Arizona State          published 65.5    model 65.5   exact   (adv 21.5, bonus 8, place 36)
   5 Penn State             published 60.5    model 60.5   exact   (adv 13.5, bonus 10, place 37)
   6 Nebraska               published 60      model 59.5   residual -0.5   (adv 20.5, bonus 7, place 32)
   7 Oklahoma State         published 55.5    model 55.5   exact   (adv 22.5, bonus 3, place 30)
   8 North Carolina         published 54.5    model 54.5   exact   (adv 17.5, bonus 10, place 27)
   9 Illinois               published 52.5    model 53     residual +0.5   (adv 18, bonus 3, place 32)
  10 Oklahoma               published 51.5    model 51.5   exact   (adv 11.5, bonus 11, place 29)

1994: 9/10 published top-ten totals exact; scoring problems: 0
   1 Oklahoma State         published 94.75   model 94.75  exact   (adv 28, bonus 7.75, place 59)
   2 Iowa                   published 76.5    model 77     residual +0.5   (adv 26, bonus 7, place 44)
   3 Penn State             published 57      model 57     exact   (adv 17.5, bonus 3.5, place 36)
   4 Oregon State           published 49.5    model 49.5   exact   (adv 17, bonus 5.5, place 27)
   5 Michigan               published 41      model 41     exact   (adv 13.5, bonus 1.5, place 26)
   6 North Carolina         published 39      model 39     exact   (adv 15.5, bonus 2.5, place 21)
   7 Clemson                published 37.75   model 37.75  exact   (adv 9.5, bonus 3.25, place 25)
   8 Oklahoma               published 36      model 36     exact   (adv 12, bonus 4, place 20)
   8 Arizona State          published 36      model 36     exact   (adv 17.5, bonus 3.5, place 15)
  10 Iowa State             published 32.75   model 32.75  exact   (adv 13.5, bonus 3.25, place 16)

1992: 6/10 published top-ten totals exact; scoring problems: 0
   1 Iowa                   published 149     model 150    residual +1   (adv 37, bonus 20, place 93)
   2 Oklahoma State         published 100.5   model 100.5  exact   (adv 27, bonus 8.5, place 65)
   3 Penn State             published 89.25   model 90.25  residual +1   (adv 30.5, bonus 6.75, place 53)
   4 Iowa State             published 72.25   model 72.25  exact   (adv 25.5, bonus 7.75, place 39)
   5 Ohio State             published 64.5    model 64.5   exact   (adv 18, bonus 7.5, place 39)
   6 Arizona State          published 63      model 64     residual +1   (adv 18, bonus 6, place 40)
   7 Wisconsin              published 34.25   model 35.25  residual +1   (adv 11.5, bonus 3.75, place 20)
   8 Clarion                published 33.5    model 33.5   exact   (adv 11.5, bonus 1, place 21)
   9 NC State               published 33.25   model 33.25  exact   (adv 11, bonus 5.25, place 17)
  10 Northern Iowa          published 28.75   model 28.75  exact   (adv 14, bonus 2.75, place 12)

1991: 7/10 published top-ten totals exact; scoring problems: 0
   1 Iowa                   published 157     model 157.5  residual +0.5   (adv 42.5, bonus 14, place 101)
   2 Oklahoma State         published 108.75  model 108.75 exact   (adv 35, bonus 9.75, place 64)
   3 Penn State             published 67.5    model 67.5   exact   (adv 25.5, bonus 6, place 36)
   4 Ohio State             published 56.75   model 56.75  exact   (adv 19.5, bonus 6.25, place 31)
   5 Iowa State             published 51.75   model 51.75  exact   (adv 21.5, bonus 5.25, place 25)
   6 West Virginia          published 48.75   model 49.25  residual +0.5   (adv 14.5, bonus 6.75, place 28)
   7 Purdue                 published 39.75   model 39.75  exact   (adv 13.5, bonus 5.25, place 21)
   8 Minnesota              published 39      model 39     exact   (adv 16.5, bonus 4.5, place 18)
   9 CSU Bakersfield        published 38.5    model 38.5   exact   (adv 15, bonus 4.5, place 19)
  10 Nebraska               published 38      model 38.5   residual +0.5   (adv 15, bonus 5.5, place 18)

1990: 8/10 published top-ten totals exact; scoring problems: 0
   1 Oklahoma State         published 117.75  model 118.75 residual +1   (adv 37.5, bonus 13.25, place 68)
   2 Arizona State          published 104.75  model 105.25 residual +0.5   (adv 34, bonus 7.25, place 64)
   3 Iowa                   published 102.75  model 102.75 exact   (adv 30, bonus 11.75, place 61)
   4 Northwestern           published 66.75   model 66.75  exact   (adv 20, bonus 4.75, place 42)
   5 Nebraska               published 64.25   model 64.25  exact   (adv 25.5, bonus 6.75, place 32)
   6 Penn State             published 57.5    model 57.5   exact   (adv 27, bonus 5.5, place 25)
   7 Oklahoma               published 48.25   model 48.25  exact   (adv 16.5, bonus 1.75, place 30)
   8 Indiana                published 45.5    model 45.5   exact   (adv 22, bonus 4.5, place 19)
   9 Iowa State             published 43.5    model 43.5   exact   (adv 18, bonus 0.5, place 25)
  10 Minnesota              published 42.25   model 42.25  exact   (adv 15.5, bonus 2.75, place 24)

```

## Sensitivity: reading of the 1985 bye rule (everything else identical)
```
  1995 8/10   established 1996-2012 reading (MODEL)  Iowa✓ Nebraska-0.5 Oregon✓ Oklahoma✓ Michigan✓ North✓ Arizona✓ Illinois+0.5 Penn✓ Oklahoma✓
  1995 1/10   printed byes only                      Iowa-4 Nebraska-2 Oregon-3 Oklahoma-4 Michigan-2.5 North-3 Arizona-3.5 Illinois-3 Penn-1 Oklahoma✓
  1995 0/10   no bye points                          Iowa-4 Nebraska-2.5 Oregon-3 Oklahoma-4 Michigan-4.5 North-3 Arizona-3.5 Illinois-3 Penn-1 Oklahoma-1
  1994 9/10   established 1996-2012 reading (MODEL)  Oklahoma✓ North✓ Iowa+0.5 Clemson✓ Penn✓ Oklahoma✓ Oregon✓ Arizona✓ Michigan✓ Iowa✓
  1994 2/10   printed byes only                      Oklahoma-4.5 North-2.5 Iowa-2 Clemson✓ Penn-1.5 Oklahoma✓ Oregon-3 Arizona-4 Michigan-2 Iowa-3
  1994 1/10   no bye points                          Oklahoma-4.5 North-2.5 Iowa-2 Clemson-1 Penn-1.5 Oklahoma✓ Oregon-3 Arizona-4 Michigan-2.5 Iowa-4
  1992 6/10   established 1996-2012 reading (MODEL)  Iowa+1 Arizona+1 Oklahoma✓ Wisconsin+1 Penn+1 Clarion✓ Iowa✓ NC✓ Ohio✓ Northern✓
  1992 4/10   printed byes only                      Iowa-2 Arizona-1 Oklahoma✓ Wisconsin✓ Penn-2 Clarion✓ Iowa-2 NC✓ Ohio-2 Northern-2
  1992 4/10   no bye points                          Iowa-2 Arizona-1 Oklahoma✓ Wisconsin✓ Penn-2 Clarion✓ Iowa-2 NC✓ Ohio-2 Northern-2
  1991 7/10   established 1996-2012 reading (MODEL)  Iowa+0.5 West+0.5 Oklahoma✓ Purdue✓ Penn✓ Minnesota✓ Ohio✓ CSU✓ Iowa✓ Nebraska+0.5
  1991 0/10   printed byes only                      Iowa-5 West-2 Oklahoma-6 Purdue-1.5 Penn-6 Minnesota-3 Ohio-4 CSU-3 Iowa-4 Nebraska-2
  1991 0/10   no bye points                          Iowa-5.5 West-2 Oklahoma-6 Purdue-1.5 Penn-6 Minnesota-3 Ohio-4 CSU-3 Iowa-4 Nebraska-2
  1990 8/10   established 1996-2012 reading (MODEL)  Oklahoma+1 Penn✓ Arizona+0.5 Oklahoma✓ Iowa✓ Indiana✓ Northwestern✓ Iowa✓ Nebraska✓ Minnesota✓
  1990 0/10   printed byes only                      Oklahoma-6 Penn-5 Arizona-6.5 Oklahoma-3 Iowa-4 Indiana-5 Northwestern-4 Iowa-3.5 Nebraska-6 Minnesota-3
  1990 0/10   no bye points                          Oklahoma-6 Penn-5 Arizona-6.5 Oklahoma-3 Iowa-4 Indiana-5 Northwestern-4 Iowa-3.5 Nebraska-6 Minnesota-3
```

## Observations (not acted on)
* Every residual is ±0.5 or ±1 — the same size as the unexplained 1996–1998 residuals. No source itemizes them.
* 1992 residuals are all +1 (Iowa, Penn State, Arizona State, Wisconsin); 1990 Oklahoma State +1, Arizona State +0.5. A systematic
  rule detail may exist for 1992 (e.g. how a specific default or bye was scored) — not investigated further without a source.
* 1995 prints tech falls as "MT" only (match termination, 1 point by the 1995 rule) — scored as such; 1994 prints "TF" (¾).

## 1989 (added this step; same model, 1988 bonus scale)
```
1989: 6/10 published top-ten totals exact; scoring problems: 0
   1 Oklahoma State         published 91.25   model 91.25  exact
   2 Arizona State          published 70.5    model 70.5   exact
   3 Iowa State             published 63      model 63     exact
   4 Oklahoma               published 61      model 62     residual +1
   5 Michigan               published 53.25   model 54.75  residual +1.5
   6 Iowa                   published 52.5    model 52.5   exact
   7 Minnesota              published 45.75   model 45.75  exact
   8 Northwestern           published 40.5    model 40.5   exact
   9 Edinboro               published 40      model 40.5   residual +0.5
  10 Penn State             published 39.75   model 40.25  residual +0.5
```
Bye-rule sensitivity 1989: established reading 6/10; printed byes only 0/10; no bye points 0/10.

## 1993 (added; same model, 1988 scale)
```
1993: 7/10 published top-ten totals exact; scoring problems: 0
   1 Iowa                   published 123.75  model 123.75 exact
   2 Penn State             published 87.5    model 87.5   exact
   3 Nebraska               published 79.5    model 79.5   exact
   4 Arizona State          published 72.5    model 74.5   residual +2
   5 Ohio State             published 64      model 64     exact
   6 Iowa State             published 58.25   model 58.25  exact
   7 NC State               published 38.5    model 39     residual +0.5
   8 Fresno State           published 37.75   model 38.75  residual +1
   9 Minnesota              published 36.5    model 36.5   exact
  10 Cornell                published 35      model 35     exact
```

## 1988 (added; same model, 1988 scale)
```
1988: 6/10 published top-ten totals exact; scoring problems: 0
   1 Arizona State          published 93      model 93     exact
   2 Iowa                   published 85.5    model 85.5   exact
   3 Iowa State             published 83.75   model 83.75  exact
   4 Oklahoma State         published 80.5    model 80.5   exact
   5 Penn State             published 71.5    model 72     residual +0.5
   6 Michigan               published 62.5    model 63.5   residual +1
   7 Edinboro               published 53.5    model 53     residual -0.5
   8 Oklahoma               published 45      model 45.5   residual +0.5
   9 Ohio State             published 39.75   model 39.75  exact
  10 NC State               published 36      model 36     exact
```

## 1987 — not scored (pending approval of the 1985–1987 rules; see BATCH-REPORT.md)

## 1999 MT correction (approved, narrowly scoped)
Rule: 1997 — tech fall with back points 1.5; match termination (15+ without back points) 1 point. 1999 bouts printed "MT":
| Weight | Round | Bout | Printed |
|---|---|---|---|
| 165 | Championship R1 | Don Pritzlaff (Wisconsin) over Brian Wood | MT 19-4, 7:00 |
| 285 | Championship R1 | Wes Hand (Iowa) over Bill Bell | MT 23-8, 7:00 |
Applied as sourced `printed-bonus` adjustments (-0.5 each), the mechanism used for 1996–1998. Bout results, bracket, placements,
Career and identities unchanged. Team totals before → after: **Iowa 101 → 100.5** (published 100½ — NCAA News, March 29 1999; now
exact), **Wisconsin 18 → 17.5** (rank T-24 → 25; Indiana T-24 → 24). No other team changes.
