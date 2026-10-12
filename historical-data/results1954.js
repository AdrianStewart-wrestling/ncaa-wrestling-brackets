// 1954 NCAA Division I Wrestling Championships (3/26/1954 to 3/27/1954 at Oklahoma). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1954 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1954-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Joe Landholm",
    "loser_school": "Kansas State",
    "result": "Fall 3:55"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Dave Bowlin",
    "winner_school": "Oklahoma State",
    "loser": "Manuel Pihakis",
    "loser_school": "Indiana",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Junior Corr",
    "winner_school": "Oklahoma",
    "loser": "Robert Whelan",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 9-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Robert David",
    "loser_school": "Auburn",
    "result": "Fall 4:00"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Dave Bowlin",
    "loser_school": "Oklahoma State",
    "result": "MD 13-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Tom Torgerson",
    "winner_school": "Colorado",
    "loser": "Junior Corr",
    "loser_school": "Oklahoma",
    "result": "Dec 11-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Charles Ofsthun",
    "winner_school": "Minnesota",
    "loser": "Jack Love",
    "loser_school": "Kent State",
    "result": "Dec 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Terry McCann",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Charles Ofsthun",
    "winner_school": "Minnesota",
    "loser": "Tom Torgerson",
    "loser_school": "Colorado",
    "result": "Dec 7-1"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Jack Love",
    "loser_school": "Kent State",
    "result": "Fall 1:38"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Charles Ofsthun",
    "loser_school": "Minnesota",
    "result": "Dec 9-2"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Joe Landholm",
    "winner_school": "Kansas State",
    "loser": "Robert David",
    "loser_school": "Auburn",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Joe Landholm",
    "loser_school": "Kansas State",
    "result": "Fall 3:51"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Jack Love",
    "winner_school": "Kent State",
    "loser": "Tom Torgerson",
    "loser_school": "Colorado",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Dick Govig",
    "winner_school": "Iowa",
    "loser": "Stephan Levin",
    "loser_school": "CCNY",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Al Vega",
    "winner_school": "Purdue",
    "loser": "Harry Pawlik",
    "loser_school": "North Carolina",
    "result": "FOR"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Ted Bredehoft",
    "winner_school": "Cornell Iowa",
    "loser": "Robert Royce",
    "loser_school": "Wyoming",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Joe Lobaugh",
    "winner_school": "Oklahoma State",
    "loser": "Donald Stubblebine",
    "loser_school": "Springfield",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Bob McCreary",
    "winner_school": "Temple",
    "loser": "Ed Blubaugh",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Dick Govig",
    "winner_school": "Iowa",
    "loser": "Bill Allen",
    "loser_school": "Texas A & M",
    "result": "Fall 4:31"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Al Vega",
    "winner_school": "Purdue",
    "loser": "Ted Bredehoft",
    "loser_school": "Cornell Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Joe Lobaugh",
    "winner_school": "Oklahoma State",
    "loser": "Ed Anderson",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "John Ontiveros",
    "winner_school": "Illinois",
    "loser": "Bob McCreary",
    "loser_school": "Temple",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Dick Govig",
    "winner_school": "Iowa",
    "loser": "Al Vega",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Joe Lobaugh",
    "winner_school": "Oklahoma State",
    "loser": "John Ontiveros",
    "loser_school": "Illinois",
    "result": "Dec UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Al Vega",
    "winner_school": "Purdue",
    "loser": "Ed Anderson",
    "loser_school": "Minnesota",
    "result": "Dec 9-5"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Dick Govig",
    "winner_school": "Iowa",
    "loser": "Joe Lobaugh",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Bill Allen",
    "winner_school": "Texas A & M",
    "loser": "Stephan Levin",
    "loser_school": "CCNY",
    "result": "Fall"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Ed Anderson",
    "winner_school": "Minnesota",
    "loser": "Donald Stubblebine",
    "loser_school": "Springfield",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Al Vega",
    "winner_school": "Purdue",
    "loser": "Bill Allen",
    "loser_school": "Texas A & M",
    "result": "Fall 3:28"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Ed Anderson",
    "winner_school": "Minnesota",
    "loser": "John Ontiveros",
    "loser_school": "Illinois",
    "result": "WIN-NP"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "Don Hart",
    "winner_school": "Oklahoma",
    "loser": "Hugh Linn",
    "loser_school": "Iowa State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "David Simmons",
    "loser_school": "Oklahoma State",
    "result": "Fall 7:25"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Dick Lemyre",
    "winner_school": "Penn State",
    "loser": "Bill Hunt",
    "loser_school": "Minnesota",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "Reed Weight",
    "loser_school": "Brigham Young",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Ron Day",
    "winner_school": "Colorado State",
    "loser": "Mark Murray",
    "loser_school": "Cornell Iowa",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Don Hart",
    "winner_school": "Oklahoma",
    "loser": "Parker Mangus",
    "loser_school": "Lehigh",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "Bob Beattie",
    "loser_school": "Texas A & M",
    "result": "Fall 1:50"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Dick Lemyre",
    "winner_school": "Penn State",
    "loser": "Bob Mancuso",
    "loser_school": "Kansas State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Richard Hockley",
    "winner_school": "Wyoming",
    "loser": "Gerald Koch",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Jim Howard",
    "winner_school": "Ithaca",
    "loser": "Bill Kozy",
    "loser_school": "Pittsburgh",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Vernon Whitney",
    "winner_school": "Purdue",
    "loser": "David Kikuchi",
    "loser_school": "California-Berkeley",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "Ron Day",
    "loser_school": "Colorado State",
    "result": "Dec 5-5 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "Don Hart",
    "loser_school": "Oklahoma",
    "result": "Fall 5:18"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Richard Hockley",
    "winner_school": "Wyoming",
    "loser": "Dick Lemyre",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Jim Howard",
    "winner_school": "Ithaca",
    "loser": "Vernon Whitney",
    "loser_school": "Purdue",
    "result": "Dec 8-5"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "Jim Sinadinos",
    "loser_school": "Michigan State",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Jim Howard",
    "winner_school": "Ithaca",
    "loser": "Richard Hockley",
    "loser_school": "Wyoming",
    "result": "Dec UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "Bill Kozy",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-2"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "Jim Howard",
    "loser_school": "Ithaca",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 265,
    "winner": "David Simmons",
    "winner_school": "Oklahoma State",
    "loser": "Bob Beattie",
    "loser_school": "Texas A & M",
    "result": "Fall 2:49"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Don Hart",
    "winner_school": "Oklahoma",
    "loser": "David Simmons",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Bill Kozy",
    "winner_school": "Pittsburgh",
    "loser": "Vernon Whitney",
    "loser_school": "Purdue",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "Don Hart",
    "loser_school": "Oklahoma",
    "result": "Fall 5:33"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Bill Kozy",
    "winner_school": "Pittsburgh",
    "loser": "Richard Hockley",
    "loser_school": "Wyoming",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Bill Turner",
    "winner_school": "Illinois",
    "loser": "Dick Cappel",
    "loser_school": "Texas A & M",
    "result": "Fall 4:15"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Warren DePrenger",
    "winner_school": "Cornell Iowa",
    "loser": "Wayne Loucks",
    "loser_school": "California-Berkeley",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Lee Young",
    "loser_school": "Oklahoma",
    "result": "Fall 4:42"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "George Matthews",
    "winner_school": "Pittsburgh",
    "loser": "Raymond Downey",
    "loser_school": "Auburn",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Andrew Kaul",
    "winner_school": "Michigan",
    "loser": "Bill Turner",
    "loser_school": "Illinois",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Rollins",
    "loser_school": "Brigham Young",
    "result": "Fall 4:11"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Ed Casalicchio",
    "winner_school": "Michigan State",
    "loser": "Bob Datteri",
    "loser_school": "Colorado State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Gerry Maurey",
    "winner_school": "Penn State",
    "loser": "Elton Chatfield",
    "loser_school": "Kansas State",
    "result": "Fall 1:35"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Sam Ruzic",
    "winner_school": "Iowa State",
    "loser": "Eddison Hairston",
    "loser_school": "Lincoln",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Warren DePrenger",
    "loser_school": "Cornell Iowa",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Andrew Kaul",
    "winner_school": "Michigan",
    "loser": "George Matthews",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Ed Casalicchio",
    "loser_school": "Michigan State",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Gerry Maurey",
    "winner_school": "Penn State",
    "loser": "Sam Ruzic",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Andrew Kaul",
    "loser_school": "Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Gerry Maurey",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Gerry Maurey",
    "winner_school": "Penn State",
    "loser": "Andrew Kaul",
    "loser_school": "Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Eddie Eichelberger",
    "loser_school": "Lehigh",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Warren DePrenger",
    "winner_school": "Cornell Iowa",
    "loser": "Lee Young",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Ed Casalicchio",
    "winner_school": "Michigan State",
    "loser": "Jerry Rollins",
    "loser_school": "Brigham Young",
    "result": "MD 8-0"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Andrew Kaul",
    "winner_school": "Michigan",
    "loser": "Warren DePrenger",
    "loser_school": "Cornell Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Gerry Maurey",
    "winner_school": "Penn State",
    "loser": "Ed Casalicchio",
    "loser_school": "Michigan State",
    "result": "Fall"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 75,
    "winner": "Doug Frey",
    "winner_school": "Penn State",
    "loser": "Art Keith",
    "loser_school": "Oregon State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Doug Frey",
    "winner_school": "Penn State",
    "loser": "Rudy Henson",
    "loser_school": "Texas A & M",
    "result": "Fall 1:36"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Clyde Whitman",
    "loser_school": "West Chester",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Ben Bronstein",
    "winner_school": "Northern Colorado",
    "loser": "Clayton Carothers",
    "loser_school": "Lincoln",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Ken Spicher",
    "winner_school": "Kansas State",
    "loser": "George McGee",
    "loser_school": "North Carolina",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Donald Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Lloyd Corwin",
    "loser_school": "Cornell Iowa",
    "result": "Dec 5-5 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Bill Bock",
    "winner_school": "Springfield",
    "loser": "Ian MacEwan",
    "loser_school": "Kent State",
    "result": "Fall 5:11"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Delbert Lockwood",
    "winner_school": "Colorado State",
    "loser": "Bill Tambo",
    "loser_school": "Michigan State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Don Ellingson",
    "winner_school": "Iowa State",
    "loser": "Charles Uram",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Doug Frey",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Ben Bronstein",
    "winner_school": "Northern Colorado",
    "loser": "Ken Spicher",
    "loser_school": "Kansas State",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Donald Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Bill Bock",
    "loser_school": "Springfield",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Delbert Lockwood",
    "winner_school": "Colorado State",
    "loser": "Don Ellingson",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Ben Bronstein",
    "loser_school": "Northern Colorado",
    "result": "Fall 7:34"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Donald Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Delbert Lockwood",
    "loser_school": "Colorado State",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Lloyd Corwin",
    "winner_school": "Cornell Iowa",
    "loser": "Ben Bronstein",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-1"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Donald Thompson",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:15"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Doug Frey",
    "winner_school": "Penn State",
    "loser": "Clyde Whitman",
    "loser_school": "West Chester",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Lloyd Corwin",
    "winner_school": "Cornell Iowa",
    "loser": "Bill Bock",
    "loser_school": "Springfield",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Ben Bronstein",
    "winner_school": "Northern Colorado",
    "loser": "Doug Frey",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Lloyd Corwin",
    "winner_school": "Cornell Iowa",
    "loser": "Delbert Lockwood",
    "loser_school": "Colorado State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "Bob Bormuth",
    "winner_school": "Wyoming",
    "loser": "Bob Cobbins",
    "loser_school": "Lincoln",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 98,
    "winner": "Bob Hoke",
    "winner_school": "Michigan State",
    "loser": "Milo Bauer",
    "loser_school": "Brigham Young",
    "result": "Fall 5:55"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 99,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "Robert Utter",
    "loser_school": "Springfield",
    "result": "Fall 8:33"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Harvey Bradshaw",
    "loser_school": "North Carolina",
    "result": "Fall 1:38"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Arnold Brandt",
    "winner_school": "Wartburg",
    "loser": "Charles Young",
    "loser_school": "Kansas State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Bill Zimmerman",
    "winner_school": "West Chester",
    "loser": "Bob Bormuth",
    "loser_school": "Wyoming",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Bob Hoke",
    "winner_school": "Michigan State",
    "loser": "Dick Beattie",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "John McMahon",
    "loser_school": "Michigan",
    "result": "Fall 0:31"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Ken Greenhalge",
    "winner_school": "Northern Colorado",
    "loser": "Sam Downey",
    "loser_school": "Auburn",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "John Eagleton",
    "winner_school": "Oklahoma",
    "loser": "Harlan Jenkinson",
    "loser_school": "Iowa",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "Ron Larsen",
    "loser_school": "Iowa State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Arnold Brandt",
    "loser_school": "Wartburg",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Bob Hoke",
    "winner_school": "Michigan State",
    "loser": "Bill Zimmerman",
    "loser_school": "West Chester",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "Ken Greenhalge",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "John Eagleton",
    "winner_school": "Oklahoma",
    "loser": "Ed DeWitt",
    "loser_school": "Pittsburgh",
    "result": "MD 12-3"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Bob Hoke",
    "winner_school": "Michigan State",
    "loser": "Larry TenPas",
    "loser_school": "Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "John Eagleton",
    "loser_school": "Oklahoma",
    "result": "Dec 7-6"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "John Eagleton",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Bob Hoke",
    "winner_school": "Michigan State",
    "loser": "Ed Rooney",
    "loser_school": "Syracuse",
    "result": "Dec 11-6"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Dick Beattie",
    "winner_school": "Oklahoma State",
    "loser": "Milo Bauer",
    "loser_school": "Brigham Young",
    "result": "Fall 3:30"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 272,
    "winner": "John McMahon",
    "winner_school": "Michigan",
    "loser": "Robert Utter",
    "loser_school": "Springfield",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Bill Zimmerman",
    "winner_school": "West Chester",
    "loser": "Dick Beattie",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "John McMahon",
    "winner_school": "Michigan",
    "loser": "Ken Greenhalge",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Bill Zimmerman",
    "loser_school": "West Chester",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "John Eagleton",
    "winner_school": "Oklahoma",
    "loser": "John McMahon",
    "loser_school": "Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "Al Rial",
    "loser_school": "Texas A & M",
    "result": "Fall 1:48"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "John Cedarberg",
    "loser_school": "Kansas State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "Vito Perrone",
    "loser_school": "Michigan State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Del McGhee",
    "winner_school": "Washington State",
    "loser": "Frank Rosenmayr",
    "loser_school": "Colorado",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Miles Gregory",
    "loser_school": "North Carolina",
    "result": "Fall 3:59"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "John Cunningham",
    "winner_school": "Oklahoma",
    "loser": "John Winder",
    "loser_school": "Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "Elmer May",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Robert Hockley",
    "winner_school": "Wyoming",
    "loser": "Jim Miller",
    "loser_school": "Cornell Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Ernie Fischer",
    "winner_school": "Maryland",
    "loser": "Don Wem",
    "loser_school": "Toledo",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Harold Broughton",
    "winner_school": "Colorado State",
    "loser": "Tom Hankins",
    "loser_school": "Purdue",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "Del McGhee",
    "loser_school": "Washington State",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "John Cunningham",
    "loser_school": "Oklahoma",
    "result": "Dec 13-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "Robert Hockley",
    "loser_school": "Wyoming",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Ernie Fischer",
    "winner_school": "Maryland",
    "loser": "Harold Broughton",
    "loser_school": "Colorado State",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Joe Gattuso",
    "loser_school": "Navy",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Ernie Fischer",
    "winner_school": "Maryland",
    "loser": "Fred Davis",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "Fred Davis",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Ernie Fischer",
    "loser_school": "Maryland",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "John Cunningham",
    "winner_school": "Oklahoma",
    "loser": "Miles Gregory",
    "loser_school": "North Carolina",
    "result": "Dec 8-1"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Harold Broughton",
    "winner_school": "Colorado State",
    "loser": "Don Wem",
    "loser_school": "Toledo",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "John Cunningham",
    "loser_school": "Oklahoma",
    "result": "Fall 2:54"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "Harold Broughton",
    "loser_school": "Colorado State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Ned Blass",
    "winner_school": "Oklahoma State",
    "loser": "Dick Bonacci",
    "loser_school": "Toledo",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Ned Blass",
    "winner_school": "Oklahoma State",
    "loser": "Con Gerdes",
    "loser_school": "Iowa State",
    "result": "Fall 5:10"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Richard Anthony",
    "winner_school": "Indiana",
    "loser": "Tony Soscia",
    "loser_school": "West Chester",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Gene White",
    "winner_school": "Oklahoma",
    "loser": "Dan Segura",
    "loser_school": "Cornell Iowa",
    "result": "Fall 1:24"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Joe Krufka",
    "winner_school": "Penn State",
    "loser": "Fred Draayer",
    "loser_school": "Utah",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Royal Smith",
    "winner_school": "Colorado",
    "loser": "Dave Gallaher",
    "loser_school": "Lehigh",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "George Beresford",
    "winner_school": "Pittsburgh",
    "loser": "John Nickens",
    "loser_school": "Middle Tennessee",
    "result": "Fall 1:28"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Ahmet Senol",
    "winner_school": "Purdue",
    "loser": "Bob Marshall",
    "loser_school": "Colorado State",
    "result": "Fall 3:49"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Ted Weaver",
    "winner_school": "Kansas State",
    "loser": "Jule Moravec",
    "loser_school": "South Dakota State",
    "result": "Fall 8:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Ned Blass",
    "winner_school": "Oklahoma State",
    "loser": "Richard Anthony",
    "loser_school": "Indiana",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Joe Krufka",
    "winner_school": "Penn State",
    "loser": "Gene White",
    "loser_school": "Oklahoma",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Royal Smith",
    "winner_school": "Colorado",
    "loser": "George Beresford",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Ted Weaver",
    "winner_school": "Kansas State",
    "loser": "Ahmet Senol",
    "loser_school": "Purdue",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Ned Blass",
    "winner_school": "Oklahoma State",
    "loser": "Joe Krufka",
    "loser_school": "Penn State",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Royal Smith",
    "winner_school": "Colorado",
    "loser": "Ted Weaver",
    "loser_school": "Kansas State",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Joe Krufka",
    "winner_school": "Penn State",
    "loser": "Ted Weaver",
    "loser_school": "Kansas State",
    "result": "Fall 5:40"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Ned Blass",
    "winner_school": "Oklahoma State",
    "loser": "Royal Smith",
    "loser_school": "Colorado",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 275,
    "winner": "Dick Bonacci",
    "winner_school": "Toledo",
    "loser": "Con Gerdes",
    "loser_school": "Iowa State",
    "result": "Fall 1:40"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Richard Anthony",
    "winner_school": "Indiana",
    "loser": "Dick Bonacci",
    "loser_school": "Toledo",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "George Beresford",
    "winner_school": "Pittsburgh",
    "loser": "Dave Gallaher",
    "loser_school": "Lehigh",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Joe Krufka",
    "winner_school": "Penn State",
    "loser": "Richard Anthony",
    "loser_school": "Indiana",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Ted Weaver",
    "winner_school": "Kansas State",
    "loser": "George Beresford",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Peter Blair",
    "winner_school": "Navy",
    "loser": "John Robinson",
    "loser_school": "Brigham Young",
    "result": "Fall 1:49"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Doc Hearon",
    "loser_school": "Oklahoma",
    "result": "Fall 7:35"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Alan Evans",
    "winner_school": "South Dakota State",
    "loser": "James Mills",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "Streeter Shining",
    "winner_school": "Iowa",
    "loser": "Loren Reid",
    "loser_school": "Colorado State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Denny Krick",
    "winner_school": "Indiana",
    "loser": "Vaughn Hitchcock",
    "loser_school": "Washington State",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Peter Blair",
    "winner_school": "Navy",
    "loser": "Bill Oberly",
    "loser_school": "Penn State",
    "result": "Fall 3:39"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Gus Gatto",
    "winner_school": "Northern Iowa",
    "loser": "Alan Evans",
    "loser_school": "South Dakota State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Joe Comly",
    "winner_school": "Lehigh",
    "loser": "Streeter Shining",
    "loser_school": "Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Alex Sotir",
    "winner_school": "Springfield",
    "loser": "Denny Krick",
    "loser_school": "Indiana",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Peter Blair",
    "winner_school": "Navy",
    "loser": "Gus Gatto",
    "loser_school": "Northern Iowa",
    "result": "MD 9-1"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Joe Comly",
    "winner_school": "Lehigh",
    "loser": "Alex Sotir",
    "loser_school": "Springfield",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Streeter Shining",
    "loser_school": "Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Peter Blair",
    "winner_school": "Navy",
    "loser": "Joe Comly",
    "loser_school": "Lehigh",
    "result": "Dec 10-5"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "John Robinson",
    "loser_school": "Brigham Young",
    "result": "Fall 3:36"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Gus Gatto",
    "loser_school": "Northern Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Streeter Shining",
    "winner_school": "Iowa",
    "loser": "Alex Sotir",
    "loser_school": "Springfield",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Larry Fowler",
    "winner_school": "Michigan State",
    "loser": "Willis Holland",
    "loser_school": "Colorado State",
    "result": "Dec 6-6 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Gene Nicks",
    "winner_school": "Oklahoma State",
    "loser": "Larry Fowler",
    "loser_school": "Michigan State",
    "result": "Fall 7:00"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Max Kitzelman",
    "winner_school": "Nebraska",
    "loser": "Harold Hunter",
    "loser_school": "Pittsburgh",
    "result": "Fall 5:07"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Bob Konovsky",
    "winner_school": "Wisconsin",
    "loser": "Bill Hix",
    "loser_school": "Middle Tennessee",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Ken Ellis",
    "winner_school": "Kansas State",
    "loser": "Jack Ellena",
    "loser_school": "UCLA",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Gene Nicks",
    "winner_school": "Oklahoma State",
    "loser": "Max Kitzelman",
    "loser_school": "Nebraska",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Bob Konovsky",
    "winner_school": "Wisconsin",
    "loser": "Ken Ellis",
    "loser_school": "Kansas State",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Max Kitzelman",
    "winner_school": "Nebraska",
    "loser": "Ken Ellis",
    "loser_school": "Kansas State",
    "result": "Fall 3:30"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Gene Nicks",
    "winner_school": "Oklahoma State",
    "loser": "Bob Konovsky",
    "loser_school": "Wisconsin",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Max Kitzelman",
    "winner_school": "Nebraska",
    "loser": "Larry Fowler",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Ken Ellis",
    "winner_school": "Kansas State",
    "loser": "Bill Hix",
    "loser_school": "Middle Tennessee",
    "result": "WIN-NP"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
