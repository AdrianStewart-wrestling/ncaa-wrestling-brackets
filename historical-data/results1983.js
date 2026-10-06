// 1983 NCAA Division I Wrestling Championships (3/10/1983 to 3/12/1983 at Oklahoma City). Weight classes 118-275. Consolation: SEMIFINALIST WRESTLEBACK (rounds SfConsR1-R4).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1983 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1983-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Randy Willingham",
    "winner_school": "Oklahoma State",
    "loser": "Chuck Jones",
    "loser_school": "Appalachian State",
    "result": "Fall 2:42"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "Mike Erb",
    "winner_school": "Oregon",
    "loser": "Don Mabry",
    "loser_school": "Arizona State",
    "result": "MD 18-9"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 2001,
    "winner": "Adam Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Bob Hallman",
    "loser_school": "Northern Iowa",
    "result": "Dec 15-10"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 3001,
    "winner": "Carl DeStefanis",
    "winner_school": "Penn State",
    "loser": "Greg Lonning",
    "loser_school": "Luther",
    "result": "MD 14-3"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 4001,
    "winner": "John Thorn",
    "winner_school": "Iowa State",
    "loser": "Lou Ferullo",
    "loser_school": "New Hampshire",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Jamie Kasser",
    "winner_school": "Clarion",
    "loser": "David Jones",
    "loser_school": "Montana State",
    "result": "MD 18-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Todd Cummings",
    "winner_school": "Bloomsburg",
    "loser": "Marc Sodano",
    "loser_school": "Wilkes",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Don Haddad",
    "winner_school": "Colorado State",
    "loser": "Rodney Hawthorne",
    "loser_school": "Oregon State",
    "result": "MD 21-13"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Charlie Heard",
    "winner_school": "Chattanooga",
    "loser": "Mike Erb",
    "loser_school": "Oregon",
    "result": "Dec 14-11"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Randy Willingham",
    "winner_school": "Oklahoma State",
    "loser": "Robert Wimberly",
    "loser_school": "Ohio",
    "result": "Fall 3:44"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Harrell Millhouse",
    "winner_school": "Michigan State",
    "loser": "Tracy Yeates",
    "loser_school": "Boise State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "John Thorn",
    "winner_school": "Iowa State",
    "loser": "Tim Riley",
    "loser_school": "Iowa",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Mike Clevenger",
    "winner_school": "Louisiana State",
    "loser": "Bob Turner",
    "loser_school": "Army",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Al Gutierrez",
    "winner_school": "Cal Poly",
    "loser": "Ed Giese",
    "loser_school": "Minnesota",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Adam Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Al Palacio",
    "loser_school": "North Carolina",
    "result": "Fall 6:35"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Joe Spinazzola",
    "winner_school": "Missouri",
    "loser": "Matt Campbell",
    "loser_school": "Nebraska",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Robin Morris",
    "winner_school": "Wisconsin",
    "loser": "Carl DeStefanis",
    "loser_school": "Penn State",
    "result": "Fall 1:18"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Bob Dickman",
    "winner_school": "Indiana State",
    "loser": "Todd Sterr",
    "loser_school": "Clemson",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Roger Desart",
    "winner_school": "Nevada-Las Vegas",
    "loser": "John Worley",
    "loser_school": "Maryland",
    "result": "Dec 16-10"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Tony Calderaio",
    "winner_school": "Slippery Rock",
    "loser": "Joe Downey",
    "loser_school": "Hofstra",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Brad Anderson",
    "winner_school": "Brigham Young",
    "loser": "Bobby Weaver",
    "loser_school": "Lehigh",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 251,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Lou Ferullo",
    "loser_school": "New Hampshire",
    "result": "MD 17-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 1251,
    "winner": "Bob Hallman",
    "winner_school": "Northern Iowa",
    "loser": "Al Palacio",
    "loser_school": "North Carolina",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Jamie Kasser",
    "winner_school": "Clarion",
    "loser": "Todd Cummings",
    "loser_school": "Bloomsburg",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Charlie Heard",
    "winner_school": "Chattanooga",
    "loser": "Don Haddad",
    "loser_school": "Colorado State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Randy Willingham",
    "winner_school": "Oklahoma State",
    "loser": "Harrell Millhouse",
    "loser_school": "Michigan State",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "John Thorn",
    "winner_school": "Iowa State",
    "loser": "Mike Clevenger",
    "loser_school": "Louisiana State",
    "result": "Dec 6-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Adam Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Al Gutierrez",
    "loser_school": "Cal Poly",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Robin Morris",
    "winner_school": "Wisconsin",
    "loser": "Joe Spinazzola",
    "loser_school": "Missouri",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Bob Dickman",
    "winner_school": "Indiana State",
    "loser": "Roger Desart",
    "loser_school": "Nevada-Las Vegas",
    "result": "Fall 3:35"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Tony Calderaio",
    "winner_school": "Slippery Rock",
    "loser": "Brad Anderson",
    "loser_school": "Brigham Young",
    "result": "MD 11-3"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Mike Erb",
    "winner_school": "Oregon",
    "loser": "Don Haddad",
    "loser_school": "Colorado State",
    "result": "Fall 1:39"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Mike Clevenger",
    "loser_school": "Louisiana State",
    "result": "Dec 6-2"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Al Gutierrez",
    "winner_school": "Cal Poly",
    "loser": "Bob Hallman",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Roger Desart",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Todd Sterr",
    "loser_school": "Clemson",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Charlie Heard",
    "winner_school": "Chattanooga",
    "loser": "Jamie Kasser",
    "loser_school": "Clarion",
    "result": "MD 19-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "John Thorn",
    "winner_school": "Iowa State",
    "loser": "Randy Willingham",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Adam Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Robin Morris",
    "loser_school": "Wisconsin",
    "result": "MD 21-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Bob Dickman",
    "winner_school": "Indiana State",
    "loser": "Tony Calderaio",
    "loser_school": "Slippery Rock",
    "result": "MD 14-6"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Mike Erb",
    "winner_school": "Oregon",
    "loser": "Jamie Kasser",
    "loser_school": "Clarion",
    "result": "Dec 9-8"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Randy Willingham",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Al Gutierrez",
    "winner_school": "Cal Poly",
    "loser": "Robin Morris",
    "loser_school": "Wisconsin",
    "result": "Dec 13-8"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Tony Calderaio",
    "winner_school": "Slippery Rock",
    "loser": "Roger Desart",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Mike Erb",
    "loser_school": "Oregon",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Tony Calderaio",
    "winner_school": "Slippery Rock",
    "loser": "Al Gutierrez",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Charlie Heard",
    "winner_school": "Chattanooga",
    "loser": "John Thorn",
    "loser_school": "Iowa State",
    "result": "MD 25-7"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Adam Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Bob Dickman",
    "loser_school": "Indiana State",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Bob Dickman",
    "winner_school": "Indiana State",
    "loser": "Tim Riley",
    "loser_school": "Iowa",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "John Thorn",
    "winner_school": "Iowa State",
    "loser": "Tony Calderaio",
    "loser_school": "Slippery Rock",
    "result": "Dec 10-8"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Mike Erb",
    "winner_school": "Oregon",
    "loser": "Al Gutierrez",
    "loser_school": "Cal Poly",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Tim Riley",
    "winner_school": "Iowa",
    "loser": "Tony Calderaio",
    "loser_school": "Slippery Rock",
    "result": "MD 22-5"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Bob Dickman",
    "winner_school": "Indiana State",
    "loser": "John Thorn",
    "loser_school": "Iowa State",
    "result": "Dec 7-4"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Adam Cuestas",
    "winner_school": "CSU Bakersfield",
    "loser": "Charlie Heard",
    "loser_school": "Chattanooga",
    "result": "MD 14-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Al Francis",
    "winner_school": "Nebraska",
    "loser": "Lyle Clem",
    "loser_school": "North Dakota State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Dan Foldesy",
    "winner_school": "Cleveland State",
    "loser": "Chris Davis",
    "loser_school": "Illinois",
    "result": "Dec 15-14"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Jim Pagano",
    "winner_school": "Virginia",
    "loser": "Bruce Malinowski",
    "loser_school": "Missouri",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Darrow Traylor",
    "winner_school": "Boston University",
    "loser": "Patrick McCarthy",
    "loser_school": "Miami Ohio",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Scott Lynch",
    "winner_school": "Penn State",
    "loser": "Don Stevens",
    "loser_school": "SIU-Edwardsville",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Chris Luttrell",
    "winner_school": "New Mexico",
    "loser": "Kris Rowlette",
    "loser_school": "Wilkes",
    "result": "Fall 6:20"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Derek Porter",
    "winner_school": "Eastern Illinois",
    "loser": "Lang Davidson",
    "loser_school": "Washington State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Barry Davis",
    "winner_school": "Iowa",
    "loser": "Al Francis",
    "loser_school": "Nebraska",
    "result": "Fall 4:07"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Randy Majors",
    "winner_school": "Northern Iowa",
    "loser": "Leonard Champaign",
    "loser_school": "Chattanooga",
    "result": "Fall 3:20"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Gary Bohay",
    "winner_school": "Arizona State",
    "loser": "Chris Bell",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Ed Pidgeon",
    "winner_school": "Hofstra",
    "loser": "Miles Hancock",
    "loser_school": "Oregon",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Jerry Johnson",
    "winner_school": "Slippery Rock",
    "loser": "John Aumiller",
    "loser_school": "North Carolina",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Frank Famiano",
    "winner_school": "SUNY-Brockport",
    "loser": "Tom Pecora",
    "loser_school": "Marquette",
    "result": "Fall 6:47"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Scott Barrett",
    "winner_school": "Boise State",
    "loser": "Albert Perez",
    "loser_school": "San Jose State",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Steve DePetro",
    "winner_school": "Northwestern",
    "loser": "Mark Perry",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "Rusty Fiste",
    "loser_school": "Princeton",
    "result": "Fall 3:36"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Greg Dravis",
    "loser_school": "Minnesota-Morris",
    "result": "MD 18-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Dan Foldesy",
    "winner_school": "Cleveland State",
    "loser": "Jim Pagano",
    "loser_school": "Virginia",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Scott Lynch",
    "winner_school": "Penn State",
    "loser": "Darrow Traylor",
    "loser_school": "Boston University",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Derek Porter",
    "winner_school": "Eastern Illinois",
    "loser": "Chris Luttrell",
    "loser_school": "New Mexico",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Barry Davis",
    "winner_school": "Iowa",
    "loser": "Randy Majors",
    "loser_school": "Northern Iowa",
    "result": "MD 22-11"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Gary Bohay",
    "winner_school": "Arizona State",
    "loser": "Ed Pidgeon",
    "loser_school": "Hofstra",
    "result": "MD 18-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Frank Famiano",
    "winner_school": "SUNY-Brockport",
    "loser": "Jerry Johnson",
    "loser_school": "Slippery Rock",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Scott Barrett",
    "winner_school": "Boise State",
    "loser": "Steve DePetro",
    "loser_school": "Northwestern",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "Rich Santoro",
    "loser_school": "Lehigh",
    "result": "MD 11-2"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 265,
    "winner": "Don Stevens",
    "winner_school": "SIU-Edwardsville",
    "loser": "Darrow Traylor",
    "loser_school": "Boston University",
    "result": "MD 12-2"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 266,
    "winner": "Randy Majors",
    "winner_school": "Northern Iowa",
    "loser": "Al Francis",
    "loser_school": "Nebraska",
    "result": "MD 12-0"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 267,
    "winner": "Chris Bell",
    "winner_school": "Wyoming",
    "loser": "Ed Pidgeon",
    "loser_school": "Hofstra",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 268,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Rusty Fiste",
    "loser_school": "Princeton",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Scott Lynch",
    "winner_school": "Penn State",
    "loser": "Dan Foldesy",
    "loser_school": "Cleveland State",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Barry Davis",
    "winner_school": "Iowa",
    "loser": "Derek Porter",
    "loser_school": "Eastern Illinois",
    "result": "MD 14-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Gary Bohay",
    "winner_school": "Arizona State",
    "loser": "Frank Famiano",
    "loser_school": "SUNY-Brockport",
    "result": "Fall 4:37"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "Scott Barrett",
    "loser_school": "Boise State",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Don Stevens",
    "winner_school": "SIU-Edwardsville",
    "loser": "Dan Foldesy",
    "loser_school": "Cleveland State",
    "result": "MD 17-4"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Randy Majors",
    "winner_school": "Northern Iowa",
    "loser": "Derek Porter",
    "loser_school": "Eastern Illinois",
    "result": "MD 13-5"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Frank Famiano",
    "winner_school": "SUNY-Brockport",
    "loser": "Chris Bell",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Scott Barrett",
    "loser_school": "Boise State",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 423,
    "winner": "Randy Majors",
    "winner_school": "Northern Iowa",
    "loser": "Don Stevens",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 10-7"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 424,
    "winner": "Frank Famiano",
    "winner_school": "SUNY-Brockport",
    "loser": "Rich Santoro",
    "loser_school": "Lehigh",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Barry Davis",
    "winner_school": "Iowa",
    "loser": "Scott Lynch",
    "loser_school": "Penn State",
    "result": "Dec 8-5"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Gary Bohay",
    "winner_school": "Arizona State",
    "loser": "Kevin Darkus",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Randy Majors",
    "winner_school": "Northern Iowa",
    "loser": "Kevin Darkus",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Scott Lynch",
    "winner_school": "Penn State",
    "loser": "Frank Famiano",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Rich Santoro",
    "winner_school": "Lehigh",
    "loser": "Don Stevens",
    "loser_school": "SIU-Edwardsville",
    "result": "MD 14-2"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Kevin Darkus",
    "winner_school": "Iowa State",
    "loser": "Frank Famiano",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Randy Majors",
    "winner_school": "Northern Iowa",
    "loser": "Scott Lynch",
    "loser_school": "Penn State",
    "result": "Dec 7-5"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Barry Davis",
    "winner_school": "Iowa",
    "loser": "Gary Bohay",
    "loser_school": "Arizona State",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Walt Markee",
    "winner_school": "Oregon State",
    "loser": "Don Stuckly",
    "loser_school": "Purdue",
    "result": "Dec 8-5"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Rick Burton",
    "winner_school": "Ohio State",
    "loser": "John Mittlestead",
    "loser_school": "San Jose State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Bill Marino",
    "winner_school": "Penn State",
    "loser": "Steve Carr",
    "loser_school": "North Dakota State",
    "result": "Fall 3:49"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Jim Edwards",
    "winner_school": "Louisiana State",
    "loser": "Bob Adams",
    "loser_school": "Augsburg",
    "result": "Dec 15-9"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Nick Karrantinos",
    "winner_school": "Augustana SD",
    "loser": "Paul Bastianelli",
    "loser_school": "Delaware",
    "result": "Fall 4:50"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Clar Anderson",
    "winner_school": "Oklahoma State",
    "loser": "Ralph Harrison",
    "loser_school": "New Mexico",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Tim Cochran",
    "winner_school": "Tennessee",
    "loser": "Brent Lofstedt",
    "loser_school": "Southern Oregon",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Khris Whelan",
    "winner_school": "Missouri",
    "loser": "Mark Dugan",
    "loser_school": "Maryland",
    "result": "MD 23-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Rick Burton",
    "winner_school": "Ohio State",
    "loser": "Mike Enzien",
    "loser_school": "Boston University",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Rob Parent",
    "winner_school": "Central Michigan",
    "loser": "Nick King",
    "loser_school": "Yale",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "John Parr",
    "loser_school": "Virginia",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Gary Scriven",
    "winner_school": "Weber State",
    "loser": "Walt Markee",
    "loser_school": "Oregon State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Mark Ciccarello",
    "winner_school": "Clarion",
    "loser": "Tom Seamans",
    "loser_school": "Wyoming",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Ricky Talley",
    "winner_school": "Chattanooga",
    "loser": "Vince Bynum",
    "loser_school": "NC State",
    "result": "Fall 3:27"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Jeff Kerber",
    "winner_school": "Iowa",
    "loser": "Mike Catania",
    "loser_school": "Syracuse",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Scott Leasure",
    "winner_school": "Illinois",
    "loser": "Jason Diggs",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Tom Riley",
    "winner_school": "Arizona State",
    "loser": "Kent Walrack",
    "loser_school": "Boise State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Pete Schuyler",
    "winner_school": "Lehigh",
    "loser": "Chris Marisette",
    "loser_school": "Nebraska",
    "result": "MD 16-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "134",
    "bout": 253,
    "winner": "John Mittlestead",
    "winner_school": "San Jose State",
    "loser": "Mike Enzien",
    "loser_school": "Boston University",
    "result": "Fall 3:40"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Bill Marino",
    "winner_school": "Penn State",
    "loser": "Jim Edwards",
    "loser_school": "Louisiana State",
    "result": "Fall 4:59"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Clar Anderson",
    "winner_school": "Oklahoma State",
    "loser": "Nick Karrantinos",
    "loser_school": "Augustana SD",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Khris Whelan",
    "winner_school": "Missouri",
    "loser": "Tim Cochran",
    "loser_school": "Tennessee",
    "result": "Fall 4:36"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Rick Burton",
    "winner_school": "Ohio State",
    "loser": "Rob Parent",
    "loser_school": "Central Michigan",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "Gary Scriven",
    "loser_school": "Weber State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Mark Ciccarello",
    "winner_school": "Clarion",
    "loser": "Ricky Talley",
    "loser_school": "Chattanooga",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Jeff Kerber",
    "winner_school": "Iowa",
    "loser": "Scott Leasure",
    "loser_school": "Illinois",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Pete Schuyler",
    "winner_school": "Lehigh",
    "loser": "Tom Riley",
    "loser_school": "Arizona State",
    "result": "Dec 9-2"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 269,
    "winner": "Ralph Harrison",
    "winner_school": "New Mexico",
    "loser": "Nick Karrantinos",
    "loser_school": "Augustana SD",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 270,
    "winner": "John Mittlestead",
    "winner_school": "San Jose State",
    "loser": "Rob Parent",
    "loser_school": "Central Michigan",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 271,
    "winner": "Gary Scriven",
    "winner_school": "Weber State",
    "loser": "John Parr",
    "loser_school": "Virginia",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 272,
    "winner": "Scott Leasure",
    "winner_school": "Illinois",
    "loser": "Mike Catania",
    "loser_school": "Syracuse",
    "result": "Dec 12-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Clar Anderson",
    "winner_school": "Oklahoma State",
    "loser": "Bill Marino",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Rick Burton",
    "winner_school": "Ohio State",
    "loser": "Khris Whelan",
    "loser_school": "Missouri",
    "result": "Dec 13-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "Mark Ciccarello",
    "loser_school": "Clarion",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Jeff Kerber",
    "winner_school": "Iowa",
    "loser": "Pete Schuyler",
    "loser_school": "Lehigh",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Bill Marino",
    "winner_school": "Penn State",
    "loser": "Ralph Harrison",
    "loser_school": "New Mexico",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Khris Whelan",
    "winner_school": "Missouri",
    "loser": "John Mittlestead",
    "loser_school": "San Jose State",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Gary Scriven",
    "winner_school": "Weber State",
    "loser": "Mark Ciccarello",
    "loser_school": "Clarion",
    "result": "Dec 11-10"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Pete Schuyler",
    "winner_school": "Lehigh",
    "loser": "Scott Leasure",
    "loser_school": "Illinois",
    "result": "MD 11-2"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 425,
    "winner": "Khris Whelan",
    "winner_school": "Missouri",
    "loser": "Bill Marino",
    "loser_school": "Penn State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 426,
    "winner": "Pete Schuyler",
    "winner_school": "Lehigh",
    "loser": "Gary Scriven",
    "loser_school": "Weber State",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Clar Anderson",
    "winner_school": "Oklahoma State",
    "loser": "Rick Burton",
    "loser_school": "Ohio State",
    "result": "MD 11-3"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Clint Burke",
    "winner_school": "Oklahoma",
    "loser": "Jeff Kerber",
    "loser_school": "Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Khris Whelan",
    "winner_school": "Missouri",
    "loser": "Jeff Kerber",
    "loser_school": "Iowa",
    "result": "Fall 7:43 SV"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Pete Schuyler",
    "winner_school": "Lehigh",
    "loser": "Rick Burton",
    "loser_school": "Ohio State",
    "result": "MD 17-2"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 523,
    "winner": "Bill Marino",
    "winner_school": "Penn State",
    "loser": "Gary Scriven",
    "loser_school": "Weber State",
    "result": "Dec 5-0"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Jeff Kerber",
    "winner_school": "Iowa",
    "loser": "Rick Burton",
    "loser_school": "Ohio State",
    "result": "MD 13-3"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Pete Schuyler",
    "winner_school": "Lehigh",
    "loser": "Khris Whelan",
    "loser_school": "Missouri",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Clar Anderson",
    "winner_school": "Oklahoma State",
    "loser": "Clint Burke",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Darryl Leslie",
    "winner_school": "RIT",
    "loser": "Dave Gable",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Steve Koob",
    "winner_school": "NC State",
    "loser": "Cliff Berger",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 2004,
    "winner": "David Barnes",
    "winner_school": "San Jose State",
    "loser": "Dave Delong",
    "loser_school": "Indiana",
    "result": "Dec 11-6"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 3004,
    "winner": "Philip Gottlick",
    "winner_school": "Drexel",
    "loser": "Jeff Barksdale",
    "loser_school": "Cal Poly",
    "result": "Fall 4:23"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4004,
    "winner": "Morgan Woodhouse",
    "winner_school": "Brigham Young",
    "loser": "Scott Wiggen",
    "loser_school": "Stanford",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 5004,
    "winner": "Bob Bury",
    "winner_school": "Penn State",
    "loser": "Don Henry",
    "loser_school": "Slippery Rock",
    "result": "MD 11-2"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 6004,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Darren Abel",
    "loser_school": "Oklahoma",
    "result": "Fall 1:57"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Mike Schmidlin",
    "winner_school": "Cal State Fullerton",
    "loser": "Eric Hershberger",
    "loser_school": "Louisiana State",
    "result": "Fall 6:07"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Randy Conrad",
    "winner_school": "Iowa State",
    "loser": "David Barnes",
    "loser_school": "San Jose State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Jesse Reyes",
    "winner_school": "CSU Bakersfield",
    "loser": "Jim Hildebrand",
    "loser_school": "Oregon",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Andy McNerney",
    "winner_school": "Harvard",
    "loser": "Darryl Leslie",
    "loser_school": "RIT",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Ken Nellis",
    "loser_school": "Clarion",
    "result": "MD 16-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "John Giura",
    "winner_school": "Wisconsin",
    "loser": "Adam Cohen",
    "loser_school": "Arizona State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Andy Seras",
    "winner_school": "SUNY-Albany",
    "loser": "Philip Gottlick",
    "loser_school": "Drexel",
    "result": "Fall 1:50"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Tony Arena",
    "winner_school": "Hofstra",
    "loser": "Tom Montminy",
    "loser_school": "Boston College",
    "result": "Fall 4:38"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Tony Surage",
    "winner_school": "Rutgers",
    "loser": "Tony Tracey",
    "loser_school": "New Mexico",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Al Freeman",
    "winner_school": "Nebraska",
    "loser": "Morgan Woodhouse",
    "loser_school": "Brigham Young",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Mike Langlais",
    "winner_school": "North Dakota State",
    "loser": "Dave Lundskog",
    "loser_school": "Weber State",
    "result": "MD 20-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Steve Koob",
    "winner_school": "NC State",
    "loser": "Jeff Hardy",
    "loser_school": "Ohio",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Bob Bury",
    "winner_school": "Penn State",
    "loser": "Bob Preston",
    "loser_school": "Toledo",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Nate Winner",
    "loser_school": "Southern Oregon",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Jake Cecere",
    "winner_school": "Duke",
    "loser": "Billy Moss",
    "loser_school": "Chattanooga",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Harlan Kistler",
    "winner_school": "Iowa",
    "loser": "Mark Demeo",
    "loser_school": "Syracuse",
    "result": "MD 11-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 254,
    "winner": "Ken Nellis",
    "winner_school": "Clarion",
    "loser": "Darren Abel",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Randy Conrad",
    "winner_school": "Iowa State",
    "loser": "Mike Schmidlin",
    "loser_school": "Cal State Fullerton",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Andy McNerney",
    "winner_school": "Harvard",
    "loser": "Jesse Reyes",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 2:36"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "John Giura",
    "loser_school": "Wisconsin",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Tony Arena",
    "winner_school": "Hofstra",
    "loser": "Andy Seras",
    "loser_school": "SUNY-Albany",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Al Freeman",
    "winner_school": "Nebraska",
    "loser": "Tony Surage",
    "loser_school": "Rutgers",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Steve Koob",
    "winner_school": "NC State",
    "loser": "Mike Langlais",
    "loser_school": "North Dakota State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Bob Bury",
    "loser_school": "Penn State",
    "result": "Dec 10-4 TB"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Harlan Kistler",
    "winner_school": "Iowa",
    "loser": "Jake Cecere",
    "loser_school": "Duke",
    "result": "Dec 9-4"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 273,
    "winner": "Jesse Reyes",
    "winner_school": "CSU Bakersfield",
    "loser": "Darryl Leslie",
    "loser_school": "RIT",
    "result": "MD 17-4"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 274,
    "winner": "John Giura",
    "winner_school": "Wisconsin",
    "loser": "Ken Nellis",
    "loser_school": "Clarion",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 275,
    "winner": "Tony Surage",
    "winner_school": "Rutgers",
    "loser": "Morgan Woodhouse",
    "loser_school": "Brigham Young",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 276,
    "winner": "Mark Demeo",
    "winner_school": "Syracuse",
    "loser": "Jake Cecere",
    "loser_school": "Duke",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Andy McNerney",
    "winner_school": "Harvard",
    "loser": "Randy Conrad",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Tony Arena",
    "loser_school": "Hofstra",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Al Freeman",
    "winner_school": "Nebraska",
    "loser": "Steve Koob",
    "loser_school": "NC State",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Harlan Kistler",
    "winner_school": "Iowa",
    "loser": "Leo Bailey",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-7"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Randy Conrad",
    "winner_school": "Iowa State",
    "loser": "Jesse Reyes",
    "loser_school": "CSU Bakersfield",
    "result": "MD 11-1"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "John Giura",
    "winner_school": "Wisconsin",
    "loser": "Tony Arena",
    "loser_school": "Hofstra",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Tony Surage",
    "winner_school": "Rutgers",
    "loser": "Steve Koob",
    "loser_school": "NC State",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Mark Demeo",
    "loser_school": "Syracuse",
    "result": "Dec 10-3"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 427,
    "winner": "Randy Conrad",
    "winner_school": "Iowa State",
    "loser": "John Giura",
    "loser_school": "Wisconsin",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 428,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Tony Surage",
    "loser_school": "Rutgers",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Andy McNerney",
    "loser_school": "Harvard",
    "result": "Dec 10-3"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Al Freeman",
    "winner_school": "Nebraska",
    "loser": "Harlan Kistler",
    "loser_school": "Iowa",
    "result": "MD 11-3"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Harlan Kistler",
    "winner_school": "Iowa",
    "loser": "Randy Conrad",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Andy McNerney",
    "winner_school": "Harvard",
    "loser": "Leo Bailey",
    "loser_school": "Oklahoma State",
    "result": "MD 16-5"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Tony Surage",
    "winner_school": "Rutgers",
    "loser": "John Giura",
    "loser_school": "Wisconsin",
    "result": "Dec 6-0 TB"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Randy Conrad",
    "winner_school": "Iowa State",
    "loser": "Leo Bailey",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Harlan Kistler",
    "winner_school": "Iowa",
    "loser": "Andy McNerney",
    "loser_school": "Harvard",
    "result": "Dec 8-7"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Darryl Burley",
    "winner_school": "Lehigh",
    "loser": "Al Freeman",
    "loser_school": "Nebraska",
    "result": "DEF"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "David Goldman",
    "winner_school": "Nebraska",
    "loser": "Jay Slivkoff",
    "loser_school": "San Jose State",
    "result": "MD 15-3"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Wade Potter",
    "loser_school": "Lock Haven",
    "result": "MD 15-5"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Mark Manning",
    "winner_school": "Nebraska-Omaha",
    "loser": "Kevin McCarthy",
    "loser_school": "Rutgers",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Chris Joy",
    "loser_school": "Boston University",
    "result": "MD 20-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Wes Gasner",
    "winner_school": "Wyoming",
    "loser": "Joey McKenna",
    "loser_school": "Clemson",
    "result": "Fall 5:49"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Ed Wohlwender",
    "winner_school": "Army",
    "loser": "Walt Zimmerman",
    "loser_school": "Bucknell",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Mark Popple",
    "winner_school": "Wilkes",
    "loser": "Jack Woltjer",
    "loser_school": "Eastern Michigan",
    "result": "Fall 5:35"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Ron Winnie",
    "winner_school": "SUNY-Brockport",
    "loser": "David Goldman",
    "loser_school": "Nebraska",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Steve Martinez",
    "loser_school": "Minnesota",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Frank Patacsil",
    "winner_school": "Purdue",
    "loser": "Mark Manning",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 16-11"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Greg Sargis",
    "winner_school": "Michigan State",
    "loser": "Gary Waller",
    "loser_school": "Chattanooga",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Pat O'Donnell",
    "winner_school": "Cal Poly",
    "loser": "Tom Grace",
    "loser_school": "Boston College",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Larry Luttrell",
    "loser_school": "New Mexico",
    "result": "Fall 1:36"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Eric Childs",
    "winner_school": "Penn State",
    "loser": "Mike Dotson",
    "loser_school": "Washington State",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Rick O'Shea",
    "winner_school": "Oregon",
    "loser": "Eddie Urbano",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Dale Troutman",
    "winner_school": "Ohio State",
    "loser": "Frank Shaffer",
    "loser_school": "Navy",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Dave Holler",
    "winner_school": "Illinois State",
    "loser": "Kirk Teat",
    "loser_school": "Lafayette",
    "result": "MD 21-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Ben Coronado",
    "loser_school": "Boise State",
    "result": "Fall 1:53"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Lex Roy",
    "winner_school": "Louisiana State",
    "loser": "Allan Childers",
    "loser_school": "Kent State",
    "result": "Fall 6:45"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 255,
    "winner": "Larry Luttrell",
    "winner_school": "New Mexico",
    "loser": "Wade Potter",
    "loser_school": "Lock Haven",
    "result": "Fall 4:47"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Wes Gasner",
    "loser_school": "Wyoming",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Mark Popple",
    "winner_school": "Wilkes",
    "loser": "Ed Wohlwender",
    "loser_school": "Army",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Ron Winnie",
    "loser_school": "SUNY-Brockport",
    "result": "MD 20-8"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Greg Sargis",
    "winner_school": "Michigan State",
    "loser": "Frank Patacsil",
    "loser_school": "Purdue",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Pat O'Donnell",
    "loser_school": "Cal Poly",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Eric Childs",
    "winner_school": "Penn State",
    "loser": "Rick O'Shea",
    "loser_school": "Oregon",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Dave Holler",
    "winner_school": "Illinois State",
    "loser": "Dale Troutman",
    "loser_school": "Ohio State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Lex Roy",
    "loser_school": "Louisiana State",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 277,
    "winner": "Wes Gasner",
    "winner_school": "Wyoming",
    "loser": "Chris Joy",
    "loser_school": "Boston University",
    "result": "MD 9-0"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 278,
    "winner": "Ron Winnie",
    "winner_school": "SUNY-Brockport",
    "loser": "Steve Martinez",
    "loser_school": "Minnesota",
    "result": "Dec 9-3"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 279,
    "winner": "Pat O'Donnell",
    "winner_school": "Cal Poly",
    "loser": "Larry Luttrell",
    "loser_school": "New Mexico",
    "result": "MD 17-4"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 280,
    "winner": "Ben Coronado",
    "winner_school": "Boise State",
    "loser": "Lex Roy",
    "loser_school": "Louisiana State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Mark Popple",
    "loser_school": "Wilkes",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Greg Sargis",
    "loser_school": "Michigan State",
    "result": "MD 16-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Eric Childs",
    "loser_school": "Penn State",
    "result": "Fall 5:36"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Dave Holler",
    "loser_school": "Illinois State",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Wes Gasner",
    "winner_school": "Wyoming",
    "loser": "Mark Popple",
    "loser_school": "Wilkes",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Ron Winnie",
    "winner_school": "SUNY-Brockport",
    "loser": "Greg Sargis",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Pat O'Donnell",
    "winner_school": "Cal Poly",
    "loser": "Eric Childs",
    "loser_school": "Penn State",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Dave Holler",
    "winner_school": "Illinois State",
    "loser": "Ben Coronado",
    "loser_school": "Boise State",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 429,
    "winner": "Wes Gasner",
    "winner_school": "Wyoming",
    "loser": "Ron Winnie",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 430,
    "winner": "Dave Holler",
    "winner_school": "Illinois State",
    "loser": "Pat O'Donnell",
    "loser_school": "Cal Poly",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Jim Heffernan",
    "loser_school": "Iowa",
    "result": "Dec 11-6"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Kenny Monday",
    "winner_school": "Oklahoma State",
    "loser": "Roger Frizzell",
    "loser_school": "Oklahoma",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Wes Gasner",
    "loser_school": "Wyoming",
    "result": "MD 11-3"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Dave Holler",
    "loser_school": "Illinois State",
    "result": "Dec 6-3"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Pat O'Donnell",
    "winner_school": "Cal Poly",
    "loser": "Ron Winnie",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Dave Holler",
    "winner_school": "Illinois State",
    "loser": "Wes Gasner",
    "loser_school": "Wyoming",
    "result": "Dec 8-5"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Roger Frizzell",
    "winner_school": "Oklahoma",
    "loser": "Jim Heffernan",
    "loser_school": "Iowa",
    "result": "M FOR"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Nate Carr",
    "winner_school": "Iowa State",
    "loser": "Kenny Monday",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Tim Fagan",
    "winner_school": "Michigan",
    "loser": "Ron Baker",
    "loser_school": "Kent State",
    "result": "Dec 10-9"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Lou Montano",
    "winner_school": "Cal Poly",
    "loser": "Dave Yale",
    "loser_school": "New Hampshire",
    "result": "MD 15-3"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Bill Gaffney",
    "winner_school": "North Carolina",
    "loser": "Steve Swann",
    "loser_school": "Appalachian State",
    "result": "MD 15-6"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 3006,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Chris Bodine",
    "loser_school": "Arizona State",
    "result": "Fall 5:48"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Matt Skove",
    "winner_school": "Oklahoma State",
    "loser": "Willie Dillon",
    "loser_school": "Washington State",
    "result": "MD 20-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Phil Mattera",
    "winner_school": "Hofstra",
    "loser": "Marvin Seal",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Chris Mondragon",
    "winner_school": "NC State",
    "loser": "Gene Vatch",
    "loser_school": "Northern Illinois",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "John Davis",
    "winner_school": "Morgan State",
    "loser": "Mike Degenova",
    "loser_school": "Temple",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "David Grant",
    "winner_school": "Kentucky",
    "loser": "Tim Fagan",
    "loser_school": "Michigan",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Lawrence Corry",
    "loser_school": "Old Dominion",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Chris Bevilacqua",
    "loser_school": "Penn State",
    "result": "Fall 5:30"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "John Barrett",
    "winner_school": "St. Cloud State",
    "loser": "Greg Williams",
    "loser_school": "Utah State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Jeff Jelic",
    "winner_school": "Pittsburgh",
    "loser": "Ron Whitman",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Lou Montano",
    "winner_school": "Cal Poly",
    "loser": "Doug Buckwalter",
    "loser_school": "Lock Haven",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Murray Crews",
    "winner_school": "Iowa State",
    "loser": "Marty Bench",
    "loser_school": "Weber State",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Mike Rodgers",
    "winner_school": "Navy",
    "loser": "Bill Gaffney",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Fred Worthem",
    "winner_school": "Michigan State",
    "loser": "Darrell Gholar",
    "loser_school": "Minnesota",
    "result": "MD 23-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Chris Catalfo",
    "winner_school": "Syracuse",
    "loser": "Mike Moyer",
    "loser_school": "West Chester",
    "result": "Dec 16-9"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Rory Cahoj",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Bob Glaberman",
    "winner_school": "College of New Jersey",
    "loser": "Chris Casey",
    "loser_school": "Augustana Illinois",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 256,
    "winner": "Chris Bodine",
    "winner_school": "Arizona State",
    "loser": "Chris Bevilacqua",
    "loser_school": "Penn State",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 1256,
    "winner": "Doug Buckwalter",
    "winner_school": "Lock Haven",
    "loser": "Dave Yale",
    "loser_school": "New Hampshire",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Matt Skove",
    "winner_school": "Oklahoma State",
    "loser": "Phil Mattera",
    "loser_school": "Hofstra",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Chris Mondragon",
    "winner_school": "NC State",
    "loser": "John Davis",
    "loser_school": "Morgan State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "David Grant",
    "loser_school": "Kentucky",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "John Barrett",
    "loser_school": "St. Cloud State",
    "result": "Fall 6:08"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Lou Montano",
    "winner_school": "Cal Poly",
    "loser": "Jeff Jelic",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Murray Crews",
    "winner_school": "Iowa State",
    "loser": "Mike Rodgers",
    "loser_school": "Navy",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Fred Worthem",
    "winner_school": "Michigan State",
    "loser": "Chris Catalfo",
    "loser_school": "Syracuse",
    "result": "Fall 7:35 SV"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Bob Glaberman",
    "loser_school": "College of New Jersey",
    "result": "MD 18-4"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 281,
    "winner": "Phil Mattera",
    "winner_school": "Hofstra",
    "loser": "Willie Dillon",
    "loser_school": "Washington State",
    "result": "Fall 3:54"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 282,
    "winner": "Chris Bodine",
    "winner_school": "Arizona State",
    "loser": "John Barrett",
    "loser_school": "St. Cloud State",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 283,
    "winner": "Jeff Jelic",
    "winner_school": "Pittsburgh",
    "loser": "Doug Buckwalter",
    "loser_school": "Lock Haven",
    "result": "Dec 13-6"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 284,
    "winner": "Chris Catalfo",
    "winner_school": "Syracuse",
    "loser": "Darrell Gholar",
    "loser_school": "Minnesota",
    "result": "Dec 17-11"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Matt Skove",
    "winner_school": "Oklahoma State",
    "loser": "Chris Mondragon",
    "loser_school": "NC State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Kevin Jackson",
    "loser_school": "Louisiana State",
    "result": "Dec 9-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Lou Montano",
    "winner_school": "Cal Poly",
    "loser": "Murray Crews",
    "loser_school": "Iowa State",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Fred Worthem",
    "winner_school": "Michigan State",
    "loser": "Johnny Johnson",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Chris Mondragon",
    "winner_school": "NC State",
    "loser": "Phil Mattera",
    "loser_school": "Hofstra",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Chris Bodine",
    "loser_school": "Arizona State",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Murray Crews",
    "winner_school": "Iowa State",
    "loser": "Jeff Jelic",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-8"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Chris Catalfo",
    "winner_school": "Syracuse",
    "loser": "Johnny Johnson",
    "loser_school": "Oklahoma",
    "result": "Dec 12-9"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 431,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Chris Mondragon",
    "loser_school": "NC State",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 432,
    "winner": "Chris Catalfo",
    "winner_school": "Syracuse",
    "loser": "Murray Crews",
    "loser_school": "Iowa State",
    "result": "Dec 13-10"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Matt Skove",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-5"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Lou Montano",
    "winner_school": "Cal Poly",
    "loser": "Fred Worthem",
    "loser_school": "Michigan State",
    "result": "Fall 2:29"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Fred Worthem",
    "loser_school": "Michigan State",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Matt Skove",
    "winner_school": "Oklahoma State",
    "loser": "Chris Catalfo",
    "loser_school": "Syracuse",
    "result": "Fall 5:58"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "Chris Mondragon",
    "winner_school": "NC State",
    "loser": "Murray Crews",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Chris Catalfo",
    "winner_school": "Syracuse",
    "loser": "Fred Worthem",
    "loser_school": "Michigan State",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Kevin Jackson",
    "winner_school": "Louisiana State",
    "loser": "Matt Skove",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Jim Zalesky",
    "winner_school": "Iowa",
    "loser": "Lou Montano",
    "loser_school": "Cal Poly",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Todd Northrup",
    "winner_school": "St. Lawrence",
    "loser": "Eric Williams",
    "loser_school": "Citadel",
    "result": "Dec 8-7"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "Mike Jones",
    "winner_school": "Illinois State",
    "loser": "Jim Reilly",
    "loser_school": "Lehigh",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2007,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Scott Rechsteiner",
    "loser_school": "Michigan",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Ray Oliver",
    "winner_school": "Nebraska",
    "loser": "Greg Veal",
    "loser_school": "Morgan State",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Jim Trudeau",
    "winner_school": "Minnesota",
    "loser": "Steve Ross",
    "loser_school": "Utah State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Bradley Anderson",
    "winner_school": "Old Dominion",
    "loser": "Ernie Vatch",
    "loser_school": "Northern Illinois",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Eric Brugel",
    "winner_school": "Penn State",
    "loser": "Mark Gronowski",
    "loser_school": "Eastern Illinois",
    "result": "Fall 4:05"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Mike Jones",
    "winner_school": "Illinois State",
    "loser": "Bill Boozer",
    "loser_school": "South Carolina State",
    "result": "MD 20-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "John Major",
    "winner_school": "Illinois",
    "loser": "Dave McEntee",
    "loser_school": "Massachusetts",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Todd Northrup",
    "loser_school": "St. Lawrence",
    "result": "MD 29-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Kevin Benson",
    "winner_school": "Portland State",
    "loser": "Randy Wirtjess",
    "loser_school": "Idaho State",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Pete Capone",
    "winner_school": "Hofstra",
    "loser": "Terry Jones",
    "loser_school": "Oregon State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Steve Porter",
    "loser_school": "Washington State",
    "result": "Fall 2:08"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Kerry Hiatt",
    "winner_school": "Brigham Young",
    "loser": "John Hanlon",
    "loser_school": "Boston College",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Colin Grissom",
    "loser_school": "Yale",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Matt Dulka",
    "winner_school": "Cleveland State",
    "loser": "Randy Kaiser",
    "loser_school": "Miami Ohio",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Jan Michaels",
    "winner_school": "North Carolina",
    "loser": "Sylvester Carver",
    "loser_school": "Fresno State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "Shepard Pittman",
    "loser_school": "Missouri",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Jay Llewellyn",
    "winner_school": "Northern Iowa",
    "loser": "Craig Cox",
    "loser_school": "NC State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 257,
    "winner": "Scott Rechsteiner",
    "winner_school": "Michigan",
    "loser": "Steve Porter",
    "loser_school": "Washington State",
    "result": "Fall 3:34"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Ray Oliver",
    "winner_school": "Nebraska",
    "loser": "Jim Trudeau",
    "loser_school": "Minnesota",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Eric Brugel",
    "winner_school": "Penn State",
    "loser": "Bradley Anderson",
    "loser_school": "Old Dominion",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Mike Jones",
    "winner_school": "Illinois State",
    "loser": "John Major",
    "loser_school": "Illinois",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Kevin Benson",
    "loser_school": "Portland State",
    "result": "MD 14-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Pete Capone",
    "loser_school": "Hofstra",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Kerry Hiatt",
    "loser_school": "Brigham Young",
    "result": "Fall 0:38"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Jan Michaels",
    "winner_school": "North Carolina",
    "loser": "Matt Dulka",
    "loser_school": "Cleveland State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "Jay Llewellyn",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Jim Trudeau",
    "winner_school": "Minnesota",
    "loser": "Greg Veal",
    "loser_school": "Morgan State",
    "result": "Dec 6-5"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Kevin Benson",
    "winner_school": "Portland State",
    "loser": "Todd Northrup",
    "loser_school": "St. Lawrence",
    "result": "MD 20-3"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "Pete Capone",
    "winner_school": "Hofstra",
    "loser": "Scott Rechsteiner",
    "loser_school": "Michigan",
    "result": "Dec 7-1"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Sylvester Carver",
    "winner_school": "Fresno State",
    "loser": "Matt Dulka",
    "loser_school": "Cleveland State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Ray Oliver",
    "winner_school": "Nebraska",
    "loser": "Eric Brugel",
    "loser_school": "Penn State",
    "result": "MD 19-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Mike Jones",
    "loser_school": "Illinois State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Rico Chiapparelli",
    "loser_school": "Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Jan Michaels",
    "winner_school": "North Carolina",
    "loser": "Melvin Douglas",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Jim Trudeau",
    "winner_school": "Minnesota",
    "loser": "Eric Brugel",
    "loser_school": "Penn State",
    "result": "MD 8-0"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Mike Jones",
    "winner_school": "Illinois State",
    "loser": "Kevin Benson",
    "loser_school": "Portland State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Pete Capone",
    "winner_school": "Hofstra",
    "loser": "Rico Chiapparelli",
    "loser_school": "Iowa",
    "result": "Fall 0:42"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Sylvester Carver",
    "winner_school": "Fresno State",
    "loser": "Melvin Douglas",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 433,
    "winner": "Jim Trudeau",
    "winner_school": "Minnesota",
    "loser": "Mike Jones",
    "loser_school": "Illinois State",
    "result": "Fall 2:58"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 434,
    "winner": "Sylvester Carver",
    "winner_school": "Fresno State",
    "loser": "Pete Capone",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "Ray Oliver",
    "loser_school": "Nebraska",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "John Reich",
    "winner_school": "Navy",
    "loser": "Jan Michaels",
    "loser_school": "North Carolina",
    "result": "Dec 8-1"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Jan Michaels",
    "winner_school": "North Carolina",
    "loser": "Jim Trudeau",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Ray Oliver",
    "winner_school": "Nebraska",
    "loser": "Sylvester Carver",
    "loser_school": "Fresno State",
    "result": "Dec 5-4"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "Pete Capone",
    "winner_school": "Hofstra",
    "loser": "Mike Jones",
    "loser_school": "Illinois State",
    "result": "Dec 10-4"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Sylvester Carver",
    "winner_school": "Fresno State",
    "loser": "Jim Trudeau",
    "loser_school": "Minnesota",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Jan Michaels",
    "winner_school": "North Carolina",
    "loser": "Ray Oliver",
    "loser_school": "Nebraska",
    "result": "Dec 8-3"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Mike Sheets",
    "winner_school": "Oklahoma State",
    "loser": "John Reich",
    "loser_school": "Navy",
    "result": "MD 14-0"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Tony Conetta",
    "winner_school": "SUNY-Brockport",
    "loser": "Tom Gibble",
    "loser_school": "Bloomsburg",
    "result": "MD 14-5"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Doug Dix",
    "winner_school": "William & Mary",
    "loser": "Chris Blake",
    "loser_school": "Idaho State",
    "result": "Fall 3:33"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 2008,
    "winner": "Jeff Turner",
    "winner_school": "Lehigh",
    "loser": "Don Philippi",
    "loser_school": "Delaware",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Ed Potokar",
    "winner_school": "Ohio State",
    "loser": "Tom Kolopus",
    "loser_school": "Arizona State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Wayne Catan",
    "winner_school": "Tennessee",
    "loser": "Mark Loomis",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Mike Foy",
    "winner_school": "Minnesota",
    "loser": "Jon Hampton",
    "loser_school": "Appalachian State",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Perry Hummel",
    "winner_school": "Iowa State",
    "loser": "Alan Lauchner",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Jeff Turner",
    "winner_school": "Lehigh",
    "loser": "Dan Murner",
    "loser_school": "Boston College",
    "result": "MD 20-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Mark Phillips",
    "winner_school": "Navy",
    "loser": "Dan Kay",
    "loser_school": "Toledo",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Bob Harr",
    "winner_school": "Penn State",
    "loser": "Doug Dix",
    "loser_school": "William & Mary",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "Scott Giacobbe",
    "loser_school": "Old Dominion",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Jim Scherr",
    "winner_school": "Nebraska",
    "loser": "Dennis Limmex",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Tony Conetta",
    "winner_school": "SUNY-Brockport",
    "loser": "Dave Hagedorn",
    "loser_school": "Utah State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Daniel Corbin",
    "winner_school": "James Madison",
    "loser": "Larry Meierotto",
    "loser_school": "Chattanooga",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Clarence Richardson",
    "winner_school": "Louisiana State",
    "loser": "Scott Mansur",
    "loser_school": "Portland State",
    "result": "Fall 0:09"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Efonda Sproles",
    "winner_school": "Northern Iowa",
    "loser": "Jeff Needs",
    "loser_school": "Brigham Young",
    "result": "MD 20-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Tim Mondale",
    "loser_school": "Oregon State",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "Booker Benford",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Joe Morrow",
    "winner_school": "Northern Illinois",
    "loser": "Gregg Fatool",
    "loser_school": "NC State",
    "result": "MD 17-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Ed Potokar",
    "winner_school": "Ohio State",
    "loser": "Wayne Catan",
    "loser_school": "Tennessee",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Mike Foy",
    "winner_school": "Minnesota",
    "loser": "Perry Hummel",
    "loser_school": "Iowa State",
    "result": "Dec 12-11"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Jeff Turner",
    "winner_school": "Lehigh",
    "loser": "Mark Phillips",
    "loser_school": "Navy",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "Bob Harr",
    "loser_school": "Penn State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Tony Conetta",
    "winner_school": "SUNY-Brockport",
    "loser": "Jim Scherr",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Clarence Richardson",
    "winner_school": "Louisiana State",
    "loser": "Daniel Corbin",
    "loser_school": "James Madison",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Efonda Sproles",
    "loser_school": "Northern Iowa",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "Joe Morrow",
    "loser_school": "Northern Illinois",
    "result": "Fall 3:56"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 289,
    "winner": "Wayne Catan",
    "winner_school": "Tennessee",
    "loser": "Tom Kolopus",
    "loser_school": "Arizona State",
    "result": "Fall 0:13"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 290,
    "winner": "Bob Harr",
    "winner_school": "Penn State",
    "loser": "Scott Giacobbe",
    "loser_school": "Old Dominion",
    "result": "Dec 13-10"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 291,
    "winner": "Scott Mansur",
    "winner_school": "Portland State",
    "loser": "Daniel Corbin",
    "loser_school": "James Madison",
    "result": "Dec 7-4"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 292,
    "winner": "Efonda Sproles",
    "winner_school": "Northern Iowa",
    "loser": "Tim Mondale",
    "loser_school": "Oregon State",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Ed Potokar",
    "winner_school": "Ohio State",
    "loser": "Mike Foy",
    "loser_school": "Minnesota",
    "result": "Fall 3:51"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "Jeff Turner",
    "loser_school": "Lehigh",
    "result": "MD 15-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Clarence Richardson",
    "winner_school": "Louisiana State",
    "loser": "Tony Conetta",
    "loser_school": "SUNY-Brockport",
    "result": "MD 17-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Eli Blazeff",
    "loser_school": "Michigan State",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Wayne Catan",
    "winner_school": "Tennessee",
    "loser": "Mike Foy",
    "loser_school": "Minnesota",
    "result": "Dec 14-11"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Bob Harr",
    "winner_school": "Penn State",
    "loser": "Jeff Turner",
    "loser_school": "Lehigh",
    "result": "MD 17-8"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Scott Mansur",
    "winner_school": "Portland State",
    "loser": "Tony Conetta",
    "loser_school": "SUNY-Brockport",
    "result": "Fall 2:37"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "Efonda Sproles",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 435,
    "winner": "Bob Harr",
    "winner_school": "Penn State",
    "loser": "Wayne Catan",
    "loser_school": "Tennessee",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 436,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "Scott Mansur",
    "loser_school": "Portland State",
    "result": "MD 14-4"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "Ed Potokar",
    "loser_school": "Ohio State",
    "result": "Dec 6-0 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Clarence Richardson",
    "loser_school": "Louisiana State",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Clarence Richardson",
    "winner_school": "Louisiana State",
    "loser": "Bob Harr",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Ed Potokar",
    "winner_school": "Ohio State",
    "loser": "Eli Blazeff",
    "loser_school": "Michigan State",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "Wayne Catan",
    "winner_school": "Tennessee",
    "loser": "Scott Mansur",
    "loser_school": "Portland State",
    "result": "Dec 11-9"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Eli Blazeff",
    "winner_school": "Michigan State",
    "loser": "Bob Harr",
    "loser_school": "Penn State",
    "result": "Fall 1:40"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Ed Potokar",
    "winner_school": "Ohio State",
    "loser": "Clarence Richardson",
    "loser_school": "Louisiana State",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Mark Schultz",
    "winner_school": "Oklahoma",
    "loser": "Duane Goldman",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Bob Shriner",
    "winner_school": "North Carolina",
    "loser": "Andy Tsarnas",
    "loser_school": "San Jose State",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "John Bragg",
    "winner_school": "Wyoming",
    "loser": "Ed Black",
    "loser_school": "Lock Haven",
    "result": "Fall 1:49"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Mike Blaske",
    "winner_school": "CSU Bakersfield",
    "loser": "Karl Lynes",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:54"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Tim Morrison",
    "winner_school": "Rider",
    "loser": "Kirk Trost",
    "loser_school": "Michigan",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Jim Baumgardner",
    "winner_school": "Oregon State",
    "loser": "John Heropoulos",
    "loser_school": "Slippery Rock",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Greg Wilcox",
    "winner_school": "Nebraska-Omaha",
    "loser": "Kevin Jackson",
    "loser_school": "New Mexico",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Jeff Dillman",
    "winner_school": "Eastern Illinois",
    "loser": "Larry Cox",
    "loser_school": "Temple",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "John Schebler",
    "winner_school": "Utah State",
    "loser": "John Potts",
    "loser_school": "Toledo",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Kent Elliott",
    "winner_school": "Louisiana State",
    "loser": "Bob Shriner",
    "loser_school": "North Carolina",
    "result": "Dec 15-9"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Pat Murphy",
    "loser_school": "Chattanooga",
    "result": "MD 21-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Eric Neily",
    "winner_school": "Ohio State",
    "loser": "John Bauman",
    "loser_school": "Boise State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Nick D'Angelo",
    "winner_school": "John Carroll",
    "loser": "John Bragg",
    "loser_school": "Wyoming",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Mark Johnson",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:32"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Doug Perkins",
    "winner_school": "Stanford",
    "loser": "Joe Glasder",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Mike Potts",
    "winner_school": "Michigan State",
    "loser": "Wayne Turchin",
    "loser_school": "Cleveland State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Tod Giles",
    "loser_school": "Boston University",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Kurt Honis",
    "winner_school": "Syracuse",
    "loser": "Bernie Brown",
    "loser_school": "Lehigh",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Phil Lanzatella",
    "loser_school": "St. Lawrence",
    "result": "Fall 6:49"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Tim Morrison",
    "winner_school": "Rider",
    "loser": "Mike Blaske",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 2:09"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Jim Baumgardner",
    "winner_school": "Oregon State",
    "loser": "Greg Wilcox",
    "loser_school": "Nebraska-Omaha",
    "result": "MD 28-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Jeff Dillman",
    "winner_school": "Eastern Illinois",
    "loser": "John Schebler",
    "loser_school": "Utah State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Kent Elliott",
    "loser_school": "Louisiana State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Eric Neily",
    "winner_school": "Ohio State",
    "loser": "Nick D'Angelo",
    "loser_school": "John Carroll",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Doug Perkins",
    "loser_school": "Stanford",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Mike Potts",
    "loser_school": "Michigan State",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Kurt Honis",
    "loser_school": "Syracuse",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 293,
    "winner": "Greg Wilcox",
    "winner_school": "Nebraska-Omaha",
    "loser": "John Heropoulos",
    "loser_school": "Slippery Rock",
    "result": "Fall 4:39"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 294,
    "winner": "Pat Murphy",
    "winner_school": "Chattanooga",
    "loser": "Kent Elliott",
    "loser_school": "Louisiana State",
    "result": "Dec 6-1"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 295,
    "winner": "Doug Perkins",
    "winner_school": "Stanford",
    "loser": "Mark Johnson",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 296,
    "winner": "Mike Potts",
    "winner_school": "Michigan State",
    "loser": "Tod Giles",
    "loser_school": "Boston University",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Jim Baumgardner",
    "winner_school": "Oregon State",
    "loser": "Tim Morrison",
    "loser_school": "Rider",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Jeff Dillman",
    "loser_school": "Eastern Illinois",
    "result": "Fall 4:10"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Eric Neily",
    "loser_school": "Ohio State",
    "result": "Fall 4:36"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Dan Chaid",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Tim Morrison",
    "winner_school": "Rider",
    "loser": "Greg Wilcox",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Jeff Dillman",
    "winner_school": "Eastern Illinois",
    "loser": "Pat Murphy",
    "loser_school": "Chattanooga",
    "result": "Dec 11-8"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Doug Perkins",
    "winner_school": "Stanford",
    "loser": "Eric Neily",
    "loser_school": "Ohio State",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Mike Potts",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 437,
    "winner": "Tim Morrison",
    "winner_school": "Rider",
    "loser": "Jeff Dillman",
    "loser_school": "Eastern Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 438,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Doug Perkins",
    "loser_school": "Stanford",
    "result": "Fall 3:58"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Mike Mann",
    "winner_school": "Iowa State",
    "loser": "Jim Baumgardner",
    "loser_school": "Oregon State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Bill Scherr",
    "loser_school": "Nebraska",
    "result": "MD 15-4"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Tim Morrison",
    "loser_school": "Rider",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Jim Baumgardner",
    "winner_school": "Oregon State",
    "loser": "Dan Chaid",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Doug Perkins",
    "winner_school": "Stanford",
    "loser": "Jeff Dillman",
    "loser_school": "Eastern Illinois",
    "result": "Fall 3:02"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Tim Morrison",
    "winner_school": "Rider",
    "loser": "Dan Chaid",
    "loser_school": "Oklahoma",
    "result": "Dec 7-2"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Bill Scherr",
    "winner_school": "Nebraska",
    "loser": "Jim Baumgardner",
    "loser_school": "Oregon State",
    "result": "MD 10-2"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Ed Banach",
    "winner_school": "Iowa",
    "loser": "Mike Mann",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "Mike Euker",
    "winner_school": "Wisconsin",
    "loser": "Paul Maltagliati",
    "loser_school": "George Mason",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 1010,
    "winner": "Larry Hamilton",
    "winner_school": "Brigham Young",
    "loser": "Bob Harris",
    "loser_school": "Drake",
    "result": "Fall 4:22"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 2010,
    "winner": "Curt Olson",
    "winner_school": "Clarion",
    "loser": "Rick Petersen",
    "loser_school": "Lock Haven",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "Wendall Ellis",
    "loser_school": "Washington State",
    "result": "Fall 2:06"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "Rob Rechsteiner",
    "winner_school": "Michigan",
    "loser": "Keith Cruise",
    "loser_school": "Northwestern",
    "result": "Fall 2:59"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "Larry Beisel",
    "winner_school": "Army",
    "loser": "Randall Taylor",
    "loser_school": "Louisiana State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Mitch Shelton",
    "winner_school": "Oklahoma State",
    "loser": "Flint Pulskamp",
    "loser_school": "Stanford",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Curt Olson",
    "winner_school": "Clarion",
    "loser": "Dave Koplovitz",
    "loser_school": "Boston University",
    "result": "Fall 4:48"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Joe Wade",
    "winner_school": "Bloomsburg",
    "loser": "Jeff Reiner",
    "loser_school": "Toledo",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "George Fears",
    "winner_school": "Navy",
    "loser": "Larry Hamilton",
    "loser_school": "Brigham Young",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "Bob Muth",
    "loser_school": "Allegheny",
    "result": "Fall 1:19"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Duane Baker",
    "winner_school": "Clemson",
    "loser": "Jerry Morrison",
    "loser_school": "San Jose State",
    "result": "Fall 4:50"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Mike Euker",
    "winner_school": "Wisconsin",
    "loser": "George Kovach",
    "loser_school": "Drexel",
    "result": "Fall 2:15"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "John Kriebs",
    "winner_school": "Northern Iowa",
    "loser": "Morris Johnson",
    "loser_school": "San Francisco State",
    "result": "Fall 3:38"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Wayne Cole",
    "winner_school": "Iowa State",
    "loser": "Arnie Bagley",
    "loser_school": "Idaho State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "John Dougherty",
    "winner_school": "Syracuse",
    "loser": "Jim Ettari",
    "loser_school": "Citadel",
    "result": "MD 21-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "Mark Rigatuso",
    "winner_school": "Nebraska-Omaha",
    "loser": "Chris Bielenberg",
    "loser_school": "Oregon State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "Kahlan O'Hara",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Jim Hall",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "Jim Phills",
    "winner_school": "Harvard",
    "loser": "Mike Knox",
    "loser_school": "Nebraska",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "Rob Rechsteiner",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Mitch Shelton",
    "winner_school": "Oklahoma State",
    "loser": "Larry Beisel",
    "loser_school": "Army",
    "result": "Fall 1:09"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Joe Wade",
    "winner_school": "Bloomsburg",
    "loser": "Curt Olson",
    "loser_school": "Clarion",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "George Fears",
    "loser_school": "Navy",
    "result": "MD 26-12"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Duane Baker",
    "winner_school": "Clemson",
    "loser": "Mike Euker",
    "loser_school": "Wisconsin",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Wayne Cole",
    "winner_school": "Iowa State",
    "loser": "John Kriebs",
    "loser_school": "Northern Iowa",
    "result": "DQ"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Mark Rigatuso",
    "winner_school": "Nebraska-Omaha",
    "loser": "John Dougherty",
    "loser_school": "Syracuse",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Kahlan O'Hara",
    "winner_school": "Nevada-Las Vegas",
    "loser": "Jim Phills",
    "loser_school": "Harvard",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 297,
    "winner": "Flint Pulskamp",
    "winner_school": "Stanford",
    "loser": "Larry Beisel",
    "loser_school": "Army",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 298,
    "winner": "George Fears",
    "winner_school": "Navy",
    "loser": "Bob Muth",
    "loser_school": "Allegheny",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 299,
    "winner": "John Kriebs",
    "winner_school": "Northern Iowa",
    "loser": "Arnie Bagley",
    "loser_school": "Idaho State",
    "result": "Dec 7-0"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 300,
    "winner": "John Dougherty",
    "winner_school": "Syracuse",
    "loser": "Chris Bielenberg",
    "loser_school": "Oregon State",
    "result": "MD 14-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Mitch Shelton",
    "winner_school": "Oklahoma State",
    "loser": "Tab Thacker",
    "loser_school": "NC State",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "Joe Wade",
    "loser_school": "Bloomsburg",
    "result": "Fall 6:19"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Wayne Cole",
    "winner_school": "Iowa State",
    "loser": "Duane Baker",
    "loser_school": "Clemson",
    "result": "MD 22-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Mark Rigatuso",
    "winner_school": "Nebraska-Omaha",
    "loser": "Kahlan O'Hara",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 417,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "Flint Pulskamp",
    "loser_school": "Stanford",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 418,
    "winner": "George Fears",
    "winner_school": "Navy",
    "loser": "Joe Wade",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 419,
    "winner": "John Kriebs",
    "winner_school": "Northern Iowa",
    "loser": "Duane Baker",
    "loser_school": "Clemson",
    "result": "Dec 7-3"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 420,
    "winner": "Kahlan O'Hara",
    "winner_school": "Nevada-Las Vegas",
    "loser": "John Dougherty",
    "loser_school": "Syracuse",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 439,
    "winner": "Tab Thacker",
    "winner_school": "NC State",
    "loser": "George Fears",
    "loser_school": "Navy",
    "result": "Fall 3:10"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 440,
    "winner": "John Kriebs",
    "winner_school": "Northern Iowa",
    "loser": "Kahlan O'Hara",
    "loser_school": "Nevada-Las Vegas",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "Mitch Shelton",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Wayne Cole",
    "winner_school": "Iowa State",
    "loser": "Mark Rigatuso",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 15-9"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 499,
    "winner": "Mark Rigatuso",
    "winner_school": "Nebraska-Omaha",
    "loser": "Tab Thacker",
    "loser_school": "NC State",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 500,
    "winner": "Mitch Shelton",
    "winner_school": "Oklahoma State",
    "loser": "John Kriebs",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "7thPlace",
    "weight": "UNL",
    "bout": 530,
    "winner": "George Fears",
    "winner_school": "Navy",
    "loser": "Kahlan O'Hara",
    "loser_school": "Nevada-Las Vegas",
    "result": "Fall 4:40"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "John Kriebs",
    "winner_school": "Northern Iowa",
    "loser": "Tab Thacker",
    "loser_school": "NC State",
    "result": "Dec 2-1"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Mitch Shelton",
    "winner_school": "Oklahoma State",
    "loser": "Mark Rigatuso",
    "loser_school": "Nebraska-Omaha",
    "result": "Fall 1:15"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Lou Banach",
    "winner_school": "Iowa",
    "loser": "Wayne Cole",
    "loser_school": "Iowa State",
    "result": "Fall 2:57"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
