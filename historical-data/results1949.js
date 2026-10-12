// 1949 NCAA Division I Wrestling Championships (At Colorado State). Weight classes 121-UNL (8). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1949 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1949-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 171,
    "winner": "Arnold Plaza",
    "winner_school": "Purdue",
    "loser": "Ben Knaub",
    "loser_school": "Northern Colorado",
    "result": "Dec 13-11"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 172,
    "winner": "Richard Pickard",
    "winner_school": "Illinois",
    "loser": "James Fogarty",
    "loser_school": "Syracuse",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 173,
    "winner": "Dick Hauser",
    "winner_school": "Cornell Iowa",
    "loser": "Harlan Swanson",
    "loser_school": "Colorado State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 175,
    "winner": "Grady Peninger",
    "winner_school": "Oklahoma State",
    "loser": "Bob Yambor",
    "loser_school": "Nebraska",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 177,
    "winner": "Garth Lappin",
    "winner_school": "Minnesota",
    "loser": "Robert Flynn",
    "loser_school": "San Diego State",
    "result": "MD 14-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 341,
    "winner": "Arnold Plaza",
    "winner_school": "Purdue",
    "loser": "Richard Pickard",
    "loser_school": "Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 342,
    "winner": "Dick Hauser",
    "winner_school": "Cornell Iowa",
    "loser": "Hisashi Watanabe",
    "loser_school": "Washington State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 343,
    "winner": "Grady Peninger",
    "winner_school": "Oklahoma State",
    "loser": "Sam Hirawasa",
    "loser_school": "Wyoming",
    "result": "Fall 6:22"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 344,
    "winner": "Garth Lappin",
    "winner_school": "Minnesota",
    "loser": "John Harrison",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "121",
    "bout": 461,
    "winner": "Arnold Plaza",
    "winner_school": "Purdue",
    "loser": "Dick Hauser",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "121",
    "bout": 462,
    "winner": "Grady Peninger",
    "winner_school": "Oklahoma State",
    "loser": "Garth Lappin",
    "loser_school": "Minnesota",
    "result": "Fall 6:07"
  },
  {
    "round": "3rdPlace",
    "weight": "121",
    "bout": 541,
    "winner": "Dick Hauser",
    "winner_school": "Cornell Iowa",
    "loser": "Garth Lappin",
    "loser_school": "Minnesota",
    "result": "Fall 6:40"
  },
  {
    "round": "Finals",
    "weight": "121",
    "bout": 551,
    "winner": "Arnold Plaza",
    "winner_school": "Purdue",
    "loser": "Grady Peninger",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "121",
    "bout": 381,
    "winner": "Ben Knaub",
    "winner_school": "Northern Colorado",
    "loser": "Richard Pickard",
    "loser_school": "Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsB",
    "weight": "121",
    "bout": 382,
    "winner": "Bob Yambor",
    "winner_school": "Nebraska",
    "loser": "Sam Hirawasa",
    "loser_school": "Wyoming",
    "result": "Fall 2:28"
  },
  {
    "round": "RepConsC",
    "weight": "121",
    "bout": 421,
    "winner": "Dick Hauser",
    "winner_school": "Cornell Iowa",
    "loser": "Ben Knaub",
    "loser_school": "Northern Colorado",
    "result": "MD 11-1"
  },
  {
    "round": "RepConsC",
    "weight": "121",
    "bout": 422,
    "winner": "Garth Lappin",
    "winner_school": "Minnesota",
    "loser": "Bob Yambor",
    "loser_school": "Nebraska",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 179,
    "winner": "Leo Thomsen",
    "winner_school": "Cornell Iowa",
    "loser": "Mickey Sparano",
    "loser_school": "Nebraska",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 180,
    "winner": "Joe Patacsil",
    "winner_school": "Purdue",
    "loser": "Ivan Gilbaugh",
    "loser_school": "Northern Colorado",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 181,
    "winner": "Alan Rice",
    "winner_school": "Minnesota",
    "loser": "George Kelly",
    "loser_school": "Wyoming",
    "result": "Fall 0:38"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 183,
    "winner": "Charles Hetrick",
    "winner_school": "Oklahoma State",
    "loser": "L.S. Perry",
    "loser_school": "VMI",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 185,
    "winner": "Russ Bush",
    "winner_school": "Northern Iowa",
    "loser": "Robert Brabender",
    "loser_school": "Indiana",
    "result": "Fall 4:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 345,
    "winner": "Leo Thomsen",
    "winner_school": "Cornell Iowa",
    "loser": "Joe Patacsil",
    "loser_school": "Purdue",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 346,
    "winner": "Alan Rice",
    "winner_school": "Minnesota",
    "loser": "Dale Nelson",
    "loser_school": "Illinois",
    "result": "Fall 1:37"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 347,
    "winner": "Charles Hetrick",
    "winner_school": "Oklahoma State",
    "loser": "James Karbatsch",
    "loser_school": "Colorado",
    "result": "Fall 5:40"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 348,
    "winner": "Russ Bush",
    "winner_school": "Northern Iowa",
    "loser": "Willard Walker",
    "loser_school": "Colorado State",
    "result": "Fall 5:36"
  },
  {
    "round": "SemiFinals",
    "weight": "128",
    "bout": 463,
    "winner": "Leo Thomsen",
    "winner_school": "Cornell Iowa",
    "loser": "Alan Rice",
    "loser_school": "Minnesota",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "128",
    "bout": 464,
    "winner": "Charles Hetrick",
    "winner_school": "Oklahoma State",
    "loser": "Russ Bush",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "128",
    "bout": 542,
    "winner": "Russ Bush",
    "winner_school": "Northern Iowa",
    "loser": "Alan Rice",
    "loser_school": "Minnesota",
    "result": "Dec 9-4"
  },
  {
    "round": "Finals",
    "weight": "128",
    "bout": 552,
    "winner": "Charles Hetrick",
    "winner_school": "Oklahoma State",
    "loser": "Leo Thomsen",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsB",
    "weight": "128",
    "bout": 383,
    "winner": "Joe Patacsil",
    "winner_school": "Purdue",
    "loser": "Mickey Sparano",
    "loser_school": "Nebraska",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsB",
    "weight": "128",
    "bout": 384,
    "winner": "L.S. Perry",
    "winner_school": "VMI",
    "loser": "James Karbatsch",
    "loser_school": "Colorado",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "128",
    "bout": 423,
    "winner": "Alan Rice",
    "winner_school": "Minnesota",
    "loser": "Joe Patacsil",
    "loser_school": "Purdue",
    "result": "Dec 6-6 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "128",
    "bout": 424,
    "winner": "Russ Bush",
    "winner_school": "Northern Iowa",
    "loser": "L.S. Perry",
    "loser_school": "VMI",
    "result": "Fall 2:57"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 187,
    "winner": "Lowell Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Archie Vernon",
    "loser_school": "Kansas State",
    "result": "Fall 5:24"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 189,
    "winner": "Don Meeker",
    "winner_school": "Oklahoma State",
    "loser": "Clark Allen",
    "loser_school": "Wyoming",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 191,
    "winner": "Dick Dickenson",
    "winner_school": "Michigan State",
    "loser": "Ben Coleman",
    "loser_school": "Denver",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 193,
    "winner": "Simon Prizant",
    "winner_school": "Indiana",
    "loser": "Eugene Daise",
    "loser_school": "Colorado State",
    "result": "Fall 4:01"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 349,
    "winner": "Lowell Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Joe Arnold",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 350,
    "winner": "Don Meeker",
    "winner_school": "Oklahoma State",
    "loser": "Harold Hanson",
    "loser_school": "San Diego State",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 351,
    "winner": "Dick Dickenson",
    "winner_school": "Michigan State",
    "loser": "Luverne Klar",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 352,
    "winner": "Simon Prizant",
    "winner_school": "Indiana",
    "loser": "Robert Strange",
    "loser_school": "Illinois",
    "result": "Dec 9-6"
  },
  {
    "round": "SemiFinals",
    "weight": "136",
    "bout": 465,
    "winner": "Lowell Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Don Meeker",
    "loser_school": "Oklahoma State",
    "result": "Fall 7:20"
  },
  {
    "round": "SemiFinals",
    "weight": "136",
    "bout": 466,
    "winner": "Dick Dickenson",
    "winner_school": "Michigan State",
    "loser": "Simon Prizant",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "136",
    "bout": 543,
    "winner": "Luverne Klar",
    "winner_school": "Northern Iowa",
    "loser": "Don Meeker",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "Finals",
    "weight": "136",
    "bout": 553,
    "winner": "Lowell Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Dick Dickenson",
    "loser_school": "Michigan State",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "136",
    "bout": 385,
    "winner": "Archie Vernon",
    "winner_school": "Kansas State",
    "loser": "Joe Arnold",
    "loser_school": "Northern Colorado",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsB",
    "weight": "136",
    "bout": 386,
    "winner": "Luverne Klar",
    "winner_school": "Northern Iowa",
    "loser": "Ben Coleman",
    "loser_school": "Denver",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "136",
    "bout": 425,
    "winner": "Don Meeker",
    "winner_school": "Oklahoma State",
    "loser": "Archie Vernon",
    "loser_school": "Kansas State",
    "result": "Dec 7-1"
  },
  {
    "round": "RepConsC",
    "weight": "136",
    "bout": 426,
    "winner": "Luverne Klar",
    "winner_school": "Northern Iowa",
    "loser": "Simon Prizant",
    "loser_school": "Indiana",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 195,
    "winner": "Don Anderson",
    "winner_school": "Michigan State",
    "loser": "Andy Puchany",
    "loser_school": "Indiana",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 196,
    "winner": "Dick Ditsworth",
    "winner_school": "Iowa State",
    "loser": "Darrell Hafling",
    "loser_school": "Colorado",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 197,
    "winner": "Elias George",
    "winner_school": "Oklahoma State",
    "loser": "Sal DeBiasi",
    "loser_school": "San Diego State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 198,
    "winner": "Joe Garcia",
    "winner_school": "Illinois",
    "loser": "Ken Schmoker",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 199,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Jay McGrew",
    "loser_school": "Colorado State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 200,
    "winner": "Kent Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Wendell Harris",
    "loser_school": "Wheaton",
    "result": "Fall 4:25"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 201,
    "winner": "Bart Downes",
    "winner_school": "Navy",
    "loser": "Ed Closs",
    "loser_school": "Washington State",
    "result": "Fall 8:22"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 202,
    "winner": "Mervin Jensen",
    "winner_school": "Minnesota",
    "loser": "Larry Higby",
    "loser_school": "Wyoming",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 353,
    "winner": "Don Anderson",
    "winner_school": "Michigan State",
    "loser": "Dick Ditsworth",
    "loser_school": "Iowa State",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 354,
    "winner": "Elias George",
    "winner_school": "Oklahoma State",
    "loser": "Joe Garcia",
    "loser_school": "Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 355,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Kent Lange",
    "loser_school": "Cornell Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 356,
    "winner": "Bart Downes",
    "winner_school": "Navy",
    "loser": "Mervin Jensen",
    "loser_school": "Minnesota",
    "result": "Fall 4:09"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 467,
    "winner": "Don Anderson",
    "winner_school": "Michigan State",
    "loser": "Elias George",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 468,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Bart Downes",
    "loser_school": "Navy",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "145",
    "bout": 544,
    "winner": "Kent Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Elias George",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "145",
    "bout": 554,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Don Anderson",
    "loser_school": "Michigan State",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 387,
    "winner": "Dick Ditsworth",
    "winner_school": "Iowa State",
    "loser": "Andy Puchany",
    "loser_school": "Indiana",
    "result": "Dec 1-0"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 388,
    "winner": "Kent Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Jay McGrew",
    "loser_school": "Colorado State",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 427,
    "winner": "Elias George",
    "winner_school": "Oklahoma State",
    "loser": "Dick Ditsworth",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 428,
    "winner": "Kent Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Bart Downes",
    "loser_school": "Navy",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "155",
    "bout": 75,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "William Cowling",
    "loser_school": "San Diego State",
    "result": "Fall 5:47"
  },
  {
    "round": "ChampR1",
    "weight": "155",
    "bout": 89,
    "winner": "Leon Tedder",
    "winner_school": "Oklahoma State",
    "loser": "Jack Labonde",
    "loser_school": "Northern Colorado",
    "result": "Fall 7:40"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 203,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "Dale Federer",
    "loser_school": "Wyoming",
    "result": "Fall 4:28"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 204,
    "winner": "Peter Wilson",
    "winner_school": "Wheaton",
    "loser": "Al Mott",
    "loser_school": "Colorado",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 205,
    "winner": "Don Mullison",
    "winner_school": "Colorado State",
    "loser": "Bob Dwyer",
    "loser_school": "Illinois",
    "result": "Fall 4:00"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 206,
    "winner": "James LaRock",
    "winner_school": "Ithaca",
    "loser": "Jim Dowe",
    "loser_school": "Cal Poly",
    "result": "Fall 2:13"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 207,
    "winner": "Ken Hunte",
    "winner_school": "Syracuse",
    "loser": "Hugh Evans",
    "loser_school": "Colorado Mines",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 208,
    "winner": "Pat Sullivan",
    "winner_school": "Michigan State",
    "loser": "Charles Mancuso",
    "loser_school": "Nebraska-Omaha",
    "result": "Fall 4:01"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 209,
    "winner": "Rodger Snook",
    "winner_school": "Cornell Iowa",
    "loser": "Glenn McCarty",
    "loser_school": "Utah State",
    "result": "Fall 4:42"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 210,
    "winner": "Phil Smith",
    "winner_school": "Auburn",
    "loser": "Leon Tedder",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 357,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "Peter Wilson",
    "loser_school": "Wheaton",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 358,
    "winner": "Don Mullison",
    "winner_school": "Colorado State",
    "loser": "James LaRock",
    "loser_school": "Ithaca",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 359,
    "winner": "Ken Hunte",
    "winner_school": "Syracuse",
    "loser": "Pat Sullivan",
    "loser_school": "Michigan State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 360,
    "winner": "Rodger Snook",
    "winner_school": "Cornell Iowa",
    "loser": "Phil Smith",
    "loser_school": "Auburn",
    "result": "Fall 8:18"
  },
  {
    "round": "SemiFinals",
    "weight": "155",
    "bout": 469,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "Don Mullison",
    "loser_school": "Colorado State",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "155",
    "bout": 470,
    "winner": "Ken Hunte",
    "winner_school": "Syracuse",
    "loser": "Rodger Snook",
    "loser_school": "Cornell Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "3rdPlace",
    "weight": "155",
    "bout": 545,
    "winner": "Don Mullison",
    "winner_school": "Colorado State",
    "loser": "Rodger Snook",
    "loser_school": "Cornell Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "155",
    "bout": 555,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "Ken Hunte",
    "loser_school": "Syracuse",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "155",
    "bout": 389,
    "winner": "Peter Wilson",
    "winner_school": "Wheaton",
    "loser": "Dale Federer",
    "loser_school": "Wyoming",
    "result": "Fall"
  },
  {
    "round": "RepConsB",
    "weight": "155",
    "bout": 390,
    "winner": "Pat Sullivan",
    "winner_school": "Michigan State",
    "loser": "Hugh Evans",
    "loser_school": "Colorado Mines",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsC",
    "weight": "155",
    "bout": 429,
    "winner": "Don Mullison",
    "winner_school": "Colorado State",
    "loser": "Peter Wilson",
    "loser_school": "Wheaton",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "155",
    "bout": 430,
    "winner": "Rodger Snook",
    "winner_school": "Cornell Iowa",
    "loser": "Pat Sullivan",
    "loser_school": "Michigan State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 211,
    "winner": "Bill Smith",
    "winner_school": "Northern Iowa",
    "loser": "Richard Arnold",
    "loser_school": "Colorado Mines",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 213,
    "winner": "Charles Lyons",
    "winner_school": "Kansas State",
    "loser": "Carl Cox",
    "loser_school": "Colorado State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 214,
    "winner": "Al Partin",
    "winner_school": "Cornell Iowa",
    "loser": "Pascal Perri",
    "loser_school": "Syracuse",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 215,
    "winner": "Melbourne Flesner",
    "winner_school": "Oklahoma State",
    "loser": "William Arnold",
    "loser_school": "Colorado",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 217,
    "winner": "Gilbert Gaumer",
    "winner_school": "Illinois",
    "loser": "Rigo Rodriquez",
    "loser_school": "San Diego State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 218,
    "winner": "Don Thomas",
    "winner_school": "Iowa State",
    "loser": "Harry McCarty",
    "loser_school": "Utah State",
    "result": "Fall 1:30"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 361,
    "winner": "Bill Smith",
    "winner_school": "Northern Iowa",
    "loser": "Mel Spence",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 362,
    "winner": "Charles Lyons",
    "winner_school": "Kansas State",
    "loser": "Al Partin",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 363,
    "winner": "Melbourne Flesner",
    "winner_school": "Oklahoma State",
    "loser": "Bob Mason",
    "loser_school": "Wyoming",
    "result": "MD 15-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 364,
    "winner": "Gilbert Gaumer",
    "winner_school": "Illinois",
    "loser": "Don Thomas",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 471,
    "winner": "Bill Smith",
    "winner_school": "Northern Iowa",
    "loser": "Charles Lyons",
    "loser_school": "Kansas State",
    "result": "MD 10-1"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 472,
    "winner": "Melbourne Flesner",
    "winner_school": "Oklahoma State",
    "loser": "Gilbert Gaumer",
    "loser_school": "Illinois",
    "result": "Dec 6-0"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 546,
    "winner": "Gilbert Gaumer",
    "winner_school": "Illinois",
    "loser": "Charles Lyons",
    "loser_school": "Kansas State",
    "result": "DEF"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 556,
    "winner": "Bill Smith",
    "winner_school": "Northern Iowa",
    "loser": "Melbourne Flesner",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsB",
    "weight": "165",
    "bout": 391,
    "winner": "Mel Spence",
    "winner_school": "Northern Colorado",
    "loser": "Richard Arnold",
    "loser_school": "Colorado Mines",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "165",
    "bout": 392,
    "winner": "William Arnold",
    "winner_school": "Colorado",
    "loser": "Bob Mason",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsC",
    "weight": "165",
    "bout": 431,
    "winner": "Charles Lyons",
    "winner_school": "Kansas State",
    "loser": "Mel Spence",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsC",
    "weight": "165",
    "bout": 432,
    "winner": "Gilbert Gaumer",
    "winner_school": "Illinois",
    "loser": "William Arnold",
    "loser_school": "Colorado",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "175",
    "bout": 107,
    "winner": "Joe Scarpello",
    "winner_school": "Iowa",
    "loser": "Joe Manchak",
    "loser_school": "Wyoming",
    "result": "Fall 6:49"
  },
  {
    "round": "ChampR1",
    "weight": "175",
    "bout": 115,
    "winner": "Jim Gregson",
    "winner_school": "Oklahoma State",
    "loser": "Fred Dexter",
    "loser_school": "Cornell Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 219,
    "winner": "Joe Scarpello",
    "winner_school": "Iowa",
    "loser": "Herman Shilleriff",
    "loser_school": "Northern Colorado",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 220,
    "winner": "Bob Siddens",
    "winner_school": "Northern Iowa",
    "loser": "Marion Tree",
    "loser_school": "Brigham Young",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 221,
    "winner": "Waldemar VanCott",
    "winner_school": "Purdue",
    "loser": "Glenn Anderson",
    "loser_school": "Colorado State",
    "result": "Fall 1:23"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 222,
    "winner": "Robert Klune",
    "winner_school": "Denver",
    "loser": "Gene Gibbons",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 223,
    "winner": "Jim Gregson",
    "winner_school": "Oklahoma State",
    "loser": "William Vohaska",
    "loser_school": "Illinois",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 224,
    "winner": "G.J. Roush",
    "winner_school": "Amherst",
    "loser": "William Clary",
    "loser_school": "Kansas State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 225,
    "winner": "Herb Reese",
    "winner_school": "Nebraska",
    "loser": "Robert Dierdorff",
    "loser_school": "San Diego State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 226,
    "winner": "Mark Bunge",
    "winner_school": "California-Berkeley",
    "loser": "Rex Sheppard",
    "loser_school": "Colorado",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 365,
    "winner": "Joe Scarpello",
    "winner_school": "Iowa",
    "loser": "Bob Siddens",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 366,
    "winner": "Waldemar VanCott",
    "winner_school": "Purdue",
    "loser": "Robert Klune",
    "loser_school": "Denver",
    "result": "Fall 2:25"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 367,
    "winner": "Jim Gregson",
    "winner_school": "Oklahoma State",
    "loser": "G.J. Roush",
    "loser_school": "Amherst",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 368,
    "winner": "Herb Reese",
    "winner_school": "Nebraska",
    "loser": "Mark Bunge",
    "loser_school": "California-Berkeley",
    "result": "DEF"
  },
  {
    "round": "SemiFinals",
    "weight": "175",
    "bout": 473,
    "winner": "Joe Scarpello",
    "winner_school": "Iowa",
    "loser": "Waldemar VanCott",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "175",
    "bout": 474,
    "winner": "Jim Gregson",
    "winner_school": "Oklahoma State",
    "loser": "Herb Reese",
    "loser_school": "Nebraska",
    "result": "Dec 7-0"
  },
  {
    "round": "3rdPlace",
    "weight": "175",
    "bout": 547,
    "winner": "Herb Reese",
    "winner_school": "Nebraska",
    "loser": "Waldemar VanCott",
    "loser_school": "Purdue",
    "result": "Dec 6-5"
  },
  {
    "round": "Finals",
    "weight": "175",
    "bout": 557,
    "winner": "Jim Gregson",
    "winner_school": "Oklahoma State",
    "loser": "Joe Scarpello",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsA",
    "weight": "175",
    "bout": 273,
    "winner": "Herman Shilleriff",
    "winner_school": "Northern Colorado",
    "loser": "Joe Manchak",
    "loser_school": "Wyoming",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsA",
    "weight": "175",
    "bout": 274,
    "winner": "Fred Dexter",
    "winner_school": "Cornell Iowa",
    "loser": "William Vohaska",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "175",
    "bout": 393,
    "winner": "Herman Shilleriff",
    "winner_school": "Northern Colorado",
    "loser": "Bob Siddens",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsB",
    "weight": "175",
    "bout": 394,
    "winner": "Fred Dexter",
    "winner_school": "Cornell Iowa",
    "loser": "G.J. Roush",
    "loser_school": "Amherst",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "175",
    "bout": 433,
    "winner": "Waldemar VanCott",
    "winner_school": "Purdue",
    "loser": "Herman Shilleriff",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "175",
    "bout": 434,
    "winner": "Herb Reese",
    "winner_school": "Nebraska",
    "loser": "Fred Dexter",
    "loser_school": "Cornell Iowa",
    "result": "Fall 1:34"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 227,
    "winner": "Dick Hutton",
    "winner_school": "Oklahoma State",
    "loser": "Moroni Schwab",
    "loser_school": "Utah State",
    "result": "Fall 4:45"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 228,
    "winner": "Clay Matthews",
    "winner_school": "Georgia Tech",
    "loser": "Bill Priest",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 229,
    "winner": "Bob Maldegan",
    "winner_school": "Michigan State",
    "loser": "Charles Nowlen",
    "loser_school": "Wyoming",
    "result": "Fall 5:54"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 231,
    "winner": "Verne Gagne",
    "winner_school": "Minnesota",
    "loser": "Alvin Dailey",
    "loser_school": "Brigham Young",
    "result": "Fall 6:20"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 232,
    "winner": "Bob Geigel",
    "winner_school": "Iowa",
    "loser": "Donald Arnold",
    "loser_school": "San Diego State",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 233,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "Thurman McGraw",
    "loser_school": "Colorado State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 369,
    "winner": "Dick Hutton",
    "winner_school": "Oklahoma State",
    "loser": "Clay Matthews",
    "loser_school": "Georgia Tech",
    "result": "Fall 4:35"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 370,
    "winner": "Bob Maldegan",
    "winner_school": "Michigan State",
    "loser": "Richard Simmons",
    "loser_school": "Wheaton",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 371,
    "winner": "Verne Gagne",
    "winner_school": "Minnesota",
    "loser": "Bob Geigel",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 372,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "Fred Stoeker",
    "loser_school": "Northern Iowa",
    "result": "Fall 7:17"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 475,
    "winner": "Dick Hutton",
    "winner_school": "Oklahoma State",
    "loser": "Bob Maldegan",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 476,
    "winner": "Verne Gagne",
    "winner_school": "Minnesota",
    "loser": "Homer Barr",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 548,
    "winner": "Bob Maldegan",
    "winner_school": "Michigan State",
    "loser": "Homer Barr",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 558,
    "winner": "Verne Gagne",
    "winner_school": "Minnesota",
    "loser": "Dick Hutton",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 395,
    "winner": "Moroni Schwab",
    "winner_school": "Utah State",
    "loser": "Clay Matthews",
    "loser_school": "Georgia Tech",
    "result": "Fall 1:06"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 396,
    "winner": "Bob Geigel",
    "winner_school": "Iowa",
    "loser": "Alvin Dailey",
    "loser_school": "Brigham Young",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 435,
    "winner": "Bob Maldegan",
    "winner_school": "Michigan State",
    "loser": "Moroni Schwab",
    "loser_school": "Utah State",
    "result": "Fall 5:40"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 436,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "Bob Geigel",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
