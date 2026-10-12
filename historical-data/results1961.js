// 1961 NCAA Division I Wrestling Championships (3/23/1961 to 3/25/1961 at Oregon State). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1961 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1961-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Don Webster",
    "winner_school": "Iowa State",
    "loser": "John DeAno",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Jyo Umezawa",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Joe Fox",
    "loser_school": "Northern Iowa",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Wally Curtis",
    "winner_school": "Oklahoma",
    "loser": "Okla Johnson",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Don Webster",
    "winner_school": "Iowa State",
    "loser": "Gil Sanchez",
    "loser_school": "Colorado State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Bill Merriam",
    "loser_school": "Lehigh",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Mike Grandstaff",
    "loser_school": "Virginia Tech",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Wally Curtis",
    "winner_school": "Oklahoma",
    "loser": "Jerry Perez",
    "loser_school": "Oregon State",
    "result": "Dec 11-9"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Don Webster",
    "loser_school": "Iowa State",
    "result": "Dec 11-7"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Dick Wilson",
    "winner_school": "Toledo",
    "loser": "Wally Curtis",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Wally Curtis",
    "winner_school": "Oklahoma",
    "loser": "Don Webster",
    "loser_school": "Iowa State",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Gray Simons",
    "winner_school": "Lock Haven",
    "loser": "Dick Wilson",
    "loser_school": "Toledo",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Bill Merriam",
    "winner_school": "Lehigh",
    "loser": "Jyo Umezawa",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:30"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Mike Grandstaff",
    "winner_school": "Virginia Tech",
    "loser": "Joe Fox",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Don Webster",
    "winner_school": "Iowa State",
    "loser": "Bill Merriam",
    "loser_school": "Lehigh",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Wally Curtis",
    "winner_school": "Oklahoma",
    "loser": "Mike Grandstaff",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "George Jurinek",
    "winner_school": "Illinois",
    "loser": "Clyde Latta",
    "loser_school": "Oregon",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "Don Green",
    "winner_school": "Ohio State",
    "loser": "Ernie Parker",
    "loser_school": "Oregon State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Frank Coniglio",
    "winner_school": "SIU-Carbondale",
    "loser": "Ron Andrews",
    "loser_school": "Minnesota",
    "result": "Fall 4:24"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Frank Freeman",
    "winner_school": "Northern Iowa",
    "loser": "Jim Simpson",
    "loser_school": "Portland State",
    "result": "Fall 7:17"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "DuWayne Miller",
    "winner_school": "Oklahoma",
    "loser": "Claude Gonzales",
    "loser_school": "Colorado State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Dave Hansen",
    "winner_school": "Wyoming",
    "loser": "George Jurinek",
    "loser_school": "Illinois",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Don Green",
    "loser_school": "Ohio State",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "George Hobbs",
    "winner_school": "Michigan State",
    "loser": "Dave Frame",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Lowell Stewart",
    "winner_school": "Iowa State",
    "loser": "Lannie Bryant",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Rick Martin",
    "winner_school": "Pittsburgh",
    "loser": "Mike Gonzales",
    "loser_school": "Utah",
    "result": "Fall 3:52"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Frank Freeman",
    "winner_school": "Northern Iowa",
    "loser": "Frank Coniglio",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "DuWayne Miller",
    "winner_school": "Oklahoma",
    "loser": "Dave Hansen",
    "loser_school": "Wyoming",
    "result": "Fall 1:58"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "George Hobbs",
    "loser_school": "Michigan State",
    "result": "Dec 13-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Rick Martin",
    "winner_school": "Pittsburgh",
    "loser": "Lowell Stewart",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "DuWayne Miller",
    "winner_school": "Oklahoma",
    "loser": "Frank Freeman",
    "loser_school": "Northern Iowa",
    "result": "Fall 8:47"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Masaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Rick Martin",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-4"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Rick Martin",
    "winner_school": "Pittsburgh",
    "loser": "Frank Freeman",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "DuWayne Miller",
    "winner_school": "Oklahoma",
    "loser": "Masaaki Hatta",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Claude Gonzales",
    "winner_school": "Colorado State",
    "loser": "Dave Hansen",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "George Hobbs",
    "winner_school": "Michigan State",
    "loser": "Don Green",
    "loser_school": "Ohio State",
    "result": "Fall 0:45"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Frank Freeman",
    "winner_school": "Northern Iowa",
    "loser": "Claude Gonzales",
    "loser_school": "Colorado State",
    "result": "Dec 9-3"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Rick Martin",
    "winner_school": "Pittsburgh",
    "loser": "George Hobbs",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "Ted Pierce",
    "winner_school": "Oklahoma State",
    "loser": "Jim Root",
    "loser_school": "Cal Poly",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Bob Hubbard",
    "loser_school": "Utah",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Doug Baillie",
    "winner_school": "Lehigh",
    "loser": "Al Johnson",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 55,
    "winner": "Dave Jensen",
    "winner_school": "Northern Iowa",
    "loser": "Jerry Hoke",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Tom Huff",
    "winner_school": "Iowa",
    "loser": "Gary Hoagland",
    "loser_school": "Portland State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Ted Pierce",
    "winner_school": "Oklahoma State",
    "loser": "Al Bevilaqua",
    "loser_school": "New York University",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Russ McClatchey",
    "loser_school": "Cornell Iowa",
    "result": "Fall 8:53"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Rosalio Garcia",
    "loser_school": "Kansas State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Doug Baillie",
    "winner_school": "Lehigh",
    "loser": "Jim Woods",
    "loser_school": "Air Force",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Al DeLeon",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Fred Scott",
    "loser_school": "Miami Ohio",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Dave Jensen",
    "winner_school": "Northern Iowa",
    "loser": "Frank Fuhrer",
    "loser_school": "Washington",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Joe DiBella",
    "winner_school": "Coast Guard",
    "loser": "Mike Nissen",
    "loser_school": "Nebraska",
    "result": "MD 9-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Ted Pierce",
    "winner_school": "Oklahoma State",
    "loser": "Tom Huff",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Mickey Martin",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Al DeLeon",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Doug Baillie",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Dave Jensen",
    "winner_school": "Northern Iowa",
    "loser": "Joe DiBella",
    "loser_school": "Coast Guard",
    "result": "Dec 7-0"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Ted Pierce",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Dave Jensen",
    "winner_school": "Northern Iowa",
    "loser": "Al DeLeon",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 7-6"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Al DeLeon",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Larry Lauchle",
    "winner_school": "Pittsburgh",
    "loser": "Dave Jensen",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 265,
    "winner": "Bob Hubbard",
    "winner_school": "Utah",
    "loser": "Rosalio Garcia",
    "loser_school": "Kansas State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 266,
    "winner": "Jerry Hoke",
    "winner_school": "Michigan State",
    "loser": "Frank Fuhrer",
    "loser_school": "Washington",
    "result": "MD 10-2"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Bob Hubbard",
    "loser_school": "Utah",
    "result": "WIN-NP"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Jerry Hoke",
    "winner_school": "Michigan State",
    "loser": "Joe DiBella",
    "loser_school": "Coast Guard",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Mickey Martin",
    "winner_school": "Oklahoma",
    "loser": "Ted Pierce",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Al DeLeon",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Jerry Hoke",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Dan Johnston",
    "winner_school": "Penn State",
    "loser": "Frank Addleman",
    "loser_school": "Long Beach State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Bill Carter",
    "winner_school": "Oklahoma",
    "loser": "Dave Robinson",
    "loser_school": "Utah",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 68,
    "winner": "Daryl Kelvington",
    "winner_school": "Pittsburgh",
    "loser": "Ramon West",
    "loser_school": "RIT",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Dave Gates",
    "winner_school": "Iowa",
    "loser": "Bill Zeltonoga",
    "loser_school": "UCLA",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Ron Finley",
    "winner_school": "Oregon State",
    "loser": "Paul Sengo",
    "loser_school": "Cal State-Chico",
    "result": "Fall 8:22"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Dan Johnston",
    "winner_school": "Penn State",
    "loser": "Bill Taylor",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Charles Patton",
    "winner_school": "Northern Iowa",
    "loser": "Mike Harman",
    "loser_school": "Navy",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Bill Carter",
    "winner_school": "Oklahoma",
    "loser": "Neil Pew",
    "loser_school": "Cal Poly",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Daryl Kelvington",
    "winner_school": "Pittsburgh",
    "loser": "Joe Frank",
    "loser_school": "Iowa State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Norm Young",
    "winner_school": "Michigan State",
    "loser": "Clair Argento",
    "loser_school": "Wyoming",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Doug Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Dave Gates",
    "loser_school": "Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Curt Alexander",
    "winner_school": "Lehigh",
    "loser": "John Day",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Ron Finley",
    "winner_school": "Oregon State",
    "loser": "Dan Johnston",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Bill Carter",
    "winner_school": "Oklahoma",
    "loser": "Charles Patton",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Norm Young",
    "winner_school": "Michigan State",
    "loser": "Daryl Kelvington",
    "loser_school": "Pittsburgh",
    "result": "Fall 7:22"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Doug Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Curt Alexander",
    "loser_school": "Lehigh",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Ron Finley",
    "winner_school": "Oregon State",
    "loser": "Bill Carter",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Norm Young",
    "winner_school": "Michigan State",
    "loser": "Doug Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Bill Carter",
    "winner_school": "Oklahoma",
    "loser": "Doug Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Norm Young",
    "winner_school": "Michigan State",
    "loser": "Ron Finley",
    "loser_school": "Oregon State",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Dan Johnston",
    "winner_school": "Penn State",
    "loser": "Paul Sengo",
    "loser_school": "Cal State-Chico",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Daryl Kelvington",
    "winner_school": "Pittsburgh",
    "loser": "Clair Argento",
    "loser_school": "Wyoming",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Bill Carter",
    "winner_school": "Oklahoma",
    "loser": "Dan Johnston",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Doug Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Daryl Kelvington",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 76,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Del Rossberg",
    "loser_school": "Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Joe Seay",
    "winner_school": "Kansas State",
    "loser": "DeVere Henderson",
    "loser_school": "Air Force",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "Bill Dotson",
    "winner_school": "Northern Iowa",
    "loser": "John McGrath",
    "loser_school": "Navy",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Truman Sandelin",
    "loser_school": "Western State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Jim Blaker",
    "winner_school": "Michigan",
    "loser": "Bill Berry",
    "loser_school": "Washington State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "John Zolikoff",
    "winner_school": "Pittsburgh",
    "loser": "Walter Parker",
    "loser_school": "Cornell Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Lynn Mathews",
    "loser_school": "Oregon",
    "result": "Fall 2:01"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 89,
    "winner": "Dom Fatta",
    "winner_school": "Purdue",
    "loser": "Joe Chamberlin",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Mike Natvig",
    "loser_school": "Army",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Joe Seay",
    "winner_school": "Kansas State",
    "loser": "Bob Gunst",
    "loser_school": "Lehigh",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Lavern Alton",
    "winner_school": "Portland State",
    "loser": "Bill Dotson",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Larry Bender",
    "loser_school": "Pacific",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Jim Blaker",
    "winner_school": "Michigan",
    "loser": "Bill Bailey",
    "loser_school": "Lock Haven",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Toby Zweygardt",
    "winner_school": "Oregon State",
    "loser": "John Zolikoff",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Jim Hoppel",
    "loser_school": "Bowling Green",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Dom Fatta",
    "winner_school": "Purdue",
    "loser": "Pat Reilly",
    "loser_school": "Toledo",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Joe Seay",
    "loser_school": "Kansas State",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Lavern Alton",
    "loser_school": "Portland State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Jim Blaker",
    "winner_school": "Michigan",
    "loser": "Toby Zweygardt",
    "loser_school": "Oregon State",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Dom Fatta",
    "loser_school": "Purdue",
    "result": "Dec 7-1"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Bob Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-7"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Ron Pifer",
    "winner_school": "Penn State",
    "loser": "Jim Blaker",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Jim Blaker",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Larry Hayes",
    "winner_school": "Iowa State",
    "loser": "Ron Pifer",
    "loser_school": "Penn State",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 269,
    "winner": "Truman Sandelin",
    "winner_school": "Western State",
    "loser": "Larry Bender",
    "loser_school": "Pacific",
    "result": "MD 11-0"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 270,
    "winner": "Jim Hoppel",
    "winner_school": "Bowling Green",
    "loser": "Lynn Mathews",
    "loser_school": "Oregon",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Truman Sandelin",
    "winner_school": "Western State",
    "loser": "Lavern Alton",
    "loser_school": "Portland State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Dom Fatta",
    "winner_school": "Purdue",
    "loser": "Jim Hoppel",
    "loser_school": "Bowling Green",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Bob Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Truman Sandelin",
    "loser_school": "Western State",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Jim Blaker",
    "winner_school": "Michigan",
    "loser": "Dom Fatta",
    "loser_school": "Purdue",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 92,
    "winner": "Dave Wight",
    "winner_school": "Wyoming",
    "loser": "Harry Schlieff",
    "loser_school": "Minnesota",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Don Holiness",
    "loser_school": "Oregon",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "Fritz Fivian",
    "winner_school": "Oregon State",
    "loser": "Rex Cox",
    "loser_school": "Chattanooga",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "John Beisner",
    "loser_school": "Cornell Iowa",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Don Corriere",
    "winner_school": "Michigan",
    "loser": "Gerald Ray",
    "loser_school": "Northern Iowa",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Gene Bower",
    "loser_school": "Western State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "Harold Thompson",
    "winner_school": "Nebraska",
    "loser": "Jim Harrison",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 105,
    "winner": "Jeff Hartsell",
    "winner_school": "Citadel",
    "loser": "Herbert Halley",
    "loser_school": "Cal Poly",
    "result": "Fall 1:50"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Fred Recher",
    "winner_school": "Springfield",
    "loser": "Dave Wight",
    "loser_school": "Wyoming",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Mike O'Laughlin",
    "loser_school": "Illinois",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Fritz Fivian",
    "winner_school": "Oregon State",
    "loser": "Bob Deupree",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Duane Wohlfert",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Don Corriere",
    "winner_school": "Michigan",
    "loser": "Charles Franco",
    "loser_school": "Air Force",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Steve Combs",
    "loser_school": "Iowa",
    "result": "Fall 1:20"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Harold Thompson",
    "winner_school": "Nebraska",
    "loser": "Ron Ericson",
    "loser_school": "Colorado State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Autry Ehler",
    "winner_school": "Portland State",
    "loser": "Jeff Hartsell",
    "loser_school": "Citadel",
    "result": "Fall 1:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Fred Recher",
    "loser_school": "Springfield",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Fritz Fivian",
    "loser_school": "Oregon State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Don Corriere",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Harold Thompson",
    "winner_school": "Nebraska",
    "loser": "Autry Ehler",
    "loser_school": "Portland State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Virgil Carr",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Kirk Pendleton",
    "winner_school": "Lehigh",
    "loser": "Harold Thompson",
    "loser_school": "Nebraska",
    "result": "Dec 9-3"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Don Corriere",
    "winner_school": "Michigan",
    "loser": "Virgil Carr",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Phil Kinyon",
    "winner_school": "Oklahoma State",
    "loser": "Kirk Pendleton",
    "loser_school": "Lehigh",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Duane Wohlfert",
    "winner_school": "Michigan State",
    "loser": "John Beisner",
    "loser_school": "Cornell Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 272,
    "winner": "Gene Bower",
    "winner_school": "Western State",
    "loser": "Steve Combs",
    "loser_school": "Iowa",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Fritz Fivian",
    "winner_school": "Oregon State",
    "loser": "Duane Wohlfert",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Don Corriere",
    "winner_school": "Michigan",
    "loser": "Gene Bower",
    "loser_school": "Western State",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Virgil Carr",
    "winner_school": "Iowa State",
    "loser": "Fritz Fivian",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Don Corriere",
    "winner_school": "Michigan",
    "loser": "Harold Thompson",
    "loser_school": "Nebraska",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Dick Zoyhofski",
    "winner_school": "RIT",
    "loser": "Dennis McCaron",
    "loser_school": "Pacific",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Dennis Fitzgerald",
    "winner_school": "Michigan",
    "loser": "Dick Smith",
    "loser_school": "Iowa State",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Don Conway",
    "winner_school": "Oregon State",
    "loser": "Tommy Edgar",
    "loser_school": "Oklahoma",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Pete Nelson",
    "loser_school": "Navy",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Jerry Slattery",
    "winner_school": "Minnesota State-Mankato",
    "loser": "Richard Bell",
    "loser_school": "Washington",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Thad Turner",
    "winner_school": "Lehigh",
    "loser": "Dick Zoyhofski",
    "loser_school": "RIT",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Dennis Fitzgerald",
    "winner_school": "Michigan",
    "loser": "Jim Blazier",
    "loser_school": "Portland State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Dave Abraham",
    "winner_school": "Colorado",
    "loser": "Joe Mullins",
    "loser_school": "Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Frank Hankin",
    "winner_school": "Utah",
    "loser": "Norm Hoffman",
    "loser_school": "Cal Poly",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Bruce Campbell",
    "winner_school": "Oklahoma State",
    "loser": "Bob Schluter",
    "loser_school": "Michigan State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Don Conway",
    "winner_school": "Oregon State",
    "loser": "Bob Marshall",
    "loser_school": "Purdue",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Thad Turner",
    "winner_school": "Lehigh",
    "loser": "Jerry Slattery",
    "loser_school": "Minnesota State-Mankato",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Dennis Fitzgerald",
    "winner_school": "Michigan",
    "loser": "Dave Abraham",
    "loser_school": "Colorado",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Bruce Campbell",
    "winner_school": "Oklahoma State",
    "loser": "Frank Hankin",
    "loser_school": "Utah",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Don Conway",
    "winner_school": "Oregon State",
    "loser": "Thad Turner",
    "loser_school": "Lehigh",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Bruce Campbell",
    "winner_school": "Oklahoma State",
    "loser": "Dennis Fitzgerald",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Frank Hankin",
    "loser_school": "Utah",
    "result": "Dec 9-4"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Don Conway",
    "winner_school": "Oregon State",
    "loser": "Bruce Campbell",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Tommy Edgar",
    "loser_school": "Oklahoma",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Frank Hankin",
    "winner_school": "Utah",
    "loser": "Bob Schluter",
    "loser_school": "Michigan State",
    "result": "Fall 3:30"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Bob Marshall",
    "winner_school": "Purdue",
    "loser": "Thad Turner",
    "loser_school": "Lehigh",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Frank Hankin",
    "winner_school": "Utah",
    "loser": "Dennis Fitzgerald",
    "loser_school": "Michigan",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Bob Johnson",
    "winner_school": "Oklahoma State",
    "loser": "Bob Konsella",
    "loser_school": "Portland State",
    "result": "MD 22-8"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Bob Burge",
    "winner_school": "Colorado State",
    "loser": "Julian Hook",
    "loser_school": "Minnesota",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Bernard Slate",
    "winner_school": "San Jose State",
    "loser": "Jim Ferguson",
    "loser_school": "Wesleyan",
    "result": "Dec 15-11"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Art Siml",
    "winner_school": "Illinois",
    "loser": "Jim Detrixhe",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Al Rushatz",
    "winner_school": "Army",
    "loser": "Jack Berger",
    "loser_school": "Oregon State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Bob Duvall",
    "winner_school": "Iowa State",
    "loser": "John McCray",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Ken Houston",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Mike Sterner",
    "winner_school": "South Dakota State",
    "loser": "Tom Sutton",
    "loser_school": "Air Force",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Bob Johnson",
    "winner_school": "Oklahoma State",
    "loser": "Bob Burge",
    "loser_school": "Colorado State",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Art Siml",
    "winner_school": "Illinois",
    "loser": "Bernard Slate",
    "loser_school": "San Jose State",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Al Rushatz",
    "winner_school": "Army",
    "loser": "Bob Duvall",
    "loser_school": "Iowa State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Mike Sterner",
    "loser_school": "South Dakota State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Bob Johnson",
    "winner_school": "Oklahoma State",
    "loser": "Art Siml",
    "loser_school": "Illinois",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Wayne Baughman",
    "winner_school": "Oklahoma",
    "loser": "Al Rushatz",
    "loser_school": "Army",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Ken Houston",
    "winner_school": "SIU-Carbondale",
    "loser": "Bob Burge",
    "loser_school": "Colorado State",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Bob Johnson",
    "winner_school": "Oklahoma State",
    "loser": "Wayne Baughman",
    "loser_school": "Oklahoma",
    "result": "Dec 9-5"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Bob Burge",
    "winner_school": "Colorado State",
    "loser": "Bob Konsella",
    "loser_school": "Portland State",
    "result": "Dec 14-10"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Ken Houston",
    "winner_school": "SIU-Carbondale",
    "loser": "Mike Sterner",
    "loser_school": "South Dakota State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Bob Burge",
    "winner_school": "Colorado State",
    "loser": "Art Siml",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Ken Houston",
    "winner_school": "SIU-Carbondale",
    "loser": "Al Rushatz",
    "loser_school": "Army",
    "result": "M FOR"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Karl Fink",
    "winner_school": "Michigan",
    "loser": "Lance Parker",
    "loser_school": "Chattanooga",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Von Henry",
    "winner_school": "Oklahoma",
    "loser": "Wayne Atkins",
    "loser_school": "UCLA",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Lenard Lordino",
    "winner_school": "Northern Colorado",
    "loser": "Maurice Bush",
    "loser_school": "Washington",
    "result": "MD 14-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Dave Angell",
    "winner_school": "Lehigh",
    "loser": "Howard Colling",
    "loser_school": "Wyoming",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Allan Jaklich",
    "winner_school": "Northwestern",
    "loser": "Pat Clock",
    "loser_school": "Lewis & Clark",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "Nick Kohls",
    "winner_school": "Colorado State",
    "loser": "Frank Kurtenbach",
    "loser_school": "South Dakota State",
    "result": "Fall 8:18"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "John Griffith",
    "winner_school": "Navy",
    "loser": "Merle Prebel",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 242,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Darrel Kauffman",
    "loser_school": "Oregon State",
    "result": "Dec 10-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Von Henry",
    "winner_school": "Oklahoma",
    "loser": "Karl Fink",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Lenard Lordino",
    "winner_school": "Northern Colorado",
    "loser": "Dave Angell",
    "loser_school": "Lehigh",
    "result": "MD 13-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Nick Kohls",
    "winner_school": "Colorado State",
    "loser": "Allan Jaklich",
    "loser_school": "Northwestern",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "John Griffith",
    "loser_school": "Navy",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Lenard Lordino",
    "winner_school": "Northern Colorado",
    "loser": "Von Henry",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Nick Kohls",
    "winner_school": "Colorado State",
    "loser": "Ronnie Clinton",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Dave Angell",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Lenard Lordino",
    "winner_school": "Northern Colorado",
    "loser": "Nick Kohls",
    "loser_school": "Colorado State",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Dave Angell",
    "winner_school": "Lehigh",
    "loser": "Maurice Bush",
    "loser_school": "Washington",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Allan Jaklich",
    "winner_school": "Northwestern",
    "loser": "Frank Kurtenbach",
    "loser_school": "South Dakota State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Dave Angell",
    "winner_school": "Lehigh",
    "loser": "Von Henry",
    "loser_school": "Oklahoma",
    "result": "Dec 8-7"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Ronnie Clinton",
    "winner_school": "Oklahoma State",
    "loser": "Allan Jaklich",
    "loser_school": "Northwestern",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "Charlie Moore",
    "loser_school": "Lehigh",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Art Youngblood",
    "winner_school": "Kent State",
    "loser": "Jim Raschke",
    "loser_school": "Nebraska",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Dale Lewis",
    "winner_school": "Oklahoma",
    "loser": "Fred Wright",
    "loser_school": "Cornell Iowa",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Dave Davidson",
    "winner_school": "Washington",
    "loser": "Kent Horne",
    "loser_school": "Brigham Young",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Ted Ellis",
    "winner_school": "Oklahoma State",
    "loser": "Warren Dawson",
    "loser_school": "Wyoming",
    "result": "Fall 2:31"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Jan Schwitters",
    "winner_school": "Iowa State",
    "loser": "Warren Roberts",
    "loser_school": "Washington State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "John Oberly",
    "winner_school": "Penn State",
    "loser": "Mike Senzig",
    "loser_school": "Michigan State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "Art Youngblood",
    "loser_school": "Kent State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Dale Lewis",
    "winner_school": "Oklahoma",
    "loser": "Dave Davidson",
    "loser_school": "Washington",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Ted Ellis",
    "winner_school": "Oklahoma State",
    "loser": "Jan Schwitters",
    "loser_school": "Iowa State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "John Oberly",
    "winner_school": "Penn State",
    "loser": "Garry Stensland",
    "loser_school": "Oregon",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Dale Lewis",
    "winner_school": "Oklahoma",
    "loser": "Rory Weber",
    "loser_school": "Northwestern",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Ted Ellis",
    "winner_school": "Oklahoma State",
    "loser": "John Oberly",
    "loser_school": "Penn State",
    "result": "Fall 7:47"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "John Oberly",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Dale Lewis",
    "winner_school": "Oklahoma",
    "loser": "Ted Ellis",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Fred Wright",
    "winner_school": "Cornell Iowa",
    "loser": "Dave Davidson",
    "loser_school": "Washington",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Jan Schwitters",
    "winner_school": "Iowa State",
    "loser": "Warren Dawson",
    "loser_school": "Wyoming",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Rory Weber",
    "winner_school": "Northwestern",
    "loser": "Fred Wright",
    "loser_school": "Cornell Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "John Oberly",
    "winner_school": "Penn State",
    "loser": "Jan Schwitters",
    "loser_school": "Iowa State",
    "result": "Dec 5-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
