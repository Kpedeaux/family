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
 */
(function (global) {
  'use strict';

  const P = {
    /* ─────────────────────────  LIVING / RECENT  ───────────────────────── */

    kevin: {
      siblings: [
        'Aaron John Pedeaux',
        'Catherine Ann Pedeaux'
      ],
      children: [
        'Ashley Pedeaux',
        'Owen Pedeaux',
        'Philip Pedeaux',
        'John Pedeaux'
      ],
      given: 'Kevin Joseph', surname: 'Pedeaux', sex: 'M',
      birth: { place: 'Meraux, St. Bernard Parish, Louisiana' },
      father: 'buddy', mother: 'jeanLarmann',
      evidence: 'verified',
      blurb: 'Raised in Meraux; Archbishop Hannan. Father of Ashley, Owen, Philip and John. Siblings Aaron John and Catherine Ann.'
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
      blurb: 'Married Veronica Brunetti in April 1943. Buried St. Louis Cemetery No. 3, Sq. 5 East, Facing G, Tier STLOUS AVE, Space 9.',
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
        'Edouard Borne — a witness at her 1871 wedding',
        'Marie Borne — godmother to her first child in 1872'
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
        'Jean Baptiste Pedeau (b. 12 Nov 1810, buried 13 Nov 1855) — the Baptiste living next door in the 1850 census'
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
        'Michel Pierre (b. 20 May 1777, Chantenay) — the other candidate for the emigrant',
        'Anne'
      ],
      children: [
        'Michel Pedeau (b. 28 Oct 1808)',
        'Jean Baptiste Pedeau (b. 12 Nov 1810)',
        { id: 'antoineFlorentin' }
      ],
      given: 'Michel', surname: 'Pedeau', sex: 'M',
      origin: 'Nantes, Brittany',
      birth: { date: 'about 1765–1777', place: 'Nantes' },
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
        }
      ],
      sources: [
        { label: 'Diocese of Baton Rouge sacramental abstracts', url: 'https://diobr.org/archives-publications' }
      ],
      note: 'For years this line was thought to be a dead end — "no child of the marriage appears anywhere." The children were in the published register abstracts the whole time. Three sons: Michel (1808), Jean Baptiste (1810) and Antoine Florentin (1812). In the entire 1850 census of Louisiana there are exactly two adult Pedeau men, Baptiste and Antoine, living in adjacent households in Assumption Parish. He did NOT die on 22 September 1811 as Find a Grave has it — that is impossible, since Antoine was born in November 1812. The widely-cited c.1767 birth year was back-calculated from that bad burial date and is equally unreliable.'
    },

    michelPedeauPere: {
      children: [
        'Michel André (b. 7 April 1765)',
        'Marie (1766–1772)',
        'Jeanne Yvonne (b. 1769)',
        'Michel (1770–1771)',
        'Jean (1771–1772)',
        'Pierre (1773–1866)',
        'Michel Pierre (b. 1777)',
        'Anne',
        { id: 'michelPedeau' }
      ],
      given: 'Michel', surname: 'Pédeau', sex: 'M',
      birth: { date: '19 February 1739', place: 'Sainte-Pazanne, Pays de Retz' },
      death: { date: '30 December 1799', place: 'Nantes' },
      occupation: 'Charpentier et calfat de marine — ship\'s carpenter and caulker, port of Nantes',
      evidence: 'verified',
      branch: 'pedeaux',
      blurb: 'Lived "au bas de la Fosse" — the foot of the Nantes quay, in the thick of the port.',
      records: [
        {
          title: 'Baptism of his son Michel André — Nantes, paroisse Saint-Nicolas',
          citation: 'AD Loire-Atlantique 3 E 109/154, view 69 of 299 (7 April 1765)',
          text: '"Le septieme jour de avril mil sept cent soixante cinq a été baptisé par moi prestre soussigné michel andré né ce jour fils de michel pédeau charpentier de navire et de jeanne muraille son épouse, demeurants au bas de la Fosse…"',
          highlight: 'Read in the original register. "On the seventh day of April 1765 was baptised… Michel André, born this day, son of Michel Pédeau, ship\'s carpenter, and of Jeanne Muraille his wife, dwelling at the bottom of La Fosse."'
        }
      ],
      sources: [
        { label: 'Archives municipales de Nantes — register viewer', url: 'https://archives-numerisees.nantes.fr/v2/am441/visualiseur/etatcivil.html?id=451014875' },
        { label: 'AD44 — Sainte-Pazanne BMS 1739, 3 E 186/3', url: 'https://archives-numerisees.loire-atlantique.fr/v2/ark:/42067/a529e4a123c8e50b841cceb60fd771ab' }
      ]
    },

    jeanneMuraille: {
      children: [
        'Michel André (b. 7 April 1765)',
        'Marie (1766–1772)',
        'Jeanne Yvonne (b. 1769)',
        'Michel (1770–1771)',
        'Jean (1771–1772)',
        'Pierre (1773–1866)',
        'Michel Pierre (b. 1777)',
        'Anne',
        { id: 'michelPedeau' }
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
        'Fourteen in all, ten of whom sailed for Louisiana in 1785:',
        'Joseph-Michel (b. 1760)',
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
        'and three who died young at Saint-Énogat: Françoise (1763), François David (1766–1769), Jeanne (1778–1779)'
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
        'Joseph François Gaiennie — married Marceline Labatut; his children share the same grandparents in the register'
      ],
      children: [
        'Joseph Gervaise (1821–1825)',
        'Eulalie Aurelia (1823–1909)',
        'Joseph Alceste (1825–1903)',
        { id: 'alphonseSr' },
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
      blurb: 'Seventeen years old when the British came up the river. Twenty-two and already an orphan when he married in January 1820. Eleven children. Gaiennie Street in the Warehouse District still carries the family name.',
      records: [
        {
          title: 'Marriage — St. Michael, Convent',
          citation: 'Diocese of Baton Rouge, Vol. 4 (1820–1829), SMI-2, 77',
          text: 'Gervais, age 22, nat. of New Orleans (Francois and Elisabete SARDE, both decd.) m. 22 Jan. 1820 Nathalie CHENET, age 17 (Pierre and Susanne LAVIGNE) wit. Jean Baptiste Oury; Dominique LeBourgeois; Orter Reine; Maximillien Rousselle.',
          highlight: 'One record fixes four things: his 1797 birth, his New Orleans origin, both his parents, and both of his wife\'s parents.'
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
      given: 'François', surname: 'Gaiennie', sex: 'M',
      death: { date: 'before January 1820' },
      lifespanText: 'd. before 1820',
      evidence: 'verified', branch: 'gaiennie',
      occupation: 'War of 1812 — 4th Regiment (Morgan\'s), Louisiana Militia',
      blurb: 'Named, already deceased, in his son\'s 1820 marriage record. A "Pat. GP: Francois and Eulalie SARDE" appears again in an 1836 baptism, independently confirming the couple.',
      records: [
        {
          title: 'Militia roll — War of 1812',
          citation: 'Louisiana Soldiers in the War of 1812 (compiled state militia rosters)',
          text: '"Francis Gaignie — 4 Reg\'t. (Morgan\'s), La. Militia."',
          highlight: 'Father and son both turned out for the New Orleans campaign, in different regiments.'
        }
      ],
      sources: [
        { label: 'Louisiana Soldiers in the War of 1812 (index)', url: 'https://www.ancestry.com/search/collections/3339/?name=_Gaiennie&count=50' }
      ]
    },

    elisabethSarde: {
      given: 'Élisabeth', alsoKnownAs: 'given as Eulalie in later records, and as "Eugénie Sardet" in family tradition',
      surname: 'Sarde', sex: 'F',
      death: { date: 'before January 1820' },
      lifespanText: 'd. before 1820',
      evidence: 'verified', branch: 'gaiennie',
      note: 'The Louisiana death index has a GAIENNIE, MARGUERITE SARDE, died 25 May 1835, Orleans, age 65 — an independent trace of the Sarde connection in the right generation.'
    },

    pierreChenet: { given: 'Pierre', surname: 'Chenet', sex: 'M', evidence: 'verified', branch: 'gaiennie', blurb: 'Named in his daughter\'s 1820 marriage record.' },
    susanneLavigne: { given: 'Susanne', surname: 'Lavigne', sex: 'F', evidence: 'verified', branch: 'gaiennie', blurb: 'Named in her daughter\'s 1820 marriage record.' },

    /* ─────────────────────────  BRUNETTI / FRANOVICH / MOIZANT  ───────────────────────── */

    johnBrunetti: {
      children: [
        { id: 'veronicaBrunetti' }
      ],
      given: 'John', alsoKnownAs: 'Giovanni', surname: 'Brunetti', sex: 'M',
      origin: 'Italy — via Chicago',
      birth: { date: '5 May 1893', place: 'Italy' },
      death: { date: '12 January 1987' },
      evidence: 'verified',
      branch: 'brunetti',
      immigrant: true,
      blurb: 'Came over as a teenager, spent his twenties in Chicago, and turned up in New Orleans in time to marry a Croatian oysterman\'s daughter in June 1921. He and Veronica are the only two Brunettis in St. Louis Cemetery No. 3, and the only Brunettis in the Louisiana index at all — he left no kin behind him here.',
      records: [
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, June 1921 — Vol. 46, p. 90',
          text: 'BRUNETTI, JOHN × FRANOVICH, VERONICA.'
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
      note: 'A STRONG LEAD, NOT PROOF. An Ellis Island manifest dated 16 April 1912 records Giovanni Brunetti, 19, arriving on the S.S. Luisiana out of Naples — last residence PLATACI, province of Cosenza, Calabria; nearest relative "father Michele, Plataci"; final destination CHICAGO. Fifteen Brunettis left that one village between 1905 and 1922, a textbook chain migration, and Plataci is an Arbëreshë village — an Italo-Albanian community settled in Calabria since the fifteenth century. Everything fits but one detail: a man born 5 May 1893 would have been eighteen that day, not nineteen. Manifest ages are routinely a year out, and nothing on the document mentions New Orleans or Veronica Franovich. So Michele Brunetti is deliberately NOT entered here as his father. The Declaration of Intention at NARA Chicago would give his exact town and date of birth and settle it — as would his daughter\'s 1923 birth certificate, now public, or the 1921 marriage licence application, which names both parties\' parents.'
    },

    veronicaFranovich: {
      siblings: [
        'Nicholas Franovich Sr. (1886–1955)',
        'Dominick Franovich (1892–1986)',
        'Anthony L. Franovich Jr. (1895–1975)',
        'Elizabeth “Isabelle” Franovich (b. 1897) — married Pascal Liuzza'
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
      blurb: 'A Dalmatian oyster family\'s daughter from the lower delta. Widowed mother brought the children up to New Orleans; she married a Sicilian immigrant\'s son in 1921. Buried St. Louis Cemetery No. 3.',
      sources: [
        { label: 'Find a Grave 282264581', url: 'https://www.findagrave.com/memorial/282264581/veronica-brunetti' }
      ],
      note: 'Not to be confused with her daughter, Veronica Marie Brunetti Pedeaux. The circumstantial chain to Anthony Franovich Sr. is airtight — same household in 1900 and 1910, Melanie is his wife, he dies in 1911, she is in Orleans as his widow with the children by 1920 and remarries in 1926 as his widow — but no single record yet names Veronica and Anthony together. The 1910 Plaquemines census image would settle it.'
    },

    anthonyFranovich: {
      children: [
        'Nicholas Sr. (1886–1955)',
        'Dominick (1892–1986)',
        'Anthony L. Jr. (1895–1975)',
        'Elizabeth “Isabelle” (b. 1897)',
        { id: 'veronicaFranovich' }
      ],
      given: 'Anthony L.', suffix: 'Sr.', surname: 'Franovich', sex: 'M',
      origin: 'Dalmatia (Croatia)',
      birth: { date: '22 September 1873' },
      death: { date: '19 July 1911', place: 'Plaquemines Parish' },
      evidence: 'confirm',
      branch: 'franovich',
      immigrant: true,
      blurb: 'Dead at thirty-eight. Buried at Our Lady of Good Harbor Catholic Cemetery, Buras; the headstone reads "Age 38 years."',
      sources: [
        { label: 'Find a Grave 74161215', url: 'https://www.findagrave.com/memorial/74161215/anthony-l-franovich' }
      ],
      note: 'His marriage to Melanie Moizant, about 1890–92, was in Plaquemines Parish and is held only by the Clerk of Court in Belle Chasse — the Louisiana state marriage index covers Orleans only.'
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
        'Nicholas Sr. (1886–1955)',
        'Dominick (1892–1986)',
        'Anthony L. Jr. (1895–1975)',
        'Elizabeth “Isabelle” (b. 1897)',
        { id: 'veronicaFranovich' }
      ],
      given: 'Melanie', surname: 'Moizant', sex: 'F',
      birth: { date: 'January 1877', place: 'Louisiana' },
      death: { date: '17 October 1957', place: 'Orleans Parish' },
      father: 'alfredMoizant', mother: 'victoriaDaroca',
      evidence: 'verified',
      branch: 'moizant',
      blurb: 'Widowed at thirty-four with five children; remarried Theodore Adolph Paasch in 1926. Buried St. Louis Cemetery No. 3, Square 3, Section B, Lot 11.',
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
      note: 'Moizant is a French-Louisiana name, not Croatian — but the family married into the Plaquemines Dalmatian community repeatedly. Two Moizant women married Mistiches; Melanie\'s sister Annicia married a Scobel, and an Antoinette Scobel Franovich lies at Our Lady of Good Harbor.'
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
      birth: { date: 'January 1838' },
      death: { date: '23 February 1933', place: 'Orleans Parish' },
      evidence: 'confirm',
      branch: 'moizant',
      blurb: 'Died at ninety-five. Buried in the same plot as his daughter — St. Louis No. 3, Square 3, Section B, Lot 11.',
      sources: [{ label: 'Find a Grave 143366668', url: 'https://www.findagrave.com/memorial/143366668' }]
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
      children: [
        'John R. Larmann Jr.',
        'James C. Larmann',
        { id: 'jeanLarmann' },
        'Judy Larmann Gifford'
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
      evidence: 'inferred',
      branch: 'wellmeyer',
      blurb: 'Buried in her father\'s tomb at St. Vincent de Paul No. 3 — the plot is inscribed "Sect C, 3rd Alley, Left, Wellmeyer, H."',
      sources: [
        { label: 'Find a Grave 147183498', url: 'https://www.findagrave.com/memorial/147183498' }
      ],
      note: 'All ten Wellmeyers in that cemetery lie in the same plot, and the group resolves cleanly as Henry John\'s household — parents, three sons, their wives, a brother and a sister. Ann is the only occupant who fits no role but daughter. Family memory supports it too: Kevin\'s mother spoke of Buzzy and Jill Wellmeyer as cousins, and they are Leslie\'s children. Still, no document yet names Ann and Henry together. The 1947 marriage licence would.'
    },

    charlesEmileLarmann: {
      siblings: [
        'Mary Eugenia Larmann (b. 1896)',
        'Louise Frances Larmann (b. 1897)',
        'Bernadine Louisa Larmann (b. 1898)',
        'Anthony Leo Larmann (b. 1900) — father of the attorney Laurence “Larry” Larmann',
        'Esther Margerita Larmann (b. 1904)'
      ],
      children: [
        { id: 'johnLarmannSr' }
      ],
      given: 'Charles Emile', surname: 'Larmann', sex: 'M',
      birth: { date: '12 July 1902', place: 'New Orleans' },
      father: 'anthonyLarmann', mother: 'eugeniaMoore',
      evidence: 'verified',
      branch: 'larmann',
      records: [
        {
          title: 'Louisiana birth record',
          citation: 'Orleans Parish, 12 July 1902 — Vol. 123, p. 485',
          text: 'LARMANN, CHARLES EMILE. Father: LARMANN, ANTHONY H. Mother: MOORE, EUGENIA.'
        },
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, August 1924 — Vol. 49, p. 468',
          text: 'LEMOINE, JOHANNA K × LARMANN, CHARLES EMILE.'
        }
      ],
      note: 'For a long time he existed only as a name in his son\'s 2018 obituary. These two records put him on the public record and add a generation above him.'
    },

    johannaLemoine: {
      children: [
        { id: 'johnLarmannSr' }
      ],
      given: 'Johanna K.', surname: 'Lemoine', sex: 'F',
      evidence: 'verified',
      branch: 'larmann',
      blurb: 'Born outside Orleans Parish — she is not in the Orleans birth index, and her origins are still open.'
    },

    anthonyLarmann: {
      children: [
        'Mary Eugenia (b. 1896)',
        'Louise Frances (b. 1897)',
        'Bernadine Louisa (b. 1898)',
        'Anthony Leo (b. 1900)',
        { id: 'charlesEmileLarmann' },
        'Esther Margerita (b. 1904)'
      ],
      given: 'Anthony H.', surname: 'Larmann', sex: 'M',
      evidence: 'verified', branch: 'larmann',
      records: [
        { title: 'Louisiana marriage record', citation: 'Orleans Parish, November 1895 — Vol. 18, p. 718', text: 'MOORE, EUGENIE × LARMANN, ANTHONY.' }
      ],
      blurb: 'Six children: Mary Eugenia 1896, Louise Frances 1897, Bernadine Louisa 1898, Anthony Leo 1900, Charles Emile 1902, Esther Margerita 1904.'
    },

    eugeniaMoore: {
      children: [
        'Mary Eugenia (b. 1896)',
        'Louise Frances (b. 1897)',
        'Bernadine Louisa (b. 1898)',
        'Anthony Leo (b. 1900)',
        { id: 'charlesEmileLarmann' },
        'Esther Margerita (b. 1904)'
      ],
      given: 'Eugenie', surname: 'Moore', sex: 'F',
      evidence: 'verified', branch: 'larmann',
      blurb: 'An English or Irish name in an otherwise German household — the "all-German maternal line" assumption turned out to be too simple.'
    },

    henryJohnWellmeyer: {
      siblings: [
        'Gertrude Cecilia Wellmeyer (b. 1884)',
        'Louis Mathias Wellmeyer (b. 1888)',
        'Aloysius Roch Wellmeyer (b. 1890)',
        'Henrietta Cecilia “Rita” Wellmeyer (1892–1961)',
        'Mary Ione Wellmeyer (b. 1894)',
        'Zoe Hyacynth Wellmeyer (b. 1897)',
        'John Edmond Wellmeyer (1900–1983)'
      ],
      children: [
        'Leslie Henry (1911–1994)',
        'Clare Agnes (b. 1912)',
        'Cyril Raymond (1915–1996)',
        'Henry John Jr. (1918–2001)',
        'Edward W. (1925–2021)',
        { id: 'annWellmeyer' }
      ],
      given: 'Henry John', surname: 'Wellmeyer', sex: 'M',
      birth: { date: '13 March 1886', place: 'New Orleans' },
      death: { date: '23 February 1970' },
      father: 'johnWellmeyer', mother: 'catherineLange',
      evidence: 'verified',
      branch: 'wellmeyer',
      blurb: 'The "H" of the Wellmeyer tomb at St. Vincent de Paul No. 3.',
      records: [
        {
          title: 'Louisiana birth record',
          citation: 'Orleans Parish, 13 March 1886 — Vol. 83, p. 968',
          text: 'WELLMEYER, HENRY JOHN. Father: WELLMEYER, JOHN. Mother: LANGE, CATHERINE E.'
        },
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, 1910 — Vol. 32, p. 303',
          text: 'SANDER, BERTHA FLORENCE × WELLMEYER, HENRY JOHN.'
        }
      ]
    },

    berthaSander: {
      children: [
        'Leslie Henry (1911–1994)',
        'Clare Agnes (b. 1912)',
        'Cyril Raymond (1915–1996)',
        'Henry John Jr. (1918–2001)',
        'Edward W. (1925–2021)',
        { id: 'annWellmeyer' }
      ],
      given: 'Bertha Florence', surname: 'Sander', sex: 'F',
      birth: { date: '1885' }, death: { date: '1956' },
      evidence: 'verified', branch: 'wellmeyer'
    },

    johnWellmeyer: {
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
      given: 'John', surname: 'Wellmeyer', sex: 'M',
      evidence: 'verified', branch: 'wellmeyer',
      records: [
        { title: 'Louisiana marriage record', citation: 'Orleans Parish, January 1883 — Vol. 9, p. 738', text: 'LANGE, CATHARINE ELIZABETH × WELLMEYER, JOHN.' }
      ]
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
    gaiennie:  { label: 'Gaiennie',           origin: 'French New Orleans' },
    brunetti:  { label: 'Brunetti',           origin: 'Italy' },
    franovich: { label: 'Franovich',          origin: 'Dalmatia' },
    moizant:   { label: 'Moizant',            origin: 'French Louisiana' },
    larmann:   { label: 'Larmann',            origin: 'German New Orleans' },
    wellmeyer: { label: 'Wellmeyer',          origin: 'German New Orleans' }
  };

  global.FAMILY = { people: P, branches: BRANCHES, root: 'kevin' };
})(window);
