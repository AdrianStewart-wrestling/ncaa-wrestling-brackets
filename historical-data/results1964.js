// 1964 NCAA Division I Wrestling Championships (3/26/1964 to 3/28/1964 at Cornell). Weight classes 115-UNL (10). Consolation: FINALIST REPECHAGE (rounds RepConsA-C).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1964 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1964-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 12,
    "winner": "Chuck Bush",
    "winner_school": "Cornell",
    "loser": "Bob Foster",
    "loser_school": "Yale",
    "result": "Fall 1:46"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 14,
    "winner": "Leonard Killian",
    "winner_school": "Pittsburgh",
    "loser": "Bob Houde",
    "loser_school": "Air Force",
    "result": "FOR"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 16,
    "winner": "Mike McNamara",
    "winner_school": "Minnesota State",
    "loser": "Rich Sofman",
    "loser_school": "Penn",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 18,
    "winner": "Larry Lloyd",
    "winner_school": "Minnesota",
    "loser": "Jim Lockwood",
    "loser_school": "Montana State",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 19,
    "winner": "Jerry Tanner",
    "winner_school": "Oklahoma",
    "loser": "Sal Zarcone",
    "loser_school": "Auburn",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 21,
    "winner": "Tadaaki Hatta",
    "winner_school": "Oklahoma State",
    "loser": "Louis Natale",
    "loser_school": "Ohio",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 23,
    "winner": "Don Brown",
    "winner_school": "Cornell Iowa",
    "loser": "Arlin Severson",
    "loser_school": "Adams State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "115",
    "bout": 25,
    "winner": "Morris Barnhill",
    "winner_school": "Iowa",
    "loser": "John Black",
    "loser_school": "Montana",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 171,
    "winner": "Chuck Bush",
    "winner_school": "Cornell",
    "loser": "Brooks Yeager",
    "loser_school": "Wilkes",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 172,
    "winner": "Mike Berry",
    "winner_school": "Ohio State",
    "loser": "Leonard Killian",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 173,
    "winner": "Roger Sebert",
    "winner_school": "Iowa State",
    "loser": "Mike McNamara",
    "loser_school": "Minnesota State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 174,
    "winner": "Larry Lloyd",
    "winner_school": "Minnesota",
    "loser": "Tom Schleicher",
    "loser_school": "Maryland",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 175,
    "winner": "Jerry Tanner",
    "winner_school": "Oklahoma",
    "loser": "Dave Hollinger",
    "loser_school": "UCLA",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 176,
    "winner": "Ralph Bahna",
    "winner_school": "Michigan",
    "loser": "Tadaaki Hatta",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 177,
    "winner": "Don Brown",
    "winner_school": "Cornell Iowa",
    "loser": "Dave Jackson",
    "loser_school": "Indiana",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "115",
    "bout": 178,
    "winner": "Terry Finn",
    "winner_school": "SIU-Carbondale",
    "loser": "Morris Barnhill",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 341,
    "winner": "Chuck Bush",
    "winner_school": "Cornell",
    "loser": "Mike Berry",
    "loser_school": "Ohio State",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 342,
    "winner": "Roger Sebert",
    "winner_school": "Iowa State",
    "loser": "Larry Lloyd",
    "loser_school": "Minnesota",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 343,
    "winner": "Jerry Tanner",
    "winner_school": "Oklahoma",
    "loser": "Ralph Bahna",
    "loser_school": "Michigan",
    "result": "Fall 6:51"
  },
  {
    "round": "QuarterFinals",
    "weight": "115",
    "bout": 344,
    "winner": "Terry Finn",
    "winner_school": "SIU-Carbondale",
    "loser": "Don Brown",
    "loser_school": "Cornell Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 461,
    "winner": "Roger Sebert",
    "winner_school": "Iowa State",
    "loser": "Chuck Bush",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "115",
    "bout": 462,
    "winner": "Terry Finn",
    "winner_school": "SIU-Carbondale",
    "loser": "Jerry Tanner",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "5thPlace",
    "weight": "115",
    "bout": 531,
    "winner": "Chuck Bush",
    "winner_school": "Cornell",
    "loser": "Morris Barnhill",
    "loser_school": "Iowa",
    "result": "Fall 3:44"
  },
  {
    "round": "3rdPlace",
    "weight": "115",
    "bout": 541,
    "winner": "Jerry Tanner",
    "winner_school": "Oklahoma",
    "loser": "Larry Lloyd",
    "loser_school": "Minnesota",
    "result": "Fall 1:03"
  },
  {
    "round": "Finals",
    "weight": "115",
    "bout": 551,
    "winner": "Terry Finn",
    "winner_school": "SIU-Carbondale",
    "loser": "Roger Sebert",
    "loser_school": "Iowa State",
    "result": "Fall 10:02 SV"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 381,
    "winner": "Larry Lloyd",
    "winner_school": "Minnesota",
    "loser": "Mike McNamara",
    "loser_school": "Minnesota State",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsB",
    "weight": "115",
    "bout": 382,
    "winner": "Morris Barnhill",
    "winner_school": "Iowa",
    "loser": "Don Brown",
    "loser_school": "Cornell Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 421,
    "winner": "Larry Lloyd",
    "winner_school": "Minnesota",
    "loser": "Chuck Bush",
    "loser_school": "Cornell",
    "result": "Dec 7-3"
  },
  {
    "round": "RepConsC",
    "weight": "115",
    "bout": 422,
    "winner": "Jerry Tanner",
    "winner_school": "Oklahoma",
    "loser": "Morris Barnhill",
    "loser_school": "Iowa",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 28,
    "winner": "Dennis Dutsch",
    "winner_school": "Oklahoma State",
    "loser": "Don Rice",
    "loser_school": "Adams State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 29,
    "winner": "Bob Steenlage",
    "winner_school": "Army",
    "loser": "Douglas Drake",
    "loser_school": "RIT",
    "result": "Fall 6:59"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 30,
    "winner": "Bobby Guzzo",
    "winner_school": "East Stroudsburg",
    "loser": "Joe Frank",
    "loser_school": "Iowa State",
    "result": "Fall 8:59"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 32,
    "winner": "Jay Windfelder",
    "winner_school": "Penn State",
    "loser": "Gary Head",
    "loser_school": "Oregon State",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 33,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Warren Crow",
    "loser_school": "Cornell",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 34,
    "winner": "Ralph Trail",
    "winner_school": "Purdue",
    "loser": "Don Bishton",
    "loser_school": "Coast Guard",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 35,
    "winner": "Gary Joseph",
    "winner_school": "Ohio State",
    "loser": "Phil Greek",
    "loser_school": "Georgia Tech",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 36,
    "winner": "Terry Haise",
    "winner_school": "Syracuse",
    "loser": "Dick Farrell",
    "loser_school": "Marquette",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 37,
    "winner": "Howie Gangestad",
    "winner_school": "Minnesota State",
    "loser": "Bobbie Janko",
    "loser_school": "UCLA",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 39,
    "winner": "Don Neff",
    "winner_school": "Northern Colorado",
    "loser": "Tom Heniff",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "123",
    "bout": 41,
    "winner": "Brett Johnston",
    "winner_school": "Oklahoma",
    "loser": "Mac Motokawa",
    "loser_school": "Brigham Young",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 179,
    "winner": "Dennis Dutsch",
    "winner_school": "Oklahoma State",
    "loser": "Dave Kreider",
    "loser_school": "Northwestern",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 180,
    "winner": "Bobby Guzzo",
    "winner_school": "East Stroudsburg",
    "loser": "Bob Steenlage",
    "loser_school": "Army",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 181,
    "winner": "Bill Fuller",
    "winner_school": "Iowa",
    "loser": "Jay Windfelder",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 182,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Ralph Trail",
    "loser_school": "Purdue",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 183,
    "winner": "Terry Haise",
    "winner_school": "Syracuse",
    "loser": "Gary Joseph",
    "loser_school": "Ohio State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 184,
    "winner": "Howie Gangestad",
    "winner_school": "Minnesota State",
    "loser": "Tino Lambros",
    "loser_school": "Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 185,
    "winner": "Don Neff",
    "winner_school": "Northern Colorado",
    "loser": "John MacArthur",
    "loser_school": "Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "123",
    "bout": 186,
    "winner": "Brett Johnston",
    "winner_school": "Oklahoma",
    "loser": "Arnold Saferstein",
    "loser_school": "Miami Ohio",
    "result": "Fall 7:30"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 345,
    "winner": "Dennis Dutsch",
    "winner_school": "Oklahoma State",
    "loser": "Bobby Guzzo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 346,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Bill Fuller",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 347,
    "winner": "Howie Gangestad",
    "winner_school": "Minnesota State",
    "loser": "Terry Haise",
    "loser_school": "Syracuse",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "123",
    "bout": 348,
    "winner": "Don Neff",
    "winner_school": "Northern Colorado",
    "loser": "Brett Johnston",
    "loser_school": "Oklahoma",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 463,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Dennis Dutsch",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "123",
    "bout": 464,
    "winner": "Howie Gangestad",
    "winner_school": "Minnesota State",
    "loser": "Don Neff",
    "loser_school": "Northern Colorado",
    "result": "Dec 9-4"
  },
  {
    "round": "5thPlace",
    "weight": "123",
    "bout": 532,
    "winner": "Dennis Dutsch",
    "winner_school": "Oklahoma State",
    "loser": "Don Neff",
    "loser_school": "Northern Colorado",
    "result": "FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "123",
    "bout": 542,
    "winner": "Bill Fuller",
    "winner_school": "Iowa",
    "loser": "Bobbie Janko",
    "loser_school": "UCLA",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "123",
    "bout": 552,
    "winner": "Fred Powell",
    "winner_school": "Lock Haven",
    "loser": "Howie Gangestad",
    "loser_school": "Minnesota State",
    "result": "MD 13-5"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 263,
    "winner": "Warren Crow",
    "winner_school": "Cornell",
    "loser": "Ralph Trail",
    "loser_school": "Purdue",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsA",
    "weight": "123",
    "bout": 264,
    "winner": "Bobbie Janko",
    "winner_school": "UCLA",
    "loser": "Tino Lambros",
    "loser_school": "Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 383,
    "winner": "Bill Fuller",
    "winner_school": "Iowa",
    "loser": "Warren Crow",
    "loser_school": "Cornell",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "RepConsB",
    "weight": "123",
    "bout": 384,
    "winner": "Bobbie Janko",
    "winner_school": "UCLA",
    "loser": "Terry Haise",
    "loser_school": "Syracuse",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 423,
    "winner": "Bill Fuller",
    "winner_school": "Iowa",
    "loser": "Dennis Dutsch",
    "loser_school": "Oklahoma State",
    "result": "M FOR"
  },
  {
    "round": "RepConsC",
    "weight": "123",
    "bout": 424,
    "winner": "Bobbie Janko",
    "winner_school": "UCLA",
    "loser": "Don Neff",
    "loser_school": "Northern Colorado",
    "result": "FOR"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 44,
    "winner": "Bill Robb",
    "winner_school": "Bloomsburg",
    "loser": "Jim Apple",
    "loser_school": "Georgia Tech",
    "result": "Fall 7:05"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 46,
    "winner": "Bill Meacci",
    "winner_school": "West Virginia",
    "loser": "Jim Teem",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 48,
    "winner": "Jim Hanson",
    "winner_school": "Colorado",
    "loser": "Mike Johnson",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 50,
    "winner": "Don Schneider",
    "winner_school": "SIU-Carbondale",
    "loser": "Ken Droegemueller",
    "loser_school": "Minnesota State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 51,
    "winner": "Bob Robbins",
    "winner_school": "Army",
    "loser": "Larry Harrison",
    "loser_school": "Colorado State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 53,
    "winner": "Mark Piven",
    "winner_school": "Penn State",
    "loser": "Mike Young",
    "loser_school": "Brigham Young",
    "result": "Fall 5:17"
  },
  {
    "round": "ChampR1",
    "weight": "130",
    "bout": 55,
    "winner": "Norm Parker",
    "winner_school": "Iowa",
    "loser": "Sam Gramiccioni",
    "loser_school": "Rutgers",
    "result": "Fall 5:00"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 187,
    "winner": "Bill Robb",
    "winner_school": "Bloomsburg",
    "loser": "Neal Orr",
    "loser_school": "Cornell",
    "result": "Dec 8-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 188,
    "winner": "Ron Jones",
    "winner_school": "Iowa State",
    "loser": "Bill Meacci",
    "loser_school": "West Virginia",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 189,
    "winner": "Jim Hanson",
    "winner_school": "Colorado",
    "loser": "Bob Campbell",
    "loser_school": "Indiana",
    "result": "Fall 8:50"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 190,
    "winner": "Don Schneider",
    "winner_school": "SIU-Carbondale",
    "loser": "Rosalio Garcia",
    "loser_school": "Kansas State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 191,
    "winner": "Bob Robbins",
    "winner_school": "Army",
    "loser": "Karel Blubaugh",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 192,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Mark Piven",
    "loser_school": "Penn State",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 193,
    "winner": "Ted Lansky",
    "winner_school": "Penn",
    "loser": "Norm Parker",
    "loser_school": "Iowa",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "130",
    "bout": 194,
    "winner": "Bill Stuart",
    "winner_school": "Lehigh",
    "loser": "Doug Horning",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 349,
    "winner": "Bill Robb",
    "winner_school": "Bloomsburg",
    "loser": "Ron Jones",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 350,
    "winner": "Jim Hanson",
    "winner_school": "Colorado",
    "loser": "Don Schneider",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 351,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Bob Robbins",
    "loser_school": "Army",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "130",
    "bout": 352,
    "winner": "Ted Lansky",
    "winner_school": "Penn",
    "loser": "Bill Stuart",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 465,
    "winner": "Jim Hanson",
    "winner_school": "Colorado",
    "loser": "Bill Robb",
    "loser_school": "Bloomsburg",
    "result": "Dec 15-10"
  },
  {
    "round": "SemiFinals",
    "weight": "130",
    "bout": 466,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Ted Lansky",
    "loser_school": "Penn",
    "result": "Dec 7-2"
  },
  {
    "round": "5thPlace",
    "weight": "130",
    "bout": 533,
    "winner": "Ted Lansky",
    "winner_school": "Penn",
    "loser": "Bob Campbell",
    "loser_school": "Indiana",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "130",
    "bout": 543,
    "winner": "Mark Piven",
    "winner_school": "Penn State",
    "loser": "Bill Robb",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "130",
    "bout": 553,
    "winner": "Yojiro Uetake",
    "winner_school": "Oklahoma State",
    "loser": "Jim Hanson",
    "loser_school": "Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsA",
    "weight": "130",
    "bout": 265,
    "winner": "Bob Campbell",
    "winner_school": "Indiana",
    "loser": "Mike Johnson",
    "loser_school": "Pittsburgh",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 385,
    "winner": "Bob Campbell",
    "winner_school": "Indiana",
    "loser": "Don Schneider",
    "loser_school": "SIU-Carbondale",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "130",
    "bout": 386,
    "winner": "Mark Piven",
    "winner_school": "Penn State",
    "loser": "Bob Robbins",
    "loser_school": "Army",
    "result": "Dec 4-1"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 425,
    "winner": "Bill Robb",
    "winner_school": "Bloomsburg",
    "loser": "Bob Campbell",
    "loser_school": "Indiana",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsC",
    "weight": "130",
    "bout": 426,
    "winner": "Mark Piven",
    "winner_school": "Penn State",
    "loser": "Ted Lansky",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 60,
    "winner": "Richard Scorese",
    "winner_school": "Bloomsburg",
    "loser": "Bob Trautman",
    "loser_school": "Northern Iowa",
    "result": "Fall 8:42"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 62,
    "winner": "John Thompson",
    "winner_school": "Kansas State",
    "loser": "John Perry",
    "loser_school": "Adams State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 64,
    "winner": "Bob Buzzard",
    "winner_school": "Iowa State",
    "loser": "Alan Siegel",
    "loser_school": "California-Berkeley",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 65,
    "winner": "Tony Russo",
    "winner_school": "Arizona State",
    "loser": "Jerry Torrance",
    "loser_school": "Northwestern",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 66,
    "winner": "Mark Scureman",
    "winner_school": "Army",
    "loser": "John Holder",
    "loser_school": "Duke",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 67,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Dan Fix",
    "loser_school": "Colorado Mines",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 69,
    "winner": "Roy Wilbanks",
    "winner_school": "Colorado State",
    "loser": "Lew Kennedy",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 71,
    "winner": "Jim Rogers",
    "winner_school": "Oklahoma State",
    "loser": "Dan Gray",
    "loser_school": "Toledo",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "137",
    "bout": 73,
    "winner": "Frank O'Korn",
    "winner_school": "Pittsburgh",
    "loser": "Doug Rickard",
    "loser_school": "Northern Colorado",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 195,
    "winner": "Gary Wilcox",
    "winner_school": "Michigan",
    "loser": "Richard Scorese",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 196,
    "winner": "John Thompson",
    "winner_school": "Kansas State",
    "loser": "Wayne Hicks",
    "loser_school": "Navy",
    "result": "Dec 13-11"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 197,
    "winner": "Bob Buzzard",
    "winner_school": "Iowa State",
    "loser": "Ralph Gonshorowski",
    "loser_school": "Moorhead State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 198,
    "winner": "Mark Scureman",
    "winner_school": "Army",
    "loser": "Tony Russo",
    "loser_school": "Arizona State",
    "result": "Fall 7:41"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 199,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Tom Jones",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 200,
    "winner": "Steve Erber",
    "winner_school": "Penn State",
    "loser": "Roy Wilbanks",
    "loser_school": "Colorado State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 201,
    "winner": "Jim Rogers",
    "winner_school": "Oklahoma State",
    "loser": "Jim Murrin",
    "loser_school": "Syracuse",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "137",
    "bout": 202,
    "winner": "Frank O'Korn",
    "winner_school": "Pittsburgh",
    "loser": "Pete Parlett",
    "loser_school": "West Chester",
    "result": "Dec 10-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 353,
    "winner": "Gary Wilcox",
    "winner_school": "Michigan",
    "loser": "John Thompson",
    "loser_school": "Kansas State",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 354,
    "winner": "Bob Buzzard",
    "winner_school": "Iowa State",
    "loser": "Mark Scureman",
    "loser_school": "Army",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 355,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Steve Erber",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "137",
    "bout": 356,
    "winner": "Jim Rogers",
    "winner_school": "Oklahoma State",
    "loser": "Frank O'Korn",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 467,
    "winner": "Gary Wilcox",
    "winner_school": "Michigan",
    "loser": "Bob Buzzard",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "137",
    "bout": 468,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Jim Rogers",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "5thPlace",
    "weight": "137",
    "bout": 534,
    "winner": "Jim Rogers",
    "winner_school": "Oklahoma State",
    "loser": "Richard Scorese",
    "loser_school": "Bloomsburg",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "137",
    "bout": 544,
    "winner": "Dan Fix",
    "winner_school": "Colorado Mines",
    "loser": "Bob Buzzard",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "137",
    "bout": 554,
    "winner": "Mike Sager",
    "winner_school": "Oklahoma",
    "loser": "Gary Wilcox",
    "loser_school": "Michigan",
    "result": "MD 13-5"
  },
  {
    "round": "RepConsA",
    "weight": "137",
    "bout": 268,
    "winner": "Dan Fix",
    "winner_school": "Colorado Mines",
    "loser": "Tom Jones",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 387,
    "winner": "Richard Scorese",
    "winner_school": "Bloomsburg",
    "loser": "John Thompson",
    "loser_school": "Kansas State",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "137",
    "bout": 388,
    "winner": "Dan Fix",
    "winner_school": "Colorado Mines",
    "loser": "Steve Erber",
    "loser_school": "Penn State",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 427,
    "winner": "Bob Buzzard",
    "winner_school": "Iowa State",
    "loser": "Richard Scorese",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-3"
  },
  {
    "round": "RepConsC",
    "weight": "137",
    "bout": 428,
    "winner": "Dan Fix",
    "winner_school": "Colorado Mines",
    "loser": "Jim Rogers",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 76,
    "winner": "Lee Deitrick",
    "winner_school": "Michigan",
    "loser": "Gary Frank",
    "loser_school": "Wyoming",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 77,
    "winner": "Nash Tillman",
    "winner_school": "Adams State",
    "loser": "Dino Boni",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 78,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Elmer Beale",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 79,
    "winner": "George Edwards",
    "winner_school": "Penn State",
    "loser": "John Cerra",
    "loser_school": "Springfield",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 80,
    "winner": "Lee Rosenberg",
    "winner_school": "Oregon State",
    "loser": "John Daniels",
    "loser_school": "Harvard",
    "result": "Fall 5:15"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 81,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Charles Warren",
    "loser_school": "Oregon",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 82,
    "winner": "Al Lilley",
    "winner_school": "Temple",
    "loser": "Roy Hagerty",
    "loser_school": "North Carolina",
    "result": "Fall 6:55"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 83,
    "winner": "Buzz Hays",
    "winner_school": "Arizona State",
    "loser": "Ed Taylor",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:48"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 84,
    "winner": "Carl Capra",
    "winner_school": "Cornell",
    "loser": "John Schael",
    "loser_school": "Miami Ohio",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 85,
    "winner": "Doug Koch",
    "winner_school": "Lehigh",
    "loser": "Jim Jiolo",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 86,
    "winner": "Clayton Beattie",
    "winner_school": "Illinois",
    "loser": "Don Matson",
    "loser_school": "UCLA",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 87,
    "winner": "Dave Ziegler",
    "winner_school": "Colorado",
    "loser": "Orlando Iacovelli",
    "loser_school": "Ithaca",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 88,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "Joe Greenlee",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "147",
    "bout": 89,
    "winner": "Leland Gross",
    "winner_school": "Minnesota",
    "loser": "Henry Starnes",
    "loser_school": "Auburn",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 203,
    "winner": "Lee Deitrick",
    "winner_school": "Michigan",
    "loser": "Rich Hickman",
    "loser_school": "Colorado Mines",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 204,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Nash Tillman",
    "loser_school": "Adams State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 205,
    "winner": "George Edwards",
    "winner_school": "Penn State",
    "loser": "Lee Rosenberg",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 206,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Al Lilley",
    "loser_school": "Temple",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 207,
    "winner": "Buzz Hays",
    "winner_school": "Arizona State",
    "loser": "Carl Capra",
    "loser_school": "Cornell",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 208,
    "winner": "Doug Koch",
    "winner_school": "Lehigh",
    "loser": "Clayton Beattie",
    "loser_school": "Illinois",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 209,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "Dave Ziegler",
    "loser_school": "Colorado",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "147",
    "bout": 210,
    "winner": "Jim Crider",
    "winner_school": "Northern Colorado",
    "loser": "Leland Gross",
    "loser_school": "Minnesota",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 357,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "Lee Deitrick",
    "loser_school": "Michigan",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 358,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "George Edwards",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 359,
    "winner": "Doug Koch",
    "winner_school": "Lehigh",
    "loser": "Buzz Hays",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "147",
    "bout": 360,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "Jim Crider",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 469,
    "winner": "Mike Reding",
    "winner_school": "Oklahoma State",
    "loser": "Veryl Long",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "147",
    "bout": 470,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "Doug Koch",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "147",
    "bout": 535,
    "winner": "George Edwards",
    "winner_school": "Penn State",
    "loser": "Jim Crider",
    "loser_school": "Northern Colorado",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "147",
    "bout": 545,
    "winner": "Doug Koch",
    "winner_school": "Lehigh",
    "loser": "Veryl Long",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "147",
    "bout": 555,
    "winner": "Jerry Stanley",
    "winner_school": "Oklahoma",
    "loser": "Mike Reding",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 269,
    "winner": "Al Lilley",
    "winner_school": "Temple",
    "loser": "Charles Warren",
    "loser_school": "Oregon",
    "result": "M FOR"
  },
  {
    "round": "RepConsA",
    "weight": "147",
    "bout": 270,
    "winner": "Dave Ziegler",
    "winner_school": "Colorado",
    "loser": "Joe Greenlee",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 389,
    "winner": "George Edwards",
    "winner_school": "Penn State",
    "loser": "Al Lilley",
    "loser_school": "Temple",
    "result": "Dec 5-3"
  },
  {
    "round": "RepConsB",
    "weight": "147",
    "bout": 390,
    "winner": "Jim Crider",
    "winner_school": "Northern Colorado",
    "loser": "Dave Ziegler",
    "loser_school": "Colorado",
    "result": "Dec 10-6"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 429,
    "winner": "Veryl Long",
    "winner_school": "Iowa State",
    "loser": "George Edwards",
    "loser_school": "Penn State",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "147",
    "bout": 430,
    "winner": "Doug Koch",
    "winner_school": "Lehigh",
    "loser": "Jim Crider",
    "loser_school": "Northern Colorado",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 91,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Roy Brewer",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 92,
    "winner": "Alan Frude",
    "winner_school": "Wyoming",
    "loser": "Dale Winter",
    "loser_school": "Springfield",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 93,
    "winner": "Dick Slutzky",
    "winner_school": "Syracuse",
    "loser": "Don Bennett",
    "loser_school": "Indiana",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 94,
    "winner": "Jack Ford",
    "winner_school": "Colorado",
    "loser": "Buford Wiley",
    "loser_school": "Navy",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 95,
    "winner": "Bill Lam",
    "winner_school": "Oklahoma",
    "loser": "Ron Johnson",
    "loser_school": "Washington",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 96,
    "winner": "John Owen",
    "winner_school": "Bloomsburg",
    "loser": "Steve Martin",
    "loser_school": "Wisconsin",
    "result": "Fall 5:45"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 97,
    "winner": "Jack Flasche",
    "winner_school": "Northern Colorado",
    "loser": "Paul Sammis",
    "loser_school": "Miami Ohio",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 98,
    "winner": "Richard Duffy",
    "winner_school": "C.W. Post",
    "loser": "Joe Domko",
    "loser_school": "Illinois",
    "result": "Fall 4:21"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 99,
    "winner": "John Welch",
    "winner_school": "Rutgers",
    "loser": "Stu Marshall",
    "loser_school": "Northwestern",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 100,
    "winner": "Jim Monroe",
    "winner_school": "Northern Iowa",
    "loser": "Bob Mitchell",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 101,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Harley Ferguson",
    "loser_school": "Lehigh",
    "result": "Fall 5:10"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 102,
    "winner": "Wayne Miller",
    "winner_school": "Michigan",
    "loser": "Dennis Palmer",
    "loser_school": "Bowling Green",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 103,
    "winner": "Geoff Stephens",
    "winner_school": "Cornell",
    "loser": "Roger Sanders",
    "loser_school": "West Chester",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 104,
    "winner": "Marty Lyman",
    "winner_school": "New Mexico",
    "loser": "Brian Small",
    "loser_school": "Colgate",
    "result": "Fall 1:40"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 105,
    "winner": "Rahim Javanmard",
    "winner_school": "UCLA",
    "loser": "Frank Eisenhower",
    "loser_school": "Lock Haven",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 211,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Alan Frude",
    "loser_school": "Wyoming",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 212,
    "winner": "Dick Slutzky",
    "winner_school": "Syracuse",
    "loser": "Jack Ford",
    "loser_school": "Colorado",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Bill Lam",
    "winner_school": "Oklahoma",
    "loser": "John Owen",
    "loser_school": "Bloomsburg",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Jack Flasche",
    "winner_school": "Northern Colorado",
    "loser": "Richard Duffy",
    "loser_school": "C.W. Post",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Jim Monroe",
    "winner_school": "Northern Iowa",
    "loser": "John Welch",
    "loser_school": "Rutgers",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Wayne Miller",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Geoff Stephens",
    "winner_school": "Cornell",
    "loser": "Marty Lyman",
    "loser_school": "New Mexico",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Tom Baily",
    "winner_school": "Pittsburgh",
    "loser": "Rahim Javanmard",
    "loser_school": "UCLA",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 361,
    "winner": "Dick Slutzky",
    "winner_school": "Syracuse",
    "loser": "Bob Kopnisky",
    "loser_school": "Maryland",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 362,
    "winner": "Bill Lam",
    "winner_school": "Oklahoma",
    "loser": "Jack Flasche",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 363,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Jim Monroe",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 364,
    "winner": "Geoff Stephens",
    "winner_school": "Cornell",
    "loser": "Tom Baily",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 471,
    "winner": "Dick Slutzky",
    "winner_school": "Syracuse",
    "loser": "Bill Lam",
    "loser_school": "Oklahoma",
    "result": "Dec 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 472,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Geoff Stephens",
    "loser_school": "Cornell",
    "result": "Dec 7-2"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 536,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Geoff Stephens",
    "loser_school": "Cornell",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 546,
    "winner": "Bill Lam",
    "winner_school": "Oklahoma",
    "loser": "Wayne Miller",
    "loser_school": "Michigan",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 556,
    "winner": "Gordon Hassman",
    "winner_school": "Iowa State",
    "loser": "Dick Slutzky",
    "loser_school": "Syracuse",
    "result": "Dec 9-7"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 271,
    "winner": "Jack Ford",
    "winner_school": "Colorado",
    "loser": "Don Bennett",
    "loser_school": "Indiana",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsA",
    "weight": "157",
    "bout": 272,
    "winner": "Wayne Miller",
    "winner_school": "Michigan",
    "loser": "Harley Ferguson",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 391,
    "winner": "Bob Kopnisky",
    "winner_school": "Maryland",
    "loser": "Jack Ford",
    "loser_school": "Colorado",
    "result": "Dec 4-0"
  },
  {
    "round": "RepConsB",
    "weight": "157",
    "bout": 392,
    "winner": "Wayne Miller",
    "winner_school": "Michigan",
    "loser": "Jim Monroe",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 431,
    "winner": "Bill Lam",
    "winner_school": "Oklahoma",
    "loser": "Bob Kopnisky",
    "loser_school": "Maryland",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "RepConsC",
    "weight": "157",
    "bout": 432,
    "winner": "Wayne Miller",
    "winner_school": "Michigan",
    "loser": "Geoff Stephens",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Marty Strayer",
    "winner_school": "Penn State",
    "loser": "John Klein",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Len Kauffman",
    "winner_school": "Oregon State",
    "loser": "Lew Roberts",
    "loser_school": "Syracuse",
    "result": "Fall 2:20"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Dave Schreiber",
    "winner_school": "Luther",
    "loser": "Bob Arvin",
    "loser_school": "Army",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Don Millard",
    "winner_school": "SIU-Carbondale",
    "loser": "Mike Williams",
    "loser_school": "MIT",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Lee Hall",
    "winner_school": "Pittsburgh",
    "loser": "Cary Stewart",
    "loser_school": "Virginia",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Darrell Dillworth",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Chuck Ronyetz",
    "winner_school": "Ohio",
    "loser": "Fran Ferraro",
    "loser_school": "Cornell",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "John Jeffrey",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Gary Scrivens",
    "winner_school": "UCLA",
    "loser": "Dave Steiler",
    "loser_school": "Temple",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Mel Wieland",
    "winner_school": "Iowa",
    "loser": "Leo Derock",
    "loser_school": "Colorado",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Tim Geiger",
    "winner_school": "Maryland",
    "loser": "Frank Mosier",
    "loser_school": "Moorhead State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Will Elting",
    "winner_school": "Yale",
    "loser": "Tom Vargo",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Marty Strayer",
    "winner_school": "Penn State",
    "loser": "Ron Jacobson",
    "loser_school": "New Mexico",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Len Kauffman",
    "winner_school": "Oregon State",
    "loser": "Dave Schreiber",
    "loser_school": "Luther",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Don Millard",
    "winner_school": "SIU-Carbondale",
    "loser": "Dave Carey",
    "loser_school": "Navy",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Lee Hall",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "Chuck Ronyetz",
    "loser_school": "Ohio",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Gary Scrivens",
    "winner_school": "UCLA",
    "loser": "Eric Nichols",
    "loser_school": "Davidson",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Tim Geiger",
    "winner_school": "Maryland",
    "loser": "Mel Wieland",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Bob Zweiacher",
    "winner_school": "Oklahoma State",
    "loser": "Will Elting",
    "loser_school": "Yale",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Len Kauffman",
    "winner_school": "Oregon State",
    "loser": "Marty Strayer",
    "loser_school": "Penn State",
    "result": "Fall 7:54"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Don Millard",
    "winner_school": "SIU-Carbondale",
    "loser": "Tom Peckham",
    "loser_school": "Iowa State",
    "result": "Fall 7:05"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Terry Isaacson",
    "winner_school": "Air Force",
    "loser": "Gary Scrivens",
    "loser_school": "UCLA",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Bob Zweiacher",
    "winner_school": "Oklahoma State",
    "loser": "Tim Geiger",
    "loser_school": "Maryland",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Don Millard",
    "winner_school": "SIU-Carbondale",
    "loser": "Len Kauffman",
    "loser_school": "Oregon State",
    "result": "Dec 9-6"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Bob Zweiacher",
    "winner_school": "Oklahoma State",
    "loser": "Terry Isaacson",
    "loser_school": "Air Force",
    "result": "Dec 4-1"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Terry Isaacson",
    "loser_school": "Air Force",
    "result": "Dec 2-1"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Len Kauffman",
    "winner_school": "Oregon State",
    "loser": "Tim Geiger",
    "loser_school": "Maryland",
    "result": "Fall 5:36"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Don Millard",
    "winner_school": "SIU-Carbondale",
    "loser": "Bob Zweiacher",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsA",
    "weight": "167",
    "bout": 273,
    "winner": "Dave Carey",
    "winner_school": "Navy",
    "loser": "Mike Williams",
    "loser_school": "MIT",
    "result": "Dec 5-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 393,
    "winner": "Tom Peckham",
    "winner_school": "Iowa State",
    "loser": "Dave Carey",
    "loser_school": "Navy",
    "result": "Dec 3-0"
  },
  {
    "round": "RepConsB",
    "weight": "167",
    "bout": 394,
    "winner": "Tim Geiger",
    "winner_school": "Maryland",
    "loser": "Will Elting",
    "loser_school": "Yale",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 433,
    "winner": "Len Kauffman",
    "winner_school": "Oregon State",
    "loser": "Tom Peckham",
    "loser_school": "Iowa State",
    "result": "Fall 2:22"
  },
  {
    "round": "RepConsC",
    "weight": "167",
    "bout": 434,
    "winner": "Tim Geiger",
    "winner_school": "Maryland",
    "loser": "Terry Isaacson",
    "loser_school": "Air Force",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Richard Isel",
    "winner_school": "Indiana",
    "loser": "Mike Wittenberg",
    "loser_school": "Cornell",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Art Oraschin",
    "winner_school": "Lycoming",
    "loser": "Bruce Alexander",
    "loser_school": "Toledo",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Brekke Johnson",
    "winner_school": "Wisconsin",
    "loser": "Bob Shearer",
    "loser_school": "Kent State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Jim Grover",
    "winner_school": "Iowa State",
    "loser": "Emerson Bales",
    "loser_school": "Michigan State",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Roy Sisler",
    "winner_school": "West Virginia",
    "loser": "Joe Arcure",
    "loser_school": "Michigan",
    "result": "Fall 7:48"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Ken Barr",
    "winner_school": "Pittsburgh",
    "loser": "Dick Ernst",
    "loser_school": "Northwestern",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Marshall Dauberman",
    "winner_school": "Maryland",
    "loser": "Richard Isel",
    "loser_school": "Indiana",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Art Oraschin",
    "loser_school": "Lycoming",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Bob Hannah",
    "winner_school": "Yale",
    "loser": "Brekke Johnson",
    "loser_school": "Wisconsin",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "George Reid",
    "winner_school": "Purdue",
    "loser": "Jim Grover",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Gerry Franzen",
    "winner_school": "Navy",
    "loser": "Bob Ramstad",
    "loser_school": "Minnesota",
    "result": "Fall 5:09"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Roy Sisler",
    "loser_school": "West Virginia",
    "result": "Fall 0:56"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Joe Cerra",
    "loser_school": "Springfield",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Marshall Dauberman",
    "winner_school": "Maryland",
    "loser": "Ken Barr",
    "loser_school": "Pittsburgh",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Bob Hannah",
    "loser_school": "Yale",
    "result": "Fall 7:32"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Gerry Franzen",
    "winner_school": "Navy",
    "loser": "George Reid",
    "loser_school": "Purdue",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Swope",
    "loser_school": "Lock Haven",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Marshall Dauberman",
    "loser_school": "Maryland",
    "result": "MD 12-1"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Bill Harlow",
    "winner_school": "Oklahoma State",
    "loser": "Gerry Franzen",
    "loser_school": "Navy",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Gerry Franzen",
    "winner_school": "Navy",
    "loser": "Bob Hannah",
    "loser_school": "Yale",
    "result": "MD 11-2"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Marshall Dauberman",
    "loser_school": "Maryland",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Dean Lahr",
    "winner_school": "Colorado",
    "loser": "Bill Harlow",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 395,
    "winner": "Bob Hannah",
    "winner_school": "Yale",
    "loser": "Art Oraschin",
    "loser_school": "Lycoming",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsB",
    "weight": "177",
    "bout": 396,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Roy Sisler",
    "loser_school": "West Virginia",
    "result": "Fall 3:30"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 435,
    "winner": "Marshall Dauberman",
    "winner_school": "Maryland",
    "loser": "Bob Hannah",
    "loser_school": "Yale",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "RepConsC",
    "weight": "177",
    "bout": 436,
    "winner": "Jerry Swope",
    "winner_school": "Lock Haven",
    "loser": "Gerry Franzen",
    "loser_school": "Navy",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 140,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Bill Beck",
    "loser_school": "Pittsburgh",
    "result": "Fall 5:27"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 142,
    "winner": "Blas\u00e9 Iuliano",
    "winner_school": "Ithaca",
    "loser": "Ken Hines",
    "loser_school": "Colorado State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 144,
    "winner": "Bob Buchwald",
    "winner_school": "Cornell",
    "loser": "Fred Johnson",
    "loser_school": "Augustana Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 146,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Ken Johnston",
    "loser_school": "Colorado",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 147,
    "winner": "Steve Speers",
    "winner_school": "Temple",
    "loser": "Dennis Bowman",
    "loser_school": "West Liberty State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 149,
    "winner": "John Gladish",
    "winner_school": "Lehigh",
    "loser": "Jeff Nichols",
    "loser_school": "Colgate",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "191",
    "bout": 151,
    "winner": "Jack Brisco",
    "winner_school": "Oklahoma State",
    "loser": "Ron Geiser",
    "loser_school": "Rutgers",
    "result": "Fall 8:28"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 235,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Bob Keeney",
    "loser_school": "Oregon",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 236,
    "winner": "Blas\u00e9 Iuliano",
    "winner_school": "Ithaca",
    "loser": "Bill Hunt",
    "loser_school": "Purdue",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 237,
    "winner": "Sven Holm",
    "winner_school": "Oklahoma",
    "loser": "Bob Buchwald",
    "loser_school": "Cornell",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 238,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Tom Abraham",
    "loser_school": "Army",
    "result": "Fall 4:59"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 239,
    "winner": "Steve Speers",
    "winner_school": "Temple",
    "loser": "Jim Lamberson",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 240,
    "winner": "John Gladish",
    "winner_school": "Lehigh",
    "loser": "Paul Davis",
    "loser_school": "Georgia",
    "result": "Fall 6:59"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 241,
    "winner": "Jack Brisco",
    "winner_school": "Oklahoma State",
    "loser": "Jim Maidlow",
    "loser_school": "Michigan State",
    "result": "Fall 8:03"
  },
  {
    "round": "ChampR2",
    "weight": "191",
    "bout": 242,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "Steve Shippos",
    "loser_school": "Iowa State",
    "result": "Fall 8:43"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 373,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "Blas\u00e9 Iuliano",
    "loser_school": "Ithaca",
    "result": "Fall 8:45"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 374,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Sven Holm",
    "loser_school": "Oklahoma",
    "result": "Fall 1:02"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 375,
    "winner": "John Gladish",
    "winner_school": "Lehigh",
    "loser": "Steve Speers",
    "loser_school": "Temple",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "191",
    "bout": 376,
    "winner": "Jack Brisco",
    "winner_school": "Oklahoma State",
    "loser": "Bob Spaly",
    "loser_school": "Michigan",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 477,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Ron Paar",
    "loser_school": "Wisconsin",
    "result": "Fall 1:24"
  },
  {
    "round": "SemiFinals",
    "weight": "191",
    "bout": 478,
    "winner": "Jack Brisco",
    "winner_school": "Oklahoma State",
    "loser": "John Gladish",
    "loser_school": "Lehigh",
    "result": "Dec 5-1"
  },
  {
    "round": "5thPlace",
    "weight": "191",
    "bout": 539,
    "winner": "Ron Paar",
    "winner_school": "Wisconsin",
    "loser": "John Gladish",
    "loser_school": "Lehigh",
    "result": "Dec 8-1"
  },
  {
    "round": "3rdPlace",
    "weight": "191",
    "bout": 549,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "Sven Holm",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "Finals",
    "weight": "191",
    "bout": 559,
    "winner": "Harry Houska",
    "winner_school": "Ohio",
    "loser": "Jack Brisco",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 277,
    "winner": "Ken Johnston",
    "winner_school": "Colorado",
    "loser": "Tom Abraham",
    "loser_school": "Army",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsA",
    "weight": "191",
    "bout": 278,
    "winner": "Ron Geiser",
    "winner_school": "Rutgers",
    "loser": "Jim Maidlow",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 397,
    "winner": "Sven Holm",
    "winner_school": "Oklahoma",
    "loser": "Ken Johnston",
    "loser_school": "Colorado",
    "result": "Fall 2:50"
  },
  {
    "round": "RepConsB",
    "weight": "191",
    "bout": 398,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "Ron Geiser",
    "loser_school": "Rutgers",
    "result": "Dec 5-2"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 437,
    "winner": "Sven Holm",
    "winner_school": "Oklahoma",
    "loser": "Ron Paar",
    "loser_school": "Wisconsin",
    "result": "Dec 6-5"
  },
  {
    "round": "RepConsC",
    "weight": "191",
    "bout": 438,
    "winner": "Bob Spaly",
    "winner_school": "Michigan",
    "loser": "John Gladish",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Luke Sharpe",
    "winner_school": "Duke",
    "loser": "Roger Pillath",
    "loser_school": "Wisconsin",
    "result": "Fall 6:48"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Bob Billberg",
    "winner_school": "Moorhead State",
    "loser": "Richard Conaway",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Dick Arrington",
    "winner_school": "Notre Dame",
    "loser": "Tom Emanuel",
    "loser_school": "Tennessee",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Bob Hopp",
    "winner_school": "Purdue",
    "loser": "Larry Kristoff",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Tim Stein",
    "loser_school": "Miami Ohio",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Merrell Solowin",
    "winner_school": "Toledo",
    "loser": "Homer McClure",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Luke Sharpe",
    "winner_school": "Duke",
    "loser": "Jim Homan",
    "loser_school": "Iowa State",
    "result": "Fall 4:57"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Bob Billberg",
    "winner_school": "Moorhead State",
    "loser": "John Garamendi",
    "loser_school": "California-Berkeley",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Jim Nance",
    "winner_school": "Syracuse",
    "loser": "Dick Arrington",
    "loser_school": "Notre Dame",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Bob Hopp",
    "winner_school": "Purdue",
    "loser": "Richard Redd",
    "loser_school": "Colorado",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "John Illengwarth",
    "winner_school": "Lehigh",
    "loser": "Charles Kuhler",
    "loser_school": "RIT",
    "result": "Fall 5:28"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Bruce Jacobsohn",
    "loser_school": "Penn",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Ed Scharer",
    "winner_school": "Rutgers",
    "loser": "Roger Schilling",
    "loser_school": "Iowa",
    "result": "Fall 6:41"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Merrell Solowin",
    "winner_school": "Toledo",
    "loser": "Luke Sharpe",
    "loser_school": "Duke",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Bob Billberg",
    "winner_school": "Moorhead State",
    "loser": "Jim Nance",
    "loser_school": "Syracuse",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Bob Hopp",
    "winner_school": "Purdue",
    "loser": "John Illengwarth",
    "loser_school": "Lehigh",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Ed Scharer",
    "loser_school": "Rutgers",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Bob Billberg",
    "winner_school": "Moorhead State",
    "loser": "Merrell Solowin",
    "loser_school": "Toledo",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Bob Hopp",
    "loser_school": "Purdue",
    "result": "Dec 5-4"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Richard Conaway",
    "winner_school": "Indiana",
    "loser": "Ed Scharer",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Merrell Solowin",
    "winner_school": "Toledo",
    "loser": "Bob Hopp",
    "loser_school": "Purdue",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Joe James",
    "winner_school": "Oklahoma State",
    "loser": "Bob Billberg",
    "loser_school": "Moorhead State",
    "result": "Dec 4-2"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 279,
    "winner": "Richard Conaway",
    "winner_school": "Indiana",
    "loser": "John Garamendi",
    "loser_school": "California-Berkeley",
    "result": "Dec 7-2"
  },
  {
    "round": "RepConsA",
    "weight": "UNL",
    "bout": 280,
    "winner": "Bruce Jacobsohn",
    "winner_school": "Penn",
    "loser": "Tim Stein",
    "loser_school": "Miami Ohio",
    "result": "Dec 2-1"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 399,
    "winner": "Richard Conaway",
    "winner_school": "Indiana",
    "loser": "Jim Nance",
    "loser_school": "Syracuse",
    "result": "M FOR"
  },
  {
    "round": "RepConsB",
    "weight": "UNL",
    "bout": 400,
    "winner": "Ed Scharer",
    "winner_school": "Rutgers",
    "loser": "Bruce Jacobsohn",
    "loser_school": "Penn",
    "result": "Dec 2-0"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 439,
    "winner": "Merrell Solowin",
    "winner_school": "Toledo",
    "loser": "Richard Conaway",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "RepConsC",
    "weight": "UNL",
    "bout": 440,
    "winner": "Bob Hopp",
    "winner_school": "Purdue",
    "loser": "Ed Scharer",
    "loser_school": "Rutgers",
    "result": "Dec 5-3"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
