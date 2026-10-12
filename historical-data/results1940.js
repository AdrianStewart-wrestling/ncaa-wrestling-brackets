// 1940 NCAA Division I Wrestling Championships (3/29/1940 to 3/30/1940 at Illinois). Weight classes 121-UNL (8). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1940 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1940-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "121",
    "bout": 18,
    "winner": "Merl Smith",
    "winner_school": "Wyoming",
    "loser": "Robert Levin",
    "loser_school": "CCNY",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 171,
    "winner": "Frank Burgess",
    "winner_school": "Franklin and Marshall",
    "loser": "Ray Tyson",
    "loser_school": "West Virginia",
    "result": "Fall 6:25"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 172,
    "winner": "Casey Fredericks",
    "winner_school": "Purdue",
    "loser": "George Young",
    "loser_school": "Oklahoma",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 173,
    "winner": "Delbert Jensen",
    "winner_school": "Northern Iowa",
    "loser": "John Cooper",
    "loser_school": "St. Lawrence",
    "result": "Fall 4:57"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 174,
    "winner": "Farland Fansher",
    "winner_school": "Kansas State",
    "loser": "Merl Smith",
    "loser_school": "Wyoming",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 175,
    "winner": "Robert Antonacci",
    "winner_school": "Indiana",
    "loser": "Bill Davidson",
    "loser_school": "Ohio",
    "result": "M FOR"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 176,
    "winner": "Charles Parks",
    "winner_school": "Appalachian State",
    "loser": "Kim Hill",
    "loser_school": "Illinois",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 177,
    "winner": "Calvin Mehlhorn",
    "winner_school": "Oklahoma State",
    "loser": "Robert Lungwitz",
    "loser_school": "Dubuque",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "121",
    "bout": 178,
    "winner": "Robert Johnson",
    "winner_school": "Southwestern Oklahoma",
    "loser": "Carl King",
    "loser_school": "Penn State",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 341,
    "winner": "Casey Fredericks",
    "winner_school": "Purdue",
    "loser": "Frank Burgess",
    "loser_school": "Franklin and Marshall",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 342,
    "winner": "Delbert Jensen",
    "winner_school": "Northern Iowa",
    "loser": "Farland Fansher",
    "loser_school": "Kansas State",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 343,
    "winner": "Robert Antonacci",
    "winner_school": "Indiana",
    "loser": "Charles Parks",
    "loser_school": "Appalachian State",
    "result": "Fall 5:18"
  },
  {
    "round": "QuarterFinals",
    "weight": "121",
    "bout": 344,
    "winner": "Calvin Mehlhorn",
    "winner_school": "Oklahoma State",
    "loser": "Robert Johnson",
    "loser_school": "Southwestern Oklahoma",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "121",
    "bout": 461,
    "winner": "Delbert Jensen",
    "winner_school": "Northern Iowa",
    "loser": "Casey Fredericks",
    "loser_school": "Purdue",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "121",
    "bout": 462,
    "winner": "Robert Antonacci",
    "winner_school": "Indiana",
    "loser": "Calvin Mehlhorn",
    "loser_school": "Oklahoma State",
    "result": "Dec"
  },
  {
    "round": "Finals",
    "weight": "121",
    "bout": 551,
    "winner": "Robert Antonacci",
    "winner_school": "Indiana",
    "loser": "Delbert Jensen",
    "loser_school": "Northern Iowa",
    "result": "Dec"
  },
  {
    "round": "RepConsA",
    "weight": "121",
    "bout": 261,
    "winner": "Charles Parks",
    "winner_school": "Appalachian State",
    "loser": "Bill Davidson",
    "loser_school": "Ohio",
    "result": "Dec"
  },
  {
    "round": "RepConsB",
    "weight": "121",
    "bout": 381,
    "winner": "Calvin Mehlhorn",
    "winner_school": "Oklahoma State",
    "loser": "Charles Parks",
    "loser_school": "Appalachian State",
    "result": "Fall 8:00"
  },
  {
    "round": "RepConsC",
    "weight": "121",
    "bout": 421,
    "winner": "Calvin Mehlhorn",
    "winner_school": "Oklahoma State",
    "loser": "Delbert Jensen",
    "loser_school": "Northern Iowa",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 179,
    "winner": "Dale Hanson",
    "winner_school": "Minnesota",
    "loser": "Robert McArdle",
    "loser_school": "West Virginia",
    "result": "Fall 7:45"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 180,
    "winner": "Ed Dillon",
    "winner_school": "Illinois",
    "loser": "Lindo Nangeroni",
    "loser_school": "Rutgers",
    "result": "Fall 8:35"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 181,
    "winner": "Bob Kitt",
    "winner_school": "Oklahoma State",
    "loser": "Ray Stone",
    "loser_school": "Iowa State",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 182,
    "winner": "Peter Bernardino",
    "winner_school": "Temple",
    "loser": "Robert Biren",
    "loser_school": "Cornell Iowa",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 183,
    "winner": "Harold Byrd",
    "winner_school": "Oklahoma",
    "loser": "Phillip Geib",
    "loser_school": "Franklin and Marshall",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 184,
    "winner": "John Hess",
    "winner_school": "Southwestern Oklahoma",
    "loser": "Clarence Shapiro",
    "loser_school": "CCNY",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 185,
    "winner": "Ben Wilson",
    "winner_school": "Indiana",
    "loser": "Milt Gaskill",
    "loser_school": "Appalachian State",
    "result": "Fall 6:52"
  },
  {
    "round": "ChampR2",
    "weight": "128",
    "bout": 186,
    "winner": "Milton Conzett",
    "winner_school": "Dubuque",
    "loser": "Harold Northrup",
    "loser_school": "Wyoming",
    "result": "Fall 7:07"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 345,
    "winner": "Dale Hanson",
    "winner_school": "Minnesota",
    "loser": "Ed Dillon",
    "loser_school": "Illinois",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 346,
    "winner": "Bob Kitt",
    "winner_school": "Oklahoma State",
    "loser": "Peter Bernardino",
    "loser_school": "Temple",
    "result": "Fall 7:17"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 347,
    "winner": "Harold Byrd",
    "winner_school": "Oklahoma",
    "loser": "John Hess",
    "loser_school": "Southwestern Oklahoma",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "128",
    "bout": 348,
    "winner": "Ben Wilson",
    "winner_school": "Indiana",
    "loser": "Milton Conzett",
    "loser_school": "Dubuque",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "128",
    "bout": 463,
    "winner": "Dale Hanson",
    "winner_school": "Minnesota",
    "loser": "Bob Kitt",
    "loser_school": "Oklahoma State",
    "result": "Fall 7:50"
  },
  {
    "round": "SemiFinals",
    "weight": "128",
    "bout": 464,
    "winner": "Harold Byrd",
    "winner_school": "Oklahoma",
    "loser": "Ben Wilson",
    "loser_school": "Indiana",
    "result": "Dec"
  },
  {
    "round": "3rdPlace",
    "weight": "128",
    "bout": 542,
    "winner": "Bob Kitt",
    "winner_school": "Oklahoma State",
    "loser": "John Hess",
    "loser_school": "Southwestern Oklahoma",
    "result": "Dec"
  },
  {
    "round": "Finals",
    "weight": "128",
    "bout": 552,
    "winner": "Harold Byrd",
    "winner_school": "Oklahoma",
    "loser": "Dale Hanson",
    "loser_school": "Minnesota",
    "result": "Dec"
  },
  {
    "round": "RepConsA",
    "weight": "128",
    "bout": 263,
    "winner": "John Hess",
    "winner_school": "Southwestern Oklahoma",
    "loser": "Phillip Geib",
    "loser_school": "Franklin and Marshall",
    "result": "Dec"
  },
  {
    "round": "RepConsA",
    "weight": "128",
    "bout": 264,
    "winner": "Ed Dillon",
    "winner_school": "Illinois",
    "loser": "Robert McArdle",
    "loser_school": "West Virginia",
    "result": "Dec"
  },
  {
    "round": "RepConsB",
    "weight": "128",
    "bout": 383,
    "winner": "John Hess",
    "winner_school": "Southwestern Oklahoma",
    "loser": "Ben Wilson",
    "loser_school": "Indiana",
    "result": "Dec"
  },
  {
    "round": "RepConsB",
    "weight": "128",
    "bout": 384,
    "winner": "Bob Kitt",
    "winner_school": "Oklahoma State",
    "loser": "Ed Dillon",
    "loser_school": "Illinois",
    "result": "Dec"
  },
  {
    "round": "RepConsC",
    "weight": "128",
    "bout": 423,
    "winner": "Dale Hanson",
    "winner_school": "Minnesota",
    "loser": "John Hess",
    "loser_school": "Southwestern Oklahoma",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 187,
    "winner": "Al Whitehurst",
    "winner_school": "Oklahoma State",
    "loser": "Charles Fischer",
    "loser_school": "Ohio",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 188,
    "winner": "Roger Isaacson",
    "winner_school": "Northern Iowa",
    "loser": "George Casparian",
    "loser_school": "Rutgers",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 189,
    "winner": "Willis Kuhn",
    "winner_school": "Iowa State",
    "loser": "Paul Petry",
    "loser_school": "Illinois",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 190,
    "winner": "Fortune Masdeo",
    "winner_school": "San Jose State",
    "loser": "Harry Boyer",
    "loser_school": "Lehigh",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 191,
    "winner": "Joe Roman",
    "winner_school": "Indiana",
    "loser": "Tom Fuller",
    "loser_school": "Washington & Lee",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 192,
    "winner": "Bennie Riggs",
    "winner_school": "Michigan State",
    "loser": "Robert Trapp",
    "loser_school": "Dubuque",
    "result": "Fall 6:45"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 193,
    "winner": "Verle McClelland",
    "winner_school": "Kansas State",
    "loser": "Ray Greening",
    "loser_school": "Northwestern",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "136",
    "bout": 194,
    "winner": "Frank Gleason",
    "winner_school": "Penn State",
    "loser": "Leonard Pomeray",
    "loser_school": "Kent State",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 349,
    "winner": "Al Whitehurst",
    "winner_school": "Oklahoma State",
    "loser": "Roger Isaacson",
    "loser_school": "Northern Iowa",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 350,
    "winner": "Willis Kuhn",
    "winner_school": "Iowa State",
    "loser": "Fortune Masdeo",
    "loser_school": "San Jose State",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 351,
    "winner": "Joe Roman",
    "winner_school": "Indiana",
    "loser": "Bennie Riggs",
    "loser_school": "Michigan State",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "136",
    "bout": 352,
    "winner": "Verle McClelland",
    "winner_school": "Kansas State",
    "loser": "Frank Gleason",
    "loser_school": "Penn State",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "136",
    "bout": 465,
    "winner": "Al Whitehurst",
    "winner_school": "Oklahoma State",
    "loser": "Willis Kuhn",
    "loser_school": "Iowa State",
    "result": "DEF"
  },
  {
    "round": "SemiFinals",
    "weight": "136",
    "bout": 466,
    "winner": "Joe Roman",
    "winner_school": "Indiana",
    "loser": "Verle McClelland",
    "loser_school": "Kansas State",
    "result": "Dec"
  },
  {
    "round": "Finals",
    "weight": "136",
    "bout": 553,
    "winner": "Al Whitehurst",
    "winner_school": "Oklahoma State",
    "loser": "Joe Roman",
    "loser_school": "Indiana",
    "result": "Dec"
  },
  {
    "round": "RepConsA",
    "weight": "136",
    "bout": 265,
    "winner": "Roger Isaacson",
    "winner_school": "Northern Iowa",
    "loser": "Charles Fischer",
    "loser_school": "Ohio",
    "result": "Fall 8:30"
  },
  {
    "round": "RepConsB",
    "weight": "136",
    "bout": 385,
    "winner": "Roger Isaacson",
    "winner_school": "Northern Iowa",
    "loser": "Willis Kuhn",
    "loser_school": "Iowa State",
    "result": "DEF"
  },
  {
    "round": "RepConsC",
    "weight": "136",
    "bout": 425,
    "winner": "Roger Isaacson",
    "winner_school": "Northern Iowa",
    "loser": "Joe Roman",
    "loser_school": "Indiana",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 197,
    "winner": "Al Schacheman",
    "winner_school": "Franklin and Marshall",
    "loser": "Ed Bizak",
    "loser_school": "Ohio",
    "result": "Fall 3:00"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 198,
    "winner": "Glenn Duncan",
    "winner_school": "Kansas State",
    "loser": "Charles Lutz",
    "loser_school": "Illinois",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 199,
    "winner": "Harold Masem",
    "winner_school": "Lehigh",
    "loser": "Carl Nelson",
    "loser_school": "Southwestern Oklahoma",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "145",
    "bout": 200,
    "winner": "Bill Martin",
    "winner_school": "Michigan State",
    "loser": "Morton Brown",
    "loser_school": "CCNY",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 353,
    "winner": "William Combs",
    "winner_school": "Michigan",
    "loser": "Newton Copple",
    "loser_school": "Nebraska",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 354,
    "winner": "Al Schacheman",
    "winner_school": "Franklin and Marshall",
    "loser": "Glenn Duncan",
    "loser_school": "Kansas State",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 355,
    "winner": "Harold Masem",
    "winner_school": "Lehigh",
    "loser": "Bill Martin",
    "loser_school": "Michigan State",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "145",
    "bout": 356,
    "winner": "Seymour Weiss",
    "winner_school": "Indiana",
    "loser": "Gene Tornquist",
    "loser_school": "Cornell Iowa",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 467,
    "winner": "William Combs",
    "winner_school": "Michigan",
    "loser": "Al Schacheman",
    "loser_school": "Franklin and Marshall",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "145",
    "bout": 468,
    "winner": "Harold Masem",
    "winner_school": "Lehigh",
    "loser": "Seymour Weiss",
    "loser_school": "Indiana",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "145",
    "bout": 544,
    "winner": "Al Schacheman",
    "winner_school": "Franklin and Marshall",
    "loser": "Carl Nelson",
    "loser_school": "Southwestern Oklahoma",
    "result": "Dec"
  },
  {
    "round": "Finals",
    "weight": "145",
    "bout": 554,
    "winner": "Harold Masem",
    "winner_school": "Lehigh",
    "loser": "William Combs",
    "loser_school": "Michigan",
    "result": "Dec"
  },
  {
    "round": "RepConsA",
    "weight": "145",
    "bout": 267,
    "winner": "Carl Nelson",
    "winner_school": "Southwestern Oklahoma",
    "loser": "Bill Martin",
    "loser_school": "Michigan State",
    "result": "Fall 8:50"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 387,
    "winner": "Carl Nelson",
    "winner_school": "Southwestern Oklahoma",
    "loser": "Seymour Weiss",
    "loser_school": "Indiana",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "145",
    "bout": 388,
    "winner": "Al Schacheman",
    "winner_school": "Franklin and Marshall",
    "loser": "Newton Copple",
    "loser_school": "Nebraska",
    "result": "Fall 10:35"
  },
  {
    "round": "RepConsC",
    "weight": "145",
    "bout": 427,
    "winner": "William Combs",
    "winner_school": "Michigan",
    "loser": "Carl Nelson",
    "loser_school": "Southwestern Oklahoma",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 358,
    "winner": "Marvin Farrell",
    "winner_school": "Iowa State",
    "loser": "Mel Bruno",
    "loser_school": "San Jose State",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 359,
    "winner": "Harland Danner",
    "winner_school": "Michigan",
    "loser": "Frank Osinski",
    "loser_school": "Temple",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "155",
    "bout": 360,
    "winner": "James Bryant",
    "winner_school": "Lafayette",
    "loser": "Ted Seabrooke",
    "loser_school": "Illinois",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "155",
    "bout": 469,
    "winner": "Vernon Logan",
    "winner_school": "Oklahoma State",
    "loser": "Marvin Farrell",
    "loser_school": "Iowa State",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "155",
    "bout": 470,
    "winner": "Harland Danner",
    "winner_school": "Michigan",
    "loser": "James Bryant",
    "loser_school": "Lafayette",
    "result": "Fall 7:00"
  },
  {
    "round": "Finals",
    "weight": "155",
    "bout": 555,
    "winner": "Vernon Logan",
    "winner_school": "Oklahoma State",
    "loser": "Harland Danner",
    "loser_school": "Michigan",
    "result": "Dec"
  },
  {
    "round": "RepConsC",
    "weight": "155",
    "bout": 429,
    "winner": "Marvin Farrell",
    "winner_school": "Iowa State",
    "loser": "Harland Danner",
    "loser_school": "Michigan",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 211,
    "winner": "Chauncey McDaniel",
    "winner_school": "Indiana",
    "loser": "Keith Collins",
    "loser_school": "Kansas State",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 212,
    "winner": "Richard Moore",
    "winner_school": "Southwestern Oklahoma",
    "loser": "Quentin Joy",
    "loser_school": "Cornell Iowa",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 213,
    "winner": "Ben Schrader",
    "winner_school": "Lehigh",
    "loser": "James Cunningham",
    "loser_school": "Appalachian State",
    "result": "Fall 7:15"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 214,
    "winner": "William Perry",
    "winner_school": "Lafayette",
    "loser": "Sam Linn",
    "loser_school": "Iowa State",
    "result": "Fall 7:10"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 215,
    "winner": "Gene Grenard",
    "winner_school": "Colorado State",
    "loser": "Bob Rhinehart",
    "loser_school": "Temple",
    "result": "Fall 4:44"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 216,
    "winner": "Ken Berry",
    "winner_school": "Illinois",
    "loser": "Philip Lewandowski",
    "loser_school": "Ohio",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 217,
    "winner": "Clay Albright",
    "winner_school": "Oklahoma State",
    "loser": "James Galles",
    "loser_school": "Michigan",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 218,
    "winner": "Joe Demasi",
    "winner_school": "Rutgers",
    "loser": "Norm Willey",
    "loser_school": "Purdue",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 361,
    "winner": "Chauncey McDaniel",
    "winner_school": "Indiana",
    "loser": "Richard Moore",
    "loser_school": "Southwestern Oklahoma",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 362,
    "winner": "Ben Schrader",
    "winner_school": "Lehigh",
    "loser": "William Perry",
    "loser_school": "Lafayette",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 363,
    "winner": "Gene Grenard",
    "winner_school": "Colorado State",
    "loser": "Ken Berry",
    "loser_school": "Illinois",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 364,
    "winner": "Clay Albright",
    "winner_school": "Oklahoma State",
    "loser": "Joe Demasi",
    "loser_school": "Rutgers",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 471,
    "winner": "Chauncey McDaniel",
    "winner_school": "Indiana",
    "loser": "Ben Schrader",
    "loser_school": "Lehigh",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 472,
    "winner": "Gene Grenard",
    "winner_school": "Colorado State",
    "loser": "Clay Albright",
    "loser_school": "Oklahoma State",
    "result": "Dec"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 556,
    "winner": "Gene Grenard",
    "winner_school": "Colorado State",
    "loser": "Chauncey McDaniel",
    "loser_school": "Indiana",
    "result": "Fall 7:47"
  },
  {
    "round": "RepConsA",
    "weight": "165",
    "bout": 271,
    "winner": "Bob Rhinehart",
    "winner_school": "Temple",
    "loser": "Ken Berry",
    "loser_school": "Illinois",
    "result": "DEF"
  },
  {
    "round": "RepConsB",
    "weight": "165",
    "bout": 391,
    "winner": "Clay Albright",
    "winner_school": "Oklahoma State",
    "loser": "Bob Rhinehart",
    "loser_school": "Temple",
    "result": "Fall 9:30"
  },
  {
    "round": "RepConsC",
    "weight": "165",
    "bout": 431,
    "winner": "Clay Albright",
    "winner_school": "Oklahoma State",
    "loser": "Chauncey McDaniel",
    "loser_school": "Indiana",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 219,
    "winner": "Don Nichols",
    "winner_school": "Michigan",
    "loser": "Dick Brenneman",
    "loser_school": "Lehigh",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 221,
    "winner": "Leon Reynard",
    "winner_school": "Kansas State",
    "loser": "Earl VanBebber",
    "loser_school": "Oklahoma State",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 222,
    "winner": "William Hoffman",
    "winner_school": "Rutgers",
    "loser": "Lloyd Black",
    "loser_school": "Temple",
    "result": "WIN-NP"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 223,
    "winner": "Al Crawford",
    "winner_school": "Appalachian State",
    "loser": "Paul Goverdare",
    "loser_school": "Illinois",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 224,
    "winner": "Leb Wizitzer",
    "winner_school": "CCNY",
    "loser": "Denton Caves",
    "loser_school": "Southwestern Oklahoma",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "175",
    "bout": 225,
    "winner": "Garnett Inman",
    "winner_school": "Indiana",
    "loser": "Stanley Koloski",
    "loser_school": "St. Lawrence",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 365,
    "winner": "Don Nichols",
    "winner_school": "Michigan",
    "loser": "James Taylor",
    "loser_school": "Cornell Iowa",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 366,
    "winner": "Leon Reynard",
    "winner_school": "Kansas State",
    "loser": "William Hoffman",
    "loser_school": "Rutgers",
    "result": "Fall 1:53"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 367,
    "winner": "Al Crawford",
    "winner_school": "Appalachian State",
    "loser": "Leb Wizitzer",
    "loser_school": "CCNY",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "175",
    "bout": 368,
    "winner": "Garnett Inman",
    "winner_school": "Indiana",
    "loser": "Joe Aschauer",
    "loser_school": "Kent State",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "175",
    "bout": 473,
    "winner": "Don Nichols",
    "winner_school": "Michigan",
    "loser": "Leon Reynard",
    "loser_school": "Kansas State",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "175",
    "bout": 474,
    "winner": "Garnett Inman",
    "winner_school": "Indiana",
    "loser": "Al Crawford",
    "loser_school": "Appalachian State",
    "result": "Dec"
  },
  {
    "round": "3rdPlace",
    "weight": "175",
    "bout": 547,
    "winner": "Leon Reynard",
    "winner_school": "Kansas State",
    "loser": "Joe Aschauer",
    "loser_school": "Kent State",
    "result": "Dec"
  },
  {
    "round": "Finals",
    "weight": "175",
    "bout": 557,
    "winner": "Don Nichols",
    "winner_school": "Michigan",
    "loser": "Garnett Inman",
    "loser_school": "Indiana",
    "result": "Dec"
  },
  {
    "round": "RepConsA",
    "weight": "175",
    "bout": 273,
    "winner": "James Taylor",
    "winner_school": "Cornell Iowa",
    "loser": "Dick Brenneman",
    "loser_school": "Lehigh",
    "result": "Dec"
  },
  {
    "round": "RepConsA",
    "weight": "175",
    "bout": 274,
    "winner": "Joe Aschauer",
    "winner_school": "Kent State",
    "loser": "Stanley Koloski",
    "loser_school": "St. Lawrence",
    "result": "Fall 11:07"
  },
  {
    "round": "RepConsB",
    "weight": "175",
    "bout": 393,
    "winner": "Leon Reynard",
    "winner_school": "Kansas State",
    "loser": "James Taylor",
    "loser_school": "Cornell Iowa",
    "result": "Fall 10:30"
  },
  {
    "round": "RepConsB",
    "weight": "175",
    "bout": 394,
    "winner": "Joe Aschauer",
    "winner_school": "Kent State",
    "loser": "Al Crawford",
    "loser_school": "Appalachian State",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "175",
    "bout": 433,
    "winner": "Garnett Inman",
    "winner_school": "Indiana",
    "loser": "Leon Reynard",
    "loser_school": "Kansas State",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 227,
    "winner": "George Downes",
    "winner_school": "Ohio State",
    "loser": "George Chiga",
    "loser_school": "Oklahoma State",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 229,
    "winner": "George Hooper",
    "winner_school": "Syracuse",
    "loser": "Forrest Jordan",
    "loser_school": "Michigan",
    "result": "Fall 2:44"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 230,
    "winner": "John Woudenberg",
    "winner_school": "Denver",
    "loser": "John Thomas",
    "loser_school": "Lafayette",
    "result": "Dec"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 231,
    "winner": "John Sikich",
    "winner_school": "Illinois",
    "loser": "Tudor Gardiner",
    "loser_school": "Harvard",
    "result": "Fall 8:39"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 233,
    "winner": "Walter Porowski",
    "winner_school": "Kent State",
    "loser": "Musley Sims",
    "loser_school": "Southwestern Oklahoma",
    "result": "Fall 3:30"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 369,
    "winner": "George Downes",
    "winner_school": "Ohio State",
    "loser": "Howard Buck",
    "loser_school": "Iowa State",
    "result": "Fall 6:30"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 370,
    "winner": "George Hooper",
    "winner_school": "Syracuse",
    "loser": "John Woudenberg",
    "loser_school": "Denver",
    "result": "Dec"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 371,
    "winner": "John Sikich",
    "winner_school": "Illinois",
    "loser": "William Burell",
    "loser_school": "CCNY",
    "result": "Fall 8:14"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 372,
    "winner": "Walter Porowski",
    "winner_school": "Kent State",
    "loser": "Richard Vaughan",
    "loser_school": "Franklin and Marshall",
    "result": "Dec"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 475,
    "winner": "George Downes",
    "winner_school": "Ohio State",
    "loser": "George Hooper",
    "loser_school": "Syracuse",
    "result": "Fall 11:24"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 476,
    "winner": "John Sikich",
    "winner_school": "Illinois",
    "loser": "Walter Porowski",
    "loser_school": "Kent State",
    "result": "Dec"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 558,
    "winner": "George Downes",
    "winner_school": "Ohio State",
    "loser": "John Sikich",
    "loser_school": "Illinois",
    "result": "DEF"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 275,
    "winner": "George Chiga",
    "winner_school": "Oklahoma State",
    "loser": "Howard Buck",
    "loser_school": "Iowa State",
    "result": "Dec"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 395,
    "winner": "George Chiga",
    "winner_school": "Oklahoma State",
    "loser": "George Hooper",
    "loser_school": "Syracuse",
    "result": "Dec"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 435,
    "winner": "George Chiga",
    "winner_school": "Oklahoma State",
    "loser": "John Sikich",
    "loser_school": "Illinois",
    "result": "M FOR"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
