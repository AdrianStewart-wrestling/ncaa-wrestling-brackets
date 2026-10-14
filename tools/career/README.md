# NCAA Career Registry tools

Build (from the repo root):
1. `node tools/career/appearances.js` writes appearances.json: every appearance in every year, read from the real engine through tools/pre1999/harness.js.
2. `node tools/career/build_registry.js --prev historical-careers.js` writes tools/career/out/historical-careers.js and registry_report.txt.
3. `node tools/career/test_registry.js` runs the regression guard.

Inputs:
- career-decisions.txt: every reviewed LINK/SPLIT decision, R1-R258 plus the lettered series (267). R186-R193 were restored on Oct 14, 2026, and R194-R258 come from CAREER-DECISIONS-R194-R258.txt (Oct 13, 2026).
- ../pre1940/career-decisions-pre1940.txt: the 1928-1939 series (P1, Harold Byrd). The builder reads both files, 268 decisions in all.
- school_aliases.json: spelling-only aliases of one institution. Two of them, Minnesota State -> Minnesota State-Mankato and Moorhead State -> Minnesota State-Moorhead, link careers but sit outside displayOrder, so the published registry's display map is unchanged. The career card shows them as one school through index.html (CAREER_SAME_SCHOOL).
- The previous registry: career IDs are persistent; the first-issued ID wins a merge, and every retired ID stays an alias.

Status (Oct 14, 2026): a clean checkout reproduces every published career, ID, appearance and alias.
- The byte-for-byte test fails until the rebuilt registry is published. The live file carries the provenance tags and order of the Oct 13 patch.
- tools/home/build_registry.js, career-decisions.txt, test_registry.js and merge_fixture.json are copies of these files.
