/* ==========================================================================
   Pedeaux Family Archive — PLACES
   Every point here comes off a record that is quoted on the person's own page.
   Coordinates are geocoded from OpenStreetMap; `precision` says how much to
   trust the pin. Nothing on this map is placed from memory or from a guess.
   ========================================================================== */

(function () {
  window.PLACES = {

    /* Bywater / Marigny — where most of this family actually lived */
    center: [29.9660, -90.0560],
    zoom: 13,

    kinds: {
      home:    { label: 'Where they lived',   color: '#7a2e2e' },
      church:  { label: 'Parish church',      color: '#a8873f' },
      grave:   { label: 'Where they lie',     color: '#4a423a' },
      service: { label: 'Military service',   color: '#4a6b45' },
      town:    { label: 'Town or village',    color: '#3d5a6c' }
    },

    items: [

      /* ── HOMES ────────────────────────────────────────────────── */

      {
        id: 'casper-dauphine',
        name: '2833 Dauphine Street',
        kind: 'home',
        lat: 29.9653529, lng: -90.0483747,
        precision: 'exact',
        years: 'to 1921, and his children after him',
        people: ['johnCasparLarmann'],
        who: 'John Casper Larmann, carpenter — and the house his children kept',
        headline: 'THE CARPENTER\'S HOUSE, AND A GREAT-GRANDSON WHO WALKED INTO IT',
        text: 'Casper came ashore at New Orleans in 1866 and was a carpenter of Local 1312. He died in this house in November 1921, aged seventy-five, one block from Holy Trinity, the German parish his obituary names. His children stayed on in it after him: John Larmann Sr., born 1926, remembered visiting Casper\'s sons and daughters here — which is how a house that appears in an 1900 census reached a man alive in the twenty-first century, and through him his grandson.',
        source: 'The number is 2833, from two independent directions: the 1900 census transcription, and John Larmann Sr.\'s own account of visiting Casper\'s children here, passed to his grandson. Casper\'s 1921 obituary prints 2883 "near Press" — a single source against two, and treated here as the outlier rather than quietly averaged away.'
      },

      {
        id: 'larmann-922-port',
        name: '922 Port Street',
        kind: 'home',
        lat: 29.9671216, lng: -90.0499200,
        precision: 'exact',
        years: '1900',
        people: ['anthonyLarmann', 'eugeniaMoore'],
        who: 'Anthony H. Larmann, his wife Eugenia, and their two little girls',
        headline: 'READ OFF THE CENSUS SHEET — the street name is written sideways down the margin',
        text: 'On 12 June 1900 the enumerator James C. Garity worked down Port Street and wrote the Larmanns into line 46: Anthony H., head, born August 1871, aged 28, a draughtsman; Eugenia, his wife, October 1874; Mary C., aged 3; Bernardine, aged 1. The house number 922 sits in the margin beside them, and the street itself — "Port St." — is written vertically in the column to its left, covering every household from line 34 down to the foot of the page.',
        source: 'United States Census, 1900 — Louisiana, Orleans, ED 85, 4th Precinct, New Orleans Ward 9, sheet 14A, line 46; house 922, dwelling 258, family 267 (NARA T623). The same sheet reproduced on his page.'
      },

      {
        id: 'stauder-dauphine',
        name: '690 Dauphine Street',
        kind: 'home',
        lat: 29.9590039, lng: -90.0666006,
        precision: 'exact',
        years: '1880',
        people: ['johnCasparLarmann'],
        who: 'The Stauder household — where Louisa Ehmann was boarding',
        headline: 'The address that broke a wrong conclusion',
        text: 'The 1880 census finds Joseph Stauder\'s household here, and in it "LOUISA EHMANN, 22, BOARDER, SINGLE, clerk." This site had earlier read a later census as making Louisa a Stauder daughter. This house is where that reading died: in 1880 she was a lodger under their roof, not a child of it.',
        source: 'United States Census, 1880 — Orleans Parish, dwelling 117.'
      },

      {
        id: 'larmann-1607-piety',
        name: '1607 Piety Street',
        kind: 'home',
        lat: 29.9722527, lng: -90.0399174,
        precision: 'exact',
        years: '1950',
        people: ['charlesEmileLarmann', 'johannaLemoine', 'johnLarmannSr', 'annWellmeyer'],
        who: 'Three generations of Larmanns under one roof',
        headline: 'APRIL 1950 — AND KEVIN\'S GRANDPARENTS ARE THE NEWLYWEDS IN THE BACK ROOM',
        text: 'The census taker found five people in this house on 10 April 1950. CHARLES EMILE LARMANN, 47, head — a BOOKKEEPER at an AUTO REPAIR SHOP. His wife JOHANNA, 43. Their son JOHN R. LARMANN, 22, married, a MOTOR REPAIRER at an electric motor repair shop. His wife ANN G., 21, married, a CASHIER in a retail department store. And JOHN R. LARMANN JR., aged one, entered as "grandson."',
        source: 'United States Census, 1950 — New Orleans, Orleans Parish, ED 36-460, page 77, lines 3–7 (NARA T628). House number 1607, dwelling 64, read off the sheet; the street is written vertically in column 1 as "Piety." Neighbours at 1615 and 1511 on the same page match the modern block exactly.'
      },

      {
        id: 'lemoine-camp',
        name: '5608 Camp Street',
        kind: 'home',
        lat: 29.9220597, lng: -90.1170476,
        precision: 'exact',
        years: '1913',
        people: ['robertLemoine'],
        who: 'Robert Lemoine',
        headline: 'The address he gave the Navy',
        text: 'When he walked into the Receiving Station at New Orleans on 31 October 1913 and enlisted as a baker second class, this is the address the clerk wrote down. Uptown, a long way from the Bywater side of this family.',
        source: 'Louisiana, World War I Service Records, 1917–1920 — Orleans, Navy Records. The card itself is reproduced on his page.'
      },

      {
        id: 'goubler-ferdinand',
        name: '1722 St. Ferdinand Street',
        kind: 'home',
        lat: 29.9751887, lng: -90.0464893,
        precision: 'exact',
        years: 'to 1939',
        people: ['valentineGoubler'],
        who: 'Léonce “Leon” Goubler',
        headline: 'A plumber of Local No. 60, and a son lost in France',
        text: 'Leon Goubler lived here until his death in November 1939. His son Private Emile Thomas Goubler was killed in France in 1918.',
        source: 'Obituary and Orleans Parish records — see the Goubler entries.'
      },

      {
        id: 'moore-franklin-727',
        name: '727 Franklin Avenue',
        kind: 'home',
        lat: 29.9651816, lng: -90.0511917,
        precision: 'exact',
        years: 'by 1935 – 1947/48',
        people: ['charlesEmileLarmann'],
        who: 'Leontine and Louise Moore — the last house, the one they owned',
        headline: 'Where the two sisters ended, four blocks down from where they started',
        text: 'The 1940 census finds them here together and independent: Leontine, 60, head of the house, single; Louise, 62, her sister. They OWNED it — valued at $2,200 — and had been in it since at least 1935. Leontine died in March 1947 and Louise the year after, and this is the address they died at. It is not, however, the house the family remembers visiting: that is 927, up the avenue, and the two dates fit together rather than fight.',
        source: 'United States Census, 1940 — New Orleans Ward 9, ED 36-246, sheet 11A, line 38, household 255 (NARA T627). The enumerator wrote the street as "Almonaster"; the house number was checked digit by digit against 919, 923 and 925 on the same sheet, whose nines are looped where this seven is not.'
      },

      {
        id: 'moore-franklin-927',
        name: '927 Franklin Avenue — THE HOUSE',
        kind: 'home',
        lat: 29.9671702, lng: -90.0505977,
        precision: 'exact',
        years: '1910 – early 1930s',
        people: ['charlesEmileLarmann', 'johnLarmannSr'],
        who: 'Valentine Moore and her daughters — where Charles Emile was raised, and where his son visited',
        headline: 'THE ONE ADDRESS ON THIS MAP THAT CAME BACK FROM LIVING MEMORY FIRST',
        text: 'This is the aunts\' house. Charles Emile Larmann lost his father at eighteen months and his mother at eighteen years, and was brought up here by his mother\'s two unmarried sisters, Leontine — "Tene" — and Louise Moore. The 1910 census catches the household whole: their widowed mother VALENTINE MOORE, 62, born Marie Valentine Goubler, keeping the house, with Louise, 30, and Leontine, 27, at home and single. Charles was seven and six years fatherless. His son John Larmann Sr., born 1926, remembered visiting his great-aunts HERE — which dates those visits to before about 1935, when the two sisters moved down to the 700 block. And one detail of this house outlived everyone in it: the aunts had an instantaneous gas water heater, which John remembered as a marvel and described to his own grandson, who happened to be fitting a tankless heater into a shotgun house when he heard the story.',
        source: 'United States Census, 1910 — New Orleans Ward 9, ED 132, sheet 7A, dwelling 126, family 142 (NARA T624); the enumerator wrote the street as "Lafayette Street," which was its correct name in 1910. The house number comes from family memory — John Larmann Sr. named 927 to his grandson — and the census independently puts this household at 927 on this block. Street name chain documented: Enghein → Lafayette Avenue (Ord. 395 C.C., 1852) → Almonaster Avenue (Ord. 7742 C.C.S., 20 Feb 1924) → Franklin Avenue (Ord. 1215 M.C.S., 31 Oct 1957). See Charles Emile Larmann\'s page.'
      },

      /* ── CHURCH ───────────────────────────────────────────────── */

      {
        id: 'holy-trinity',
        name: 'Holy Trinity Church — 721 St. Ferdinand Street',
        kind: 'church',
        lat: 29.9646498, lng: -90.0493592,
        precision: 'exact',
        years: 'founded 1847',
        people: ['johnCasparLarmann'],
        who: 'The German national church of New Orleans — Casper\'s parish',
        headline: 'He died 123 metres from his own altar — one block',
        text: 'Holy Trinity stood at St. Ferdinand and Dauphine, the German national parish, and Casper\'s obituary names it as his. Its pastor was Father Peter Leonhard Thevis, who in the yellow fever of 1867 vowed a chapel to St. Roch if his congregation were spared. Not one Holy Trinity parishioner died. He built the chapel, founded the cemetery around it in 1875, and lies beneath its floor.',
        source: 'Casper\'s obituary; parish history. Distance measured between the two geocoded points on this map — his house at 2833 Dauphine is the next marker over.'
      },

      {
        id: 'st-vincent-de-paul-church',
        name: 'St. Vincent de Paul Church — 3051 Dauphine Street',
        kind: 'church',
        lat: 29.9647432, lng: -90.0460147,
        precision: 'exact',
        years: 'built 1866; now Blessed Seelos',
        people: ['kevin'],
        who: 'Now Blessed Francis Xavier Seelos — where Kevin and Lauren were married',
        headline: 'HE MARRIED 237 METRES FROM HIS GREAT-GREAT-GREAT-GRANDFATHER\'S FRONT DOOR',
        text: 'The third parish founded in New Orleans, in 1838; the red brick basilica went up in 1866 — the very year Casper Larmann landed. It is on the same street as his house and two blocks down it. Nobody planned that. Five generations separate the man who died at 2833 Dauphine in 1921 from the wedding held at 3051 Dauphine, and the walk between them takes about three minutes.',
        source: 'Archdiocese of New Orleans; St. Vincent de Paul Roman Catholic Church, New Orleans. Distance measured between the two geocoded points on this map.'
      },

      {
        id: 'st-cecilia',
        name: 'St. Cecilia Church — 4201 N. Rampart Street',
        kind: 'church',
        lat: 29.9640300, lng: -90.0337570,
        precision: 'exact',
        years: 'married July 1947',
        people: ['johnLarmannSr', 'annWellmeyer'],
        who: 'Where John Richard Larmann Sr. married Ann Wellmeyer',
        headline: 'AND ITS PARISH LATER MERGED INTO THE CHURCH THEIR GRANDSON WOULD MARRY IN',
        text: 'The Bywater parish where John and Ann were married in July 1947 — sixty-three years of marriage started here. St. Cecilia closed in 2000 when attendance fell away, and the building is now the Shirley Landry Benson PACE Center, caring for the elderly. Its congregation was merged, with Annunciation, St. Gerard and Sts. Peter and Paul, into a new parish housed in St. Vincent de Paul\'s church — which is Blessed Seelos, two markers over.',
        source: 'Family testimony (Kevin Pedeaux, August 2026) for the church; Orleans Parish marriage record, July 1947, p. 3644 for the marriage. Parish history and closure: Archdiocese of New Orleans.'
      },

      {
        id: 'st-catherine-siena',
        name: 'St. Catherine of Siena — 105 Bonnabel Boulevard, Metairie',
        kind: 'church',
        lat: 29.9866235, lng: -90.1429082,
        precision: 'exact',
        years: 'married',
        people: ['buddy', 'jeanLarmann'],
        who: 'Where Buddy Pedeaux married Jean Larmann',
        headline: 'The generation that got married in the suburbs',
        text: 'Kevin\'s parents. Three weddings on this map tell the family\'s whole migration in one line: Casper\'s people at Holy Trinity in the Bywater, Buddy and Jean out at Bonnabel Boulevard in Metairie, and their son back downtown at Blessed Seelos.',
        source: 'Family testimony (Kevin Pedeaux, August 2026).'
      },

      /* ── GRAVES ───────────────────────────────────────────────── */

      {
        id: 'st-roch-cem',
        name: 'St. Roch Cemetery — 1725 St. Roch Avenue',
        kind: 'grave',
        lat: 29.9755154, lng: -90.0509669,
        precision: 'exact',
        years: '1921–1954',
        people: ['johnCasparLarmann'],
        who: 'John Casper Larmann and two of his sons',
        headline: 'Plot R2 SQ C / 18 FATHER THEVIS PIAZZA / 11',
        text: 'Casper was buried here on 23 November 1921. In the same plot: his sons Casper M. (d. 1945) and Edward J. (d. 1985), Marie Larmann (d. 1987), and an infant recorded only as "Baby Osterhold" (d. 1954). The walk carries the name of Father Thevis — his own parish priest, from the church a block from his house.',
        source: 'Archdiocese of New Orleans, Catholic Cemeteries burial register, profile 36953104. Searched 12 August 2026.'
      },

      {
        id: 'st-louis-3',
        name: 'St. Louis Cemetery No. 3 — 3421 Esplanade Avenue',
        kind: 'grave',
        lat: 29.9857723, lng: -90.0863572,
        precision: 'exact',
        years: '1928–2013',
        people: ['johnBrunetti', 'veronicaBrunetti', 'herbertJoseph', 'buddy', 'alfredMoizant'],
        who: 'The Brunetti–Pedeaux tomb, and the Moizant plot',
        headline: 'Three generations in nine feet of ground',
        text: 'Plot L3 SQ 5E / G ST. LOUIS AVENUE / 9 holds six people: John Brunetti of Plataci, his wife Veronica Franovich, their daughter Veronica, her husband Herbert Joseph Pedeaux, their son Buddy, and twins buried in 1951 whose parents the register does not name. Elsewhere in the same cemetery, on the Alley de la Vierge, lie Alfred Moizant of Bordeaux and his wife Victoria.',
        source: 'Archdiocese of New Orleans, Catholic Cemeteries burial register, profiles 36915128–36915133 and 36892935–36892936.'
      },

      {
        id: 'st-vincent-3',
        name: 'St. Vincent de Paul Cemetery No. 3 — Louisa Street',
        kind: 'grave',
        lat: 29.9705109, lng: -90.0410033,
        precision: 'block',
        years: '1890s–2018',
        people: ['johnLarmannSr', 'annWellmeyer', 'anthonyLarmann', 'valentineGoubler'],
        who: 'The Wellmeyer tomb and the Goubler tomb',
        headline: 'THE GROUND NO DATABASE WILL SHOW YOU',
        text: 'John Richard Larmann Sr., Ann Wellmeyer, all ten Wellmeyers of Henry John\'s household, and the Goublers are here — in the oldest part of the complex. The archdiocese\'s online burial register covers this cemetery, but only its V1 and V2 sections: across 173 sampled burials, not one carried a V3. Searching for this family online returns nothing. The tomb is standing; Kevin has photographed it. This marker is placed on the cemetery, not the tomb.',
        source: 'Find a Grave; family photographs; and the negative result documented on John Sr.\'s page.'
      },

      {
        id: 'cypress-grove',
        name: 'Cypress Grove Cemetery — 120 City Park Avenue',
        kind: 'grave',
        lat: 29.9795672, lng: -90.1113881,
        precision: 'block',
        years: 'buried 17 November 1964',
        people: ['agnesHanley'],
        who: 'Agnes Margaret Hanley',
        headline: 'She married twice, and lies with neither husband',
        text: 'Agnes married Robert Lemoine in 1906 at sixteen, and Johanna was born less than eight months later. By 1910 she had left Louisiana. She later married William Winstine, and when she died in November 1964 her obituary called her a native and resident of New Orleans and buried her here — nowhere near Robert, who had gone into Arlington fifteen years earlier.',
        source: 'Obituary, "WINSTINE — Agnes Hanley," New Orleans, November 1964 — the same notice that names her daughter Johanna and proved the link. Quoted in full on the field notes page.'
      },

      {
        id: 'st-alphonsus',
        name: 'St. Alphonsus Church — 2030 Constance Street',
        kind: 'church',
        lat: 29.9298760, lng: -90.0741196,
        precision: 'exact',
        years: '17 November 1964',
        people: ['agnesHanley'],
        who: 'Where Agnes Hanley\'s Requiem Mass was sung',
        headline: 'The Irish Channel church, and the only Uptown stop on this map',
        text: 'The great Irish parish of the Channel. Agnes was a Hanley, daughter of Stephen Hanley and Mary Reed, and her funeral went from a Metairie chapel to St. Alphonsus before her burial at Cypress Grove.',
        source: 'Obituary, New Orleans, November 1964.'
      },

      {
        id: 'arlington',
        name: 'Arlington National Cemetery — section 34, grave 1964',
        kind: 'grave',
        lat: 38.8785384, lng: -77.0691117,
        precision: 'block',
        years: 'interred 23 November 1949',
        people: ['robertLemoine'],
        who: 'Robert Lemoine, chief commissary steward, US Navy',
        headline: 'ROBERT LEMOINE · LOUISIANA · CCS · US NAVY · WORLD WAR I',
        text: 'The only person on this tree buried outside Louisiana and Mississippi. He went from a baker\'s rating at New Orleans in 1913 to chief of a battleship\'s commissary aboard USS Utah, and the stone says so in three letters.',
        source: 'Army Cemeteries Explorer, section 34, grave 1964.'
      },

      /* ── SERVICE / LATER LIFE ─────────────────────────────────── */

      {
        id: 'mare-island',
        name: 'Vallejo, California — Mare Island',
        kind: 'service',
        lat: 38.0904554, lng: -122.2661712,
        precision: 'town',
        years: '1930',
        people: ['robertLemoine'],
        who: 'Robert Lemoine and his Norwegian wife Sophie',
        headline: 'A Louisiana man keeping house beside a navy yard',
        text: 'The 1930 census finds him at Vallejo, 41, head of household, with Sophie, 43, born in Norway. Mare Island was the Navy\'s Pacific shipyard.',
        source: 'United States Census, 1930 — Vallejo, Solano County, California, sheet 4A, line 38.'
      },

      /* ── LOUISIANA TOWNS ──────────────────────────────────────── */

      {
        id: 'labadieville',
        name: 'Labadieville, Assumption Parish',
        kind: 'town',
        lat: 29.8238940, lng: -90.9529262,
        precision: 'town',
        years: '1860s–1890s',
        people: ['numaSr', 'pierreNuma'],
        who: 'The Pedeaux on Bayou Lafourche',
        headline: 'Before the city, the bayou',
        text: 'This is where the Pedeaux were before New Orleans. Numa Sr.\'s eldest brother was christened Antoine Philippe Joseph here in 1872 — the name that came back around to one of Kevin\'s sons.',
        source: 'Assumption Parish sacramental registers — see the Pedeaux entries.'
      },

      {
        id: 'buras',
        name: 'Buras, Plaquemines Parish',
        kind: 'town',
        lat: 29.3518860, lng: -89.5242248,
        precision: 'town',
        years: '1902',
        people: ['veronicaFranovich'],
        who: 'Veronica Franovich',
        headline: 'The last of this family born in the delta',
        text: 'Born here on 22 March 1902 to a Dalmatian oyster family. She was nine when her father died, and her widowed mother took the children up to the city.',
        source: 'Orleans and Plaquemines records — see her page.'
      },

      {
        id: 'nairn',
        name: 'Nairn, Plaquemines Parish',
        kind: 'town',
        lat: 29.4279955, lng: -89.6108947,
        precision: 'town',
        years: '1910',
        people: ['anthonyFranovich', 'alfredMoizant'],
        who: 'The Franovich and Moizant households',
        headline: 'Two families, one delta village, one census year',
        text: 'In 1910 Alfred Moizant of Bordeaux and his son-in-law Tony Franovich were both living at Nairn — a detail the censuses give up only when you read them side by side.',
        source: 'United States Census, 1910 — Nairn, Plaquemines Parish.'
      },

      {
        id: 'brunetti-mazant',
        name: 'Mazant & Derbigny — Square 724, Lot A',
        kind: 'home',
        lat: 29.971541, lng: -90.032603,
        precision: 'block',
        years: '1934, and into the 1950s',
        people: ['johnBrunetti', 'veronicaFranovich', 'buddy'],
        who: 'John Brunetti\'s own lot — and the street Buddy Pedeaux grew up on',
        headline: 'A PAID TAX BILL PUT A CORNER ON A HALF-REMEMBERED STREET',
        text: 'Kevin knew only that his father grew up "on Mazant somewhere" before the family moved to Chalmette. A City of New Orleans real estate tax bill for 1934, kept in the family and photographed by his brother Aaron, names the place exactly: J. BRUNETTI ET ALS — SQUARE 724, LOT A, MAZANT & DERBIGNY, 31 by 118 feet. John Brunetti, the Italian immigrant from Plataci, owned the corner. His grandson was raised on it. Assessed value that year carried a tax of $67.83, paid in November with 72 cents of interest — $68.55 in all.',
        source: 'City of New Orleans, 1934 Real Estate Tax bill no. 48051 (9-W 724), receipted November 1934 — family papers, photographed August 2026. Reproduced on John Brunetti\'s page. The pin is the surveyed Mazant × N. Derbigny intersection; the lot is one of its four corners, and the bill does not say which.'
      },

      {
        id: 'pedeaux-pirate',
        name: '2212 Pirate Drive, Chalmette',
        kind: 'home',
        lat: 29.9473246, lng: -89.9883917,
        precision: 'exact',
        years: 'about 1960–1992',
        people: ['herbertJoseph', 'veronicaBrunetti', 'buddy'],
        who: 'Herbert Joseph and Veronica Pedeaux',
        headline: 'The move out of the city',
        text: 'The generation that left New Orleans proper for the parish next door. Herbert Joseph died in Chalmette in July 1992, and Buddy grew up here after Mazant Street.',
        source: 'Family testimony (Kevin Pedeaux, August 2026); Orleans and St. Bernard records; obituaries.'
      },

      {
        id: 'kevin-marquez',
        name: '2905 Marquez Drive, Meraux',
        kind: 'home',
        lat: 29.9367824, lng: -89.9185772,
        precision: 'exact',
        years: 'to August 2005',
        people: ['kevin', 'buddy', 'jeanLarmann'],
        who: 'Where Buddy and Jean raised Kevin, Aaron and Catherine',
        headline: 'The furthest point down the river — and Katrina ended it',
        text: 'Eleven generations from a ship\'s carpenter\'s son on the Nantes quayside to a house in St. Bernard Parish. Kevin lived here until the storm in August 2005, which is where this address stops. Almost every family on this map had moved steadily downriver and outward for a century; the flood reversed it, and the generation after Katrina came back toward the city.',
        source: 'Family testimony (Kevin Pedeaux, August 2026).'
      },

      {
        id: 'long-beach',
        name: 'Long Beach, Mississippi',
        kind: 'town',
        lat: 30.3504751, lng: -89.1528176,
        precision: 'town',
        years: '2005–2013',
        people: ['veronicaBrunetti'],
        who: 'Veronica Brunetti Pedeaux, after Katrina',
        headline: 'The last address',
        text: 'She went to the Mississippi coast after the storm and died there in August 2013, aged eighty-nine. They brought her back to Esplanade Avenue to bury her.',
        source: 'Obituary, 2013; Catholic Cemeteries burial register.'
      }

    ]
  };
})();
