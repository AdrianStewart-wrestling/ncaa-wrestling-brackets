# Batch 1993 → 1990 (+ approvals) — report (Oct 6 2026)

**Completed: 1992, 1991, 1990** (plus 1994–1995 now scored). **Held: 1993** — one bout at 275 has no identifiable winner in any
available source (see below). Stopped after 1990 as instructed; 1989 not started.

## Per-year results
| | 1995 | 1994 | 1993 | 1992 | 1991 | 1990 |
|---|---|---|---|---|---|---|
| Venue · published champion | Iowa · Iowa 134 | N. Carolina · Okla. St. 94.75 | Iowa State · Iowa 123.75 | Oklahoma City · Iowa 149 | Iowa · Iowa 157 | Maryland · Okla. St. 117.75 |
| Bouts | 550 | 546 | **held** | 550 | 558 | 572 |
| Byes (R1 + consolation) | 12 | 15 | — | 4 | 3 | 0 |
| Wrestle-ins / cons. wrestle-ins | 16 / 6 | 16 / 5 | — | 10 / 4 | 16 / 5 | 24 / 8 |
| Replay | 0 problems, 0 pending | 0 / 0 | — | 0 / 0 | 0 / 0 | 0 / 0 |
| Placers vs summary page | 80/80 | 80/80 | — | 80/80 | 80/80 | 80/80 |
| Team totals exact (published top ten) | 8/10 | 9/10 | — | 6/10 | 7/10 | 8/10 |
| Residuals | Nebraska −0.5, Illinois +0.5 | Iowa +0.5 | — | Iowa, Penn St., Arizona St., Wisconsin +1 each | Iowa, W. Virginia, Nebraska +0.5 | Okla. St. +1, Arizona St. +0.5 |
| Career: extended / new / review cases | 151 / 178 / 18 | 154 / 172 / 14 | — | 79 / 248 / 12 | 155 / 179 / 18 | 155 / 189 / 18 |
| Tech falls as printed | 13 MT | 16 TF | — | 23 TF | 20 TF | 15 TF |
| Source ambiguities | seeds not printed 126 #12, 158 #2, #5; one R2 time cut off | seed not printed 142 #7 | 275 "Green 8-7" | seed not printed 142 #3 | 1991 118 printed pairing (exception, preserved); two R1 times cut off; one seed bracket cut off (190, fixed in parsing) | seed not printed 150 #8; one R2 time cut off; 32 pre-1993 overtime/criteria results |
Seeds not printed are declared "not printed; not derived" (none of those wrestlers placed, so the summary page cannot supply them).
Every published career ID kept (10,540/10,540); registry now 1990–1992 and 1994–2026: 11,545 appearances, 5,990 careers.

## Approved items delivered
1. **Parser capabilities** (additive; proven): "Name, School" wrestle-in lines; multi-word surnames; pre-1993 overtime/criteria
   notation (26 overtime decisions "1-1, 3-2" → Dec 3-2 TB; 6 criteria decisions → Dec 3-3 UTB; the printed text and meaning are in
   each bout's provenance). Plus one flagged fix outside the list: a cut-off seed bracket (1991 190) — see REGRESSION-REPORT.md.
2. **1991 118**: printed WB1 pairing preserved exactly (Thackthay v Smith, Casey v Grubbs), declared in
   tools/pre1999/wb_exceptions.json and recorded in the provenance of all 8 WB1 bouts. It replays with 0 problems and reproduces all 8
   published placers (Rosselli/Derengowski/Henson/Vidlak …), so no stop was needed.
3. **1990–1995 scoring**: explicit history-layer model from the documented rules — 38/50 published totals exact. SCORING-REPORT.md.
4. **1999 MT**: 2 bouts (Pritzlaff 165, Hand 285); Iowa 101 → 100.5 (= published), Wisconsin 18 → 17.5. SCORING-REPORT.md.

## 1993 — investigated, held
All 9 other weights assemble with 0 problems (126's swapped pair order is handled). At 275, WB1 bout 4 is Adam Green (Penn) v Darrick
Green (Central Michigan), printed only "Green 8-7". Its winner lost his next bout (to Woodill) and never appears again by full name, so
bracket progression cannot identify him; the NWHOF bracket page carries the same compiled text; no independent source found. Every
other 275 problem cascades from this one bout. Choosing a winner would be a guess (it moves ½ team point between Penn and Central
Michigan and changes both Greens' records), so 1993 is held. Options: (a) an outside source for that bout (e.g. a 1993 Penn or Central
Michigan season report or newspaper); (b) approve a "winner unknown" representation (both Greens shown, bout unattributed, ½ point
not credited) — a new engine capability; (c) leave 1993 out.

## Display changes
Team scores for 1990–1995 now appear, with an explanation generated from the model ("How these scores work (1990 NCAA rules)").
Quarter points display exactly (118.75; halves unchanged — proven identical for every half-point value). Career coverage text says
1990–1992 and 1994–2026.
