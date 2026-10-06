# 1993 and 1988 — researched bout resolutions (Oct 6 2026)

**Both years completed to the normal standard.** The two held same-surname bouts are resolved as BOUT-SPECIFIC researched exceptions
(tools/pre1999/bout_resolutions.json). No engine rule and no general same-surname rule was added; an entry applies only when year,
weight, round, both wrestlers' full names and the printed text all match, and only to that bout. The primary print's result is
preserved; the external source is used solely to identify the winner.

## The two resolutions
| | 1993 275, consolation R1 | 1988 275, consolation R2 |
|---|---|---|
| Primary print (WrestlingStats) | "Green 8-7" | "Seiler 3-3, 3-3 Cr" |
| Wrestlers | Adam Green (Penn) v Darrick Green (Central Michigan) | Todd Seiler (Wisconsin) v Randy Seiler (Lake Superior) |
| Resolved | **Adam Green** def. Darrick Green, Dec 8-7 | **Todd Seiler** def. Randy Seiler, criteria after 3-3, 3-3 (stored Dec 3-3 UTB; criteria points not printed) |
| External evidence (winner only) | Wrestling.Guru profile 28886 (Darrick Green): 1993 NCAA consolation loss to Adam Green (Pennsylvania), DEC 7-8 | Wrestling.Guru profile 105176 (Todd Seiler): Todd defeated Randy in their 1988 NCAA consolation meeting |
| Name spelling | as printed | "Randy Seiler" as printed; Wrestling.Guru's "Sieler" noted in provenance only |
Research supplied by you; the build environment could not retrieve the Wrestling.Guru pages, which the provenance states. Neither result can
be cross-checked against team scoring (none of the four schools is in its year's published top ten).

## Per-year results
| | 1993 | 1988 |
|---|---|---|
| Venue · published champion | Iowa State · Iowa 123.75 | Iowa State · Arizona State 93 |
| Bouts | 554 | 581 |
| Replay · placers | 0 problems, 0 pending · 80/80 | 0 problems, 0 pending · 80/80 |
| Team totals exact | 7/10 (Arizona State +2, NC State +0.5, Fresno State +1) | 6/10 (Penn State +0.5, Michigan +1, Edinboro −0.5, Oklahoma +0.5) |
| Career | 258 careers extended; 71 new careers | 249 extended; 105 new |
Career: every existing career ID kept (12,260/12,260); no published career merged or split; 47 new review cases. Registry continuous
1987–2026: 12,943 appearances. Resolved bouts in Career: Adam Green 1991–1993 (Penn) includes the 1993 win; Darrick Green 1992–1993;
Todd Seiler 1987–1989 (Wisconsin, automatic link); Randy Seiler single appearance. Correction to the previous report: Todd Seiler's 1989
appearance is at **190** lbs (not 167 — that came from a garbled search snippet).

## Changes
* `bout_resolutions.json` (new) + the lookup in assemble_wb.py (consulted only when a printed result names neither wrestler uniquely).
* gen_js_wb.py: criteria printed without points ("3-3, 3-3 Cr") — same storage as the approved criteria form; flagged as a narrow extension.
* install_year.py: inserts a year in the middle of the year lists (1993 before 1994; 1988 before 1989).
* career-panel.js: coverage text "1987–2026".
Every previously completed year regenerates from its PDF byte-identically and replays identically (REGRESSION-REPORT.md).

## Found, not changed (pre-existing; for your decision)
Path to the Finals shows "#null" beside unseeded opponents in pre-2019 history years (e.g. 1999, 2005, 2012 in the ORIGINAL repo, before
any of this work). Display-only, in path-panel.js; a one-line fix if you want it.

## Status of the decade
Complete: 1987 (scoring pending), 1988, 1989. Held: 1986 (167 Wilson bout). Not started: 1980–1985 (semifinalist-wrestleback shape).
Awaiting approval: 1985–1987 scoring rules.
