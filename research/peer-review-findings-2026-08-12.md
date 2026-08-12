# Peer review findings — 12 August 2026

Independent skeptical peer review of family.kevinpedeaux.com (index.html, research.html,
assets/js/data.js, assets/js/places.js, research/claims-ledger.csv). Seven review dimensions,
every finding adversarially re-verified against the files by a second reviewer; 132 findings
survived, zero refuted. Findings are grouped by review dimension below; many defects were found
by more than one dimension, so expect overlap. Where the verifier corrected a detail (usually a
line number), the CORRECTION line is authoritative over the finding body.

Status: working file for the fix pass. Untracked on purpose — Kevin decides whether it is
ever committed or published.



# DIMENSION: cross-page-contradictions

## [critical][adjusted] Footer audit numbers and downloadable claims ledger contradict the live page en masse
LOC: index.html:443-447; research/claims-ledger.csv (125 rows); assets/js/data.js (95 citations)
QUOTE: Of 267 claims, 89 have a source that can be pointed at and 121 are marked [UNVERIFIED] on the page itself
PROBLEM: The footer's flagship transparency claim no longer matches either the page or the ledger it links. data.js now carries only 12 '[UNVERIFIED' markers — 95 citations were flipped to '[VERIFIED against the original, August 2026 — see the verification log]' (backed by research/verification-log-*.md dated 12 Aug 2026) — yet the downloadable ledger still records 125 claims whose citation_on_page column reads '[UNVERIFIED — not re-checked in the August 2026 audit]' with provenance 'H UNVERIFIED / FLAG' (e.g. row 7, herbertJoseph birth record, which the page and verification-log-la-sos.md line 98 both show as CONFIRMED). The ledger also has 271 data rows, not 267. A professional downloading the CSV to audit the site will find its provenance column contradicting roughly a third of the page's citations.
CORRECTION: data.js carries 10 '[UNVERIFIED' markers (not 12) and 97 '[VERIFIED against the original' citations (not 95); the ledger has 271 data rows. The footer's '121 marked [UNVERIFIED]' actually still matches the ledger's 121 provenance-H rows — footer and ledger agree with each other and both contradict the page, which now shows only 10.

## [critical][confirmed] Dead man described as standing witness at 1921 wedding
LOC: research.html:385-386; conflicts with data.js:1610,1424
QUOTE: married in New Orleans in June 1921, with Veronica's parents Anthony Franovich and Melanie Moizant standing as witnesses
PROBLEM: Anthony Franovich died 19 July 1911 (data.js anthonyFranovich, death '19 July 1911'; Veronica 'was nine when her father died'). The tree page says only that the parents' names appear ON the marriage record ('Also on the record: An[thony] Franovich and Melan[ie] Moyant — the bride's parents'), which is normal for a licence. research.html converts that into the parents physically 'standing as witnesses' — impossible for a man ten years dead, and a factual impossibility any professional reader will catch.

## [critical][confirmed] Research page still guesses Forano/Fortino for a mother the tree documents as Trojano
LOC: research.html:570-573 and 397; conflicts with data.js:1456,1497; also index.html:184,193
QUOTE: There is no Forano in the Plataci records read so far — but there is Fortino, and Fortini. It would not be the first name in this archive that an American clerk heard sideways.
PROBLEM: data.js (johnBrunetti birth act, read 11 Aug 2026, image in repo) establishes the mother was 'DOMENICA TROJANO, not "Forano": the 1921 New Orleans clerk misread a handwritten Trojano', and domenicaForano's entry gives surname 'Trojano'. research.html's Brunetti sections were never updated: they present 'Domenica Forano' as her name, float Fortino/Fortini as the likely truth, and still list 'Plataci's own registers' as unread future work ('What remains, for gold-plating') though the tree shows the register act quoted in full. index.html's crossings section likewise names 'Michele Brunetti and Domenica Forano' with no mention of the correction. Two pages give a direct ancestor two different surnames, and the research page's speculation names the wrong one.

## [critical][adjusted] Alexis Lemoine entry denies the very parent link it draws as Documented
LOC: assets/js/data.js:2868; conflicts with data.js:2843-2845,2851,2798,2818; index.html:390-399; claims-ledger.csv row 188
QUOTE: Neither is drawn on this tree yet: no record read here names Joseph and Alexis together.
PROBLEM: The same entry sets father: 'josephLemoine', mother: 'marieRibas' with evidence 'verified' (Documented badge) and displays the baptism record naming them, and index.html's Method section announces 'The Lemoine wall came down... produced Alexis's baptism, and with it two names never spoken in this family: Joseph Lemoine and Marie Ribas.' The stale note flatly contradicts both. Worse, the SAME act (SJBED B7, 49) carries three different statuses: '[SOURCE NOT ONLINE — cited from earlier research; the original document is needed]' on Alexis's own record (data.js:2851), '[VERIFIED against the original, August 2026]' on Joseph's and Marie's records (data.js:2798, 2818), and '[UNVERIFIED — not re-checked]' / 'no source I personally opened' in the ledger (row 188). A reader cannot tell what evidentiary basis the Documented badge actually has.
CORRECTION: Locations: stale note is data.js:2910 (not 2868); '[SOURCE NOT ONLINE]' on Alexis's baptism is data.js:2887 (not 2851); the '[VERIFIED]' copies are data.js:2834 and 2854 (not 2798/2818); the relevant ledger rows are 184, 185 and 187 (row 188 is the Poppone-godfather record, also H UNVERIFIED).

## [critical][adjusted] Genevieve Rousselle note reasserts the death the same entry disclaims
LOC: assets/js/data.js:2919; contradicts data.js:2898-2899,2916 and index.html:415-418
QUOTE: Genevieve's birth about 1861 matches her death in 1915 at fifty-four exactly.
PROBLEM: The entry's dates are 26 Nov 1863 – 21 Feb 1938, and the record directly above says 'This corrects an earlier guess on this site that she was the Genevieve Rousselle who died in Orleans in 1915; that was a different woman' — a correction index.html's Method section leans on ('her baptismal certificate... now put her death in 1938, not 1915'). The stale note tail re-endorses the rejected 1861/1915 identity. The arithmetic is also wrong twice: born Nov 1863 she was 16 in the 1880 census, yet the note says 'Genevieve at about nineteen' and the record claims the 1863 birth 'matches the nineteen-year-old Genevieve in her father's 1880 Edgard household exactly' (1880−1863=16/17, not 19; 19 fits the discarded 1861 woman).
CORRECTION: Locations: stale note is data.js:2961; the disclaiming record is data.js:2957-2958; entry dates at 2940-2942. index.html reference is 415-417.

## [major][confirmed] Research page still has Numa heading the 1870 household the tree corrected
LOC: research.html:272; contradicts data.js:313,322-324
QUOTE: Numa, twenty-two, orphaned, heading a household of his four younger siblings
PROBLEM: data.js pierreNuma was corrected against the 1870 census image: 'The head is OLIVIER CANSIENE — Cancienne — aged 57... And it corrects this archive, which said Numa headed that household of four younger siblings at twenty-two. He did not head it. He was living in it.' The research page's census table still prints the withdrawn claim, so the two pages describe the same census line oppositely — and the tree page even brags about the correction.

## [major][confirmed] Method section's showcase 'Inferred' example was upgraded to Documented a year ago on the tree
LOC: index.html:313-317; contradicts data.js:1519-1520,1534
QUOTE: for example, Veronica Franovich's parents, named by every circumstance of the Buras household she grew up in and by no record yet read
PROBLEM: data.js veronicaFranovich carries evidence 'verified' and a 1910 Nairn census record whose highlight says 'Upgraded from inferred to documented on 11 August 2026' — 'a record that simply names them together.' The static Method prose still uses her as THE example of an inferred link 'named... by no record yet read.' A visitor who taps her card sees a Documented badge directly contradicting the site's own explanation of its badges.

## [major][confirmed] Open-questions list says the site 'calls him an architect' — the tree says DRAUGHTSMAN with the census image
LOC: research.html:1529; contradicts data.js:2174,2189-2195; also stale note at data.js:2222
QUOTE: Anthony Larmann's trade. This site calls him an architect and cannot yet prove it — see the flag on his own page. The 1900 census sheet carries an occupation column that was never indexed
PROBLEM: The tree's occupation field reads 'DRAUGHTSMAN — read off the 1900 census in his own enumerator's hand' and displays the sheet image (larmann-1900-draughtsman.jpg) with a highlight saying 'THIS SETTLES A FLAG THIS SITE RAISED ON ITSELF.' Yet research.html still lists the trade as an open question, and Anthony's own note (data.js:2222) still begins '⚠️ "ARCHITECT" IS NOT SOURCED... It is left standing' and prescribes reading the very sheet the record above it already reads. Two stale texts contradict the resolved record on the same ancestor.

## [major][confirmed] Buddy's flagship Holy Trinity story overstates the Larmann relationship by a generation
LOC: assets/js/data.js:70
QUOTE: THEN HE MARRIED JEAN LARMANN. Her great-great-great-grandfather was JOHN CASPER LARMANN
PROBLEM: By the tree's own links, Jean Larmann's line is johnLarmannSr (father) → charlesEmileLarmann (grandfather) → anthonyLarmann (great-grandfather) → johnCasparLarmann (great-great-grandfather) — four generations, not five. The same highlight repeats the error ('the great-great-great-granddaughter of one of its Germans'). Kevin's own record correctly calls Casper his great-great-great-grandfather (data.js:42), and research.html:1111-1113 correctly makes Casper John Sr.'s great-grandfather, so the site contradicts itself on the centerpiece anecdote.

## [major][confirmed] Gesmold baptism act: 'read in the register' on two pages, 'SOURCE NOT ONLINE / not read' on the third
LOC: assets/js/data.js:2290; contradicts index.html:354-356 and research.html:985-999; claims-ledger.csv row 149
QUOTE: [SOURCE NOT ONLINE — cited from earlier research; the original document is needed] Katholische Pfarrei St. Petrus, Gesmold (Melle) — Taufen 1846–1852, D1_105, entry 16 of 1846
PROBLEM: index.html says 'His baptism act was then read in the village's own register' and research.html says 'Then the register itself was read... The Gesmold Catholic parish books are digitized in full... and free' with the image and a Matricula link. The tree's citation for the same act says the source is not online and 'the original document is needed.' The ledger row is internally contradictory too: citation says '[UNVERIFIED — not re-checked]' while its provenance column claims 'A document image in this repo.' Casper's note (data.js:2413) also still calls the christening record 'the next document to read.' Four inconsistent statuses for the anchor record of the Larmann line.

## [major][confirmed] Albert Larmann's death: flat fact on the tree, open dispute on the research page
LOC: assets/js/data.js:2274; contradicts research.html:1049-1055
QUOTE: Albert (22 Dec 1891 – 1944), who died far from home in Hackensack, Bergen County, New Jersey
PROBLEM: research.html says his death 'is an open disagreement. A New York death index entry has him dying there in 1964; Judy Gifford's own annotation... reads "died 1944, Hackensack"... twenty years and a state line separate them, and neither has been checked against a certificate.' The tree asserts the 1944/Hackensack version as settled fact with no hedge — the two pages give a death twenty years apart.

## [major][confirmed] Marie Cancienne record simultaneously declares the identity unsettled and resolved
LOC: assets/js/data.js:455-456
QUOTE: UNTIL THIS IS SETTLED, THE STATEMENT THAT NUMA WAS ORPHANED AT FOURTEEN IS IN DOUBT.
PROBLEM: The highlight (rendered page content) tells the reader the orphaning is in doubt, while the citation line of the very same record says '[CONFLICT RESOLVED, August 2026 — the 1870 census shows no mother in the household, so the 1862 burial IS hers and this 1900 woman is not her]', and the blurbs of Marie (data.js:436) and Pierre Numa (data.js:313) state 'orphaned at fourteen' as fact. The record title also still says 'THIS PAGE CANNOT YET SAY WHO SHE WAS.' Stale alarm text contradicting its own resolution, on a direct ancestor.

## [major][confirmed] Agnes Hanley note says her parents are still open — two records above, they are found and on the tree
LOC: assets/js/data.js:2156; contradicts data.js:2132,2141 and research.html:1518
QUOTE: Still open: her parents, her birth date, and the date of her marriage to William Winstine
PROBLEM: The same entry sets father: 'stephenHanley', mother: 'maryReed' and its marriage record highlight says the 1906 act 'carries FOUR parents. Hers were STEPHEN D. HANLEY and MARY C. REED — which closes an open question.' research.html's open list was updated ('Her parents are now answered'); the person page's note was not, so the entry contradicts itself and the research page.

## [major][confirmed] Duplicate 'records' keys silently delete six record blocks that other pages reference
LOC: assets/js/data.js:451 and 513 (overriding arrays at 437 and 493)
QUOTE: records: [
PROBLEM: marieCancienne (records: at 437 and again at 451) and michelPedeau (records: at 493 and again at 513) each define the key twice; in a JS object literal the second wins, so the first arrays never render: the Venetian-Cancienne record, the 1860 widow's-household record (whose content Marie's blurb at data.js:436 still summarizes — '$12,000... four of her five children in school'), the 1810 census/Cancienne-next-door record, the 'Chantenay was the Acadian quarter' record, and the 'Foreign French' record. Michel's blurb (492) and the map's Chantenay pin (claims-ledger.csv row 218, 'see his page') point visitors at Chantenay content that no longer appears anywhere on the page — and the site's only statement of the 1810 slaveholding-column evidence for Michel vanishes with it.

## [minor][adjusted] Giovanni's age at the 1912 crossing: nineteen on two pages, eighteen on the third
LOC: index.html:165,191 and research.html:379; vs assets/js/data.js:1476
QUOTE: the manifest had already recorded a nineteen-year-old from Plataci naming his father as Michele
PROBLEM: data.js says he 'sailed from Naples in April 1912 at eighteen' — correct for a birth of 5 May 1893. index.html and research.html both call him a nineteen-year-old (the manifest's stated age) without noting the discrepancy, so the pages disagree on his age at the crossing.
CORRECTION: index.html's two instances quote the manifest's recorded age and are accurate as written; only research.html:379 asserts 'nineteen-year-old' in narrative voice against data.js's 'at eighteen'. The unremarked manifest-age-vs-birthdate discrepancy is the remaining polish item.

## [minor][confirmed] Size of the deGruy birth-year error: 'eighteen years' vs 'twenty years'
LOC: index.html:291; vs assets/js/data.js:1384
QUOTE: born 5 January 1774 at New Orleans — eighteen years later than the family history has it
PROBLEM: The corrections list says the deGruy history's 1756 date is eighteen years early (1774−1756=18, correct); the elisabethSarde note says 'the deGruy history dated her 1756, twenty years early.' Same fact, two different arithmetic claims.

## [minor][confirmed] Valentine Goubler's birth year differs between pages and conflicts with the quoted tomb
LOC: research.html:92; vs assets/js/data.js:2617,2635
QUOTE: Henry Moore (1847–1893) and Valentine Goubler (1848–1926), married New Orleans, May 1871.
PROBLEM: data.js gives her birth as '20 March 1847'. research.html says 1848. The tomb tablet quoted on her own panel ('died Feb. 14, 1926, aged 77 yrs') implies a birth of 1848/49, which fits research.html but not the tree's 1847 — and the page never remarks on the conflict.

## [minor][confirmed] The 1747 Joly marriage contract is 'ten pages' and 'seven pages' on the same page
LOC: research.html:1239; vs research.html:1260 and assets/js/data.js:1338
QUOTE: a marriage contract of 6 September 1747, ten pages of it — so there was property to settle
PROBLEM: Twenty lines later the same page says 'The 1747 contract survives in seven pages of French,' and data.js also says 'seven pages.' The 'ten pages' figure contradicts both.

## [minor][confirmed] Quoted death-record ages contradict the stated birthdates with no comment
LOC: assets/js/data.js:894 (jeanneCurien) and 943 (alphonseSr)
QUOTE: GAIENNIE, JEANNE E CURIEN, age 52.
PROBLEM: Jeanne Curien's entry gives birth 15 June 1868 (unsourced), which makes her 50 at her 12 Jan 1919 death, not the record's 52. Alphonse Sr. is born 9 Sept 1826 but his quoted death record says 'age 60' at 20 July 1884 (he was 57). Elsewhere the site annotates every age mismatch (e.g. Casper's 73 vs 75); here two direct-line conflicts pass silently.

## [minor][confirmed] Charles Emile is 'eight years old' and 'seven' in 1910, two records apart
LOC: assets/js/data.js:1915; vs data.js:1947
QUOTE: In 1910 he was eight years old in a household holding his mother, his grandmother, his schoolteacher aunt and a carpenter uncle
PROBLEM: Born 12 July 1902, he was seven at the April 1910 census — which the AUNTS' HOUSE record says ('Charles was seven'). The directory record on the same panel says eight. Note also the 1910 census household it quotes (Valentine, Louise and Leontine only) does not actually contain his mother or him, which the 'household holding his mother' claim glosses over; the carpenter uncle comes from the 1908 directory, not 1910.

## [minor][confirmed] Robert Lemoine: 'a father at nineteen' vs the site's own finding that he was eighteen
LOC: assets/js/data.js:2038; vs data.js:2050 and 2141
QUOTE: A father at nineteen, and at sea for the rest of it
PROBLEM: The site's own showcase deduction (agnesHanley record) computes from his Navy card that he was born May 1888 and was 'EIGHTEEN at this wedding' of May 1906; his marriage-record highlight says 'He was eighteen.' Johanna was born 9 Jan 1907, when he was still 18. The blurb's 'father at nineteen' contradicts the arithmetic the site is proudest of.

## [minor][confirmed] Seven Ships said to sail 'from Nantes and Paimbœuf' though the family's own ship left Saint-Malo
LOC: assets/js/data.js:503; vs data.js:504,791 and index.html:126
QUOTE: SEVEN SHIPS carried about 1,600 Acadians from Nantes and Paimbœuf to Louisiana
PROBLEM: The same highlight, one paragraph on, says Florence Aucoin 'crossed as a four-year-old aboard LA VILLE D'ARCHANGEL, which sailed from Saint-Malo — not aboard either of the two ships that left Nantes,' and michelAucoin's record and index.html both say she boarded at Saint-Malo. If one of the seven left Saint-Malo, the 'from Nantes and Paimbœuf' framing of the fleet is wrong — the kind of slip Acadian specialists notice. (Note this sentence sits in one of the record blocks dropped by the duplicate-key bug.)

## [minor][confirmed] Pvt. Goubler: 'dead six weeks later' vs 'in France for thirty-two days'
LOC: assets/js/data.js:2669; vs research.html:809-810
QUOTE: He reached France in August and was dead six weeks later, having never got near the front.
PROBLEM: research.html computes precisely from the clipping: sailed 21 August, died 22 September — 'in France for thirty-two days,' about four and a half weeks. The tree's 'six weeks' overstates the same interval.

## [minor][confirmed] Research page asserts brother Henry sailed with Casper — Henry was nine
LOC: research.html:1516; vs assets/js/data.js:2265 and 2370
QUOTE: Casper sailed in 1866 or 1867 with his brother Henry, and no manifest has been found.
PROBLEM: Henry Larmann was born 24 December 1856 (his Brooklyn death certificate, quoted on the tree), making him nine or ten in 1866-67. data.js hedges appropriately ('Very possibly the brother who sailed with Casper'), but research.html states it flat — and neither page notes that a nine-year-old does not emigrate 'to escape compulsory military service,' the motive the family story attaches to the sailing pair.


# DIMENSION: arithmetic-consistency

## [critical][confirmed] Footer audit numbers do not match the shipped claims ledger or the page
LOC: index.html:443-447; research/claims-ledger.csv; assets/js/data.js
QUOTE: Of 267 claims, 89 have a source that can be pointed at and 121 are marked [UNVERIFIED] on the page itself
PROBLEM: Every number in this sentence fails against the site's own files. (1) The downloadable ledger contains 271 claim rows (219 index.html + 52 map.html), not 267. (2) '121 marked [UNVERIFIED] on the page itself': the ledger has 121 provenance-H rows, but the page itself now carries only 12 '[UNVERIFIED…]' marks — 95 citations read '[VERIFIED against the original, August 2026]' instead. The ledger's citation_on_page column still records the old '[UNVERIFIED — not re-checked…]' text for claims the live page marks VERIFIED (e.g. ledger row 7 vs data.js:139, Herbert Joseph's birth record). (3) '89 have a source that can be pointed at' is not reproducible from the ledger: A(12)+B(21)+D(48)+E(1)=82, and even adding the four rows with malformed code-less provenance gives 86. The centerpiece 'audited and downloadable' claim is internally false as shipped.

## [critical][confirmed] A man dead since 1911 is said to have witnessed a 1921 wedding
LOC: research.html:385-386; conflicts with data.js:1424 and data.js:1609-1610
QUOTE: married in New Orleans in June 1921, with Veronica's parents Anthony Franovich and Melanie Moizant standing as witnesses
PROBLEM: The site's own data.js gives Anthony Franovich's death as 19 July 1911 ('Dead at thirty-eight, in the village he was born in'), ten years before the wedding. data.js correctly describes the marriage record as 'Also on the record: An[thony] Franovich and Melan[ie] Moyant — the bride's parents' — i.e., named as parents, not present as witnesses. research.html converts that into a physical impossibility.

## [critical][confirmed] 1870 census row contradicts the site's own published correction
LOC: research.html:272; conflicts with data.js:313 and data.js:323-324
QUOTE: 1870 … PADON … Numa, twenty-two, orphaned, heading a household of his four younger siblings
PROBLEM: data.js prominently corrects exactly this claim: 'the 1870 census puts all five of them in the house of OLIVIER CANCIENNE. This page used to say Numa headed that household himself; he did not' (pierreNuma blurb), and the record itself: 'The head is OLIVIER CANSIENE … aged 57 … it corrects this archive, which said Numa headed that household … He did not head it.' The research page still states the retracted version, so the site simultaneously publishes an error and its own correction of it.

## [major][confirmed] Generation count for John Casper Larmann off by one, contradicting Kevin's own entry
LOC: assets/js/data.js:70; conflicts with data.js:45
QUOTE: Her great-great-great-grandfather was JOHN CASPER LARMANN … The boy who had to be passed off as German … married the great-great-great-granddaughter of one of its Germans
PROBLEM: Per the tree's own chain (Jean → John R. Larmann Sr. → Charles Emile → Anthony → John Casper), John Casper is Jean Larmann's great-GREAT-grandfather (4 generations up), not great-great-great. Kevin's own entry (data.js:45) correctly calls John Casper 'HIS GREAT-GREAT-GREAT-GRANDFATHER' — for Kevin, one generation below Jean. Buddy's Holy Trinity highlight adds a generation twice ('great-great-great-grandfather' and 'great-great-great-granddaughter'), directly conflicting with the adjacent entry.

## [major][adjusted] Johann Heinrich Laarmann called 'six generations above Kevin' — he is eight
LOC: assets/js/data.js:2530
QUOTE: Born in the reign of Frederick the Great, six generations above Kevin.
PROBLEM: Counting up the tree's own father links: Jean(1) → John Sr(2) → Charles Emile(3) → Anthony(4) → John Casper b.1846(5) → Johann Caspar b.1821(6) → Johann Caspar b.1791(7) → Johann Heinrich(8). He is eight generations above Kevin, not six.
CORRECTION: The arithmetic and the problem are exactly right, but the quote sits at data.js:2548 (the johannHeinrichLaarmann blurb), not 2530 (line 2530 is inside Catharina Maria Ortmann's records).

## [major][confirmed] Duplicate 'records' key on michelPedeau silently deletes three records from the page
LOC: assets/js/data.js:493 and assets/js/data.js:513
QUOTE: records: [ … ] (defined twice in the same object literal)
PROBLEM: The michelPedeau object defines 'records:' at line 493 (three entries: 'THE 1810 CENSUS — and the Canciennes were the house next door', 'CHANTENAY WAS THE ACADIAN QUARTER', '"FOREIGN FRENCH" — what the phrase actually means, corrected') and again at line 513 (marriage + short 1810 census). In a JS object literal the later key wins, so the first three records — including the Nantes tonnage-collapse evidence and the Foreign-French correction — never render for the visitor. Content the site believes it publishes is invisible.

## [major][adjusted] Poupone's entry re-asserts the 1915 death its own record disowns, and 1863 birth cannot match age 19 in 1880
LOC: assets/js/data.js:2916 (highlight) vs data.js:2919 (note)
QUOTE: Genevieve's birth about 1861 matches her death in 1915 at fifty-four exactly.
PROBLEM: The record two lines above says: 'Born 26 November 1863, died 21 February 1938 … This corrects an earlier guess on this site that she was the Genevieve Rousselle who died in Orleans in 1915; that was a different woman.' The trailing note then resurrects the 1915 death as a match. Also arithmetic: the highlight claims the 1863 birth 'matches the nineteen-year-old Genevieve in her father's 1880 Edgard household exactly' — born Nov 1863 she was 16 at the June 1880 census, not 19 (age 19 implies the ~1861 birth the entry rejects). The entry contradicts itself twice.
CORRECTION: Locations are data.js:2958 (record highlight) and data.js:2961 (note) in the genevieveRousselle/Poupone entry — not 2916/2919 (those lines are in francoiseMartin's entry).

## [major][confirmed] Anthony Larmann's trade both settled (draughtsman) and still open (architect unproven) in three places
LOC: assets/js/data.js:2174 and 2195 vs data.js:2222; research.html:1529
QUOTE: Anthony Larmann's trade. This site calls him an architect and cannot yet prove it — see the flag on his own page. The 1900 census sheet carries an occupation column that was never indexed
PROBLEM: data.js:2174 states occupation 'DRAUGHTSMAN — read off the 1900 census in his own enumerator's hand', and the record highlight says 'THIS SETTLES A FLAG THIS SITE RAISED ON ITSELF … It says DRAUGHTSMAN.' Yet data.js:2222 still opens '⚠️ "ARCHITECT" IS NOT SOURCED … THE FIX IS SMALL AND SPECIFIC: the occupation column is on the 1900 census sheet itself, unindexed', and research.html's open-questions list repeats that it is unread. The same question is presented as answered and unanswered simultaneously.

## [major][confirmed] Albert Larmann's death stated as fact in data.js but called an open disagreement in research.html
LOC: assets/js/data.js:2274; conflicts with research.html:1049-1055
QUOTE: Albert (22 Dec 1891 – 1944), who died far from home in Hackensack, Bergen County, New Jersey
PROBLEM: research.html says of the same man: 'Where and when he died is an open disagreement. A New York death index entry has him dying there in 1964; Judy Gifford's own annotation … reads "died 1944, Hackensack" … twenty years and a state line separate them, and neither has been checked against a certificate.' The tree page asserts one side of a question the field notes say is unresolved.

## [major][confirmed] Eugenia Moore 'widowed … with six children under eight' — the site's own data says five were living
LOC: assets/js/data.js:2246; also data.js:2180 and research.html:141-142
QUOTE: widowed at twenty-nine with six children under eight
PROBLEM: Six children were born, but the same pages establish that Louisa Francis 'died at eight months old in May 1898' (research.html:104-107; data.js Larmann entries), six years before Anthony's February 1904 death. At widowhood Eugenia had five living children (Mary Eugenia 7, Bernadine 5, Anthony Leo 3, Charles 1, Esther 6 weeks). Research.html repeats 'Eugenie raised six children alone', and Anthony's blurb says 'His widow raised six children alone' — all contradicted by the site's own infant-death correction.

## [major][confirmed] Brooklyn Henry Larmann: 'aged 72' and 'born 24 December 1856' cannot both be true
LOC: assets/js/data.js:2370; repeated at research.html:1042-1044
QUOTE: Henry Larmann, 72, laborer, born 24 December 1856 in Germany, married to Gertrude
PROBLEM: Died 29 November 1938: born Dec 1856 he was 81, not 72; age 72 implies birth ~1866. The two figures in the same summarized certificate differ by nine years and the site never notices — yet this record is the sole evidence identifying him as Casper's emigrant brother (a birth of 1866 would also make him an infant, not a conscription-age companion, on the 1866 crossing).

## [major][confirmed] Agnes Hanley's entry says her parents are 'still open' directly under the record that names them
LOC: assets/js/data.js:2156 (note) vs data.js:2141 (record highlight); research.html:1518
QUOTE: Still open: her parents, her birth date, and the date of her marriage to William Winstine
PROBLEM: The record in the same entry says: 'Hers were STEPHEN D. HANLEY and MARY C. REED — which closes an open question that has been on the field-notes page for months', and stephenHanley/maryReed have their own entries on the tree. research.html:1518 also announces 'Her parents are now answered.' The stale note contradicts both.

## [major][confirmed] 'Both funerals thirty-four years apart' — the site's own dates give twenty-four
LOC: research.html:884-886; supporting dates at research.html:864-868 and 882-883
QUOTE: a member of Plumbers and Steamfitters Local No. 60 — as their father had been before him, the union turning out for both funerals thirty-four years apart
PROBLEM: Leonce Goubler died 14 November 1939 and his son Leon Joseph on 18 November 1963, both stated on the same page: 1963 − 1939 = 24 years, not 34. (No other pairing works either: Emile 1918 → Leonce 1939 is 21, Emile → Leon 1963 is 45.) Related: the quoted obituary makes Leonce 'aged 75' in 1939 (b. ~1864) while two paragraphs later he is 'Leon Goubler, born 1860' (which would be 79) — the two figures sit unreconciled.

## [major][confirmed] research.html crowns Étienne Reyne 'the oldest documented person in this archive' — its own tree goes deeper and older
LOC: research.html:1137; conflicts with research.html:1318-1320, data.js:1246, data.js:584, data.js:635
QUOTE: The oldest documented person in this archive is Étienne Reyne, a master mason of French colonial New Orleans, nine generations back
PROBLEM: The same page later documents his wife's parents, Jean Reynaud and Hélène Dorigny (ten generations back, both 'verified', dead before April 1740 — 'the two people this whole archive was reaching for'), and data.js calls Hélène 'the deepest woman in this archive.' On the Pedeaux side the tree also carries Pierre Pédeau (b. about 1683, documented by the imaged 1705 marriage act) and Celton Pédeau, 'a Pays de Retz man of the mid-1600s.' Étienne (b. ~1720s) is neither oldest nor deepest by the site's own reckoning; the paragraph predates the discoveries reported below it.

## [major][confirmed] Valentine Goubler's numbers disagree across the site: 1847 vs 1848 birth, age 77 vs 78, widowed at 45 vs 46, widow 33 vs 32 years
LOC: assets/js/data.js:2617, 2623-2624, 2635-2636; research.html:92; data.js:2591; data.js:2680 (roster)
QUOTE: Widowed at forty-five, she lived on to 1926 … 'Valentine Goubler, wife of Henry Moore — died Feb. 14, 1926, aged 77 yrs.'
PROBLEM: data.js gives her birth as 20 March 1847 (and the tomb roster '1847–1926'); research.html:92 says 'Valentine Goubler (1848–1926)'; the tomb tablet the site endorses as 'restoring' the garbled index age says 77, which implies 1849 (from 20 Mar 1847 she died at 78). 'Widowed at forty-five': Henry Moore died 9 Dec 1893, when she was 46 yr 8 mo by the stated birth date. And Henry's entry says he left 'her a widow for thirty-three years' — Dec 1893 to Feb 1926 is 32 yr 2 mo. Four small numbers, none consistent with each other.

## [major][confirmed] One 1950 census, two contradictory narrations: 'three years married' vs 'a year into her marriage'
LOC: assets/js/data.js:1933 vs data.js:1835; marriage date at data.js:1845-1846
QUOTE: And Ann Wellmeyer, twenty-one and a year into her marriage, was working a department store register.
PROBLEM: The site dates the Larmann–Wellmeyer marriage to July 1947 ('The marriage was 1947, not 1955'). At the April 1950 census that is 2 years 9 months — John's own entry narrating the same sheet says 'he is twenty-two, three years married.' 'A year into her marriage' is wrong by the site's own dates. Also unremarked: by the stated birthdays (John 10 Sep 1926, Ann 25 Oct 1927) they were 23 and 22 in April 1950, yet the narration adopts the sheet's 22 and 21 as fact without flagging the clash — on a site that elsewhere audits exactly such age arithmetic.

## [minor][confirmed] 'Forty-six at emancipation' for the enslaved child Valery — inconsistent with the same page's other computation
LOC: research.html:943-944; conflicts with research.html:1521
QUOTE: A Valery who was four in 1819 would have been forty-six at emancipation
PROBLEM: Four in November 1819 puts his birth about 1815; emancipation (1863 proclamation / 1865 nationally) makes him 48–50, and the open-questions list on the same page computes correctly that he 'would be free and fifty-five' in the 1870 census (1815+55=1870). 46 implies emancipation in 1861. The two passages disagree.

## [minor][confirmed] The 1747 marriage contract is 'ten pages' and 'seven pages' on the same page
LOC: research.html:1239 vs research.html:1260; data.js:1338
QUOTE: a marriage contract of 6 September 1747, ten pages of it — so there was property to settle
PROBLEM: Twenty lines later the same page says 'The 1747 contract survives in seven pages of French', and data.js cites 'Marriage Contract, 6 September 1747, seven pages (doc. 1747-09-06-01)'. One document, two page counts, with the 'ten pages' version used to support an inference about property.

## [minor][confirmed] Wellmeyer tomb: the enumeration of 'ten Wellmeyers' adds up to eleven
LOC: research.html:585-589; cf. data.js:1886 and data.js:1840
QUOTE: holds ten Wellmeyers who resolve cleanly into one household: Henry John, Bertha, three of their sons with their wives, his brother and sister, and one woman who fits no role in that family except daughter
PROBLEM: As written: 2 + 3 sons + 3 wives + brother + sister + 1 daughter = 11, not ten. data.js consistently says 'all ten Wellmeyers … lie in one plot' and 'nine of the ten Wellmeyers', so the research-page breakdown miscounts (or one 'wife' should not be there); the reader cannot reconstruct the ten.

## [minor][confirmed] Anthony Franovich 'dead at thirty-eight' — his stated dates make him 37
LOC: assets/js/data.js:1609-1613
QUOTE: Dead at thirty-eight, in the village he was born in.
PROBLEM: Born 22 September 1873, died 19 July 1911 (both stated in the same entry) = 37 years 10 months; he never reached 38. The blurb adopts the headstone's 'Age 38 years' as narrative fact while printing a birth date that contradicts it — exactly the kind of age-vs-dates check the site performs elsewhere (e.g. Antoine Pedeau's 'age 45 matches the 1812 baptism exactly').

## [minor][confirmed] The same probable brother carries two birth years: Nicholas Sr. (1886–1955) vs Nicole (1881–1955)
LOC: assets/js/data.js:1511 vs data.js:1547 and 1558-1559; data.js:1677
QUOTE: Nicholas Franovich Sr. (1886–1955) was long listed here too, but he cannot be a child of this marriage — see the note on Melanie Moizant
PROBLEM: Melanie's note places him 'perhaps as Anthony's younger brother.' But the documented brother in nicolaFranovich's entry is 'Nicole (15 May 1881 – 5 May 1955) — married Antoinette Scobel', with the death record 'Nicole Franovich, d. 5 May 1955 at Buras, b. 1881.' Same death year, same role, same Scobel wife association — if these are one man, the site carries him under two names and two birth years (1881 and 1886) without noting it.

## [minor][confirmed] Emile Goubler 'dead six weeks' after reaching France vs the site's own 32-day count
LOC: assets/js/data.js:2669; conflicts with research.html:797-810
QUOTE: He reached France in August and was dead six weeks later
PROBLEM: The research page quotes the death notice — sailed 21 August 1918, died 22 September — and computes 'in France for thirty-two days' (4.6 weeks from sailing, less from arrival). Six weeks before 22 September is 11 August, when he had not yet sailed. The two accounts of the same interval disagree.

## [minor][confirmed] Robert Lemoine 'a father at nineteen' — the same entry establishes he was eighteen
LOC: assets/js/data.js:2038 vs data.js:2050 and data.js:2141
QUOTE: A father at nineteen, and at sea for the rest of it
PROBLEM: Born 7 May 1888 (headstone, in the same entry); Johanna born 9 January 1907 — he was 18 years 8 months. The entry itself says of the May 1906 wedding 'He was eighteen', and Agnes's entry builds an argument on precisely that ('makes him EIGHTEEN at this wedding, not twenty-one. A groom of eighteen needed his parents' consent'). The blurb rounds him up a year the site elsewhere insists on.


# DIMENSION: badge-audit

## [critical][adjusted] Claims ledger contradicts the live page on ~150 rows — the site's own audit trail is stale
LOC: research/claims-ledger.csv:7 vs assets/js/data.js:139 (one of 88 such pairs)
QUOTE: Ledger: "[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Orleans Parish, 10 July 1921 — Vol. 175, p. 791", provenance "H UNVERIFIED", flag FLAG. Page: "[VERIFIED against the original, August 2026 — see the verification log] Orleans Parish, 10 July 1921"
PROBLEM: data.js carries 88 "[VERIFIED against the original, August 2026]" banners that postdate the ledger, but the ledger still records those same claims as citation_on_page "[UNVERIFIED…]" with provenance H ("no source I personally opened") and flag FLAG — roughly 150 of 272 rows now misdescribe the page. The verification logs (verification-log-la-sos.md, -brdr.md, -srano.md, -census.md) do support the page banners, so the ledger is stale, not the page — but the ledger was clearly meant to be maintained (rows 269–272 were appended with VERIFIED after the same audit). A professional reader who follows the page's own "see the claims ledger" pointer finds the audit artifact flatly contradicting the site on its most important claims. Overall rate: this affects more than half the ledger.
CORRECTION: The finder's numbers are modestly off: 95 (not 88) VERIFIED-banner citations in data.js, and roughly 110–125 (not ~150) of the 272 ledger rows now misdescribe the page (125 stale-UNVERIFIED rows minus the ~12 that still match). The direction and substance of the finding are unchanged.

## [critical][confirmed] Melanie Moizant wears the Documented badge with no record naming her with either parent
LOC: assets/js/data.js:1657-1660; cross-conflict with data.js:1707 and research/RESEARCH.md:472-473
QUOTE: father: 'alfredMoizant', mother: 'victoriaDaroca', evidence: 'verified' … blurb: 'Buried St. Louis Cemetery No. 3, Square 3, Section B, Lot 11.'
PROBLEM: The legend promises Documented = a civil or sacramental record names BOTH people. Nothing cited on her card does: her death index row names her alone ("PAASCH, MELANIE FRANOVICH MOIZANT") and her 1926 remarriage index names no parents. She is absent from Alfred's cited 1900 census household (married out in 1894). The only support anywhere is RESEARCH.md's "Buried St. Louis No. 3, Sq. 3, Sec. B, Lot 11, with her parents. [VERIFIED]" — but Alfred's own card (data.js:1707) corrected exactly that plot claim: the archdiocese register puts the parents at "L3 SQ 03 / O ALLEY DE LA VIERGE / 11", not Section B, Lot 11. The badge rests on a shared-plot inference the site itself has since overturned.

## [major][confirmed] The recent generation (kevin, buddy, jeanLarmann) is badged Documented on family testimony and an obituary
LOC: assets/js/data.js:104-105 (also 38, 63)
QUOTE: evidence: 'verified', blurb: 'Named in her father\'s 2018 obituary as "Jean L. Pedeaux (the late Buddy)."'
PROBLEM: The badge tooltip (app.js:23) says "A civil or sacramental record names both this person and their parent." Jean Larmann's link rests on a 2018 obituary — neither civil nor sacramental, and it names only her father. Buddy's card (evidence 'verified', data.js:63) cites only family testimony and a cemetery-register profile that names no parents; no birth or marriage record naming him with Herbert/Veronica appears. Kevin's card (data.js:38) cites only a distance measurement. These are the first three cards a visitor opens, all counted in the hero's "Documented links" stat; by the site's own legend they should be Single source at best.

## [major][confirmed] Stephen Hanley and Mary Reed: Documented badge sitting directly on an [UNVERIFIED] citation banner
LOC: assets/js/data.js:2095 and 2101 (Hanley); 2111 and 2117 (Reed); ledger claims-ledger.csv:135-136
QUOTE: evidence: 'verified' … citation: '[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] Louisiana, Parish Marriages, 1787–1958 — Orleans, 22 May 1906, p. 962'
PROBLEM: Both leaf parents carry the Documented badge while the single record on each card — the 1906 marriage act that is their only evidence — still carries the [UNVERIFIED] banner, and the ledger marks both rows H/FLAG. Meanwhile the identical act is cited on Agnes Hanley's card (data.js:2139) as read in full with no banner, and the ledger codes that copy D (fetched this session). One document, three confidence labels on the same site; the badge and its own citation contradict each other in a single card.

## [major][confirmed] Franovich generation badged Documented on death-certificate parents the page admits were never re-read
LOC: assets/js/data.js:1611 and 1617-1618; also 1552, 1579; claims-ledger.csv:92-96
QUOTE: citation: '[PARTLY VERIFIED, August 2026 — … The PARENTS named here come from the certificate, which the index does not reproduce and which has not been re-read.]' … evidence: 'verified'
PROBLEM: anthonyFranovich → nicolaFranovich/josephineBuras (and the badges on both parents) rest on parent names attributed to 1911/1955 death certificates that, per the page's own banner and the ledger (H UNVERIFIED, FLAG), were never personally opened — only the index rows (which carry no parents) were checked. The banner is honest, but the badge still reads Documented; by the legend's own terms an inherited, unopened certificate transcription is Single source. The site demonstrated it knows this distinction — johnCasparLarmannSr was demoted to confirm for exactly this reason (unread baptism act, data.js:2449).

## [minor][adjusted] Genevieve Rousselle: Documented badge on a certificate the card itself says has never been obtained
LOC: assets/js/data.js:2902 and 2908; claims-ledger.csv:193
QUOTE: evidence: 'verified' … citation: '[SOURCE NOT ONLINE — cited from earlier research; the original document is needed] Church of St. John the Baptist, Edgard… certificate issued 29 July 1936' … highlight: 'The act names her with both parents, which is what this site requires before it will call a link proven.'
PROBLEM: The highlight declares the link proven by the site's own standard while the citation banner on the same card says the source was never opened and "the original document is needed"; the ledger codes it H UNVERIFIED / FLAG. A quoted-from-earlier-research certificate transcription is precisely what the legend calls Single source, and the internal contradiction (proven vs. document needed) is visible to any visitor.
CORRECTION: The badge is defensible via the verified 1880 census on the father's card, so this is not an unsupported Documented badge. What remains is the self-contradiction on Genevieve's own card (link declared 'proven' by a record whose banner says the original is still needed) and the stale H/FLAG ledger row — a prose/provenance consistency defect, minor rather than major.

## [major][confirmed] Badge tooltip asserts the wrong claim for ~15-20 leaf ancestors, inflating the 'Documented links' stat
LOC: assets/js/app.js:23 and 416-421; e.g. data.js:888 (jeanneCurien), 1387-1388 (pierreChenet, susanneLavigne), 2095, 2111
QUOTE: verified: 'A civil or sacramental record names both this person and their parent.'
PROBLEM: For leaf entries with no parents drawn (jeanneCurien, pierreChenet, susanneLavigne, marcellinBorne, anneMarieGuedry, marieCancienne, catherineLange, isabelleHebert, stephenHanley, maryReed, nicolaFranovich, josephineBuras, etc.) the 'verified' code actually means "named in their child's record", but the rendered tooltip claims a record names this person WITH THEIR parent — a link the tree does not even assert. jeanneCurien (data.js:888) is 'verified' though her only cited record is a death-index row naming her alone. The hero stat 'Documented links' (app.js:416) counts persons, not links, and includes all of these, so the headline number overstates what the legend defines.

## [major][confirmed] Ibbenbüren origin asserted as settled fact in the method section while the data page holds it at confirm, unread
LOC: index.html:350-351 and research.html:1109-1110 vs assets/js/data.js:3207
QUOTE: "The Wellmeyers came from Ibbenbüren in Westphalia, where Bernard Heinrich Wallmeyer was christened on 1 July 1823."
PROBLEM: The person entry's own note says the christening, origin and parents "come from a well-sourced FamilySearch profile … carried at confirm until the Ibbenbüren parish registers are read directly" (data.js:3207), and the parent link is coded 'confirm'. Yet the index.html Method section — the very passage that explains the badge discipline — and research.html both state the christening date and village as flat fact ("both found, in one night"), with no hedge. A compiled-tree claim with unread registers is narrated at the same register as the Gesmold act that genuinely was read.

## [major][confirmed] Unopened compiled works narrated as settled fact: 'THE BORNES WERE FRENCH' and 'THREE THINGS THIS SETTLES'
LOC: assets/js/data.js:364-367 (ledger claims-ledger.csv:21); data.js:997-1000 (ledger claims-ledger.csv:46)
QUOTE: "They were not. Jacques Antoine Borne was baptised in a French town, sailed on a French ship… Borne was never anything but Borne." (citation: 'Albert J. Robichaux Jr., German Coast Families (1997), as abstracted on WikiTree')
PROBLEM: Both showpiece records rest on published works the ledger marks G "named book/journal; I did NOT open it" with FLAG — Robichaux via a WikiTree abstraction for the Borne nationality claim, and Champomier/Bourgeois/Cohen for josephGervais, whose highlight opens "THREE THINGS THIS SETTLES." Elsewhere the site is scrupulous about hedging inherited print sources (e.g. the Kendall street claim says "PROBABLE, NOT PROVEN"); these two assert secondhand abstractions of unopened books in the voice reserved for records read directly, and neither page mentions the FLAG.

## [major][adjusted] Duplicate 'records:' keys silently delete six record cards from the rendered site
LOC: assets/js/data.js:437 vs 451 (marieCancienne); 493 vs 513 (michelPedeau)
QUOTE: records: [ … 'THE CANCIENNES WERE VENETIANS…', 'THE WIDOW\'S HOUSEHOLD — $12,000…' ], records: [ …
PROBLEM: In a JS object literal the second 'records' key overwrites the first, so five heavily-written cards never render: marieCancienne loses the Venetian-origin record and the 1860 census record (including the carefully worded caveat that the $4,000 personal estate may represent enslaved people — an open question the site promised to keep visible); michelPedeau loses the 1810-census slaveholding-column card, the Chantenay lead (with its "THIS IS A LEAD, AND IT IS LABELLED ONE" disclaimer his blurb still alludes to) and the Foreign-French correction. The claims ledger only lists the surviving cards, so the audit never saw the lost content either.
CORRECTION: Five record cards are silently dropped, not six: two from marieCancienne (lines 438-449) and three from michelPedeau (lines 494-511). The finder's own body text says five; only the title says six.

## [minor][adjusted] Michel Pédeau père's death card contradicts itself: [UNVERIFIED] banner beside 'confirmed to the day'
LOC: assets/js/data.js:563-566; also 557-560 vs claims-ledger.csv:27-28
QUOTE: citation: '[UNVERIFIED — not re-checked in the August 2026 audit…] Archives municipales de Nantes, 1E 1675…' … highlight: 'Read in the original table… now confirmed to the day in the city\'s own index.'
PROBLEM: One card tells the visitor simultaneously that the death-table citation was not re-checked and that it was "read in the original table" and "confirmed to the day." The baptism card above it (data.js:558-560) likewise claims "Read in the original register" while the ledger codes that citation F — "real archive ref; I did NOT open it" — with FLAG. Whichever state is true, page prose and provenance labels assert opposite things about the same documents.
CORRECTION: Two details: (1) strictly, 'not re-checked in the August 2026 audit' is compatible with an earlier original reading — the flat contradiction is with the ledger's 'no source I personally opened' (H/F provenance) and with data.js:529's claim of an August 2026 page-by-page reading; (2) the direction of error is under-claiming (banner harsher than the apparent truth), the same shape the finder rated minor for the Gesmold cards — severity should be minor, not major.

## [minor][adjusted] Alexis Lemoine's note flatly contradicts his own Documented badge and children lists
LOC: assets/js/data.js:2843-2845 and 2868; banner inconsistency at 2851 vs 2798
QUOTE: "Neither is drawn on this tree yet: no record read here names Joseph and Alexis together."
PROBLEM: The entry sets father: 'josephLemoine', mother: 'marieRibas', evidence: 'verified' — and the SRANO Vol. 18 abstract naming all three was in fact verified (verification-log-srano.md §9) — yet the note still says the parents are not drawn and no record was read, a leftover from before the upgrade. The same SJBED B7, 49 record is banner-tagged '[VERIFIED against the original]' on the parents' cards (data.js:2798, 2818) but '[SOURCE NOT ONLINE — … the original document is needed]' on Alexis's own card (2851). A reader checking the site's reasoning meets three mutually exclusive statements about one baptism.
CORRECTION: The finder's line numbers are wrong: the contradicting note is at data.js:2910 (not 2843-2845/2868, which are marieRibas's children list and alonzo's child line), the parent-card VERIFIED banners are at 2834 and 2854 (not 2798/2818), and Alexis's SOURCE-NOT-ONLINE banner is at 2887 (not 2851). Substance and severity (minor) stand.

## [minor][confirmed] Gesmold register records carry 'SOURCE NOT ONLINE / original document is needed' banners while research.html shows the register images and says it was read
LOC: assets/js/data.js:2290, 2438, 2494 vs research.html:985-999 and 1098-1105; claims-ledger.csv:149, 167, 172
QUOTE: citation: '[SOURCE NOT ONLINE — cited from earlier research; the original document is needed] Katholische Pfarrei St. Petrus, Gesmold (Melle) — Taufen 1846–1852, D1_105, entry 16 of 1846'
PROBLEM: research.html states "Then the register itself was read" and "two records, read directly," and both register images (gesmold-1846-baptisms.jpg, gesmold-1815-marriage.jpg) sit in the repo and render on the tree cards and field-notes page — yet the tree cards' banners tell visitors the source is not online and the original is still needed, and the ledger marks the 1843/1815 acts H UNVERIFIED. The direction of error is under-claiming, but a visitor is told the original is needed directly beneath a photograph of the original, and the site's three artifacts give three different provenance states for the family's flagship discovery.

## [minor][adjusted] Anthony Larmann's note still says 'ARCHITECT IS NOT SOURCED… left standing' after the page fixed it
LOC: assets/js/data.js:2222 vs 2174 and 2189-2195
QUOTE: "⚠️ 'ARCHITECT' IS NOT SOURCED. This site's one rule is that a claim carries a record, and this one does not… It is left standing…"
PROBLEM: The occupation field now reads "DRAUGHTSMAN — read off the 1900 census in his own enumerator's hand," and a record card above displays the census image with the highlight "THIS SETTLES A FLAG THIS SITE RAISED ON ITSELF." The note below the same records still describes the pre-fix state, tells the reader the claim is unsourced and left standing, and prescribes as "the fix" reading exactly the sheet the page already reproduces. Stale self-audit text that makes the entry argue with itself.
CORRECTION: Line numbers only: the stale note is at data.js:2240 (not 2222 — that line is a record card title), the occupation field at 2192 (not 2174, which is Agnes Hanley's note), and the settling record card at 2207-2213 (not 2189-2195).

## [minor][adjusted] Meta description promises 'Every link cited to a civil or sacramental record' — the badge system itself says otherwise
LOC: index.html:7 (also og:description at index.html:12)
QUOTE: "A documented family tree… Every link cited to a civil or sacramental record."
PROBLEM: The site's own legend defines Single source (often "a user-submitted memorial") and Inferred ("no document says it yet") tiers, and 43 of 103 evidence codes are confirm and one inferred; several links rest on family notes, obituaries or FamilySearch reconstructions. The og:description "with the record behind every link" repeats the overclaim. The visible hero lede is careful ("Where it doesn't, that's said plainly too"), but the metadata — what search results and link previews show — asserts the absolute claim the page body explicitly disclaims.
CORRECTION: Counts: 39 of 99 evidence codes are 'confirm' plus 1 'inferred' (not 43 of 103). The finding otherwise stands as written.


# DIMENSION: vestigial-content

## [critical][confirmed] Duplicate 'records:' key in marieCancienne silently discards two records the entry still depends on
LOC: assets/js/data.js:437 and data.js:451 (entry starts line 423)
QUOTE: records: [ … 'THE CANCIENNES WERE VENETIANS…' / 'THE WIDOW\'S HOUSEHOLD — $12,000…' ], records: [ … 'A WOMAN CALLED MARY PEDAUX…' / 'Burial' ]
PROBLEM: The marieCancienne object literal has the 'records' property twice; in JavaScript the second silently overwrites the first, so the 'CANCIENNES WERE VENETIANS' record and the flagship 1860 widow's-household record are never rendered to any visitor. The blurb (line 436, 'The 1860 census caught her in between, holding a twelve-thousand-dollar farm together…') still summarizes a record the panel can no longer show, and the carefully-hedged slave-schedule caution in that dropped record is lost entirely. Clear leftover of an edit that added a second block instead of merging.

## [critical][confirmed] Duplicate 'records:' key in michelPedeau drops three records, leaving two drifted tellings of the 1810 census
LOC: assets/js/data.js:493 and data.js:513 (entry starts line 467)
QUOTE: records: [ 'THE 1810 CENSUS — and the Canciennes were the house next door' … 'CHANTENAY WAS THE ACADIAN QUARTER…' … '"FOREIGN FRENCH"…' ], records: [ 'Marriage — Church of the Assumption…', 'The 1810 census — his only census' ]
PROBLEM: Same duplicate-key bug: the first records block (the Canciennes-next-door 1810 reading, the Chantenay Acadian-quarter lead with its honest counter-evidence, and the 'Foreign French' correction) is silently discarded — three of the richest, most carefully caveated records on the site never ship. What remains is a second, differently-worded retelling of the same 1810 census ('his only census'), i.e., the same story told twice with drifted details, one version dead.

## [critical][adjusted] Footer audit paragraph and downloadable claims ledger no longer match the pages they describe
LOC: index.html:443-444; research/claims-ledger.csv (whole file, e.g. row 7 and row 11); assets/js/data.js:139
QUOTE: Of 267 claims, 89 have a source that can be pointed at and 121 are marked [UNVERIFIED] on the page itself
PROBLEM: The ledger actually contains 271 claim rows, not 267. Only 12 '[UNVERIFIED' markers remain anywhere in data.js, not 121 — 95 citations now read '[VERIFIED against the original, August 2026]'. The ledger's citation_on_page column still quotes the old '[UNVERIFIED — not re-checked…]' wording for those same claims (e.g. ledger row 7, herbertJoseph 'Louisiana birth record' = H UNVERIFIED/FLAG, versus data.js:139 '[VERIFIED against the original, August 2026]', same Vol. 175 p. 791; likewise veronicaBrunetti row 11 vs data.js:179). Ledger row 70 even preserves a record title the page has since renamed ('The first time she appears…' vs 'Standing as a godmother… but NOT her first appearance', data.js:1295). And the footer bills the CSV as 'Every claim on this site, audited' while the ledger covers only index.html (219 rows) and map.html (52) — research.html's claims are absent. A professional reader who downloads the flagship audit artifact will find it contradicts the site on its central selling point.
CORRECTION: All substantive claims hold; two counts were slightly off: data.js carries 10 '[UNVERIFIED' markers (11 site-wide including one in index.html static prose), not 12; and 97 citations read '[VERIFIED against the original, August 2026]', not 95.

## [critical][confirmed] francoisGaiennie panel reasserts the exact claim it withdraws two records earlier
LOC: assets/js/data.js:1092, contradicting data.js:1071-1074 in the same entry
QUOTE: Almost certainly this François — which would put father and son in the campaign in different regiments. Probable rather than proven.
PROBLEM: The entry's first record is headlined '⚠️ THE WAR OF 1812 CLAIM IS WITHDRAWN — there are two François Gaiennies and this page had the wrong one' and establishes that the only documented François Gaiennie in Morgan's 4th Regiment was the nephew born at New Orleans in 1791. The last record in the same panel, a stale pre-withdrawal leftover, quotes the same 4th-Regiment roster line and calls it 'almost certainly this François' (the Brûlon immigrant). The visitor reads a withdrawal and its reassertion in one panel.

## [major][confirmed] josephGervais record still identifies the withdrawn 4th-Regiment 'Francis Gaignie' as his father
LOC: assets/js/data.js:1018, conflicting with data.js:1074
QUOTE: The same roster carries "Francis Gaignie — 4 Reg't. (Morgan's), La. Militia" and a "U. Gaignie" — his father and, most likely, his uncle Urbain.
PROBLEM: francoisGaiennie's withdrawal record (data.js:1074) establishes that the 4th-Regiment Francis Gaignie was the New-Orleans-born nephew (b. 1791), not the Brûlon immigrant. This cross-referenced highlight on Gervais's panel — a stale pre-edit version — still tells the visitor that roster entry is 'his father'.

## [major][adjusted] Badge legend's example of an 'Inferred' link is a link the tree upgraded to Documented a year ago
LOC: index.html:314-317, contradicting assets/js/data.js veronicaFranovich (evidence: 'verified', record at ~1546)
QUOTE: Inferred means the circumstances are strong but no document says it yet — for example, Veronica Franovich's parents, named by every circumstance of the Buras household she grew up in and by no record yet read.
PROBLEM: data.js carries veronicaFranovich at evidence:'verified', and her 1910-census record says outright 'Upgraded from inferred to documented on 11 August 2026… "Varonike" is Veronica, in the house with both parents.' The static Method prose that teaches visitors how to read the badges cites, as its canonical example of Inferred, a link the tree itself now renders with the Documented badge — a stale pre-edit sentence in the most methodology-sensitive paragraph on the page.
CORRECTION: The title's 'a year ago' is wrong: the upgrade is dated 11 August 2026, one day before the site's current date — this is a fresh edit that missed the static Method prose, not a year-old drift. The problem and severity are unchanged.

## [major][confirmed] 'What's still open' Lemoine bullet is a stale pre-discovery version contradicted twice
LOC: index.html:421-427, conflicting with index.html:389-400 and research.html:1514
QUOTE: They run back to Edgard and Lucy in the river parishes and simply stop there, in the 1820s, without ever crossing the ocean on paper.
PROBLEM: The same page's 'The Lemoine wall came down' paragraph (index.html:389-400) reports Joseph Lemoine and Marie Ribas found via Alexis's 1829 baptism, which 'moves the family one parish downriver' to St. Charles Parish; research.html:1514 states 'The line now reaches the 1790s or so in St. Charles Parish and stops.' The open-questions bullet still describes the pre-August-2026 state (Edgard/Lucy, 1820s), so the page announces a breakthrough and then denies it forty lines later.

## [major][confirmed] The Lemoine-wall story is told twice in Method with near-identical openings and stale framing
LOC: index.html:370-377 and index.html:389-400
QUOTE: For a long time the oldest Lemoine we could name was Alonzo, and behind him nothing. … / … For as long as this archive has existed, the oldest Lemoine anyone could name was Alonzo, and behind him nothing
PROBLEM: Two 'Lately answered' paragraphs open with the same clause and both narrate breaking the Lemoine wall. The first establishes Alexis as Alonzo's father ('The Lemoine line now runs a generation deeper'); the second, describing the later discovery of Alexis's own parents, still frames the pre-state as 'the oldest Lemoine anyone could name was Alonzo' — impossible if the first paragraph is true. Reads as two drafts of the same section, both shipped.

## [major][confirmed] Census-mangles table still says Numa headed the 1870 household — a claim data.js explicitly retracts
LOC: research.html:272, conflicting with assets/js/data.js:313 and 322-325 (pierreNuma)
QUOTE: Numa, twenty-two, orphaned, heading a household of his four younger siblings
PROBLEM: pierreNuma's blurb says 'This page used to say Numa headed that household himself; he did not,' and its verified 1870-census record shows the head was Olivier Cancienne ('it corrects this archive, which said Numa headed that household of four younger siblings at twenty-two. He did not head it. He was living in it'). The research page's table row is the uncorrected pre-edit version, so the site publishes both the error and its correction.

## [major][confirmed] agnesHanley note says her parents are 'still open' while the same entry names them as verified
LOC: assets/js/data.js:2168, conflicting with the same entry's father/mother links and record (~2148-2153) and research.html:1518
QUOTE: Still open: her parents, her birth date, and the date of her marriage to William Winstine
PROBLEM: The entry links father:'stephenHanley', mother:'maryReed' (both evidence:'verified'), and its own 1906 marriage record highlight says the parents question 'closes an open question that has been on the field-notes page for months.' research.html:1518 was updated ('Her parents are now answered — Stephen D. Hanley and Mary C. Reed'); the data.js note is the stale pre-discovery version, contradicting the panel it sits in.

## [major][confirmed] genevieveRousselle note ends by corroborating the 1915 death the entry itself debunks
LOC: assets/js/data.js:2937, conflicting with the same entry's dates and record highlight (~2917-2930)
QUOTE: Genevieve's birth about 1861 matches her death in 1915 at fifty-four exactly.
PROBLEM: The entry's dates are 26 November 1863 – 21 February 1938, and its family-record highlight says 'This corrects an earlier guess on this site that she was the Genevieve Rousselle who died in Orleans in 1915; that was a different woman.' The note's final sentence is a leftover from the debunked reconstruction, actively arguing for the wrong death (and a birth year, 1861, matching nothing else on the page). Poupone's 1938 survival is also the linchpin of the reopened orphanage question on both pages, so this stale line undermines a headline correction.

## [major][confirmed] anthonyLarmann note still flags 'architect' as unsourced and prescribes the exact fix the entry already performed
LOC: assets/js/data.js:2234, conflicting with the same entry's occupation field (~2186) and record (~2199-2207); research.html:1529 repeats the stale version
QUOTE: ⚠️ "ARCHITECT" IS NOT SOURCED. … THE FIX IS SMALL AND SPECIFIC: the occupation column is on the 1900 census sheet itself, unindexed — he is at ED 85, 4th Precinct, New Orleans Ward 9, sheet 14A, line 46.
PROBLEM: The same entry's occupation field reads 'DRAUGHTSMAN — read off the 1900 census in his own enumerator's hand' and its record 'WHAT HE DID FOR A LIVING' shows exactly that sheet/line was read (with image, 'It says DRAUGHTSMAN… THIS SETTLES A FLAG THIS SITE RAISED ON ITSELF'). The note is the pre-reading draft. research.html's open-questions list (line 1529: 'This site calls him an architect and cannot yet prove it') repeats the same stale state, pointing readers at a question the site already answered — and the site no longer calls him an architect anywhere.

## [major][confirmed] The Goubler/Larmann family tomb is placed in St. Vincent de Paul No. 1 in one entry and No. 3 everywhere else
LOC: assets/js/data.js:1932 (charlesEmileLarmann), conflicting with data.js johnCasparLarmann grave record (~2410), johnLarmannSr blurb/record (~1835, 1853), and research.html:1549
QUOTE: He is buried in ST. VINCENT DE PAUL CEMETERY NO. 1, in the tomb inscribed "FAMILY OF JOSEPH GOUBLER"
PROBLEM: johnCasparLarmann's grave record states 'Anthony's line, the one this tree descends through, lies across town in the Goubler tomb at St. Vincent de Paul No. 3'; johnLarmannSr (buried in the same tomb) is 'Buried St. Vincent de Paul Cemetery No. 3' and his database record says No. 3 is 'where the Goublers lie'; research.html's help list asks for photos of 'the Wellmeyer and Larmann tombs at St. Vincent de Paul No. 3.' Charles Emile — on the same tablet as John Sr. per the tomb roster — cannot be in No. 1. One of the two numbers is wrong, and the discrepancy sits inside the site's own showpiece 'two tombs' argument.

## [major][confirmed] marieCancienne's rendered 'Mary Pedaux' record declares the question open in the highlight and resolved in the citation
LOC: assets/js/data.js:455 (highlight) vs data.js:456 (citation), same record
QUOTE: UNTIL THIS IS SETTLED, THE STATEMENT THAT NUMA WAS ORPHANED AT FOURTEEN IS IN DOUBT.
PROBLEM: The very next field, the citation, opens '[CONFLICT RESOLVED, August 2026 — the 1870 census shows no mother in the household, so the 1862 burial IS hers and this 1900 woman is not her; see the verification log]', and the entry's note plus index.html's Corrections list (line 274-276) both present the matter as settled. The all-caps 'IN DOUBT' warning is the pre-resolution draft left in the shipped record — the visitor reads 'in doubt' and 'resolved' in the same card.

## [minor][confirmed] Method section puts Casper in 'the same ground as the Goublers' at St. Roch; the tree says the two families lie in different cemeteries
LOC: index.html:384-386, in tension with assets/js/data.js:~2410 and research.html:886-888
QUOTE: buried in St. Roch Cemetery — the same ground as the Goublers, who lived three blocks away and would not marry into this family for another generation
PROBLEM: data.js's johnCasparLarmann grave record says explicitly 'AND IT SPLITS THE FAMILY IN TWO: this is Louisa's side. Anthony's line… lies across town in the Goubler tomb at St. Vincent de Paul No. 3. The two half-families are in two different cemeteries.' Only Leonce Goubler's household is tied to St. Roch (research.html:886-887); the Goublers who actually married into this family (Valentine's line) lie at St. Vincent de Paul. The sentence conflates the two Goubler branches and contradicts the tomb narrative a careful reader will meet on the next page.

## [minor][confirmed] emilyMevers note recycles, as a variant of her own name, the 1938 death-certificate error the Corrections section overturns
LOC: assets/js/data.js:~2586 (emilyMevers note), conflicting with index.html:283-287
QUOTE: a son's death record names his mother "Amelia Mevis."
PROBLEM: index.html's Corrections list establishes that the 1938 certificate naming 'Amelia Mevis' as mother belongs to Henry Larmann, born May 1889 — Louisa Ehmann's son, not Emily's ('Whoever gave the information in 1938 named the wrong wife'). Citing that record in Emily's entry as 'a son's death record' quietly re-adopts the very filiation error the site's own correction warns will 'hang six children on a woman who was already dead.'

## [minor][confirmed] alphonseSr blurb: 'married three times' with no third wife anywhere, and an age at death that contradicts the wife's own dates
LOC: assets/js/data.js:933, conflicting with data.js:948-963 (marieAlixFazende)
QUOTE: Married three times. Evela Trosclair died in 1855 at twenty-one; Marie Alix Fazende died in 1877 at thirty-seven.
PROBLEM: Only two wives are named on the entry (or anywhere on the site), leaving 'three times' dangling — likely a remnant of a fuller draft. And Marie Alix Fazende's own entry gives 6 June 1841 – 23 May 1877, which is age 35, not thirty-seven; the two entries a click apart disagree.


# DIMENSION: uncited-history

## [critical][confirmed] Duplicate 'records:' key silently deletes three cited record blocks; rendered Chantenay claim left uncited
LOC: assets/js/data.js:493 and data.js:513 (michelPedeau); blurb at data.js:492
QUOTE: records: [ … 'CHANTENAY WAS THE ACADIAN QUARTER — and their ships went to Assumption Parish' … ] … records: [ { title: 'Marriage — Church of the Assumption, Plattenville' …
PROBLEM: The michelPedeau object declares 'records:' twice (lines 493 and 513). In JavaScript the second key wins, so the first array — the 1810-census/Cancienne fence-line block, the fully cited Chantenay/Acadian-quarter block (Patrimonia Nantes, Acadian.org, Nantes port tonnage figures), and the 'Foreign French' correction citing Brasseaux — never renders on the live page. Meanwhile the rendered blurb (line 492) still asserts 'He was born at Chantenay in the years it was the Acadian quarter of Nantes — which may be the whole explanation for where he ended up,' now with no supporting citation visible anywhere on the page. The claims ledger has no rows for any of the dropped blocks (rows 25–26 cover only the surviving second array), so the site's own audit never catalogued them.

## [major][confirmed] 'Nantes was then the busiest port in France' — uncited, contestable superlative
LOC: index.html:101
QUOTE: Nantes was then the busiest port in France.
PROBLEM: A historical superlative about 1765 with no citation on the page and no claims-ledger row. It is also contestable: Nantes led the French slave trade earlier in the century, but by the 1760s Bordeaux had overtaken it in overall port traffic. A professional reader will challenge this sentence, and nothing in the repo (RESEARCH.md included) supports it.

## [major][confirmed] 'Registration wasn't required outside Orleans Parish until 1918' — uncited institutional date doing load-bearing work
LOC: index.html:251 (also data.js:241 highlight, data.js:257 note, data.js:286 ednaGaiennie note)
QUOTE: Registration wasn't required outside Orleans Parish until 1918.
PROBLEM: This Louisiana vital-registration date is the argument for two genealogical conclusions: it rebuts Find a Grave's New Orleans birthplace for Numa Sr. (Corrections list) and it explains Edna Gaiennie's missing birth record, whose parent link is 'inferred' partly on that absence pattern. It appears at least four times across the site and never once carries a citation (the statute — Louisiana Act 257 of 1918 or equivalent — is never named); the ledger has no row for it and RESEARCH.md asserts it equally bare.

## [major][confirmed] 'Census takers routinely wrote "mother" for a mother-in-law' — practice claim stated as fact, marked INFERRED in the site's own log
LOC: index.html:276; conflicts with research/RESEARCH.md:210-211
QUOTE: The old woman in the household is almost certainly his mother-in-law, Anne Marie Guedry Borne; census takers routinely wrote "mother" for a mother-in-law.
PROBLEM: This enumerator-practice generalization is the mechanism used to overrule a primary record (the 1900 census entry 'Mary Pedaux, b. 1812, Mother'). No citation to any census-methodology source is given anywhere. The site's own evidence log (RESEARCH.md:211) tags the identical sentence '[INFERRED]', but the Corrections list presents it as settled fact, and the ledger carries no row for the Corrections section at all.

## [major][adjusted] Medard Moisant's Quebec 1838 birth — the fact that carries the airport-kinship verdict is uncited
LOC: research.html:304 (also data.js:1713 highlight and data.js:1729 note)
QUOTE: The aviator's father, Medard Moisant, was born in Quebec in that same year, 1838, and emigrated to Illinois.
PROBLEM: The 'unlikely/settled' verdict on the Moisant airport story rests on this third-party genealogical fact — two exact contemporaries from different migrations. Alfred Moizant's side is documented (death record, obituary), but Medard Moisant's Quebec birth and Illinois migration carry no citation anywhere in the section, in data.js, or in the ledger. The companion claims ('In ninety years of Louisiana records the MOIS- and MOIZ- spellings never once cross') are likewise asserted without stating what was searched.
CORRECTION: The data.js occurrence is the 'HIS PARENTS, AND BORDEAUX' highlight at data.js:1719 ('The aviator John Moisant's father Medard was born in Quebec'), not data.js:1713/1729. Core finding stands: no citation for Medard anywhere in the section, in data.js, or in the ledger.

## [major][adjusted] Hanover emigration statistics (183,000 emigrants; Osnabrück 42%) uncited
LOC: research.html:1012-1013 (repeated at data.js:2413)
QUOTE: between 1832 and 1886 Hanover lost more than 183,000 people to emigration, and the Osnabrück country alone supplied forty-two percent of them
PROBLEM: Precise emigration statistics used to underwrite the 'why he left' narrative for Casper Larmann. No citation on either page; the ledger has no row (research.html is not in the ledger at all), and even RESEARCH.md:1323 carries the figures (183,355 / 42%) without naming a source — the adjacent Meyers Gazetteer citation covers only Gesmold's village classification.
CORRECTION: The data.js repetition is at data.js:2425 (johnCasparLarmann note) and repeats only the forty-two-percent figure, not the 183,000 total. The uncited-statistics problem on research.html:1011-1013 stands in full.

## [major][confirmed] Influenza 'killed more American soldiers that autumn than German fire did' — uncited comparative death toll supporting a cause-of-death conclusion
LOC: research.html:814-819
QUOTE: Bronchial pneumonia among American troops in France in late September 1918 is the signature of the influenza pandemic, which was then tearing through the AEF's camps and troopships and which killed more American soldiers that autumn than German fire did.
PROBLEM: This epidemiological comparison directly supports the conclusion 'He almost certainly did not die of anything the enemy did' about Pvt. Emile Goubler. No citation is attached; the comparison as phrased ('that autumn') is contestable — U.S. combat deaths in the Meuse-Argonne (Sept–Nov 1918) alone rival AEF disease deaths in the same window — and needs a named source (e.g., Byerly or official AEF medical statistics) or softer wording.

## [major][adjusted] Precise pandemic and repatriation statistics on the Goubler record are outside its cited sources
LOC: assets/js/data.js:2669 (josephGoubler, 'PVT. EMILE THOMAS GOUBLER' highlight)
QUOTE: the same influenza that killed 3,362 people in New Orleans between September 1918 and March 1919, and put 410 in the ground at Camp Beauregard … Sixty-one per cent of families chose repatriation in the 1921 balloting
PROBLEM: Three very specific statistics (a city flu death toll, a camp death count, a national repatriation percentage) appear in a record whose citation line (data.js:2667) lists only Find a Grave, Soldiers of the Great War, Honor States, the HMDb plaque transcription and a 39th Division unit history — none of which plausibly sources these figures. The ledger row for this record (row 180, provenance D) inherits the same citation list, so the figures are effectively uncited.
CORRECTION: Locations are data.js:2679 (citation) and data.js:2681 (highlight with the statistics), in the record block starting at data.js:2677 — not 2667/2669. Substance confirmed in full.

## [major][adjusted] Father Thevis / 1867 yellow-fever legend presented as fact on a burial-register citation
LOC: assets/js/data.js:2398 (johnCasparLarmann, 'HIS GRAVE, LOCATED' highlight)
QUOTE: When yellow fever took more than three thousand New Orleanians in 1867, Thevis vowed a chapel to St. Roch if his congregation was spared. Not one Holy Trinity parishioner died, in that epidemic or the next, and he built this cemetery in 1875 to keep the promise.
PROBLEM: An epidemic death toll ('more than three thousand'), a hagiographic claim ('not one Holy Trinity parishioner died' — pious parish legend, not a verifiable fact), and an institutional founding date (1875) are all asserted under a citation that covers only the archdiocese burial-register profile (data.js:2396). None of these historical claims has its own source, and the 'not one parishioner died' line should at minimum be attributed as parish tradition rather than stated flatly.
CORRECTION: Locations are data.js:2408 (citation) and data.js:2410 (highlight), not 2396/2398. Substance confirmed in full.

## [major][confirmed] Holy Trinity parish institutional history sourced to 'family testimony'
LOC: assets/js/data.js:68-69 (buddy record); claims-ledger.csv row 3
QUOTE: Citation: 'Family testimony (Kevin Pedeaux, August 2026). Parish and school history: Holy Trinity Parish, founded 1847 for the German Catholics below Canal Street; school opened 1871 under Benedictine sisters, free parochial school from 1910; church closed 1997, deconsecrated, now the Marigny Opera House.'
PROBLEM: Five institutional dates plus the 'Little Saxony' nickname (data.js:69) are packed into a citation whose only named source is family testimony — the 'Parish and school history:' clause names no publication, archive, or archdiocesan page. The ledger files the whole row under provenance B ('transcription supplied by Kevin or family papers'), which cannot source parish institutional history. Either cite the parish/archdiocese history actually consulted or mark these dates unverified.

## [major][confirmed] St. Vincent de Paul 'third parish founded in New Orleans, in 1838, basilica built in 1866' — uncited, and 1866 is load-bearing
LOC: assets/js/data.js:44-45 (kevin record); claims-ledger.csv row 2
QUOTE: the third parish founded in New Orleans, in 1838, its red brick basilica built in 1866 … John Casper Larmann came ashore at New Orleans in 1866 — the year that church was built
PROBLEM: The record's citation covers only the 237-metre distance measurement (ledger row 2, provenance E 'derived measurement'). The parish's founding rank ('third' is contestable — St. Patrick's 1833 and other antebellum parishes compete), the 1838 date, and the 1866 construction date carry no source, and the 1866 date is then used in the highlight as the hinge of a coincidence claim. The ledger has no row for the church-history sentence at all.

## [major][confirmed] Claims ledger omits research.html entirely, contradicting the footer's 'every claim on this site' promise
LOC: index.html:439-447; research/claims-ledger.csv (page column: only index.html and map.html rows)
QUOTE: Every claim on this site, audited and downloadable. In August 2026 each factual assertion here was catalogued with its citation and its provenance…
PROBLEM: The ledger's 272 rows cover only index.html and map.html; not one row exists for research.html, a 1,575-line page dense with factual assertions — including most of the uncited historical statistics reported here (Hanover emigration figures, AEF flu comparison, Medard Moisant, USS Utah movements, Victory Arch superlative). The footer's audit claim therefore overstates coverage, which is exactly the failure mode the audit was built to prevent.

## [minor][adjusted] Saint-Malo landing date '23 January 1759' — precise ship-arrival date with no citation anywhere in the repo
LOC: index.html:120-121
QUOTE: were Acadians, deported from Île Saint-Jean and landed at Saint-Malo on 23 January 1759
PROBLEM: A to-the-day ship-arrival date presented as fact in the Crossings narrative. No citation appears at that point, the ledger has no row for it (rows 33-37 cover the baptism, the 1785 passenger list and the voyage, not the 1759 deportation landing), and the date appears nowhere in RESEARCH.md. The likely source (Robichaux, The Acadian Exiles in Saint-Malo — named only in a data.js note as a book to consult) is never cited for this claim.
CORRECTION: The date IS in RESEARCH.md (line 368) with a named source, Rieder's The Acadians in France vol. 3, p. 21 (inherited via Cormier, marked CONFIRM/not verified). The residual problem is only that index.html:119 states it bare and no ledger row covers it.

## [minor][confirmed] 'Seven ships … some 1,600 Acadians' figure rests on an unopened book
LOC: index.html:126-127; claims-ledger.csv row 37
QUOTE: one of seven ships that carried some 1,600 Acadians from France to Louisiana
PROBLEM: The figure carries no citation at the point of use in the Crossings prose; the nearest ledger row ('The voyage', row 37) is provenance G — 'named book/journal; I did NOT open it' (Cormier) — and is flagged. Scene-setting rather than load-bearing, but the number should be tied to Cormier or Hébert explicitly.

## [minor][confirmed] 'Fifteen of them left Plataci between 1905 and 1922' — derived count asserted without its derivation
LOC: index.html:168-169
QUOTE: Fifteen of them left Plataci between 1905 and 1922 — one family pulling the next across.
PROBLEM: A specific migration count with no citation at the point of use and no ledger row. The probable derivation (the Ellis Island search URL 'every Brunetti who left Plataci' in data.js:1474) lives on a different page element and never states the count or the search date; the number should cite that search explicitly.

## [minor][confirmed] Plataci Arbëreshë fifteenth-century background repeated as fact while the ledger marks it UNVERIFIED
LOC: index.html:172-175 and research.html:529-534; claims-ledger.csv row 88
QUOTE: Plataci is an Arbëreshë village — an Italo-Albanian community that has been in Calabria, speaking Arbërisht, since the fifteenth century.
PROBLEM: The site's own ledger row for 'What Plataci was, and still is' is provenance H UNVERIFIED/FLAG (sourced to the family binder, not opened independently), and the data.js record carries the [SOURCE NOT ONLINE] marker — but the index.html pull-quote and the research.html restatement ('founded by refugees who crossed the Adriatic in the fifteenth century, after the Ottomans took Albania') carry no marker or citation at all. Almost certainly true, but the site's own standard requires the flag to travel with the claim.

## [minor][confirmed] Victory Arch superlative and present-tense segregation claim uncited
LOC: research.html:843-847 and research.html:855-858
QUOTE: reckoned the first permanent memorial in the United States to the men of the First World War … the arch segregates its dead, and still does.
PROBLEM: The 'first permanent WWI memorial in the United States' superlative (hedged only by 'reckoned') and the assertion that the segregated plaque arrangement persists today both lack citations on this page. The 1920 clipping cited nearby supports the dedication-era facts but not the superlative or the present-day condition; the arch details are cited only in the ledger for the index.html Goubler pin (row 180), not here.

## [minor][confirmed] USS Maine facts underpinning the spoon-story reconciliation are uncited
LOC: research.html:654-662 (also data.js:2056)
QUOTE: 6,682 tons was the Maine's exact displacement … a second USS Maine served from 1902 until 1920
PROBLEM: The displacement figure and the second Maine's service dates (1902–1920) are naval-history facts doing real work — they convert a seemingly impossible family story into a live hypothesis about Robert Lemoine's blank 1913–17 years — yet carry no citation (DANFS would do). The ledger row for the spoon (row 129) covers only the keepsake photograph, not the naval facts.

## [minor][confirmed] USS Utah's Bantry Bay movements repeated on research.html without the UNVERIFIED marker they carry elsewhere
LOC: research.html:703-709; conflicts with claims-ledger.csv row 133 and data.js:2081
QUOTE: She reached Berehaven, Bantry Bay, Ireland on 10 September 1918 and became flagship of Battleship Division Six
PROBLEM: The data.js record cites DANFS with an explicit '[UNVERIFIED — not re-checked…]' marker and the ledger flags it (row 133, provenance H), but the research.html retelling presents the identical ship movements with no citation or marker at all. The claim's status should be consistent across pages.

## [minor][confirmed] Moisant colour facts — 'eight days in Louisiana' and 'MSY stands for Moisant Stock Yards' — uncited
LOC: research.html:307
QUOTE: John Moisant spent a total of eight days in Louisiana, as a touring exhibition pilot. "Moisant Field" honors a crash site. The airport code MSY stands for Moisant Stock Yards.
PROBLEM: A precise day-count of a public figure's time in the state and the MSY etymology (widely repeated but worth a source) are asserted without citation, no ledger row exists, and research.html is outside the ledger's coverage entirely.

## [minor][confirmed] 'Roughly four in five Americans carrying the surname still live in Louisiana' — surname-distribution statistic uncited
LOC: assets/js/data.js:442 (marieCancienne, 'THE CANCIENNES WERE VENETIANS' highlight)
QUOTE: Roughly four in five Americans carrying the surname still live in Louisiana.
PROBLEM: A quantified surname-distribution claim whose record citation (Cormier, for the Venetian origin) does not cover it; the derivation (presumably a census/Forebears-style surname lookup) is never named. The ledger has no row for this sentence.

## [minor][confirmed] St. Louis church registers 'effectively begin in 1731' / 1788 fire — archival-coverage claim uncited
LOC: research.html:1486-1490 (repeated at data.js:1346)
QUOTE: The St. Louis church baptismal registers effectively begin in 1731. What came before is lost or fragmentary, and the fire of 1788 took more.
PROBLEM: The conclusion that the crossing generation 'may simply stay nameless' rests on this statement of register coverage, which is asserted without citing the Archdiocese's register inventory or SRANO Vol. 1's own introduction. Roughly accurate, but it is an institutional claim a professional would expect sourced.

## [minor][confirmed] Scene-setting superlatives and market-history dates asserted bare in data.js highlights
LOC: assets/js/data.js:151 (herbertJoseph) and data.js:1909 (charlesEmileLarmann note)
QUOTE: guarding the waterway that had been the hemisphere's most defended piece of ground … instantaneous gas heaters reached the American market in 1893 and the 1900s were their golden age
PROBLEM: Two representative examples of uncited background history in panel text: a superlative about Canal Zone defenses (ledger row 10 area carries no source for it) and specific product-history dates for tankless water heaters. Both are colour rather than load-bearing, but each states checkable facts with no citation and no ledger row.


# DIMENSION: proof-leaps

## [critical][confirmed] Brunetti mother still 'Domenica Forano' in both prose pages after the site's own birth act corrected her to Trojano
LOC: research.html:570-574 and index.html:183-184, conflicting with assets/js/data.js:1456 and 1493-1503
QUOTE: The 1921 New Orleans clerk wrote John's mother down as Domenica Forano. There is no Forano in the Plataci records read so far — but there is Fortino, and Fortini. It would not be the first name in this archive that an American clerk heard sideways.
PROBLEM: data.js already settled this: the Plataci birth act (data.js:1456) reads 'da DOMENICA TROJANO, sua moglie' and the site's own highlight says 'The mother was DOMENICA TROJANO, not "Forano": the 1921 New Orleans clerk misread a handwritten Trojano, and this family has carried the wrong surname for a century'; the person entry (data.js:1497) carries surname 'Trojano'. Yet research.html still presents Forano as her name, says 'Nowhere in it have we found Michele Brunetti or Domenica Forano' (research.html:468), and floats a Fortino/Fortini misreading theory the birth act has mooted; index.html:184 also states 'Michele Brunetti and Domenica Forano... Michele and Domenica are on the tree now.' A visitor reading the narrative pages is invited to chase a phantom surname the site's own primary record has already disproved.

## [critical][confirmed] Footer audit statistics contradict the page and the downloadable ledger they describe
LOC: index.html:443-447, versus assets/js/data.js (whole file) and research/claims-ledger.csv (e.g., row 7 vs data.js:139)
QUOTE: Of 267 claims, 89 have a source that can be pointed at and 121 are marked [UNVERIFIED] on the page itself
PROBLEM: The page (data.js) now contains only 12 '[UNVERIFIED' marks; 94 citations instead read '[VERIFIED against the original, August 2026 — see the verification log]'. Meanwhile the ledger offered for download still records those same claims as 'H UNVERIFIED / FLAG' with citation_on_page text reading '[UNVERIFIED — not re-checked in the August 2026 audit]' (e.g., ledger row 7, Herbert Joseph birth record, versus data.js:139 which now says VERIFIED). Whichever state is true, the three artifacts disagree: the footer describes marks that are no longer on the page, and the 'audited and downloadable' ledger — the site's flagship transparency claim — no longer matches what the site asserts. A professional reader who spot-checks one row will conclude the audit is unreliable.

## [major][adjusted] Brunetti chain called 'documented end to end' while two of its links are same-name matches the site's own ledger flags as unopened/unverified
LOC: research.html:378-387; supporting: index.html:156-160 and 196, claims-ledger.csv rows 82-83, data.js:1434-1443
QUOTE: The chain the file spent years refusing to assume is now documented end to end: born 5 May 1893 in Plataci... Chicago and the 1917 draft; First World War service confirmed by a Veterans Administration master index card (service dated 24 May 1919, New Orleans)
PROBLEM: The Chicago leg rests on 'one John Brunetti registered for the draft in Chicago... and not a single Brunetti registered anywhere in Louisiana' (index.html:156-158) — a same-name match plus negative evidence; the ledger's own row for the draft card (row 83) says 'real archive ref; I did NOT open it, FLAG', and no detail from the card (birthdate, birthplace, address) is quoted tying it to this man. The VA card (ledger row 82: 'H UNVERIFIED... FLAG') is likewise described only as 'John Brunetti — a veteran's index card' with no identifying detail quoted, yet research.html says service is 'confirmed' by it. And index.html:196's 'Two independent documents... agreeing on a name neither clerk could have got from the other' — the agreed name is 'Michele', one of the commonest Italian given names. 'Documented end to end' is exactly the proof-language the evidence quoted cannot carry for the Chicago and service legs.
CORRECTION: The core problem is real: research.html:380-384 says the chain 'is now documented end to end' including 'Chicago and the 1917 draft' and 'First World War service confirmed by a Veterans Administration master index card,' while the same site marks the VA card '[UNVERIFIED — not re-checked in the August 2026 audit]' (data.js:1429) and the ledger flags both it (row 82, H UNVERIFIED/FLAG) and the Chicago draft (row 83, 'real archive ref; I did NOT open it, FLAG'), with no identifying detail from either document quoted. But the finder overreaches on two points: (1) the parent-chain proper (birth act + manifest + marriage record) IS documented — the Plataci birth act (data.js:1456-1462) gives 5 May 1893, matching the 1942 draft card 'to the day' (data.js:1447), so the manifest-identity leg is far stronger than the finder allows; (2) dismissing index.html:196's two-document agreement as merely 'Michele, a common name' understates it — the agreement is Michele as father of a John/Giovanni Brunetti of matching age, independently corroborated by the birth act. The genuine defect is confined to the Chicago and war-service legs and the 'confirmed'/'end to end' proof-language covering them; severity major, not critical.

## [major][confirmed] research.html still says Numa headed the 1870 household — a claim data.js explicitly retracts
LOC: research.html:272, conflicting with assets/js/data.js:313 and 322-325
QUOTE: 1870 | Assumption | PADON | Numa, twenty-two, orphaned, heading a household of his four younger siblings
PROBLEM: data.js:313 says 'This page used to say Numa headed that household himself; he did not', and the verified 1870 record block (data.js:323-324) shows the head was Olivier Cancienne, 57, with Numa 'living in it'. The census-mangles table on research.html was never updated and repeats the retracted claim as fact.

## [major][confirmed] Duplicate 'records:' keys in data.js silently discard whole record blocks the visitor never sees
LOC: assets/js/data.js:437 and 451 (marieCancienne); data.js:493 and 513 (michelPedeau)
QUOTE: records: [ ... THE CANCIENNES WERE VENETIANS ... ], records: [ ... A WOMAN CALLED MARY PEDAUX ... ]
PROBLEM: Both person objects define the 'records' property twice; in a JS object literal the second definition wins, so the first block is dead code. For marieCancienne, the discarded block contains 'THE CANCIENNES WERE VENETIANS' and the 1860 widow's-household record with its carefully hedged slave-schedule discussion; for michelPedeau, the discarded block contains the 1810 fence-line record, the Chantenay-Acadian-quarter lead, and the 'Foreign French' correction. The site's prose elsewhere (e.g., michelPedeau's blurb, research.html) references this content, but the panels never render it — authored evidence and caveats are silently missing from the published page.

## [major][confirmed] A 1697 Valenciennes immigrant is attached to Eulalie Borne's 'people' by surname alone, violating the site's own stated rule
LOC: assets/js/data.js:361-368 (eulalieBorne), with claims-ledger.csv row 21
QUOTE: Her people came off the German Coast — but they were not German. ... JACQUES ANTOINE BORNE, baptised at VALENCIENNES in Nord, France, 15 May 1697... He sailed aboard LA MARIE and landed at Dauphin Island on 25 AUGUST 1718
PROBLEM: No document on the site connects Eulalie Borne (b. 1849, parents Marcellin Borne and Anne Marie Guedry, both bare names with no ascent) to Jacques Antoine Borne of 1718 — roughly 150 years and five-plus generations are unbridged. The house rule (data.js:11-12, index.html method section) is 'never add a parent link without a record naming both people. A shared surname is not evidence' — yet the highlight draws a nationality conclusion for 'her people' from a surname-only association, sourced to a book the ledger flags as 'named book/journal; I did NOT open it' (row 21), abstracted via WikiTree.

## [minor][adjusted] Casper Larmann's 1866-67 conscription-flight arrival is declared 'Everything checks' while two of the site's own records contradict it
LOC: assets/js/data.js:2413 (note), data.js:2376 (obituary), data.js:2401-2404 (naturalization); research.html:1009-1011 and 1032-1038
QUOTE: Everything checks. Gesmold was Hanoverian until Prussia annexed the kingdom in 1866 and brought its conscription with it; Casper emigrated in 1866 or 1867, at exactly twenty
PROBLEM: The site's own quoted obituary (data.js:2376) calls him 'a resident of this city for the past fifty-six years' — 1921 minus 56 is 1865, BEFORE the annexation the narrative says drove him out. And his naturalization (data.js:2401-2403) is filed in a 'Minor's Naturalization Book' (16 October 1868), a record class that presumes arrival as a minor — irreconcilable with landing in 1866 at twenty, yet glossed as 'Two years after he landed, at twenty-two.' research.html:1037 goes further: 'A family story and a treaty date landing on the same year is about as close to corroboration as oral history ever gets.' The corroboration claim is circular (the 1866 arrival year is itself the inference being tested) and the two contrary data points on the same page are never reconciled.
CORRECTION: The note is at data.js:2431 (not 2413), and 'contradict' is too strong for one of the two records. The obituary (data.js:2394, 'a resident of this city for the past fifty-six years,' died Nov 1921) implies arrival ~Nov 1865, but against an 1866 arrival that is an off-by-under-a-year rounding in a notoriously approximate genre, not a flat contradiction. The naturalization point is genuine: data.js:2420 cites 'Minor's Naturalization Book 6' (a record class for aliens who arrived under 18) yet data.js:2422 glosses it 'Two years after he landed, at twenty-two' with no acknowledgment that the book class sits badly with landing in 1866 at twenty — and the record is itself marked [UNVERIFIED]. The research.html:1034-1035 'about as close to corroboration as oral history ever gets' does lean circular, since no independent document for the 1866-67 arrival year is cited anywhere shown. So: real overconfidence in 'Everything checks,' one genuine unexamined tension (the Minor's book), one rounding-level quibble inflated into a contradiction. Minor, not major.

## [major][adjusted] 1910 census index entries presented as one household — 'Genevieve there too'
LOC: research.html:731-736, conflicting with assets/js/data.js:2010-2013 and claims-ledger.csv row 126
QUOTE: The 1910 census holds the aftermath: the only Johanna Lemoine in Louisiana, age three, in an Orleans household; Genevieve there too; a toddler Robert born 1909 — very probably the boy the orphanage later took
PROBLEM: The cited source is the 1910 index only (ledger row 126: UNVERIFIED, FLAG), and data.js:2012 words it correctly: 'In the same INDEX: Genevieve Lemoine... a toddler Robert Lemoine' — separate index entries, not one household; data.js:2013 admits 'The census image itself, with its relation-to-head column, is the next document to pull.' research.html's 'there too' converts co-presence in a statewide index into co-residence in a household — the exact reconstruction ('Genevieve stands with the children') the unread image is supposed to test. The trailing negatives ('no Alonzo Lemoine anywhere in the country, no adult Agnes Lemoine anywhere in Louisiana') are index-absence used as positive biography.
CORRECTION: The research.html passage (731-736) is stale, but the finder's account of data.js is outdated/misquoted: the text 'In the same INDEX: Genevieve Lemoine... a toddler Robert Lemoine' does not exist in the current data.js, and the census image is NOT unread — data.js:2016-2019 is a VERIFIED read of the 1910 image (head GENEVIEVE LEONOIRCE, Johanna 'GRANDDAUGHTER'). So 'Genevieve there too' is actually correct. What is wrong in research.html is the toddler: data.js:2022-2024 ([CORRECTED, August 2026]) states flatly 'the toddler Robert Lemoine b. 1909 IS NOT IN THIS HOUSEHOLD. He is in New Orleans Ward 9... indexed as the SON of Eugene and Mary T. Lemoine' — yet research.html still puts him in the household and calls him 'very probably the boy the orphanage later took.' The real finding is a narrative page contradicting the dataset's own explicit August 2026 correction, not index-to-household inflation. The trailing negatives ('no Alonzo anywhere...') are still asserted as holding in data.js:2024, so that sub-complaint is weaker than claimed. Severity stays major: the prose asserts a household reconstruction the site's own verified re-read specifically disproved.

## [major][adjusted] Ibbenbüren announced as 'found' on equal footing with Gesmold, though it rests on an unread FamilySearch reconstruction
LOC: index.html:348-352 and research.html:1109-1113, versus assets/js/data.js:3207 and claims-ledger.csv row 225
QUOTE: The German towns — both found, in one night. ... The Wellmeyers came from Ibbenbüren in Westphalia, where Bernard Heinrich Wallmeyer was christened on 1 July 1823.
PROBLEM: For Gesmold the register was actually read and imaged; for Ibbenbüren, data.js:3207 concedes the origin, christening date and parents come from a FamilySearch profile 'carried at confirm until the Ibbenbüren parish registers are read directly.' The prose states the christening date and town flat, with no hedge, presenting an unread online reconstruction with the same confidence as a read register. The ledger's own map row (225) adds a countervailing fact the prose omits: the documented emigrant chain from Ibbenbüren parish 'pointed mainly at Cincinnati,' not New Orleans.
CORRECTION: The concession is at data.js:3255 (henryBernardWellmeyer note: origin, christening and parents 'come from a well-sourced FamilySearch profile... carried at confirm until the Ibbenbüren parish registers are read directly'), not data.js:3207 (which is the burial-database highlight). Everything else holds: index.html:348-351 ('The German towns — both found, in one night... where Bernard Heinrich Wallmeyer was christened on 1 July 1823') and research.html:1108-1113 state the christening date, town, and parents flat, with no hedge, in the same breath as Gesmold — whose register was actually read and imaged, and where the site itself models exactly the right behavior two paragraphs earlier (research.html:1084-1096 carefully downgrades the unread 1791 Larmann link to 'confirm'). Ledger row 225 confirms the omitted countervailing fact: Müller's documented Ibbenbüren emigrant chain 'pointed mainly at Cincinnati.' Severity major stands.

## [major][confirmed] Marie Cancienne conflict 'RESOLVED' by household-absence negative evidence, while the same panel's highlight still says the question is open
LOC: assets/js/data.js:453-456 (live record block) and data.js:324; index.html:274-276
QUOTE: [CONFLICT RESOLVED, August 2026 — the 1870 census shows no mother in the household, so the 1862 burial IS hers and this 1900 woman is not her]
PROBLEM: Absence from one 1870 household does not prove death by 1870 — a widow could live with any other child or kin — yet data.js:324 says it 'settles that his mother was dead by 1870.' Against it stands an enumerator's explicit 'MOTHER' entry in 1900 (which the same record block stresses was 'not inferred by an indexer, but recorded by the enumerator'), dismissed at index.html:276 as 'almost certainly his mother-in-law, Anne Marie Guedry Borne' on the strength of an uncited generalization ('census takers routinely wrote "mother" for a mother-in-law'). Worse, the highlight of this very record (data.js:455) still ends 'UNTIL THIS IS SETTLED, THE STATEMENT THAT NUMA WAS ORPHANED AT FOURTEEN IS IN DOUBT' while its own citation says the conflict is resolved — the rendered panel asserts doubt and resolution simultaneously, and the tree and blurbs print 'orphaned at fourteen' as fact.

## [minor][adjusted] Robert Lemoine identity: an age conflict between the 1906 act and the service card is resolved by assumption, then dressed up as a consent-law anecdote
LOC: assets/js/data.js:2140-2141 (agnesHanley); research.html:647-649
QUOTE: Robert is entered as twenty-one, but his 1913 Navy card gives his age as twenty-five years five months in October of that year, which puts his birth in May 1888 and makes him EIGHTEEN at this wedding, not twenty-one. A groom of eighteen needed his parents' consent in Louisiana. A groom of twenty-one did not.
PROBLEM: A three-year age disagreement between the marriage act and the service card is prima facie reason to ask whether the 1906 groom and the 1888-born sailor are the same Robert Lemoine; the page instead assumes identity and converts the discrepancy into an insinuation (that he overstated his age to dodge parental consent), citing no Louisiana statute. research.html:648 states flatly 'the Orleans marriage index holds his wedding.' The identity is probably right (the act names Alonzo/Genevieve as the groom's parents), but the conflicting datum is spent as color rather than weighed as counter-evidence, and the parent link built on it is badged 'verified'.
CORRECTION: The quote is real (data.js:2153, the agnesHanley marriage-record highlight; the finder's 2140-2141 points at the entry's fields) and the consent-law claim is indeed uncited. But the identity is not 'resolved by assumption': the 1906 act names the groom's parents ANAZAN [Alonzo] LEMOINE and GENEVIEVE ROUSSEL (2152) — the documented parents of the Arlington sailor; the robertLemoine note (data.js:2101) adds that his own 1949 death notice 'gives his age as 61 — exact for a man born 7 May 1888' and names his brother Eugene, and Johanna's 1992 obituary names 'the late Robert Lemoine' as her father. Also, the parent links built on this are NOT badged as the finder claims: Johanna's link to Robert/Agnes is carried at 'confirm' with an explicit disclosure that the 1924 marriage licence application is still wanted (data.js:1997, 2028); the 'verified' at data.js:2048 is Robert's link to HIS parents, legitimately grounded in the act naming both. The surviving kernel — the age discrepancy is spent as a consent-dodging insinuation (repeated flatly as 'He was eighteen' at 2062) rather than weighed, and no Louisiana statute is cited — is a polish issue.

## [major][confirmed] 'The ones who actually crossed the Atlantic' — the 1740 contract proves the daughter's birthplace, not the parents' ocean crossing
LOC: research.html:1318-1321; also assets/js/data.js:1264 (heleneDorigny blurb) and research.html:1344-1351
QUOTE: Jean Reynaud and Hélène Dorigny are the two people this whole archive was reaching for — the ones who actually crossed the Atlantic. They are named exactly once, and this is it.
PROBLEM: The one document naming them (the 1740 contract) says only that their daughter was 'native de la Nouvelle Orléans, évêché de Québec' and that both parents were dead. That the parents crossed the Atlantic is inference — the colony answered to Quebec, and settlers arrived from Canada and Mobile as well as France (the site's own Connard research runs 'back through Mobile and the Arkansas Post'). The Dorigny blurb likewise states 'a woman who crossed an ocean' as fact. The companion deductions at research.html:1345-1350 ('Two things follow from that silence. He was here by about 1720... And he died early and without an estate worth going to court over') present absence from court records as positive biography; a man who left the colony or died elsewhere produces the same silence.

## [major][confirmed] Meta description promises 'Every link cited to a civil or sacramental record' — contradicted by the site's own badge system
LOC: index.html:7 (and og:description at index.html:12)
QUOTE: A documented family tree from Kevin Pedeaux back to a ship's carpenter's son in Nantes and an Acadian family deported to Brittany. Every link cited to a civil or sacramental record.
PROBLEM: The badge legend itself defines 'Single source' links resting on user-submitted memorials and 'Inferred' links where 'no document says it yet' (index.html:312-317); a direct-line link, Edna Gaiennie to her parents, is carried at 'inferred' with the note that it rests 'on that pattern plus the tomb, not yet on a document naming her with them' (data.js:283-286). The description a search engine or link preview shows asserts the one thing the site is elsewhere scrupulous about not claiming.

## [minor][adjusted] 'HE WAS KILLED BY THE 1918 FLU... AND THE MONUMENT ITSELF SAYS SO' — the cited sources say broncho pneumonia; none says influenza
LOC: assets/js/data.js:2666-2669 (josephGoubler record), versus research.html:813-819
QUOTE: HE WAS KILLED BY THE 1918 FLU, THREE HUNDRED KILOMETRES BEHIND THE LINES — AND THE MONUMENT ITSELF SAYS SO.
PROBLEM: Every cited source (Soldiers of the Great War 'Died of Disease'; the memorial's 'broncho pneumonia'; the arch's died-in-service vs killed-in-action plaques) establishes a non-combat disease death, not influenza specifically — bronchopneumonia had other causes even in autumn 1918. research.html:814 words the same inference correctly ('He almost certainly did not die of anything the enemy did'); the data.js headline promotes a strong epidemiological likelihood to a flat fact and claims the monument attests it, which it does not.
CORRECTION: The record is at data.js:2684-2687 (the Emile Thomas Goubler record inside the josephGoubler entry), not data.js:2666-2669 (which is the children list). Substance holds: the cited sources (data.js:2685-2686) establish 'Died of Disease' and 'BRONCHO PNEUMONIA'; the arch distinguishes died-in-service from killed-in-action; none names influenza. The headline both promotes the flu inference to flat fact and claims 'THE MONUMENT ITSELF SAYS SO,' which it does not — the monument attests non-combat death only. research.html:813-817 words the same inference correctly ('He almost certainly did not die of anything the enemy did. Bronchial pneumonia... is the signature of the influenza pandemic'). Note the data.js highlight does lay out its epidemiological reasoning (Camp Beauregard, 3,362 New Orleans deaths), so the leap is argued, just overstated in the headline. Minor stands.

## [minor][confirmed] 'Not a single Brunetti birth in the Louisiana index — nobody followed him south' ignores the site's own registration-gap caveat
LOC: index.html:149-152; assets/js/data.js:1404
QUOTE: Apart from his own daughter's, there is not a single Brunetti birth in the Louisiana index — no brother, no cousin, nobody followed him south. The surname ended with him in this state.
PROBLEM: The site itself teaches, twice (numaSr note, ednaGaiennie note), that Louisiana did not require birth registration outside Orleans Parish until 1918, so absence from the birth index proves nothing about non-Orleans families. A Brunetti relative settling in any other parish before 1918 (e.g., the Italian communities of Tangipahoa) would leave exactly this nil result. Negative index evidence is here converted into the positive claims 'nobody followed him south' and 'the surname ended with him.'

## [minor][confirmed] 'HE HAD NOT ONE GERMAN ANCESTOR' asserted as something 'this tree can prove' — a tree cannot prove absence
LOC: assets/js/data.js:70 (buddy highlight)
QUOTE: HE HAD NOT ONE GERMAN ANCESTOR — AND THEN HE MARRIED INTO THE REAL THING. Look at what this tree can prove about the boy sitting in that classroom.
PROBLEM: Several of Buddy's ancestral lines are open or undocumented at their far ends: Jeanne Curien's parents are unidentified (Curien is a name found in Lorraine/Alsace), Victoria Daroca's origins are unknown, the Guedry and Borne ascents are bare names, and the Gaiennie link itself is badged 'inferred.' The rhetorical point (no documented German ancestor) is fine; 'prove... not one German ancestor' claims a universal negative the documented tree cannot support.

## [minor][adjusted] Same-initial newspaper matches ('B Wellmeyer') asserted as the immigrant's civic biography, while the identical ambiguity is conceded one sentence later for a different item
LOC: assets/js/data.js:3169-3172 (henryBernardWellmeyer)
QUOTE: HE SIGNED A POLITICAL PETITION IN 1872, AND SAT ON A JURY IN 1880 ... he was in a jury box in the Superior Criminal Court, which meant he was a registered voter in good standing.
PROBLEM: The 1872 signature and 1880 jury listing are 'B Wellmeyer' / 'B. WELLMEYER' — initial-plus-surname matches with no address or occupation quoted to tie them to this Bernard rather than any other B. Wellmeyer (his own son Bernard John existed, though young). The same record block honestly declines to attribute the 1878 'Henry Wellmeyer' bid because 'both Bernard H. and his son Henry were in the building trades' — an inconsistent evidentiary standard applied within one panel, with the weaker matches narrated as settled biography ('This is what citizenship looked like...').
CORRECTION: The record is at data.js:3217-3220, not 3169-3172 (those lines are johnWellmeyer's records). Two substantive corrections: (1) the finder's proposed rival, 'his own son Bernard John,' was born in 1888 (data.js:3188) — eight years AFTER the 1880 jury item and after Bernard H.'s September 1880 death — so he could not be the 1872 signatory or the 1880 juror; no second adult B. Wellmeyer appears anywhere in the entry's directory evidence (data.js:3231 shows Bernard as the only 'Wellmeyer B.' across 1861-1884). (2) The claimed 'inconsistent evidentiary standard' is therefore not identical ambiguity: the 1878 'Henry Wellmeyer' bid is declined because TWO documented Henrys were in the building trades at the same address, while no documented rival B exists. What survives is the narrower point that the petition and jury items are printed as settled biography ('This is what citizenship looked like...') without the panel stating the uniqueness reasoning or quoting any address/occupation from the newspaper items themselves. Minor.

## [minor][adjusted] Derived distances stated to the metre from geocodes of century-old addresses
LOC: assets/js/data.js:42 and 45 (kevin), data.js:1948 (charlesEmileLarmann); claims-ledger.csv row 2
QUOTE: MARRIED 237 METRES FROM HIS GREAT-GREAT-GREAT-GRANDFATHER'S DOOR
PROBLEM: The 237 m (and companion '247 metres off', '56 METRES away') are distances between modern geocoded points standing in for historical addresses — the ledger classes it 'E derived measurement, computed from geocoded coordinates.' The site elsewhere warns that pre-1894 house numbers 'no longer point anywhere on a modern map' and declines to pin several of them; single-metre precision in a headline implies a survey-grade certainty the underlying geocoding cannot deliver. 'About 240 metres' would be honest; '237' is theater.
CORRECTION: Quotes and ledger classification verified (data.js:42-45 '237 METRES'/'247 metres', data.js:1954 '56 METRES away'; ledger row 2 'E derived measurement, computed from geocoded coordinates'). But the framing 'geocodes of century-old addresses' is off: the specific points behind these figures are post-1894, currently mappable addresses (the church at 3051 Dauphine, the Larmann house at 2833 Dauphine settled by four sources at data.js:2410, 922 Port, and the 927 Franklin / 2602 Burgundy corner verified against the census sheet geometry at data.js:1951-1954). The site's pre-1894 warning (data.js:2410: old numbers 'no longer point anywhere on a modern map... left off the map on purpose') is applied consistently — those unmappable addresses get no distances. What survives is pure false precision: single-metre figures from geocoded centroids imply survey-grade accuracy the method cannot deliver; 'about 240 metres' would be honest. Cosmetic — minor.

## [minor][confirmed] 'Nearly every date in Esther's ledger checks out' — the table beneath it corrects five of thirteen rows
LOC: research.html:74-77, versus the table at research.html:116-137
QUOTE: Nearly every date in Esther's ledger checks out against the Louisiana death and marriage indexes, several to the exact day. As a source, she has earned her keep.
PROBLEM: Of the thirteen comparisons in the site's own table, five carry the 'fix' class (wrong month for the Casper-Emily marriage, wrong day for Emily's death, wrong year for Anthony Leo's death, wrong month for his birth, wrong year for John Edward Wellmeyer's death). Eight of thirteen confirmed is a genuinely good source, but 'nearly every date checks out' overstates what the adjacent evidence shows, and the pull-quote is the only sentence a skimming reader takes away.

## [minor][confirmed] 'Two tombs that solved two lines' — the headline claims a solution the badge system itself withholds
LOC: research.html:582-589, versus assets/js/data.js:1880-1886 (annWellmeyer)
QUOTE: Twice now, a cemetery has done what no paper index could. ... one woman who fits no role in that family except daughter. That is how Ann Wellmeyer's parents were identified, a year before Judy's notes confirmed it in writing.
PROBLEM: Ann Wellmeyer's parent link is still carried at 'confirm', with data.js:1886 conceding 'the 1947 marriage licence application would make it civil-record verified' — i.e., the line is not solved by the site's own standard. Plot co-burial plus 'fits no role except daughter' is exactly the plot-match-as-relationship inference the assignment's rubric warns about; the body of the site handles it honestly, but the section heading ('solved') and 'the tomb remembers who belonged to whom' promote the inference to proof.


# DIMENSION: ledger-sample

## [major][confirmed] Ledger spot-check summary: 7 of 10 sampled verified rows pass cleanly
LOC: research/claims-ledger.csv (sampled lines 2, 63, 111, 130, 157, 194, 217, 236, 250, 260)
QUOTE: sample = every 8th of the 74 flag-empty A/B/D/E rows: kevin/E (line 2), margueriteReyne/A (63), johnLarmannSr/D (111), robertLemoine/A (130), johnCasparLarmann/B (157), genevieveRousselle/B (194), map bas-de-la-fosse (217), map mcdonogh-16 (236), map st-roch-cem (250), map plattenville (260)
PROBLEM: PASS clean: lines 2, 111, 130, 157, 194 (row itself), 217, 236 — citations match the page verbatim, claims stay within the cited source, all provenance-A images exist in assets/img. MINOR blemish: line 250 (st-roch-cem pin, years field contradicts its own text). FAIL: line 63 (ledger citation no longer matches the page banner — systemic staleness, see separate finding) and line 260 (plattenville pin asserts an uncited false superlative beyond the source). NOTE: the requested 2 research.html sample rows could not be included because the ledger contains ZERO research.html rows (grep confirms 0 matches) — see the coverage finding.

## [critical][confirmed] Claims ledger is stale against the live site: 125 [UNVERIFIED] banners recorded vs 12 on the page, 94 [VERIFIED] upgrades unrecorded
LOC: research/claims-ledger.csv:63 vs assets/js/data.js:1194 (pattern repeats across the file)
QUOTE: ledger citation_on_page: "[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] St. Louis Cathedral, New Orleans — Marriages 1784–1806, entry 2 of May 1784…"
PROBLEM: The live page for the same claim (data.js:1194) reads "[VERIFIED against the original, August 2026 — see the verification log] St. Louis Cathedral…" — same citation body, opposite banner. This is systemic, not a one-off: the ledger contains 125 "[UNVERIFIED" citation banners but data.js now contains only 12; the page carries 94 "[VERIFIED against the original" banners that the ledger never records (192 of 271 ledger rows still carry FLAG). Neighboring rows show the same conflict in the more damaging direction: ledger lines 62, 64, 66 are coded H UNVERIFIED / FLAG ("no source I personally opened") while the page displays those exact claims as "[VERIFIED against the original, August 2026]" (data.js:1188, 1221, 1233 — the verification actually happened, per research/verification-log-srano.md sections 4–6, so the LEDGER is the stale document). A professional who downloads the advertised audit CSV will find it contradicting the site on over a hundred claims.
CORRECTION: Only nit: data.js carries 95 '[VERIFIED against the original' banners, not 94.

## [major][confirmed] index.html footer's audit statistics are false against both the page and the ledger
LOC: index.html:443-444
QUOTE: Of 267 claims, 89 have a source that can be pointed at and 121 are marked [UNVERIFIED] on the page itself
PROBLEM: The live page (assets/js/data.js) now carries only 12 "[UNVERIFIED" marks, not 121 — the August 2026 verification pass upgraded ~94 claims to "[VERIFIED against the original]" but the footer still describes the pre-verification snapshot as current. The ledger it links also now has 271 data rows, not 267 (four rows were appended later). The footer's headline promise, "Every claim on this site, audited and downloadable," is contradicted by its own numbers the moment anyone checks.

## [major][confirmed] Ledger omits research.html entirely despite the site claiming every claim is catalogued
LOC: research/claims-ledger.csv (all rows) vs index.html:439
QUOTE: Every claim on this site, audited and downloadable. In August 2026 each factual assertion here was catalogued with its citation and its provenance
PROBLEM: The ledger's page column contains only index.html and map.html values; grep finds zero research.html rows. research.html is a 1,575-line narrative page dense with factual assertions (dates, record citations, identifications like the Anthony/John C. Larmann split, the Gruswald reading, the Moisant story). An entire published page of claims sits outside the advertised audit, which also made the reviewer's requested research.html sample impossible.

## [major][confirmed] Plattenville pin asserts 'THE OLDEST PARISH IN LOUISIANA' — uncited, false, and contradicted by the site's own records (sampled row 10)
LOC: assets/js/places.js:736-738 (ledger line 260)
QUOTE: THE OLDEST PARISH IN LOUISIANA, AND THE PLACE THIS FAMILY BEGINS IN AMERICA … The parish was founded in 1793 and is the oldest in the state
PROBLEM: The ledger says this pin's source is the Diocese of Baton Rouge records vol. 3 as abstracted by Cormier — which supports the two marriages, not a superlative about parish age. Assumption at Plattenville (1793) is at most the oldest parish in the Diocese of Baton Rouge; the site's own pages document St. Louis church, New Orleans operating from 1718–1750s (margueriteReyne records, data.js:1188-1199) and cite older river parishes (St. James 1767 records at ledger line 47). A genealogy site contradicting itself on which parish is oldest, in a headline, is exactly what a professional reader will catch.

## [major][adjusted] Four ledger rows contradict their own fields: provenance 'A document image in this repo' paired with an [UNVERIFIED] citation banner
LOC: research/claims-ledger.csv:15, 63, 72, 149
QUOTE: "[UNVERIFIED — not re-checked in the August 2026 audit; see the claims ledger] …","A document image in this repo","assets/img/gesmold-1846-baptisms.jpg",""
PROBLEM: A row cannot simultaneously claim its document image sits in the repo (all four images do exist in assets/img) and open its citation with an UNVERIFIED-not-re-checked banner pointing back to this very ledger. Related page-level contradiction at line 149's claim: the live page (data.js:2290) now labels the Gesmold baptism "[SOURCE NOT ONLINE — cited from earlier research; the original document is needed]" while displaying the register image directly beneath it, credited "via Matricula Online" — the banner denies what the image credit affirms.
CORRECTION: The Gesmold citation/image/credit sit at data.js:2302-2305, not data.js:2290 (line 2290 is the occupation field of the same person entry). Everything else is accurate.

## [major][adjusted] Stale note contradicts the corrected dates on Genevieve Rousselle's entry (adjacent to sampled row 6)
LOC: assets/js/data.js:2919 (contradicts data.js:2899-2916; ledger line 194)
QUOTE: Genevieve's birth about 1861 matches her death in 1915 at fifty-four exactly.
PROBLEM: The record block directly above (data.js:2916) explicitly corrects this: "This corrects an earlier guess on this site that she was the Genevieve Rousselle who died in Orleans in 1915; that was a different woman" — and the entry's own vitals say born 26 November 1863, died 21 February 1938 at Lucy. The note is leftover pre-correction text still telling the visitor the discredited 1915 identification 'matches exactly.' The sampled ledger row itself (line 194) matches the page; the contradiction sits in the same entry the visitor reads.
CORRECTION: Location is data.js:2937 (note field), contradicting the correction at data.js:2934 and vitals at 2916-2918 — not data.js:2919 vs 2916 as reported.

## [minor][confirmed] Ledger provenance code mismatch: HathiTrust-read directories coded B (family transcription)
LOC: research/claims-ledger.csv:161
QUOTE: "…Read in the digitised full-view volumes at HathiTrust, August 2026…","B transcription supplied by Kevin or family papers","told to me, or scans Kevin provided"
PROBLEM: The citation itself says the seven Soards' directory volumes were read at HathiTrust this session — that is provenance D (fetched online source), not B. The how_i_know field ('told to me, or scans Kevin provided') is flatly wrong for this row.

## [minor][confirmed] Appended ledger rows 269-272 break the ledger's own schema
LOC: research/claims-ledger.csv:269-272
QUOTE: …,"document image in the repo (assets/img/larmann-1870-marriage-license.jpg)","Read the licence image directly, August 2026. Supplied by Kevin Pedeaux.",VERIFIED
PROBLEM: Every other row uses a single-letter provenance code (A–H, Z) and a flag of either empty or FLAG; these four use free-text provenance descriptions and an undefined flag value VERIFIED, and are unquoted where all other rows are quoted. Anyone (or any script) reading the ledger by its documented scheme will misclassify these rows — they are also the only rows recording the post-audit verifications, which makes the inconsistency more visible.

## [minor][confirmed] St. Roch Cemetery pin's year range contradicts its own burial list (sampled row 9)
LOC: assets/js/places.js:561-565 (ledger line 250)
QUOTE: years: '1921–1954' … his sons Casper M. (d. 1945) and Edward J. (d. 1985), Marie Larmann (d. 1987)
PROBLEM: The pin's displayed year range ends 1954 (Baby Osterhold) while the same pin's text records burials in the plot in 1985 and 1987. Citation and register profile otherwise match the ledger; this is the only blemish on the row.
