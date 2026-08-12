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
        'Owen John Pedeaux',
        'Philip Joseph Pedeaux — the name is already on this tree: Numa Sr.\'s eldest brother was christened Antoine Philippe Joseph at Labadieville in 1872',
        'John Charles Pedeaux — John for his great-grandfather John Richard Larmann; Charles for Charles Emile Larmann, the generation before'
      ],
      given: 'Kevin Joseph', surname: 'Pedeaux', sex: 'M',
      birth: { place: 'Meraux, St. Bernard Parish, Louisiana' },
      father: 'buddy', mother: 'jeanLarmann',
      evidence: 'verified',
      blurb: 'Raised in Meraux; Archbishop Hannan. Married to Lauren Ashley Dauro Pedeaux; father of Owen, Philip and John. Lives in the Bywater — a few streets from where his Larmann and Brunetti people lived a century ago.',
      records: [
        {
          title: 'MARRIED 237 METRES FROM HIS GREAT-GREAT-GREAT-GRANDFATHER\'S DOOR',
          citation: 'St. Vincent de Paul church, 3051 Dauphine Street — now Blessed Francis Xavier Seelos. Distance measured between the geocoded church and the Larmann house on Dauphine; see the map.',
          text: 'Kevin and Lauren were married at Blessed Seelos, the old ST. VINCENT DE PAUL at 3051 Dauphine Street in the Bywater — the third parish founded in New Orleans, in 1838, its red brick basilica built in 1866.',
          highlight: 'NOBODY ARRANGED ANY OF THIS, WHICH IS WHY IT IS WORTH WRITING DOWN. John Casper Larmann came ashore at New Orleans in 1866 — the year that church was built — and died in the Larmann house on Dauphine Street in 1921, two blocks up the same street. His son Anthony was at 922 Port Street, 247 metres off. The parish where Kevin\'s grandparents John Larmann and Ann Wellmeyer married, St. Cecilia, was later merged into this very church. Five generations, one street, and a family that left the Bywater for Chalmette and Meraux over a century — and then came back to it.'
        }
      ]
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
      blurb: 'Buried in St. Louis Cemetery No. 3 in the same space as his parents and his mother\'s parents — Sq. 5 East, Facing G, St. Louis Avenue, Space 9.',
      records: [
        {
          title: 'HOLY TRINITY SCHOOL — and the German grandmother he did not have',
          citation: 'Family testimony (Kevin Pedeaux, August 2026). Parish and school history: Holy Trinity Parish, founded 1847 for the German Catholics below Canal Street; school opened 1871 under Benedictine sisters, free parochial school from 1910; church closed 1997, deconsecrated, now the Marigny Opera House.',
          text: 'Buddy went to elementary school at HOLY TRINITY, the German national parish at St. Ferdinand and Dauphine. Getting him in was a piece of work: his mother had to claim the family was German, which it was not. The parish had been founded in 1847 for German Catholics in a stretch of the Marigny then nicknamed LITTLE SAXONY, and more than a century later it was still asking.',
          highlight: 'HE HAD NOT ONE GERMAN ANCESTOR — AND THEN HE MARRIED INTO THE REAL THING. Look at what this tree can prove about the boy sitting in that classroom. His father\'s people were Pedeaux, French out of Nantes by way of Bayou Lafourche, with Acadians deported to Brittany behind them. His mother was a Brunetti of Plataci, whose village spoke ARBËRISHT — Albanian — and before that a Franovich of the Dalmatian coast and a Moizant of Bordeaux. French, Italian, Albanian, Croatian. No Germans anywhere. Veronica Brunetti Pedeaux told the parish otherwise and got her son a desk. THEN HE MARRIED JEAN LARMANN. Her great-great-great-grandfather was JOHN CASPER LARMANN, born at Gesmold in the Kingdom of Hanover in 1846, who came ashore in 1866 and whose own obituary names HOLY TRINITY as his parish — the actual German article, a member of that actual congregation, who died one block from that church door and lies today in St. Roch Cemetery on FATHER THEVIS PIAZZA, the walk named for Holy Trinity\'s own priest. The boy who had to be passed off as German to get into the German school married the great-great-great-granddaughter of one of its Germans. Their son Kevin is descended from both of them.'
        },
        {
          title: 'Where he grew up, and where he married',
          citation: 'Family testimony (Kevin Pedeaux, August 2026), with the 1934 City of New Orleans tax bill on John Brunetti\'s page for the Mazant property',
          text: 'He was a child on MAZANT STREET in the Bywater — his grandfather John Brunetti\'s corner at Mazant and Derbigny — before the family moved out to 2212 PIRATE DRIVE, CHALMETTE. He married Jean Larmann at ST. CATHERINE OF SIENA, 105 Bonnabel Boulevard, Metairie, and they raised Kevin, Aaron and Catherine at 2905 MARQUEZ DRIVE, MERAUX.',
          highlight: 'FOUR ADDRESSES, AND THEY DRAW THE WHOLE CENTURY. Bywater to Chalmette to Meraux is the same movement every family on this tree made — out of the old downriver wards, into the parish next door, then further down. Katrina stopped it in August 2005 and pushed the next generation back toward the city. His wedding church is the middle point too: his people married at Holy Trinity and St. Cecilia in the Bywater, he married out at Bonnabel Boulevard, and his son married back downtown at Blessed Seelos.'
        },
        {
          title: 'The cemetery register, in the archdiocese\'s own hand',
          citation: 'Archdiocese of New Orleans, Catholic Cemeteries burial register — profile 36915129, plot L3 SQ 5E / G ST. LOUIS AVENUE / 9. Searched 12 August 2026.',
          text: 'HERBERT JOHN PEDEAUX — born 20 October 1956 — died 17 February 2009, aged 52 — buried 20 February 2009, St. Louis Cemetery No. 3.',
          highlight: 'Both his dates come back exactly as this tree already carried them, from a record nobody in the family supplied. That matters more than it looks: the archdiocese\'s register is an independent third party, and where it can be checked against what the family knew, it agrees.'
        }
      ],
      sources: [
        { label: 'Find a Grave 223275967', url: 'https://www.findagrave.com/memorial/223275967' },
        { label: 'Catholic Cemeteries burial record', url: 'https://nolacatholiccem.discovereverafter.com/profile/36915129' }
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
      blurb: 'Married Veronica Brunetti in April 1943, served in the Army, and re-enlisted for the Panama Canal Zone when the war ended. Buried St. Louis Cemetery No. 3, Sq. 5 East, Facing G, St. Louis Avenue, Space 9 — in his wife\'s family\'s tomb, alongside her parents.',
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
      blurb: 'Holy Angels Academy; retired from BellSouth. Lived New Orleans, then Chalmette, then Long Beach after Katrina. Buried in her father\'s tomb at St. Louis Cemetery No. 3 — the last of the six laid in it.',
      records: [
        {
          title: 'Louisiana birth record',
          citation: 'Orleans Parish, 20 November 1923 — Vol. 181, p. 2241',
          text: 'BRUNETTI, VERONICA MARY. Father: BRUNETTI, JOHN. Mother: FRANOVICH, VERONICA. The only Brunetti birth in the entire Louisiana index, 1790–1925.'
        },
        {
          title: 'Her burial — and a question in the same plot',
          citation: 'Archdiocese of New Orleans, Catholic Cemeteries burial register — St. Louis No. 3, plot L3 SQ 5E / G ST. LOUIS AVENUE / 9, profile 36915128. Searched 12 August 2026.',
          text: 'VERONICA PEDEAUX — died 6 August 2013, aged 89 — buried 10 August 2013 in the Brunetti plot, with her husband, her son, and both her parents. Also in the plot, buried 19 May 1951: "VERONICA (TWINS) BRUNETTI."',
          highlight: 'THAT 1951 ENTRY IS NOT EXPLAINED YET, AND IT SHOULD NOT BE GUESSED AT. Cemetery ledgers routinely record infants who died before naming under the mother\'s name and the plot\'s family surname — so "Veronica (Twins) Brunetti" most likely means twins born to a Veronica. Two women in this family answer to that. Veronica Franovich Brunetti was about forty-nine in 1951, which makes her very unlikely. Veronica Marie was twenty-seven, married eight years, and had her children in exactly these years — Patricia, then Buddy in 1956. Twins lost in May 1951 would sit precisely in that gap. But the ledger does not say whose they were, and this tree does not print inferences as facts: the Orleans Parish death index for May 1951 would settle it, and until it does this stays a question.'
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
      birth: { date: '16 March 1888', place: 'Lafourche Parish' },
      death: { date: '17 July 1958', place: 'Orleans Parish' },
      father: 'pierreNuma', mother: 'eulalieBorne',
      evidence: 'verified',
      branch: 'pedeaux',
      occupation: 'Worked for MARITIME ELECTRIC CO., 615 Commerce Place — a marine electrical firm in the Warehouse District, named on his own 1942 draft card.',
      blurb: 'A bayou-born man who ended up in Lakeview. He was working for a marine electrical company at fifty-four, in the middle of a war that had New Orleans building ships as fast as it could. Buried at Greenwood Cemetery in his wife\'s family tomb — "5 Palmetto Magnolia Hawthorne, A. F. Gaiennie Tomb."',
      records: [
        {
          title: 'HIS OWN HAND — the 1942 draft card, with his address, his telephone and his employer',
          citation: 'United States, World War II Draft Registration Cards, 1942 — Fourth Registration, State of Louisiana; serial number U-1108, D.S.S. Form 1 (revised 4-1-42), signed by the registrant.',
          text: 'NUMA — LOUIS — PEDEAUX. · Place of residence: 6509 WEST END BLVD., N.O., La. · Mailing address: same. · Telephone: AU-1452. · Age 54; born 3-16-1888. · PLACE OF BIRTH: LAFOURCHE PARISH, LA. · Person who will always know your address: EDNA PEDEAUX (WIFE), 6509 West End Blvd. · Employer: MARITIME ELEC. CO. · Place of employment: 615 COMMERCE PLACE, N.O., La. · Signed, Numa L. Pedeaux.',
          image: 'assets/img/pedeaux-1942-draft-card.jpg',
          imageAlt: 'A 1942 United States draft registration card for Numa Louis Pedeaux, giving his residence at 6509 West End Boulevard, his birthplace as Lafourche Parish, and his employer as Maritime Electric Co. at 615 Commerce Place',
          imageCredit: 'United States, World War II Draft Registration Cards, 1942, Fourth Registration, Louisiana — NARA, via FamilySearch. Tap to enlarge.',
          highlight: 'ONE CARD, FOUR THINGS THIS PAGE DID NOT HAVE. His BIRTHPLACE was carried here as "probably Lafourche or Assumption Parish" — a hedge, because Louisiana did not require birth registration outside Orleans until 1918 and there is no birth record for him anywhere. He answers it himself: LAFOURCHE PARISH. His ADDRESS, 6509 West End Boulevard, puts this family out at Lakeview near the lake — five miles from the Bywater blocks where every Larmann on this tree lived, which is worth seeing on the map. His EMPLOYER was MARITIME ELECTRIC CO. on Commerce Place, a marine electrical firm on the riverfront edge of the Warehouse District, in the year New Orleans was turning out landing craft by the thousand. And there is a small trap in the index: the transcribers entered the employer field as "Numa Louis/Pedeaux," which reads as though he worked for himself. The card says otherwise. Read the image, not the index.'
        },
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
          title: 'THE STREET — Gaiennie Street, New Orleans',
          citation: 'John Kendall, History of New Orleans (Lewis Publishing Co., Chicago & New York, 1922), Chapter XLII "Streets, Parks, Squares," p. 675',
          text: '"Thus Poeyfarre, Robin and GAIENNIE recall the memory of well-known Creole families." The same passage explains how: as the estates along Tchoupitoulas Road were absorbed into the growing city, "the names of the owners of the neighboring properties descended upon the newly opened thoroughfares."',
          highlight: 'There is a Gaiennie Street in New Orleans to this day, running off Tchoupitoulas in the Lower Garden District, and Kendall says plainly that it carries a family name — one belonging to people who owned the land there. PROBABLE, NOT PROVEN, and the distinction matters: Kendall names a family, not a person, and our documented Gaiennies are upriver in St. James and out in Jefferson Parish, not obviously Tchoupitoulas landowners. What makes it likely is that GAIENNIE is a very rare surname in Louisiana and that this François landed in New Orleans itself. What would settle it is a conveyance or succession naming a Gaiennie as owner of Faubourg property.'
        },
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
          title: 'Remarriage, naming her parents — read in the register itself',
          citation: 'St. Louis Cathedral, New Orleans — Marriages 1784–1806, entry 2 of May 1784 (SLC, M5, 27; SRANO Vol. 4). Digitized register published free by the Archdiocese of New Orleans, Office of Archives and Records.',
          image: 'assets/img/reyne-1784-marriage.jpg',
          imageAlt: 'The handwritten Spanish colonial marriage entry of 2 May 1784 recording Pedro Bourgeois and Maria Margarita Reen',
          imageCredit: 'Archdiocese of New Orleans, Office of Archives and Records. Tap to enlarge.',
          text: '"…con Maria Margarita REEN, viuda de M[onsieu]r Cadet SARDET, hija leg[ítima] de ESTEVAN REEN y de FRAN[CIS]CA RENARD, naturales TODOS de esta Parroq[uia]…" — with Pedro BOURGEOIS, "natural de Caen en Normandia, Provincia de Francia," legitimate son of [Pierre] Bourgeois and Maria Leonor LE BOEUF. Signed Fr. Antonio de Sedella.',
          highlight: 'THE SENTENCE THAT DATES THIS FAMILY IN LOUISIANA. Read 11 August 2026 in the register itself, not the abstract — the second entry in the book, on the first written page. "Naturales TODOS de esta Parroquia" — all of them natives of this parish. The "todos" is the whole argument: it reaches past the bride to her parents. Étienne Reyne and Françoise Renard were not immigrants. They were born in New Orleans, in a town founded in 1718. The Spanish clerk spells the name REEN, which is why it hides from anyone searching Reyne.'
        }
      ]
    },

    etienneReyne: {
      children: [
        'Marie Jeanne (born 25 Oct 1755, baptised the 26th) — her godmother was a "Jane REINE", so there was other Reyne kin in the city',
        'Louise Françoise (born 9 Nov 1757, baptised the 11th)',
        'Pierre (born 1 Dec 1761, baptised the 8th) — the act that calls his father MASTER mason; godfather Pierre ZERINGUE',
        'Marie Joseph (born 19 June 1766, baptised 5 July) — godfather François COUSIN, her half-brother; godmother her big sister Marguerite, then thirteen',
        { id: 'margueriteReyne' },
        'STEPSON, by his wife\'s first marriage: Jean François Cousin (b. 7 Sept 1745)'
      ],
      given: 'Étienne', surname: 'Reyne', sex: 'M',
      evidence: 'verified',
      branch: 'gaiennie',
      occupation: 'Master mason',
      blurb: 'A master mason of French colonial New Orleans, raising children there through the 1750s and 1760s. He married into the founding generation\'s children — and it was his wife\'s first marriage contract, read in 2026, that finally reached past them both to the two people who actually crossed.',
      records: [
        {
          title: 'The earliest trace of him — a godmother\'s line, 16 March 1750',
          citation: 'St. Louis church, New Orleans — baptism of Marie Françoise Castel, 16 March 1750 (SLC, B2, 180); SRANO Vol. 1 (1718–1750)',
          text: '"Marie Francoise (Cecile CHRISTOPHE, widow Jean CASTEL), b. March 16, 1750, s. Jean Baptiste LEGROS, surnamed LA TANDRILLE, resident, and MARIE FRANÇOISE RENARD, SP. ETIENNE REINE, MASON."',
          highlight: 'The oldest record of this couple, found 11 August 2026 — two and a half years before their eldest child was born. It catches them sideways: Françoise is standing as godmother to a widow\'s baby, and the clerk identifies her the way clerks did, by her husband — "spouse of Étienne Reine, mason." So they were already married by March 1750, he was already working at his trade, and it gives her full name: MARIE Françoise Renard. He is not yet "master" mason here; that title arrives with his son Pierre\'s baptism in 1761.'
        },
        {
          title: 'His trade found him his friends — Jean Callier, master mason',
          citation: 'St. Louis church, New Orleans — marriage of Joseph Callier, 17 August 1762 (SLC, B4, 71); baptism of Marie Jeanne Reyne, 26 October 1755 (SLC, B3, 48); marriage contract of 25 April 1740 (French Superior Council). SRANO Vols. 1–2.',
          text: '1762: "Joseph (JEAN, MASTER MASON, and Marie Françoise Frauche), native of this parish, m. Geneviève Toussaint… w. Montenary, the bride\'s father, JEAN CALLIER, THE GROOM\'S FATHER, Mongez, master blacksmith, MARTIN, MASTER MASON, Claude Boutte, master blacksmith." · 1755: "Marie Jeanne (Etienne and Françoise Renard)… s. JEAN CALLIER and Jane REINE." · 1740: Jean Callier signs the Cousin–Renard marriage contract.',
          highlight: 'ONE NAME CROSSES FIFTEEN YEARS AND TWO MARRIAGES, AND THE REASON IS HIS TRADE. Jean Callier witnessed Marie Françoise\'s first marriage contract in 1740, and fifteen years later stood godfather to her daughter by Étienne — and he was a MASTER MASON, the same trade as Étienne himself. That 1762 wedding party is the whole world these people moved in: two master masons, two master blacksmiths, and a master cobbler\'s daughter marrying a mason\'s son. New Orleans had a few thousand people and a few dozen men who could lay brick. They stood at each other\'s weddings and over each other\'s children because they worked the same walls.'
        },
        {
          title: 'His children\'s baptisms — St. Louis church',
          citation: 'SLC registers B2–B5, 1752–1766 (SRANO Vol. 2)',
          text: 'Marie Marguerite (1752) · Marie Jeanne (1755) · Louise Françoise (1757) · Pierre (1761, "Etienne, master mason") · Marie Joseph (1766) — all children of Etienne and Francoise RENARD.'
        }
      ],
      note: 'HE WAS BORN IN THE COLONY — and the register itself now says so, not just the abstract. On 11 August 2026 the act was read in the Archdiocese\'s own digitized book: his daughter\'s 1784 remarriage records her as daughter of "ESTEVAN REEN y de FRAN[CIS]CA RENARD, naturales TODOS de esta Parroquia" — all of them natives of this parish. The Caraby records say the same of another daughter\'s parents. So the answer to "how long has this family been in Louisiana" is not 1752, the year of the first baptism we can read; it is a generation earlier still. A man raising children as a master mason in 1752 was most likely born in the 1720s, inside the first decade of a city founded in 1718. No baptism has been found for him — the earliest St. Louis church registers are fragmentary — so his birth year stays undocumented, but his birthplace no longer is. THE "STE. REYNE CONCESSION" IS A DEAD END — checked and closed, 11 August 2026. It is real: Pierre Céard, "director of St. Reyne concession," was buried on 25 June 1726. But <em>Sainte Reine</em> is a saint — Reine of Alise — and the concession carries a dedication, not a family surname. Sainte and Reyne are not the same word doing the same work. Nothing links it to this family, and it should stop being listed as a lead.'
    },

    jeanReynaud: {
      children: [ { id: 'francoiseRenard' } ],
      given: 'Jean', surname: 'Reynaud', alsoKnownAs: 'the name descends as Renard, Reinard, Renart', sex: 'M',
      death: { date: 'before 25 April 1740', place: 'presumably New Orleans' },
      evidence: 'verified',
      branch: 'gaiennie',
      blurb: 'One of the two people this whole archive was reaching for: a man who crossed the Atlantic to a town barely built, had a daughter there, and was dead before she was twenty. He is named once, in a notarial act drawn eleven generations ago, and that is all there is.',
      records: [
        {
          title: 'Named — with his wife — at his daughter\'s marriage contract',
          citation: 'French Superior Council, New Orleans — Marriage contract, 25 April 1740, Document C 40 (2845), fo. 14 (doc. 1740-04-25-03); Louisiana Historical Quarterly Vol. 10 no. 2, April 1927, p. 278',
          text: '"Et MARIE FRANÇOISE RENARD, fille mineure de feu JEAN REYNAUD et de feue HÉLÈNE DORIGNY, ses père et mère, native de la N[ouve]lle Orléans, évêché de Québec…"',
          highlight: 'Both parents already dead in April 1740, and both named in the same breath. Because his daughter married as a MINOR that first time, the notary had to record her filiation — which is exactly what the 1747 contract could not do, seven years later, when she came to it a widow. The whole hunt turned on that one difference.'
        }
      ],
      note: 'WHO HE WAS is unknown beyond the name, and the search for more has now been run and come back empty — which is itself worth recording. He is NOT in the French Superior Council records: 86 documents there carry the name Reynaud, but the pre-1742 ones all belong to Claude Reynaud dit Avignon\'s family, a different household entirely. He is not in the sacramental abstracts. He left no will, no lawsuit, no property sale, no mortgage. Two things follow. He was in New Orleans by about 1720, in the Company of the Indies years, which is the town\'s first decade. And he died early and without an estate worth litigating — the court records thicken from about 1735, and by then he was already gone. The remaining places to look are outside both systems: the 1721, 1726 and 1727 colonial censuses, and the Company of the Indies passenger lists of 1718–21.'
    },

    heleneDorigny: {
      children: [ { id: 'francoiseRenard' } ],
      given: 'Hélène', surname: 'Dorigny', alsoKnownAs: 'possibly Dorigné or d\'Origny — read from a single 1740 hand', sex: 'F',
      death: { date: 'before 25 April 1740', place: 'presumably New Orleans' },
      evidence: 'verified',
      branch: 'gaiennie',
      blurb: 'The other half of the crossing, and the deepest woman in this archive. She was in New Orleans in its first decade, bore a daughter there, and died before that daughter was grown — leaving her to be raised by a family friend.',
      records: [
        {
          title: 'Named at her daughter\'s marriage contract',
          citation: 'French Superior Council, New Orleans — Marriage contract, 25 April 1740 (doc. 1740-04-25-03); Louisiana Historical Quarterly Vol. 10 no. 2, April 1927, p. 278',
          text: '"…fille mineure de feu Jean Reynaud et de FEUE HÉLÈNE DORIGNY, ses père et mère, native de la N[ouve]lle Orléans, évêché de Québec…"',
          highlight: 'The spelling is read from one 1740 hand and one hand only, so Dorigné and d\'Origny are equally possible — Origny being a French place name, which would make it a woman named for where she came from. Nothing else about her survives.'
        }
      ],
      note: 'SEARCHED, AND GENUINELY EMPTY. Dorigny returns nothing at all in the French Superior Council records — not one document, under that spelling or Origny. Nothing in the sacramental abstracts either. She exists in exactly one line of one notarial act, written after she was already dead, and that is the entire surviving record of a woman who crossed an ocean and raised a daughter in a town that was barely built. It is worth saying plainly rather than leaving her as a name with an implied file behind it: there is no file.'
    },

    francoiseRenard: {
      father: 'jeanReynaud', mother: 'heleneDorigny',
      children: [
        'BY PIERRE COUSIN, her first husband: Jean François Cousin, born and baptised 7 September 1745 — the "François Cousin" who stood godfather to his own half-sister Marie Joseph Reyne in 1766',
        'BY ANTOINE JOLY, her second: none recorded. That marriage was contracted in September 1747 and he was dead within the year',
        'BY ÉTIENNE REYNE, her third — the five below, and Marguerite:',
        'Marie Jeanne (born 25 Oct 1755, baptised the 26th)',
        'Louise Françoise (born 9 Nov 1757, baptised the 11th)',
        'Pierre (born 1 Dec 1761, baptised the 8th)',
        'Marie Joseph (born 19 June 1766, baptised 5 July)',
        { id: 'margueriteReyne' }
      ],
      given: 'Marie Françoise', surname: 'Renard', sex: 'F',
      evidence: 'verified',
      branch: 'gaiennie',
      note: 'HER PARENTS ARE FOUND — 11 August 2026 — and the logic that found them is worth keeping. Her 1747 marriage contract could not name them, because she came to that marriage a widow, and a widow contracts on her own behalf. So the search went BACKWARDS to her FIRST marriage, when she would still have been a girl under her family\'s authority — and there it was: 25 April 1740, "fille mineure de feu Jean Reynaud et de feue Hélène Dorigny." The document that seemed useless pointed straight at the one that worked. Everything else about her follows from it. She was a minor in 1740, so born after about 1715, probably around 1720–23; she was orphaned young and raised by Jean Connard, who gave her away and then stood godfather to her first child in 1745; and she was born in New Orleans within a few years of its founding. She buried three husbands\' worth of life into forty years — Cousin the carpenter, Joly who lasted a season, and Reyne the mason, who outlived her records. She could write her name when the men around her made crosses.',
      blurb: 'Three husbands, and she buried two of them before she was thirty. A native of New Orleans, she married Pierre Cousin and had a son in 1745; married Antoine Joly by contract in September 1747 and buried him within the year; and by March 1750 was the wife of Étienne Reine, mason — the marriage that lasted, and that this family descends from. Named across fifteen years of her children\'s baptisms, and still standing godmother to a Sardet granddaughter in 1769.',
      records: [
        {
          title: 'The first time she appears — as a godmother, 16 March 1750',
          citation: 'St. Louis church, New Orleans — baptism of Marie Françoise Castel (SLC, B2, 180); SRANO Vol. 1',
          text: '"…s. Jean Baptiste LEGROS, surnamed LA TANDRILLE, resident, and MARIE FRANÇOISE RENARD, sp. Etienne REINE, mason."',
          highlight: 'The oldest record of either of them, and it gives her the full name the later entries drop: MARIE Françoise. She is standing over the font for the baby of a widow — the kind of small neighbourly act that is most of what survives of a woman\'s life in these books.'
        },
        {
          title: 'HER PARENTS, AT LAST — the 1740 marriage contract',
          citation: 'French Superior Council, New Orleans — Marriage contract, 25 April 1740, three pages, Document C 40 (2845), fo. 14 (doc. 1740-04-25-03); Louisiana Historical Quarterly Vol. 10 no. 2, April 1927, p. 278',
          text: '"…furent présents… PIERRE FRANÇOIS COUSIN, CHARPENTIER, demeurant à la Nouvelle Orléans, fils de feu ANTOINE COUSIN et de… NATIF DE BOURBOURG, évêché de la Flandre, majeur… d\'une part. Et MARIE FRANÇOISE RENARD, FILLE MINEURE DE FEU JEAN REYNAUD ET DE FEUE HÉLÈNE DORIGNY, SES PÈRE ET MÈRE, NATIVE DE LA N[OUVE]LLE ORLÉANS, ÉVÊCHÉ DE QUÉBEC, autorisée et assistée et représentée par JEAN CONNARD, SON AMY QUI L\'A ÉLEVÉE JUSQU\'À CE JOUR, d\'autre part."',
          image: 'assets/img/renard-1740-filiation.jpg',
          imageAlt: 'The opening of the 1740 French marriage contract, naming Pierre François Cousin and Marie Françoise Renard with their parents',
          imageCredit: 'French Superior Council records, Louisiana Historical Center, via the Louisiana Colonial Documents Digitization Project. Tap to enlarge.',
          highlight: 'THE DEEPEST DOCUMENT IN THIS ARCHIVE, and it answers four questions at once. Her parents were JEAN REYNAUD and HÉLÈNE DORIGNY, and BOTH WERE ALREADY DEAD in April 1740 — "feu" and "feue." She was a MINOR, so born after about 1715. She was "NATIVE DE LA NOUVELLE ORLÉANS, ÉVÊCHÉ DE QUÉBEC" — stated flatly in 1740, forty-four years before the act that was our only evidence for it, and back when this city answered to the bishop of Quebec. And she was an ORPHAN: given away by Jean Connard, "her friend, WHO HAS RAISED HER TO THIS DAY." The reason this contract names her parents and the 1747 one does not is simply that in 1740 she was a minor bride and in 1747 a widow — a widow contracts for herself, and nobody has to say who her father was.'
        },
        {
          title: 'Her first husband — Pierre Cousin, and the man who raised her',
          citation: 'St. Louis church, New Orleans — baptism of Jean François Cousin, 7 September 1745 (SLC, B2, 49); SRANO Vol. 1. WPA abstract of the 1740 contract, Document C 40 (2845).',
          text: 'Contract: "Marriage contract between PIERRE FRANCOIS COUSIN, CARPENTER, and MARIE FRANCOISE REINARD OF NEW ORLEANS." Signed: Pierre Cousin · Dehallier · Marie Francoise Reinard · Jean Callier · Perier · + Cimonot. Baptism, five years later: "COUSIN — Jean Francois (Pierre and Francoise RENARD), b. Sept. 7, 1745, s. JEAN CONNARD and Sylvestre? MAUNOY."',
          image: 'assets/img/cousin-1740-wpa-card.jpg',
          imageAlt: 'A typed WPA index card abstracting the 1740 marriage contract between Pierre François Cousin and Marie Françoise Reinard, with signatures copied beneath',
          imageCredit: 'WPA abstract card, Document C 40 (2845) — Louisiana Historical Center, via the Louisiana Colonial Documents Digitization Project.',
          highlight: 'Two quiet things sit in these two records. Her first husband was a CARPENTER from BOURBOURG in French Flanders, son of a late Antoine Cousin — an immigrant, like almost every man in this tree who married a woman already here. And when their first son was born in 1745, the godfather was JEAN CONNARD: the same man who had raised her as an orphan and given her away five years earlier. He was still there. She also signed this contract in her own hand, in 1740 — seven years earlier than the other signature we have, so her literacy is attested twice.'
        },
        {
          title: 'The Connards — and how she paid it back',
          citation: 'St. Louis church, New Orleans — baptism of Françoise Connard, 30 July 1751 (SLC, B2, 227); SRANO Vol. 2. Connard family entries, SRANO Vols. 1–2; 46 documents under CONNARD in the French Superior Council records, 1735–1791.',
          text: '"CONNARD — Françoise (ALEXIS and Marie Françoise GONZALES), b. July 30, 1751, s. François Toiton and MARIE FRANÇOISE RENARD."',
          highlight: 'THE RELATIONSHIP RAN BOTH WAYS, AND IT LASTED. Jean Connard raised her as an orphan and gave her away in 1740; he stood godfather to her first son in 1745; and here, in 1751 — a year after she married the mason, and eleven years after he handed her over at the notary — she is standing over the font for a Connard daughter, who is given her own name. That is not a legal formality. That is a family.'
        },
        {
          title: 'What the Connard household actually looked like',
          citation: 'French Superior Council — Petition to sell real estate, 29 January 1735 (#A-35/3; LHQ Vol. 5 no. 2, April 1922, p. 260) · Acknowledgment of debt and mortgage, February 1739 (Document #2541; LHQ Vol. 6 no. 2, April 1923, p. 300) · 46 documents under CONNARD, 1735–1791',
          text: '1735: "PETITION TO SELL REAL ESTATE BY ALEXIS CONNARD, ALIAS LA FOREST." · 1739: "Acknowledgment of debt and mortgage by ALEXIS CONNARD AND WIFE to DR. GERARD PERY," signed Connard, Françoise Gonzalle, Roumier, Jahan, Henry.',
          highlight: 'The Connards were old French Louisiana, with roots running back through Mobile and the Arkansas Post and forty-six documents to their name in the colony\'s courts. But the ones from the years just before she married are not a picture of comfort: a petition to sell real estate in 1735, and by 1739 a debt secured against their property to a physician, Dr. Gérard Pery. Two useful things follow. The head of that house was ALEXIS CONNARD, "alias LA FOREST" — which makes JEAN, the man who raised her, someone else: a brother, a father, an uncle. And whoever took the orphan in was doing it while mortgaging his own house.'
        },
        {
          title: 'THE COURT NAMES HER OUTRIGHT — twice widowed by 1748',
          citation: 'French Superior Council, New Orleans — 3 August 1748, petition (Louisiana Historical Quarterly Vol. 20 no. 1, p. 215); Louisiana Historical Center, doc. 1748-08-03-03',
          text: 'Parties named: Antoine JOLY · Nicolas HENRY · Vincent Guillaume Le Senechal D\'AUBERVILLE · Pierre COUSIN · Jean Baptiste GARIC · Jean Baptiste RAGUET · and "RENARD, FRANÇOISE — WIDOW OF PIERRE COUSIN & ANTOINE JOLY."',
          highlight: 'Found 11 August 2026, and it does more than confirm the Cousin lead — it hands over an entire marriage nobody in this family knew about. The Superior Council\'s own index carries her, in its own words, as the widow of two men. She buried Pierre Cousin, married Antoine Joly, and buried him too, all inside about three years. Then she married the mason.'
        },
        {
          title: 'Her second husband — the marriage contract, 6 September 1747',
          citation: 'French Superior Council, New Orleans — Marriage Contract, 6 September 1747, seven pages (doc. 1747-09-06-01; WPA abstract card #30580); published in the Louisiana Historical Quarterly Vol. 18 no. 3, July 1935, p. 721. With the Joly will of 11 March 1748 (doc. 1748-03-11-02).',
          text: '"Marriage contract between ANTOINE JOLY and FRANÇOISE RENARD, WIDOW OF PIERRE COUSIN." Signatures copied onto the abstract card: "+ MARK of Antoine Joly" · "Françoise Renard" · Menkingle · Wiltz · Chantalou · Henry.',
          image: 'assets/img/renard-1747-marriage-contract.jpg',
          imageAlt: 'A typed WPA index card abstracting the 1747 marriage contract between Antoine Joly and Françoise Renard, with the parties\' signatures copied beneath in pencil',
          imageCredit: 'WPA abstract card, French Superior Council records — Louisiana Historical Center, via the Louisiana Colonial Documents Digitization Project.',
          highlight: 'SHE COULD WRITE AND HE COULD NOT. The clerk who copied the signatures onto this card recorded "+ Mark of Antoine Joly" — an illiterate man\'s cross — and directly beneath it, "Françoise Renard," written out in her own hand. A literate woman in colonial New Orleans in 1747 is not the common case, and it is the only thing in this archive that comes from her directly rather than being said about her. The contract also confirms the sequence outright: she came to that marriage already a widow.'
        }
      ],
      note: 'WHO CAME TO NEW ORLEANS, AND WHEN — the honest state of it. Her daughter\'s 1784 marriage act calls Étienne and Marie Françoise "naturales todos de esta Parroquia," natives of this parish. If that is right, neither of them crossed the ocean: they were born in New Orleans in the 1720s, and it was their PARENTS who came, in the town\'s founding years. Those parents cannot yet be named, and there is a hard reason why. The St. Louis church baptismal registers effectively begin in 1731; what came before is lost or fragmentary, and the 1788 fire took more. So the generation that actually made the crossing falls in the gap. Barring a notarial act, a Superior Council case or a passenger list, they may stay nameless — which is its own kind of answer.'
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
      given: 'John', alsoKnownAs: 'born Giovanni in Italian — and XHUAN, or JANI, in Arbërisht, the Albanian his village actually spoke', surname: 'Brunetti', sex: 'M',
      origin: 'Plataci, Cosenza, Calabria — via Chicago',
      birth: { date: '5 May 1893', place: 'Plataci, Cosenza, Calabria, Italy' },
      death: { date: '12 January 1987', place: 'New Orleans' },
      father: 'michelBrunetti', mother: 'domenicaForano',
      evidence: 'verified',
      branch: 'brunetti',
      immigrant: true,
      blurb: 'Left Italy as a young man, spent his twenties in Chicago, and turned up in New Orleans in time to marry a Dalmatian oyster family\'s daughter in June 1921. Apart from his own daughter\'s there is not another Brunetti birth in the Louisiana index — no sibling or cousin followed him south, so the surname ended with him here. It ends in one tomb, too: he lies in St. Louis No. 3 with his wife, his daughter, his son-in-law and his grandson.',
      records: [
        {
          title: 'HE OWNED THE CORNER — a paid tax bill, Mazant and Derbigny',
          citation: 'City of New Orleans, 1934 Real Estate Tax, bill no. 48051, assessment 16-A-11260, district 9-W square 724 — receipted November 1934 by the Deputy Comptroller, Department of Public Finances, Treasury Division. Family papers, photographed by Aaron Pedeaux, August 2026.',
          text: '"J. BRUNETTI ET ALS., N.O. LA. — SQ. 724, LOT A, MAZANT & DERBIGNY, 31 X 118." Total tax $67.83; final installment $22.61; interest 72 cents; total $68.55, paid November 1934.',
          image: 'assets/img/brunetti-1934-tax-bill.jpg',
          imageAlt: 'A City of New Orleans 1934 real estate tax bill made out to J. Brunetti et als. for Square 724, Lot A, at Mazant and Derbigny, measuring 31 by 118 feet',
          imageCredit: 'City of New Orleans, 1934 Real Estate Tax bill no. 48051 — Pedeaux family papers. Tap to enlarge.',
          highlight: 'THIS SCRAP OF GREEN PAPER ANSWERS A QUESTION THE FAMILY COULD ONLY HALF-ANSWER. Kevin knew his father grew up "on Mazant somewhere" before the family moved out to Chalmette, and no number went with it. The tax bill gives the corner: square 724, lot A, thirty-one feet of frontage by a hundred and eighteen deep, at Mazant and Derbigny. An immigrant who reached New Orleans by way of Chicago and married a Dalmatian oysterman\'s daughter in 1921 was a New Orleans property owner by 1934, paying his taxes on time in the middle of the Depression. "ET ALS" — et alii, and others — means he did not hold it alone. Two generations later his grandson Buddy was a child on that same corner.'
        },
        {
          title: 'THE TOMB — six people, one plot, and the whole descent in it',
          citation: 'Archdiocese of New Orleans, New Orleans Catholic Cemeteries burial register — St. Louis Cemetery No. 3, plot L3 SQ 5E / G ST. LOUIS AVENUE / 9. Searched 12 August 2026 (nolacatholiccem.discovereverafter.com, profiles 36915128–36915133).',
          text: 'Interred in this one space, in order of burial: VERONICA (TWINS) BRUNETTI, 19 May 1951 · VERONICA BRUNETTI, 25 Aug 1981, aged 79 — his wife, born Veronica Franovich · JOHN BRUNETTI, 14 Jan 1987, aged 93 · HERBERT JOSEPH PEDEAUX, 24 Jul 1992 — his son-in-law · HERBERT JOHN "BUDDY" PEDEAUX, 20 Feb 2009 — his grandson · VERONICA PEDEAUX, 10 Aug 2013, aged 89 — his daughter.',
          highlight: 'THE SIX PROFILE NUMBERS RUN CONSECUTIVELY — 36915128 through 36915133. The archdiocese entered this plot into its database as a single ledger page, which is what it is: one family\'s space, opened by the Brunettis and closed around the Pedeaux who married into them. Three generations of this tree are in it. Kevin\'s great-grandparents, his grandmother and grandfather, and his father are all in the same nine feet of ground on St. Louis Avenue. The ledger also settles two small things the site had wrong: he is not one of two Brunettis here but one of three, and his plot is shared, not separate from his daughter\'s.'
        },
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
        },
        {
          title: 'HIS BIRTH ACT — found in the Plataci register, 11 August 2026',
          citation: 'Comune di Plataci, Ufficio dello Stato Civile — Atti di Nascita 1893, ATTO N. 36. Tribunale di Castrovillari copy; FamilySearch collection 2043557, film "Plataci Nati 1874-1910", image 421 of 2,614.',
          text: '"L’anno milleottocentonovanta TRE, addì SETTE di MAGGIO, a ore antimeridiane nove e minuti trentacinque, nella Casa comunale. Avanti di me CRISPINO D’AGOSTINO, Sindaco ed Uffiziale dello Stato Civile del Comune di PLATACI, è comparso MICHELE BRUNETTI, di anni TRENTATRE, CIVILE, domiciliato in Plataci, il quale mi ha dichiarato che alle ore pomeridiane NOVE e minuti VENTI, del dì CINQUE del corrente mese, nella casa posta in VIA CAVOUR al numero NOVANTASEI, da DOMENICA TROJANO, sua moglie, donna di casa, seco lui convivente, è nato un bambino di sesso mascolino che egli mi presenta, e a cui dà il nome di GIOVANNI." Witnesses: Agostino Blumetti, 55, contadino; Salvatore Dramisino, 32, contadino. "Letto il presente atto agl’intervenuti, si è meco sottoscritto IL SOLO DICHIARANTE, e non gli altri, perchè ANALFABETI." Signed: Michele Brunetti · Crispino D’Agostino.',
          image: 'assets/img/brunetti-1893-birth-act.jpg',
          imageAlt: 'Act number 36 of the 1893 birth register of Plataci, recording the birth of Giovanni Brunetti on 5 May 1893',
          imageCredit: 'Comune di Plataci, Atti di Nascita 1893, atto n. 36 — Tribunale di Castrovillari copy, via FamilySearch. Tap to enlarge.',
          highlight: 'THE RECORD THIS ARCHIVE HAS BEEN CHASING SINCE THE FIRST SESSION. Born at TWENTY PAST NINE IN THE EVENING on 5 MAY 1893, in his own house at VIA CAVOUR 96, PLATACI. His father MICHELE BRUNETTI, aged THIRTY-THREE and described as CIVILE — a man of independent means — walked to the town hall two mornings later and registered him in person. Three things fall out of it. The mother was DOMENICA TROJANO, not "Forano": the 1921 New Orleans clerk misread a handwritten Trojano, and this family has carried the wrong surname for a century. Michele’s age gives him a birth year of about 1860, which matches the "Michele Brunetti, 40, civile" who witnessed a Plataci marriage in 1900 — the same man. And the closing line is the one to keep: only the declarant signed, "e non gli altri, perchè analfabeti" — the witnesses could not write, and MICHELE BRUNETTI COULD. His signature is at the foot of his son’s birth act.'
        },
        {
          title: 'The name his village would have used',
          citation: 'Arbëresh naming custom, from the research binder kept by his granddaughter Patricia Pedeaux Ruda, printed December 2010',
          text: 'Every Arbëresh person carries a legal Italian name and an Arbëresh one. Giuseppe is ZEF · Francesco is NXHIKU · Nicola is KOLL · Antonio is NTONI · Maria is MARIEJA — and GIOVANNI is XHUAN, or JANI.',
          highlight: 'So he was Giovanni on the paperwork, John in America, and almost certainly XHUAN or JANI to his own mother. Three names for one man, and the middle one — the one his village actually said out loud — is the one no record of his life anywhere in Louisiana would ever have written down.'
        },
        {
          title: 'What Plataci was, and still is',
          citation: 'Arbëresh background material in the same binder; corroborated by the parish acts quoted in Alicia Bodily\'s Plataci genealogy',
          text: 'The baptisms in Plataci\'s own parish books are recorded "secondo il rito greco" — by the Greek rite. The parish is San Giovanni Battista; the priests who sign the acts are archpriests named Chidichimo and Dramisino.',
          highlight: 'Plataci is an ARBËRESH village — one of the Italo-Albanian communities founded by refugees who crossed the Adriatic in the fifteenth century, after the Ottomans took Albania, and who have kept their language and their Byzantine rite ever since. That is why his people were Catholic but not Roman-rite, and why a Calabrian hill town five hundred miles from Albania was still speaking Albanian when he was born there in 1893.'
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
      occupation: 'Recorded as "civile" — a man of independent means, not a labourer. By 1893 an assessore of Plataci, and in later years the ordinary assessor deputising as MAYOR.',
      origin: 'Plataci, Cosenza, Calabria',
      birth: { date: 'about 1860', place: 'Plataci, Cosenza, Calabria, Italy' },
      evidence: 'verified',
      branch: 'brunetti',
      blurb: 'Named as John\'s father on the 1921 New Orleans marriage record, and as the "father Michele, Plataci" a nineteen-year-old Giovanni gave the Ellis Island officers in 1912. He stayed in the village; his son never went back.',
      note: 'Plataci\'s own civil registers (Cosenza province, from 1809) and parish books are the route to his dates and his own parents. The village is Arbëreshë — records may carry both Italian and Albanian name forms.'
    },

    domenicaForano: {
      children: [
        { id: 'johnBrunetti' }
      ],
      given: 'Domenica', surname: 'Trojano', alsoKnownAs: 'written FORANO on her son\'s 1921 New Orleans marriage record — a clerk\'s misreading, corrected 2026', sex: 'F',
      origin: 'Plataci, Cosenza, Calabria',
      birth: { date: 'about 1870', place: 'probably Plataci, Cosenza, Calabria, Italy' },
      evidence: 'verified',
      branch: 'brunetti',
      blurb: 'A housewife of via Cavour, Plataci, who at twenty past nine on the evening of 5 May 1893 gave birth to a son in her own house. Her husband walked to the town hall two days later and registered him. She was written into the New Orleans record twenty-eight years afterwards as "Forano," and stayed that way until her son\'s own birth act was read in 2026. She was a TROJANO — one of the oldest names in that village.',
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
      evidence: 'verified',
      branch: 'franovich',
      blurb: 'A Dalmatian oyster family\'s daughter from the lower delta, and the last of this family born at Buras. She was nine when her father died; her widowed mother brought the children up to New Orleans, and in 1921 she married John Brunetti, an Italian immigrant lately of Chicago. She was the first adult laid in the family tomb at St. Louis No. 3, and five more followed her into it.',
      records: [
        {
          title: 'Her burial — the first of the six',
          citation: 'Archdiocese of New Orleans, Catholic Cemeteries burial register — St. Louis No. 3, plot L3 SQ 5E / G ST. LOUIS AVENUE / 9, profile 36915131. Searched 12 August 2026.',
          text: 'VERONICA BRUNETTI — aged 79 — buried 25 August 1981, St. Louis Cemetery No. 3.',
          highlight: 'The age matches her March 1902 birth to the year. She went in six years ahead of her husband, and thirty-two years ahead of her daughter — the whole rest of the tomb filled in behind her.'
        },
        {
          title: 'In her father\'s household, aged eight',
          citation: 'United States Census, 1910 — Nairn, Plaquemines Parish, Louisiana',
          text: '"Tony Franovich, Sr," b. 1873 Louisiana; wife "Malonie"; children Nicole, VARONIKE, Lizie, Tony Jr.',
          highlight: 'THE RECORD THIS ENTRY ASKED FOR. Her place on the tree used to rest entirely on circumstance, and the note here said outright that the 1910 Plaquemines census "would settle it." It does: "Varonike" is Veronica, in the house with both parents, a year and a half before her father died. Upgraded from inferred to documented on 11 August 2026.'
        }
      ],
      sources: [
        { label: 'Find a Grave 282264581', url: 'https://www.findagrave.com/memorial/282264581/veronica-brunetti' }
      ],
      note: 'Not to be confused with her daughter, Veronica Marie Brunetti Pedeaux. The 1910 census of Nairn closes what used to be the weakest link on this branch — she is named in her father\'s household with her mother and three of her siblings.'
    },

    nicolaFranovich: {
      children: [
        { id: 'anthonyFranovich' },
        'Marie (b. 1876)',
        'Nicole (15 May 1881 – 5 May 1955) — married Antoinette Scobel; the "Antoinette Scobel Franovich" who lies at Our Lady of Good Harbor was this brother\'s wife',
        'Dominique'
      ],
      given: 'Nicola', alsoKnownAs: 'written Nicoll, Nicolle and Nicole in the American records', surname: 'Franovich', sex: 'M',
      origin: 'a Dalmatian family — settled at Buras, Plaquemines Parish',
      evidence: 'verified',
      branch: 'franovich',
      blurb: 'The Franovich who actually crossed, or the son of the one who did. He was raising children at Buras by the 1870s and married into the Buras family itself — the oldest name on that stretch of the lower delta.',
      records: [
        {
          title: 'Named as father on two of his sons\' death records',
          citation: 'Louisiana, Deaths, 1850–1875, 1894–1960 — Anthony Franovich, 19 July 1911, Buras; and Nicole Franovich, 5 May 1955, Buras',
          text: 'Anthony Franovich, d. 19 July 1911 at Buras, born 1873 at Buras — parents NICOLL FRANOVICH and JOSEPHINE BURAS. · Nicole Franovich, d. 5 May 1955 at Buras, b. 1881 — the same two parents, wife Antoinette Scobel.',
          highlight: 'Two independent death records, forty-four years apart, naming the same couple. That is what put this generation on the tree.'
        },
        {
          title: 'His household in the 1880 census',
          citation: 'United States Census, 1880 — Plaquemines Parish, Louisiana',
          text: 'Nicolle Franovich, with children Anthony (b. 1873), Marie (b. 1876) and Basille (b. 1879), all born in Louisiana.'
        }
      ],
      note: 'WHETHER HE HIMSELF CROSSED is not yet documented. The Dalmatian oystermen of Plaquemines were arriving from the 1840s on, and the 1900 census of that ward is full of men indexed as born in "Austria" — which is what Dalmatia was, under the Habsburgs. An Antonio Franovich who died in Orleans in 1902 at about 77 may be the immigrant of this family. Nicola himself has not yet been found in a census giving his own birthplace: that is the next document.'
    },

    josephineBuras: {
      children: [
        { id: 'anthonyFranovich' },
        'Marie · Nicole · Dominique — see Nicola Franovich'
      ],
      given: 'Josephine', surname: 'Buras', sex: 'F',
      origin: 'Buras, Plaquemines Parish',
      birth: { date: 'July 1862', place: 'Louisiana' },
      evidence: 'verified',
      branch: 'franovich',
      blurb: 'A Buras of Buras. The Dalmatian who married her was marrying into the oldest family on that stretch of river, and their son Anthony was born in the village that carries her name.',
      records: [
        {
          title: 'Named as mother on two sons\' death records',
          citation: 'Louisiana, Deaths, 1850–1875, 1894–1960 — Anthony Franovich (1911) and Nicole Franovich (1955), both of Buras',
          text: 'Both acts give the parents as Nicoll Franovich and JOSEPHINE BURAS.'
        },
        {
          title: 'Her own parents and a brother',
          citation: 'United States Census, 1900 — Wards 5 and 10, Plaquemines Parish',
          text: 'Josephine Franovich, born July 1862 in Louisiana; parent ARTIMISE BURAS; sibling BAZILE BURAS.',
          highlight: 'One line of a census sheet reaching a further generation back — and it is a Buras generation, which is where this branch stops being an immigrant story and starts being a delta one.'
        }
      ],
      note: 'THE TOWN AND THE NAME. Buras, Louisiana, is universally said locally to be named for the Buras family who settled there — and Josephine is a Buras of Buras, born there in 1862. This site has not yet pulled a published source for the town\'s naming, so it is recorded here as the local account rather than as a documented fact. Her mother Artimise and brother Bazile are the next people to chase.'
    },

    anthonyFranovich: {
      father: 'nicolaFranovich', mother: 'josephineBuras',
      children: [
        'Dominick (1892–1986)',
        'Anthony L. Jr. (1895–1975)',
        'Elizabeth “Isabelle” (b. 1897)',
        'Nicole — with his own father\'s name, in the 1910 Nairn household',
        { id: 'veronicaFranovich' }
      ],
      given: 'Anthony L.', suffix: 'Sr.', surname: 'Franovich', sex: 'M',
      origin: 'Born at Buras, Plaquemines Parish — of a Dalmatian family',
      birth: { date: '22 September 1873', place: 'Buras, Plaquemines Parish' },
      death: { date: '19 July 1911', place: 'Plaquemines Parish' },
      evidence: 'verified',
      branch: 'franovich',
      blurb: 'Dead at thirty-eight, in the village he was born in. An oyster family\'s son of the lower delta, married at twenty-one, five children, and in 1910 living at Nairn with his father-in-law Alfred Moizant a few doors along the same river road. Buried at Our Lady of Good Harbor Catholic Cemetery, Buras; the headstone reads "Age 38 years."',
      records: [
        {
          title: 'HIS DEATH RECORD — the one that settled where he was born',
          citation: 'Louisiana, Deaths, 1850–1875, 1894–1960 — Anthony Franovich, 19 July 1911, Buras, Plaquemines Parish',
          text: 'Died 19 July 1911 at Buras. BORN 1873 AT BURAS, LOUISIANA. Parents: NICOLL FRANOVICH and JOSEPHINE BURAS.',
          highlight: 'For two years this page said it was unknown whether he was born in Dalmatia or in Louisiana. He was born at Buras. The crossing belongs to his father\'s generation, not his — and the same line hands over both his parents.'
        },
        {
          title: 'His own household, 1910 — the record that places Veronica',
          citation: 'United States Census, 1910 — Nairn, Plaquemines Parish, Louisiana',
          text: '"Tony Franovich, Sr," b. 1873 Louisiana; wife "Malonie" [Melanie], b. 1877; children Nicole, VARONIKE, Lizie, and Tony Jr.',
          highlight: '"Varonike" is Veronica, aged eight, in her father\'s house. Her place on this tree used to rest on circumstance — where she was born, when her mother was widowed, who the family lived among. This is a record that simply names them together. A year and a half later he was dead.'
        },
        {
          title: 'In his father\'s house, aged seven',
          citation: 'United States Census, 1880 — Plaquemines Parish',
          text: 'Anthony Franovich, b. 1873 Louisiana, in the household of Nicolle Franovich, with Marie (1876) and Basille (1879).'
        }
      ],
      sources: [
        { label: 'Find a Grave 74161215', url: 'https://www.findagrave.com/memorial/74161215/anthony-l-franovich' }
      ],
      note: 'HIS MARRIAGE was in 1894 — both his and Melanie\'s 1900 census entries give the year, which tightens the old estimate of "about 1890–92." The act itself is still held only by the Clerk of Court at Belle Chasse; the Louisiana state marriage index covers Orleans Parish only, which is why it has never turned up in a search.'
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
        'Clémentine J. (in the 1900 census, named for her grandmother in Bordeaux)',
        'Amelia Marcellin (1881–1928)',
        'Louise (1883–1972)',
        'Annicia (1886–1964) — married Hyacinthe Scobel',
        'Adeline “Dina” (1888–1966)',
        'Angeline (1892–1970) — married John Halckias',
        'LEON MOIZANT — a son, named in his father\'s 1933 obituary; this family had been recorded as daughters only',
        'and four more daughters known so far only by their married names, from the same obituary: Mrs Edward Rondey · Mrs John Guillaume · Mrs Anthony Roubaud · Mrs J. L. Pareti'
      ],
      given: 'Alfred Leopold', surname: 'Moizant', sex: 'M',
      father: 'alfredMoizantPere', mother: 'clemenceChapeau',
      origin: 'Bordeaux, France',
      birth: { date: 'January 1838', place: 'Bordeaux, France' },
      death: { date: '23 February 1933', place: 'Orleans Parish' },
      evidence: 'verified',
      branch: 'moizant',
      immigrant: true,
      blurb: 'A Bordeaux man who died at ninety-five in New Orleans, having outlived his wife, several of his children, and the century he was born in. He married in 1866, raised a large family down the river in Plaquemines, took American citizenship at sixty-two after thirty-four years here, moved up to the city in old age, and was still registering to vote at ninety-three. Buried in St. Louis No. 3 with his wife — Square 3, facing O, Alley de la Vierge, plot 11.',
      records: [
        {
          title: 'THE PLOT, CORRECTED — and Victoria is in it',
          citation: 'Archdiocese of New Orleans, Catholic Cemeteries burial register — St. Louis Cemetery No. 3, plot L3 SQ 03 / O ALLEY DE LA VIERGE / 11; profiles 36892936 and 36892935. Searched 12 August 2026.',
          text: 'ALFRED L MOIZANT — buried 24 February 1933. · "WID VICTORIA MOIZANT" — buried 10 October 1928. Two burials, one plot, five years apart.',
          highlight: 'This page used to place him at "Square 3, Section B, Lot 11," beside a daughter. The archdiocese\'s own register puts him on the ALLEY DE LA VIERGE, facing O, plot 11 — and the person already lying there was his wife, Victoria, who had gone in five years before him. Corrected here rather than quietly overwritten. One oddity is left standing on purpose: the clerk entered her as "Wid" — widow — in 1928, when Alfred still had five years to live. Either she carried a widowhood from before this marriage, or the entry was written up after 1933 and back-styled. The register does not say, so neither does this page.'
        },
        {
          title: 'HIS PARENTS, AND BORDEAUX',
          citation: 'Louisiana, Orleans, Death Records and Certificates, 1835–1954 — Alfred L. Moizant, 23 February 1933; with his obituary, New Orleans, 23 February 1933 (GenealogyBank), and his voter registration of 9 December 1931',
          text: 'Death record: Alfred L. Moizant, died 23 February 1933, born 1838 in France — parents ALFRED MOIZANT and CLEMENCE CHAPEAU. · Obituary, 23 February 1933: born about 1838 at BORDEAUX, died the 22nd. · Voter registration, 9 December 1931: birthplace "South France."',
          highlight: 'THIS CLOSES THE AIRPORT QUESTION FOR GOOD. This page has carried an open item for two years — "Alfred\'s French birth record or passenger manifest would end it." His death record and his obituary do the job between them: he was a Bordeaux man, son of Alfred Moizant and Clémence Chapeau. The aviator John Moisant\'s father Medard was born in Quebec. Two families, now separated by named parents and named birthplaces instead of by argument. And one small confirmation sits in his own household — the daughter the 1900 census calls "Clemantine," named for a grandmother in Bordeaux she would never meet.'
        },
        {
          title: 'Naturalized at sixty-two',
          citation: 'Louisiana Naturalization Records, 1812–1932 — Alfred Moizant, 2 March 1900',
          text: 'Naturalization, 2 March 1900, Louisiana. Birthplace France.',
          highlight: 'He had been in Louisiana since at least 1866, the marriage year his own census entry gives. He waited thirty-four years to become an American, and then did it in the same year the census taker found him at the bottom of the river with six daughters at home.'
        },
        {
          title: 'A life that moved upriver',
          citation: 'United States Censuses of 1900, 1910 and 1930; Orleans and St. Tammany Voter Registration Records, 1867–1949',
          text: '1900 — Wards 5 and 10, Plaquemines Parish: Alfred Moizant, b. January 1838 in France, married 1866, with Amelie, Angeline, Clemantine, Louise, Adeline and Anitia at home. · 1910 — NAIRN, Plaquemines Parish. · 1930 — New Orleans. · Registered to vote in Orleans Parish on 8 October 1923, and again on 9 December 1931.',
          highlight: 'In 1910 he was living at Nairn — the same small delta village as his son-in-law Tony Franovich, in the same census year. He was still turning up to register to vote at ninety-three, two years before he died.'
        }
      ],
      sources: [{ label: 'Find a Grave 143366668', url: 'https://www.findagrave.com/memorial/143366668' }],
      note: 'THE MOISANT STORY, SETTLED. The family held that the Moizants were kin to John Moisant, the aviator the airport was named for. It is not so, and it is no longer a matter of inference. Alfred was born at Bordeaux to Alfred Moizant and Clémence Chapeau; the aviator\'s father Medard Moisant was born in Quebec in the same year and went to Illinois — different continents\' migrations, different parents, no link possible. In ninety years of Louisiana records the MOIS- and MOIZ- spellings never once cross. The story probably took hold because a real New Orleans Moisant family, descended from the aviator\'s Quebec cousins, does exist.'
    },

    alfredMoizantPere: {
      children: [ { id: 'alfredMoizant' } ],
      given: 'Alfred', surname: 'Moizant', sex: 'M',
      origin: 'Bordeaux, France',
      evidence: 'verified',
      branch: 'moizant',
      blurb: 'A name from Bordeaux, recorded in New Orleans ninety-five years later by whoever gave the information at his son\'s death. Nothing else about him is known yet.',
      records: [
        {
          title: 'Named at his son\'s death',
          citation: 'Louisiana, Orleans, Death Records and Certificates, 1835–1954 — Alfred L. Moizant, 23 February 1933',
          text: 'Parents of the deceased: ALFRED MOIZANT and Clemence Chapeau.'
        }
      ],
      note: 'The next document is in France, not Louisiana: a Bordeaux birth or marriage act of the 1830s. The Gironde departmental archives have their registers online and indexed, which makes this one of the more findable of the remaining European questions on this tree.'
    },

    clemenceChapeau: {
      children: [ { id: 'alfredMoizant' } ],
      given: 'Clémence', surname: 'Chapeau', sex: 'F',
      origin: 'Bordeaux, France',
      evidence: 'verified',
      branch: 'moizant',
      blurb: 'Her son crossed an ocean and lived to ninety-five; her name crossed with him and came out in a New Orleans death record in 1933. A granddaughter she never met was christened Clémentine for her.',
      records: [
        {
          title: 'Named at her son\'s death',
          citation: 'Louisiana, Orleans, Death Records and Certificates, 1835–1954 — Alfred L. Moizant, 23 February 1933',
          text: 'Parents of the deceased: Alfred Moizant and CLEMENCE CHAPEAU.'
        },
        {
          title: 'And in a granddaughter\'s name',
          citation: 'United States Census, 1900 — Wards 5 and 10, Plaquemines Parish',
          text: 'In Alfred Moizant\'s household: "Clemantine J. Moizant."',
          highlight: 'Not proof of anything, but the kind of detail that makes a name into a person: somewhere in the Plaquemines marsh in the 1880s, a French immigrant named a daughter after his mother.'
        }
      ]
    },

    victoriaDaroca: {
      children: [
        'Delphine Marie (1867–1943)',
        { id: 'melanieMoizant' },
        'Clémentine J. (in the 1900 census, named for her grandmother in Bordeaux)',
        'Amelia Marcellin (1881–1928)',
        'Louise (1883–1972)',
        'Annicia (1886–1964) — married Hyacinthe Scobel',
        'Adeline “Dina” (1888–1966)',
        'Angeline (1892–1970) — married John Halckias',
        'LEON MOIZANT — a son, named in his father\'s 1933 obituary; this family had been recorded as daughters only',
        'and four more daughters known so far only by their married names, from the same obituary: Mrs Edward Rondey · Mrs John Guillaume · Mrs Anthony Roubaud · Mrs J. L. Pareti'
      ],
      given: 'Victoria Juliene', surname: 'Daroca', sex: 'F',
      birth: { date: '9 January 1850' },
      death: { date: '9 October 1928' },
      evidence: 'confirm',
      branch: 'moizant',
      blurb: 'Buried 10 October 1928 in St. Louis Cemetery No. 3, Square 3, facing O, Alley de la Vierge, plot 11 — the plot her husband joined five years later.',
      records: [
        {
          title: 'Her burial',
          citation: 'Archdiocese of New Orleans, Catholic Cemeteries burial register — profile 36892935. Searched 12 August 2026.',
          text: 'Entered in the register as "WID VICTORIA MOIZANT," buried 10 October 1928.',
          highlight: 'She died on the 9th and went into the ground on the 10th — the register\'s date and this page\'s date agree. See her husband\'s entry for the "Wid" puzzle, which is not resolved.'
        }
      ],
      sources: [
        { label: 'Find a Grave 143366666', url: 'https://www.findagrave.com/memorial/143366666' },
        { label: 'Catholic Cemeteries burial record', url: 'https://nolacatholiccem.discovereverafter.com/profile/36892935' }
      ]
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
          title: 'BEFORE THE UNION CARD — a motor repairer at twenty-two, living with his parents',
          citation: 'United States Census, 1950 — New Orleans, Orleans Parish, ED 36-460, page 77, line 5 (NARA T628); household at 1607 Piety Street',
          text: 'JOHN R. LARMANN, 22, son, married — occupation MOTOR REPAIRER, industry ELECTRIC MOTOR REPAIR SHOP. In the house with him: his father Charles Emile, 47, a bookkeeper; his mother Johanna, 43; his wife ANN G., 21, a cashier in a retail department store; and their son JOHN R. JR., aged one.',
          highlight: 'THE TRADE, CAUGHT ONE STEP EARLY. This page has always carried him as an electrician of IBEW Local 130, retired 1988. In April 1950 he is not there yet — he is twenty-two, three years married, rewinding electric motors in a repair shop, with a baby in the house and no place of his own. Ann is working a register. They are living with his parents on Piety Street, in the Bywater, a few blocks from where his great-grandfather Casper died. Everything the family became is in that line, before any of it had happened.'
        },
        {
          title: 'WHY HE IS NOT IN THE ARCHDIOCESE\'S DATABASE — and why that proves nothing about him',
          citation: 'Archdiocese of New Orleans, Catholic Cemeteries burial search (nolacatholiccem.discovereverafter.com), tested 12 August 2026 against 173 sampled St. Vincent burials and eight family surnames',
          text: 'The archdiocese publishes a searchable burial register for six cemeteries — St. Charles, St. Joseph, St. Louis, St. Patrick, St. Roch and St. Vincent. He is not in it. Neither is his wife, nor any Goubler, nor nine of the ten Wellmeyers. The reason is in the plot codes: every St. Vincent burial the database returns is numbered V1 or V2. Across 173 records pulled in two separate samples, not one carried a V3.',
          highlight: 'ST. VINCENT DE PAUL NO. 3 IS NOT IN THE DATABASE. That is where he is, where Ann is, where the Wellmeyer tomb stands and where the Goublers lie — the oldest ground in that complex, and the one section the archdiocese has not loaded. So an empty search result for this family means the cemetery was never indexed, not that the grave is not there. Kevin has stood at the Wellmeyer tomb and photographed it. This is worth writing down as method, not just as trivia: a silent gap in a database is the easiest way in genealogy to turn a record you have not found into a person you decide did not exist. Test the index before you trust its zeroes.'
        },
        {
          title: 'Louisiana marriage record',
          citation: 'Orleans Parish, July 1947 — p. 3644',
          text: 'WELLMEYER, ANN G × LARMANN, JOHN R.'
        },
        {
          title: 'THE CHURCH — St. Cecilia, in the Bywater',
          citation: 'Family testimony (Kevin Pedeaux, August 2026); parish history and closure from the Archdiocese of New Orleans',
          text: 'They were married at ST. CECILIA, 4201 North Rampart Street — the Bywater parish. Sixty-three years of marriage started there.',
          highlight: 'AND THE PARISH ENDED UP WHERE THEIR GRANDSON WOULD MARRY. St. Cecilia closed in 2000, its attendance gone; the building is now the Shirley Landry Benson PACE Center, a day programme for the elderly. Its congregation was merged with Annunciation, St. Gerard and Sts. Peter and Paul into a single new parish — Blessed Francis Xavier Seelos — housed in the old ST. VINCENT DE PAUL church at 3051 Dauphine. That is the church Kevin and Lauren were married in. Nobody chose it for that reason. See the map.'
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
          title: 'HIS OWN HOUSE, AND HIS TRADE — 1607 PIETY STREET, APRIL 1950',
          citation: 'United States Census, 1950 — New Orleans, Orleans Parish, ED 36-460, page 77, lines 3–7 (NARA T628). House number 1607, dwelling 64; the street is written vertically in column 1 as "Piety." Read off the sheet 12 August 2026.',
          text: 'Five people, one house, three generations. CHARLES EMILE LARMANN, 47, head — BOOKKEEPER, AUTO REPAIR SHOP. JOHANNA, 43, his wife. JOHN R. LARMANN, 22, son, married — MOTOR REPAIRER, ELECTRIC MOTOR REPAIR SHOP. ANN G. LARMANN, 21, daughter-in-law, married — CASHIER, RETAIL DEPARTMENT STORE. JOHN R. LARMANN JR., aged 1, entered as grandson.',
          highlight: 'THIS IS THE ORPHAN\'S OWN HOUSE. The boy who lost his father at eighteen months and was raised by two aunts on Franklin Avenue is here at forty-seven, head of a household with his son, his son\'s wife and his first grandchild under the roof. It also gives three occupations this tree did not have. Charles kept books for an auto repair shop. His son John — who would spend his working life as an electrician of IBEW Local 130 — was at twenty-two repairing electric motors, which is the trade one step before the union card. And Ann Wellmeyer, twenty-one and a year into her marriage, was working a department store register. The neighbours on this page live at 1615 and 1511 Piety, and both numbers still stand on that block today — Bywater again, four streets from where Casper died.'
        },
        {
          title: 'THE AVENUE CHANGED ITS NAME THREE TIMES — and both enumerators were right',
          citation: 'New Orleans Public Library / City Archives, "Alphabetical Index of Changes in Street Names, Old and New, Period 1852 to Current Date, Dec. 1st 1938" (nolacityarchives.org/changes-in-street-names) — verified directly, 12 August 2026. Department of Public Works ordinance card catalog, F streets, card "FRANKLIN AVE. (Franklin Walk)", transferred to the City Archives 2020.',
          text: 'ENGHEIN STREET → LAFAYETTE AVENUE, 3rd Municipal District, by Ordinance 395 C.C. of 20 November 1852. · LAFAYETTE AVENUE → ALMONASTER AVENUE, by Ordinance 7742 C.C.S. of 20 FEBRUARY 1924 — the index carries the change twice, once under each name. · ALMONASTER AVENUE → FRANKLIN AVENUE, by Ordinance 1215 M.C.S. of 31 OCTOBER 1957, for "that portion of Almonaster Ave. ext. fr. No. Roman St. to the Miss. River."',
          image: 'assets/img/franklin-ave-1957-ordinance-card.jpg',
          imageAlt: 'A typed New Orleans Department of Public Works index card headed FRANKLIN AVE. (Franklin Walk), with a later bold entry reading "Almonaster Ave. now Franklin Ave. - that portion of Almonaster Ave. ext. fr. No. Roman St. to the Miss. River -, Ord. #1215 MCS, dtd. 10/31/57."',
          imageCredit: 'New Orleans Department of Public Works street ordinance card catalog, City Archives, New Orleans Public Library. Tap to enlarge.',
          highlight: 'THIS IS WHY THE ADDRESS LOOKED UNFINDABLE, AND IT CLEARS BOTH CENSUS TAKERS. The 1910 enumerator wrote "Lafayette Street" because in 1910 the street WAS Lafayette Avenue — it had been since 1852. The 1940 enumerator wrote "Almonaster" because by 1940 it WAS Almonaster Avenue — renamed sixteen years earlier. Neither man made a mistake; the avenue simply changed its name under the family twice, and took the name Franklin only in 1957, ten years after Leontine Moore died on it. The card above is the city\'s own note of the last change. One more row from the same archive ties it straight to these census pages: the companion index of street-NUMBER changes lists "Burgundy — Districts 2, 3 — cross street LAFAYETTE, new name ALMONASTER AVE. — new hundred block 2600." That is the exact adjacency both enumerators recorded, thirty years apart, and the exact corner where 2602 Burgundy stands beside 927 Franklin today. ONE HONEST LIMIT: the 1852 and 1924 legs were read in the archives\' own published index; the 1957 leg comes from the Public Works card catalog, an official finding aid one step removed from the ordinance text, which is not online and would have to be pulled at 219 Loyola Avenue.'
        },
        {
          title: 'THE AUNTS\' HOUSE, FOUND — 927 FRANKLIN AVENUE',
          citation: 'United States Census, 1910 — New Orleans Ward 9, ED 132, sheet 7A, dwelling 126, family 142 (NARA T624). United States Census, 1940 — New Orleans Ward 9, ED 36-246, Tract 12 part, sheet 11A, line 38, household 255 (NARA T627). Both read off the original images, 12 August 2026; street names confirmed against present-day addressing and the surveyed Franklin Avenue × Burgundy Street intersection.',
          text: '1940 — house 727: LEONTINE MOORE, 60, head, single, with her sister LOUISE MOORE, 62. They OWNED it, valued at $2,200, and had been in it since at least 1935. The enumerator wrote the street as "Almonaster." · 1910 — house 927, two blocks up: their widowed mother VALENTINE MOORE, 62, head, with Louise, 30, and Leontine, 27, at home. Charles was seven. That enumerator wrote the street as "Lafayette Street."',
          highlight: 'THREE NAMES, ONE AVENUE — AND THE HOUSE NUMBERS PROVE IT. The family only ever remembered "Franklin Avenue," and neither census sheet says Franklin. The addresses looked unmappable: today\'s Lafayette Street runs through the Central Business District, a mile and a half outside Ward 9. What settles it is the geometry, which cannot be argued with. On the 1910 sheet the enumerator wrote houses 923, 925 and 927, then turned a corner and began the 2600 block of BURGUNDY. On the 1940 sheet the same thing happens — a 700-and-900-block run beside a 2600-block Burgundy run. Today 923, 925 and 927 FRANKLIN AVENUE all exist, 2602 Burgundy Street stands 56 METRES away, and Franklin Avenue crosses Burgundy at exactly that corner. The house numbers, the cross street, the ward and the block all agree; only the name on the page changed. Kevin knew independently that this corridor once carried the Almonaster name, and the record bears him out. AND THE TWO ADDRESSES DATE EACH OTHER. John Larmann Sr., born 1926, told his grandson he visited the aunts at 927 — so those visits fall before about 1935, because the 1940 sheet has the sisters settled at 727 and says they had been there since 1935. Read together: 927 is the house Charles Emile was raised in and the house his son remembered as a boy; 727 is where the two sisters ended, owning it outright, and where they died in 1947 and 1948. The house number on that 1940 line was checked digit by digit against 919, 923 and 925 elsewhere on the same sheet — their nines are looped, and this seven is not.'
        },
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
      evidence: 'verified',
      branch: 'lemoine',
      blurb: 'The Navy man in Arlington. A father at nineteen, and at sea for the rest of it: Johanna\'s mother left when the children were young, Robert was away in the Navy, and his mother Poupone stepped in to raise them. What sent the children to the orphanage anyway is now an open question — it was long assumed to be Poupone\'s death, but she lived until 1938, so it was not that. Robert made the Navy his life and rose to chief commissary steward, the man in charge of feeding a warship. He lies in Arlington National Cemetery, section 34, grave 1964.',
      records: [
        {
          title: 'His headstone — Arlington National Cemetery',
          citation: 'Army Cemeteries Explorer, section 34, grave 1964, interred 23 November 1949',
          text: 'ROBERT LEMOINE · LOUISIANA · CCS · US NAVY · WORLD WAR I · MAY 7 1888 · NOVEMBER 20 1949.',
          highlight: 'CCS is the Navy rating chief commissary steward. The family remembered him as "head of all the foods and stuff — commissary something." The stone says exactly that.'
        },
        {
          title: 'Marriage — Orleans Parish, 1906 — the act that names his parents',
          citation: 'Louisiana, Parish Marriages, 1787–1958 — Orleans, 22 May 1906, p. 962 (FamilySearch 1:1:QKJH-M2WC); civil index Vol. 27, p. 962',
          text: 'HANLEY, AGNES MARGARET × LEMOINE, ROBERT — 1906.',
          highlight: 'The year before Johanna\'s birth. He was eighteen.'
        },
        {
          title: 'The battleship spoon',
          citation: 'Family keepsake, photographed August 2026 — see the research page',
          text: 'A souvenir spoon engraved U.S. BATTLESHIP MAINE — 6682 TONS, kept in the family with the story that the Maine was his ship.',
          highlight: 'He was nine when the first Maine exploded at Havana in 1898 — but a second USS Maine served from 1902 until 1920, and his service card only accounts for 1917 onward. The four years between his enlistment in October 1913 and the war are still blank, and that is exactly where a Maine posting would sit. The family story is now possible in a way it was not before, and the muster rolls for 1913–17 would settle it.'
        },
        {
          title: 'HIS SERVICE CARD — the whole war, ship by ship',
          citation: 'Louisiana, World War I Service Records, 1917–1920 — Orleans, Navy Records; Louisiana State Archives, via FamilySearch (1:1:Q2TY-5CYY, image 3822 of 6,940)',
          text: 'LEMOINE ROBERT · Service No. 181-02-79 · enlisted Receiving Station New Orleans, La., 31 October 1913, aged 25 years 5 months, rating BAKER 2 CLASS, U.S.N. · address 5608 Camp St., New Orleans. — USS NEW YORK, 6 Apr 1917 to 31 Jul 1917, served as COMMISSARY STEWARD, 178 days. Discharged 31 Jul 1917. Reenlisted 1 Aug 1917 at New York, N.Y. — USS NEW YORK, 1 Aug 1917 to 15 Sep 1917. — USS UTAH, 15 Sep 1917 to 11 Nov 1918, CHIEF COMMISSARY STEWARD, 406 days. — Date of discharge 18 Aug 1919, Receiving Ship New Orleans, La. Rating at discharge: CHIEF COMMISSARY STEWARD.',
          image: 'assets/img/lemoine-1913-service-card.jpg',
          imageAlt: 'A typed Louisiana World War I service card for Robert Lemoine, listing his enlistment at New Orleans in 1913 and his service aboard USS New York and USS Utah',
          imageCredit: 'Louisiana, World War I Service Records, 1917–1920, Orleans Navy Records — Louisiana State Archives, via FamilySearch. Tap to enlarge.',
          highlight: 'Two dates in this card are not coincidences. His wartime service opens on 6 APRIL 1917 — the day the United States declared war on Germany — and his last ship\'s entry closes on 11 NOVEMBER 1918, the Armistice. In between he went from a New Orleans baker\'s rating to chief of a battleship\'s commissary: the man responsible for feeding a thousand-man crew. The stone at Arlington reads CCS. This is the paperwork behind those three letters, and it also gives his enlistment date exactly — 31 October 1913, not "around 1906" as this site previously guessed.'
        },
        {
          title: 'Mare Island — the 1930 census, Vallejo, California',
          citation: 'United States Census, 1930 — Vallejo, Solano County, California; sheet 4A, line 38 (NARA T626)',
          text: 'ROBERT LEMOINE, 41, born Louisiana, married, head of household — father born Louisiana, mother born Louisiana. Wife: SOPHIE LEMOINE, 43, born NORWAY. Also in the house: Mary Anderson, 37, born Austria.',
          highlight: 'Seventeen years into the Navy and three thousand miles from Plaquemines. Vallejo is MARE ISLAND, the Navy yard on San Francisco Bay — so this is a posting, not a move. It also puts a face on the second marriage the family only half-remembered: Sophie was NORWEGIAN, ten months older than him, and a Mary Anderson was living with them, which is very likely her sister — Anderson was Sophie\'s own maiden name. His parents are both entered as Louisiana-born, quietly corroborating Alonzo and Poppone a generation back.'
        },
        {
          title: 'Washington, and why he lies at Arlington',
          citation: 'United States Census, 1940 — Tract 96, Police Precinct 11, District of Columbia',
          text: 'Robert Lemoine, born 1888, Louisiana — resident in the District of Columbia.',
          highlight: 'By 1940 he had come off the ships and was living in Washington, which is the missing step between a New Orleans boyhood and a grave in Virginia. He died in 1949 and was buried at Arlington on 23 November. The arc runs Camp Street to Mare Island to the capital.'
        },
        {
          title: 'Where the Utah was, while he was aboard her',
          citation: 'Dictionary of American Naval Fighting Ships, "Utah I (Battleship No. 31)," Naval History and Heritage Command',
          text: 'USS Utah reached Berehaven, Bantry Bay, Ireland, on 10 September 1918 and became flagship of Rear Admiral Thomas S. Rodgers, Commander, Battleship Division Six. With Oklahoma and Nevada she operated from Bantry Bay until the armistice of 11 November 1918, covering the Allied convoys approaching the British Isles against any surface attack on the troop transports.',
          highlight: 'So the last two months of his war were spent in Irish waters, on the flagship of an American battleship division guarding the convoys that carried the AEF to France. His service entry for the Utah ends on the same day the guns stopped. NOTE ON WHAT IS NOT CLAIMED: USS New York went to Scapa Flow with the British Grand Fleet in December 1917 — after he had already transferred off her. He was not there.'
        }
      ],
      sources: [
        { label: 'Army Cemeteries Explorer — his grave record', url: 'https://ancexplorer.army.mil/publicwmv/' }
      ],
      note: 'CONFIRMED IN PRINT, August 2026: Johanna\'s own December 1992 obituary calls her "daughter of the late Robert Lemoine." His own November 1949 notice gives his age as 61 — exact for a man born 7 May 1888 — names his wife Sophie A. Lemoine and his brother Eugene, and ends "Interment Arlington National Cemetery." His fatherhood of Johanna is therefore no longer only family testimony. It is consistent with every record found — and awaiting one civil document, Johanna\'s 1924 marriage licence application, for full verification. The timeline: married Agnes at eighteen in 1906, Johanna born the next January, the babies Robert and Agnes in 1909 — the infant dead by November — and by the April 1910 census Agnes is gone from Louisiana while his mother stands with the children. His remarriage to Sophie Anderson (Judy\'s notes) is not in the Orleans index; a Navy man could have married anywhere. Whether the second USS Maine was truly his ship awaits his muster rolls.'
    },

    stephenHanley: {
      children: [ { id: 'agnesHanley' } ],
      given: 'Stephen D.', surname: 'Hanley', sex: 'M',
      evidence: 'verified',
      branch: 'lemoine',
      blurb: 'Agnes\'s father, and the reason this family is Irish at all. He appears on his daughter\'s 1906 marriage act and nowhere else yet — but a Hanley buried from St. Alphonsus, the old Irish Channel church, is exactly what the surname promises.',
      records: [
        {
          title: 'Named at his daughter\'s marriage',
          citation: 'Louisiana, Parish Marriages, 1787–1958 — Orleans, 22 May 1906, p. 962',
          text: 'On the act with the couple: STEPHEN D. HANLEY and MARY C. REED — the bride\'s parents.',
          highlight: 'Found 12 August 2026. His name had been an open question on this site: "Agnes Hanley\'s own people — her parents, her birth date." Half of it is answered by a record we had already cited for something else and never read all the way down.'
        }
      ]
    },

    maryReed: {
      children: [ { id: 'agnesHanley' } ],
      given: 'Mary C.', surname: 'Reed', sex: 'F',
      evidence: 'verified',
      branch: 'lemoine',
      blurb: 'Agnes\'s mother. Named once, on her daughter\'s marriage act of 1906, when that daughter was sixteen years old.',
      records: [
        {
          title: 'Named at her daughter\'s marriage',
          citation: 'Louisiana, Parish Marriages, 1787–1958 — Orleans, 22 May 1906, p. 962',
          text: 'On the act with the couple: Stephen D. HANLEY and MARY C. REED — the bride\'s parents.'
        }
      ]
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
      father: 'stephenHanley', mother: 'maryReed',
      evidence: 'verified',
      branch: 'lemoine',
      blurb: 'Johanna\'s mother — SIXTEEN YEARS OLD when she married at Orleans in May 1906, a mother by the next January, and gone from her first family within four years. The family kept it plainly: "she didn\'t die young — she just left them." She married William Winstine and raised a second family in the same city, and when she died in 1964 her obituary named all three of her children together — Johanna first.',
      records: [
        {
          title: 'Marriage — Orleans Parish, 1906, read in full',
          citation: 'Louisiana, Parish Marriages, 1787–1958 — Orleans, 22 May 1906, p. 962 (FamilySearch 1:1:QKJH-M2WC); civil index Vol. 27, p. 962',
          text: 'ROBERT LEMOINE, aged 21, son of ANAZAN [Alonzo] LEMOINE and GENEVIEVE ROUSSEL × AGNES MARGARET HANLEY, aged 16. Also on the record: STEPHEN D. HANLEY and MARY C. REED — her parents.',
          highlight: 'THE SAME RECORD, READ ALL THE WAY DOWN. This site has cited this marriage since the beginning and never looked past the two names in the index. It carries FOUR parents. Hers were STEPHEN D. HANLEY and MARY C. REED — which closes an open question that has been on the field-notes page for months. And it carries their ages: she was SIXTEEN, and Johanna was born less than eight months later. Robert is entered as twenty-one, but his 1913 Navy card gives his age as twenty-five years five months in October of that year, which puts his birth in May 1888 and makes him EIGHTEEN at this wedding, not twenty-one. A groom of eighteen needed his parents\' consent in Louisiana. A groom of twenty-one did not.'
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
      occupation: 'DRAUGHTSMAN — read off the 1900 census in his own enumerator\'s hand. The family remembered "architect"; the record says the man who drew the plans.',
      birth: { date: '26 August 1871', place: 'New Orleans' },
      death: { date: '12 February 1904', place: 'Orleans Parish' },
      father: 'johnCasparLarmann', mother: 'emilyMevers',
      evidence: 'verified',
      branch: 'larmann',
      blurb: 'Dead at thirty-two, six weeks after his sixth child was born. His widow raised six children alone; the family record his daughter Esther kept is how all of their dates survived. The eldest of Casper\'s ten, and the only one of them on this line of descent.',
      records: [
        {
          title: 'WHERE HE LIVED — 922 PORT STREET, read off the same sheet',
          citation: 'United States Census, 1900 — Louisiana, Orleans, ED 85, 4th Precinct, New Orleans Ward 9, sheet 14A, line 46; HOUSE 922, dwelling 258, family 267 (NARA T623). Enumerated 12 June 1900 by James C. Garity.',
          text: 'House number 922, and the street written vertically in the margin column beside it: PORT ST. The enumerator ran that street name down the page from line 34 to the foot of the sheet, covering every household in the block. Anthony is at 922, his neighbours at 924 and 920.',
          highlight: 'THE ADDRESS WAS ALWAYS ON THIS SHEET AND WAS NEVER INDEXED. Census indexes carry names, ages and birthplaces; the two narrow LOCATION columns at the far left — street, and house number — are almost never transcribed, so a searchable database can hold a family for a century without ever telling you where they lived. It has to be read by eye off the image, and the street is written sideways because it belongs to the whole block rather than to one line. 922 Port Street puts this household in the BYWATER — about 250 metres from the Dauphine Street house where his father Casper would die twenty-one years later. Father and son lived a three-minute walk apart.'
        },
        {
          title: 'WHAT HE DID FOR A LIVING — the 1900 census, read off the sheet',
          citation: 'United States Census, 1900 — ED 85, 4th Precinct, New Orleans Ward 9, sheet 14A, LINE 46; house 922, family 267 (NARA T623). FamilySearch image 3:1:S3HY-6SQY-F2.',
          text: 'LARMANN, ANTHONY H. — Head — w m — Aug 1871 — 28 — M 4 — b. Louisiana, father b. Germany, mother b. Germany — OCCUPATION: DRAUGHTSMAN — 0 months unemployed. Wife Eugenia, Oct 1874, 25, married 4 years, 3 children born and 2 living. Daughters Mary C., Sept 1896, and Bernadine.',
          image: 'assets/img/larmann-1900-draughtsman.jpg',
          imageAlt: 'The 1900 census sheet for New Orleans Ward 9, line 46, showing Anthony H. Larmann as head of household with the occupation Draughtsman',
          imageCredit: 'United States Census, 1900, ED 85 sheet 14A line 46 — NARA T623, via FamilySearch. Tap to enlarge.',
          highlight: 'THIS SETTLES A FLAG THIS SITE RAISED ON ITSELF. His occupation here read "Architect" — a bare claim with no record behind it, on a site whose whole rule is that claims carry citations. The occupation column is on the original sheet and simply was never indexed, so it had to be read by eye. It says DRAUGHTSMAN. Not architect — the man who drew the plans. Family memory rounded it up by one rung, which is exactly what family memory does, and it was close enough that nobody questioned it for a century. His brother-in-law James L. Connor, on the line above, is a clerk. One other thing on this line worth flagging: his MOTHER\'S birthplace is entered as GERMANY. Emily Mevers was born at Pascagoula, Mississippi. The enumerator recorded the family\'s origin, not her birthplace.'
        },
        {
          title: 'His marriage — the act that names his parents',
          citation: 'Louisiana, Parish Marriages, 1787–1958 — Orleans, November 1895; civil index Vol. 18, p. 718',
          text: 'ANTHONY LARMANN, born 1871, son of CASPAR LARMANN and EMILY MEVERS, m. Eugenie Moore.',
          highlight: 'The church-marriage series again — the same collection that cracked the Brunetti and Larmann walls. The state\'s civil index gives only "MOORE, EUGENIE × LARMANN, ANTHONY"; the parish act names both his parents, which is what this site requires before it will call a link proven. His link to Casper and Emily moved from single-source to documented on 11 August 2026. Esther\'s ledger supplies the day — Tuesday, 12 November 1895 — and his exact ages: born Saturday 26 August 1871, married at 24, dead at 32.'
        },
        {
          title: 'His own name, written out in his daughters\' birth records',
          citation: 'Louisiana, Orleans, Birth Records, 1819–1915 — Mary Eugenia Larmann, 20 September 1896, certificate 91; and Louise Frances Larmann, 1897',
          text: 'Father: ANTHONY HENRY LARMANN. Mother: Eugenia Bernadine "Mone" [Moore].',
          highlight: 'Two civil birth records, registered while he was alive, giving his name in full. These are what settled the "John Henry" question — see the note below. They also date his eldest exactly: Mary Eugenia, born 20 September 1896, ten months after the wedding.'
        },
        {
          title: 'In his father\'s house, aged eight',
          citation: 'United States Census, 1880 — New Orleans, household of J. C. Larman',
          text: 'Anthony Larman, son, in the household of J C Larman.',
          highlight: 'Two years before his mother died, and four before his father remarried. The 1880 census catches the first family whole, before that house became two half-families under one roof.'
        },
        {
          title: 'Louisiana death record',
          citation: 'Orleans Parish, 12 February 1904 — Vol. 131, p. 1097',
          text: 'LARMANN, ANTHONY, age 32.',
          highlight: 'Exactly the date in Esther\'s ledger: "Fri. Feb. 12th, Age 32."'
        }
      ],
      note: '⚠️ "ARCHITECT" IS NOT SOURCED. This site\'s one rule is that a claim carries a record, and this one does not. Audited 11 August 2026: his 1895 marriage act, both his daughters\' Orleans birth records, the 1880 census and his 1904 death record are all silent on his trade, and the 1900 census index carries no occupation field. It is left standing because it is very likely family memory and memory has earned its keep on this tree — but it is flagged rather than dressed up as documented. THE FIX IS SMALL AND SPECIFIC: the occupation column is on the 1900 census sheet itself, unindexed — he is at ED 85, 4th Precinct, New Orleans Ward 9, sheet 14A, line 46. Soards\' New Orleans city directories for 1895–1904 would also give his trade and address year by year. He was born nine and a half months after his parents\' November 1870 Orleans wedding. The old sibling list carried "Louise Frances (b. 1897)" as if she grew up; the death index shows Louisa Francis died at eight months, on 30 May 1898 — and the 1900 census confirms it, catching his household that June with only Mary E and Bernadine at home. THE "JOHN HENRY" QUESTION — ANSWERED, 11 August 2026. The RootsWeb family file supplied by Judy Gifford listed Casper and Emily\'s eldest as "John Henry Larmann, b. 26 August 1871" — the same day, the same parents, the same city as this man. It was flagged here rather than merged, because it sat on the direct line of descent and a matching birthday is not proof. It is now settled the other way: HE WAS ANTHONY HENRY, and the RootsWeb name is simply wrong. Nine independent records say so and not one says John — including two Orleans birth records of his own daughters, which spell out ANTHONY HENRY LARMANN in full; the 1880 census, which has him in his father\'s house; the 1900 census, his 1896 voter registration, his 1895 marriage, his 1904 death record, and his daughter Esther\'s own ledger. His FamilySearch profile carries twenty-four attached sources and no alternate name. The likeliest explanation for the error is the obvious one: his father and two of his brothers were Johns, and a compiler working from a list filled in the name he expected. Cross-check that closes it — his brother Henry\'s 1938 obituary lists the surviving and late siblings by name, and lists ANTHONY and JOHN C as two different men.'
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
        'By Emily Mevers, his first wife: John Christian (22 April 1874 – 1909), a barber, who married a Florina; Clemence Charles (10 May 1876 – 15 April 1880, dead at three); and Bernard Leo (March 1878 – 1955), a house painter, who married Mathilda Jones',
        'By Louisa Ehmann, his second, each with an Orleans birth record naming both parents: Joseph Benedict (9 Apr 1885 – 1950), a cotton clerk, who married Frances Virginia Neems; Hilda Margaretha (22 Dec 1886 – 31 Jan 1940), who married Willis Newton Cook; Henry (b. 25 May 1889); Albert (22 Dec 1891 – 1944), who died far from home in Hackensack, Bergen County, New Jersey; Edward John (b. 16 Dec 1896) — the Edward who married Marie Edna Fernandez in 1921; and Caspar Maurice "Casper Jr." (15 Jan 1899 – 1945), who married a Thelma',
        'The 1900 census catches the household whole at 2833 Dauphine Street on 9 June 1900: Casper 52, a cabinet maker renting the house; Louisa 42, six children born and six living; John 26, a barber; Bernard 22, a house painter; Joseph 15, a cotton clerk; Hilda 13; Henry 11, at school; Albert 8; Edward 3; Casper Jr. 1 — and Joseph Stauder, 71, the widowed cotton-picking foreman who had come from Germany in 1835 and who had raised Louisa. Two half-families under one roof, and the census counts them exactly: Louisa is marked "six children born, six living," which is the six from 1885 on. John and Bernard, the grown men at the table, were Emily\'s'
      ],
      given: 'John Casper', alsoKnownAs: 'naturalized as Johann Gasper Larmann; born Johann Caspar', surname: 'Larmann', sex: 'M',
      occupation: 'Cabinet maker and carpenter — United Brotherhood of Carpenters and Joiners, Local No. 1312',
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
          image: 'assets/img/gesmold-1846-baptisms.jpg',
          imageAlt: 'A page of the 1846 baptismal register of St. Petrus, Gesmold, in German script; entry 16 records Johann Caspar Larmann',
          imageCredit: 'Bistum Osnabrück, Pfarrei St. Petrus Gesmold, via Matricula Online, CC BY-NC-ND 2.0. Tap to enlarge.',
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
          highlight: 'Two years after Emily\'s death, on 26 April 1884. She was born on 27 August 1857 — at MILNEBURG, the lakefront settlement at the end of the Pontchartrain Railroad, according to her own obituary — and died in New Orleans on 17 September 1931, her death notice running the following day. She was EHMANN by birth — the daughter of John David Ehmann and Catharina Lutz, the two names the act itself records. Joseph Stauder, who appears in the 1900 census of this house as "father-in-law," was the man who RAISED her, not the man who fathered her. See "The Stauder puzzle, and how it fooled me" below.'
        },
        {
          title: 'The Stauder puzzle, and how it fooled me',
          citation: 'U.S. Federal censuses 1860, 1870, 1880 and 1900, Orleans Parish; with research notes by T. Brown in a RootsWeb family file supplied by Judy Gifford, 2026',
          text: '1870 — Joseph Stauder household, dwelling 446: Joseph 41, Barbara 39, Barbara 15, and "LOUISA STAUDER, 12, born Louisiana." 1880 — Joseph Stauder household, dwelling 117, at 690 Dauphine Street: Joseph 51, Barbara 49, and "LOUISA EHMANN, 22, BOARDER, SINGLE, clerk." 1900 — the Larmann house on Dauphine: "JOSEPH STAUDER, father-in-law, born March 1829, immigrated 1835, widowed, 71."',
          highlight: 'I read the 1900 census first and got this backwards, and it is worth leaving the error visible. "Father-in-law" looked like proof that Louisa was born a Stauder and that Ehmann must be a first husband\'s name. The 1880 census kills that reading outright: at twenty-two she is already EHMANN, and she is recorded SINGLE — so Ehmann cannot be a married name — and she is a BOARDER in the house, which no man\'s own daughter is. She was born Ehmann and raised Stauder. T. Brown\'s note supplies the mechanism: the Ehmann girls were orphaned some time between 1860 and 1870 and were taken in by Joseph and Barbara Lutz Stauder, who had no children of their own — Barbara Lutz being, in all likelihood, the sister of Louisa\'s mother Catharina Lutz. Her aunt and uncle raised her, the 1870 enumerator wrote her down under their name, and thirty years later Joseph Stauder was still, to everyone who knew the family, Casper\'s father-in-law. Both family memories were true at once: "Louise Standed" was the name she grew up under, Ehmann the name she was born with.'
        },
        {
          title: 'Her name in her own children\'s birth records — eight of them',
          citation: 'Alphabetical Birth Indexes for Orleans Parish, 1796–1900; transcribed in the RootsWeb family file supplied by Judy Gifford, 2026',
          text: 'John Christian, 22 Apr 1874 — father John, mother E. MEVERS (vol. 65, p. 222) · Clemence Charles, 10 May 1876 — father John Casper, mother EMILY MEVERS (vol. 69, p. 362) · Joseph Benedict, 9 Apr 1885 — father John G., mother LOUISE M. EHMANN (vol. 82, p. 1122) · Hilda Margaretha, 22 Dec 1886 — mother LOUISA M. AMANN [sic] (vol. 84, p. 1119) · Henry, 25 May 1889 — mother LOUISA EHMANN (vol. 87, p. 1038) · Albert, 22 Dec 1891 — mother LOUISA EHNMANN (vol. 93, p. 247) · Edward John, 16 Dec 1896 — father Casper Jno., mother LOUISA EHMANN (vol. 109, p. 542) · Caspar Maurice, 15 Jan 1899 — mother LOUISE M EHMANN (vol. 115, p. 383).',
          highlight: 'Eight civil birth records across twenty-five years, and every one of the six later ones gives the mother\'s name as EHMANN — a birth record records the mother\'s MAIDEN name. Not once is she a Stauder. The two earliest, in 1874 and 1876, name Mevers instead, which is the cleanest possible proof that these are two different mothers and two different marriages. Every volume and page is exact, so any of the eight can be ordered.'
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
          title: 'His obituary, in full — Times-Picayune, 23 November 1921',
          citation: 'New Orleans Times-Picayune; transcribed in a RootsWeb family file supplied by Judy Gifford, 2026',
          text: '"LARMANN — On Monday, November 21, 1921, at 3:15 o\'clock p.m., JOHN CASPER LARMANN, beloved husband of Louise Margaret Ehmann, aged 75 years, a native of Hanover, Germany, and a resident of this city for the past fifty-six years. The relatives, friends and acquaintances of the family, also the officers and members of the United Brotherhood of Carpenters and Joiners of America, Local No. 1312, St. Sebastian Branch No. 311, Catholic Knights of America, St. Joseph Society, Holy Name Society and St. Elizabeth Ladies of Holy Trinity Church are respectfully invited to attend the funeral… from the late residence of the deceased, No. 2883 Dauphine street, near Press. Interment in St. Roch Cemetery."',
          highlight: 'A whole life in one paragraph. He was a CARPENTER — a union man of Local 1312 — and his parish was HOLY TRINITY, the German national church of New Orleans. He died at home on Dauphine Street in the Bywater and was buried in St. Roch. "Aged 75" gives 1846, agreeing with Esther\'s ledger against the death index\'s 1848.'
        },
        {
          title: 'HIS HOUSE — 2833 DAUPHINE, and the great-grandson who went inside it',
          citation: 'The 1900 census transcription for this household; family testimony from John Larmann Sr. (b. 1926) via his grandson Kevin, August 2026; obituary, New Orleans, November 1921',
          text: 'Two independent sources give 2833 Dauphine Street: the 1900 census transcription, and John Larmann Sr.\'s own account of visiting Casper\'s children in that house as a boy. His 1921 obituary prints 2883 Dauphine, "near Press."',
          highlight: 'THE CONFLICT IS RESOLVED, AND NOT BY AVERAGING. This site carried both numbers side by side for want of a tiebreaker — the census said 2833, the obituary said 2883, and Press Street\'s position mildly favoured the obituary. The tiebreaker turned out to be alive until 2018. John Larmann Sr., Casper\'s great-grandson, visited Casper\'s sons and daughters at 2833 and told his own grandson so. That is two independent sources against one, and the obituary\'s 2883 is now treated as the outlier rather than a rival. It also says something the numbers do not: the family did not leave. Casper died in 1921 and his children were still keeping that house when a boy born in 1926 was old enough to be walked through the door.'
        },
        {
          title: 'HIS GRAVE, LOCATED — and the walk is named for his own parish priest',
          citation: 'Archdiocese of New Orleans, Catholic Cemeteries burial register — St. Roch Cemetery, profile 36953104 (nolacatholiccem.discovereverafter.com/profile/36953104). Searched 12 August 2026. Sons Casper M. and Edward J. are profiles 36953103 and 36953101.',
          text: 'JOHN CASPER LARMANN — age 75 — buried 23 November 1921 — PLOT: R2 SQ C / 18 FATHER THEVIS PIAZZA / 11 — St. Roch Cemetery, 1725 St. Roch Avenue, New Orleans 70117. Listed as "others here" in the same plot: CASPER M. LARMANN, d. 7 Nov 1945, aged 46 (his son Caspar Maurice, b. 1899) · EDWARD J. LARMANN, d. 19 Nov 1985, aged 88 (his son Edward John, b. 1896) · MARIE LARMANN, d. 17 Oct 1987, aged 89 · and BABY OSTERHOLD, d. 22 August 1954.',
          highlight: 'THE ADDRESS OF THE TOMB IS THE STORY. Father Peter Leonhard Thevis was the German priest of HOLY TRINITY at St. Ferdinand and Dauphine — Casper’s own parish, named in his obituary, on the street he died on. When yellow fever took more than three thousand New Orleanians in 1867, Thevis vowed a chapel to St. Roch if his congregation was spared. Not one Holy Trinity parishioner died, in that epidemic or the next, and he built this cemetery in 1875 to keep the promise. He lies under the chapel floor at the middle of it. Casper — who landed in 1866, the year before the fever — is buried on the walk that carries his priest’s name, with two of his sons and sixty-six years of family after him — down to an infant recorded only as "Baby Osterhold," laid in with them in 1954. AND IT SPLITS THE FAMILY IN TWO: this is Louisa’s side. Anthony’s line, the one this tree descends through, lies across town in the Goubler tomb at St. Vincent de Paul No. 3. The two half-families are in two different cemeteries.'
        },
        {
          title: 'Naturalization — 16 October 1868',
          citation: 'Fifth District Court, New Orleans — Minor\'s Naturalization Book 6, p. 189B',
          text: 'Naturalized under the name JOHANN GASPER LARMANN.',
          highlight: 'Two years after he landed, at twenty-two. The book and page are exact, so the original can be pulled — and a naturalization of that era often records the port and date of arrival.'
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
      birth: { date: 'about 1846', place: 'Pascagoula, Jackson County, Mississippi' },
      death: { date: '11 February 1882', place: 'Orleans Parish' },
      evidence: 'confirm',
      branch: 'larmann',
      blurb: 'Anthony\'s mother, dead in her thirties when he was ten — her marriage act makes her twenty-three in 1870 and her death record thirty-seven in 1882, so her birth year sits somewhere in 1845–47 and about 1846 is the honest middle. Not an immigrant at all but a Mississippi girl, born at Pascagoula to a German couple out of Westphalia. A Dorothea Mevers — sister, cousin or niece — stood godmother to Charles Emile twenty years later, so her family stayed close.',
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

    josephLemoine: {
      children: [
        { id: 'alexisLemoine' }
      ],
      given: 'Joseph', surname: 'Lemoine', sex: 'M',
      origin: 'St. Charles Parish, Louisiana',
      evidence: 'verified',
      branch: 'lemoine',
      blurb: 'The oldest Lemoine this family can name. He appears in one line of one register — as the father of a boy baptised at Edgard in November 1829 — and everything above him is still dark. The Lemoines were an old Louisiana name on this stretch of river long before that, so there is more to find.',
      records: [
        {
          title: 'Named at his son\'s baptism',
          citation: 'Church of St. John the Baptist, Edgard — B7, p. 49; SRANO Vol. 18 (1828–1829)',
          text: '"Alexis Allonzo (JOSEPH and Marie RIBAS)… all of St. Charles Parish."',
          highlight: 'The whole of what is known about him, so far. The next document is his marriage to Marie Ribas — not yet found in the abstracted volumes, so it is either earlier than 1807, filed under a spelling not yet tried, or in a parish register outside this series.'
        }
      ],
      note: 'WHERE TO LOOK NEXT. He and Marie Ribas married before February 1829, and a marriage act would name all four of his son\'s grandparents at a stroke. It is not in the Archdiocese\'s abstracted volumes 9–18 (1807–1829) under Lemoine or Ribas, which points at three possibilities: a marriage before 1807; a spelling not yet tried (Lemoyne, Moine, Ribas/Rivas/Ribes); or a register outside this series — St. Charles Borromeo in Destrehan is the obvious candidate, since the family lived in St. Charles Parish, and its 1739–1755 book is online while the later ones are not.'
    },

    marieRibas: {
      children: [
        { id: 'alexisLemoine' }
      ],
      given: 'Marie', surname: 'Ribas', alsoKnownAs: 'Rivas in the Spanish-era registers', sex: 'F',
      origin: 'St. Charles Parish, Louisiana',
      evidence: 'verified',
      branch: 'lemoine',
      blurb: 'A Spanish surname on a French-Creole river, and the first hint that this branch may not be all French. Ribas — written Rivas by the Spanish-era clerks — belongs to a family living in the same stretch of St. Charles Parish in exactly these years.',
      records: [
        {
          title: 'Named at her son\'s baptism',
          citation: 'Church of St. John the Baptist, Edgard — B7, p. 49; SRANO Vol. 18 (1828–1829)',
          text: '"Alexis Allonzo (Joseph and MARIE RIBAS)… all of St. Charles Parish."'
        },
        {
          title: 'The Ribas family she probably belongs to',
          citation: 'SRANO Vols. 14 and 16 — St. John the Baptist, Edgard (SJBED, B4, 57 and B4, 165)',
          text: 'RIVAS: Antoine (ANTOINE DE SANTO YAGO and MARIE BRIGITTE LEGO), born 10 Aug 1819, baptised 11 May 1820 · Louis (Antoine and Marie Brigite LEGAU), born 29 Apr 1822, baptised 22 Mar 1824, sponsors ZENON ROUSSELLE and Estelle de la Tour, "all of St. Charles Parish."',
          highlight: 'NOT PROVEN, but close enough to name: a Rivas household in the right parish in the right decade, headed by an Antoine "de Santo Yago" — Santiago — which would make this a Spanish family on the German Coast. Note the godfather of the 1822 child: a ROUSSELLE. Three generations before Alonzo Lemoine married Poppone Roussel, the two families were already standing at each other\'s fonts.'
        }
      ]
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
      origin: 'St. Charles Parish — baptised at Edgard',
      birth: { date: '4 February 1829, christened at Edgard on 22 November', place: 'St. Charles Parish' },
      death: { date: 'August 1913' },
      father: 'josephLemoine', mother: 'marieRibas',
      occupation: 'Brick mason',
      evidence: 'verified',
      branch: 'lemoine',
      blurb: 'The godfather, and the man who was the wall. In January 1864 he stood over the font at Edgard for a newborn named Poppone Geneviève Roussel — and some twenty years later his son Alonzo married her. A brick mason of the 1st Ward, he married Françoise Alex Martin at Edgard in May 1854, raised seven children, and was buried in the churchyard of the same church where he had made that promise. His own baptism, found in August 2026, finally names his parents and puts a generation behind him.',
      records: [
        {
          title: 'HIS OWN BAPTISM — the record that named his parents',
          citation: 'Church of St. John the Baptist, Edgard — Baptismal book 7, p. 49 (SJBED, B7, 49); abstracted in Sacramental Records of the Archdiocese of New Orleans, Vol. 18 (1828–1829)',
          text: '"LEMOINE — Alexis Allonzo (JOSEPH and MARIE RIBAS), b. Nov. 22, 1829, bn. Feb. 4, 1829, s. Pierre GRAVOIS and Marie LATOUR, all of ST. CHARLES PARISH."',
          highlight: 'Found 11 August 2026, and it ends the longest-standing wall on this tree. His birth date matches the family record to the day — born the fourth of February, baptised the twenty-second of November, nine months later. His parents were JOSEPH LEMOINE and MARIE RIBAS, two names nobody in this family has known. And the phrase "all of St. Charles Parish" moves the family one parish downriver from where we had them: they worshipped at Edgard but they lived in St. Charles.'
        },
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
