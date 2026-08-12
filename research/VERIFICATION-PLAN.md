# Verification of the [UNVERIFIED] claims — plan and standing rules

Started 12 August 2026, at Kevin's instruction. This file is the contract for the work;
each batch writes its verdicts to a log beside it, and the page badges are updated
**only** from a committed log.

## The rules being followed
1. Sort first into reachable and unreachable piles.
2. Work the reachable pile in batches of 15.
3. For each citation, OPEN THE ACTUAL SOURCE and record CONFIRMED / CORRECTED / NOT FOUND.
   Never guess a replacement.
4. Always transcribe from the source just opened, never from the existing page text.
5. Update page badges only from the committed log, after each batch.
6. Unreachable pile gets re-flagged and turned into a shopping list.
7. Commit after every batch so nothing rides on one long session.

## The pile split — 121 [UNVERIFIED] citations

| Pile | Count | Source | Status |
|---|---:|---|---|
| **BRDR — Diocese of Baton Rouge** | 14 | Local PDFs, vols 2–9 and 12, in `CoreRail\Memory\` | REACHABLE — batch 1 running |
| **SRANO — Archdiocese of New Orleans** | 11 | Local PDFs, vols 1–18, in `CoreRail\Memory\` | REACHABLE — batch 2 running |
| **Louisiana SOS vital records index** | 46 | vitalrecords.sos.la.gov — free, but an ASP.NET postback form | REACHABLE ONLY BY HAND in a browser; cannot be scripted |
| **Other / unclear** | 50 | Mixed — needs triage | PENDING |

The BRDR and SRANO volumes turning out to be **already on this machine** is the single
biggest break in this audit. Those 25 citations can be checked against the actual books
rather than taken on trust.

## Logs
- `verification-log-brdr.md` — Diocese of Baton Rouge citations
- `verification-log-srano.md` — Archdiocese of New Orleans citations
- further logs to follow per batch

## Honest constraint
The Louisiana Secretary of State index is a postback form and cannot be queried by URL,
so its 46 citations need a human or a browser session driving it one name at a time.
That is the largest remaining block and it is not automatable from here.
