// 1950 NCAA Division I Wrestling Championships (3/24/1950 to 3/25/1950 at Northern Iowa). Weight classes 121-UNL (8). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1950 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1950-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 172,
    "winner": "Arnold Plaza",
    "winner_school": "Purdue",
    "loser": "Bob Worster",
    "loser_school": "Colorado",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 173,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "Bob Mendenhall",
    "loser_school": "West Virginia",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 175,
    "winner": "Frank Altman",
    "winner_school": "Northern Iowa",
    "loser": "George Kelly",
    "loser_school": "Wyoming",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 177,
    "winner": "Grady Peninger",
    "winner_school": "Oklahoma State",
    "loser": "Michael Tatone",
    "loser_school": "Minnesota",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 341,
    "winner": "Arnold Plaza",
    "winner_school": "Purdue",
    "loser": "Bill Donecho",
    "loser_school": "Springfield",
    "result": "Fall 8:56"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 342,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "Bob Gerbino",
    "loser_school": "Syracuse",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 343,
    "winner": "Frank Altman",
    "winner_school": "Northern Iowa",
    "loser": "Robert Carlin",
    "loser_school": "Indiana",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 344,
    "winner": "Tony Gizoni",
    "winner_school": "Waynesburg",
    "loser": "Grady Peninger",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "121",
    "bout": 461,
    "winner": "Arnold Plaza",
    "winner_school": "Purdue",
    "loser": "Bill Borders",
    "loser_school": "Oklahoma",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "121",
    "bout": 462,
    "winner": "Tony Gizoni",
    "winner_school": "Waynesburg",
    "loser": "Frank Altman",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "3rdPlace",
    "weight": "121",
    "bout": 541,
    "winner": "Frank Altman",
    "winner_school": "Northern Iowa",
    "loser": "Bill Borders",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "121",
    "bout": 551,
    "winner": "Tony Gizoni",
    "winner_school": "Waynesburg",
    "loser": "Arnold Plaza",
    "loser_school": "Purdue",
    "result": "Dec 7-6"
  },
  {
    "round": "RepConsB",
    "weight": "121",
    "bout": 381,
    "winner": "Bob Worster",
    "winner_school": "Colorado",
    "loser": "Bill Donecho",
    "loser_school": "Springfield",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "121",
    "bout": 421,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "Bob Worster",
    "loser_school": "Colorado",
    "result": "Dec 8-1"
  },
  {
    "round": "RepConsC",
    "weight": "121",
    "bout": 422,
    "winner": "Frank Altman",
    "winner_school": "Northern Iowa",
    "loser": "Grady Peninger",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "128",
    "bout": 27,
    "winner": "Charles Hetrick",
    "winner_school": "Oklahoma State",
    "loser": "Robert Schell",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 5-5 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 179,
    "winner": "Charles Hetrick",
    "winner_school": "Oklahoma State",
    "loser": "Lou Tschirhart",
    "loser_school": "Syracuse",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 180,
    "winner": "Ken Carman",
    "winner_school": "Iowa",
    "loser": "George Dannaway",
    "loser_school": "Lock Haven",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 181,
    "winner": "Walter Romanowski",
    "winner_school": "Cornell Iowa",
    "loser": "Jack Blubaugh",
    "loser_school": "Oklahoma",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 182,
    "winner": "Ben Knaub",
    "winner_school": "Northern Colorado",
    "loser": "George Fuller",
    "loser_school": "Waynesburg",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 183,
    "winner": "Don Maurey",
    "winner_school": "Penn State",
    "loser": "Richard Pickard",
    "loser_school": "Illinois",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 184,
    "winner": "Luverne Klar",
    "winner_school": "Northern Iowa",
    "loser": "George Molodet",
    "loser_school": "Ohio State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 185,
    "winner": "Bob Morris",
    "winner_school": "Wyoming",
    "loser": "Harry Arthur",
    "loser_school": "Indiana",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 186,
    "winner": "Joe Patacsil",
    "winner_school": "Purdue",
    "loser": "Harold Gilliland",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 345,
    "winner": "Charles Hetrick",
    "winner_school": "Oklahoma State",
    "loser": "Ken Carman",
    "loser_school": "Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 346,
    "winner": "Walter Romanowski",
    "winner_school": "Cornell Iowa",
    "loser": "Ben Knaub",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 347,
    "winner": "Luverne Klar",
    "winner_school": "Northern Iowa",
    "loser": "Don Maurey",
    "loser_school": "Penn State",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 348,
    "winner": "Joe Patacsil",
    "winner_school": "Purdue",
    "loser": "Bob Morris",
    "loser_school": "Wyoming",
    "result": "Dec 13-6"
  },
  {
    "round": "SemiFinals",
    "weight": "128",
    "bout": 463,
    "winner": "Walter Romanowski",
    "winner_school": "Cornell Iowa",
    "loser": "Charles Hetrick",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "128",
    "bout": 464,
    "winner": "Joe Patacsil",
    "winner_school": "Purdue",
    "loser": "Luverne Klar",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "128",
    "bout": 542,
    "winner": "Jack Blubaugh",
    "winner_school": "Oklahoma",
    "loser": "Luverne Klar",
    "loser_school": "Northern Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "Finals",
    "weight": "128",
    "bout": 552,
    "winner": "Joe Patacsil",
    "winner_school": "Purdue",
    "loser": "Walter Romanowski",
    "loser_school": "Cornell Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "128",
    "bout": 383,
    "winner": "Jack Blubaugh",
    "winner_school": "Oklahoma",
    "loser": "Ben Knaub",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "RepConsB",
    "weight": "128",
    "bout": 384,
    "winner": "Bob Morris",
    "winner_school": "Wyoming",
    "loser": "Harold Gilliland",
    "loser_school": "Nebraska",
    "result": "Fall 5:17"
  },
  {
    "round": "RepConsC",
    "weight": "128",
    "bout": 423,
    "winner": "Jack Blubaugh",
    "winner_school": "Oklahoma",
    "loser": "Charles Hetrick",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsC",
    "weight": "128",
    "bout": 424,
    "winner": "Luverne Klar",
    "winner_school": "Northern Iowa",
    "loser": "Bob Morris",
    "loser_school": "Wyoming",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 189,
    "winner": "Alan Rice",
    "winner_school": "Minnesota",
    "loser": "Kenneth Watson",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 190,
    "winner": "L. Wayne Smith",
    "winner_school": "Navy",
    "loser": "Paul Riggins",
    "loser_school": "Illinois",
    "result": "MD 18-10"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 191,
    "winner": "Don Meeker",
    "winner_school": "Oklahoma State",
    "loser": "Richard Lyon",
    "loser_school": "Indiana",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 192,
    "winner": "Floyd Oglesby",
    "winner_school": "Northern Iowa",
    "loser": "Peter Polachek",
    "loser_school": "Waynesburg",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 193,
    "winner": "Charles Farina",
    "winner_school": "Purdue",
    "loser": "Richard Holst",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 349,
    "winner": "Lowell Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Joe McKim",
    "loser_school": "California-Berkeley",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 350,
    "winner": "L. Wayne Smith",
    "winner_school": "Navy",
    "loser": "Alan Rice",
    "loser_school": "Minnesota",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 351,
    "winner": "Floyd Oglesby",
    "winner_school": "Northern Iowa",
    "loser": "Don Meeker",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-6 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 352,
    "winner": "Charles Farina",
    "winner_school": "Purdue",
    "loser": "Bob Wilson",
    "loser_school": "Iowa State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "136",
    "bout": 465,
    "winner": "Lowell Lange",
    "winner_school": "Cornell Iowa",
    "loser": "L. Wayne Smith",
    "loser_school": "Navy",
    "result": "Dec 8-5"
  },
  {
    "round": "SemiFinals",
    "weight": "136",
    "bout": 466,
    "winner": "Floyd Oglesby",
    "winner_school": "Northern Iowa",
    "loser": "Charles Farina",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "136",
    "bout": 543,
    "winner": "L. Wayne Smith",
    "winner_school": "Navy",
    "loser": "Charles Farina",
    "loser_school": "Purdue",
    "result": "DEF"
  },
  {
    "round": "Finals",
    "weight": "136",
    "bout": 553,
    "winner": "Lowell Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Floyd Oglesby",
    "loser_school": "Northern Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsB",
    "weight": "136",
    "bout": 386,
    "winner": "Don Meeker",
    "winner_school": "Oklahoma State",
    "loser": "Peter Polachek",
    "loser_school": "Waynesburg",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "136",
    "bout": 425,
    "winner": "L. Wayne Smith",
    "winner_school": "Navy",
    "loser": "Joe McKim",
    "loser_school": "California-Berkeley",
    "result": "Dec 10-8"
  },
  {
    "round": "RepConsC",
    "weight": "136",
    "bout": 426,
    "winner": "Charles Farina",
    "winner_school": "Purdue",
    "loser": "Don Meeker",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 195,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Don Solomon",
    "loser_school": "Lock Haven",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 196,
    "winner": "Ken Schmoker",
    "winner_school": "Northern Colorado",
    "loser": "Bob DeAntonis",
    "loser_school": "West Virginia",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 197,
    "winner": "Al Pisasale",
    "winner_school": "Nebraska-Omaha",
    "loser": "Ray Pigozzi",
    "loser_school": "Illinois",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 198,
    "winner": "Jim Maurey",
    "winner_school": "Penn State",
    "loser": "Bryce Keough",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 199,
    "winner": "Edgar Welch",
    "winner_school": "Oklahoma State",
    "loser": "Ed Closs",
    "loser_school": "Washington State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 200,
    "winner": "Peter Wilson",
    "winner_school": "Wheaton",
    "loser": "Bill French",
    "loser_school": "Colorado",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 201,
    "winner": "Charles Moreno",
    "winner_school": "Purdue",
    "loser": "Rodger Snook",
    "loser_school": "Cornell Iowa",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 353,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Ken Schmoker",
    "loser_school": "Northern Colorado",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 354,
    "winner": "Jim Maurey",
    "winner_school": "Penn State",
    "loser": "Al Pisasale",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 355,
    "winner": "Edgar Welch",
    "winner_school": "Oklahoma State",
    "loser": "Peter Wilson",
    "loser_school": "Wheaton",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 356,
    "winner": "Charles Moreno",
    "winner_school": "Purdue",
    "loser": "George Jackson",
    "loser_school": "Oklahoma",
    "result": "Dec 5-5 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 467,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Jim Maurey",
    "loser_school": "Penn State",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 468,
    "winner": "Charles Moreno",
    "winner_school": "Purdue",
    "loser": "Edgar Welch",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "145",
    "bout": 544,
    "winner": "Jim Maurey",
    "winner_school": "Penn State",
    "loser": "Rodger Snook",
    "loser_school": "Cornell Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "Finals",
    "weight": "145",
    "bout": 554,
    "winner": "Keith Young",
    "winner_school": "Northern Iowa",
    "loser": "Charles Moreno",
    "loser_school": "Purdue",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 387,
    "winner": "Ken Schmoker",
    "winner_school": "Northern Colorado",
    "loser": "Don Solomon",
    "loser_school": "Lock Haven",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 388,
    "winner": "Rodger Snook",
    "winner_school": "Cornell Iowa",
    "loser": "George Jackson",
    "loser_school": "Oklahoma",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 427,
    "winner": "Jim Maurey",
    "winner_school": "Penn State",
    "loser": "Ken Schmoker",
    "loser_school": "Northern Colorado",
    "result": "Fall 1:31"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 428,
    "winner": "Rodger Snook",
    "winner_school": "Cornell Iowa",
    "loser": "Edgar Welch",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:20"
  },
  {
    "round": "ChampR1",
    "weight": "155",
    "bout": 75,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "Bill Kemp",
    "loser_school": "North Carolina",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "155",
    "bout": 90,
    "winner": "Ken Hunte",
    "winner_school": "Syracuse",
    "loser": "John Cepuran",
    "loser_school": "Springfield",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 203,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "Byron Todd",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:13"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 204,
    "winner": "Kent Lange",
    "winner_school": "Cornell Iowa",
    "loser": "Fred McLean",
    "loser_school": "Ohio State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 205,
    "winner": "Bob Dwyer",
    "winner_school": "Illinois",
    "loser": "Howard Wolfgram",
    "loser_school": "Wartburg",
    "result": "Fall 8:32"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 206,
    "winner": "Don Ryan",
    "winner_school": "Wisconsin",
    "loser": "Tom Lewis",
    "loser_school": "Waynesburg",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 207,
    "winner": "George Bender",
    "winner_school": "Michigan State",
    "loser": "Leonard Marcotte",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 208,
    "winner": "George Tesla",
    "winner_school": "Iowa",
    "loser": "George Miller",
    "loser_school": "Brigham Young",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 209,
    "winner": "Don Govoni",
    "winner_school": "Northern Colorado",
    "loser": "Harold Taussig",
    "loser_school": "Wheaton",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "155",
    "bout": 210,
    "winner": "Ken Hunte",
    "winner_school": "Syracuse",
    "loser": "Bob Mason",
    "loser_school": "Wyoming",
    "result": "Fall 5:34"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 357,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "Kent Lange",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 358,
    "winner": "Bob Dwyer",
    "winner_school": "Illinois",
    "loser": "Don Ryan",
    "loser_school": "Wisconsin",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 359,
    "winner": "George Bender",
    "winner_school": "Michigan State",
    "loser": "George Tesla",
    "loser_school": "Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 360,
    "winner": "Ken Hunte",
    "winner_school": "Syracuse",
    "loser": "Don Govoni",
    "loser_school": "Northern Colorado",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "155",
    "bout": 469,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "Bob Dwyer",
    "loser_school": "Illinois",
    "result": "MD 10-0"
  },
  {
    "round": "SemiFinals",
    "weight": "155",
    "bout": 470,
    "winner": "Ken Hunte",
    "winner_school": "Syracuse",
    "loser": "George Bender",
    "loser_school": "Michigan State",
    "result": "Dec 4-0"
  },
  {
    "round": "3rdPlace",
    "weight": "155",
    "bout": 545,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Bob Mason",
    "loser_school": "Wyoming",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "155",
    "bout": 555,
    "winner": "Bill Nelson",
    "winner_school": "Northern Iowa",
    "loser": "Ken Hunte",
    "loser_school": "Syracuse",
    "result": "Dec 8-1"
  },
  {
    "round": "RepConsA",
    "weight": "155",
    "bout": 269,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Bill Kemp",
    "loser_school": "North Carolina",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsA",
    "weight": "155",
    "bout": 270,
    "winner": "Bob Mason",
    "winner_school": "Wyoming",
    "loser": "John Cepuran",
    "loser_school": "Springfield",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "155",
    "bout": 389,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Kent Lange",
    "loser_school": "Cornell Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "155",
    "bout": 390,
    "winner": "Bob Mason",
    "winner_school": "Wyoming",
    "loser": "Don Govoni",
    "loser_school": "Northern Colorado",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "155",
    "bout": 429,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Bob Dwyer",
    "loser_school": "Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsC",
    "weight": "155",
    "bout": 430,
    "winner": "Bob Mason",
    "winner_school": "Wyoming",
    "loser": "George Bender",
    "loser_school": "Michigan State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 212,
    "winner": "Bill Smith",
    "winner_school": "Northern Iowa",
    "loser": "Oscar Gupton",
    "loser_school": "North Carolina",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 213,
    "winner": "Mel Spence",
    "winner_school": "Northern Colorado",
    "loser": "Gilbert Gaumer",
    "loser_school": "Illinois",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 215,
    "winner": "Bill Nardini",
    "winner_school": "Cornell Iowa",
    "loser": "Bob Lessel",
    "loser_school": "Wisconsin",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 217,
    "winner": "James LaRock",
    "winner_school": "Ithaca",
    "loser": "Bill Mosby",
    "loser_school": "Oregon State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 361,
    "winner": "Bill Smith",
    "winner_school": "Northern Iowa",
    "loser": "Gene Gibbons",
    "loser_school": "Michigan State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 362,
    "winner": "Mel Spence",
    "winner_school": "Northern Colorado",
    "loser": "Dale Federer",
    "loser_school": "Wyoming",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 363,
    "winner": "Bill Nardini",
    "winner_school": "Cornell Iowa",
    "loser": "Joe Butler",
    "loser_school": "Oklahoma",
    "result": "Dec 6-6 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 364,
    "winner": "James LaRock",
    "winner_school": "Ithaca",
    "loser": "Charles Mancuso",
    "loser_school": "Nebraska-Omaha",
    "result": "Fall 1:38"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 471,
    "winner": "Bill Smith",
    "winner_school": "Northern Iowa",
    "loser": "Mel Spence",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 472,
    "winner": "James LaRock",
    "winner_school": "Ithaca",
    "loser": "Bill Nardini",
    "loser_school": "Cornell Iowa",
    "result": "Fall 6:57"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 546,
    "winner": "Gene Gibbons",
    "winner_school": "Michigan State",
    "loser": "Bill Nardini",
    "loser_school": "Cornell Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 556,
    "winner": "Bill Smith",
    "winner_school": "Northern Iowa",
    "loser": "James LaRock",
    "loser_school": "Ithaca",
    "result": "Dec 10-7"
  },
  {
    "round": "RepConsB",
    "weight": "165",
    "bout": 391,
    "winner": "Gene Gibbons",
    "winner_school": "Michigan State",
    "loser": "Oscar Gupton",
    "loser_school": "North Carolina",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "165",
    "bout": 392,
    "winner": "Bill Mosby",
    "winner_school": "Oregon State",
    "loser": "Charles Mancuso",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "165",
    "bout": 431,
    "winner": "Gene Gibbons",
    "winner_school": "Michigan State",
    "loser": "Mel Spence",
    "loser_school": "Northern Colorado",
    "result": "MD 11-1"
  },
  {
    "round": "RepConsC",
    "weight": "165",
    "bout": 432,
    "winner": "Bill Nardini",
    "winner_school": "Cornell Iowa",
    "loser": "Bill Mosby",
    "loser_school": "Oregon State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 219,
    "winner": "Joe Scarpello",
    "winner_school": "Iowa",
    "loser": "Dewey McConnell",
    "loser_school": "Wyoming",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 220,
    "winner": "Frank Soloman",
    "winner_school": "Kansas State",
    "loser": "Otto Zwanziger",
    "loser_school": "Wartburg",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 221,
    "winner": "Harland Buhler",
    "winner_school": "Oregon State",
    "loser": "Al Partin",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 222,
    "winner": "William Vohaska",
    "winner_school": "Illinois",
    "loser": "Claburn White",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 223,
    "winner": "Herb Reese",
    "winner_school": "Nebraska",
    "loser": "Mike Rubino",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 224,
    "winner": "Dan Mantrone",
    "winner_school": "Auburn",
    "loser": "Don Thomas",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 225,
    "winner": "George Gebhardt",
    "winner_school": "Syracuse",
    "loser": "Ray Olverson",
    "loser_school": "Brigham Young",
    "result": "Fall 5:58"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 365,
    "winner": "Joe Scarpello",
    "winner_school": "Iowa",
    "loser": "Frank Soloman",
    "loser_school": "Kansas State",
    "result": "Fall 6:48"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 366,
    "winner": "William Vohaska",
    "winner_school": "Illinois",
    "loser": "Harland Buhler",
    "loser_school": "Oregon State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 367,
    "winner": "Dan Mantrone",
    "winner_school": "Auburn",
    "loser": "Herb Reese",
    "loser_school": "Nebraska",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 368,
    "winner": "George Gebhardt",
    "winner_school": "Syracuse",
    "loser": "Max Long",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "175",
    "bout": 473,
    "winner": "Joe Scarpello",
    "winner_school": "Iowa",
    "loser": "William Vohaska",
    "loser_school": "Illinois",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "175",
    "bout": 474,
    "winner": "George Gebhardt",
    "winner_school": "Syracuse",
    "loser": "Dan Mantrone",
    "loser_school": "Auburn",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "175",
    "bout": 547,
    "winner": "William Vohaska",
    "winner_school": "Illinois",
    "loser": "Dan Mantrone",
    "loser_school": "Auburn",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Finals",
    "weight": "175",
    "bout": 557,
    "winner": "Joe Scarpello",
    "winner_school": "Iowa",
    "loser": "George Gebhardt",
    "loser_school": "Syracuse",
    "result": "MD 13-4"
  },
  {
    "round": "RepConsB",
    "weight": "175",
    "bout": 393,
    "winner": "Frank Soloman",
    "winner_school": "Kansas State",
    "loser": "Dewey McConnell",
    "loser_school": "Wyoming",
    "result": "Dec 9-3"
  },
  {
    "round": "RepConsB",
    "weight": "175",
    "bout": 394,
    "winner": "Max Long",
    "winner_school": "Northern Iowa",
    "loser": "Ray Olverson",
    "loser_school": "Brigham Young",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "175",
    "bout": 433,
    "winner": "William Vohaska",
    "winner_school": "Illinois",
    "loser": "Frank Soloman",
    "loser_school": "Kansas State",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "175",
    "bout": 434,
    "winner": "Dan Mantrone",
    "winner_school": "Auburn",
    "loser": "Max Long",
    "loser_school": "Northern Iowa",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 227,
    "winner": "Dick Hutton",
    "winner_school": "Oklahoma State",
    "loser": "Bob Schildgen",
    "loser_school": "Wyoming",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 228,
    "winner": "John Mullins",
    "winner_school": "Lock Haven",
    "loser": "Howard Byram",
    "loser_school": "Nebraska-Omaha",
    "result": "Fall 7:34"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 229,
    "winner": "Richard Simmons",
    "winner_school": "Wheaton",
    "loser": "Alvin Dailey",
    "loser_school": "Brigham Young",
    "result": "Fall 2:47"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 231,
    "winner": "Fred Stoeker",
    "winner_school": "Northern Iowa",
    "loser": "Herb Haberlach",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 233,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "Fred Dexter",
    "loser_school": "Cornell Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 369,
    "winner": "Dick Hutton",
    "winner_school": "Oklahoma State",
    "loser": "John Mullins",
    "loser_school": "Lock Haven",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 370,
    "winner": "Richard Simmons",
    "winner_school": "Wheaton",
    "loser": "Joe Blanchard",
    "loser_school": "Kansas State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 371,
    "winner": "Fred Stoeker",
    "winner_school": "Northern Iowa",
    "loser": "Glenn Blagg",
    "loser_school": "Colorado College",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 372,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "Bill Priest",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 475,
    "winner": "Dick Hutton",
    "winner_school": "Oklahoma State",
    "loser": "Richard Simmons",
    "loser_school": "Wheaton",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 476,
    "winner": "Fred Stoeker",
    "winner_school": "Northern Iowa",
    "loser": "Homer Barr",
    "loser_school": "Penn State",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 548,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "Richard Simmons",
    "loser_school": "Wheaton",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 558,
    "winner": "Dick Hutton",
    "winner_school": "Oklahoma State",
    "loser": "Fred Stoeker",
    "loser_school": "Northern Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 395,
    "winner": "John Mullins",
    "winner_school": "Lock Haven",
    "loser": "Bob Schildgen",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 396,
    "winner": "Glenn Blagg",
    "winner_school": "Colorado College",
    "loser": "Herb Haberlach",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 435,
    "winner": "Richard Simmons",
    "winner_school": "Wheaton",
    "loser": "John Mullins",
    "loser_school": "Lock Haven",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 436,
    "winner": "Homer Barr",
    "winner_school": "Penn State",
    "loser": "Glenn Blagg",
    "loser_school": "Colorado College",
    "result": "Dec 3-2"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
