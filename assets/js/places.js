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
      work:    { label: 'Where they worked',  color: '#6b5a8a' },
      service: { label: 'Military service',   color: '#4a6b45' },
      town:    { label: 'Town or village',    color: '#3d5a6c' }
    },

    items: [

      /* ── FRANCE — where the Pedeau line begins ────────────────── */

      {
        id: 'bas-de-la-fosse',
        links: [
          { label: 'Dosseul, Le quartier de la Fosse (PDF)', url: 'https://m.shabretagne.com/scripts/files/6698cd66847564.52033787/1998_10.pdf' },
          { label: 'Patrimonia Nantes: la Fosse', url: 'https://patrimonia.nantes.fr/home/decouvrir/themes-et-quartiers/fosse.html' },
        ],
        name: 'Le bas de la Fosse, Nantes',
        kind: 'home',
        lat: 47.20689, lng: -1.57294,
        precision: 'block',
        years: 'to 1799',
        people: ['michelPedeauPere'],
        who: 'Michel Pédeau, charpentier et calfat de marine',
        headline: 'THE POOR END OF THE QUAY — and "bas" is not a guess, it is a documented word',
        text: 'Michel Pédeau, ship\'s carpenter and caulker, is recorded living "au bas de la Fosse." Contemporaries split that quay in two, and the split was social as well as geographic. A study of the quarter\'s own feudal declarations finds the HAUTE FOSSE, near the Port-au-Vin facing the Loire, held "la population la plus aisée du quartier, celle des riches marchands" — the wealthiest people, the rich merchants — while the BASSE FOSSE, further downriver to the west, held "une population plus hétérogène et moins riche." He lived at the working end. And the shipyards came to him: Nantes\' yards moved steadily downstream, occupying the Fosse in 1688, the Chézine by royal decree in 1738, and la Piperie in Chantenay by 1780.',
        source: 'Sandrine Dosseul, "Le quartier de la Fosse à Nantes aux XVIe et XVIIe siècles," Mémoires de la Société d\'Histoire et d\'Archéologie de Bretagne, t. 76 (1998), pp. 215–230; Patrimonia Nantes. ONE HONEST LIMIT: Dosseul\'s evidence is sixteenth and seventeenth century, one to two generations before Michel. The geography of the phrase is settled; its social character is continuity, not proof. Pin is the quay\'s western terminus at the place de Jacksonville.'
      },

      {
        id: 'chantenay',
        links: [
          { label: 'Patrimonia: Fresque des Acadiens', url: 'https://patrimonia.nantes.fr/home/decouvrir/themes-et-quartiers/fresque-des-acadiens.html' },
          { label: 'The seven ships of 1785', url: 'https://www.acadian.org/culture/louisiana/ships-transportation-acadians-louisiana/' },
        ],
        name: 'Chantenay, on the Loire below Nantes',
        kind: 'town',
        lat: 47.20694, lng: -1.59500,
        precision: 'town',
        years: '1777',
        people: ['michelPedeau'],
        who: 'Where the emigrant was born — and where the Acadians of Nantes were living',
        headline: 'THE STRANGEST COINCIDENCE IN THIS ARCHIVE, AND IT IS ONLY A COINCIDENCE SO FAR',
        text: 'Michel Pédeau the younger was born at Chantenay, probably in May 1777 — an independent commune just downriver of Nantes, absorbed by the city only in 1908. Here is what else was happening in that parish in that decade. Nantes held the largest concentration of exiled Acadians in France: about 1,300 arrived by ship in 1775–76, rising to nearly 1,400, and they were placed above all in the parish of SAINT-MARTIN DE CHANTENAY, in the poor Hermitage quarter overlooking the port. They stayed ten years. Then, under a 1785 agreement between Spain and Louis XVI, seven ships carried some 1,600 of them from Nantes and Paimbœuf to Louisiana — and those sent up Bayou Lafourche settled at Valenzuela, the place later renamed ASSUMPTION. Twenty-three years after that fleet sailed, the boy born at Chantenay married an Acadian exile\'s daughter in Assumption Parish.',
        source: 'Patrimonia Nantes, "Fresque des Acadiens"; Acadian.org, ships transporting Acadians to Louisiana, 1785. THIS IS A LEAD, NOT A FINDING: no document names any Pédeau in connection with the Acadians. What the overlap supplies is a plausible mechanism — a neighbourhood that knew exactly where in Louisiana to go — which "he emigrated" does not. The Saint-Martin de Chantenay registers are where it would be proved or killed.'
      },

      {
        id: 'moulin-de-la-marche',
        links: [
          { label: 'Les moulins de Sainte-Pazanne', url: 'https://www.cirkwi.com/en/point-interet/1039781-les-moulins-de-sainte-pazanne' },
        ],
        name: 'The Moulin de la Marche, Sainte-Pazanne',
        kind: 'work',
        lat: 47.10354, lng: -1.80698,
        precision: 'block',
        years: 'early 1700s',
        people: ['pierrePedeauFarinier'],
        who: 'Pierre Pédeau, farinier',
        headline: 'THE MILL IS GONE, BUT THE WORD FARINIER PLACES HIM',
        text: 'At the end of the eighteenth century Sainte-Pazanne had ten mills. One was "le moulin turquois de la Marche, aujourd\'hui disparu" — the turquois mill of la Marche, now vanished — which stood near no. 27 of what is today the rue de l\'Auditoire. "Turquois" is a mill type, not a place. And the local heritage literature uses Pierre\'s exact recorded occupation: the parish mills belonged either to the seigneuries, whose tenants were bound to grind there, or to private "meuniers ou fariniers," who it says generally belonged to the wealthier class of the population. So the first Pédeau this archive can name a trade for was not a poor man. His son left the mill for the Nantes shipyards.',
        source: 'Destination Pornic heritage notice, "Les moulins de Sainte-Pazanne." CORRECTION CARRIED FORWARD: this archive previously placed the mill near the rue de l\'Abreuvoir. Every source found says rue de l\'Auditoire. The rue de l\'Abreuvoir does exist in Sainte-Pazanne but nothing connects it to the mill, so the earlier reading is withdrawn as unverified.'
      },

      {
        id: 'brulon',
        name: 'Brûlon, province of Maine',
        kind: 'town',
        lat: 47.9675049, lng: -0.2355172,
        precision: 'town',
        years: 'born about the 1760s',
        people: ['francoisGaiennie'],
        who: 'Where the Gaiennie immigrant came from',
        headline: 'THE ONLY FAMILY ON THIS TREE FROM THE LOIRE VALLEY INTERIOR',
        text: 'François Gaiennie was born here about the 1760s, in the old province of Maine — today the department of the Sarthe, west of Le Mans and a long way from any sea. He was in New Orleans by the early 1790s, married at St. James Parish in 1793, and was upriver among the Sardet families by 1797. His brother URBAIN crossed too. Every other European origin on this map is a port, a mining town or a mountain village; this one is farm country in the middle of France.',
        source: 'St. James Parish sacramental records; see his page for the identification of Brûlon.'
      },

      {
        id: 'bertrambois',
        name: 'Bertrambois, Meurthe-et-Moselle',
        kind: 'town',
        lat: 48.6052036, lng: 6.9856758,
        precision: 'town',
        years: 'parents married 1808',
        people: ['josephGoubler'],
        who: 'Where the Goublers came from — Lorraine, not Germany',
        headline: 'THE BORDERLAND, WHICH IS NOT THE SAME AS EITHER SIDE OF IT',
        text: 'Emile Joseph Goubler, born 1818 or 1819 and the patriarch of the tomb the Larmann line still uses, came out of a Lorraine family: his parents married at Bertrambois in Meurthe-et-Moselle in 1808. That matters because the Goublers have been taken for Germans. Bertrambois sits in the French-German borderland of Lorraine, close to the Vosges and the old linguistic frontier — a place that was neither simply French nor simply German, and changed hands more than once in the century after they left.',
        source: 'Bertrambois marriage of his parents, 1808 — see his page. The Lorraine identification corrects an older assumption of German origin.'
      },

      {
        id: 'edgard',
        name: 'Edgard, St. John the Baptist Parish',
        kind: 'town',
        lat: 30.0432578, lng: -90.5600869,
        precision: 'town',
        years: '1829–1900s',
        people: ['josephLemoine', 'alonzoLemoine', 'alexisLemoine', 'valeryRousselle', 'genevieveRousselle'],
        who: 'The Lemoines and the Rousselles, on the west bank',
        headline: 'THE RIVER PARISHES — a whole branch that never lived in the city',
        text: 'THE TWO FAMILIES WERE NEIGHBOURS HERE BEFORE THEY JOINED. In the 1880 census both households sit in the 1st Ward, ED 160: ALEXIS LEMOINE, 51, A BRICK MASON whose own father was born in France, is household 12133481 at sheet 7B; VALERY ROUSSEL, 39, A COOPER, is household 12133494 at sheet 8D. THIRTEEN HOUSEHOLDS APART — the enumerator walked from one door to the other the same afternoon. A barrel maker in sugar country, and a brick mason, thirteen doors along. Forty miles up the Mississippi from New Orleans, on the west bank of the German Coast. The oldest Lemoine this archive can name appears here in one line of one register, as the father of a boy baptised at Edgard in November 1829. Valery Rousselle was found here in the 1880 census with nine children, four of whose names Judy Gifford had written down from memory sixty years later. Paul Alonzo Lemoine was born here about 1855. Johanna Lemoine, who married Charles Emile Larmann in 1924 and brought this line into the Bywater, came down from Edgard.',
        source: 'Edgard sacramental registers, November 1829; United States Census, 1880, Edgard, St. John the Baptist Parish, 1st Ward, ED 160, sheet 7B; family notes of Judy Larmann Gifford.'
      },

      {
        id: 'st-james-parish',
        name: 'St. James Parish, on the river',
        kind: 'town',
        lat: 29.9818694, lng: -90.8317608,
        precision: 'town',
        years: '1793–1854',
        people: ['francoisGaiennie', 'josephGervais', 'alphonseSr'],
        who: 'Three generations of Gaiennies before the city',
        headline: 'Where the Frenchman from Maine came ashore and stayed',
        text: 'François Gaiennie married here in 1793, within a couple of years of reaching Louisiana. His son JOSEPH GERVAIS GAIENNIE — born at New Orleans in June 1797 and seventeen years old when the British came up the river in 1814 — was buried here on 9 June 1854, having raised twelve children. His grandson Alphonse Florestan was born here in 1826. The family were river-parish people for three generations before any of them settled in New Orleans, and the line reached this tree when Edna Marie Gaiennie married Numa Pedeaux Sr. in 1917.',
        source: 'St. James Parish sacramental records; see the Gaiennie entries.'
      },

      {
        id: 'gesmold',
        name: 'Gesmold, Kingdom of Hanover',
        kind: 'town',
        lat: 52.2099610, lng: 8.2740577,
        precision: 'town',
        years: 'born 1846, left 1866',
        people: ['johnCasparLarmann'],
        who: 'Where Casper Larmann was born',
        headline: 'HE LEFT THE YEAR PRUSSIA TOOK THE KINGDOM',
        text: 'A village of the Melle district near Osnabrück. Casper was born here on 5 April 1846 and christened two days later. His sister Esther\'s ledger recorded the family reason for leaving in her father\'s own words — he and a brother "came to this country from Hamburg, Germany to escape compulsory military service." The history fits exactly: Gesmold belonged to the Kingdom of Hanover until Prussia annexed it in 1866 after the Austro-Prussian War and brought its conscription with it. Casper emigrated that year or the next, at twenty — the age that mattered. The Osnabrück country sent forty-two per cent of all Hanoverian emigrants to America in that century.',
        source: 'FamilySearch profile with forty-four attached records giving his birth and christening at Gesmold; Esther Larmann\'s handwritten ledger, copied out by Judy Gifford, August 2026.'
      },

      {
        id: 'ibbenburen',
        links: [
          { label: 'Mueller, Westfaelische Auswanderer (PDF)', url: 'https://vereine.genealogy.net/wggf/downloads/BZWF22_24_Auswanderer_RBZ_Muenster.pdf' },
          { label: 'GenWiki: Ibbenbueren', url: 'https://wiki.genealogy.net/Ibbenb%C3%BCren' },
        ],
        name: 'Ibbenbüren, Westphalia',
        kind: 'town',
        lat: 52.2774772, lng: 7.7151417,
        precision: 'town',
        years: 'christened 1 July 1823',
        people: ['henryBernardWellmeyer'],
        who: 'Where Bernard Wellmeyer was christened Bernard Heinrich Wallmeyer',
        headline: 'COAL COUNTRY, A DYING LINEN TRADE, AND A CATHOLIC ISLAND',
        text: 'A town of about 1,600 people when he was christened. The Prussian state had taken its coal pits into its own hands in 1731 and 1747 and ran them directly; there were about two hundred miners in 1819. The other living was hand-woven linen, and it was collapsing — only fourteen commercial looms were left in the town by 1820, and 1817 brought famine from failed harvests. It was also a Catholic pocket in a mostly Protestant county, where Catholic worship had been banned outright from 1675 and only fully restored in 1815, eight years before his christening. Kreis Tecklenburg was among the very highest-emigration districts of the Münster region.',
        source: 'GenWiki (Ibbenbüren and Kreis Tecklenburg); Stadtmuseum Ibbenbüren town chronicle; Friedrich Müller, Westfälische Auswanderer im 19. Jahrhundert. ONE HONEST NOTE: of Müller\'s published records, the documented American chain from Ibbenbüren parish itself pointed mainly at Cincinnati; the New Orleans channel in that district ran through neighbouring parishes.'
      },

      {
        id: 'plataci',
        links: [
          { label: 'Plataci', url: 'https://en.wikipedia.org/wiki/Plataci' },
        ],
        name: 'Plataci, Cosenza, Calabria',
        kind: 'town',
        lat: 39.9004060, lng: 16.4319900,
        precision: 'town',
        years: 'born 5 May 1893',
        people: ['johnBrunetti', 'michelBrunetti'],
        who: 'Where John Brunetti was born — and the village spoke Albanian',
        headline: 'HE WAS CHRISTENED GIOVANNI IN ITALIAN AND XHUAN IN ARBËRISHT',
        text: 'A mountain village in the Pollino, and one of the Arbëresh communities of southern Italy — descendants of Albanians who crossed the Adriatic after the Ottoman conquest and kept their language for five centuries. Plataci spoke ARBËRISHT. His birth act of 5 May 1893 names his father Michele Brunetti and his mother Domenica Trojano, and it is the document that closed the chain from a New Orleans marriage licence back to the village.',
        source: 'Plataci birth register, 5 May 1893, read from the original image; Ellis Island manifest, 1912; Orleans Parish marriage record, June 1921. The birth act is reproduced on his page.'
      },

      {
        id: 'saint-enogat',
        name: 'Saint-Énogat, Brittany',
        kind: 'town',
        lat: 48.6359188, lng: -2.0687571,
        precision: 'town',
        years: 'baptised 29 November 1780',
        people: ['florenceAucoin'],
        who: 'Where the Acadian exile\'s daughter was baptised',
        headline: 'BORN IN EXILE, AND ON A SHIP TO LOUISIANA AT FOUR YEARS OLD',
        text: 'Florianne-Marguerite Aucoin was born on 28 November 1780 and baptised here the next day — in Brittany, because her people had already been driven out of Acadia. She is on the list of Acadians at Saint-Malo in September 1784. The following year she crossed the Atlantic aboard LA VILLE D\'ARCHANGEL with 312 others, aged four, and grew up on Bayou Lafourche. She married Michel Pédeau of Nantes at Plattenville in 1808, was widowed by 1814, married again in the same church, and died in Assumption Parish in 1852 at seventy-two.',
        source: 'Diocese of Baton Rouge Catholic Church Records vol. 3, as abstracted by Steven A. Cormier, Acadians in Gray; the 1785 sailing lists.'
      },

      {
        id: 'bordeaux',
        name: 'Bordeaux, Gironde',
        kind: 'town',
        lat: 44.8412250, lng: -0.5800364,
        precision: 'town',
        years: 'born January 1838',
        people: ['alfredMoizant'],
        who: 'Where Alfred Moizant was born',
        headline: 'THE CITY THAT ENDED THE AIRPORT STORY',
        text: 'The family held for generations that the Moizants were kin to John Moisant, the aviator the New Orleans airport is named for. They were not, and it is no longer a matter of argument: Alfred\'s death record and his 1933 obituary between them give his birth at Bordeaux to Alfred Moizant and Clémence Chapeau. The aviator\'s father Medard was born in Quebec. Two families, two continents, no link. One small confirmation sits in his own household — the daughter the 1900 census calls "Clemantine," named for a grandmother in Bordeaux she would never meet.',
        source: 'Louisiana, Orleans, Death Records and Certificates — Alfred L. Moizant, 23 February 1933; obituary, New Orleans, 23 February 1933; voter registration, 9 December 1931.'
      },

      {
        id: 'machecoul',
        links: [
          { label: 'Machecoul, InfoBretagne', url: 'https://www.infobretagne.com/machecoul.htm' },
        ],
        name: 'Machecoul — La Trinité and Sainte-Croix',
        kind: 'church',
        lat: 46.99246, lng: -1.81875,
        precision: 'block',
        years: '1683 · 1705 · 1729',
        people: ['celtonPedeau', 'pierrePedeauFarinier', 'anneBety'],
        who: 'The deepest ground this family can be traced to',
        headline: 'AND THE SURNAME IS STILL THICKEST HERE',
        text: 'Pierre Pédeau was born about 1683 in the parish of SAINTE-CROIX, the older of Machecoul\'s two parishes, and married there twice — Jeanne Garnier in 1705, Anne Béty in January 1729. The 1705 act is the one that names his father, in a hand three centuries have nearly erased. From 1581 Machecoul was the capital of the duché-pairie de Retz, one of the greatest lordships in Brittany; its castle had belonged to Gilles de Rais until his execution in 1440. And the name has not left: indexed French records place PEDEAU more thickly at Machecoul than at any other commune in France.',
        source: 'InfoBretagne, Machecoul; Filae surname index (record occurrences, not people). TWO DATING CAVEATS: the church of La Trinité standing today is neo-Gothic, built 1863–1881, so the acts were witnessed in its medieval predecessor; and the ruins of Sainte-Croix could not be geolocated, so this pin is on La Trinité. Sainte-Pazanne\'s own church, where Michel was baptised in 1739, was burned in the Revolution and rebuilt in 1819.'
      },

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
        id: 'casper-independence',
        links: [
          { label: 'Sanborn 1893 Vol. IV, Library of Congress', url: 'https://www.loc.gov/item/sanborn03376_004/' },
        ],
        name: '32 Independence Street — the 600 block today',
        kind: 'home',
        lat: 29.96211, lng: -90.03930,
        precision: 'block',
        years: '1878',
        people: ['johnCasparLarmann'],
        who: 'John Casper Larmann, carpenter — his earliest traceable address',
        headline: 'FOUND ON A FIRE INSURANCE MAP, FIFTEEN YEARS AFTER HE LEFT IT',
        text: 'Soards\' 1878 puts him at 32 Independence. That number is worthless on a modern map, because New Orleans renumbered every street in 1894 — so the way in was a Sanborn fire insurance map, surveyed under the old numbers and drawing every building. The 1893 volume\'s own street index sends "Independence, 1–64" to plate 148, and plate 148 writes the numbers along the block between Royal and Chartres: 37, 35, 33, 31, 25, 19 on one side; 30, 20, 18, 12½ on the other. Number 32 belongs above 30, at the Royal corner — and by 1893 that ground held no buildings at all. It is drawn as an open yard, lettered LUMBER PILES.',
        source: 'Sanborn Fire Insurance Map from New Orleans, 1893, Vol. IV, plate 148 — Library of Congress, Geography and Map Division. Reproduced on his page. The pin sits on the surveyed Independence × Royal intersection; the block runs from there down to Chartres at 29.96113, -90.03959, and is the 600 block in modern numbering.'
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
        id: 'pedeaux-west-end',
        links: [
          { label: 'WWII draft cards, 4th registration', url: 'https://catalog.archives.gov/id/576248' },
        ],
        name: '6509 West End Boulevard',
        kind: 'home',
        lat: 30.0093577, lng: -90.1140305,
        precision: 'exact',
        years: '1942',
        people: ['numaSr', 'ednaGaiennie'],
        who: 'Numa Louis Charles Pedeaux Sr. and Edna Gaiennie',
        headline: 'THE ONE BRANCH THAT LEFT THE OLD WARDS ALTOGETHER',
        text: 'On his 1942 draft card Numa Sr. printed this address in his own hand, gave his telephone as AU-1452, and named "EDNA PEDEAUX (WIFE), 6509 West End Blvd." as the person who would always know where he was. Look where it is. Every other home on this map is packed into the downriver wards — Bywater, Marigny, the Ninth. This one is out at Lakeview, near the lake, five miles from Casper Larmann\'s door. The Pedeaux were the branch that moved to the new suburbs while the Larmanns stayed downtown, and it would be another generation before a marriage brought the two halves of this tree back into the same city again.',
        source: 'United States, World War II Draft Registration Cards, 1942 — 4th Registration, State of Louisiana; serial U-1108, signed Numa L. Pedeaux. The card is reproduced on his page.'
      },

      {
        id: 'mcdonogh-16',
        links: [
          { label: 'NOPL obituary index', url: 'https://nolacityarchives.org/genealogy-guide/obituary-index/' },
        ],
        name: 'McDonogh School No. 16 — 1814 Bourbon Street',
        kind: 'work',
        lat: 29.9546820, lng: -90.0691720,
        precision: 'block',
        years: 'c. 1907–1947',
        people: ['charlesEmileLarmann'],
        who: 'Where Leontine Moore taught for forty years',
        headline: 'THE CLASSROOM THAT PAID FOR THE HOUSE THAT RAISED THE ORPHAN',
        text: 'Soards\' New Orleans directories print her the same way three years running — 1908, 1910 and 1912: "MOORE Leontine V. Miss, teacher McDonogh School No. 16, 1814 Bourbon, r. 927 Lafayette av." Her obituary index note in 1947 says forty years at that school. This is where those forty years happened, and it is why two unmarried sisters could own their house outright. The McDonogh schools were built from the bequest of John McDonogh, who left his fortune to public education in New Orleans and Baltimore.',
        source: 'Soards\' New Orleans City Directory, 1908 p. 762, 1910 p. 817, and 1912 — all giving the school and its Bourbon Street address; New Orleans Public Library Obituary Index for the forty years. The directories give the school\'s street number but no building survives under that number in modern addressing, so this pin is on the block.'
      },

      {
        id: 'wellmeyer-derbigny',
        name: '2626 N. Derbigny Street',
        kind: 'home',
        lat: 29.9737, lng: -90.0674,
        precision: 'street',
        years: '1912',
        people: ['henryJohnWellmeyer'],
        who: 'Henry J. Wellmeyer — machinist, in his own house',
        headline: 'THE YEAR HE MOVED OUT',
        text: 'The 1912 directory: "WELLMEYER HENRY J MACHINIST r 2626 N DERBIGNY." Two years earlier he and his father John were both at 1029 Alvar. This is the year he sets up on his own — still a machinist, but at his own address, across the neighbourhood from his father.',
        source: 'New Orleans city directory 1912, p. 1164 — HathiTrust uiug.30112045772842, scan 1168. PIN IS STREET-LEVEL: the block is certain from the number, the exact lot is not.'
      },

      {
        id: 'wellmeyer-alvar',
        name: '1029 Alvar Street — and 3903 N. Rampart round the corner',
        kind: 'home',
        lat: 29.9649846, lng: -90.0365484,
        precision: 'exact',
        years: '1908–1912',
        people: ['henryJohnWellmeyer'],
        who: 'Henry Wellmeyer — labourer, then machinist',
        headline: 'A TRADE RISING, TRACKED THREE DIRECTORIES RUNNING',
        text: 'Soards\' catches him moving up and moving house at the same time. 1908: "Wellmeyer Henry, LAB. r. 3903 N. Rampart" — a labourer, with Elizabeth and John at the same address. 1910: "Wellmeyer Henry, MACHINIST, r. 1029 Alvar." 1912: "Wellmeyer Henry J, MACHINIST, r. 2626 N. Derbigny." The first two addresses are thirty-five metres apart — he moved around the corner, not across town. In four years he goes from labourer to machinist, which in New Orleans then meant the railway shops, the foundries or the riverfront.',
        source: 'Soards\' New Orleans City Directory, 1908 p. 1100, 1910 p. 1177, and 1912. Pin is on the 1910 address; 3903 N. Rampart is the corner behind it.'
      },

      {
        id: 'neville-canal',
        links: [
          { label: 'Soards 1912 at HathiTrust', url: 'https://babel.hathitrust.org/cgi/pt?id=uiug.30112045772842&seq=873' },
        ],
        name: 'W. H. Neville — 931 Canal Street',
        kind: 'work',
        lat: 29.9552020, lng: -90.0712633,
        precision: 'block',
        years: '1912',
        people: ['numaSr'],
        who: 'Numa Pedeaux Sr.\'s employer, thirty years before Maritime Electric',
        headline: 'HE WAS AN ELECTRICIAN THE WHOLE TIME',
        text: 'The 1912 directory prints him in full: "PEDEAUX Numa J jr, ELECTRICIAN, W H Neville, 931 Canal, r. West End boul." He is twenty-four. Three things fall into place at once — he was already an electrician in 1912, he was already living on West End Boulevard, and he was working a Canal Street address in the years the city was wiring itself for electric light. Thirty years later his draft card still says electrical work, at Maritime Electric on Commerce Place.',
        source: 'Soards\' New Orleans City Directory, 1912, p. 871. The 1910 directory also lists "Pedeaux Numa, electrician," at a Columbus Street address the OCR truncates — unverified and therefore not plotted.'
      },

      {
        id: 'maritime-electric',
        links: [
          { label: 'WWII draft cards, 4th registration', url: 'https://catalog.archives.gov/id/576248' },
        ],
        name: 'Maritime Electric Co. — 615 Commerce Place',
        kind: 'work',
        lat: 29.9452737, lng: -90.0666451,
        precision: 'block',
        years: '1942',
        people: ['numaSr'],
        who: 'Where Numa Pedeaux Sr. worked',
        headline: 'A ship-electrical firm in the Warehouse District, in the middle of the war',
        text: 'His draft card names his employer as MARITIME ELEC. CO. and his place of business as 615 Commerce Place. In 1942 New Orleans was building and repairing ships at a furious rate — Higgins Industries alone would turn out thousands of landing craft — and a marine electrical company on the riverfront edge of the Warehouse District was in the middle of that work. He was fifty-four and registering for the fourth draft, the one for older men, which is why the card exists at all.',
        source: 'United States, World War II Draft Registration Cards, 1942, serial U-1108. "Commerce Place" does not appear in modern New Orleans addressing, so this pin sits on Commerce Street in the Warehouse District rather than on a doorway — the block is right, the building is not identified.'
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
        links: [
          { label: 'NOPL: changes in street names', url: 'https://nolacityarchives.org/changes-in-street-names/' },
          { label: 'NOPL obituary index', url: 'https://nolacityarchives.org/genealogy-guide/obituary-index/' },
        ],
        name: '727 Franklin Avenue',
        kind: 'home',
        lat: 29.9651816, lng: -90.0511917,
        precision: 'exact',
        years: 'by 1935 – 1947/48',
        people: ['charlesEmileLarmann'],
        who: 'Leontine Moore, schoolteacher, and her sister Marie Louise — the house they owned',
        headline: 'TWO SELF-SUPPORTING WOMEN, AND FORTY YEARS IN A CLASSROOM',
        text: 'The 1940 census finds them here together and independent: Leontine, 60, head of the house, single; Louise, 62, her sister. They OWNED it, valued at $2,200, with no man in the household. And the New Orleans Public Library\'s obituary index gives Leontine the one line of biography that changes how you read all of this — "TEACHER AT THE McDONOGH NO. 16 SCHOOL FOR 40 YEARS." She died in March 1947; her sister, indexed as MARIE LOUISE, followed on 12 May 1948, aged seventy-one. The boy they raised was not taken in out of charity. He grew up in a house two working women had bought and kept.',
        source: 'United States Census, 1940 — New Orleans Ward 9, ED 36-246, sheet 11A, line 38, household 255 (NARA T627). The enumerator wrote the street as "Almonaster"; the house number was checked digit by digit against 919, 923 and 925 on the same sheet, whose nines are looped where this seven is not. Occupation from the New Orleans Public Library Obituary Index, 1804–1972. ONE CAVEAT KEPT IN VIEW: a search of digitised New Orleans papers finds no occurrence of "727 Almonaster" in 1947 or 1948, so the newspapers have not corroborated the number. That is weak evidence either way — death-notice type is small and OCR of it is poor — and the census sheet remains the primary source.'
      },

      {
        id: 'moore-franklin-927',
        links: [
          { label: 'NOPL: changes in street names', url: 'https://nolacityarchives.org/changes-in-street-names/' },
        ],
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
        links: [
          { label: 'Holy Trinity parish history', url: 'https://www.neworleanschurches.com/holytrinity/holytrin.htm' },
        ],
        name: 'Holy Trinity Church — 721 St. Ferdinand Street',
        kind: 'church',
        lat: 29.9646498, lng: -90.0493592,
        precision: 'exact',
        years: 'founded 1847 · school 1871 · closed 1997',
        people: ['johnCasparLarmann', 'buddy'],
        who: 'The German national church — Casper\'s parish, and Buddy\'s school',
        headline: 'He died 123 metres from his own altar — and four generations later his descendant had to fake being German to get in',
        text: 'Holy Trinity stood at St. Ferdinand and Dauphine, founded in 1847 for the German Catholics below Canal Street, in a stretch of the Marigny then called LITTLE SAXONY. Casper\'s obituary names it as his parish. Its pastor was Father Peter Leonhard Thevis, who in the yellow fever of 1867 vowed a chapel to St. Roch if his congregation were spared. Not one Holy Trinity parishioner died. He built the chapel, founded the cemetery around it in 1875, and lies beneath its floor. The parish opened a school in 1871 under Benedictine sisters — and in the 1960s Buddy Pedeaux, who had French, Italian, Albanian and Croatian ancestors and not one German among them, was enrolled in it after his mother told the parish otherwise. He grew up and married a great-great-great-granddaughter of Casper Larmann. The church closed in 1997 and is now the Marigny Opera House.',
        source: 'Casper\'s obituary; parish history. Distance measured between the two geocoded points on this map — his house at 2833 Dauphine is the next marker over.'
      },

      {
        id: 'st-vincent-de-paul-church',
        links: [
          { label: 'St. Vincent de Paul (Blessed Seelos)', url: 'https://www.neworleanschurches.com/stvincent/index.htm' },
        ],
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
        links: [
          { label: 'St. Cecilia, New Orleans Churches', url: 'https://www.neworleanschurches.com/stcecilia/stcecilia.htm' },
        ],
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

      {
        id: 'wellmeyer-grocery',
        links: [
          { label: 'Succession of Bernard Wellmeyer, 34 La. Ann. 819', url: 'https://static.case.law/la-ann/34/cases/0819-01.json' },
          { label: 'Soards 1875 at HathiTrust', url: 'https://babel.hathitrust.org/cgi/pt?id=umn.31951002253299l&seq=705' },
        ],
        name: 'B. H. Wellmeyer\'s grocery — Clouet at N. Rampart',
        kind: 'work',
        lat: 29.96639, lng: -90.04457,
        precision: 'block',
        years: '1866–1884',
        people: ['henryBernardWellmeyer', 'johnWellmeyer'],
        who: 'The German immigrant\'s store — and the family lived over it',
        headline: 'A CABINETMAKER WHO BECAME A GROCER, AND A WIDOW WHO KEPT THE STORE',
        text: 'Soards\' 1875 prints it exactly: "WELLMEYER Bernard H. GROCER, Clouet, ne. cor. N. Rampart" — and on the same page, "Wellmeyer John, clk. B. H. Wellmeyer, r. Clouet, ne. cor. N. Rampart." His son clerked in his father\'s store and slept in the same building. The trade arc runs cabinet maker in 1861 and 1866, then grocer from 1866 to his death in 1880. And then this: the 1884 directory reads "WELLMEYER GERTRUDE MRS. GROCERY, 761 N. Rampart." Four years widowed, she was running it herself.',
        source: 'Gardner\'s 1861 and 1866; Soards\' 1875 (pp. 701 and 797), 1878 and 1883; Polk\'s 1876 and 1884. The street number 761 is pre-1894 and does not map; THE CORNER IS THE RELIABLE LOCATOR, and it still exists.'
      },

      {
        id: 'wellmeyer-conti',
        name: '1322 Conti Street, Apt. S',
        kind: 'home',
        lat: 29.9590427, lng: -90.0719574,
        precision: 'exact',
        years: '1942',
        people: ['henryJohnWellmeyer'],
        who: 'Henry John Wellmeyer, at fifty-six',
        headline: 'THE ONLY MAN ON THIS MAP WHOSE CARD SAYS "UNEMPLOYED"',
        text: 'His 1942 draft card gives this address, with "Mrs. H. J. Wellmeyer, same address" as the person who would always know where he was. Under employer, one word: UNEMPLOYED. He was a machinist by trade and had been since 1910. The card also describes him — five foot five, 162 pounds, hazel eyes, grey hair, ruddy complexion, and a scar on the palm of his left hand.',
        source: 'United States, World War II Draft Registration Cards, Fourth Registration, Louisiana — NARA RG 147, Local Board No. 4, Orleans Parish, registered 27 April 1942.'
      },

      /* ── GRAVES ───────────────────────────────────────────────── */

      {
        id: 'st-roch-cem',
        links: [
          { label: 'Burial record: John Casper Larmann', url: 'https://nolacatholiccem.discovereverafter.com/profile/36953104' },
        ],
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
        links: [
          { label: 'Burial record: John Brunetti', url: 'https://nolacatholiccem.discovereverafter.com/profile/36915133' },
          { label: 'Burial record: Herbert John Pedeaux', url: 'https://nolacatholiccem.discovereverafter.com/profile/36915129' },
        ],
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
        links: [
          { label: 'Find a Grave: St. Vincent de Paul No. 3', url: 'https://www.findagrave.com/cemetery/1393396' },
        ],
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
        id: 'greenwood',
        links: [
          { label: 'Numa Pedeaux Sr., Find a Grave', url: 'https://www.findagrave.com/memorial/63452655/numa_louis_charles-pedeaux' },
          { label: 'Lorraine Marie Pedeaux, Find a Grave', url: 'https://www.findagrave.com/memorial/63452654/lorraine_marie-pedeaux' },
        ],
        name: 'Greenwood Cemetery — the A. F. Gaiennie tomb',
        kind: 'grave',
        lat: 29.9848458, lng: -90.1130588,
        precision: 'block',
        years: '1932–2014',
        people: ['numaSr', 'ednaGaiennie'],
        who: 'The Pedeaux who married into the Gaiennies, and are buried as Gaiennies',
        headline: 'FIVE OF THEM, IN HIS WIFE\'S FAMILY TOMB — including a child of six',
        text: 'The plot is recorded as "5 Palmetto Magnolia Hawthorne, A. F. GAIENNIE TOMB." In it: NUMA LOUIS CHARLES PEDEAUX SR., d. 17 July 1958 · EDNA MARIE GAIENNIE, his wife, born at Thibodaux, d. 21 April 1962 · ROBERT LOUIS, their eldest son, 1918–1980 · NUMA LOUIS JR., the IBEW electrician of sixty years, 1930–2014 · and LORRAINE MARIE PEDEAUX, born 14 November 1925 and dead on 31 January 1932, AGED SIX. Her death notice ran in the Times-Picayune the next morning, page 2, column 8. No cause is recorded anywhere this archive has reached.',
        source: 'Find a Grave memorials 63452655, 63452656, 34208483, 137366059 and 63452654; New Orleans Public Library Obituary Index for the death dates and notice citations. The tomb itself has not been located within the cemetery, so the pin is on the grounds.'
      },

      {
        id: 'stvdp-no1',
        links: [
          { label: 'Bernard Henry Wellmeyer, Find a Grave', url: 'https://www.findagrave.com/memorial/177528019/bernard-henry-wellmeyer' },
          { label: 'Charles Emile Larmann, Find a Grave', url: 'https://www.findagrave.com/memorial/256882338/charles-emile-larmann' },
        ],
        name: 'St. Vincent de Paul Cemetery No. 1 — Louisa Street',
        kind: 'grave',
        lat: 29.9705109, lng: -90.0410033,
        precision: 'block',
        years: '1880–1948',
        people: ['henryBernardWellmeyer', 'johnWellmeyer', 'charlesEmileLarmann', 'johannaLemoine'],
        who: 'The older ground, next to No. 3',
        headline: 'NOT THE SAME CEMETERY AS THE WELLMEYER TOMB — and the distinction matters',
        text: 'This archive has been careful to say the Wellmeyer tomb is in St. Vincent de Paul No. 3. But an older layer of this family is in No. 1, immediately beside it: BERNARD HENRY WELLMEYER the grocer, d. 1880 · his wife GERTRUDE CAROLINE LOBMEYER, d. 1903 · their son JOHN WELLMEYER, d. 1922 · his wife CATHERINE LANGE, d. 1930 · and the schoolteacher LEONTINE MOORE with her sister MARIE LOUISE. Charles Emile Larmann and Johanna Lemoine are here too, in a tomb inscribed "FAMILY OF JOSEPH GOUBLER" — which is their own line, through Charles\'s grandmother Valentine Goubler Moore.',
        source: 'Find a Grave memorials 177528019, 177527347, 177526988, 127973803, 291559760, 291559780, 256882338 and 256882339. ONE WARNING WORTH KEEPING: there are two unrelated St. Vincent de Paul cemeteries in New Orleans. This family\'s are the Louisa Street group in the Bywater. The other is uptown on Soniat Street and has nothing to do with them.'
      },

      {
        id: 'stlouis-no2',
        links: [
          { label: 'Edward Hector Pedeaux, Find a Grave', url: 'https://www.findagrave.com/memorial/208703495/edward_hector-pedeaux' },
        ],
        name: 'St. Louis Cemetery No. 2',
        kind: 'grave',
        lat: 29.9607820, lng: -90.0754099,
        precision: 'block',
        years: '1930',
        people: ['pierreNuma'],
        who: 'Edward Hector Pedeaux, the brother who went to the city first',
        headline: 'The one who led the family off the bayou, buried in town',
        text: 'Edward Hector Pedeaux, born at Labadieville on 22 February 1876, was manager of the implement department at Stauffer, Eshleman & Co. on Canal Street, and he was established in New Orleans by the 1908 directory — years before his father and brothers appear there. He died on 25 January 1930 and was buried here rather than carried home. His father Pierre Numa, dying nineteen months later, went back to Labadieville instead.',
        source: 'Find a Grave memorial 208703495; New Orleans Public Library Obituary Index (Times-Picayune, 26 January 1930, p. 2 col. 6) and the archdiocese\'s burial register, which agree on 25 January against Find a Grave\'s 15 January.'
      },

      {
        id: 'cypress-grove',
        links: [
          { label: 'NOPL obituary index', url: 'https://nolacityarchives.org/genealogy-guide/obituary-index/' },
        ],
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
        links: [
          { label: 'Army Cemeteries Explorer', url: 'https://ancexplorer.army.mil/publicwmv/' },
        ],
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
        id: 'plattenville',
        links: [
          { label: 'Diocese of Baton Rouge records', url: 'https://diobr.org/archives-publications' },
          { label: 'Acadians in Gray: Aucoin appendix', url: 'http://www.acadiansingray.com/Appendices-ATLAL-AUCOIN.htm' },
        ],
        name: 'Church of the Assumption, Plattenville',
        kind: 'church',
        lat: 29.99062, lng: -91.02368,
        precision: 'exact',
        years: '26 January 1808',
        people: ['michelPedeau', 'florenceAucoin'],
        who: 'Where the Nantes emigrant married the Acadian girl',
        headline: 'AN EIGHTEENTH-CENTURY PARISH, AND THE PLACE THIS FAMILY BEGINS IN AMERICA',
        text: 'On 26 January 1808 Michel Pédeau, son of Michel Pédeau and Jeanne Muraille of Nantes, married FLORIANNE-MARGUERITE AUCOIN here. Her story is the harder one. Born 28 November 1780 and baptised the next day at Saint-Énogat in Brittany, she is on the list of Acadians at Saint-Malo in September 1784, and she crossed to Louisiana AGED FOUR aboard LA VILLE D\'ARCHANGEL — one of the seven ships of 1785 — with 312 people on board. She appears in the Valenzuela censuses of 1795, 1797 and 1798. Michel was dead within six years and she remarried in this same church in November 1814, to François Barrilleaux. The parish was founded in 1793, in the last years of Spanish Louisiana — registers opened 20 April 1793 by the Spanish Capuchin Fr. Bernardo de Deva — and the building standing now went up in 1856. THIS PIN USED TO CALL IT THE OLDEST PARISH IN LOUISIANA. IT IS NOT, and this archive’s own pages disprove it: St. Louis in New Orleans dates from the 1720s and St. Charles Borromeo at Destrehan from 1723, both a lifetime earlier. The superlative circulates on tourist pages; it is not in the diocese’s own history, and it should never have been here.',
        source: 'Diocese of Baton Rouge Catholic Church Records, vol. 3, pp. 37, 683 (first marriage) and 37, 69 (second), as abstracted by Steven A. Cormier, Acadians in Gray. Witnesses to the 1808 marriage: Pierre-Hypolite Brais, Jean-Baptiste Tojan and Isaac Landry.'
      },

      {
        id: 'albemarle-4th-ward',
        links: [
          { label: '1860 Assumption census, USGenWeb', url: 'http://us-census.org/pub/usgenweb/census/la/assumption/1860/pg00021.txt' },
        ],
        name: 'The 4th Ward, Albemarle post office',
        kind: 'town',
        lat: 29.94048, lng: -91.02482,
        precision: 'block',
        years: '1860',
        people: ['marieCancienne', 'pierreNuma'],
        who: 'Where the widow held the farm together',
        headline: 'NOT LABADIEVILLE — THE FAMILY WAS TEN MILES UP THE BAYOU',
        text: 'The 1860 census enumerator wrote the ward and post office on every page, and it puts this family in the 4th Ward, post office ALBEMARLE, on the Napoleonville stretch of Bayou Lafourche — not at Labadieville, where they would later be buried. Albemarle was a Pugh family sugar plantation; the Pughs held thirteen plantations outright and more than fifteen hundred people in bondage on the eve of the war. The Pedeaux moved the ten miles down to Labadieville between 1860 and 1876, and Numa\'s 1871 marriage to Eulalie Borne is the obvious hinge.',
        source: 'United States Census, 1860 — Assumption Parish, 4th Ward, reel M653-407, p. 29, enumerated 14 June 1860 by Louis U. Folse; USGenWeb Census Project transcription by Audrey B. Westerman. NO COORDINATE EXISTS for Albemarle Plantation in any gazetteer searched, so this pin sits on Napoleonville, the nearest reliable anchor on the same bank.'
      },

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
