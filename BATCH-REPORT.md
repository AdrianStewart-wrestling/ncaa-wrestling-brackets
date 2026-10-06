# 1981 (supplement + printed vacancies) and 1980 — report (Oct 6 2026)

**Completed: 1981. Stopped at 1980** on a genuinely new issue (three consolation wrestle-ins printed with the winner but no result). Nothing
from 1980 is installed. This package is therefore **TC-1981-2026** (not TC-1980-2026); its manifest is relative to the live 1982–2026 baseline.

## 1981 134 — source supplement (approved)
`tools/pre1999/bout_supplements.json`: **Jim Gibbons (Iowa State) def. Cliff Porter (Oregon), Fall 7:09** — from the NCAA annual "1982 NCAA
Wrestling" (55th ed., 1981 results), 134-pound PRELIMINARY ROUND: "Gibbons (Iowa State) pinned Porter (Oregon), 7:09" (nwhof.org/guides/45).
Provenance records: the NCAA annual as the source; the WrestlingStats omission (its wrestle-in page lists three); the annual's agreement with
WrestlingStats on the other three 134 preliminary bouts and on Anderson's results (pinned Rosenstein, d. Landrum 17-3, d. Selmon by forfeit);
and that the bout explains the Bower–Porter consolation wrestle-in under the normal semifinalist routing.
**Name note:** the approval text said "Ed Gibbons"; the WrestlingStats draw line, the champion, and the annual's first-round "Gibbons (Iowa
State) pinned Bower, 2:29" (= the bracket's R1 Jim Gibbons def. Mark Bower, Fall 2:29) all identify **Jim Gibbons** — entering "Ed Gibbons"
would have created a wrestler who appears nowhere else. Recorded as Jim Gibbons, with this note in provenance.

## 1981 printed vacancies (approved; exactly as printed; source-specific, no general rule)
* **134:** Anderson won his quarterfinal by forfeit over Selmon. Printed "Bye / Bye" first-round consolation pair preserved; **Steve Rosenstein
  and Thomas Landrum** (Anderson's R1 and R2 victims) are recorded as structurally eligible but absent from the printed wrestleback — the source
  gives no reason; Selmon's quarterfinal-loser seat printed Bye. The vacancies carry forward as byes: round 3 "Baza FFT" (advanced, no
  opponent); 7th place "Randy Lewis, Iowa FFT" / summary "(WFT)" — 7th with no opponent; **no 8th place** (none printed, none manufactured).
* **190:** Atiyeh forfeited his quarterfinal; his seat printed Bye; "Milligan FFT" = Milligan advanced past the vacant seat (no bout).
* No consolation bouts, wins or losses were manufactured: the absent wrestlers' Paths end where the print ends them (e.g. Rosenstein: one R32
  loss; Landrum: R32 win, R16 loss). Each printed bye is cross-checked against the byes the vacancies produce (build fails on any mismatch).
* Implementation: separate assembler path for `printedVacancies` weights (items placed by printed position); engine vacancy carry-forward
  (only when facts list vacant seats); a placement decided by a printed bye counts as that placement (placement credit only — no bout,
  advancement or bonus). All 44 completed years byte-identical after each addition.
* Path display: a decided bout with no opponent now reads "No opponent (printed forfeit / bye)" and the finish line "7th — by forfeit in the
  7th Place (no opponent printed)" (it had shown "Opponent not decided yet" and thrown an error); unchanged for every other year.
* **Pattern watch:** 1980 has no consolation byes and no quarterfinal forfeits (only an ordinary R1 default at 134) — no repeat. The two 1981
  cases remain source-specific (they also differ: only 134 lost an eligible pair).

## 1981 results
| | |
|---|---|
| Venue · published champion | Princeton · Iowa 129.75 |
| Bouts | 487 (29 wrestle-ins incl. the supplement / 3 consolation wrestle-ins; 3 printed byes) |
| Replay · placers | 0 problems, 0 pending · **79/79** published placers (no 8th at 134) |
| Superior decisions | 52 (25 by 15+); 0 tech falls; 0 bye points |
| Team totals exact | **9/10** — Iowa −1 |
| Career | 165 careers extended, 184 new, 19 review cases; every existing ID kept (14,683/14,683) |
| Seeds not printed | 150 #8, 177 #11 (none placed; not derivable) |
```
1981: 9/10 published top-ten totals exact; scoring problems: 0
   1 Iowa                   published 129.75  model 128.75 residual -1
   2 Oklahoma               published 100.25  model 100.25 exact
   3 Iowa State             published 84.75   model 84.75  exact
   4 Oklahoma State         published 68.5    model 68.5   exact
   5 Lehigh                 published 38      model 38     exact
   6 Penn State             published 31.75   model 31.75  exact
   7 Syracuse               published 30.5    model 30.5   exact
   8 Central Michigan       published 28.75   model 28.75  exact
   9 Auburn                 published 25.75   model 25.75  exact
  10 Oregon State           published 25.25   model 25.25  exact
```
Observation (not acted on): Iowa's −1 equals the 1-point forfeit bonus that Randy Lewis's printed "(WFT)" 7th place would carry if the NCAA
scored it as a forfeit win; the model credits the placement only, as instructed (no manufactured win). Bye-reading check:
```
1981 0/10   established 1996-2012 reading                    Iowa+7 Penn+3 Oklahoma+4.5 Syracuse+3 Iowa+7 Central+2 Oklahoma+4 Auburn+3 Lehigh+4 Oregon+1.5
1981 9/10   printed byes only                                Iowa-1 Penn✓ Oklahoma✓ Syracuse✓ Iowa✓ Central✓ Oklahoma✓ Auburn✓ Lehigh✓ Oregon✓
1981 9/10   no bye points (MODEL: no bye rule before 1985)   Iowa-1 Penn✓ Oklahoma✓ Syracuse✓ Iowa✓ Central✓ Oklahoma✓ Auburn✓ Lehigh✓ Oregon✓
```

## Why the batch stops at 1980
1980 assembles with 0 problems in all 10 weights (498 bouts). Four results are not convertible:
* **Consolation wrestle-ins printed with the winner but no result** — 126 "Bohay" (def. Alan Reto), 142 "Hogan" (def. Joe Galli), 150 "Boss"
  (def. Tom Elcott). The winner is printed; the result TYPE (decision / major / superior / fall …) is not — and it decides bonus points.
  Options: (a) record the bout as a win with result "not printed" (a decision with no score, no bonus credited, flagged in provenance);
  (b) supplement the results from the NCAA annual's 1980 edition (not yet located) before including 1980.
* **126 5th place** printed "4-" (cut off); the same PDF's summary page prints "5th: Byron McGlathery … (4-1)". Proposed: take the score from
  the summary page, recording both.

## Regression
```
1982: identical
1983: identical
1984: identical
1985: identical
1986: identical
1987: identical
1988: identical
1989: identical
1990: identical
1991: identical
1992: identical
1993: identical
1994: identical
1995: identical
1996: identical
1997: identical
1998: identical
1999: identical
2000: identical
2001: identical
2002: identical
2003: identical
2004: identical
2005: identical
2006: identical
2007: identical
2008: identical
2009: identical
2010: identical
2011: identical
2012: identical
2013: identical
2014: identical
2015: identical
2016: identical
2017: identical
2018: identical
2019: identical
2021: identical
2022: identical
2023: identical
2024: identical
2025: identical
2026: identical
```
