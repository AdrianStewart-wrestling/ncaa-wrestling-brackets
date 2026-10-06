# Regression report — 1985–1987 scoring, Superior Decision, #null, 1985 (Oct 6 2026)

Baseline: the delivered TC-1986-2026 package on a clean copy of the original repo. Field by field (tools/pre1999/regress.js):
```
1986: CHANGED totals -- totals changed for 36 team(s): Iowa 156.25->158, Oklahoma 84.5->85.75, Oklahoma State 76.75->77.25, Iowa State 69.75->70, Penn State 45.75->46.25, North Carolina 38.5->38.75, Bloomsburg 36.25->37.75, Michigan 32.75->33, Lehigh 32.5->32.75, Nebraska 27.5->27.75, Army 26.5->26.75, Syracuse 24.75->25 ...
1987: CHANGED totals -- totals changed for 30 team(s): Iowa State 131.25->132.5, Iowa 107->108, Penn State 96.5->97.25, Oklahoma State 83.75->84.75, Bloomsburg 45.75->46.25, Clarion 45.75->46.5, North Carolina 42->42.25, Edinboro 37.5->37.75, Arizona State 35.75->36.25, CSU Bakersfield 31.75->32.5, Lehigh 31.5->31.75, Wisconsin 28.25->28.5 ...
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
* 38 of 40 years identical in every field. 1986 and 1987: records, placers, problems and bye credits identical; team totals now come from the
  approved 1985–87 model (the baseline values were the harness's internal placeholder; the site showed "pending").
* Engine generalization (two wrestleback shapes): all 40 years byte-identical after the change, and again after the scorer change.
* Display: "Sup. Dec." only for 1976–1987 cores (1989, 1999, 2016 still "MD"); #null fix: seeded opponents 1–33 render identically.
* Career: every published career ID kept (13,293/13,293). New year 1985: 492 bouts, 0 problems, 80 placers.
