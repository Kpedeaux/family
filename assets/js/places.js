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
        years: 'until 1921',
        people: ['johnCasparLarmann'],
        who: 'John Casper Larmann',
        headline: 'The carpenter\'s house — and he died in it',
        text: 'Casper Larmann landed at New Orleans in 1866 and was a carpenter of Local 1312. His obituary places his death at home on Dauphine Street in November 1921, aged seventy-five.',
        source: 'Obituary, New Orleans, November 1921; Orleans Parish death record — quoted in full on his page.'
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
        id: 'moore-franklin',
        name: 'Franklin Avenue — house number not yet found',
        kind: 'home',
        lat: 30.0197812, lng: -90.0517446,
        precision: 'street',
        years: 'c. 1904–1920s',
        people: ['charlesEmileLarmann'],
        who: 'Leontine and Louise Moore, and the nephew they raised',
        headline: 'THE PIN IS ON THE STREET, NOT THE HOUSE — and that is the point',
        text: 'Charles Emile Larmann lost his father at eighteen months and his mother at eighteen years, and was brought up by two unmarried aunts, his mother\'s sisters Leontine ("Tene") and Louise Moore, in their house on Franklin Avenue. John Larmann Sr. later pointed the house out to his grandson. The street is remembered; the number is not, and this map will not invent one. Franklin Avenue runs from the river all the way to the lake, so this marker sits at the middle of it as a placeholder — deliberately imprecise until a census sheet or a city directory gives the number.',
        source: 'Family recollection, corroborated by the household censuses on Charles Emile\'s page. THE NUMBER IS AN OPEN RESEARCH ITEM.'
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
        id: 'meraux',
        name: 'Meraux, St. Bernard Parish',
        kind: 'town',
        lat: 29.9269610, lng: -89.9197890,
        precision: 'town',
        years: 'from the 1960s',
        people: ['kevin', 'buddy'],
        who: 'Where the line comes to rest',
        headline: 'The end of the road down the river',
        text: 'Buddy and Jean raised Kevin, Aaron and Catherine here. Eleven generations from a ship\'s carpenter\'s son on the Nantes quayside to a house in St. Bernard Parish.',
        source: 'Family.'
      },

      {
        id: 'chalmette',
        name: 'Chalmette, St. Bernard Parish',
        kind: 'town',
        lat: 29.9441960, lng: -89.9644624,
        precision: 'town',
        years: '1950s–1992',
        people: ['herbertJoseph', 'veronicaBrunetti'],
        who: 'Herbert Joseph and Veronica Pedeaux',
        headline: 'Out of the city, down the parish road',
        text: 'The generation that left New Orleans proper. Herbert Joseph died here in July 1992.',
        source: 'Orleans and St. Bernard records; obituaries.'
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
