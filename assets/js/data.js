/**
 * Pedeaux Family Archive — genealogical dataset
 *
 * Single source of truth for the site. Edit here; the UI derives everything else.
 *
 * evidence:
 *   'verified' — an official civil or sacramental record names BOTH people in the parent link
 *   'confirm'  — likely, but single-sourced or user-submitted (e.g. Find a Grave only)
 *   'inferred' — reasoned from circumstance; no document names both people
 *
 * Rule of the house: never add a parent link without a record naming both people.
 * A shared surname is not evidence.
 *
 * spouse: only needed when someone married a person who is NOT in the tree.
 *   For everyone in the direct line the UI derives the spouse automatically — it is
 *   simply the other parent of their direct-line child — and renders it as a link.
 */
(function (global) {
  'use strict';

  const P = {
    /* ─────────────────────────  LIVING / RECENT  ───────────────────────── */

    kevin: {
      spouse: 'Lauren Ashley Dauro Pedeaux',
      siblings: [
        'Aaron John Pedeaux',
        'Catherine Ann Pedeaux'
      ],
      children: [
        'Owen Pedeaux',
        'Philip Pedeaux',
        'John Pedeaux'
      ],
      given: 'Kevin Joseph', surname: 'Pedeaux', sex: 'M',
      birth: { place: 'Meraux, St. Bernard Parish, Louisiana' },
      father: 'buddy', mother: 'jeanLarmann',
      evidence: 'verified',
      blurb: 'Raised in Meraux; Archbishop Hannan. Married to Lauren Ashley Dauro Pedeaux; father of Owen, Philip and John.'
    },

    buddy: {
      siblings: [
        'Patricia Pedeaux Ruda — married Sheldon Ruda, moved to Rochester, New York'
      ],
      children: [
        { id: 'kevin' },
        'Aaron John Pedeaux',
        'Catherine Ann Pedeaux'
      ],
      given: 'Herbert John', nickname: 'Buddy', surname: 'Pedeaux', sex: 'M',
      birth: { date: '20 October 1956' },
      death: { date: '17 February 2009' },
      father: 'herbertJoseph', mother: 'veronicaBrunetti',
      evidence: 'verified',
      blurb: 'Buried in St. Louis Cemetery No. 3 in the same space as his parents — Sq. 5 East, Facing G, Tier STLOUS AVE, Space 9.',
      sources: [
        { label: 'Find a Grave 223275967', url: 'https://www.findagrave.com/memorial/223275967' }
      ]
    },

    jeanLarmann: {
      siblings: [
        'John R. Larmann Jr.',
        'James C. Larmann',
        'Judy Larmann Gifford'
      ],
      children: [
        { id: 'kevin' },
        'Aaron John Pedeaux',
        'Catherine Ann Pedeaux'
      ],
      given: 'Jean', surname: 'Larmann', sex: 'F',
      father: 'johnLarmannSr', mother: 'annWellmeyer',
      evidence: 'verified',
      blurb: 'Named in her father\'s 2018 obituary as "Jean L. Pedeaux (the late Buddy)."'
    },

    /* ─────────────────────────  PEDEAUX  ───────────────────────── */

    herbertJoseph: {
      siblings: [
        'Robert Louis Pedeaux (1918–1980)',
        'Lorraine Marie Pedeaux (1925–1932, died at six)',
        'Edna Pedeaux Perret (1928–2019)',
        'Numa Louis Pedeaux Jr. (1930–2014) — the family\'s “Uncle Sonny”',
        'Joy Marie Pedeaux Byrne (1935–2013)'
      ],
      children: [
        'Patricia Pedeaux Ruda',
        { id: 'buddy' }
      ],
      given: 'Herbert Joseph', surname: 'Pedeaux', sex: 'M',
      birth: { date: '10 July 1921', place: 'New Orleans' },
      death: { date: '22 July 1992', place: 'Chalmette, St. Bernard Parish' },
      father: 'numaSr', mother: 'ednaGaiennie',
      evidence: 'verified',
      branch: 'pedeaux',
      blurb: 'Married Veronica Brunetti in April 1943, served in the Army, and re-enlisted for the Panama Canal Zone when the war ended. Buried St. Louis Cemetery No. 3, Sq. 5 East, Facing G, Tier STLOUS AVE, Space 9.',
      records: [
        {
          title: 'Louisiana birth record',
          citation: 'Orleans Parish, 10 July 1921 — Vol. 175, p. 791',
          text: 'PEDEAUX, HERBERT JOSEPH. Father: PEDEAUX, NUMA L JR. Mother: GAIENNIE, EDNA M.'
        },
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, April 1943 — Vol. 58, p. 1681',
          text: 'PEDEAUX, HERBERT JOSEPH × BRUNETTI, VERONICA MARIE.'
        },
        {
          title: 'Army enlistment — 30 October 1945, New Orleans',
          citation: 'Electronic Army Serial Number Merged File, 1938–1946 — serial number 18153029',
          text: 'Herbert J. Pedeaux, Private, Regular Army. Born Louisiana 1921; married; four years of high school. Term of enlistment: "Enlistment for the Panama Canal Department." Filed under "Enlisted Man, Regular Army, after 3 months of Discharge."',
          highlight: 'Two things the family may not have had. He had already served and been discharged — this October 1945 record is a RE-enlistment, taken within three months of coming home. And he signed up specifically for the Panama Canal Department: with the war over, the Canal Zone was the posting, guarding the waterway that had been the hemisphere\'s most defended piece of ground.'
        }
      ],
      sources: [
        { label: 'Find a Grave 223275804', url: 'https://www.findagrave.com/memorial/223275804/herbert-joseph-pedeaux' },
        { label: 'Louisiana SOS Vital Records Index', url: 'https://www.sos.la.gov/HistoricalResources/ResearchHistoricalRecords/Pages/OnlinePublicVitalRecordsIndex.aspx' }
      ],
      note: 'Earlier research had him dying before 1990 and buried in St. Louis No. 2. Both were wrong. He is also missing from the 1950 census index because the national transcription contains no exact "Pedeaux" anywhere — an OCR failure, not an absence.'
    },

    veronicaBrunetti: {
      siblings: [
        'None found — she appears alone with her parents in both the 1930 and 1940 censuses'
      ],
      children: [
        'Patricia Pedeaux Ruda',
        { id: 'buddy' }
      ],
      given: 'Veronica Marie', surname: 'Brunetti', sex: 'F',
      birth: { date: '20 November 1923', place: 'New Orleans' },
      death: { date: '6 August 2013', place: 'Long Beach, Mississippi' },
      father: 'johnBrunetti', mother: 'veronicaFranovich',
      evidence: 'verified',
      branch: 'brunetti',
      blurb: 'Holy Angels Academy; retired from BellSouth. Lived New Orleans, then Chalmette, then Long Beach after Katrina. Interred St. Louis Cemetery No. 3.',
      records: [
        {
          title: 'Louisiana birth record',
          citation: 'Orleans Parish, 20 November 1923 — Vol. 181, p. 2241',
          text: 'BRUNETTI, VERONICA MARY. Father: BRUNETTI, JOHN. Mother: FRANOVICH, VERONICA. The only Brunetti birth in the entire Louisiana index, 1790–1925.'
        }
      ],
      sources: [
        { label: 'Obituary (Dignity Memorial, 2013)', url: 'https://www.dignitymemorial.com/obituaries/new-orleans-la/veronica-pedeaux-5627091' },
        { label: 'Find a Grave 223275872', url: 'https://www.findagrave.com/memorial/223275872' }
      ]
    },

    numaSr: {
      siblings: [
        'Antoine Philippe Joseph “Philip” Pedeaux (1872–1946)',
        'Edward Hector Pedeaux (1876–1930)',
        'Louise Pedeaux (b. 1878)',
        'Eugenie Pedeaux (1880–1974, died at 94)',
        'Anna Pedeaux (b. 1883)',
        'Agnes Pedeaux (b. 1890)',
        'Rosa Pedeaux (b. 1892)'
      ],
      children: [
        'Robert Louis Pedeaux (1918–1980)',
        { id: 'herbertJoseph' },
        'Lorraine Marie Pedeaux (1925–1932)',
        'Edna Pedeaux Perret (1928–2019)',
        'Numa Louis Pedeaux Jr. (1930–2014)',
        'Joy Marie Pedeaux Byrne (1935–2013)'
      ],
      given: 'Numa Louis Charles', suffix: 'Sr.', surname: 'Pedeaux', sex: 'M',
      birth: { date: '16 March 1888', place: 'probably Lafourche or Assumption Parish' },
      death: { date: '17 July 1958', place: 'Orleans Parish' },
      father: 'pierreNuma', mother: 'eulalieBorne',
      evidence: 'verified',
      branch: 'pedeaux',
      blurb: 'Buried at Greenwood Cemetery in his wife\'s family tomb — "5 Palmetto Magnolia Hawthorne, A. F. Gaiennie Tomb."',
      records: [
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, July 1917 — Vol. 39, p. 1008',
          text: 'PEDEAUX, NUMA LOUIS CHARLES JR × GAIENNIE, EDNA MARIE.'
        },
        {
          title: '1900 U.S. Census, Lafourche Parish',
          citation: 'Household of Numa Pedaux (b. 1848) and wife Ulali (b. 1849)',
          text: 'Son "Numa Pedaux, b. 1888," indexed with parents "Numa, Ulali."'
        }
      ],
      sources: [
        { label: 'Find a Grave 63452655', url: 'https://www.findagrave.com/memorial/63452655' }
      ],
      note: 'The "Jr." is load-bearing — he used it on his 1917 marriage licence, his WWI draft card and his son\'s 1921 birth record. Find a Grave gives his death as 10 July 1958; the state index says the 17th, which matches the 18–19 July death notices his own memorial cites. It also gives New Orleans as his birthplace, but there are only two Pedeaux births in the whole Louisiana index and neither is his — registration was not required outside Orleans until 1918.'
    },

    ednaGaiennie: {
      siblings: [
        'Charles Seymour Gaiennie (b. 1889)',
        'Corinne Marie Gaiennie Jessup (1890–1946)',
        'Edward J. Gaiennie (1892–1894)',
        'Marie Lucile Gaiennie Brown (b. 1896)',
        'an infant, died June 1897',
        'Lawrence Herbert Gaiennie (1897–1906)',
        'George Florestan Gaiennie (b. 1905)',
        'Roland Francis Gaiennie (b. 1909)'
      ],
      children: [
        'Robert Louis Pedeaux (1918–1980)',
        { id: 'herbertJoseph' },
        'Lorraine Marie Pedeaux (1925–1932)',
        'Edna Pedeaux Perret (1928–2019)',
        'Numa Louis Pedeaux Jr. (1930–2014)',
        'Joy Marie Pedeaux Byrne (1935–2013)'
      ],
      given: 'Edna Marie', surname: 'Gaiennie', sex: 'F',
      birth: { date: '8 September 1894', place: 'Thibodaux, Lafourche Parish' },
      death: { date: '21 April 1962', place: 'Orleans Parish' },
      father: 'alphonseJr', mother: 'jeanneCurien',
      evidence: 'inferred',
      branch: 'gaiennie',
      blurb: 'The Greenwood tomb the Pedeauxs lie in is hers — her father\'s. Obituary: Times-Picayune, 23 April 1962, p. 6 col. 7.',
      note: 'Her birth record does not exist: she was born at Thibodaux, and Louisiana did not require birth registration outside Orleans Parish until 1918. The siblings born 1893–1905 are all likewise absent from the Orleans index while those born before and after are all present — the family was demonstrably out of Orleans in exactly that window. The link to her parents rests on that pattern plus the tomb, not yet on a document naming her with them.'
    },

    pierreNuma: {
      siblings: [
        'Honoré Alcée Cyprien Pedeau (b. 3 March 1849)',
        'Zéphirin Ulysse Pedeaux (1851–1933)',
        'Marie Alice Pedeaux (b. 13 Aug 1852) — married Taylor Paul Himel, 11 Sept 1873',
        'Rosalia Florence Pedeaux (1855–1943)'
      ],
      children: [
        'Antoine Philippe Joseph “Philip” Pedeaux (1872–1946)',
        'Edward Hector Pedeaux (1876–1930)',
        'Louise Pedeaux (b. 1878)',
        'Eugenie Pedeaux (1880–1974)',
        'Anna Pedeaux (b. 1883)',
        { id: 'numaSr' },
        'Agnes Pedeaux (b. 1890)',
        'Rosa Pedeaux (b. 1892)'
      ],
      given: 'Pierre Numa', surname: 'Pedeau', sex: 'M',
      alsoKnownAs: 'Numa A. Pedeaux',
      birth: { date: '20 November 1847', place: 'Assumption Parish' },
      death: { date: '27 August 1931', place: 'New Orleans' },
      father: 'antoineFlorentin', mother: 'marieCancienne',
      evidence: 'verified',
      branch: 'pedeaux',
      blurb: 'Baptised 11 May 1848. Buried St. Philomena Cemetery, Labadieville. Orphaned at fourteen — by 1870 he headed a household of his four younger siblings.',
      records: [
        {
          title: 'Baptism — Church of the Assumption, Plattenville',
          citation: 'Diocese of Baton Rouge, Vol. 7 (1848–1852), ASM-9, 290',
          text: 'Pierre Numa (Antoine Pedeau and Marie CANCIENNE) bn. 20 Nov. 1847 bt. 11 May 1848 spo. Pierre Cancienne and Florence Aucoin.',
          highlight: 'The godmother is Florence Aucoin — his own grandmother, Michel Pedeau\'s widow, standing at the font. One line ties 1808 to 1847.'
        },
        {
          title: 'Marriage — St. Philomena, Labadieville',
          citation: 'Diocese of Baton Rouge, Vol. 12 (1871–1873), SPH-4, 367',
          text: 'Numa (Antoine Pedeaux and Marie CANCIENNE) m. 27 April 1871 Eulalie BORNE of Lafourche Parish (Marcellin Borne and Anne Marie GUEDRY) wit. Alcee Pedeaux; Edouard Borne; Ulysse Pedeaux; Ulger Douce; Odile Foret; Edw. Vives; Marie Vives; Clementine Schiffestien.'
        }
      ],
      sources: [
        { label: 'Diocese of Baton Rouge sacramental abstracts', url: 'https://diobr.org/archives-publications' },
        { label: 'Find a Grave 208703933', url: 'https://www.findagrave.com/memorial/208703933/numa-a-pedeaux' }
      ],
      note: 'The marriage was 27 April 1871, not the 17th as Find a Grave has it.'
    },

    eulalieBorne: {
      siblings: [
        'Edouard Borne — probably a brother; he witnessed her 1871 wedding',
        'Marie Borne — probably a sister; godmother to her first child in 1872'
      ],
      children: [
        'Antoine Philippe Joseph “Philip” Pedeaux (1872–1946)',
        'Edward Hector Pedeaux (1876–1930)',
        'Louise Pedeaux (b. 1878)',
        'Eugenie Pedeaux (1880–1974)',
        'Anna Pedeaux (b. 1883)',
        { id: 'numaSr' },
        'Agnes Pedeaux (b. 1890)',
        'Rosa Pedeaux (b. 1892)'
      ],
      given: 'Eulalie', surname: 'Borne', sex: 'F',
      birth: { date: '1849', place: 'Lafourche Parish' },
      death: { date: '14 November 1908', place: 'Labadieville' },
      father: 'marcellinBorne', mother: 'anneMarieGuedry',
      evidence: 'verified',
      branch: 'pedeaux',
      blurb: 'Named with both her parents in her own 1871 marriage record.',
      sources: [
        { label: 'Find a Grave 208704029', url: 'https://www.findagrave.com/memorial/208704029' }
      ]
    },

    marcellinBorne: {
      given: 'Marcellin', surname: 'Borne', sex: 'M',
      evidence: 'verified', branch: 'pedeaux',
      blurb: 'Named as Eulalie\'s father in the 1871 St. Philomena marriage register.'
    },

    anneMarieGuedry: {
      given: 'Anne Marie', surname: 'Guedry', sex: 'F',
      evidence: 'verified', branch: 'pedeaux',
      blurb: 'Named as Eulalie\'s mother in the 1871 St. Philomena marriage register.'
    },

    antoineFlorentin: {
      siblings: [
        'Michel Pedeau (b. 28 Oct 1808, buried 25 March 1853)',
        'Jean Baptiste Pedeau (b. 12 Nov 1810, buried 13 Nov 1855) — the Baptiste living next door in the 1850 census',
        'Marie Bariot — a half-sister from his mother\'s second marriage; she married Joseph Felix Colbut in 1841 with Jean Baptiste as witness'
      ],
      children: [
        { id: 'pierreNuma' },
        'Honoré Alcée Cyprien Pedeau (b. 1849)',
        'Zéphirin Ulysse Pedeaux (1851–1933)',
        'Marie Alice Pedeaux (b. 1852)',
        'Rosalia Florence Pedeaux (1855–1943)'
      ],
      given: 'Antoine Florentin', surname: 'Pedeau', sex: 'M',
      birth: { date: '1 November 1812', place: 'Assumption Parish' },
      death: { date: '7 August 1858', place: 'Assumption Parish' },
      father: 'michelPedeau', mother: 'florenceAucoin',
      evidence: 'verified',
      branch: 'pedeaux',
      blurb: 'Baptised 25 April 1813. A posthumous or near-posthumous child — his father was dead within two years of his birth. He himself died at 45, and his wife four years later, leaving five children.',
      records: [
        {
          title: 'Baptism — Church of the Assumption, Plattenville',
          citation: 'Diocese of Baton Rouge, Vol. 3 (1804–1818), ASM-6, 288',
          text: 'Antonio Florentin (Miguel and Florencia AUCOIN) bn. 1 Nov 1812 bt. 25 Apr 1813 spo. Antonio Robertson and Margarita Bourque.'
        },
        {
          title: 'Burial',
          citation: 'Diocese of Baton Rouge, Vol. 9 (1858–1862), ASM-10, 168',
          text: 'Antoine Pedo, age 45 years, bur. 8 Aug. 1858 d. yesterday.'
        }
      ],
      note: 'An Ancestry user tree claims he died in 1854. He did not — Volume 8 (1853–1857) contains no burial for him, his daughter Rosalia Florence was born in March 1855, and the burial register puts his death squarely on 7 August 1858. The recorded age of 45 matches the 1812 baptism exactly.'
    },

    marieCancienne: {
      children: [
        { id: 'pierreNuma' },
        'Honoré Alcée Cyprien Pedeau (b. 1849)',
        'Zéphirin Ulysse Pedeaux (1851–1933)',
        'Marie Alice Pedeaux (b. 1852)',
        'Rosalia Florence Pedeaux (1855–1943)'
      ],
      given: 'Marie', alsoKnownAs: 'Marie Antoinette', surname: 'Cancienne', sex: 'F',
      birth: { date: 'about 1822', place: 'Assumption Parish' },
      death: { date: '11 May 1862', place: 'Assumption Parish' },
      evidence: 'verified',
      branch: 'pedeaux',
      blurb: 'Widowed in 1858, dead four years later at forty. Her eldest son Numa was fourteen.',
      records: [
        {
          title: 'Burial',
          citation: 'Diocese of Baton Rouge, Vol. 9 (1858–1862), ASM-10, 190',
          text: 'Marie Cancienne, age 40 years, wife of Antoine PEDO, bur. 12 May 1862 d. yesterday.'
        }
      ],
      note: 'Her father or brother was very likely Pierre Cancienne, who was godfather to two of her children — and for whose own daughter Zulma, Antoine and Marie stood together as godparents in February 1847. This burial record also corrects an earlier reading: the "Mary Pedaux, b. 1812" living in Numa\'s household in the 1900 census cannot be her, and is most likely his mother-in-law Anne Marie Guedry. One tantalising loose end: the Louisiana Cancienne surname descends from Pietro Cancieni, son of Giorgio Cancieni and Margherita Catharina Yearne of Venice, whose name became Pierre Cancienne on the bayou. If Marie belongs to that family — not yet proven — there is an Italian thread here two centuries older than the Brunettis.'
    },

    michelPedeau: {
      siblings: [
        'Marie (1766–1772)',
        'Jeanne Yvonne (b. 1769, living 1815)',
        'Michel (1770–1771, died an infant)',
        'Jean (1771–1772)',
        'Pierre (1773–1866)',
        'Anne',
        'and a surviving brother also named Michel — he himself was either Michel André (b. 1765) or Michel Pierre (b. 1777), and whichever he was not stayed in France'
      ],
      children: [
        'Michel Pedeau (b. 28 Oct 1808)',
        'Jean Baptiste Pedeau (b. 12 Nov 1810)',
        { id: 'antoineFlorentin' }
      ],
      given: 'Michel', surname: 'Pedeau', suffix: '(probably Michel Pierre)', sex: 'M',
      alsoKnownAs: 'recorded in Louisiana only as "Michel" — the 1810 census points to him being Michel Pierre, baptized at Chantenay 20 May 1777, rather than his elder brother Michel André (b. 1765)',
      origin: 'Nantes, Brittany',
      birth: { date: 'probably 20 May 1777, else 7 April 1765', place: 'Chantenay or Nantes' },
      death: { date: 'between early 1812 and November 1814', place: 'Assumption Parish, Louisiana' },
      lifespanText: 'in Louisiana by 1808 — d. 1812×1814',
      father: 'michelPedeauPere', mother: 'jeanneMuraille',
      evidence: 'verified',
      branch: 'pedeaux',
      immigrant: true,
      blurb: 'The crossing. A "Foreign French" immigrant from the Nantes quayside who reached Louisiana after 1803, married an Acadian exile\'s daughter in January 1808, and was dead within about five years, leaving three small sons on Bayou Lafourche.',
      records: [
        {
          title: 'Marriage — Church of the Assumption, Plattenville',
          citation: 'Diocese of Baton Rouge, Vol. 3 (1804–1818), ASM-2, 127',
          text: 'Michel, of Nantes, Brittany, France (Michel and Jeanne MURAILLE) m. 26 Jan 1808 Florence Marguerite AUCOIN, of St. Malo, Brittany, France (Michel and Isabelle HEBERT, both decd.) wit. Pierre Hypolite Brais; Jean Baptiste Tojan; Isaac Landry.'
        },
        {
          title: 'The 1810 census — his only census',
          citation: 'Assumption Parish, Territory of Orleans, 1810 — NARA M252, p. 30, indexed as "Michel Peddoe"',
          text: 'Males: one aged 16–26, three aged 26–45, none 45 and upwards. Females: one 10–16, one 16–26, one 26–45 (Florence, then 29). Neighbors on the same page: Isaac Landry, a witness at his wedding; Pierre Cansien [Cancienne], the future in-law; Olivier Potier, his wife\'s brother-in-law; Jean Baptiste Aucoin.',
          highlight: 'No man of forty-five or over lived in this household. Michel André, born 1765, was past forty-five by census time; Michel Pierre, born 1777, was thirty-three. The tick marks lean hard toward Michel Pierre as the brother who crossed.'
        }
      ],
      sources: [
        { label: 'Diocese of Baton Rouge sacramental abstracts', url: 'https://diobr.org/archives-publications' }
      ],
      note: 'For years this line was thought to be a dead end — "no child of the marriage appears anywhere." The children were in the published register abstracts the whole time. Three sons: Michel (1808), Jean Baptiste (1810) and Antoine Florentin (1812). He did NOT die on 22 September 1811 as a since-deleted Find a Grave memorial had it — impossible, since Antoine was born in November 1812. As to WHICH Michel he was: the 1810 census, found in August 2026, is the first document that discriminates. His household held no male aged forty-five or over — which fits Michel Pierre, then thirty-three, and sits badly with Michel André, four months past forty-five at the official census day. Probable rather than proven: a man just over the bracket edge could be mis-slotted, the household was extended (four grown men; the toddler Michel is unticked, perhaps with Aucoin kin while Florence carried Jean Baptiste, born that November). The Nantes side has since been checked: every city death table from 1793 to 1852, read page by page in August 2026, holds no Michel Pédeau but the father, dead 30 December 1799. Neither brother died at Nantes. The scale tips toward the Chantenay-born younger brother; Chantenay-sur-Loire\'s own registers get the final word.'
    },

    michelPedeauPere: {
      siblings: [
        'Half-siblings from his father\'s first marriage: Madeleine Pédeau (b. 1716) and Jean Pédeau (b. 1721)',
        'Full siblings: Martin (1729–1746), Anne (b. 1732), Sébastienne (b. 1733), Jeanne (b. 1735), Marie (b. 1735), Sébastienne (b. 1737), Pierre (b. 1742)'
      ],
      children: [
        { id: 'michelPedeau' },
        'He was either Michel André (b. 7 April 1765) or Michel Pierre (b. 20 May 1777, Chantenay) — and the 1810 census age columns now favor Michel Pierre. The Nantes death tables 1793–1852 hold no Michel but the father himself; Chantenay\'s own registers get the final word',
        'Marie (1766–1772)',
        'Jeanne Yvonne (b. 1769)',
        'Michel (1770–1771)',
        'Jean (1771–1772)',
        'Pierre (1773–1866)',
        'Anne'
      ],
      given: 'Michel', surname: 'Pédeau', sex: 'M',
      birth: { date: '19 February 1739', place: 'Sainte-Pazanne, Pays de Retz' },
      death: { date: '30 December 1799', place: 'Nantes' },
      father: 'pierrePedeauFarinier', mother: 'anneBety',
      occupation: 'Charpentier et calfat de marine — ship\'s carpenter and caulker, port of Nantes',
      evidence: 'confirm',
      branch: 'pedeaux',
      blurb: 'A miller\'s son from Sainte-Pazanne who went to the city and the sea trades. Lived "au bas de la Fosse" — the foot of the Nantes quay, in the thick of the port.',
      records: [
        {
          title: 'Baptism of his son Michel André — Nantes, paroisse Saint-Nicolas',
          citation: 'AD Loire-Atlantique 3 E 109/154, view 69 of 299 (7 April 1765)',
          text: '"Le septieme jour de avril mil sept cent soixante cinq a été baptisé par moi prestre soussigné michel andré né ce jour fils de michel pédeau charpentier de navire et de jeanne muraille son épouse, demeurants au bas de la Fosse…"',
          highlight: 'Read in the original register. "On the seventh day of April 1765 was baptised… Michel André, born this day, son of Michel Pédeau, ship\'s carpenter, and of Jeanne Muraille his wife, dwelling at the bottom of La Fosse."'
        },
        {
          title: 'Death — Nantes table décennale des décès, 1793–an X',
          citation: 'Archives municipales de Nantes, 1E 1675, view 185 of 359, page 1234',
          text: '"Pedo — Michel — 9 nivôse — an 8 — 1er sect." The only Michel in the Ped- surnames of the table, entered between Pedan and Pedrailleau.',
          highlight: 'Read in the original table. 9 nivôse an VIII of the republican calendar is 30 December 1799 — the death date the compilers carried, now confirmed to the day in the city\'s own index. He died in the 1st section of Nantes, the riverfront quarter that held La Fosse.'
        }
      ],
      sources: [
        { label: 'Archives municipales de Nantes — register viewer', url: 'https://archives-numerisees.nantes.fr/v2/am441/visualiseur/etatcivil.html?id=451014875' },
        { label: 'AD44 — Sainte-Pazanne BMS 1739, 3 E 186/3', url: 'https://archives-numerisees.loire-atlantique.fr/v2/ark:/42067/a529e4a123c8e50b841cceb60fd771ab' }
      ],
      note: 'One wrinkle, kept honestly: a compiler notes that his 1739 baptism act appears to name his mother "Marie" rather than Anne. His father\'s 1729 remarriage to Anne Béty and the run of siblings born 1729–1742 fit the family as given here, but the baptism act deserves a fresh reading in the Sainte-Pazanne register, which is online.'
    },

    pierrePedeauFarinier: {
      children: [
        'By Jeanne Garnier: Madeleine (b. 1716), Jean (b. 1721)',
        'By Anne Béty: Martin (1729–1746), Anne (b. 1732), Sébastienne (b. 1733), Jeanne (b. 1735), Marie (b. 1735), Sébastienne (b. 1737), Pierre (b. 1742)',
        { id: 'michelPedeauPere' }
      ],
      given: 'Pierre', surname: 'Pédeau', sex: 'M',
      origin: 'Sainte-Croix de Machecoul, Pays de Retz',
      birth: { date: 'about 1683', place: 'Sainte-Croix de Machecoul' },
      death: { date: 'between 1746 and 1764' },
      lifespanText: 'c.1683 – between 1746 and 1764',
      father: 'celtonPedeau', mother: 'reneeCharteau',
      evidence: 'confirm',
      branch: 'pedeaux',
      occupation: 'Farinier — flour miller, probably at the Moulin de la Marche, Sainte-Pazanne',
      blurb: 'The miller of Sainte-Pazanne. Born at Machecoul about 1683, he married there twice — Jeanne Garnier in 1705, and after her death Anne Béty in 1729 — and ground flour, probably at the Moulin de la Marche near the rue de l\'Abreuvoir. His son Michel left the mill for the Nantes shipyards; his grandson left France altogether.',
      records: [
        {
          title: 'First marriage — Sainte-Croix, Machecoul',
          citation: '10 November 1705, to Jeanne Garnier — act imaged at the AD Loire-Atlantique',
          text: 'The act gives his age as 22 and calls him "de Sainte Croix de Machecoul" — and names his parents, though his father\'s first name is nearly illegible.'
        },
        {
          title: 'Second marriage — Sainte-Croix, Machecoul',
          citation: '10 January 1729, to Anne Béty (Bethuis) — act imaged at the AD Loire-Atlantique',
          text: 'His first wife is cited in this act, tying the two marriages to one man. Anne Béty is the mother of Michel, the future ship\'s carpenter.'
        }
      ],
      sources: [
        { label: 'Marriage act, 1705 — AD44 (Archinoe viewer)', url: 'https://www.archinoe.fr/v2/ark:/42067/b437331c4553d1fd4107ab80fd216841' },
        { label: 'Marriage act, 1729 — AD44 (Archinoe viewer)', url: 'https://www.archinoe.fr/v2/ark:/42067/640b75d1d5bba0e791052979e9bb56a5' },
        { label: 'Geneanet — duraton\'s Pédeau research', url: 'https://gw.geneanet.org/duraton?n=pedeau&p=pierre' }
      ],
      note: 'Assembled from compiled French research that cites and links the original acts; carried here at single-source confidence until the acts are re-read directly.'
    },

    anneBety: {
      children: [
        'The seven of the second marriage — see Pierre Pédeau',
        { id: 'michelPedeauPere' }
      ],
      given: 'Anne', surname: 'Béty', sex: 'F',
      alsoKnownAs: 'Bethuis',
      birth: { date: 'before 1704' },
      death: { date: 'before 1764' },
      lifespanText: 'd. before 1764',
      evidence: 'confirm',
      branch: 'pedeaux',
      blurb: 'The miller\'s second wife, married at Machecoul in January 1729, mother of the ship\'s carpenter. Her surname wobbles between Béty and Bethuis in the compilers\' readings — and one act may call her Marie.'
    },

    celtonPedeau: {
      children: [
        { id: 'pierrePedeauFarinier' },
        'and possibly brothers Michel and René Pédeau — the researcher who found them writes, honestly, that he has no proof'
      ],
      given: 'Celton(?)', surname: 'Pédeau', sex: 'M',
      evidence: 'confirm',
      branch: 'pedeaux',
      blurb: 'The edge of the record. He is named as Pierre\'s father in the 1705 marriage act, but three centuries have nearly erased his first name — the researcher who read the act writes "j\'ai cru lire Celton": I thought I read Celton. A Pays de Retz man of the mid-1600s, and for now, the first Pédeau.',
      note: 'His name, whatever it was, survives only in one hard-to-read line of a 1705 Machecoul marriage act. A fresh reading of that act — imaged online — is the only way to recover it.'
    },

    reneeCharteau: {
      children: [
        { id: 'pierrePedeauFarinier' }
      ],
      given: 'Renée', surname: 'Charteau', sex: 'F',
      evidence: 'confirm',
      branch: 'pedeaux',
      blurb: 'Named clearly, where her husband\'s name is not, in their son Pierre\'s 1705 marriage act. A woman of the Machecoul country in the middle 1600s.'
    },

    jeanneMuraille: {
      children: [
        { id: 'michelPedeau' },
        'He was either Michel André (b. 7 April 1765) or Michel Pierre (b. 20 May 1777, Chantenay) — and the 1810 census age columns now favor Michel Pierre. The Nantes death tables 1793–1852 hold no Michel but the father himself; Chantenay\'s own registers get the final word',
        'Marie (1766–1772)',
        'Jeanne Yvonne (b. 1769)',
        'Michel (1770–1771)',
        'Jean (1771–1772)',
        'Pierre (1773–1866)',
        'Anne'
      ],
      given: 'Jeanne Marguerite', surname: 'Muraille', sex: 'F',
      birth: { date: '17 February 1734', place: 'La Trinité de Machecoul, Pays de Retz' },
      death: { date: 'living after 1814' },
      lifespanText: 'b. 1734, living 1814',
      evidence: 'verified',
      branch: 'pedeaux',
      blurb: 'Illiterate — recorded in 1789 as "ne sait pas signer," she does not know how to sign. Muraille is a genuine Pays de Retz surname, clustering at Saint-Père-en-Retz, Frossay, Arthon and Saint-Viaud.',
      sources: [
        { label: 'AD44 — Machecoul La Trinité BMS 1734, 3 E 87/9', url: 'https://archives-numerisees.loire-atlantique.fr/v2/ark:/42067/8366bceea7a9471d371912b08a1eea11' }
      ]
    },

    /* ─────────────────────────  AUCOIN — the Acadian branch  ───────────────────────── */

    florenceAucoin: {
      siblings: [
        'Joseph-Michel (b. May 1760)',
        'Jean-Charles (b. July 1761, St-Lunaire)',
        'Françoise (1763–1763)',
        'Marie-Josèphe (b. 1764) — never married',
        'Anne-Théodose (1765–1798)',
        'François David (1766–1769)',
        'Grégoire-Alexis (1767–1844) — her godfather at the font',
        'Michel-Pierre (1769–1833)',
        'Pierre-Paul (1770–1818)',
        'Élisabeth “Isabelle” (1772–1843) — married Baptiste-Olivier Potier',
        'François-Étienne (1773–1837)',
        'Jeanne (1778–1779)',
        'Constant-Jean-Baptiste (b. Oct 1782)'
      ],
      children: [
        'Michel Pedeau (b. 1808)',
        'Jean Baptiste Pedeau (b. 1810)',
        { id: 'antoineFlorentin' },
        'Marie Bariot — married Joseph Felix Colbut, 27 Nov 1841, with her half-brother Jean Baptiste Pedeaux as witness'
      ],
      given: 'Florianne Marguerite', alsoKnownAs: 'Florence', surname: 'Aucoin', sex: 'F',
      origin: 'Saint-Énogat, Brittany',
      birth: { date: '28 November 1780', place: 'Saint-Énogat, Diocese of Saint-Malo, Brittany' },
      death: { date: 'buried 31 March 1852', place: 'Assumption Parish, Louisiana' },
      lifespanText: '1780 – 1852',
      father: 'michelAucoin', mother: 'isabelleHebert',
      evidence: 'verified',
      branch: 'aucoin',
      immigrant: true,
      photo: 'assets/img/aucoin-baptism-1780.jpg',
      photoCaption: 'Her baptism in the Saint-Énogat register, 29 November 1780. Ille-et-Vilaine, 10 NUM 35093 86.',
      blurb: 'Four years old when her family sailed for Louisiana in 1785. She lived to be godmother at her grandson\'s baptism in 1848 and died four years after that.',
      records: [
        {
          title: 'Baptism — Saint-Énogat, Diocese of Saint-Malo',
          citation: 'AD Ille-et-Vilaine, 10 NUM 35093 86 — Dinard-Saint-Énogat, Baptêmes/Mariages 1780, view 8',
          text: '"…florianne Margritte aucouen fille de michel aucouen et de [Isabelle] hebert sa femme, née le vingt huit novembre mil sept cens quatrevingt, fut baptisée le lendemain par moy soussigné curé, parrein Gregoire aucouen, marreine Margritte Bourcq, presents le pere de l\'enfans, marie aucouen et Jan Nagre qui ne signent. Aillet, curé."',
          highlight: 'Read in the original register. Born 28 November 1780, baptised the next day; godfather her brother Grégoire, godmother Marguerite Bourque; her father present.'
        },
        {
          title: 'Passenger list — La Ville d\'Archangel, 1785',
          citation: 'Entry 21 of 55 family groups; arrived New Orleans 3 December 1785',
          text: 'Michel AUCOIN 53 years, Isabelle HEBERT, his wife 48 years. Children: Jean 23, Michel 16, Pierre 14, François 11, Constant 2, Marie 21, Anne 19, Isabelle 13, Floriane 4, Grégoire 18.'
        },
        {
          title: 'Burial',
          citation: 'Diocese of Baton Rouge, Vol. 7 (1848–1852), ASM-10, 120',
          text: 'Florence Aucoin, age 72 years, wife of Francois BARIOT, bur. 31 March 1852.'
        }
      ],
      sources: [
        { label: 'AD Ille-et-Vilaine — archives en ligne', url: 'https://archives-en-ligne.ille-et-vilaine.fr/thot_internet/' },
        { label: 'La Ville d\'Archangel passenger list', url: 'https://www.acadian.org/culture/louisiana/ships-transportation-acadians-louisiana/la-ville-darchangel-acadian-passenger-list/' }
      ],
      note: 'Her death date was long disputed — WeRelate gives 30 March 1872, Broussard gives March 1852. The burial register settles it: 31 March 1852, age 72, which also fixes her birth at about 1780. She was also called Clémence, which is worth knowing when searching. After Michel Pedeau died she remarried on 26 November 1814 at Plattenville: the register records the groom as Francisco, son of Santiago and Maria MAZEROLLE, filed under the surname heading "BARIOT, BARIAU, VARIOT, BARRILLEAU." Steven Cormier\'s Acadians in Gray instead names her second husband François Allain le jeune — but Cormier\'s own summary line says the Aucoin daughters married into the "Potier, Pedeau, and Barrilleaux" families, and the sacramental register is unambiguous. Bariot it is.'
    },

    antoineAucoin: {
      children: [
        { id: 'michelAucoin' }
      ],
      given: 'Antoine', suffix: 'le jeune', surname: 'Aucoin', sex: 'M',
      origin: 'Acadia',
      birth: { date: 'about 1700' }, death: { date: 'about 1756' },
      evidence: 'confirm', branch: 'aucoin',
      blurb: 'Of Cobeguit, Acadia. Moved his family to Île Saint-Jean in 1755 or 1756, in the first wave of flight ahead of the British.',
      sources: [{ label: 'Acadians in Gray — Book Ten', url: 'http://www.acadiansingray.com/Acadians%20of%20LA-Intro-5a.htm' }]
    },

    elisabethAmireau: {
      children: [
        { id: 'michelAucoin' }
      ],
      given: 'Élisabeth', surname: 'Amireau', sex: 'F',
      origin: 'Acadia',
      birth: { date: 'about 1709' }, death: { date: 'about 1766' },
      evidence: 'confirm', branch: 'aucoin',
      sources: [{ label: 'Acadians in Gray — Book Ten', url: 'http://www.acadiansingray.com/Acadians%20of%20LA-Intro-5a.htm' }]
    },

    michelAucoin: {
      children: [
        'Fourteen in all:',
        'Joseph-Michel (b. 1760) — not on the 1785 passenger list; his fate is unrecorded',
        'Jean-Charles (b. 1761)',
        'Marie-Josèphe (b. 1764)',
        'Anne-Théodose (1765–1798)',
        'Grégoire-Alexis (1767–1844)',
        'Michel-Pierre (1769–1833)',
        'Pierre-Paul (1770–1818)',
        'Élisabeth “Isabelle” (1772–1843)',
        'François-Étienne (1773–1837)',
        { id: 'florenceAucoin' },
        'Constant-Jean-Baptiste (b. 1782)',
        'and three who died young at Saint-Énogat: Françoise (1763), François David (1766–1769), Jeanne (1778–1779)',
        'The 1785 passenger list names ten of them aboard with their parents; Joseph-Michel is the one surviving child it does not carry'
      ],
      given: 'Michel', suffix: 'le jeune', surname: 'Aucoin', sex: 'M',
      origin: 'Cobeguit, Acadia',
      birth: { date: 'about 1732', place: 'probably Cobeguit, Acadia' },
      death: { date: 'by 1793', place: 'Bayou des Écores, Louisiana' },
      father: 'antoineAucoin', mother: 'elisabethAmireau',
      evidence: 'confirm',
      branch: 'aucoin',
      immigrant: true,
      blurb: 'Followed his family to Île Saint-Jean around 1755, married there in about 1758, and was deported to Saint-Malo within the year. Twenty-five years at Saint-Énogat, fourteen children, then Louisiana at fifty-three. Dead within eight years of landing.',
      records: [
        {
          title: 'Passenger list — La Ville d\'Archangel, 1785, entry 21',
          citation: 'Rev. Donald J. Hébert, Acadian Families in Exile 1785, p. 93',
          text: 'Michel AUCOIN 53 years, Isabelle HEBERT, his wife 48 years — with ten named children including "Floriane 4 years."'
        },
        {
          title: 'The voyage',
          citation: 'Sixth of the Seven Ships — Steven A. Cormier, Acadians in Gray, appendix',
          text: 'La Ville d\'Archangel, a 600-ton frigate. Left Saint-Malo 12 August 1785, arrived New Orleans 3 December 1785 — a 113-day crossing with 309 people aboard.'
        }
      ],
      sources: [
        { label: 'La Ville d\'Archangel passenger list', url: 'https://www.acadian.org/culture/louisiana/ships-transportation-acadians-louisiana/la-ville-darchangel-acadian-passenger-list/' },
        { label: 'Acadians in Gray — Seven Ships appendix', url: 'http://www.acadiansingray.com/Appendices-Seven%20Ships\'%20Passengers.htm' },
        { label: 'Acadians in Gray — Book Ten', url: 'http://www.acadiansingray.com/Acadians%20of%20LA-Intro-5a.htm' }
      ],
      note: 'The family went first to Bayou des Écores, north of Baton Rouge, where Michel died. Afterwards his widow and children joined the Acadian exodus from that settlement to upper Bayou Lafourche — which is how Florence came to be in Assumption Parish to meet a Frenchman from Nantes. The published transcription that would carry every Saint-Énogat act for this family is Albert J. Robichaux, Jr., The Acadian Exiles in Saint-Malo, 1758–1785, vol. 1, pp. 22–24, family #31.'
    },

    isabelleHebert: {
      children: [
        'The same fourteen — see Michel Aucoin',
        { id: 'florenceAucoin' }
      ],
      given: 'Isabelle', alsoKnownAs: 'Ysabel', surname: 'Hébert', sex: 'F',
      origin: 'Acadia',
      birth: { date: 'about 1738', place: 'Acadia' },
      evidence: 'verified',
      branch: 'aucoin',
      immigrant: true,
      blurb: 'Married Michel Aucoin in Acadia about 1758 — the year before the deportation. They arrived in France already married; there is no Saint-Énogat marriage record for them.',
      note: 'The Louisiana registers repeatedly record the couple as "Acadians," and one entry places them precisely: "of Saint Nogata, Diocese of St. Malo, France" — Saint-Énogat, now part of Dinard.'
    },

    /* ─────────────────────────  GAIENNIE  ───────────────────────── */

    alphonseJr: {
      siblings: [
        'Marie Sophie Gaiennie (1853–1933)',
        'Francois George Gaiennie (1858–1875)',
        'Mary Emma Gaiennie (1860–1862)',
        'Joseph Ernest Gaiennie (1864–1937)',
        'Louis Raphael Gaiennie Sr. (1865–1930)',
        'Seymour Gaiennie (1868–1948)',
        'Louis Fernand Gaiennie (1870–1963)',
        'Marie Alix Gaiennie (1873–1957)',
        'Blanche Marie Gaiennie (1875–1965)'
      ],
      children: [
        'Charles Seymour Gaiennie (b. 1889)',
        'Corinne Marie Gaiennie Jessup (1890–1946)',
        'Edward J. Gaiennie (1892–1894)',
        { id: 'ednaGaiennie' },
        'Marie Lucile Gaiennie Brown (b. 1896)',
        'an infant, died June 1897',
        'Lawrence Herbert Gaiennie (1897–1906)',
        'George Florestan Gaiennie (b. 1905)',
        'Roland Francis Gaiennie (b. 1909)'
      ],
      given: 'Alphonse Florestan', suffix: 'Jr.', surname: 'Gaiennie', sex: 'M',
      birth: { date: '28 August 1862' },
      death: { date: '19 March 1919', place: 'Orleans Parish' },
      father: 'alphonseSr', mother: 'marieAlixFazende',
      evidence: 'confirm',
      branch: 'gaiennie',
      blurb: 'The A. F. Gaiennie tomb at Greenwood Cemetery is his. He and his wife died ten weeks apart in the winter of 1919 — almost certainly the influenza pandemic.',
      records: [
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, February 1888 — Vol. 13, p. 255',
          text: 'CURIEN, JENNIE ELIZABETH × GAIENNIE, ALPHONSE FLORESTAN.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 19 March 1919 — Vol. 176, p. 115',
          text: 'GAIENNE, ALPHONSE F, age 56.'
        }
      ],
      sources: [
        { label: 'Find a Grave 174226677', url: 'https://www.findagrave.com/memorial/174226677' }
      ]
    },

    jeanneCurien: {
      children: [
        'Charles Seymour Gaiennie (b. 1889)',
        'Corinne Marie Gaiennie Jessup (1890–1946)',
        'Edward J. Gaiennie (1892–1894)',
        { id: 'ednaGaiennie' },
        'Marie Lucile Gaiennie Brown (b. 1896)',
        'an infant, died June 1897',
        'Lawrence Herbert Gaiennie (1897–1906)',
        'George Florestan Gaiennie (b. 1905)',
        'Roland Francis Gaiennie (b. 1909)'
      ],
      given: 'Jeanne Elizabeth', nickname: 'Jennie', surname: 'Curien', sex: 'F',
      birth: { date: '15 June 1868' },
      death: { date: '12 January 1919', place: 'Orleans Parish' },
      evidence: 'verified',
      branch: 'gaiennie',
      records: [
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 12 January 1919 — Vol. 175, p. 218',
          text: 'GAIENNIE, JEANNE E CURIEN, age 52.'
        }
      ]
    },

    alphonseSr: {
      siblings: [
        'Joseph Gervaise Gaiennie (1821–1825)',
        'Eulalie Aurelia Gaiennie (1823–1909)',
        'Joseph Alceste Gaiennie (1825–1903)',
        'Marie Emeline Gaiennie (baptised with him, 27 September 1829)',
        'David Ernest Gaiennie (1831–1832)',
        'Augustine Gaiennie (b. 1832)',
        'Fernand Gaiennie (b. 1835)',
        'Marie Floreska Gaiennie (1836–1881) — married Achille Druilhet, 1853',
        'Jeanne Nathalie Gaiennie (b. 1839) — married François Poché, 1860',
        'Louis Rene Gaiennie (1839–1839)',
        'Pierre Francois Gaiennie (1841–1862)'
      ],
      children: [
        'Marie Sophie (1853–1933)',
        'Francois George (1858–1875)',
        'Mary Emma (1860–1862)',
        { id: 'alphonseJr' },
        'Joseph Ernest (1864–1937)',
        'Louis Raphael Sr. (1865–1930)',
        'Seymour (1868–1948)',
        'Louis Fernand (1870–1963)',
        'Marie Alix (1873–1957)',
        'Blanche Marie (1875–1965)'
      ],
      given: 'Alphonse Florestan', suffix: 'Sr.', surname: 'Gaiennie', sex: 'M',
      alsoKnownAs: 'recorded at baptism simply as "Florentin"',
      birth: { date: '9 September 1826', place: 'St. James Parish' },
      death: { date: '20 July 1884', place: 'Orleans Parish' },
      father: 'josephGervais', mother: 'marieNathalieChenet',
      evidence: 'verified',
      branch: 'gaiennie',
      occupation: 'Farmer, later farm overseer — 4th ward, Jefferson Parish',
      blurb: 'Married three times. Evela Trosclair died in 1855 at twenty-one; Marie Alix Fazende died in 1877 at thirty-seven.',
      records: [
        {
          title: 'Baptism — St. Michael, Convent (St. James Parish)',
          citation: 'Diocese of Baton Rouge, Vol. 4 (1820–1829), SMI-3, 164',
          text: 'Florentin (Gerve and Natalie CHENET) bn. 9 Sept. 1826 bt. 27 Sept. 1829 spo. Armand Bourgeois and Selese Frederic.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 20 July 1884 — Vol. 85, p. 616',
          text: 'GAIENNIE, FLORESTAN, age 60.'
        }
      ]
    },

    marieAlixFazende: {
      children: [
        'The younger Gaiennie children of Alphonse Sr., including',
        { id: 'alphonseJr' }
      ],
      given: 'Marie Alix', surname: 'Fazende', sex: 'F',
      alsoKnownAs: 'indexed by the New Orleans obituary index as "Marie Alix Morière"',
      birth: { date: '6 June 1841' },
      death: { date: '23 May 1877', place: 'Jefferson Parish' },
      evidence: 'confirm',
      branch: 'gaiennie',
      blurb: 'Daughter of Sébastien François Angèl Morière Fazende (1795–1876) and Marie Félicité Estelle Verloin deGruy (1820–1883) — which is how the deGruy family history came to document the Gaiennies at all.',
      sources: [
        { label: 'deGruy Family History — Marie Alix Fazende', url: 'https://degruyfamily.wordpress.com/marie-alix-fazende-1841-1877/' }
      ]
    },

    josephGervais: {
      siblings: [
        'François Gaiennie (b. 14 Oct 1793, New Orleans) — probably the Joseph François who married Marceline Labatut; his children share the same grandparents in the register',
        'Eulalie Gaiennie (b. 30 April 1795, New Orleans)'
      ],
      children: [
        'Joseph Gervaise (1821–1825)',
        'Eulalie Aurelia (1823–1909)',
        'Joseph Alceste (1825–1903)',
        { id: 'alphonseSr' },
        'Marie Emeline (baptised 27 September 1829, the same day as Florentin — in the register but absent from the family history)',
        'David Ernest (1831–1832)',
        'Augustine (b. 1832)',
        'Fernand (b. 1835)',
        'Marie Floreska (1836–1881)',
        'Jeanne Nathalie (b. 1839)',
        'Louis Rene (1839–1839)',
        'Pierre Francois (1841–1862)'
      ],
      given: 'Joseph Gervais', surname: 'Gaiennie', sex: 'M',
      birth: { date: '1 June 1797', place: 'New Orleans' },
      death: { date: 'buried 9 June 1854', place: 'St. James Parish' },
      lifespanText: '1797 – 1854',
      father: 'francoisGaiennie', mother: 'elisabethSarde',
      evidence: 'verified',
      branch: 'gaiennie',
      photo: 'assets/img/joseph-gervaise-pierre-gaiennie.webp',
      photoCaption: 'Joseph Gervaise Gaiennie (1797–1854). Portrait via the deGruy family history.',
      occupation: 'War of 1812 — 6th Regiment (Landry\'s), Louisiana Militia',
      blurb: 'Seventeen years old when the British came up the river. Twenty-two and already an orphan when he married in January 1820. Twelve children. Gaiennie Street in the Warehouse District still carries the family name.',
      records: [
        {
          title: 'Baptism — St. James Parish',
          citation: 'Diocese of Baton Rouge, Vol. 2 (1770–1803), SJA-3, 157',
          text: 'Gervasio (Francisco & Eulalia Sarde) bt. 6 Sep 1797 bn. 1 Jun 1797 spo. Estevain Rene & Eufrosyna Sarde. Pat. GP: (Juliano Gagnier & Renata de Brun) Mat. GP: (Nicolas Sarde & Margarita Rene).',
          highlight: 'His own baptism, found in 2026 under the spelling GANIER — with both parents and all four grandparents named in a single entry. The godfather is his great-uncle Étienne Reyne; the godmother his aunt Euphrosine.'
        },
        {
          title: 'Marriage — St. Michael, Convent',
          citation: 'Diocese of Baton Rouge, Vol. 4 (1820–1829), SMI-2, 77',
          text: 'Gervais, age 22, nat. of New Orleans (Francois and Elisabete SARDE, both decd.) m. 22 Jan. 1820 Nathalie CHENET, age 17 (Pierre and Susanne LAVIGNE) wit. Jean Baptiste Oury; Dominique LeBourgeois; Orter Reine; Maximillien Rousselle.',
          highlight: 'One record fixes four things: his 1797 birth, his New Orleans origin, both his parents, and both of his wife\'s parents. Note the witness "Orter Reine" — his grandmother\'s family, still standing up for him twenty-three years on.'
        },
        {
          title: 'Militia roll — War of 1812',
          citation: 'Louisiana Soldiers in the War of 1812 (compiled state militia rosters)',
          text: '"Gervais Gainne — 6 Reg\'t. (Landry\'s), La. Militia."',
          highlight: 'He was not alone. The same roster carries "Francis Gaignie — 4 Reg\'t. (Morgan\'s), La. Militia" and a "U. Gaignie" — his father and, most likely, his uncle Urbain. Seven Gaiennie entries in all, across the usual spelling variants.'
        },
        {
          title: 'Burial — St. Michael, Convent',
          citation: 'Diocese of Baton Rouge, Vol. 8 (1853–1857), SMI-4, 236',
          text: 'Gervais Gaiennie, age 57 yrs., bur. 9 June 1854.'
        }
      ],
      sources: [
        { label: 'Louisiana Soldiers in the War of 1812 (index)', url: 'https://www.ancestry.com/search/collections/3339/?name=_Gaiennie&count=50' },
        { label: 'deGruy Family History — Joseph Gervaise Gaiennie', url: 'https://degruyfamily.wordpress.com/joseph-gervaise-gaiennie-1797-1854/' }
      ],
      note: 'On the arithmetic: he was born 1 June 1797, so he was seventeen and a half at the Battle of New Orleans on 8 January 1815. That is not a contradiction — Louisiana\'s war was the New Orleans campaign of December 1814 to January 1815, and the militia called up essentially every able-bodied man and boy in the state. A seventeen-year-old on a militia roll in 1814–15 is unremarkable. The deGruy family history adds that "his name appears in the pension indexes," which is the weaker half of the claim: he died in 1854, long before the pension acts of 1871 and 1878, so he could never have applied himself. Any pension file would be a widow\'s claim by Marie Nathalie Chenet — and since she died in 1878, only the 1878 act, which dropped the requirement that the marriage predate the peace treaty, would have let her file at all. Unverified.'
    },

    marieNathalieChenet: {
      children: [
        'The same eleven — see Joseph Gervais',
        { id: 'alphonseSr' }
      ],
      given: 'Marie Nathalie', surname: 'Chenet', sex: 'F',
      birth: { date: 'about 1803' },
      death: { date: '1878' },
      father: 'pierreChenet', mother: 'susanneLavigne',
      evidence: 'verified',
      branch: 'gaiennie',
      blurb: 'Seventeen at her marriage in January 1820.',
      note: 'The deGruy family history carries two conflicting birth years for her, 1782 and 1803. The marriage register gives her age as seventeen, which settles it at about 1803.'
    },

    francoisGaiennie: {
      siblings: [
        'Urbain Gaiennie ("Martin Urbano," of La Bazouge-de-Chemeré in Maine) — married Eulalie\'s sister Marie Jeanne Sardet in 1789; his son François Urbain (b. 1792) carried on the other Gaiennie line'
      ],
      children: [
        'François (b. 14 Oct 1793, New Orleans) — very likely the Joseph François who married Marceline Labatut',
        'Eulalie (b. 30 April 1795, New Orleans)',
        { id: 'josephGervais' }
      ],
      given: 'François', surname: 'Gaiennie', sex: 'M',
      alsoKnownAs: 'Ganier, Gagnier, Gannier, Gaigne in the registers — the spelling settled into Gaiennie in Louisiana',
      origin: 'Brûlon, province of Maine, France',
      birth: { date: 'about the 1760s', place: 'Brûlon, province of Maine (now dept. of Sarthe), France' },
      death: { date: 'before January 1820' },
      lifespanText: 'of Brûlon — d. before 1820',
      father: 'julienGagnier', mother: 'reneeLeBrun',
      evidence: 'verified',
      branch: 'gaiennie',
      immigrant: true,
      occupation: 'War of 1812 — 4th Regiment (Morgan\'s), Louisiana Militia (probable)',
      blurb: 'The Gaiennie immigrant, found at last: a man of Brûlon in the old province of Maine, in New Orleans by the early 1790s, married at St. James in 1793, upriver with the Sardet clan by 1797. His brother Urbain came too, and married his wife\'s sister.',
      records: [
        {
          title: 'Marriage — St. James Parish',
          citation: 'Diocese of Baton Rouge, Vol. 2 (1770–1803), SJA-2, 19',
          text: 'Francisco (Julian & Reneta Lebrum, of Brulon, France) m. 10 Feb 1793 Eulalia SARDE (Nicolas & Margarita Renne, of New Orleans) wit. Juan Haydel & Margarita Sarde.',
          highlight: 'One line names his parents, his French home town, his bride, and her parents. This record sat unfound for years because the clerk filed the family under GANIER — the "no Gaiennie in Volume 2" conclusion was a spelling artifact.'
        },
        {
          title: 'Militia roll — War of 1812',
          citation: 'Louisiana Soldiers in the War of 1812 (compiled state militia rosters)',
          text: '"Francis Gaignie — 4 Reg\'t. (Morgan\'s), La. Militia."',
          highlight: 'Almost certainly this François — which would put father and son in the campaign in different regiments. Probable rather than proven.'
        }
      ],
      sources: [
        { label: 'Louisiana Soldiers in the War of 1812 (index)', url: 'https://www.ancestry.com/search/collections/3339/?name=_Gaiennie&count=50' }
      ],
      note: 'The deGruy family history gives him 1760–1804, dying the same year as his wife — 1804 was a yellow-fever year — which squares with the 1820 register calling both parents dead. The 1804 deaths await confirmation in the New Orleans abstracts for 1804–06. His baptism should sit in the parish registers of Brûlon (Sarthe), which are online at the departmental archives — the next French hunt.'
    },

    julienGagnier: {
      children: [
        { id: 'francoisGaiennie' },
        'Urbain ("Martin Urbano") Gaiennie — married Marie Jeanne Sardet, New Orleans, 19 March 1789'
      ],
      given: 'Julien', surname: 'Gagnier', sex: 'M',
      origin: 'Brûlon, province of Maine, France',
      evidence: 'verified',
      branch: 'gaiennie',
      blurb: 'Of Brûlon in the old province of Maine, on the Sarthe–Mayenne border country of northwestern France. He never left it, as far as the record shows: his two sons carried the name to Louisiana, where the clerks respelled it until it became Gaiennie.',
      records: [
        {
          title: 'Named in his son Urbain\'s marriage record',
          citation: 'St. Louis Cathedral, 19 March 1789 — SLC, M5, 62 (SRANO Vol. 4)',
          text: 'Urbano (Julián and Renata LEBRUN), native of la Bassouge de Chesnery, Province Dumene [La Bazouge-de-Chemeré, province of Maine], m. Maria SARDET, Mar. 19, 1789.'
        },
        {
          title: 'Named in his grandson Gervais\'s baptism',
          citation: 'St. James Parish, 6 September 1797 — SJA-3, 157 (Diocese of Baton Rouge Vol. 2)',
          text: 'Pat. GP: Juliano Gagnier & Renata de Brun.'
        }
      ]
    },

    reneeLeBrun: {
      children: [
        { id: 'francoisGaiennie' },
        'Urbain Gaiennie'
      ],
      given: 'Renée', surname: 'Le Brun', sex: 'F',
      origin: 'Brûlon, province of Maine, France',
      evidence: 'verified',
      branch: 'gaiennie',
      blurb: 'Named as "Renata Lebrun" and "Renata de Brun" in her sons\' Louisiana records — of Brûlon, in Maine. Le Brun is thick in that country; her own act should sit in the Brûlon registers.'
    },

    nicolasSardet: {
      children: [
        'A first child baptized in the lost 1767–68 folios of St. Louis church — probably Marguerite, who married Joseph Gillard in 1783',
        'Marie Françoise (b. 19 Aug 1769)',
        'Marie Jeanne (b. 15 April 1772) — married Urbain Gaiennie, 1789',
        { id: 'elisabethSarde' },
        'Françoise (b. about 1775)',
        'Euphrosine (b. 10 June 1776) — married Jean Gleiser at St. James, 1807',
        'Étienne (b. 29 Jan 1778)',
        'Eugénie (b. 6 Jan 1780) — married Jacques Nadau; the "Eugénie Sardet" of family tradition',
      ],
      given: 'Nicolas', surname: 'Sardet', sex: 'M',
      origin: 'Bordeaux, France',
      birth: { place: 'Bordeaux, France' },
      death: { date: 'between 1780 and May 1784', place: 'New Orleans' },
      lifespanText: 'of Bordeaux — d. by 1784',
      evidence: 'verified',
      branch: 'gaiennie',
      immigrant: true,
      occupation: 'Master cooper',
      blurb: 'A Bordeaux barrel-maker in Spanish New Orleans. He married a fourteen-year-old Creole girl in 1767, raised eight children on the strength of the cooper\'s trade, and was dead before his daughters married the two brothers from Brûlon.',
      records: [
        {
          title: 'Marriage — St. Louis church, New Orleans',
          citation: '20 January 1767 — SLC, M2, 25 (SRANO Vol. 2)',
          text: 'Marguerite [REINE], m. Nicolas SARDE, Jan. 20, 1767.'
        },
        {
          title: 'Daughter Eulalie\'s baptism, naming his trade',
          citation: '16 January 1774 — SLC, B7, 35 (SRANO Vol. 3)',
          text: 'Eulalie Alexandrine (Nicolas, master cooper, and Marie Margueritte REINE), b. Jan. 16, 1774, bn. Jan. 5, 1774.'
        }
      ],
      note: 'His widow remarried Pierre Bourgeois of Normandy on 2 May 1784, which brackets Nicolas\'s death. His own Bordeaux parents are the next step on this line.'
    },

    margueriteReyne: {
      children: [
        'The same eight — see Nicolas Sardet',
        { id: 'elisabethSarde' }
      ],
      given: 'Marguerite', surname: 'Reyne', sex: 'F',
      alsoKnownAs: 'Reine, Renne, Rehene in the registers',
      birth: { date: '6 November 1752', place: 'New Orleans' },
      father: 'etienneReyne', mother: 'francoiseRenard',
      evidence: 'verified',
      branch: 'gaiennie',
      blurb: 'Born in French colonial New Orleans a decade before Spain took the colony. Married the Bordeaux cooper at fourteen, widowed with eight children by thirty-one, remarried a Norman at thirty-one, and stood godmother to her grandchildren into the 1790s.',
      records: [
        {
          title: 'Baptism — St. Louis church, New Orleans',
          citation: '6 November 1752 — SLC, B2, 269 (SRANO Vol. 2)',
          text: 'Marie Marguerite (Etienne and Francoise [RENARD]), b. Nov. 6, 1752, bn. Nov. 6, 1752, s. Laurant BAILLY and Marguerite CHENET.'
        },
        {
          title: 'Remarriage, naming her parents',
          citation: '2 May 1784 — SLC, M5, 27 (SRANO Vol. 4)',
          text: 'Maria Margarita (Estevan and Francisca RENARD, natives of this parish), native of this parish, widow of [o] CADET SARDE, m. Pedro BOURGEOIS, May 2, 1784.'
        }
      ]
    },

    etienneReyne: {
      children: [
        'Marie Marguerite — see below',
        'Marie Jeanne (b. 25 Oct 1755)',
        'Louise Françoise (b. 9 Nov 1757)',
        'Pierre (b. 1 Dec 1761)',
        'Marie Joseph (b. 19 June 1766)',
        { id: 'margueriteReyne' }
      ],
      given: 'Étienne', surname: 'Reyne', sex: 'M',
      evidence: 'verified',
      branch: 'gaiennie',
      occupation: 'Master mason',
      blurb: 'A master mason of French colonial New Orleans, raising children there through the 1750s and 1760s. The deepest documented ancestor on the Gaiennie side — the tenth generation of this tree.',
      records: [
        {
          title: 'His children\'s baptisms — St. Louis church',
          citation: 'SLC registers B2–B5, 1752–1766 (SRANO Vol. 2)',
          text: 'Marie Marguerite (1752) · Marie Jeanne (1755) · Louise Françoise (1757) · Pierre (1761, "Etienne, master mason") · Marie Joseph (1766) — all children of Etienne and Francoise RENARD.'
        }
      ],
      note: 'Whether he was born in France or in the colony is not yet documented. A "Ste. Reyne concession" appears in the earliest New Orleans records of the 1720s — possibly connected, possibly coincidence.'
    },

    francoiseRenard: {
      children: [
        'The same six — see Étienne Reyne',
        { id: 'margueriteReyne' }
      ],
      given: 'Françoise', surname: 'Renard', sex: 'F',
      evidence: 'verified',
      branch: 'gaiennie',
      blurb: 'Named across fifteen years of her children\'s baptisms, and still standing godmother to a Sardet granddaughter in 1769. Her daughter Françoise Reyne married into the Caraby family, whose records call the couple "natives of New Orleans."'
    },

    elisabethSarde: {
      siblings: [
        'Marguerite Sardet — married Joseph Gillard of Le Croisic in 1783; died 1794 at Cabahanoce (St. James Parish)',
        'Marie Françoise Sardet (b. 1769)',
        'Marie Jeanne Sardet (b. 15 April 1772) — married Urbain Gaiennie, her sister\'s brother-in-law, in 1789',
        'Françoise Sardet (b. about 1775)',
        'Euphrosine Sardet (b. 1776) — godmother at Gervais\'s baptism; married Jean Gleiser at St. James, 1807',
        'Étienne Sardet (b. 1778)',
        'Eugénie Sardet (b. 6 Jan 1780) — married Jacques Nadau; the name family tradition later pinned on her sister'
      ],
      children: [
        'François (b. 14 Oct 1793)',
        'Eulalie (b. 30 April 1795)',
        { id: 'josephGervais' }
      ],
      given: 'Eulalie Alexandrine', surname: 'Sardet', sex: 'F',
      alsoKnownAs: '"Elisabete Sarde" on her son\'s 1820 marriage record; "Eugénie Sardet" in garbled family tradition — Eugénie was her youngest sister',
      birth: { date: '5 January 1774', place: 'New Orleans' },
      death: { date: 'before January 1820' },
      father: 'nicolasSardet', mother: 'margueriteReyne',
      evidence: 'verified',
      branch: 'gaiennie',
      blurb: 'A cooper\'s daughter from Spanish New Orleans, baptized at St. Louis church in 1774. She married the newcomer from Brûlon three weeks after her nineteenth birthday and raised her family upriver at St. James.',
      records: [
        {
          title: 'Baptism — St. Louis church, New Orleans',
          citation: '16 January 1774 — SLC, B7, 35 (SRANO Vol. 3)',
          text: 'Eulalie Alexandrine (Nicolas, master cooper, and Marie Margueritte REINE), b. Jan. 16, 1774, bn. Jan. 5, 1774, s. Nicolas Alexandre DELASSIZE and Marie Eulalie DELASSIZE.'
        },
        {
          title: 'Marriage — St. James Parish',
          citation: '10 February 1793 — SJA-2, 19 (Diocese of Baton Rouge Vol. 2)',
          text: 'Eulalia (Nicolas & Margarita Renne, of New Orleans) m. 10 Feb 1793 Francisco GANIER (Julian & Renata Lebrum, of Brulon, France) wit. Juan Haydel & Margarita Sarde.'
        }
      ],
      note: 'For two centuries she wore the wrong names. The 1820 clerk wrote her as Élisabeth; the family remembered her as Eugénie, which was actually her youngest sister; the deGruy history dated her 1756, twenty years early. Her own baptism settles it: Eulalie Alexandrine Sardet, born 5 January 1774. The deGruy claim that she and François both died in 1804 — a yellow-fever year — still awaits the New Orleans abstracts for 1804–06.'
    },

    pierreChenet: { given: 'Pierre', surname: 'Chenet', sex: 'M', evidence: 'verified', branch: 'gaiennie', blurb: 'Named in his daughter\'s 1820 marriage record.' },
    susanneLavigne: { given: 'Susanne', surname: 'Lavigne', sex: 'F', evidence: 'verified', branch: 'gaiennie', blurb: 'Named in her daughter\'s 1820 marriage record.' },

    /* ─────────────────────────  BRUNETTI / FRANOVICH / MOIZANT  ───────────────────────── */

    johnBrunetti: {
      children: [
        { id: 'veronicaBrunetti' }
      ],
      given: 'John', alsoKnownAs: 'born Giovanni — the Italian form of John', surname: 'Brunetti', sex: 'M',
      origin: 'Plataci, Cosenza, Calabria — via Chicago',
      birth: { date: '5 May 1893', place: 'Plataci, Cosenza, Calabria, Italy' },
      death: { date: '12 January 1987', place: 'New Orleans' },
      father: 'michelBrunetti', mother: 'domenicaForano',
      evidence: 'verified',
      branch: 'brunetti',
      immigrant: true,
      blurb: 'Left Italy as a young man, spent his twenties in Chicago, and turned up in New Orleans in time to marry a Dalmatian oyster family\'s daughter in June 1921. He and Veronica are the only two Brunettis in St. Louis Cemetery No. 3, and apart from his own daughter\'s there is not another Brunetti birth in the Louisiana index — no sibling or cousin followed him south, so the surname ended with him here.',
      records: [
        {
          title: 'Marriage — the record that names his parents',
          citation: 'Louisiana Parish Marriages, Orleans, June 1921 (licence Vol. 46, p. 90; two entries, 15 and 18 June)',
          text: 'John Brunetti, 28, son of MICHELE BRUNETTI and DOMENICA FORANO, m. Miss Veronica Franovich, 19. Also on the record: An[thony] Franovich and Melan[ie] Moyant — the bride\'s parents.',
          highlight: 'Found August 2026. This is the document the family file waited five years of records for: it names John\'s parents — and the father matches the "father Michele, Plataci" of the 1912 Ellis Island manifest, closing the chain to the village.'
        },
        {
          title: 'Veterans Administration Master Index, 1917–1940',
          citation: 'U.S. Veterans Administration master index card',
          text: 'John Brunetti — a veteran\'s index card, with military service dated 24 May 1919 at New Orleans.',
          highlight: 'The family said he served in the First World War and gained his citizenship through it — the VA index is the federal confirmation that he served. His grandson Aaron carries the rest of it from Buddy: he was with a gun crew, artillery, and it left him deaf in later life.'
        },
        {
          title: 'WWI draft registration — Chicago',
          citation: 'Cook County, Illinois, 1917–18 (NARA RG 163)',
          text: 'Exactly one John Brunetti registered in Chicago — and no Brunetti at all registered anywhere in Louisiana.',
          highlight: 'This is what turns the family\'s "he was in Chicago" story into a documented fact, and brackets his move south to somewhere between 1918 and his June 1921 wedding.'
        },
        {
          title: 'Illinois federal naturalization index',
          citation: 'US District Court, Northern District of Illinois — NARA Chicago, RG 21',
          text: 'One Declaration of Intention for a Giovanni Brunetti, birth year 1893, birthplace Italy.'
        },
        {
          title: '1930 U.S. Census, Orleans Parish',
          citation: 'Household of John Brunette',
          text: 'John Brunette, b. about 1894 in Italy; wife Veronica; daughter Veronica M., b. about 1924 in Louisiana.'
        }
      ],
      sources: [
        { label: 'Find a Grave 282264524', url: 'https://www.findagrave.com/memorial/282264524/john-brunetti' },
        { label: 'Ellis Island — Giovanni Brunetti, 16 April 1912', url: 'https://www.statueofliberty.org/arrival-details/?id=JJ11-KJ4' },
        { label: 'Ellis Island — every Brunetti who left Plataci', url: 'https://www.statueofliberty.org/arrival-result/?last_name=Brunetti&residence_place=Plataci&arrival_year_from=1790&arrival_year_to=1974' }
      ],
      note: 'For years this entry carried three unequal claims, and refused to enter Michele as his father until a record named them together. In August 2026 the 1921 marriage record did exactly that: John Brunetti, 28, son of Michele Brunetti and Domenica Forano — matching the Ellis Island manifest\'s "father Michele, Plataci" and settling the village. The arc now reads whole: born in Plataci — an Arbëreshë village, an Italo-Albanian community in Calabria since the fifteenth century — he sailed from Naples in April 1912 at eighteen, went to Chicago, registered there for the draft, served in the war (VA index; service dated 24 May 1919 at New Orleans), gained his citizenship through that service as the family always said, and married Veronica in New Orleans the month after his twenty-eighth birthday. His grandson Aaron adds the detail that survives in the family from Buddy: John served on a gun crew — artillery — and went deaf from it in later life, which would make his unit records the next thing worth finding. Still wanted for full verification: the WWII "old man\'s draft" card of 1942 (states exact birthplace), his Declaration of Intention at NARA Chicago, Veronica Marie\'s 1923 birth certificate, and the St. Louis Cathedral sacramental act of the wedding.'
    },

    michelBrunetti: {
      children: [
        { id: 'johnBrunetti' }
      ],
      given: 'Michele', surname: 'Brunetti', sex: 'M',
      origin: 'Plataci, Cosenza, Calabria',
      birth: { date: 'about 1870', place: 'Plataci, Cosenza, Calabria, Italy' },
      evidence: 'confirm',
      branch: 'brunetti',
      blurb: 'Named as John\'s father on the 1921 New Orleans marriage record, and as the "father Michele, Plataci" a nineteen-year-old Giovanni gave the Ellis Island officers in 1912. He stayed in the village; his son never went back.',
      note: 'Plataci\'s own civil registers (Cosenza province, from 1809) and parish books are the route to his dates and his own parents. The village is Arbëreshë — records may carry both Italian and Albanian name forms.'
    },

    domenicaForano: {
      children: [
        { id: 'johnBrunetti' }
      ],
      given: 'Domenica', surname: 'Forano', sex: 'F',
      origin: 'Plataci, Cosenza, Calabria',
      birth: { date: 'about 1870', place: 'probably Plataci, Cosenza, Calabria, Italy' },
      evidence: 'confirm',
      branch: 'brunetti',
      blurb: 'John\'s mother, named on his 1921 marriage record. Nothing else is known of her yet — she lived and died an ocean away from the New Orleans family her son made.',
      note: 'Her surname is indexed FORANO; in an Arbëreshë village the spelling may wobble (Forano, Farano, Fiorano) across records. Plataci\'s registers hold her.'
    },

    veronicaFranovich: {
      siblings: [
        'Dominick Franovich (1892–1986)',
        'Anthony L. Franovich Jr. (1895–1975)',
        'Elizabeth “Isabelle” Franovich (b. 1897) — married Pascal Liuzza',
        'Nicholas Franovich Sr. (1886–1955) was long listed here too, but he cannot be a child of this marriage — see the note on Melanie Moizant'
      ],
      children: [
        { id: 'veronicaBrunetti' }
      ],
      given: 'Veronica', surname: 'Franovich', sex: 'F',
      birth: { date: '22 March 1902', place: 'Buras, Plaquemines Parish' },
      death: { date: '23 August 1981' },
      father: 'anthonyFranovich', mother: 'melanieMoizant',
      evidence: 'inferred',
      branch: 'franovich',
      blurb: 'A Dalmatian oyster family\'s daughter from the lower delta. Her widowed mother brought the children up to New Orleans, and in 1921 she married John Brunetti, an Italian immigrant lately of Chicago. Buried St. Louis Cemetery No. 3.',
      sources: [
        { label: 'Find a Grave 282264581', url: 'https://www.findagrave.com/memorial/282264581/veronica-brunetti' }
      ],
      note: 'Not to be confused with her daughter, Veronica Marie Brunetti Pedeaux. The circumstantial chain to Anthony Franovich Sr. is strong: he married Melanie about 1890-92, he died in 1911 at Buras where Veronica was born, Melanie was in Orleans as his widow with the children by 1920, and she remarried in 1926 as his widow. But no single record yet names Veronica and Anthony together. The 1910 Plaquemines census image, with its relation-to-head column, would settle it outright.'
    },

    anthonyFranovich: {
      children: [
        'Dominick (1892–1986)',
        'Anthony L. Jr. (1895–1975)',
        'Elizabeth “Isabelle” (b. 1897)',
        { id: 'veronicaFranovich' }
      ],
      given: 'Anthony L.', suffix: 'Sr.', surname: 'Franovich', sex: 'M',
      origin: 'Dalmatian family — Buras, Plaquemines Parish',
      birth: { date: '22 September 1873' },
      death: { date: '19 July 1911', place: 'Plaquemines Parish' },
      evidence: 'confirm',
      branch: 'franovich',
      blurb: 'Dead at thirty-eight. Buried at Our Lady of Good Harbor Catholic Cemetery, Buras; the headstone reads "Age 38 years."',
      sources: [
        { label: 'Find a Grave 74161215', url: 'https://www.findagrave.com/memorial/74161215/anthony-l-franovich' }
      ],
      note: 'His marriage to Melanie Moizant, about 1890–92, was in Plaquemines Parish and is held only by the Clerk of Court in Belle Chasse — the Louisiana state marriage index covers Orleans only. Whether Anthony himself was born in Dalmatia or in Louisiana is not yet documented: an Antonio Franovich who died in Orleans in 1902 at about 77 may be his immigrant father, so no "crossed the Atlantic" claim is made for Anthony here.'
    },

    melanieMoizant: {
      siblings: [
        'Delphine Marie Moizant (1867–1943)',
        'Amelia Marcellin Moizant (1881–1928)',
        'Louise Moizant Mistich (1883–1972)',
        'Annicia Moizant Scobel (1886–1964)',
        'Adeline V. “Dina” Moizant Pareti (1888–1966)',
        'Angeline Moizant Bordelon (1892–1970)'
      ],
      children: [
        'Dominick (1892–1986)',
        'Anthony L. Jr. (1895–1975)',
        'Elizabeth “Isabelle” (b. 1897)',
        { id: 'veronicaFranovich' }
      ],
      given: 'Melanie', surname: 'Moizant', sex: 'F',
      birth: { date: 'January 1877', place: 'Louisiana' },
      death: { date: '17 or 18 October 1957', place: 'Orleans Parish' },
      father: 'alfredMoizant', mother: 'victoriaDaroca',
      evidence: 'verified',
      branch: 'moizant',
      blurb: 'Widowed at thirty-four with young children; remarried Theodore Adolph Paasch in 1926. Buried St. Louis Cemetery No. 3, Square 3, Section B, Lot 11.',
      records: [
        {
          title: 'Louisiana death index',
          citation: 'Orleans Parish, 18 October 1957 — Vol. 0, p. 7108',
          text: 'PAASCH, MELANIE FRANOVICH MOIZANT, age 80.',
          highlight: 'The clerk recorded her whole life in one line: married name, previous married name, maiden name.'
        },
        {
          title: 'Louisiana marriage index — the same record, indexed twice',
          citation: 'Orleans Parish, April 1926 — Vol. 50, p. 376',
          text: 'Bride: FRANOVICH, ANTHONY WIDOW × Groom: PAASCH, THEODORE ADOLPH — and — Bride: MOIZANT, MELANIE × Groom: PAASCH, THEODORE ADOLPH.'
        }
      ],
      sources: [
        { label: 'Find a Grave 143366670', url: 'https://www.findagrave.com/memorial/143366670/melanie-moizant-franovichpaasch' }
      ],
      note: 'Moizant is a French-Louisiana name, not Croatian — but the family married into the Plaquemines Dalmatian community repeatedly. Two Moizant women married Mistiches; Melanie\'s sister Annicia married a Scobel, and an Antoinette Scobel Franovich lies at Our Lady of Good Harbor. Her death is given as the 17th on her memorial and the 18th in the state index. A correction: Nicholas Franovich Sr. (1886–1955), long carried as one of her children, was born when she was nine years old and when Anthony was twelve — he cannot be a child of this marriage, and belongs to the wider Buras Franovich clan, perhaps as Anthony\'s younger brother.'
    },

    alfredMoizant: {
      children: [
        'Delphine Marie (1867–1943)',
        { id: 'melanieMoizant' },
        'Amelia Marcellin (1881–1928)',
        'Louise (1883–1972)',
        'Annicia (1886–1964)',
        'Adeline “Dina” (1888–1966)',
        'Angeline (1892–1970)'
      ],
      given: 'Alfred Leopold', surname: 'Moizant', sex: 'M',
      birth: { date: 'January 1838', place: 'France (per his memorial)' },
      death: { date: '23 February 1933', place: 'Orleans Parish' },
      evidence: 'confirm',
      branch: 'moizant',
      immigrant: true,
      blurb: 'Died at ninety-five. Buried in the same plot as his daughter — St. Louis No. 3, Square 3, Section B, Lot 11.',
      sources: [{ label: 'Find a Grave 143366668', url: 'https://www.findagrave.com/memorial/143366668' }],
      note: 'The family story that the Moizants are kin to John Moisant, the aviator MSY was named for, was checked and judged unlikely. Alfred was born in France in 1838 and came to New Orleans; the aviator\'s father Medard Moisant was born in Quebec the same year and went to Illinois — exact contemporaries from different continents\' migrations, so no parent or sibling link is possible. In ninety years of Louisiana records the MOIS- and MOIZ- spellings never once cross: no shared given names, spouses, parents or plots. The story probably took hold because a real New Orleans Moisant family, descended from the aviator\'s Quebec cousins, does exist. Alfred\'s French birth record or passenger manifest would end the question for good.'
    },

    victoriaDaroca: {
      children: [
        'Delphine Marie (1867–1943)',
        { id: 'melanieMoizant' },
        'Amelia Marcellin (1881–1928)',
        'Louise (1883–1972)',
        'Annicia (1886–1964)',
        'Adeline “Dina” (1888–1966)',
        'Angeline (1892–1970)'
      ],
      given: 'Victoria Juliene', surname: 'Daroca', sex: 'F',
      birth: { date: '9 January 1850' },
      death: { date: '9 October 1928' },
      evidence: 'confirm',
      branch: 'moizant',
      sources: [{ label: 'Find a Grave 143366666', url: 'https://www.findagrave.com/memorial/143366666' }]
    },

    /* ─────────────────────────  LARMANN / WELLMEYER  ───────────────────────── */

    johnLarmannSr: {
      siblings: [
        'Esther Mae Larmann (18 July 1925 – 15 February 1928) — an elder sister who died at two and a half, a year and a half after he was born. Her aunt Esther\'s ledger kept her dates; the state index confirms them; and the family remembered exactly this — that John lost his only sister when they were small.'
      ],
      children: [
        'John R. Larmann Jr. — married Jacqueline Ledet',
        'James C. Larmann — married Donna Maylie',
        { id: 'jeanLarmann' },
        'Judy Larmann Gifford — married Craig Gifford; her family papers rebuilt this whole side of the tree'
      ],
      given: 'John Richard', suffix: 'Sr.', surname: 'Larmann', sex: 'M',
      birth: { date: '10 September 1926' },
      death: { date: '30 December 2018', place: 'Metairie' },
      father: 'charlesEmileLarmann', mother: 'johannaLemoine',
      evidence: 'verified',
      branch: 'larmann',
      occupation: 'Electrician, IBEW Local 130 — retired 1988',
      blurb: 'Married sixty-three years. Buried St. Vincent de Paul Cemetery No. 3.',
      records: [
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, July 1947 — p. 3644',
          text: 'WELLMEYER, ANN G × LARMANN, JOHN R.'
        }
      ],
      sources: [
        { label: 'Obituary (Dignity Memorial, 2018)', url: 'https://www.dignitymemorial.com/obituaries/metairie-la/john-larmann-8104518' },
        { label: 'Find a Grave 195755442', url: 'https://www.findagrave.com/memorial/195755442/john-richard-larmann' }
      ],
      note: 'Find a Grave\'s page body gives his death as 30 November 2018; its own metadata and both obituaries say 30 December, and the 5 January 2019 service supports December. The marriage was 1947, not 1955 — sixty-three years back from Ann\'s death in June 2010.'
    },

    annWellmeyer: {
      siblings: [
        'Leslie Henry Wellmeyer (1911–1994) — married Ivel Roeling; his children Buzzy and Jill are remembered in the family',
        'Clare Agnes Wellmeyer (b. 1912)',
        'Cyril Raymond Wellmeyer (1915–1996)',
        'Henry John Wellmeyer Jr. (1918–2001)',
        'Edward W. Wellmeyer (1925–2021)'
      ],
      children: [
        'John R. Larmann Jr.',
        'James C. Larmann',
        { id: 'jeanLarmann' },
        'Judy Larmann Gifford'
      ],
      given: 'Ann Geraldine', surname: 'Wellmeyer', sex: 'F',
      birth: { date: '25 October 1927' },
      death: { date: '9 June 2010' },
      father: 'henryJohnWellmeyer', mother: 'berthaSander',
      evidence: 'confirm',
      branch: 'wellmeyer',
      blurb: 'Buried in her father\'s tomb at St. Vincent de Paul No. 3 — the plot is inscribed "Sect C, 3rd Alley, Left, Wellmeyer, H."',
      sources: [
        { label: 'Find a Grave 147183498', url: 'https://www.findagrave.com/memorial/147183498' }
      ],
      note: 'The case was built backwards from a cemetery: all ten Wellmeyers in St. Vincent de Paul No. 3 lie in one plot that resolves cleanly as Henry John\'s household, and Ann is the only occupant who fits no role but daughter. In August 2026 her own daughter Judy\'s family notes confirmed it in writing — "Papa\'s Family," listing Ann Geraldine m. John Richard Larmann among Henry John and Bertha\'s six children. A family record now names them together; the 1947 marriage licence application would make it civil-record verified.'
    },

    charlesEmileLarmann: {
      siblings: [
        'Mary Eugenia Larmann Thomas (20 Sept 1896 – 3 Oct 1971) — married Matthew U. Thomas in 1926',
        'Louisa Francis Larmann (17 Sept 1897 – 30 May 1898) — died at eight months',
        'Bernadine Louise Larmann (28 Oct 1898 – 21 Aug 1956) — married Ed Porter in 1926, later Harry G. Johnson',
        'Anthony Leo Larmann (9 Aug 1900 – 4 March 1969) — father of Barbara and of the attorney Lawrence “Larry” Emig Larmann',
        'and among the cousins: FATHER MARIAN EDWARD LARMANN, O.S.B. (15 March 1923 – 6 June 2007), son of Charles\'s half-uncle Edward John Larmann Sr. — a Benedictine of Saint Joseph Abbey who taught in its seminary for fifty-three years and became Rector of Saint Joseph Seminary College',
        'Esther Marguerite Larmann (2 Jan 1904 – 14 Sept 1976) — never married; her handwritten ledger preserved this whole family\'s dates'
      ],
      children: [
        'Esther May Genevieve Larmann (18 July 1925 – 15 February 1928) — her third name was for her great-grandmother Poppone Geneviève',
        { id: 'johnLarmannSr' }
      ],
      given: 'Charles Emile', nickname: 'Charlie', surname: 'Larmann', sex: 'M',
      birth: { date: '12 July 1902', place: 'New Orleans' },
      death: { date: '13 July 1969', place: 'Orleans Parish' },
      father: 'anthonyLarmann', mother: 'eugeniaMoore',
      evidence: 'verified',
      branch: 'larmann',
      blurb: 'Lost his father at eighteen months and his mother at eighteen years, and was raised by two unmarried aunts — his mother\'s sisters Leontine, called Tene, and Louise Moore — in their house on Franklin Avenue. Married Johanna Lemoine on 23 August 1924, lost a two-year-old daughter in 1928, and died the day after his sixty-seventh birthday. His brother Anthony had died four months earlier.',
      note: 'One detail of that house survived three generations of retelling: the aunts had an instantaneous gas water heater — you lit it, and it heated the water as it flowed. His son John remembered it as a marvel, something they had "before that was a thing," and passed the story to his own grandson Kevin, who happened to be installing a tankless heater in a shotgun house at the time. The aunts were not ahead of their era so much as squarely in it: instantaneous gas heaters reached the American market in 1893 and the 1900s were their golden age, until temperature swings in the shower drove buyers to storage tanks and the design fell out of fashion for most of a century. The thing Kevin put in his own wall is the same idea, come back around.',
      records: [
        {
          title: 'Louisiana birth record',
          citation: 'Orleans Parish, 12 July 1902 — Vol. 123, p. 485',
          text: 'LARMANN, CHARLES EMILE. Father: LARMANN, ANTHONY H. Mother: MOORE, EUGENIA.'
        },
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, August 1924 — Vol. 49, p. 468',
          text: 'LEMOINE, JOHANNA K × LARMANN, CHARLES EMILE.',
          highlight: 'His sister Esther\'s ledger supplies the exact day: 23 August 1924, New Orleans.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 13 July 1969 — p. 4760',
          text: 'LARMANN, CHARLES EMILE, age 67.'
        },
        {
          title: 'Aunt Esther\'s ledger — his birth and sponsors',
          citation: 'Handwritten family record of Esther Marguerite Larmann; photocopy via Judy Larmann Gifford, 2026',
          text: 'Charles Emile Larmann — Sat. July 12th 1902 (sponsors: Emile Moore, Dorothea Mevers).',
          highlight: 'Named for his godfather, his mother\'s brother Emile Moore. The godmother carries the Mevers surname of his father\'s mother.'
        }
      ],
      note: 'For a long time he existed only as a name in his son\'s 2018 obituary. The 1902 birth record put him on the public record, and in August 2026 his sister Esther\'s handwritten ledger and his tomb roster — supplied by his granddaughter Judy Larmann Gifford — filled in the rest of his life.'
    },

    johannaLemoine: {
      siblings: [
        'A brother Robert, born 1909 in Orleans Parish — very probably the boy who died in the orphanage',
        'A baby sister Agnes, named for their mother, who lived three months (died 9 November 1909)',
        'Half-siblings by her mother\'s second marriage: Elsie Winstine McPherson — whom Johanna talked about for years without ever saying who she was — and William Winstine',
        'Half-siblings by her father\'s later marriage to Sophie Anderson, named in his 1949 obituary: Mrs. Charles Lawrence and Robert Lemoine Jr.'
      ],
      children: [
        'Esther Mae Larmann (18 July 1925 – 15 February 1928) — her Orleans birth certificate, kept in the family, names her "lawful daughter of Charles Emile Larmann and Johanna Catherine Lemoine," registered 28 July 1925',
        { id: 'johnLarmannSr' }
      ],
      given: 'Johanna Catherine', surname: 'Lemoine', sex: 'F',
      birth: { date: '9 January 1907', place: 'birthplace not yet documented' },
      death: { date: '11 December 1992' },
      father: 'robertLemoine', mother: 'agnesHanley',
      evidence: 'confirm',
      branch: 'lemoine',
      photo: 'assets/img/goubler-tomb-new-tablet.jpg',
      photoCaption: 'The family tomb, restored. Her name stands with Charles\'s near the foot of the new tablet.',
      blurb: 'For years she was the blankest name on this side of the tree — not even in the Orleans birth index. Her story came back in two installments: Judy\'s written notes, and then a 2026 phone call that restored the missing generation. Her father was a sailor, her mother left, and her grandmother Poupone raised her — Johanna called her "mother," which is exactly how the family tree lost a generation for a while.',
      records: [
        {
          title: 'Family record — the flattened generation',
          citation: 'Judy Larmann Gifford\'s handwritten notes, "Johanna\'s Family," 2026',
          text: 'Alonzo Lemoine m. (Poppone) Genevieve Rousselle. Children (Lemoine): Robert (m. ① Agnes Hanley ② Sophie Anderson) · Eugene · Johanna. (Brother died in orphanage.)',
          highlight: 'Judy\'s page lists Johanna among Poupone\'s children — beside Robert, and beside the very Agnes Hanley the index shows Robert marrying the year before Johanna\'s birth. A granddaughter raised by her grandmother, filed as a daughter: the family\'s spoken memory restored the generation the paper had flattened.'
        },
        {
          title: 'Her headstone — the Goubler family tomb',
          citation: 'Photographed by the family, August 2026',
          text: 'LARMANN — JOHANNA LEMOINE, JAN. 9, 1907 — DEC. 11, 1992.',
          highlight: 'The stone supplies what no index could: her exact birthday and death day.'
        },
        {
          title: 'The 1910 census — the only Johanna Lemoine in Louisiana',
          citation: '1910 U.S. census index, Orleans Parish',
          text: 'Johanna Lemoine, born 1907, in an Orleans Parish household. She is the only Johanna Lemoine in the state. In the same index: Genevieve Lemoine (b. c. 1865, Orleans), a toddler Robert Lemoine (b. 1909, Orleans) — and no Alonzo Lemoine anywhere in the country, no adult Agnes Lemoine anywhere in Louisiana.',
          highlight: 'The census image itself, with its relation-to-head column, is the next document to pull: it will say in one word — daughter or granddaughter — which generation raised her on paper.'
        }
      ],
      note: 'The tree here follows the family\'s settled account, adopted August 2026: her father was Robert Lemoine, her mother Agnes Margaret Hanley — married at Orleans in 1906, Johanna born the following January. Agnes did not die young; she left, while Robert was away in the Navy, and it was Poupone who raised the children. ⚠️ One thread has since come loose and is kept open here: Poupone did NOT die in 1915, as this site briefly had it — Judy\'s notes give her 26 November 1863 to 21 February 1938. So whatever sent the children to the orphanage, it was not her death. The parent links are carried at confirm, not verified: the civil document that will state her parents outright is her own August 1924 marriage licence application (Vol. 49, p. 468), still to be pulled from the State Archives.'
    },

    robertLemoine: {
      siblings: [
        'Ernest Joseph Lemoine — m. Amelia Gehner; named his first son Alonzo (1911)',
        'Eugene Lemoine — m. Marie Jackson; named a daughter Genevieve (1913)'
      ],
      children: [
        { id: 'johannaLemoine' },
        'Robert (b. 1909, Orleans Parish) — very probably the boy who died in the orphanage',
        'Agnes (c. August – 9 November 1909) — dead at three months, named for her mother'
      ],
      given: 'Robert', surname: 'Lemoine', sex: 'M',
      birth: { date: '7 May 1888', place: 'Louisiana' },
      death: { date: '20 November 1949' },
      lifespanText: '7 May 1888 – 20 November 1949',
      father: 'alonzoLemoine', mother: 'genevieveRousselle',
      spouse: 'Agnes Margaret Hanley (m. 1906, Orleans) — Johanna\'s mother, who left; later Sophie Anderson',
      occupation: 'Chief commissary steward, United States Navy — a career sailor through the First World War',
      evidence: 'confirm',
      branch: 'lemoine',
      blurb: 'The Navy man in Arlington. A father at nineteen, and at sea for the rest of it: Johanna\'s mother left when the children were young, Robert was away in the Navy, and his mother Poupone stepped in to raise them — until her death in 1915 left the orphanage as the only door open. Robert made the Navy his life and rose to chief commissary steward, the man in charge of feeding a warship. He lies in Arlington National Cemetery, section 34, grave 1964.',
      records: [
        {
          title: 'His headstone — Arlington National Cemetery',
          citation: 'Army Cemeteries Explorer, section 34, grave 1964, interred 23 November 1949',
          text: 'ROBERT LEMOINE · LOUISIANA · CCS · US NAVY · WORLD WAR I · MAY 7 1888 · NOVEMBER 20 1949.',
          highlight: 'CCS is the Navy rating chief commissary steward. The family remembered him as "head of all the foods and stuff — commissary something." The stone says exactly that.'
        },
        {
          title: 'Marriage — Orleans Parish, 1906',
          citation: 'Louisiana marriage index, Orleans, Vol. 27, p. 962',
          text: 'HANLEY, AGNES MARGARET × LEMOINE, ROBERT — 1906.',
          highlight: 'The year before Johanna\'s birth. He was eighteen.'
        },
        {
          title: 'The battleship spoon',
          citation: 'Family keepsake, photographed August 2026 — see the research page',
          text: 'A souvenir spoon engraved U.S. BATTLESHIP MAINE — 6682 TONS, kept in the family with the story that the Maine was his ship.',
          highlight: 'He was nine when the first Maine exploded at Havana in 1898 — but a second USS Maine served from 1902 through the First World War, exactly the span of his career. His muster rolls would tell whether the family story fits the second ship.'
        }
      ],
      sources: [
        { label: 'Army Cemeteries Explorer — his grave record', url: 'https://ancexplorer.army.mil/publicwmv/' }
      ],
      note: 'CONFIRMED IN PRINT, August 2026: Johanna\'s own December 1992 obituary calls her "daughter of the late Robert Lemoine." His own November 1949 notice gives his age as 61 — exact for a man born 7 May 1888 — names his wife Sophie A. Lemoine and his brother Eugene, and ends "Interment Arlington National Cemetery." His fatherhood of Johanna is therefore no longer only family testimony. It is consistent with every record found — and awaiting one civil document, Johanna\'s 1924 marriage licence application, for full verification. The timeline: married Agnes at eighteen in 1906, Johanna born the next January, the babies Robert and Agnes in 1909 — the infant dead by November — and by the April 1910 census Agnes is gone from Louisiana while his mother stands with the children. His remarriage to Sophie Anderson (Judy\'s notes) is not in the Orleans index; a Navy man could have married anywhere. Whether the second USS Maine was truly his ship awaits his muster rolls.'
    },

    agnesHanley: {
      children: [
        { id: 'johannaLemoine' },
        'Robert (b. 1909)',
        'Agnes (died 9 November 1909, aged three months)'
      ],
      given: 'Agnes Margaret', surname: 'Hanley', sex: 'F',
      spouse: 'Robert Lemoine (m. 1906, Orleans); later William Winstine',
      death: { date: '15 November 1964', place: 'New Orleans' },
      evidence: 'verified',
      branch: 'lemoine',
      blurb: 'Johanna\'s mother — married at Orleans in 1906, a mother by the next January, and gone from her first family within four years. The family kept it plainly: "she didn\'t die young — she just left them." She married William Winstine and raised a second family in the same city, and when she died in 1964 her obituary named all three of her children together — Johanna first.',
      records: [
        {
          title: 'Marriage — Orleans Parish, 1906',
          citation: 'Louisiana marriage index, Orleans, Vol. 27, p. 962',
          text: 'HANLEY, AGNES MARGARET × LEMOINE, ROBERT — 1906.',
          highlight: 'Johanna was born the following 9th of January.'
        },
        {
          title: 'The death of her infant daughter',
          citation: 'Louisiana death index, Orleans, 9 November 1909 — Vol. 147, p. 1104',
          text: 'LEMOINE, AGNES — aged 3 months.',
          highlight: 'A daughter named for her mother, born in the summer of 1909 and dead by November. Within months, Agnes herself disappears from the Lemoine record.'
        },
        {
          title: 'Her own obituary — the record that proves the whole line',
          citation: 'New Orleans newspaper, November 1964; clipping kept by the family, via Judy Larmann Gifford',
          text: '"WINSTINE — On Sunday, November 15, 1964, AGNES HANLEY, wife of the late William Winstine, mother of MRS. JOHANA LAUMAN [Larmann], Mrs. Elsie McPherson and William Winstine, sister of Mrs. Rose Stringer, Tom Neader and Mrs. Catherine Strom, a native and resident of New Orleans… Requiem Mass at St. Alphonsus Church. Interment in Cypress Grove Cemetery."',
          highlight: 'Everything at once, and in print. Agnes Hanley is named as Johanna\'s mother — the last thing the Lemoine reconstruction needed. Her second husband, her two Winstine children, and her own three siblings are all there, matching Judy\'s handwritten notes name for name. But the family memory beside it is cooler than the notice reads: Johanna talked about her half-sister Elsie without ever saying who Elsie was, and did not meet Agnes at all until her son John was a boy — and he remembered that she did not want to go.'
        }
      ],
      note: 'A native of New Orleans, and the last of this line to be found. Her own siblings were Rose Stringer, Tom Neader and Catherine Strom. She was buried from St. Alphonsus — the old Irish Channel church, which suits a Hanley — into Cypress Grove Cemetery. Still open: her parents, her birth date, and the date of her marriage to William Winstine, which is not in the Orleans index under either surname and so was probably made in another parish.'
    },

    anthonyLarmann: {
      siblings: [
        'Full brothers, per the 1900 census of his father\'s household: John C. Larmann (b. 1874, d. 1909) and Bernard Leo Larmann (b. 1878, d. 1955) — godfather to Anthony Leo in 1900; married Matilda Jones in 1901',
        'Charles A. Clemence Larmann (c.1877–1880) — died at three, before the census could catch him',
        'Half-siblings from the 1884 remarriage, all in the 1900 household: Joseph Benedict (1885–1950), Hilda (b. 1886) — godmother to Esther in 1904, Henry (b. 1889), Albert (b. 1891), Casper Jr. (b. 1899), and EDWARD JOHN (16 Dec 1896 – 1985), who married Marie Edna Fernandez in 1921 and whose son became Father Marian Larmann, the Benedictine'
      ],
      children: [
        'Mary Eugenia (20 Sept 1896 – 3 Oct 1971)',
        'Louisa Francis (17 Sept 1897 – 30 May 1898)',
        'Bernadine Louise (28 Oct 1898 – 21 Aug 1956)',
        'Anthony Leo (9 Aug 1900 – 4 March 1969)',
        { id: 'charlesEmileLarmann' },
        'Esther Marguerite (2 Jan 1904 – 14 Sept 1976)'
      ],
      given: 'Anthony Henry', surname: 'Larmann', sex: 'M',
      occupation: 'Architect',
      birth: { date: '26 August 1871', place: 'New Orleans' },
      death: { date: '12 February 1904', place: 'Orleans Parish' },
      father: 'johnCasparLarmann', mother: 'emilyMevers',
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Dead at thirty-two, six weeks after his sixth child was born. His widow raised six children alone; the family record his daughter Esther kept is how all of their dates survived.',
      records: [
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, November 1895 — Vol. 18, p. 718',
          text: 'MOORE, EUGENIE × LARMANN, ANTHONY.',
          highlight: 'Esther\'s ledger supplies the day — Tuesday, 12 November 1895 — and his exact ages: born Saturday 26 August 1871, married at 24, dead at 32.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 12 February 1904 — Vol. 131, p. 1097',
          text: 'LARMANN, ANTHONY, age 32.',
          highlight: 'Exactly the date in Esther\'s ledger: "Fri. Feb. 12th, Age 32."'
        }
      ],
      note: 'He was born nine and a half months after his parents\' November 1870 Orleans wedding. The old sibling list carried "Louise Frances (b. 1897)" as if she grew up; the death index shows Louisa Francis died at eight months, on 30 May 1898 — and the 1900 census confirms it, catching his household that June with only Mary E and Bernadine at home.'
    },

    eugeniaMoore: {
      siblings: [
        'Louise Moore (1877–1948) — godmother to Louisa in 1897; buried in the family tomb',
        'Leontine Moore (1880–1947) — godmother to Anthony Leo in 1900; buried in the family tomb',
        'Anthony Moore (1883–1920) — godfather to Esther in 1904; buried in the family tomb',
        'Emile Moore — godfather to Charles Emile in 1902'
      ],
      children: [
        'Mary Eugenia (20 Sept 1896 – 3 Oct 1971)',
        'Louisa Francis (17 Sept 1897 – 30 May 1898)',
        'Bernadine Louise (28 Oct 1898 – 21 Aug 1956)',
        'Anthony Leo (9 Aug 1900 – 4 March 1969)',
        { id: 'charlesEmileLarmann' },
        'Esther Marguerite (2 Jan 1904 – 14 Sept 1976)'
      ],
      given: 'Eugenie Bernadine', surname: 'Moore', sex: 'F',
      birth: { date: 'October 1874', place: 'New Orleans' },
      death: { date: '23 February 1921', place: 'Orleans Parish' },
      father: 'henryMoore', mother: 'valentineGoubler',
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Married at twenty-one, widowed at twenty-nine with six children under eight, dead at forty-six. Probably named for her aunt Eugenie Goubler, who died three years before she was born.',
      records: [
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 23 February 1921 — Vol. 181, p. 257',
          text: 'LARMANN, EUGENIE B MOORE, age 46.',
          highlight: 'Esther\'s ledger has the same day: "Feb. 23rd 1921, Age 46."'
        },
        {
          title: 'Aunt Esther\'s ledger — her dates',
          citation: 'Handwritten family record of Esther Marguerite Larmann; photocopy via Judy Larmann Gifford, 2026',
          text: 'Mother: Eugenia Bernadine Moore. Born Oct. 1874 — married Tues. Nov. 12, 1895, age 21 — died Feb. 23rd, 1921, age 46.'
        }
      ],
      note: 'An English or Irish surname in an otherwise German-French household — her father Henry Moore married into the Alsatian-sounding Goubler family. The day of her October 1874 birth is hard to read in the photocopy, a 5th or an 11th.'
    },

    johnCasparLarmann: {
      siblings: [
        'HENRY LARMANN (24 December 1856 – 29 November 1938) — documented: his Brooklyn death certificate names his parents as Caspar Larmann and Elizabeth Werger, both of Germany. A laborer, married to Gertrude, he settled in New York rather than Louisiana. Very possibly the brother who sailed with Casper out of Hamburg',
        'A brother who stayed in Germany',
        'A sister who became a nun in Germany and came to America later; her order was never recorded',
        'Marie Antoinette Larmann Prinz (c.1845 – 29 January 1899) — a probable sister: born a Larmann a year before him, died in Orleans as Joseph Prinz\'s wife, cross-indexed under both names. Not the nun, since she married',
        'and a lead: John Mathias Larmann, married to Elizabeth Bruning, was raising a family in New Orleans by 1857 — not his father (that man stayed in Gesmold), but possibly the kinsman who told a Hanover boy where to sail'
      ],
      children: [
        { id: 'anthonyLarmann' },
        'By Emily: John Christian (22 April 1874 – 1909), Clemence Charles (10 May 1876 – 15 April 1880, dead at three), Bernard Leo (March 1878 – 1955)',
        'By Louisa Ehmann, each with an Orleans birth record naming both parents: Joseph Benedict (9 Apr 1885 – 1950), Hilda Margaretha (22 Dec 1886 – 1940, died a Mrs Cook), Henry (b. 25 May 1889), Albert (b. 22 Dec 1891), Edward John (b. 16 Dec 1896) — the Edward who married Marie Edna Fernandez in 1921, and Caspar Maurice "Casper Jr." (15 Jan 1899 – 1945)',
        'The 1900 census catches the household whole: Casper, wife Louisa, and the eight children then at home'
      ],
      given: 'John Casper', alsoKnownAs: 'born Johann Caspar Larmann', surname: 'Larmann', sex: 'M',
      origin: 'Gesmold, Melle — Kingdom of Hanover',
      birth: { date: '5 April 1846, baptised the 7th', place: 'Gesmold, Melle, Kingdom of Hanover' },
      death: { date: '21 November 1921', place: 'Orleans Parish' },
      father: 'johnCasparLarmannSr', mother: 'mariaElisabethWerges',
      evidence: 'verified',
      branch: 'larmann',
      immigrant: true,
      blurb: 'The Larmann immigrant: "Casper Sr." to his family. A Hanoverian from the village of Gesmold who sailed out of Hamburg at twenty with a brother, to get out from under Prussian conscription — and who, before New Orleans, settled first at Pointe-à-la-Hache, down near the mouth of the river. He married in 1870, buried his first wife in 1882, remarried in 1884, and outlived his son Anthony by seventeen years.',
      records: [
        {
          title: 'His baptism — read in the Gesmold parish register',
          citation: 'Katholische Pfarrei St. Petrus, Gesmold (Melle) — Taufen 1846–1852, D1_105, entry 16 of 1846',
          text: '"16. | 5. Apr. | 7. Apr. | Larmann, Johann Caspar, ehelich. Vat.: Jos. Caspar Larmann, Neubauer zu Weringhof. Mütt.: Maria Elisabeth Werges. Gev.: Jos. Caspar Larmann."',
          highlight: 'The primary record, in the priest\'s own hand: born 5 April 1846, baptised the 7th, a legitimate son of Joseph Caspar Larmann — a Neubauer, a new-settler farmer, at Weringhof — and Maria Elisabeth Werges. His godfather was a Jos. Caspar Larmann too. This is the document the whole hunt was for.'
        },
        {
          title: 'The record that first named his parents',
          citation: 'Louisiana Parish Marriages — Orleans, 26 April 1884 (Vol. 10, p. 589)',
          text: 'John Casper Larmann, 36, son of JOHN CASPER LARMANN and MARIA ELIZABETH WERGERS, m. Louisa Margaret Ehmann, 27. Also on the act: John D. Ehmann and Katharina Lutz.',
          highlight: 'Found August 2026, in the church-marriage collection the state civil index never covered — the lead that sent the search to Gesmold. His parents\' names had been unknown to the family for a century.'
        },
        {
          title: 'His death certificate — the parents again, independently',
          citation: 'Louisiana, Orleans, Death Records and Certificates — 21 November 1921',
          text: 'John Casper Larmann, born 1848 in Hanover, Germany; parents JOHN C. LARMANN and ELIZABETH WEINER; wife Louise M. Ehmann.',
          highlight: 'A second American record naming his parents, thirty-seven years after the first. "Weiner" is the same Werges through one more clerk\'s ear.'
        },
        {
          title: 'First marriage',
          citation: 'Orleans Parish, November 1870 — Vol. 1, p. 662',
          text: 'MEVERS, MARIE E × LARMANN, JOHN G [sic — Casper].',
          highlight: 'This settles a smudged digit in Esther\'s ledger: the wedding was 1870, not 1876 — nine and a half months before Anthony was born.'
        },
        {
          title: 'Second marriage',
          citation: 'Orleans Parish, April 1884 — Vol. 10, p. 589',
          text: 'EHMANN, LOUISA MARGARET × LARMANN, JOHN CASPER.',
          highlight: 'Two years after Emily\'s death. The family always called her "Louise Standed" — and they were not wrong: her son\'s death record names his mother Louisa STOUDER, and the 1900 census gives her father as Joseph STAUDER. The 1884 act calls her Ehmann and puts a John D. Ehmann and Katharina Lutz on the page. Most likely she was born a Stauder and came to Casper a young widow named Ehmann. Unresolved, and flagged here rather than smoothed over.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 21 November 1921 — Vol. 183, p. 215',
          text: 'LARMANN, JOHN CASPER, age 73.'
        },
        {
          title: 'Aunt Esther\'s ledger — "Father\'s Parents"',
          citation: 'Handwritten family record of Esther Marguerite Larmann; photocopy via Judy Larmann Gifford, 2026',
          text: 'John Henry Casper Larmann (born [Gruswald?], Hanover, Germany) — Jan 1st. 1846. Emily Mevers — died Feb. 13 1882.'
        },
        {
          title: 'His brother found — a Larmann branch in Brooklyn',
          citation: 'New York City Municipal Deaths — Henry Larmann, 29 November 1938, Brooklyn, certificate 22867',
          text: 'Henry Larmann, 72, laborer, born 24 December 1856 in Germany, married to Gertrude, of Brooklyn, Kings County. Parents: CASPAR LARMANN and ELIZABETH WERGER, both of Germany.',
          highlight: 'The same parents as Casper — the Gesmold couple, heard by a Brooklyn clerk. Esther\'s sheet said "Grandfather Larmann + a brother came to this country," and here the brother is, sixty years of records later, with a family of his own in New York. The Larmanns of Brooklyn and the Larmanns of New Orleans are one family that lost each other.'
        },
        {
          title: 'Obituary notices',
          citation: 'NOPL obituary index — Times-Picayune, 22 Nov 1921, p. 2 col. 8, and 23 Nov 1921, p. 2 col. 8',
          text: 'LARMANN, JOHN CASPER — death date 1921-11-21, age 75 years.',
          highlight: 'The obituary index says seventy-five — which lands exactly on Esther\'s 1 January 1846 birthdate, against the death index\'s 73. The notices themselves, on microfilm at the New Orleans Public Library, may well name his home town.'
        }
      ],
      note: 'WHY HE LEFT, in the family\'s own words. Esther\'s own sheet, copied out by Judy Gifford in August 2026: "Grandfather Larmann + a brother came to this country from Hamburg, Germany to escape compulsory military service. He, Casper Larmann, eventually settled in Point-a-la-Hache near the mouth of the river… A brother + a sister, who was a nun, remained in Germany, the nun also coming here later." Everything checks. Gesmold was Hanoverian until Prussia annexed the kingdom in 1866 and brought its conscription with it; Casper emigrated in 1866 or 1867, at exactly twenty, the age that mattered; Hamburg was the great emigrant port. So four Larmann children of that Gesmold house can be accounted for: two who sailed, one brother who stayed, and a sister who took the veil in Germany and followed her brothers to America later — her order unknown. THE TOWN, FOUND — August 2026. Esther\'s ledger word, which nobody could read for certain, looked like "Gruswald." The answer is GESMOLD, a village of the Melle district in the old Kingdom of Hanover, near Osnabrück: a well-sourced FamilySearch profile (forty-four records attached) gives his birth there on 5 April 1846 and his christening two days later, and his parents\' 1843 marriage in the same village. Read the ledger word again with Gesmold in mind and it fits — Esther was writing down a sound her father said, decades after he last said it. History adds the reason he left: Gesmold belonged to the Kingdom of Hanover until 1866, when Prussia annexed it after the Austro-Prussian War, and Casper emigrated that same year or the next. The Osnabrück country sent forty-two percent of all Hanoverian emigrants to America in that century. Esther\'s 1 January 1846 birthdate and the German 5 April now compete; the christening record in the Gesmold parish register is the tiebreaker, and it is the next document to read. Notably, Find a Grave has not a single Larmann memorial anywhere in Louisiana — this family was never memorialized online, which is part of why the line stayed dark so long.'
    },

    johnCasparLarmannSr: {
      children: [
        { id: 'johnCasparLarmann' },
        'and at least one more child recorded in the Gesmold registers'
      ],
      given: 'Johann Caspar', surname: 'Larmann', sex: 'M',
      origin: 'Weringhof, in the parish of Gesmold — Kingdom of Hanover',
      birth: { date: '6 April 1821', place: 'Gesmold, Melle, Kingdom of Hanover' },
      occupation: 'Neubauer zu Weringhof — a new-settler farmer',
      father: 'johannCasparLaarmann1791', mother: 'catharinaMariaOrtmann',
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'The father who stayed, and the answer to what this family actually was: a Neubauer, a new-settler farmer at Weringhof in the Gesmold parish. He married Maria Elisabeth Werges at Gesmold in November 1843, stood godfather to his own son in 1846, and so far as any record shows never left the village.',
      records: [
        {
          title: 'Named in his son\'s baptism — the primary record',
          citation: 'Katholische Pfarrei St. Petrus, Gesmold — Taufen 1846–1852, entry 16 of 1846',
          text: '"Vat.: Jos. Caspar Larmann, Neubauer zu Weringhof… Gev.: Jos. Caspar Larmann."',
          highlight: 'A Neubauer was a smallholder settled on newly broken land — the lowest rung of the landholding peasantry, not gentry. He stood as his own son\'s godfather, or a namesake kinsman did.'
        },
        {
          title: 'His marriage — Gesmold, 8 November 1843',
          citation: 'Katholische Pfarrei St. Petrus, Gesmold — Heiraten 1811–1852, D2_202, last entry of 1843',
          text: '"8. Nov. — Larmann, Johann Caspar, Neubauer, geboren d. 6ten April 1821, mit Maria Elisabeth Werges, geboren zu Haste d. 27 Jan. 1817. Zeugen: Col. Math. [Zuhfeld] und Col. Conr. Sundermann."',
          highlight: 'Read in the register. It gives his birthday to the day, his wife\'s birthday and her home village of Haste, and settles his given name as Johann. The witnesses are styled Col. — Colonus, full farm owners, a rank above the Neubauer bridegroom.'
        },
        {
          title: 'Named on his son\'s American marriage record',
          citation: 'Louisiana Parish Marriages — Orleans, 26 April 1884 (Vol. 10, p. 589)',
          text: 'The groom John Casper Larmann, 36, is entered as the son of JOHN CASPER LARMANN and MARIA ELIZABETH WERGERS.',
          highlight: 'Generation after generation of this family carried the name Caspar Larmann, which is exactly why the American records blur them together.'
        }
      ],
      note: 'HOW SOLID IS THIS ONE — asked directly, answered honestly. That he fathered the 1846 emigrant is PROVEN: the 1846 baptism act names the father as a Caspar Larmann, Neubauer, married to Maria Elisabeth Werges, and the 1843 marriage act shows this man — born 6 April 1821 — marrying that same Maria Elisabeth Werges. Two acts, read directly, locked together by the wife\'s name and the occupation. That he was the SON of the Caspar born in 1791 is NOT proven. His own baptism act, which would name his parents, has not been read; the link comes from an online reconstruction and from the dates fitting. So this entry is carried at confirm, not verified, and the act that would settle it is in the Gesmold baptism register for 1811–1826, sitting online and unopened. His son\'s 1846 act abbreviates him "Jos. Caspar"; his own 1843 act writes him out as Johann Caspar, which is what the site follows.'
    },

    mariaElisabethWerges: {
      children: [
        { id: 'johnCasparLarmann' },
        'and at least one more child recorded in the Gesmold registers'
      ],
      given: 'Maria Elisabeth', surname: 'Werges', sex: 'F',
      origin: 'Haste, near Osnabrück',
      birth: { date: '27 January 1817', place: 'Haste' },
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Casper\'s mother, four years older than her husband, from the village of Haste. She married at Gesmold in November 1843; her son sailed for America at twenty and she almost certainly never saw him again.',
      records: [
        {
          title: 'Her marriage — Gesmold, 8 November 1843',
          citation: 'Katholische Pfarrei St. Petrus, Gesmold — Heiraten 1811–1852, last entry of 1843',
          text: '"…mit Maria Elisabeth Werges, geboren zu Haste d. 27 Jan. 1817."',
          highlight: 'The register gives her birthday and her home village — neither of which had ever reached America.'
        },
        {
          title: 'Named on her son\'s marriage record',
          citation: 'Louisiana Parish Marriages — Orleans, 26 April 1884 (Vol. 10, p. 589)',
          text: 'Indexed as MARIA ELIZABETH WERGERS — also read Wergery in a second indexing of the same act, and WEINER on his 1921 death certificate.',
          highlight: 'Werges, Wergers, Wergery, Weiner: one woman heard by four American clerks who had never seen the name written.'
        }
      ],
      note: 'Her own parents are still to be found — the Haste registers, or the Gesmold marriage entry\'s neighbours, are the way in.'
    },

    johannCasparLaarmann1791: {
      children: [
        { id: 'johnCasparLarmannSr' }
      ],
      given: 'Johann Caspar', alsoKnownAs: 'Joannes Casparus Laarmann in the Latin of the register', surname: 'Laarmann', sex: 'M',
      origin: 'Gesmold, Melle — Kingdom of Hanover',
      birth: { date: '22 September 1791', place: 'Gesmold' },
      father: 'johannHeinrichLaarmann', mother: 'catharinaMariaGerven',
      evidence: 'verified',
      branch: 'larmann',
      blurb: 'Married at Gesmold on the last day of January 1815, five months before Waterloo. The register spells the family Laarmann, with the long a the name later lost. He is a different man from the Caspar who married in 1843 — the two acts state two different birth years, 1791 and 1821 — but that they were father and son is inference, not yet a read record.',
      records: [
        {
          title: 'His marriage — Gesmold, 31 January 1815',
          citation: 'Katholische Pfarrei St. Petrus, Gesmold — Heiraten 1811–1852, D2_202, second entry of 1815',
          text: '"31 Jan. Sponsus: Joannes Casparus Laarmann, filius legitimus patris Joannis Henrici Laarmann et matris Catharinae Mariae Gerven, hic natus 1791 d. 22 Sept. Sponsa: Catharina Maria Ortmann, filia legitima patris Joannis Henrici Ortmann et matris Catharinae Mariae Decker…"',
          highlight: 'The act that reaches furthest back. Written in Latin, it names the bridegroom\'s parents, the bride\'s parents, and both birthdates — four people who had been guesses on a community tree an hour before, and are now written evidence.'
        }
      ]
    },

    catharinaMariaOrtmann: {
      children: [
        { id: 'johnCasparLarmannSr' }
      ],
      given: 'Catharina Maria', surname: 'Ortmann', sex: 'F',
      origin: 'Gesmold, Melle — Kingdom of Hanover',
      birth: { date: '6 November 1793', place: 'Gesmold' },
      evidence: 'verified',
      branch: 'larmann',
      blurb: 'Married Johann Caspar Laarmann at twenty-one. Her own parents are named in the same act: Joannes Henricus Ortmann and Catharina Maria Decker — the deepest names this branch has reached.',
      records: [
        {
          title: 'Her marriage — Gesmold, 31 January 1815',
          citation: 'Katholische Pfarrei St. Petrus, Gesmold — Heiraten 1811–1852, second entry of 1815',
          text: '"Sponsa: Catharina Maria Ortmann, filia legitima patris Joannis Henrici Ortmann et matris Catharinae Mariae Decker, [h]ic nata 1793 d. 6 Novembris."'
        }
      ],
      note: 'Her parents, Johann Heinrich Ortmann and Catharina Maria Decker, are named in the record but not yet drawn on this tree — the Gesmold registers reach back to 1674 and will hold their marriage.'
    },

    johannHeinrichLaarmann: {
      children: [
        { id: 'johannCasparLaarmann1791' }
      ],
      given: 'Johann Heinrich', alsoKnownAs: 'Joannes Henricus Laarmann', surname: 'Laarmann', sex: 'M',
      origin: 'Gesmold, Melle — Kingdom of Hanover',
      birth: { date: 'before 1770', place: 'presumably Gesmold' },
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'The furthest Larmann the record reaches: named as the bridegroom\'s father in the Gesmold marriage act of January 1815, husband of Catharina Maria Gerven. Born in the reign of Frederick the Great, six generations above Kevin.',
      note: 'Named in a record, so he stands on the tree; but nothing of his own — birth, marriage, death — has been read yet. The Gesmold baptism register begins in 1678 and his son\'s 1791 baptism is in it, which is the next page to turn.'
    },

    catharinaMariaGerven: {
      children: [
        { id: 'johannCasparLaarmann1791' }
      ],
      given: 'Catharina Maria', surname: 'Gerven', sex: 'F',
      origin: 'Gesmold, Melle — Kingdom of Hanover',
      birth: { date: 'before 1775', place: 'presumably Gesmold' },
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Named as the bridegroom\'s mother in the 1815 Gesmold marriage act. Her surname is written Gerven in the Latin hand — a Westphalian name that also appears as Gerwen or Gervens.',
      note: 'Like her husband, she is on this tree because a record names her, and nothing more of her is known yet.'
    },

    emilyMevers: {
      children: [
        { id: 'anthonyLarmann' },
        'John Christian (22 April 1874 – 1909)',
        'Clemence Charles (10 May 1876 – 15 April 1880) — dead at three',
        'Bernard Leo (March 1878 – 1955)'
      ],
      given: 'Marie Emily', surname: 'Mevers', sex: 'F',
      birth: { date: 'about 1847', place: 'Pascagoula, Jackson County, Mississippi' },
      death: { date: '11 February 1882', place: 'Orleans Parish' },
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Anthony\'s mother, dead at thirty-seven when he was ten — and, it turns out, not an immigrant at all but a Mississippi girl, born at Pascagoula to a German couple out of Westphalia. A Dorothea Mevers — sister, cousin or niece — stood godmother to Charles Emile twenty years later, so her family stayed close.',
      records: [
        {
          title: 'Marriage — Orleans Parish',
          citation: 'Louisiana Parish Marriages — Orleans, 10 November 1870 (Vol. 1, p. 662)',
          text: 'Marie E. Mevers, 23, m. John [Casper] Larmann, 23. Also named on the act: C. MEVERS — her father.',
          highlight: 'Nine and a half months before Anthony was born, and the record that puts a "C. Mevers" at her side: her father was a Clemens, which is where the couple\'s lost little boy Charles A. Clemence got his name.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 11 February 1882 — Vol. 80, p. 272',
          text: 'LARMANN, EMILY MEVERS, age 37.',
          highlight: 'Esther\'s ledger, written decades later, gives 13 February — two days off the civil record.'
        }
      ],
      note: 'Her given name wobbles too. Esther\'s sheet calls her AMELIA Meners; the state index and her own death record call her Emily Mevers; a son\'s death record names his mother "Amelia Mevis." Amelia and Emily were interchangeable in German-American New Orleans, and this is one woman. The surname is Mevers in Esther\'s cursive and the state index, "Meners" in her own hand elsewhere. The FamilySearch reconstruction (eighteen records) puts her birth at Pascagoula about 1847 and gives her parents as Johannes Clemens Mevers, born 1792, and Dorothea Carolina Schmidt, 1810–1883, married at Warstein in the Duchy of Westphalia on 28 January 1836. The "C. Mevers" on her own 1870 marriage act fits that father exactly — but no record yet names her and both parents together, so they are held here as a strong lead rather than drawn on the tree. If it holds, her people were Westphalians who landed on the Mississippi Gulf Coast instead of in New Orleans.'
    },

    henryMoore: {
      children: [
        'Louise Moore (1877–1948) — never married; with her sister Leontine she raised their orphaned nephew Charles Emile Larmann, in the house on Franklin Avenue that John Larmann Sr. would later point out to his grandson',
        'Leontine Moore (1880–1947) — "Aunt Tene," never married; the other half of that household, and of the story about the water heater',
        'Anthony Moore (1883–1920)',
        'Emile Henry Moore, who married Lola Gets',
        'Marie Louise Moore, and John Henry Moore who married Nathe Schnider',
        { id: 'eugeniaMoore' }
      ],
      given: 'Henry', surname: 'Moore', sex: 'M',
      birth: { date: '27 February 1847' },
      death: { date: '9 December 1893', place: 'Orleans Parish' },
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Married Valentine Goubler in May 1871 and was dead at forty-six, leaving her a widow for thirty-three years. His children carried French names — Eugenie, Leontine, Emile — from their mother\'s side.',
      records: [
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, May 1871 — Vol. 2, p. 162',
          text: 'GOUBLER, VALENTINE × MOORE, HENRY.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 9 December 1893 — Vol. 105, p. 417',
          text: 'MOORE, HENRY, age 46.',
          highlight: 'Esther\'s ledger reads "Dec 9, 189─" with the last digit clipped by the photocopier. The index restores it: 1893 — and the age of 46 lands exactly on her 27 February 1847 birthdate for him.'
        }
      ]
    },

    valentineGoubler: {
      children: [
        'Louise Moore (1877–1948) — never married; with her sister Leontine she raised their orphaned nephew Charles Emile Larmann, in the house on Franklin Avenue that John Larmann Sr. would later point out to his grandson',
        'Leontine Moore (1880–1947) — "Aunt Tene," never married; the other half of that household, and of the story about the water heater',
        'Anthony Moore (1883–1920)',
        'Emile Henry Moore, who married Lola Gets',
        'Marie Louise Moore, and John Henry Moore who married Nathe Schnider',
        { id: 'eugeniaMoore' }
      ],
      given: 'Marie Valentine Josepha', surname: 'Goubler', sex: 'F',
      birth: { date: '20 March 1847' },
      death: { date: '14 February 1926', place: 'Orleans Parish' },
      father: 'josephGoubler', mother: 'victoireCirclot',
      evidence: 'confirm',
      branch: 'larmann',
      photo: 'assets/img/goubler-tomb-old-tablet.jpg',
      photoCaption: 'The original marble tablet of the family tomb, weathered but partly legible. Her line reads "Valentine Goubler, wife of Henry Moore — died Feb. 14, 1926, aged 77 yrs."',
      blurb: 'Widowed at forty-five, she lived on to 1926 — long enough to bury her daughter Eugenie and her son Anthony, and to see her nephew Emile\'s name go up in bronze on the Ninth Ward\'s Victory Arch. The tomb she lies in is her parents\', and it eventually took in her Larmann great-grandchildren\'s line too.',
      records: [
        {
          title: 'Louisiana death record — under her maiden name',
          citation: 'Orleans Parish, 14 February 1926 — Vol. 192, p. 169',
          text: 'GOUBLER, MARIE VALENTINE.',
          highlight: 'The same date Esther wrote: "Feb. 14 - 1926." The index\'s age column is garbled (it prints 7), but the date is exact.'
        },
        {
          title: 'The old tomb tablet',
          citation: 'Goubler family tomb; photographed by the family, August 2026',
          text: 'VALENTINE GOUBLER, wife of Henry Moore — died Feb. 14, 1926, aged 77 yrs.',
          highlight: 'The stone names her marriage outright and restores the age the index garbled: seventy-seven.'
        }
      ],
      note: 'Her sister was probably the Eugenie Goubler who died in 1871 at twenty-three — which would explain her daughter\'s name. Brothers Lucien (d. 1876, at 22) and Emile Joseph (d. 1889, at 37) share the family tomb.'
    },

    josephGoubler: {
      children: [
        'Eugenie Goubler (1846 or 1848 – 1871)',
        'Marie Louise Goubler (b. 1850)',
        'Emile Goubler (1852–1889) — "Emile Henry" on one chart, "Joseph Emile" in the birth register',
        'Lucien Jean Baptiste Goubler (1855–1876)',
        'Louis Goubler (1856 or 1858 – 1940)',
        'Edward Goubler (b. 1858)',
        'Leontine Victoria Goubler',
        'LEONCE (Leon) Goubler (b. 1860 – d. 14 November 1939) — of 1722 St. Ferdinand Street, a member of Plumbers and Fitters\' Local No. 60; married Theresa C. Baron; father of Private Emile Thomas Goubler who died in France in 1918, of Leon Joseph (1890–1963), and of Louise, who married Thomas Gavin',
        { id: 'valentineGoubler' }
      ],
      given: 'Emile Joseph', surname: 'Goubler', sex: 'M',
      father: 'claudeGoubler', mother: 'marieJeanneLeBlanc',
      origin: 'a Lorraine family — Bertrambois, Meurthe-et-Moselle',
      birth: { date: '1818 or 1819' },
      death: { date: '7 November 1892', place: 'Orleans Parish' },
      evidence: 'confirm',
      branch: 'larmann',
      photo: 'assets/img/goubler-tomb-new-tablet.jpg',
      photoCaption: 'The Goubler family tomb, restored with its new marble tablet — thirteen names, Lucien Goubler to John R. Larmann Sr. The pediment reads "Family — Joseph Goubler." Family photograph.',
      blurb: 'Patriarch of the tomb the Larmann line still uses — and, it turns out, a Lorrainer. His parents married at Bertrambois in Meurthe-et-Moselle in 1808, so the Goublers came out of that French-German borderland rather than Germany proper. The name was in New Orleans by the 1840s in at least two households: his own, and that of Jean Baptiste Goubler and Françoise Tessier, almost certainly his brother.',
      records: [
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 7 November 1892 — Vol. 102, p. 1145',
          text: 'GOUBLER, JOSEPH, age 74.',
          highlight: 'Age 74 in 1892 puts his birth at about 1818 — exactly what his tomb face says: 1818–1892.'
        },
        {
          title: 'The tomb roster',
          citation: 'John Larmann Sr. tomb; typed roster via Judy Larmann Gifford, 2026',
          text: 'Joseph Goubler 1818–1892 · Victoire Circlot Goubler 1821–1895 · Lucien Goubler 1853–1876 · Emile Goubler 1852–1889 · Louis Goubler 1858–1940 · Valentine Goubler Moore 1847–1926 · Louise Moore 1877–1948 · Leontine Moore 1880–1947 · Anthony Moore 1883–1920 · Charles Larmann 1902–1969 · Esther Larmann 1904–1976 · Johanna Lemoine Larmann 1907–1992 · John Larmann 1926–2018.',
          highlight: 'Five generations in one vault: a family tomb bought by Goublers in the 1870s, passed through the Moores to the Larmanns.'
        },
        {
          title: 'The tomb itself',
          citation: 'Family photographs, August 2026',
          text: 'The pediment reads "FAMILY — JOSEPH GOUBLER." The original marble tablet, now broken and replaced by the family, is still partly legible: Lucien (d. Oct. 1876) · Emile (d. 1889) · Joseph Goubler (d. Nov. 1892, aged 74 yrs) · Victoire Cirlot, wife of Joseph Goubler (d. 1895) · Anthony Moore (d. Nov. 1, 1920, aged 37 yrs) · Valentine Goubler, wife of Henry Moore (d. Feb. 14, 1926, aged 77 yrs) · Louis Goubler (d. March 1940) · Leontine M. Moore (d. March 27, 1947) · Louise M. Moore (d. 1948).',
          highlight: 'The stone documents Louis Goubler\'s 1940 death, which the state index missed entirely, and gives Anthony Moore and Leontine their exact dates.'
        }
      ],
      note: 'The tomb and the state index call him plainly Joseph; a family pedigree profile via Judy Gifford gives his full name as EMILE Joseph Goubler, born about 1818 — which explains the Emiles that run down this family for a century. His grandson Private Emile Thomas Goubler, killed by pneumonia in France in 1918 and named on the Victory Arch, was his namesake twice over: the son of his youngest boy Leonce. The children\'s birth years vary by a year or two between the family charts and the Orleans birth register; the register is preferred where the two disagree.'
    },

    claudeGoubler: {
      children: [
        { id: 'josephGoubler' }
      ],
      given: 'Claude', surname: 'Goubler', sex: 'M',
      origin: 'Bertrambois, Meurthe-et-Moselle — Lorraine',
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'The Goubler origin, found in August 2026: he married Marie Jeanne LeBlanc at Bertrambois, in Meurthe-et-Moselle, on 21 September 1808. Bertrambois is a village of the Lorraine forest country near Sarrebourg, a few miles from the Alsatian line — which is why the name always sounded half German in New Orleans.',
      note: 'From a family pedigree chart supplied by Judy Gifford, tier confirm until the Bertrambois registers are read directly. Those registers are online through the Archives départementales de Meurthe-et-Moselle, and the 1808 marriage act would give both sets of parents and carry this line another generation.'
    },

    marieJeanneLeBlanc: {
      children: [
        { id: 'josephGoubler' }
      ],
      given: 'Marie Jeanne', surname: 'LeBlanc', sex: 'F',
      origin: 'Bertrambois, Meurthe-et-Moselle — Lorraine',
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Married Claude Goubler at Bertrambois on 21 September 1808. A French name in a borderland where French and German sat side by side in the same parish books.',
      note: 'Awaiting the Bertrambois registers, like her husband.'
    },

    victoireCirclot: {
      children: [
        'The same Goubler children — see Joseph Goubler',
        { id: 'valentineGoubler' }
      ],
      given: 'Théoline Victoria Nesida', surname: 'Cirlot', sex: 'F',
      alsoKnownAs: '"Victoire Cirlot" on the tomb; "Circlot" in Judy\'s transcription',
      birth: { date: '1821' },
      death: { date: '23 December 1895', place: 'Orleans Parish' },
      father: 'jeanAugusteCirlot', mother: 'adelaidePouponneauPetit',
      evidence: 'confirm',
      branch: 'larmann',
      photo: 'assets/img/goubler-tomb-new-tablet.jpg',
      photoCaption: 'The replacement tablet the family installed after the original broke — thirteen names, Lucien Goubler to John R. Larmann Sr., with her own spelled "Victoire Cirlot Goubler."',
      blurb: 'The old tablet reads "Victoire Cirlot, wife of Joseph Goubler"; the death index reversed her to "Theoline Victoire"; Judy\'s notes made it Circlot. One woman, three spellings — the stone\'s is preferred here.',
      records: [
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 23 December 1895 — Vol. 110, p. 79',
          text: 'GOUBLER, THEOLINE VICTOIRE, age 74.'
        }
      ],
      note: 'Her full name comes from a family pedigree profile: Théoline Victoria Nesida Cirlot, born 1821 to Jean Auguste Cirlot and Adélaïde "Adèle" Pouponneau Petit — both of whom died in 1825, when she was four. Two parents in one year in New Orleans usually means an epidemic; the city buried thousands to yellow fever in that decade. She also married before Goubler: her first husband was Edward Leroi Lanjunere (1803–1838), and their daughter Adèle Prudence Leroi Lanjunere (1838–1895) — born the year her father died, and named for the grandmother Théoline had lost at four — is a half-sister to all the Goubler children.'
    },

    jeanAugusteCirlot: {
      children: [
        { id: 'victoireCirclot' }
      ],
      given: 'Jean Auguste', surname: 'Cirlot', sex: 'M',
      birth: { date: '1794' },
      death: { date: '1825' },
      lifespanText: '1794 – 1825',
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Dead at thirty-one, in the same year as his wife, leaving a four-year-old daughter who would live to seventy-four and give her name to a tomb.',
      note: 'From a family pedigree chart via Judy Gifford. Both Cirlot parents dying in 1825 points hard at one of New Orleans\'s yellow-fever seasons; the sacramental burial registers for 1825 would confirm it and give the days.'
    },

    adelaidePouponneauPetit: {
      children: [
        { id: 'victoireCirclot' }
      ],
      given: 'Adélaïde', nickname: 'Adèle', surname: 'Pouponneau Petit', sex: 'F',
      birth: { date: '1798' },
      death: { date: '1825' },
      lifespanText: '1798 – 1825',
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Died at twenty-seven, the same year as her husband. Her double surname, Pouponneau Petit, is the oldest French-colonial-sounding name on this side of the family.',
      note: 'From a family pedigree chart via Judy Gifford. The Pouponneau and Petit families are both traceable in the New Orleans sacramental registers, which the Archdiocese has published in the volumes already used elsewhere on this tree.'
    },

    alonzoLemoine: {
      children: [
        { id: 'robertLemoine' },
        'Ernest Joseph Lemoine — m. Amelia Gehner; his first son was Alonzo Alexie (b. 1911)',
        'Eugene Lemoine — m. Marie Jackson; a daughter Genevieve (b. 1913)'
      ],
      given: 'Paul Alonzo', surname: 'Lemoine', sex: 'M',
      birth: { date: 'about 1855', place: 'Edgard, St. John the Baptist Parish' },
      death: { date: 'before April 1910' },
      father: 'alexisLemoine', mother: 'francoiseMartin',
      evidence: 'confirm',
      branch: 'lemoine',
      blurb: 'Johanna\'s grandfather — for a while mistaken for her father, until the family\'s spoken memory restored the missing generation. Found at last in August 2026, in his own father\'s household at Edgard: "Alozo Lemoine, son, 25" in the 1880 census of St. John the Baptist Parish. His sons honored his parents in their own children\'s names: Ernest\'s first boy was an Alonzo, Eugene\'s girl a Genevieve.',
      note: 'HOW HE WAS FOUND, and how far it goes. Poppone\'s 1864 baptismal certificate named her godfather as ALEXIS LEMOINE — twenty years before she married a Lemoine. That was the thread. The 1880 census of the 1st Ward of St. John the Baptist Parish holds the household: Alexis Lemoine, 51, brick mason, wife Alice [Françoise Alex Martin], and seven children — among them "Alozo," aged 25. Alexis had stood over the font of the girl his son would marry. The parent link is carried at confirm, not verified: the 1880 census places Alonzo in that household, but no record yet read names him together with Genevieve or with his son Robert. The marriage act — St. John the Baptist or St. James, in the 1880s — would close it. No Alonzo Lemoine appears anywhere in the 1910 census — he was dead or gone by then, which fits Genevieve standing alone in Orleans with the grandchildren. The only Alonzo Lemoine in the state death index (Alonzo James, 1911–1973, Orleans) is his grandson, Ernest\'s boy. The elder Alonzo may be indexed under Alphonse, or died before the statewide index begins in 1911. Finding his marriage to Genevieve Rousselle — not recorded in Orleans — is still the next step for this line.'
    },

    alexisLemoine: {
      children: [
        { id: 'alonzoLemoine' },
        'Joseph Alexis (1857–1939)',
        'Marie Alexina (1859–1954)',
        'Alfred (1863–1921) and Alscee (b. 1863)',
        'Ezimia (1869–1934)',
        'Amelius (1873–1951)'
      ],
      given: 'Alexis Alonzo', surname: 'Lemoine', sex: 'M',
      origin: 'Edgard, St. John the Baptist Parish',
      birth: { date: '4 February 1829, christened at Edgard on 22 November', place: 'St. John the Baptist Parish' },
      death: { date: 'August 1913' },
      occupation: 'Brick mason',
      evidence: 'confirm',
      branch: 'lemoine',
      blurb: 'The godfather. In January 1864 he stood over the font at Edgard for a newborn named Poppone Geneviève Roussel — and some twenty years later his son Alonzo married her. A brick mason of the 1st Ward, he married Françoise Alex Martin at Edgard in May 1854, raised seven children, and was buried in the churchyard of the same church where he had made that promise.',
      records: [
        {
          title: 'Godfather at Poppone\'s baptism',
          citation: 'Church of St. John the Baptist, Edgard — baptism of 21 January 1864',
          text: '"…the Sponsors being ALEXIS LEMOINE and Françoise Josephine Roussel."',
          highlight: 'This is the record that broke the Lemoine line open. It was the only Lemoine name anywhere in the family papers older than Alonzo himself.'
        },
        {
          title: 'The 1880 census — his household, with Alonzo in it',
          citation: '1880 U.S. census, 1st Ward, ED 160, St. John the Baptist Parish, sheet 7B',
          text: 'Alexis Lemoine, 51, brick mason, born Louisiana — FATHER\'S BIRTHPLACE: FRANCE, mother\'s: Louisiana. Wife Alice, 48. Children: Alozo 25, Alexis 22, Alexina 18, Alscee 17, Alfred 14, Azemia 11, Amelius 7.',
          highlight: 'Two things at once: it puts Alonzo in his father\'s house, and it says the generation above was born in France. The Lemoines had been a wall on this tree; this line is the door.'
        }
      ],
      note: 'A well-sourced FamilySearch profile gives his parents as Joseph Lemoine (b. 1803) and Marie Ozite Rivas (b. 1807), married at Edgard in 1826 — and the 1880 census\'s "father born in France" would make Joseph the immigrant. Neither is drawn on this tree yet: no record read here names Joseph and Alexis together. Careful, too — there was more than one Alexis Lemoine in that parish, including one who married Valerie Brou in 1883 and was the son of a different Joseph Lemoine and Marie Rivas. Untangling the two is the next job.'
    },

    francoiseMartin: {
      children: [
        { id: 'alonzoLemoine' },
        'and the rest of the seven — see Alexis Alonzo Lemoine'
      ],
      given: 'Françoise', alsoKnownAs: 'entered as "Alice" by the 1880 census taker, probably from her middle name Alex', surname: 'Martin', sex: 'F',
      birth: { date: 'about 1834', place: 'St. John the Baptist Parish' },
      evidence: 'confirm',
      branch: 'lemoine',
      blurb: 'Married Alexis Lemoine at Edgard on 23 May 1854 and raised seven children on the river. The 1880 census taker heard her as "Alice."',
      note: 'From the FamilySearch reconstruction plus the 1880 census; her own parents are not yet identified.'
    },

    genevieveRousselle: {
      children: [
        'The same Lemoine children — see Alonzo Lemoine',
        { id: 'robertLemoine' }
      ],
      given: 'Poppone Geneviève', alsoKnownAs: 'Poppone was her baptismal name, not a pet name — the priest wrote it first', surname: 'Roussel', sex: 'F',
      birth: { date: '26 November 1863', place: 'Edgard, St. John the Baptist Parish' },
      death: { date: '21 February 1938', place: 'Lucy, St. John the Baptist Parish' },
      lifespanText: '26 November 1863 – 21 February 1938',
      father: 'valeryRousselle', mother: 'marieEveDelatte',
      evidence: 'verified',
      branch: 'lemoine',
      blurb: 'Remembered in the family as "Poupone," an old Creole endearment. Born at Edgard on the river, she raised her son Robert\'s little daughter Johanna when his marriage collapsed and he went to sea — and the child called her "mother." She lived until 1938 and died back in the country at Lucy, aged seventy-four.',
      records: [
        {
          title: 'Her baptismal certificate — the record that proves the line',
          citation: 'Church of St. John the Baptist, Edgard, Louisiana; certificate issued 29 July 1936 by Rev. Ernest Milby, pastor',
          text: '"Poppone Geneviève Roussel, child of VALERY ROUSSEL and MARIE EVE DESLATTES, born in Edgard, La. on the 26th day of November 1863, was baptized on the 21st day of January 1864… by the Rev. N. M. Lacour, the sponsors being ALEXIS LEMOINE and Françoise Josephine Roussel."',
          highlight: 'Three things at once. Poppone was her real baptismal name, written before Geneviève — not the pet name everyone assumed. The act names her with both parents, which is what this site requires before it will call a link proven. And her godfather was a LEMOINE: Alexis Lemoine stood over her font in 1864, more than twenty years before she married Alonzo Lemoine. The two families were already bound together in that river parish a generation before the wedding. The certificate itself was drawn up in July 1936, when she was seventy-two — almost certainly to prove her age for the new Social Security.'
        },
        {
          title: 'The family record — her dates in full',
          citation: 'Judy Larmann Gifford\'s notes, taken down from her father John Larmann Sr., 2026',
          text: '"Poppone — Genevieve Rousselle Lemoine, 11/26/1863, child of Valery Rousselle + Marie Eve Deslattes, born in Edgard, La. Died in Lucy, La. 2/21/38, 74 years."',
          highlight: 'Born 26 November 1863, died 21 February 1938 at seventy-four — internally consistent, and it matches the nineteen-year-old Genevieve in her father\'s 1880 Edgard household exactly. This corrects an earlier guess on this site that she was the Genevieve Rousselle who died in Orleans in 1915; that was a different woman.'
        }
      ],
      note: 'Her parents were Valery Rousselle and Marie Eve Delatte, per Judy\'s notes — and the 1880 census of Edgard, in St. John the Baptist Parish, found the household in August 2026: Genevieve at about nineteen, with brothers and sisters Ignace, Florentine, Ettienne, Leo, Joseph, Aurelia, Noemie and Ozeme. Judy remembered four of those names without a document in front of her. Genevieve\'s birth about 1861 matches her death in 1915 at fifty-four exactly.'
    },

    valeryRousselle: {
      children: [
        { id: 'genevieveRousselle' },
        'Aurelian Rousselle (about 1875 – 25 July 1949) — "Uncle Aurelian," a retired railroad man and a veteran of the Spanish-American War; married Mamie Dixon and died at Bogalusa with no children living, buried in Ponemah Cemetery',
        'Joseph Rousselle',
        'Ozeme Joseph Rousselle — his own son Valery was born at Lucy in 1901',
        'Ignace, Florentine, Ettienne and Leo Rousselle — named in the 1880 census',
        'Marie Rousselle Grelien',
        'Noemie ("Naomi") Rousselle Zellar'
      ],
      given: 'Valery', surname: 'Rousselle', sex: 'M',
      birth: { date: 'about 1841', place: 'Louisiana' },
      origin: 'Edgard, St. John the Baptist Parish',
      evidence: 'confirm',
      branch: 'lemoine',
      blurb: 'Found at last in August 2026, in the 1880 census of Edgard, St. John the Baptist Parish — a river-parish household with nine children, four of whose names Judy had already written down from memory sixty years later.',
      records: [
        {
          title: 'The 1880 census — Edgard, St. John the Baptist Parish',
          citation: '1880 U.S. census, Edgard, St. John the Baptist Parish, Louisiana',
          text: 'Valery Roussel, born about 1841 in Louisiana, with wife Marie and children Ignace, Florentine, GENEVIEVE, Ettienne, Leo, Joseph, Aurelia, Noemie and Ozeme.',
          highlight: 'Judy\'s notes named four of these children from family memory — Genevieve, Joseph, "Aurelian," and "Naomi." The census gives Aurelia and Noemie, and five siblings nobody had. This is the household Poupone grew up in.'
        },
        {
          title: 'His wife named in his children\'s records',
          citation: 'Louisiana Parish Marriages and Deaths — entries for Ozeme Joseph and Leo Rousselle',
          text: 'Valery Rousselle, spouse MARIE EVE DELATTE, father of Ozeme Joseph Rousselle and of Leo Rousselle.',
          highlight: 'Independent confirmation of the wife Judy named — she first wrote the surname "Deslattes," then corrected it to Delatte, and both spellings appear in the records.'
        }
      ],
      note: 'The Rousselles are a river-parish family: Edgard and Lucy in St. John the Baptist, and Gramercy and St. James just upriver. Johanna\'s son John used to be taken "to the country" — to Lucy and Gramercy — to visit his great-uncle Aurelian, and that is how the connection stayed alive in living memory. St. James is also where a harder piece of this family\'s history sits: see "Valery, aged four" on the research page.'
    },

    marieEveDelatte: {
      children: [
        { id: 'genevieveRousselle' },
        'and the other Rousselle children — see Valery Rousselle'
      ],
      given: 'Marie Eve', surname: 'Delatte', sex: 'F',
      evidence: 'confirm',
      branch: 'lemoine',
      blurb: 'Judy\'s notes first wrote her surname "Deslattes," then corrected it to Delatte — both are real river-parish spellings of the same family, thick in Ascension and St. James parishes.'
    },

    henryJohnWellmeyer: {
      siblings: [
        'Gertrude Cecilia Wellmeyer (30 May 1884 – 8 Aug 1885) — his elder sister, dead at fourteen months, before he was born',
        'Louis Mathias Wellmeyer (11 March 1888 – 1 May 1889) — dead at thirteen months',
        'Aloysius Roch Wellmeyer (16 Aug 1890 – 30 Sept 1901) — drowned at eleven years, one month and fourteen days; the family counted it that closely',
        'Henrietta Cecilia “Rita” Wellmeyer (29 Aug 1892 – 9 Aug 1961) — never married',
        'Mary Ione “Mae Irene” Wellmeyer (b. 9 Sept 1894) — married Charles Edward Hammel, 1919; no children',
        'Zoe Hyacynth Wellmeyer (16 Aug 1897 – 5 Nov 1955) — married Frederick Gottlieb Siegfried, 1925',
        'John Edmond/Edward Wellmeyer (29 March 1900 – 15 Dec 1983) — named for his father; never married'
      ],
      children: [
        'Leslie Henry (9 June 1911 – 1994)',
        'Clare Agnes (b. 30 May 1912) — married Wilfred B. Jones',
        'Cyril Raymond (14 Oct 1915 – 1996) — married Cecelia Froeba (1938), later Jeanne Cheramie (1959)',
        'Henry John Jr. (8 Sept 1918 – 2001) — married Rita Mary Bayard (1941)',
        'Edward William (1925–2021) — married Alberta Mary Rome (1953)',
        { id: 'annWellmeyer' }
      ],
      given: 'Henry John', surname: 'Wellmeyer', sex: 'M',
      birth: { date: '13 March 1886', place: 'New Orleans' },
      death: { date: '23 February 1970' },
      father: 'johnWellmeyer', mother: 'catherineLange',
      evidence: 'verified',
      branch: 'wellmeyer',
      blurb: '"Papa" in his granddaughter Judy\'s notes, and the "H" of the Wellmeyer tomb at St. Vincent de Paul No. 3.',
      records: [
        {
          title: 'Louisiana birth record',
          citation: 'Orleans Parish, 13 March 1886 — Vol. 83, p. 968',
          text: 'WELLMEYER, HENRY JOHN. Father: WELLMEYER, JOHN. Mother: LANGE, CATHERINE E.'
        },
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, 1910 — Vol. 32, p. 303',
          text: 'SANDER, BERTHA FLORENCE × WELLMEYER, HENRY JOHN.',
          highlight: 'Judy\'s notes supply the day: 15 April 1910.'
        }
      ],
      note: 'His brother Aloysius\'s drowning is recorded in Judy\'s notes with the family\'s own arithmetic — eleven years, one month, fourteen days — the kind of number a mother keeps.'
    },

    berthaSander: {
      siblings: [
        'Laura Elizabeth Sander — married Oscar Newman',
        'Julia Sander — married James A. Olson',
        'William Edward Sander (b. 18 April 1877) — married Violet Elizabeth Hunter',
        'John Henry Sander — married Georgiana Schmitt',
        'Louis Franklin Sander — married Gertrude “Aunt Gertie” Molenaar',
        'Oscar Joseph Sander (b. April 1890) — married Marie D\'Lion'
      ],
      children: [
        'Leslie Henry (1911–1994)',
        'Clare Agnes (b. 1912)',
        'Cyril Raymond (1915–1996)',
        'Henry John Jr. (1918–2001)',
        'Edward William (1925–2021)',
        { id: 'annWellmeyer' }
      ],
      given: 'Bertha Florence', surname: 'Sander', sex: 'F',
      birth: { date: '27 August 1885', place: 'New Orleans' },
      death: { date: '1956' },
      father: 'louisSander', mother: 'catharineOhr',
      evidence: 'confirm',
      branch: 'wellmeyer',
      blurb: '"Grandma Bertha" of Judy\'s notes, which give her exact birthday and her whole birth family — six siblings from Laura to Oscar.'
    },

    louisSander: {
      children: [
        'Laura Elizabeth, Julia, William Edward (b. 1877), John Henry, Louis Franklin, Oscar Joseph (b. 1890)',
        { id: 'berthaSander' }
      ],
      given: 'Louis Edward', surname: 'Sander', sex: 'M',
      birth: { date: 'March 1851' },
      death: { date: '12 November 1914', place: 'Orleans Parish' },
      evidence: 'confirm',
      branch: 'wellmeyer',
      blurb: 'Married Catherine Ohr in New Orleans in June 1872. Judy\'s notes carried his death date to the day, and the state index confirms it exactly.',
      records: [
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, June 1872 — Vol. 3, p. 109',
          text: 'OHR, CATHERINE × SANDERS, LOUIS ED.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 12 November 1914 — Vol. 161, p. 1051',
          text: 'SANDER, LOUIS E, age 63.',
          highlight: 'Judy\'s notes: "B-3/1851, D-11/12/1914." The index agrees on both, to the day.'
        }
      ]
    },

    catharineOhr: {
      children: [
        'The same seven — see Louis Edward Sander',
        { id: 'berthaSander' }
      ],
      given: 'Catherine', surname: 'Ohr', sex: 'F',
      evidence: 'confirm',
      branch: 'wellmeyer',
      blurb: 'A German surname — Ohr — in the same downtown New Orleans world as the Wellmeyers, Langes and Sanders her children married into.'
    },

    johnWellmeyer: {
      siblings: [
        'Henry Wellmeyer (13 Sept 1856 – 1 April 1889) — married Louisa Blohm (Oct 1877); his son Bernard John (1888–1930) married Amelia Schultz and carried a parallel Wellmeyer line: Alice (1915), Bernard Kramer John (1917), Ethel Violet (1918), Frederick (1920)',
        'Josephine Wellmeyer (c. 1859 – 1865) — died at six',
        'Louis Wellmeyer (b. 2 February 1864)',
        'Joseph H. Wellmeyer (c. 1867 – 27 February 1899) — died at thirty-two'
      ],
      children: [
        'Gertrude Cecilia (30 May 1884 – 8 August 1885) — died at fourteen months',
        { id: 'henryJohnWellmeyer' },
        'Louis Mathias (11 March 1888 – 1 May 1889) — died at thirteen months',
        'Aloysius Roch (16 Aug 1890 – 30 Sept 1901) — drowned at eleven',
        'Henrietta Cecilia “Rita” (29 Aug 1892 – 9 Aug 1961)',
        'Mary Ione “Mae Irene” (b. 9 Sept 1894) — married Charles Edward Hammel, 1919',
        'Zoe Hyacynth (16 Aug 1897 – 5 Nov 1955) — married Frederick Gottlieb Siegfried, 1925',
        'John Edmond/Edward (29 March 1900 – 15 Dec 1983)'
      ],
      given: 'John Edward', surname: 'Wellmeyer', sex: 'M',
      birth: { date: 'December 1853' },
      death: { date: '15 December 1922', place: 'Orleans Parish' },
      father: 'henryBernardWellmeyer', mother: 'carolineLobmeyer',
      evidence: 'confirm',
      branch: 'wellmeyer',
      blurb: 'The middle Wellmeyer generation: son of Bernard and Caroline, father of eight — and with Catherine he buried three of them, a baby daughter, a baby son, and the eleven-year-old Aloysius, drowned in 1901.',
      records: [
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, January 1883 — Vol. 9, p. 738',
          text: 'LANGE, CATHARINE ELIZABETH × WELLMEYER, JOHN.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 15 December 1922 — Vol. 186, p. 121',
          text: 'WELLMEYER, JOHN, age 69.',
          highlight: 'Judy\'s notes give 15 December 1920; the index says the same day in 1922, and its age of 69 fits the December 1853 birth her notes record. The index year is preferred.'
        }
      ],
      note: 'His parent link to Henry Bernard Wellmeyer and Caroline Lobmeyer rests on Judy\'s family notes; no civil or church record naming them together has been pulled yet.'
    },

    henryBernardWellmeyer: {
      children: [
        { id: 'johnWellmeyer' },
        'Henry Wellmeyer (13 Sept 1856 – 1 April 1889) — m. Louisa Blohm, October 1877; father of Mary Gertrude (m. Theodore Siemssen, 1902), John L. (b. 1886), Henry Leonard (died 1887 at ten months) and Bernard John (1888–1930), born five months before Henry died at thirty-three',
        'Josephine Wellmeyer (c. 1859 – 8 January 1865) — died at six',
        'Louis Wellmeyer (b. 2 February 1864, New Orleans)',
        'Joseph H. Wellmeyer (c. 1867 – 27 February 1899) — died at thirty-two',
        'and probably the infant Anne, dead at two months in October 1872'
      ],
      given: 'Henry Bernard', alsoKnownAs: 'christened Bernard Heinrich Wallmeyer', surname: 'Wellmeyer', sex: 'M',
      birth: { date: 'christened 1 July 1823', place: 'Ibbenbüren, Tecklenburg, Westphalia, Prussia' },
      death: { date: '23 September 1880', place: 'New Orleans' },
      father: 'gerardWallmeyer', mother: 'mariaAnnaStiegemann',
      occupation: 'Grocer',
      evidence: 'confirm',
      branch: 'wellmeyer',
      immigrant: true,
      blurb: 'The German immigrant of the line: a miner\'s-country boy from Ibbenbüren in Westphalia who kept a New Orleans grocery, raised his family there, and died in September 1880 at fifty-seven — three months after the census takers came through. The civil record calls him Bernard.',
      records: [
        {
          title: 'The 1880 census — taken weeks before his death',
          citation: 'New Orleans, ED 62, sheet 165C — NARA T9',
          text: 'Bernard Wellmeyer, 56, grocer, born Germany, parents born Germany; wife Gertude, 49, Germany; sons Joseph 13, Louis 15, John 26 — all Louisiana-born.',
          highlight: 'John born in Louisiana by 1854: the family had crossed by the early 1850s.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 23 September 1880 — Vol. 77, p. 470',
          text: 'WELLMEYER, BERNARD, age 57.'
        },
        {
          title: 'Birth of his son Louis — the couple named together',
          citation: 'Orleans Parish, 2 February 1864 — Vol. 36, p. 376',
          text: 'WELLMEYER, LOUIS — mother LOBMEYER, CAROLINE; father WELLMEYER, BERNARD.',
          highlight: 'The anchor civil record of the immigrant generation: Bernard and Caroline named together, in New Orleans, raising children.'
        }
      ],
      sources: [
        { label: 'FamilySearch tree profile G9HV-S85 (17 sources attached)', url: 'https://www.familysearch.org/tree/person/details/G9HV-S85' }
      ],
      note: 'The Ibbenbüren origin, the 1 July 1823 christening, and his parents come from a well-sourced FamilySearch profile ("Bernard Henry Wallmeyer," seventeen records attached) found in August 2026 — carried at confirm until the Ibbenbüren parish registers are read directly. No Wellmeyer–Lobmeyer marriage appears in the Orleans index and none in the profile: he and Caroline, a Hanover girl, almost certainly met and married on this side of the water or en route — their marriage record is still wanted.'
    },

    gerardWallmeyer: {
      children: [
        { id: 'henryBernardWellmeyer' },
        'and seven more children, per the family reconstruction on FamilySearch'
      ],
      given: 'Gerard Joseph', surname: 'Wallmeyer', sex: 'M',
      origin: 'Ibbenbüren, Tecklenburg, Westphalia',
      birth: { date: 'about 1792', place: 'Ibbenbüren, Westphalia' },
      evidence: 'confirm',
      branch: 'wellmeyer',
      blurb: 'The Westphalian stay-behind generation: married Maria Anna Stiegemann at Ibbenbüren on 21 October 1817, raised eight children there, and watched at least one son leave for Louisiana.',
      note: 'From the sourced FamilySearch reconstruction; the Ibbenbüren Catholic parish registers (Bistum Münster) are the primary source to read. Ibbenbüren sits in the Tecklenburg district between Osnabrück and Münster.'
    },

    mariaAnnaStiegemann: {
      children: [
        { id: 'henryBernardWellmeyer' },
        'and the other Wallmeyer children — see Gerard Joseph Wallmeyer'
      ],
      given: 'Maria Anna', surname: 'Stiegemann', sex: 'F',
      origin: 'Ibbenbüren, Tecklenburg, Westphalia',
      birth: { date: 'about 1795', place: 'Ibbenbüren, Westphalia' },
      evidence: 'confirm',
      branch: 'wellmeyer',
      blurb: 'Married at Ibbenbüren in October 1817; mother of the Bernard who crossed. Stiegemann is a classic Westphalian farm name.',
      note: 'From the sourced FamilySearch reconstruction, pending a direct reading of the Ibbenbüren registers.'
    },

    carolineLobmeyer: {
      children: [
        'The same children — see Henry Bernard Wellmeyer',
        { id: 'johnWellmeyer' }
      ],
      given: 'Gertrude Caroline', surname: 'Lobmeyer', sex: 'F',
      birth: { date: 'November 1831', place: 'Kingdom of Hanover, Germany' },
      death: { date: '7 December 1903', place: 'New Orleans' },
      evidence: 'confirm',
      branch: 'wellmeyer',
      immigrant: true,
      blurb: 'A Hanover girl who married a Westphalian in America: two German -meyer families joined a generation before the Langes and Sanders came into the line. She outlived Bernard by twenty-three years, buried at least three of her children, and was laid in St. Vincent de Paul No. 1 — beginning the family\'s St. Vincent de Paul tradition that holds to this day.',
      records: [
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 7 December 1903 — Vol. 131, p. 367',
          text: 'WELLMEYER, GERTRUDE LOBMEYER, age 72.',
          highlight: 'Son Louis\'s 1864 birth record calls her Caroline; her death row calls her Gertrude. One woman, two given names. Buried December 1903, St. Vincent de Paul Cemetery No. 1.'
        }
      ],
      sources: [
        { label: 'FamilySearch tree profile G9HV-3FV (13 sources attached)', url: 'https://www.familysearch.org/tree/person/details/G9HV-3FV' }
      ],
      note: 'Born November 1831 in the Kingdom of Hanover per the sourced FamilySearch reconstruction — the same corner of Germany as the Larmanns, on the other side of the family. Her parents are not yet identified anywhere.'
    },

    catherineLange: {
      children: [
        'Gertrude Cecilia (b. 1884)',
        { id: 'henryJohnWellmeyer' },
        'Louis Mathias (b. 1888)',
        'Aloysius Roch (b. 1890)',
        'Henrietta Cecilia “Rita” (1892–1961)',
        'Mary Ione (b. 1894)',
        'Zoe Hyacynth (b. 1897)',
        'John Edmond (1900–1983)'
      ],
      given: 'Catherine Elizabeth', surname: 'Lange', sex: 'F',
      evidence: 'verified', branch: 'wellmeyer',
      blurb: 'Eight children, born 1884 to 1900.'
    }
  };

  /* Branch metadata — colours are resolved in CSS from these keys. */
  const BRANCHES = {
    pedeaux:   { label: 'Pedeaux',            origin: 'Nantes, Brittany' },
    aucoin:    { label: 'Aucoin & Hébert',    origin: 'Acadia, via Saint-Énogat' },
    gaiennie:  { label: 'Gaiennie',           origin: 'Brûlon, in Maine → New Orleans' },
    brunetti:  { label: 'Brunetti',           origin: 'Italy' },
    franovich: { label: 'Franovich',          origin: 'Dalmatia' },
    moizant:   { label: 'Moizant',            origin: 'French Louisiana' },
    larmann:   { label: 'Larmann & Moore',    origin: 'Hanover → New Orleans' },
    lemoine:   { label: 'Lemoine & Rousselle', origin: 'Creole river parishes' },
    wellmeyer: { label: 'Wellmeyer & Sander', origin: 'German New Orleans' }
  };

  global.FAMILY = { people: P, branches: BRANCHES, root: 'kevin' };
})(window);
