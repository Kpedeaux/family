# Verification log — Louisiana Secretary of State vital records index

**Date:** 12 August 2026
**Auditor:** Claude, driving Chrome directly
**Source:** Louisiana Death Records index, Louisiana Secretary of State
**URL:** https://vitalrecords.sos.la.gov/Deaths/DataView.aspx

## How to reproduce any row in this log

**This index has no per-record permalink.** It is an ASP.NET page whose search box
(`#txtSmartSearch`) updates a results grid in place; the URL never changes. So a link
to an individual record does not exist and is not given here. Instead every row below
records the **exact search term** and the **full index row as displayed**, which is
enough to reproduce the result in seconds:

1. Open https://vitalrecords.sos.la.gov/Deaths/DataView.aspx
2. Type the surname into the Basic Search box
3. Results appear beneath as you type; find the row quoted below

The index displays: Year · Age · Month · Day · Name · Parish · Volume · Page.
Everything quoted below is transcribed from that grid as read on 12 August 2026.

---

## Verdicts

### CONFIRMED EXACTLY — volume and page both match

| Person on site | Citation on the page | Index row, transcribed | Verdict |
|---|---|---|---|
| anthonyLarmann | Orleans Parish, 12 February 1904 — Vol. 131, p. 1097 | `1904 · age 32 · 2/12 · LARMANN, ANTHONY · Orleans · Vol 131 p 1097` | **CONFIRMED** |
| johnCasparLarmann | Orleans Parish, 21 November 1921 — Vol. 183, p. 215 | `1921 · age 73 · 11/21 · LARMANN, JOHN CASPER · Orleans · Vol 183 p 215` | **CONFIRMED** (but see the age note below) |
| eugeniaMoore | Orleans Parish, 23 February 1921 — Vol. 181, p. 257 | `1921 · age 46 · 2/23 · LARMANN, EUGENIE B MOORE · Orleans · Vol 181 p 257` | **CONFIRMED** |
| emilyMevers | Orleans Parish, 11 February 1882 — Vol. 80, p. 272 | `1882 · age 37 · 2/11 · LARMANN, EMILY MEVERS · Orleans · Vol 80 p 272` | **CONFIRMED** |
| henryBernardWellmeyer | Orleans Parish, 23 September 1880 — Vol. 77, p. 470 | `1880 · age 57 · 9/23 · WELLMEYER, BERNARD · Orleans · Vol 77 p 470` | **CONFIRMED** |
| johnWellmeyer | Orleans Parish, 15 December 1922 — Vol. 186, p. 121 | `1922 · age 69 · 12/15 · WELLMEYER, JOHN · Orleans · Vol 186 p 121` | **CONFIRMED** |
| carolineLobmeyer | Orleans Parish, 7 December 1903 — Vol. 131, p. 367 | `1903 · age 72 · 12/7 · WELLMEYER, GERTRUDE LOBMEYER · Orleans · Vol 131 p 367` | **CONFIRMED** |
| josephGoubler | Orleans Parish, 7 November 1892 — Vol. 102, p. 1145 | `1892 · age 74 · 11/7 · GOUBLER, JOSEPH · Orleans · Vol 102 p 1145` | **CONFIRMED** |
| victoireCirclot | Orleans Parish, 23 December 1895 — Vol. 110, p. 79 | `1895 · age 74 · 12/23 · GOUBLER, THEOLINE VICTOIRE · Orleans · Vol 110 p 79` | **CONFIRMED** |
| valentineGoubler | Orleans Parish, 14 February 1926 — Vol. 192, p. 169 | `1926 · age 7 · 2/14 · GOUBLER, MARIE VALENTINE · Orleans · Vol 192 p 169` | **CONFIRMED** on date, volume and page (see age note) |
| alfredMoizant | Louisiana, Orleans, Death Records and Certificates — Alfred L. Moizant, 23 February 1933 | `1933 · age 95 · 2/23 · MOIZANT, ALFRED L · Orleans · Vol 204 p 1520` | **CONFIRMED**, and the volume/page is NEW — the site had no volume or page for this record |

### Discrepancies found — recorded, not silently fixed

**1. John Casper Larmann's age at death: the index says 73, this site says 75.**
The volume, page and date all match exactly. But the state index records his age as
**73**, where his obituary and the archdiocese burial register both say **75**. Age 73 in
November 1921 implies a birth about 1848; age 75 implies about 1846. The site currently
carries the German christening record of 5 April 1846 against Esther Larmann's ledger date
of 1 January 1846 — and this index is a third, different number. **Nothing has been changed
on the strength of this.** It is recorded because three sources now disagree and the page
should say so.

**2. Marie Valentine Goubler's age reads "7" and cannot be right.**
Date, volume and page all confirm. She was born 20 March 1847 and died 14 February 1926,
which makes her 78. The index shows 7. Almost certainly a transcription or keying error in
the index itself — **which is a useful warning about this index generally**, and a reason not
to treat its age column as authoritative.

### NEW RECORDS FOUND while verifying — not previously on the site

| Finding | Index row |
|---|---|
| **PVT. EMILE THOMAS GOUBLER'S DEATH IS IN THE LOUISIANA STATE INDEX** | `1918 · age 24 · 9/22 · GOUBLER, EMILE THOMAS · Orleans · Vol 180 p 527` |
| Louisa Ehmann Larmann | `1931 · age 75 · 9/17 · LARMANN, LOUISE EHMAN · Orleans · Vol 202 p 2195` |
| Esther Mary Larmann, the child who died at two | `1928 · age 2 · 2/15 · LARMANN, ESTHER MARY · Orleans · Vol 195 p 1884` |
| Bertha Florence Sander Wellmeyer | `1956 · age 70 · 4/2 · WELLMEYER, BERTHA FLORENCE SANDER · Orleans · Vol 0 p 2306` |
| Catherine E. Lange Wellmeyer | `1930 · age 65 · 1/17 · WELLMEYER, CATHERINE E LANG · Orleans · Vol 199 p 1642` |
| Theresa C. Baron Goubler, the soldier's mother | `1934 · age 65 · 5/20 · GOUBLER, THERESA C BARON · Orleans · Vol 206 p 53` |
| Leon Joseph Goubler, the soldier's brother | `1963 · age 71 · 11/18 · GOUBLER, LEON JOSEPH · Orleans · Vol 0 p 8137` |

**The Goubler find is significant.** Emile Thomas Goubler died at Saint-Florent-sur-Cher in
France, and yet Orleans Parish holds a death record for him at Volume 180, page 527, dated
22 September 1918 — the exact date of his death in France. That is what an overseas military
death looks like when it is reported home. It does not by itself prove repatriation of the
body, but it is a Louisiana record of the death and it is orderable from the state.

---

## Still to do in this pile

The death index covers only deaths. Of the 46 citations in this pile, the remainder are
**births and marriages**, which live in separate Secretary of State databases and have not
yet been searched. Those are the next batch.

---

# Batch 2 — Orleans births and marriages

**Date:** 12 August 2026. Same method, same caveat: these are separate SOS databases
at `/Births/DataView.aspx` and `/Marriages/DataView.aspx`, both postback forms with
no per-record permalink. Search term and full index row given for each.

## BIRTHS — 5 of 5 CONFIRMED EXACTLY

| Person | Citation on the page | Index row, transcribed | Verdict |
|---|---|---|---|
| herbertJoseph | Orleans Parish, 10 July 1921 — Vol. 175, p. 791 | `1921 · 7/10 · PEDEAUX, HERBERT JOSEPH · mother GAIENNIE, EDNA M · father PEDEAUX, NUMA L JR · Orleans · Vol 175 p 791` | **CONFIRMED**, parents verbatim |
| veronicaBrunetti | Orleans Parish, 20 November 1923 — Vol. 181, p. 2241 | `1923 · 11/20 · BRUNETTI, VERONICA MARY · mother FRANOVICH, VERONICA · father BRUNETTI, JOHN · Orleans · Vol 181 p 2241` | **CONFIRMED** |
| charlesEmileLarmann | Orleans Parish, 12 July 1902 — Vol. 123, p. 485 | `1902 · 7/12 · LARMANN, CHARLES EMILE · mother MOORE, EUGENIA · father LARMANN, ANTHONY H · Orleans · Vol 123 p 485` | **CONFIRMED** |
| henryJohnWellmeyer | Orleans Parish, 13 March 1886 — Vol. 83, p. 968 | `1886 · 3/13 · WELLMEYER, HENRY JOHN · mother LANGE, CATHERINE E · father WELLMEYER, JOHN · Orleans · Vol 83 p 968` | **CONFIRMED** |
| henryBernardWellmeyer | Orleans Parish, 2 February 1864 — Vol. 36, p. 376 | `1864 · 2/2 · WELLMEYER, LOUIS · mother LOBMEYER, CAROLINE · father WELLMEYER, BERNARD · Orleans · Vol 36 p 376` | **CONFIRMED** |

**A site claim that just proved itself.** Veronica Brunetti's record carries the note
that hers is "the only Brunetti birth in the entire Louisiana index, 1790–1925."
Searching BRUNETTI in the birth index returns **1 of 1 results**. The claim is now
demonstrated rather than asserted.

## MARRIAGES — 4 CONFIRMED, 1 with a naming discrepancy

| Person | Citation on the page | Index row, transcribed | Verdict |
|---|---|---|---|
| johnCasparLarmann | Orleans, 26 April 1884 (Vol. 10, p. 589) | `1884 · month 4 · bride EHMANN, LOUISA MARGARET · groom LARMANN, JOHN CASPER · Orleans · Vol 10 p 589` | **CONFIRMED** |
| charlesEmileLarmann | Orleans Parish, August 1924 — Vol. 49, p. 468 | `1924 · month 8 · bride LEMOINE, JOHANNA K · groom LARMANN, CHARLES EMILE · Orleans · Vol 49 p 468` | **CONFIRMED** |
| alphonseJr | Orleans Parish, February 1888 — Vol. 13, p. 255 | `1888 · month 2 · bride CURIEN, JENNIE ELIZABETH · groom GAIENNIE, ALPHONSE FLORESTAN · Orleans · Vol 13 p 255` | **CONFIRMED** |
| emilyMevers / johnCasparLarmann | Orleans, 10 November 1870 (Vol. 1, p. 662) | `1870 · month 11 · bride MEVERS, MARIE E · groom LARMANN, JOHN G · Orleans · Vol 1 p 662` | **CONFIRMED on volume, page and month — see the note** |

**The 1870 marriage: two names are not what this site prints.**
The volume, page and month match exactly. But the index gives the groom as
**LARMANN, JOHN G** — not John Casper — and the bride as **MEVERS, MARIE E**, not
Emily. Neither is fatal. A handwritten C read as G is among the commonest index
errors, and this page already documents that her given name wobbles across records
(Esther's ledger calls her Amelia; her own death record calls her Emily Mevers;
this marriage index calls her Marie E). But the middle initial is now a fourth
variant on a man whose identity this line depends on, and it is recorded rather
than smoothed over.

**Note on day-of-month:** the marriage index gives YEAR and MONTH only, no day. So
the specific days this site prints — 26 April 1884, 10 November 1870 — do **not**
come from this index and are not verified by it. They come from elsewhere and remain
unverified until that elsewhere is identified.

## New records found in passing

| Finding | Index row |
|---|---|
| Robert Louis Pedeaux's birth | `1918 · 9/11 · PEDEAUX, ROBERT LOUIS · mother GAIENNIE, EDNA MARIE · father PEDEAUX, NUMA LOUIS C · Orleans · Vol ... p 1177` |
| Caspar Maurice Larmann's birth — the son buried at St. Roch | `1899 · 1/15 · LARMANN, CASPAR MAURICE · mother EHMANN, LOUISE M · father LARMANN, CASPAR · Orleans · Vol 115 p 383` |

---

# Batch 3 — remaining Orleans marriages

## CONFIRMED EXACTLY — 5 more

| Person | Citation on the page | Index row, transcribed | Verdict |
|---|---|---|---|
| herbertJoseph | Orleans Parish, April 1943 — Vol. 58, p. 1681 | `1943 · month 4 · BRUNETTI, VERONICA MARIE × PEDEAUX, HERBERT JOSEPH · Orleans · Vol 58 p 1681` | **CONFIRMED** |
| numaSr | Orleans Parish, July 1917 — Vol. 39, p. 1008 | `1917 · month 7 · GAIENNIE, EDNA MARIE × PEDEAUX, NUMA LOUIS CHARLES JR · Orleans · Vol 39 p 1008` | **CONFIRMED** |
| johnBrunetti | Orleans, June 1921, licence Vol. 46, p. 90 | `1921 · month 6 · FRANOVICH, VERONICA × BRUNETTI, JOHN · Orleans · Vol 46 p 90` | **CONFIRMED** |
| melanieMoizant | Orleans Parish, April 1926 — Vol. 50, p. 376 | `1926 · month 4 · FRANOVICH, ANTHONY WIDOW × PAASCH, THEODORE ADOLPH · Orleans · Vol 50 p 376` | **CONFIRMED** |
| johnWellmeyer | Orleans Parish, January 1883 — Vol. 9, p. 738 | `1883 · month 1 · LANGE, CATHARINE ELIZABETH × WELLMEYER, JOHN · Orleans · Vol 9 p 738` | **CONFIRMED** |

**Two of these carry a bonus.**

The 1917 entry indexes the groom as **"PEDEAUX, NUMA LOUIS CHARLES JR"**. This page has
long argued that the "Jr." is load-bearing — that he used it on his marriage licence, his
WWI draft card and his son's birth record, and that it distinguishes him from his father.
The state index prints it. That is now demonstrated, not argued.

The 1926 entry indexes the bride as **"FRANOVICH, ANTHONY WIDOW"** — the index does not
give her own name at all, only her late husband's. That is Melanie Moizant, remarrying
fifteen years after Anthony Franovich died at thirty-eight. A woman entered into the public
record of her own second marriage as somebody else's widow.

## NOT FOUND — 1

**Robert Lemoine × Agnes Margaret Hanley, 22 May 1906.**
Searching LEMOINE, ROBERT in the Orleans marriage index returns six results — 1936, 1944,
1969 ×2, 1970 — and **not one from 1906**. Searching HANLEY returns nothing from 1906
either. The index demonstrably covers that era (it returns Hanley marriages from 1900).

**This is not necessarily an error on the page.** The site's citation points at
*FamilySearch's* "Louisiana, Parish Marriages, 1787–1958" collection with an ark number,
not at the Secretary of State index — they are different databases with different coverage.
So the verdict is precisely: **not corroborated by the SOS index, and the cited source has
not been opened.** It stays flagged [UNVERIFIED] until somebody opens the FamilySearch
record itself. This matters because that 1906 act is the document naming Agnes's parents,
Stephen Hanley and Mary Reed — two people who exist on this tree on the strength of it.

## Still outstanding in this pile

Not yet reached, and still flagged: Henry Moore's marriages of 1871 and 1895, Anthony
Larmann's 1895 marriage, Henry John Wellmeyer's 1910 marriage, and Louis Sander's 1872
marriage. The Wellmeyer and Sander result sets exceed the 25-row display and need paging or
a narrower search.
