# BRDR Citation Verification Log

**Date of audit:** 12 August 2026
**Auditor:** Claude (automated source check, read-only against local PDFs)
**Scope:** All 14 entries in the `"BRDR (local PDF)"` array of `research/verification-worklist.json`

## What was asked

Each of the 14 citations below was carried on the site with the banner
`[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger]`.
The task was to open the actual Diocese of Baton Rouge volumes held locally, find the cited
record, transcribe what the page actually says, and report CONFIRMED / CORRECTED / NOT FOUND.
No citation was to be guessed or reconstructed.

## Sources used

All nine volumes in `C:\Users\pedea\CoreRail\Memory\`:

| Vol | File | Text layer |
|---|---|---|
| 2 | Diocese of Baton Rouge Catholic Church Records - Volume 2 1770-1803 reprint 2019.pdf | genuine, clean |
| 3 | ...Volume 3 1804-1818 reprint 2020.pdf | genuine, clean |
| 4 | ...Volume 4 1820-1829 reprint 2014.pdf | genuine, clean |
| 5 | ...Volume 5 1830-1839 reprint 2021.pdf | genuine, clean (not needed) |
| 6 | ...Volume 6 1840-1847 Manuscript 1986.pdf | scanned, OCR (not needed) |
| 7 | ...Volume 7 1848-1852 Manuscript 1987.pdf | scanned, **poor OCR** |
| 8 | ...Volume 8 1853-1857 reprint 2014.pdf | genuine, clean |
| 9 | ...Volume 9 1858-1862 reprint 2015.pdf | genuine, clean |
| 12 | ...Volume 12 1871-1873 reprint 2016.pdf | genuine, clean |

## Method

1. Every volume was extracted to plain text page by page with `pypdf`, preserving PDF page boundaries.
2. Each surname was searched across the whole volume rather than jumping to a page number, because
   BRDR is organised alphabetically by surname and the citation's number is a **church register page**,
   not a book page.
3. Every hit was then read back against the rendered page image (PyMuPDF at 200 to 300 dpi) so the
   transcription came from the printed page, not from the OCR layer. This mattered: Volume 7 is a
   1987 typescript whose OCR mangles names (see the note under Citation 1).
4. Both the **PDF page** and the **printed book page** are given for every record. The printed page
   number sits at the foot of each page in these volumes.

## Church register codes (verified from the volumes' own front matter)

From the ABBREVIATIONS / CHURCH PARISHES key, Vol. 9 p. 3 and Vol. 7 p. 3, Vol. 12 p. 9:

- **ASM** = Assumption of Plattenville, est. 1793
- **ASC** = Ascension of Donaldsonville, est. 1772
- **SJA** = St. James, est. 1770
- **SMI** = St. Michael of Convent, est. 1809
- **SPH** = St. Philomena, Labadieville, est. 1847 (Vol. 7 key says est. 1848; records begin 1848)

Every church name asserted in a site record title is therefore correct.

---

## Summary

| Verdict | Count |
|---|---|
| **CONFIRMED** | **14** |
| **CORRECTED** | **0** |
| **NOT FOUND** | **0** |
| **Total** | **14** |

Every one of the 14 BRDR citations resolves exactly as printed on the site, and every quoted
transcription on the site matches the book word for word (apart from trivial added commas noted
below). The register code and register page number in each citation is correct.

**This does not mean there is nothing to act on.** Four substantive findings are recorded in
"Cross-cutting findings" at the end. The most important is that the burial record used to establish
Antoine Florentin Pedeau's death names no parents and no spouse, so the identification rests on
inference, not on the document.

### Results at a glance

| # | Person | Claim | Citation (register) | Book location | Verdict |
|---|---|---|---|---|---|
| 1 | pierreNuma | Baptism, Assumption, Plattenville | Vol. 7, ASM-9, 290 | Vol. 7, PDF p. 408 = printed p. 402 | CONFIRMED |
| 2 | pierreNuma | Marriage, St. Philomena, Labadieville | Vol. 12, SPH-4, 367 | Vol. 12, PDF p. 88 = printed p. 78; and PDF p. 470 = printed p. 460 | CONFIRMED |
| 3 | antoineFlorentin | Baptism, Assumption, Plattenville | Vol. 3, ASM-6, 288 | Vol. 3, PDF p. 654 = printed p. 644 | CONFIRMED |
| 4 | antoineFlorentin | Burial | Vol. 9, ASM-10, 168 | Vol. 9, PDF p. 493 = printed p. 487 | CONFIRMED |
| 5 | marieCancienne | Burial | Vol. 9, ASM-10, 190 | Vol. 9, PDF p. 134 = printed p. 128 | CONFIRMED |
| 6 | michelPedeau | Marriage, Assumption, Plattenville | Vol. 3, ASM-2, 127 | Vol. 3, PDF p. 654 = printed p. 644; and PDF p. 44 = printed p. 34 | CONFIRMED |
| 7 | florenceAucoin | Burial | Vol. 7, ASM-10, 120 | Vol. 7, PDF p. 26 = printed p. 21 | CONFIRMED |
| 8 | alphonseSr | Baptism, St. Michael, Convent | Vol. 4, SMI-3, 164 | Vol. 4, PDF p. 227 = printed p. 217 | CONFIRMED |
| 9 | josephGervais | Baptism, St. James | Vol. 2, SJA-3, 157 | Vol. 2, PDF p. 350 = printed p. 336 | CONFIRMED |
| 10 | josephGervais | Marriage, St. Michael, Convent | Vol. 4, SMI-2, 77 | Vol. 4, PDF p. 227 = printed p. 217; and PDF p. 131 = printed p. 121 | CONFIRMED |
| 11 | josephGervais | Burial, St. Michael, Convent | Vol. 8, SMI-4, 236 | Vol. 8, PDF p. 262 = printed p. 254 | CONFIRMED |
| 12 | francoisGaiennie | Marriage, St. James | Vol. 2, SJA-2, 19 | Vol. 2, PDF p. 350 = printed p. 336; and PDF p. 752 = printed p. 738 | CONFIRMED |
| 13 | julienGagnier | Named in grandson Gervais's baptism | Vol. 2, SJA-3, 157 | Vol. 2, PDF p. 350 = printed p. 336 | CONFIRMED |
| 14 | elisabethSarde | Marriage, St. James | Vol. 2, SJA-2, 19 | Vol. 2, PDF p. 752 = printed p. 738; and PDF p. 350 = printed p. 336 | CONFIRMED |

---

# Citation 1 of 14: Pierre Numa Pedeau, baptism

- **Person:** `pierreNuma`
- **Claim as printed on the site:** Baptism, Church of the Assumption, Plattenville
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 7 (1848–1852), ASM-9, 290`

### VERDICT: CONFIRMED

### What the source actually says

Volume 7, **PDF page 408, printed page 402**, under the running heading `PEDEAU`:

> **PEDEAU**
> Honore Alcee Cyprien (Antoine Pedeau and Marie CANTIENNE) bn. 3 Mar. 1849 bt. 29 Oct. 1849 spo. Jean Baptiste Pedeau and Aselie Cantienne (ASM-9,309)
> **Pierre Numa (Antoine Pedeau and Marie CANCIENNE) bn. 20 Nov. 1847 bt. 11 May 1848 spo. Pierre Cancienne and Florence Aucoin (ASM-9,290)**

The site's own quoted text is:

> Pierre Numa (Antoine Pedeau and Marie CANCIENNE) bn. 20 Nov. 1847 bt. 11 May 1848 spo. Pierre Cancienne and Florence Aucoin.

Identical.

### Note on the OCR

The extracted text layer of Volume 7 renders the godfather as "**Pierce** Cancienne" and the
mother as "CKNCIENNE". Reading the rendered page image at 200 dpi shows the book plainly prints
"**Pierre** Cancienne" and "CANCIENNE". The site is right and the OCR is wrong. Volume 7's text
layer should not be trusted on its own for any future work; always fall back to the page image.

### Corroboration found in passing

Immediately above, on the same page, Volume 7 carries a separate heading `PEDAUX`:

> **PEDAUX**
> Zephirin Ulysse (Antoine Pedaux and Marie CANTIENNE) bn. 22 April 1851 bt. 4 Oct. 1851 spo. Zephirin Montet and Adele Barrillot (SPH-2,38)

So the compilers filed this one family under three spellings across the set: `PEDAUX` and `PEDEAU`
in Vol. 7, `PEDO, PEDEAU` in Vol. 9, `PEDEAU` in Vol. 3 and Vol. 12. The godfather at Honore
Alcee Cyprien's baptism, "Jean Baptiste Pedeau", is almost certainly the Juan Bautista Pedeau
baptised in 1810 at ASM-6, 216 (see Citation 3), which ties the 1810s generation to the 1840s one.

---

# Citation 2 of 14: Pierre Numa Pedeau, marriage

- **Person:** `pierreNuma`
- **Claim as printed on the site:** Marriage, St. Philomena, Labadieville
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 12 (1871–1873), SPH-4, 367`

### VERDICT: CONFIRMED

The record is printed twice in Volume 12, once under the bride's surname and once under the groom's.

### What the source actually says (1): under `BORNE`

Volume 12, **PDF page 88, printed page 78**:

> Eulalie of Lafourche Parish (Marcellin Borne and Anne Marie GUEDRY) m. 27 April 1871 Numa PEDEAUX (Antoine Pedeaux and Marie CANCIENNE) wit. Alcee Pedeaux; Edouard Borne; Ulysse Pedeaux; Ulger Douce; Odile Foret; Edw. Vives; Marie Vives; Clementine Schiffestien (SPH-4, 367)

### What the source actually says (2): under `PEDEAU`

Volume 12, **PDF page 470, printed page 460**:

> Alice Marie (Antoine Pedeaux and Marie CANCIENNE) m. 11 Sept. 1873 Taylor Paul HIMEL (Drozin Himel and Mirte TERREBONNE) wit. D. Himel; Wm. F. Himel; Alcee Pedeaux; Ulysse Pedeaux; Adolphe F. Himel; Numa Pedeaux; D. M. Carmourche (SPH-4, 458)
> Antoine Philippe Joseph (Numa Pedeau and Elodie BORNE) bn. 25 Feb. 1872 bt. 20 April 1872 spo. Alcee Pedeau and Marie Borne (SPH-3, 121)
> **Numa (Antoine Pedeaux and Marie CANCIENNE) m. 27 April 1871 Eulalie BORNE of Lafourche Parish (Marcellin Borne and Anne Marie GUEDRY) wit. Alcee Pedeaux; Edouard Borne; Ulysse Pedeaux; Ulger Douce; Odile Foret; Edw. Vives; Marie Vives; Clementine Schiffestien (SPH-4, 367)**

The site quotes the second version verbatim. Identical.

### Observation worth carrying forward

The same volume gives the wife's forename two ways. At the 1871 marriage (SPH-4, 367) she is
**Eulalie** Borne. At the 1872 baptism of their son Antoine Philippe Joseph (SPH-3, 121) she is
**Elodie** Borne. The site uses Eulalie, which agrees with the marriage act and with the 1900
census "Ulali" reading noted elsewhere in the worklist. The Elodie form is a real variant in the
register, not a site error, but it is worth a line on the page so it is not "discovered" later as a
contradiction.

Also newly visible here: a daughter **Alice Marie Pedeaux**, who married Taylor Paul Himel on
11 September 1873 (SPH-4, 458), with brothers Alcee, Ulysse and Numa all witnessing. That is a
sibling of Pierre Numa not currently listed in the worklist.

---

# Citation 3 of 14: Antoine Florentin Pedeau, baptism

- **Person:** `antoineFlorentin`
- **Claim as printed on the site:** Baptism, Church of the Assumption, Plattenville
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 3 (1804–1818), ASM-6, 288`

### VERDICT: CONFIRMED

### What the source actually says

Volume 3, **PDF page 654, printed page 644**, under the heading `PEDEAU`. The whole Pedeau section
of Volume 3 is four entries long and reads:

> **PEDEAU**
> **Antonio Florentin (Miguel and Florencia AUCOIN) bn. 1 Nov 1812 bt. 25 Apr 1813 spo. Antonio Robertson and Margarita Bourque (ASM-6, 288)**
> Juan Bautista (Miguel and Florencia AUCOIN) bn. 12 Nov 1810 bt. 28 Apr 1811 spo. Juan Bautista [page torn] and Elena Tibodaux (ASM-6, 216)
> Michel, of Nantes, Brittany, France (Michel and Jeanne MURAILLE) m. 26 Jan 1808 Florence Marguerite AUCOIN, of St. Malo, Brittany, France (Michel and Isabelle HEBERT, both decd.) wit. Pierre Hypolite Brais; Jean Baptiste Tojan; Isaac Landry (ASM-2, 127)
> Michel (Michel, of Nantes, France and Florence Marguerite AUCOIN, of St. Malo, France) bn. 28 Oct 1808 bt. 11 Nov 1808 spo. Isaac Landry and Marie Aucoin, aunt (ASC-5, 327)

The site's quoted text is:

> Antonio Florentin (Miguel and Florencia AUCOIN) bn. 1 Nov 1812 bt. 25 Apr 1813 spo. Antonio Robertson and Margarita Bourque.

Identical.

### Note

The record does not name a church in words; the church is carried by the code ASM, which the
volume's own key defines as Assumption of Plattenville. The site's title is therefore correct.

Two siblings appear on the same page and are not in the worklist: **Michel fils** (b. 28 Oct 1808,
bapt. 11 Nov 1808, ASC-5, 327, so baptised at Ascension of Donaldsonville, not Assumption) and
**Juan Bautista** (b. 12 Nov 1810, ASM-6, 216).

---

# Citation 4 of 14: Antoine Florentin Pedeau, burial

- **Person:** `antoineFlorentin`
- **Claim as printed on the site:** Burial
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 9 (1858–1862), ASM-10, 168`

### VERDICT: CONFIRMED (citation resolves exactly; see the caveat, which is the single most important finding of this audit)

### What the source actually says

Volume 9, **PDF page 493, printed page 487**. The heading and its single entry read, in full:

> **PEDO, PEDEAU**
> **Antoine Pedo, age 45 years, bur. 8 Aug. 1858 d. yesterday (ASM-10, 168)**

The site's quoted text is:

> Antoine Pedo, age 45 years, bur. 8 Aug. 1858 d. yesterday.

Identical.

### CAVEAT: the record carries no filiation

This is the only Pedeau/Pedo/Pedaux entry of any kind in Volume 9 apart from Citation 5, and it
names **no parents, no spouse, and no residence**. Nothing in the document itself says this Antoine
Pedo is Antonio Florentin Pedeau, son of Michel and Florence Aucoin.

The identification rests on three inferences, all reasonable but none of them stated on the page:

1. **Age.** 45 years at burial on 8 August 1858 implies birth around late 1812 or 1813. Antonio
   Florentin was born 1 November 1812 (Citation 3), which would make him 45 years and 9 months.
   The fit is very good.
2. **Parish.** The burial is at ASM, Assumption of Plattenville, which is where the family's
   baptisms are (Citations 1 and 3).
3. **The wife.** Four years later the same register buries "Marie Cancienne, age 40 years, wife of
   Antoine PEDO" (Citation 5), and Antoine Pedeau x Marie Cancienne is the couple named as parents
   in Citations 1 and 2.

That is a sound circumstantial case and almost certainly correct. But the site should not present
this as a record that names the man; it names an Antoine Pedo of the right age in the right parish.
If a stronger primary is ever wanted, the underlying Assumption register itself (ASM-10, p. 168)
may give more than the abstract does.

---

# Citation 5 of 14: Marie Cancienne, burial

- **Person:** `marieCancienne`
- **Claim as printed on the site:** Burial
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 9 (1858–1862), ASM-10, 190`

### VERDICT: CONFIRMED

Note that this record is **not** filed under Pedeau. It is filed under the woman's maiden name,
CANCIENNE, which is why a Pedeau-only search of Volume 9 returns nothing at ASM-10, 190.

### What the source actually says

Volume 9, **PDF page 134, printed page 128**, last entry in the `CANCIENNE` section:

> Louise (Olivier Cancienne and Felonise LANDRY) m. 1 Feb. 1858 Pierre BOUDREAUX (Francois Boudreaux and Artemise DELAUNE) wit. Adrien Cancienne; Theodule Delaune; Elizabeth Blanchard; Feucien Beigen; Vincent Landry; Celezie Hebert; Marie Louise Cancienne (SPH-4, 5)
> **Marie Cancienne, age 40 years, wife of Antoine PEDO, bur. 12 May 1862 d. yesterday (ASM-10, 190)**

The site's quoted text is:

> Marie Cancienne, age 40 years, wife of Antoine PEDO, bur. 12 May 1862 d. yesterday.

Identical.

### Observation

The abstract calls her "**wife** of Antoine PEDO" although Antoine was buried on 8 August 1858,
three years and nine months earlier (Citation 4). Either the register clerk wrote "épouse" out of
habit rather than "veuve", or the compilers standardised it. This is a genuine internal
inconsistency in BRDR, not a site error, and it very slightly weakens the chain in Citation 4,
because a register that calls a widow a wife is a register whose relationship language is loose.

Age 40 at burial in May 1862 implies birth around 1821 or 1822.

---

# Citation 6 of 14: Michel Pedeau, marriage

- **Person:** `michelPedeau`
- **Claim as printed on the site:** Marriage, Church of the Assumption, Plattenville
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 3 (1804–1818), ASM-2, 127`

### VERDICT: CONFIRMED

Printed twice in Volume 3, under both surnames.

### What the source actually says (1): under `PEDEAU`

Volume 3, **PDF page 654, printed page 644**:

> Michel, of Nantes, Brittany, France (Michel and Jeanne MURAILLE) m. 26 Jan 1808 Florence Marguerite AUCOIN, of St. Malo, Brittany, France (Michel and Isabelle HEBERT, both decd.) wit. Pierre Hypolite Brais; Jean Baptiste Tojan; Isaac Landry (ASM-2, 127)

### What the source actually says (2): under `AUCOIN`

Volume 3, **PDF page 44, printed page 34**:

> Florence Marguerite, of St. Malo, Brittany, France (Michel and Isabelle HEBERT, both decd.) m. 26 Jan 1808 Michel PEDEAU, of Nantes, Brittany, France (Michel and Jeanne MURAILLE) wit. Pierre Hypolite Brais; Jean Baptiste Tojan; Isaac Landry (ASM-2, 127)

The site quotes the first version verbatim. Identical.

### A dating fact recovered in passing, four lines further down the same AUCOIN column

Volume 3, PDF page 44, printed page 34:

> Florencia, of St. Nogata, St. Malo, widow of Miguel Pedeau (Michel and Ysabel HEBERT, both decd.) m. 26 Nov 1814 Francisco BARIOT (Santiago and Maria MAZEROLLE) wit. Michel Aucoin; Jean Charles Blanchard (ASM-2, 230)

repeated under `BARIOT` at Volume 3, PDF page 76:

> Francisco (Santiago and Maria MAZEROLLE) m. 26 Nov 1814 Florencia AUCOIN, of St. Nogata, St. Malo, widow of Miguel Pedeau (Miguel and Ysabel HEBERT, both decd.) wit. Michel Aucoin; Jean Charles Blanchard (ASM-2, 230)

This **brackets Michel Pedeau's death** between 25 April 1813 (he is alive, or at least not called
deceased, at his son Antonio Florentin's baptism) and 26 November 1814, when Florence remarries as
his widow. "St. Nogata" is the compiler's rendering of Saint-Énogat, which matches the
Saint-Énogat baptism the site already cites for Florence.

Michel Pedeau's own witness appearances elsewhere in Volume 3 confirm he was active in the parish:
`ASC-2, 152` (9 Feb 1807, witness at the Mercier / Margota marriage) and `ASM-2, 173` (6 May 1811,
witness as "Miguel Pedeau" at the Tauzin / Benoit marriage).

---

# Citation 7 of 14: Florence Aucoin, burial

- **Person:** `florenceAucoin`
- **Claim as printed on the site:** Burial
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 7 (1848–1852), ASM-10, 120`

### VERDICT: CONFIRMED

### What the source actually says

Volume 7, **PDF page 26, printed page 21**, under the running heading `AUCOIN also AUQUOIN`,
read from the page image because the OCR of this volume is unreliable:

> Firmin Aucoin, age 42 years bur. 1 June 1852 (ASM-10,121)
> **Florence Aucoin, age 72 years, wife of Francois BARIOT bur. 31 March 1852 (ASM-10,120)**
> Gregoire (Gregoire Aucoin and Clarise HEBERT) m. 22 Sept. 1851 Delphine CANCIENNE (Auguste Cancienne and Elise BLANCHARD) wit. Theodule Arseneaux; Valsin Cancienne; Joseph Blanchard; Isidore Aucoin (ASM-7,456)

The site's quoted text is:

> Florence Aucoin, age 72 years, wife of Francois BARIOT, bur. 31 March 1852.

Identical apart from one added comma after BARIOT, which the book does not print. Not a
substantive difference.

### Corroboration

Age 72 at burial on 31 March 1852 implies birth around 1779 or 1780. The Saint-Énogat baptism the
site cites separately gives her born 28 November 1780. Consistent.

She was alive and acting as godmother on 11 May 1848, at the baptism of her grandson Pierre Numa
(Citation 1), where she is named "Florence Aucoin". That is a nice independent tie between
Citation 1 and Citation 7. The site's note that the burial register settles the disputed death date
against WeRelate's "30 March 1872" is supported.

Caution for future work: there is at least one **other** Florence Aucoin in Volume 7, the wife of
Auguste Blanchard, who appears as a mother in marriage records at ASM-7, 457 and ASM-7, 460 in
1852. She is not this woman. Any future Florence Aucoin hit in this period must be checked against
the husband's name.

---

# Citation 8 of 14: Alphonse Florestan Gaiennie Sr., baptism

- **Person:** `alphonseSr`
- **Claim as printed on the site:** Baptism, St. Michael, Convent (St. James Parish)
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 4 (1820–1829), SMI-3, 164`

### VERDICT: CONFIRMED

### What the source actually says

Volume 4. The heading `GAINNIE` opens at PDF page 226, printed page 216, and the entries run onto
**PDF page 227, printed page 217**, where the first line on the page is:

> **Florentin (Gerve and Natalie CHENET) bn. 9 Sept. 1826 bt. 27 Sept. 1829 spo. Armand Bourgeois and Selese Frederic (SMI-3, 164)**
> Gervais, age 22, nat. of New Orleans (Francois and Elisabete SARDE, both decd.) m. 22 Jan. 1820 Nathalie CHENET, age 17 (Pierre and Susanne LAVIGNE) wit. Jean Baptiste Oury; Dominique LeBourgeois, Orter Reine; Maximillien Rousselle (SMI-2, 77)
> Gervais (Gervais and Natalie CHENET) bn. 6 Feb. 1821 bt. [illegible] May 1821 spo. Pierre Chenet and Madeleine Webre (SMI-3, 87)
> Marie Emeline (Gerve and Natalie CHENET) bn. [omitted] bt. 27 Sept. 1829 spo. Charle Roman and Emeline Gaienne (SMI-3, 164)
> Ulalie Orelia (Gervais and Natalie SCHENET) bn. 24 Feb. 1823 bt. 8 Jan. 1824 spo. Jean Marie [illegible] and Ulalie Gainier (SMI-3, 114)
> Uranie Elodie (Joseph Francois and Marceline LABATUT) bn. 15 Feb. 1826 bt. 16 Apr. 1827 spo. Louis Rene Gainnie and Eulalie Gainnie (SGA-6, 71)

The site's quoted text is:

> Florentin (Gerve and Natalie CHENET) bn. 9 Sept. 1826 bt. 27 Sept. 1829 spo. Armand Bourgeois and Selese Frederic.

Identical. The site's `alsoKnownAs` note, "recorded at baptism simply as 'Florentin'", is exactly
right: the register gives no other forename.

### Supporting detail confirmed

The site lists a sibling "Marie Emeline Gaiennie (baptised with him, 27 September 1829)". The
register bears this out precisely: Marie Emeline is baptised the same day at the same register page,
SMI-3, 164. This was a delayed double baptism, Florentin being three years old at the font.

---

# Citation 9 of 14: Joseph Gervais Gaiennie, baptism

- **Person:** `josephGervais`
- **Claim as printed on the site:** Baptism, St. James Parish
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 2 (1770–1803), SJA-3, 157`

### VERDICT: CONFIRMED

### What the source actually says

Volume 2, **PDF page 350, printed page 336**, under the heading `GANIER, GANEER, GAGNIER`. The
whole section is two entries long:

> **GANIER, GANEER, GAGNIER**
> Francisco (Julian & Reneta Lebrum, of Brulon, France) m. 10 Feb 1793 Eulalia SARDE (Nicolas & Margarita Renne, of New Orleans) wit. Juan Haydel & Margarita Sarde (SJA-2, 19)
> **Gervasio (Francisco & Eulalia Sarde) bt. 6 Sep 1797 bn. 1 Jun 1797 spo. Estevain Rene & Eufrosyna Sarde Pat. GP: (Juliano Gagnier & Renata de Brun) Mat. GP: (Nicolas Sarde & Margarita Rene) (SJA-3, 157)**

The site's quoted text is:

> Gervasio (Francisco & Eulalia Sarde) bt. 6 Sep 1797 bn. 1 Jun 1797 spo. Estevain Rene & Eufrosyna Sarde. Pat. GP: (Juliano Gagnier & Renata de Brun) Mat. GP: (Nicolas Sarde & Margarita Rene).

Identical apart from two added full stops. The site's highlight, that the record was found under
the spelling GANIER and gives both parents and all four grandparents in one entry, is exactly
correct: the heading really is `GANIER, GANEER, GAGNIER` with no cross-reference from Gaiennie,
which is why it hid.

### One point of care

The site records `josephGervais` birth place as **New Orleans**. This baptism record does **not**
state a birthplace; it is a St. James Parish (SJA) register entry recording a birth on 1 June 1797
and a baptism on 6 September 1797. The New Orleans birthplace is nevertheless well supported, but
by the *other* record: the 1820 marriage act (Citation 10) explicitly calls him "nat. of New
Orleans". So the claim is sound, just sourced to the marriage rather than the baptism.

---

# Citation 10 of 14: Joseph Gervais Gaiennie, marriage

- **Person:** `josephGervais`
- **Claim as printed on the site:** Marriage, St. Michael, Convent
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 4 (1820–1829), SMI-2, 77`

### VERDICT: CONFIRMED

Printed twice in Volume 4, under both surnames, **with different witness lists**. This matters.

### What the source actually says (1): under `GAINNIE`

Volume 4, **PDF page 227, printed page 217**:

> Gervais, age 22, nat. of New Orleans (Francois and Elisabete SARDE, both decd.) m. 22 Jan. 1820 Nathalie CHENET, age 17 (Pierre and Susanne LAVIGNE) wit. Jean Baptiste Oury; Dominique LeBourgeois, Orter Reine; **Maximillien Rousselle** (SMI-2, 77)

### What the source actually says (2): under `CHENET`

Volume 4, **PDF page 131, printed page 121**:

> Nathalie (Pierre and Susanne LAVIGNE) age 17 m. 22 Jan. 1820 Gervais GAINNIE, age 22, nat. New Orleans (Francois and Elisabete SARDE, both decd.) wit. Jean Baptiste Oury; Dominique LeBourgeois; Orter Reine; (SMI-2, 77)

The CHENET version ends with a trailing semicolon and **drops Maximillien Rousselle**. The GAINNIE
version is the fuller one.

The site's quoted text is:

> Gervais, age 22, nat. of New Orleans (Francois and Elisabete SARDE, both decd.) m. 22 Jan. 1820 Nathalie CHENET, age 17 (Pierre and Susanne LAVIGNE) wit. Jean Baptiste Oury; Dominique LeBourgeois; Orter Reine; Maximillien Rousselle.

The site quoted the **fuller and better** of the two printings. Identical apart from a semicolon
where the book prints a comma after LeBourgeois. Good practice; no change needed. Worth knowing
that BRDR's duplicate printings are not always identical, so the "other" copy of a record can carry
information the first one lost.

### The site's highlight checks out

"One record fixes four things: his 1797 birth, his New Orleans origin, both his parents, and both
of his wife's parents." Verified: age 22 on 22 January 1820 gives a birth year of 1797; "nat. of
New Orleans"; "Francois and Elisabete SARDE, both decd."; "Pierre and Susanne LAVIGNE". All four
are on the page. The witness "Orter Reine" is also correctly transcribed.

---

# Citation 11 of 14: Joseph Gervais Gaiennie, burial

- **Person:** `josephGervais`
- **Claim as printed on the site:** Burial, St. Michael, Convent
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 8 (1853–1857), SMI-4, 236`

### VERDICT: CONFIRMED

### What the source actually says

Volume 8, **PDF page 262, printed page 254**, under the heading `GAIENNIE, GIENNIE, GAINIE`:

> **GAIENNIE, GIENNIE, GAINIE**
> Floriska (Gervais Gaiennie and Marie Nathalie CHENET) m. 18 Jan. 1853 Achille DRUILHET (Achille Edmond Druilhet and Marie REINE) wit. Lovinski Reine; Edmond Druilhet; Livian Bourgeois; the son; Gervais Gaiennie; G. Gaiennie; L. E. Druilhet; Acman (SMI-11, 44)
> **Gervais Gaiennie, age 57 yrs., bur. 9 June 1854 (SMI-4, 236)**
> Joseph Alceste (Joseph Alceste Gaiennie and Augustine Felicite Niza BERTHIN) bn. 19 July 1856 bt. 4 Oct. 1856 spo. Achille Druilhet and Amelia Cambre (SMI-6, 276)
> Joseph Gervais (Gervais Giennie and Nathalie CHENET) m. 19 Feb. 1857 (2nd degree consanguinity) Madeleine Corinne CHENET (Celestin Chenet and Melanie BOURGEOIS) wit. Adam Schexnayder; L. A. Trosclair; Etienne Bourgeois; Numa Poche; Augustin Bertin; F. Reine; G. R. Druilhet (SMI-11, 128)

The site's quoted text is:

> Gervais Gaiennie, age 57 yrs., bur. 9 June 1854.

Identical.

### Corroboration

Age 57 at burial on 9 June 1854 implies birth in 1796 or 1797. His baptism (Citation 9) gives birth
1 June 1797, which makes him 57 years and 8 days at burial. Very close fit, and consistent with the
"age 22" of the 1820 marriage. The site's `lifespanText` of "1797 – 1854" and death of "buried
9 June 1854" are both supported.

The site places his death in "St. James Parish". SMI is St. Michael of Convent, which is in St.
James Parish, so this is correct.

Note that unlike the Antoine Pedo burial, this entry does at least carry the distinctive full name
"Gervais Gaiennie", and it sits in a surname section whose other entries name his wife Nathalie
Chenet and his children Floriska and Joseph Alceste. The identification here is much stronger than
in Citation 4.

---

# Citation 12 of 14: François Gaiennie, marriage

- **Person:** `francoisGaiennie`
- **Claim as printed on the site:** Marriage, St. James Parish
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Diocese of Baton Rouge, Vol. 2 (1770–1803), SJA-2, 19`

### VERDICT: CONFIRMED

Printed twice in Volume 2, under both surnames.

### What the source actually says (1): under `GANIER, GANEER, GAGNIER`

Volume 2, **PDF page 350, printed page 336**:

> **Francisco (Julian & Reneta Lebrum, of Brulon, France) m. 10 Feb 1793 Eulalia SARDE (Nicolas & Margarita Renne, of New Orleans) wit. Juan Haydel & Margarita Sarde (SJA-2, 19)**

### What the source actually says (2): under `SARDE, JARDE`

Volume 2, **PDF page 752, printed page 738**:

> **SARDE, JARDE**
> **Eulalia (Nicolas & Margarita Renne, of New Orleans) m. 10 Feb 1793 Francisco GANIER (Julian & Renata Lebrum, of Brulon, France) wit. Juan Haydel & Margarita Sarde (SJA-2, 19)**

The site's quoted text on `francoisGaiennie` is:

> Francisco (Julian & Reneta Lebrum, of Brulon, France) m. 10 Feb 1793 Eulalia SARDE (Nicolas & Margarita Renne, of New Orleans) wit. Juan Haydel & Margarita Sarde.

Identical, including the "Reneta" spelling, which is what the GANIER printing gives. The SARDE
printing on p. 738 spells the same woman "Renata". Both are in the book.

### The site's highlight checks out

"This record sat unfound for years because the clerk filed the family under GANIER, the 'no
Gaiennie in Volume 2' conclusion was a spelling artifact." Verified. There is **no** GAIENNIE
heading anywhere in Volume 2, and no cross-reference pointing to GANIER. A search for the modern
spelling returns nothing; the family is only reachable under GANIER, GANEER, GAGNIER.

### One point of care on the reading

The phrase "of Brulon, France" sits inside the parenthesis that holds the parents, so grammatically
the register is calling **Julian and Reneta Lebrum** of Brûlon, not François himself. The site's
inference that François was therefore of Brûlon is entirely reasonable and is the natural reading,
but it is an inference and not a direct statement about him. The Volume 2 abstract nowhere gives
François's own birthplace or age.

---

# Citation 13 of 14: Julien Gagnier, named in his grandson Gervais's baptism

- **Person:** `julienGagnier`
- **Claim as printed on the site:** Named in his grandson Gervais's baptism
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] St. James Parish, 6 September 1797 — SJA-3, 157 (Diocese of Baton Rouge Vol. 2)`

### VERDICT: CONFIRMED

This is the same record as Citation 9, cited from the grandfather's side.

### What the source actually says

Volume 2, **PDF page 350, printed page 336**:

> Gervasio (Francisco & Eulalia Sarde) bt. 6 Sep 1797 bn. 1 Jun 1797 spo. Estevain Rene & Eufrosyna Sarde **Pat. GP: (Juliano Gagnier & Renata de Brun)** Mat. GP: (Nicolas Sarde & Margarita Rene) (SJA-3, 157)

The site's quoted text is:

> Pat. GP: Juliano Gagnier & Renata de Brun.

Identical in substance; the site drops the book's parentheses around the two names. Every element
of the citation is correct: the date 6 September 1797 is the baptism date as printed, the parish is
SJA (St. James), the register page is SJA-3, 157, and it is Volume 2.

The site's `blurb` for Julien, that "his two sons carried the name to Louisiana", and the
`reneeLeBrun` blurb noting she is "named as 'Renata Lebrun' and 'Renata de Brun' in her sons'
Louisiana records", are both borne out: this entry gives "Renata de Brun" and the 1793 marriage
(Citation 12) gives "Reneta Lebrum" / "Renata Lebrum".

---

# Citation 14 of 14: Eulalie Alexandrine Sardet, marriage

- **Person:** `elisabethSarde`
- **Claim as printed on the site:** Marriage, St. James Parish
- **Citation as printed on the site:** `[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] 10 February 1793 — SJA-2, 19 (Diocese of Baton Rouge Vol. 2)`

### VERDICT: CONFIRMED

Same act as Citation 12, cited from the bride's side. The site quotes the bride's-side printing,
which is the correct one to quote here.

### What the source actually says

Volume 2, **PDF page 752, printed page 738**, under the heading `SARDE, JARDE`:

> Eulalia (Nicolas & Margarita Renne, of New Orleans) m. 10 Feb 1793 Francisco GANIER (Julian & Renata Lebrum, of Brulon, France) wit. Juan Haydel & Margarita Sarde (SJA-2, 19)

The site's quoted text is:

> Eulalia (Nicolas & Margarita Renne, of New Orleans) m. 10 Feb 1793 Francisco GANIER (Julian & Renata Lebrum, of Brulon, France) wit. Juan Haydel & Margarita Sarde.

Identical.

### Supporting notes checked

- The site's `alsoKnownAs`, "'Elisabete Sarde' on her son's 1820 marriage record", is confirmed by
  Citation 10, where Volume 4 twice prints "Francois and Elisabete SARDE, both decd."
- The site lists a sister "Euphrosine Sardet (b. 1776), godmother at Gervais's baptism". Confirmed
  by Citation 9: the sponsor is "Eufrosyna Sarde".
- The witness "Margarita Sarde" at this 1793 marriage is consistent with the site's listed sister
  Marguerite Sardet.
- The register gives the bride's forename as **Eulalia**, not Elisabeth. The site's `note`, that the
  1820 clerk wrote her as Élisabeth and the family remembered her as Eugénie, is supported by the
  documents seen here: Volume 2 in 1793 calls her Eulalia, Volume 4 in 1820 calls her Elisabete.
  The site key remains `elisabethSarde` while the displayed given name is "Eulalie Alexandrine",
  which is the correct call.

---

# Cross-cutting findings

These are the things worth acting on. None of them is a bad citation; all 14 citations are good.

### 1. The Antoine Pedo burial names nobody (highest priority)

Citation 4, Vol. 9, ASM-10, 168, printed p. 487, reads in its entirety: "Antoine Pedo, age 45
years, bur. 8 Aug. 1858 d. yesterday." No parents, no wife, no residence. The link to Antoine
Florentin Pedeau is an inference from age, parish, and his widow's later burial. The site currently
presents it as his burial record without flagging that the document itself is silent on identity.
It is very likely right, but it should be labelled as an identification rather than a naming.

### 2. Marie Cancienne is called a "wife" almost four years after her husband's burial

Citation 5 says "wife of Antoine PEDO" in May 1862; Antoine was buried in August 1858. The register
or the abstract is using relationship words loosely. Worth a line on the page, and worth
remembering as a caution about how much weight to put on BRDR's relationship terms generally,
including in finding 1 above.

### 3. Eulalie and Elodie Borne are the same woman in Volume 12

The 1871 marriage (SPH-4, 367) calls Pierre Numa's wife Eulalie; the 1872 baptism of their son
(SPH-3, 121) calls her Elodie. Both are in the same volume. The site's use of Eulalie is correct
and matches the marriage act, but the variant should be recorded so it does not read as a conflict
later.

### 4. BRDR's duplicate printings are not always identical

Citation 10 is the clearest case: Volume 4 prints the 1820 Gaiennie/Chenet marriage under both
surnames, and the CHENET printing silently drops the witness Maximillien Rousselle that the GAINNIE
printing carries. When a record matters, both printings should be read. Citation 12 shows a milder
version of the same thing, with "Reneta" in one printing and "Renata" in the other.

### 5. Volume 7's OCR text layer is not usable on its own

The 1987 typescript volumes (6 and 7) extract badly: "Pierce" for "Pierre", "CKNCIENNE" for
"CANCIENNE", "ton.'" for "bn.", "AS^9" for "ASM-9". Every Volume 7 reading in this log was taken
from the rendered page image, not the text layer. Anyone repeating this work with text search alone
will get wrong transcriptions from Volumes 6 and 7.

### 6. Minor, non-substantive: the site adds occasional punctuation

Three transcriptions add a comma or full stop the book does not print (Citations 7, 9, 10). None
changes the meaning. No action needed unless strict diplomatic transcription is wanted.

### 7. New material found in passing, not currently on the site

- **Alice Marie Pedeaux**, daughter of Antoine and Marie Cancienne, married Taylor Paul Himel
  11 September 1873 (Vol. 12, SPH-4, 458, printed p. 460). A sibling of Pierre Numa.
- **Michel Pedeau's death is bracketed** to between 25 April 1813 and 26 November 1814, by
  Florence's remarriage to Francisco Bariot as "widow of Miguel Pedeau" (Vol. 3, ASM-2, 230,
  printed p. 34).
- **Michel Pedeau fils**, b. 28 Oct 1808, bapt. 11 Nov 1808, was baptised at **Ascension of
  Donaldsonville** (ASC-5, 327), not Assumption, unlike his younger brothers.
- **A second, unrelated Florence Aucoin** (wife of Auguste Blanchard) is active in Assumption
  parish in 1852. Any future Florence Aucoin record must be checked against the husband.

---

# Appendix: search coverage

To satisfy the requirement to try spelling variants, the following were searched across whole
volumes, case-insensitively, rather than by jumping to page numbers:

| Family | Variants searched | Headings actually found in the books |
|---|---|---|
| Pedeaux | Pedeau, Pedeaux, Pedaux, Pedo | `PEDEAU` (Vol. 3, Vol. 12), `PEDAUX` and `PEDEAU` as two separate headings (Vol. 7), `PEDO, PEDEAU` (Vol. 9) |
| Gaiennie | Gaiennie, Gaienne, Gainnie, Gainie, Ganier, Gagnier, Gannier, Gaigne, Giennie | `GANIER, GANEER, GAGNIER` (Vol. 2), `GAINNIE` (Vol. 4), `GAIENNIE, GIENNIE, GAINIE` (Vol. 8) |
| Cancienne | Cancienne, Cansien, Quencieny, Cantienne, Cansienne | `CANCIENNE` (Vol. 9); the forms Cantienne and Cancienne both appear inside Vol. 7 entries |
| Borne | Borne, Leborne | `BORNE` (Vol. 12) |
| Aucoin | Aucoin, Aucouen, Auquoin, Ocoin, Auooin | `AUCOIN` (Vol. 3), `AUCOIN also AUQUOIN` (Vol. 7) |
| Sardet | Sarde, Sardet, Jarde | `SARDE, JARDE` (Vol. 2) |
| Larmann | Larmann, Larman, Laarmann | Not applicable: no Larmann citation appears in the BRDR array of the worklist, and the family is not in these Louisiana river-parish registers |

Volumes 5 (1830–1839) and 6 (1840–1847) were extracted and available but were not required, since
no citation in the BRDR array points to them.

All searching was done against text extracted from the local PDFs. No online source was consulted,
and no file in the site repository was modified.
