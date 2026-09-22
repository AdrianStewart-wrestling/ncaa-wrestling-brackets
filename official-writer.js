/* ============================================================================
   OFFICIAL WRITER — Phase 3C (record) + Phase 3D (correct / clear)   (pure; no DOM, no Firebase)
   Turns "record / correct / clear this result" into the exact documents to write, WITHOUT touching the live book.

   • Every request is validated by the approved tournament-core.js on a CLONE of the official book.
     There is NO routing or dependency logic in this file: what a correction or clear invalidates comes from the core
     (core.preview / core.clear / core.correct — the same engine that replays through the real applyPick), and is
     cross-checked here against core.dependentsOf() before any write is produced.
   • Result documents reuse the officialResults id scheme (weight_bracket_roundIndex_matchIndex) and carry BOTH the identity
     fields (winnerId/loserId — authoritative) and the legacy-compatible fields (winnerSlot/winnerName/winnerSchool/…).
   • The caller (index.html) supplies `stamp` (a Firestore serverTimestamp sentinel) and performs the single atomic write.
     The live book changes only after the server confirms.
   ============================================================================ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OfficialWriter = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function fail(code, message, extra) { return Object.assign({ ok: false, code: code, message: message }, extra); }

  function cloneBook(core, book) {
    const r = core.fromRecords(core.toRecords(book));
    return r.problems.length ? null : r.book;
  }

  // The result document for a decided bout (identity + legacy-compatible fields). rec.revision decides create (1) vs update (n+1).
  function makeResultDoc(core, scratch, rec, email, stamp) {
    const d = core.describe(scratch, rec.boutId), lg = d.legacy;
    const winner = d.winnerSlot === 'a' ? d.a : d.b;
    const docId = core.legacyDocId(rec.weight, rec.key);
    const resultDoc = {
      boutId: rec.boutId, weight: rec.weight,
      bracket: lg.bracket, round: lg.round, roundIndex: lg.roundIndex, matchIndex: parseInt(rec.key.split(':')[2], 10),
      winnerId: rec.winnerId, loserId: rec.loserId,
      winnerSlot: d.winnerSlot, winnerName: winner.name, winnerSchool: winner.school,
      resultType: rec.resultType,
      recordedAt: stamp, recordedBy: email, source: 'central', revision: rec.revision
    };
    if (rec.score) resultDoc.score = rec.score;
    if (rec.time) resultDoc.time = rec.time;
    return { docId: docId, resultDoc: resultDoc };
  }

  /* ---------------------------------------------------------------- record (3C) */
  // core: TournamentCore instance; book: the live OFFICIAL book (never modified here)
  // req: { boutId, winnerId, resultType, score, time }   ctx: { email, stamp }
  function buildRecordWrite(core, book, req, ctx) {
    req = req || {}; ctx = ctx || {};
    const email = typeof ctx.email === 'string' ? ctx.email.trim().toLowerCase() : '';
    if (!email) return fail('not_operator', 'Sign in as an authorized operator to record results.');
    const scratch = cloneBook(core, book);
    if (!scratch) return fail('internal', 'The official results on screen are inconsistent, so recording is switched off. Press Refresh.');

    const res = core.record(scratch, {
      boutId: req.boutId, winnerId: req.winnerId, resultType: req.resultType, score: req.score, time: req.time,
      recordedBy: email, source: 'central'
    });
    if (!res.ok) return res;                                   // { code, message, errors? } straight from the core

    const rec = res.record;
    const made = makeResultDoc(core, scratch, rec, email, ctx.stamp);
    const logDoc = {
      boutId: rec.boutId, weight: rec.weight, action: 'record', docId: made.docId,
      winnerId: rec.winnerId, loserId: rec.loserId, resultType: rec.resultType, revision: 1,
      by: email, at: ctx.stamp, source: 'central'
    };
    if (rec.score) logDoc.score = rec.score;
    if (rec.time) logDoc.time = rec.time;

    return { ok: true, docId: made.docId, resultDoc: made.resultDoc, logDoc: logDoc, record: rec, book: scratch, warnings: res.warnings || [] };
  }

  /* ---------------------------------------------------------------- correct / clear (3D) */
  function describeRec(core, book, boutId) {
    const d = core.describe(book, boutId), r = book.decisions.get(boutId);
    const w = d.winnerSlot === 'a' ? d.a : d.b, l = d.winnerSlot === 'a' ? d.b : d.a;
    return {
      boutId: boutId, weight: d.weight, round: d.legacy.round, bracket: d.legacy.bracket, docId: core.legacyDocId(r.weight, r.key),
      winnerId: r.winnerId, loserId: r.loserId, winnerName: w.name, winnerSchool: w.school, loserName: l.name, loserSchool: l.school,
      resultType: r.resultType, score: r.score || '', time: r.time || '', revision: r.revision
    };
  }
  // audit-safe summary (no undefined values; Firestore rejects them)
  function summary(x) {
    const o = { boutId: x.boutId, docId: x.docId, winnerId: x.winnerId, loserId: x.loserId, resultType: x.resultType, revision: x.revision };
    if (x.score) o.score = x.score; if (x.time) o.time = x.time; return o;
  }
  function docIdOf(core, boutId) { const l = core.locate(boutId); return core.legacyDocId(l.weight, l.key); }

  // A short string identifying exactly which results a change would touch (and their revisions). Shown-preview == executed-change
  // is enforced by comparing this string at confirm time.
  function fingerprintOf(core, book, boutId) {
    if (!book.decisions.has(boutId)) return null;
    const deps = core.dependentsOf(boutId).filter(function (id) { return book.decisions.has(id); });
    return [boutId].concat(deps).map(function (id) { return docIdOf(core, id) + '@' + book.decisions.get(id).revision; }).join('|');
  }

  // req: { action: 'clear'|'correct', boutId, [winnerId, resultType, score, time], [fingerprint], [expectedRevision] }   ctx: { email, stamp }
  // Returns { ok, action, boutId, docId, fingerprint, preview, readIds, expected, ops, logDoc, book, record }.
  //   readIds  : every officialResults document the change depends on (the bout + ALL its downstream bouts, decided or not)
  //   expected : what each of them must look like on the server at commit time ({kind:'modern', revision, winnerId} | {kind:'not-modern'})
  //   ops      : the ONLY writes ({type:'delete', docId} | {type:'set', docId, data}); plus the audit entry (logDoc)
  function planChange(core, book, req, ctx) {
    req = req || {}; ctx = ctx || {};
    const action = req.action;
    const email = typeof ctx.email === 'string' ? ctx.email.trim().toLowerCase() : '';
    if (!email) return fail('not_operator', 'Sign in as an authorized operator to change results.');
    if (action !== 'clear' && action !== 'correct') return fail('bad_action', 'Unknown action.');
    const rec = book.decisions.get(req.boutId);
    if (!rec) return fail('not_decided', 'Bout ' + req.boutId + ' has no official result to ' + action + '.');

    const allDeps = core.dependentsOf(req.boutId);                                   // ALL downstream bouts (decided or not) — from the core
    const decidedDeps = allDeps.filter(function (id) { return book.decisions.has(id); });
    const before = [req.boutId].concat(decidedDeps).map(function (id) { return describeRec(core, book, id); });
    const fingerprint = before.map(function (a) { return a.docId + '@' + a.revision; }).join('|');
    if (req.fingerprint != null && req.fingerprint !== fingerprint)
      return fail('changed_since_preview', 'The results this change would affect were modified since you reviewed it. Nothing was changed. Review it again.');

    const scratch = cloneBook(core, book);
    if (!scratch) return fail('internal', 'The official results on screen are inconsistent, so changes are switched off. Press Refresh.');

    let res, winnerChanged = false;
    if (action === 'clear') {
      res = core.clear(scratch, req.boutId, { cascade: true, expectedRevision: req.expectedRevision });
    } else {
      winnerChanged = req.winnerId !== rec.winnerId;
      res = core.correct(scratch, req.boutId, {
        winnerId: req.winnerId, resultType: req.resultType, score: req.score, time: req.time,
        recordedBy: email, source: 'central', cascade: true, expectedRevision: req.expectedRevision
      });
    }
    if (!res.ok) return res;

    // Defense in depth: what the core removed must be EXACTLY (bout + decided downstream) for a clear / winner change, nothing for a details-only edit.
    const want = action === 'clear' ? [req.boutId].concat(decidedDeps) : (winnerChanged ? decidedDeps : []);
    const got = res.cleared || [];
    if (want.length !== got.length || want.some(function (id) { return got.indexOf(id) < 0; }))
      return fail('internal', 'The change could not be verified (the affected results do not match the dependency check). Nothing was changed.');

    // ---- the documents to touch
    const ops = [];
    let made = null, newSummary = null, newResult = null;
    if (action === 'correct') {
      made = makeResultDoc(core, scratch, res.record, email, ctx.stamp);
      ops.push({ type: 'set', docId: made.docId, data: made.resultDoc });
      const nd = core.describe(scratch, req.boutId), w = nd.winnerSlot === 'a' ? nd.a : nd.b, l = nd.winnerSlot === 'a' ? nd.b : nd.a;
      newSummary = summary({ boutId: req.boutId, docId: made.docId, winnerId: res.record.winnerId, loserId: res.record.loserId, resultType: res.record.resultType, score: res.record.score, time: res.record.time, revision: res.record.revision });
      newResult = { winnerName: w.name, winnerSchool: w.school, loserName: l.name, loserSchool: l.school, resultType: res.record.resultType, score: res.record.score || '', time: res.record.time || '', revision: res.record.revision };
      if (winnerChanged) decidedDeps.forEach(function (id) { ops.push({ type: 'delete', docId: docIdOf(core, id) }); });
    } else {
      before.forEach(function (a) { ops.push({ type: 'delete', docId: a.docId }); });
    }

    const readIds = [], expected = {};
    [req.boutId].concat(allDeps).forEach(function (id) {
      const docId = docIdOf(core, id), r = book.decisions.get(id);
      readIds.push(docId);
      expected[docId] = r ? { kind: 'modern', revision: r.revision, winnerId: r.winnerId } : { kind: 'not-modern' };
    });

    const logDoc = {
      boutId: req.boutId, weight: rec.weight, action: action, docId: docIdOf(core, req.boutId),
      by: email, at: ctx.stamp, source: 'central',
      old: summary(before[0]),
      affected: (action === 'clear' || winnerChanged ? before.slice(1) : []).map(summary)
    };
    if (newSummary) logDoc.new = newSummary;

    return {
      ok: true, action: action, boutId: req.boutId, weight: rec.weight, docId: docIdOf(core, req.boutId), fingerprint: fingerprint,
      preview: {
        action: action, boutId: req.boutId, weight: rec.weight, round: before[0].round, current: before[0],
        downstream: (action === 'clear' || winnerChanged) ? before.slice(1) : [],
        winnerChanged: winnerChanged, detailsOnly: action === 'correct' && !winnerChanged, newResult: newResult
      },
      readIds: readIds, expected: expected, ops: ops, logDoc: logDoc, book: scratch, record: res.record || null
    };
  }

  return { buildRecordWrite: buildRecordWrite, planChange: planChange, fingerprintOf: fingerprintOf };
});
