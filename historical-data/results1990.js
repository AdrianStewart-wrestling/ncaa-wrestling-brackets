// 1990 NCAA Division I Wrestling Championships (3/22/1990 to 3/24/1990 at Maryland). Weight classes 118-275. Consolation: QUARTERFINAL WRESTLEBACK (rounds WbConsR1-R5).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1990 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1990-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Gary McCall",
    "winner_school": "Iowa State",
    "loser": "Dan Finacchio",
    "loser_school": "Rider",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Dan Vidlak",
    "winner_school": "Oregon",
    "loser": "Erik Burnett",
    "loser_school": "Clarion",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Donnie Heckel",
    "winner_school": "Clemson",
    "loser": "Wayne Murschell",
    "loser_school": "George Mason",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Jack Griffin",
    "winner_school": "Northwestern",
    "loser": "Pat Higa",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Jack DeBoe",
    "winner_school": "Kent State",
    "loser": "Tom Tingley",
    "loser_school": "Air Force",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Charlie Irick",
    "winner_school": "Wisconsin",
    "loser": "Rick Hartman",
    "loser_school": "Lehigh",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Doug Wyland",
    "winner_school": "North Carolina",
    "loser": "Rich Douglas",
    "loser_school": "St. Cloud State",
    "result": "MD 17-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Gary McCall",
    "winner_school": "Iowa State",
    "loser": "Steve Martin",
    "loser_school": "Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Lou Rosselli",
    "winner_school": "Edinboro",
    "loser": "Tony Venturini",
    "loser_school": "Eastern Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Bob Simpson",
    "winner_school": "Pittsburgh",
    "loser": "Tony Purler",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Gabe Zirkelbach",
    "loser_school": "Purdue",
    "result": "TF 21-4 5:46"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Zeke Jones",
    "winner_school": "Arizona State",
    "loser": "Jerry Graziano",
    "loser_school": "Cornell",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Ben Morris",
    "winner_school": "Minnesota",
    "loser": "Ken Matsui",
    "loser_school": "Boston University",
    "result": "Dec 14-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Bret Maughan",
    "winner_school": "North Dakota State",
    "loser": "Lance Ellis",
    "loser_school": "Indiana",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Mark Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Steve Millward",
    "loser_school": "West Virginia",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Chris Bollin",
    "winner_school": "Oklahoma",
    "loser": "Adam Condo",
    "loser_school": "Columbia",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Bobby Crawford",
    "winner_school": "Missouri",
    "loser": "Ricky Strausbaugh",
    "loser_school": "NC State",
    "result": "MD 11-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 251,
    "winner": "Steve Martin",
    "winner_school": "Iowa",
    "loser": "Dan Finacchio",
    "loser_school": "Rider",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Donnie Heckel",
    "winner_school": "Clemson",
    "loser": "Dan Vidlak",
    "loser_school": "Oregon",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Jack Griffin",
    "winner_school": "Northwestern",
    "loser": "Jack DeBoe",
    "loser_school": "Kent State",
    "result": "TF 15-0 5:30"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Doug Wyland",
    "winner_school": "North Carolina",
    "loser": "Charlie Irick",
    "loser_school": "Wisconsin",
    "result": "Fall 6:38"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Gary McCall",
    "winner_school": "Iowa State",
    "loser": "Lou Rosselli",
    "loser_school": "Edinboro",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Bob Simpson",
    "loser_school": "Pittsburgh",
    "result": "MD 18-9"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Zeke Jones",
    "winner_school": "Arizona State",
    "loser": "Ben Morris",
    "loser_school": "Minnesota",
    "result": "TF 19-4 6:19"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Mark Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Bret Maughan",
    "loser_school": "North Dakota State",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Chris Bollin",
    "winner_school": "Oklahoma",
    "loser": "Bobby Crawford",
    "loser_school": "Missouri",
    "result": "Dec 1-0"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Dan Vidlak",
    "winner_school": "Oregon",
    "loser": "Wayne Murschell",
    "loser_school": "George Mason",
    "result": "Dec 9-2"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Pat Higa",
    "winner_school": "CSU Bakersfield",
    "loser": "Jack DeBoe",
    "loser_school": "Kent State",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Charlie Irick",
    "winner_school": "Wisconsin",
    "loser": "Rich Douglas",
    "loser_school": "St. Cloud State",
    "result": "Fall 4:43"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Lou Rosselli",
    "winner_school": "Edinboro",
    "loser": "Steve Martin",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 265,
    "winner": "Bob Simpson",
    "winner_school": "Pittsburgh",
    "loser": "Gabe Zirkelbach",
    "loser_school": "Purdue",
    "result": "MD 12-3"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 266,
    "winner": "Ben Morris",
    "winner_school": "Minnesota",
    "loser": "Jerry Graziano",
    "loser_school": "Cornell",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 267,
    "winner": "Steve Millward",
    "winner_school": "West Virginia",
    "loser": "Bret Maughan",
    "loser_school": "North Dakota State",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 268,
    "winner": "Bobby Crawford",
    "winner_school": "Missouri",
    "loser": "Adam Condo",
    "loser_school": "Columbia",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Jack Griffin",
    "winner_school": "Northwestern",
    "loser": "Donnie Heckel",
    "loser_school": "Clemson",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Gary McCall",
    "winner_school": "Iowa State",
    "loser": "Doug Wyland",
    "loser_school": "North Carolina",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Zeke Jones",
    "winner_school": "Arizona State",
    "loser": "Jeff Prescott",
    "loser_school": "Penn State",
    "result": "Dec 11-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Mark Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Chris Bollin",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Dan Vidlak",
    "winner_school": "Oregon",
    "loser": "Pat Higa",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 0:50"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Lou Rosselli",
    "winner_school": "Edinboro",
    "loser": "Charlie Irick",
    "loser_school": "Wisconsin",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Bob Simpson",
    "winner_school": "Pittsburgh",
    "loser": "Ben Morris",
    "loser_school": "Minnesota",
    "result": "Fall 3:48"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Bobby Crawford",
    "winner_school": "Missouri",
    "loser": "Steve Millward",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Dan Vidlak",
    "winner_school": "Oregon",
    "loser": "Chris Bollin",
    "loser_school": "Oklahoma",
    "result": "Dec 10-5"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Lou Rosselli",
    "loser_school": "Edinboro",
    "result": "MD 13-1"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 423,
    "winner": "Doug Wyland",
    "winner_school": "North Carolina",
    "loser": "Bob Simpson",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 424,
    "winner": "Bobby Crawford",
    "winner_school": "Missouri",
    "loser": "Donnie Heckel",
    "loser_school": "Clemson",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Jack Griffin",
    "winner_school": "Northwestern",
    "loser": "Gary McCall",
    "loser_school": "Iowa State",
    "result": "Fall 1:25"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Zeke Jones",
    "winner_school": "Arizona State",
    "loser": "Mark Schwab",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Dan Vidlak",
    "loser_school": "Oregon",
    "result": "TF 15-0 5:08"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Doug Wyland",
    "winner_school": "North Carolina",
    "loser": "Bobby Crawford",
    "loser_school": "Missouri",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 501,
    "winner": "Gary McCall",
    "winner_school": "Iowa State",
    "loser": "Jeff Prescott",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 502,
    "winner": "Doug Wyland",
    "winner_school": "North Carolina",
    "loser": "Mark Schwab",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Bobby Crawford",
    "winner_school": "Missouri",
    "loser": "Dan Vidlak",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Mark Schwab",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Gary McCall",
    "winner_school": "Iowa State",
    "loser": "Doug Wyland",
    "loser_school": "North Carolina",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Jack Griffin",
    "winner_school": "Northwestern",
    "loser": "Zeke Jones",
    "loser_school": "Arizona State",
    "result": "MD 12-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Mike Richner",
    "winner_school": "Clarion",
    "loser": "Johnny Jones",
    "loser_school": "Citadel",
    "result": "TF 19-2 7:00"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "Bob Truby",
    "winner_school": "Penn State",
    "loser": "Mark Fergeson",
    "loser_school": "Cornell",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Ahmed El-Sokkary",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark Smith",
    "loser_school": "Navy",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Dan Knight",
    "winner_school": "Iowa State",
    "loser": "Jim Lightner",
    "loser_school": "Cleveland State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Dave Miller",
    "loser_school": "West Virginia",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Dave Kennedy",
    "winner_school": "Bloomsburg",
    "loser": "Dave Warnick",
    "loser_school": "Army",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Gary Roberts",
    "winner_school": "New Mexico",
    "loser": "Frank Trujillo",
    "loser_school": "Fresno State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Duaine Martin",
    "winner_school": "Northern Iowa",
    "loser": "Chris Doukas",
    "loser_school": "Bucknell",
    "result": "Fall 4:15"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Dan Flood",
    "winner_school": "Wisconsin",
    "loser": "Mike Richner",
    "loser_school": "Clarion",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Terry Brands",
    "winner_school": "Iowa",
    "loser": "Mike Pasdo",
    "loser_school": "Marquette",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Brian Smith",
    "winner_school": "Michigan State",
    "loser": "Sal Profaci",
    "loser_school": "Central Connecticut",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Craig Walters",
    "winner_school": "Wyoming",
    "loser": "Bob Truby",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Kurt Howell",
    "winner_school": "Clemson",
    "loser": "Mike Meyer",
    "loser_school": "Miami Ohio",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Jason Kelber",
    "winner_school": "Nebraska",
    "loser": "Noel Clavel",
    "loser_school": "Old Dominion",
    "result": "Fall 4:50"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Marcus Gowens",
    "winner_school": "Notre Dame",
    "loser": "Jeff Maes",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Kendall Cross",
    "winner_school": "Oklahoma State",
    "loser": "Christopher Toth",
    "loser_school": "American",
    "result": "TF 19-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Mark Burrell",
    "winner_school": "Central Missouri",
    "loser": "Clayton Grice",
    "loser_school": "NC State",
    "result": "MD 15-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Adam DiSabato",
    "winner_school": "Ohio State",
    "loser": "Ryan Hager",
    "loser_school": "Oklahoma",
    "result": "Fall 1:58"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Dan Knight",
    "winner_school": "Iowa State",
    "loser": "Ahmed El-Sokkary",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Dave Kennedy",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Duaine Martin",
    "winner_school": "Northern Iowa",
    "loser": "Gary Roberts",
    "loser_school": "New Mexico",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Terry Brands",
    "winner_school": "Iowa",
    "loser": "Dan Flood",
    "loser_school": "Wisconsin",
    "result": "TF 25-10 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Brian Smith",
    "winner_school": "Michigan State",
    "loser": "Craig Walters",
    "loser_school": "Wyoming",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Jason Kelber",
    "winner_school": "Nebraska",
    "loser": "Kurt Howell",
    "loser_school": "Clemson",
    "result": "TF 16-0 5:19"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Kendall Cross",
    "winner_school": "Oklahoma State",
    "loser": "Marcus Gowens",
    "loser_school": "Notre Dame",
    "result": "Fall 6:00"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Adam DiSabato",
    "winner_school": "Ohio State",
    "loser": "Mark Burrell",
    "loser_school": "Central Missouri",
    "result": "Dec 9-7"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 269,
    "winner": "Ahmed El-Sokkary",
    "winner_school": "CSU Bakersfield",
    "loser": "Jim Lightner",
    "loser_school": "Cleveland State",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 270,
    "winner": "Dave Kennedy",
    "winner_school": "Bloomsburg",
    "loser": "Dave Miller",
    "loser_school": "West Virginia",
    "result": "Dec 10-8"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 271,
    "winner": "Gary Roberts",
    "winner_school": "New Mexico",
    "loser": "Chris Doukas",
    "loser_school": "Bucknell",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 272,
    "winner": "Dan Flood",
    "winner_school": "Wisconsin",
    "loser": "Mike Pasdo",
    "loser_school": "Marquette",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 273,
    "winner": "Sal Profaci",
    "winner_school": "Central Connecticut",
    "loser": "Craig Walters",
    "loser_school": "Wyoming",
    "result": "Fall 1:08"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 274,
    "winner": "Kurt Howell",
    "winner_school": "Clemson",
    "loser": "Noel Clavel",
    "loser_school": "Old Dominion",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 275,
    "winner": "Christopher Toth",
    "winner_school": "American",
    "loser": "Marcus Gowens",
    "loser_school": "Notre Dame",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 276,
    "winner": "Mark Burrell",
    "winner_school": "Central Missouri",
    "loser": "Ryan Hager",
    "loser_school": "Oklahoma",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Dan Knight",
    "winner_school": "Iowa State",
    "loser": "Shawn Charles",
    "loser_school": "Arizona State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Terry Brands",
    "winner_school": "Iowa",
    "loser": "Duaine Martin",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Jason Kelber",
    "winner_school": "Nebraska",
    "loser": "Brian Smith",
    "loser_school": "Michigan State",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Kendall Cross",
    "winner_school": "Oklahoma State",
    "loser": "Adam DiSabato",
    "loser_school": "Ohio State",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Dave Kennedy",
    "winner_school": "Bloomsburg",
    "loser": "Ahmed El-Sokkary",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 11-4"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Gary Roberts",
    "winner_school": "New Mexico",
    "loser": "Dan Flood",
    "loser_school": "Wisconsin",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Kurt Howell",
    "winner_school": "Clemson",
    "loser": "Sal Profaci",
    "loser_school": "Central Connecticut",
    "result": "Dec 10-5"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Mark Burrell",
    "winner_school": "Central Missouri",
    "loser": "Christopher Toth",
    "loser_school": "American",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 425,
    "winner": "Adam DiSabato",
    "winner_school": "Ohio State",
    "loser": "Dave Kennedy",
    "loser_school": "Bloomsburg",
    "result": "Fall 2:56"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 426,
    "winner": "Gary Roberts",
    "winner_school": "New Mexico",
    "loser": "Brian Smith",
    "loser_school": "Michigan State",
    "result": "Dec 8-7"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 427,
    "winner": "Duaine Martin",
    "winner_school": "Northern Iowa",
    "loser": "Kurt Howell",
    "loser_school": "Clemson",
    "result": "Dec 12-9"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 428,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Mark Burrell",
    "loser_school": "Central Missouri",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Terry Brands",
    "winner_school": "Iowa",
    "loser": "Dan Knight",
    "loser_school": "Iowa State",
    "result": "MD 12-4"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Jason Kelber",
    "winner_school": "Nebraska",
    "loser": "Kendall Cross",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Adam DiSabato",
    "winner_school": "Ohio State",
    "loser": "Gary Roberts",
    "loser_school": "New Mexico",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Duaine Martin",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-10"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 503,
    "winner": "Dan Knight",
    "winner_school": "Iowa State",
    "loser": "Adam DiSabato",
    "loser_school": "Ohio State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 504,
    "winner": "Kendall Cross",
    "winner_school": "Oklahoma State",
    "loser": "Shawn Charles",
    "loser_school": "Arizona State",
    "result": "Dec 7-1"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Gary Roberts",
    "winner_school": "New Mexico",
    "loser": "Duaine Martin",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:47"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Adam DiSabato",
    "loser_school": "Ohio State",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Kendall Cross",
    "winner_school": "Oklahoma State",
    "loser": "Dan Knight",
    "loser_school": "Iowa State",
    "result": "MD 18-4"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Terry Brands",
    "winner_school": "Iowa",
    "loser": "Jason Kelber",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Tony Hunter",
    "winner_school": "Indiana",
    "loser": "Dennis DuChene",
    "loser_school": "Wisconsin-Parkside",
    "result": "Dec 8-7"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Dave Zuniga",
    "winner_school": "Minnesota",
    "loser": "Coley Turner",
    "loser_school": "Wyoming",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Lonnie Davis",
    "winner_school": "William & Mary",
    "loser": "Mike Kennedy",
    "loser_school": "Kent State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Mike Lingenfelter",
    "winner_school": "Lock Haven",
    "loser": "Wayne McMinn",
    "loser_school": "Arizona State",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Chris Owens",
    "winner_school": "Oklahoma State",
    "loser": "Gary Bendel",
    "loser_school": "Boston University",
    "result": "MD 18-9"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Chad Dubin",
    "winner_school": "Penn State",
    "loser": "Mike Hunter",
    "loser_school": "Ohio",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "Lyndon Campbell",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Rich Santana",
    "winner_school": "Syracuse",
    "loser": "Mike Moreno",
    "loser_school": "Iowa State",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Dave Zuniga",
    "winner_school": "Minnesota",
    "loser": "Chris Jones",
    "loser_school": "East Stroudsburg",
    "result": "Fall 2:58"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Dave Droegemueller",
    "winner_school": "Nebraska",
    "loser": "Audie Atienza",
    "loser_school": "Edinboro",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Joey Gilbert",
    "winner_school": "Michigan",
    "loser": "Jerry Hickey",
    "loser_school": "Southwest Missouri",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Tony Hunter",
    "winner_school": "Indiana",
    "loser": "Jon Pierro",
    "loser_school": "Fresno State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "Bret Gray",
    "loser_school": "Missouri",
    "result": "Fall 4:22"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "John Welch",
    "winner_school": "North Carolina",
    "loser": "Derrick Crenshaw",
    "loser_school": "Illinois",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Scott Kirsch",
    "winner_school": "George Mason",
    "loser": "Eric Childs",
    "loser_school": "Rider",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "T.J. Sewell",
    "winner_school": "Oklahoma",
    "loser": "Jason Shea",
    "loser_school": "Maryland",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Robert Tabarez",
    "winner_school": "Cal Poly",
    "loser": "Haig Brown",
    "loser_school": "Virginia State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Tony Reed",
    "winner_school": "Bloomsburg",
    "loser": "Clarence Arrington",
    "loser_school": "Chattanooga",
    "result": "Fall 2:20"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 253,
    "winner": "Coley Turner",
    "winner_school": "Wyoming",
    "loser": "Chris Jones",
    "loser_school": "East Stroudsburg",
    "result": "MD 10-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 1253,
    "winner": "Jon Pierro",
    "winner_school": "Fresno State",
    "loser": "Dennis DuChene",
    "loser_school": "Wisconsin-Parkside",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Mike Lingenfelter",
    "winner_school": "Lock Haven",
    "loser": "Lonnie Davis",
    "loser_school": "William & Mary",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Chris Owens",
    "winner_school": "Oklahoma State",
    "loser": "Chad Dubin",
    "loser_school": "Penn State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "Rich Santana",
    "loser_school": "Syracuse",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Dave Zuniga",
    "winner_school": "Minnesota",
    "loser": "Dave Droegemueller",
    "loser_school": "Nebraska",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Tony Hunter",
    "winner_school": "Indiana",
    "loser": "Joey Gilbert",
    "loser_school": "Michigan",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "John Welch",
    "loser_school": "North Carolina",
    "result": "TF 24-7 6:24"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "T.J. Sewell",
    "winner_school": "Oklahoma",
    "loser": "Scott Kirsch",
    "loser_school": "George Mason",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Robert Tabarez",
    "winner_school": "Cal Poly",
    "loser": "Tony Reed",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 277,
    "winner": "Wayne McMinn",
    "winner_school": "Arizona State",
    "loser": "Lonnie Davis",
    "loser_school": "William & Mary",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 278,
    "winner": "Gary Bendel",
    "winner_school": "Boston University",
    "loser": "Chad Dubin",
    "loser_school": "Penn State",
    "result": "Dec 10-8"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 279,
    "winner": "Rich Santana",
    "winner_school": "Syracuse",
    "loser": "Lyndon Campbell",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 280,
    "winner": "Dave Droegemueller",
    "winner_school": "Nebraska",
    "loser": "Coley Turner",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 281,
    "winner": "Joey Gilbert",
    "winner_school": "Michigan",
    "loser": "Jon Pierro",
    "loser_school": "Fresno State",
    "result": "MD 16-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 282,
    "winner": "John Welch",
    "winner_school": "North Carolina",
    "loser": "Bret Gray",
    "loser_school": "Missouri",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 283,
    "winner": "Scott Kirsch",
    "winner_school": "George Mason",
    "loser": "Jason Shea",
    "loser_school": "Maryland",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 284,
    "winner": "Haig Brown",
    "winner_school": "Virginia State",
    "loser": "Tony Reed",
    "loser_school": "Bloomsburg",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Chris Owens",
    "winner_school": "Oklahoma State",
    "loser": "Mike Lingenfelter",
    "loser_school": "Lock Haven",
    "result": "Dec 21-16"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Dave Zuniga",
    "winner_school": "Minnesota",
    "loser": "Mark Marinelli",
    "loser_school": "Ohio State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "Tony Hunter",
    "loser_school": "Indiana",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "T.J. Sewell",
    "winner_school": "Oklahoma",
    "loser": "Robert Tabarez",
    "loser_school": "Cal Poly",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Wayne McMinn",
    "winner_school": "Arizona State",
    "loser": "Gary Bendel",
    "loser_school": "Boston University",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Rich Santana",
    "winner_school": "Syracuse",
    "loser": "Dave Droegemueller",
    "loser_school": "Nebraska",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Joey Gilbert",
    "winner_school": "Michigan",
    "loser": "John Welch",
    "loser_school": "North Carolina",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Scott Kirsch",
    "winner_school": "George Mason",
    "loser": "Haig Brown",
    "loser_school": "Virginia State",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 429,
    "winner": "Wayne McMinn",
    "winner_school": "Arizona State",
    "loser": "Robert Tabarez",
    "loser_school": "Cal Poly",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 430,
    "winner": "Rich Santana",
    "winner_school": "Syracuse",
    "loser": "Tony Hunter",
    "loser_school": "Indiana",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 431,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "Joey Gilbert",
    "loser_school": "Michigan",
    "result": "Dec 12-7"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 432,
    "winner": "Scott Kirsch",
    "winner_school": "George Mason",
    "loser": "Mike Lingenfelter",
    "loser_school": "Lock Haven",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Dave Zuniga",
    "winner_school": "Minnesota",
    "loser": "Chris Owens",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-3"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "T.J. Sewell",
    "loser_school": "Oklahoma",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Wayne McMinn",
    "winner_school": "Arizona State",
    "loser": "Rich Santana",
    "loser_school": "Syracuse",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "Scott Kirsch",
    "loser_school": "George Mason",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 505,
    "winner": "Chris Owens",
    "winner_school": "Oklahoma State",
    "loser": "Wayne McMinn",
    "loser_school": "Arizona State",
    "result": "MD 13-5"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 506,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "T.J. Sewell",
    "loser_school": "Oklahoma",
    "result": "Dec 9-8"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 523,
    "winner": "Scott Kirsch",
    "winner_school": "George Mason",
    "loser": "Rich Santana",
    "loser_school": "Syracuse",
    "result": "Dec 5-1"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "T.J. Sewell",
    "winner_school": "Oklahoma",
    "loser": "Wayne McMinn",
    "loser_school": "Arizona State",
    "result": "Dec 7-4"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Chris Owens",
    "winner_school": "Oklahoma State",
    "loser": "Mark Marinelli",
    "loser_school": "Ohio State",
    "result": "Dec 12-11"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "Dave Zuniga",
    "loser_school": "Minnesota",
    "result": "Dec 9-7"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Steve Morris",
    "winner_school": "CSU Bakersfield",
    "loser": "Steve Hartle",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-5"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Mike Bevilacqua",
    "winner_school": "Penn State",
    "loser": "Warren Stewart",
    "loser_school": "Liberty",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Alan Utter",
    "loser_school": "Pittsburgh",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Scott Collins",
    "winner_school": "West Virginia",
    "loser": "Scott Glenn",
    "loser_school": "Oregon",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Bill Domasky",
    "winner_school": "Clemson",
    "loser": "Chuck Heise",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Pat Waters",
    "winner_school": "Cornell",
    "loser": "Brent Helkamp",
    "loser_school": "Drake",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Joe Reynolds",
    "winner_school": "Oklahoma",
    "loser": "Hugh Waddington",
    "loser_school": "Eastern Michigan",
    "result": "TF 16-1 5:35"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Jack Bell",
    "winner_school": "Slippery Rock",
    "loser": "John Dasta",
    "loser_school": "Clarion",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Steve Morris",
    "winner_school": "CSU Bakersfield",
    "loser": "Charlie Dotson",
    "loser_school": "New Mexico",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Darren Schulman",
    "winner_school": "Syracuse",
    "loser": "Steve Pitts",
    "loser_school": "VMI",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Chip Bunner",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Mike Bevilacqua",
    "winner_school": "Penn State",
    "loser": "Tim Rothka",
    "loser_school": "Drexel",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Thom Ortiz",
    "winner_school": "Arizona State",
    "loser": "John Beatty",
    "loser_school": "Augsburg",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Jon Kinchen",
    "winner_school": "Bloomsburg",
    "loser": "Mike DiSabato",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Jeff Lyons",
    "winner_school": "Indiana",
    "loser": "Rick Brzozinsky",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Pat Boyd",
    "winner_school": "Notre Dame",
    "loser": "R.C. Papa",
    "loser_school": "Maryland",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Paul Herrera",
    "winner_school": "Nebraska",
    "loser": "Thierry Chaney",
    "loser_school": "William & Mary",
    "result": "Fall 8:38 SV"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Pat Duthie",
    "winner_school": "Boston University",
    "loser": "Robbie Winter",
    "loser_school": "Brigham Young",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Scott Collins",
    "loser_school": "West Virginia",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Pat Waters",
    "winner_school": "Cornell",
    "loser": "Bill Domasky",
    "loser_school": "Clemson",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Joe Reynolds",
    "winner_school": "Oklahoma",
    "loser": "Jack Bell",
    "loser_school": "Slippery Rock",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Darren Schulman",
    "winner_school": "Syracuse",
    "loser": "Steve Morris",
    "loser_school": "CSU Bakersfield",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Mike Bevilacqua",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Thom Ortiz",
    "winner_school": "Arizona State",
    "loser": "Jon Kinchen",
    "loser_school": "Bloomsburg",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Jeff Lyons",
    "winner_school": "Indiana",
    "loser": "Pat Boyd",
    "loser_school": "Notre Dame",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Paul Herrera",
    "winner_school": "Nebraska",
    "loser": "Pat Duthie",
    "loser_school": "Boston University",
    "result": "MD 15-2"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 285,
    "winner": "Scott Collins",
    "winner_school": "West Virginia",
    "loser": "Alan Utter",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-0"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 286,
    "winner": "Bill Domasky",
    "winner_school": "Clemson",
    "loser": "Brent Helkamp",
    "loser_school": "Drake",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 287,
    "winner": "Jack Bell",
    "winner_school": "Slippery Rock",
    "loser": "Hugh Waddington",
    "loser_school": "Eastern Michigan",
    "result": "MD 14-4"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 288,
    "winner": "Steve Morris",
    "winner_school": "CSU Bakersfield",
    "loser": "Steve Pitts",
    "loser_school": "VMI",
    "result": "Dec 4-0"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 289,
    "winner": "Mike Bevilacqua",
    "winner_school": "Penn State",
    "loser": "Chip Bunner",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 290,
    "winner": "Jon Kinchen",
    "winner_school": "Bloomsburg",
    "loser": "John Beatty",
    "loser_school": "Augsburg",
    "result": "Dec 9-8"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 291,
    "winner": "Rick Brzozinsky",
    "winner_school": "Virginia",
    "loser": "Pat Boyd",
    "loser_school": "Notre Dame",
    "result": "Dec 2-0"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 292,
    "winner": "Thierry Chaney",
    "winner_school": "William & Mary",
    "loser": "Pat Duthie",
    "loser_school": "Boston University",
    "result": "Fall 0:52"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Pat Waters",
    "winner_school": "Cornell",
    "loser": "Chuck Barbee",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Joe Reynolds",
    "winner_school": "Oklahoma",
    "loser": "Darren Schulman",
    "loser_school": "Syracuse",
    "result": "MD 19-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Thom Ortiz",
    "winner_school": "Arizona State",
    "loser": "Troy Steiner",
    "loser_school": "Iowa",
    "result": "Fall 1:41"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Jeff Lyons",
    "winner_school": "Indiana",
    "loser": "Paul Herrera",
    "loser_school": "Nebraska",
    "result": "MD 13-4"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Bill Domasky",
    "winner_school": "Clemson",
    "loser": "Scott Collins",
    "loser_school": "West Virginia",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Steve Morris",
    "winner_school": "CSU Bakersfield",
    "loser": "Jack Bell",
    "loser_school": "Slippery Rock",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Jon Kinchen",
    "winner_school": "Bloomsburg",
    "loser": "Mike Bevilacqua",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Thierry Chaney",
    "winner_school": "William & Mary",
    "loser": "Rick Brzozinsky",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 433,
    "winner": "Paul Herrera",
    "winner_school": "Nebraska",
    "loser": "Bill Domasky",
    "loser_school": "Clemson",
    "result": "MD 11-1"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 434,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Steve Morris",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-0"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 435,
    "winner": "Darren Schulman",
    "winner_school": "Syracuse",
    "loser": "Jon Kinchen",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-6"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 436,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Thierry Chaney",
    "loser_school": "William & Mary",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Joe Reynolds",
    "winner_school": "Oklahoma",
    "loser": "Pat Waters",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Thom Ortiz",
    "winner_school": "Arizona State",
    "loser": "Jeff Lyons",
    "loser_school": "Indiana",
    "result": "Dec 7-1"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Paul Herrera",
    "loser_school": "Nebraska",
    "result": "MD 16-6"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Darren Schulman",
    "loser_school": "Syracuse",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 507,
    "winner": "Pat Waters",
    "winner_school": "Cornell",
    "loser": "Troy Steiner",
    "loser_school": "Iowa",
    "result": "MD 10-1"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 508,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Lyons",
    "loser_school": "Indiana",
    "result": "MD 14-5"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Paul Herrera",
    "winner_school": "Nebraska",
    "loser": "Darren Schulman",
    "loser_school": "Syracuse",
    "result": "Dec 4-1"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Jeff Lyons",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Pat Waters",
    "loser_school": "Cornell",
    "result": "MD 10-0"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Joe Reynolds",
    "winner_school": "Oklahoma",
    "loser": "Thom Ortiz",
    "loser_school": "Arizona State",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Travis West",
    "winner_school": "Portland State",
    "loser": "Buzz Wincheski",
    "loser_school": "William & Mary",
    "result": "Dec 7-5"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Doug Streicher",
    "winner_school": "Iowa",
    "loser": "Chance Leonard",
    "loser_school": "Oklahoma",
    "result": "Fall 0:43"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Terry Murphy",
    "winner_school": "Eastern Illinois",
    "loser": "Steve Cesari",
    "loser_school": "NC State",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 3005,
    "winner": "Tim Wittman",
    "winner_school": "Penn State",
    "loser": "Shawn Voigt",
    "loser_school": "Cornell Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Matt Demaray",
    "winner_school": "Wisconsin",
    "loser": "Tom Kuntzleman",
    "loser_school": "Bloomsburg",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Torrae Jackson",
    "winner_school": "Iowa State",
    "loser": "Dirk Cole",
    "loser_school": "West Virginia",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Todd Chesbro",
    "winner_school": "Oklahoma State",
    "loser": "Nels Nelson",
    "loser_school": "Boise State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Tim Wittman",
    "winner_school": "Penn State",
    "loser": "Terry Watts",
    "loser_school": "Cal Poly",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Junior Saunders",
    "winner_school": "Arizona State",
    "loser": "Rick Lynch",
    "loser_school": "Boston University",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Greg Warren",
    "winner_school": "Missouri",
    "loser": "Tobin Roitsch",
    "loser_school": "Wyoming",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Travis West",
    "winner_school": "Portland State",
    "loser": "Kyle Mayse",
    "loser_school": "Ohio",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Gary Steffensmeier",
    "winner_school": "Northern Iowa",
    "loser": "Keith Venanzi",
    "loser_school": "Maryland",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Tedon Fleischman",
    "winner_school": "New Mexico",
    "loser": "Joe Guciardo",
    "loser_school": "Cornell",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Terry Murphy",
    "winner_school": "Eastern Illinois",
    "loser": "Mike Schroat",
    "loser_school": "Wilkes",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Adrian Hines",
    "winner_school": "Appalachian State",
    "loser": "Mike Bartholomew",
    "loser_school": "Rider",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Brian Dolph",
    "winner_school": "Indiana",
    "loser": "Darren Anthony",
    "loser_school": "George Mason",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Doug Streicher",
    "winner_school": "Iowa",
    "loser": "Brian Burk",
    "loser_school": "Clarion",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Tim Tusick",
    "winner_school": "Kent State",
    "loser": "Todd Enger",
    "loser_school": "Nebraska",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Richard Bailey",
    "winner_school": "CSU Bakersfield",
    "loser": "Dean Moscovic",
    "loser_school": "North Carolina",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "T.C. Dantzler",
    "winner_school": "Northern Illinois",
    "loser": "Nick Lieb",
    "loser_school": "Ohio State",
    "result": "MD 18-9"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 255,
    "winner": "Shawn Voigt",
    "winner_school": "Cornell Iowa",
    "loser": "Terry Watts",
    "loser_school": "Cal Poly",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 1255,
    "winner": "Brian Burk",
    "winner_school": "Clarion",
    "loser": "Chance Leonard",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Matt Demaray",
    "winner_school": "Wisconsin",
    "loser": "Torrae Jackson",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Tim Wittman",
    "winner_school": "Penn State",
    "loser": "Todd Chesbro",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Junior Saunders",
    "winner_school": "Arizona State",
    "loser": "Greg Warren",
    "loser_school": "Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Gary Steffensmeier",
    "winner_school": "Northern Iowa",
    "loser": "Travis West",
    "loser_school": "Portland State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Tedon Fleischman",
    "winner_school": "New Mexico",
    "loser": "Terry Murphy",
    "loser_school": "Eastern Illinois",
    "result": "TF 19-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Brian Dolph",
    "winner_school": "Indiana",
    "loser": "Adrian Hines",
    "loser_school": "Appalachian State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Doug Streicher",
    "winner_school": "Iowa",
    "loser": "Tim Tusick",
    "loser_school": "Kent State",
    "result": "Fall 3:57"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Richard Bailey",
    "winner_school": "CSU Bakersfield",
    "loser": "T.C. Dantzler",
    "loser_school": "Northern Illinois",
    "result": "MD 18-4"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 293,
    "winner": "Torrae Jackson",
    "winner_school": "Iowa State",
    "loser": "Tom Kuntzleman",
    "loser_school": "Bloomsburg",
    "result": "Dec 11-7"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 294,
    "winner": "Todd Chesbro",
    "winner_school": "Oklahoma State",
    "loser": "Shawn Voigt",
    "loser_school": "Cornell Iowa",
    "result": "Fall 1:07"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 295,
    "winner": "Greg Warren",
    "winner_school": "Missouri",
    "loser": "Rick Lynch",
    "loser_school": "Boston University",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 296,
    "winner": "Travis West",
    "winner_school": "Portland State",
    "loser": "Keith Venanzi",
    "loser_school": "Maryland",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 297,
    "winner": "Joe Guciardo",
    "winner_school": "Cornell",
    "loser": "Terry Murphy",
    "loser_school": "Eastern Illinois",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 298,
    "winner": "Darren Anthony",
    "winner_school": "George Mason",
    "loser": "Adrian Hines",
    "loser_school": "Appalachian State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 299,
    "winner": "Brian Burk",
    "winner_school": "Clarion",
    "loser": "Tim Tusick",
    "loser_school": "Kent State",
    "result": "Dec 8-5"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 300,
    "winner": "Dean Moscovic",
    "winner_school": "North Carolina",
    "loser": "T.C. Dantzler",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Tim Wittman",
    "winner_school": "Penn State",
    "loser": "Matt Demaray",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Gary Steffensmeier",
    "winner_school": "Northern Iowa",
    "loser": "Junior Saunders",
    "loser_school": "Arizona State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Brian Dolph",
    "winner_school": "Indiana",
    "loser": "Tedon Fleischman",
    "loser_school": "New Mexico",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Richard Bailey",
    "winner_school": "CSU Bakersfield",
    "loser": "Doug Streicher",
    "loser_school": "Iowa",
    "result": "Dec 11-4"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Todd Chesbro",
    "winner_school": "Oklahoma State",
    "loser": "Torrae Jackson",
    "loser_school": "Iowa State",
    "result": "MD 14-3"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Greg Warren",
    "winner_school": "Missouri",
    "loser": "Travis West",
    "loser_school": "Portland State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Joe Guciardo",
    "winner_school": "Cornell",
    "loser": "Darren Anthony",
    "loser_school": "George Mason",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Brian Burk",
    "winner_school": "Clarion",
    "loser": "Dean Moscovic",
    "loser_school": "North Carolina",
    "result": "Fall 5:23"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 437,
    "winner": "Doug Streicher",
    "winner_school": "Iowa",
    "loser": "Todd Chesbro",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 438,
    "winner": "Tedon Fleischman",
    "winner_school": "New Mexico",
    "loser": "Greg Warren",
    "loser_school": "Missouri",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 439,
    "winner": "Junior Saunders",
    "winner_school": "Arizona State",
    "loser": "Joe Guciardo",
    "loser_school": "Cornell",
    "result": "MD 10-1"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 440,
    "winner": "Matt Demaray",
    "winner_school": "Wisconsin",
    "loser": "Brian Burk",
    "loser_school": "Clarion",
    "result": "MD 10-1"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Gary Steffensmeier",
    "winner_school": "Northern Iowa",
    "loser": "Tim Wittman",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Brian Dolph",
    "winner_school": "Indiana",
    "loser": "Richard Bailey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Doug Streicher",
    "winner_school": "Iowa",
    "loser": "Tedon Fleischman",
    "loser_school": "New Mexico",
    "result": "Fall 1:02"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Junior Saunders",
    "winner_school": "Arizona State",
    "loser": "Matt Demaray",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 509,
    "winner": "Tim Wittman",
    "winner_school": "Penn State",
    "loser": "Doug Streicher",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 510,
    "winner": "Junior Saunders",
    "winner_school": "Arizona State",
    "loser": "Richard Bailey",
    "loser_school": "CSU Bakersfield",
    "result": "MD 12-2"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Matt Demaray",
    "winner_school": "Wisconsin",
    "loser": "Tedon Fleischman",
    "loser_school": "New Mexico",
    "result": "Dec 6-0"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Richard Bailey",
    "winner_school": "CSU Bakersfield",
    "loser": "Doug Streicher",
    "loser_school": "Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Junior Saunders",
    "winner_school": "Arizona State",
    "loser": "Tim Wittman",
    "loser_school": "Penn State",
    "result": "Fall 5:14"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Brian Dolph",
    "winner_school": "Indiana",
    "loser": "Gary Steffensmeier",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Wade Zimmerman",
    "winner_school": "Fresno State",
    "loser": "Brandon Dennington",
    "loser_school": "Oklahoma",
    "result": "Dec 7-1 TB"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Roy Hall",
    "winner_school": "Michigan State",
    "loser": "Jim Marcotte",
    "loser_school": "New Hampshire",
    "result": "MD 16-5"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Marty Collins",
    "winner_school": "Kent State",
    "loser": "Brian Chambers",
    "loser_school": "Marquette",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Larry Gotcher",
    "winner_school": "Michigan",
    "loser": "Merrel Neal",
    "loser_school": "Wilkes",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Jeff McAllister",
    "winner_school": "CSU Bakersfield",
    "loser": "Dave Walter",
    "loser_school": "Purdue",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Dave Onorato",
    "winner_school": "West Virginia",
    "loser": "Paul Marshall",
    "loser_school": "Miami Ohio",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Dan Russell",
    "winner_school": "Portland State",
    "loser": "Marty Collins",
    "loser_school": "Kent State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Michael Murray",
    "winner_school": "VMI",
    "loser": "Butch Padamonsky",
    "loser_school": "Hofstra",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Pete Welch",
    "loser_school": "North Carolina",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Wade Zimmerman",
    "winner_school": "Fresno State",
    "loser": "Matt Peters",
    "loser_school": "Cleveland State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Chauncy Wynn",
    "winner_school": "Morgan State",
    "loser": "Steve Lander",
    "loser_school": "Oregon State",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Toby Willis",
    "winner_school": "Northwestern",
    "loser": "Rocky Urso",
    "loser_school": "Central Connecticut",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Steve Hamilton",
    "winner_school": "Iowa State",
    "loser": "Roy Hall",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Scott Buckiso",
    "winner_school": "Maryland",
    "loser": "Howard Curtis",
    "loser_school": "George Mason",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Ray Miller",
    "winner_school": "Arizona State",
    "loser": "Nick Mauldin",
    "loser_school": "Army",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Jim Pearson",
    "winner_school": "Indiana",
    "loser": "Tim Briggs",
    "loser_school": "North Dakota",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Jeff Karam",
    "winner_school": "Lock Haven",
    "loser": "Dave Myers",
    "loser_school": "Wyoming",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Scott Schleicher",
    "winner_school": "Navy",
    "loser": "Jamie Byrne",
    "loser_school": "Northern Iowa",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "John Yankanich",
    "winner_school": "Penn State",
    "loser": "Steve Kinard",
    "loser_school": "NC State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Jeff McAllister",
    "winner_school": "CSU Bakersfield",
    "loser": "Larry Gotcher",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Dan Russell",
    "winner_school": "Portland State",
    "loser": "Dave Onorato",
    "loser_school": "West Virginia",
    "result": "Fall 2:48"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Michael Murray",
    "loser_school": "VMI",
    "result": "Fall 4:42"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Chauncy Wynn",
    "winner_school": "Morgan State",
    "loser": "Wade Zimmerman",
    "loser_school": "Fresno State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Steve Hamilton",
    "winner_school": "Iowa State",
    "loser": "Toby Willis",
    "loser_school": "Northwestern",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Ray Miller",
    "winner_school": "Arizona State",
    "loser": "Scott Buckiso",
    "loser_school": "Maryland",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Jim Pearson",
    "winner_school": "Indiana",
    "loser": "Jeff Karam",
    "loser_school": "Lock Haven",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Scott Schleicher",
    "winner_school": "Navy",
    "loser": "John Yankanich",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 301,
    "winner": "Dave Walter",
    "winner_school": "Purdue",
    "loser": "Larry Gotcher",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 302,
    "winner": "Marty Collins",
    "winner_school": "Kent State",
    "loser": "Dave Onorato",
    "loser_school": "West Virginia",
    "result": "Fall 3:16"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 303,
    "winner": "Pete Welch",
    "winner_school": "North Carolina",
    "loser": "Michael Murray",
    "loser_school": "VMI",
    "result": "Fall 2:36"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 304,
    "winner": "Wade Zimmerman",
    "winner_school": "Fresno State",
    "loser": "Steve Lander",
    "loser_school": "Oregon State",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 305,
    "winner": "Roy Hall",
    "winner_school": "Michigan State",
    "loser": "Toby Willis",
    "loser_school": "Northwestern",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 306,
    "winner": "Scott Buckiso",
    "winner_school": "Maryland",
    "loser": "Nick Mauldin",
    "loser_school": "Army",
    "result": "MD 14-1"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 307,
    "winner": "Jeff Karam",
    "winner_school": "Lock Haven",
    "loser": "Tim Briggs",
    "loser_school": "North Dakota",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 308,
    "winner": "John Yankanich",
    "winner_school": "Penn State",
    "loser": "Jamie Byrne",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Dan Russell",
    "winner_school": "Portland State",
    "loser": "Jeff McAllister",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Chauncy Wynn",
    "loser_school": "Morgan State",
    "result": "MD 16-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Steve Hamilton",
    "winner_school": "Iowa State",
    "loser": "Ray Miller",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Scott Schleicher",
    "winner_school": "Navy",
    "loser": "Jim Pearson",
    "loser_school": "Indiana",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Dave Walter",
    "winner_school": "Purdue",
    "loser": "Marty Collins",
    "loser_school": "Kent State",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Pete Welch",
    "winner_school": "North Carolina",
    "loser": "Wade Zimmerman",
    "loser_school": "Fresno State",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Scott Buckiso",
    "winner_school": "Maryland",
    "loser": "Roy Hall",
    "loser_school": "Michigan State",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Jeff Karam",
    "winner_school": "Lock Haven",
    "loser": "John Yankanich",
    "loser_school": "Penn State",
    "result": "Dec 8-5"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 441,
    "winner": "Dave Walter",
    "winner_school": "Purdue",
    "loser": "Jim Pearson",
    "loser_school": "Indiana",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 442,
    "winner": "Ray Miller",
    "winner_school": "Arizona State",
    "loser": "Pete Welch",
    "loser_school": "North Carolina",
    "result": "MD 12-0"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 443,
    "winner": "Chauncy Wynn",
    "winner_school": "Morgan State",
    "loser": "Scott Buckiso",
    "loser_school": "Maryland",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 444,
    "winner": "Jeff McAllister",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeff Karam",
    "loser_school": "Lock Haven",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Dan Russell",
    "loser_school": "Portland State",
    "result": "MD 16-7"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Scott Schleicher",
    "winner_school": "Navy",
    "loser": "Steve Hamilton",
    "loser_school": "Iowa State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Ray Miller",
    "winner_school": "Arizona State",
    "loser": "Dave Walter",
    "loser_school": "Purdue",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Chauncy Wynn",
    "winner_school": "Morgan State",
    "loser": "Jeff McAllister",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 2:28"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 511,
    "winner": "Dan Russell",
    "winner_school": "Portland State",
    "loser": "Ray Miller",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 512,
    "winner": "Steve Hamilton",
    "winner_school": "Iowa State",
    "loser": "Chauncy Wynn",
    "loser_school": "Morgan State",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "Jeff McAllister",
    "winner_school": "CSU Bakersfield",
    "loser": "Dave Walter",
    "loser_school": "Purdue",
    "result": "Dec 2-1"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Ray Miller",
    "winner_school": "Arizona State",
    "loser": "Chauncy Wynn",
    "loser_school": "Morgan State",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Steve Hamilton",
    "winner_school": "Iowa State",
    "loser": "Dan Russell",
    "loser_school": "Portland State",
    "result": "Dec 10-5"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Scott Schleicher",
    "loser_school": "Navy",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Matt Caro",
    "loser_school": "Maryland",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Mark Voloshin",
    "winner_school": "Wyoming",
    "loser": "Matt Johnson",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Steve Buddie",
    "winner_school": "Stanford",
    "loser": "Ed Dewald",
    "loser_school": "Navy",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Robbie Hadden",
    "winner_school": "Oklahoma State",
    "loser": "Ted Price",
    "loser_school": "Wisconsin-Parkside",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Jeff Ansted",
    "winner_school": "Toledo",
    "loser": "Craig Holiday",
    "loser_school": "Liberty",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Scott Chenoweth",
    "winner_school": "Nebraska",
    "loser": "Dave Miller",
    "loser_school": "Clemson",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Dan St. John",
    "winner_school": "Arizona State",
    "loser": "Troy Gardner",
    "loser_school": "Lycoming",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Jason Suter",
    "winner_school": "Penn State",
    "loser": "Frank Ryan",
    "loser_school": "Syracuse",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Bryan Flint",
    "winner_school": "Chattanooga",
    "loser": "Eric Unger",
    "loser_school": "Slippery Rock",
    "result": "Dec 6-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "John Kohls",
    "winner_school": "Brigham Young",
    "loser": "Justin Spewock",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Brad Traviolia",
    "winner_school": "Northwestern",
    "loser": "Frank Zelinsky",
    "loser_school": "Edinboro",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Jim Putnam",
    "winner_school": "Boise State",
    "loser": "Greg White",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Tom Marchetti",
    "winner_school": "Bucknell",
    "loser": "Jay Weiss",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Mark Gerardi",
    "winner_school": "Notre Dame",
    "loser": "Tom Socker",
    "loser_school": "Bloomsburg",
    "result": "Dec 15-9"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Mark Banks",
    "winner_school": "West Virginia",
    "loser": "Steve Williams",
    "loser_school": "NC State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Casey Graham",
    "winner_school": "Indiana",
    "loser": "Mike Gibbons",
    "loser_school": "Central Connecticut",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Mark Voloshin",
    "loser_school": "Wyoming",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Steve Buddie",
    "winner_school": "Stanford",
    "loser": "Robbie Hadden",
    "loser_school": "Oklahoma State",
    "result": "Fall 6:27"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Scott Chenoweth",
    "winner_school": "Nebraska",
    "loser": "Jeff Ansted",
    "loser_school": "Toledo",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Dan St. John",
    "winner_school": "Arizona State",
    "loser": "Jason Suter",
    "loser_school": "Penn State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "John Kohls",
    "winner_school": "Brigham Young",
    "loser": "Bryan Flint",
    "loser_school": "Chattanooga",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Brad Traviolia",
    "winner_school": "Northwestern",
    "loser": "Jim Putnam",
    "loser_school": "Boise State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Tom Marchetti",
    "winner_school": "Bucknell",
    "loser": "Mark Gerardi",
    "loser_school": "Notre Dame",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Mark Banks",
    "winner_school": "West Virginia",
    "loser": "Casey Graham",
    "loser_school": "Indiana",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 309,
    "winner": "Mark Voloshin",
    "winner_school": "Wyoming",
    "loser": "Matt Caro",
    "loser_school": "Maryland",
    "result": "MD 13-4"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 310,
    "winner": "Robbie Hadden",
    "winner_school": "Oklahoma State",
    "loser": "Ed Dewald",
    "loser_school": "Navy",
    "result": "MD 15-5"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 311,
    "winner": "Jeff Ansted",
    "winner_school": "Toledo",
    "loser": "Dave Miller",
    "loser_school": "Clemson",
    "result": "Dec 10-7"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 312,
    "winner": "Jason Suter",
    "winner_school": "Penn State",
    "loser": "Troy Gardner",
    "loser_school": "Lycoming",
    "result": "Fall 3:04"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 313,
    "winner": "Justin Spewock",
    "winner_school": "Michigan",
    "loser": "Bryan Flint",
    "loser_school": "Chattanooga",
    "result": "Dec 8-6"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 314,
    "winner": "Frank Zelinsky",
    "winner_school": "Edinboro",
    "loser": "Jim Putnam",
    "loser_school": "Boise State",
    "result": "Dec 8-6"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 315,
    "winner": "Mark Gerardi",
    "winner_school": "Notre Dame",
    "loser": "Jay Weiss",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 316,
    "winner": "Casey Graham",
    "winner_school": "Indiana",
    "loser": "Steve Williams",
    "loser_school": "NC State",
    "result": "Fall 0:35"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Steve Buddie",
    "winner_school": "Stanford",
    "loser": "Bart Chelesvig",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Dan St. John",
    "winner_school": "Arizona State",
    "loser": "Scott Chenoweth",
    "loser_school": "Nebraska",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Brad Traviolia",
    "winner_school": "Northwestern",
    "loser": "John Kohls",
    "loser_school": "Brigham Young",
    "result": "Dec 9-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Mark Banks",
    "winner_school": "West Virginia",
    "loser": "Tom Marchetti",
    "loser_school": "Bucknell",
    "result": "MD 11-3"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Robbie Hadden",
    "winner_school": "Oklahoma State",
    "loser": "Mark Voloshin",
    "loser_school": "Wyoming",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Jason Suter",
    "winner_school": "Penn State",
    "loser": "Jeff Ansted",
    "loser_school": "Toledo",
    "result": "MD 12-3"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Frank Zelinsky",
    "winner_school": "Edinboro",
    "loser": "Justin Spewock",
    "loser_school": "Michigan",
    "result": "Fall 3:40"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Casey Graham",
    "winner_school": "Indiana",
    "loser": "Mark Gerardi",
    "loser_school": "Notre Dame",
    "result": "Dec 8-1"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 445,
    "winner": "Robbie Hadden",
    "winner_school": "Oklahoma State",
    "loser": "Tom Marchetti",
    "loser_school": "Bucknell",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 446,
    "winner": "Jason Suter",
    "winner_school": "Penn State",
    "loser": "John Kohls",
    "loser_school": "Brigham Young",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 447,
    "winner": "Scott Chenoweth",
    "winner_school": "Nebraska",
    "loser": "Frank Zelinsky",
    "loser_school": "Edinboro",
    "result": "Dec 9-2"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 448,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Casey Graham",
    "loser_school": "Indiana",
    "result": "Dec 13-8"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Dan St. John",
    "winner_school": "Arizona State",
    "loser": "Steve Buddie",
    "loser_school": "Stanford",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Brad Traviolia",
    "winner_school": "Northwestern",
    "loser": "Mark Banks",
    "loser_school": "West Virginia",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Robbie Hadden",
    "winner_school": "Oklahoma State",
    "loser": "Jason Suter",
    "loser_school": "Penn State",
    "result": "Dec 9-6"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Scott Chenoweth",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 513,
    "winner": "Steve Buddie",
    "winner_school": "Stanford",
    "loser": "Robbie Hadden",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:34"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 514,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Mark Banks",
    "loser_school": "West Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "Scott Chenoweth",
    "winner_school": "Nebraska",
    "loser": "Jason Suter",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Mark Banks",
    "winner_school": "West Virginia",
    "loser": "Robbie Hadden",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Steve Buddie",
    "loser_school": "Stanford",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Dan St. John",
    "winner_school": "Arizona State",
    "loser": "Brad Traviolia",
    "loser_school": "Northwestern",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Ben Oberly",
    "winner_school": "North Carolina",
    "loser": "Joe Madonia",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-6"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Mark Cheff",
    "winner_school": "CSU Bakersfield",
    "loser": "Bill Barrow",
    "loser_school": "Army",
    "result": "Dec 6-5"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 2008,
    "winner": "Bret Gustafson",
    "winner_school": "Chattanooga",
    "loser": "Mitch Mansfield",
    "loser_school": "Boise State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Dominick Black",
    "winner_school": "West Virginia",
    "loser": "G.T. Taylor",
    "loser_school": "Arizona State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Steve Cantrell",
    "winner_school": "Navy",
    "loser": "Kevin Vogel",
    "loser_school": "Central Michigan",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Rob Larmore",
    "winner_school": "William & Mary",
    "loser": "Dan Ritchie",
    "loser_school": "Ohio State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Adam Mariano",
    "winner_school": "Penn State",
    "loser": "Bret Gustafson",
    "loser_school": "Chattanooga",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Mike McHenry",
    "winner_school": "Purdue",
    "loser": "Brad Knouse",
    "loser_school": "Iowa State",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "John Hangey",
    "winner_school": "Rider",
    "loser": "Curt Strahm",
    "loser_school": "Oregon",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Ben Oberly",
    "winner_school": "North Carolina",
    "loser": "Rod Fisher",
    "loser_school": "Liberty",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Chris Barnes",
    "winner_school": "Oklahoma State",
    "loser": "Keith Girvan",
    "loser_school": "Duke",
    "result": "Fall 6:31"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Corey Olson",
    "winner_school": "Nebraska",
    "loser": "Peter Huntley",
    "loser_school": "Old Dominion",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Larry Kaifesh",
    "winner_school": "Indiana",
    "loser": "Mark Cheff",
    "loser_school": "CSU Bakersfield",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "Corey Veach",
    "loser_school": "Brigham Young",
    "result": "TF 21-6 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Joe Wypiszenski",
    "winner_school": "Nebraska-Omaha",
    "loser": "Keith Davison",
    "loser_school": "Wisconsin",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Mike Lantz",
    "winner_school": "NC State",
    "loser": "Mark Frushone",
    "loser_school": "Central Connecticut",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Steve Medina",
    "loser_school": "New Mexico",
    "result": "Fall 6:39"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Dale Budd",
    "loser_school": "Lock Haven",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Scott Brown",
    "winner_school": "Bloomsburg",
    "loser": "Kyle Scrimgeour",
    "loser_school": "Oklahoma",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Dominick Black",
    "winner_school": "West Virginia",
    "loser": "Steve Cantrell",
    "loser_school": "Navy",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Rob Larmore",
    "winner_school": "William & Mary",
    "loser": "Adam Mariano",
    "loser_school": "Penn State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "John Hangey",
    "winner_school": "Rider",
    "loser": "Mike McHenry",
    "loser_school": "Purdue",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Chris Barnes",
    "winner_school": "Oklahoma State",
    "loser": "Ben Oberly",
    "loser_school": "North Carolina",
    "result": "TF 19-4 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Corey Olson",
    "winner_school": "Nebraska",
    "loser": "Larry Kaifesh",
    "loser_school": "Indiana",
    "result": "Fall 3:41"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "Joe Wypiszenski",
    "loser_school": "Nebraska-Omaha",
    "result": "MD 17-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Mike Lantz",
    "loser_school": "NC State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Scott Brown",
    "winner_school": "Bloomsburg",
    "loser": "Rich Powers",
    "loser_school": "Northern Iowa",
    "result": "Dec 14-10"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 317,
    "winner": "G.T. Taylor",
    "winner_school": "Arizona State",
    "loser": "Steve Cantrell",
    "loser_school": "Navy",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 318,
    "winner": "Dan Ritchie",
    "winner_school": "Ohio State",
    "loser": "Adam Mariano",
    "loser_school": "Penn State",
    "result": "MD 11-3"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 319,
    "winner": "Curt Strahm",
    "winner_school": "Oregon",
    "loser": "Mike McHenry",
    "loser_school": "Purdue",
    "result": "M FOR"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 320,
    "winner": "Ben Oberly",
    "winner_school": "North Carolina",
    "loser": "Keith Girvan",
    "loser_school": "Duke",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 321,
    "winner": "Larry Kaifesh",
    "winner_school": "Indiana",
    "loser": "Peter Huntley",
    "loser_school": "Old Dominion",
    "result": "Fall 1:59"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 322,
    "winner": "Joe Wypiszenski",
    "winner_school": "Nebraska-Omaha",
    "loser": "Corey Veach",
    "loser_school": "Brigham Young",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 323,
    "winner": "Mike Lantz",
    "winner_school": "NC State",
    "loser": "Steve Medina",
    "loser_school": "New Mexico",
    "result": "MD 16-2"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 324,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Kyle Scrimgeour",
    "loser_school": "Oklahoma",
    "result": "Fall 0:21"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Rob Larmore",
    "winner_school": "William & Mary",
    "loser": "Dominick Black",
    "loser_school": "West Virginia",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Chris Barnes",
    "winner_school": "Oklahoma State",
    "loser": "John Hangey",
    "loser_school": "Rider",
    "result": "TF 22-7 7:00"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "Corey Olson",
    "loser_school": "Nebraska",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Scott Brown",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "G.T. Taylor",
    "winner_school": "Arizona State",
    "loser": "Dan Ritchie",
    "loser_school": "Ohio State",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Curt Strahm",
    "winner_school": "Oregon",
    "loser": "Ben Oberly",
    "loser_school": "North Carolina",
    "result": "Fall 5:44"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Joe Wypiszenski",
    "winner_school": "Nebraska-Omaha",
    "loser": "Larry Kaifesh",
    "loser_school": "Indiana",
    "result": "Fall 0:56"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Mike Lantz",
    "loser_school": "NC State",
    "result": "Dec 10-4"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 449,
    "winner": "G.T. Taylor",
    "winner_school": "Arizona State",
    "loser": "Scott Brown",
    "loser_school": "Bloomsburg",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 450,
    "winner": "Corey Olson",
    "winner_school": "Nebraska",
    "loser": "Curt Strahm",
    "loser_school": "Oregon",
    "result": "Fall 1:25"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 451,
    "winner": "Joe Wypiszenski",
    "winner_school": "Nebraska-Omaha",
    "loser": "John Hangey",
    "loser_school": "Rider",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 452,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Dominick Black",
    "loser_school": "West Virginia",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Chris Barnes",
    "winner_school": "Oklahoma State",
    "loser": "Rob Larmore",
    "loser_school": "William & Mary",
    "result": "Dec 14-8"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "Mike Funk",
    "loser_school": "Northwestern",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Corey Olson",
    "winner_school": "Nebraska",
    "loser": "G.T. Taylor",
    "loser_school": "Arizona State",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Joe Wypiszenski",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 515,
    "winner": "Corey Olson",
    "winner_school": "Nebraska",
    "loser": "Rob Larmore",
    "loser_school": "William & Mary",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 516,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Rich Powers",
    "loser_school": "Northern Iowa",
    "result": "MD 14-6"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "G.T. Taylor",
    "winner_school": "Arizona State",
    "loser": "Joe Wypiszenski",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Rob Larmore",
    "loser_school": "William & Mary",
    "result": "Dec 8-3"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Corey Olson",
    "winner_school": "Nebraska",
    "loser": "Mike Funk",
    "loser_school": "Northwestern",
    "result": "Fall 5:28"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Chris Barnes",
    "winner_school": "Oklahoma State",
    "loser": "Marty Morgan",
    "loser_school": "Minnesota",
    "result": "MD 10-2"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Joe Stafford",
    "winner_school": "Oklahoma",
    "loser": "Mark Willis",
    "loser_school": "Brigham Young",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "Jeff Ellis",
    "winner_school": "Penn State",
    "loser": "Kevin Brown",
    "loser_school": "Maryland",
    "result": "Dec 12-5"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 2009,
    "winner": "Randy Couture",
    "winner_school": "Oklahoma State",
    "loser": "Mark Zenas",
    "loser_school": "Michigan State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Brad Weber",
    "winner_school": "Duke",
    "loser": "Ted Casto",
    "loser_school": "Brown",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Chris Nelson",
    "winner_school": "Nebraska",
    "loser": "Ray Roso",
    "loser_school": "Fresno State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Fritz Lehrke",
    "winner_school": "Michigan",
    "loser": "Ty Williams",
    "loser_school": "NC State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Randy Couture",
    "winner_school": "Oklahoma State",
    "loser": "Bryan Burns",
    "loser_school": "Bucknell",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Paul Keysaw",
    "winner_school": "CSU Bakersfield",
    "loser": "Dave Raby",
    "loser_school": "Navy",
    "result": "Fall 6:13"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Steven Sciandra",
    "winner_school": "Old Dominion",
    "loser": "Greg Pulskamp",
    "loser_school": "Boston College",
    "result": "M FOR"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Hamilton Munnell",
    "winner_school": "Miami Ohio",
    "loser": "Jeff Ellis",
    "loser_school": "Penn State",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Matt Ruppel",
    "winner_school": "Lehigh",
    "loser": "Larry Walker",
    "loser_school": "Lock Haven",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Mark Lindlow",
    "winner_school": "Air Force",
    "loser": "Rod Wright",
    "loser_school": "Edinboro",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Joe Stafford",
    "winner_school": "Oklahoma",
    "loser": "Chris Zwilling",
    "loser_school": "Appalachian State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Sherif Zegar",
    "winner_school": "Missouri",
    "loser": "Jonathan Martin",
    "loser_school": "Millersville",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Rex Holman",
    "winner_school": "Arizona State",
    "loser": "Joe Rozanc",
    "loser_school": "Clarion",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Jay Landolfo",
    "winner_school": "North Carolina",
    "loser": "Jeff Spinetti",
    "loser_school": "West Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Matt Case",
    "winner_school": "Northwestern",
    "loser": "Jim Nelson",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Brooks Simpson",
    "winner_school": "Iowa",
    "loser": "Joe Rissone",
    "loser_school": "Oregon",
    "result": "TF 24-9 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Steve King",
    "winner_school": "Notre Dame",
    "loser": "Jim Koerber",
    "loser_school": "Grand Valley State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "190",
    "bout": 259,
    "winner": "Mark Willis",
    "winner_school": "Brigham Young",
    "loser": "Chris Zwilling",
    "loser_school": "Appalachian State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "190",
    "bout": 1259,
    "winner": "Bryan Burns",
    "winner_school": "Bucknell",
    "loser": "Mark Zenas",
    "loser_school": "Michigan State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Chris Nelson",
    "winner_school": "Nebraska",
    "loser": "Brad Weber",
    "loser_school": "Duke",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Randy Couture",
    "winner_school": "Oklahoma State",
    "loser": "Fritz Lehrke",
    "loser_school": "Michigan",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Paul Keysaw",
    "winner_school": "CSU Bakersfield",
    "loser": "Steven Sciandra",
    "loser_school": "Old Dominion",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Matt Ruppel",
    "winner_school": "Lehigh",
    "loser": "Hamilton Munnell",
    "loser_school": "Miami Ohio",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Joe Stafford",
    "winner_school": "Oklahoma",
    "loser": "Mark Lindlow",
    "loser_school": "Air Force",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Rex Holman",
    "winner_school": "Arizona State",
    "loser": "Sherif Zegar",
    "loser_school": "Missouri",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Matt Case",
    "winner_school": "Northwestern",
    "loser": "Jay Landolfo",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Brooks Simpson",
    "winner_school": "Iowa",
    "loser": "Steve King",
    "loser_school": "Notre Dame",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 325,
    "winner": "Brad Weber",
    "winner_school": "Duke",
    "loser": "Ray Roso",
    "loser_school": "Fresno State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 326,
    "winner": "Bryan Burns",
    "winner_school": "Bucknell",
    "loser": "Fritz Lehrke",
    "loser_school": "Michigan",
    "result": "Dec 11-5"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 327,
    "winner": "Dave Raby",
    "winner_school": "Navy",
    "loser": "Steven Sciandra",
    "loser_school": "Old Dominion",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 328,
    "winner": "Hamilton Munnell",
    "winner_school": "Miami Ohio",
    "loser": "Larry Walker",
    "loser_school": "Lock Haven",
    "result": "MD 17-6"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 329,
    "winner": "Mark Willis",
    "winner_school": "Brigham Young",
    "loser": "Mark Lindlow",
    "loser_school": "Air Force",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 330,
    "winner": "Joe Rozanc",
    "winner_school": "Clarion",
    "loser": "Sherif Zegar",
    "loser_school": "Missouri",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 331,
    "winner": "Jim Nelson",
    "winner_school": "Iowa State",
    "loser": "Jay Landolfo",
    "loser_school": "North Carolina",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 332,
    "winner": "Steve King",
    "winner_school": "Notre Dame",
    "loser": "Joe Rissone",
    "loser_school": "Oregon",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Chris Nelson",
    "winner_school": "Nebraska",
    "loser": "Randy Couture",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Matt Ruppel",
    "winner_school": "Lehigh",
    "loser": "Paul Keysaw",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Joe Stafford",
    "winner_school": "Oklahoma",
    "loser": "Rex Holman",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Brooks Simpson",
    "winner_school": "Iowa",
    "loser": "Matt Case",
    "loser_school": "Northwestern",
    "result": "Dec 2-1"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Bryan Burns",
    "winner_school": "Bucknell",
    "loser": "Brad Weber",
    "loser_school": "Duke",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Hamilton Munnell",
    "winner_school": "Miami Ohio",
    "loser": "Dave Raby",
    "loser_school": "Navy",
    "result": "Dec 7-0 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Mark Willis",
    "winner_school": "Brigham Young",
    "loser": "Joe Rozanc",
    "loser_school": "Clarion",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Jim Nelson",
    "winner_school": "Iowa State",
    "loser": "Steve King",
    "loser_school": "Notre Dame",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 453,
    "winner": "Matt Case",
    "winner_school": "Northwestern",
    "loser": "Bryan Burns",
    "loser_school": "Bucknell",
    "result": "MD 13-0"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 454,
    "winner": "Hamilton Munnell",
    "winner_school": "Miami Ohio",
    "loser": "Rex Holman",
    "loser_school": "Arizona State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 455,
    "winner": "Paul Keysaw",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark Willis",
    "loser_school": "Brigham Young",
    "result": "Dec 12-8"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 456,
    "winner": "Randy Couture",
    "winner_school": "Oklahoma State",
    "loser": "Jim Nelson",
    "loser_school": "Iowa State",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Matt Ruppel",
    "winner_school": "Lehigh",
    "loser": "Chris Nelson",
    "loser_school": "Nebraska",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Brooks Simpson",
    "winner_school": "Iowa",
    "loser": "Joe Stafford",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Matt Case",
    "winner_school": "Northwestern",
    "loser": "Hamilton Munnell",
    "loser_school": "Miami Ohio",
    "result": "MD 11-1"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Randy Couture",
    "winner_school": "Oklahoma State",
    "loser": "Paul Keysaw",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 517,
    "winner": "Matt Case",
    "winner_school": "Northwestern",
    "loser": "Chris Nelson",
    "loser_school": "Nebraska",
    "result": "Dec 11-5"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 518,
    "winner": "Joe Stafford",
    "winner_school": "Oklahoma",
    "loser": "Randy Couture",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-1"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Hamilton Munnell",
    "winner_school": "Miami Ohio",
    "loser": "Paul Keysaw",
    "loser_school": "CSU Bakersfield",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Chris Nelson",
    "winner_school": "Nebraska",
    "loser": "Randy Couture",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Joe Stafford",
    "winner_school": "Oklahoma",
    "loser": "Matt Case",
    "loser_school": "Northwestern",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Matt Ruppel",
    "winner_school": "Lehigh",
    "loser": "Brooks Simpson",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 10,
    "winner": "Eric Schultz",
    "winner_school": "Ohio State",
    "loser": "Tom Osendorf",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-1"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 1010,
    "winner": "Eric Crushshon",
    "winner_school": "George Mason",
    "loser": "Joe O'Mara",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 2010,
    "winner": "Larock Benford",
    "winner_school": "Purdue",
    "loser": "Tim Kennedy",
    "loser_school": "Rider",
    "result": "MD 15-4"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 3010,
    "winner": "John Oostendorp",
    "winner_school": "Iowa",
    "loser": "Jeff Scherma",
    "loser_school": "Cleveland State",
    "result": "Fall 2:56"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 155,
    "winner": "Kirk Mammen",
    "winner_school": "Oklahoma State",
    "loser": "Wrede Kirkpatrick",
    "loser_school": "Columbia",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 156,
    "winner": "Jeff Balcom",
    "winner_school": "Minnesota",
    "loser": "Jeff Datkuliak",
    "loser_school": "Kent State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 157,
    "winner": "Jon Cogdill",
    "winner_school": "Wyoming",
    "loser": "Scott Williams",
    "loser_school": "Clemson",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 158,
    "winner": "John Oostendorp",
    "winner_school": "Iowa",
    "loser": "Jamie Cutler",
    "loser_school": "Iowa State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 159,
    "winner": "Copache Tyler",
    "winner_school": "Eastern Illinois",
    "loser": "Matt Groom",
    "loser_school": "Maryland",
    "result": "Fall 1:35"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 160,
    "winner": "Scott Holman",
    "winner_school": "Indiana",
    "loser": "Jair Toedter",
    "loser_school": "North Dakota",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 161,
    "winner": "Kurt Angle",
    "winner_school": "Clarion",
    "loser": "Larock Benford",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 162,
    "winner": "Mike Fusilli",
    "winner_school": "Ithaca",
    "loser": "Cam Strahm",
    "loser_school": "Oregon",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 163,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "Bret Sharp",
    "loser_school": "Drake",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 164,
    "winner": "Eric Schultz",
    "winner_school": "Ohio State",
    "loser": "John Merklinger",
    "loser_school": "Boston College",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 165,
    "winner": "Brian Walczak",
    "winner_school": "Toledo",
    "loser": "Matt Willhite",
    "loser_school": "Oregon State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 166,
    "winner": "David Jones",
    "winner_school": "Cal State Fullerton",
    "loser": "Paul Koenig",
    "loser_school": "South Dakota State",
    "result": "Fall 6:05"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 167,
    "winner": "Sylvester Terkay",
    "winner_school": "NC State",
    "loser": "Eric Crushshon",
    "loser_school": "George Mason",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 168,
    "winner": "Joe Malacek",
    "winner_school": "Nebraska",
    "loser": "Steve Schannauer",
    "loser_school": "Wilkes",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 169,
    "winner": "Greg Haladay",
    "winner_school": "Penn State",
    "loser": "Rock Burch",
    "loser_school": "Appalachian State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 170,
    "winner": "Brett Bourne",
    "winner_school": "Navy",
    "loser": "Kenny Walker",
    "loser_school": "Lock Haven",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "275",
    "bout": 260,
    "winner": "Jamie Cutler",
    "winner_school": "Iowa State",
    "loser": "Jeff Scherma",
    "loser_school": "Cleveland State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 243,
    "winner": "Kirk Mammen",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Balcom",
    "loser_school": "Minnesota",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 244,
    "winner": "John Oostendorp",
    "winner_school": "Iowa",
    "loser": "Jon Cogdill",
    "loser_school": "Wyoming",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 245,
    "winner": "Copache Tyler",
    "winner_school": "Eastern Illinois",
    "loser": "Scott Holman",
    "loser_school": "Indiana",
    "result": "Fall 4:07"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 246,
    "winner": "Kurt Angle",
    "winner_school": "Clarion",
    "loser": "Mike Fusilli",
    "loser_school": "Ithaca",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 247,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "Eric Schultz",
    "loser_school": "Ohio State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 248,
    "winner": "David Jones",
    "winner_school": "Cal State Fullerton",
    "loser": "Brian Walczak",
    "loser_school": "Toledo",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 249,
    "winner": "Joe Malacek",
    "winner_school": "Nebraska",
    "loser": "Sylvester Terkay",
    "loser_school": "NC State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 250,
    "winner": "Greg Haladay",
    "winner_school": "Penn State",
    "loser": "Brett Bourne",
    "loser_school": "Navy",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 333,
    "winner": "Jeff Balcom",
    "winner_school": "Minnesota",
    "loser": "Wrede Kirkpatrick",
    "loser_school": "Columbia",
    "result": "Dec 10-4"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 334,
    "winner": "Jon Cogdill",
    "winner_school": "Wyoming",
    "loser": "Jamie Cutler",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 335,
    "winner": "Scott Holman",
    "winner_school": "Indiana",
    "loser": "Matt Groom",
    "loser_school": "Maryland",
    "result": "MD 16-4"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 336,
    "winner": "Larock Benford",
    "winner_school": "Purdue",
    "loser": "Mike Fusilli",
    "loser_school": "Ithaca",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 337,
    "winner": "Eric Schultz",
    "winner_school": "Ohio State",
    "loser": "Bret Sharp",
    "loser_school": "Drake",
    "result": "Dec 2-0"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 338,
    "winner": "Paul Koenig",
    "winner_school": "South Dakota State",
    "loser": "Brian Walczak",
    "loser_school": "Toledo",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 339,
    "winner": "Sylvester Terkay",
    "winner_school": "NC State",
    "loser": "Steve Schannauer",
    "loser_school": "Wilkes",
    "result": "Fall 3:02"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 340,
    "winner": "Brett Bourne",
    "winner_school": "Navy",
    "loser": "Rock Burch",
    "loser_school": "Appalachian State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 377,
    "winner": "Kirk Mammen",
    "winner_school": "Oklahoma State",
    "loser": "John Oostendorp",
    "loser_school": "Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 378,
    "winner": "Kurt Angle",
    "winner_school": "Clarion",
    "loser": "Copache Tyler",
    "loser_school": "Eastern Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 379,
    "winner": "David Jones",
    "winner_school": "Cal State Fullerton",
    "loser": "Jon Llewellyn",
    "loser_school": "Illinois",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 380,
    "winner": "Greg Haladay",
    "winner_school": "Penn State",
    "loser": "Joe Malacek",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 417,
    "winner": "Jeff Balcom",
    "winner_school": "Minnesota",
    "loser": "Jon Cogdill",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 418,
    "winner": "Larock Benford",
    "winner_school": "Purdue",
    "loser": "Scott Holman",
    "loser_school": "Indiana",
    "result": "MD 12-3"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 419,
    "winner": "Eric Schultz",
    "winner_school": "Ohio State",
    "loser": "Paul Koenig",
    "loser_school": "South Dakota State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 420,
    "winner": "Brett Bourne",
    "winner_school": "Navy",
    "loser": "Sylvester Terkay",
    "loser_school": "NC State",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 457,
    "winner": "Joe Malacek",
    "winner_school": "Nebraska",
    "loser": "Jeff Balcom",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 458,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "Larock Benford",
    "loser_school": "Purdue",
    "result": "Fall 1:59"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 459,
    "winner": "Eric Schultz",
    "winner_school": "Ohio State",
    "loser": "Copache Tyler",
    "loser_school": "Eastern Illinois",
    "result": "Fall 5:53"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 460,
    "winner": "Brett Bourne",
    "winner_school": "Navy",
    "loser": "John Oostendorp",
    "loser_school": "Iowa",
    "result": "Dec 10-5"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 479,
    "winner": "Kurt Angle",
    "winner_school": "Clarion",
    "loser": "Kirk Mammen",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 480,
    "winner": "Greg Haladay",
    "winner_school": "Penn State",
    "loser": "David Jones",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "WbConsR4",
    "weight": "275",
    "bout": 499,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "Joe Malacek",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR4",
    "weight": "275",
    "bout": 500,
    "winner": "Brett Bourne",
    "winner_school": "Navy",
    "loser": "Eric Schultz",
    "loser_school": "Ohio State",
    "result": "Dec 2-0"
  },
  {
    "round": "WbConsR5",
    "weight": "275",
    "bout": 519,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "Kirk Mammen",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR5",
    "weight": "275",
    "bout": 520,
    "winner": "David Jones",
    "winner_school": "Cal State Fullerton",
    "loser": "Brett Bourne",
    "loser_school": "Navy",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "7thPlace",
    "weight": "275",
    "bout": 530,
    "winner": "Joe Malacek",
    "winner_school": "Nebraska",
    "loser": "Eric Schultz",
    "loser_school": "Ohio State",
    "result": "Dec 5-0"
  },
  {
    "round": "5thPlace",
    "weight": "275",
    "bout": 540,
    "winner": "Brett Bourne",
    "winner_school": "Navy",
    "loser": "Kirk Mammen",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "275",
    "bout": 550,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "David Jones",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-5"
  },
  {
    "round": "Finals",
    "weight": "275",
    "bout": 560,
    "winner": "Kurt Angle",
    "winner_school": "Clarion",
    "loser": "Greg Haladay",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
