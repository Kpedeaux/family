# Verification log — SRANO citations

**Date:** 12 August 2026
**Auditor:** automated citation audit against original source PDFs held locally
**Sources:** *Sacramental Records of the Roman Catholic Church of the Archdiocese of New Orleans* (SRANO), Vols. 1–18, PDFs in `C:\Users\pedea\CoreRail\Memory\SRANO\`

## Scope

Every entry in the `"SRANO (local PDF)"` array of `research/verification-worklist.json` (11 citations), plus four additional high-value claims the site makes that rest on the same volumes.

Method: full text was extracted from all eighteen volumes and searched by surname across every volume and every spelling variant, rather than trusting the page numbers printed in the citations. Where a finding is load-bearing, the PDF page was also **rendered as an image and read visually** so that an OCR artefact could not be mistaken for a real reading. Every quotation below is transcribed from the page itself.

A note on the extracted text: these volumes are typescript, and OCR routinely renders `B6` as `86`, `B1` as `Bl`, `Fl` as `F1`, and accented letters as `~`. Citations below have been normalised only where the visual render made the true reading certain; anything uncertain is flagged.

## Summary

| Verdict | Count |
|---|---|
| CONFIRMED | 8 |
| CORRECTED | 3 |
| NOT FOUND | 0 |
| **Total (worklist)** | **11** |

Additional claims checked: 4 (3 corroborated, 1 confirmed absent as the site itself states).

**The single most important correction:** the record the site already cites for Nicolas Sardet's marriage *names his father*. SRANO Vol. 2 prints "Nicolas (Pierre and [\*]), m. Marguerite REINE, Jan. 20, 1767". The site quotes only the bride-side version of the same act, which leaves the parents blank, and its note says his parents "are the next step on this line." The next step is already in the citation.

---

## 1. Julien Gagnier — named in his son Urbain's marriage record

**Citation as printed:** St. Louis Cathedral, 19 March 1789 — SLC, M5, 62 (SRANO Vol. 4)

**VERDICT: CONFIRMED**

Found in SRANO Vol. 4, **PDF page 158** (printed page 137), under the headword `GAIGRE` — a typographic variant of GAIGNE; the same act is indexed under `GAIGNE` at PDF page 302 (printed 283). Verbatim:

> **GAIGRE**
> Urbano (Julián and Renata LEBRUN), native of la Bassouge de Chesnery, Province Dumene, m. Maria SARDET, Mar. 19, 1789, w. Estevan DE QUINONES, Antonio XIMENEZ, Vicente LLORCA (SLC, M5, 62)

The site's transcription is accurate. Julien is named as the father, the date and the register page match exactly, and the mother is Renata Lebrun as the site has her. The bracketed gloss "[La Bazouge-de-Chemeré, province of Maine]" is the site's own reading, not the source's, and is correctly presented as such.

The bride's own entry, Vol. 4 **PDF page 302** (printed 283), gives the other half of the act:

> **SARDET**
> Maria (Nicolas and Margarita RENNE), native of this parish, m. Urbano GAIGNE, Mar. 19, 1789 (SLC, M5, 62)

**One discrepancy to flag.** The site identifies the bride as "Marie Jeanne Sardet (b. 15 April 1772)". SRANO does not support that identification, and points elsewhere — see finding A below.

---

## 2. Nicolas Sardet — marriage, St. Louis church, New Orleans

**Citation as printed:** 20 January 1767 — SLC, M2, 25 (SRANO Vol. 2)

**VERDICT: CORRECTED** — the citation resolves exactly; the site's transcription of it is materially incomplete.

The act is indexed twice, once under each spouse. The site quotes the **bride-side** entry, SRANO Vol. 2 PDF page 255 (printed 236):

> **REINE [@RAINE, RENNE]**
> Marguerite ([\*] and [\*]), m. Nicolas SARDE, Jan. 20, 1767 (SLC, M2, 25)

But the **groom-side** entry, SRANO Vol. 2 **PDF page 268** (printed 249), reads — verified against the rendered page image:

> **SARDE [@SARDAIN, SARDET]**
> Nicolas (Pierre and [\*]), m. Marguerite REINE, Jan. 20, 1767, w. Francoise RENE, Antoine DEJAN (SLC, M2, 25)

**Side by side:**

| | Site | Source (groom-side entry) |
|---|---|---|
| Text quoted | "Marguerite [REINE], m. Nicolas SARDE, Jan. 20, 1767." | "Nicolas (Pierre and [\*]), m. Marguerite REINE, Jan. 20, 1767, w. Francoise RENE, Antoine DEJAN" |
| Groom's father | not given | **Pierre** |
| Groom's mother | not given | illegible in the register `[*]` |
| Witnesses | not given | Françoise Rene, Antoine Dejan |

**Consequence for the site.** The `nicolasSardet` note currently reads: "His own Bordeaux parents are the next step on this line." One of those parents is already inside the citation the site prints. His father was **Pierre Sardet**; the mother's name was already illegible when SRANO's editors abstracted the register. A Bordeaux search should be run on *Pierre* Sardet, not on Nicolas alone.

Separately, SRANO Vol. 3 confirms the Bordeaux origin the site asserts. Vol. 3, PDF page 291 (printed 271), in the entry for his daughter Marguerite's 1783 marriage:

> Marguerite (Nicolas, native of Bordeaux, and Margarita SOREN [*sic* — REINE], native of this parish), m. Joseph GILLARD, Oct. 5, 1783 (SLC, M4, 157)

---

## 3. Nicolas Sardet — daughter Eulalie's baptism, naming his trade

**Citation as printed:** 16 January 1774 — SLC, B7, 35 (SRANO Vol. 3)

**VERDICT: CONFIRMED**

SRANO Vol. 3, **PDF page 290** (printed 270), under `SARDET [@SARDE, SARDEL, SARDI]`:

> Eulalie Alexandrine (Nicolas, master cooper, and Marie Margueritte REINE), b. Jan. 16, 1774, bn. Jan. 5, 1774, s. Nicolas Alexandre DELASSIZE [@DELASIZE] and Marie Eulalie DELASSIZE (SLC, B7, 35)

Exact match on date, register, page, parents, godparents, and the trade. The site's transcription is verbatim; it omits only the editorial variant marker `[@DELASIZE]`, which is not a substantive omission.

---

## 4. Marguerite Reyne — baptism, St. Louis church, New Orleans

**Citation as printed:** 6 November 1752 — SLC, B2, 269 (SRANO Vol. 2)

**VERDICT: CORRECTED** — the record is exactly where the citation says, but the mother's surname on the page is not the one the site prints.

SRANO Vol. 2, **PDF page 255** (printed 236), under `REINE [@RAINE, RENNE]`. Read from the rendered page image, not from OCR:

> Marie Marguerite (Etienne and Francoise **FAUX**), b. Nov. 6, 1752, bn. Nov. 6, 1752, s. Laurant BAILLY and Marguerite CHENET (SLC, B2, 269)

**Side by side:**

| | Site | Source |
|---|---|---|
| Mother | "Francoise **[RENARD]**" | "Francoise **FAUX**" |
| Everything else | b. Nov. 6 1752, bn. Nov. 6 1752, s. Laurant BAILLY and Marguerite CHENET | identical |

`FAUX` is genuinely what the volume prints. It is not an OCR artefact — the page was rendered and read directly, and the surrounding entries on the same page print `RENARD` and `RENAULD` cleanly, so the typesetter's letterforms are not in doubt here.

The site's square brackets do signal an editorial substitution rather than a quotation, which is honest as far as it goes. But a reader cannot tell from the page that the printed abstract says something else entirely. This should be shown, not silently repaired — particularly because the surrounding entries in the very same section settle the question in the site's favour: three of Marguerite's five siblings are abstracted with the mother named `RENARD`, one as `RENAULD`. `FAUX` is almost certainly a slip by SRANO's editor or by the 1752 clerk. The right fix is to quote `FAUX` and then say so.

The same section confirms the identification beyond argument: this is the only child of Étienne Reine baptised on 6 November 1752, and the register page (B2, 269) matches.

---

## 5. Étienne Reyne — the earliest trace of him, 16 March 1750

**Citation as printed:** St. Louis church, New Orleans — baptism of Marie Françoise Castel, 16 March 1750 (SLC, B2, 180); SRANO Vol. 1 (1718–1750)

**VERDICT: CONFIRMED**

SRANO Vol. 1, **PDF pages 62–63** (printed 42–43), under `CASTEL [@CASTELL]`. The entry breaks across the page turn; both halves were rendered and read visually:

> Marie Francoise (Cecile CHRISPHE, widow Jean CASTEL), b. March 16, 1750, s. Jean Baptiste LEGROS [@GROS], surnamed LA TANDRILLE, resident, and Marie Francoise RENART [@RENARD], **sp. Etienne REINE, mason** (SLC, B2, 180)

The claim holds in full: the date, the register page, the identification of Françoise as "spouse of Étienne Reine, mason," and the site's point that he is *not yet* styled "master" mason here. The volume covers 1718–1750 and contains no `REINE` headword at all, so this godmother's line really is his earliest appearance in the abstracted series.

Two small fidelity notes on the site's quotation:

- The site prints the mother of the baptised child as "Cecile CHRISTOPHE"; the page prints **CHRISPHE**. The site's reading is certainly right — the next entry on the same page, for the same family, prints "Cecille CHRISTOPHE" — but it is a silent repair of the source.
- The site prints "MARIE FRANÇOISE RENARD"; the page prints **RENART**, with `[@RENARD]` as the editorial variant. Substantively identical.

---

## 6. Étienne Reyne — his children's baptisms, St. Louis church

**Citation as printed:** SLC registers B2–B5, 1752–1766 (SRANO Vol. 2)

**VERDICT: CONFIRMED**

The whole family sits together in SRANO Vol. 2, **PDF page 255** (printed 236), under `REINE [@RAINE, RENNE]`. Transcribed in full:

> Louise Francoise (Etienne and Francoise RENARD), b. Nov. 11, 1757, bn. Nov. 9, 1757, s. Louis HARANG and [o] MA[N?]E, sp. BAILLI (SLC, **B3, 86**)
>
> Marguerite ([\*] and [\*]), m. Nicolas SARDE, Jan. 20, 1767 (SLC, M2, 25)
>
> Marie Jeanne (Etienne and Francoise RENARD), b. Oct. 26, 1755, bn. Oct. 25, 1755, s. Jean CALLIER [@CAILLIERE] and Jane [@Marie Jeanne] REINE (SLC, **B3, 48**)
>
> Marie Joseph (Estienne, resident, and Francoise RENAULD), b. July 5, 1766, bn. June 19, [1766?], s. Francois COUSIN and Marie Margrite [@Margueritte] REINE [@RENNE] (SLC, **B5, 136**)
>
> Marie Marguerite (Etienne and Francoise FAUX), b. Nov. 6, 1752, bn. Nov. 6, 1752, s. Laurant BAILLY and Marguerite CHENET (SLC, **B2, 269**)
>
> Pierre (Etienne, **master mason**, and Francoise RENARD), b. Dec. 8, 1761, bn. Dec. 1, 1761, s. Pierre ZERINGUE and Marie Francoise FROIENNE (SLC, **B4, 89**)

The citation's range is exactly right: registers **B2, B3, B4 and B5**, spanning **1752 to 1766**. Every one of the site's per-child details checks out — the baptised/born date pairs, "master mason" appearing first with Pierre in 1761, Pierre Zeringue as godfather, François Cousin as godfather to his own half-sister in 1766, the thirteen-year-old Marguerite as her godmother, and the "Jane REINE" who stood for Marie Jeanne in 1755 and implies other Reyne kin in the city.

**One addition.** SRANO documents a **sixth child not on the site's list** — a son Étienne, who married and had issue. SRANO Vol. 5 (1791–1795), PDF page 334, under `REINE [@RENET]`:

> Etienne (Esteban and Francisca RENAR), m. Manon CHENET, Nov. 11, 1793, w. Jean Lous PICOU, [0] LABURIERE, P. REINE (SJBED, M1, 57)

and SRANO Vol. 6 (1796–1799), PDF page 252, under `REYNE`:

> Francisco (Estevan, **native of this parish**, and Maria GENET, native of St. John Baptist Parish on German Coast), b. Jan. 30, 1796, bn. Aug. 31, 1795, pgp. Estevan REYNE and [Francisca] RENAR, mgp. Alexandro GENET and Margarita PANKERNE, s. Francisco SOUSIN and Catalina CUL[N/R]T (SLC, B11, 411)

He is presumably the "Etienne REINE f[ils]" the site already notes as a witness at the 1783 Gillard marriage. His baptism is not in the Vol. 2 section, so it fell in folios that were lost or were never abstracted — but his marriage and his son's baptism put him beyond doubt. Note also the witness "P. REINE" at his 1793 wedding: his brother Pierre.

---

## 7. Marie Françoise Renard — "the first time she appears," 16 March 1750

**Citation as printed:** St. Louis church, New Orleans — baptism of Marie Françoise Castel (SLC, B2, 180); SRANO Vol. 1

**VERDICT: CORRECTED** — the record is real and correctly quoted, but it is not the first time she appears.

The 1750 Castel entry is confirmed exactly as at finding 5 above. What is wrong is the framing. She appears **five years earlier in the same volume**, as a mother rather than a godmother. SRANO Vol. 1, **PDF page 78** (printed 58), under `COUSIN` — read from the rendered page image:

> **COUSIN**
> Jean Francois (Pierre and Francoise RENARD), b. Sept 7, 1745, s. Jean CONNARD and Sylvestre? MAUNOY (SLC, B2, 49)

**Side by side:**

| | Site | Source |
|---|---|---|
| Her first appearance in SRANO | 16 March 1750 (SLC, B2, 180), as godmother | **7 September 1745** (SLC, B2, 49), as mother of Jean François Cousin |

The site is not unaware of this record — it lists "Jean François Cousin, born and baptised 7 September 1745" in her children, and its note correctly makes Jean Connard the man who raised her and then stood godfather to her first child. Both of those details are confirmed by the entry above. Only the record *title* is wrong. It should say something like "The first time she appears in her own right — as a godmother," or the 1745 baptism should take the "first appearance" slot.

For Étienne, by contrast, "earliest trace of him" is correct — he is genuinely absent from Vol. 1 apart from that one 1750 line.

---

## 8. Elisabeth Sarde — baptism, St. Louis church, New Orleans

**Citation as printed:** 16 January 1774 — SLC, B7, 35 (SRANO Vol. 3)

**VERDICT: CONFIRMED**

This is the same record as finding 3, and it is transcribed on the site verbatim. The apparent problem — that the site cites one baptism for two different daughters, "Eulalie" under Nicolas and "Elisabeth" here — is not a problem. `elisabethSarde` is only the internal key; the profile itself carries `given: 'Eulalie Alexandrine'` and states plainly that "Elisabete Sarde" is what the clerk wrote on her son's 1820 marriage record. Site and source agree.

SRANO independently supports the site's argument that family tradition confused her with her youngest sister. The Vol. 3 `SARDET` section, PDF page 290 (printed 270), lists **Eugenia** as a separate child:

> Eugenia (Nicolas and Margarita REGN), b. Jan. 6, 1780, s. Jaime JORDAS and Maria SARDET (SLC, B9, 83)

There is no daughter named Elisabeth anywhere in the Sardet entries of Vols. 2, 3 or 4. The full sibling set SRANO records is: Jeanne (1772), Eulalie Alexandrine (1774), Françoise (c. 1775), Eufrosine (1776), Estevan (1778), Eugenia (1780), plus Marie Françoise (1769) and Marie Marguerite (1770) in Vol. 2, and the Marguerite who married Joseph Gillard in 1783.

---

## 9. Joseph Lemoine — named at his son's baptism

**Citation as printed:** Church of St. John the Baptist, Edgard — B7, p. 49; SRANO Vol. 18 (1828–1829)

**VERDICT: CONFIRMED**

SRANO Vol. 18, **PDF page 271**, under `LEMOINE`:

> Alexis Allonzo (Joseph and Marie RIBAS), b. Nov. 22, 1829, bn. Feb. 4, 1829, s. Pierre GRAVOIS and Marie LATOUR, all of St. Charles Parish (SJBED, B7, 49)

Exact match. The site's transcription on both the `josephLemoine` and `alexisLemoine` profiles is verbatim, including the "all of St. Charles Parish" phrase the site leans on to move the family one parish downriver, and the born/baptised date pair.

The register page number was independently cross-checked: four other 1829 baptisms in Vol. 18 also cite SJBED B7, 49, which is consistent with p. 49 being a normal page of that book rather than a misprint.

---

## 10. Marie Ribas — named at her son's baptism

**Citation as printed:** Church of St. John the Baptist, Edgard — B7, p. 49; SRANO Vol. 18 (1828–1829)

**VERDICT: CONFIRMED**

Same entry as finding 9, transcribed above. She is named as `Marie RIBAS`, in that spelling, in Vol. 18.

---

## 11. Marie Ribas — the Ribas family she probably belongs to

**Citation as printed:** SRANO Vols. 14 and 16 — St. John the Baptist, Edgard (SJBED, B4, 57 and B4, 165)

**VERDICT: CONFIRMED**

Both entries resolve exactly, under the spelling **RIVAS** (there is no `RIBAS` headword in either volume — the site already anticipates this and says so).

SRANO Vol. 14 (1820–1821), **PDF page 368**:

> **RIVAS**
> Antoine (Antoine de Santo Yago and Maria Brigitta LEGO), b. May 11, 1820, bn. Aug. 10, 1819, s. Prospere LA-TOUR and Maria AUSSIT, all residents of this parish (SJBED, **B4, 57**)

SRANO Vol. 16 (1824–1825), **PDF page 367**:

> **RIVAS**
> Louis (Antoine and Marie Brigite LEGAU), b. Mar. 22, 1824, bn. Apr. 29, 1822, s. Zenon ROUSSELLE and Estelle DE LA TOUR, all of St. Charles Parish (SJBED, **B4, 165**)

Both page references are correct, both households are the right family in the right parish in the right decade, and the site's two inferences hold on the page: "Antoine de Santo Yago" is there in the 1820 entry, and a **ROUSSELLE** really is godfather to the 1822 child. The site's careful "NOT PROVEN, but close enough to name" framing is the right level of confidence — nothing in these two entries links the Rivas household to Marie by name.

**One supporting detail the site could add.** The godmother at Alexis Alonzo Lemoine's 1829 baptism is **Marie LATOUR**, and the godfather at the 1820 Rivas baptism is **Prospere LA-TOUR**, with **Estelle DE LA TOUR** as godmother in 1824. The same Latour family stands at the font for both households, all of St. Charles Parish. That is a third strand in the same rope.

---

# Additional high-value claims

## A. Étienne Reyne, Marguerite Reyne, and "naturales TODOS de esta Parroquia"

**VERDICT: CORROBORATED — and by an independent hand.**

The site rests a large claim on the 2 May 1784 remarriage act, read from the digitised register: that "naturales **todos** de esta Parroquia" reaches past the bride to her parents, making Étienne Reyne and Françoise Renard New Orleans natives rather than immigrants.

SRANO's editors abstracted that same act, and read it the same way. Vol. 4, **PDF page 281** (printed 260), under `REEN` — verified against the rendered page image:

> **REEN**
> Maria Margarita (Estevan and Francisca RENARD, **natives of this parish**), **native of this parish**, widow of [o] CADET SARDE, m. Pedro BOURGEOIS, May 2, 1784 (SLC, M5, 27)

Note the construction: "natives of this parish" sits *inside* the parenthesis, attached to Estevan and Francisca, and then "native of this parish" is stated *again* for the bride. That is precisely the distribution of "todos" the site argues for, made by an editor working from the register in the 1980s with no interest in this family. The site's flagship reading is independently confirmed.

The groom-side entry, Vol. 4 PDF page 59 (printed 38), completes the act:

> …ive of Caen in Normandy in France, m. Maria Margarita REEN, May 2, 1784, w. Vicente LLORCA, BE[R?]TOMECE, [(LA/LE) BOURGEOIS?] (SLC, M5, 27)

And it is corroborated a **second** time, eleven years later, in a record the site does not cite. SRANO Vol. 5, PDF page 334, under `REINE [@RENET]`:

> Alceto Carlos (Pedro and Maria Ana CHALAIR, natives of this parish), b. Jul. 16, 1795, bn. Jul. 6, 1795, **pgp. Estevan REINE and Francisca RENARD, natives of this parish**, mgp. Francisco CHALAIR, native of Versailles in France, and Maria Luisa BARI, of this parish, s. Carlos CHALAIR and Constanza GUIGNAN (SLC, B11, 377)

This is their grandson's baptism, through their son Pierre. The clerk names Étienne and Françoise as paternal grandparents and calls them natives of this parish — while in the same breath identifying the *other* grandfather as a native of Versailles. The register distinguishes natives from immigrants deliberately, and it puts this couple on the native side twice, forty-five years apart. This is worth adding to the site: it is a second, independent witness to the claim the whole Reyne branch turns on.

## B. Nicolas Sardet and his marriage to a Reyne

**VERDICT: CONFIRMED**, with the father Pierre added — see finding 2 above.

The Sardet–Reyne connection is dense in these volumes and every strand of it holds. Beyond the 1767 marriage act itself, Vol. 2 PDF page 267 gives the couple's daughters with Reyne kin standing as godparents:

> **SARDE [@SARDAIN, SARDET]**
> Marie Francoise (Nicolas [@Nicola] and Margueritte REINE), b. Aug. 19, 1769, s. Andre CHILOQUE and **Francoise RENARD** (SLC, B6, 56)

That is Françoise Renard standing godmother to her own granddaughter in 1769 — exactly the detail the site's `margueriteReyne` blurb claims ("still standing godmother to a Sardet granddaughter in 1769"). Confirmed.

Vol. 3 adds Étienne Reyne and his children as godparents to the next generation: "s. Estevan REINE and Juana REINE, parishioners" at Estevan Sardet's 1778 baptism (SLC, B9, 16), and "s. Pierre REINE" at Eufrosine's in 1776.

## C. Marie Françoise Renard / Reynaud, Jean Reynaud and Hélène Dorigny

**VERDICT: NOT FOUND in SRANO — which is what the site says, and the site is right to say it.**

Searched: all eighteen volumes, full text, for `DORIGNY`, `ORIGNY`, `DORIGNE`; and Vol. 1 (1718–1750, the only volume covering their lifetimes) for the headwords `RENARD`, `RENART`, `REYNAUD`, `REYNARD`, `RENAUD`.

- **Hélène Dorigny: zero hits in all eighteen volumes**, under any of the three spellings. Nothing.
- **Jean Reynaud: absent.** There is no `REYNAUD` headword in Vol. 1. The single `RENARD` headword, Vol. 1 PDF page 239 (printed 219), contains one entry and it is not this family: "Pierre Joseph, child of Swiss soldier in company of DEMEIRUEILLEVA, i. Sept. 28, 1733 (SLC, B1, 85)."
- Marie Françoise Renard herself appears in Vol. 1 only in the two entries at findings 5 and 7 — as a mother in 1745 and a godmother in 1750 — never as a principal with her filiation recorded.

The site's note on Jean Reynaud states: "He is not in the sacramental abstracts." That is now positively verified across the whole series rather than assumed. The same goes for Hélène Dorigny's "SEARCHED, AND GENUINELY EMPTY." Both negative claims are sound, and the 1740 French Superior Council marriage contract really is the only thing holding this couple up.

## D. Étienne Reyne's children's baptisms in B2–B5, 1752–1766

**VERDICT: CONFIRMED** — see finding 6 above, with a sixth child added.

---

# Two loose threads worth chasing

**A. Which Sardet daughter married Urbain Gaiennie?**

The site says Marie Jeanne, born 15 April 1772. SRANO points at a different daughter, and does so in the register's own margin. Vol. 2, PDF page 268 (printed 249), read from the rendered image:

> Marie Margueritte (Nicola and Margueritte RENNE), b. Sept. 9, 1770, s. Etienne RENNE and Margueritte SCHONIST **[marginal note: died, May 25, 1835, Widow of Urbain GAINNIE]** (SLC, B6, 89)

A later hand went back to the 1770 baptism and wrote in the woman's death and her husband's name. That is normally the strongest kind of identification a parish register offers, because the clerk who added it knew which entry he was returning to.

Against that: the site has Marguerite Sardet marrying Joseph Gillard in 1783 and dying in 1794 at Cabahanoce, and the same woman cannot be both. SRANO does not settle it — the 1789 marriage abstract calls the bride only "Maria," and the 1783 Gillard bride is "Marguerite." The likeliest reconciliation is that the Gillard bride is the eldest daughter from the lost 1767–68 folios (whom the site already posits) and that the 1770 child is the woman who married Urbain in 1789 and died a widow in 1835 — which would make the site's "Marie Jeanne (b. 15 April 1772)" the wrong sister. This needs the actual 1789 act, not the abstract.

**B. The GAIGNE spelling.**

The surname is printed `GAIGRE` at Vol. 4 PDF page 158 and `GAIGNE` at PDF page 302 — SRANO itself is inconsistent within one volume. Anyone searching these volumes for this family should try GAIGNE, GAIGRE, GAINNIE (the 1835 marginal note), GANIER (the 1793 St. James act quoted on the site) and GAIENNIE. `GAGNIER`, the site's chosen headword spelling, appears nowhere in SRANO.

---

# Method notes and reproducibility

- Text extracted from all 18 PDFs with `pypdf`; page images rendered with `PyMuPDF` at 260 dpi for visual verification.
- "PDF page" throughout means the page index within the PDF file. Where the volume's own printed folio number was legible it is given in parentheses; they differ by roughly 20 pages because of front matter.
- Every finding marked CORRECTED was confirmed by rendering the page as an image and reading it directly, so that no correction rests on OCR alone. Findings 4, 5, 7, and 2 were all verified this way, as were the two loose threads and the "naturales todos" corroboration at A.
- Spelling variants attempted across the series: Reyne / Reine / Renne / Reyne / Raine / Regn / Rene / Reen / Reisne; Renard / Renart / Reynaud / Raynaud / Reynard / Renaud; Sardet / Sarde / Sardel / Sardi / Sardain; Ribas / Rivas / Riba / Ribes / Rives / Rebas / Ribbas; Gagnier / Gaignier / Gaigne / Gaigre / Ganier / Gagne / Gaiennie / Gayenne; Dorigny / Origny / Dorigne.
