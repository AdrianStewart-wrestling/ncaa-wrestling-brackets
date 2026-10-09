/* ============================================================================
   33 DEEP · TOURNAMENT CENTRAL — SITE SWITCHES
   Read by index.html and home.html. Change a value here, upload this one file, done.

   publicMaster
     false  (preseason)  2026 MASTER is hidden from public navigation. It is reachable only on the
                         operator page, master.html (index.html?ops=1).
     true   (tournament) Everyone sees 2026 MASTER read-only: brackets, team scores, All-Americans,
                         Path to the Finals. The homepage shows the 2026 Master card again.

   Either way, recording / corrections / imports still require an authorized operator sign-in, and the
   operator sign-in button and admin tools appear only on master.html.
   ============================================================================ */
window.TC_CONFIG = Object.freeze({
  publicMaster: false
});
