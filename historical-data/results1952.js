// 1952 NCAA Division I Wrestling Championships (3/28/1952 to 3/29/1952 at Colorado State). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1952 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1952-provenance.js
const resultData = [
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Ted Bredehoft",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Richard Meeks",
    "winner_school": "Illinois",
    "loser": "Jimmy Miller",
    "loser_school": "Colorado State",
    "result": "Fall 3:55"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Robert Carlin",
    "winner_school": "Indiana",
    "loser": "Jerry Haynes",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Richard Meeks",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Will Howard",
    "winner_school": "Denver",
    "loser": "Robert Carlin",
    "loser_school": "Indiana",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Richard Meeks",
    "winner_school": "Illinois",
    "loser": "Robert Carlin",
    "loser_school": "Indiana",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Will Howard",
    "loser_school": "Denver",
    "result": "Dec 13-6"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Robert Carlin",
    "winner_school": "Indiana",
    "loser": "Ted Bredehoft",
    "loser_school": "Cornell Iowa",
    "result": "Fall 3:33"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Larry Nonnie",
    "winner_school": "Northern Colorado",
    "loser": "Joe Lobaugh",
    "loser_school": "Oklahoma State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Pat McCarron",
    "winner_school": "Northern Iowa",
    "loser": "Bob Homan",
    "loser_school": "Penn State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "Lou Kachiroubas",
    "loser_school": "Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Bob Mancuso",
    "winner_school": "Kansas State",
    "loser": "Arnold Wilson",
    "loser_school": "Brigham Young",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Harry Arthur",
    "winner_school": "Indiana",
    "loser": "Larry Nonnie",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Pat McCarron",
    "winner_school": "Northern Iowa",
    "loser": "Paul Boyko",
    "loser_school": "Toledo",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "John Lee",
    "loser_school": "Harvard",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Bob Mancuso",
    "winner_school": "Kansas State",
    "loser": "George Artemis",
    "loser_school": "Colorado",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Harry Arthur",
    "winner_school": "Indiana",
    "loser": "Pat McCarron",
    "loser_school": "Northern Iowa",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "Bob Mancuso",
    "loser_school": "Kansas State",
    "result": "Dec 10-3"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Lou Kachiroubas",
    "winner_school": "Illinois",
    "loser": "John Lee",
    "loser_school": "Harvard",
    "result": "Dec 5-0"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Bill Borders",
    "winner_school": "Oklahoma",
    "loser": "Harry Arthur",
    "loser_school": "Indiana",
    "result": "MD 15-6"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Lou Kachiroubas",
    "winner_school": "Illinois",
    "loser": "Larry Nonnie",
    "loser_school": "Northern Colorado",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Lou Kachiroubas",
    "winner_school": "Illinois",
    "loser": "Bob Mancuso",
    "loser_school": "Kansas State",
    "result": "Fall 3:42"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "John Lee",
    "winner_school": "Harvard",
    "loser": "Pat McCarron",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Bob Datteri",
    "winner_school": "Colorado State",
    "loser": "Richard Leffler",
    "loser_school": "Toledo",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "George Lewis",
    "winner_school": "Waynesburg",
    "loser": "Linn Long",
    "loser_school": "Colorado",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "Robert Speck",
    "loser_school": "Brigham Young",
    "result": "Fall 1:11"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Gene Lybbert",
    "winner_school": "Northern Iowa",
    "loser": "Phil Duggan",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Dick Lemyre",
    "winner_school": "Penn State",
    "loser": "Merele Dunn",
    "loser_school": "Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Don Meeker",
    "winner_school": "Oklahoma State",
    "loser": "Lester Kroeger",
    "loser_school": "Northern Colorado",
    "result": "Fall 1:25"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Donald Reece",
    "winner_school": "Oklahoma",
    "loser": "Bob Datteri",
    "loser_school": "Colorado State",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "George Lewis",
    "winner_school": "Waynesburg",
    "loser": "Norvard Nalan",
    "loser_school": "Michigan",
    "result": "Dec 12-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Gene Lybbert",
    "winner_school": "Northern Iowa",
    "loser": "Louis Oscarson",
    "loser_school": "Iowa State",
    "result": "Dec 12-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Dick Lemyre",
    "winner_school": "Penn State",
    "loser": "Don Meeker",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Donald Reece",
    "winner_school": "Oklahoma",
    "loser": "George Lewis",
    "loser_school": "Waynesburg",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Gene Lybbert",
    "winner_school": "Northern Iowa",
    "loser": "Dick Lemyre",
    "loser_school": "Penn State",
    "result": "Dec 11-8"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Dick Lemyre",
    "winner_school": "Penn State",
    "loser": "George Lewis",
    "loser_school": "Waynesburg",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Gene Lybbert",
    "winner_school": "Northern Iowa",
    "loser": "Donald Reece",
    "loser_school": "Oklahoma",
    "result": "Dec 8-1"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Phil Duggan",
    "winner_school": "Iowa",
    "loser": "Bob Datteri",
    "loser_school": "Colorado State",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "George Lewis",
    "winner_school": "Waynesburg",
    "loser": "Don Meeker",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Dick Lemyre",
    "winner_school": "Penn State",
    "loser": "Phil Duggan",
    "loser_school": "Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Bob Morris",
    "winner_school": "Northern Iowa",
    "loser": "Dick Gunner",
    "loser_school": "Michigan State",
    "result": "Fall 6:00"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Len DeAugustino",
    "winner_school": "Lock Haven",
    "loser": "Phil Rollins",
    "loser_school": "Brigham Young",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Harold Reece",
    "winner_school": "Oklahoma",
    "loser": "Delbert Lockwood",
    "loser_school": "Colorado State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Rod Norris",
    "winner_school": "Maryland",
    "loser": "Warren DePrenger",
    "loser_school": "Cornell Iowa",
    "result": "Fall 6:45"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "George Layman",
    "winner_school": "Oklahoma State",
    "loser": "Sam Costanza",
    "loser_school": "Wisconsin",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Leo Ballinger",
    "winner_school": "Wyoming",
    "loser": "Sam Ruzic",
    "loser_school": "Iowa State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Norton Compton",
    "winner_school": "Illinois",
    "loser": "Lyle Neville",
    "loser_school": "Colorado",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Bob Morris",
    "winner_school": "Northern Iowa",
    "loser": "Len DeAugustino",
    "loser_school": "Lock Haven",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Harold Reece",
    "winner_school": "Oklahoma",
    "loser": "Rod Norris",
    "loser_school": "Maryland",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "George Layman",
    "winner_school": "Oklahoma State",
    "loser": "Leo Ballinger",
    "loser_school": "Wyoming",
    "result": "MD 11-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Norton Compton",
    "winner_school": "Illinois",
    "loser": "George Feuerbach",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Bob Morris",
    "winner_school": "Northern Iowa",
    "loser": "Harold Reece",
    "loser_school": "Oklahoma",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "George Layman",
    "winner_school": "Oklahoma State",
    "loser": "Norton Compton",
    "loser_school": "Illinois",
    "result": "Dec 9-2"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Harold Reece",
    "winner_school": "Oklahoma",
    "loser": "Norton Compton",
    "loser_school": "Illinois",
    "result": "Dec 8-5"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "George Layman",
    "winner_school": "Oklahoma State",
    "loser": "Bob Morris",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Leo Ballinger",
    "winner_school": "Wyoming",
    "loser": "Delbert Lockwood",
    "loser_school": "Colorado State",
    "result": "Fall 5:13"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Sam Costanza",
    "winner_school": "Wisconsin",
    "loser": "Len DeAugustino",
    "loser_school": "Lock Haven",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Harold Reece",
    "winner_school": "Oklahoma",
    "loser": "Leo Ballinger",
    "loser_school": "Wyoming",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Norton Compton",
    "winner_school": "Illinois",
    "loser": "Sam Costanza",
    "loser_school": "Wisconsin",
    "result": "Dec 10-10 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Charles Uram",
    "winner_school": "Pittsburgh",
    "loser": "Jim Ellis",
    "loser_school": "Indiana",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Tom Porter",
    "loser_school": "Colorado State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Larry Brown",
    "loser_school": "Northern Colorado",
    "result": "Fall 4:25"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Bill French",
    "winner_school": "Colorado",
    "loser": "Bob Lutz",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Jim Harmon",
    "winner_school": "Northern Iowa",
    "loser": "Charles Uram",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Jim Miller",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Walt Christman",
    "loser_school": "South Dakota State",
    "result": "Fall 4:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Miles Lee",
    "winner_school": "Michigan",
    "loser": "Bill French",
    "loser_school": "Colorado",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Jim Harmon",
    "winner_school": "Northern Iowa",
    "loser": "Byron Todd",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Miles Lee",
    "loser_school": "Michigan",
    "result": "Dec 14-8"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Miles Lee",
    "winner_school": "Michigan",
    "loser": "Byron Todd",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-0"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Tommy Evans",
    "winner_school": "Oklahoma",
    "loser": "Jim Harmon",
    "loser_school": "Northern Iowa",
    "result": "MD 16-2"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Charles Uram",
    "winner_school": "Pittsburgh",
    "loser": "Larry Brown",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Byron Todd",
    "winner_school": "Oklahoma State",
    "loser": "Walt Christman",
    "loser_school": "South Dakota State",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Miles Lee",
    "winner_school": "Michigan",
    "loser": "Charles Uram",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Tom Titsworth",
    "winner_school": "Oklahoma State",
    "loser": "Bryan Osburn",
    "loser_school": "UCLA",
    "result": "Fall 8:40"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Don Ryan",
    "winner_school": "Wisconsin",
    "loser": "Leslie Kramer",
    "loser_school": "Kansas State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Emil Perona",
    "winner_school": "Rutgers",
    "loser": "Will Lynch",
    "loser_school": "Colorado",
    "result": "Fall 2:21"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Bob Fischer",
    "loser_school": "Maryland",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Don Govoni",
    "winner_school": "Northern Colorado",
    "loser": "Tom Lewis",
    "loser_school": "Waynesburg",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Bryan Rayburn",
    "winner_school": "Oklahoma",
    "loser": "Dan Sniff",
    "loser_school": "Colorado State",
    "result": "Dec 12-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Tom Titsworth",
    "winner_school": "Oklahoma State",
    "loser": "Don Ryan",
    "loser_school": "Wisconsin",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Emil Perona",
    "winner_school": "Rutgers",
    "loser": "Robert Hockley",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Joe Solomon",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Don Govoni",
    "winner_school": "Northern Colorado",
    "loser": "Bryan Rayburn",
    "loser_school": "Oklahoma",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Tom Titsworth",
    "winner_school": "Oklahoma State",
    "loser": "Emil Perona",
    "loser_school": "Rutgers",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Don Govoni",
    "loser_school": "Northern Colorado",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Don Govoni",
    "winner_school": "Northern Colorado",
    "loser": "Emil Perona",
    "loser_school": "Rutgers",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Tom Titsworth",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Bryan Osburn",
    "loser_school": "UCLA",
    "result": "Dec 8-2"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Bob Fischer",
    "winner_school": "Maryland",
    "loser": "Don Ryan",
    "loser_school": "Wisconsin",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Emil Perona",
    "winner_school": "Rutgers",
    "loser": "Joe Solomon",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Don Govoni",
    "winner_school": "Northern Colorado",
    "loser": "Bob Fischer",
    "loser_school": "Maryland",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "George Graveson",
    "winner_school": "Yale",
    "loser": "Harold Rusk",
    "loser_school": "Northern Colorado",
    "result": "Fall 6:26"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "George Bender",
    "winner_school": "Michigan State",
    "loser": "Royal Smith",
    "loser_school": "Colorado",
    "result": "Fall 8:21"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "George Graveson",
    "winner_school": "Yale",
    "loser": "Ken Prihoda",
    "loser_school": "Minnesota State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Frank Marks",
    "winner_school": "Oklahoma",
    "loser": "Martin Schwartz",
    "loser_school": "Illinois",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Bud Weick",
    "winner_school": "Northern Iowa",
    "loser": "Ernie Fischer",
    "loser_school": "Maryland",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Joe Lemyre",
    "winner_school": "Penn State",
    "loser": "Warren Sonnenman",
    "loser_school": "Cornell Iowa",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Ralph Schneider",
    "winner_school": "Waynesburg",
    "loser": "Harold Broughton",
    "loser_school": "Colorado State",
    "result": "Fall 3:34"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Don Heaton",
    "winner_school": "Iowa",
    "loser": "Carl Wood",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Bill Mosby",
    "winner_school": "Oregon State",
    "loser": "Jay Hafen",
    "loser_school": "Brigham Young",
    "result": "Fall 4:52"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "George Bender",
    "winner_school": "Michigan State",
    "loser": "George Graveson",
    "loser_school": "Yale",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Frank Marks",
    "winner_school": "Oklahoma",
    "loser": "Bud Weick",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Joe Lemyre",
    "winner_school": "Penn State",
    "loser": "Ralph Schneider",
    "loser_school": "Waynesburg",
    "result": "Dec 13-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Don Heaton",
    "winner_school": "Iowa",
    "loser": "Bill Mosby",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "George Bender",
    "winner_school": "Michigan State",
    "loser": "Frank Marks",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Joe Lemyre",
    "winner_school": "Penn State",
    "loser": "Don Heaton",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Ralph Schneider",
    "winner_school": "Waynesburg",
    "loser": "Warren Sonnenman",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Joe Lemyre",
    "winner_school": "Penn State",
    "loser": "George Bender",
    "loser_school": "Michigan State",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Ralph Schneider",
    "winner_school": "Waynesburg",
    "loser": "Royal Smith",
    "loser_school": "Colorado",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Warren Sonnenman",
    "winner_school": "Cornell Iowa",
    "loser": "George Graveson",
    "loser_school": "Yale",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Ralph Schneider",
    "winner_school": "Waynesburg",
    "loser": "Frank Marks",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Warren Sonnenman",
    "winner_school": "Cornell Iowa",
    "loser": "Don Heaton",
    "loser_school": "Iowa",
    "result": "Fall 3:30"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Bentley Lyon",
    "winner_school": "California-Berkeley",
    "loser": "Ted Weaver",
    "loser_school": "Kansas State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Ray Vohden",
    "winner_school": "Rutgers",
    "loser": "Ray Carlson",
    "loser_school": "Waynesburg",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Ed Lanzi",
    "winner_school": "Toledo",
    "loser": "Ned Blass",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Maynard Skinner",
    "winner_school": "Colorado",
    "loser": "Larry Cotton",
    "loser_school": "Oklahoma",
    "result": "Fall 2:30"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Peter Blair",
    "winner_school": "Navy",
    "loser": "Bob Wirds",
    "loser_school": "Iowa State",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Bentley Lyon",
    "winner_school": "California-Berkeley",
    "loser": "Ray Vohden",
    "loser_school": "Rutgers",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Dewey McConnell",
    "winner_school": "Wyoming",
    "loser": "Ed Lanzi",
    "loser_school": "Toledo",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Maynard Skinner",
    "winner_school": "Colorado",
    "loser": "Drew Shumway",
    "loser_school": "Brigham Young",
    "result": "Fall 6:23"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Gus Gatto",
    "winner_school": "Northern Iowa",
    "loser": "Peter Blair",
    "loser_school": "Navy",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Bentley Lyon",
    "winner_school": "California-Berkeley",
    "loser": "Dewey McConnell",
    "loser_school": "Wyoming",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Maynard Skinner",
    "winner_school": "Colorado",
    "loser": "Gus Gatto",
    "loser_school": "Northern Iowa",
    "result": "Fall 5:48"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Ted Weaver",
    "winner_school": "Kansas State",
    "loser": "Ray Vohden",
    "loser_school": "Rutgers",
    "result": "Dec 5-0"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Bentley Lyon",
    "winner_school": "California-Berkeley",
    "loser": "Maynard Skinner",
    "loser_school": "Colorado",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Ted Weaver",
    "winner_school": "Kansas State",
    "loser": "Drew Shumway",
    "loser_school": "Brigham Young",
    "result": "Fall 2:44"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Ray Vohden",
    "winner_school": "Rutgers",
    "loser": "Larry Cotton",
    "loser_school": "Oklahoma",
    "result": "Dec 8-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Ted Weaver",
    "winner_school": "Kansas State",
    "loser": "Dewey McConnell",
    "loser_school": "Wyoming",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Ray Vohden",
    "winner_school": "Rutgers",
    "loser": "Gus Gatto",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Brad Glass",
    "winner_school": "Princeton",
    "loser": "Ron Zielinski",
    "loser_school": "Oregon State",
    "result": "Fall 4:03"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Harry Lanzi",
    "winner_school": "Toledo",
    "loser": "Wilbanks Smith",
    "loser_school": "Oklahoma State",
    "result": "Fall 3:28"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "George Myers",
    "winner_school": "Iowa",
    "loser": "Joe Butler",
    "loser_school": "Oklahoma",
    "result": "Dec 14-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Brad Glass",
    "winner_school": "Princeton",
    "loser": "Bob Schalk",
    "loser_school": "Colorado",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Harry Lanzi",
    "winner_school": "Toledo",
    "loser": "Alan Evans",
    "loser_school": "South Dakota State",
    "result": "Fall 1:40"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Mel Walden",
    "winner_school": "Iowa State",
    "loser": "William Zanetakos",
    "loser_school": "Illinois",
    "result": "Fall 1:52"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "George Myers",
    "winner_school": "Iowa",
    "loser": "Brad Glass",
    "loser_school": "Princeton",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Harry Lanzi",
    "winner_school": "Toledo",
    "loser": "Mel Walden",
    "loser_school": "Iowa State",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Brad Glass",
    "winner_school": "Princeton",
    "loser": "Joe Butler",
    "loser_school": "Oklahoma",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Harry Lanzi",
    "winner_school": "Toledo",
    "loser": "George Myers",
    "loser_school": "Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Joe Butler",
    "winner_school": "Oklahoma",
    "loser": "Alan Evans",
    "loser_school": "South Dakota State",
    "result": "MD 11-3"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Brad Glass",
    "winner_school": "Princeton",
    "loser": "Wilbanks Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Joe Butler",
    "winner_school": "Oklahoma",
    "loser": "Mel Walden",
    "loser_school": "Iowa State",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "John Witte",
    "winner_school": "Oregon State",
    "loser": "Dick Torio",
    "loser_school": "Toledo",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Jack Dorfman",
    "winner_school": "Minnesota",
    "loser": "Norm Bertoia",
    "loser_school": "Northern Colorado",
    "result": "WIN-NP"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Gene Nicks",
    "winner_school": "Oklahoma State",
    "loser": "Ed Valtoney",
    "loser_school": "Waynesburg",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Bob Schildgen",
    "winner_school": "Wyoming",
    "loser": "Dick Read",
    "loser_school": "Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "John Witte",
    "winner_school": "Oregon State",
    "loser": "Jack Dorfman",
    "loser_school": "Minnesota",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Gene Nicks",
    "winner_school": "Oklahoma State",
    "loser": "Bob Schildgen",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Ed Valtoney",
    "winner_school": "Waynesburg",
    "loser": "Dick Torio",
    "loser_school": "Toledo",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Gene Nicks",
    "winner_school": "Oklahoma State",
    "loser": "John Witte",
    "loser_school": "Oregon State",
    "result": "Fall 4:19"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Ed Valtoney",
    "winner_school": "Waynesburg",
    "loser": "Jack Dorfman",
    "loser_school": "Minnesota",
    "result": "Fall 5:01"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Dick Torio",
    "winner_school": "Toledo",
    "loser": "Bob Schildgen",
    "loser_school": "Wyoming",
    "result": "Dec 1-1 UTB"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
