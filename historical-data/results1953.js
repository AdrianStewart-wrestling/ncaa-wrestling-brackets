// 1953 NCAA Division I Wrestling Championships (3/28/1953 to 3/29/1953 at Penn State). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1953 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1953-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Art Helf",
    "winner_school": "Franklin and Marshall",
    "loser": "Ruben Shehigian",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Richard Meeks",
    "loser_school": "Illinois",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Bill Cramp",
    "winner_school": "Penn State",
    "loser": "Billy Jackson",
    "loser_school": "Arkansas State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Bob Christensen",
    "winner_school": "Northwestern",
    "loser": "Gary McClain",
    "loser_school": "Oregon State",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Ed Dawkins",
    "winner_school": "Ursinus",
    "loser": "Charles Ofsthun",
    "loser_school": "Minnesota",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Art Helf",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Bob Christensen",
    "winner_school": "Northwestern",
    "loser": "Bill Cramp",
    "loser_school": "Penn State",
    "result": "Fall 5:01"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Robert Whelan",
    "winner_school": "SIU-Carbondale",
    "loser": "George Custer",
    "loser_school": "Lock Haven",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Ed Dawkins",
    "loser_school": "Ursinus",
    "result": "MD 11-1"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Bob Christensen",
    "winner_school": "Northwestern",
    "loser": "Robert Whelan",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Richard Meeks",
    "winner_school": "Illinois",
    "loser": "Art Helf",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Hugh Peery",
    "winner_school": "Pittsburgh",
    "loser": "Bob Christensen",
    "loser_school": "Northwestern",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Art Helf",
    "winner_school": "Franklin and Marshall",
    "loser": "Bill Cramp",
    "loser_school": "Penn State",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Richard Meeks",
    "winner_school": "Illinois",
    "loser": "Gary McClain",
    "loser_school": "Oregon State",
    "result": "MD 12-0"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Art Helf",
    "winner_school": "Franklin and Marshall",
    "loser": "Robert Whelan",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Richard Meeks",
    "winner_school": "Illinois",
    "loser": "Ed Dawkins",
    "loser_school": "Ursinus",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 30,
    "winner": "Rex Boda",
    "winner_school": "Cornell",
    "loser": "Yukio Matsumoto",
    "loser_school": "Illinois",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Pat McCarron",
    "winner_school": "Northern Iowa",
    "loser": "Bob Karns",
    "loser_school": "Army",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 36,
    "winner": "Richard Hockley",
    "winner_school": "Wyoming",
    "loser": "Donald Stubblebine",
    "loser_school": "Springfield",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 40,
    "winner": "Al Crancer",
    "winner_school": "Arkansas State",
    "loser": "Bob Homan",
    "loser_school": "Penn State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Donald Reece",
    "winner_school": "Oklahoma",
    "loser": "Ted Bredehoft",
    "loser_school": "Cornell Iowa",
    "result": "Fall 8:45"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Bob Mancuso",
    "winner_school": "Kansas State",
    "loser": "Rex Boda",
    "loser_school": "Cornell",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Jack Herschend",
    "winner_school": "Northwestern",
    "loser": "Alex McCord",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Pat McCarron",
    "winner_school": "Northern Iowa",
    "loser": "Paul Boyko",
    "loser_school": "Toledo",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Richard Hockley",
    "winner_school": "Wyoming",
    "loser": "Dick Gibson",
    "loser_school": "Washington State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "John Lee",
    "winner_school": "Harvard",
    "loser": "Glenn Flegal",
    "loser_school": "Millersville",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Al Crancer",
    "winner_school": "Arkansas State",
    "loser": "Arnold Wilson",
    "loser_school": "Brigham Young",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Dick Mueller",
    "winner_school": "Minnesota",
    "loser": "Joe Lobaugh",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Donald Reece",
    "winner_school": "Oklahoma",
    "loser": "Bob Mancuso",
    "loser_school": "Kansas State",
    "result": "Fall 5:34"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Pat McCarron",
    "winner_school": "Northern Iowa",
    "loser": "Jack Herschend",
    "loser_school": "Northwestern",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "John Lee",
    "winner_school": "Harvard",
    "loser": "Richard Hockley",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Dick Mueller",
    "winner_school": "Minnesota",
    "loser": "Al Crancer",
    "loser_school": "Arkansas State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Donald Reece",
    "winner_school": "Oklahoma",
    "loser": "Pat McCarron",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Dick Mueller",
    "winner_school": "Minnesota",
    "loser": "John Lee",
    "loser_school": "Harvard",
    "result": "Dec 7-1"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Pat McCarron",
    "winner_school": "Northern Iowa",
    "loser": "John Lee",
    "loser_school": "Harvard",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Dick Mueller",
    "winner_school": "Minnesota",
    "loser": "Donald Reece",
    "loser_school": "Oklahoma",
    "result": "Fall 4:45"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Al Crancer",
    "winner_school": "Arkansas State",
    "loser": "Bob Mancuso",
    "loser_school": "Kansas State",
    "result": "Dec 9-4"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Ted Bredehoft",
    "winner_school": "Cornell Iowa",
    "loser": "Joe Lobaugh",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "John Lee",
    "winner_school": "Harvard",
    "loser": "Al Crancer",
    "loser_school": "Arkansas State",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Pat McCarron",
    "winner_school": "Northern Iowa",
    "loser": "Ted Bredehoft",
    "loser_school": "Cornell Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Ken Faust",
    "winner_school": "Lehigh",
    "loser": "Al Motley",
    "loser_school": "Virginia Tech",
    "result": "Fall 5:13"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Bob Datteri",
    "winner_school": "Colorado State",
    "loser": "Dick Robinson",
    "loser_school": "San Diego State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Richard Leffler",
    "winner_school": "Toledo",
    "loser": "Raymond Downey",
    "loser_school": "Auburn",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "Maris Williams",
    "loser_school": "South Dakota State",
    "result": "Fall 7:11"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Dick Lemyre",
    "winner_school": "Penn State",
    "loser": "Ed Casalicchio",
    "loser_school": "Michigan State",
    "result": "Fall 0:49"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Jim Howard",
    "winner_school": "Ithaca",
    "loser": "Phil Duggan",
    "loser_school": "Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Linn Long",
    "winner_school": "Colorado",
    "loser": "Jerry Rollins",
    "loser_school": "Brigham Young",
    "result": "Fall 7:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Bob Datteri",
    "winner_school": "Colorado State",
    "loser": "Ken Faust",
    "loser_school": "Lehigh",
    "result": "Fall 8:16"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "Richard Leffler",
    "loser_school": "Toledo",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Dick Lemyre",
    "winner_school": "Penn State",
    "loser": "Jim Howard",
    "loser_school": "Ithaca",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Harold Reece",
    "winner_school": "Oklahoma",
    "loser": "Linn Long",
    "loser_school": "Colorado",
    "result": "Fall 4:22"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "Bob Datteri",
    "loser_school": "Colorado State",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Dick Lemyre",
    "winner_school": "Penn State",
    "loser": "Harold Reece",
    "loser_school": "Oklahoma",
    "result": "Dec 6-6 UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Jim Howard",
    "winner_school": "Ithaca",
    "loser": "Ed Casalicchio",
    "loser_school": "Michigan State",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Norvard Nalan",
    "winner_school": "Michigan",
    "loser": "Dick Lemyre",
    "loser_school": "Penn State",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Jim Howard",
    "winner_school": "Ithaca",
    "loser": "Richard Leffler",
    "loser_school": "Toledo",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Ed Casalicchio",
    "winner_school": "Michigan State",
    "loser": "Maris Williams",
    "loser_school": "South Dakota State",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Jim Howard",
    "winner_school": "Ithaca",
    "loser": "Harold Reece",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Ed Casalicchio",
    "winner_school": "Michigan State",
    "loser": "Bob Datteri",
    "loser_school": "Colorado State",
    "result": "Fall"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Benny Jordan",
    "winner_school": "Brigham Young",
    "loser": "Eddison Hairston",
    "loser_school": "Lincoln",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 68,
    "winner": "George Matthews",
    "winner_school": "Pittsburgh",
    "loser": "Wes Sterner",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Len DeAugustino",
    "winner_school": "Lock Haven",
    "loser": "Don Austin",
    "loser_school": "Arkansas State",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Gerry Maurey",
    "winner_school": "Penn State",
    "loser": "Sam Ruzic",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Ron Scott",
    "winner_school": "Oklahoma",
    "loser": "Andrew Kaul",
    "loser_school": "Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Benny Jordan",
    "winner_school": "Brigham Young",
    "loser": "Mark Murray",
    "loser_school": "Cornell Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Norton Compton",
    "winner_school": "Illinois",
    "loser": "George Matthews",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Delance Duncan",
    "winner_school": "Washington State",
    "loser": "John Woodward",
    "loser_school": "Colorado State",
    "result": "Fall 8:03"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Rod Norris",
    "winner_school": "Maryland",
    "loser": "Cletus Blegen",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Donald Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Bill Miller",
    "loser_school": "Toledo",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Len DeAugustino",
    "winner_school": "Lock Haven",
    "loser": "Gerry Maurey",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Ron Scott",
    "winner_school": "Oklahoma",
    "loser": "Benny Jordan",
    "loser_school": "Brigham Young",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Norton Compton",
    "winner_school": "Illinois",
    "loser": "Delance Duncan",
    "loser_school": "Washington State",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Donald Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Rod Norris",
    "loser_school": "Maryland",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Len DeAugustino",
    "winner_school": "Lock Haven",
    "loser": "Ron Scott",
    "loser_school": "Oklahoma",
    "result": "Dec 9-6"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Norton Compton",
    "winner_school": "Illinois",
    "loser": "Donald Thompson",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-0"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Gerry Maurey",
    "winner_school": "Penn State",
    "loser": "Ron Scott",
    "loser_school": "Oklahoma",
    "result": "MD 10-2"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Len DeAugustino",
    "winner_school": "Lock Haven",
    "loser": "Norton Compton",
    "loser_school": "Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Bill Miller",
    "winner_school": "Toledo",
    "loser": "Don Austin",
    "loser_school": "Arkansas State",
    "result": "DEF"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Gerry Maurey",
    "winner_school": "Penn State",
    "loser": "Delance Duncan",
    "loser_school": "Washington State",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Ron Scott",
    "winner_school": "Oklahoma",
    "loser": "Bill Miller",
    "loser_school": "Toledo",
    "result": "MD 11-1"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Gerry Maurey",
    "winner_school": "Penn State",
    "loser": "Donald Thompson",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Frank Bettucci",
    "winner_school": "Cornell",
    "loser": "Warren DePrenger",
    "loser_school": "Cornell Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Joe Scandura",
    "winner_school": "Michigan",
    "loser": "Matt Midea",
    "loser_school": "Lock Haven",
    "result": "Fall 5:02"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 84,
    "winner": "Bryan Rayburn",
    "winner_school": "Oklahoma",
    "loser": "Bill Garland",
    "loser_school": "Indiana",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Charles Uram",
    "winner_school": "Pittsburgh",
    "loser": "Bill Ellwood",
    "loser_school": "Northwestern",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Frank Bettucci",
    "winner_school": "Cornell",
    "loser": "Leo Ballinger",
    "loser_school": "Wyoming",
    "result": "Fall 5:14"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Don Frey",
    "winner_school": "Penn State",
    "loser": "Jerry Bains",
    "loser_school": "Auburn",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Ian MacEwan",
    "winner_school": "Kent State",
    "loser": "Joe Scandura",
    "loser_school": "Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Bob Morris",
    "winner_school": "Northern Iowa",
    "loser": "Bryan Rayburn",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Ed Brown",
    "winner_school": "VMI",
    "loser": "Robert Speck",
    "loser_school": "Brigham Young",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Bob Hoke",
    "winner_school": "Michigan State",
    "loser": "Clayton Carothers",
    "loser_school": "Lincoln",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Tom Titsworth",
    "winner_school": "Oklahoma State",
    "loser": "Delbert Lockwood",
    "loser_school": "Colorado State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Frank Bettucci",
    "winner_school": "Cornell",
    "loser": "Charles Uram",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Don Frey",
    "winner_school": "Penn State",
    "loser": "Ian MacEwan",
    "loser_school": "Kent State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Bob Morris",
    "winner_school": "Northern Iowa",
    "loser": "Ed Brown",
    "loser_school": "VMI",
    "result": "Fall 5:33"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Bob Hoke",
    "winner_school": "Michigan State",
    "loser": "Tom Titsworth",
    "loser_school": "Oklahoma State",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Frank Bettucci",
    "winner_school": "Cornell",
    "loser": "Don Frey",
    "loser_school": "Penn State",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Bob Hoke",
    "winner_school": "Michigan State",
    "loser": "Bob Morris",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Don Frey",
    "winner_school": "Penn State",
    "loser": "Charles Uram",
    "loser_school": "Pittsburgh",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Frank Bettucci",
    "winner_school": "Cornell",
    "loser": "Bob Hoke",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 270,
    "winner": "Leo Ballinger",
    "winner_school": "Wyoming",
    "loser": "Warren DePrenger",
    "loser_school": "Cornell Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Charles Uram",
    "winner_school": "Pittsburgh",
    "loser": "Tom Titsworth",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Leo Ballinger",
    "winner_school": "Wyoming",
    "loser": "Clayton Carothers",
    "loser_school": "Lincoln",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Charles Uram",
    "winner_school": "Pittsburgh",
    "loser": "Bob Morris",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Don Frey",
    "winner_school": "Penn State",
    "loser": "Leo Ballinger",
    "loser_school": "Wyoming",
    "result": "Fall 5:40"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 93,
    "winner": "Doug Frey",
    "winner_school": "Penn State",
    "loser": "Bill Bock",
    "loser_school": "Springfield",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "Budd Whitehill",
    "loser_school": "Lock Haven",
    "result": "Fall 4:47"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "John Eagleton",
    "winner_school": "Oklahoma",
    "loser": "Jim Miller",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 98,
    "winner": "Don Strevey",
    "winner_school": "Oklahoma State",
    "loser": "Gerry Tebben",
    "loser_school": "Army",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 99,
    "winner": "Jim Ellis",
    "winner_school": "Indiana",
    "loser": "Donald Rumsfeld",
    "loser_school": "Princeton",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Ed Mahoney",
    "winner_school": "Lehigh",
    "loser": "Ron Larsen",
    "loser_school": "Iowa State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "Jim Harmon",
    "winner_school": "Northern Iowa",
    "loser": "Bill Turley",
    "loser_school": "Hofstra",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 104,
    "winner": "Vito Perrone",
    "winner_school": "Michigan State",
    "loser": "Bob Cobbins",
    "loser_school": "Lincoln",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Joe Arnold",
    "loser_school": "Cornell",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "Doug Frey",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Dan Sniff",
    "winner_school": "Colorado State",
    "loser": "Bill Berry",
    "loser_school": "VMI",
    "result": "Fall 4:04"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "John Eagleton",
    "winner_school": "Oklahoma",
    "loser": "Don Strevey",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Jim Ellis",
    "winner_school": "Indiana",
    "loser": "Ed Mahoney",
    "loser_school": "Lehigh",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Miles Lee",
    "winner_school": "Michigan",
    "loser": "Leslie Kramer",
    "loser_school": "Kansas State",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Jim Harmon",
    "winner_school": "Northern Iowa",
    "loser": "Vito Perrone",
    "loser_school": "Michigan State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Bob Fischer",
    "winner_school": "Maryland",
    "loser": "Byron Nelson",
    "loser_school": "Washington State",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Ed Rooney",
    "loser_school": "Syracuse",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Dan Sniff",
    "winner_school": "Colorado State",
    "loser": "John Eagleton",
    "loser_school": "Oklahoma",
    "result": "Dec UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Jim Ellis",
    "winner_school": "Indiana",
    "loser": "Miles Lee",
    "loser_school": "Michigan",
    "result": "Dec 11-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Jim Harmon",
    "winner_school": "Northern Iowa",
    "loser": "Bob Fischer",
    "loser_school": "Maryland",
    "result": "Dec 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Dan Sniff",
    "winner_school": "Colorado State",
    "loser": "Joe Solomon",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Jim Harmon",
    "winner_school": "Northern Iowa",
    "loser": "Jim Ellis",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "John Eagleton",
    "winner_school": "Oklahoma",
    "loser": "Vito Perrone",
    "loser_school": "Michigan State",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Jim Harmon",
    "winner_school": "Northern Iowa",
    "loser": "Dan Sniff",
    "loser_school": "Colorado State",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "John Eagleton",
    "winner_school": "Oklahoma",
    "loser": "Bob Fischer",
    "loser_school": "Maryland",
    "result": "DEF"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Vito Perrone",
    "winner_school": "Michigan State",
    "loser": "Bill Turley",
    "loser_school": "Hofstra",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "John Eagleton",
    "winner_school": "Oklahoma",
    "loser": "Jim Ellis",
    "loser_school": "Indiana",
    "result": "MD 8-0"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Vito Perrone",
    "winner_school": "Michigan State",
    "loser": "Bill Berry",
    "loser_school": "VMI",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Ernie Fischer",
    "winner_school": "Maryland",
    "loser": "Robert Hockley",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Frank Marks",
    "winner_school": "Oklahoma",
    "loser": "Charles Pankow",
    "loser_school": "Indiana",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Don Dickason",
    "winner_school": "Cornell",
    "loser": "Dale Nordquist",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Del McGhee",
    "winner_school": "Washington State",
    "loser": "Fred Loffredo",
    "loser_school": "Northern Iowa",
    "result": "Fall 7:27"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Don Wem",
    "winner_school": "Toledo",
    "loser": "George Dyer",
    "loser_school": "Springfield",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Ernie Fischer",
    "winner_school": "Maryland",
    "loser": "Harold Broughton",
    "loser_school": "Colorado State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Warren Sonnenman",
    "winner_school": "Cornell Iowa",
    "loser": "Cochrane Chase",
    "loser_school": "Wesleyan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Frank Marks",
    "winner_school": "Oklahoma",
    "loser": "Andy Lentvorsky",
    "loser_school": "Lock Haven",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Don Dickason",
    "winner_school": "Cornell",
    "loser": "Dana Eastham",
    "loser_school": "Brown",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Dale Ward",
    "winner_school": "Army",
    "loser": "Jerry Cooper",
    "loser_school": "Lincoln",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Carl Wood",
    "winner_school": "Oklahoma State",
    "loser": "Del McGhee",
    "loser_school": "Washington State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Joe Lemyre",
    "winner_school": "Penn State",
    "loser": "Myles Nowitzky",
    "loser_school": "VMI",
    "result": "Fall 4:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Ernie Fischer",
    "winner_school": "Maryland",
    "loser": "Don Wem",
    "loser_school": "Toledo",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Frank Marks",
    "winner_school": "Oklahoma",
    "loser": "Warren Sonnenman",
    "loser_school": "Cornell Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Don Dickason",
    "winner_school": "Cornell",
    "loser": "Dale Ward",
    "loser_school": "Army",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Joe Lemyre",
    "winner_school": "Penn State",
    "loser": "Carl Wood",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Frank Marks",
    "winner_school": "Oklahoma",
    "loser": "Ernie Fischer",
    "loser_school": "Maryland",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Don Dickason",
    "winner_school": "Cornell",
    "loser": "Joe Lemyre",
    "loser_school": "Penn State",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Joe Lemyre",
    "winner_school": "Penn State",
    "loser": "Dana Eastham",
    "loser_school": "Brown",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Don Dickason",
    "winner_school": "Cornell",
    "loser": "Frank Marks",
    "loser_school": "Oklahoma",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 273,
    "winner": "Andy Lentvorsky",
    "winner_school": "Lock Haven",
    "loser": "Charles Pankow",
    "loser_school": "Indiana",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 274,
    "winner": "Dana Eastham",
    "winner_school": "Brown",
    "loser": "Dale Nordquist",
    "loser_school": "Illinois",
    "result": "Fall 2:34"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Warren Sonnenman",
    "winner_school": "Cornell Iowa",
    "loser": "Andy Lentvorsky",
    "loser_school": "Lock Haven",
    "result": "Fall 3:57"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Dana Eastham",
    "winner_school": "Brown",
    "loser": "Dale Ward",
    "loser_school": "Army",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Joe Lemyre",
    "winner_school": "Penn State",
    "loser": "Warren Sonnenman",
    "loser_school": "Cornell Iowa",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Dana Eastham",
    "winner_school": "Brown",
    "loser": "Ernie Fischer",
    "loser_school": "Maryland",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Dick O'Shaughnessy",
    "winner_school": "Michigan",
    "loser": "George Dvorozniak",
    "loser_school": "Penn State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Al Paulekas",
    "winner_school": "Army",
    "loser": "Ed Lanzi",
    "loser_school": "Toledo",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Bob McCullough",
    "winner_school": "Wyoming",
    "loser": "Keith Kelley",
    "loser_school": "Oklahoma",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Bob Craig",
    "winner_school": "Lock Haven",
    "loser": "Otis Keller",
    "loser_school": "Cornell",
    "result": "Dec 12-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Dick O'Shaughnessy",
    "winner_school": "Michigan",
    "loser": "Jack Shanahan",
    "loser_school": "Maryland",
    "result": "MD 10-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Al Paulekas",
    "winner_school": "Army",
    "loser": "Don Lindell",
    "loser_school": "Cornell Iowa",
    "result": "Fall 8:32"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Ned Blass",
    "winner_school": "Oklahoma State",
    "loser": "Bob McCullough",
    "loser_school": "Wyoming",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Bob Wirds",
    "winner_school": "Iowa State",
    "loser": "Bob Craig",
    "loser_school": "Lock Haven",
    "result": "Dec 11-4"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Al Paulekas",
    "winner_school": "Army",
    "loser": "Dick O'Shaughnessy",
    "loser_school": "Michigan",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Ned Blass",
    "winner_school": "Oklahoma State",
    "loser": "Bob Wirds",
    "loser_school": "Iowa State",
    "result": "MD 16-8"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Bob Wirds",
    "winner_school": "Iowa State",
    "loser": "Ed Lanzi",
    "loser_school": "Toledo",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Ned Blass",
    "winner_school": "Oklahoma State",
    "loser": "Al Paulekas",
    "loser_school": "Army",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Bob McCullough",
    "winner_school": "Wyoming",
    "loser": "Don Lindell",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Ed Lanzi",
    "winner_school": "Toledo",
    "loser": "Dick O'Shaughnessy",
    "loser_school": "Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Bob Wirds",
    "winner_school": "Iowa State",
    "loser": "Bob McCullough",
    "loser_school": "Wyoming",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Doc Hearon",
    "winner_school": "Oklahoma",
    "loser": "Jim Macaleer",
    "loser_school": "Princeton",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Charles Weber",
    "winner_school": "West Chester",
    "loser": "Pete Veldman",
    "loser_school": "Minnesota",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Gus Gatto",
    "winner_school": "Northern Iowa",
    "loser": "Alan Evans",
    "loser_school": "South Dakota State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Streeter Shining",
    "winner_school": "Iowa",
    "loser": "Bob Drake",
    "loser_school": "Maryland",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Hud Samson",
    "winner_school": "Penn State",
    "loser": "Lou Williams",
    "loser_school": "Oregon State",
    "result": "Fall 3:40"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "Mel Walden",
    "winner_school": "Iowa State",
    "loser": "Louis Stadler",
    "loser_school": "Arkansas State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Dick Torio",
    "winner_school": "Toledo",
    "loser": "Harold Hunter",
    "loser_school": "Pittsburgh",
    "result": "Fall 8:06"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Charles Weber",
    "winner_school": "West Chester",
    "loser": "Doc Hearon",
    "loser_school": "Oklahoma",
    "result": "Fall 8:08"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Gus Gatto",
    "winner_school": "Northern Iowa",
    "loser": "Streeter Shining",
    "loser_school": "Iowa",
    "result": "Fall 8:41"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Hud Samson",
    "winner_school": "Penn State",
    "loser": "Mel Walden",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Dick Torio",
    "winner_school": "Toledo",
    "loser": "Alex Sotir",
    "loser_school": "Springfield",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Charles Weber",
    "winner_school": "West Chester",
    "loser": "Gus Gatto",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Hud Samson",
    "winner_school": "Penn State",
    "loser": "Dick Torio",
    "loser_school": "Toledo",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Dick Torio",
    "winner_school": "Toledo",
    "loser": "Gus Gatto",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Hud Samson",
    "winner_school": "Penn State",
    "loser": "Charles Weber",
    "loser_school": "West Chester",
    "result": "Fall 4:15"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Pete Veldman",
    "winner_school": "Minnesota",
    "loser": "Lou Williams",
    "loser_school": "Oregon State",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Doc Hearon",
    "winner_school": "Oklahoma",
    "loser": "Mel Walden",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Gus Gatto",
    "winner_school": "Northern Iowa",
    "loser": "Pete Veldman",
    "loser_school": "Minnesota",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Dick Torio",
    "winner_school": "Toledo",
    "loser": "Doc Hearon",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Henry Littlefield",
    "winner_school": "Columbia",
    "loser": "Willis Wood",
    "loser_school": "Minnesota",
    "result": "Fall 8:28"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Jack Ellena",
    "winner_school": "UCLA",
    "loser": "Jack McNicol",
    "loser_school": "Virginia Tech",
    "result": "Fall 5:35"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Ed Husmann",
    "winner_school": "Nebraska",
    "loser": "Dick Beyer",
    "loser_school": "Syracuse",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Gene Nicks",
    "winner_school": "Oklahoma State",
    "loser": "Eldred Kraemer",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Jack Ellena",
    "winner_school": "UCLA",
    "loser": "Henry Littlefield",
    "loser_school": "Columbia",
    "result": "Fall 0:40"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Ed Husmann",
    "winner_school": "Nebraska",
    "loser": "Bernard Lloyd",
    "loser_school": "CCNY",
    "result": "MD 15-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Dan McNair",
    "winner_school": "Auburn",
    "loser": "Tom Megele",
    "loser_school": "Hofstra",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Gene Nicks",
    "winner_school": "Oklahoma State",
    "loser": "Jack Ellena",
    "loser_school": "UCLA",
    "result": "Fall 4:59"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Dan McNair",
    "winner_school": "Auburn",
    "loser": "Ed Husmann",
    "loser_school": "Nebraska",
    "result": "Dec UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Eldred Kraemer",
    "winner_school": "Pittsburgh",
    "loser": "Jack Ellena",
    "loser_school": "UCLA",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Dan McNair",
    "winner_school": "Auburn",
    "loser": "Gene Nicks",
    "loser_school": "Oklahoma State",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Jack Ellena",
    "winner_school": "UCLA",
    "loser": "Tom Megele",
    "loser_school": "Hofstra",
    "result": "WIN-NP"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Eldred Kraemer",
    "winner_school": "Pittsburgh",
    "loser": "Ed Husmann",
    "loser_school": "Nebraska",
    "result": "Dec 6-4"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
