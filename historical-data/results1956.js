// 1956 NCAA Division I Wrestling Championships (At Oklahoma State). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1956 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1956-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Edward Amerantes",
    "winner_school": "Springfield",
    "loser": "Phil Martinez",
    "loser_school": "Colorado State",
    "result": "Fall 2:30"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Ray Bergfield",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Roy Schlesser",
    "loser_school": "Oregon",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Charles Prunty",
    "winner_school": "Minnesota",
    "loser": "Alvaro Ciachar",
    "loser_school": "Texas A & M",
    "result": "Fall 5:24"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Dave Bowlin",
    "winner_school": "Oklahoma State",
    "loser": "John Lanning",
    "loser_school": "Cornell Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "John McHugh",
    "winner_school": "Maryland",
    "loser": "Bob Downey",
    "loser_school": "Minnesota State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Dave Moore",
    "winner_school": "Illinois",
    "loser": "Manuel Pihakis",
    "loser_school": "Indiana",
    "result": "Fall 1:51"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 178,
    "winner": "Bill Hulings",
    "winner_school": "Pittsburgh",
    "loser": "Dave Wall",
    "loser_school": "North Carolina",
    "result": "Fall 1:30"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Edward Amerantes",
    "loser_school": "Springfield",
    "result": "Fall 4:45"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Charles Prunty",
    "loser_school": "Minnesota",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Dave Bowlin",
    "winner_school": "Oklahoma State",
    "loser": "John McHugh",
    "loser_school": "Maryland",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Bill Hulings",
    "winner_school": "Pittsburgh",
    "loser": "Dave Moore",
    "loser_school": "Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Dick Delgado",
    "loser_school": "Oklahoma",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Bill Hulings",
    "winner_school": "Pittsburgh",
    "loser": "Dave Bowlin",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Dave Bowlin",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Bill Hulings",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Roy Schlesser",
    "winner_school": "Oregon",
    "loser": "Charles Prunty",
    "loser_school": "Minnesota",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Dave Moore",
    "winner_school": "Illinois",
    "loser": "Dave Wall",
    "loser_school": "North Carolina",
    "result": "Fall 2:34"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Dick Delgado",
    "winner_school": "Oklahoma",
    "loser": "Roy Schlesser",
    "loser_school": "Oregon",
    "result": "Dec 10-6"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Dave Bowlin",
    "winner_school": "Oklahoma State",
    "loser": "Dave Moore",
    "loser_school": "Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Dick Govig",
    "winner_school": "Iowa",
    "loser": "Ed Corr",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Ed Anderson",
    "winner_school": "Minnesota",
    "loser": "George Mandel",
    "loser_school": "Lock Haven",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Bob Kennedy",
    "loser_school": "Oregon State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Sid Nodland",
    "winner_school": "Penn State",
    "loser": "Bill Hayden",
    "loser_school": "Colorado",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Robert Royce",
    "winner_school": "Wyoming",
    "loser": "Daniel Deppe",
    "loser_school": "Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Vernon Whitney",
    "winner_school": "Purdue",
    "loser": "Bob Thornton",
    "loser_school": "North Carolina",
    "result": "Fall 2:07"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Don Stroud",
    "winner_school": "Michigan State",
    "loser": "Dick Govig",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Ed Anderson",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Robert Royce",
    "winner_school": "Wyoming",
    "loser": "Sid Nodland",
    "loser_school": "Penn State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Harmon Leslie",
    "winner_school": "Oklahoma State",
    "loser": "Vernon Whitney",
    "loser_school": "Purdue",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Don Stroud",
    "loser_school": "Michigan State",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Harmon Leslie",
    "winner_school": "Oklahoma State",
    "loser": "Robert Royce",
    "loser_school": "Wyoming",
    "result": "Dec 10-4"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Vernon Whitney",
    "winner_school": "Purdue",
    "loser": "Don Stroud",
    "loser_school": "Michigan State",
    "result": "Dec 1-0"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Harmon Leslie",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Ed Anderson",
    "winner_school": "Minnesota",
    "loser": "Bob Kennedy",
    "loser_school": "Oregon State",
    "result": "MD 8-0"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Don Stroud",
    "winner_school": "Michigan State",
    "loser": "Ed Anderson",
    "loser_school": "Minnesota",
    "result": "Dec 5-5 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Vernon Whitney",
    "winner_school": "Purdue",
    "loser": "Robert Royce",
    "loser_school": "Wyoming",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 49,
    "winner": "Alfred Carson",
    "winner_school": "Virginia Tech",
    "loser": "Les Turner",
    "loser_school": "Lock Haven",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "Jim Bodenhamer",
    "loser_school": "San Diego State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Joe Alissi",
    "winner_school": "Springfield",
    "loser": "Ray Napoli",
    "loser_school": "Ohio",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Vic DeFelice",
    "winner_school": "Pittsburgh",
    "loser": "Ed Weatherly",
    "loser_school": "Maryland",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Earle Edwards",
    "loser_school": "Wisconsin",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Alfred Carson",
    "winner_school": "Virginia Tech",
    "loser": "Don Burchard",
    "loser_school": "Texas A & M",
    "result": "Fall 4:35"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "Alvin Taylor",
    "loser_school": "CCNY",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Frank Hirt",
    "winner_school": "Michigan",
    "loser": "Kent Townley",
    "loser_school": "Iowa State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Jerry Hoke",
    "winner_school": "Michigan State",
    "loser": "John Johnston",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Bob Mancuso",
    "winner_school": "Kansas State",
    "loser": "John Vovos",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:59"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Vic DeFelice",
    "winner_school": "Pittsburgh",
    "loser": "Joe Alissi",
    "loser_school": "Springfield",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Alfred Carson",
    "loser_school": "Virginia Tech",
    "result": "Fall 2:44"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "Frank Hirt",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Jerry Hoke",
    "winner_school": "Michigan State",
    "loser": "Bob Mancuso",
    "loser_school": "Kansas State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Vic DeFelice",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "Jerry Hoke",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Vic DeFelice",
    "winner_school": "Pittsburgh",
    "loser": "Frank Hirt",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Bobby Lyons",
    "loser_school": "Oklahoma",
    "result": "Dec 9-4"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 266,
    "winner": "Jim Bodenhamer",
    "winner_school": "San Diego State",
    "loser": "Alvin Taylor",
    "loser_school": "CCNY",
    "result": "Dec 10-4"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Earle Edwards",
    "winner_school": "Wisconsin",
    "loser": "Alfred Carson",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Frank Hirt",
    "winner_school": "Michigan",
    "loser": "Jim Bodenhamer",
    "loser_school": "San Diego State",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Vic DeFelice",
    "winner_school": "Pittsburgh",
    "loser": "Earle Edwards",
    "loser_school": "Wisconsin",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Frank Hirt",
    "winner_school": "Michigan",
    "loser": "Jerry Hoke",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Simon Roberts",
    "winner_school": "Iowa",
    "loser": "Bob Majors",
    "loser_school": "Cornell Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "Bill Muther",
    "winner_school": "Illinois",
    "loser": "Dean Corner",
    "loser_school": "Iowa State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Don Hart",
    "winner_school": "Oklahoma",
    "loser": "Bob Bubb",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Ron McIntyre",
    "winner_school": "Lock Haven",
    "loser": "Marvin Everest",
    "loser_school": "Kansas State",
    "result": "Fall 2:26"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Armand Taylor",
    "winner_school": "Virginia Tech",
    "loser": "Charles Schoenfeld",
    "loser_school": "Texas A & M",
    "result": "Fall 5:30"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Jerry Ogurkis",
    "winner_school": "Maryland",
    "loser": "Lester Kroeger",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Stan Wintermote",
    "winner_school": "Wyoming",
    "loser": "David Simmons",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "John Pepe",
    "winner_school": "Penn State",
    "loser": "Simon Roberts",
    "loser_school": "Iowa",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Bill Muther",
    "winner_school": "Illinois",
    "loser": "Tom Nevits",
    "loser_school": "Ohio",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Don Hart",
    "winner_school": "Oklahoma",
    "loser": "Dave Newland",
    "loser_school": "Oregon",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "Ron McIntyre",
    "loser_school": "Lock Haven",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Ron Day",
    "winner_school": "Colorado State",
    "loser": "Armand Taylor",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "Jerry Ogurkis",
    "loser_school": "Maryland",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Stan Wintermote",
    "winner_school": "Wyoming",
    "loser": "Jim Stevens",
    "loser_school": "New Mexico",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Art Keith",
    "winner_school": "Oregon State",
    "loser": "Joe Langton",
    "loser_school": "Navy",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "John Pepe",
    "winner_school": "Penn State",
    "loser": "Bill Muther",
    "loser_school": "Illinois",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "Don Hart",
    "loser_school": "Oklahoma",
    "result": "Dec 19-15"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Ron Day",
    "winner_school": "Colorado State",
    "loser": "Joe Gratto",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Stan Wintermote",
    "winner_school": "Wyoming",
    "loser": "Art Keith",
    "loser_school": "Oregon State",
    "result": "Dec 20-13"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "John Pepe",
    "loser_school": "Penn State",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Ron Day",
    "winner_school": "Colorado State",
    "loser": "Stan Wintermote",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "John Pepe",
    "winner_school": "Penn State",
    "loser": "Joe Gratto",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "Ron Day",
    "loser_school": "Colorado State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Don Hart",
    "winner_school": "Oklahoma",
    "loser": "Ron McIntyre",
    "loser_school": "Lock Haven",
    "result": "Dec 10-8"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "Armand Taylor",
    "loser_school": "Virginia Tech",
    "result": "Fall 3:05"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "John Pepe",
    "winner_school": "Penn State",
    "loser": "Don Hart",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Joe Gratto",
    "winner_school": "Lehigh",
    "loser": "Stan Wintermote",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 76,
    "winner": "Wilbur Derby",
    "winner_school": "Colorado",
    "loser": "Ralph Hutchinson",
    "loser_school": "Lafayette",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Roland Alexander",
    "winner_school": "Kansas State",
    "loser": "Bob Bormuth",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "S.P. Jones",
    "loser_school": "VMI",
    "result": "Fall 2:36"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Bob DeFelice",
    "winner_school": "Ohio State",
    "loser": "Forbes Anderson",
    "loser_school": "San Diego State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Don Studebaker",
    "winner_school": "Oklahoma",
    "loser": "Jack Anderson",
    "loser_school": "Minnesota State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "Lloyd Corwin",
    "winner_school": "Cornell Iowa",
    "loser": "Dick Gunner",
    "loser_school": "Michigan State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Claudell Wright",
    "winner_school": "Oklahoma State",
    "loser": "Hansley",
    "loser_school": "Texas A & M",
    "result": "Fall 1:35"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 89,
    "winner": "John Sforzo",
    "winner_school": "Ohio",
    "loser": "Gary Mayer",
    "loser_school": "Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Wilbur Derby",
    "winner_school": "Colorado",
    "loser": "Marvin Vandevender",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Roland Alexander",
    "winner_school": "Kansas State",
    "loser": "Dale Ketelsen",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Bob Richardson",
    "loser_school": "Pittsburgh",
    "result": "Fall 7:56"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "Bob DeFelice",
    "loser_school": "Ohio State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Paul Weinhold",
    "winner_school": "Colorado State",
    "loser": "Don Studebaker",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Lloyd Corwin",
    "winner_school": "Cornell Iowa",
    "loser": "Lawrence Marr",
    "loser_school": "Navy",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Claudell Wright",
    "winner_school": "Oklahoma State",
    "loser": "Paul Tapis",
    "loser_school": "New Mexico",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Dave Adams",
    "winner_school": "Penn State",
    "loser": "John Sforzo",
    "loser_school": "Ohio",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Wilbur Derby",
    "winner_school": "Colorado",
    "loser": "Roland Alexander",
    "loser_school": "Kansas State",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Dick Heaton",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:29"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Paul Weinhold",
    "winner_school": "Colorado State",
    "loser": "Lloyd Corwin",
    "loser_school": "Cornell Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Dave Adams",
    "winner_school": "Penn State",
    "loser": "Claudell Wright",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Wilbur Derby",
    "loser_school": "Colorado",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Dave Adams",
    "winner_school": "Penn State",
    "loser": "Paul Weinhold",
    "loser_school": "Colorado State",
    "result": "Fall 5:30"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "Paul Weinhold",
    "loser_school": "Colorado State",
    "result": "Dec 9-4"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Dave Adams",
    "loser_school": "Penn State",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 269,
    "winner": "S.P. Jones",
    "winner_school": "VMI",
    "loser": "Bob Richardson",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "S.P. Jones",
    "loser_school": "VMI",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "John Sforzo",
    "winner_school": "Ohio",
    "loser": "Claudell Wright",
    "loser_school": "Oklahoma State",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Dick Heaton",
    "winner_school": "Northern Iowa",
    "loser": "Wilbur Derby",
    "loser_school": "Colorado",
    "result": "Fall 5:01"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Paul Weinhold",
    "winner_school": "Colorado State",
    "loser": "John Sforzo",
    "loser_school": "Ohio",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "LaRue Dillon",
    "loser_school": "Lafayette",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Bob Formanek",
    "winner_school": "Iowa State",
    "loser": "Joe Humphreys",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "Andy Castigliojne",
    "loser_school": "San Diego State",
    "result": "Fall 8:05"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "James Bose",
    "winner_school": "Indiana",
    "loser": "Ron Teuber",
    "loser_school": "Colorado",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "John Winder",
    "winner_school": "Iowa",
    "loser": "Dave Johnson",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Jerry Bross",
    "winner_school": "Oklahoma",
    "loser": "Drayton Praed",
    "loser_school": "Purdue",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Steve Rudo",
    "loser_school": "Ohio",
    "result": "Fall 4:40"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Ron Ericson",
    "winner_school": "Colorado State",
    "loser": "Dale Blume",
    "loser_school": "Kansas State",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Bob Formanek",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "James Bose",
    "loser_school": "Indiana",
    "result": "Fall 4:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Jerry Bross",
    "winner_school": "Oklahoma",
    "loser": "John Winder",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Ron Ericson",
    "loser_school": "Colorado State",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Mike Rodriguez",
    "loser_school": "Michigan",
    "result": "DEF"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Jerry Bross",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Jerry Bross",
    "winner_school": "Oklahoma",
    "loser": "LaRue Dillon",
    "loser_school": "Lafayette",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Doug Blubaugh",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "LaRue Dillon",
    "winner_school": "Lafayette",
    "loser": "Bob Formanek",
    "loser_school": "Iowa State",
    "result": "FOR"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Ron Ericson",
    "winner_school": "Colorado State",
    "loser": "Steve Rudo",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "LaRue Dillon",
    "winner_school": "Lafayette",
    "loser": "Mike Rodriguez",
    "loser_school": "Michigan",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Jerry Bross",
    "winner_school": "Oklahoma",
    "loser": "Ron Ericson",
    "loser_school": "Colorado State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Jim Ellis",
    "winner_school": "Indiana",
    "loser": "Frank Powell",
    "loser_school": "Iowa State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Jack Gaskill",
    "winner_school": "Colorado State",
    "loser": "Bill White",
    "loser_school": "Syracuse",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Jack Marchello",
    "winner_school": "Michigan",
    "loser": "Art Tranakos",
    "loser_school": "University of the South",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "John Anderson",
    "loser_school": "Cornell Iowa",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Jim Ellis",
    "winner_school": "Indiana",
    "loser": "John Wright",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "Ken Salyer",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Jesse Stokes",
    "winner_school": "Wyoming",
    "loser": "Richard Lee",
    "loser_school": "SUNY-Cortland",
    "result": "Fall 7:44"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Harlan Jenkinson",
    "winner_school": "Iowa",
    "loser": "Ohil Skattum",
    "loser_school": "Luther",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Rex Edgar",
    "winner_school": "Oklahoma",
    "loser": "Peter Damone",
    "loser_school": "Hofstra",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Jack Marchello",
    "winner_school": "Michigan",
    "loser": "Jack Gaskill",
    "loser_school": "Colorado State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "Jim Ellis",
    "loser_school": "Indiana",
    "result": "Dec 9-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "Jesse Stokes",
    "loser_school": "Wyoming",
    "result": "MD 13-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Harlan Jenkinson",
    "winner_school": "Iowa",
    "loser": "Rex Edgar",
    "loser_school": "Oklahoma",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "Jack Marchello",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "Harlan Jenkinson",
    "loser_school": "Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Harlan Jenkinson",
    "winner_school": "Iowa",
    "loser": "Jim Ellis",
    "loser_school": "Indiana",
    "result": "Dec 5-0"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "Fred Davis",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Jim Ellis",
    "winner_school": "Indiana",
    "loser": "John Anderson",
    "loser_school": "Cornell Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Ken Salyer",
    "winner_school": "Northern Iowa",
    "loser": "Jesse Stokes",
    "loser_school": "Wyoming",
    "result": "Fall 3:41"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Jim Ellis",
    "winner_school": "Indiana",
    "loser": "Jack Marchello",
    "loser_school": "Michigan",
    "result": "Dec 7-0"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Harlan Jenkinson",
    "winner_school": "Iowa",
    "loser": "Ken Salyer",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Ron Flemming",
    "winner_school": "Franklin and Marshall",
    "loser": "Harold Brownstein",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Dick Bonacci",
    "winner_school": "Toledo",
    "loser": "Dick Formanek",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Gene Frank",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Jerry Onan",
    "loser_school": "Cornell Iowa",
    "result": "Fall 1:15"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Ron Flemming",
    "winner_school": "Franklin and Marshall",
    "loser": "Ken Jones",
    "loser_school": "Texas A & M",
    "result": "Fall 2:31"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Gilbert Masec",
    "winner_school": "Purdue",
    "loser": "Ralph Staley",
    "loser_school": "Lewis & Clark",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State",
    "loser": "Edward Zabrycki",
    "loser_school": "Navy",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Gary Haller",
    "winner_school": "Kansas State",
    "loser": "Joe Krufka",
    "loser_school": "Penn State",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Bill Smoot",
    "winner_school": "Oklahoma State",
    "loser": "Dan Huff",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Dick Bonacci",
    "loser_school": "Toledo",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Ron Flemming",
    "loser_school": "Franklin and Marshall",
    "result": "Fall 4:05"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State",
    "loser": "Gilbert Masec",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Bill Smoot",
    "winner_school": "Oklahoma State",
    "loser": "Gary Haller",
    "loser_school": "Kansas State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Gary Kurdelmeier",
    "loser_school": "Iowa",
    "result": "Fall 4:35"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Roy Minter",
    "winner_school": "Minnesota State",
    "loser": "Bill Smoot",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Edward Zabrycki",
    "loser_school": "Navy",
    "result": "Dec 6-1"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Roy Minter",
    "loser_school": "Minnesota State",
    "result": "Fall 1:37"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Ron Flemming",
    "winner_school": "Franklin and Marshall",
    "loser": "Jerry Onan",
    "loser_school": "Cornell Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Edward Zabrycki",
    "winner_school": "Navy",
    "loser": "Gilbert Masec",
    "loser_school": "Purdue",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Gary Kurdelmeier",
    "winner_school": "Iowa",
    "loser": "Ron Flemming",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Edward Zabrycki",
    "winner_school": "Navy",
    "loser": "Bill Smoot",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Dave Gallaher",
    "winner_school": "Lehigh",
    "loser": "Paul Steingruby",
    "loser_school": "SIU-Carbondale",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Ahmet Senol",
    "winner_school": "Purdue",
    "loser": "Mike Clock",
    "loser_school": "Lewis & Clark",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Don Jensen",
    "winner_school": "Iowa State",
    "loser": "John Watson",
    "loser_school": "Texas A & M",
    "result": "Fall 2:52"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Ken Leuer",
    "winner_school": "Iowa",
    "loser": "Bob Marshall",
    "loser_school": "Colorado State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Elwood Reese",
    "winner_school": "Lock Haven",
    "loser": "Don Cassidy",
    "loser_school": "Grinnell",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "Jim Gregson",
    "winner_school": "Oklahoma State",
    "loser": "Ken Maidlow",
    "loser_school": "Michigan State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Ron Schirf",
    "winner_school": "Pittsburgh",
    "loser": "Jim Coln",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Ahmet Senol",
    "winner_school": "Purdue",
    "loser": "Dave Gallaher",
    "loser_school": "Lehigh",
    "result": "Dec 10-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Ken Leuer",
    "winner_school": "Iowa",
    "loser": "Don Jensen",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Jim Gregson",
    "winner_school": "Oklahoma State",
    "loser": "Elwood Reese",
    "loser_school": "Lock Haven",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Ron Schirf",
    "winner_school": "Pittsburgh",
    "loser": "Richard Anthony",
    "loser_school": "Indiana",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Ken Leuer",
    "winner_school": "Iowa",
    "loser": "Ahmet Senol",
    "loser_school": "Purdue",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Jim Gregson",
    "winner_school": "Oklahoma State",
    "loser": "Ron Schirf",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Ron Schirf",
    "winner_school": "Pittsburgh",
    "loser": "Ahmet Senol",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Ken Leuer",
    "winner_school": "Iowa",
    "loser": "Jim Gregson",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Don Jensen",
    "winner_school": "Iowa State",
    "loser": "Bob Marshall",
    "loser_school": "Colorado State",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Ken Maidlow",
    "winner_school": "Michigan State",
    "loser": "Elwood Reese",
    "loser_school": "Lock Haven",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Ahmet Senol",
    "winner_school": "Purdue",
    "loser": "Don Jensen",
    "loser_school": "Iowa State",
    "result": "MD 10-0"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Ron Schirf",
    "winner_school": "Pittsburgh",
    "loser": "Ken Maidlow",
    "loser_school": "Michigan State",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Barron Bremner",
    "loser_school": "Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Mike Sandusky",
    "winner_school": "Maryland",
    "loser": "Dan Wisniewski",
    "loser_school": "Pittsburgh",
    "result": "Fall 7:46"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Don Durham",
    "winner_school": "Coast Guard",
    "loser": "Ed Hayes",
    "loser_school": "SIU-Carbondale",
    "result": "Fall 8:56"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Denny Krick",
    "winner_school": "Indiana",
    "loser": "Don Sayenga",
    "loser_school": "Lafayette",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Bill Oberly",
    "loser_school": "Penn State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Bob Konovsky",
    "winner_school": "Wisconsin",
    "loser": "Mel Walden",
    "loser_school": "Iowa State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Les Nader",
    "winner_school": "Kent State",
    "loser": "Richard Lasse",
    "loser_school": "Syracuse",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Jerry Budzik",
    "winner_school": "Oklahoma State",
    "loser": "George Meyers",
    "loser_school": "Oregon State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Willis Holland",
    "winner_school": "Colorado State",
    "loser": "Carlton Hazelwood",
    "loser_school": "Texas A & M",
    "result": "Fall 1:57"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Mike Sandusky",
    "winner_school": "Maryland",
    "loser": "Don Durham",
    "loser_school": "Coast Guard",
    "result": "Fall 0:52"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Denny Krick",
    "loser_school": "Indiana",
    "result": "Dec 14-11"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Bob Konovsky",
    "winner_school": "Wisconsin",
    "loser": "Les Nader",
    "loser_school": "Kent State",
    "result": "Fall 8:31"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Willis Holland",
    "winner_school": "Colorado State",
    "loser": "Jerry Budzik",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Mike Sandusky",
    "loser_school": "Maryland",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Bob Konovsky",
    "winner_school": "Wisconsin",
    "loser": "Willis Holland",
    "loser_school": "Colorado State",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Willis Holland",
    "loser_school": "Colorado State",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Gordon Roesler",
    "winner_school": "Oklahoma",
    "loser": "Bob Konovsky",
    "loser_school": "Wisconsin",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 279,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Barron Bremner",
    "loser_school": "Iowa",
    "result": "Fall 1:51"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Denny Krick",
    "loser_school": "Indiana",
    "result": "Dec 8-2"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Les Nader",
    "winner_school": "Kent State",
    "loser": "Mel Walden",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Mike Sandusky",
    "loser_school": "Maryland",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Willis Holland",
    "winner_school": "Colorado State",
    "loser": "Les Nader",
    "loser_school": "Kent State",
    "result": "Dec 7-0"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
