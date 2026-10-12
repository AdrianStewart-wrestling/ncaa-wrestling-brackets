// 1951 NCAA Division I Wrestling Championships (At Lehigh). Weight classes 123-UNL (8). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1951 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1951-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 11,
    "winner": "Tony Gizoni",
    "winner_school": "Waynesburg",
    "loser": "Lou Tschirhart",
    "loser_school": "Syracuse",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 13,
    "winner": "John Harrison",
    "winner_school": "Northern Iowa",
    "loser": "Harold Klepfer",
    "loser_school": "Carleton",
    "result": "Fall 3:33"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 15,
    "winner": "Tom Keys",
    "winner_school": "Oklahoma State",
    "loser": "Jack Shire",
    "loser_school": "Toledo",
    "result": "Fall 8:50"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 17,
    "winner": "George Kelly",
    "winner_school": "Wyoming",
    "loser": "Sam Carlo",
    "loser_school": "SUNY-Cortland",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 19,
    "winner": "Joe Kimura",
    "winner_school": "San Francisco State",
    "loser": "Bill Buckingham",
    "loser_school": "Michigan State",
    "result": "Fall 8:19"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 21,
    "winner": "Mike Filipos",
    "winner_school": "Lehigh",
    "loser": "Thomas Woods",
    "loser_school": "CCNY",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 23,
    "winner": "Tony Dragoin",
    "winner_school": "Auburn",
    "loser": "William Cobb",
    "loser_school": "Case-Western Reserve",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 25,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "James Fogarty",
    "loser_school": "Hofstra",
    "result": "Fall 6:29"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 171,
    "winner": "Tony Gizoni",
    "winner_school": "Waynesburg",
    "loser": "Sam Coursen",
    "loser_school": "Springfield",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 172,
    "winner": "John Harrison",
    "winner_school": "Northern Iowa",
    "loser": "John Lee",
    "loser_school": "Harvard",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 173,
    "winner": "Tom Keys",
    "winner_school": "Oklahoma State",
    "loser": "Manuel Macias",
    "loser_school": "Iowa",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 174,
    "winner": "Robert Carlin",
    "winner_school": "Indiana",
    "loser": "George Kelly",
    "loser_school": "Wyoming",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 175,
    "winner": "John Reese",
    "winner_school": "Penn State",
    "loser": "Joe Kimura",
    "loser_school": "San Francisco State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 176,
    "winner": "Mike Filipos",
    "winner_school": "Lehigh",
    "loser": "Hisashi Watanabe",
    "loser_school": "Washington State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 177,
    "winner": "Tony Dragoin",
    "winner_school": "Auburn",
    "loser": "Bob Karns",
    "loser_school": "Army",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 178,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "Jim Shervanick",
    "loser_school": "Millersville",
    "result": "Fall 3:45"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 341,
    "winner": "Tony Gizoni",
    "winner_school": "Waynesburg",
    "loser": "John Harrison",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 342,
    "winner": "Tom Keys",
    "winner_school": "Oklahoma State",
    "loser": "Robert Carlin",
    "loser_school": "Indiana",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 343,
    "winner": "Mike Filipos",
    "winner_school": "Lehigh",
    "loser": "John Reese",
    "loser_school": "Penn State",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 344,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "Tony Dragoin",
    "loser_school": "Auburn",
    "result": "Fall 2:37"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 461,
    "winner": "Tony Gizoni",
    "winner_school": "Waynesburg",
    "loser": "Tom Keys",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 462,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "Mike Filipos",
    "loser_school": "Lehigh",
    "result": "MD 11-2"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 541,
    "winner": "Tom Keys",
    "winner_school": "Oklahoma State",
    "loser": "Tony Dragoin",
    "loser_school": "Auburn",
    "result": "Dec 4-0"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 551,
    "winner": "Tony Gizoni",
    "winner_school": "Waynesburg",
    "loser": "Bill Borders",
    "loser_school": "Oklahoma",
    "result": "Dec 7-6"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 261,
    "winner": "Sam Coursen",
    "winner_school": "Springfield",
    "loser": "Lou Tschirhart",
    "loser_school": "Syracuse",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 262,
    "winner": "James Fogarty",
    "winner_school": "Hofstra",
    "loser": "Jim Shervanick",
    "loser_school": "Millersville",
    "result": "Dec 9-4"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 381,
    "winner": "John Harrison",
    "winner_school": "Northern Iowa",
    "loser": "Sam Coursen",
    "loser_school": "Springfield",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 382,
    "winner": "Tony Dragoin",
    "winner_school": "Auburn",
    "loser": "James Fogarty",
    "loser_school": "Hofstra",
    "result": "Fall 1:05"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 421,
    "winner": "Tom Keys",
    "winner_school": "Oklahoma State",
    "loser": "John Harrison",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 422,
    "winner": "Tony Dragoin",
    "winner_school": "Auburn",
    "loser": "Mike Filipos",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 179,
    "winner": "Hal Moore",
    "winner_school": "Oklahoma State",
    "loser": "David Kikuchi",
    "loser_school": "California-Berkeley",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 180,
    "winner": "Richard Pickard",
    "winner_school": "Illinois",
    "loser": "Dean Harbold",
    "loser_school": "Penn State",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 181,
    "winner": "George Feuerbach",
    "winner_school": "Lehigh",
    "loser": "Gene Craven",
    "loser_school": "Davidson",
    "result": "Fall 8:06"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 182,
    "winner": "Gene Lybbert",
    "winner_school": "Northern Iowa",
    "loser": "John Heacock",
    "loser_school": "Lock Haven",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 183,
    "winner": "George Lewis",
    "winner_school": "Waynesburg",
    "loser": "Bill Donecho",
    "loser_school": "Springfield",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 184,
    "winner": "Phil Duggan",
    "winner_school": "Iowa",
    "loser": "Bob Gerbino",
    "loser_school": "Syracuse",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 185,
    "winner": "Jack Blubaugh",
    "winner_school": "Oklahoma",
    "loser": "Harold Miller",
    "loser_school": "Pittsburgh",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 186,
    "winner": "Walter Romanowski",
    "winner_school": "Cornell Iowa",
    "loser": "George Mills",
    "loser_school": "Hofstra",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 345,
    "winner": "Hal Moore",
    "winner_school": "Oklahoma State",
    "loser": "Richard Pickard",
    "loser_school": "Illinois",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 346,
    "winner": "Gene Lybbert",
    "winner_school": "Northern Iowa",
    "loser": "George Feuerbach",
    "loser_school": "Lehigh",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 347,
    "winner": "George Lewis",
    "winner_school": "Waynesburg",
    "loser": "Phil Duggan",
    "loser_school": "Iowa",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 348,
    "winner": "Walter Romanowski",
    "winner_school": "Cornell Iowa",
    "loser": "Jack Blubaugh",
    "loser_school": "Oklahoma",
    "result": "Dec 8-7"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 463,
    "winner": "Hal Moore",
    "winner_school": "Oklahoma State",
    "loser": "Gene Lybbert",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 464,
    "winner": "Walter Romanowski",
    "winner_school": "Cornell Iowa",
    "loser": "George Lewis",
    "loser_school": "Waynesburg",
    "result": "Dec UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 542,
    "winner": "Gene Lybbert",
    "winner_school": "Northern Iowa",
    "loser": "Jack Blubaugh",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 552,
    "winner": "Walter Romanowski",
    "winner_school": "Cornell Iowa",
    "loser": "Hal Moore",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 383,
    "winner": "Richard Pickard",
    "winner_school": "Illinois",
    "loser": "David Kikuchi",
    "loser_school": "California-Berkeley",
    "result": "Dec 10-3"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 384,
    "winner": "Jack Blubaugh",
    "winner_school": "Oklahoma",
    "loser": "George Mills",
    "loser_school": "Hofstra",
    "result": "Fall 3:30"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 423,
    "winner": "Gene Lybbert",
    "winner_school": "Northern Iowa",
    "loser": "Richard Pickard",
    "loser_school": "Illinois",
    "result": "Dec 7-1"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 424,
    "winner": "Jack Blubaugh",
    "winner_school": "Oklahoma",
    "loser": "George Lewis",
    "loser_school": "Waynesburg",
    "result": "M FOR"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 43,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Rudy Enders",
    "loser_school": "Hofstra",
    "result": "Fall 5:57"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 187,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "John Campbell",
    "loser_school": "St. Ambrose",
    "result": "Fall 6:58"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 188,
    "winner": "Bill Carlisle",
    "winner_school": "Lehigh",
    "loser": "George Irvin",
    "loser_school": "Davidson",
    "result": "Fall 5:23"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 189,
    "winner": "Leo Ballinger",
    "winner_school": "Wyoming",
    "loser": "Bob Bury",
    "loser_school": "Syracuse",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 190,
    "winner": "Don Maurey",
    "winner_school": "Penn State",
    "loser": "Bill Van Gilder",
    "loser_school": "Cornell",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 191,
    "winner": "George Layman",
    "winner_school": "Oklahoma State",
    "loser": "Joe McKim",
    "loser_school": "California-Berkeley",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 192,
    "winner": "Len DeAugustino",
    "winner_school": "Lock Haven",
    "loser": "Clyde Bean",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 193,
    "winner": "Bob Hartman",
    "winner_school": "Columbia",
    "loser": "Joe DiBello",
    "loser_school": "Michigan State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 194,
    "winner": "Charles Farina",
    "winner_school": "Purdue",
    "loser": "Mays",
    "loser_school": "Millersville",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 349,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Bill Carlisle",
    "loser_school": "Lehigh",
    "result": "Fall 4:37"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 350,
    "winner": "Don Maurey",
    "winner_school": "Penn State",
    "loser": "Leo Ballinger",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 351,
    "winner": "George Layman",
    "winner_school": "Oklahoma State",
    "loser": "Len DeAugustino",
    "loser_school": "Lock Haven",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 352,
    "winner": "Bob Hartman",
    "winner_school": "Columbia",
    "loser": "Charles Farina",
    "loser_school": "Purdue",
    "result": "Dec 9-4"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 465,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Don Maurey",
    "loser_school": "Penn State",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 466,
    "winner": "George Layman",
    "winner_school": "Oklahoma State",
    "loser": "Bob Hartman",
    "loser_school": "Columbia",
    "result": "Fall 8:58"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 543,
    "winner": "Don Maurey",
    "winner_school": "Penn State",
    "loser": "Bob Hartman",
    "loser_school": "Columbia",
    "result": "Dec 5-0"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 553,
    "winner": "George Layman",
    "winner_school": "Oklahoma State",
    "loser": "Tommy Evans",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 265,
    "winner": "John Campbell",
    "winner_school": "St. Ambrose",
    "loser": "Rudy Enders",
    "loser_school": "Hofstra",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 385,
    "winner": "John Campbell",
    "winner_school": "St. Ambrose",
    "loser": "Bill Carlisle",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 386,
    "winner": "Len DeAugustino",
    "winner_school": "Lock Haven",
    "loser": "Joe McKim",
    "loser_school": "California-Berkeley",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 425,
    "winner": "Don Maurey",
    "winner_school": "Penn State",
    "loser": "John Campbell",
    "loser_school": "St. Ambrose",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 426,
    "winner": "Bob Hartman",
    "winner_school": "Columbia",
    "loser": "Len DeAugustino",
    "loser_school": "Lock Haven",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 59,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Gene Manfrini",
    "loser_school": "Columbia",
    "result": "Fall 5:38"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 195,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Robin Baker",
    "loser_school": "Auburn",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 196,
    "winner": "John Mahoney",
    "winner_school": "Lehigh",
    "loser": "Richard Colston",
    "loser_school": "St. Ambrose",
    "result": "Fall 4:36"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 197,
    "winner": "Bryce Keough",
    "winner_school": "Ohio State",
    "loser": "Earl Courtright",
    "loser_school": "Toledo",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 198,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Thomas Dierauf",
    "loser_school": "Rutgers",
    "result": "Fall 5:35"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 199,
    "winner": "Frank Bettucci",
    "winner_school": "Cornell",
    "loser": "Sam Keiter",
    "loser_school": "Carleton",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 200,
    "winner": "Ed Closs",
    "winner_school": "Washington State",
    "loser": "Ray Johnson",
    "loser_school": "Cornell Iowa",
    "result": "Fall 5:23"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 201,
    "winner": "Don Frey",
    "winner_school": "Penn State",
    "loser": "Ray Pigozzi",
    "loser_school": "Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 202,
    "winner": "George Jackson",
    "winner_school": "Oklahoma",
    "loser": "Art Strunck",
    "loser_school": "Hofstra",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 353,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "John Mahoney",
    "loser_school": "Lehigh",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 354,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Bryce Keough",
    "loser_school": "Ohio State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 355,
    "winner": "Frank Bettucci",
    "winner_school": "Cornell",
    "loser": "Ed Closs",
    "loser_school": "Washington State",
    "result": "Dec 11-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 356,
    "winner": "Don Frey",
    "winner_school": "Penn State",
    "loser": "George Jackson",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 467,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Byron Todd",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 468,
    "winner": "Don Frey",
    "winner_school": "Penn State",
    "loser": "Frank Bettucci",
    "loser_school": "Cornell",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 544,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "George Jackson",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 554,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Don Frey",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 267,
    "winner": "Gene Manfrini",
    "winner_school": "Columbia",
    "loser": "Robin Baker",
    "loser_school": "Auburn",
    "result": "MD 8-0"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 387,
    "winner": "Gene Manfrini",
    "winner_school": "Columbia",
    "loser": "John Mahoney",
    "loser_school": "Lehigh",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 388,
    "winner": "George Jackson",
    "winner_school": "Oklahoma",
    "loser": "Ray Pigozzi",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 427,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Gene Manfrini",
    "loser_school": "Columbia",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 428,
    "winner": "George Jackson",
    "winner_school": "Oklahoma",
    "loser": "Frank Bettucci",
    "loser_school": "Cornell",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Phil Smith",
    "winner_school": "Oklahoma",
    "loser": "Joe Arnold",
    "loser_school": "Cornell",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Emil Perona",
    "winner_school": "Rutgers",
    "loser": "Phill Abromovich",
    "loser_school": "Illinois",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 203,
    "winner": "Phil Smith",
    "winner_school": "Oklahoma",
    "loser": "Don Ryan",
    "loser_school": "Wisconsin",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 204,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Joel Adelburg",
    "loser_school": "Maryland",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 205,
    "winner": "Don Govoni",
    "winner_school": "Northern Colorado",
    "loser": "George Bender",
    "loser_school": "Michigan State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 206,
    "winner": "Don Swygert",
    "winner_school": "Army",
    "loser": "Bob Long",
    "loser_school": "Auburn",
    "result": "Fall 8:58"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 207,
    "winner": "Fred McLean",
    "winner_school": "Ohio State",
    "loser": "Gene Paquette",
    "loser_school": "Lehigh",
    "result": "Fall 5:46"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 208,
    "winner": "Bob Mason",
    "winner_school": "Wyoming",
    "loser": "Bill Turley",
    "loser_school": "Hofstra",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 209,
    "winner": "Mike Fucci",
    "winner_school": "Oklahoma State",
    "loser": "Ray Foy",
    "loser_school": "Cornell Iowa",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 210,
    "winner": "Emil Perona",
    "winner_school": "Rutgers",
    "loser": "Bill Santel",
    "loser_school": "Penn State",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 357,
    "winner": "Phil Smith",
    "winner_school": "Oklahoma",
    "loser": "Bill Weick",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 358,
    "winner": "Don Govoni",
    "winner_school": "Northern Colorado",
    "loser": "Don Swygert",
    "loser_school": "Army",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 359,
    "winner": "Fred McLean",
    "winner_school": "Ohio State",
    "loser": "Bob Mason",
    "loser_school": "Wyoming",
    "result": "MD 9-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 360,
    "winner": "Mike Fucci",
    "winner_school": "Oklahoma State",
    "loser": "Emil Perona",
    "loser_school": "Rutgers",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 469,
    "winner": "Phil Smith",
    "winner_school": "Oklahoma",
    "loser": "Don Govoni",
    "loser_school": "Northern Colorado",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 470,
    "winner": "Fred McLean",
    "winner_school": "Ohio State",
    "loser": "Mike Fucci",
    "loser_school": "Oklahoma State",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 545,
    "winner": "Don Govoni",
    "winner_school": "Northern Colorado",
    "loser": "Bob Mason",
    "loser_school": "Wyoming",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 555,
    "winner": "Phil Smith",
    "winner_school": "Oklahoma",
    "loser": "Fred McLean",
    "loser_school": "Ohio State",
    "result": "MD 10-2"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 269,
    "winner": "Don Ryan",
    "winner_school": "Wisconsin",
    "loser": "Joe Arnold",
    "loser_school": "Cornell",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 389,
    "winner": "Don Ryan",
    "winner_school": "Wisconsin",
    "loser": "Bill Weick",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:00"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 390,
    "winner": "Bob Mason",
    "winner_school": "Wyoming",
    "loser": "Gene Paquette",
    "loser_school": "Lehigh",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 429,
    "winner": "Don Govoni",
    "winner_school": "Northern Colorado",
    "loser": "Don Ryan",
    "loser_school": "Wisconsin",
    "result": "Fall 5:07"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 430,
    "winner": "Bob Mason",
    "winner_school": "Wyoming",
    "loser": "Mike Fucci",
    "loser_school": "Oklahoma State",
    "result": "M FOR"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 211,
    "winner": "Gene Gibbons",
    "winner_school": "Michigan State",
    "loser": "Ken Prihoda",
    "loser_school": "Minnesota State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 212,
    "winner": "Jack Platt",
    "winner_school": "Lehigh",
    "loser": "Ken Morton",
    "loser_school": "Hofstra",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 213,
    "winner": "Ray Vohden",
    "winner_school": "Rutgers",
    "loser": "Bill Nardini",
    "loser_school": "Cornell Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 214,
    "winner": "Tom Titsworth",
    "winner_school": "Oklahoma State",
    "loser": "Lou Scalzo",
    "loser_school": "Army",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 215,
    "winner": "Don Thomas",
    "winner_school": "Navy",
    "loser": "Joe Butler",
    "loser_school": "Oklahoma",
    "result": "Fall 4:10"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 216,
    "winner": "Joe Lemyre",
    "winner_school": "Penn State",
    "loser": "Bill Fritzche",
    "loser_school": "Kent State",
    "result": "Fall 6:55"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 217,
    "winner": "Clyde Dilley",
    "winner_school": "Northern Iowa",
    "loser": "James Mancuso",
    "loser_school": "Carleton",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 218,
    "winner": "George Graveson",
    "winner_school": "Yale",
    "loser": "Floyd Gadt",
    "loser_school": "Toledo",
    "result": "MD 9-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 361,
    "winner": "Gene Gibbons",
    "winner_school": "Michigan State",
    "loser": "Jack Platt",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 362,
    "winner": "Ray Vohden",
    "winner_school": "Rutgers",
    "loser": "Tom Titsworth",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 363,
    "winner": "Don Thomas",
    "winner_school": "Navy",
    "loser": "Joe Lemyre",
    "loser_school": "Penn State",
    "result": "Dec 11-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 364,
    "winner": "George Graveson",
    "winner_school": "Yale",
    "loser": "Clyde Dilley",
    "loser_school": "Northern Iowa",
    "result": "MD 9-1"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 471,
    "winner": "Gene Gibbons",
    "winner_school": "Michigan State",
    "loser": "Ray Vohden",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 472,
    "winner": "George Graveson",
    "winner_school": "Yale",
    "loser": "Don Thomas",
    "loser_school": "Navy",
    "result": "Dec 6-1"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 546,
    "winner": "Don Thomas",
    "winner_school": "Navy",
    "loser": "Ken Prihoda",
    "loser_school": "Minnesota State",
    "result": "Dec 8-5"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 556,
    "winner": "Gene Gibbons",
    "winner_school": "Michigan State",
    "loser": "George Graveson",
    "loser_school": "Yale",
    "result": "Fall 7:10"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 391,
    "winner": "Ken Prihoda",
    "winner_school": "Minnesota State",
    "loser": "Jack Platt",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 392,
    "winner": "Clyde Dilley",
    "winner_school": "Northern Iowa",
    "loser": "Floyd Gadt",
    "loser_school": "Toledo",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 431,
    "winner": "Ken Prihoda",
    "winner_school": "Minnesota State",
    "loser": "Ray Vohden",
    "loser_school": "Rutgers",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 432,
    "winner": "Don Thomas",
    "winner_school": "Navy",
    "loser": "Clyde Dilley",
    "loser_school": "Northern Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 220,
    "winner": "Maynard Skinner",
    "winner_school": "Colorado",
    "loser": "Phil Donatelli",
    "loser_school": "Lehigh",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 221,
    "winner": "Ray Carlson",
    "winner_school": "Waynesburg",
    "loser": "Jerome Steinberg",
    "loser_school": "CCNY",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 222,
    "winner": "Grover Rains",
    "winner_school": "Oklahoma State",
    "loser": "Dick Torio",
    "loser_school": "Toledo",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 223,
    "winner": "Bob Mulvaney",
    "winner_school": "Hofstra",
    "loser": "Don Dickason",
    "loser_school": "Cornell",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 224,
    "winner": "Bentley Lyon",
    "winner_school": "California-Berkeley",
    "loser": "Martin Schwartz",
    "loser_school": "Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 225,
    "winner": "Mike Rubino",
    "winner_school": "Penn State",
    "loser": "Ralph Sampson",
    "loser_school": "Cornell Iowa",
    "result": "MD 9-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 365,
    "winner": "Maynard Skinner",
    "winner_school": "Colorado",
    "loser": "Jack Fisk",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 366,
    "winner": "Grover Rains",
    "winner_school": "Oklahoma State",
    "loser": "Ray Carlson",
    "loser_school": "Waynesburg",
    "result": "MD 10-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 367,
    "winner": "Bentley Lyon",
    "winner_school": "California-Berkeley",
    "loser": "Bob Mulvaney",
    "loser_school": "Hofstra",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 368,
    "winner": "Mike Rubino",
    "winner_school": "Penn State",
    "loser": "Peter Bender",
    "loser_school": "Rutgers",
    "result": "MD 11-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 473,
    "winner": "Grover Rains",
    "winner_school": "Oklahoma State",
    "loser": "Maynard Skinner",
    "loser_school": "Colorado",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 474,
    "winner": "Mike Rubino",
    "winner_school": "Penn State",
    "loser": "Bentley Lyon",
    "loser_school": "California-Berkeley",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 547,
    "winner": "Dick Torio",
    "winner_school": "Toledo",
    "loser": "Bentley Lyon",
    "loser_school": "California-Berkeley",
    "result": "M FOR"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 557,
    "winner": "Grover Rains",
    "winner_school": "Oklahoma State",
    "loser": "Mike Rubino",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 393,
    "winner": "Dick Torio",
    "winner_school": "Toledo",
    "loser": "Ray Carlson",
    "loser_school": "Waynesburg",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 394,
    "winner": "Peter Bender",
    "winner_school": "Rutgers",
    "loser": "Ralph Sampson",
    "loser_school": "Cornell Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 433,
    "winner": "Dick Torio",
    "winner_school": "Toledo",
    "loser": "Maynard Skinner",
    "loser_school": "Colorado",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 434,
    "winner": "Bentley Lyon",
    "winner_school": "California-Berkeley",
    "loser": "Peter Bender",
    "loser_school": "Rutgers",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 227,
    "winner": "Brad Glass",
    "winner_school": "Princeton",
    "loser": "Harry Lanzi",
    "loser_school": "Toledo",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 228,
    "winner": "Jim Murray",
    "winner_school": "Hofstra",
    "loser": "Dick Sloan",
    "loser_school": "Carleton",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 229,
    "winner": "Bill Priest",
    "winner_school": "Northern Colorado",
    "loser": "Art Merriman",
    "loser_school": "Yale",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 230,
    "winner": "Wilbanks Smith",
    "winner_school": "Oklahoma State",
    "loser": "Lee Wachenheim",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 232,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "George Myers",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 233,
    "winner": "Bill Kerslake",
    "winner_school": "Case-Western Reserve",
    "loser": "John Lezdey",
    "loser_school": "Rutgers",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 234,
    "winner": "Bill Miller",
    "winner_school": "Ohio State",
    "loser": "Don Berndt",
    "loser_school": "Lehigh",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 369,
    "winner": "Brad Glass",
    "winner_school": "Princeton",
    "loser": "Jim Murray",
    "loser_school": "Hofstra",
    "result": "Fall 2:37"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 370,
    "winner": "Bill Priest",
    "winner_school": "Northern Colorado",
    "loser": "Wilbanks Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 371,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "Bill Helfferich",
    "loser_school": "Ursinus",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 372,
    "winner": "Bill Miller",
    "winner_school": "Ohio State",
    "loser": "Bill Kerslake",
    "loser_school": "Case-Western Reserve",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 475,
    "winner": "Brad Glass",
    "winner_school": "Princeton",
    "loser": "Bill Priest",
    "loser_school": "Northern Colorado",
    "result": "Fall 3:57"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 476,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "Bill Miller",
    "loser_school": "Ohio State",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 548,
    "winner": "Harry Lanzi",
    "winner_school": "Toledo",
    "loser": "Bill Miller",
    "loser_school": "Ohio State",
    "result": "Dec 8-5"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 558,
    "winner": "Brad Glass",
    "winner_school": "Princeton",
    "loser": "Homer Barr",
    "loser_school": "Penn State",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 395,
    "winner": "Harry Lanzi",
    "winner_school": "Toledo",
    "loser": "Jim Murray",
    "loser_school": "Hofstra",
    "result": "Fall 1:35"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 396,
    "winner": "Bill Helfferich",
    "winner_school": "Ursinus",
    "loser": "George Myers",
    "loser_school": "Iowa",
    "result": "Fall 3:55"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 435,
    "winner": "Harry Lanzi",
    "winner_school": "Toledo",
    "loser": "Bill Priest",
    "loser_school": "Northern Colorado",
    "result": "Fall 3:20"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 436,
    "winner": "Bill Miller",
    "winner_school": "Ohio State",
    "loser": "Bill Helfferich",
    "loser_school": "Ursinus",
    "result": "Dec 5-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
