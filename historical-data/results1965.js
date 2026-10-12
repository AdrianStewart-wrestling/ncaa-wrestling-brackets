// 1965 NCAA Division I Wrestling Championships (3/25/1965 to 3/27/1965 at Wyoming). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1965 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1965-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 14,
    "winner": "James Garcia",
    "winner_school": "Colorado",
    "loser": "Jim Lockwood",
    "loser_school": "Montana State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 16,
    "winner": "Mike McNamara",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Dave Range",
    "loser_school": "Miami Ohio",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 18,
    "winner": "Rich Warnke",
    "winner_school": "Lehigh",
    "loser": "Tino Lambros",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 19,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Lou Manns",
    "loser_school": "Syracuse",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 23,
    "winner": "Ernie Gillum",
    "winner_school": "Iowa State",
    "loser": "Joe Grossi",
    "loser_school": "Colorado State",
    "result": "Fall 5:28"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Jim Anderson",
    "winner_school": "Minnesota",
    "loser": "Rich Sofman",
    "loser_school": "Penn",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Glenn McMinn",
    "winner_school": "Arizona State",
    "loser": "James Garcia",
    "loser_school": "Colorado",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Phil Walson",
    "winner_school": "California-Berkeley",
    "loser": "Mike McNamara",
    "loser_school": "Minnesota State-Mankato",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Rich Warnke",
    "winner_school": "Lehigh",
    "loser": "Rehn Moncrief",
    "loser_school": "Air Force",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Frank Murphy",
    "loser_school": "South Dakota State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Jay Windfelder",
    "winner_school": "Penn State",
    "loser": "Ron Iwasaki",
    "loser_school": "Oregon State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Ernie Gillum",
    "winner_school": "Iowa State",
    "loser": "Warren Grubb",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 178,
    "winner": "Don Devine",
    "winner_school": "SIU-Carbondale",
    "loser": "Phil Greek",
    "loser_school": "Georgia Tech",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Glenn McMinn",
    "winner_school": "Arizona State",
    "loser": "Jim Anderson",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Rich Warnke",
    "winner_school": "Lehigh",
    "loser": "Phil Walson",
    "loser_school": "California-Berkeley",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Jay Windfelder",
    "loser_school": "Penn State",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Ernie Gillum",
    "winner_school": "Iowa State",
    "loser": "Don Devine",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Glenn McMinn",
    "winner_school": "Arizona State",
    "loser": "Rich Warnke",
    "loser_school": "Lehigh",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Ernie Gillum",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "115",
    "bout": 531,
    "winner": "Jay Windfelder",
    "winner_school": "Penn State",
    "loser": "James Garcia",
    "loser_school": "Colorado",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Ernie Gillum",
    "winner_school": "Iowa State",
    "loser": "Rich Warnke",
    "loser_school": "Lehigh",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Glenn McMinn",
    "loser_school": "Arizona State",
    "result": "Dec 9-6"
  },
  {
    "round": "RepConsA",
    "weight": "115",
    "bout": 262,
    "winner": "Frank Murphy",
    "winner_school": "South Dakota State",
    "loser": "Lou Manns",
    "loser_school": "Syracuse",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "James Garcia",
    "winner_school": "Colorado",
    "loser": "Jim Anderson",
    "loser_school": "Minnesota",
    "result": "Dec 7-4"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Jay Windfelder",
    "winner_school": "Penn State",
    "loser": "Frank Murphy",
    "loser_school": "South Dakota State",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Rich Warnke",
    "winner_school": "Lehigh",
    "loser": "James Garcia",
    "loser_school": "Colorado",
    "result": "Dec 7-4"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Ernie Gillum",
    "winner_school": "Iowa State",
    "loser": "Jay Windfelder",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 30,
    "winner": "Pete Russo",
    "winner_school": "Arizona State",
    "loser": "Larry Baron",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Mike Berry",
    "winner_school": "Ohio State",
    "loser": "Jeff Lorson",
    "loser_school": "Lock Haven",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "Mac Motokawa",
    "winner_school": "Brigham Young",
    "loser": "Arlin Severson",
    "loser_school": "Adams State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 39,
    "winner": "Rick Kelvington",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Larry Lloyd",
    "loser_school": "Minnesota",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Howie Gangestad",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Ron McBride",
    "loser_school": "Utah State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Dennis Dutsch",
    "winner_school": "Oklahoma State",
    "loser": "Pete Russo",
    "loser_school": "Arizona State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Mike Caruso",
    "winner_school": "Lehigh",
    "loser": "Allen Peterson",
    "loser_school": "Washington State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Mike Berry",
    "winner_school": "Ohio State",
    "loser": "Tom Graves",
    "loser_school": "Colorado State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Mac Motokawa",
    "winner_school": "Brigham Young",
    "loser": "Bobbie Janko",
    "loser_school": "UCLA",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Roger Sebert",
    "winner_school": "Iowa State",
    "loser": "Don LeFevre",
    "loser_school": "Toledo",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Rick Kelvington",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Terry Haise",
    "loser_school": "Syracuse",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Bob Fehrs",
    "winner_school": "Michigan",
    "loser": "Martin Little",
    "loser_school": "Kansas State",
    "result": "Fall 4:25"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Dennis Dutsch",
    "winner_school": "Oklahoma State",
    "loser": "Howie Gangestad",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Mike Caruso",
    "winner_school": "Lehigh",
    "loser": "Mike Berry",
    "loser_school": "Ohio State",
    "result": "Dec 9-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Roger Sebert",
    "winner_school": "Iowa State",
    "loser": "Mac Motokawa",
    "loser_school": "Brigham Young",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Bob Fehrs",
    "winner_school": "Michigan",
    "loser": "Rick Kelvington",
    "loser_school": "Minnesota State-Moorhead",
    "result": "DEF"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Mike Caruso",
    "winner_school": "Lehigh",
    "loser": "Dennis Dutsch",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Bob Fehrs",
    "winner_school": "Michigan",
    "loser": "Roger Sebert",
    "loser_school": "Iowa State",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "123",
    "bout": 532,
    "winner": "Rick Kelvington",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Allen Peterson",
    "loser_school": "Washington State",
    "result": "Dec 7-3"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Roger Sebert",
    "winner_school": "Iowa State",
    "loser": "Dennis Dutsch",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Mike Caruso",
    "winner_school": "Lehigh",
    "loser": "Bob Fehrs",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Allen Peterson",
    "winner_school": "Washington State",
    "loser": "Mike Berry",
    "loser_school": "Ohio State",
    "result": "Fall 3:14"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Rick Kelvington",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Martin Little",
    "loser_school": "Kansas State",
    "result": "Fall 4:22"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Dennis Dutsch",
    "winner_school": "Oklahoma State",
    "loser": "Allen Peterson",
    "loser_school": "Washington State",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Roger Sebert",
    "winner_school": "Iowa State",
    "loser": "Rick Kelvington",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 44,
    "winner": "Don Behm",
    "winner_school": "Michigan State",
    "loser": "Larry Harrison",
    "loser_school": "Colorado State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "Bob Steenlage",
    "winner_school": "Army",
    "loser": "Douglas Robertson",
    "loser_school": "Oregon",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "George Shaeffer",
    "loser_school": "Utah",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Bill Johannesen",
    "winner_school": "Michigan",
    "loser": "Steve Erber",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Jim Rolley",
    "winner_school": "Bloomsburg",
    "loser": "Darold Henry",
    "loser_school": "Brigham Young",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 53,
    "winner": "Joe Peritore",
    "winner_school": "Lehigh",
    "loser": "Robin Bolton",
    "loser_school": "Oregon State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 55,
    "winner": "Dale Stryker",
    "winner_school": "Western State",
    "loser": "Gregg Pittman",
    "loser_school": "Oklahoma",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 57,
    "winner": "Jim Hanson",
    "winner_school": "Colorado",
    "loser": "Jerry Vincent",
    "loser_school": "Toledo",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Don Behm",
    "winner_school": "Michigan State",
    "loser": "Kerin Raftery",
    "loser_school": "Syracuse",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Bob Steenlage",
    "winner_school": "Army",
    "loser": "Scott Caturia",
    "loser_school": "Wyoming",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Don Romine",
    "loser_school": "Northern Colorado",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Bill Johannesen",
    "winner_school": "Michigan",
    "loser": "Wayne Paulsen",
    "loser_school": "South Dakota State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Ron Jones",
    "winner_school": "Iowa State",
    "loser": "Jim Rolley",
    "loser_school": "Bloomsburg",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Joe Peritore",
    "winner_school": "Lehigh",
    "loser": "Don Johnson",
    "loser_school": "Adams State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Bob Campbell",
    "winner_school": "Indiana",
    "loser": "Dale Stryker",
    "loser_school": "Western State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Alan Siegel",
    "winner_school": "California-Berkeley",
    "loser": "Jim Hanson",
    "loser_school": "Colorado",
    "result": "Fall 4:55"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Don Behm",
    "winner_school": "Michigan State",
    "loser": "Bob Steenlage",
    "loser_school": "Army",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Bill Johannesen",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Joe Peritore",
    "winner_school": "Lehigh",
    "loser": "Ron Jones",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Alan Siegel",
    "winner_school": "California-Berkeley",
    "loser": "Bob Campbell",
    "loser_school": "Indiana",
    "result": "Fall 8:46"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Don Behm",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Joe Peritore",
    "winner_school": "Lehigh",
    "loser": "Alan Siegel",
    "loser_school": "California-Berkeley",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "130",
    "bout": 533,
    "winner": "Alan Siegel",
    "winner_school": "California-Berkeley",
    "loser": "Bill Johannesen",
    "loser_school": "Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Don Behm",
    "winner_school": "Michigan State",
    "loser": "Ron Jones",
    "loser_school": "Iowa State",
    "result": "Fall 4:32"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Joe Peritore",
    "loser_school": "Lehigh",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 265,
    "winner": "George Shaeffer",
    "winner_school": "Utah",
    "loser": "Don Romine",
    "loser_school": "Northern Colorado",
    "result": "Fall 4:39"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 266,
    "winner": "Robin Bolton",
    "winner_school": "Oregon State",
    "loser": "Don Johnson",
    "loser_school": "Adams State",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Bill Johannesen",
    "winner_school": "Michigan",
    "loser": "George Shaeffer",
    "loser_school": "Utah",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Ron Jones",
    "winner_school": "Iowa State",
    "loser": "Robin Bolton",
    "loser_school": "Oregon State",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Don Behm",
    "winner_school": "Michigan State",
    "loser": "Bill Johannesen",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Ron Jones",
    "winner_school": "Iowa State",
    "loser": "Alan Siegel",
    "loser_school": "California-Berkeley",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Joe Ganz",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Joe York",
    "winner_school": "Wyoming",
    "loser": "Jim Rush",
    "loser_school": "Western State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Bob Buzzard",
    "winner_school": "Iowa State",
    "loser": "Tony Russo",
    "loser_school": "Arizona State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 65,
    "winner": "Cal Jenkins",
    "winner_school": "Michigan",
    "loser": "Frank O'Korn",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Tony Gusic",
    "winner_school": "Waynesburg",
    "loser": "Butch Dougherty",
    "loser_school": "Colorado",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Wallace Hale",
    "winner_school": "Miami Ohio",
    "loser": "Bob Franciamone",
    "loser_school": "Ithaca",
    "result": "Fall 10:37 SV"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 68,
    "winner": "Bob Robbins",
    "winner_school": "Army",
    "loser": "Doug Ebeling",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Kent Kershner",
    "loser_school": "Montana State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Mike Young",
    "winner_school": "Brigham Young",
    "loser": "Jim Murrin",
    "loser_school": "Syracuse",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 73,
    "winner": "Ron Knoebel",
    "winner_school": "Lycoming",
    "loser": "Jerry Torrance",
    "loser_school": "Northwestern",
    "result": "Fall 2:21"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Ralph Gonshorowski",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Wayne Hicks",
    "winner_school": "Navy",
    "loser": "Joe York",
    "loser_school": "Wyoming",
    "result": "Fall 7:02"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Bob Buzzard",
    "winner_school": "Iowa State",
    "loser": "James Pond",
    "loser_school": "Georgia Tech",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Cal Jenkins",
    "winner_school": "Michigan",
    "loser": "Tony Gusic",
    "loser_school": "Waynesburg",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Bob Robbins",
    "winner_school": "Army",
    "loser": "Wallace Hale",
    "loser_school": "Miami Ohio",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Ed Taylor",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Mike Young",
    "winner_school": "Brigham Young",
    "loser": "Roy Wilbanks",
    "loser_school": "Colorado State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Gene Davis",
    "winner_school": "Oklahoma State",
    "loser": "Ron Knoebel",
    "loser_school": "Lycoming",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Wayne Hicks",
    "winner_school": "Navy",
    "loser": "Mike Sager",
    "loser_school": "Oklahoma",
    "result": "Fall 8:34"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Bob Buzzard",
    "winner_school": "Iowa State",
    "loser": "Cal Jenkins",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Bob Robbins",
    "loser_school": "Army",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Gene Davis",
    "winner_school": "Oklahoma State",
    "loser": "Mike Young",
    "loser_school": "Brigham Young",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Wayne Hicks",
    "winner_school": "Navy",
    "loser": "Bob Buzzard",
    "loser_school": "Iowa State",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Gene Davis",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-4"
  },
  {
    "round": "5thPlace",
    "weight": "137",
    "bout": 534,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Bob Robbins",
    "loser_school": "Army",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Bob Buzzard",
    "winner_school": "Iowa State",
    "loser": "Gene Davis",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Wayne Hicks",
    "loser_school": "Navy",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 268,
    "winner": "Ed Taylor",
    "winner_school": "Bloomsburg",
    "loser": "Kent Kershner",
    "loser_school": "Montana State",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Joe York",
    "loser_school": "Wyoming",
    "result": "Fall 3:50"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Bob Robbins",
    "winner_school": "Army",
    "loser": "Ed Taylor",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Bob Buzzard",
    "winner_school": "Iowa State",
    "loser": "Mike Sager",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Gene Davis",
    "winner_school": "Oklahoma State",
    "loser": "Bob Robbins",
    "loser_school": "Army",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 76,
    "winner": "Ed Franquemont",
    "winner_school": "Harvard",
    "loser": "Allan Sievertsen",
    "loser_school": "Wisconsin",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Ron Ankeny",
    "winner_school": "Minnesota",
    "loser": "Rich Kerr",
    "loser_school": "Nebraska",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "Mark Scureman",
    "winner_school": "Army",
    "loser": "Dennis Herendeen",
    "loser_school": "Brigham Young",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 81,
    "winner": "Bill Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "Joe Arroyo",
    "loser_school": "Colorado",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Bobby Douglas",
    "winner_school": "Oklahoma State",
    "loser": "Daniel Divito",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Nash Tillman",
    "loser_school": "Adams State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 84,
    "winner": "Loren Miller",
    "winner_school": "San Jose State",
    "loser": "Dickie Haxel",
    "loser_school": "Oklahoma",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "Lee Deitrick",
    "winner_school": "Michigan",
    "loser": "Bob Wendell",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Buzz Hays",
    "winner_school": "Arizona State",
    "loser": "Al Lilley",
    "loser_school": "Temple",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 89,
    "winner": "Dick Cook",
    "winner_school": "Michigan State",
    "loser": "Jack Langdon",
    "loser_school": "Colorado State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Jim Crider",
    "winner_school": "Northern Colorado",
    "loser": "Ed Franquemont",
    "loser_school": "Harvard",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Jim Burke",
    "winner_school": "San Francisco State",
    "loser": "Ron Ankeny",
    "loser_school": "Minnesota",
    "result": "Fall 0:49"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Joe Bavaro",
    "winner_school": "Gettysburg",
    "loser": "Mark Scureman",
    "loser_school": "Army",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Bill Blacksmith",
    "winner_school": "Lock Haven",
    "loser": "Bobby Douglas",
    "loser_school": "Oklahoma State",
    "result": "M FOR"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Loren Miller",
    "loser_school": "San Jose State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Lee Deitrick",
    "winner_school": "Michigan",
    "loser": "Dave Stone",
    "loser_school": "Wyoming",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Buzz Hays",
    "winner_school": "Arizona State",
    "loser": "John Schael",
    "loser_school": "Miami Ohio",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Dino Boni",
    "winner_school": "Pittsburgh",
    "loser": "Dick Cook",
    "loser_school": "Michigan State",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Jim Crider",
    "winner_school": "Northern Colorado",
    "loser": "Jim Burke",
    "loser_school": "San Francisco State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Joe Bavaro",
    "winner_school": "Gettysburg",
    "loser": "Bill Blacksmith",
    "loser_school": "Lock Haven",
    "result": "Fall 11:36 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Lee Deitrick",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Buzz Hays",
    "winner_school": "Arizona State",
    "loser": "Dino Boni",
    "loser_school": "Pittsburgh",
    "result": "Fall 6:15"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Joe Bavaro",
    "winner_school": "Gettysburg",
    "loser": "Jim Crider",
    "loser_school": "Northern Colorado",
    "result": "Fall 6:58"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Buzz Hays",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "147",
    "bout": 535,
    "winner": "Lee Deitrick",
    "winner_school": "Michigan",
    "loser": "Jim Crider",
    "loser_school": "Northern Colorado",
    "result": "Dec 10-5"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Mark Scureman",
    "winner_school": "Army",
    "loser": "Buzz Hays",
    "loser_school": "Arizona State",
    "result": "Dec 10-4"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Joe Bavaro",
    "loser_school": "Gettysburg",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 270,
    "winner": "Loren Miller",
    "winner_school": "San Jose State",
    "loser": "Nash Tillman",
    "loser_school": "Adams State",
    "result": "Fall 4:44"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Mark Scureman",
    "winner_school": "Army",
    "loser": "Bill Blacksmith",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Lee Deitrick",
    "winner_school": "Michigan",
    "loser": "Loren Miller",
    "loser_school": "San Jose State",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Mark Scureman",
    "winner_school": "Army",
    "loser": "Jim Crider",
    "loser_school": "Northern Colorado",
    "result": "Fall 4:09"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Buzz Hays",
    "winner_school": "Arizona State",
    "loser": "Lee Deitrick",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 92,
    "winner": "Geoff Stephens",
    "winner_school": "Cornell",
    "loser": "Jim Kamman",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Dennis Palmer",
    "loser_school": "Bowling Green",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "Richard DeMoss",
    "winner_school": "Kansas State",
    "loser": "Harlan Heinz",
    "loser_school": "Northern Colorado",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "Bob Mitchell",
    "winner_school": "Oregon",
    "loser": "Dennis Mangrum",
    "loser_school": "Utah",
    "result": "Fall 7:47"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 98,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Kurt Kuppinger",
    "loser_school": "Syracuse",
    "result": "Fall 4:31"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 99,
    "winner": "Elmer Beale",
    "winner_school": "Wisconsin",
    "loser": "Bob McIntyre",
    "loser_school": "Montana State",
    "result": "Fall 6:57"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Art Martori",
    "loser_school": "Arizona State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "Jerry Seaman",
    "winner_school": "Penn State",
    "loser": "Don Bennett",
    "loser_school": "Indiana",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "David Harle",
    "winner_school": "Oregon State",
    "loser": "Harley Ferguson",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 105,
    "winner": "Steve Epperson",
    "winner_school": "Brigham Young",
    "loser": "Ed Sharkness",
    "loser_school": "Army",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Geoff Stephens",
    "winner_school": "Cornell",
    "loser": "Bruce McDowell",
    "loser_school": "Colorado",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Frank Eisenhower",
    "loser_school": "Lock Haven",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Richard DeMoss",
    "winner_school": "Kansas State",
    "loser": "Charles Nixon",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Bob Mitchell",
    "loser_school": "Oregon",
    "result": "Fall 5:17"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Elmer Beale",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Jerry Seaman",
    "winner_school": "Penn State",
    "loser": "George McCreery",
    "loser_school": "SIU-Carbondale",
    "result": "Fall 6:01"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Bill Lam",
    "winner_school": "Oklahoma",
    "loser": "David Harle",
    "loser_school": "Oregon State",
    "result": "Fall 10:21 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Clayton Beattie",
    "winner_school": "Illinois",
    "loser": "Steve Epperson",
    "loser_school": "Brigham Young",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Geoff Stephens",
    "loser_school": "Cornell",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Richard DeMoss",
    "loser_school": "Kansas State",
    "result": "MD 12-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Seaman",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Bill Lam",
    "winner_school": "Oklahoma",
    "loser": "Clayton Beattie",
    "loser_school": "Illinois",
    "result": "Fall 5:58"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Gordon Hassman",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Bill Lam",
    "winner_school": "Oklahoma",
    "loser": "Mike Reding",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 536,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Geoff Stephens",
    "loser_school": "Cornell",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Clayton Beattie",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Bill Lam",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Frank Eisenhower",
    "winner_school": "Lock Haven",
    "loser": "Dennis Palmer",
    "loser_school": "Bowling Green",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Geoff Stephens",
    "winner_school": "Cornell",
    "loser": "Frank Eisenhower",
    "loser_school": "Lock Haven",
    "result": "Dec 2-1 SV"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Clayton Beattie",
    "winner_school": "Illinois",
    "loser": "David Harle",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Geoff Stephens",
    "loser_school": "Cornell",
    "result": "Fall 5:55"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Clayton Beattie",
    "winner_school": "Illinois",
    "loser": "Mike Reding",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Dan Groski",
    "winner_school": "Brigham Young",
    "loser": "Dave Reinbolt",
    "loser_school": "Ohio State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Marty Strayer",
    "winner_school": "Penn State",
    "loser": "Jim Brownlee",
    "loser_school": "Colorado State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Vic Marcucci",
    "winner_school": "Iowa State",
    "loser": "Carl Monahan",
    "loser_school": "Utah",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Len Kauffman",
    "winner_school": "Oregon State",
    "loser": "John Alexis",
    "loser_school": "Minnesota State-Mankato",
    "result": "Fall 5:22"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "Lew Roberts",
    "loser_school": "Syracuse",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Ken Haltenhoff",
    "winner_school": "Yale",
    "loser": "Charles Welter",
    "loser_school": "Kent State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "John Carr",
    "winner_school": "Wilkes",
    "loser": "George Dyche",
    "loser_school": "Coe College",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Roy Brewer",
    "winner_school": "Oklahoma State",
    "loser": "Dan Groski",
    "loser_school": "Brigham Young",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Marty Strayer",
    "winner_school": "Penn State",
    "loser": "Mike Zrimm",
    "loser_school": "Waynesburg",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Vic Marcucci",
    "winner_school": "Iowa State",
    "loser": "Dave Palmer",
    "loser_school": "Navy",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Len Kauffman",
    "winner_school": "Oregon State",
    "loser": "John Klein",
    "loser_school": "Minnesota",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "Tom Boettcher",
    "loser_school": "Air Force",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Ken Haltenhoff",
    "winner_school": "Yale",
    "loser": "Bill Byers",
    "loser_school": "Northern Colorado",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "John Carr",
    "winner_school": "Wilkes",
    "loser": "Leo Derock",
    "loser_school": "Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Bob Anderson",
    "winner_school": "Adams State",
    "loser": "Rick Bay",
    "loser_school": "Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Marty Strayer",
    "winner_school": "Penn State",
    "loser": "Roy Brewer",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Len Kauffman",
    "winner_school": "Oregon State",
    "loser": "Vic Marcucci",
    "loser_school": "Iowa State",
    "result": "Fall 8:37"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "Ken Haltenhoff",
    "loser_school": "Yale",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Bob Anderson",
    "winner_school": "Adams State",
    "loser": "John Carr",
    "loser_school": "Wilkes",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Len Kauffman",
    "winner_school": "Oregon State",
    "loser": "Marty Strayer",
    "loser_school": "Penn State",
    "result": "Fall 2:12"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "Bob Anderson",
    "loser_school": "Adams State",
    "result": "Dec 7-0"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Marty Strayer",
    "winner_school": "Penn State",
    "loser": "Bob Anderson",
    "loser_school": "Adams State",
    "result": "Dec 4-0"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Vic Marcucci",
    "winner_school": "Iowa State",
    "loser": "Ken Haltenhoff",
    "loser_school": "Yale",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Greg Ruth",
    "winner_school": "Oklahoma",
    "loser": "Len Kauffman",
    "loser_school": "Oregon State",
    "result": "Dec 10-6"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 273,
    "winner": "John Klein",
    "winner_school": "Minnesota",
    "loser": "John Alexis",
    "loser_school": "Minnesota State-Mankato",
    "result": "Fall 5:41"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 274,
    "winner": "Lew Roberts",
    "winner_school": "Syracuse",
    "loser": "Tom Boettcher",
    "loser_school": "Air Force",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Vic Marcucci",
    "winner_school": "Iowa State",
    "loser": "John Klein",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Ken Haltenhoff",
    "winner_school": "Yale",
    "loser": "Lew Roberts",
    "loser_school": "Syracuse",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Vic Marcucci",
    "winner_school": "Iowa State",
    "loser": "Marty Strayer",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Ken Haltenhoff",
    "winner_school": "Yale",
    "loser": "Bob Anderson",
    "loser_school": "Adams State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Bob Ramstad",
    "winner_school": "Minnesota",
    "loser": "Charles Meyers",
    "loser_school": "Colorado State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Terry McCarthy",
    "winner_school": "Colorado",
    "loser": "Alf Haerem",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Roger Mickish",
    "winner_school": "Oklahoma",
    "loser": "Al Pfeltz",
    "loser_school": "Air Force",
    "result": "Fall 4:40"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Bob Gary",
    "loser_school": "Waynesburg",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Chris Stowell",
    "winner_school": "Michigan",
    "loser": "Darrell Dillworth",
    "loser_school": "Northern Colorado",
    "result": "Fall 8:46"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Dick Ernst",
    "winner_school": "Northwestern",
    "loser": "Reiner Prawitt",
    "loser_school": "Utah",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Gerry Franzen",
    "winner_school": "Navy",
    "loser": "Tom Foster",
    "loser_school": "Utah State",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Bob Ramstad",
    "winner_school": "Minnesota",
    "loser": "Tim Geiger",
    "loser_school": "Maryland",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Terry McCarthy",
    "loser_school": "Colorado",
    "result": "Fall 1:38"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Roger Mickish",
    "winner_school": "Oklahoma",
    "loser": "Bob Gibson",
    "loser_school": "Denison",
    "result": "Fall 5:52"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Frank Dolce",
    "loser_school": "Adams State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Chris Stowell",
    "winner_school": "Michigan",
    "loser": "Tom Schlendorf",
    "loser_school": "Syracuse",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Dick Ernst",
    "loser_school": "Northwestern",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Gerry Franzen",
    "winner_school": "Navy",
    "loser": "Ron Perey",
    "loser_school": "Miami Ohio",
    "result": "Fall 4:20"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Charles Tribble",
    "winner_school": "Arizona State",
    "loser": "Lee Hall",
    "loser_school": "Pittsburgh",
    "result": "Fall 1:47"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Bob Ramstad",
    "loser_school": "Minnesota",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Roger Mickish",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Chris Stowell",
    "loser_school": "Michigan",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Charles Tribble",
    "winner_school": "Arizona State",
    "loser": "Gerry Franzen",
    "loser_school": "Navy",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Swope",
    "loser_school": "Lock Haven",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Charles Tribble",
    "loser_school": "Arizona State",
    "result": "Dec 6-0"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Chris Stowell",
    "loser_school": "Michigan",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Charles Tribble",
    "winner_school": "Arizona State",
    "loser": "Roger Mickish",
    "loser_school": "Oklahoma",
    "result": "Fall 1:40"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Bill Harlow",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 275,
    "winner": "Frank Dolce",
    "winner_school": "Adams State",
    "loser": "Bob Gary",
    "loser_school": "Waynesburg",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Roger Mickish",
    "winner_school": "Oklahoma",
    "loser": "Frank Dolce",
    "loser_school": "Adams State",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Chris Stowell",
    "winner_school": "Michigan",
    "loser": "Dick Ernst",
    "loser_school": "Northwestern",
    "result": "Dec 9-4"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Roger Mickish",
    "winner_school": "Oklahoma",
    "loser": "Jerry Swope",
    "loser_school": "Lock Haven",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Charles Tribble",
    "winner_school": "Arizona State",
    "loser": "Chris Stowell",
    "loser_school": "Michigan",
    "result": "Fall 1:01"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 142,
    "winner": "Steve Speers",
    "winner_school": "Temple",
    "loser": "Gary Storm",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 144,
    "winner": "Allen Keller",
    "winner_school": "Colorado State",
    "loser": "LaVerne Allers",
    "loser_school": "Nebraska",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 146,
    "winner": "Jack Brisco",
    "winner_school": "Oklahoma State",
    "loser": "Henk Schenk",
    "loser_school": "Oregon State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 147,
    "winner": "Tony Bennett",
    "winner_school": "Oklahoma",
    "loser": "Pete Guthrie",
    "loser_school": "Akron",
    "result": "Fall 5:54"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 149,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "Ken Wylie",
    "loser_school": "Brigham Young",
    "result": "Dec 3-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 151,
    "winner": "Dan Pernat",
    "winner_school": "Wisconsin",
    "loser": "Lenard Hansen",
    "loser_school": "Utah State",
    "result": "Dec 2-0 SV"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Al Rozman",
    "winner_school": "Western State",
    "loser": "Marv Kizerian",
    "loser_school": "Utah",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Steve Speers",
    "winner_school": "Temple",
    "loser": "Dave Drahn",
    "loser_school": "Colorado",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Allen Keller",
    "winner_school": "Colorado State",
    "loser": "Ellery Seitz",
    "loser_school": "Penn State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Jack Brisco",
    "winner_school": "Oklahoma State",
    "loser": "Larry Lane",
    "loser_school": "Northern Colorado",
    "result": "Fall 7:05"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Tony Bennett",
    "winner_school": "Oklahoma",
    "loser": "Tom Abraham",
    "loser_school": "Army",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "John Nichols",
    "loser_school": "Navy",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Dan Pernat",
    "winner_school": "Wisconsin",
    "loser": "Gary Lowham",
    "loser_school": "Wyoming",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 242,
    "winner": "Jim Homan",
    "winner_school": "Iowa State",
    "loser": "Gerry Everling",
    "loser_school": "Syracuse",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Al Rozman",
    "winner_school": "Western State",
    "loser": "Steve Speers",
    "loser_school": "Temple",
    "result": "Fall 7:16"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Jack Brisco",
    "winner_school": "Oklahoma State",
    "loser": "Allen Keller",
    "loser_school": "Colorado State",
    "result": "Fall 4:55"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "Tony Bennett",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Dan Pernat",
    "winner_school": "Wisconsin",
    "loser": "Jim Homan",
    "loser_school": "Iowa State",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Jack Brisco",
    "winner_school": "Oklahoma State",
    "loser": "Al Rozman",
    "loser_school": "Western State",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Dan Pernat",
    "winner_school": "Wisconsin",
    "loser": "Bob Spaly",
    "loser_school": "Michigan",
    "result": "Fall 10:17 SV"
  },
  {
    "round": "5thPlace",
    "weight": "191",
    "bout": 539,
    "winner": "Al Rozman",
    "winner_school": "Western State",
    "loser": "Lenard Hansen",
    "loser_school": "Utah State",
    "result": "Dec 1-0"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "Allen Keller",
    "loser_school": "Colorado State",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Jack Brisco",
    "winner_school": "Oklahoma State",
    "loser": "Dan Pernat",
    "loser_school": "Wisconsin",
    "result": "Fall 6:32"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 277,
    "winner": "Henk Schenk",
    "winner_school": "Oregon State",
    "loser": "Larry Lane",
    "loser_school": "Northern Colorado",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 278,
    "winner": "Lenard Hansen",
    "winner_school": "Utah State",
    "loser": "Gary Lowham",
    "loser_school": "Wyoming",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Allen Keller",
    "winner_school": "Colorado State",
    "loser": "Henk Schenk",
    "loser_school": "Oregon State",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Lenard Hansen",
    "winner_school": "Utah State",
    "loser": "Jim Homan",
    "loser_school": "Iowa State",
    "result": "Fall 2:40"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Allen Keller",
    "winner_school": "Colorado State",
    "loser": "Al Rozman",
    "loser_school": "Western State",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "Lenard Hansen",
    "loser_school": "Utah State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Carel Stith",
    "winner_school": "Nebraska",
    "loser": "Jeff Richardson",
    "loser_school": "Michigan State",
    "result": "Fall 10:17 SV"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Bob Broughton",
    "winner_school": "Utah State",
    "loser": "Bob Billberg",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Olaf Drozdov",
    "winner_school": "Maryland",
    "loser": "Jon Staebler",
    "loser_school": "Minnesota",
    "result": "Fall 7:24"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Jim Nance",
    "winner_school": "Syracuse",
    "loser": "Mike Koeller",
    "loser_school": "Michigan",
    "result": "Fall 6:34"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Ted Tuinstra",
    "winner_school": "Iowa State",
    "loser": "Jan Laux",
    "loser_school": "Colorado State",
    "result": "Fall 0:42"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Russ Winer",
    "winner_school": "Oklahoma State",
    "loser": "Ron Wright",
    "loser_school": "Wyoming",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Mike Pierro",
    "winner_school": "Minnesota State-Mankato",
    "loser": "John Illengwarth",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Dick Arrington",
    "winner_school": "Notre Dame",
    "loser": "Bruce Jacobsohn",
    "loser_school": "Penn",
    "result": "Fall 3:23"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Bob Broughton",
    "winner_school": "Utah State",
    "loser": "Carel Stith",
    "loser_school": "Nebraska",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Jim Nance",
    "winner_school": "Syracuse",
    "loser": "Olaf Drozdov",
    "loser_school": "Maryland",
    "result": "Fall 5:05"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Russ Winer",
    "winner_school": "Oklahoma State",
    "loser": "Ted Tuinstra",
    "loser_school": "Iowa State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Dick Arrington",
    "winner_school": "Notre Dame",
    "loser": "Mike Pierro",
    "loser_school": "Minnesota State-Mankato",
    "result": "Fall 2:50"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Jim Nance",
    "winner_school": "Syracuse",
    "loser": "Bob Broughton",
    "loser_school": "Utah State",
    "result": "Fall 8:15"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Russ Winer",
    "winner_school": "Oklahoma State",
    "loser": "Dick Arrington",
    "loser_school": "Notre Dame",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Ted Tuinstra",
    "winner_school": "Iowa State",
    "loser": "Mike Koeller",
    "loser_school": "Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Dick Arrington",
    "winner_school": "Notre Dame",
    "loser": "Bob Broughton",
    "loser_school": "Utah State",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Jim Nance",
    "winner_school": "Syracuse",
    "loser": "Russ Winer",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Mike Koeller",
    "winner_school": "Michigan",
    "loser": "Olaf Drozdov",
    "loser_school": "Maryland",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Ted Tuinstra",
    "winner_school": "Iowa State",
    "loser": "Ron Wright",
    "loser_school": "Wyoming",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Bob Broughton",
    "winner_school": "Utah State",
    "loser": "Mike Koeller",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Dick Arrington",
    "winner_school": "Notre Dame",
    "loser": "Ted Tuinstra",
    "loser_school": "Iowa State",
    "result": "Dec 1-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
