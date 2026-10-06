// 1981 NCAA Division I Wrestling Championships (3/12/1981 to 3/14/1981 at Princeton). Weight classes 118-275. Consolation: SEMIFINALIST WRESTLEBACK (rounds SfConsR1-R4).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1981 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1981-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Lee Misdom",
    "winner_school": "Illinois State",
    "loser": "Bill Brookens",
    "loser_school": "Idaho State",
    "result": "Dec 8-6"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "Chuck Ludeman",
    "winner_school": "Wisconsin",
    "loser": "Ray Broughman",
    "loser_school": "William & Mary",
    "result": "MD 17-5"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 2001,
    "winner": "Mike Erb",
    "winner_school": "Oregon",
    "loser": "Dan Stefancin",
    "loser_school": "John Carroll",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 3001,
    "winner": "Mike Millward",
    "winner_school": "Lock Haven",
    "loser": "Jeff Bentley",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Mike Clevenger",
    "winner_school": "Louisiana State",
    "loser": "Tracy Moore",
    "loser_school": "Utah State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Joe McFarland",
    "winner_school": "Michigan",
    "loser": "Adam Cuestas",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Chris Wentz",
    "winner_school": "NC State",
    "loser": "Mark Verr",
    "loser_school": "Northern Illinois",
    "result": "MD 23-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Mike Millward",
    "winner_school": "Lock Haven",
    "loser": "Wade Genova",
    "loser_school": "Boston University",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Bob Dickman",
    "loser_school": "Indiana State",
    "result": "Fall 5:40"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "David Parisi",
    "winner_school": "SUNY-Oswego",
    "loser": "Jorge Leon",
    "loser_school": "West Chester",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Reggie Johnson",
    "winner_school": "Ashland",
    "loser": "Lee Misdom",
    "loser_school": "Illinois State",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Tony Calderaio",
    "winner_school": "Slippery Rock",
    "loser": "Orlando Caceras",
    "loser_school": "Arizona",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Brian Higa",
    "winner_school": "Washington State",
    "loser": "Chris Taylor",
    "loser_school": "Brigham Young",
    "result": "Dec 17-14"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Scott Morgan",
    "winner_school": "Nebraska",
    "loser": "Mike Erb",
    "loser_school": "Oregon",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Tom Reed",
    "winner_school": "SIU-Edwardsville",
    "loser": "Randy Willingham",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Bobby Weaver",
    "winner_school": "Lehigh",
    "loser": "Roger Desart",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 12-11"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Chuck Ludeman",
    "winner_school": "Wisconsin",
    "loser": "Todd Cummings",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Mike Picozzi",
    "winner_school": "Iowa State",
    "loser": "Joe Spinazzola",
    "loser_school": "Missouri",
    "result": "Fall 7:46"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "John Hartupee",
    "winner_school": "Central Michigan",
    "loser": "Tom Moore",
    "loser_school": "Appalachian State",
    "result": "MD 18-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Barry Davis",
    "winner_school": "Iowa",
    "loser": "Dave Martin",
    "loser_school": "Arizona State",
    "result": "MD 21-9"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Joe McFarland",
    "winner_school": "Michigan",
    "loser": "Mike Clevenger",
    "loser_school": "Louisiana State",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Chris Wentz",
    "winner_school": "NC State",
    "loser": "Mike Millward",
    "loser_school": "Lock Haven",
    "result": "Fall 2:55"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "David Parisi",
    "loser_school": "SUNY-Oswego",
    "result": "Fall 4:19"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Tony Calderaio",
    "winner_school": "Slippery Rock",
    "loser": "Reggie Johnson",
    "loser_school": "Ashland",
    "result": "Dec 13-11"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Brian Higa",
    "winner_school": "Washington State",
    "loser": "Scott Morgan",
    "loser_school": "Nebraska",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Tom Reed",
    "winner_school": "SIU-Edwardsville",
    "loser": "Bobby Weaver",
    "loser_school": "Lehigh",
    "result": "Fall 7:44"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Mike Picozzi",
    "winner_school": "Iowa State",
    "loser": "Chuck Ludeman",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "John Hartupee",
    "winner_school": "Central Michigan",
    "loser": "Barry Davis",
    "loser_school": "Iowa",
    "result": "Fall 1:57"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Mark Verr",
    "winner_school": "Northern Illinois",
    "loser": "Mike Millward",
    "loser_school": "Lock Haven",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "David Parisi",
    "winner_school": "SUNY-Oswego",
    "loser": "Bob Dickman",
    "loser_school": "Indiana State",
    "result": "MD 15-4"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Randy Willingham",
    "winner_school": "Oklahoma State",
    "loser": "Bobby Weaver",
    "loser_school": "Lehigh",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Barry Davis",
    "winner_school": "Iowa",
    "loser": "Tom Moore",
    "loser_school": "Appalachian State",
    "result": "MD 15-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Chris Wentz",
    "winner_school": "NC State",
    "loser": "Joe McFarland",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Tony Calderaio",
    "loser_school": "Slippery Rock",
    "result": "Fall 6:44"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Tom Reed",
    "winner_school": "SIU-Edwardsville",
    "loser": "Brian Higa",
    "loser_school": "Washington State",
    "result": "MD 27-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "John Hartupee",
    "winner_school": "Central Michigan",
    "loser": "Mike Picozzi",
    "loser_school": "Iowa State",
    "result": "Dec 11-9"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Joe McFarland",
    "winner_school": "Michigan",
    "loser": "Mark Verr",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Tony Calderaio",
    "winner_school": "Slippery Rock",
    "loser": "David Parisi",
    "loser_school": "SUNY-Oswego",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Randy Willingham",
    "winner_school": "Oklahoma State",
    "loser": "Brian Higa",
    "loser_school": "Washington State",
    "result": "MD 16-4"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Barry Davis",
    "winner_school": "Iowa",
    "loser": "Mike Picozzi",
    "loser_school": "Iowa State",
    "result": "Dec 16-11"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Joe McFarland",
    "winner_school": "Michigan",
    "loser": "Tony Calderaio",
    "loser_school": "Slippery Rock",
    "result": "MD 13-4"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Randy Willingham",
    "winner_school": "Oklahoma State",
    "loser": "Barry Davis",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "Chris Wentz",
    "loser_school": "NC State",
    "result": "MD 28-4"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "John Hartupee",
    "winner_school": "Central Michigan",
    "loser": "Tom Reed",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Tom Reed",
    "winner_school": "SIU-Edwardsville",
    "loser": "Joe McFarland",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Randy Willingham",
    "winner_school": "Oklahoma State",
    "loser": "Chris Wentz",
    "loser_school": "NC State",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Barry Davis",
    "winner_school": "Iowa",
    "loser": "Tony Calderaio",
    "loser_school": "Slippery Rock",
    "result": "Dec 12-6"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Joe McFarland",
    "winner_school": "Michigan",
    "loser": "Chris Wentz",
    "loser_school": "NC State",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Randy Willingham",
    "winner_school": "Oklahoma State",
    "loser": "Tom Reed",
    "loser_school": "SIU-Edwardsville",
    "result": "Fall 3:14"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Gene Mills",
    "winner_school": "Syracuse",
    "loser": "John Hartupee",
    "loser_school": "Central Michigan",
    "result": "Fall 6:35"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Chris Bell",
    "winner_school": "Wyoming",
    "loser": "David Barnes",
    "loser_school": "San Jose State",
    "result": "Fall 4:21"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Steve Fontana",
    "loser_school": "C.W. Post",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Mike Jacoutot",
    "winner_school": "College of New Jersey",
    "loser": "David Harris",
    "loser_school": "Missouri",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Doug Tredway",
    "loser_school": "Northern Iowa",
    "result": "Fall 7:15"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Ed Pidgeon",
    "winner_school": "Hofstra",
    "loser": "Mark Hirota",
    "loser_school": "Oregon State",
    "result": "MD 23-8"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Derek Glenn",
    "winner_school": "Oklahoma",
    "loser": "Jim Edwards",
    "loser_school": "Louisiana State",
    "result": "Fall 3:35"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Dave Cooke",
    "winner_school": "North Carolina",
    "loser": "Marty Nellis",
    "loser_school": "Humboldt State",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Sam Edwards",
    "winner_school": "Cornell",
    "loser": "Floyd Dotter",
    "loser_school": "Citadel",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Tony Leonino",
    "winner_school": "Auburn",
    "loser": "Tom Diamond",
    "loser_school": "Clarion",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Dan Foldesy",
    "winner_school": "Cleveland State",
    "loser": "Pat Souris",
    "loser_school": "Nevada-Las Vegas",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Dan Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Gene Leonard",
    "loser_school": "Kent State",
    "result": "Fall 4:53"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Mark Galyan",
    "winner_school": "Indiana",
    "loser": "Mike Schmidt",
    "loser_school": "Tennessee",
    "result": "MD 19-10"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "John Warlick",
    "winner_school": "Clemson",
    "loser": "Tom Husted",
    "loser_school": "Lehigh",
    "result": "Dec 13-11"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Ed Fiorvanti",
    "winner_school": "Bloomsburg",
    "loser": "Ed Dilbeck",
    "loser_school": "Weber State",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "John Iannuzzi",
    "winner_school": "Wisconsin",
    "loser": "Dom Macchia",
    "loser_school": "Rhode Island",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Gary Lefebvre",
    "winner_school": "Minnesota",
    "loser": "John Thorn",
    "loser_school": "Iowa State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Chris Bell",
    "loser_school": "Wyoming",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Mike Jacoutot",
    "loser_school": "College of New Jersey",
    "result": "Fall 3:13"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Ed Pidgeon",
    "winner_school": "Hofstra",
    "loser": "Derek Glenn",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Dave Cooke",
    "winner_school": "North Carolina",
    "loser": "Sam Edwards",
    "loser_school": "Cornell",
    "result": "Fall 7:33"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Dan Foldesy",
    "winner_school": "Cleveland State",
    "loser": "Tony Leonino",
    "loser_school": "Auburn",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Dan Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark Galyan",
    "loser_school": "Indiana",
    "result": "Fall 3:04"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Ed Fiorvanti",
    "winner_school": "Bloomsburg",
    "loser": "John Warlick",
    "loser_school": "Clemson",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "John Iannuzzi",
    "winner_school": "Wisconsin",
    "loser": "Gary Lefebvre",
    "loser_school": "Minnesota",
    "result": "Dec 9-3"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 265,
    "winner": "Mike Jacoutot",
    "winner_school": "College of New Jersey",
    "loser": "Doug Tredway",
    "loser_school": "Northern Iowa",
    "result": "MD 13-2"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 266,
    "winner": "Sam Edwards",
    "winner_school": "Cornell",
    "loser": "Marty Nellis",
    "loser_school": "Humboldt State",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 267,
    "winner": "Mark Galyan",
    "winner_school": "Indiana",
    "loser": "Gene Leonard",
    "loser_school": "Kent State",
    "result": "Dec 12-5"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 268,
    "winner": "Gary Lefebvre",
    "winner_school": "Minnesota",
    "loser": "Dom Macchia",
    "loser_school": "Rhode Island",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Tim Riley",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Dave Cooke",
    "winner_school": "North Carolina",
    "loser": "Ed Pidgeon",
    "loser_school": "Hofstra",
    "result": "Fall 6:38"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Dan Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Dan Foldesy",
    "loser_school": "Cleveland State",
    "result": "Fall 1:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "John Iannuzzi",
    "winner_school": "Wisconsin",
    "loser": "Ed Fiorvanti",
    "loser_school": "Bloomsburg",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Mike Jacoutot",
    "loser_school": "College of New Jersey",
    "result": "Dec 7-5 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Ed Pidgeon",
    "winner_school": "Hofstra",
    "loser": "Sam Edwards",
    "loser_school": "Cornell",
    "result": "Dec 17-10"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Mark Galyan",
    "winner_school": "Indiana",
    "loser": "Dan Foldesy",
    "loser_school": "Cleveland State",
    "result": "Dec 11-5"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Gary Lefebvre",
    "winner_school": "Minnesota",
    "loser": "Ed Fiorvanti",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 423,
    "winner": "Ed Pidgeon",
    "winner_school": "Hofstra",
    "loser": "Tim Riley",
    "loser_school": "Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 424,
    "winner": "Gary Lefebvre",
    "winner_school": "Minnesota",
    "loser": "Mark Galyan",
    "loser_school": "Indiana",
    "result": "Dec 12-6"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Dave Cooke",
    "winner_school": "North Carolina",
    "loser": "Jerry Kelly",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Dan Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "John Iannuzzi",
    "loser_school": "Wisconsin",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Ed Pidgeon",
    "winner_school": "Hofstra",
    "loser": "John Iannuzzi",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Gary Lefebvre",
    "loser_school": "Minnesota",
    "result": "Fall 4:52"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Mark Galyan",
    "loser_school": "Indiana",
    "result": "Fall 5:53"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "John Iannuzzi",
    "winner_school": "Wisconsin",
    "loser": "Gary Lefebvre",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Jerry Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Ed Pidgeon",
    "loser_school": "Hofstra",
    "result": "Fall 4:54"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Dan Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Dave Cooke",
    "loser_school": "North Carolina",
    "result": "Dec 7-5"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Tom Newcome",
    "winner_school": "NC State",
    "loser": "Jon Moser",
    "loser_school": "West Chester",
    "result": "Dec 9-7"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Kyle Grunwald",
    "winner_school": "Louisiana State",
    "loser": "Eric Kriebel",
    "loser_school": "Indiana State",
    "result": "Dec 7-5"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 2003,
    "winner": "Eddie Baza",
    "winner_school": "San Jose State",
    "loser": "Khris Whelan",
    "loser_school": "Missouri",
    "result": "MD 18-9"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3003,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Cliff Porter",
    "loser_school": "Oregon",
    "result": "Fall 7:09"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Clar Anderson",
    "winner_school": "Auburn",
    "loser": "Steve Rosenstein",
    "loser_school": "Arizona",
    "result": "Fall 1:59"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Thomas Landrum",
    "winner_school": "Oklahoma State",
    "loser": "Chris DeLong",
    "loser_school": "Cal Poly",
    "result": "Fall 3:09"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Harlan Kistler",
    "winner_school": "Arizona State",
    "loser": "Chad Gross",
    "loser_school": "John Carroll",
    "result": "Fall 7:38"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Johnnie Selmon",
    "winner_school": "Nebraska",
    "loser": "Bill Pincus",
    "loser_school": "William & Mary",
    "result": "Fall 7:29"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Eddie Baza",
    "winner_school": "San Jose State",
    "loser": "Randy Miller",
    "loser_school": "Clarion",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Mark Iacovelli",
    "loser_school": "Syracuse",
    "result": "MD 21-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Rick Waller",
    "winner_school": "Chattanooga",
    "loser": "Tom Newcome",
    "loser_school": "NC State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Bob Bury",
    "winner_school": "Penn State",
    "loser": "Don Reese",
    "loser_school": "Bloomsburg",
    "result": "MD 22-8"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "James Williams",
    "loser_school": "Boise State",
    "result": "MD 34-11"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Kyle Grunwald",
    "winner_school": "Louisiana State",
    "loser": "Jeff Tolbert",
    "loser_school": "Purdue",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Dalen Wasmund",
    "winner_school": "Minnesota",
    "loser": "Rob Parent",
    "loser_school": "Central Michigan",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Bob Hoffman",
    "winner_school": "Nebraska-Omaha",
    "loser": "Dan Winter",
    "loser_school": "Wisconsin-Parkside",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Mark Bower",
    "loser_school": "Augustana SD",
    "result": "Fall 2:29"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Doug Drew",
    "winner_school": "Kent State",
    "loser": "Darrow Traylor",
    "loser_school": "Boston University",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Keith Saunders",
    "loser_school": "Indiana",
    "result": "Fall 4:50"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Dave Goodspeed",
    "winner_school": "Wisconsin",
    "loser": "Morgan Woodhouse",
    "loser_school": "Brigham Young",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 253,
    "winner": "Mark Bower",
    "winner_school": "Augustana SD",
    "loser": "Cliff Porter",
    "loser_school": "Oregon",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Clar Anderson",
    "winner_school": "Auburn",
    "loser": "Thomas Landrum",
    "loser_school": "Oklahoma State",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Johnnie Selmon",
    "winner_school": "Nebraska",
    "loser": "Harlan Kistler",
    "loser_school": "Arizona State",
    "result": "Dec 15-11"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Eddie Baza",
    "loser_school": "San Jose State",
    "result": "Fall 6:33"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Bob Bury",
    "winner_school": "Penn State",
    "loser": "Rick Waller",
    "loser_school": "Chattanooga",
    "result": "Fall 4:26"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Kyle Grunwald",
    "loser_school": "Louisiana State",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Dalen Wasmund",
    "winner_school": "Minnesota",
    "loser": "Bob Hoffman",
    "loser_school": "Nebraska-Omaha",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Doug Drew",
    "loser_school": "Kent State",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Dave Goodspeed",
    "loser_school": "Wisconsin",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 270,
    "winner": "Eddie Baza",
    "winner_school": "San Jose State",
    "loser": "Mark Iacovelli",
    "loser_school": "Syracuse",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 271,
    "winner": "Bob Hoffman",
    "winner_school": "Nebraska-Omaha",
    "loser": "Rob Parent",
    "loser_school": "Central Michigan",
    "result": "MD 17-2"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 272,
    "winner": "Doug Drew",
    "winner_school": "Kent State",
    "loser": "Mark Bower",
    "loser_school": "Augustana SD",
    "result": "Fall 2:25"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Clar Anderson",
    "winner_school": "Auburn",
    "loser": "Johnnie Selmon",
    "loser_school": "Nebraska",
    "result": "FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Bob Bury",
    "loser_school": "Penn State",
    "result": "Dec 10-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Dalen Wasmund",
    "winner_school": "Minnesota",
    "loser": "Ricky Dellagatta",
    "loser_school": "Kentucky",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Randy Lewis",
    "loser_school": "Iowa",
    "result": "Dec 13-6"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Eddie Baza",
    "winner_school": "San Jose State",
    "loser": "Bob Bury",
    "loser_school": "Penn State",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Bob Hoffman",
    "loser_school": "Nebraska-Omaha",
    "result": "Fall 2:11"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Randy Lewis",
    "winner_school": "Iowa",
    "loser": "Doug Drew",
    "loser_school": "Kent State",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 426,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Randy Lewis",
    "loser_school": "Iowa",
    "result": "Fall 0:26"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Clar Anderson",
    "loser_school": "Auburn",
    "result": "MD 12-4"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Dalen Wasmund",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Dalen Wasmund",
    "winner_school": "Minnesota",
    "loser": "Eddie Baza",
    "loser_school": "San Jose State",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Clar Anderson",
    "loser_school": "Auburn",
    "result": "MD 19-6"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Eddie Baza",
    "winner_school": "San Jose State",
    "loser": "Clar Anderson",
    "loser_school": "Auburn",
    "result": "Dec 8-4"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Ricky Dellagatta",
    "winner_school": "Kentucky",
    "loser": "Dalen Wasmund",
    "loser_school": "Minnesota",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Jim Gibbons",
    "winner_school": "Iowa State",
    "loser": "Darryl Burley",
    "loser_school": "Lehigh",
    "result": "MD 16-8"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Tim Ervin",
    "winner_school": "SIU-Edwardsville",
    "loser": "Dave Wenger",
    "loser_school": "Kent State",
    "result": "Dec 11-7"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Bernie Fritz",
    "winner_school": "Penn State",
    "loser": "Buddy Kerr",
    "loser_school": "Virginia",
    "result": "MD 13-5"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 2004,
    "winner": "Bob Eon",
    "winner_school": "Rhode Island",
    "loser": "John Veenschoten",
    "loser_school": "Drake",
    "result": "MD 20-4"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 3004,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Joe Solorio",
    "loser_school": "Arizona State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Ryan Kaufman",
    "winner_school": "Nebraska-Omaha",
    "loser": "Al McCollum",
    "loser_school": "Bloomsburg",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Doug Bytendorp",
    "loser_school": "Weber State",
    "result": "MD 19-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Rick McReynolds",
    "winner_school": "Portland State",
    "loser": "Dorr Granger",
    "loser_school": "Grand Valley State",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Bernie Fritz",
    "winner_school": "Penn State",
    "loser": "Gene Nighman",
    "loser_school": "Cornell",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Lenny Zalesky",
    "winner_school": "Iowa",
    "loser": "Chris Cain",
    "loser_school": "Cal Poly",
    "result": "MD 22-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Ken Gallagher",
    "winner_school": "Northern Iowa",
    "loser": "John Dolch",
    "loser_school": "Salisbury",
    "result": "Fall 7:44"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Bob Eon",
    "winner_school": "Rhode Island",
    "loser": "Bill Swezey",
    "loser_school": "William & Mary",
    "result": "Fall 1:01"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Tony Surage",
    "winner_school": "Rutgers",
    "loser": "Jimmy London",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Robert Hilfiger",
    "winner_school": "Appalachian State",
    "loser": "Tony Mills",
    "loser_school": "Tennessee",
    "result": "Dec 17-14"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Eddie Blazeff",
    "loser_school": "Auburn",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Jeff Woo",
    "loser_school": "Ohio State",
    "result": "Fall 3:29"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Al Freeman",
    "winner_school": "Nebraska",
    "loser": "Jeff Hardy",
    "loser_school": "Ohio",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Bill Nugent",
    "winner_school": "Oregon",
    "loser": "Tim Ervin",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 4-4 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Gary Siegel",
    "winner_school": "Syracuse",
    "loser": "Ralph Cortez",
    "loser_school": "Illinois",
    "result": "Dec 8-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Dave Brown",
    "winner_school": "Iowa State",
    "loser": "Jim Tenbrook",
    "loser_school": "Bucknell",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Shawn White",
    "winner_school": "Michigan State",
    "loser": "Dave Krivus",
    "loser_school": "Washington & Jefferson",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 254,
    "winner": "Gene Nighman",
    "winner_school": "Cornell",
    "loser": "Buddy Kerr",
    "loser_school": "Virginia",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Kaufman",
    "loser_school": "Nebraska-Omaha",
    "result": "Fall 2:18"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Bernie Fritz",
    "winner_school": "Penn State",
    "loser": "Rick McReynolds",
    "loser_school": "Portland State",
    "result": "MD 18-8"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Lenny Zalesky",
    "winner_school": "Iowa",
    "loser": "Ken Gallagher",
    "loser_school": "Northern Iowa",
    "result": "MD 19-9"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Tony Surage",
    "winner_school": "Rutgers",
    "loser": "Bob Eon",
    "loser_school": "Rhode Island",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Mike Bauer",
    "winner_school": "Oregon State",
    "loser": "Robert Hilfiger",
    "loser_school": "Appalachian State",
    "result": "Dec 8-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Al Freeman",
    "loser_school": "Nebraska",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Gary Siegel",
    "winner_school": "Syracuse",
    "loser": "Bill Nugent",
    "loser_school": "Oregon",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Shawn White",
    "winner_school": "Michigan State",
    "loser": "Dave Brown",
    "loser_school": "Iowa State",
    "result": "Dec 10-9"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 273,
    "winner": "Gene Nighman",
    "winner_school": "Cornell",
    "loser": "Rick McReynolds",
    "loser_school": "Portland State",
    "result": "Fall 1:18"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 274,
    "winner": "Ken Gallagher",
    "winner_school": "Northern Iowa",
    "loser": "Chris Cain",
    "loser_school": "Cal Poly",
    "result": "Dec 9-8"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 275,
    "winner": "Al Freeman",
    "winner_school": "Nebraska",
    "loser": "Jeff Woo",
    "loser_school": "Ohio State",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 276,
    "winner": "Dave Brown",
    "winner_school": "Iowa State",
    "loser": "Dave Krivus",
    "loser_school": "Washington & Jefferson",
    "result": "MD 10-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Bernie Fritz",
    "winner_school": "Penn State",
    "loser": "Kenny Monday",
    "loser_school": "Oklahoma State",
    "result": "Dec 13-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Lenny Zalesky",
    "winner_school": "Iowa",
    "loser": "Tony Surage",
    "loser_school": "Rutgers",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Mike Bauer",
    "loser_school": "Oregon State",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Shawn White",
    "winner_school": "Michigan State",
    "loser": "Gary Siegel",
    "loser_school": "Syracuse",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Gene Nighman",
    "winner_school": "Cornell",
    "loser": "Kenny Monday",
    "loser_school": "Oklahoma State",
    "result": "MD 15-6"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Ken Gallagher",
    "winner_school": "Northern Iowa",
    "loser": "Tony Surage",
    "loser_school": "Rutgers",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Al Freeman",
    "winner_school": "Nebraska",
    "loser": "Mike Bauer",
    "loser_school": "Oregon State",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Dave Brown",
    "winner_school": "Iowa State",
    "loser": "Gary Siegel",
    "loser_school": "Syracuse",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 427,
    "winner": "Ken Gallagher",
    "winner_school": "Northern Iowa",
    "loser": "Gene Nighman",
    "loser_school": "Cornell",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 428,
    "winner": "Dave Brown",
    "winner_school": "Iowa State",
    "loser": "Al Freeman",
    "loser_school": "Nebraska",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Lenny Zalesky",
    "winner_school": "Iowa",
    "loser": "Bernie Fritz",
    "loser_school": "Penn State",
    "result": "MD 20-4"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Shawn White",
    "loser_school": "Michigan State",
    "result": "Fall 1:29"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Shawn White",
    "winner_school": "Michigan State",
    "loser": "Ken Gallagher",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Dave Brown",
    "winner_school": "Iowa State",
    "loser": "Bernie Fritz",
    "loser_school": "Penn State",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Gene Nighman",
    "winner_school": "Cornell",
    "loser": "Al Freeman",
    "loser_school": "Nebraska",
    "result": "Dec 9-4"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Ken Gallagher",
    "winner_school": "Northern Iowa",
    "loser": "Bernie Fritz",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Dave Brown",
    "winner_school": "Iowa State",
    "loser": "Shawn White",
    "loser_school": "Michigan State",
    "result": "Dec 10-5"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Andre Metzger",
    "winner_school": "Oklahoma",
    "loser": "Lenny Zalesky",
    "loser_school": "Iowa",
    "result": "Dec 10-6"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Glen Cooper",
    "winner_school": "CSU Bakersfield",
    "loser": "Ray Oliver",
    "loser_school": "Nebraska",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Al Baker",
    "winner_school": "Rhode Island",
    "loser": "Dick Leffler",
    "loser_school": "Toledo",
    "result": "Dec 11-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Roger Randall",
    "winner_school": "Old Dominion",
    "loser": "Mike Elinsky",
    "loser_school": "Auburn",
    "result": "Dec 7-6"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 3005,
    "winner": "Tom Fiorvanti",
    "winner_school": "Bloomsburg",
    "loser": "Billy Williams",
    "loser_school": "Louisiana State",
    "result": "Fall 7:29"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 4005,
    "winner": "Barry Boyles",
    "winner_school": "Oregon",
    "loser": "Bill Gaffney",
    "loser_school": "North Carolina",
    "result": "MD 19-8"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5005,
    "winner": "Gary Erwin",
    "winner_school": "Jacksonville State",
    "loser": "Andre Offutt",
    "loser_school": "Kent State",
    "result": "Fall 2:22"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 6005,
    "winner": "Matt Skove",
    "winner_school": "Oklahoma State",
    "loser": "Mike Bond",
    "loser_school": "Pittsburgh",
    "result": "MD 14-5"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 7005,
    "winner": "Brad Swartz",
    "winner_school": "Oregon State",
    "loser": "Frank Patacsil",
    "loser_school": "Purdue",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 8005,
    "winner": "Mike Hogan",
    "winner_school": "Hofstra",
    "loser": "Reggie Thompson",
    "loser_school": "San Jose State",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 9005,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Dave Galdi",
    "loser_school": "Columbia",
    "result": "MD 19-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Jackson Kistler",
    "winner_school": "Arizona State",
    "loser": "Chris Catalfo",
    "loser_school": "Syracuse",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Doug Reifsteck",
    "winner_school": "Indiana State",
    "loser": "Matt Skove",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Bruce Moe",
    "winner_school": "Winona State",
    "loser": "John Fagan",
    "loser_school": "Colorado State",
    "result": "MD 22-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Gary Erwin",
    "loser_school": "Jacksonville State",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Frank Castrignano",
    "winner_school": "NC State",
    "loser": "Barry Boyles",
    "loser_school": "Oregon",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Mike Hogan",
    "winner_school": "Hofstra",
    "loser": "Tom Coffing",
    "loser_school": "Arizona",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Roger Randall",
    "loser_school": "Old Dominion",
    "result": "MD 24-12"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Grant Smith",
    "winner_school": "Wisconsin",
    "loser": "Tony Rowland",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 6-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Charlie Lucas",
    "winner_school": "Portland State",
    "loser": "Gary Waller",
    "loser_school": "Chattanooga",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Glen Cooper",
    "winner_school": "CSU Bakersfield",
    "loser": "Kenny Sheets",
    "loser_school": "Indiana",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Al Baker",
    "winner_school": "Rhode Island",
    "loser": "Joe Giani",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Tom Fiorvanti",
    "loser_school": "Bloomsburg",
    "result": "MD 22-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Brad Swartz",
    "winner_school": "Oregon State",
    "loser": "Tom Elcott",
    "loser_school": "Allegheny",
    "result": "Fall 3:30"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Frank Shaffer",
    "winner_school": "Navy",
    "loser": "Russ Campbell",
    "loser_school": "Weber State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Tim Wagner",
    "loser_school": "Virginia",
    "result": "Fall 2:40"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Lou Montano",
    "winner_school": "Cal Poly",
    "loser": "Phil Anglim",
    "loser_school": "Ohio State",
    "result": "MD 17-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 255,
    "winner": "Dave Galdi",
    "winner_school": "Columbia",
    "loser": "Tim Wagner",
    "loser_school": "Virginia",
    "result": "Fall 3:21"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Jackson Kistler",
    "winner_school": "Arizona State",
    "loser": "Doug Reifsteck",
    "loser_school": "Indiana State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Bruce Moe",
    "loser_school": "Winona State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Frank Castrignano",
    "winner_school": "NC State",
    "loser": "Mike Hogan",
    "loser_school": "Hofstra",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Grant Smith",
    "loser_school": "Wisconsin",
    "result": "MD 20-8"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Charlie Lucas",
    "winner_school": "Portland State",
    "loser": "Glen Cooper",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Al Baker",
    "loser_school": "Rhode Island",
    "result": "MD 21-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Brad Swartz",
    "winner_school": "Oregon State",
    "loser": "Frank Shaffer",
    "loser_school": "Navy",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Lou Montano",
    "loser_school": "Cal Poly",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 277,
    "winner": "Gary Erwin",
    "winner_school": "Jacksonville State",
    "loser": "Bruce Moe",
    "loser_school": "Winona State",
    "result": "Dec 12-10"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 278,
    "winner": "Roger Randall",
    "winner_school": "Old Dominion",
    "loser": "Grant Smith",
    "loser_school": "Wisconsin",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 279,
    "winner": "Al Baker",
    "winner_school": "Rhode Island",
    "loser": "Tom Fiorvanti",
    "loser_school": "Bloomsburg",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 280,
    "winner": "Lou Montano",
    "winner_school": "Cal Poly",
    "loser": "Dave Galdi",
    "loser_school": "Columbia",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Jackson Kistler",
    "loser_school": "Arizona State",
    "result": "MD 16-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Frank Castrignano",
    "loser_school": "NC State",
    "result": "Dec 11-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Charlie Lucas",
    "loser_school": "Portland State",
    "result": "MD 20-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Brad Swartz",
    "loser_school": "Oregon State",
    "result": "Dec 12-6"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Jackson Kistler",
    "winner_school": "Arizona State",
    "loser": "Gary Erwin",
    "loser_school": "Jacksonville State",
    "result": "Dec 10-8"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Roger Randall",
    "winner_school": "Old Dominion",
    "loser": "Frank Castrignano",
    "loser_school": "NC State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Charlie Lucas",
    "winner_school": "Portland State",
    "loser": "Al Baker",
    "loser_school": "Rhode Island",
    "result": "MD 17-9"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Brad Swartz",
    "winner_school": "Oregon State",
    "loser": "Lou Montano",
    "loser_school": "Cal Poly",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 429,
    "winner": "Jackson Kistler",
    "winner_school": "Arizona State",
    "loser": "Roger Randall",
    "loser_school": "Old Dominion",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 430,
    "winner": "Brad Swartz",
    "winner_school": "Oregon State",
    "loser": "Charlie Lucas",
    "loser_school": "Portland State",
    "result": "Fall 4:37"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Fred Boss",
    "loser_school": "Central Michigan",
    "result": "MD 19-8"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Scott Trizzino",
    "winner_school": "Iowa",
    "loser": "Roger Frizzell",
    "loser_school": "Oklahoma",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Jackson Kistler",
    "loser_school": "Arizona State",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Fred Boss",
    "winner_school": "Central Michigan",
    "loser": "Brad Swartz",
    "loser_school": "Oregon State",
    "result": "Dec 7-0"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Roger Randall",
    "winner_school": "Old Dominion",
    "loser": "Charlie Lucas",
    "loser_school": "Portland State",
    "result": "Dec 9-4"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Jackson Kistler",
    "winner_school": "Arizona State",
    "loser": "Brad Swartz",
    "loser_school": "Oregon State",
    "result": "Dec 8-6"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Fred Boss",
    "loser_school": "Central Michigan",
    "result": "Dec 10-3"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Scott Trizzino",
    "loser_school": "Iowa",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Tim Catalfo",
    "winner_school": "Syracuse",
    "loser": "Bob Moore",
    "loser_school": "Arizona",
    "result": "Fall 5:37"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Paul Morina",
    "winner_school": "James Madison",
    "loser": "Don Mappes",
    "loser_school": "Ball State",
    "result": "MD 17-3"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Tom Janicik",
    "winner_school": "Northwestern",
    "loser": "Jeff Bouslog",
    "loser_school": "Luther",
    "result": "MD 14-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Perry Shea",
    "winner_school": "CSU Bakersfield",
    "loser": "Mike Pheanis",
    "loser_school": "Northern Illinois",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Dion Cobb",
    "winner_school": "Northern Iowa",
    "loser": "Chris Edmond",
    "loser_school": "Tennessee",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Clarence Laster",
    "winner_school": "New Mexico",
    "loser": "Jim Trudeau",
    "loser_school": "Minnesota",
    "result": "FOR"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Matt Dulka",
    "winner_school": "Cleveland State",
    "loser": "Paul Morina",
    "loser_school": "James Madison",
    "result": "Fall 4:05"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma",
    "loser": "Rick O'Shea",
    "loser_school": "Oregon",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Greg Troxler",
    "loser_school": "Cal Poly",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Wes Roper",
    "winner_school": "Missouri",
    "loser": "Tim Catalfo",
    "loser_school": "Syracuse",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Jim Farina",
    "winner_school": "Iowa State",
    "loser": "Mike Carroll",
    "loser_school": "Massachusetts",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "John Ohly",
    "loser_school": "Oregon State",
    "result": "MD 22-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Tom Janicik",
    "winner_school": "Northwestern",
    "loser": "Mike Polz",
    "loser_school": "Eastern Illinois",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Jan Michaels",
    "winner_school": "North Carolina",
    "loser": "Lamont Roth",
    "loser_school": "Montana",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Eric Jones",
    "winner_school": "SIU-Edwardsville",
    "loser": "Allen Washington",
    "loser_school": "Yale",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Todd Sumter",
    "winner_school": "Appalachian State",
    "loser": "Chris Mondragon",
    "loser_school": "NC State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Kevin Benson",
    "winner_school": "Portland State",
    "loser": "Mike Rodgers",
    "loser_school": "Navy",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Bruce Cochran",
    "loser_school": "Illinois",
    "result": "MD 23-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Mike Moyer",
    "winner_school": "West Chester",
    "loser": "Rob Albert",
    "loser_school": "Clarion",
    "result": "Dec 14-8"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Perry Shea",
    "winner_school": "CSU Bakersfield",
    "loser": "Dion Cobb",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:14"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Matt Dulka",
    "winner_school": "Cleveland State",
    "loser": "Clarence Laster",
    "loser_school": "New Mexico",
    "result": "Fall 6:06"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma",
    "loser": "Jim Reilly",
    "loser_school": "Lehigh",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Jim Farina",
    "winner_school": "Iowa State",
    "loser": "Wes Roper",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Tom Janicik",
    "loser_school": "Northwestern",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Jan Michaels",
    "winner_school": "North Carolina",
    "loser": "Eric Jones",
    "loser_school": "SIU-Edwardsville",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Kevin Benson",
    "winner_school": "Portland State",
    "loser": "Todd Sumter",
    "loser_school": "Appalachian State",
    "result": "Fall 1:54"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Mike Moyer",
    "loser_school": "West Chester",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 281,
    "winner": "Dion Cobb",
    "winner_school": "Northern Iowa",
    "loser": "Mike Pheanis",
    "loser_school": "Northern Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 282,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Rick O'Shea",
    "loser_school": "Oregon",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 283,
    "winner": "John Ohly",
    "winner_school": "Oregon State",
    "loser": "Tom Janicik",
    "loser_school": "Northwestern",
    "result": "Dec 10-7"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 284,
    "winner": "Bruce Cochran",
    "winner_school": "Illinois",
    "loser": "Mike Moyer",
    "loser_school": "West Chester",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Perry Shea",
    "winner_school": "CSU Bakersfield",
    "loser": "Matt Dulka",
    "loser_school": "Cleveland State",
    "result": "Dec 17-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma",
    "loser": "Jim Farina",
    "loser_school": "Iowa State",
    "result": "MD 14-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Jan Michaels",
    "loser_school": "North Carolina",
    "result": "MD 25-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Kevin Benson",
    "loser_school": "Portland State",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Dion Cobb",
    "winner_school": "Northern Iowa",
    "loser": "Matt Dulka",
    "loser_school": "Cleveland State",
    "result": "Dec 10-6"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Jim Farina",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Jan Michaels",
    "winner_school": "North Carolina",
    "loser": "John Ohly",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Kevin Benson",
    "winner_school": "Portland State",
    "loser": "Bruce Cochran",
    "loser_school": "Illinois",
    "result": "Fall 5:55"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 431,
    "winner": "Dion Cobb",
    "winner_school": "Northern Iowa",
    "loser": "Jim Reilly",
    "loser_school": "Lehigh",
    "result": "Fall 1:20"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 432,
    "winner": "Kevin Benson",
    "winner_school": "Portland State",
    "loser": "Jan Michaels",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Dave Schultz",
    "winner_school": "Oklahoma",
    "loser": "Perry Shea",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Jim Zalesky",
    "loser_school": "Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Dion Cobb",
    "winner_school": "Northern Iowa",
    "loser": "Jim Zalesky",
    "loser_school": "Iowa",
    "result": "Fall 2:26"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Perry Shea",
    "winner_school": "CSU Bakersfield",
    "loser": "Kevin Benson",
    "loser_school": "Portland State",
    "result": "Dec 9-4"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "Jim Reilly",
    "winner_school": "Lehigh",
    "loser": "Jan Michaels",
    "loser_school": "North Carolina",
    "result": "Dec 4-0"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Kevin Benson",
    "loser_school": "Portland State",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Perry Shea",
    "winner_school": "CSU Bakersfield",
    "loser": "Dion Cobb",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:24"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Ricky Stewart",
    "winner_school": "Oklahoma State",
    "loser": "Dave Schultz",
    "loser_school": "Oklahoma",
    "result": "Fall 4:56"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "John Bliss",
    "winner_school": "Washington State",
    "loser": "Darrell Gholar",
    "loser_school": "Minnesota",
    "result": "Fall 4:52"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "John Hanrahan",
    "winner_school": "Penn State",
    "loser": "Trent Taylor",
    "loser_school": "Illinois",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Jeff Parker",
    "winner_school": "Louisiana State",
    "loser": "Richard Sykes",
    "loser_school": "Humboldt State",
    "result": "MD 26-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Matt Reiss",
    "winner_school": "NC State",
    "loser": "Dale Walters",
    "loser_school": "Air Force",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Mark Johnson",
    "winner_school": "Cleveland State",
    "loser": "Tim Jones",
    "loser_school": "Marshall",
    "result": "Fall 6:13"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Efonda Sproles",
    "loser_school": "Northern Iowa",
    "result": "MD 28-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Steve Foley",
    "winner_school": "Michigan State",
    "loser": "Jeff Turner",
    "loser_school": "Lehigh",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Steve Reedy",
    "winner_school": "Kent State",
    "loser": "John Bliss",
    "loser_school": "Washington State",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Jeff Stuebing",
    "winner_school": "Oregon",
    "loser": "Kevin Egleston",
    "loser_school": "Boston University",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Tom Jones",
    "winner_school": "Maryland",
    "loser": "Tim Morrison",
    "loser_school": "Rider",
    "result": "Fall 2:56"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Perry Hummel",
    "winner_school": "Iowa State",
    "loser": "Dave Hagg",
    "loser_school": "Army",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Scott Mansur",
    "winner_school": "Portland State",
    "loser": "Bill Boyd",
    "loser_school": "Brigham Young",
    "result": "Fall 2:31"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Jamie Milkovich",
    "winner_school": "Auburn",
    "loser": "Neil Weiner",
    "loser_school": "Illinois State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Jeff Dillman",
    "winner_school": "Nebraska",
    "loser": "Woody Vandenburg",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Colin Grissom",
    "loser_school": "Yale",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Mark Gronowski",
    "winner_school": "Eastern Illinois",
    "loser": "Homer Lord",
    "loser_school": "Boise State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "Mike Sheets",
    "loser_school": "Oklahoma State",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "John Hanrahan",
    "winner_school": "Penn State",
    "loser": "Jeff Parker",
    "loser_school": "Louisiana State",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Matt Reiss",
    "winner_school": "NC State",
    "loser": "Mark Johnson",
    "loser_school": "Cleveland State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Steve Foley",
    "loser_school": "Michigan State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Steve Reedy",
    "winner_school": "Kent State",
    "loser": "Jeff Stuebing",
    "loser_school": "Oregon",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Perry Hummel",
    "winner_school": "Iowa State",
    "loser": "Tom Jones",
    "loser_school": "Maryland",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Jamie Milkovich",
    "winner_school": "Auburn",
    "loser": "Scott Mansur",
    "loser_school": "Portland State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Jeff Dillman",
    "loser_school": "Nebraska",
    "result": "MD 28-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "Mark Gronowski",
    "loser_school": "Eastern Illinois",
    "result": "MD 13-4"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Jeff Parker",
    "winner_school": "Louisiana State",
    "loser": "Trent Taylor",
    "loser_school": "Illinois",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Steve Foley",
    "winner_school": "Michigan State",
    "loser": "Efonda Sproles",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "Dave Hagg",
    "winner_school": "Army",
    "loser": "Tom Jones",
    "loser_school": "Maryland",
    "result": "MD 16-6"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Mark Gronowski",
    "loser_school": "Eastern Illinois",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "John Hanrahan",
    "winner_school": "Penn State",
    "loser": "Matt Reiss",
    "loser_school": "NC State",
    "result": "Dec 13-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "Steve Reedy",
    "loser_school": "Kent State",
    "result": "Dec 10-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Perry Hummel",
    "winner_school": "Iowa State",
    "loser": "Jamie Milkovich",
    "loser_school": "Auburn",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "John Reich",
    "loser_school": "Navy",
    "result": "Dec 15-9"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Matt Reiss",
    "winner_school": "NC State",
    "loser": "Jeff Parker",
    "loser_school": "Louisiana State",
    "result": "Dec 11-10"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Steve Reedy",
    "winner_school": "Kent State",
    "loser": "Steve Foley",
    "loser_school": "Michigan State",
    "result": "Dec 7-0"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Jamie Milkovich",
    "winner_school": "Auburn",
    "loser": "Dave Hagg",
    "loser_school": "Army",
    "result": "MD 11-2"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "John Reich",
    "loser_school": "Navy",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 433,
    "winner": "Steve Reedy",
    "winner_school": "Kent State",
    "loser": "Matt Reiss",
    "loser_school": "NC State",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 434,
    "winner": "Jamie Milkovich",
    "winner_school": "Auburn",
    "loser": "Mike Sheets",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Mike DeAnna",
    "winner_school": "Iowa",
    "loser": "John Hanrahan",
    "loser_school": "Penn State",
    "result": "Fall 0:43"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "Perry Hummel",
    "loser_school": "Iowa State",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Perry Hummel",
    "winner_school": "Iowa State",
    "loser": "Steve Reedy",
    "loser_school": "Kent State",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "John Hanrahan",
    "winner_school": "Penn State",
    "loser": "Jamie Milkovich",
    "loser_school": "Auburn",
    "result": "Dec 12-8"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Matt Reiss",
    "loser_school": "NC State",
    "result": "DEF"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Jamie Milkovich",
    "winner_school": "Auburn",
    "loser": "Steve Reedy",
    "loser_school": "Kent State",
    "result": "Dec 9-4"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "John Hanrahan",
    "winner_school": "Penn State",
    "loser": "Perry Hummel",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "Mike DeAnna",
    "loser_school": "Iowa",
    "result": "Dec 10-4"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Dennis McCormick",
    "winner_school": "Eastern Illinois",
    "loser": "Gary Chadwick",
    "loser_school": "Air Force",
    "result": "Dec 11-7"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Rey Martinez",
    "winner_school": "Oklahoma State",
    "loser": "Mark Loomis",
    "loser_school": "CSU Bakersfield",
    "result": "MD 21-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Marty Ryan",
    "winner_school": "Oregon State",
    "loser": "Jay Llewellyn",
    "loser_school": "Northern Iowa",
    "result": "MD 21-9"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Bill Braseth",
    "winner_school": "Boise State",
    "loser": "Butch Revils",
    "loser_school": "East Carolina",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Charlie Heller",
    "winner_school": "Clarion",
    "loser": "Tom Rankin",
    "loser_school": "Arizona State",
    "result": "Fall 6:54"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Mark Phillips",
    "winner_school": "Navy",
    "loser": "Dan Kay",
    "loser_school": "Toledo",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Larry Meierotto",
    "winner_school": "Chattanooga",
    "loser": "Gary Comelio",
    "loser_school": "Georgia Tech",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Eli Blazeff",
    "winner_school": "Auburn",
    "loser": "Kevin Walzak",
    "loser_school": "College of New Jersey",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Rey Martinez",
    "winner_school": "Oklahoma State",
    "loser": "Mike Miller",
    "loser_school": "Oregon",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Kurt Honis",
    "loser_school": "Syracuse",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Mike D'Ambrose",
    "loser_school": "Indiana",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Dennis McCormick",
    "winner_school": "Eastern Illinois",
    "loser": "Brad Tufto",
    "loser_school": "Indiana State",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Dave Brouhard",
    "winner_school": "San Jose State",
    "loser": "Doug Perkins",
    "loser_school": "Stanford",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Fred Wagoner",
    "winner_school": "Boston University",
    "loser": "Jeff Needs",
    "loser_school": "Brigham Young",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Ed Potokar",
    "winner_school": "Ohio State",
    "loser": "Pat Carney",
    "loser_school": "Illinois State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Tom Kolopus",
    "loser_school": "Cleveland State",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Gerry Volm",
    "winner_school": "Rider",
    "loser": "Mark Luby",
    "loser_school": "Minnesota",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Dave Young",
    "winner_school": "Missouri",
    "loser": "Jim Hall",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Marty Ryan",
    "winner_school": "Oregon State",
    "loser": "Bill Braseth",
    "loser_school": "Boise State",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Charlie Heller",
    "winner_school": "Clarion",
    "loser": "Mark Phillips",
    "loser_school": "Navy",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Eli Blazeff",
    "winner_school": "Auburn",
    "loser": "Larry Meierotto",
    "loser_school": "Chattanooga",
    "result": "Fall 1:08"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Rey Martinez",
    "loser_school": "Oklahoma State",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Dennis McCormick",
    "loser_school": "Eastern Illinois",
    "result": "MD 24-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Dave Brouhard",
    "winner_school": "San Jose State",
    "loser": "Fred Wagoner",
    "loser_school": "Boston University",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Dave Allen",
    "winner_school": "Iowa State",
    "loser": "Ed Potokar",
    "loser_school": "Ohio State",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Dave Young",
    "winner_school": "Missouri",
    "loser": "Gerry Volm",
    "loser_school": "Rider",
    "result": "Dec 9-2"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 289,
    "winner": "Tom Rankin",
    "winner_school": "Arizona State",
    "loser": "Mark Phillips",
    "loser_school": "Navy",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 290,
    "winner": "Rey Martinez",
    "winner_school": "Oklahoma State",
    "loser": "Kurt Honis",
    "loser_school": "Syracuse",
    "result": "Dec 13-9"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 291,
    "winner": "Mike D'Ambrose",
    "winner_school": "Indiana",
    "loser": "Dennis McCormick",
    "loser_school": "Eastern Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 292,
    "winner": "Jim Hall",
    "winner_school": "Oklahoma",
    "loser": "Gerry Volm",
    "loser_school": "Rider",
    "result": "MD 13-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Charlie Heller",
    "winner_school": "Clarion",
    "loser": "Marty Ryan",
    "loser_school": "Oregon State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Eli Blazeff",
    "loser_school": "Auburn",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Dave Brouhard",
    "loser_school": "San Jose State",
    "result": "Fall 5:56"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Dave Young",
    "winner_school": "Missouri",
    "loser": "Dave Allen",
    "loser_school": "Iowa State",
    "result": "FOR"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Marty Ryan",
    "winner_school": "Oregon State",
    "loser": "Tom Rankin",
    "loser_school": "Arizona State",
    "result": "Dec 7-4 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Eli Blazeff",
    "winner_school": "Auburn",
    "loser": "Rey Martinez",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Dave Brouhard",
    "winner_school": "San Jose State",
    "loser": "Mike D'Ambrose",
    "loser_school": "Indiana",
    "result": "Dec 10-7"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Jim Hall",
    "winner_school": "Oklahoma",
    "loser": "Dave Allen",
    "loser_school": "Iowa State",
    "result": "FOR"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 435,
    "winner": "Marty Ryan",
    "winner_school": "Oregon State",
    "loser": "Eli Blazeff",
    "loser_school": "Auburn",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 436,
    "winner": "Jim Hall",
    "winner_school": "Oklahoma",
    "loser": "Dave Brouhard",
    "loser_school": "San Jose State",
    "result": "Fall 3:56"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Charlie Heller",
    "winner_school": "Clarion",
    "loser": "Colin Kilrain",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Dave Young",
    "loser_school": "Missouri",
    "result": "Fall 7:18"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Marty Ryan",
    "winner_school": "Oregon State",
    "loser": "Dave Young",
    "loser_school": "Missouri",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Jim Hall",
    "loser_school": "Oklahoma",
    "result": "Dec 3-0"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "Eli Blazeff",
    "winner_school": "Auburn",
    "loser": "Dave Brouhard",
    "loser_school": "San Jose State",
    "result": "Fall 5:29"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Dave Young",
    "winner_school": "Missouri",
    "loser": "Jim Hall",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Colin Kilrain",
    "winner_school": "Lehigh",
    "loser": "Marty Ryan",
    "loser_school": "Oregon State",
    "result": "MD 9-1"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Charlie Heller",
    "loser_school": "Clarion",
    "result": "Fall 4:15"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Jerry Rodriguez",
    "winner_school": "NC State",
    "loser": "Jerry Morrison",
    "loser_school": "San Jose State",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Joe Atiyeh",
    "winner_school": "Louisiana State",
    "loser": "Lorant Ipacs",
    "loser_school": "Ohio",
    "result": "Dec 13-12"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Tod Giles",
    "loser_school": "Rhode Island",
    "result": "Fall 7:18"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Henry Milligan",
    "winner_school": "Princeton",
    "loser": "Wayne Christian",
    "loser_school": "Cal Poly",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Joe Gormally",
    "winner_school": "Northern Iowa",
    "loser": "Eric Neily",
    "loser_school": "Ohio State",
    "result": "MD 23-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "John Forshee",
    "winner_school": "Iowa State",
    "loser": "Craig Jennings",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Tom Martucci",
    "winner_school": "College of New Jersey",
    "loser": "Dave Doll",
    "loser_school": "Rider",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Harold Wittman",
    "winner_school": "Boise State",
    "loser": "Jim Baumgardner",
    "loser_school": "Oregon State",
    "result": "Fall 4:44"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Pat Murphy",
    "winner_school": "Chattanooga",
    "loser": "Jeff Roscoe",
    "loser_school": "West Virginia",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Milt Westlund",
    "winner_school": "Indiana State",
    "loser": "Mike Gatling",
    "loser_school": "Virginia Commonwealth",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Ryan Kelly",
    "winner_school": "Oregon",
    "loser": "Pat McKay",
    "loser_school": "Michigan",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Dan Morrow",
    "winner_school": "Washington State",
    "loser": "Edcar Thomas",
    "loser_school": "Oklahoma",
    "result": "Dec 14-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Tony Mantella",
    "winner_school": "Temple",
    "loser": "Jeff Esmont",
    "loser_school": "Ashland",
    "result": "MD 28-10"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Greg Hawkins",
    "winner_school": "Oklahoma State",
    "loser": "Tony Smith",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Craig Blackman",
    "winner_school": "Franklin and Marshall",
    "loser": "Pete Bush",
    "loser_school": "Iowa",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Mark Downing",
    "winner_school": "Clarion",
    "loser": "Brad Moseley",
    "loser_school": "Missouri",
    "result": "Fall 7:58"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Joe Atiyeh",
    "winner_school": "Louisiana State",
    "loser": "Jerry Rodriguez",
    "loser_school": "NC State",
    "result": "Fall 3:18"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Henry Milligan",
    "loser_school": "Princeton",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "John Forshee",
    "winner_school": "Iowa State",
    "loser": "Joe Gormally",
    "loser_school": "Northern Iowa",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Tom Martucci",
    "winner_school": "College of New Jersey",
    "loser": "Harold Wittman",
    "loser_school": "Boise State",
    "result": "Fall 7:02"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Milt Westlund",
    "winner_school": "Indiana State",
    "loser": "Pat Murphy",
    "loser_school": "Chattanooga",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Ryan Kelly",
    "winner_school": "Oregon",
    "loser": "Dan Morrow",
    "loser_school": "Washington State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Tony Mantella",
    "winner_school": "Temple",
    "loser": "Greg Hawkins",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Craig Blackman",
    "winner_school": "Franklin and Marshall",
    "loser": "Mark Downing",
    "loser_school": "Clarion",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 293,
    "winner": "Henry Milligan",
    "winner_school": "Princeton",
    "loser": "Tod Giles",
    "loser_school": "Rhode Island",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 294,
    "winner": "Dave Doll",
    "winner_school": "Rider",
    "loser": "Harold Wittman",
    "loser_school": "Boise State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 295,
    "winner": "Pat McKay",
    "winner_school": "Michigan",
    "loser": "Dan Morrow",
    "loser_school": "Washington State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 296,
    "winner": "Greg Hawkins",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Esmont",
    "loser_school": "Ashland",
    "result": "MD 18-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Joe Atiyeh",
    "loser_school": "Louisiana State",
    "result": "FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Tom Martucci",
    "winner_school": "College of New Jersey",
    "loser": "John Forshee",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Ryan Kelly",
    "winner_school": "Oregon",
    "loser": "Milt Westlund",
    "loser_school": "Indiana State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Tony Mantella",
    "winner_school": "Temple",
    "loser": "Craig Blackman",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "John Forshee",
    "winner_school": "Iowa State",
    "loser": "Dave Doll",
    "loser_school": "Rider",
    "result": "Dec 1-0"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Pat McKay",
    "winner_school": "Michigan",
    "loser": "Milt Westlund",
    "loser_school": "Indiana State",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Craig Blackman",
    "winner_school": "Franklin and Marshall",
    "loser": "Greg Hawkins",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 437,
    "winner": "John Forshee",
    "winner_school": "Iowa State",
    "loser": "Henry Milligan",
    "loser_school": "Princeton",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 438,
    "winner": "Craig Blackman",
    "winner_school": "Franklin and Marshall",
    "loser": "Pat McKay",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Tom Martucci",
    "winner_school": "College of New Jersey",
    "loser": "Geno Savegnago",
    "loser_school": "Eastern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Tony Mantella",
    "winner_school": "Temple",
    "loser": "Ryan Kelly",
    "loser_school": "Oregon",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Ryan Kelly",
    "winner_school": "Oregon",
    "loser": "John Forshee",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Craig Blackman",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 5-1"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Henry Milligan",
    "winner_school": "Princeton",
    "loser": "Pat McKay",
    "loser_school": "Michigan",
    "result": "Dec 10-8"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Craig Blackman",
    "winner_school": "Franklin and Marshall",
    "loser": "John Forshee",
    "loser_school": "Iowa State",
    "result": "Dec 6-3"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Geno Savegnago",
    "winner_school": "Eastern Illinois",
    "loser": "Ryan Kelly",
    "loser_school": "Oregon",
    "result": "Dec 8-2"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Tom Martucci",
    "winner_school": "College of New Jersey",
    "loser": "Tony Mantella",
    "loser_school": "Temple",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "Rick Chandler",
    "winner_school": "Southern Oregon",
    "loser": "J.L. Coon",
    "loser_school": "Utah State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Rick Romeo",
    "winner_school": "Missouri",
    "loser": "Dan Cook",
    "loser_school": "Oregon",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "Mike Evans",
    "winner_school": "Louisiana State",
    "loser": "Arnie Bagley",
    "loser_school": "Idaho State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Jeff Green",
    "loser_school": "Kentucky",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Brian Neal",
    "winner_school": "Iowa State",
    "loser": "Duane Koslowski",
    "loser_school": "Minnesota-Morris",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Rod Chamberlain",
    "winner_school": "Indiana",
    "loser": "Tab Thacker",
    "loser_school": "NC State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Bruce Baumgartner",
    "winner_school": "Indiana State",
    "loser": "Mike Holcomb",
    "loser_school": "Miami Ohio",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "Ray Wagner",
    "winner_school": "Kent State",
    "loser": "Rick Chandler",
    "loser_school": "Southern Oregon",
    "result": "Fall 4:13"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Chuck Pinta",
    "winner_school": "Citadel",
    "loser": "Pat Ryan",
    "loser_school": "Navy",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Daryl Meyer",
    "loser_school": "Nebraska",
    "result": "Fall 0:25"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Mike Howe",
    "winner_school": "Northern Michigan",
    "loser": "John Kriebs",
    "loser_school": "Northern Iowa",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "Don Wagner",
    "winner_school": "Millersville",
    "loser": "Craig Schoene",
    "loser_school": "CSU Bakersfield",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Eric Klasson",
    "winner_school": "Michigan",
    "loser": "Evins Brantley",
    "loser_school": "Rhode Island",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "Paul Ruggiero",
    "winner_school": "Delaware",
    "loser": "Larry Cox",
    "loser_school": "Temple",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "Steve Sefter",
    "winner_school": "Penn State",
    "loser": "Paul Spieler",
    "loser_school": "Cal Poly",
    "result": "Fall 7:30"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "Curt Olson",
    "loser_school": "Clarion",
    "result": "Fall 1:38"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "Mike Rotunda",
    "winner_school": "Syracuse",
    "loser": "Sean Isgan",
    "loser_school": "Pittsburgh-Johnstown",
    "result": "MD 21-9"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Mike Evans",
    "winner_school": "Louisiana State",
    "loser": "Rick Romeo",
    "loser_school": "Missouri",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Brian Neal",
    "loser_school": "Iowa State",
    "result": "Fall 0:25"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Bruce Baumgartner",
    "winner_school": "Indiana State",
    "loser": "Rod Chamberlain",
    "loser_school": "Indiana",
    "result": "MD 21-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Ray Wagner",
    "winner_school": "Kent State",
    "loser": "Chuck Pinta",
    "loser_school": "Citadel",
    "result": "Fall 1:04"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Mike Howe",
    "loser_school": "Northern Michigan",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Eric Klasson",
    "winner_school": "Michigan",
    "loser": "Don Wagner",
    "loser_school": "Millersville",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Steve Sefter",
    "winner_school": "Penn State",
    "loser": "Paul Ruggiero",
    "loser_school": "Delaware",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "Mike Rotunda",
    "loser_school": "Syracuse",
    "result": "MD 24-6"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 297,
    "winner": "Jeff Green",
    "winner_school": "Kentucky",
    "loser": "Brian Neal",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 298,
    "winner": "Mike Holcomb",
    "winner_school": "Miami Ohio",
    "loser": "Rod Chamberlain",
    "loser_school": "Indiana",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 299,
    "winner": "Mike Howe",
    "winner_school": "Northern Michigan",
    "loser": "Daryl Meyer",
    "loser_school": "Nebraska",
    "result": "MD 9-1"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 300,
    "winner": "Curt Olson",
    "winner_school": "Clarion",
    "loser": "Mike Rotunda",
    "loser_school": "Syracuse",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Mike Evans",
    "loser_school": "Louisiana State",
    "result": "DQ"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Bruce Baumgartner",
    "winner_school": "Indiana State",
    "loser": "Ray Wagner",
    "loser_school": "Kent State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Eric Klasson",
    "loser_school": "Michigan",
    "result": "MD 15-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "Steve Sefter",
    "loser_school": "Penn State",
    "result": "Dec 12-5"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 417,
    "winner": "Mike Evans",
    "winner_school": "Louisiana State",
    "loser": "Jeff Green",
    "loser_school": "Kentucky",
    "result": "Fall 5:39"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 418,
    "winner": "Ray Wagner",
    "winner_school": "Kent State",
    "loser": "Mike Holcomb",
    "loser_school": "Miami Ohio",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 419,
    "winner": "Mike Howe",
    "winner_school": "Northern Michigan",
    "loser": "Eric Klasson",
    "loser_school": "Michigan",
    "result": "Fall 5:58"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 420,
    "winner": "Steve Sefter",
    "winner_school": "Penn State",
    "loser": "Curt Olson",
    "loser_school": "Clarion",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 439,
    "winner": "Ray Wagner",
    "winner_school": "Kent State",
    "loser": "Mike Evans",
    "loser_school": "Louisiana State",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 440,
    "winner": "Steve Sefter",
    "winner_school": "Penn State",
    "loser": "Mike Howe",
    "loser_school": "Northern Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Bruce Baumgartner",
    "winner_school": "Indiana State",
    "loser": "Steve Williams",
    "loser_school": "Oklahoma",
    "result": "Fall 1:32"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "Dan Severn",
    "loser_school": "Arizona State",
    "result": "MD 20-10"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 499,
    "winner": "Dan Severn",
    "winner_school": "Arizona State",
    "loser": "Ray Wagner",
    "loser_school": "Kent State",
    "result": "Fall 1:08"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 500,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Steve Sefter",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "UNL",
    "bout": 530,
    "winner": "Mike Evans",
    "winner_school": "Louisiana State",
    "loser": "Mike Howe",
    "loser_school": "Northern Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Ray Wagner",
    "winner_school": "Kent State",
    "loser": "Steve Sefter",
    "loser_school": "Penn State",
    "result": "Fall 4:51"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Steve Williams",
    "winner_school": "Oklahoma",
    "loser": "Dan Severn",
    "loser_school": "Arizona State",
    "result": "Fall 3:40"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "Bruce Baumgartner",
    "loser_school": "Indiana State",
    "result": "Fall 5:45"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
