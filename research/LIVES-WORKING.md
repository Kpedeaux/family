# LIVES — working file (NOT YET ON THE SITE)

**Status: UNCOMMITTED, UNPUBLISHED.** Kevin has another session editing the site. Nothing in this
file goes into `data.js`, `index.html` or `research.html` until he says the coast is clear. No git
commands are being run from this session at all, to avoid colliding with the other window.

**Purpose:** biography, not pedigree. The tree already says *who begat whom*. This file is for
**what their lives were actually like** — trades, property, lawsuits, war service, newspapers,
addresses, photographs.

**Standard of proof is unchanged:** nothing is written here as fact without a citation. Anything
inferred is labelled inferred. Candidates are labelled candidates.

---

## TARGET LIST — by story potential

**Tier 1 — richest untapped, do first**
| Person | Why | Status |
|---|---|---|
| Joseph Gervais Gaiennie (1797–1854) | War of 1812, 6th Regt (Landry's); has photo | |
| François Gaiennie (c.1760s–<1820) | War of 1812, 4th Regt (Morgan's); **GAIENNIE STREET** | |
| Anthony Henry Larmann (1871–1904) | listed as ARCHITECT, died at 32 — buildings? | ⚠️ verify the occupation first |
| Robert Lemoine (1888–1949) | 30+ yr Navy career, Arlington; muster rolls | |
| Anthony L. Franovich (1873–1911) | Dalmatian oysterman, died at 38, **zero records** | |
| Alfred Leopold Moizant (1838–1933) | lived to 95, French-born, **zero records** | |
| John Casper Larmann (1846–1921) | carpenter, Local 1312, Holy Trinity, St. Roch | already 13 recs — newspapers next |
| Henry Bernard Wellmeyer (1823–1880) | grocer, German New Orleans | |
| Pierre Numa Pedeau (1847–1931) | Civil War era, Assumption Parish | |
| Numa Louis Charles Pedeaux (1888–1958) | 20thC New Orleans, city directories | |

**Tier 2 — likely findable**
Alphonse F. Gaiennie Sr (1826–1884) farm overseer · Emile Joseph Goubler (1818–1892) · Henry Moore
(1847–1893) · Louis Edward Sander (1851–1914) · John Edward Wellmeyer (1853–1922) · Alexis Alonzo
Lemoine (1829–1913) brick mason · Valery Rousselle (b. c.1841) · Michele Brunetti (b. c.1860)
*civile* / acting mayor of Plataci · Herbert Joseph Pedeaux (1921–1992) WWII.

**Tier 3 — colonial, records are thin by nature**
Étienne Reyne, Marie Françoise Renard, Nicolas Sardet, the Aucoins, the Pédeaus of Machecoul.
(Marie Françoise Renard already has a full life story from the Superior Council — see RESEARCH.md.)

---

## SOURCES TO WORK (new ground)

- **Chronicling America** `chroniclingamerica.loc.gov` — free full-text historic newspapers, incl.
  New Orleans titles. **Biggest untapped vein.**
- **New Orleans city directories** (Soards') — year-by-year address + occupation
- **Civil War**: NPS Soldiers & Sailors; Louisiana Confederate service records
- **War of 1812**: Louisiana militia rolls; pension/bounty land files
- **Navy**: muster rolls, enlistment records (Robert Lemoine)
- **Sanborn fire insurance maps** — the actual buildings people lived and worked in
- **Louisiana Digital Library / HNOC** — photographs
- **Orleans Parish notarial archives** — property sales, successions
- **lacolonialdocs.org** — already cracked; Superior Council 1714–1769
- **Find a Grave** — photographs of stones
- **NOPL obituary index**; Times-Picayune microfilm

---

## FINDINGS

*(appended as they are confirmed — each with citation)*

---

### 🟢 GAIENNIE STREET IS NAMED FOR THE FAMILY — sourced 2026-08-11

**John Kendall, *History of New Orleans* (Lewis Publishing Co., Chicago & New York, 1922),
Chapter XLII "Streets, Parks, Squares," p. 675:**

> "Thus **Poeyfarre, Robin and Gaiennie** recall the memory of well-known Creole families."

**Context, same passage:** these are streets in the **upper part of the city**, and the naming
mechanism is spelled out — as the estates along **Tchoupitoulas Road** were absorbed into the
growing city, *"the names of the owners of the neighboring properties descended upon the newly
opened thoroughfares."* So the street is named for a family that **owned land there.**

Free full text: `penelope.uchicago.edu/Thayer/E/Gazetteer/Places/America/United_States/Louisiana/New_Orleans/_Texts/KENHNO/42*.html`

**Gaiennie Street still exists** — Lower Garden District / Warehouse District, running off
Tchoupitoulas, exactly where Kendall places it.

**⚠️ WHAT IS NOT YET PROVEN:** that these are *our* Gaiennies. Kendall names a family, not a
person, and our documented Gaiennies are in **St. James Parish** (Joseph Gervais) and **Jefferson
Parish** (Alphonse Sr., a farm overseer in the 4th ward) — not obviously Tchoupitoulas
landowners. Two things make it *likely* and worth chasing: **Gaiennie is a very rare surname in
Louisiana**, and our François Gaiennie/Ganier of Brûlon arrived in New Orleans itself.
**TO PROVE IT:** a conveyance or succession naming a Gaiennie as owner of Faubourg property, in
the Orleans Parish notarial archives or the conveyance-office indexes. Until then: *probable.*

**FOR THE SITE (when clear):** a short "The street" note on the Gaiennie branch card, with the
Kendall quote and citation, phrased as probable-not-proven. Would also justify a photo of the
street sign.

---

### 🔴 FLAG — "Architect" on Anthony Henry Larmann is UNSOURCED

`anthonyLarmann.occupation` on the live site reads **"Architect."** Checked all four of his
records: the 1895 marriage act, the two daughters' birth records, the 1880 census and the 1904
death record. **Not one of them states a trade.** The 1900 census index entry (FamilySearch
`1:1:MS5L-2HW`) also carries no occupation field.

I do not know where "Architect" came from. It may be family memory, or it may have come in with
an early draft. **It should not stand as a bare fact on a site whose whole rule is that claims
carry citations.**

**TO RESOLVE:** read the occupation column on the 1900 census sheet itself — he is at
**ED 85, 4th Precinct, New Orleans Ward 9, sheet 14A, line 46** (image `3:1:S3HY-6SQY-F2`).
The column is on the original and simply is not indexed. Also try Soards' New Orleans city
directories 1895–1904, which list trade and address annually.

**FOR THE SITE (when clear):** either cite it or downgrade it to a note. Do not leave it bare.

---

## TOOLING NOTES (so the next session does not re-derive this)

- **Chronicling America moved.** `chroniclingamerica.loc.gov/search/pages/results/?...&format=json`
  now 308-redirects. Working base: `https://www.loc.gov/collections/chronicling-america/?q=<term>&fo=json&c=<n>`.
  ⚠️ **Faceted queries (`&fa=location_state:louisiana`) return 403.** Unfiltered searches return
  heavy OCR noise — "Gaiennie" gave 1,478 hits, mostly false. Needs quoted terms plus manual
  filtering by `partof_title`, or use the site UI in the browser instead.
- **FamilySearch image reading:** the viewer's zoom is too soft to read handwriting. Use the
  viewer's **download button**, then crop and upscale locally (PIL autocontrast + LANCZOS).
- ⚠️ **The other session is downloading to the same Downloads folder.** Check file timestamps
  before assuming a download is mine.

