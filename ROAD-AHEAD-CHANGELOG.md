# Path to the Finals — Road Ahead (road1)

Adds a forward-looking championship projection to the existing read-only Path to the Finals panel.

## What changed
- `official-path.js`: adds pure `OfficialPath.project(core, book, wrestlerId)`.
- `path-panel.js`: renders a **ROAD AHEAD** section under the wrestler's completed/current journey.
- `tournament-central.css`: styles the new projection.
- `index.html`: exposes `TCEngine.roadFor(wrestlerId)` and cache-bumps the three changed assets.
- `repo-root/`: synchronized copies of the same production files.

## Behavior
- Lists possible opponents by future championship round.
- Opponent pools narrow automatically as OFFICIAL results are recorded.
- Uses only `core.describe()` and `core.routes()`; no duplicate NCAA routing table.
- Pigtail winner branches are derived from the same graph.
- If a wrestler has dropped to consolations, Road Ahead reports that instead of projecting a championship path.
- No Firebase writes, rules changes, scoring changes, or operator changes.
