// 1987 NCAA Division I Wrestling Championships (3/19/1987 to 3/21/1987 at Maryland). Weight classes 118-275. Consolation: QUARTERFINAL WRESTLEBACK (rounds WbConsR1-R5).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1987 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1987-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Perry Summitt",
    "winner_school": "Iowa State",
    "loser": "Tim Jacoutot",
    "loser_school": "College of New Jersey",
    "result": "Dec 8-6"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "Rich Moeggenberg",
    "winner_school": "Central Michigan",
    "loser": "Craig Sterr",
    "loser_school": "Eastern Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 2001,
    "winner": "Jack Cuvo",
    "winner_school": "East Stroudsburg",
    "loser": "Mark Sanfilippo",
    "loser_school": "Purdue",
    "result": "MD 16-5"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 3001,
    "winner": "Jack Griffin",
    "winner_school": "Northwestern",
    "loser": "Paul Kuznik",
    "loser_school": "Army",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "John Regan",
    "winner_school": "Iowa",
    "loser": "Mark Adkins",
    "loser_school": "Kent State",
    "result": "Fall 6:59"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Paul Kapper",
    "winner_school": "Cleveland State",
    "loser": "Zeke Jones",
    "loser_school": "Arizona State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Dick Howell",
    "winner_school": "Lock Haven",
    "loser": "Roberto Pelayo",
    "loser_school": "Oregon",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Jack Cuvo",
    "winner_school": "East Stroudsburg",
    "loser": "Chris Bollin",
    "loser_school": "Oklahoma",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Cory Baze",
    "winner_school": "Oklahoma State",
    "loser": "Blake Beesley",
    "loser_school": "Weber State",
    "result": "Fall 1:55"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Chris Brown",
    "winner_school": "Brigham Young",
    "loser": "Jeff Annesi",
    "loser_school": "Drexel",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Jeff Bowyer",
    "winner_school": "James Madison",
    "loser": "Perry Summitt",
    "loser_school": "Iowa State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Craig Cervantes",
    "loser_school": "Montana",
    "result": "Fall 1:36"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Dave Rowan",
    "winner_school": "Edinboro",
    "loser": "Dennis Mejias",
    "loser_school": "Wilkes",
    "result": "MD 21-11"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Doug Wyland",
    "winner_school": "Michigan",
    "loser": "Rich Moeggenberg",
    "loser_school": "Central Michigan",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "David Cummings",
    "winner_school": "NC State",
    "loser": "John Glakowski",
    "loser_school": "Cal Poly",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Al Palacio",
    "winner_school": "North Carolina",
    "loser": "John Chapman",
    "loser_school": "Illinois State",
    "result": "Fall 4:43"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Jack Griffin",
    "winner_school": "Northwestern",
    "loser": "Ben Reichel",
    "loser_school": "Chattanooga",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Tim Wright",
    "winner_school": "SIU-Edwardsville",
    "loser": "Arnold Khanbabian",
    "loser_school": "San Jose State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Jim Martin",
    "winner_school": "Penn State",
    "loser": "Roger Singleton",
    "loser_school": "Grand Valley State",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Mike Caracci",
    "winner_school": "New Hampshire",
    "loser": "Jarrett Johnson",
    "loser_school": "Coppin State",
    "result": "MD 17-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 251,
    "winner": "Chris Bollin",
    "winner_school": "Oklahoma",
    "loser": "Mark Sanfilippo",
    "loser_school": "Purdue",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Paul Kapper",
    "winner_school": "Cleveland State",
    "loser": "John Regan",
    "loser_school": "Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Jack Cuvo",
    "winner_school": "East Stroudsburg",
    "loser": "Dick Howell",
    "loser_school": "Lock Haven",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Cory Baze",
    "winner_school": "Oklahoma State",
    "loser": "Chris Brown",
    "loser_school": "Brigham Young",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Jeff Bowyer",
    "loser_school": "James Madison",
    "result": "TF 20-5 6:46"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Dave Rowan",
    "winner_school": "Edinboro",
    "loser": "Doug Wyland",
    "loser_school": "Michigan",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Al Palacio",
    "winner_school": "North Carolina",
    "loser": "David Cummings",
    "loser_school": "NC State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Tim Wright",
    "winner_school": "SIU-Edwardsville",
    "loser": "Jack Griffin",
    "loser_school": "Northwestern",
    "result": "TF 24-8 5:34"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Jim Martin",
    "winner_school": "Penn State",
    "loser": "Mike Caracci",
    "loser_school": "New Hampshire",
    "result": "TF 16-1 5:18"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Zeke Jones",
    "winner_school": "Arizona State",
    "loser": "John Regan",
    "loser_school": "Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Dick Howell",
    "winner_school": "Lock Haven",
    "loser": "Chris Bollin",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Chris Brown",
    "winner_school": "Brigham Young",
    "loser": "Blake Beesley",
    "loser_school": "Weber State",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Jeff Bowyer",
    "winner_school": "James Madison",
    "loser": "Craig Cervantes",
    "loser_school": "Montana",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 265,
    "winner": "Dennis Mejias",
    "winner_school": "Wilkes",
    "loser": "Doug Wyland",
    "loser_school": "Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 266,
    "winner": "David Cummings",
    "winner_school": "NC State",
    "loser": "John Chapman",
    "loser_school": "Illinois State",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 267,
    "winner": "Arnold Khanbabian",
    "winner_school": "San Jose State",
    "loser": "Jack Griffin",
    "loser_school": "Northwestern",
    "result": "Dec 8-2 TB"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 268,
    "winner": "Roger Singleton",
    "winner_school": "Grand Valley State",
    "loser": "Mike Caracci",
    "loser_school": "New Hampshire",
    "result": "Fall 2:29"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Jack Cuvo",
    "winner_school": "East Stroudsburg",
    "loser": "Paul Kapper",
    "loser_school": "Cleveland State",
    "result": "MD 17-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Cory Baze",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Dave Rowan",
    "winner_school": "Edinboro",
    "loser": "Al Palacio",
    "loser_school": "North Carolina",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Jim Martin",
    "winner_school": "Penn State",
    "loser": "Tim Wright",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Dick Howell",
    "winner_school": "Lock Haven",
    "loser": "Zeke Jones",
    "loser_school": "Arizona State",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Jeff Bowyer",
    "winner_school": "James Madison",
    "loser": "Chris Brown",
    "loser_school": "Brigham Young",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Dennis Mejias",
    "winner_school": "Wilkes",
    "loser": "David Cummings",
    "loser_school": "NC State",
    "result": "Dec 3-0"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Roger Singleton",
    "winner_school": "Grand Valley State",
    "loser": "Arnold Khanbabian",
    "loser_school": "San Jose State",
    "result": "Fall 0:53"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Tim Wright",
    "winner_school": "SIU-Edwardsville",
    "loser": "Dick Howell",
    "loser_school": "Lock Haven",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Al Palacio",
    "winner_school": "North Carolina",
    "loser": "Jeff Bowyer",
    "loser_school": "James Madison",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 423,
    "winner": "Dennis Mejias",
    "winner_school": "Wilkes",
    "loser": "Cory Baze",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 424,
    "winner": "Roger Singleton",
    "winner_school": "Grand Valley State",
    "loser": "Paul Kapper",
    "loser_school": "Cleveland State",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Jack Cuvo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 9-6"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Jim Martin",
    "winner_school": "Penn State",
    "loser": "Dave Rowan",
    "loser_school": "Edinboro",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Tim Wright",
    "winner_school": "SIU-Edwardsville",
    "loser": "Al Palacio",
    "loser_school": "North Carolina",
    "result": "MD 13-2"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Roger Singleton",
    "winner_school": "Grand Valley State",
    "loser": "Dennis Mejias",
    "loser_school": "Wilkes",
    "result": "MD 15-2"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 501,
    "winner": "Tim Wright",
    "winner_school": "SIU-Edwardsville",
    "loser": "Jack Cuvo",
    "loser_school": "East Stroudsburg",
    "result": "MD 13-4"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 502,
    "winner": "Dave Rowan",
    "winner_school": "Edinboro",
    "loser": "Roger Singleton",
    "loser_school": "Grand Valley State",
    "result": "Dec 7-2"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Al Palacio",
    "winner_school": "North Carolina",
    "loser": "Dennis Mejias",
    "loser_school": "Wilkes",
    "result": "Dec 9-7"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Jack Cuvo",
    "winner_school": "East Stroudsburg",
    "loser": "Roger Singleton",
    "loser_school": "Grand Valley State",
    "result": "Dec 6-3"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Tim Wright",
    "winner_school": "SIU-Edwardsville",
    "loser": "Dave Rowan",
    "loser_school": "Edinboro",
    "result": "Fall 1:53"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Jim Martin",
    "loser_school": "Penn State",
    "result": "Dec 8-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Ken Chertow",
    "winner_school": "Penn State",
    "loser": "Jeff Husick",
    "loser_school": "Lock Haven",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "T.J. Sewell",
    "winner_school": "Oklahoma",
    "loser": "Fred Vann",
    "loser_school": "Delaware State",
    "result": "TF 15-0 6:01"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Al Morgan",
    "winner_school": "Missouri",
    "loser": "Troy Humphrey",
    "loser_school": "Montana State",
    "result": "Fall 6:42"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Matt Treaster",
    "winner_school": "Navy",
    "loser": "Mike Schwab",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Paul Zarbatany",
    "loser_school": "Drexel",
    "result": "Fall 1:55"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Mike O'Brien",
    "winner_school": "Illinois",
    "loser": "Shon Lewis",
    "loser_school": "Oregon",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Bruce Garner",
    "winner_school": "New Mexico",
    "loser": "Tom Herring",
    "loser_school": "Chattanooga",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "Kendall Cross",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "T.J. Sewell",
    "winner_school": "Oklahoma",
    "loser": "Mark Clayton",
    "loser_school": "Wisconsin",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Chip Park",
    "winner_school": "Arizona State",
    "loser": "Tim Hackel",
    "loser_school": "Central College IA",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Scott Hinkel",
    "winner_school": "Purdue",
    "loser": "Kevin Pierson",
    "loser_school": "Kent State",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Ken Chertow",
    "winner_school": "Penn State",
    "loser": "Rob Porter",
    "loser_school": "Edinboro",
    "result": "TF 20-4 6:06"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Mike Dallas",
    "winner_school": "CSU Bakersfield",
    "loser": "Tracy Yeates",
    "loser_school": "Boise State",
    "result": "Fall 6:58"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Bill Kelly",
    "winner_school": "Iowa State",
    "loser": "Tino Gonzalez",
    "loser_school": "Northern Illinois",
    "result": "Fall 1:22"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Marc Sodano",
    "winner_school": "NC State",
    "loser": "John Epperly",
    "loser_school": "Lehigh",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Sal Profaci",
    "winner_school": "Central Connecticut",
    "loser": "Tim Glennie",
    "loser_school": "Oregon State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Harry Richards",
    "winner_school": "Central Michigan",
    "loser": "Todd Messitt",
    "loser_school": "Army",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Chip McArdle",
    "winner_school": "North Carolina",
    "loser": "Troy Lawrence",
    "loser_school": "Maryland",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 252,
    "winner": "Jeff Husick",
    "winner_school": "Lock Haven",
    "loser": "Rob Porter",
    "loser_school": "Edinboro",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Matt Treaster",
    "winner_school": "Navy",
    "loser": "Al Morgan",
    "loser_school": "Missouri",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Mike O'Brien",
    "loser_school": "Illinois",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "Bruce Garner",
    "loser_school": "New Mexico",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Chip Park",
    "winner_school": "Arizona State",
    "loser": "T.J. Sewell",
    "loser_school": "Oklahoma",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Ken Chertow",
    "winner_school": "Penn State",
    "loser": "Scott Hinkel",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Bill Kelly",
    "winner_school": "Iowa State",
    "loser": "Mike Dallas",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 5:21"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Marc Sodano",
    "winner_school": "NC State",
    "loser": "Sal Profaci",
    "loser_school": "Central Connecticut",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Chip McArdle",
    "winner_school": "North Carolina",
    "loser": "Harry Richards",
    "loser_school": "Central Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 269,
    "winner": "Mike Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Al Morgan",
    "loser_school": "Missouri",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 270,
    "winner": "Paul Zarbatany",
    "winner_school": "Drexel",
    "loser": "Mike O'Brien",
    "loser_school": "Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 271,
    "winner": "Kendall Cross",
    "winner_school": "Oklahoma State",
    "loser": "Bruce Garner",
    "loser_school": "New Mexico",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 272,
    "winner": "Tim Hackel",
    "winner_school": "Central College IA",
    "loser": "T.J. Sewell",
    "loser_school": "Oklahoma",
    "result": "MD 15-3"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 273,
    "winner": "Scott Hinkel",
    "winner_school": "Purdue",
    "loser": "Jeff Husick",
    "loser_school": "Lock Haven",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 274,
    "winner": "Mike Dallas",
    "winner_school": "CSU Bakersfield",
    "loser": "Tino Gonzalez",
    "loser_school": "Northern Illinois",
    "result": "MD 17-5"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 275,
    "winner": "John Epperly",
    "winner_school": "Lehigh",
    "loser": "Sal Profaci",
    "loser_school": "Central Connecticut",
    "result": "MD 15-3"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 276,
    "winner": "Harry Richards",
    "winner_school": "Central Michigan",
    "loser": "Troy Lawrence",
    "loser_school": "Maryland",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Matt Treaster",
    "winner_school": "Navy",
    "loser": "Rocky Bonomo",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "Chip Park",
    "loser_school": "Arizona State",
    "result": "Dec 13-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Bill Kelly",
    "winner_school": "Iowa State",
    "loser": "Ken Chertow",
    "loser_school": "Penn State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Marc Sodano",
    "winner_school": "NC State",
    "loser": "Chip McArdle",
    "loser_school": "North Carolina",
    "result": "Dec 10-4"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Mike Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Paul Zarbatany",
    "loser_school": "Drexel",
    "result": "Fall 3:36"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Kendall Cross",
    "winner_school": "Oklahoma State",
    "loser": "Tim Hackel",
    "loser_school": "Central College IA",
    "result": "MD 17-9"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Scott Hinkel",
    "winner_school": "Purdue",
    "loser": "Mike Dallas",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Harry Richards",
    "winner_school": "Central Michigan",
    "loser": "John Epperly",
    "loser_school": "Lehigh",
    "result": "MD 12-4"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 425,
    "winner": "Mike Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Chip McArdle",
    "loser_school": "North Carolina",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 426,
    "winner": "Ken Chertow",
    "winner_school": "Penn State",
    "loser": "Kendall Cross",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 427,
    "winner": "Scott Hinkel",
    "winner_school": "Purdue",
    "loser": "Chip Park",
    "loser_school": "Arizona State",
    "result": "Dec 12-7"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 428,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Harry Richards",
    "loser_school": "Central Michigan",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "Matt Treaster",
    "loser_school": "Navy",
    "result": "MD 15-6"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Bill Kelly",
    "winner_school": "Iowa State",
    "loser": "Marc Sodano",
    "loser_school": "NC State",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Ken Chertow",
    "winner_school": "Penn State",
    "loser": "Mike Schwab",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Scott Hinkel",
    "loser_school": "Purdue",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 503,
    "winner": "Ken Chertow",
    "winner_school": "Penn State",
    "loser": "Matt Treaster",
    "loser_school": "Navy",
    "result": "Dec 10-4"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 504,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Marc Sodano",
    "loser_school": "NC State",
    "result": "Dec 7-4"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Scott Hinkel",
    "winner_school": "Purdue",
    "loser": "Mike Schwab",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Matt Treaster",
    "winner_school": "Navy",
    "loser": "Marc Sodano",
    "loser_school": "NC State",
    "result": "Fall 2:55"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Ken Chertow",
    "winner_school": "Penn State",
    "loser": "Rocky Bonomo",
    "loser_school": "Bloomsburg",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Bill Kelly",
    "winner_school": "Iowa State",
    "loser": "Brad Penrith",
    "loser_school": "Iowa",
    "result": "Fall 6:31"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Joe Gribben",
    "winner_school": "Northern Iowa",
    "loser": "Dan Lovelace",
    "loser_school": "Missouri",
    "result": "Dec 10-4"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Enzo Catullo",
    "winner_school": "North Carolina",
    "loser": "Jerry Durso",
    "loser_school": "Notre Dame",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Joei Bales",
    "winner_school": "Northwestern",
    "loser": "Andy Leier",
    "loser_school": "North Dakota",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Tim Flynn",
    "winner_school": "Penn State",
    "loser": "Ed Curran",
    "loser_school": "Bucknell",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Jack Bell",
    "winner_school": "Slippery Rock",
    "loser": "Albert Woody",
    "loser_school": "Morgan State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Rob Johnson",
    "winner_school": "Ohio",
    "loser": "Dave Zuniga",
    "loser_school": "Utah State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Jim Frick",
    "winner_school": "Lehigh",
    "loser": "Dave Schneiderman",
    "loser_school": "NC State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Chris Luttrell",
    "winner_school": "New Mexico",
    "loser": "John Cholokian",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Dan Matauch",
    "winner_school": "Michigan State",
    "loser": "Enzo Catullo",
    "loser_school": "North Carolina",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "John Smith",
    "winner_school": "Oklahoma State",
    "loser": "Tim Rothka",
    "loser_school": "Drexel",
    "result": "Fall 6:30"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Gil Sanchez",
    "winner_school": "Nebraska",
    "loser": "Buddy Blaha",
    "loser_school": "Virginia",
    "result": "MD 16-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Joe Gribben",
    "winner_school": "Northern Iowa",
    "loser": "Pat Dorn",
    "loser_school": "South Dakota State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Andre Miller",
    "winner_school": "Wilkes",
    "loser": "Ryan Johnson",
    "loser_school": "Central Connecticut",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Jeff Gibbons",
    "winner_school": "Iowa State",
    "loser": "Glenn McMinn Jr.",
    "loser_school": "Arizona State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "John Fisher",
    "winner_school": "Michigan",
    "loser": "Willy Metzger",
    "loser_school": "Lock Haven",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Chad Taylor",
    "winner_school": "Wyoming",
    "loser": "Dave Sloan",
    "loser_school": "Appalachian State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Keith Healy",
    "winner_school": "Illinois",
    "loser": "Craig Dellorso",
    "loser_school": "Navy",
    "result": "Fall 6:39"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Paul Clark",
    "winner_school": "Clarion",
    "loser": "Dave Love",
    "loser_school": "San Jose State",
    "result": "TF 15-0 6:47"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Tim Flynn",
    "winner_school": "Penn State",
    "loser": "Joei Bales",
    "loser_school": "Northwestern",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Rob Johnson",
    "winner_school": "Ohio",
    "loser": "Jack Bell",
    "loser_school": "Slippery Rock",
    "result": "MD 28-14"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Jim Frick",
    "winner_school": "Lehigh",
    "loser": "Chris Luttrell",
    "loser_school": "New Mexico",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "John Smith",
    "winner_school": "Oklahoma State",
    "loser": "Dan Matauch",
    "loser_school": "Michigan State",
    "result": "TF 23-8 5:44"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Gil Sanchez",
    "winner_school": "Nebraska",
    "loser": "Joe Gribben",
    "loser_school": "Northern Iowa",
    "result": "TF 16-1 5:07"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Andre Miller",
    "winner_school": "Wilkes",
    "loser": "Jeff Gibbons",
    "loser_school": "Iowa State",
    "result": "Fall 6:41"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "John Fisher",
    "winner_school": "Michigan",
    "loser": "Chad Taylor",
    "loser_school": "Wyoming",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Paul Clark",
    "winner_school": "Clarion",
    "loser": "Keith Healy",
    "loser_school": "Illinois",
    "result": "TF 21-4 5:32"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 277,
    "winner": "Joei Bales",
    "winner_school": "Northwestern",
    "loser": "Ed Curran",
    "loser_school": "Bucknell",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 278,
    "winner": "Jack Bell",
    "winner_school": "Slippery Rock",
    "loser": "Dave Zuniga",
    "loser_school": "Utah State",
    "result": "MD 10-1"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 279,
    "winner": "Dave Schneiderman",
    "winner_school": "NC State",
    "loser": "Chris Luttrell",
    "loser_school": "New Mexico",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 280,
    "winner": "Dan Matauch",
    "winner_school": "Michigan State",
    "loser": "Tim Rothka",
    "loser_school": "Drexel",
    "result": "TF 18-3 6:00"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 281,
    "winner": "Joe Gribben",
    "winner_school": "Northern Iowa",
    "loser": "Buddy Blaha",
    "loser_school": "Virginia",
    "result": "MD 13-5"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 282,
    "winner": "Jeff Gibbons",
    "winner_school": "Iowa State",
    "loser": "Ryan Johnson",
    "loser_school": "Central Connecticut",
    "result": "MD 11-1"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 283,
    "winner": "Willy Metzger",
    "winner_school": "Lock Haven",
    "loser": "Chad Taylor",
    "loser_school": "Wyoming",
    "result": "Dec 9-2"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 284,
    "winner": "Dave Love",
    "winner_school": "San Jose State",
    "loser": "Keith Healy",
    "loser_school": "Illinois",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Rob Johnson",
    "winner_school": "Ohio",
    "loser": "Tim Flynn",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "John Smith",
    "winner_school": "Oklahoma State",
    "loser": "Jim Frick",
    "loser_school": "Lehigh",
    "result": "TF 22-7 6:47"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Gil Sanchez",
    "winner_school": "Nebraska",
    "loser": "Andre Miller",
    "loser_school": "Wilkes",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Paul Clark",
    "winner_school": "Clarion",
    "loser": "John Fisher",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Joei Bales",
    "winner_school": "Northwestern",
    "loser": "Jack Bell",
    "loser_school": "Slippery Rock",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Dave Schneiderman",
    "winner_school": "NC State",
    "loser": "Dan Matauch",
    "loser_school": "Michigan State",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Jeff Gibbons",
    "winner_school": "Iowa State",
    "loser": "Joe Gribben",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Dave Love",
    "winner_school": "San Jose State",
    "loser": "Willy Metzger",
    "loser_school": "Lock Haven",
    "result": "DEF"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 429,
    "winner": "John Fisher",
    "winner_school": "Michigan",
    "loser": "Joei Bales",
    "loser_school": "Northwestern",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 430,
    "winner": "Andre Miller",
    "winner_school": "Wilkes",
    "loser": "Dave Schneiderman",
    "loser_school": "NC State",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 431,
    "winner": "Jeff Gibbons",
    "winner_school": "Iowa State",
    "loser": "Jim Frick",
    "loser_school": "Lehigh",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 432,
    "winner": "Tim Flynn",
    "winner_school": "Penn State",
    "loser": "Dave Love",
    "loser_school": "San Jose State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "John Smith",
    "winner_school": "Oklahoma State",
    "loser": "Rob Johnson",
    "loser_school": "Ohio",
    "result": "MD 20-9"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Gil Sanchez",
    "winner_school": "Nebraska",
    "loser": "Paul Clark",
    "loser_school": "Clarion",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "John Fisher",
    "winner_school": "Michigan",
    "loser": "Andre Miller",
    "loser_school": "Wilkes",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Jeff Gibbons",
    "winner_school": "Iowa State",
    "loser": "Tim Flynn",
    "loser_school": "Penn State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 505,
    "winner": "John Fisher",
    "winner_school": "Michigan",
    "loser": "Rob Johnson",
    "loser_school": "Ohio",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 506,
    "winner": "Jeff Gibbons",
    "winner_school": "Iowa State",
    "loser": "Paul Clark",
    "loser_school": "Clarion",
    "result": "Dec 4-3"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 523,
    "winner": "Tim Flynn",
    "winner_school": "Penn State",
    "loser": "Andre Miller",
    "loser_school": "Wilkes",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Paul Clark",
    "winner_school": "Clarion",
    "loser": "Rob Johnson",
    "loser_school": "Ohio",
    "result": "TF 22-7 6:00"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Jeff Gibbons",
    "winner_school": "Iowa State",
    "loser": "John Fisher",
    "loser_school": "Michigan",
    "result": "MD 11-2"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "John Smith",
    "winner_school": "Oklahoma State",
    "loser": "Gil Sanchez",
    "loser_school": "Nebraska",
    "result": "MD 18-4"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Angelo Cuzalina",
    "winner_school": "Oklahoma State",
    "loser": "Kirk Azinger",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "David Boyle",
    "winner_school": "Oregon State",
    "loser": "Jay Smaaladen",
    "loser_school": "VMI",
    "result": "MD 14-1"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 2004,
    "winner": "Kurt Shedenhelm",
    "winner_school": "Northern Iowa",
    "loser": "Junior Saunders",
    "loser_school": "CSU Bakersfield",
    "result": "MD 13-2"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 3004,
    "winner": "Stacy Richmond",
    "winner_school": "Michigan State",
    "loser": "Terry Pride",
    "loser_school": "South Carolina State",
    "result": "Dec 7-0"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4004,
    "winner": "Karl Monaco",
    "winner_school": "Montclair State",
    "loser": "Tedon Fleischman",
    "loser_school": "New Mexico",
    "result": "MD 10-1"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 5004,
    "winner": "Dan St. John",
    "winner_school": "Arizona State",
    "loser": "Fred Hunziker",
    "loser_school": "Fresno State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Mike Cole",
    "winner_school": "Clarion",
    "loser": "Brian McTague",
    "loser_school": "SIU-Edwardsville",
    "result": "Fall 1:43"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Greg Randall",
    "winner_school": "Iowa",
    "loser": "Scott Wiggen",
    "loser_school": "Stanford",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Buzz Wincheski",
    "winner_school": "William & Mary",
    "loser": "Darrel Nerove",
    "loser_school": "Army",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Karl Monaco",
    "winner_school": "Montclair State",
    "loser": "Joe Cesari",
    "loser_school": "NC State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "David Boyle",
    "winner_school": "Oregon State",
    "loser": "Rob Yoos",
    "loser_school": "Lafayette",
    "result": "Fall 4:58"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "Nate Allison",
    "loser_school": "Northern Illinois",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Kurt Shedenhelm",
    "winner_school": "Northern Iowa",
    "loser": "Andy Latora",
    "loser_school": "Nebraska",
    "result": "TF 23-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Joe Lilovich",
    "winner_school": "Purdue",
    "loser": "Bret Specht",
    "loser_school": "Miami Ohio",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Jeff Castro",
    "winner_school": "Montana",
    "loser": "Paul Bastianelli",
    "loser_school": "Delaware",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Sean O'Day",
    "winner_school": "Edinboro",
    "loser": "Dan St. John",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Darrin Mossing",
    "winner_school": "Ohio",
    "loser": "Danny Hayes",
    "loser_school": "Missouri",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Nick Neville",
    "winner_school": "Oklahoma",
    "loser": "Stacy Richmond",
    "loser_school": "Michigan State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Dave Wlodarz",
    "winner_school": "Cleveland State",
    "loser": "Angelo Cuzalina",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Joe Hadge",
    "winner_school": "Penn State",
    "loser": "Lenny Bernstein",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "John Parr",
    "winner_school": "Virginia",
    "loser": "Andy Brydon",
    "loser_school": "Central Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Pat Santoro",
    "winner_school": "Pittsburgh",
    "loser": "Jim Sloan",
    "loser_school": "Central Connecticut",
    "result": "TF 19-3 5:00"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 254,
    "winner": "Joe Cesari",
    "winner_school": "NC State",
    "loser": "Tedon Fleischman",
    "loser_school": "New Mexico",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 1254,
    "winner": "Junior Saunders",
    "winner_school": "CSU Bakersfield",
    "loser": "Andy Latora",
    "loser_school": "Nebraska",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Mike Cole",
    "winner_school": "Clarion",
    "loser": "Greg Randall",
    "loser_school": "Iowa",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Karl Monaco",
    "winner_school": "Montclair State",
    "loser": "Buzz Wincheski",
    "loser_school": "William & Mary",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "David Boyle",
    "loser_school": "Oregon State",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Kurt Shedenhelm",
    "winner_school": "Northern Iowa",
    "loser": "Joe Lilovich",
    "loser_school": "Purdue",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Jeff Castro",
    "winner_school": "Montana",
    "loser": "Sean O'Day",
    "loser_school": "Edinboro",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Nick Neville",
    "winner_school": "Oklahoma",
    "loser": "Darrin Mossing",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Joe Hadge",
    "winner_school": "Penn State",
    "loser": "Dave Wlodarz",
    "loser_school": "Cleveland State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Pat Santoro",
    "winner_school": "Pittsburgh",
    "loser": "John Parr",
    "loser_school": "Virginia",
    "result": "MD 12-4"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 285,
    "winner": "Brian McTague",
    "winner_school": "SIU-Edwardsville",
    "loser": "Greg Randall",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 286,
    "winner": "Joe Cesari",
    "winner_school": "NC State",
    "loser": "Buzz Wincheski",
    "loser_school": "William & Mary",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 287,
    "winner": "David Boyle",
    "winner_school": "Oregon State",
    "loser": "Nate Allison",
    "loser_school": "Northern Illinois",
    "result": "Dec 11-5"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 288,
    "winner": "Joe Lilovich",
    "winner_school": "Purdue",
    "loser": "Junior Saunders",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 14-13"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 289,
    "winner": "Sean O'Day",
    "winner_school": "Edinboro",
    "loser": "Paul Bastianelli",
    "loser_school": "Delaware",
    "result": "Dec 17-10"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 290,
    "winner": "Stacy Richmond",
    "winner_school": "Michigan State",
    "loser": "Darrin Mossing",
    "loser_school": "Ohio",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 291,
    "winner": "Lenny Bernstein",
    "winner_school": "North Carolina",
    "loser": "Dave Wlodarz",
    "loser_school": "Cleveland State",
    "result": "Dec 2-1"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 292,
    "winner": "Jim Sloan",
    "winner_school": "Central Connecticut",
    "loser": "John Parr",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Mike Cole",
    "winner_school": "Clarion",
    "loser": "Karl Monaco",
    "loser_school": "Montclair State",
    "result": "Fall 4:31"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "Kurt Shedenhelm",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Nick Neville",
    "winner_school": "Oklahoma",
    "loser": "Jeff Castro",
    "loser_school": "Montana",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Pat Santoro",
    "winner_school": "Pittsburgh",
    "loser": "Joe Hadge",
    "loser_school": "Penn State",
    "result": "Dec 12-7"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Brian McTague",
    "winner_school": "SIU-Edwardsville",
    "loser": "Joe Cesari",
    "loser_school": "NC State",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "David Boyle",
    "winner_school": "Oregon State",
    "loser": "Joe Lilovich",
    "loser_school": "Purdue",
    "result": "MD 15-1"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Sean O'Day",
    "winner_school": "Edinboro",
    "loser": "Stacy Richmond",
    "loser_school": "Michigan State",
    "result": "Dec 10-8"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Lenny Bernstein",
    "winner_school": "North Carolina",
    "loser": "Jim Sloan",
    "loser_school": "Central Connecticut",
    "result": "Fall 5:20"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 433,
    "winner": "Joe Hadge",
    "winner_school": "Penn State",
    "loser": "Brian McTague",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 434,
    "winner": "Jeff Castro",
    "winner_school": "Montana",
    "loser": "David Boyle",
    "loser_school": "Oregon State",
    "result": "MD 10-2"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 435,
    "winner": "Sean O'Day",
    "winner_school": "Edinboro",
    "loser": "Kurt Shedenhelm",
    "loser_school": "Northern Iowa",
    "result": "MD 13-4"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 436,
    "winner": "Lenny Bernstein",
    "winner_school": "North Carolina",
    "loser": "Karl Monaco",
    "loser_school": "Montclair State",
    "result": "Fall 1:22"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "Mike Cole",
    "loser_school": "Clarion",
    "result": "Dec 9-8"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Pat Santoro",
    "winner_school": "Pittsburgh",
    "loser": "Nick Neville",
    "loser_school": "Oklahoma",
    "result": "Dec 8-6"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Joe Hadge",
    "winner_school": "Penn State",
    "loser": "Jeff Castro",
    "loser_school": "Montana",
    "result": "Dec 10-6"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Lenny Bernstein",
    "winner_school": "North Carolina",
    "loser": "Sean O'Day",
    "loser_school": "Edinboro",
    "result": "Fall 3:49"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 507,
    "winner": "Mike Cole",
    "winner_school": "Clarion",
    "loser": "Joe Hadge",
    "loser_school": "Penn State",
    "result": "Dec 5-0"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 508,
    "winner": "Lenny Bernstein",
    "winner_school": "North Carolina",
    "loser": "Nick Neville",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Sean O'Day",
    "winner_school": "Edinboro",
    "loser": "Jeff Castro",
    "loser_school": "Montana",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Nick Neville",
    "winner_school": "Oklahoma",
    "loser": "Joe Hadge",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Mike Cole",
    "winner_school": "Clarion",
    "loser": "Lenny Bernstein",
    "loser_school": "North Carolina",
    "result": "Dec 8-4"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "Pat Santoro",
    "loser_school": "Pittsburgh",
    "result": "Fall 3:52"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Carlos Levexier",
    "winner_school": "San Francisco State",
    "loser": "Mike French",
    "loser_school": "Army",
    "result": "Dec 4-1"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Scott Duncan",
    "winner_school": "Indiana",
    "loser": "Paul Schwern",
    "loser_school": "New Hampshire",
    "result": "Dec 5-0"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Darrin Higgins",
    "winner_school": "Oklahoma",
    "loser": "Kip Kristoff",
    "loser_school": "SIU-Edwardsville",
    "result": "MD 13-2"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 3005,
    "winner": "Dave Morgan",
    "winner_school": "Bloomsburg",
    "loser": "Malcolm Boykin",
    "loser_school": "Cal Poly",
    "result": "MD 15-3"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 4005,
    "winner": "Terry Kennedy",
    "winner_school": "Edinboro",
    "loser": "Mike Arena",
    "loser_school": "Hofstra",
    "result": "Dec 11-7"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5005,
    "winner": "Sean Finkbeiner",
    "winner_school": "Penn State",
    "loser": "Paul Radomski",
    "loser_school": "Navy",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Amaro Lamar",
    "winner_school": "Appalachian State",
    "loser": "Bob Hill",
    "loser_school": "Brown",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Mike Novogratz",
    "winner_school": "Princeton",
    "loser": "Jon Cardi",
    "loser_school": "North Carolina",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Scott Cook",
    "winner_school": "Utah State",
    "loser": "Ron Wisniewski",
    "loser_school": "Notre Dame",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Darrin Higgins",
    "winner_school": "Oklahoma",
    "loser": "Tom Nugent",
    "loser_school": "Duke",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Scott Duncan",
    "winner_school": "Indiana",
    "loser": "Burke Stone",
    "loser_school": "Weber State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Bill Ferrie",
    "winner_school": "Nebraska",
    "loser": "Pat Hogan",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Dave Morgan",
    "winner_school": "Bloomsburg",
    "loser": "Ed Brady",
    "loser_school": "Wisconsin-Whitewater",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Troy Emerson",
    "loser_school": "George Mason",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Thom Ortiz",
    "loser_school": "Arizona State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Carlos Levexier",
    "winner_school": "San Francisco State",
    "loser": "Tony Mack",
    "loser_school": "Howard",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Jim Akerly",
    "winner_school": "West Virginia",
    "loser": "Andrew Skove",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Vince Silva",
    "winner_school": "Oklahoma State",
    "loser": "Terry Kennedy",
    "loser_school": "Edinboro",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Sean Finkbeiner",
    "winner_school": "Penn State",
    "loser": "David Yerse",
    "loser_school": "Kent State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Gary Bolin",
    "winner_school": "Pittsburgh",
    "loser": "Matt Toves",
    "loser_school": "San Jose State",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Jeff Jordan",
    "winner_school": "Wisconsin",
    "loser": "Jim Schmitz",
    "loser_school": "Marquette",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Ben Coronado",
    "winner_school": "Boise State",
    "loser": "Rodd Moretz",
    "loser_school": "Montana State",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 255,
    "winner": "Kip Kristoff",
    "winner_school": "SIU-Edwardsville",
    "loser": "Tom Nugent",
    "loser_school": "Duke",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Amaro Lamar",
    "winner_school": "Appalachian State",
    "loser": "Mike Novogratz",
    "loser_school": "Princeton",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Darrin Higgins",
    "winner_school": "Oklahoma",
    "loser": "Scott Cook",
    "loser_school": "Utah State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Bill Ferrie",
    "winner_school": "Nebraska",
    "loser": "Scott Duncan",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Dave Morgan",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Carlos Levexier",
    "loser_school": "San Francisco State",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Vince Silva",
    "winner_school": "Oklahoma State",
    "loser": "Jim Akerly",
    "loser_school": "West Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Gary Bolin",
    "winner_school": "Pittsburgh",
    "loser": "Sean Finkbeiner",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Jeff Jordan",
    "winner_school": "Wisconsin",
    "loser": "Ben Coronado",
    "loser_school": "Boise State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 293,
    "winner": "Mike Novogratz",
    "winner_school": "Princeton",
    "loser": "Bob Hill",
    "loser_school": "Brown",
    "result": "Dec 7-1"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 294,
    "winner": "Scott Cook",
    "winner_school": "Utah State",
    "loser": "Kip Kristoff",
    "loser_school": "SIU-Edwardsville",
    "result": "TF 17-1 5:59"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 295,
    "winner": "Scott Duncan",
    "winner_school": "Indiana",
    "loser": "Pat Hogan",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:34"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 296,
    "winner": "Dave Morgan",
    "winner_school": "Bloomsburg",
    "loser": "Troy Emerson",
    "loser_school": "George Mason",
    "result": "Dec 9-7"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 297,
    "winner": "Thom Ortiz",
    "winner_school": "Arizona State",
    "loser": "Carlos Levexier",
    "loser_school": "San Francisco State",
    "result": "Dec 5-0"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 298,
    "winner": "Jim Akerly",
    "winner_school": "West Virginia",
    "loser": "Terry Kennedy",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 299,
    "winner": "Sean Finkbeiner",
    "winner_school": "Penn State",
    "loser": "Matt Toves",
    "loser_school": "San Jose State",
    "result": "MD 11-3"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 300,
    "winner": "Jim Schmitz",
    "winner_school": "Marquette",
    "loser": "Ben Coronado",
    "loser_school": "Boise State",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Darrin Higgins",
    "winner_school": "Oklahoma",
    "loser": "Amaro Lamar",
    "loser_school": "Appalachian State",
    "result": "MD 15-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Bill Ferrie",
    "loser_school": "Nebraska",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Vince Silva",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Jeff Jordan",
    "winner_school": "Wisconsin",
    "loser": "Gary Bolin",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Scott Cook",
    "winner_school": "Utah State",
    "loser": "Mike Novogratz",
    "loser_school": "Princeton",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Scott Duncan",
    "winner_school": "Indiana",
    "loser": "Dave Morgan",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:26"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Jim Akerly",
    "winner_school": "West Virginia",
    "loser": "Thom Ortiz",
    "loser_school": "Arizona State",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Sean Finkbeiner",
    "winner_school": "Penn State",
    "loser": "Jim Schmitz",
    "loser_school": "Marquette",
    "result": "Fall 5:59"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 437,
    "winner": "Scott Cook",
    "winner_school": "Utah State",
    "loser": "Gary Bolin",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 438,
    "winner": "Vince Silva",
    "winner_school": "Oklahoma State",
    "loser": "Scott Duncan",
    "loser_school": "Indiana",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 439,
    "winner": "Jim Akerly",
    "winner_school": "West Virginia",
    "loser": "Bill Ferrie",
    "loser_school": "Nebraska",
    "result": "MD 11-3"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 440,
    "winner": "Sean Finkbeiner",
    "winner_school": "Penn State",
    "loser": "Amaro Lamar",
    "loser_school": "Appalachian State",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Darrin Higgins",
    "loser_school": "Oklahoma",
    "result": "MD 15-2"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Jeff Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Vince Silva",
    "winner_school": "Oklahoma State",
    "loser": "Scott Cook",
    "loser_school": "Utah State",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Sean Finkbeiner",
    "winner_school": "Penn State",
    "loser": "Jim Akerly",
    "loser_school": "West Virginia",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 509,
    "winner": "Darrin Higgins",
    "winner_school": "Oklahoma",
    "loser": "Vince Silva",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 510,
    "winner": "Jeff Jordan",
    "winner_school": "Wisconsin",
    "loser": "Sean Finkbeiner",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Scott Cook",
    "winner_school": "Utah State",
    "loser": "Jim Akerly",
    "loser_school": "West Virginia",
    "result": "Dec 8-4"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Vince Silva",
    "winner_school": "Oklahoma State",
    "loser": "Sean Finkbeiner",
    "loser_school": "Penn State",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Darrin Higgins",
    "winner_school": "Oklahoma",
    "loser": "Jeff Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Jim Heffernan",
    "loser_school": "Iowa",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Glen Lanham",
    "winner_school": "Oklahoma State",
    "loser": "Wayne Sharp",
    "loser_school": "Arizona State",
    "result": "MD 17-7"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Joe Pantaleo",
    "winner_school": "Michigan",
    "loser": "Scott Schleicher",
    "loser_school": "Navy",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Paul McShane",
    "winner_school": "Wisconsin",
    "loser": "Chauncy Wynn",
    "loser_school": "Morgan State",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Brett Rasmussen",
    "winner_school": "Minnesota",
    "loser": "Bryce Hall",
    "loser_school": "Utah State",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Lloyd Hygelund",
    "winner_school": "Portland State",
    "loser": "Steve Fairbanks",
    "loser_school": "Toledo",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Stewart Carter",
    "winner_school": "Iowa State",
    "loser": "John Leone",
    "loser_school": "SUNY-Brockport",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "John Heffernan",
    "winner_school": "Iowa",
    "loser": "Dean Mitchell",
    "loser_school": "Brigham Young",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Kenny Fischer",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Brian Kurlander",
    "winner_school": "James Madison",
    "loser": "Joe Pantaleo",
    "loser_school": "Michigan",
    "result": "Fall 4:56"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Eric Wertz",
    "winner_school": "Pittsburgh",
    "loser": "J.B. Waltermire",
    "loser_school": "Air Force",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Kory Mosher",
    "winner_school": "North Dakota",
    "loser": "Gary Fischbein",
    "loser_school": "Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Glen Lanham",
    "winner_school": "Oklahoma State",
    "loser": "Pete Dibenedetto",
    "loser_school": "Boston University",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Tom Toggas",
    "winner_school": "Lehigh",
    "loser": "Keith Massey",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Clay Ogden",
    "winner_school": "Citadel",
    "loser": "Ardeshir Asgari",
    "loser_school": "Cal State Fullerton",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Ken Haselrig",
    "winner_school": "Clarion",
    "loser": "Lee Reitzel",
    "loser_school": "Appalachian State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Mark Banks",
    "winner_school": "Bloomsburg",
    "loser": "Kevin Bullis",
    "loser_school": "Bucknell",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Ted Camamo",
    "winner_school": "Drake",
    "loser": "Rob Bazant",
    "loser_school": "Montana",
    "result": "MD 17-9"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "Kevin Turner",
    "loser_school": "William & Mary",
    "result": "MD 11-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 256,
    "winner": "Wayne Sharp",
    "winner_school": "Arizona State",
    "loser": "Pete Dibenedetto",
    "loser_school": "Boston University",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Paul McShane",
    "winner_school": "Wisconsin",
    "loser": "Brett Rasmussen",
    "loser_school": "Minnesota",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Stewart Carter",
    "winner_school": "Iowa State",
    "loser": "Lloyd Hygelund",
    "loser_school": "Portland State",
    "result": "Fall 2:53"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "John Heffernan",
    "winner_school": "Iowa",
    "loser": "Rob Koll",
    "loser_school": "North Carolina",
    "result": "Fall 6:47"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Brian Kurlander",
    "winner_school": "James Madison",
    "loser": "Eric Wertz",
    "loser_school": "Pittsburgh",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Glen Lanham",
    "winner_school": "Oklahoma State",
    "loser": "Kory Mosher",
    "loser_school": "North Dakota",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Clay Ogden",
    "winner_school": "Citadel",
    "loser": "Tom Toggas",
    "loser_school": "Lehigh",
    "result": "Fall 5:34"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Ken Haselrig",
    "winner_school": "Clarion",
    "loser": "Mark Banks",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "Ted Camamo",
    "loser_school": "Drake",
    "result": "Fall 4:54"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 301,
    "winner": "Brett Rasmussen",
    "winner_school": "Minnesota",
    "loser": "Chauncy Wynn",
    "loser_school": "Morgan State",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 302,
    "winner": "John Leone",
    "winner_school": "SUNY-Brockport",
    "loser": "Lloyd Hygelund",
    "loser_school": "Portland State",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 303,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Dean Mitchell",
    "loser_school": "Brigham Young",
    "result": "MD 10-1"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 304,
    "winner": "Joe Pantaleo",
    "winner_school": "Michigan",
    "loser": "Eric Wertz",
    "loser_school": "Pittsburgh",
    "result": "Dec 11-4"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 305,
    "winner": "Kory Mosher",
    "winner_school": "North Dakota",
    "loser": "Wayne Sharp",
    "loser_school": "Arizona State",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 306,
    "winner": "Tom Toggas",
    "winner_school": "Lehigh",
    "loser": "Ardeshir Asgari",
    "loser_school": "Cal State Fullerton",
    "result": "M FOR"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 307,
    "winner": "Mark Banks",
    "winner_school": "Bloomsburg",
    "loser": "Lee Reitzel",
    "loser_school": "Appalachian State",
    "result": "Dec 11-5"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 308,
    "winner": "Ted Camamo",
    "winner_school": "Drake",
    "loser": "Kevin Turner",
    "loser_school": "William & Mary",
    "result": "Fall 1:18"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Stewart Carter",
    "winner_school": "Iowa State",
    "loser": "Paul McShane",
    "loser_school": "Wisconsin",
    "result": "Fall 5:22"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "John Heffernan",
    "winner_school": "Iowa",
    "loser": "Brian Kurlander",
    "loser_school": "James Madison",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Glen Lanham",
    "winner_school": "Oklahoma State",
    "loser": "Clay Ogden",
    "loser_school": "Citadel",
    "result": "Dec 13-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Ken Haselrig",
    "winner_school": "Clarion",
    "loser": "Jeff Cardwell",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "John Leone",
    "winner_school": "SUNY-Brockport",
    "loser": "Brett Rasmussen",
    "loser_school": "Minnesota",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Joe Pantaleo",
    "loser_school": "Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Tom Toggas",
    "winner_school": "Lehigh",
    "loser": "Kory Mosher",
    "loser_school": "North Dakota",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Mark Banks",
    "winner_school": "Bloomsburg",
    "loser": "Ted Camamo",
    "loser_school": "Drake",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 441,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "John Leone",
    "loser_school": "SUNY-Brockport",
    "result": "DEF"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 442,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Clay Ogden",
    "loser_school": "Citadel",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 443,
    "winner": "Brian Kurlander",
    "winner_school": "James Madison",
    "loser": "Tom Toggas",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 444,
    "winner": "Paul McShane",
    "winner_school": "Wisconsin",
    "loser": "Mark Banks",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-8"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Stewart Carter",
    "winner_school": "Iowa State",
    "loser": "John Heffernan",
    "loser_school": "Iowa",
    "result": "MD 8-0"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Ken Haselrig",
    "winner_school": "Clarion",
    "loser": "Glen Lanham",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Jeff Cardwell",
    "loser_school": "Oregon State",
    "result": "MD 12-4"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Paul McShane",
    "winner_school": "Wisconsin",
    "loser": "Brian Kurlander",
    "loser_school": "James Madison",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 511,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "John Heffernan",
    "loser_school": "Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 512,
    "winner": "Paul McShane",
    "winner_school": "Wisconsin",
    "loser": "Glen Lanham",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-1"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "Brian Kurlander",
    "loser_school": "James Madison",
    "result": "Dec 6-1"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Glen Lanham",
    "winner_school": "Oklahoma State",
    "loser": "John Heffernan",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Paul McShane",
    "loser_school": "Wisconsin",
    "result": "Dec 8-1"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Stewart Carter",
    "winner_school": "Iowa State",
    "loser": "Ken Haselrig",
    "loser_school": "Clarion",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Bryan Wilson",
    "winner_school": "Wyoming",
    "loser": "Chuck Kearney",
    "loser_school": "Oregon",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "Scott Diveney",
    "winner_school": "Drake",
    "loser": "Ernie Slone",
    "loser_school": "Cleveland State",
    "result": "Dec 8-7"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 2007,
    "winner": "Joe Silvestro",
    "winner_school": "North Carolina",
    "loser": "Dave McCormick",
    "loser_school": "Army",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Mike Amine",
    "winner_school": "Michigan",
    "loser": "John Kohls",
    "loser_school": "Brigham Young",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "John Monaco",
    "winner_school": "Montclair State",
    "loser": "John Cory",
    "loser_school": "Nebraska",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Joe Urso",
    "winner_school": "Purdue",
    "loser": "Rod Sande",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Jody Karam",
    "winner_school": "Lock Haven",
    "loser": "Scott Diveney",
    "loser_school": "Drake",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Jerry Umin",
    "winner_school": "Eastern Michigan",
    "loser": "Marty Morgan",
    "loser_school": "North Dakota State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Andy Rice",
    "loser_school": "Cornell",
    "result": "TF 16-1 3:19"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Joe Silvestro",
    "winner_school": "North Carolina",
    "loser": "Jeff Randall",
    "loser_school": "Nebraska-Omaha",
    "result": "Fall 4:37"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Craig Martin",
    "winner_school": "Missouri",
    "loser": "Sean Henry",
    "loser_school": "Duke",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Vince Walker",
    "winner_school": "Fresno State",
    "loser": "Brad Morris",
    "loser_school": "Ferris State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Kevin Jackson",
    "winner_school": "Iowa State",
    "loser": "Bryan Wilson",
    "loser_school": "Wyoming",
    "result": "TF 23-8 5:51"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Craig Rome",
    "winner_school": "Wilkes",
    "loser": "Todd Arris",
    "loser_school": "VMI",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Ralph Liegel",
    "winner_school": "Wisconsin",
    "loser": "Dave Williams",
    "loser_school": "Boston University",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Mike Farrell",
    "winner_school": "Oklahoma State",
    "loser": "Coy Burke",
    "loser_school": "Delaware State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Curt Scovel",
    "winner_school": "Maryland",
    "loser": "Eric Osborne",
    "loser_school": "Cal Poly",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Mike Bomberger",
    "winner_school": "Bucknell",
    "loser": "Anthony Cox",
    "loser_school": "Campbell",
    "result": "Fall 2:19"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Vince Hughes",
    "loser_school": "Montana",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "John Monaco",
    "winner_school": "Montclair State",
    "loser": "Mike Amine",
    "loser_school": "Michigan",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Joe Urso",
    "winner_school": "Purdue",
    "loser": "Jody Karam",
    "loser_school": "Lock Haven",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Jerry Umin",
    "loser_school": "Eastern Michigan",
    "result": "MD 17-9"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Craig Martin",
    "winner_school": "Missouri",
    "loser": "Joe Silvestro",
    "loser_school": "North Carolina",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Kevin Jackson",
    "winner_school": "Iowa State",
    "loser": "Vince Walker",
    "loser_school": "Fresno State",
    "result": "TF 21-6 4:25"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Ralph Liegel",
    "winner_school": "Wisconsin",
    "loser": "Craig Rome",
    "loser_school": "Wilkes",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Mike Farrell",
    "winner_school": "Oklahoma State",
    "loser": "Curt Scovel",
    "loser_school": "Maryland",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Mike Bomberger",
    "loser_school": "Bucknell",
    "result": "MD 15-4"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 309,
    "winner": "Mike Amine",
    "winner_school": "Michigan",
    "loser": "John Cory",
    "loser_school": "Nebraska",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 310,
    "winner": "Jody Karam",
    "winner_school": "Lock Haven",
    "loser": "Rod Sande",
    "loser_school": "Minnesota",
    "result": "Dec 9-5"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 311,
    "winner": "Jerry Umin",
    "winner_school": "Eastern Michigan",
    "loser": "Andy Rice",
    "loser_school": "Cornell",
    "result": "Fall 1:38"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 312,
    "winner": "Joe Silvestro",
    "winner_school": "North Carolina",
    "loser": "Sean Henry",
    "loser_school": "Duke",
    "result": "MD 17-5"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 313,
    "winner": "Vince Walker",
    "winner_school": "Fresno State",
    "loser": "Bryan Wilson",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 314,
    "winner": "Craig Rome",
    "winner_school": "Wilkes",
    "loser": "Dave Williams",
    "loser_school": "Boston University",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 315,
    "winner": "Curt Scovel",
    "winner_school": "Maryland",
    "loser": "Coy Burke",
    "loser_school": "Delaware State",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 316,
    "winner": "Vince Hughes",
    "winner_school": "Montana",
    "loser": "Mike Bomberger",
    "loser_school": "Bucknell",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Joe Urso",
    "winner_school": "Purdue",
    "loser": "John Monaco",
    "loser_school": "Montclair State",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Craig Martin",
    "loser_school": "Missouri",
    "result": "MD 16-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Kevin Jackson",
    "winner_school": "Iowa State",
    "loser": "Ralph Liegel",
    "loser_school": "Wisconsin",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Mike Farrell",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-1"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Mike Amine",
    "winner_school": "Michigan",
    "loser": "Jody Karam",
    "loser_school": "Lock Haven",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Jerry Umin",
    "winner_school": "Eastern Michigan",
    "loser": "Joe Silvestro",
    "loser_school": "North Carolina",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Craig Rome",
    "winner_school": "Wilkes",
    "loser": "Vince Walker",
    "loser_school": "Fresno State",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Curt Scovel",
    "winner_school": "Maryland",
    "loser": "Vince Hughes",
    "loser_school": "Montana",
    "result": "TF 18-2 4:29"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 445,
    "winner": "Mike Farrell",
    "winner_school": "Oklahoma State",
    "loser": "Mike Amine",
    "loser_school": "Michigan",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 446,
    "winner": "Jerry Umin",
    "winner_school": "Eastern Michigan",
    "loser": "Ralph Liegel",
    "loser_school": "Wisconsin",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 447,
    "winner": "Craig Martin",
    "winner_school": "Missouri",
    "loser": "Craig Rome",
    "loser_school": "Wilkes",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 448,
    "winner": "Curt Scovel",
    "winner_school": "Maryland",
    "loser": "John Monaco",
    "loser_school": "Montclair State",
    "result": "MD 14-6"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Joe Urso",
    "loser_school": "Purdue",
    "result": "TF 25-10 5:41"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Kevin Jackson",
    "winner_school": "Iowa State",
    "loser": "Greg Elinsky",
    "loser_school": "Penn State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Mike Farrell",
    "winner_school": "Oklahoma State",
    "loser": "Jerry Umin",
    "loser_school": "Eastern Michigan",
    "result": "Dec 1-0"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Craig Martin",
    "winner_school": "Missouri",
    "loser": "Curt Scovel",
    "loser_school": "Maryland",
    "result": "Dec 10-6"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 513,
    "winner": "Mike Farrell",
    "winner_school": "Oklahoma State",
    "loser": "Joe Urso",
    "loser_school": "Purdue",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 514,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Craig Martin",
    "loser_school": "Missouri",
    "result": "MD 10-2"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "Jerry Umin",
    "winner_school": "Eastern Michigan",
    "loser": "Curt Scovel",
    "loser_school": "Maryland",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Craig Martin",
    "winner_school": "Missouri",
    "loser": "Joe Urso",
    "loser_school": "Purdue",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Mike Farrell",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Kevin Jackson",
    "loser_school": "Iowa State",
    "result": "Dec 10-4"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Reggie Wilson",
    "winner_school": "Chicago State",
    "loser": "Jim Hardy",
    "loser_school": "Missouri",
    "result": "TF 19-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Paul Green",
    "winner_school": "Morgan State",
    "loser": "Stephen Peterson",
    "loser_school": "George Washington",
    "result": "MD 13-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 2008,
    "winner": "John Ginther",
    "winner_school": "Arizona State",
    "loser": "Craig Bogard",
    "loser_school": "Brigham Young",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Fred Little",
    "winner_school": "Fresno State",
    "loser": "Charlie Buckshaw",
    "loser_school": "Chattanooga",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Cody Olson",
    "winner_school": "Nebraska",
    "loser": "Steve Farrell",
    "loser_school": "Harvard",
    "result": "MD 21-9"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Chris Barnes",
    "winner_school": "Oklahoma State",
    "loser": "Barry Preslaski",
    "loser_school": "Drake",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Reggie Wilson",
    "winner_school": "Chicago State",
    "loser": "Mike Gibbons",
    "loser_school": "Central Connecticut",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Darryl Pope",
    "winner_school": "CSU Bakersfield",
    "loser": "Mike Funk",
    "loser_school": "Northwestern",
    "result": "Fall 0:36"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Pat Johannes",
    "winner_school": "North Dakota State",
    "loser": "Corey Veach",
    "loser_school": "Weber State",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Paul Green",
    "winner_school": "Morgan State",
    "loser": "Cliff Harris",
    "loser_school": "Army",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "R.J. Nebe",
    "winner_school": "Nebraska-Omaha",
    "loser": "Jose Flores",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 7-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "John Wagner",
    "winner_school": "Virginia",
    "loser": "Craig Costello",
    "loser_school": "West Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Steve Metzger",
    "winner_school": "Iowa State",
    "loser": "John Ginther",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Carlton Kinkade",
    "winner_school": "Central Michigan",
    "loser": "Anthony Romero",
    "loser_school": "Cal Poly",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Greg MacDonald",
    "loser_school": "College of New Jersey",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Steve Peperak",
    "winner_school": "Maryland",
    "loser": "Braden Adkinson",
    "loser_school": "Cleveland State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Scott Pierre",
    "winner_school": "Purdue",
    "loser": "Eyvind Boyesen",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Dan Mayo",
    "winner_school": "Penn State",
    "loser": "Ron Gharbo",
    "loser_school": "Ohio State",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "John Stafford",
    "winner_school": "Rider",
    "loser": "Joe Stafford",
    "loser_school": "Oklahoma",
    "result": "MD 13-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "177",
    "bout": 258,
    "winner": "Jim Hardy",
    "winner_school": "Missouri",
    "loser": "Mike Gibbons",
    "loser_school": "Central Connecticut",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Fred Little",
    "winner_school": "Fresno State",
    "loser": "Cody Olson",
    "loser_school": "Nebraska",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Reggie Wilson",
    "winner_school": "Chicago State",
    "loser": "Chris Barnes",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Darryl Pope",
    "winner_school": "CSU Bakersfield",
    "loser": "Pat Johannes",
    "loser_school": "North Dakota State",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "R.J. Nebe",
    "winner_school": "Nebraska-Omaha",
    "loser": "Paul Green",
    "loser_school": "Morgan State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Steve Metzger",
    "winner_school": "Iowa State",
    "loser": "John Wagner",
    "loser_school": "Virginia",
    "result": "Dec 14-8"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Carlton Kinkade",
    "loser_school": "Central Michigan",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Steve Peperak",
    "winner_school": "Maryland",
    "loser": "Scott Pierre",
    "loser_school": "Purdue",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Dan Mayo",
    "winner_school": "Penn State",
    "loser": "John Stafford",
    "loser_school": "Rider",
    "result": "MD 16-5"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 317,
    "winner": "Charlie Buckshaw",
    "winner_school": "Chattanooga",
    "loser": "Cody Olson",
    "loser_school": "Nebraska",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 318,
    "winner": "Jim Hardy",
    "winner_school": "Missouri",
    "loser": "Chris Barnes",
    "loser_school": "Oklahoma State",
    "result": "MD 14-4"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 319,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Pat Johannes",
    "loser_school": "North Dakota State",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 320,
    "winner": "Jose Flores",
    "winner_school": "Cal State Fullerton",
    "loser": "Paul Green",
    "loser_school": "Morgan State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 321,
    "winner": "John Ginther",
    "winner_school": "Arizona State",
    "loser": "John Wagner",
    "loser_school": "Virginia",
    "result": "Fall 5:59"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 322,
    "winner": "Carlton Kinkade",
    "winner_school": "Central Michigan",
    "loser": "Greg MacDonald",
    "loser_school": "College of New Jersey",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 323,
    "winner": "Scott Pierre",
    "winner_school": "Purdue",
    "loser": "Braden Adkinson",
    "loser_school": "Cleveland State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 324,
    "winner": "Ron Gharbo",
    "winner_school": "Ohio State",
    "loser": "John Stafford",
    "loser_school": "Rider",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Reggie Wilson",
    "winner_school": "Chicago State",
    "loser": "Fred Little",
    "loser_school": "Fresno State",
    "result": "Dec 9-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Darryl Pope",
    "winner_school": "CSU Bakersfield",
    "loser": "R.J. Nebe",
    "loser_school": "Nebraska-Omaha",
    "result": "TF 15-0 7:00"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Steve Metzger",
    "loser_school": "Iowa State",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Dan Mayo",
    "winner_school": "Penn State",
    "loser": "Steve Peperak",
    "loser_school": "Maryland",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Charlie Buckshaw",
    "winner_school": "Chattanooga",
    "loser": "Jim Hardy",
    "loser_school": "Missouri",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Jose Flores",
    "loser_school": "Cal State Fullerton",
    "result": "MD 17-6"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "John Ginther",
    "winner_school": "Arizona State",
    "loser": "Carlton Kinkade",
    "loser_school": "Central Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Ron Gharbo",
    "winner_school": "Ohio State",
    "loser": "Scott Pierre",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 449,
    "winner": "Steve Peperak",
    "winner_school": "Maryland",
    "loser": "Charlie Buckshaw",
    "loser_school": "Chattanooga",
    "result": "Dec 11-5"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 450,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Steve Metzger",
    "loser_school": "Iowa State",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 451,
    "winner": "John Ginther",
    "winner_school": "Arizona State",
    "loser": "R.J. Nebe",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 452,
    "winner": "Fred Little",
    "winner_school": "Fresno State",
    "loser": "Ron Gharbo",
    "loser_school": "Ohio State",
    "result": "Dec 9-4"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Darryl Pope",
    "winner_school": "CSU Bakersfield",
    "loser": "Reggie Wilson",
    "loser_school": "Chicago State",
    "result": "Fall 5:22"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Dan Mayo",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Steve Peperak",
    "loser_school": "Maryland",
    "result": "Dec 9-6"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Fred Little",
    "winner_school": "Fresno State",
    "loser": "John Ginther",
    "loser_school": "Arizona State",
    "result": "Dec 9-2"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 515,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Reggie Wilson",
    "loser_school": "Chicago State",
    "result": "Dec 9-2"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 516,
    "winner": "Dan Mayo",
    "winner_school": "Penn State",
    "loser": "Fred Little",
    "loser_school": "Fresno State",
    "result": "Dec 5-4"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "Steve Peperak",
    "winner_school": "Maryland",
    "loser": "John Ginther",
    "loser_school": "Arizona State",
    "result": "Dec 9-2"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Fred Little",
    "winner_school": "Fresno State",
    "loser": "Reggie Wilson",
    "loser_school": "Chicago State",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Dan Mayo",
    "winner_school": "Penn State",
    "loser": "Mike Funk",
    "loser_school": "Northwestern",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Darryl Pope",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Leland Rogers",
    "winner_school": "Syracuse",
    "loser": "Ted Sliwinski",
    "loser_school": "Duke",
    "result": "MD 10-1"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "Dan Funk",
    "winner_school": "Northwestern",
    "loser": "Terry McIntyre",
    "loser_school": "Stanford",
    "result": "Fall 5:59"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 2009,
    "winner": "Eric Mittlestead",
    "winner_school": "CSU Bakersfield",
    "loser": "Kyle Richards",
    "loser_school": "Wisconsin",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Ken Hackman",
    "winner_school": "California PA",
    "loser": "Kurt Knechtel",
    "loser_school": "Utah State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Jeff Weatherman",
    "winner_school": "Northern Iowa",
    "loser": "Scott Holman",
    "loser_school": "Indiana",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Bruce Wallace",
    "winner_school": "Bloomsburg",
    "loser": "Doug Watson",
    "loser_school": "Oklahoma",
    "result": "Fall 3:19"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Leland Rogers",
    "winner_school": "Syracuse",
    "loser": "Jeff Rufolo",
    "loser_school": "Chattanooga",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Dave Dean",
    "winner_school": "Minnesota",
    "loser": "Kevin Mottlowitz",
    "loser_school": "Illinois",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Brian Platt",
    "winner_school": "Slippery Rock",
    "loser": "Dominic Cianchetti",
    "loser_school": "Hofstra",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Eric Mittlestead",
    "winner_school": "CSU Bakersfield",
    "loser": "John O'Brien",
    "loser_school": "Fresno State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Jim Gill",
    "winner_school": "Oklahoma State",
    "loser": "Jon Frangoulis",
    "loser_school": "Southwest Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Andy Voit",
    "winner_school": "Penn State",
    "loser": "Bill Freeman",
    "loser_school": "Lock Haven",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Dan Funk",
    "winner_school": "Northwestern",
    "loser": "Wade Ayala",
    "loser_school": "Montana State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Eric Voelker",
    "winner_school": "Iowa State",
    "loser": "Dennis Leonard",
    "loser_school": "Central Connecticut",
    "result": "TF 23-8 6:58"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Mark Willis",
    "winner_school": "Brigham Young",
    "loser": "Mike Traynor",
    "loser_school": "Nebraska",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Scott Kelly",
    "winner_school": "Navy",
    "loser": "Dan Costigan",
    "loser_school": "Army",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Dennis Loushin",
    "winner_school": "Ohio",
    "loser": "Doug Stalnaker",
    "loser_school": "Clemson",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Doug Baker",
    "winner_school": "Kent State",
    "loser": "John Vorrice",
    "loser_school": "Morgan State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Mike Davies",
    "winner_school": "Arizona State",
    "loser": "Jay Suvak",
    "loser_school": "Cleveland State",
    "result": "TF 17-2 6:51"
  },
  {
    "round": "ConsPrelims",
    "weight": "190",
    "bout": 259,
    "winner": "John O'Brien",
    "winner_school": "Fresno State",
    "loser": "Kyle Richards",
    "loser_school": "Wisconsin",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Jeff Weatherman",
    "winner_school": "Northern Iowa",
    "loser": "Ken Hackman",
    "loser_school": "California PA",
    "result": "MD 19-9"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Bruce Wallace",
    "winner_school": "Bloomsburg",
    "loser": "Leland Rogers",
    "loser_school": "Syracuse",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Dave Dean",
    "winner_school": "Minnesota",
    "loser": "Brian Platt",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Eric Mittlestead",
    "winner_school": "CSU Bakersfield",
    "loser": "Jim Gill",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Andy Voit",
    "winner_school": "Penn State",
    "loser": "Dan Funk",
    "loser_school": "Northwestern",
    "result": "Fall 3:50"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Eric Voelker",
    "winner_school": "Iowa State",
    "loser": "Mark Willis",
    "loser_school": "Brigham Young",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Scott Kelly",
    "winner_school": "Navy",
    "loser": "Dennis Loushin",
    "loser_school": "Ohio",
    "result": "Fall 0:41"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Mike Davies",
    "winner_school": "Arizona State",
    "loser": "Doug Baker",
    "loser_school": "Kent State",
    "result": "Dec 9-2"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 325,
    "winner": "Ken Hackman",
    "winner_school": "California PA",
    "loser": "Scott Holman",
    "loser_school": "Indiana",
    "result": "MD 19-6"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 326,
    "winner": "Leland Rogers",
    "winner_school": "Syracuse",
    "loser": "Doug Watson",
    "loser_school": "Oklahoma",
    "result": "MD 16-4"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 327,
    "winner": "Brian Platt",
    "winner_school": "Slippery Rock",
    "loser": "Kevin Mottlowitz",
    "loser_school": "Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 328,
    "winner": "Jim Gill",
    "winner_school": "Oklahoma State",
    "loser": "John O'Brien",
    "loser_school": "Fresno State",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 329,
    "winner": "Dan Funk",
    "winner_school": "Northwestern",
    "loser": "Bill Freeman",
    "loser_school": "Lock Haven",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 330,
    "winner": "Mark Willis",
    "winner_school": "Brigham Young",
    "loser": "Dennis Leonard",
    "loser_school": "Central Connecticut",
    "result": "Dec 2-1"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 331,
    "winner": "Dan Costigan",
    "winner_school": "Army",
    "loser": "Dennis Loushin",
    "loser_school": "Ohio",
    "result": "MD 12-4"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 332,
    "winner": "Jay Suvak",
    "winner_school": "Cleveland State",
    "loser": "Doug Baker",
    "loser_school": "Kent State",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Jeff Weatherman",
    "winner_school": "Northern Iowa",
    "loser": "Bruce Wallace",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Dave Dean",
    "winner_school": "Minnesota",
    "loser": "Eric Mittlestead",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Eric Voelker",
    "winner_school": "Iowa State",
    "loser": "Andy Voit",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Mike Davies",
    "winner_school": "Arizona State",
    "loser": "Scott Kelly",
    "loser_school": "Navy",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Ken Hackman",
    "winner_school": "California PA",
    "loser": "Leland Rogers",
    "loser_school": "Syracuse",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Jim Gill",
    "winner_school": "Oklahoma State",
    "loser": "Brian Platt",
    "loser_school": "Slippery Rock",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Dan Funk",
    "winner_school": "Northwestern",
    "loser": "Mark Willis",
    "loser_school": "Brigham Young",
    "result": "Dec 7-1"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Dan Costigan",
    "winner_school": "Army",
    "loser": "Jay Suvak",
    "loser_school": "Cleveland State",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 453,
    "winner": "Ken Hackman",
    "winner_school": "California PA",
    "loser": "Scott Kelly",
    "loser_school": "Navy",
    "result": "Dec 10-6"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 454,
    "winner": "Andy Voit",
    "winner_school": "Penn State",
    "loser": "Jim Gill",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 455,
    "winner": "Eric Mittlestead",
    "winner_school": "CSU Bakersfield",
    "loser": "Dan Funk",
    "loser_school": "Northwestern",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 456,
    "winner": "Dan Costigan",
    "winner_school": "Army",
    "loser": "Bruce Wallace",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-6"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Dave Dean",
    "winner_school": "Minnesota",
    "loser": "Jeff Weatherman",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Eric Voelker",
    "winner_school": "Iowa State",
    "loser": "Mike Davies",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Andy Voit",
    "winner_school": "Penn State",
    "loser": "Ken Hackman",
    "loser_school": "California PA",
    "result": "MD 17-8"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Dan Costigan",
    "winner_school": "Army",
    "loser": "Eric Mittlestead",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 517,
    "winner": "Andy Voit",
    "winner_school": "Penn State",
    "loser": "Jeff Weatherman",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-6"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 518,
    "winner": "Mike Davies",
    "winner_school": "Arizona State",
    "loser": "Dan Costigan",
    "loser_school": "Army",
    "result": "DEF"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Eric Mittlestead",
    "winner_school": "CSU Bakersfield",
    "loser": "Ken Hackman",
    "loser_school": "California PA",
    "result": "Fall"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Jeff Weatherman",
    "winner_school": "Northern Iowa",
    "loser": "Dan Costigan",
    "loser_school": "Army",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Mike Davies",
    "winner_school": "Arizona State",
    "loser": "Andy Voit",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Eric Voelker",
    "winner_school": "Iowa State",
    "loser": "Dave Dean",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 10,
    "winner": "Bob Button",
    "winner_school": "Cal State Fullerton",
    "loser": "Keith Cameron",
    "loser_school": "Cleveland State",
    "result": "Fall 5:39"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 1010,
    "winner": "Lee Getz",
    "winner_school": "Rutgers",
    "loser": "John Devine",
    "loser_school": "Navy",
    "result": "Dec 2-0"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 2010,
    "winner": "Rod Severn",
    "winner_school": "Arizona State",
    "loser": "Todd Harrison",
    "loser_school": "Clarion",
    "result": "Dec 8-1"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 3010,
    "winner": "Dave Orndorff",
    "winner_school": "Oregon State",
    "loser": "Sherman Pendergarst",
    "loser_school": "Coppin State",
    "result": "Fall 3:30"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 4010,
    "winner": "John Merklinger",
    "winner_school": "Boston College",
    "loser": "Brian Raber",
    "loser_school": "Clemson",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "275",
    "bout": 5010,
    "winner": "Greg Haladay",
    "winner_school": "Penn State",
    "loser": "Tim Kennedy",
    "loser_school": "Rider",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 155,
    "winner": "Joel Greenlee",
    "winner_school": "Northern Iowa",
    "loser": "Brian McCracken",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 156,
    "winner": "Calvin Vande Hoef",
    "winner_school": "Purdue",
    "loser": "Chris Thornbury",
    "loser_school": "Chattanooga",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 157,
    "winner": "Dean Hall",
    "winner_school": "Edinboro",
    "loser": "Todd Seiler",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 158,
    "winner": "Lee Getz",
    "winner_school": "Rutgers",
    "loser": "Jim Prettyman",
    "loser_school": "Missouri",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 159,
    "winner": "Chris Tironi",
    "winner_school": "SUNY-Albany",
    "loser": "Dave Orndorff",
    "loser_school": "Oregon State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 160,
    "winner": "Mark Sindlinger",
    "winner_school": "Iowa",
    "loser": "Jon Cogdill",
    "loser_school": "Wyoming",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 161,
    "winner": "Steve Adams",
    "winner_school": "Central Michigan",
    "loser": "John Merklinger",
    "loser_school": "Boston College",
    "result": "Fall 5:56"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 162,
    "winner": "Tom Erikson",
    "winner_school": "Oklahoma State",
    "loser": "Mike Radnov",
    "loser_school": "Nebraska",
    "result": "Fall 0:33"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 163,
    "winner": "Carlton Haselrig",
    "winner_school": "Pittsburgh-Johnstown",
    "loser": "Todd Myers",
    "loser_school": "Millersville",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 164,
    "winner": "Andy Cope",
    "winner_school": "Iowa State",
    "loser": "Greg Haladay",
    "loser_school": "Penn State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 165,
    "winner": "Mike Lombardo",
    "winner_school": "NC State",
    "loser": "Jeff Reiner",
    "loser_school": "Toledo",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 166,
    "winner": "Tom Reese",
    "winner_school": "Maryland",
    "loser": "Bob Button",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 167,
    "winner": "Rod Severn",
    "winner_school": "Arizona State",
    "loser": "Pat McDade",
    "loser_school": "Boise State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 168,
    "winner": "Mike Hatch",
    "winner_school": "Liberty",
    "loser": "Mike Monroe",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 169,
    "winner": "Jim Nielsen",
    "winner_school": "Brigham Young",
    "loser": "Lee Roy Ligons",
    "loser_school": "Utah State",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 170,
    "winner": "Demetrius Harper",
    "winner_school": "Eastern Illinois",
    "loser": "Jim Miller",
    "loser_school": "East Stroudsburg",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "275",
    "bout": 260,
    "winner": "Todd Harrison",
    "winner_school": "Clarion",
    "loser": "Pat McDade",
    "loser_school": "Boise State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 243,
    "winner": "Joel Greenlee",
    "winner_school": "Northern Iowa",
    "loser": "Calvin Vande Hoef",
    "loser_school": "Purdue",
    "result": "Fall 1:51"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 244,
    "winner": "Dean Hall",
    "winner_school": "Edinboro",
    "loser": "Lee Getz",
    "loser_school": "Rutgers",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 245,
    "winner": "Mark Sindlinger",
    "winner_school": "Iowa",
    "loser": "Chris Tironi",
    "loser_school": "SUNY-Albany",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 246,
    "winner": "Tom Erikson",
    "winner_school": "Oklahoma State",
    "loser": "Steve Adams",
    "loser_school": "Central Michigan",
    "result": "TF 24-9 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 247,
    "winner": "Carlton Haselrig",
    "winner_school": "Pittsburgh-Johnstown",
    "loser": "Andy Cope",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 248,
    "winner": "Tom Reese",
    "winner_school": "Maryland",
    "loser": "Mike Lombardo",
    "loser_school": "NC State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 249,
    "winner": "Rod Severn",
    "winner_school": "Arizona State",
    "loser": "Mike Hatch",
    "loser_school": "Liberty",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 250,
    "winner": "Jim Nielsen",
    "winner_school": "Brigham Young",
    "loser": "Demetrius Harper",
    "loser_school": "Eastern Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 333,
    "winner": "Calvin Vande Hoef",
    "winner_school": "Purdue",
    "loser": "Brian McCracken",
    "loser_school": "Illinois",
    "result": "Dec 11-5"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 334,
    "winner": "Todd Seiler",
    "winner_school": "Wisconsin",
    "loser": "Lee Getz",
    "loser_school": "Rutgers",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 335,
    "winner": "Chris Tironi",
    "winner_school": "SUNY-Albany",
    "loser": "Jon Cogdill",
    "loser_school": "Wyoming",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 336,
    "winner": "Steve Adams",
    "winner_school": "Central Michigan",
    "loser": "Mike Radnov",
    "loser_school": "Nebraska",
    "result": "Dec 2-0"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 337,
    "winner": "Andy Cope",
    "winner_school": "Iowa State",
    "loser": "Todd Myers",
    "loser_school": "Millersville",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 338,
    "winner": "Mike Lombardo",
    "winner_school": "NC State",
    "loser": "Bob Button",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 339,
    "winner": "Todd Harrison",
    "winner_school": "Clarion",
    "loser": "Mike Hatch",
    "loser_school": "Liberty",
    "result": "Dec 7-4 TB"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 340,
    "winner": "Demetrius Harper",
    "winner_school": "Eastern Illinois",
    "loser": "Lee Roy Ligons",
    "loser_school": "Utah State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 377,
    "winner": "Dean Hall",
    "winner_school": "Edinboro",
    "loser": "Joel Greenlee",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 378,
    "winner": "Tom Erikson",
    "winner_school": "Oklahoma State",
    "loser": "Mark Sindlinger",
    "loser_school": "Iowa",
    "result": "MD 17-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 379,
    "winner": "Carlton Haselrig",
    "winner_school": "Pittsburgh-Johnstown",
    "loser": "Tom Reese",
    "loser_school": "Maryland",
    "result": "Fall 6:03"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 380,
    "winner": "Rod Severn",
    "winner_school": "Arizona State",
    "loser": "Jim Nielsen",
    "loser_school": "Brigham Young",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 417,
    "winner": "Todd Seiler",
    "winner_school": "Wisconsin",
    "loser": "Calvin Vande Hoef",
    "loser_school": "Purdue",
    "result": "Dec 2-1"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 418,
    "winner": "Chris Tironi",
    "winner_school": "SUNY-Albany",
    "loser": "Steve Adams",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 419,
    "winner": "Mike Lombardo",
    "winner_school": "NC State",
    "loser": "Andy Cope",
    "loser_school": "Iowa State",
    "result": "Dec 9-7"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 420,
    "winner": "Demetrius Harper",
    "winner_school": "Eastern Illinois",
    "loser": "Todd Harrison",
    "loser_school": "Clarion",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 457,
    "winner": "Jim Nielsen",
    "winner_school": "Brigham Young",
    "loser": "Todd Seiler",
    "loser_school": "Wisconsin",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 458,
    "winner": "Tom Reese",
    "winner_school": "Maryland",
    "loser": "Chris Tironi",
    "loser_school": "SUNY-Albany",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 459,
    "winner": "Mark Sindlinger",
    "winner_school": "Iowa",
    "loser": "Mike Lombardo",
    "loser_school": "NC State",
    "result": "Dec 11-4"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 460,
    "winner": "Demetrius Harper",
    "winner_school": "Eastern Illinois",
    "loser": "Joel Greenlee",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 479,
    "winner": "Dean Hall",
    "winner_school": "Edinboro",
    "loser": "Tom Erikson",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-6"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 480,
    "winner": "Carlton Haselrig",
    "winner_school": "Pittsburgh-Johnstown",
    "loser": "Rod Severn",
    "loser_school": "Arizona State",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR4",
    "weight": "275",
    "bout": 499,
    "winner": "Tom Reese",
    "winner_school": "Maryland",
    "loser": "Jim Nielsen",
    "loser_school": "Brigham Young",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR4",
    "weight": "275",
    "bout": 500,
    "winner": "Mark Sindlinger",
    "winner_school": "Iowa",
    "loser": "Demetrius Harper",
    "loser_school": "Eastern Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR5",
    "weight": "275",
    "bout": 519,
    "winner": "Tom Erikson",
    "winner_school": "Oklahoma State",
    "loser": "Tom Reese",
    "loser_school": "Maryland",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR5",
    "weight": "275",
    "bout": 520,
    "winner": "Mark Sindlinger",
    "winner_school": "Iowa",
    "loser": "Rod Severn",
    "loser_school": "Arizona State",
    "result": "M FOR"
  },
  {
    "round": "7thPlace",
    "weight": "275",
    "bout": 530,
    "winner": "Jim Nielsen",
    "winner_school": "Brigham Young",
    "loser": "Demetrius Harper",
    "loser_school": "Eastern Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "275",
    "bout": 540,
    "winner": "Tom Reese",
    "winner_school": "Maryland",
    "loser": "Rod Severn",
    "loser_school": "Arizona State",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "275",
    "bout": 550,
    "winner": "Tom Erikson",
    "winner_school": "Oklahoma State",
    "loser": "Mark Sindlinger",
    "loser_school": "Iowa",
    "result": "Dec 12-9"
  },
  {
    "round": "Finals",
    "weight": "275",
    "bout": 560,
    "winner": "Carlton Haselrig",
    "winner_school": "Pittsburgh-Johnstown",
    "loser": "Dean Hall",
    "loser_school": "Edinboro",
    "result": "Dec 4-2"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
