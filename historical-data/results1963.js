// 1963 NCAA Division I Wrestling Championships (3/21/1963 to 3/23/1963 at Kent State). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1963 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1963-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 12,
    "winner": "Gil Sanchez",
    "winner_school": "Colorado State",
    "loser": "Bill Hughes",
    "loser_school": "Bloomsburg",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 13,
    "winner": "Wally Curtis",
    "winner_school": "Oklahoma",
    "loser": "Charles Freyermuth",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 16,
    "winner": "Don Brown",
    "winner_school": "Cornell Iowa",
    "loser": "Mike Palmisano",
    "loser_school": "Michigan",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 20,
    "winner": "Okla Johnson",
    "winner_school": "Michigan State",
    "loser": "Dale Deffner",
    "loser_school": "Long Beach State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 21,
    "winner": "Steve Walenz",
    "winner_school": "Nebraska",
    "loser": "Jon Schrag",
    "loser_school": "Purdue",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 24,
    "winner": "Jyo Umezawa",
    "winner_school": "Oklahoma State",
    "loser": "Leonard Killian",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Gil Sanchez",
    "winner_school": "Colorado State",
    "loser": "Rick Graven",
    "loser_school": "Kent State",
    "result": "Fall 2:31"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Wally Curtis",
    "winner_school": "Oklahoma",
    "loser": "Bob Tanita",
    "loser_school": "Arizona",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Don Brown",
    "winner_school": "Cornell Iowa",
    "loser": "Bob Foster",
    "loser_school": "Yale",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Lowell Stewart",
    "winner_school": "Iowa State",
    "loser": "Rich Warnke",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Okla Johnson",
    "winner_school": "Michigan State",
    "loser": "Gary Pollard",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Arthur Maughan",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Steve Walenz",
    "loser_school": "Nebraska",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Jyo Umezawa",
    "winner_school": "Oklahoma State",
    "loser": "Don Henry",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 178,
    "winner": "Tom Balent",
    "winner_school": "Penn State",
    "loser": "Dave Kreider",
    "loser_school": "Northwestern",
    "result": "Fall 5:31"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Gil Sanchez",
    "winner_school": "Colorado State",
    "loser": "Wally Curtis",
    "loser_school": "Oklahoma",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Lowell Stewart",
    "winner_school": "Iowa State",
    "loser": "Don Brown",
    "loser_school": "Cornell Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Arthur Maughan",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Okla Johnson",
    "loser_school": "Michigan State",
    "result": "Fall 6:32"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Tom Balent",
    "winner_school": "Penn State",
    "loser": "Jyo Umezawa",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Gil Sanchez",
    "winner_school": "Colorado State",
    "loser": "Lowell Stewart",
    "loser_school": "Iowa State",
    "result": "Fall 5:49"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Arthur Maughan",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Tom Balent",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "5thPlace",
    "weight": "115",
    "bout": 531,
    "winner": "Wally Curtis",
    "winner_school": "Oklahoma",
    "loser": "Okla Johnson",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Tom Balent",
    "winner_school": "Penn State",
    "loser": "Lowell Stewart",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Arthur Maughan",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Gil Sanchez",
    "loser_school": "Colorado State",
    "result": "Fall 8:11"
  },
  {
    "round": "RepConsA",
    "weight": "115",
    "bout": 261,
    "winner": "Bill Hughes",
    "winner_school": "Bloomsburg",
    "loser": "Rick Graven",
    "loser_school": "Kent State",
    "result": "Dec 9-6"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Wally Curtis",
    "winner_school": "Oklahoma",
    "loser": "Bill Hughes",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Okla Johnson",
    "winner_school": "Michigan State",
    "loser": "Steve Walenz",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Lowell Stewart",
    "winner_school": "Iowa State",
    "loser": "Wally Curtis",
    "loser_school": "Oklahoma",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Tom Balent",
    "winner_school": "Penn State",
    "loser": "Okla Johnson",
    "loser_school": "Michigan State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 28,
    "winner": "Jim Gautz",
    "winner_school": "Wyoming",
    "loser": "Ron Maunder",
    "loser_school": "Maryland",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 29,
    "winner": "Gary Joseph",
    "winner_school": "Ohio State",
    "loser": "Terry Haise",
    "loser_school": "Syracuse",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 31,
    "winner": "Mark McCracken",
    "winner_school": "Oklahoma State",
    "loser": "Arnold Saferstein",
    "loser_school": "Miami Ohio",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 32,
    "winner": "Gary Smith",
    "winner_school": "Michigan State",
    "loser": "Roger Sebert",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 33,
    "winner": "Dave Unruh",
    "winner_school": "Kansas State",
    "loser": "James Schonauer",
    "loser_school": "Hiram",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 36,
    "winner": "Albert Tapia",
    "winner_school": "Oklahoma",
    "loser": "Don Pike",
    "loser_school": "Rutgers",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 37,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "Bill Fuller",
    "loser_school": "Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 38,
    "winner": "Don Neff",
    "winner_school": "Northern Colorado",
    "loser": "Jules Balon",
    "loser_school": "Springfield",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 39,
    "winner": "Fred Crawford",
    "winner_school": "Navy",
    "loser": "Douglas Drake",
    "loser_school": "RIT",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 41,
    "winner": "Claude Gonzales",
    "winner_school": "Colorado State",
    "loser": "Ralph Bahna",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Mike Johnson",
    "winner_school": "Pittsburgh",
    "loser": "Jim Gautz",
    "loser_school": "Wyoming",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Gary Joseph",
    "winner_school": "Ohio State",
    "loser": "John Elter",
    "loser_school": "Purdue",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Mark McCracken",
    "winner_school": "Oklahoma State",
    "loser": "Gary Smith",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Dave Unruh",
    "winner_school": "Kansas State",
    "loser": "Joel Melitski",
    "loser_school": "Bloomsburg",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Albert Tapia",
    "winner_school": "Oklahoma",
    "loser": "Terry Finn",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "Don Neff",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Fred Crawford",
    "loser_school": "Navy",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Bill Merriam",
    "winner_school": "Lehigh",
    "loser": "Claude Gonzales",
    "loser_school": "Colorado State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Mike Johnson",
    "winner_school": "Pittsburgh",
    "loser": "Gary Joseph",
    "loser_school": "Ohio State",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Mark McCracken",
    "winner_school": "Oklahoma State",
    "loser": "Dave Unruh",
    "loser_school": "Kansas State",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "Albert Tapia",
    "loser_school": "Oklahoma",
    "result": "MD 14-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Bill Merriam",
    "loser_school": "Lehigh",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Mike Johnson",
    "winner_school": "Pittsburgh",
    "loser": "Mark McCracken",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "Fred Powell",
    "loser_school": "Lock Haven",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "5thPlace",
    "weight": "123",
    "bout": 532,
    "winner": "Gary Joseph",
    "winner_school": "Ohio State",
    "loser": "Don Neff",
    "loser_school": "Northern Colorado",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Mark McCracken",
    "winner_school": "Oklahoma State",
    "loser": "Fred Powell",
    "loser_school": "Lock Haven",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Mike Nissen",
    "winner_school": "Nebraska",
    "loser": "Mike Johnson",
    "loser_school": "Pittsburgh",
    "result": "Fall 10:55 SV"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 264,
    "winner": "Don Neff",
    "winner_school": "Northern Colorado",
    "loser": "Bill Fuller",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Gary Joseph",
    "winner_school": "Ohio State",
    "loser": "Jim Gautz",
    "loser_school": "Wyoming",
    "result": "Dec 8-1"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Don Neff",
    "winner_school": "Northern Colorado",
    "loser": "Albert Tapia",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Mark McCracken",
    "winner_school": "Oklahoma State",
    "loser": "Gary Joseph",
    "loser_school": "Ohio State",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Don Neff",
    "loser_school": "Northern Colorado",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 44,
    "winner": "John Perry",
    "winner_school": "Adams State",
    "loser": "Tom Heniff",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 45,
    "winner": "Pat Smartt",
    "winner_school": "Lehigh",
    "loser": "Charles Walizer",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "David Dozeman",
    "winner_school": "Michigan",
    "loser": "Sonny Greenhalgh",
    "loser_school": "Syracuse",
    "result": "Dec 14-9"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 52,
    "winner": "Ed Taylor",
    "winner_school": "Bloomsburg",
    "loser": "John Arnold",
    "loser_school": "UCLA",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 53,
    "winner": "Lew Kennedy",
    "winner_school": "Minnesota",
    "loser": "Dave Stone",
    "loser_school": "Wyoming",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 56,
    "winner": "Kent Swedlund",
    "winner_school": "Colorado State",
    "loser": "Cecil Holmes",
    "loser_school": "Michigan State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Dee Brainerd",
    "winner_school": "South Dakota State",
    "loser": "John Perry",
    "loser_school": "Adams State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Pat Smartt",
    "winner_school": "Lehigh",
    "loser": "Ron Knoebel",
    "loser_school": "Lycoming",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "David Dozeman",
    "winner_school": "Michigan",
    "loser": "Rosalio Garcia",
    "loser_school": "Kansas State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Ray Pekarek",
    "loser_school": "Marquette",
    "result": "Fall 4:02"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Bob Haney",
    "winner_school": "Penn State",
    "loser": "Ed Taylor",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Lew Kennedy",
    "winner_school": "Minnesota",
    "loser": "Elmer Crider",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Norm Parker",
    "winner_school": "Iowa",
    "loser": "Kent Swedlund",
    "loser_school": "Colorado State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Bobby Douglas",
    "winner_school": "West Liberty State",
    "loser": "Ron Jones",
    "loser_school": "Iowa State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Pat Smartt",
    "winner_school": "Lehigh",
    "loser": "Dee Brainerd",
    "loser_school": "South Dakota State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "David Dozeman",
    "loser_school": "Michigan",
    "result": "Dec 10-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Lew Kennedy",
    "winner_school": "Minnesota",
    "loser": "Bob Haney",
    "loser_school": "Penn State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Bobby Douglas",
    "winner_school": "West Liberty State",
    "loser": "Norm Parker",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Pat Smartt",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Bobby Douglas",
    "winner_school": "West Liberty State",
    "loser": "Lew Kennedy",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "130",
    "bout": 533,
    "winner": "Ron Jones",
    "winner_school": "Iowa State",
    "loser": "Pat Smartt",
    "loser_school": "Lehigh",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "David Dozeman",
    "winner_school": "Michigan",
    "loser": "Lew Kennedy",
    "loser_school": "Minnesota",
    "result": "Dec 7-5"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Bobby Douglas",
    "loser_school": "West Liberty State",
    "result": "Dec 12-8"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "David Dozeman",
    "winner_school": "Michigan",
    "loser": "Ray Pekarek",
    "loser_school": "Marquette",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Ron Jones",
    "winner_school": "Iowa State",
    "loser": "Norm Parker",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "David Dozeman",
    "winner_school": "Michigan",
    "loser": "Pat Smartt",
    "loser_school": "Lehigh",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Lew Kennedy",
    "winner_school": "Minnesota",
    "loser": "Ron Jones",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Mike Harman",
    "winner_school": "Navy",
    "loser": "Sam McClendan",
    "loser_school": "Springfield",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 61,
    "winner": "Jim Deutsch",
    "winner_school": "Adams State",
    "loser": "Larry Harrison",
    "loser_school": "Colorado State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Jim Murrin",
    "winner_school": "Syracuse",
    "loser": "John Thompson",
    "loser_school": "Kansas State",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 63,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "Bill Pierson",
    "loser_school": "Kent State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Charles White",
    "winner_school": "Oklahoma",
    "loser": "Frank O'Korn",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 65,
    "winner": "Richard Scorese",
    "winner_school": "Bloomsburg",
    "loser": "Gaylord Magoon",
    "loser_school": "Lock Haven",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Joe Piccioni",
    "winner_school": "Ohio State",
    "loser": "Ed Winborn",
    "loser_school": "Army",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Dave James",
    "winner_school": "Michigan State",
    "loser": "Glenn Reding",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 68,
    "winner": "Larry Janis",
    "winner_school": "Miami Ohio",
    "loser": "Ken Droegemueller",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Bryce Cook",
    "loser_school": "Washington State",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 70,
    "winner": "Gary Wilcox",
    "winner_school": "Michigan",
    "loser": "John Leek",
    "loser_school": "Lehigh",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Larry Bewley",
    "winner_school": "Iowa State",
    "loser": "Ken Linker",
    "loser_school": "Brown",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 72,
    "winner": "Jerry Torrance",
    "winner_school": "Northwestern",
    "loser": "Jim Apple",
    "loser_school": "Georgia Tech",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 73,
    "winner": "Clair Argento",
    "winner_school": "Wyoming",
    "loser": "James Perkins",
    "loser_school": "South Dakota State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Mike Harman",
    "winner_school": "Navy",
    "loser": "Thad Wolfe",
    "loser_school": "Air Force",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Jim Deutsch",
    "winner_school": "Adams State",
    "loser": "Jim Murrin",
    "loser_school": "Syracuse",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "Charles White",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Joe Piccioni",
    "winner_school": "Ohio State",
    "loser": "Richard Scorese",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Dave James",
    "winner_school": "Michigan State",
    "loser": "Larry Janis",
    "loser_school": "Miami Ohio",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Gary Wilcox",
    "loser_school": "Michigan",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Larry Bewley",
    "winner_school": "Iowa State",
    "loser": "Jerry Torrance",
    "loser_school": "Northwestern",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Clair Argento",
    "winner_school": "Wyoming",
    "loser": "Dan Gray",
    "loser_school": "Toledo",
    "result": "MD 11-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Mike Harman",
    "winner_school": "Navy",
    "loser": "Jim Deutsch",
    "loser_school": "Adams State",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "Joe Piccioni",
    "loser_school": "Ohio State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Dave James",
    "loser_school": "Michigan State",
    "result": "Fall 2:40"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Larry Bewley",
    "winner_school": "Iowa State",
    "loser": "Clair Argento",
    "loser_school": "Wyoming",
    "result": "Dec 15-12"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "Mike Harman",
    "loser_school": "Navy",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Larry Bewley",
    "loser_school": "Iowa State",
    "result": "MD 17-4"
  },
  {
    "round": "5thPlace",
    "weight": "137",
    "bout": 534,
    "winner": "Charles White",
    "winner_school": "Oklahoma",
    "loser": "Gary Wilcox",
    "loser_school": "Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Mike Harman",
    "winner_school": "Navy",
    "loser": "Larry Bewley",
    "loser_school": "Iowa State",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "Tom Huff",
    "loser_school": "Iowa",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 267,
    "winner": "Charles White",
    "winner_school": "Oklahoma",
    "loser": "Bill Pierson",
    "loser_school": "Kent State",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 268,
    "winner": "Gary Wilcox",
    "winner_school": "Michigan",
    "loser": "Bryce Cook",
    "loser_school": "Washington State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Charles White",
    "winner_school": "Oklahoma",
    "loser": "Joe Piccioni",
    "loser_school": "Ohio State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Gary Wilcox",
    "winner_school": "Michigan",
    "loser": "Dave James",
    "loser_school": "Michigan State",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Mike Harman",
    "winner_school": "Navy",
    "loser": "Charles White",
    "loser_school": "Oklahoma",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Larry Bewley",
    "winner_school": "Iowa State",
    "loser": "Gary Wilcox",
    "loser_school": "Michigan",
    "result": "Fall 7:41 SV"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 76,
    "winner": "Jim Crider",
    "winner_school": "Northern Colorado",
    "loser": "Mike Gessford",
    "loser_school": "Springfield",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 77,
    "winner": "Bob Deupree",
    "winner_school": "Oklahoma",
    "loser": "Doug Muck",
    "loser_school": "Oregon",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Terry Linander",
    "loser_school": "Lock Haven",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 79,
    "winner": "Dick Slutzky",
    "winner_school": "Syracuse",
    "loser": "Monty Byington",
    "loser_school": "Michigan State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Don Matson",
    "loser_school": "UCLA",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 81,
    "winner": "George Edwards",
    "winner_school": "Penn State",
    "loser": "Truman Sandelin",
    "loser_school": "Western State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Joe Seay",
    "winner_school": "Kansas State",
    "loser": "Lee Deitrick",
    "loser_school": "Michigan",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Jim Sanford",
    "winner_school": "Northern Iowa",
    "loser": "Fred Buell",
    "loser_school": "Yale",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 84,
    "winner": "Joe Greenlee",
    "winner_school": "Iowa",
    "loser": "Lee Rosenberg",
    "loser_school": "Oregon State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "Lonnie Rubis",
    "winner_school": "Minnesota",
    "loser": "Doug Koch",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 86,
    "winner": "David Gibson",
    "winner_school": "Purdue",
    "loser": "Buzz Hays",
    "loser_school": "Arizona State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Pat Reilly",
    "winner_school": "Toledo",
    "loser": "Roy Brewer",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 88,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Tom Norton",
    "loser_school": "Colorado State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 89,
    "winner": "Ron Wright",
    "winner_school": "Adams State",
    "loser": "Jim Mahan",
    "loser_school": "Cincinnati",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Jim Crider",
    "winner_school": "Northern Colorado",
    "loser": "Ron Haas",
    "loser_school": "Ohio State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Bob Deupree",
    "winner_school": "Oklahoma",
    "loser": "Bob Kopnisky",
    "loser_school": "Maryland",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Dick Slutzky",
    "loser_school": "Syracuse",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Joe Seay",
    "winner_school": "Kansas State",
    "loser": "George Edwards",
    "loser_school": "Penn State",
    "result": "Fall 10:35 SV"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Jim Sanford",
    "winner_school": "Northern Iowa",
    "loser": "Joe Greenlee",
    "loser_school": "Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Lonnie Rubis",
    "winner_school": "Minnesota",
    "loser": "David Gibson",
    "loser_school": "Purdue",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Pat Reilly",
    "loser_school": "Toledo",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "John Carr",
    "winner_school": "Pittsburgh",
    "loser": "Ron Wright",
    "loser_school": "Adams State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Jim Crider",
    "winner_school": "Northern Colorado",
    "loser": "Bob Deupree",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Joe Seay",
    "loser_school": "Kansas State",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Lonnie Rubis",
    "winner_school": "Minnesota",
    "loser": "Jim Sanford",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "John Carr",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Jim Crider",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Lonnie Rubis",
    "winner_school": "Minnesota",
    "loser": "Veryl Long",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "5thPlace",
    "weight": "147",
    "bout": 535,
    "winner": "Jim Crider",
    "winner_school": "Northern Colorado",
    "loser": "David Gibson",
    "loser_school": "Purdue",
    "result": "Dec 6-3"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Dick Slutzky",
    "loser_school": "Syracuse",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Mike Natvig",
    "winner_school": "Army",
    "loser": "Lonnie Rubis",
    "loser_school": "Minnesota",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 269,
    "winner": "Dick Slutzky",
    "winner_school": "Syracuse",
    "loser": "Don Matson",
    "loser_school": "UCLA",
    "result": "Fall 2:55"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 270,
    "winner": "David Gibson",
    "winner_school": "Purdue",
    "loser": "Doug Koch",
    "loser_school": "Lehigh",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Dick Slutzky",
    "winner_school": "Syracuse",
    "loser": "Joe Seay",
    "loser_school": "Kansas State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "David Gibson",
    "winner_school": "Purdue",
    "loser": "Jim Sanford",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Dick Slutzky",
    "winner_school": "Syracuse",
    "loser": "Jim Crider",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "David Gibson",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 92,
    "winner": "Hap Fry",
    "winner_school": "Michigan State",
    "loser": "Dave Wight",
    "loser_school": "Wyoming",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Bill Paule",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 95,
    "winner": "Gary Sirota",
    "winner_school": "Syracuse",
    "loser": "Amando Soto",
    "loser_school": "Maryland",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "Tim Gay",
    "winner_school": "Pittsburgh",
    "loser": "Wayne Linke",
    "loser_school": "Kent State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Fred Lett",
    "loser_school": "Colorado State",
    "result": "Fall 5:34"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Rahim Javanmard",
    "winner_school": "UCLA",
    "loser": "Lyle Voss",
    "loser_school": "South Dakota State",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Phil Westmoreland",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 102,
    "winner": "Don Pate",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Tom Jarman",
    "loser_school": "Wheaton",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "Bill Murphy",
    "winner_school": "Bowling Green",
    "loser": "Dave Kohl",
    "loser_school": "Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 105,
    "winner": "Rick Bay",
    "winner_school": "Michigan",
    "loser": "Dave Carey",
    "loser_school": "Navy",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Frank Eisenhower",
    "winner_school": "Lock Haven",
    "loser": "Hap Fry",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Dick Austin",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Tim Gay",
    "winner_school": "Pittsburgh",
    "loser": "Gary Sirota",
    "loser_school": "Syracuse",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "John Cerra",
    "loser_school": "Springfield",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Rahim Javanmard",
    "winner_school": "UCLA",
    "loser": "Dick Vlasak",
    "loser_school": "Ohio",
    "result": "Fall 4:06"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Don Pate",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Jim Gass",
    "winner_school": "Cornell Iowa",
    "loser": "Bill Murphy",
    "loser_school": "Bowling Green",
    "result": "Fall 1:05"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Rick Bay",
    "winner_school": "Michigan",
    "loser": "Art Weiss",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Frank Eisenhower",
    "loser_school": "Lock Haven",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Tim Gay",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Rahim Javanmard",
    "loser_school": "UCLA",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Rick Bay",
    "winner_school": "Michigan",
    "loser": "Jim Gass",
    "loser_school": "Cornell Iowa",
    "result": "Fall 7:41"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Virgil Carr",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Rick Bay",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 536,
    "winner": "Rick Bay",
    "winner_school": "Michigan",
    "loser": "Tim Gay",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-3"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Rahim Javanmard",
    "loser_school": "UCLA",
    "result": "Dec 7-6"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Phil Kinyon",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Fred Lett",
    "winner_school": "Colorado State",
    "loser": "John Cerra",
    "loser_school": "Springfield",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 272,
    "winner": "Don Pate",
    "winner_school": "Minnesota State-Moorhead",
    "loser": "Phil Westmoreland",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Tim Gay",
    "winner_school": "Pittsburgh",
    "loser": "Fred Lett",
    "loser_school": "Colorado State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Rahim Javanmard",
    "winner_school": "UCLA",
    "loser": "Don Pate",
    "loser_school": "Minnesota State-Moorhead",
    "result": "Fall 2:26"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Tim Gay",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-3"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Rahim Javanmard",
    "winner_school": "UCLA",
    "loser": "Rick Bay",
    "loser_school": "Michigan",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Bob Archer",
    "winner_school": "Michigan State",
    "loser": "Chuck Ronyetz",
    "loser_school": "Ohio",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "Bill Radford",
    "loser_school": "Lock Haven",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Gary Scrivens",
    "winner_school": "UCLA",
    "loser": "Dee Mickelson",
    "loser_school": "Wyoming",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Bob Hall",
    "winner_school": "Bloomsburg",
    "loser": "Ron Mehlin",
    "loser_school": "Northern Iowa",
    "result": "Fall 4:27"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Steve Combs",
    "winner_school": "Iowa",
    "loser": "William Roy",
    "loser_school": "Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Chris Stowell",
    "winner_school": "Michigan",
    "loser": "Earl Perillo",
    "loser_school": "Oklahoma",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Tim Geiger",
    "winner_school": "Maryland",
    "loser": "Bob Archer",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "George Riedner",
    "loser_school": "Syracuse",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Gary Scrivens",
    "winner_school": "UCLA",
    "loser": "Bill Mills",
    "loser_school": "Davidson",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Jim Harrison",
    "winner_school": "Pittsburgh",
    "loser": "Bob Hall",
    "loser_school": "Bloomsburg",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Harley Ferguson",
    "loser_school": "Lehigh",
    "result": "Fall 5:16"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Marty Strayer",
    "winner_school": "Penn State",
    "loser": "Bob Zweiacher",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Steve Combs",
    "winner_school": "Iowa",
    "loser": "Chris Stowell",
    "loser_school": "Michigan",
    "result": "Fall 2:34"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "Tim Geiger",
    "loser_school": "Maryland",
    "result": "Dec 7-4 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Jim Harrison",
    "winner_school": "Pittsburgh",
    "loser": "Gary Scrivens",
    "loser_school": "UCLA",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Marty Strayer",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Steve Combs",
    "winner_school": "Iowa",
    "loser": "Terry Isaacson",
    "loser_school": "Air Force",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Jim Harrison",
    "winner_school": "Pittsburgh",
    "loser": "Gordon Hassman",
    "loser_school": "Iowa State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Bob Hall",
    "winner_school": "Bloomsburg",
    "loser": "William Roy",
    "loser_school": "Illinois",
    "result": "Dec 1-0"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Terry Isaacson",
    "loser_school": "Air Force",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Jim Harrison",
    "winner_school": "Pittsburgh",
    "loser": "Steve Combs",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "William Roy",
    "winner_school": "Illinois",
    "loser": "Chris Stowell",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Bob Hall",
    "winner_school": "Bloomsburg",
    "loser": "Gary Scrivens",
    "loser_school": "UCLA",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "William Roy",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Bob Hall",
    "loser_school": "Bloomsburg",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Bob Keeney",
    "winner_school": "Oregon",
    "loser": "Bob Shearer",
    "loser_school": "Kent State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Gerry Franzen",
    "winner_school": "Navy",
    "loser": "John Kirchenbauer",
    "loser_school": "Oklahoma State",
    "result": "Fall 8:27"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "George Bruns",
    "winner_school": "Air Force",
    "loser": "Joe Arcure",
    "loser_school": "Michigan",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Frank Shaut",
    "winner_school": "Cincinnati",
    "loser": "Ed Pohland",
    "loser_school": "Penn State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Lew Roberts",
    "winner_school": "Syracuse",
    "loser": "Gene Record",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Tommy Edgar",
    "winner_school": "Oklahoma",
    "loser": "Roger Cook",
    "loser_school": "Lock Haven",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Tim Mongon",
    "winner_school": "Purdue",
    "loser": "Paul Schmutz",
    "loser_school": "Springfield",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Ken Barr",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Don Evans",
    "winner_school": "Northwestern",
    "loser": "John Gladish",
    "loser_school": "Lehigh",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Ron Jacobson",
    "winner_school": "New Mexico",
    "loser": "Dave Hrouda",
    "loser_school": "Cornell Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Richard Bell",
    "winner_school": "Washington",
    "loser": "Roger Schilling",
    "loser_school": "Iowa",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Bob Keeney",
    "winner_school": "Oregon",
    "loser": "Alex Valcanoff",
    "loser_school": "Michigan State",
    "result": "Fall 5:50"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Gerry Franzen",
    "winner_school": "Navy",
    "loser": "George Bruns",
    "loser_school": "Air Force",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Lew Roberts",
    "winner_school": "Syracuse",
    "loser": "Frank Shaut",
    "loser_school": "Cincinnati",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Tommy Edgar",
    "loser_school": "Oklahoma",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Jim Grover",
    "winner_school": "Iowa State",
    "loser": "Tim Mongon",
    "loser_school": "Purdue",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Steve Hoemann",
    "loser_school": "Northern Iowa",
    "result": "Fall 5:55"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Don Evans",
    "winner_school": "Northwestern",
    "loser": "Ron Jacobson",
    "loser_school": "New Mexico",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Richard Bell",
    "winner_school": "Washington",
    "loser": "Marshall Dauberman",
    "loser_school": "Maryland",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Gerry Franzen",
    "winner_school": "Navy",
    "loser": "Bob Keeney",
    "loser_school": "Oregon",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Lew Roberts",
    "loser_school": "Syracuse",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Jim Grover",
    "loser_school": "Iowa State",
    "result": "Fall 1:57"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Richard Bell",
    "winner_school": "Washington",
    "loser": "Don Evans",
    "loser_school": "Northwestern",
    "result": "DEF"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Gerry Franzen",
    "loser_school": "Navy",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Richard Bell",
    "loser_school": "Washington",
    "result": "Dec 5-0"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Ken Barr",
    "winner_school": "Pittsburgh",
    "loser": "Gerry Franzen",
    "loser_school": "Navy",
    "result": "Dec 7-2"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Tommy Edgar",
    "winner_school": "Oklahoma",
    "loser": "Richard Bell",
    "loser_school": "Washington",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Harry Houska",
    "loser_school": "Ohio",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 276,
    "winner": "Ken Barr",
    "winner_school": "Pittsburgh",
    "loser": "Steve Hoemann",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Tommy Edgar",
    "winner_school": "Oklahoma",
    "loser": "Lew Roberts",
    "loser_school": "Syracuse",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Ken Barr",
    "winner_school": "Pittsburgh",
    "loser": "Jim Grover",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Tommy Edgar",
    "winner_school": "Oklahoma",
    "loser": "Gerry Franzen",
    "loser_school": "Navy",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Richard Bell",
    "winner_school": "Washington",
    "loser": "Ken Barr",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 140,
    "winner": "Gerry Everling",
    "winner_school": "Syracuse",
    "loser": "Bill Garson",
    "loser_school": "Bloomsburg",
    "result": "Fall 5:48"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 141,
    "winner": "Tom Bossert",
    "winner_school": "Lock Haven",
    "loser": "Joe Confer",
    "loser_school": "Lycoming",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 144,
    "winner": "Matt Sanzone",
    "winner_school": "Springfield",
    "loser": "Dave Russell",
    "loser_school": "Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 148,
    "winner": "Everett Knott",
    "winner_school": "Oklahoma State",
    "loser": "Al Rozman",
    "loser_school": "Western State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 152,
    "winner": "Ken Hines",
    "winner_school": "Colorado State",
    "loser": "Ken Johnson",
    "loser_school": "Iowa",
    "result": "Fall 7:53"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Gerry Everling",
    "winner_school": "Syracuse",
    "loser": "Merle Prebel",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Bob Rader",
    "winner_school": "Rutgers",
    "loser": "Tom Bossert",
    "loser_school": "Lock Haven",
    "result": "Fall 5:54"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Matt Sanzone",
    "winner_school": "Springfield",
    "loser": "Roger Eischens",
    "loser_school": "South Dakota State",
    "result": "Fall 4:57"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Allan Jaklich",
    "loser_school": "Northwestern",
    "result": "Fall 7:09"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Everett Knott",
    "winner_school": "Oklahoma State",
    "loser": "Gary Lowham",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "John Burns",
    "loser_school": "Lehigh",
    "result": "Fall 7:48"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Ken Hines",
    "winner_school": "Colorado State",
    "loser": "Mason Freis",
    "loser_school": "Oregon State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 242,
    "winner": "Jack Barden",
    "winner_school": "Michigan",
    "loser": "Bill Cooper",
    "loser_school": "Washington State",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Gerry Everling",
    "winner_school": "Syracuse",
    "loser": "Bob Rader",
    "loser_school": "Rutgers",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Matt Sanzone",
    "loser_school": "Springfield",
    "result": "MD 9-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Everett Knott",
    "loser_school": "Oklahoma State",
    "result": "MD 16-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Jack Barden",
    "winner_school": "Michigan",
    "loser": "Ken Hines",
    "loser_school": "Colorado State",
    "result": "Dec 9-3"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Gerry Everling",
    "loser_school": "Syracuse",
    "result": "DEF"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Jack Barden",
    "winner_school": "Michigan",
    "loser": "Ron Paar",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "5thPlace",
    "weight": "191",
    "bout": 539,
    "winner": "Ken Hines",
    "winner_school": "Colorado State",
    "loser": "Gerry Everling",
    "loser_school": "Syracuse",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Allan Jaklich",
    "loser_school": "Northwestern",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Jack Barden",
    "winner_school": "Michigan",
    "loser": "Wayne Baughman",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Allan Jaklich",
    "winner_school": "Northwestern",
    "loser": "Matt Sanzone",
    "loser_school": "Springfield",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Ken Hines",
    "winner_school": "Colorado State",
    "loser": "Bill Cooper",
    "loser_school": "Washington State",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Allan Jaklich",
    "winner_school": "Northwestern",
    "loser": "Gerry Everling",
    "loser_school": "Syracuse",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Ken Hines",
    "loser_school": "Colorado State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Larry Kristoff",
    "winner_school": "SIU-Carbondale",
    "loser": "Jerry Cabe",
    "loser_school": "North Carolina",
    "result": "Fall 7:14"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "John Illengwarth",
    "winner_school": "Lehigh",
    "loser": "Bob Thiele",
    "loser_school": "Kent State",
    "result": "Fall 3:41"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Ed Scharer",
    "winner_school": "Rutgers",
    "loser": "Jack Turnock",
    "loser_school": "Purdue",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Jim Nance",
    "winner_school": "Syracuse",
    "loser": "Bob Spaly",
    "loser_school": "Michigan",
    "result": "Fall 2:20"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Merrell Solowin",
    "winner_school": "Toledo",
    "loser": "Harry Sisak",
    "loser_school": "Lock Haven",
    "result": "Fall 1:38"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Homer McClure",
    "winner_school": "Michigan State",
    "loser": "Eddie McQuarters",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Larry Kristoff",
    "winner_school": "SIU-Carbondale",
    "loser": "John Illengwarth",
    "loser_school": "Lehigh",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Ed Scharer",
    "loser_school": "Rutgers",
    "result": "Fall 7:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Jim Nance",
    "winner_school": "Syracuse",
    "loser": "Dick Zeyen",
    "loser_school": "Minnesota State-Mankato",
    "result": "Fall 6:40"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Merrell Solowin",
    "winner_school": "Toledo",
    "loser": "Homer McClure",
    "loser_school": "Michigan State",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Larry Kristoff",
    "winner_school": "SIU-Carbondale",
    "loser": "Joe James",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Jim Nance",
    "winner_school": "Syracuse",
    "loser": "Merrell Solowin",
    "loser_school": "Toledo",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "John Illengwarth",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Merrell Solowin",
    "loser_school": "Toledo",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Jim Nance",
    "winner_school": "Syracuse",
    "loser": "Larry Kristoff",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "John Illengwarth",
    "winner_school": "Lehigh",
    "loser": "Jerry Cabe",
    "loser_school": "North Carolina",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "Dick Zeyen",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "John Illengwarth",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Merrell Solowin",
    "winner_school": "Toledo",
    "loser": "Bob Spaly",
    "loser_school": "Michigan",
    "result": "Fall 3:08"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
