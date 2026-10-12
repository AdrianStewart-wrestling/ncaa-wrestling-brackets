// 1957 NCAA Division I Wrestling Championships (At Pittsburgh). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1957 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1957-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 18,
    "winner": "Dave Moore",
    "winner_school": "Illinois",
    "loser": "Art McCall",
    "loser_school": "Temple",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Bob Myers",
    "winner_school": "Lehigh",
    "loser": "Dave Wall",
    "loser_school": "North Carolina",
    "result": "Fall 2:48"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "John McHugh",
    "winner_school": "Maryland",
    "loser": "Charles Prunty",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "David Clark",
    "winner_school": "Columbia",
    "loser": "Larry Guldberg",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Dave Moore",
    "loser_school": "Illinois",
    "result": "MD 21-5"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Henry Wise",
    "winner_school": "Virginia",
    "loser": "Bill Youngers",
    "loser_school": "Kansas State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Bill Hulings",
    "winner_school": "Pittsburgh",
    "loser": "Dante Shapiro",
    "loser_school": "Carleton",
    "result": "Fall 8:10"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Frank Altman",
    "winner_school": "Iowa State",
    "loser": "Tom Carlson",
    "loser_school": "Lafayette",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 178,
    "winner": "Dick Gillihan",
    "winner_school": "Oklahoma State",
    "loser": "John Wager",
    "loser_school": "Toledo",
    "result": "Dec 12-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "John McHugh",
    "winner_school": "Maryland",
    "loser": "Bob Myers",
    "loser_school": "Lehigh",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "David Clark",
    "loser_school": "Columbia",
    "result": "Fall 1:53"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Bill Hulings",
    "winner_school": "Pittsburgh",
    "loser": "Henry Wise",
    "loser_school": "Virginia",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Dick Gillihan",
    "winner_school": "Oklahoma State",
    "loser": "Frank Altman",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "John McHugh",
    "loser_school": "Maryland",
    "result": "Fall 5:48"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Bill Hulings",
    "winner_school": "Pittsburgh",
    "loser": "Dick Gillihan",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Dick Gillihan",
    "winner_school": "Oklahoma State",
    "loser": "Dave Moore",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Bill Hulings",
    "loser_school": "Pittsburgh",
    "result": "Fall 8:11"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Dave Moore",
    "winner_school": "Illinois",
    "loser": "David Clark",
    "loser_school": "Columbia",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Dante Shapiro",
    "winner_school": "Carleton",
    "loser": "Henry Wise",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Dave Moore",
    "winner_school": "Illinois",
    "loser": "John McHugh",
    "loser_school": "Maryland",
    "result": "Dec 1-0 SV"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Dick Gillihan",
    "winner_school": "Oklahoma State",
    "loser": "Dante Shapiro",
    "loser_school": "Carleton",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Ray Haney",
    "winner_school": "Maryland",
    "loser": "George Munnich",
    "loser_school": "Kings Point",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "Dick Mueller",
    "winner_school": "Minnesota",
    "loser": "Joe Ornowski",
    "loser_school": "Ohio",
    "result": "Fall 5:00"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Don Stroud",
    "winner_school": "Michigan State",
    "loser": "Jim Miller",
    "loser_school": "Kansas State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Herb Karcher",
    "winner_school": "Wyoming",
    "loser": "Joel Neuschwander",
    "loser_school": "Oregon State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Leonard Shelton",
    "winner_school": "Oklahoma",
    "loser": "Tom Westfall",
    "loser_school": "West Virginia",
    "result": "Fall 8:14"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Ray Haney",
    "loser_school": "Maryland",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Dick Mueller",
    "winner_school": "Minnesota",
    "loser": "Don Corrigan",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Larry Moser",
    "winner_school": "Iowa",
    "loser": "George Creason",
    "loser_school": "Syracuse",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Sid Nodland",
    "winner_school": "Penn State",
    "loser": "Dave Harty",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Harmon Leslie",
    "winner_school": "Oklahoma State",
    "loser": "Charles Green",
    "loser_school": "Cornell Iowa",
    "result": "Fall 7:48"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Don Stroud",
    "winner_school": "Michigan State",
    "loser": "Herb Karcher",
    "loser_school": "Wyoming",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Leonard Shelton",
    "loser_school": "Oklahoma",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Dick Mueller",
    "winner_school": "Minnesota",
    "loser": "Larry Moser",
    "loser_school": "Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Harmon Leslie",
    "winner_school": "Oklahoma State",
    "loser": "Sid Nodland",
    "loser_school": "Penn State",
    "result": "Dec 8-7"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Don Stroud",
    "loser_school": "Michigan State",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Harmon Leslie",
    "winner_school": "Oklahoma State",
    "loser": "Dick Mueller",
    "loser_school": "Minnesota",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Dick Mueller",
    "winner_school": "Minnesota",
    "loser": "Leonard Shelton",
    "loser_school": "Oklahoma",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Harmon Leslie",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Leonard Shelton",
    "winner_school": "Oklahoma",
    "loser": "Ray Haney",
    "loser_school": "Maryland",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Sid Nodland",
    "winner_school": "Penn State",
    "loser": "Charles Green",
    "loser_school": "Cornell Iowa",
    "result": "WIN-NP"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Leonard Shelton",
    "winner_school": "Oklahoma",
    "loser": "Don Stroud",
    "loser_school": "Michigan State",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Dick Mueller",
    "winner_school": "Minnesota",
    "loser": "Sid Nodland",
    "loser_school": "Penn State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "John Orr",
    "loser_school": "Drexel",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 49,
    "winner": "Leon Harbold",
    "winner_school": "Lehigh",
    "loser": "Dick Storch",
    "loser_school": "Carleton",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Ed Masteller",
    "winner_school": "Northern Iowa",
    "loser": "George Willis",
    "loser_school": "Cornell",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Jerry Hoke",
    "winner_school": "Michigan State",
    "loser": "Jerry Weisenseel",
    "loser_school": "Army",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 52,
    "winner": "Lee Allen",
    "winner_school": "Oregon",
    "loser": "Bob Herald",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Max Pearson",
    "winner_school": "Michigan",
    "loser": "Clarence McNair",
    "loser_school": "Kent State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Vic DeFelice",
    "winner_school": "Pittsburgh",
    "loser": "Bob Wagner",
    "loser_school": "North Carolina",
    "result": "Fall 4:52"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "Paul Striker",
    "loser_school": "Harvard",
    "result": "Fall 7:35"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Ed Masteller",
    "winner_school": "Northern Iowa",
    "loser": "Leon Harbold",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Lee Allen",
    "winner_school": "Oregon",
    "loser": "Jerry Hoke",
    "loser_school": "Michigan State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Joe Shook",
    "winner_school": "Indiana",
    "loser": "Fred Frommelt",
    "loser_school": "Baltimore",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "John Johnston",
    "winner_school": "Penn State",
    "loser": "Dick Chellevoid",
    "loser_school": "Wartburg",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Dean Corner",
    "winner_school": "Iowa State",
    "loser": "Gordon Muse",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Max Pearson",
    "winner_school": "Michigan",
    "loser": "Vic DeFelice",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "Ed Masteller",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Lee Allen",
    "winner_school": "Oregon",
    "loser": "Joe Shook",
    "loser_school": "Indiana",
    "result": "Dec 12-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "John Johnston",
    "winner_school": "Penn State",
    "loser": "Dean Corner",
    "loser_school": "Iowa State",
    "result": "Dec 8-5"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Max Pearson",
    "winner_school": "Michigan",
    "loser": "Bobby Lyons",
    "loser_school": "Oklahoma",
    "result": "DEF"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "John Johnston",
    "winner_school": "Penn State",
    "loser": "Lee Allen",
    "loser_school": "Oregon",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Dean Corner",
    "winner_school": "Iowa State",
    "loser": "Vic DeFelice",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "John Johnston",
    "winner_school": "Penn State",
    "loser": "Max Pearson",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Vic DeFelice",
    "winner_school": "Pittsburgh",
    "loser": "Clarence McNair",
    "loser_school": "Kent State",
    "result": "Fall 5:10"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Dean Corner",
    "winner_school": "Iowa State",
    "loser": "Dick Chellevoid",
    "loser_school": "Wartburg",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Vic DeFelice",
    "winner_school": "Pittsburgh",
    "loser": "Bobby Lyons",
    "loser_school": "Oklahoma",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Dean Corner",
    "winner_school": "Iowa State",
    "loser": "Lee Allen",
    "loser_school": "Oregon",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 65,
    "winner": "John Pepe",
    "winner_school": "Penn State",
    "loser": "Tom Nevits",
    "loser_school": "Ohio",
    "result": "Dec 1-0 SV"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Lyle Neville",
    "winner_school": "Colorado",
    "loser": "Don Kovalchik",
    "loser_school": "Rutgers",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Ted Bienkowski",
    "winner_school": "Pittsburgh",
    "loser": "Perrin Henderson",
    "loser_school": "North Carolina",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 68,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Don Morrison",
    "loser_school": "Indiana",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Lee Grubbs",
    "winner_school": "SIU-Carbondale",
    "loser": "Armand Taylor",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Ralph Rieks",
    "winner_school": "Iowa",
    "loser": "John Owings",
    "loser_school": "Oregon State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Rod Norris",
    "winner_school": "Maryland",
    "loser": "Norman Gill",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "John Pepe",
    "winner_school": "Penn State",
    "loser": "Lyle Neville",
    "loser_school": "Colorado",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Ted Bienkowski",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "John Vovos",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:59"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Stan Wintermote",
    "winner_school": "Wyoming",
    "loser": "Joe Yeats",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Bill Muther",
    "winner_school": "Illinois",
    "loser": "Don Dravis",
    "loser_school": "Minnesota State",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Ralph Rieks",
    "winner_school": "Iowa",
    "loser": "Lee Grubbs",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "John Pepe",
    "winner_school": "Penn State",
    "loser": "Rod Norris",
    "loser_school": "Maryland",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "Paul Aubrey",
    "loser_school": "Oklahoma",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Bill Muther",
    "winner_school": "Illinois",
    "loser": "Stan Wintermote",
    "loser_school": "Wyoming",
    "result": "Dec 13-12"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "John Pepe",
    "winner_school": "Penn State",
    "loser": "Ralph Rieks",
    "loser_school": "Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "Bill Muther",
    "loser_school": "Illinois",
    "result": "Dec 7-6"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Ralph Rieks",
    "winner_school": "Iowa",
    "loser": "Paul Aubrey",
    "loser_school": "Oklahoma",
    "result": "Dec 1-0 SV"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "John Pepe",
    "loser_school": "Penn State",
    "result": "Dec 9-8"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 267,
    "winner": "Tom Nevits",
    "winner_school": "Ohio",
    "loser": "Lyle Neville",
    "loser_school": "Colorado",
    "result": "Dec 1-0"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Tom Nevits",
    "winner_school": "Ohio",
    "loser": "Rod Norris",
    "loser_school": "Maryland",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "John Vovos",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-4"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Ralph Rieks",
    "winner_school": "Iowa",
    "loser": "Tom Nevits",
    "loser_school": "Ohio",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Paul Aubrey",
    "winner_school": "Oklahoma",
    "loser": "Bill Muther",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 77,
    "winner": "Werner Holzer",
    "winner_school": "Illinois",
    "loser": "Bob Bubb",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Peter Roche",
    "winner_school": "Brown",
    "loser": "Charles Goldthorp",
    "loser_school": "Lock Haven",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 79,
    "winner": "Claudell Wright",
    "winner_school": "Oklahoma State",
    "loser": "Jim Heald",
    "loser_school": "Swarthmore",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "John Heintz",
    "winner_school": "Carleton",
    "loser": "Pete Jones",
    "loser_school": "Wyoming",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 81,
    "winner": "Dave Adams",
    "winner_school": "Penn State",
    "loser": "Bernard Wood",
    "loser_school": "CCNY",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Wilbur Derby",
    "winner_school": "Colorado",
    "loser": "Don Meyers",
    "loser_school": "Minnesota",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Nick Petronka",
    "winner_school": "Indiana",
    "loser": "Jim Roberts",
    "loser_school": "Kansas State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 84,
    "winner": "Dick Santoro",
    "winner_school": "Lehigh",
    "loser": "John Sforzo",
    "loser_school": "Ohio",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "Steve Prepeck",
    "winner_school": "Northwestern",
    "loser": "Nick Biondi",
    "loser_school": "Maryland",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 86,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "Lee Young",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Paul Weinhold",
    "winner_school": "Colorado State",
    "loser": "Don Simpson",
    "loser_school": "Muhlenberg",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "John Noble",
    "loser_school": "Harvard",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Werner Holzer",
    "winner_school": "Illinois",
    "loser": "Peter Roche",
    "loser_school": "Brown",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Claudell Wright",
    "winner_school": "Oklahoma State",
    "loser": "John Heintz",
    "loser_school": "Carleton",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Dave Adams",
    "winner_school": "Penn State",
    "loser": "Wilbur Derby",
    "loser_school": "Colorado",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Dick Santoro",
    "winner_school": "Lehigh",
    "loser": "Nick Petronka",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "Steve Prepeck",
    "loser_school": "Northwestern",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Jack Anderson",
    "winner_school": "Minnesota State",
    "loser": "Paul Weinhold",
    "loser_school": "Colorado State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Simon Roberts",
    "winner_school": "Iowa",
    "loser": "Larry Wright",
    "loser_school": "Oregon State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Werner Holzer",
    "loser_school": "Illinois",
    "result": "Dec 10-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Dave Adams",
    "winner_school": "Penn State",
    "loser": "Claudell Wright",
    "loser_school": "Oklahoma State",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "Dick Santoro",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Simon Roberts",
    "winner_school": "Iowa",
    "loser": "Jack Anderson",
    "loser_school": "Minnesota State",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Ron Gray",
    "winner_school": "Iowa State",
    "loser": "Dave Adams",
    "loser_school": "Penn State",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Simon Roberts",
    "winner_school": "Iowa",
    "loser": "Dick Heaton",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Werner Holzer",
    "winner_school": "Illinois",
    "loser": "Jack Anderson",
    "loser_school": "Minnesota State",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Simon Roberts",
    "winner_school": "Iowa",
    "loser": "Ron Gray",
    "loser_school": "Iowa State",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Werner Holzer",
    "winner_school": "Illinois",
    "loser": "John Noble",
    "loser_school": "Harvard",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Jack Anderson",
    "winner_school": "Minnesota State",
    "loser": "Larry Wright",
    "loser_school": "Oregon State",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Werner Holzer",
    "winner_school": "Illinois",
    "loser": "Dave Adams",
    "loser_school": "Penn State",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Jack Anderson",
    "winner_school": "Minnesota State",
    "loser": "Dick Heaton",
    "loser_school": "Northern Iowa",
    "result": "Fall 5:20"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 93,
    "winner": "Sal Amato",
    "winner_school": "Maryland",
    "loser": "Gerry Gienger",
    "loser_school": "Northern Iowa",
    "result": "Fall 7:43"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "Dave Johnson",
    "winner_school": "Pittsburgh",
    "loser": "Arnold Brandt",
    "loser_school": "Wartburg",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 95,
    "winner": "Bob Koster",
    "winner_school": "Williams",
    "loser": "Sam Menefee",
    "loser_school": "Duke",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "George Krupicka",
    "winner_school": "Oregon",
    "loser": "Charles Arends",
    "loser_school": "Northwestern",
    "result": "Fall 5:34"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "Bill Gabbard",
    "winner_school": "Illinois",
    "loser": "Dwight Conklin",
    "loser_school": "Rutgers",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 98,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Al Gibbons",
    "loser_school": "Carleton",
    "result": "Fall 8:26"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 99,
    "winner": "Dale Ketelsen",
    "winner_school": "Iowa State",
    "loser": "Charles Boyette",
    "loser_school": "North Carolina",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Louis Taucher",
    "winner_school": "Oregon State",
    "loser": "Ron Fretheim",
    "loser_school": "Luther",
    "result": "Fall 5:12"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "Bob Malcolm",
    "loser_school": "Minnesota State",
    "result": "Fall 3:40"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 102,
    "winner": "Earl Poust",
    "winner_school": "Penn State",
    "loser": "George Asadorian",
    "loser_school": "Baldwin Wallace",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "Bill Gallo",
    "winner_school": "Indiana",
    "loser": "Don Vaughn",
    "loser_school": "Virginia Tech",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 104,
    "winner": "Don Studebaker",
    "winner_school": "Oklahoma",
    "loser": "Ed Hamer",
    "loser_school": "Lehigh",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Ron Baker",
    "winner_school": "Minnesota",
    "loser": "Dan Notine",
    "loser_school": "Hofstra",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Dave Johnson",
    "winner_school": "Pittsburgh",
    "loser": "Sal Amato",
    "loser_school": "Maryland",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Bob Koster",
    "winner_school": "Williams",
    "loser": "George Krupicka",
    "loser_school": "Oregon",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Bill Gabbard",
    "loser_school": "Illinois",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Dale Ketelsen",
    "winner_school": "Iowa State",
    "loser": "Louis Taucher",
    "loser_school": "Oregon State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "Earl Poust",
    "loser_school": "Penn State",
    "result": "Fall 6:20"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Bill Gallo",
    "winner_school": "Indiana",
    "loser": "Don Studebaker",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Tom Halford",
    "winner_school": "Iowa",
    "loser": "John Doyle",
    "loser_school": "Kansas State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Dave Johnson",
    "winner_school": "Pittsburgh",
    "loser": "Ron Baker",
    "loser_school": "Minnesota",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Bob Koster",
    "loser_school": "Williams",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "Dale Ketelsen",
    "loser_school": "Iowa State",
    "result": "Fall 3:49"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Tom Halford",
    "winner_school": "Iowa",
    "loser": "Bill Gallo",
    "loser_school": "Indiana",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Dave Johnson",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "Tom Halford",
    "loser_school": "Iowa",
    "result": "Fall 3:58"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Dale Ketelsen",
    "winner_school": "Iowa State",
    "loser": "Bob Koster",
    "loser_school": "Williams",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Mike Rodriguez",
    "loser_school": "Michigan",
    "result": "Dec 9-3"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Bill Gabbard",
    "winner_school": "Illinois",
    "loser": "Al Gibbons",
    "loser_school": "Carleton",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 272,
    "winner": "Earl Poust",
    "winner_school": "Penn State",
    "loser": "Bob Malcolm",
    "loser_school": "Minnesota State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Bob Koster",
    "winner_school": "Williams",
    "loser": "Bill Gabbard",
    "loser_school": "Illinois",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Dale Ketelsen",
    "winner_school": "Iowa State",
    "loser": "Earl Poust",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Bob Koster",
    "winner_school": "Williams",
    "loser": "Dave Johnson",
    "loser_school": "Pittsburgh",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Dale Ketelsen",
    "winner_school": "Iowa State",
    "loser": "Tom Halford",
    "loser_school": "Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Jack Marchello",
    "winner_school": "Michigan",
    "loser": "Walter Kohler",
    "loser_school": "Hiram",
    "result": "Fall 5:20"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Ken Koenig",
    "winner_school": "Kent State",
    "loser": "John Anderson",
    "loser_school": "Cornell Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Jim Craig",
    "winner_school": "Iowa",
    "loser": "John Wright",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Ralph Schneider",
    "winner_school": "Waynesburg",
    "loser": "Bob Foster",
    "loser_school": "Harvard",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Jim Ferguson",
    "winner_school": "Michigan State",
    "loser": "George Gray",
    "loser_school": "Penn State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State",
    "loser": "Dick Dean",
    "loser_school": "Maryland",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Ray McGuire",
    "winner_school": "Northern Colorado",
    "loser": "John Ellwood",
    "loser_school": "Lock Haven",
    "result": "Dec 3-0 SV"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Duane Murty",
    "winner_school": "Oklahoma State",
    "loser": "Bob Koehen",
    "loser_school": "Minnesota",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Ken Kraft",
    "winner_school": "Northwestern",
    "loser": "Steve Smethurst",
    "loser_school": "Cornell",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Neal Lesher",
    "winner_school": "Rutgers",
    "loser": "Tom Murphy",
    "loser_school": "Northern Iowa",
    "result": "Fall 5:43"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Rex Edgar",
    "winner_school": "Oklahoma",
    "loser": "Harold Brownstein",
    "loser_school": "Illinois",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Ed Rath",
    "winner_school": "Colorado State",
    "loser": "Bernard Stolls",
    "loser_school": "CCNY",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Frank Powell",
    "winner_school": "Iowa State",
    "loser": "Dave Atkinson",
    "loser_school": "North Carolina",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Jack Marchello",
    "winner_school": "Michigan",
    "loser": "Ken Koenig",
    "loser_school": "Kent State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Ralph Schneider",
    "winner_school": "Waynesburg",
    "loser": "Jim Craig",
    "loser_school": "Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State",
    "loser": "Jim Ferguson",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Ray McGuire",
    "winner_school": "Northern Colorado",
    "loser": "Duane Murty",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Ken Kraft",
    "winner_school": "Northwestern",
    "loser": "Neal Lesher",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Rex Edgar",
    "winner_school": "Oklahoma",
    "loser": "Ed Rath",
    "loser_school": "Colorado State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Tom Alberts",
    "winner_school": "Pittsburgh",
    "loser": "Frank Gutierrez",
    "loser_school": "Muhlenberg",
    "result": "Fall 4:22"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Frank Powell",
    "winner_school": "Iowa State",
    "loser": "Jack Marchello",
    "loser_school": "Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Ralph Schneider",
    "winner_school": "Waynesburg",
    "loser": "Roy Minter",
    "loser_school": "Minnesota State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Ken Kraft",
    "winner_school": "Northwestern",
    "loser": "Ray McGuire",
    "loser_school": "Northern Colorado",
    "result": "Dec UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Tom Alberts",
    "winner_school": "Pittsburgh",
    "loser": "Rex Edgar",
    "loser_school": "Oklahoma",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Ralph Schneider",
    "winner_school": "Waynesburg",
    "loser": "Frank Powell",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Tom Alberts",
    "winner_school": "Pittsburgh",
    "loser": "Ken Kraft",
    "loser_school": "Northwestern",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Rex Edgar",
    "winner_school": "Oklahoma",
    "loser": "Roy Minter",
    "loser_school": "Minnesota State",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Tom Alberts",
    "winner_school": "Pittsburgh",
    "loser": "Ralph Schneider",
    "loser_school": "Waynesburg",
    "result": "Dec 8-5"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State",
    "loser": "Bob Foster",
    "loser_school": "Harvard",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Rex Edgar",
    "winner_school": "Oklahoma",
    "loser": "Frank Gutierrez",
    "loser_school": "Muhlenberg",
    "result": "WIN-NP"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State",
    "loser": "Frank Powell",
    "loser_school": "Iowa State",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Rex Edgar",
    "winner_school": "Oklahoma",
    "loser": "Ken Kraft",
    "loser_school": "Northwestern",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Doug Volgenau",
    "winner_school": "Navy",
    "loser": "Jim Harding",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Gary Haller",
    "winner_school": "Kansas State",
    "loser": "Frank Fiore",
    "loser_school": "Kent State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Alex Skirpan",
    "winner_school": "Pittsburgh",
    "loser": "Merv Miller",
    "loser_school": "Cornell Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Dick Garretson",
    "loser_school": "Rutgers",
    "result": "Fall 5:50"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Ron Flemming",
    "winner_school": "Franklin and Marshall",
    "loser": "Paul Billy",
    "loser_school": "Muhlenberg",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Tom Shaheen",
    "winner_school": "Iowa",
    "loser": "Ben Petrelli",
    "loser_school": "Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Gene Frank",
    "winner_school": "Iowa State",
    "loser": "Charles Dinkelmeyer",
    "loser_school": "Syracuse",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Leroy Fladseth",
    "winner_school": "Michigan State",
    "loser": "Bob Gilmore",
    "loser_school": "Harvard",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "John Dustin",
    "winner_school": "Oregon State",
    "loser": "Cliff Matthews",
    "loser_school": "Maryland",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Les Walters",
    "winner_school": "Penn State",
    "loser": "Karl Lutomski",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Gary Haller",
    "winner_school": "Kansas State",
    "loser": "Doug Volgenau",
    "loser_school": "Navy",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Alex Skirpan",
    "loser_school": "Pittsburgh",
    "result": "Fall 0:50"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Ron Flemming",
    "winner_school": "Franklin and Marshall",
    "loser": "Tom Shaheen",
    "loser_school": "Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Gene Frank",
    "winner_school": "Iowa State",
    "loser": "Leroy Fladseth",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Jesse Stokes",
    "winner_school": "Wyoming",
    "loser": "John Alexander",
    "loser_school": "Brown",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Bill Wright",
    "winner_school": "Minnesota",
    "loser": "Gary Burdick",
    "loser_school": "SIU-Carbondale",
    "result": "Fall 1:19"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "John Dustin",
    "winner_school": "Oregon State",
    "loser": "Les Walters",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Gary Haller",
    "loser_school": "Kansas State",
    "result": "Fall 0:28"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Ron Flemming",
    "winner_school": "Franklin and Marshall",
    "loser": "Gene Frank",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Jesse Stokes",
    "winner_school": "Wyoming",
    "loser": "Bill Wright",
    "loser_school": "Minnesota",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "John Dustin",
    "loser_school": "Oregon State",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Ron Flemming",
    "winner_school": "Franklin and Marshall",
    "loser": "Jesse Stokes",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Gene Frank",
    "winner_school": "Iowa State",
    "loser": "John Dustin",
    "loser_school": "Oregon State",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Ron Flemming",
    "loser_school": "Franklin and Marshall",
    "result": "Fall 7:31"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 275,
    "winner": "Alex Skirpan",
    "winner_school": "Pittsburgh",
    "loser": "Dick Garretson",
    "loser_school": "Rutgers",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsA",
    "weight": "177",
    "bout": 276,
    "winner": "Paul Billy",
    "winner_school": "Muhlenberg",
    "loser": "Tom Shaheen",
    "loser_school": "Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Gary Haller",
    "winner_school": "Kansas State",
    "loser": "Alex Skirpan",
    "loser_school": "Pittsburgh",
    "result": "Fall 4:10"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Gene Frank",
    "winner_school": "Iowa State",
    "loser": "Paul Billy",
    "loser_school": "Muhlenberg",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "John Dustin",
    "winner_school": "Oregon State",
    "loser": "Gary Haller",
    "loser_school": "Kansas State",
    "result": "Fall 3:56"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Gene Frank",
    "winner_school": "Iowa State",
    "loser": "Jesse Stokes",
    "loser_school": "Wyoming",
    "result": "Fall 4:16"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 146,
    "winner": "Ron Schirf",
    "winner_school": "Pittsburgh",
    "loser": "Ade Sponberg",
    "loser_school": "Gustavus Adolphus",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Mike Clock",
    "winner_school": "Lewis & Clark",
    "loser": "Jim Dietrich",
    "loser_school": "Kansas State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Sam Markle",
    "loser_school": "Penn State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Jack Himmelwright",
    "winner_school": "Colorado",
    "loser": "Mike Pantely",
    "loser_school": "Waynesburg",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Ron Schirf",
    "winner_school": "Pittsburgh",
    "loser": "Steve Zervas",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Jack Stanbrook",
    "winner_school": "SUNY-Cortland",
    "loser": "Bill Fagg",
    "loser_school": "Army",
    "result": "Fall 6:55"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "Willis Wood",
    "winner_school": "Minnesota",
    "loser": "Wayne Murty",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Roger Pohlman",
    "winner_school": "Iowa State",
    "loser": "Ken Maidlow",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 242,
    "winner": "Tony Stremic",
    "winner_school": "Navy",
    "loser": "Bernard Sullivan",
    "loser_school": "Oklahoma",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Mike Clock",
    "loser_school": "Lewis & Clark",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Ron Schirf",
    "winner_school": "Pittsburgh",
    "loser": "Jack Himmelwright",
    "loser_school": "Colorado",
    "result": "MD 14-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Jack Stanbrook",
    "winner_school": "SUNY-Cortland",
    "loser": "Willis Wood",
    "loser_school": "Minnesota",
    "result": "Fall 6:38"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Tony Stremic",
    "winner_school": "Navy",
    "loser": "Roger Pohlman",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Ron Schirf",
    "winner_school": "Pittsburgh",
    "loser": "Gary Kurdelmeier",
    "loser_school": "Iowa",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Tony Stremic",
    "winner_school": "Navy",
    "loser": "Jack Stanbrook",
    "loser_school": "SUNY-Cortland",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Bernard Sullivan",
    "winner_school": "Oklahoma",
    "loser": "Jack Himmelwright",
    "loser_school": "Colorado",
    "result": "Fall 3:06"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Ron Schirf",
    "winner_school": "Pittsburgh",
    "loser": "Tony Stremic",
    "loser_school": "Navy",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 277,
    "winner": "Steve Zervas",
    "winner_school": "Michigan",
    "loser": "Ade Sponberg",
    "loser_school": "Gustavus Adolphus",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Jack Himmelwright",
    "winner_school": "Colorado",
    "loser": "Steve Zervas",
    "loser_school": "Michigan",
    "result": "Dec 8-3"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Bernard Sullivan",
    "winner_school": "Oklahoma",
    "loser": "Roger Pohlman",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Jack Himmelwright",
    "winner_school": "Colorado",
    "loser": "Gary Kurdelmeier",
    "loser_school": "Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Bernard Sullivan",
    "winner_school": "Oklahoma",
    "loser": "Jack Stanbrook",
    "loser_school": "SUNY-Cortland",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Henry Jordan",
    "winner_school": "Virginia",
    "loser": "Bob Marshall",
    "loser_school": "Colorado State",
    "result": "Fall 5:04"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Fred Ulmer",
    "winner_school": "Drexel",
    "loser": "Dave Herbold",
    "loser_school": "Minnesota",
    "result": "Fall 7:24"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Dick Bruneman",
    "loser_school": "Miami Ohio",
    "result": "Fall 7:30"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Earl Lynn",
    "winner_school": "Oklahoma State",
    "loser": "Charles Pfrommer",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Bob Norman",
    "winner_school": "Illinois",
    "loser": "Les Nader",
    "loser_school": "Kent State",
    "result": "MD 9-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Henry Jordan",
    "winner_school": "Virginia",
    "loser": "Ed Hayes",
    "loser_school": "SIU-Carbondale",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Fred Ulmer",
    "loser_school": "Drexel",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Bob Norman",
    "winner_school": "Illinois",
    "loser": "Earl Lynn",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Mike Sandusky",
    "winner_school": "Maryland",
    "loser": "Dick Kubes",
    "loser_school": "Minnesota State",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Henry Jordan",
    "winner_school": "Virginia",
    "loser": "Gordon Roesler",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Bob Norman",
    "winner_school": "Illinois",
    "loser": "Mike Sandusky",
    "loser_school": "Maryland",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Mike Sandusky",
    "loser_school": "Maryland",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Bob Norman",
    "winner_school": "Illinois",
    "loser": "Henry Jordan",
    "loser_school": "Virginia",
    "result": "Dec 6-1"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Bob Marshall",
    "winner_school": "Colorado State",
    "loser": "Ed Hayes",
    "loser_school": "SIU-Carbondale",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Les Nader",
    "winner_school": "Kent State",
    "loser": "Earl Lynn",
    "loser_school": "Oklahoma State",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Bob Marshall",
    "loser_school": "Colorado State",
    "result": "Dec 5-1"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Mike Sandusky",
    "winner_school": "Maryland",
    "loser": "Les Nader",
    "loser_school": "Kent State",
    "result": "DEF"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
