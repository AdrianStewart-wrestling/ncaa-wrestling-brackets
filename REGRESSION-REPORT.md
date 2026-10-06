# Regression report (Oct 6 2026)

Baseline: the delivered TC-1994-2026 package installed on a clean copy of the original repo. Compared field by field with
`tools/pre1999/regress.js` (records = every bout result and routing key, placers, replay problems, pending, bye credits, team totals).
```
1994: CHANGED totals -- totals changed for 62 team(s): Oklahoma State 98->94.75, Iowa 78.5->77, Penn State 60->57, Oregon State 53->49.5, Oklahoma 45->36, Clemson 41->37.75, North Carolina 40->39, Arizona State 39.5->36, Michigan 39->41, Minnesota 31.5->29.25, Iowa State 31->32.75, Northern Iowa 30.5->30 ...
1995: CHANGED totals -- totals changed for 51 team(s): Iowa 138.5->134, Oregon State 74->77.5, Michigan State 64->69.5, Arizona State 63->65.5, Nebraska 61->59.5, Penn State 61->60.5, Oklahoma 52.5->51.5, North Carolina 50.5->54.5, Oklahoma State 50.5->55.5, Illinois 49.5->53, Minnesota 38.5->35, Edinboro 35.5->36 ...
1996: identical
1997: identical
1998: identical
1999: CHANGED totals -- totals changed for 2 team(s): Iowa 101->100.5, Wisconsin 18->17.5
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
* 29 of 32 years identical in every field (1996–1998, 2000–2026).
* 1999: only the approved MT correction (2 teams' totals). Every record, placer and Career identity identical.
* 1994–1995: records, placers and bye credits identical; team totals now come from the approved 1990–1995 model (the baseline values
  were the harness's internal modern-rule figures, which the site never displayed — it showed "pending").

Data regeneration (updated tools, from the PDFs): 1994, 1995, 1996, 1997, 1990, 1992 byte-identical to the shipped data and provenance;
1998 identical apart from its first comment line (venue wording from the earliest emitter version; pre-existing). Extraction of
1996–1998 identical to the previous extractor.

Parser changes (all additive; each proven not to change any completed year):
1. wrestle-in pages: "Name, School" accepted when no "Name - School" form is present (1990–1993 print)
2. wrestle-in results: multi-word surname prefixes ("St. John 5-1", 1991)
3. pre-1993 overtime/criteria notation ("1-1, 3-2" → Dec 3-2 TB; "8-8, 3-3 Cr 10" / "1-1, 1-1, Cr 10" → Dec 3-3 UTB; regulation must be tied)
4. **Not in the approved list — flagged:** a seed whose closing bracket is cut off in the print ("Cal State-Bakersfield [10", 1991
   190 lbs, Paul Keysaw). Without it the school name was corrupted ("Cal State-Bakersfield [10") and 9 team points went to a phantom team.
   Same class as the cut-off times already handled; no completed year changes.
5. assembler: WB1 seat check is order-independent within a pair (1993 126 prints the R2 victim above the R1 victim); printed sides are
   kept as facts (engine reads them; defaults unchanged); source exceptions declared in tools/pre1999/wb_exceptions.json (1991 118 only).
