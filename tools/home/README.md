# tools/home — homepage candidate tooling (not loaded by the site)

| File | Purpose |
|---|---|
| `build_home_data.js` | Generates `home-candidate-data.js` (repo root) from the frozen TC-1980-2026 baseline via the replay harness. Checks every homepage claim (46 championships, era groupings, 114/160 validation, six documented exceptions, all Randy Lewis 1981 story facts); any failed check exits 1 and writes nothing. Run: `node tools/home/build_home_data.js` |
| `test_deeplinks.py` | 25 tests for the `index.html` deep-link router, comparing against `baseline/index-pre-router.html` served side by side. Run: `python3 tools/home/test_deeplinks.py` |
| `test_home_candidate.py` | 14 functional tests for `home-candidate.html` (hub, links into Tournament Central, page weight, fallback, phone overflow). Run: `python3 tools/home/test_home_candidate.py` |
| `stubs.py` | Firebase stubs (signed-out visitor) used by both tests; nothing touches Firestore. |
| `baseline/index-pre-router.html` | `index.html` exactly as in TC-1980-2026, before the router (the test baseline). |

Both tests need Python Playwright with Chromium. Re-run `build_home_data.js` whenever the historical baseline changes.
