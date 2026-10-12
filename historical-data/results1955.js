// 1955 NCAA Division I Wrestling Championships (At Cornell). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1955 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1955-provenance.js
const resultData = [
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Junior Corr",
    "winner_school": "Oklahoma",
    "loser": "Gary McClain",
    "loser_school": "Oregon State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Robert Perry",
    "winner_school": "West Virginia",
    "loser": "Don Clark",
    "loser_school": "Syracuse",
    "result": "Fall 7:48"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Wade Cummings",
    "winner_school": "SUNY-Cortland",
    "loser": "John McHugh",
    "loser_school": "Maryland",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Art McCall",
    "loser_school": "Temple",
    "result": "Fall 1:27"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Bill Hulings",
    "winner_school": "Pittsburgh",
    "loser": "Robert Morgan",
    "loser_school": "Wilkes",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Gerry Yoder",
    "winner_school": "Franklin and Marshall",
    "loser": "Jack Love",
    "loser_school": "Kent State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Edward Amerantes",
    "winner_school": "Springfield",
    "loser": "Monsour Karin",
    "loser_school": "South Dakota State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Robert Perry",
    "winner_school": "West Virginia",
    "loser": "Junior Corr",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Wade Cummings",
    "loser_school": "SUNY-Cortland",
    "result": "Fall 1:46"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Bill Hulings",
    "winner_school": "Pittsburgh",
    "loser": "Gerry Yoder",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Dave Bowlin",
    "winner_school": "Oklahoma State",
    "loser": "Edward Amerantes",
    "loser_school": "Springfield",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Robert Perry",
    "loser_school": "West Virginia",
    "result": "MD 8-0"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Dave Bowlin",
    "winner_school": "Oklahoma State",
    "loser": "Bill Hulings",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-1"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Edward Amerantes",
    "winner_school": "Springfield",
    "loser": "Robert Perry",
    "loser_school": "West Virginia",
    "result": "WIN-NP"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Terry McCann",
    "winner_school": "Iowa",
    "loser": "Dave Bowlin",
    "loser_school": "Oklahoma State",
    "result": "Fall 7:06"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Art McCall",
    "winner_school": "Temple",
    "loser": "Wade Cummings",
    "loser_school": "SUNY-Cortland",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Robert Perry",
    "winner_school": "West Virginia",
    "loser": "Art McCall",
    "loser_school": "Temple",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Edward Amerantes",
    "winner_school": "Springfield",
    "loser": "Bill Hulings",
    "loser_school": "Pittsburgh",
    "result": "M FOR"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 28,
    "winner": "Dick Gappen",
    "winner_school": "Knox",
    "loser": "Gordon Brockmueller",
    "loser_school": "South Dakota State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 30,
    "winner": "Lewis Guidi",
    "winner_school": "West Virginia",
    "loser": "Ed Dawkins",
    "loser_school": "Ursinus",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 32,
    "winner": "Sam Carlo",
    "winner_school": "SUNY-Cortland",
    "loser": "Robert Royce",
    "loser_school": "Wyoming",
    "result": "Fall 1:20"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Dick Govig",
    "winner_school": "Iowa",
    "loser": "Donald Stubblebine",
    "loser_school": "Springfield",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "Ed Corr",
    "winner_school": "Oklahoma",
    "loser": "Tom Musser",
    "loser_school": "Lock Haven",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 37,
    "winner": "Robert DeGroff",
    "winner_school": "Hofstra",
    "loser": "Mel Lehman",
    "loser_school": "Oregon State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 39,
    "winner": "Dick Gibson",
    "winner_school": "Washington State",
    "loser": "Vernon Whitney",
    "loser_school": "Purdue",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 41,
    "winner": "Harmon Leslie",
    "winner_school": "Oklahoma State",
    "loser": "Kent Townley",
    "loser_school": "Iowa State",
    "result": "Dec 14-13"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Gene D'Alessandro",
    "winner_school": "Rutgers",
    "loser": "Dick Gappen",
    "loser_school": "Knox",
    "result": "Fall 6:40"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Lewis Guidi",
    "winner_school": "West Virginia",
    "loser": "Daniel Deppe",
    "loser_school": "Michigan",
    "result": "Fall 7:09"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Sam Carlo",
    "winner_school": "SUNY-Cortland",
    "loser": "Sid Nodland",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Dick Govig",
    "winner_school": "Iowa",
    "loser": "Bill Jemison",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Richard Meeks",
    "winner_school": "Illinois",
    "loser": "Ed Corr",
    "loser_school": "Oklahoma",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Robert DeGroff",
    "loser_school": "Hofstra",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Robert Gunner",
    "winner_school": "Michigan State",
    "loser": "Dick Gibson",
    "loser_school": "Washington State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Harmon Leslie",
    "winner_school": "Oklahoma State",
    "loser": "Tom Deppe",
    "loser_school": "Lehigh",
    "result": "Fall 7:40"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Lewis Guidi",
    "winner_school": "West Virginia",
    "loser": "Gene D'Alessandro",
    "loser_school": "Rutgers",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Sam Carlo",
    "winner_school": "SUNY-Cortland",
    "loser": "Dick Govig",
    "loser_school": "Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Richard Meeks",
    "loser_school": "Illinois",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Robert Gunner",
    "winner_school": "Michigan State",
    "loser": "Harmon Leslie",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-4"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Lewis Guidi",
    "winner_school": "West Virginia",
    "loser": "Sam Carlo",
    "loser_school": "SUNY-Cortland",
    "result": "Dec 12-11"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Robert Gunner",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Richard Meeks",
    "winner_school": "Illinois",
    "loser": "Daniel Deppe",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Ed Peery",
    "winner_school": "Pittsburgh",
    "loser": "Lewis Guidi",
    "loser_school": "West Virginia",
    "result": "Fall 8:30"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 263,
    "winner": "Daniel Deppe",
    "winner_school": "Michigan",
    "loser": "Ed Dawkins",
    "loser_school": "Ursinus",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Daniel Deppe",
    "winner_school": "Michigan",
    "loser": "Gene D'Alessandro",
    "loser_school": "Rutgers",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Richard Meeks",
    "winner_school": "Illinois",
    "loser": "Robert DeGroff",
    "loser_school": "Hofstra",
    "result": "Fall 3:47"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Daniel Deppe",
    "winner_school": "Michigan",
    "loser": "Sam Carlo",
    "loser_school": "SUNY-Cortland",
    "result": "MD 13-2"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Richard Meeks",
    "winner_school": "Illinois",
    "loser": "Robert Gunner",
    "loser_school": "Michigan State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "Don Hall",
    "winner_school": "Iowa State",
    "loser": "Bob Theriault",
    "loser_school": "Yale",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Jim Janes",
    "winner_school": "Knox",
    "loser": "George Mills",
    "loser_school": "Hofstra",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Max Pearson",
    "winner_school": "Michigan",
    "loser": "Roy Fowley",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 55,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "Rex Boda",
    "loser_school": "Cornell",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Mark Murray",
    "winner_school": "Cornell Iowa",
    "loser": "Bob Homan",
    "loser_school": "Penn State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Ron Day",
    "winner_school": "Colorado State",
    "loser": "Don Hall",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Tom Nevits",
    "winner_school": "Ohio",
    "loser": "Deane Oliver",
    "loser_school": "Rutgers",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Jim Janes",
    "loser_school": "Knox",
    "result": "Fall 4:15"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Max Pearson",
    "winner_school": "Michigan",
    "loser": "Cletus Blegen",
    "loser_school": "Minnesota State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Linn Long",
    "winner_school": "Colorado",
    "loser": "Charles Goldthorp",
    "loser_school": "Lock Haven",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "Rich Padula",
    "loser_school": "Ursinus",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "John Ontiveros",
    "winner_school": "Illinois",
    "loser": "Hugh Cowan",
    "loser_school": "North Carolina",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Ron Day",
    "winner_school": "Colorado State",
    "loser": "Mark Murray",
    "loser_school": "Cornell Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Tom Nevits",
    "loser_school": "Ohio",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Linn Long",
    "winner_school": "Colorado",
    "loser": "Max Pearson",
    "loser_school": "Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "John Ontiveros",
    "loser_school": "Illinois",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Ron Day",
    "loser_school": "Colorado State",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Bobby Lyons",
    "winner_school": "Oklahoma",
    "loser": "Linn Long",
    "loser_school": "Colorado",
    "result": "Dec UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Linn Long",
    "winner_school": "Colorado",
    "loser": "Ron Day",
    "loser_school": "Colorado State",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Myron Roderick",
    "winner_school": "Oklahoma State",
    "loser": "Bobby Lyons",
    "loser_school": "Oklahoma",
    "result": "MD 13-2"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 266,
    "winner": "Rex Boda",
    "winner_school": "Cornell",
    "loser": "Rich Padula",
    "loser_school": "Ursinus",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Jim Janes",
    "winner_school": "Knox",
    "loser": "Tom Nevits",
    "loser_school": "Ohio",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "John Ontiveros",
    "winner_school": "Illinois",
    "loser": "Rex Boda",
    "loser_school": "Cornell",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Ron Day",
    "winner_school": "Colorado State",
    "loser": "Jim Janes",
    "loser_school": "Knox",
    "result": "Dec 6-2"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Linn Long",
    "winner_school": "Colorado",
    "loser": "John Ontiveros",
    "loser_school": "Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Larry Fornicola",
    "winner_school": "Penn State",
    "loser": "Jim Sinadinos",
    "loser_school": "Michigan State",
    "result": "Fall 4:40"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "Art Keith",
    "winner_school": "Oregon State",
    "loser": "Phil Burnaman",
    "loser_school": "Harvard",
    "result": "Fall 8:38"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Dave Bates",
    "winner_school": "Lehigh",
    "loser": "Ron McIntyre",
    "loser_school": "Lock Haven",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Don Hart",
    "winner_school": "Oklahoma",
    "loser": "Charles Gratto",
    "loser_school": "Cornell",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Andrew Kaul",
    "winner_school": "Michigan",
    "loser": "Darrell Miller",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "William Simmons",
    "winner_school": "Temple",
    "loser": "John Twark",
    "loser_school": "Kent State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Warren DePrenger",
    "winner_school": "Cornell Iowa",
    "loser": "Claudell Wright",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Fred Futchko",
    "winner_school": "Rutgers",
    "loser": "Bill Mellen",
    "loser_school": "Illinois",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Larry Fornicola",
    "winner_school": "Penn State",
    "loser": "Art Keith",
    "loser_school": "Oregon State",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Don Hart",
    "winner_school": "Oklahoma",
    "loser": "Dave Bates",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Andrew Kaul",
    "winner_school": "Michigan",
    "loser": "William Simmons",
    "loser_school": "Temple",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Warren DePrenger",
    "winner_school": "Cornell Iowa",
    "loser": "Fred Futchko",
    "loser_school": "Rutgers",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Larry Fornicola",
    "winner_school": "Penn State",
    "loser": "Don Hart",
    "loser_school": "Oklahoma",
    "result": "Fall 8:30"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Andrew Kaul",
    "winner_school": "Michigan",
    "loser": "Warren DePrenger",
    "loser_school": "Cornell Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "William Simmons",
    "loser_school": "Temple",
    "result": "Dec 6-1"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Larry Fornicola",
    "winner_school": "Penn State",
    "loser": "Andrew Kaul",
    "loser_school": "Michigan",
    "result": "Dec 6-0"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "Art Keith",
    "loser_school": "Oregon State",
    "result": "Dec 7-5"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "William Simmons",
    "winner_school": "Temple",
    "loser": "Darrell Miller",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Jim Sinadinos",
    "winner_school": "Michigan State",
    "loser": "Don Hart",
    "loser_school": "Oklahoma",
    "result": "Fall 3:59"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "William Simmons",
    "winner_school": "Temple",
    "loser": "Warren DePrenger",
    "loser_school": "Cornell Iowa",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "John O'Neil",
    "loser_school": "Wheaton",
    "result": "Fall 5:26"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Roger Judd",
    "loser_school": "Cornell",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Stan Wintermote",
    "winner_school": "Wyoming",
    "loser": "Dave Adams",
    "loser_school": "Penn State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "George Mulligan",
    "winner_school": "Rutgers",
    "loser": "Don Haney",
    "loser_school": "Michigan",
    "result": "Dec UTB"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "Bob Cook",
    "winner_school": "Pittsburgh",
    "loser": "Ray Farris",
    "loser_school": "Kings Point",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Don Bills",
    "loser_school": "Ithaca",
    "result": "Fall 6:42"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Roland Alexander",
    "loser_school": "Kansas State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Lloyd Corwin",
    "winner_school": "Cornell Iowa",
    "loser": "Ed Jackson",
    "loser_school": "Illinois",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Lee Young",
    "winner_school": "Oklahoma",
    "loser": "Ralph Hutchinson",
    "loser_school": "Lafayette",
    "result": "Fall 5:34"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Bud Weick",
    "winner_school": "Purdue",
    "loser": "Richard Simmons",
    "loser_school": "Temple",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "George Mulligan",
    "winner_school": "Rutgers",
    "loser": "Stan Wintermote",
    "loser_school": "Wyoming",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Bob Cook",
    "loser_school": "Pittsburgh",
    "result": "Fall 2:39"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Lloyd Corwin",
    "winner_school": "Cornell Iowa",
    "loser": "Doug Blubaugh",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Bud Weick",
    "winner_school": "Purdue",
    "loser": "Lee Young",
    "loser_school": "Oklahoma",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "George Mulligan",
    "loser_school": "Rutgers",
    "result": "Dec 10-5"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Lloyd Corwin",
    "winner_school": "Cornell Iowa",
    "loser": "Bud Weick",
    "loser_school": "Purdue",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "George Mulligan",
    "loser_school": "Rutgers",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Eddie Eichelberger",
    "winner_school": "Lehigh",
    "loser": "Lloyd Corwin",
    "loser_school": "Cornell Iowa",
    "result": "Fall 6:43"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 269,
    "winner": "John O'Neil",
    "winner_school": "Wheaton",
    "loser": "Don Bills",
    "loser_school": "Ithaca",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "John O'Neil",
    "winner_school": "Wheaton",
    "loser": "Bob Cook",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Ed Jackson",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "George Mulligan",
    "winner_school": "Rutgers",
    "loser": "John O'Neil",
    "loser_school": "Wheaton",
    "result": "Fall 5:24"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Doug Blubaugh",
    "winner_school": "Oklahoma State",
    "loser": "Bud Weick",
    "loser_school": "Purdue",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 92,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "Jerry Schroeder",
    "loser_school": "Minnesota State",
    "result": "Fall 3:33"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 93,
    "winner": "Dale Ward",
    "winner_school": "Army",
    "loser": "George McGee",
    "loser_school": "North Carolina",
    "result": "Fall 8:17"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "John Winder",
    "winner_school": "Iowa",
    "loser": "Don Chatwick",
    "loser_school": "Baldwin Wallace",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 95,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Norman Balot",
    "loser_school": "CCNY",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "Vincent Kelly",
    "winner_school": "Loyola MD",
    "loser": "Ned Tudi",
    "loser_school": "Cornell",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "Delbert Lockwood",
    "winner_school": "Colorado State",
    "loser": "Don Dykhoff",
    "loser_school": "South Dakota State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 98,
    "winner": "Roger Taylor",
    "winner_school": "Lehigh",
    "loser": "Bill Fisher",
    "loser_school": "Millersville",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 99,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "Jerry Bross",
    "loser_school": "Oklahoma",
    "result": "Fall 2:40"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Luther Seeber",
    "winner_school": "Wisconsin",
    "loser": "Harry Scott",
    "loser_school": "Columbia",
    "result": "Fall 5:45"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "Bill Bock",
    "winner_school": "Springfield",
    "loser": "Sam Downey",
    "loser_school": "Auburn",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 102,
    "winner": "Bill Smoot",
    "winner_school": "Oklahoma State",
    "loser": "Dick Lennox",
    "loser_school": "Michigan State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "Bob Bormuth",
    "winner_school": "Wyoming",
    "loser": "Gerry Chadwick",
    "loser_school": "Duke",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 104,
    "winner": "Peter Damone",
    "winner_school": "Hofstra",
    "loser": "Frank Kastor",
    "loser_school": "Illinois",
    "result": "Fall 4:34"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 105,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "Neal Lesher",
    "loser_school": "Rutgers",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "Joe Humphreys",
    "loser_school": "Penn State",
    "result": "Fall 8:25"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "John Winder",
    "winner_school": "Iowa",
    "loser": "Dale Ward",
    "loser_school": "Army",
    "result": "Fall 5:47"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Vincent Kelly",
    "loser_school": "Loyola MD",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Delbert Lockwood",
    "winner_school": "Colorado State",
    "loser": "Roger Taylor",
    "loser_school": "Lehigh",
    "result": "Fall 4:43"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "Luther Seeber",
    "loser_school": "Wisconsin",
    "result": "Fall 1:06"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Bill Smoot",
    "winner_school": "Oklahoma State",
    "loser": "Bill Bock",
    "loser_school": "Springfield",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Peter Damone",
    "winner_school": "Hofstra",
    "loser": "Bob Bormuth",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "Ron Teuber",
    "loser_school": "Colorado",
    "result": "Fall 2:34"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "John Winder",
    "loser_school": "Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Delbert Lockwood",
    "loser_school": "Colorado State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "Bill Smoot",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "Peter Damone",
    "loser_school": "Hofstra",
    "result": "Fall 7:00"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Ed DeWitt",
    "loser_school": "Pittsburgh",
    "result": "Dec UTB"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Mike Rodriguez",
    "winner_school": "Michigan",
    "loser": "Ed Rooney",
    "loser_school": "Syracuse",
    "result": "Dec 13-8"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "Ed Rooney",
    "loser_school": "Syracuse",
    "result": "Dec 1-0"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Bill Weick",
    "winner_school": "Northern Iowa",
    "loser": "Mike Rodriguez",
    "loser_school": "Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Vincent Kelly",
    "winner_school": "Loyola MD",
    "loser": "Norman Balot",
    "loser_school": "CCNY",
    "result": "M FOR"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 272,
    "winner": "Ron Teuber",
    "winner_school": "Colorado",
    "loser": "Neal Lesher",
    "loser_school": "Rutgers",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Delbert Lockwood",
    "winner_school": "Colorado State",
    "loser": "Vincent Kelly",
    "loser_school": "Loyola MD",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Ron Teuber",
    "winner_school": "Colorado",
    "loser": "Peter Damone",
    "loser_school": "Hofstra",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Ed DeWitt",
    "winner_school": "Pittsburgh",
    "loser": "Delbert Lockwood",
    "loser_school": "Colorado State",
    "result": "Dec 7-4"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Ed Rooney",
    "winner_school": "Syracuse",
    "loser": "Ron Teuber",
    "loser_school": "Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "John Ellwood",
    "loser_school": "Lock Haven",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Charles Bryant",
    "winner_school": "Nebraska",
    "loser": "Dick Rohrer",
    "loser_school": "Minnesota State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Robert Roper",
    "loser_school": "Northern Colorado",
    "result": "Fall 2:42"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Harlan Jenkinson",
    "winner_school": "Iowa",
    "loser": "Bob Smith",
    "loser_school": "Syracuse",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Jim Sanders",
    "winner_school": "Auburn",
    "loser": "John McMahon",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "Harold Broughton",
    "loser_school": "Colorado State",
    "result": "Fall 7:10"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Henry Goldman",
    "winner_school": "Wyoming",
    "loser": "Bob Reif",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Dick Formanek",
    "winner_school": "Northern Iowa",
    "loser": "Tony Tsocanos",
    "loser_school": "Colgate",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Gerry Tebben",
    "loser_school": "Army",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Charles Bryant",
    "winner_school": "Nebraska",
    "loser": "Dick Whited",
    "loser_school": "Lehigh",
    "result": "Fall 7:22"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Rex Edgar",
    "loser_school": "Oklahoma",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Harlan Jenkinson",
    "winner_school": "Iowa",
    "loser": "Dick Bonacci",
    "loser_school": "Toledo",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Otis Keller",
    "winner_school": "Cornell",
    "loser": "Jim Sanders",
    "loser_school": "Auburn",
    "result": "Fall 2:22"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "Bernard Schwab",
    "loser_school": "Virginia",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "Henry Goldman",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Del McGhee",
    "winner_school": "Washington State",
    "loser": "Dick Formanek",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Charles Bryant",
    "loser_school": "Nebraska",
    "result": "Fall 6:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Harlan Jenkinson",
    "loser_school": "Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "Otis Keller",
    "loser_school": "Cornell",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "Del McGhee",
    "loser_school": "Washington State",
    "result": "Dec 14-8"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Larry TenPas",
    "winner_school": "Illinois",
    "loser": "Joe Solomon",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-1"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "Joe Gattuso",
    "loser_school": "Navy",
    "result": "Dec 9-7"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "Joe Solomon",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Fred Davis",
    "winner_school": "Oklahoma State",
    "loser": "Larry TenPas",
    "loser_school": "Illinois",
    "result": "Dec 9-2"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 273,
    "winner": "Gerry Tebben",
    "winner_school": "Army",
    "loser": "John Ellwood",
    "loser_school": "Lock Haven",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Gerry Tebben",
    "winner_school": "Army",
    "loser": "Charles Bryant",
    "loser_school": "Nebraska",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Del McGhee",
    "winner_school": "Washington State",
    "loser": "Henry Goldman",
    "loser_school": "Wyoming",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Joe Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Gerry Tebben",
    "loser_school": "Army",
    "result": "Dec UTB"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Joe Gattuso",
    "winner_school": "Navy",
    "loser": "Del McGhee",
    "loser_school": "Washington State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Don Wem",
    "winner_school": "Toledo",
    "loser": "Jerry Budzik",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Ray Carlson",
    "winner_school": "Waynesburg",
    "loser": "Bob Lynch",
    "loser_school": "Cornell",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Ed Mathews",
    "loser_school": "Wisconsin",
    "result": "Fall 2:45"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Frank Rosenmayr",
    "winner_school": "Colorado",
    "loser": "Don Kincaid",
    "loser_school": "Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Joe Krufka",
    "winner_school": "Penn State",
    "loser": "Fred Braun",
    "loser_school": "Lafayette",
    "result": "Fall 4:14"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Don Wem",
    "winner_school": "Toledo",
    "loser": "Frank Craze",
    "loser_school": "West Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Ray Carlson",
    "loser_school": "Waynesburg",
    "result": "Fall 1:05"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Frank Rosenmayr",
    "winner_school": "Colorado",
    "loser": "Ron Flemming",
    "loser_school": "Franklin and Marshall",
    "result": "Dec UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Joe Krufka",
    "winner_school": "Penn State",
    "loser": "Dick Francis",
    "loser_school": "San Jose State",
    "result": "Dec 7-6"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Don Wem",
    "loser_school": "Toledo",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Joe Krufka",
    "winner_school": "Penn State",
    "loser": "Frank Rosenmayr",
    "loser_school": "Colorado",
    "result": "Dec 9-6"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Frank Rosenmayr",
    "winner_school": "Colorado",
    "loser": "Don Wem",
    "loser_school": "Toledo",
    "result": "M FOR"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Dan Hodge",
    "winner_school": "Oklahoma",
    "loser": "Joe Krufka",
    "loser_school": "Penn State",
    "result": "Fall 4:23"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Ray Carlson",
    "winner_school": "Waynesburg",
    "loser": "Ed Mathews",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Dick Francis",
    "winner_school": "San Jose State",
    "loser": "Fred Braun",
    "loser_school": "Lafayette",
    "result": "MD 11-2"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Don Wem",
    "winner_school": "Toledo",
    "loser": "Ray Carlson",
    "loser_school": "Waynesburg",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Frank Rosenmayr",
    "winner_school": "Colorado",
    "loser": "Dick Francis",
    "loser_school": "San Jose State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Ken Culbert",
    "winner_school": "Harvard",
    "loser": "Elwood Reese",
    "loser_school": "Lock Haven",
    "result": "Fall 2:21"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Peter Blair",
    "winner_school": "Navy",
    "loser": "Abe Cohen",
    "loser_school": "Chattanooga",
    "result": "Fall 5:24"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Ken Leuer",
    "winner_school": "Iowa",
    "loser": "Dave Gallaher",
    "loser_school": "Lehigh",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Jim Macaleer",
    "winner_school": "Princeton",
    "loser": "Ben Egerton",
    "loser_school": "Cornell",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Richard Anthony",
    "winner_school": "Indiana",
    "loser": "Ken Culbert",
    "loser_school": "Harvard",
    "result": "MD 9-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Peter Blair",
    "winner_school": "Navy",
    "loser": "Jim Coln",
    "loser_school": "Oklahoma",
    "result": "Fall 7:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "Ken Leuer",
    "winner_school": "Iowa",
    "loser": "Ron Schirf",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Gus Gatto",
    "winner_school": "Northern Iowa",
    "loser": "Jim Macaleer",
    "loser_school": "Princeton",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Peter Blair",
    "winner_school": "Navy",
    "loser": "Richard Anthony",
    "loser_school": "Indiana",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Ken Leuer",
    "winner_school": "Iowa",
    "loser": "Gus Gatto",
    "loser_school": "Northern Iowa",
    "result": "Dec UTB"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Richard Anthony",
    "winner_school": "Indiana",
    "loser": "Gus Gatto",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Peter Blair",
    "winner_school": "Navy",
    "loser": "Ken Leuer",
    "loser_school": "Iowa",
    "result": "Fall 5:01"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Jim Coln",
    "winner_school": "Oklahoma",
    "loser": "Abe Cohen",
    "loser_school": "Chattanooga",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Dave Gallaher",
    "winner_school": "Lehigh",
    "loser": "Ron Schirf",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Richard Anthony",
    "winner_school": "Indiana",
    "loser": "Jim Coln",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Gus Gatto",
    "winner_school": "Northern Iowa",
    "loser": "Dave Gallaher",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Ken Ellis",
    "winner_school": "Kansas State",
    "loser": "Mike Clock",
    "loser_school": "Lewis & Clark",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Sam Salerno",
    "loser_school": "Colorado",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Bob Konovsky",
    "winner_school": "Wisconsin",
    "loser": "Ken Ellis",
    "loser_school": "Kansas State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Willis Holland",
    "winner_school": "Colorado State",
    "loser": "Don Sayenga",
    "loser_school": "Lafayette",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Werner Seel",
    "winner_school": "Lehigh",
    "loser": "Denny Krick",
    "loser_school": "Indiana",
    "result": "MD 12-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Bob Konovsky",
    "loser_school": "Wisconsin",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Werner Seel",
    "winner_school": "Lehigh",
    "loser": "Willis Holland",
    "loser_school": "Colorado State",
    "result": "Fall 5:23"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Bob Konovsky",
    "winner_school": "Wisconsin",
    "loser": "Willis Holland",
    "loser_school": "Colorado State",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Bill Oberly",
    "winner_school": "Penn State",
    "loser": "Werner Seel",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Bob Konovsky",
    "winner_school": "Wisconsin",
    "loser": "Sam Salerno",
    "loser_school": "Colorado",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Willis Holland",
    "winner_school": "Colorado State",
    "loser": "Denny Krick",
    "loser_school": "Indiana",
    "result": "Dec 10-7"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
