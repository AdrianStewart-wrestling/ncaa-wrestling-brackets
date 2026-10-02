/* FLO CSV IMPORT — dry-run matcher. Pure: no Firebase writes. */
(function(root,factory){ if(typeof module==='object'&&module.exports) module.exports=factory(); else root.FloImport=factory(); })(typeof self!=='undefined'?self:this,function(){
'use strict';
function clean(v){v=v==null?'':String(v).trim();var m=/^="([\s\S]*)"$/.exec(v);return (m?m[1]:v).trim();}
function norm(v){return clean(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
function parseCSV(text){var rows=[],row=[],field='',q=false; text=String(text||'').replace(/^\uFEFF/,''); for(var i=0;i<text.length;i++){var c=text[i]; if(q){if(c==='"'&&text[i+1]==='"'){field+='"';i++;}else if(c==='"')q=false;else field+=c;}else if(c==='"')q=true;else if(c===','){row.push(field);field='';}else if(c==='\n'){row.push(field);rows.push(row);row=[];field='';}else if(c!=='\r')field+=c;} if(field||row.length){row.push(field);rows.push(row);} if(!rows.length)return[]; var hdr=rows.shift().map(clean); return rows.filter(r=>r.some(x=>clean(x))).map(function(r){var o={};hdr.forEach((h,j)=>o[h]=clean(r[j]));return o;});}
function resultType(v){var x=norm(v).replace(/ /g,''); if(x==='dec')return'Dec';if(x==='md')return'MajDec';if(x==='tf')return'TechFall';if(x==='f'||x==='fall')return'Fall';if(x==='mffl'||x==='mff'||x==='medfft'||x==='mfor')return'MedFFT';if(x==='fft'||x==='for')return'FFT';if(x==='dq')return'DQ';if(x==='def')return'Default';return null;}
// Overtime codes actually observed in real Flo exports (checked against a real 500-row file before adding any of
// these -- see the trace that led to this change). Only add a new code here after confirming it actually appears
// in real data; never add one speculatively.
var OT_CODES={SV:1,TB1:1,TB2:1,UTB:1};
function resultDetails(row){
  var t=resultType(row['Win Type']),raw=clean(row.Result),score='',recordScore='',time='';
  if(t==='Fall'){
    var tm=raw.match(/(?:^|\s)(\d{1,2}:\d{2})(?:\s|$)/);
    if(tm)time=tm[1];
  } else if(t==='Default'){
    // Default carries BOTH a real winner-ahead score and a stoppage time (e.g. "7-1 5:11") -- unlike Fall (no
    // score) and unlike Dec/MajDec/TechFall (score only, optional short OT note, never a clock time). Extracted
    // separately from the generic branch below so the trailing "M:SS" is never mistaken for an overtime suffix.
    var dtm=raw.match(/(?:^|\s)(\d{1,2}:\d{2})(?:\s|$)/);
    if(dtm)time=dtm[1];
    var dsm=raw.match(/(\d{1,3})\s*-\s*(\d{1,3})/);
    if(dsm){score=dsm[1]+'-'+dsm[2];recordScore=score;}   // no OT-suffix concept applies to Default; passed through as-is
  } else if(t!=='MedFFT'&&t!=='FFT'&&t!=='DQ'){
    var sm=raw.match(/(\d{1,3})\s*-\s*(\d{1,3})(?:\s+([A-Za-z0-9-]+))?/);
    if(sm){
      var w=parseInt(sm[1],10),l=parseInt(sm[2],10),suffix=sm[3]?sm[3].toUpperCase():'';
      score=sm[1]+'-'+sm[2]+(suffix?' '+suffix:'');   // raw, exactly as parsed before this change -- always shown to the operator, never altered
      if(w===l&&OT_CODES[suffix]){
        // Tied regulation score with a recognized overtime code. Under current NCAA rules, both Sudden Victory
        // and the Ultimate Tie Breaker are decided by the winner being credited exactly one point over the tied
        // score. This does NOT change what is displayed anywhere (see score, above) -- it only changes the value
        // handed to officialCore.record(), which needs the true final margin, not the pre-overtime tied score.
        // A tie with no recognized code (e.g. a bare "2-2 DEC") is NOT corrected and is left to fail validation
        // exactly as before -- there is no general-purpose "fix the tie" rule here, only this one specific,
        // rule-backed case.
        recordScore=(w+1)+'-'+l+(suffix?' '+suffix:'');
      } else {
        recordScore=score;   // already a valid, non-tied score (the vast majority of SV/TB1 results) -- unchanged
      }
    }
  }
  return {resultType:t,score:score,recordScore:(recordScore||score),time:time};
}
function serializeCSV(rows){
  if(!rows.length)return'';
  var hdr=Object.keys(rows[0]);
  var esc=function(v){return '"'+String(v==null?'':v).replace(/"/g,'""')+'"';};
  return [hdr.map(esc).join(',')].concat(rows.map(function(r){return hdr.map(function(h){return esc(r[h]);}).join(',');})).join('\n');
}

// ============================================================================================
// IMPORT OVERRIDES -- session/import-scoped only. Never writes to the source CSV or the roster.
// Two independent mechanisms, kept deliberately separate:
//   nameMap:     [{weight, csvName, resolvedName}]  -- an unrecognized CSV name, remapped to a real
//                roster wrestler's name, chosen explicitly by the operator (never pre-selected).
//   corrections: [{row, weight, winner, loser, originalResult, winType, correctedResult}] -- a specific
//                row's Result field, replaced with an operator-entered value. Identified by its full
//                original data, not just row number -- see applyOverrides below for the refusal check.
// ============================================================================================

// Applies both kinds of override to a fresh parse of the ORIGINAL CSV text, returning new CSV text for
// analyze() to run on unmodified. Never mutates the input text. A correction is applied only if every one
// of its identifying fields (weight, winner, loser, originalResult, winType) still matches the row at that
// position -- otherwise it is refused, not silently skipped or force-applied to the wrong row.
function applyOverrides(text,overrides){
  overrides=overrides||{};
  var nameMap=overrides.nameMap||[],corrections=overrides.corrections||[];
  var rows=parseCSV(text);
  var appliedNameMaps=[],appliedCorrections=[],refusedCorrections=[];
  rows.forEach(function(r,idx){
    var rowNum=idx+2,wt=parseInt(clean(r.Weight),10);
    var origWinner=r['Winning Wrestler'],origLoser=r['Losing Wrestler'],origResult=r.Result,origWinType=r['Win Type'];
    var correction=corrections.find(function(c){return c.row===rowNum;});
    if(correction){
      var stillMatches=correction.weight===wt&&correction.winner===origWinner&&correction.loser===origLoser&&
                        correction.originalResult===origResult&&correction.winType===origWinType;
      if(stillMatches){r.Result=correction.correctedResult;appliedCorrections.push(correction);}
      else{refusedCorrections.push({correction:correction,reason:'The row at this position no longer matches the data the correction was created for.',current:{weight:wt,winner:origWinner,loser:origLoser,result:origResult,winType:origWinType}});}
    }
    var wm=nameMap.find(function(m){return m.weight===wt&&m.csvName===origWinner;});
    if(wm){r['Winning Wrestler']=wm.resolvedName;appliedNameMaps.push(Object.assign({row:rowNum,side:'winner'},wm));}
    var lm=nameMap.find(function(m){return m.weight===wt&&m.csvName===origLoser;});
    if(lm){r['Losing Wrestler']=lm.resolvedName;appliedNameMaps.push(Object.assign({row:rowNum,side:'loser'},lm));}
  });
  return {text:serializeCSV(rows),appliedNameMaps:appliedNameMaps,appliedCorrections:appliedCorrections,refusedCorrections:refusedCorrections};
}

// After a full analyze() run (multi-pass convergence already happened), finds names that don't normalize-match
// ANYONE in that weight's roster at all -- the dividing line between "still catching up on ordering" (which
// multi-pass already resolves on its own) and "this is probably a data-entry problem" (which needs a human).
// rosterFor(weight) -> [{id, name}, ...] is supplied by the caller (kept out of this pure module on purpose).
// Deduplicated by weight+name, so a name appearing in several unmatched rows is only surfaced once.
function findUnrecognizedNames(analyzeResult,rosterFor){
  var seen={},out=[];
  function check(row,side,name){
    if(!name)return;
    var wt=row.weight,key=wt+'|'+norm(name);
    if(seen[key])return;
    var roster=rosterFor(wt)||[];
    var known=roster.some(function(e){return norm(e.name)===norm(name);});
    if(!known){seen[key]=true;out.push({weight:wt,csvName:name,side:side,exampleRow:row.row});}
  }
  analyzeResult.unmatched.forEach(function(row){check(row,'winner',row.winner);check(row,'loser',row.loser);});
  analyzeResult.ambiguous.forEach(function(row){check(row,'winner',row.winner);check(row,'loser',row.loser);});
  return out;
}

// Classifies every row of an OVERRIDDEN analyze() result against the BASELINE (no-overrides) analyze() result,
// so the UI can show three distinct states rather than a single flat "matched" list:
//   'direct'    -- this exact row's own data was changed by an override (a name it involved was mapped, or its
//                  own result was corrected)
//   'cascade'   -- this row failed in the baseline but now succeeds, WITHOUT its own data being touched by any
//                  override -- it only unlocked because something else did
//   'unaffected'-- matched in both, or still unresolved in both
function compareAnalysisResults(baseline,overridden,overrides){
  overrides=overrides||{};
  var directRows={};
  (overrides.nameMap||[]).forEach(function(m){
    [].concat(baseline.unmatched,baseline.ambiguous,baseline.invalid).forEach(function(row){
      if(row.weight===m.weight&&(row.winner===m.csvName||row.loser===m.csvName))directRows[row.row]=true;
    });
  });
  (overrides.corrections||[]).forEach(function(c){directRows[c.row]=true;});
  var baselineMatchedRows={};baseline.matches.forEach(function(m){baselineMatchedRows[m.row]=true;});
  return overridden.matches.map(function(m){
    var wasMatchedBefore=!!baselineMatchedRows[m.row];
    var status=directRows[m.row]?'direct':(wasMatchedBefore?'unaffected':'cascade');
    return Object.assign({status:status},m);
  });
}

function samePair(d,w,l){if(!d||!d.a||!d.b)return false;var a=norm(d.a.name),b=norm(d.b.name),wn=norm(w),ln=norm(l);return (a===wn&&b===ln)||(a===ln&&b===wn);}

function analyze(text,api,conflictResolutions){
  conflictResolutions=conflictResolutions||[];
  var resolutionById={}; conflictResolutions.forEach(function(r){resolutionById[r.conflictId]=r;});
  var rows=parseCSV(text), sim=api.newSimulation(),
      out={ok:true,rows:rows.length,matched:0,unmatched:[],ambiguous:[],invalid:[],matches:[],conflicts:[],rejectedConflicts:[],detailConflicts:[]};

  // Pass 0: pull out rows that can never become valid regardless of order (missing weight/wrestler/win-type).
  // These are genuine data problems, decided once, never retried.
  var candidateRows=[];
  rows.forEach(function(r,idx){
    var wt=parseInt(clean(r.Weight),10),win=clean(r['Winning Wrestler']),lose=clean(r['Losing Wrestler']),det=resultDetails(r);
    var winType=clean(r['Win Type']),originalResult=clean(r.Result);
    if(!wt||!win||!lose||!det.resultType){out.invalid.push({row:idx+2,weight:wt,winner:win,loser:lose,reason:'Missing/unsupported weight, wrestler, or win type: '+winType});return;}
    candidateRows.push({row:idx+2,wt:wt,win:win,lose:lose,det:det,winType:winType,originalResult:originalResult});
  });

  // ---------------------------------------------------------------------------------------------------------
  // CONFLICT DETECTION, part 1 -- "same pair, different observations": two or more rows describe the SAME two
  // wrestlers wrestling each other, but disagree on the result. Split into two distinct kinds:
  //   OUTCOME CONFLICT -- observations disagree on WHO WON. This can change tournament topology (who advances),
  //     so it MUST be explicitly resolved by the operator before its rows are applied. Never auto-selected,
  //     even by convergence score -- excluded from matching entirely until resolved.
  //   DETAIL CONFLICT -- every observation agrees on the winner; only score/win-type differs. Topology is
  //     identical either way, so one candidate is used to let the bracket complete without waiting on the
  //     operator -- but the conflict is still fully reported, never silently hidden, since the AUTHORITATIVE
  //     recorded detail (for OFFICIAL) still needs an explicit operator choice eventually.
  // ---------------------------------------------------------------------------------------------------------
  var byPair={};
  candidateRows.forEach(function(p){
    var key=p.wt+'|pair|'+[norm(p.win),norm(p.lose)].sort().join(',');
    (byPair[key]=byPair[key]||[]).push(p);
  });
  var pending=[], excludedRows={};
  Object.keys(byPair).forEach(function(key){
    var group=byPair[key];
    if(group.length<2){pending.push(group[0]);return;}
    var distinct={}; group.forEach(function(p){distinct[norm(p.win)+'|'+p.originalResult+'|'+p.winType]=1;});
    if(Object.keys(distinct).length<2){ // identical winner AND result AND win-type on every row -- a harmless exact repeat, not a conflict
      group.forEach(function(p,i){ if(i===0) pending.push(p); else excludedRows[p.row]=true; });
      return;
    }
    var winners={}; group.forEach(function(p){winners[norm(p.win)]=1;});
    var isDetailConflict=Object.keys(winners).length===1;
    var resolution=resolutionById[key];
    var obsList=group.map(function(p){return {row:p.row,winner:p.win,loser:p.lose,result:p.originalResult,winType:p.winType};});

    if(isDetailConflict){
      var chosenRow=resolution?resolution.acceptedRow:group[0].row; // arbitrary but harmless: topology is identical regardless
      out.detailConflicts.push({conflictId:key,weight:group[0].wt,resolved:!!resolution,chosenRow:chosenRow,observations:obsList});
      group.forEach(function(p){
        if(p.row===chosenRow){pending.push(p);}
        else{excludedRows[p.row]=true;} // the non-chosen detail candidate is held out of this replay, but remains fully visible in detailConflicts above -- never deleted
      });
      return;
    }
    if(!resolution){
      out.conflicts.push({conflictId:key,weight:group[0].wt,reason:'outcome',observations:obsList});
      group.forEach(function(p){excludedRows[p.row]=true;});
      return;
    }
    group.forEach(function(p){
      if(p.row===resolution.acceptedRow){pending.push(p);}
      else{out.rejectedConflicts.push({conflictId:key,row:p.row,weight:p.wt,winner:p.win,loser:p.lose,result:p.originalResult,winType:p.winType,status:'rejected-conflict'});excludedRows[p.row]=true;}
    });
  });

  // Multi-pass replay: a Flo export is not guaranteed to list bouts in bracket-dependency order -- a bout can
  // appear before the earlier-round result it depends on becoming pending. Retry whatever's still unresolved
  // after each full pass; stop the moment a pass makes no further progress. Capped at pending.length+1 passes --
  // always enough, since each pass that makes progress resolves at least one more row, so no more passes than
  // rows could ever help. This guarantees termination without an arbitrary magic number.
  var maxPasses=pending.length+1, lastCandidates={};
  for (var pass=0; pass<maxPasses && pending.length; pass++) {
    var progressed=false, stillPending=[];
    pending.forEach(function(p){
      var candidates=api.pendingForWeight(sim,p.wt).filter(d=>samePair(d,p.win,p.lose));
      lastCandidates[p.row]=candidates;
      if(candidates.length!==1){stillPending.push(p);return;}
      var d=candidates[0],winnerId=norm(d.a.name)===norm(p.win)?d.a.id:d.b.id,
          rec={boutId:d.boutId,winnerId:winnerId,resultType:p.det.resultType,score:p.det.recordScore,time:p.det.time,source:'flo-csv-dry-run'};
      var applied=api.applySimulation(sim,rec);
      if(!applied.ok){out.invalid.push({row:p.row,weight:p.wt,winner:p.win,loser:p.lose,boutId:d.boutId,reason:applied.message||applied.code,winType:p.winType,originalResult:p.originalResult});progressed=true;return;}
      out.matched++;
      out.matches.push({row:p.row,boutId:d.boutId,weight:p.wt,winner:p.win,loser:p.lose,resultType:p.det.resultType,score:p.det.score,time:p.det.time});
      progressed=true;
    });
    pending=stillPending;
    if(!progressed) break;
  }

  // Whatever's left when no more progress is possible, and isn't a conflict, is genuinely unmatched or
  // ambiguous, using each row's candidate count from its last attempt.
  pending.forEach(function(p){
    var candidates=lastCandidates[p.row]||[];
    (candidates.length?out.ambiguous:out.unmatched).push({row:p.row,weight:p.wt,winner:p.win,loser:p.lose,candidates:candidates.map(x=>x.boutId)});
  });
  out.ok=out.unmatched.length===0&&out.ambiguous.length===0&&out.invalid.length===0&&out.conflicts.length===0;
  return out;
}
// ================================================================================================
// COUNTERFACTUAL WORLD EXPLORATION -- the proven alternative to participant-history heuristics.
// For a weight's same-pair conflicts, tries every combination of candidate choices through a
// GENUINELY FRESH TournamentCore each time (freshApiFactory must return an independent api backed
// by a brand-new book/state -- reusing one officialCore across calls is not safe, since its internal
// per-weight state can persist across newSimulation() calls). Records, for each candidate world, what
// converges and what doesn't. Never picks a winner -- returns evidence only.
// ================================================================================================
function combinationsOf(conflicts){
  if(!conflicts.length)return[[]];
  var first=conflicts[0],rest=conflicts.slice(1),restCombos=combinationsOf(rest),out=[];
  first.observations.forEach(function(obs){
    restCombos.forEach(function(combo){out.push([{conflictId:first.conflictId,acceptedRow:obs.row}].concat(combo));});
  });
  return out;
}
function exploreWorlds(text,freshApiFactory,weight,conflictsForWeight){
  var combos=combinationsOf(conflictsForWeight);
  var worlds=combos.map(function(resolutionSet){
    var r=analyze(text,freshApiFactory(),resolutionSet);
    var inWt=function(x){return x.weight===weight;};
    return {
      resolutionSet:resolutionSet,
      matchedRows:r.matches.filter(inWt).map(function(m){return m.row;}),
      unmatchedRows:r.unmatched.filter(inWt).map(function(x){return x.row;}),
      ambiguousRows:r.ambiguous.filter(inWt).map(function(x){return x.row;}),
      invalidRows:r.invalid.filter(inWt).map(function(x){return x.row;}),
    };
  });
  var allRows={};
  worlds.forEach(function(w){w.matchedRows.forEach(function(r){allRows[r]=1;});w.unmatchedRows.forEach(function(r){allRows[r]=1;});});
  var rowCompatibility={};
  Object.keys(allRows).forEach(function(rowStr){
    var row=parseInt(rowStr,10);
    rowCompatibility[row]=worlds.map(function(w,i){return w.matchedRows.indexOf(row)!==-1?i:null;}).filter(function(x){return x!==null;});
  });
  return {weight:weight,worlds:worlds,rowCompatibility:rowCompatibility};
}

// ================================================================================================
// QUARANTINE CLASSIFICATION -- after the operator's actual choices are applied and replayed, any row
// still unmatched is classified against the world-exploration evidence computed above, never against
// participant history:
//   INCOMPATIBLE OBSERVATION -- never matched in ANY explored world for its weight (e.g. row 472).
//   ALTERNATE-WORLD OBSERVATION -- matched only in a world other than the one implied by the
//     operator's actual selections (e.g. row 493, which only resolves if Campos had been chosen).
//   otherwise left as ordinary unmatched/ambiguous -- a genuinely unexplained gap, not a conflict.
// ================================================================================================
function classifyUnmatched(finalResult,worldExplorationsByWeight,resolutionById){
  var incompatible=[],alternateWorld=[],trueUnexplained=[];
  finalResult.unmatched.forEach(function(row){
    var exploration=worldExplorationsByWeight[row.weight];
    if(!exploration){trueUnexplained.push(row);return;}
    var compat=exploration.rowCompatibility[row.row];
    if(!compat||!compat.length){incompatible.push(Object.assign({},row,{status:'incompatible-observation'}));return;}
    // Determine which world index corresponds to the operator's ACTUAL selections for this weight's conflicts.
    var selectedWorldIndex=exploration.worlds.findIndex(function(w){
      return w.resolutionSet.every(function(rs){
        var chosen=resolutionById[rs.conflictId];
        return chosen?chosen.acceptedRow===rs.acceptedRow:rs.acceptedRow===exploration.worlds[0].resolutionSet.find(function(x){return x.conflictId===rs.conflictId;}).acceptedRow;
      });
    });
    if(selectedWorldIndex!==-1&&compat.indexOf(selectedWorldIndex)!==-1){trueUnexplained.push(row);return;} // matches the selected world but still ended up unmatched -- shouldn't normally happen; report plainly, don't hide it
    alternateWorld.push(Object.assign({},row,{status:'alternate-world-observation',compatibleWorlds:compat}));
  });
  return {incompatible:incompatible,alternateWorld:alternateWorld,trueUnexplained:trueUnexplained};
}



return {parseCSV:parseCSV,analyze:analyze,applyOverrides:applyOverrides,findUnrecognizedNames:findUnrecognizedNames,compareAnalysisResults:compareAnalysisResults,combinationsOf:combinationsOf,exploreWorlds:exploreWorlds,classifyUnmatched:classifyUnmatched};
});
