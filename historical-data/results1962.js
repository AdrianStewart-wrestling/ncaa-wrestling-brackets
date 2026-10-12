// 1962 NCAA Division I Wrestling Championships (3/22/1962 to 3/24/1962 at Oklahoma State). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1962 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1962-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Wally Curtis",
    "winner_school": "Oklahoma",
    "loser": "Bob Moore",
    "loser_school": "Ohio State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Isadore Ramos",
    "loser_school": "SIU-Carbondale",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Fran McCann",
    "winner_school": "Iowa",
    "loser": "Ed Fletcher",
    "loser_school": "Oregon State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Mark McCracken",
    "winner_school": "Oklahoma State",
    "loser": "Van Doughty",
    "loser_school": "Western State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Okla Johnson",
    "winner_school": "Michigan State",
    "loser": "Junior Sandoval",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "John DeAno",
    "winner_school": "Illinois",
    "loser": "Bill Merriam",
    "loser_school": "Lehigh",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Mike Grandstaff",
    "winner_school": "Virginia Tech",
    "loser": "Wally Curtis",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Fran McCann",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Mark McCracken",
    "winner_school": "Oklahoma State",
    "loser": "Okla Johnson",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Gil Sanchez",
    "winner_school": "Colorado State",
    "loser": "John DeAno",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Mike Grandstaff",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Mark McCracken",
    "winner_school": "Oklahoma State",
    "loser": "Gil Sanchez",
    "loser_school": "Colorado State",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Okla Johnson",
    "winner_school": "Michigan State",
    "loser": "Fran McCann",
    "loser_school": "Iowa",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Mark McCracken",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Fran McCann",
    "winner_school": "Iowa",
    "loser": "Isadore Ramos",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 11-7"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Okla Johnson",
    "winner_school": "Michigan State",
    "loser": "Van Doughty",
    "loser_school": "Western State",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Fran McCann",
    "winner_school": "Iowa",
    "loser": "Mike Grandstaff",
    "loser_school": "Virginia Tech",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Okla Johnson",
    "winner_school": "Michigan State",
    "loser": "Gil Sanchez",
    "loser_school": "Colorado State",
    "result": "M FOR"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 28,
    "winner": "Don Pike",
    "winner_school": "Rutgers",
    "loser": "Dave Apling",
    "loser_school": "Toledo",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 29,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "George Jurinek",
    "loser_school": "Illinois",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 32,
    "winner": "L.A. Dougherty",
    "winner_school": "Colorado",
    "loser": "Neal Yoshida",
    "loser_school": "Fresno State",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 36,
    "winner": "Rick Martin",
    "winner_school": "Pittsburgh",
    "loser": "Jerry Perez",
    "loser_school": "Oregon State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 37,
    "winner": "Frank Coniglio",
    "winner_school": "SIU-Carbondale",
    "loser": "Dave Hansen",
    "loser_school": "Wyoming",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 40,
    "winner": "Ronald Thompson",
    "winner_school": "Coe College",
    "loser": "Mack Riley",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Norm Parker",
    "winner_school": "Iowa",
    "loser": "Don Pike",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "Lee Westervelt",
    "loser_school": "Baldwin Wallace",
    "result": "Fall 6:48"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "L.A. Dougherty",
    "loser_school": "Colorado",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Claude Gonzales",
    "winner_school": "Colorado State",
    "loser": "Dave Unruh",
    "loser_school": "Kansas State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Rick Martin",
    "winner_school": "Pittsburgh",
    "loser": "Don Neff",
    "loser_school": "Northern Colorado",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Frank Coniglio",
    "winner_school": "SIU-Carbondale",
    "loser": "Ron Maunder",
    "loser_school": "Maryland",
    "result": "Fall 5:56"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Ronald Thompson",
    "loser_school": "Coe College",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Frank Freeman",
    "winner_school": "Northern Iowa",
    "loser": "Lee Wolfe",
    "loser_school": "Lycoming",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "Norm Parker",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Claude Gonzales",
    "loser_school": "Colorado State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Rick Martin",
    "winner_school": "Pittsburgh",
    "loser": "Frank Coniglio",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Frank Freeman",
    "winner_school": "Northern Iowa",
    "loser": "Fred Powell",
    "loser_school": "Lock Haven",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Mike Nissen",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Frank Freeman",
    "winner_school": "Northern Iowa",
    "loser": "Rick Martin",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "Rick Martin",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Frank Freeman",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Claude Gonzales",
    "winner_school": "Colorado State",
    "loser": "L.A. Dougherty",
    "loser_school": "Colorado",
    "result": "Dec 8-5"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Lee Wolfe",
    "loser_school": "Lycoming",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "Claude Gonzales",
    "loser_school": "Colorado State",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Rick Martin",
    "winner_school": "Pittsburgh",
    "loser": "Fred Powell",
    "loser_school": "Lock Haven",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 45,
    "winner": "Pat Smartt",
    "winner_school": "Lehigh",
    "loser": "Loyde Romero",
    "loser_school": "Colorado",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Pete Gilchrist",
    "loser_school": "North Carolina",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 49,
    "winner": "Wayne Simons",
    "winner_school": "Oklahoma State",
    "loser": "Bob Hollingshead",
    "loser_school": "Western State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 52,
    "winner": "Bill Kehrig",
    "winner_school": "Lycoming",
    "loser": "Pat McCormick",
    "loser_school": "Washington & Jefferson",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 53,
    "winner": "Charles Walizer",
    "winner_school": "Lock Haven",
    "loser": "Gary Joseph",
    "loser_school": "Ohio State",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 57,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Ralph Messerli",
    "loser_school": "Northwest Missouri",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Al DeLeon",
    "winner_school": "Minnesota State",
    "loser": "John Fettes",
    "loser_school": "Kansas State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Pat Smartt",
    "winner_school": "Lehigh",
    "loser": "Bill Aossey",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Sam Bossert",
    "loser_school": "Maryland",
    "result": "Fall 4:26"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Eddie Davies",
    "winner_school": "Fresno State",
    "loser": "Wayne Simons",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Bill Kehrig",
    "winner_school": "Lycoming",
    "loser": "Cliff Cox",
    "loser_school": "Chicago University",
    "result": "Fall 7:48"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Dave Jensen",
    "winner_school": "Northern Iowa",
    "loser": "Charles Walizer",
    "loser_school": "Lock Haven",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Lew Kennedy",
    "winner_school": "Minnesota",
    "loser": "Kent Swedlund",
    "loser_school": "Colorado State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Neil Leitner",
    "loser_school": "Wisconsin",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Al DeLeon",
    "winner_school": "Minnesota State",
    "loser": "Pat Smartt",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Eddie Davies",
    "loser_school": "Fresno State",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Dave Jensen",
    "winner_school": "Northern Iowa",
    "loser": "Bill Kehrig",
    "loser_school": "Lycoming",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Lew Kennedy",
    "loser_school": "Minnesota",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Al DeLeon",
    "winner_school": "Minnesota State",
    "loser": "Tom Huff",
    "loser_school": "Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Dave Jensen",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Lew Kennedy",
    "loser_school": "Minnesota",
    "result": "Fall 1:08"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Al DeLeon",
    "loser_school": "Minnesota State",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 266,
    "winner": "Neil Leitner",
    "winner_school": "Wisconsin",
    "loser": "Ralph Messerli",
    "loser_school": "Northwest Missouri",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Pat Smartt",
    "winner_school": "Lehigh",
    "loser": "John Fettes",
    "loser_school": "Kansas State",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Lew Kennedy",
    "winner_school": "Minnesota",
    "loser": "Neil Leitner",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Pat Smartt",
    "loser_school": "Lehigh",
    "result": "MD 8-0"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Lew Kennedy",
    "winner_school": "Minnesota",
    "loser": "Dave Jensen",
    "loser_school": "Northern Iowa",
    "result": "M FOR"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "Joe Piccioni",
    "loser_school": "Ohio State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 61,
    "winner": "Roy Wilbanks",
    "winner_school": "Colorado State",
    "loser": "John Day",
    "loser_school": "Lock Haven",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Ron Finley",
    "winner_school": "Oregon State",
    "loser": "Terry Shockley",
    "loser_school": "Augustana Illinois",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 68,
    "winner": "Tom Hollingshead",
    "winner_school": "Western State",
    "loser": "Thad Wolfe",
    "loser_school": "Air Force",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Curt Alexander",
    "winner_school": "Lehigh",
    "loser": "Elmer Crider",
    "loser_school": "Northern Colorado",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 72,
    "winner": "John Zolikoff",
    "winner_school": "Pittsburgh",
    "loser": "Larry Rosica",
    "loser_school": "Iowa State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "Joe DiBella",
    "loser_school": "Coast Guard",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Mike Harman",
    "winner_school": "Navy",
    "loser": "Roy Wilbanks",
    "loser_school": "Colorado State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Tom Mulder",
    "winner_school": "Michigan State",
    "loser": "Ron Finley",
    "loser_school": "Oregon State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Dan Fix",
    "winner_school": "Colorado Mines",
    "loser": "Mike Leta",
    "loser_school": "Rutgers",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Bill Carter",
    "winner_school": "Oklahoma",
    "loser": "Tom Hollingshead",
    "loser_school": "Western State",
    "result": "Fall 2:45"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Curt Alexander",
    "winner_school": "Lehigh",
    "loser": "Charles Rose",
    "loser_school": "Purdue",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Larry Janis",
    "winner_school": "Miami Ohio",
    "loser": "John Zolikoff",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Doug Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Tom Curtis",
    "loser_school": "Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "Mike Harman",
    "loser_school": "Navy",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Dan Fix",
    "winner_school": "Colorado Mines",
    "loser": "Tom Mulder",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Bill Carter",
    "winner_school": "Oklahoma",
    "loser": "Curt Alexander",
    "loser_school": "Lehigh",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Doug Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Larry Janis",
    "loser_school": "Miami Ohio",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "Dan Fix",
    "loser_school": "Colorado Mines",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Bill Carter",
    "winner_school": "Oklahoma",
    "loser": "Doug Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Doug Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Dan Fix",
    "loser_school": "Colorado Mines",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Bill Carter",
    "winner_school": "Oklahoma",
    "loser": "Bill Dotson",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 267,
    "winner": "Joe DiBella",
    "winner_school": "Coast Guard",
    "loser": "Joe Piccioni",
    "loser_school": "Ohio State",
    "result": "Dec 7-6"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Mike Harman",
    "winner_school": "Navy",
    "loser": "Joe DiBella",
    "loser_school": "Coast Guard",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Curt Alexander",
    "winner_school": "Lehigh",
    "loser": "Tom Hollingshead",
    "loser_school": "Western State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Dan Fix",
    "winner_school": "Colorado Mines",
    "loser": "Mike Harman",
    "loser_school": "Navy",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Doug Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Curt Alexander",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 76,
    "winner": "Sydney Walston",
    "winner_school": "Iowa",
    "loser": "Larold Peterson",
    "loser_school": "Minnesota State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 77,
    "winner": "Joe Seay",
    "winner_school": "Kansas State",
    "loser": "Tom Norton",
    "loser_school": "Colorado State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Monty Byington",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 79,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Pat Coniglio",
    "loser_school": "SIU-Carbondale",
    "result": "Fall 4:24"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "Bob Sheppard",
    "winner_school": "Oklahoma State",
    "loser": "Walter Parker",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 81,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Henry Mazzoni",
    "loser_school": "Rutgers",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 84,
    "winner": "Orlando Iacovelli",
    "winner_school": "Ithaca",
    "loser": "Bud Belz",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "Pat Varre",
    "winner_school": "Maryland",
    "loser": "Pat Reilly",
    "loser_school": "Toledo",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 86,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Ron Johnson",
    "loser_school": "Washington",
    "result": "Fall 7:39"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Lonnie Rubis",
    "winner_school": "Minnesota",
    "loser": "Toby Zweygardt",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 88,
    "winner": "Doug Rickard",
    "winner_school": "Northern Colorado",
    "loser": "Bill Gutermuth",
    "loser_school": "Lycoming",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 89,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Harold Thompson",
    "loser_school": "Nebraska",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Daryl Kelvington",
    "winner_school": "Pittsburgh",
    "loser": "Sydney Walston",
    "loser_school": "Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Joe Seay",
    "winner_school": "Kansas State",
    "loser": "Virgil Carr",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Bob Sheppard",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Willis Johnson",
    "loser_school": "North Carolina",
    "result": "Fall 3:45"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Orlando Iacovelli",
    "winner_school": "Ithaca",
    "loser": "Jim Sanford",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Pat Varre",
    "loser_school": "Maryland",
    "result": "Fall 4:59"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Lonnie Rubis",
    "winner_school": "Minnesota",
    "loser": "Doug Rickard",
    "loser_school": "Northern Colorado",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Truman Sandelin",
    "loser_school": "Western State",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Daryl Kelvington",
    "winner_school": "Pittsburgh",
    "loser": "Joe Seay",
    "loser_school": "Kansas State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Jerry Frude",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Orlando Iacovelli",
    "winner_school": "Ithaca",
    "loser": "Bob Marshall",
    "loser_school": "Purdue",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Lonnie Rubis",
    "loser_school": "Minnesota",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Daryl Kelvington",
    "loser_school": "Pittsburgh",
    "result": "Fall 1:29"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Orlando Iacovelli",
    "loser_school": "Ithaca",
    "result": "Dec 7-2"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Harold Thompson",
    "winner_school": "Nebraska",
    "loser": "Daryl Kelvington",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-5"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Kirk Pendleton",
    "loser_school": "Lehigh",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 269,
    "winner": "Bob Sheppard",
    "winner_school": "Oklahoma State",
    "loser": "Pat Coniglio",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 270,
    "winner": "Harold Thompson",
    "winner_school": "Nebraska",
    "loser": "Truman Sandelin",
    "loser_school": "Western State",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Jerry Frude",
    "winner_school": "Wyoming",
    "loser": "Bob Sheppard",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Harold Thompson",
    "winner_school": "Nebraska",
    "loser": "Lonnie Rubis",
    "loser_school": "Minnesota",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Daryl Kelvington",
    "winner_school": "Pittsburgh",
    "loser": "Jerry Frude",
    "loser_school": "Wyoming",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Harold Thompson",
    "winner_school": "Nebraska",
    "loser": "Orlando Iacovelli",
    "loser_school": "Ithaca",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 92,
    "winner": "Gene Kerin",
    "winner_school": "Maryland",
    "loser": "Dick Smith",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 93,
    "winner": "Dave Wight",
    "winner_school": "Wyoming",
    "loser": "David Gibson",
    "loser_school": "Purdue",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Bob Hatcher",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Doug Koch",
    "winner_school": "Lehigh",
    "loser": "Gary Pesuit",
    "loser_school": "Kent State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Dave Moore",
    "loser_school": "Northwest Missouri",
    "result": "Fall 4:57"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 104,
    "winner": "Earl Perillo",
    "winner_school": "Oklahoma",
    "loser": "John Sterner",
    "loser_school": "South Dakota State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Gene Kerin",
    "winner_school": "Maryland",
    "loser": "Richard Blackman",
    "loser_school": "North Carolina",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Dave Wight",
    "winner_school": "Wyoming",
    "loser": "Dick Ornstein",
    "loser_school": "Miami Ohio",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "John Beisner",
    "loser_school": "Cornell Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Jim Reifsteck",
    "winner_school": "Minnesota",
    "loser": "Irving Johnston",
    "loser_school": "SIU-Carbondale",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Jack Flasche",
    "winner_school": "Northern Colorado",
    "loser": "Doug Koch",
    "loser_school": "Lehigh",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Hap Fry",
    "loser_school": "Michigan State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Earl Perillo",
    "winner_school": "Oklahoma",
    "loser": "Monte Peterson",
    "loser_school": "Minnesota State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Steve Combs",
    "winner_school": "Iowa",
    "loser": "Gene Bower",
    "loser_school": "Western State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Dave Wight",
    "winner_school": "Wyoming",
    "loser": "Gene Kerin",
    "loser_school": "Maryland",
    "result": "Dec 11-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Jim Reifsteck",
    "loser_school": "Minnesota",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Jack Flasche",
    "winner_school": "Northern Colorado",
    "loser": "Ron Pifer",
    "loser_school": "Penn State",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Earl Perillo",
    "winner_school": "Oklahoma",
    "loser": "Steve Combs",
    "loser_school": "Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Dave Wight",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Jack Flasche",
    "winner_school": "Northern Colorado",
    "loser": "Earl Perillo",
    "loser_school": "Oklahoma",
    "result": "Dec 6-1"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Jim Reifsteck",
    "loser_school": "Minnesota",
    "result": "Fall 2:46"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Jack Flasche",
    "winner_school": "Northern Colorado",
    "loser": "Phil Kinyon",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Bob Hatcher",
    "winner_school": "Virginia Tech",
    "loser": "John Beisner",
    "loser_school": "Cornell Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Jim Reifsteck",
    "winner_school": "Minnesota",
    "loser": "Bob Hatcher",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Doug Koch",
    "loser_school": "Lehigh",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Jim Reifsteck",
    "winner_school": "Minnesota",
    "loser": "Dave Wight",
    "loser_school": "Wyoming",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Earl Perillo",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Pat Kelly",
    "winner_school": "Illinois",
    "loser": "Don Wilson",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Norm Perue",
    "winner_school": "Wyoming",
    "loser": "Larry Timmerman",
    "loser_school": "Northwest Missouri",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Bob Taylor",
    "loser_school": "Denver",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Eric Moyer",
    "winner_school": "Springfield",
    "loser": "Aubrey Davis",
    "loser_school": "Auburn",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Dave Angell",
    "winner_school": "Lehigh",
    "loser": "Jess Miller",
    "loser_school": "Western State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Don Millard",
    "winner_school": "SIU-Carbondale",
    "loser": "Leo Davis",
    "loser_school": "Colorado",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "Jack Berger",
    "loser_school": "Oregon State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "John Jeffery",
    "winner_school": "Wheaton",
    "loser": "Don Christ",
    "loser_school": "Minnesota State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Pat Kelly",
    "loser_school": "Illinois",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Jim Harrison",
    "winner_school": "Pittsburgh",
    "loser": "Norm Perue",
    "loser_school": "Wyoming",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Richard Bell",
    "loser_school": "Washington",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "James Buffington",
    "winner_school": "Minnesota",
    "loser": "Eric Moyer",
    "loser_school": "Springfield",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Dave Angell",
    "winner_school": "Lehigh",
    "loser": "Stan Harrison",
    "loser_school": "Oklahoma",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Don Millard",
    "winner_school": "SIU-Carbondale",
    "loser": "Larry Hochhaus",
    "loser_school": "Iowa State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "Dave Kohl",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "John Jeffery",
    "winner_school": "Wheaton",
    "loser": "Harold Harrison",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Jim Harrison",
    "winner_school": "Pittsburgh",
    "loser": "Harry Houska",
    "loser_school": "Ohio",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "James Buffington",
    "loser_school": "Minnesota",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Don Millard",
    "winner_school": "SIU-Carbondale",
    "loser": "Dave Angell",
    "loser_school": "Lehigh",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "John Jeffery",
    "loser_school": "Wheaton",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Jim Harrison",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "Don Millard",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Jim Harrison",
    "winner_school": "Pittsburgh",
    "loser": "Don Millard",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Terry Isaacson",
    "loser_school": "Air Force",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 273,
    "winner": "Richard Bell",
    "winner_school": "Washington",
    "loser": "Bob Taylor",
    "loser_school": "Denver",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 274,
    "winner": "Jack Berger",
    "winner_school": "Oregon State",
    "loser": "Dave Kohl",
    "loser_school": "Iowa",
    "result": "MD 8-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "James Buffington",
    "winner_school": "Minnesota",
    "loser": "Richard Bell",
    "loser_school": "Washington",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "John Jeffery",
    "winner_school": "Wheaton",
    "loser": "Jack Berger",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Jim Harrison",
    "winner_school": "Pittsburgh",
    "loser": "James Buffington",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Don Millard",
    "winner_school": "SIU-Carbondale",
    "loser": "John Jeffery",
    "loser_school": "Wheaton",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Hugh Lowham",
    "winner_school": "Wyoming",
    "loser": "Frank Shaut",
    "loser_school": "Cincinnati",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Ken Hines",
    "winner_school": "Colorado State",
    "loser": "George Bruns",
    "loser_school": "Air Force",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Ed Arneson",
    "loser_school": "Moorhead State",
    "result": "Fall 5:59"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Phil Myer",
    "winner_school": "Penn State",
    "loser": "Mario DeStefano",
    "loser_school": "Springfield",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Roger Plapp",
    "winner_school": "SIU-Carbondale",
    "loser": "Jay Roberts",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Hugh Lowham",
    "winner_school": "Wyoming",
    "loser": "Ted Mallen",
    "loser_school": "Virginia",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Alex Valcanoff",
    "winner_school": "Michigan State",
    "loser": "Ken Hines",
    "loser_school": "Colorado State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Bob Johnson",
    "winner_school": "Oklahoma State",
    "loser": "Ron Paar",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Rick Traynor",
    "winner_school": "Western State",
    "loser": "Ken Barr",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Mike Sterner",
    "winner_school": "South Dakota State",
    "loser": "Phil Myer",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Tim Mongan",
    "loser_school": "Purdue",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Roger Plapp",
    "winner_school": "SIU-Carbondale",
    "loser": "Dan Apling",
    "loser_school": "Toledo",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Jim Detrixhe",
    "winner_school": "Lehigh",
    "loser": "Tommy Edgar",
    "loser_school": "Oklahoma",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Alex Valcanoff",
    "winner_school": "Michigan State",
    "loser": "Hugh Lowham",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Bob Johnson",
    "winner_school": "Oklahoma State",
    "loser": "Rick Traynor",
    "loser_school": "Western State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Mike Sterner",
    "loser_school": "South Dakota State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Jim Detrixhe",
    "winner_school": "Lehigh",
    "loser": "Roger Plapp",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Bob Johnson",
    "winner_school": "Oklahoma State",
    "loser": "Alex Valcanoff",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Jim Detrixhe",
    "loser_school": "Lehigh",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Jim Detrixhe",
    "loser_school": "Lehigh",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Bob Johnson",
    "winner_school": "Oklahoma State",
    "loser": "Dean Lahr",
    "loser_school": "Colorado",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Rick Traynor",
    "loser_school": "Western State",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Tim Mongan",
    "winner_school": "Purdue",
    "loser": "Mike Sterner",
    "loser_school": "South Dakota State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Alex Valcanoff",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Jim Detrixhe",
    "winner_school": "Lehigh",
    "loser": "Tim Mongan",
    "loser_school": "Purdue",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 140,
    "winner": "Matt Sanzone",
    "winner_school": "Springfield",
    "loser": "Ed Rutkowski",
    "loser_school": "Notre Dame",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 144,
    "winner": "Roger Eischens",
    "winner_school": "South Dakota State",
    "loser": "Harry Lake",
    "loser_school": "Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 148,
    "winner": "Dee Mickelson",
    "winner_school": "Wyoming",
    "loser": "Tom Jeffries",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Pat Clock",
    "winner_school": "Lewis & Clark",
    "loser": "Matt Sanzone",
    "loser_school": "Springfield",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Darrel Kauffman",
    "winner_school": "Oregon State",
    "loser": "Charlie Moore",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Roger Eischens",
    "loser_school": "South Dakota State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Nick Kohls",
    "winner_school": "Colorado State",
    "loser": "Dennis Focht",
    "loser_school": "Rutgers",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Dee Mickelson",
    "winner_school": "Wyoming",
    "loser": "Denton Smith",
    "loser_school": "Kansas State",
    "result": "Fall 8:02"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Ray Nickla",
    "loser_school": "Army",
    "result": "MD 15-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Ken Houston",
    "winner_school": "SIU-Carbondale",
    "loser": "Joe Zaleski",
    "loser_school": "Air Force",
    "result": "Fall 6:26"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 242,
    "winner": "Keith Johnstone",
    "winner_school": "Iowa State",
    "loser": "Allen Thomas",
    "loser_school": "Ball State",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Pat Clock",
    "winner_school": "Lewis & Clark",
    "loser": "Darrel Kauffman",
    "loser_school": "Oregon State",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Nick Kohls",
    "loser_school": "Colorado State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Dee Mickelson",
    "loser_school": "Wyoming",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Ken Houston",
    "winner_school": "SIU-Carbondale",
    "loser": "Keith Johnstone",
    "loser_school": "Iowa State",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Pat Clock",
    "loser_school": "Lewis & Clark",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Ken Houston",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Ken Houston",
    "winner_school": "SIU-Carbondale",
    "loser": "Pat Clock",
    "loser_school": "Lewis & Clark",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Joe James",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Nick Kohls",
    "winner_school": "Colorado State",
    "loser": "Roger Eischens",
    "loser_school": "South Dakota State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Dee Mickelson",
    "winner_school": "Wyoming",
    "loser": "Ray Nickla",
    "loser_school": "Army",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Pat Clock",
    "winner_school": "Lewis & Clark",
    "loser": "Nick Kohls",
    "loser_school": "Colorado State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Ken Houston",
    "winner_school": "SIU-Carbondale",
    "loser": "Dee Mickelson",
    "loser_school": "Wyoming",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Ed Scharer",
    "winner_school": "Rutgers",
    "loser": "Jerry Seeley",
    "loser_school": "Colorado State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "Von Henry",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Roger Pillath",
    "winner_school": "Wisconsin",
    "loser": "Everett Knott",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Dewayne Schroeder",
    "winner_school": "Colorado Mines",
    "loser": "Steve Goodsell",
    "loser_school": "Brigham Young",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Jim Raschke",
    "winner_school": "Nebraska",
    "loser": "Leroy Sprague",
    "loser_school": "Baldwin Wallace",
    "result": "Fall 5:02"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "John Baum",
    "winner_school": "Michigan State",
    "loser": "Joe Kuhn",
    "loser_school": "Western State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Merrell Solowin",
    "winner_school": "Toledo",
    "loser": "George Gross",
    "loser_school": "Auburn",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Sherwyn Thorson",
    "winner_school": "Iowa",
    "loser": "John Burns",
    "loser_school": "Lehigh",
    "result": "Fall 3:36"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "Ed Scharer",
    "loser_school": "Rutgers",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Roger Pillath",
    "winner_school": "Wisconsin",
    "loser": "Dewayne Schroeder",
    "loser_school": "Colorado Mines",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "John Baum",
    "winner_school": "Michigan State",
    "loser": "Jim Raschke",
    "loser_school": "Nebraska",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Sherwyn Thorson",
    "winner_school": "Iowa",
    "loser": "Merrell Solowin",
    "loser_school": "Toledo",
    "result": "Fall 3:49"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Roger Pillath",
    "winner_school": "Wisconsin",
    "loser": "Rory Weber",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Sherwyn Thorson",
    "winner_school": "Iowa",
    "loser": "John Baum",
    "loser_school": "Michigan State",
    "result": "Dec 2-1"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "John Baum",
    "winner_school": "Michigan State",
    "loser": "Rory Weber",
    "loser_school": "Northwestern",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Sherwyn Thorson",
    "winner_school": "Iowa",
    "loser": "Roger Pillath",
    "loser_school": "Wisconsin",
    "result": "Fall 3:21"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Dewayne Schroeder",
    "winner_school": "Colorado Mines",
    "loser": "Everett Knott",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Merrell Solowin",
    "winner_school": "Toledo",
    "loser": "John Burns",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "Dewayne Schroeder",
    "loser_school": "Colorado Mines",
    "result": "Fall 4:44"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "John Baum",
    "winner_school": "Michigan State",
    "loser": "Merrell Solowin",
    "loser_school": "Toledo",
    "result": "Dec 2-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
