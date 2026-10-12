// 1966 NCAA Division I Wrestling Championships (3/24/1966 to 3/26/1966 at Iowa State). Weight classes 115-UNL (11). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1966 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1966-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Rick Sanders",
    "winner_school": "Portland State",
    "loser": "Al Ogdie",
    "loser_school": "Minnesota State",
    "result": "Fall 5:42"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Ron Iwasaki",
    "winner_school": "Oregon State",
    "loser": "Sam Arishita",
    "loser_school": "Utah",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Jon Shurbert",
    "loser_school": "Virginia",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Steve Walenz",
    "winner_school": "Indiana State",
    "loser": "Dell Rhodes",
    "loser_school": "Colorado",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Mike Remer",
    "winner_school": "Cal Poly",
    "loser": "Larry Katz",
    "loser_school": "Purdue",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Dave Unik",
    "winner_school": "Ohio",
    "loser": "Glenn McMinn",
    "loser_school": "Arizona State",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Ernie Gillum",
    "winner_school": "Iowa State",
    "loser": "Barry Masuda",
    "loser_school": "California-Berkeley",
    "result": "MD 9-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Rick Sanders",
    "winner_school": "Portland State",
    "loser": "Ron Iwasaki",
    "loser_school": "Oregon State",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Steve Walenz",
    "loser_school": "Indiana State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Mike Remer",
    "winner_school": "Cal Poly",
    "loser": "Dave Unik",
    "loser_school": "Ohio",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Ernie Gillum",
    "winner_school": "Iowa State",
    "loser": "Tino Lambros",
    "loser_school": "Michigan",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Rick Sanders",
    "winner_school": "Portland State",
    "loser": "Tadaaki Hatta",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:31"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Ernie Gillum",
    "winner_school": "Iowa State",
    "loser": "Mike Remer",
    "loser_school": "Cal Poly",
    "result": "Dec 10-5"
  },
  {
    "round": "5thPlace",
    "weight": "115",
    "bout": 531,
    "winner": "Ron Iwasaki",
    "winner_school": "Oregon State",
    "loser": "Tino Lambros",
    "loser_school": "Michigan",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Mike Remer",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Rick Sanders",
    "winner_school": "Portland State",
    "loser": "Ernie Gillum",
    "loser_school": "Iowa State",
    "result": "Dec 9-2"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Ron Iwasaki",
    "winner_school": "Oregon State",
    "loser": "Al Ogdie",
    "loser_school": "Minnesota State",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Tino Lambros",
    "winner_school": "Michigan",
    "loser": "Barry Masuda",
    "loser_school": "California-Berkeley",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Ron Iwasaki",
    "loser_school": "Oregon State",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Mike Remer",
    "winner_school": "Cal Poly",
    "loser": "Tino Lambros",
    "loser_school": "Michigan",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 28,
    "winner": "Byran Rice",
    "winner_school": "Oklahoma",
    "loser": "Ron Bolognini",
    "loser_school": "Temple",
    "result": "Fall 8:27"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 30,
    "winner": "Bob Steenlage",
    "winner_school": "Army",
    "loser": "Richard Cortese",
    "loser_school": "Adams State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 32,
    "winner": "Rich Leichtman",
    "winner_school": "Iowa State",
    "loser": "Sam Rossi",
    "loser_school": "Seton Hall",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Bob Long",
    "winner_school": "Coast Guard",
    "loser": "Bob Pavelko",
    "loser_school": "Air Force",
    "result": "Fall 5:47"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "Wally Clark",
    "winner_school": "Penn State",
    "loser": "John Lambert",
    "loser_school": "Augustana Illinois",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 37,
    "winner": "Bob Fehrs",
    "winner_school": "Michigan",
    "loser": "Jerry Langdon",
    "loser_school": "Nebraska",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 39,
    "winner": "Tim McCall",
    "winner_school": "Indiana",
    "loser": "Pete Russo",
    "loser_school": "Arizona State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Byran Rice",
    "winner_school": "Oklahoma",
    "loser": "Glen Younger",
    "loser_school": "Western State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Bob Steenlage",
    "winner_school": "Army",
    "loser": "Martin Little",
    "loser_school": "Kansas State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Mike Caruso",
    "winner_school": "Lehigh",
    "loser": "Rich Leichtman",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Ted Parker",
    "winner_school": "Indiana State",
    "loser": "Bob Long",
    "loser_school": "Coast Guard",
    "result": "Fall 7:35"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Warren Crow",
    "winner_school": "SUNY-Albany",
    "loser": "Wally Clark",
    "loser_school": "Penn State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Bob Fehrs",
    "winner_school": "Michigan",
    "loser": "Art Sanchez",
    "loser_school": "Wyoming",
    "result": "Fall 7:48"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Graddy Sells",
    "winner_school": "Oklahoma State",
    "loser": "Tim McCall",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Bobby Guzzo",
    "winner_school": "East Stroudsburg",
    "loser": "Ron McBride",
    "loser_school": "Utah State",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Bob Steenlage",
    "winner_school": "Army",
    "loser": "Byran Rice",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Mike Caruso",
    "winner_school": "Lehigh",
    "loser": "Ted Parker",
    "loser_school": "Indiana State",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Bob Fehrs",
    "winner_school": "Michigan",
    "loser": "Warren Crow",
    "loser_school": "SUNY-Albany",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Bobby Guzzo",
    "winner_school": "East Stroudsburg",
    "loser": "Graddy Sells",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Mike Caruso",
    "winner_school": "Lehigh",
    "loser": "Bob Steenlage",
    "loser_school": "Army",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Bob Fehrs",
    "winner_school": "Michigan",
    "loser": "Bobby Guzzo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 6-4"
  },
  {
    "round": "5thPlace",
    "weight": "123",
    "bout": 532,
    "winner": "Rich Leichtman",
    "winner_school": "Iowa State",
    "loser": "Bobby Guzzo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Bob Steenlage",
    "winner_school": "Army",
    "loser": "Warren Crow",
    "loser_school": "SUNY-Albany",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Mike Caruso",
    "winner_school": "Lehigh",
    "loser": "Bob Fehrs",
    "loser_school": "Michigan",
    "result": "Dec 9-6"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 264,
    "winner": "Jerry Langdon",
    "winner_school": "Nebraska",
    "loser": "Art Sanchez",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Rich Leichtman",
    "winner_school": "Iowa State",
    "loser": "Ted Parker",
    "loser_school": "Indiana State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Warren Crow",
    "winner_school": "SUNY-Albany",
    "loser": "Jerry Langdon",
    "loser_school": "Nebraska",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Bob Steenlage",
    "winner_school": "Army",
    "loser": "Rich Leichtman",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Warren Crow",
    "winner_school": "SUNY-Albany",
    "loser": "Bobby Guzzo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 44,
    "winner": "Pete Nord",
    "winner_school": "Colorado",
    "loser": "Ted Clark",
    "loser_school": "Bowling Green",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "Jan Dutt",
    "winner_school": "East Stroudsburg",
    "loser": "Jim Free",
    "loser_school": "Colorado State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "Jim Rolley",
    "winner_school": "Bloomsburg",
    "loser": "Sam Epps",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 49,
    "winner": "Rick Allgood",
    "winner_school": "Nebraska",
    "loser": "Bernard Lomman",
    "loser_school": "Shippensburg",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Curtis Scott",
    "loser_school": "Oregon",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Curtis Bradford",
    "winner_school": "Oklahoma",
    "loser": "Dick Humphreys",
    "loser_school": "Indiana State",
    "result": "Fall 5:03"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 52,
    "winner": "Joe Peritore",
    "winner_school": "Lehigh",
    "loser": "Bob Campbell",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 53,
    "winner": "Mike Stanley",
    "winner_school": "Adams State",
    "loser": "Larry Baron",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 55,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Russell Lay",
    "loser_school": "Kansas State",
    "result": "Fall 5:41"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 57,
    "winner": "Bob Soulek",
    "winner_school": "Minnesota State",
    "loser": "Roger Young",
    "loser_school": "Ohio State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Pete Vanderlofske",
    "winner_school": "Navy",
    "loser": "Pete Nord",
    "loser_school": "Colorado",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Don Milone",
    "winner_school": "Temple",
    "loser": "Jan Dutt",
    "loser_school": "East Stroudsburg",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Jim Rolley",
    "winner_school": "Bloomsburg",
    "loser": "Bill DeSario",
    "loser_school": "SUNY-Cortland",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Rick Allgood",
    "loser_school": "Nebraska",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Joe Peritore",
    "winner_school": "Lehigh",
    "loser": "Curtis Bradford",
    "loser_school": "Oklahoma",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Richard Green",
    "winner_school": "Portland State",
    "loser": "Mike Stanley",
    "loser_school": "Adams State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Ken Ford",
    "loser_school": "Moorhead State",
    "result": "Fall 7:39"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Bob Soulek",
    "winner_school": "Minnesota State",
    "loser": "Lennis Cowell",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Don Milone",
    "winner_school": "Temple",
    "loser": "Pete Vanderlofske",
    "loser_school": "Navy",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Jim Rolley",
    "loser_school": "Bloomsburg",
    "result": "MD 18-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Joe Peritore",
    "winner_school": "Lehigh",
    "loser": "Richard Green",
    "loser_school": "Portland State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Bob Soulek",
    "loser_school": "Minnesota State",
    "result": "MD 16-7"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Don Milone",
    "loser_school": "Temple",
    "result": "MD 11-2"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Joe Peritore",
    "winner_school": "Lehigh",
    "loser": "Dale Anderson",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "130",
    "bout": 533,
    "winner": "Dale Anderson",
    "winner_school": "Michigan State",
    "loser": "Don Milone",
    "loser_school": "Temple",
    "result": "Dec 5-0"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Bob Campbell",
    "winner_school": "Indiana",
    "loser": "Curtis Scott",
    "loser_school": "Oregon",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Joe Peritore",
    "loser_school": "Lehigh",
    "result": "Fall 4:31"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 265,
    "winner": "Curtis Scott",
    "winner_school": "Oregon",
    "loser": "Rick Allgood",
    "loser_school": "Nebraska",
    "result": "MD 16-4"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 266,
    "winner": "Bob Campbell",
    "winner_school": "Indiana",
    "loser": "Curtis Bradford",
    "loser_school": "Oklahoma",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Curtis Scott",
    "winner_school": "Oregon",
    "loser": "Jim Rolley",
    "loser_school": "Bloomsburg",
    "result": "MD 8-0"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Bob Campbell",
    "winner_school": "Indiana",
    "loser": "Richard Green",
    "loser_school": "Portland State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Curtis Scott",
    "winner_school": "Oregon",
    "loser": "Don Milone",
    "loser_school": "Temple",
    "result": "Dec 9-2"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Bob Campbell",
    "winner_school": "Indiana",
    "loser": "Dale Anderson",
    "loser_school": "Michigan State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Jerry Cheynet",
    "winner_school": "Kansas State",
    "loser": "Barry Sutter",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Lee Sprague",
    "winner_school": "Oregon State",
    "loser": "Tony Struzik",
    "loser_school": "Marquette",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Vince Fitz",
    "winner_school": "Penn State",
    "loser": "Dave Saddler",
    "loser_school": "Iowa State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Douglas Robertson",
    "winner_school": "Oregon",
    "loser": "Bill Thompson",
    "loser_school": "RIT",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Don Schneider",
    "winner_school": "SIU-Carbondale",
    "loser": "Steve Boozell",
    "loser_school": "Central Missouri",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Tony Russo",
    "winner_school": "Arizona State",
    "loser": "Wayne Hicks",
    "loser_school": "Navy",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Alan Siegel",
    "winner_school": "California-Berkeley",
    "loser": "Colvyn Redden",
    "loser_school": "Shippensburg",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Jerry Cheynet",
    "loser_school": "Kansas State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Dale Carr",
    "winner_school": "Michigan State",
    "loser": "Lee Sprague",
    "loser_school": "Oregon State",
    "result": "Dec 13-12"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Vince Fitz",
    "winner_school": "Penn State",
    "loser": "Ed Derryberry",
    "loser_school": "Northern Colorado",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Douglas Robertson",
    "loser_school": "Oregon",
    "result": "Fall 5:08"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Don Schneider",
    "winner_school": "SIU-Carbondale",
    "loser": "Bob Furlan",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Masaru Yatabe",
    "winner_school": "Portland State",
    "loser": "Tony Russo",
    "loser_school": "Arizona State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Bill Johannesen",
    "winner_school": "Michigan",
    "loser": "Alan Siegel",
    "loser_school": "California-Berkeley",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Gene Davis",
    "winner_school": "Oklahoma State",
    "loser": "Dave Halulko",
    "loser_school": "Indiana State",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Dale Carr",
    "loser_school": "Michigan State",
    "result": "MD 17-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Vince Fitz",
    "loser_school": "Penn State",
    "result": "MD 13-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Masaru Yatabe",
    "winner_school": "Portland State",
    "loser": "Don Schneider",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Gene Davis",
    "winner_school": "Oklahoma State",
    "loser": "Bill Johannesen",
    "loser_school": "Michigan",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Bill Stuart",
    "loser_school": "Lehigh",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Gene Davis",
    "winner_school": "Oklahoma State",
    "loser": "Masaru Yatabe",
    "loser_school": "Portland State",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "5thPlace",
    "weight": "137",
    "bout": 534,
    "winner": "Masaru Yatabe",
    "winner_school": "Portland State",
    "loser": "Jerry Cheynet",
    "loser_school": "Kansas State",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Bill Johannesen",
    "loser_school": "Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Gene Davis",
    "winner_school": "Oklahoma State",
    "loser": "Mike Sager",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Jerry Cheynet",
    "winner_school": "Kansas State",
    "loser": "Dale Carr",
    "loser_school": "Michigan State",
    "result": "Dec 8-1"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Bill Johannesen",
    "winner_school": "Michigan",
    "loser": "Dave Halulko",
    "loser_school": "Indiana State",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Jerry Cheynet",
    "loser_school": "Kansas State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Bill Johannesen",
    "winner_school": "Michigan",
    "loser": "Masaru Yatabe",
    "loser_school": "Portland State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 76,
    "winner": "Rick Stuyvesant",
    "winner_school": "Moorhead State",
    "loser": "Cal Jenkins",
    "loser_school": "Michigan",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 78,
    "winner": "Bob Robbins",
    "winner_school": "Army",
    "loser": "Allan Sievertsen",
    "loser_school": "Wisconsin",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 80,
    "winner": "Freeman Garrison",
    "winner_school": "Portland State",
    "loser": "Dave Pfoor",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 81,
    "winner": "Jim Rogers",
    "winner_school": "Oklahoma State",
    "loser": "Russ Schneider",
    "loser_school": "Northwestern",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 82,
    "winner": "Scott Higgins",
    "winner_school": "Gettysburg",
    "loser": "Roy Hagerty",
    "loser_school": "North Carolina",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 83,
    "winner": "Loren Miller",
    "winner_school": "San Jose State",
    "loser": "Nash Tillman",
    "loser_school": "Adams State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 85,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "Joe Eremus",
    "loser_school": "Penn State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 87,
    "winner": "Dale Bahr",
    "winner_school": "Iowa State",
    "loser": "Dave Campbell",
    "loser_school": "Michigan State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "145",
    "bout": 89,
    "winner": "Elliott Tepper",
    "winner_school": "Lehigh",
    "loser": "Tom Griggy",
    "loser_school": "Kent State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 203,
    "winner": "Rick Stuyvesant",
    "winner_school": "Moorhead State",
    "loser": "James Moore",
    "loser_school": "Bowling Green",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 204,
    "winner": "Bob Robbins",
    "winner_school": "Army",
    "loser": "Harlan Heinz",
    "loser_school": "Northern Colorado",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 205,
    "winner": "Bill Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "Freeman Garrison",
    "loser_school": "Portland State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 206,
    "winner": "Jim Rogers",
    "winner_school": "Oklahoma State",
    "loser": "Scott Higgins",
    "loser_school": "Gettysburg",
    "result": "MD 19-5"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 207,
    "winner": "Rudy Dotlich",
    "winner_school": "Indiana State",
    "loser": "Loren Miller",
    "loser_school": "San Jose State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 208,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "Bill Bower",
    "loser_school": "Temple",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 209,
    "winner": "Dale Bahr",
    "winner_school": "Iowa State",
    "loser": "Lee Dale",
    "loser_school": "Kansas State",
    "result": "Fall 2:40"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 210,
    "winner": "James Pond",
    "winner_school": "Georgia Tech",
    "loser": "Elliott Tepper",
    "loser_school": "Lehigh",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 357,
    "winner": "Bob Robbins",
    "winner_school": "Army",
    "loser": "Rick Stuyvesant",
    "loser_school": "Moorhead State",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 358,
    "winner": "Bill Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "Jim Rogers",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 359,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "Rudy Dotlich",
    "loser_school": "Indiana State",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 360,
    "winner": "Dale Bahr",
    "winner_school": "Iowa State",
    "loser": "James Pond",
    "loser_school": "Georgia Tech",
    "result": "Dec 10-5"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 469,
    "winner": "Bill Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "Bob Robbins",
    "loser_school": "Army",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 470,
    "winner": "Dale Bahr",
    "winner_school": "Iowa State",
    "loser": "Jerry Stanley",
    "loser_school": "Oklahoma",
    "result": "Dec 9-8"
  },
  {
    "round": "5thPlace",
    "weight": "145",
    "bout": 535,
    "winner": "Bob Robbins",
    "winner_school": "Army",
    "loser": "James Pond",
    "loser_school": "Georgia Tech",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "145",
    "bout": 545,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "Jim Rogers",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "Finals",
    "weight": "145",
    "bout": 555,
    "winner": "Bill Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "Dale Bahr",
    "loser_school": "Iowa State",
    "result": "Dec 7-1"
  },
  {
    "round": "RepConsA",
    "weight": "145",
    "bout": 270,
    "winner": "Dave Campbell",
    "winner_school": "Michigan State",
    "loser": "Lee Dale",
    "loser_school": "Kansas State",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 389,
    "winner": "Jim Rogers",
    "winner_school": "Oklahoma State",
    "loser": "Freeman Garrison",
    "loser_school": "Portland State",
    "result": "Dec 10-5"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 390,
    "winner": "James Pond",
    "winner_school": "Georgia Tech",
    "loser": "Dave Campbell",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 429,
    "winner": "Jim Rogers",
    "winner_school": "Oklahoma State",
    "loser": "Bob Robbins",
    "loser_school": "Army",
    "result": "Dec 7-6"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 430,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "James Pond",
    "loser_school": "Georgia Tech",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 91,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Gary Roberts Sr.",
    "loser_school": "New Mexico",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 92,
    "winner": "Gerry Burkhart",
    "winner_school": "Indiana State",
    "loser": "Joe Jacobson",
    "loser_school": "North Carolina",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 93,
    "winner": "Phillip Buerk",
    "winner_school": "Marquette",
    "loser": "John Miller",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 94,
    "winner": "Dick Dewalt",
    "winner_school": "Penn State",
    "loser": "David Cooper",
    "loser_school": "Georgia",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 95,
    "winner": "Ray Sepata",
    "winner_school": "Army",
    "loser": "Rich Wellman",
    "loser_school": "Iowa State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 96,
    "winner": "Don Hall",
    "winner_school": "Arizona",
    "loser": "Bob Gendler",
    "loser_school": "Kent State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 97,
    "winner": "Joe Bavaro",
    "winner_school": "Gettysburg",
    "loser": "Lee Ehrler",
    "loser_school": "UCLA",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 98,
    "winner": "Bill Brown",
    "winner_school": "Kansas State",
    "loser": "Joe Krisko",
    "loser_school": "Bowling Green",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 99,
    "winner": "Wayne Wells",
    "winner_school": "Oklahoma",
    "loser": "Jerry Peden",
    "loser_school": "Northern Colorado",
    "result": "Fall 5:50"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 100,
    "winner": "Clair Riley",
    "winner_school": "Pittsburgh",
    "loser": "Gary Jensen",
    "loser_school": "Utah",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 101,
    "winner": "George Hicks",
    "winner_school": "NC State",
    "loser": "Tom Muir",
    "loser_school": "Lehigh",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 102,
    "winner": "Jim Kamman",
    "winner_school": "Michigan",
    "loser": "Joe Gerst",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 103,
    "winner": "Dick Cook",
    "winner_school": "Michigan State",
    "loser": "Peter Reed",
    "loser_school": "Wesleyan",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 104,
    "winner": "Al Lilley",
    "winner_school": "Temple",
    "loser": "Dick Heinzelman",
    "loser_school": "Wisconsin",
    "result": "Dec 20-13"
  },
  {
    "round": "ChampR1",
    "weight": "152",
    "bout": 105,
    "winner": "John Kent",
    "winner_school": "Navy",
    "loser": "Adam Waltz",
    "loser_school": "Lock Haven",
    "result": "Fall 8:31"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 211,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Gerry Burkhart",
    "loser_school": "Indiana State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 212,
    "winner": "Dick Dewalt",
    "winner_school": "Penn State",
    "loser": "Phillip Buerk",
    "loser_school": "Marquette",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 213,
    "winner": "Ray Sepata",
    "winner_school": "Army",
    "loser": "Don Hall",
    "loser_school": "Arizona",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 214,
    "winner": "Joe Bavaro",
    "winner_school": "Gettysburg",
    "loser": "Bill Brown",
    "loser_school": "Kansas State",
    "result": "Fall 4:07"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 215,
    "winner": "Wayne Wells",
    "winner_school": "Oklahoma",
    "loser": "Clair Riley",
    "loser_school": "Pittsburgh",
    "result": "Fall 7:34"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 216,
    "winner": "Jim Kamman",
    "winner_school": "Michigan",
    "loser": "George Hicks",
    "loser_school": "NC State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 217,
    "winner": "Dick Cook",
    "winner_school": "Michigan State",
    "loser": "Al Lilley",
    "loser_school": "Temple",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "152",
    "bout": 218,
    "winner": "Alan Frude",
    "winner_school": "Wyoming",
    "loser": "John Kent",
    "loser_school": "Navy",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 361,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Dick Dewalt",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 362,
    "winner": "Joe Bavaro",
    "winner_school": "Gettysburg",
    "loser": "Ray Sepata",
    "loser_school": "Army",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 363,
    "winner": "Jim Kamman",
    "winner_school": "Michigan",
    "loser": "Wayne Wells",
    "loser_school": "Oklahoma",
    "result": "Fall 7:21"
  },
  {
    "round": "QuarterFinals",
    "weight": "152",
    "bout": 364,
    "winner": "Dick Cook",
    "winner_school": "Michigan State",
    "loser": "Alan Frude",
    "loser_school": "Wyoming",
    "result": "Dec 7-1"
  },
  {
    "round": "SemiFinals",
    "weight": "152",
    "bout": 471,
    "winner": "Joe Bavaro",
    "winner_school": "Gettysburg",
    "loser": "Mike Reding",
    "loser_school": "Oklahoma State",
    "result": "Dec 12-9"
  },
  {
    "round": "SemiFinals",
    "weight": "152",
    "bout": 472,
    "winner": "Dick Cook",
    "winner_school": "Michigan State",
    "loser": "Jim Kamman",
    "loser_school": "Michigan",
    "result": "Fall 7:48"
  },
  {
    "round": "5thPlace",
    "weight": "152",
    "bout": 536,
    "winner": "Alan Frude",
    "winner_school": "Wyoming",
    "loser": "Bill Brown",
    "loser_school": "Kansas State",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "152",
    "bout": 546,
    "winner": "Jim Kamman",
    "winner_school": "Michigan",
    "loser": "Mike Reding",
    "loser_school": "Oklahoma State",
    "result": "Fall 2:14"
  },
  {
    "round": "Finals",
    "weight": "152",
    "bout": 556,
    "winner": "Dick Cook",
    "winner_school": "Michigan State",
    "loser": "Joe Bavaro",
    "loser_school": "Gettysburg",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsA",
    "weight": "152",
    "bout": 271,
    "winner": "Bill Brown",
    "winner_school": "Kansas State",
    "loser": "Lee Ehrler",
    "loser_school": "UCLA",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsA",
    "weight": "152",
    "bout": 272,
    "winner": "Al Lilley",
    "winner_school": "Temple",
    "loser": "Peter Reed",
    "loser_school": "Wesleyan",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "RepConsB",
    "weight": "152",
    "bout": 391,
    "winner": "Bill Brown",
    "winner_school": "Kansas State",
    "loser": "Ray Sepata",
    "loser_school": "Army",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "152",
    "bout": 392,
    "winner": "Alan Frude",
    "winner_school": "Wyoming",
    "loser": "Al Lilley",
    "loser_school": "Temple",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsC",
    "weight": "152",
    "bout": 431,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Bill Brown",
    "loser_school": "Kansas State",
    "result": "Dec 7-1"
  },
  {
    "round": "RepConsC",
    "weight": "152",
    "bout": 432,
    "winner": "Jim Kamman",
    "winner_school": "Michigan",
    "loser": "Alan Frude",
    "loser_school": "Wyoming",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 108,
    "winner": "Bob Hartenstine",
    "winner_school": "Lehigh",
    "loser": "Fred Siebenthal",
    "loser_school": "Portland State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 109,
    "winner": "Cy Lucas",
    "winner_school": "San Jose State",
    "loser": "Fred Steliman",
    "loser_school": "Michigan",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 110,
    "winner": "Elmer Beale",
    "winner_school": "Wisconsin",
    "loser": "Larry Elder",
    "loser_school": "Kansas State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 111,
    "winner": "Rick Evans",
    "winner_school": "Gustavus Adolphus",
    "loser": "Rod Ott",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 112,
    "winner": "Dan Hensley",
    "winner_school": "Washington State",
    "loser": "Dennis Palmer",
    "loser_school": "Bowling Green",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 113,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "Rich Ruben",
    "loser_school": "Northwestern",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 114,
    "winner": "J. Robinson",
    "winner_school": "Oklahoma State",
    "loser": "Sam Marshall",
    "loser_school": "North Carolina",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 115,
    "winner": "Larry Amundson",
    "winner_school": "Minnesota State",
    "loser": "Bob Englebretson",
    "loser_school": "Air Force",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 116,
    "winner": "Chet Dalgewicz",
    "winner_school": "East Stroudsburg",
    "loser": "Bill Drypolcher",
    "loser_school": "Kent State",
    "result": "Fall 7:29"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 117,
    "winner": "Vic Marcucci",
    "winner_school": "Iowa State",
    "loser": "Fred Buechel",
    "loser_school": "Seton Hall",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 119,
    "winner": "John Carr",
    "winner_school": "Wilkes",
    "loser": "Leon Mickelson",
    "loser_school": "Wyoming",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 120,
    "winner": "Russ Baker",
    "winner_school": "Army",
    "loser": "Terry Appleton",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "160",
    "bout": 121,
    "winner": "Bob Brawley",
    "winner_school": "NC State",
    "loser": "Jim Blacksmith",
    "loser_school": "Lock Haven",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 219,
    "winner": "Bob Hartenstine",
    "winner_school": "Lehigh",
    "loser": "Jim Schindhelm",
    "loser_school": "Marquette",
    "result": "Fall 8:20"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 220,
    "winner": "Elmer Beale",
    "winner_school": "Wisconsin",
    "loser": "Cy Lucas",
    "loser_school": "San Jose State",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 221,
    "winner": "Dan Hensley",
    "winner_school": "Washington State",
    "loser": "Rick Evans",
    "loser_school": "Gustavus Adolphus",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 222,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "J. Robinson",
    "loser_school": "Oklahoma State",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 223,
    "winner": "Chet Dalgewicz",
    "winner_school": "East Stroudsburg",
    "loser": "Larry Amundson",
    "loser_school": "Minnesota State",
    "result": "Fall 7:57"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 224,
    "winner": "Vic Marcucci",
    "winner_school": "Iowa State",
    "loser": "Bob Pychinka",
    "loser_school": "Indiana State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 225,
    "winner": "John Carr",
    "winner_school": "Wilkes",
    "loser": "Russ Baker",
    "loser_school": "Army",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "160",
    "bout": 226,
    "winner": "Bob Brawley",
    "winner_school": "NC State",
    "loser": "Jerry Seaman",
    "loser_school": "Penn State",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 365,
    "winner": "Elmer Beale",
    "winner_school": "Wisconsin",
    "loser": "Bob Hartenstine",
    "loser_school": "Lehigh",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 366,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "Dan Hensley",
    "loser_school": "Washington State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 367,
    "winner": "Vic Marcucci",
    "winner_school": "Iowa State",
    "loser": "Chet Dalgewicz",
    "loser_school": "East Stroudsburg",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "160",
    "bout": 368,
    "winner": "John Carr",
    "winner_school": "Wilkes",
    "loser": "Bob Brawley",
    "loser_school": "NC State",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "160",
    "bout": 473,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "Elmer Beale",
    "loser_school": "Wisconsin",
    "result": "Fall 7:54"
  },
  {
    "round": "SemiFinals",
    "weight": "160",
    "bout": 474,
    "winner": "Vic Marcucci",
    "winner_school": "Iowa State",
    "loser": "John Carr",
    "loser_school": "Wilkes",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "5thPlace",
    "weight": "160",
    "bout": 537,
    "winner": "Chet Dalgewicz",
    "winner_school": "East Stroudsburg",
    "loser": "Dan Hensley",
    "loser_school": "Washington State",
    "result": "Dec 7-2"
  },
  {
    "round": "3rdPlace",
    "weight": "160",
    "bout": 547,
    "winner": "John Carr",
    "winner_school": "Wilkes",
    "loser": "Elmer Beale",
    "loser_school": "Wisconsin",
    "result": "MD 8-0"
  },
  {
    "round": "Finals",
    "weight": "160",
    "bout": 557,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "Vic Marcucci",
    "loser_school": "Iowa State",
    "result": "Fall 8:54"
  },
  {
    "round": "RepConsA",
    "weight": "160",
    "bout": 273,
    "winner": "Rich Ruben",
    "winner_school": "Northwestern",
    "loser": "J. Robinson",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsA",
    "weight": "160",
    "bout": 274,
    "winner": "Bob Pychinka",
    "winner_school": "Indiana State",
    "loser": "Fred Buechel",
    "loser_school": "Seton Hall",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsB",
    "weight": "160",
    "bout": 393,
    "winner": "Dan Hensley",
    "winner_school": "Washington State",
    "loser": "Rich Ruben",
    "loser_school": "Northwestern",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "RepConsB",
    "weight": "160",
    "bout": 394,
    "winner": "Chet Dalgewicz",
    "winner_school": "East Stroudsburg",
    "loser": "Bob Pychinka",
    "loser_school": "Indiana State",
    "result": "Fall 5:03"
  },
  {
    "round": "RepConsC",
    "weight": "160",
    "bout": 433,
    "winner": "Elmer Beale",
    "winner_school": "Wisconsin",
    "loser": "Dan Hensley",
    "loser_school": "Washington State",
    "result": "Dec 1-0"
  },
  {
    "round": "RepConsC",
    "weight": "160",
    "bout": 434,
    "winner": "John Carr",
    "winner_school": "Wilkes",
    "loser": "Chet Dalgewicz",
    "loser_school": "East Stroudsburg",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 125,
    "winner": "Dave Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Don Miller",
    "loser_school": "Wyoming",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 126,
    "winner": "Bob Drebenstedt",
    "winner_school": "Oklahoma State",
    "loser": "Stu Marshall",
    "loser_school": "Northwestern",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 127,
    "winner": "Jon Rushatz",
    "winner_school": "Lehigh",
    "loser": "Dan Ternes",
    "loser_school": "Bowling Green",
    "result": "Fall 1:50"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 128,
    "winner": "Tom Vargo",
    "winner_school": "Bloomsburg",
    "loser": "Ralph Orr",
    "loser_school": "UCLA",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 129,
    "winner": "Dave Palmer",
    "winner_school": "Navy",
    "loser": "Jeff Smith",
    "loser_school": "Oregon State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 130,
    "winner": "Fred Fairbanks",
    "winner_school": "Washington State",
    "loser": "John Smith",
    "loser_school": "Lock Haven",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 131,
    "winner": "Bill Byers",
    "winner_school": "Northern Colorado",
    "loser": "Reg Wicks",
    "loser_school": "Iowa State",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 132,
    "winner": "Bruce Glenn",
    "winner_school": "Oregon",
    "loser": "Joe Domko",
    "loser_school": "SIU-Carbondale",
    "result": "Fall 5:06"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 133,
    "winner": "Bill Herbert",
    "winner_school": "Kent State",
    "loser": "Dale Kraft",
    "loser_school": "Montana State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 134,
    "winner": "Ed Reinoso",
    "winner_school": "Temple",
    "loser": "John Logan",
    "loser_school": "Wesleyan",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 135,
    "winner": "Rich Lorenzo",
    "winner_school": "Penn State",
    "loser": "George Radman",
    "loser_school": "Michigan State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 136,
    "winner": "Roger Mickish",
    "winner_school": "Oklahoma",
    "loser": "Rick Martin",
    "loser_school": "Ohio",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 137,
    "winner": "Bill Elder",
    "winner_school": "East Stroudsburg",
    "loser": "Jim Riesselman",
    "loser_school": "Minnesota State",
    "result": "Fall 5:26"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 227,
    "winner": "Leo Derock",
    "winner_school": "Colorado",
    "loser": "Chuck Laughry",
    "loser_school": "Coast Guard",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 228,
    "winner": "Dave Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Bob Drebenstedt",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 229,
    "winner": "Jon Rushatz",
    "winner_school": "Lehigh",
    "loser": "Tom Vargo",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 230,
    "winner": "Dave Palmer",
    "winner_school": "Navy",
    "loser": "Fred Fairbanks",
    "loser_school": "Washington State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 231,
    "winner": "Bill Byers",
    "winner_school": "Northern Colorado",
    "loser": "Bruce Glenn",
    "loser_school": "Oregon",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 232,
    "winner": "Ed Reinoso",
    "winner_school": "Temple",
    "loser": "Bill Herbert",
    "loser_school": "Kent State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 233,
    "winner": "Roger Mickish",
    "winner_school": "Oklahoma",
    "loser": "Rich Lorenzo",
    "loser_school": "Penn State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 234,
    "winner": "Bill Bachardy",
    "winner_school": "Lycoming",
    "loser": "Bill Elder",
    "loser_school": "East Stroudsburg",
    "result": "MD 17-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 369,
    "winner": "Dave Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Leo Derock",
    "loser_school": "Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 370,
    "winner": "Jon Rushatz",
    "winner_school": "Lehigh",
    "loser": "Dave Palmer",
    "loser_school": "Navy",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 371,
    "winner": "Bill Byers",
    "winner_school": "Northern Colorado",
    "loser": "Ed Reinoso",
    "loser_school": "Temple",
    "result": "Fall 2:59"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 372,
    "winner": "Roger Mickish",
    "winner_school": "Oklahoma",
    "loser": "Bill Bachardy",
    "loser_school": "Lycoming",
    "result": "Fall 2:57"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 475,
    "winner": "Dave Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Jon Rushatz",
    "loser_school": "Lehigh",
    "result": "Fall 8:48"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 476,
    "winner": "Roger Mickish",
    "winner_school": "Oklahoma",
    "loser": "Bill Byers",
    "loser_school": "Northern Colorado",
    "result": "Dec 12-8"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 538,
    "winner": "Bill Byers",
    "winner_school": "Northern Colorado",
    "loser": "Bob Drebenstedt",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 548,
    "winner": "Jon Rushatz",
    "winner_school": "Lehigh",
    "loser": "Bill Bachardy",
    "loser_school": "Lycoming",
    "result": "Fall 4:51"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 558,
    "winner": "Dave Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Roger Mickish",
    "loser_school": "Oklahoma",
    "result": "Dec 13-11"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 275,
    "winner": "Bob Drebenstedt",
    "winner_school": "Oklahoma State",
    "loser": "Don Miller",
    "loser_school": "Wyoming",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 276,
    "winner": "Rick Martin",
    "winner_school": "Ohio",
    "loser": "Rich Lorenzo",
    "loser_school": "Penn State",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 395,
    "winner": "Bob Drebenstedt",
    "winner_school": "Oklahoma State",
    "loser": "Leo Derock",
    "loser_school": "Colorado",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 396,
    "winner": "Bill Bachardy",
    "winner_school": "Lycoming",
    "loser": "Rick Martin",
    "loser_school": "Ohio",
    "result": "MD 11-1"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 435,
    "winner": "Jon Rushatz",
    "winner_school": "Lehigh",
    "loser": "Bob Drebenstedt",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 436,
    "winner": "Bill Bachardy",
    "winner_school": "Lycoming",
    "loser": "Bill Byers",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 146,
    "winner": "Gordon Fisher",
    "winner_school": "Northern Colorado",
    "loser": "Bill Waterman",
    "loser_school": "Michigan",
    "result": "Fall 5:15"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 235,
    "winner": "Don Parker",
    "winner_school": "Northern Iowa",
    "loser": "Bob McDaniel",
    "loser_school": "Oklahoma",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 236,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Paul Adams",
    "loser_school": "Washington State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 237,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Frank Mosier",
    "loser_school": "Moorhead State",
    "result": "Fall 3:29"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 238,
    "winner": "Gordon Fisher",
    "winner_school": "Northern Colorado",
    "loser": "Jim Harter",
    "loser_school": "Army",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 239,
    "winner": "Gary Cook",
    "winner_school": "East Stroudsburg",
    "loser": "John Vanderveem",
    "loser_school": "RIT",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 240,
    "winner": "Ed Cummings",
    "winner_school": "Ohio State",
    "loser": "Bob Karch",
    "loser_school": "Maryland",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 241,
    "winner": "Mike Bradley",
    "winner_school": "Michigan State",
    "loser": "Ellery Seitz",
    "loser_school": "Penn State",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 242,
    "winner": "Fred Fozzard",
    "winner_school": "Oklahoma State",
    "loser": "Dave Mucka",
    "loser_school": "Moravian",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 373,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Don Parker",
    "loser_school": "Northern Iowa",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 374,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Gordon Fisher",
    "loser_school": "Northern Colorado",
    "result": "Fall 3:38"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 375,
    "winner": "Gary Cook",
    "winner_school": "East Stroudsburg",
    "loser": "Ed Cummings",
    "loser_school": "Ohio State",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 376,
    "winner": "Fred Fozzard",
    "winner_school": "Oklahoma State",
    "loser": "Mike Bradley",
    "loser_school": "Michigan State",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 477,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Jerry Swope",
    "loser_school": "Lock Haven",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 478,
    "winner": "Fred Fozzard",
    "winner_school": "Oklahoma State",
    "loser": "Gary Cook",
    "loser_school": "East Stroudsburg",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 539,
    "winner": "Dave Mucka",
    "winner_school": "Moravian",
    "loser": "Gordon Fisher",
    "loser_school": "Northern Colorado",
    "result": "Fall 3:35"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 549,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Gary Cook",
    "loser_school": "East Stroudsburg",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 559,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Fred Fozzard",
    "loser_school": "Oklahoma State",
    "result": "Fall 3:43"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 397,
    "winner": "Gordon Fisher",
    "winner_school": "Northern Colorado",
    "loser": "Frank Mosier",
    "loser_school": "Moorhead State",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 398,
    "winner": "Dave Mucka",
    "winner_school": "Moravian",
    "loser": "Mike Bradley",
    "loser_school": "Michigan State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 437,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Gordon Fisher",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 438,
    "winner": "Gary Cook",
    "winner_school": "East Stroudsburg",
    "loser": "Dave Mucka",
    "loser_school": "Moravian",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 244,
    "winner": "Henk Schenk",
    "winner_school": "Oregon State",
    "loser": "Burke Deadrich",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 245,
    "winner": "Tom Foster",
    "winner_school": "Utah State",
    "loser": "Ron Hampton",
    "loser_school": "Adams State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 246,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Olaf Drozdov",
    "loser_school": "Maryland",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 247,
    "winner": "Tony Bennett",
    "winner_school": "Oklahoma",
    "loser": "Vince King",
    "loser_school": "Marquette",
    "result": "Fall 4:06"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 248,
    "winner": "Don Buzzard",
    "winner_school": "Iowa State",
    "loser": "Paul Thomas",
    "loser_school": "South Dakota State",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 249,
    "winner": "Jim Maidlow",
    "winner_school": "Michigan State",
    "loser": "Fred Johnson",
    "loser_school": "Augustana Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 377,
    "winner": "John Nichols",
    "winner_school": "Navy",
    "loser": "Henk Schenk",
    "loser_school": "Oregon State",
    "result": "Dec 13-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 378,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Tom Foster",
    "loser_school": "Utah State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 379,
    "winner": "Don Buzzard",
    "winner_school": "Iowa State",
    "loser": "Tony Bennett",
    "loser_school": "Oklahoma",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 380,
    "winner": "Rich Whittington",
    "winner_school": "UCLA",
    "loser": "Jim Maidlow",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 479,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "John Nichols",
    "loser_school": "Navy",
    "result": "Dec 10-4"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 480,
    "winner": "Don Buzzard",
    "winner_school": "Iowa State",
    "loser": "Rich Whittington",
    "loser_school": "UCLA",
    "result": "MD 11-3"
  },
  {
    "round": "5thPlace",
    "weight": "191",
    "bout": 540,
    "winner": "John Nichols",
    "winner_school": "Navy",
    "loser": "Tony Bennett",
    "loser_school": "Oklahoma",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 550,
    "winner": "Tom Foster",
    "winner_school": "Utah State",
    "loser": "Rich Whittington",
    "loser_school": "UCLA",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 560,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Don Buzzard",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 399,
    "winner": "Tom Foster",
    "winner_school": "Utah State",
    "loser": "Olaf Drozdov",
    "loser_school": "Maryland",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 400,
    "winner": "Tony Bennett",
    "winner_school": "Oklahoma",
    "loser": "Paul Thomas",
    "loser_school": "South Dakota State",
    "result": "Fall 2:49"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 439,
    "winner": "Tom Foster",
    "winner_school": "Utah State",
    "loser": "John Nichols",
    "loser_school": "Navy",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 440,
    "winner": "Rich Whittington",
    "winner_school": "UCLA",
    "loser": "Tony Bennett",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 174,
    "winner": "Don Holtry",
    "winner_school": "Utah State",
    "loser": "Mike Kelly",
    "loser_school": "Indiana State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 178,
    "winner": "Jeff Richardson",
    "winner_school": "Michigan State",
    "loser": "David Schramm",
    "loser_school": "MIT",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 179,
    "winner": "Tom Beeson",
    "winner_school": "Western State",
    "loser": "Walter Fuller",
    "loser_school": "Southeast Missouri",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 183,
    "winner": "Carel Stith",
    "winner_school": "Nebraska",
    "loser": "Mike Hurlburt",
    "loser_school": "South Dakota State",
    "result": "MD 19-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 251,
    "winner": "Luke Sharpe",
    "winner_school": "Oklahoma",
    "loser": "Dan Kraft",
    "loser_school": "Northwestern",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 252,
    "winner": "Bob McDermott",
    "winner_school": "Lock Haven",
    "loser": "Don Holtry",
    "loser_school": "Utah State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 253,
    "winner": "Bob Billberg",
    "winner_school": "Moorhead State",
    "loser": "Glen Cook",
    "loser_school": "Utah",
    "result": "Fall 2:02"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 254,
    "winner": "Jeff Richardson",
    "winner_school": "Michigan State",
    "loser": "Bob Roop",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 255,
    "winner": "Dave Porter",
    "winner_school": "Michigan",
    "loser": "Tom Beeson",
    "loser_school": "Western State",
    "result": "Fall 2:46"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 256,
    "winner": "Paul Goble",
    "winner_school": "Rutgers",
    "loser": "Ron Gabbett",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 257,
    "winner": "Curley Culp",
    "winner_school": "Arizona State",
    "loser": "Carel Stith",
    "loser_school": "Nebraska",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 258,
    "winner": "Steve Shippos",
    "winner_school": "Iowa State",
    "loser": "Paul Elzey",
    "loser_school": "Toledo",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 381,
    "winner": "Luke Sharpe",
    "winner_school": "Oklahoma",
    "loser": "Bob McDermott",
    "loser_school": "Lock Haven",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 382,
    "winner": "Bob Billberg",
    "winner_school": "Moorhead State",
    "loser": "Jeff Richardson",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 383,
    "winner": "Dave Porter",
    "winner_school": "Michigan",
    "loser": "Paul Goble",
    "loser_school": "Rutgers",
    "result": "Fall 3:28"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 384,
    "winner": "Steve Shippos",
    "winner_school": "Iowa State",
    "loser": "Curley Culp",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 481,
    "winner": "Bob Billberg",
    "winner_school": "Moorhead State",
    "loser": "Luke Sharpe",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 482,
    "winner": "Dave Porter",
    "winner_school": "Michigan",
    "loser": "Steve Shippos",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 541,
    "winner": "Jeff Richardson",
    "winner_school": "Michigan State",
    "loser": "Tom Beeson",
    "loser_school": "Western State",
    "result": "Fall 1:04"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 551,
    "winner": "Luke Sharpe",
    "winner_school": "Oklahoma",
    "loser": "Steve Shippos",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 561,
    "winner": "Dave Porter",
    "winner_school": "Michigan",
    "loser": "Bob Billberg",
    "loser_school": "Moorhead State",
    "result": "MD 15-4"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 401,
    "winner": "Jeff Richardson",
    "winner_school": "Michigan State",
    "loser": "Glen Cook",
    "loser_school": "Utah",
    "result": "Dec 8-1"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 402,
    "winner": "Tom Beeson",
    "winner_school": "Western State",
    "loser": "Paul Goble",
    "loser_school": "Rutgers",
    "result": "Fall 5:22"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 441,
    "winner": "Luke Sharpe",
    "winner_school": "Oklahoma",
    "loser": "Jeff Richardson",
    "loser_school": "Michigan State",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 442,
    "winner": "Steve Shippos",
    "winner_school": "Iowa State",
    "loser": "Tom Beeson",
    "loser_school": "Western State",
    "result": "Dec 10-5"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
