# FROZEN CHECKPOINT — HISTORY-TEAMSCORES-2016

Historical Team Scores, working 2016 implementation. Frozen before all-years validation.
Verify: `sha256sum -c SHA256SUMS`. Previous baseline HISTORY-100-OF-100 remains unchanged.

Acceptance (authoritative localhost official-scoring.js + tournament-core.js + official-path.js):
- 2016: 72/72 published NCAA final team totals exact. Penn St. 123, Oklahoma St. 97.5, Ohio State 86,
  Virginia Tech 82 (documented -1 reconciliation), Iowa 81 (documented -1 reconciliation), Michigan State 0,
  The Citadel 0, VMI 0, Northern Colorado -1 (documented reconciliation).
- UI: History -> Team Scores -> team -> wrestler -> Path to the Finals with per-bout point contributions.
- official-scoring.js: optional opts.schools (Option A). Omitted -> byte-identical output (18,546-case regression).
  OFFICIAL does not pass it. History passes the complete field.
- Replay matrix: 100/100 unchanged. Frozen bracket builder unchanged.

Deferred (not part of this milestone): KI-1 seed-label orientation, KI-2 injury-default representation (KNOWN-ISSUES.md).
