// 1946 NCAA Division I Wrestling Championships (At Oklahoma State). Weight classes 121-UNL (8). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1946 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1946-provenance.js
const resultData = [
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 341,
    "winner": "Mike Rolak",
    "winner_school": "Indiana",
    "loser": "Cliff Fletcher",
    "loser_school": "Michigan State",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 343,
    "winner": "Cecil Mott",
    "winner_school": "Northern Iowa",
    "loser": "Bill Tomaras",
    "loser_school": "Illinois",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "121",
    "bout": 461,
    "winner": "Mike Rolak",
    "winner_school": "Indiana",
    "loser": "Dick Frye",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "121",
    "bout": 462,
    "winner": "Cecil Mott",
    "winner_school": "Northern Iowa",
    "loser": "Richard Kopel",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "121",
    "bout": 541,
    "winner": "Bill Tomaras",
    "winner_school": "Illinois",
    "loser": "Cliff Fletcher",
    "loser_school": "Michigan State",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "121",
    "bout": 551,
    "winner": "Cecil Mott",
    "winner_school": "Northern Iowa",
    "loser": "Mike Rolak",
    "loser_school": "Indiana",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "121",
    "bout": 421,
    "winner": "Cliff Fletcher",
    "winner_school": "Michigan State",
    "loser": "Dick Frye",
    "loser_school": "Oklahoma",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "121",
    "bout": 422,
    "winner": "Bill Tomaras",
    "winner_school": "Illinois",
    "loser": "Richard Kopel",
    "loser_school": "Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 182,
    "winner": "Sam Harry",
    "winner_school": "Penn State",
    "loser": "Ted Brothers",
    "loser_school": "Davidson",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 345,
    "winner": "Lou Kachiroubas",
    "winner_school": "Illinois",
    "loser": "T.A. Hearn",
    "loser_school": "North Carolina",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 346,
    "winner": "Sam Harry",
    "winner_school": "Penn State",
    "loser": "Harry Mangus",
    "loser_school": "Wyoming",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 347,
    "winner": "Iggy Konrad",
    "winner_school": "Michigan State",
    "loser": "Dick Thompson",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 348,
    "winner": "Gerry Leeman",
    "winner_school": "Northern Iowa",
    "loser": "Garth Lappin",
    "loser_school": "Minnesota",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "128",
    "bout": 463,
    "winner": "Lou Kachiroubas",
    "winner_school": "Illinois",
    "loser": "Sam Harry",
    "loser_school": "Penn State",
    "result": "MD 11-3"
  },
  {
    "round": "SemiFinals",
    "weight": "128",
    "bout": 464,
    "winner": "Gerry Leeman",
    "winner_school": "Northern Iowa",
    "loser": "Iggy Konrad",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "128",
    "bout": 542,
    "winner": "Sam Harry",
    "winner_school": "Penn State",
    "loser": "Iggy Konrad",
    "loser_school": "Michigan State",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "128",
    "bout": 552,
    "winner": "Gerry Leeman",
    "winner_school": "Northern Iowa",
    "loser": "Lou Kachiroubas",
    "loser_school": "Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "128",
    "bout": 423,
    "winner": "Sam Harry",
    "winner_school": "Penn State",
    "loser": "T.A. Hearn",
    "loser_school": "North Carolina",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "128",
    "bout": 424,
    "winner": "Iggy Konrad",
    "winner_school": "Michigan State",
    "loser": "Garth Lappin",
    "loser_school": "Minnesota",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 349,
    "winner": "L. Wayne Smith",
    "winner_school": "Michigan",
    "loser": "Gordon Fleiger",
    "loser_school": "Northern Colorado",
    "result": "MD 17-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 350,
    "winner": "Russ Bush",
    "winner_school": "Northern Iowa",
    "loser": "Robert Clark",
    "loser_school": "Kent State",
    "result": "Fall 8:49"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 351,
    "winner": "Elias George",
    "winner_school": "Indiana",
    "loser": "Joe Garcia",
    "loser_school": "Illinois",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "136",
    "bout": 465,
    "winner": "Russ Bush",
    "winner_school": "Northern Iowa",
    "loser": "L. Wayne Smith",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "136",
    "bout": 466,
    "winner": "David Arndt",
    "winner_school": "Oklahoma State",
    "loser": "Elias George",
    "loser_school": "Indiana",
    "result": "Dec 8-4"
  },
  {
    "round": "3rdPlace",
    "weight": "136",
    "bout": 543,
    "winner": "Elias George",
    "winner_school": "Indiana",
    "loser": "L. Wayne Smith",
    "loser_school": "Michigan",
    "result": "Dec 7-1"
  },
  {
    "round": "Finals",
    "weight": "136",
    "bout": 553,
    "winner": "David Arndt",
    "winner_school": "Oklahoma State",
    "loser": "Russ Bush",
    "loser_school": "Northern Iowa",
    "result": "MD 10-1"
  },
  {
    "round": "RepConsC",
    "weight": "136",
    "bout": 425,
    "winner": "L. Wayne Smith",
    "winner_school": "Michigan",
    "loser": "Robert Clark",
    "loser_school": "Kent State",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 353,
    "winner": "Gale Mikles",
    "winner_school": "Michigan State",
    "loser": "Sam Kramer",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 354,
    "winner": "Bill Koll",
    "winner_school": "Northern Iowa",
    "loser": "Duane Hague",
    "loser_school": "Kent State",
    "result": "Fall 1:10"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 355,
    "winner": "Tony Yamasaki",
    "winner_school": "Northern Colorado",
    "loser": "Jack Petry",
    "loser_school": "Illinois",
    "result": "Dec 18-17 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 467,
    "winner": "Bill Koll",
    "winner_school": "Northern Iowa",
    "loser": "Gale Mikles",
    "loser_school": "Michigan State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 468,
    "winner": "Edgar Welch",
    "winner_school": "Oklahoma State",
    "loser": "Tony Yamasaki",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-1"
  },
  {
    "round": "3rdPlace",
    "weight": "145",
    "bout": 544,
    "winner": "Gale Mikles",
    "winner_school": "Michigan State",
    "loser": "Tony Yamasaki",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "145",
    "bout": 554,
    "winner": "Bill Koll",
    "winner_school": "Northern Iowa",
    "loser": "Edgar Welch",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 427,
    "winner": "Gale Mikles",
    "winner_school": "Michigan State",
    "loser": "Duane Hague",
    "loser_school": "Kent State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 357,
    "winner": "Bill Courtright",
    "winner_school": "Michigan",
    "loser": "Kenneth Marlin",
    "loser_school": "Illinois",
    "result": "Fall 4:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 358,
    "winner": "John Dowell",
    "winner_school": "Michigan State",
    "loser": "W.J. Podrouzek",
    "loser_school": "Oklahoma",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 359,
    "winner": "Jack St. Clair",
    "winner_school": "Oklahoma State",
    "loser": "John Ball",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 360,
    "winner": "Dick Ditsworth",
    "winner_school": "Iowa State",
    "loser": "Newton Copple",
    "loser_school": "Nebraska",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "155",
    "bout": 469,
    "winner": "Bill Courtright",
    "winner_school": "Michigan",
    "loser": "John Dowell",
    "loser_school": "Michigan State",
    "result": "MD 9-0"
  },
  {
    "round": "SemiFinals",
    "weight": "155",
    "bout": 470,
    "winner": "Jack St. Clair",
    "winner_school": "Oklahoma State",
    "loser": "Dick Ditsworth",
    "loser_school": "Iowa State",
    "result": "MD 11-2"
  },
  {
    "round": "3rdPlace",
    "weight": "155",
    "bout": 545,
    "winner": "Dick Ditsworth",
    "winner_school": "Iowa State",
    "loser": "Kenneth Marlin",
    "loser_school": "Illinois",
    "result": "Fall 3:21"
  },
  {
    "round": "Finals",
    "weight": "155",
    "bout": 555,
    "winner": "Bill Courtright",
    "winner_school": "Michigan",
    "loser": "Jack St. Clair",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "155",
    "bout": 429,
    "winner": "Kenneth Marlin",
    "winner_school": "Illinois",
    "loser": "John Dowell",
    "loser_school": "Michigan State",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsC",
    "weight": "155",
    "bout": 430,
    "winner": "Dick Ditsworth",
    "winner_school": "Iowa State",
    "loser": "John Ball",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 361,
    "winner": "Harold Boker",
    "winner_school": "Nebraska",
    "loser": "Burl Boring",
    "loser_school": "Michigan State",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 471,
    "winner": "George Walker",
    "winner_school": "Oklahoma State",
    "loser": "Harold Boker",
    "loser_school": "Nebraska",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 472,
    "winner": "David Shapiro",
    "winner_school": "Illinois",
    "loser": "Gene Glass",
    "loser_school": "Kent State",
    "result": "MD 12-3"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 546,
    "winner": "Harold Boker",
    "winner_school": "Nebraska",
    "loser": "Gene Glass",
    "loser_school": "Kent State",
    "result": "MD 10-2"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 556,
    "winner": "David Shapiro",
    "winner_school": "Illinois",
    "loser": "George Walker",
    "loser_school": "Oklahoma State",
    "result": "MD 15-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 365,
    "winner": "George Dorsch",
    "winner_school": "Oklahoma State",
    "loser": "Joe Klune",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "175",
    "bout": 473,
    "winner": "George Dorsch",
    "winner_school": "Oklahoma State",
    "loser": "Jerome Brentar",
    "loser_school": "Michigan State",
    "result": "Dec 8-1"
  },
  {
    "round": "SemiFinals",
    "weight": "175",
    "bout": 474,
    "winner": "Norman Anthonisen",
    "winner_school": "Illinois",
    "loser": "Sigmund Golonka",
    "loser_school": "Indiana",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "175",
    "bout": 547,
    "winner": "Sigmund Golonka",
    "winner_school": "Indiana",
    "loser": "Joe Klune",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-0"
  },
  {
    "round": "Finals",
    "weight": "175",
    "bout": 557,
    "winner": "George Dorsch",
    "winner_school": "Oklahoma State",
    "loser": "Norman Anthonisen",
    "loser_school": "Illinois",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsC",
    "weight": "175",
    "bout": 433,
    "winner": "Joe Klune",
    "winner_school": "Northern Colorado",
    "loser": "Jerome Brentar",
    "loser_school": "Michigan State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 369,
    "winner": "George Bollas",
    "winner_school": "Ohio State",
    "loser": "Charles Gottfried",
    "loser_school": "Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 370,
    "winner": "Loyd Arms",
    "winner_school": "Oklahoma State",
    "loser": "Bob Maldegan",
    "loser_school": "Michigan State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 371,
    "winner": "Morris Chittwood",
    "winner_school": "Indiana",
    "loser": "Glen Brand",
    "loser_school": "Iowa State",
    "result": "Fall 8:42"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 475,
    "winner": "George Bollas",
    "winner_school": "Ohio State",
    "loser": "Loyd Arms",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 476,
    "winner": "Morris Chittwood",
    "winner_school": "Indiana",
    "loser": "Al Crawford",
    "loser_school": "North Carolina",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 548,
    "winner": "Glen Brand",
    "winner_school": "Iowa State",
    "loser": "Loyd Arms",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 558,
    "winner": "George Bollas",
    "winner_school": "Ohio State",
    "loser": "Morris Chittwood",
    "loser_school": "Indiana",
    "result": "Fall 14:11"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 435,
    "winner": "Loyd Arms",
    "winner_school": "Oklahoma State",
    "loser": "Charles Gottfried",
    "loser_school": "Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 436,
    "winner": "Glen Brand",
    "winner_school": "Iowa State",
    "loser": "Al Crawford",
    "loser_school": "North Carolina",
    "result": "M FOR"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
