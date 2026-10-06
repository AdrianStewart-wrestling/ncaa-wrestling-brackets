// 1986 NCAA Division I Wrestling Championships (3/13/1986 to 3/15/1986 at Iowa). Weight classes 118-275. Consolation: QUARTERFINAL WRESTLEBACK (rounds WbConsR1-R5).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1986 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1986-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Dave Crisanti",
    "winner_school": "Princeton",
    "loser": "Mark Sanfilippo",
    "loser_school": "Purdue",
    "result": "MD 12-0"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Dennis Mejias",
    "loser_school": "Wilkes",
    "result": "MD 18-4"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 2001,
    "winner": "Tim Jacoutot",
    "winner_school": "College of New Jersey",
    "loser": "Jim Lefebvre",
    "loser_school": "Arizona State",
    "result": "Dec 16-11"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Jim Martin",
    "winner_school": "Penn State",
    "loser": "Steve Brown",
    "loser_school": "Eastern Michigan",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Perry Ainscough",
    "winner_school": "Liberty",
    "loser": "Mark Adkins",
    "loser_school": "Kent State",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Alfred Castro",
    "winner_school": "Utah State",
    "loser": "Wallace Dawkins",
    "loser_school": "Nebraska",
    "result": "TF 25-9 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Perry Summitt",
    "winner_school": "Iowa State",
    "loser": "Jim Fussell",
    "loser_school": "Tennessee",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Tony Cotroneo",
    "winner_school": "Syracuse",
    "loser": "Tim Jacoutot",
    "loser_school": "College of New Jersey",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Mark Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Jim Best",
    "loser_school": "NC State",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Andy Bell",
    "loser_school": "Wyoming",
    "result": "TF 20-5 6:22"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Eddie Woodburn",
    "winner_school": "Oklahoma State",
    "loser": "Mark Faglioni",
    "loser_school": "Bucknell",
    "result": "TF 5:38"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Jeff Bowyer",
    "winner_school": "James Madison",
    "loser": "Will Waters",
    "loser_school": "Michigan",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Dave Crisanti",
    "winner_school": "Princeton",
    "loser": "Ben Reichel",
    "loser_school": "Chattanooga",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Ed Giese",
    "winner_school": "Minnesota",
    "loser": "John Foley",
    "loser_school": "Boston University",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Jack Cuvo",
    "winner_school": "East Stroudsburg",
    "loser": "Chris Brown",
    "loser_school": "Brigham Young",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Steve Waddell",
    "winner_school": "Montana",
    "loser": "Roberto Pelayo",
    "loser_school": "Oregon",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Joe Melchiore",
    "winner_school": "Oklahoma",
    "loser": "Shawn Sheldon",
    "loser_school": "SUNY-Albany",
    "result": "Fall 2:11"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Al Palacio",
    "winner_school": "North Carolina",
    "loser": "Mark Clayton",
    "loser_school": "Wisconsin",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Frank Trujillo",
    "winner_school": "Cal State Fullerton",
    "loser": "Paul Kapper",
    "loser_school": "Cleveland State",
    "result": "MD 14-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 251,
    "winner": "Dennis Mejias",
    "winner_school": "Wilkes",
    "loser": "Andy Bell",
    "loser_school": "Wyoming",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "118",
    "bout": 1251,
    "winner": "Ben Reichel",
    "winner_school": "Chattanooga",
    "loser": "Mark Sanfilippo",
    "loser_school": "Purdue",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Jim Martin",
    "winner_school": "Penn State",
    "loser": "Perry Ainscough",
    "loser_school": "Liberty",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Alfred Castro",
    "winner_school": "Utah State",
    "loser": "Perry Summitt",
    "loser_school": "Iowa State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Mark Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Tony Cotroneo",
    "loser_school": "Syracuse",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Eddie Woodburn",
    "loser_school": "Oklahoma State",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Dave Crisanti",
    "winner_school": "Princeton",
    "loser": "Jeff Bowyer",
    "loser_school": "James Madison",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Ed Giese",
    "winner_school": "Minnesota",
    "loser": "Jack Cuvo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 14-12"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Joe Melchiore",
    "winner_school": "Oklahoma",
    "loser": "Steve Waddell",
    "loser_school": "Montana",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Al Palacio",
    "winner_school": "North Carolina",
    "loser": "Frank Trujillo",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Perry Ainscough",
    "winner_school": "Liberty",
    "loser": "Chris Brown",
    "loser_school": "Brigham Young",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Perry Summitt",
    "winner_school": "Iowa State",
    "loser": "Wallace Dawkins",
    "loser_school": "Nebraska",
    "result": "MD 10-2"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Tony Cotroneo",
    "winner_school": "Syracuse",
    "loser": "Jim Best",
    "loser_school": "NC State",
    "result": "Fall 3:06"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Eddie Woodburn",
    "winner_school": "Oklahoma State",
    "loser": "Dennis Mejias",
    "loser_school": "Wilkes",
    "result": "Dec 8-5"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 265,
    "winner": "Jeff Bowyer",
    "winner_school": "James Madison",
    "loser": "Ben Reichel",
    "loser_school": "Chattanooga",
    "result": "TF 21-5 5:11"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 266,
    "winner": "Jack Cuvo",
    "winner_school": "East Stroudsburg",
    "loser": "John Foley",
    "loser_school": "Boston University",
    "result": "Dec 11-4"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 267,
    "winner": "Shawn Sheldon",
    "winner_school": "SUNY-Albany",
    "loser": "Steve Waddell",
    "loser_school": "Montana",
    "result": "MD 14-4"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 268,
    "winner": "Mark Clayton",
    "winner_school": "Wisconsin",
    "loser": "Frank Trujillo",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Jim Martin",
    "winner_school": "Penn State",
    "loser": "Alfred Castro",
    "loser_school": "Utah State",
    "result": "MD 13-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Mark Schwab",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Ed Giese",
    "winner_school": "Minnesota",
    "loser": "Dave Crisanti",
    "loser_school": "Princeton",
    "result": "Fall 6:44"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Al Palacio",
    "winner_school": "North Carolina",
    "loser": "Joe Melchiore",
    "loser_school": "Oklahoma",
    "result": "Dec 9-6"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Perry Ainscough",
    "winner_school": "Liberty",
    "loser": "Perry Summitt",
    "loser_school": "Iowa State",
    "result": "MD 14-5"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Eddie Woodburn",
    "winner_school": "Oklahoma State",
    "loser": "Tony Cotroneo",
    "loser_school": "Syracuse",
    "result": "MD 12-4"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Jeff Bowyer",
    "winner_school": "James Madison",
    "loser": "Jack Cuvo",
    "loser_school": "East Stroudsburg",
    "result": "Dec 7-5"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Mark Clayton",
    "winner_school": "Wisconsin",
    "loser": "Shawn Sheldon",
    "loser_school": "SUNY-Albany",
    "result": "Dec 13-6"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Joe Melchiore",
    "winner_school": "Oklahoma",
    "loser": "Perry Ainscough",
    "loser_school": "Liberty",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Eddie Woodburn",
    "winner_school": "Oklahoma State",
    "loser": "Dave Crisanti",
    "loser_school": "Princeton",
    "result": "Dec 10-9"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 423,
    "winner": "Mark Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Jeff Bowyer",
    "loser_school": "James Madison",
    "result": "Fall 2:43"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 424,
    "winner": "Alfred Castro",
    "winner_school": "Utah State",
    "loser": "Mark Clayton",
    "loser_school": "Wisconsin",
    "result": "MD 13-3"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Jim Martin",
    "loser_school": "Penn State",
    "result": "MD 14-5"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Al Palacio",
    "winner_school": "North Carolina",
    "loser": "Ed Giese",
    "loser_school": "Minnesota",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Eddie Woodburn",
    "winner_school": "Oklahoma State",
    "loser": "Joe Melchiore",
    "loser_school": "Oklahoma",
    "result": "Dec 11-7"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Mark Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Alfred Castro",
    "loser_school": "Utah State",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 501,
    "winner": "Jim Martin",
    "winner_school": "Penn State",
    "loser": "Eddie Woodburn",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 502,
    "winner": "Ed Giese",
    "winner_school": "Minnesota",
    "loser": "Mark Schwab",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Joe Melchiore",
    "winner_school": "Oklahoma",
    "loser": "Alfred Castro",
    "loser_school": "Utah State",
    "result": "TF 4:37"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Mark Schwab",
    "winner_school": "Northern Iowa",
    "loser": "Eddie Woodburn",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-4"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Ed Giese",
    "winner_school": "Minnesota",
    "loser": "Jim Martin",
    "loser_school": "Penn State",
    "result": "Dec 6-5"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Ricky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Al Palacio",
    "loser_school": "North Carolina",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Gene Spellman",
    "winner_school": "Wisconsin",
    "loser": "Paul Zarbatany",
    "loser_school": "Drexel",
    "result": "Dec 11-7"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "Scott Pifer",
    "winner_school": "West Virginia",
    "loser": "Nick Milonas",
    "loser_school": "Montclair State",
    "result": "Dec 11-7"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2002,
    "winner": "Don Horning",
    "winner_school": "Kent State",
    "loser": "Rodney Hawthorne",
    "loser_school": "Oregon State",
    "result": "MD 13-3"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 3002,
    "winner": "Alan Grammer",
    "winner_school": "SIU-Edwardsville",
    "loser": "Jon Anderson",
    "loser_school": "Drake",
    "result": "TF 19-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 4002,
    "winner": "Tracy Yeates",
    "winner_school": "Boise State",
    "loser": "Cory Baze",
    "loser_school": "Oklahoma State",
    "result": "MD 17-7"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 5002,
    "winner": "Scott Hinkel",
    "winner_school": "Purdue",
    "loser": "Matt Avery",
    "loser_school": "Lock Haven",
    "result": "Dec 10-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 6002,
    "winner": "Bill Kelly",
    "winner_school": "Iowa State",
    "loser": "Eric Daniels",
    "loser_school": "Tennessee",
    "result": "Dec 9-2"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 7002,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "Brian Buddock",
    "loser_school": "Millersville",
    "result": "Fall 1:59"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Cordel Anderson",
    "winner_school": "Utah State",
    "loser": "Matt Treaster",
    "loser_school": "Navy",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Doug Wyland",
    "winner_school": "Michigan",
    "loser": "Scott Hinkel",
    "loser_school": "Purdue",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Marc Sodano",
    "winner_school": "NC State",
    "loser": "Dan Thomas",
    "loser_school": "Fresno State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Tony Amado",
    "winner_school": "Portland State",
    "loser": "Scott Pifer",
    "loser_school": "West Virginia",
    "result": "Fall 3:54"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Alan Grammer",
    "winner_school": "SIU-Edwardsville",
    "loser": "Louis Loya",
    "loser_school": "New Mexico",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Terry Cook",
    "winner_school": "Nebraska",
    "loser": "Dave Beaulieu",
    "loser_school": "New Hampshire",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Gene Spellman",
    "loser_school": "Wisconsin",
    "result": "Fall 6:33"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Dennis Semmel",
    "winner_school": "Army",
    "loser": "Gary Bairos",
    "loser_school": "Arizona State",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Brad Gustafson",
    "winner_school": "Brigham Young",
    "loser": "Trey Bennett",
    "loser_school": "Citadel",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Bill Kelly",
    "winner_school": "Iowa State",
    "loser": "Ernie Geromino",
    "loser_school": "Cal Poly",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Tim Flynn",
    "winner_school": "Penn State",
    "loser": "John Aumiller",
    "loser_school": "North Carolina",
    "result": "TF 6:38"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Harry Richards",
    "winner_school": "Central Michigan",
    "loser": "Tracy Yeates",
    "loser_school": "Boise State",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "Pat Pickford",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "John Lucerne",
    "winner_school": "Rider",
    "loser": "Dan Lovelace",
    "loser_school": "Missouri",
    "result": "TF 3:49"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Don Horning",
    "winner_school": "Kent State",
    "loser": "Ron Miller",
    "loser_school": "Wilkes",
    "result": "TF 6:40"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Steve DePetro",
    "winner_school": "Northwestern",
    "loser": "Bill Marshall",
    "loser_school": "George Washington",
    "result": "MD 10-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 252,
    "winner": "Pat Pickford",
    "winner_school": "Northern Iowa",
    "loser": "Brian Buddock",
    "loser_school": "Millersville",
    "result": "MD 16-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 1252,
    "winner": "Louis Loya",
    "winner_school": "New Mexico",
    "loser": "Jon Anderson",
    "loser_school": "Drake",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Cordel Anderson",
    "winner_school": "Utah State",
    "loser": "Doug Wyland",
    "loser_school": "Michigan",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Tony Amado",
    "winner_school": "Portland State",
    "loser": "Marc Sodano",
    "loser_school": "NC State",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Alan Grammer",
    "winner_school": "SIU-Edwardsville",
    "loser": "Terry Cook",
    "loser_school": "Nebraska",
    "result": "Fall 2:36"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Dennis Semmel",
    "winner_school": "Army",
    "loser": "Rocky Bonomo",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Brad Gustafson",
    "winner_school": "Brigham Young",
    "loser": "Bill Kelly",
    "loser_school": "Iowa State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Tim Flynn",
    "winner_school": "Penn State",
    "loser": "Harry Richards",
    "loser_school": "Central Michigan",
    "result": "MD 14-0"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "John Lucerne",
    "loser_school": "Rider",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Steve DePetro",
    "winner_school": "Northwestern",
    "loser": "Don Horning",
    "loser_school": "Kent State",
    "result": "Dec 2-1"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 269,
    "winner": "Matt Treaster",
    "winner_school": "Navy",
    "loser": "Doug Wyland",
    "loser_school": "Michigan",
    "result": "Dec 11-7"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 270,
    "winner": "Marc Sodano",
    "winner_school": "NC State",
    "loser": "Scott Pifer",
    "loser_school": "West Virginia",
    "result": "Dec 8-7"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 271,
    "winner": "Terry Cook",
    "winner_school": "Nebraska",
    "loser": "Louis Loya",
    "loser_school": "New Mexico",
    "result": "Dec 5-0"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 272,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Gary Bairos",
    "loser_school": "Arizona State",
    "result": "TF 16-1 4:52"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 273,
    "winner": "Bill Kelly",
    "winner_school": "Iowa State",
    "loser": "Trey Bennett",
    "loser_school": "Citadel",
    "result": "Fall 3:25"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 274,
    "winner": "Harry Richards",
    "winner_school": "Central Michigan",
    "loser": "John Aumiller",
    "loser_school": "North Carolina",
    "result": "Dec 7-0"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 275,
    "winner": "Pat Pickford",
    "winner_school": "Northern Iowa",
    "loser": "John Lucerne",
    "loser_school": "Rider",
    "result": "Dec 5-0"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 276,
    "winner": "Don Horning",
    "winner_school": "Kent State",
    "loser": "Bill Marshall",
    "loser_school": "George Washington",
    "result": "TF 17-1 5:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Cordel Anderson",
    "winner_school": "Utah State",
    "loser": "Tony Amado",
    "loser_school": "Portland State",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Dennis Semmel",
    "winner_school": "Army",
    "loser": "Alan Grammer",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 11-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Brad Gustafson",
    "winner_school": "Brigham Young",
    "loser": "Tim Flynn",
    "loser_school": "Penn State",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "Steve DePetro",
    "loser_school": "Northwestern",
    "result": "Dec 8-6"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Marc Sodano",
    "winner_school": "NC State",
    "loser": "Matt Treaster",
    "loser_school": "Navy",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Terry Cook",
    "loser_school": "Nebraska",
    "result": "TF 6:00"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Bill Kelly",
    "winner_school": "Iowa State",
    "loser": "Harry Richards",
    "loser_school": "Central Michigan",
    "result": "Fall 1:16"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Don Horning",
    "winner_school": "Kent State",
    "loser": "Pat Pickford",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:30"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 425,
    "winner": "Steve DePetro",
    "winner_school": "Northwestern",
    "loser": "Marc Sodano",
    "loser_school": "NC State",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 426,
    "winner": "Rocky Bonomo",
    "winner_school": "Bloomsburg",
    "loser": "Tim Flynn",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 427,
    "winner": "Alan Grammer",
    "winner_school": "SIU-Edwardsville",
    "loser": "Bill Kelly",
    "loser_school": "Iowa State",
    "result": "MD 14-6"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 428,
    "winner": "Don Horning",
    "winner_school": "Kent State",
    "loser": "Tony Amado",
    "loser_school": "Portland State",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Dennis Semmel",
    "winner_school": "Army",
    "loser": "Cordel Anderson",
    "loser_school": "Utah State",
    "result": "Dec 9-7"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "Brad Gustafson",
    "loser_school": "Brigham Young",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Steve DePetro",
    "winner_school": "Northwestern",
    "loser": "Rocky Bonomo",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Alan Grammer",
    "winner_school": "SIU-Edwardsville",
    "loser": "Don Horning",
    "loser_school": "Kent State",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 503,
    "winner": "Steve DePetro",
    "winner_school": "Northwestern",
    "loser": "Cordel Anderson",
    "loser_school": "Utah State",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 504,
    "winner": "Brad Gustafson",
    "winner_school": "Brigham Young",
    "loser": "Alan Grammer",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Don Horning",
    "winner_school": "Kent State",
    "loser": "Rocky Bonomo",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Alan Grammer",
    "winner_school": "SIU-Edwardsville",
    "loser": "Cordel Anderson",
    "loser_school": "Utah State",
    "result": "Dec 8-5"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Steve DePetro",
    "winner_school": "Northwestern",
    "loser": "Brad Gustafson",
    "loser_school": "Brigham Young",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Brad Penrith",
    "winner_school": "Iowa",
    "loser": "Dennis Semmel",
    "loser_school": "Army",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Jeff Washington",
    "winner_school": "South Carolina State",
    "loser": "Terry Patstone",
    "loser_school": "Maine",
    "result": "MD 24-10"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Tim Cochran",
    "winner_school": "Tennessee",
    "loser": "Brian Crane",
    "loser_school": "Princeton",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Gil Sanchez",
    "loser_school": "Nebraska",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Ed Curran",
    "winner_school": "Bucknell",
    "loser": "Stan Armstrong",
    "loser_school": "Boise State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Nick Neville",
    "winner_school": "Oklahoma",
    "loser": "Chris Luttrell",
    "loser_school": "New Mexico",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Glenn McMinn Jr.",
    "winner_school": "Arizona State",
    "loser": "Rob Johnson",
    "loser_school": "Ohio",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Tom Hutchinson",
    "winner_school": "Appalachian State",
    "loser": "Craig Dellorso",
    "loser_school": "Navy",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Jeff Washington",
    "winner_school": "South Carolina State",
    "loser": "Enzo Catullo",
    "loser_school": "North Carolina",
    "result": "Fall 5:36"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Jim Jordan",
    "winner_school": "Wisconsin",
    "loser": "Alonzo Harrison",
    "loser_school": "Fresno State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Greg Randall",
    "winner_school": "Iowa",
    "loser": "Dondi Teran",
    "loser_school": "Cal State Fullerton",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "David Ray",
    "winner_school": "Edinboro",
    "loser": "Glenn Jarrett",
    "loser_school": "Oregon",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Kyle Nellis",
    "winner_school": "Pittsburgh",
    "loser": "Nate Allison",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Andre Miller",
    "winner_school": "Wilkes",
    "loser": "Marty Anderson",
    "loser_school": "Northern Iowa",
    "result": "MD 17-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Steve Stearns",
    "winner_school": "SIU-Edwardsville",
    "loser": "Pat Fitzgerald",
    "loser_school": "Indiana State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Dave Schneiderman",
    "winner_school": "NC State",
    "loser": "Jeff Bradley",
    "loser_school": "Stanford",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Jeff Gibbons",
    "winner_school": "Iowa State",
    "loser": "Paul Clark",
    "loser_school": "Clarion",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Phil Callahan",
    "winner_school": "Illinois",
    "loser": "Dan Matauch",
    "loser_school": "Michigan State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Tim Cochran",
    "winner_school": "Tennessee",
    "loser": "Leo Bailey",
    "loser_school": "Oklahoma State",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Ed Curran",
    "winner_school": "Bucknell",
    "loser": "Nick Neville",
    "loser_school": "Oklahoma",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Tom Hutchinson",
    "winner_school": "Appalachian State",
    "loser": "Glenn McMinn Jr.",
    "loser_school": "Arizona State",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Jim Jordan",
    "winner_school": "Wisconsin",
    "loser": "Jeff Washington",
    "loser_school": "South Carolina State",
    "result": "Fall 3:56"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Greg Randall",
    "winner_school": "Iowa",
    "loser": "David Ray",
    "loser_school": "Edinboro",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Kyle Nellis",
    "winner_school": "Pittsburgh",
    "loser": "Andre Miller",
    "loser_school": "Wilkes",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Steve Stearns",
    "winner_school": "SIU-Edwardsville",
    "loser": "Dave Schneiderman",
    "loser_school": "NC State",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Phil Callahan",
    "winner_school": "Illinois",
    "loser": "Jeff Gibbons",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 277,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Brian Crane",
    "loser_school": "Princeton",
    "result": "Fall 5:08"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 278,
    "winner": "Nick Neville",
    "winner_school": "Oklahoma",
    "loser": "Stan Armstrong",
    "loser_school": "Boise State",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 279,
    "winner": "Craig Dellorso",
    "winner_school": "Navy",
    "loser": "Glenn McMinn Jr.",
    "loser_school": "Arizona State",
    "result": "MD 13-3"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 280,
    "winner": "Jeff Washington",
    "winner_school": "South Carolina State",
    "loser": "Alonzo Harrison",
    "loser_school": "Fresno State",
    "result": "TF 4:45"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 281,
    "winner": "David Ray",
    "winner_school": "Edinboro",
    "loser": "Dondi Teran",
    "loser_school": "Cal State Fullerton",
    "result": "MD 12-3"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 282,
    "winner": "Nate Allison",
    "winner_school": "Northern Illinois",
    "loser": "Andre Miller",
    "loser_school": "Wilkes",
    "result": "MD 10-0"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 283,
    "winner": "Dave Schneiderman",
    "winner_school": "NC State",
    "loser": "Pat Fitzgerald",
    "loser_school": "Indiana State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 284,
    "winner": "Dan Matauch",
    "winner_school": "Michigan State",
    "loser": "Jeff Gibbons",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Tim Cochran",
    "winner_school": "Tennessee",
    "loser": "Ed Curran",
    "loser_school": "Bucknell",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Jim Jordan",
    "winner_school": "Wisconsin",
    "loser": "Tom Hutchinson",
    "loser_school": "Appalachian State",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Greg Randall",
    "winner_school": "Iowa",
    "loser": "Kyle Nellis",
    "loser_school": "Pittsburgh",
    "result": "MD 15-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Phil Callahan",
    "winner_school": "Illinois",
    "loser": "Steve Stearns",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 10-7"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Nick Neville",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Jeff Washington",
    "winner_school": "South Carolina State",
    "loser": "Craig Dellorso",
    "loser_school": "Navy",
    "result": "Dec 7-0 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "David Ray",
    "winner_school": "Edinboro",
    "loser": "Nate Allison",
    "loser_school": "Northern Illinois",
    "result": "Dec 11-6"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Dan Matauch",
    "winner_school": "Michigan State",
    "loser": "Dave Schneiderman",
    "loser_school": "NC State",
    "result": "Dec 7-5"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 429,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Steve Stearns",
    "loser_school": "SIU-Edwardsville",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 430,
    "winner": "Kyle Nellis",
    "winner_school": "Pittsburgh",
    "loser": "Jeff Washington",
    "loser_school": "South Carolina State",
    "result": "MD 10-2"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 431,
    "winner": "David Ray",
    "winner_school": "Edinboro",
    "loser": "Tom Hutchinson",
    "loser_school": "Appalachian State",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 432,
    "winner": "Dan Matauch",
    "winner_school": "Michigan State",
    "loser": "Ed Curran",
    "loser_school": "Bucknell",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Jim Jordan",
    "winner_school": "Wisconsin",
    "loser": "Tim Cochran",
    "loser_school": "Tennessee",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Greg Randall",
    "winner_school": "Iowa",
    "loser": "Phil Callahan",
    "loser_school": "Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Kyle Nellis",
    "loser_school": "Pittsburgh",
    "result": "MD 11-2"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "David Ray",
    "winner_school": "Edinboro",
    "loser": "Dan Matauch",
    "loser_school": "Michigan State",
    "result": "Fall 1:49"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 505,
    "winner": "Leo Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Tim Cochran",
    "loser_school": "Tennessee",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 506,
    "winner": "David Ray",
    "winner_school": "Edinboro",
    "loser": "Phil Callahan",
    "loser_school": "Illinois",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 523,
    "winner": "Dan Matauch",
    "winner_school": "Michigan State",
    "loser": "Kyle Nellis",
    "loser_school": "Pittsburgh",
    "result": "Dec 12-5"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Tim Cochran",
    "winner_school": "Tennessee",
    "loser": "Phil Callahan",
    "loser_school": "Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "David Ray",
    "winner_school": "Edinboro",
    "loser": "Leo Bailey",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-6"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Jim Jordan",
    "winner_school": "Wisconsin",
    "loser": "Greg Randall",
    "loser_school": "Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Dave Zahoransky",
    "winner_school": "Cleveland State",
    "loser": "Jim Schmitz",
    "loser_school": "Marquette",
    "result": "MD 13-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Pat Santoro",
    "winner_school": "Pittsburgh",
    "loser": "Lenny Bernstein",
    "loser_school": "North Carolina",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Mike McNaney",
    "winner_school": "Wyoming",
    "loser": "Rob Yoos",
    "loser_school": "Lafayette",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Greg Wright",
    "winner_school": "Edinboro",
    "loser": "Jeff Castro",
    "loser_school": "Montana",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Shawn Smith",
    "winner_school": "Delaware Valley",
    "loser": "Erik Strawn",
    "loser_school": "Utah State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Luke Skove",
    "winner_school": "Oklahoma State",
    "loser": "Chris Marisette",
    "loser_school": "Nebraska",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Kevin Dresser",
    "winner_school": "Iowa",
    "loser": "Ted Lewis",
    "loser_school": "William & Mary",
    "result": "Fall 4:34"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Randy Schimmel",
    "winner_school": "Boise State",
    "loser": "Kurt Shedenhelm",
    "loser_school": "Northern Iowa",
    "result": "Fall 5:18"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Pat Santoro",
    "winner_school": "Pittsburgh",
    "loser": "Richard Townsell",
    "loser_school": "Northwestern",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Morgan Woodhouse",
    "winner_school": "Brigham Young",
    "loser": "Scott Cardwell",
    "loser_school": "Oregon State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Mike Hampton",
    "winner_school": "Clemson",
    "loser": "Mike Cole",
    "loser_school": "Clarion",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Dave Zahoransky",
    "winner_school": "Cleveland State",
    "loser": "Amaro Lamar",
    "loser_school": "Appalachian State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "Darrin Mossing",
    "loser_school": "Ohio",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "John DeHart",
    "winner_school": "Indiana",
    "loser": "Jeff Bridges",
    "loser_school": "Old Dominion",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Darrel Nerove",
    "winner_school": "Army",
    "loser": "Ken Brison",
    "loser_school": "San Jose State",
    "result": "Fall 6:09"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "John Effner",
    "winner_school": "Indiana State",
    "loser": "Pat Kelly",
    "loser_school": "Maine",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Andre Taylor",
    "winner_school": "Washington State",
    "loser": "Jeff Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Joe Gibbons",
    "winner_school": "Iowa State",
    "loser": "Joe Reynolds",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 254,
    "winner": "Amaro Lamar",
    "winner_school": "Appalachian State",
    "loser": "Jim Schmitz",
    "loser_school": "Marquette",
    "result": "MD 12-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 1254,
    "winner": "Lenny Bernstein",
    "winner_school": "North Carolina",
    "loser": "Richard Townsell",
    "loser_school": "Northwestern",
    "result": "Fall 5:40"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Mike McNaney",
    "winner_school": "Wyoming",
    "loser": "Greg Wright",
    "loser_school": "Edinboro",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Luke Skove",
    "winner_school": "Oklahoma State",
    "loser": "Shawn Smith",
    "loser_school": "Delaware Valley",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Kevin Dresser",
    "winner_school": "Iowa",
    "loser": "Randy Schimmel",
    "loser_school": "Boise State",
    "result": "Fall 5:47"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Pat Santoro",
    "winner_school": "Pittsburgh",
    "loser": "Morgan Woodhouse",
    "loser_school": "Brigham Young",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Dave Zahoransky",
    "winner_school": "Cleveland State",
    "loser": "Mike Hampton",
    "loser_school": "Clemson",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "John DeHart",
    "loser_school": "Indiana",
    "result": "Fall 3:34"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "John Effner",
    "winner_school": "Indiana State",
    "loser": "Darrel Nerove",
    "loser_school": "Army",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Joe Gibbons",
    "winner_school": "Iowa State",
    "loser": "Andre Taylor",
    "loser_school": "Washington State",
    "result": "DEF"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 285,
    "winner": "Greg Wright",
    "winner_school": "Edinboro",
    "loser": "Rob Yoos",
    "loser_school": "Lafayette",
    "result": "Fall 2:10"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 286,
    "winner": "Chris Marisette",
    "winner_school": "Nebraska",
    "loser": "Shawn Smith",
    "loser_school": "Delaware Valley",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 287,
    "winner": "Ted Lewis",
    "winner_school": "William & Mary",
    "loser": "Randy Schimmel",
    "loser_school": "Boise State",
    "result": "Fall 2:30"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 288,
    "winner": "Morgan Woodhouse",
    "winner_school": "Brigham Young",
    "loser": "Lenny Bernstein",
    "loser_school": "North Carolina",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 289,
    "winner": "Amaro Lamar",
    "winner_school": "Appalachian State",
    "loser": "Mike Hampton",
    "loser_school": "Clemson",
    "result": "MD 12-3"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 290,
    "winner": "John DeHart",
    "winner_school": "Indiana",
    "loser": "Darrin Mossing",
    "loser_school": "Ohio",
    "result": "Dec 3-0"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 291,
    "winner": "Darrel Nerove",
    "winner_school": "Army",
    "loser": "Pat Kelly",
    "loser_school": "Maine",
    "result": "MD 14-1"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 292,
    "winner": "Joe Reynolds",
    "winner_school": "Oklahoma",
    "loser": "Andre Taylor",
    "loser_school": "Washington State",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Luke Skove",
    "winner_school": "Oklahoma State",
    "loser": "Mike McNaney",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Kevin Dresser",
    "winner_school": "Iowa",
    "loser": "Pat Santoro",
    "loser_school": "Pittsburgh",
    "result": "Fall 6:05"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "Dave Zahoransky",
    "loser_school": "Cleveland State",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Joe Gibbons",
    "winner_school": "Iowa State",
    "loser": "John Effner",
    "loser_school": "Indiana State",
    "result": "Dec 8-6"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Chris Marisette",
    "winner_school": "Nebraska",
    "loser": "Greg Wright",
    "loser_school": "Edinboro",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Ted Lewis",
    "winner_school": "William & Mary",
    "loser": "Morgan Woodhouse",
    "loser_school": "Brigham Young",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "John DeHart",
    "winner_school": "Indiana",
    "loser": "Amaro Lamar",
    "loser_school": "Appalachian State",
    "result": "Dec 9-6"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Darrel Nerove",
    "winner_school": "Army",
    "loser": "Joe Reynolds",
    "loser_school": "Oklahoma",
    "result": "Fall 1:02"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 433,
    "winner": "John Effner",
    "winner_school": "Indiana State",
    "loser": "Chris Marisette",
    "loser_school": "Nebraska",
    "result": "Dec 4-0"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 434,
    "winner": "Dave Zahoransky",
    "winner_school": "Cleveland State",
    "loser": "Ted Lewis",
    "loser_school": "William & Mary",
    "result": "Dec 9-6"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 435,
    "winner": "Pat Santoro",
    "winner_school": "Pittsburgh",
    "loser": "John DeHart",
    "loser_school": "Indiana",
    "result": "MD 15-7"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 436,
    "winner": "Darrel Nerove",
    "winner_school": "Army",
    "loser": "Mike McNaney",
    "loser_school": "Wyoming",
    "result": "Dec 6-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Kevin Dresser",
    "winner_school": "Iowa",
    "loser": "Luke Skove",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Peter Yozzo",
    "winner_school": "Lehigh",
    "loser": "Joe Gibbons",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "John Effner",
    "winner_school": "Indiana State",
    "loser": "Dave Zahoransky",
    "loser_school": "Cleveland State",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Pat Santoro",
    "winner_school": "Pittsburgh",
    "loser": "Darrel Nerove",
    "loser_school": "Army",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 507,
    "winner": "Luke Skove",
    "winner_school": "Oklahoma State",
    "loser": "John Effner",
    "loser_school": "Indiana State",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 508,
    "winner": "Joe Gibbons",
    "winner_school": "Iowa State",
    "loser": "Pat Santoro",
    "loser_school": "Pittsburgh",
    "result": "Fall 5:28"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Darrel Nerove",
    "winner_school": "Army",
    "loser": "Dave Zahoransky",
    "loser_school": "Cleveland State",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "John Effner",
    "winner_school": "Indiana State",
    "loser": "Pat Santoro",
    "loser_school": "Pittsburgh",
    "result": "MD 15-7"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Joe Gibbons",
    "winner_school": "Iowa State",
    "loser": "Luke Skove",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Kevin Dresser",
    "winner_school": "Iowa",
    "loser": "Peter Yozzo",
    "loser_school": "Lehigh",
    "result": "Dec 11-6"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Keenan Turner",
    "winner_school": "Nebraska",
    "loser": "Ken Nellis",
    "loser_school": "Clarion",
    "result": "Dec 8-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Mike Dotson",
    "winner_school": "Washington State",
    "loser": "Steve Fairbanks",
    "loser_school": "Toledo",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Adam Cohen",
    "winner_school": "Arizona State",
    "loser": "Allen Richburg",
    "loser_school": "Fresno State",
    "result": "MD 10-2"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 3005,
    "winner": "Troy Emerson",
    "winner_school": "George Mason",
    "loser": "Philip Gottlick",
    "loser_school": "Drexel",
    "result": "Dec 7-2"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 4005,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "Paul Radomski",
    "loser_school": "Navy",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Vince Silva",
    "winner_school": "Oklahoma State",
    "loser": "Ben Coronado",
    "loser_school": "Boise State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Jeff Mills",
    "winner_school": "Central Michigan",
    "loser": "Greg Satchell",
    "loser_school": "Tennessee",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Bryan Barratt",
    "winner_school": "Rowan",
    "loser": "Mike Novogratz",
    "loser_school": "Princeton",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Adam Cohen",
    "winner_school": "Arizona State",
    "loser": "Keith Presley",
    "loser_school": "Eastern Illinois",
    "result": "Fall 4:26"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Darrin Higgins",
    "winner_school": "Oklahoma",
    "loser": "Mike Dotson",
    "loser_school": "Washington State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Scott Turner",
    "winner_school": "NC State",
    "loser": "C.J. Mears",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "Dave Morgan",
    "loser_school": "Bloomsburg",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Ben Walker",
    "loser_school": "VMI",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Ralph Harrison",
    "winner_school": "New Mexico",
    "loser": "Darrel Creps",
    "loser_school": "Ohio State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Troy Emerson",
    "loser_school": "George Mason",
    "result": "MD 16-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Mike Rosman",
    "winner_school": "Northwestern",
    "loser": "Bob Kauffman",
    "loser_school": "Edinboro",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Jim Akerly",
    "winner_school": "West Virginia",
    "loser": "Keenan Turner",
    "loser_school": "Nebraska",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Tim Draper",
    "winner_school": "Utah State",
    "loser": "Marc Cabrera",
    "loser_school": "Seton Hall",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Chris Bevilacqua",
    "winner_school": "Penn State",
    "loser": "Dan Majewski",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Scott Duncan",
    "winner_school": "Indiana",
    "loser": "Mike Arena",
    "loser_school": "Hofstra",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Joey McKenna",
    "winner_school": "Clemson",
    "loser": "Paul Schwern",
    "loser_school": "New Hampshire",
    "result": "TF 21-5 5:19"
  },
  {
    "round": "ConsPrelims",
    "weight": "150",
    "bout": 255,
    "winner": "Allen Richburg",
    "winner_school": "Fresno State",
    "loser": "Keith Presley",
    "loser_school": "Eastern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Vince Silva",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Mills",
    "loser_school": "Central Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Adam Cohen",
    "winner_school": "Arizona State",
    "loser": "Bryan Barratt",
    "loser_school": "Rowan",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Scott Turner",
    "winner_school": "NC State",
    "loser": "Darrin Higgins",
    "loser_school": "Oklahoma",
    "result": "TF 17-1 6:46"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Jeff Cardwell",
    "loser_school": "Oregon State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Ralph Harrison",
    "loser_school": "New Mexico",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Mike Rosman",
    "winner_school": "Northwestern",
    "loser": "Jim Akerly",
    "loser_school": "West Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Chris Bevilacqua",
    "winner_school": "Penn State",
    "loser": "Tim Draper",
    "loser_school": "Utah State",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Joey McKenna",
    "winner_school": "Clemson",
    "loser": "Scott Duncan",
    "loser_school": "Indiana",
    "result": "Dec 13-6"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 293,
    "winner": "Jeff Mills",
    "winner_school": "Central Michigan",
    "loser": "Ben Coronado",
    "loser_school": "Boise State",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 294,
    "winner": "Allen Richburg",
    "winner_school": "Fresno State",
    "loser": "Bryan Barratt",
    "loser_school": "Rowan",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 295,
    "winner": "C.J. Mears",
    "winner_school": "Lehigh",
    "loser": "Darrin Higgins",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 296,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "Ben Walker",
    "loser_school": "VMI",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 297,
    "winner": "Ralph Harrison",
    "winner_school": "New Mexico",
    "loser": "Troy Emerson",
    "loser_school": "George Mason",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 298,
    "winner": "Jim Akerly",
    "winner_school": "West Virginia",
    "loser": "Bob Kauffman",
    "loser_school": "Edinboro",
    "result": "Dec 2-0"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 299,
    "winner": "Tim Draper",
    "winner_school": "Utah State",
    "loser": "Dan Majewski",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-6"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 300,
    "winner": "Scott Duncan",
    "winner_school": "Indiana",
    "loser": "Paul Schwern",
    "loser_school": "New Hampshire",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Adam Cohen",
    "winner_school": "Arizona State",
    "loser": "Vince Silva",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Scott Turner",
    "winner_school": "NC State",
    "loser": "Tim Krieger",
    "loser_school": "Iowa State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Mike Rosman",
    "loser_school": "Northwestern",
    "result": "MD 16-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Joey McKenna",
    "winner_school": "Clemson",
    "loser": "Chris Bevilacqua",
    "loser_school": "Penn State",
    "result": "DEF"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Jeff Mills",
    "winner_school": "Central Michigan",
    "loser": "Allen Richburg",
    "loser_school": "Fresno State",
    "result": "Dec 5-0"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "C.J. Mears",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Jim Akerly",
    "winner_school": "West Virginia",
    "loser": "Ralph Harrison",
    "loser_school": "New Mexico",
    "result": "Dec 1-0"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Scott Duncan",
    "winner_school": "Indiana",
    "loser": "Tim Draper",
    "loser_school": "Utah State",
    "result": "Dec 10-8"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 437,
    "winner": "Jeff Mills",
    "winner_school": "Central Michigan",
    "loser": "Chris Bevilacqua",
    "loser_school": "Penn State",
    "result": "Dec 8-2"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 438,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "Mike Rosman",
    "loser_school": "Northwestern",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 439,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Jim Akerly",
    "loser_school": "West Virginia",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 440,
    "winner": "Vince Silva",
    "winner_school": "Oklahoma State",
    "loser": "Scott Duncan",
    "loser_school": "Indiana",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Adam Cohen",
    "winner_school": "Arizona State",
    "loser": "Scott Turner",
    "loser_school": "NC State",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Joey McKenna",
    "loser_school": "Clemson",
    "result": "Fall 4:55"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Jeff Cardwell",
    "winner_school": "Oregon State",
    "loser": "Jeff Mills",
    "loser_school": "Central Michigan",
    "result": "Dec 11-4"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Vince Silva",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 509,
    "winner": "Scott Turner",
    "winner_school": "NC State",
    "loser": "Jeff Cardwell",
    "loser_school": "Oregon State",
    "result": "Dec 1-0"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 510,
    "winner": "Joey McKenna",
    "winner_school": "Clemson",
    "loser": "Tim Krieger",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Vince Silva",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Mills",
    "loser_school": "Central Michigan",
    "result": "Dec 9-3"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Tim Krieger",
    "winner_school": "Iowa State",
    "loser": "Jeff Cardwell",
    "loser_school": "Oregon State",
    "result": "Dec 4-0"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Scott Turner",
    "winner_school": "NC State",
    "loser": "Joey McKenna",
    "loser_school": "Clemson",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Jim Heffernan",
    "winner_school": "Iowa",
    "loser": "Adam Cohen",
    "loser_school": "Arizona State",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Paul Huyck",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeff Shaner",
    "loser_school": "Bucknell",
    "result": "Dec 5-0"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Paul Lawson",
    "loser_school": "Slippery Rock",
    "result": "Dec 14-8"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Ardeshir Asgari",
    "winner_school": "Cal State Fullerton",
    "loser": "Rob Bazant",
    "loser_school": "Montana",
    "result": "Dec 13-11"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 3006,
    "winner": "Phil Brown",
    "winner_school": "Maryland",
    "loser": "Doug Carnation",
    "loser_school": "Fresno State",
    "result": "Dec 7-5"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 4006,
    "winner": "Jeff Coltvet",
    "winner_school": "Nebraska",
    "loser": "E.C. Cotton",
    "loser_school": "Illinois State",
    "result": "Fall 6:05"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Mark Richman",
    "winner_school": "Wisconsin",
    "loser": "Angelo Cuzalina",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "John Rippley",
    "loser_school": "Army",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Mike Hamel",
    "winner_school": "Wyoming",
    "loser": "Brett Rasmussen",
    "loser_school": "Minnesota",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Mike Hahesy",
    "loser_school": "Edinboro",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Dave Lilovich",
    "winner_school": "Purdue",
    "loser": "Paul Huyck",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Marvin Seal",
    "winner_school": "Oregon State",
    "loser": "Pete Dibenedetto",
    "loser_school": "Boston University",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Phil Brown",
    "loser_school": "Maryland",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Tom Tierney",
    "winner_school": "Navy",
    "loser": "Clay Ogden",
    "loser_school": "Citadel",
    "result": "Dec 2-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Ken Haselrig",
    "winner_school": "Clarion",
    "loser": "Chris McFarland",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Ardeshir Asgari",
    "winner_school": "Cal State Fullerton",
    "loser": "Peter Rogers",
    "loser_school": "Stanford",
    "result": "Dec 18-12"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Jeff Clutter",
    "winner_school": "Northern Iowa",
    "loser": "Bill Tate",
    "loser_school": "Iowa State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Jeff Coltvet",
    "winner_school": "Nebraska",
    "loser": "Marco Sola",
    "loser_school": "Hofstra",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Jim Gressley",
    "winner_school": "Arizona State",
    "loser": "Chuck Updegraff",
    "loser_school": "Indiana State",
    "result": "Fall 3:14"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Jude Skove",
    "winner_school": "Ohio State",
    "loser": "Mike Green",
    "loser_school": "Northern Illinois",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Jason Morris",
    "winner_school": "Syracuse",
    "loser": "Tony Gentile",
    "loser_school": "James Madison",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Lee Reitzel",
    "loser_school": "Appalachian State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 256,
    "winner": "Peter Rogers",
    "winner_school": "Stanford",
    "loser": "Rob Bazant",
    "loser_school": "Montana",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 1256,
    "winner": "Mike Hahesy",
    "winner_school": "Edinboro",
    "loser": "Paul Lawson",
    "loser_school": "Slippery Rock",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Mark Richman",
    "loser_school": "Wisconsin",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Mike Hamel",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Dave Lilovich",
    "winner_school": "Purdue",
    "loser": "Marvin Seal",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Tom Tierney",
    "loser_school": "Navy",
    "result": "Fall 2:28"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Ardeshir Asgari",
    "winner_school": "Cal State Fullerton",
    "loser": "Ken Haselrig",
    "loser_school": "Clarion",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Jeff Clutter",
    "winner_school": "Northern Iowa",
    "loser": "Jeff Coltvet",
    "loser_school": "Nebraska",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Jude Skove",
    "winner_school": "Ohio State",
    "loser": "Jim Gressley",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Jason Morris",
    "loser_school": "Syracuse",
    "result": "Dec 12-7"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 301,
    "winner": "Mark Richman",
    "winner_school": "Wisconsin",
    "loser": "John Rippley",
    "loser_school": "Army",
    "result": "Dec 11-6"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 302,
    "winner": "Mike Hahesy",
    "winner_school": "Edinboro",
    "loser": "Mike Hamel",
    "loser_school": "Wyoming",
    "result": "Dec 4-0"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 303,
    "winner": "Paul Huyck",
    "winner_school": "CSU Bakersfield",
    "loser": "Marvin Seal",
    "loser_school": "Oregon State",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 304,
    "winner": "Phil Brown",
    "winner_school": "Maryland",
    "loser": "Tom Tierney",
    "loser_school": "Navy",
    "result": "MD 12-3"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 305,
    "winner": "Peter Rogers",
    "winner_school": "Stanford",
    "loser": "Ken Haselrig",
    "loser_school": "Clarion",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 306,
    "winner": "Bill Tate",
    "winner_school": "Iowa State",
    "loser": "Jeff Coltvet",
    "loser_school": "Nebraska",
    "result": "MD 15-4"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 307,
    "winner": "Jim Gressley",
    "winner_school": "Arizona State",
    "loser": "Mike Green",
    "loser_school": "Northern Illinois",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 308,
    "winner": "Jason Morris",
    "winner_school": "Syracuse",
    "loser": "Lee Reitzel",
    "loser_school": "Appalachian State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Johnny Johnson",
    "loser_school": "Oklahoma",
    "result": "Fall 1:34"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Dave Lilovich",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Ardeshir Asgari",
    "winner_school": "Cal State Fullerton",
    "loser": "Jeff Clutter",
    "loser_school": "Northern Iowa",
    "result": "MD 18-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Jude Skove",
    "winner_school": "Ohio State",
    "loser": "Royce Alger",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Mike Hahesy",
    "winner_school": "Edinboro",
    "loser": "Mark Richman",
    "loser_school": "Wisconsin",
    "result": "Dec 11-7"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Phil Brown",
    "winner_school": "Maryland",
    "loser": "Paul Huyck",
    "loser_school": "CSU Bakersfield",
    "result": "MD 14-4"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Bill Tate",
    "winner_school": "Iowa State",
    "loser": "Peter Rogers",
    "loser_school": "Stanford",
    "result": "Dec 9-5"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Jim Gressley",
    "winner_school": "Arizona State",
    "loser": "Jason Morris",
    "loser_school": "Syracuse",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 441,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Mike Hahesy",
    "loser_school": "Edinboro",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 442,
    "winner": "Jeff Clutter",
    "winner_school": "Northern Iowa",
    "loser": "Phil Brown",
    "loser_school": "Maryland",
    "result": "Dec 10-4"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 443,
    "winner": "Dave Lilovich",
    "winner_school": "Purdue",
    "loser": "Bill Tate",
    "loser_school": "Iowa State",
    "result": "Fall 5:39"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 444,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Jim Gressley",
    "loser_school": "Arizona State",
    "result": "Dec 12-11"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Greg Elinsky",
    "winner_school": "Penn State",
    "loser": "Rob Koll",
    "loser_school": "North Carolina",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Jude Skove",
    "winner_school": "Ohio State",
    "loser": "Ardeshir Asgari",
    "loser_school": "Cal State Fullerton",
    "result": "MD 11-0"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Jeff Clutter",
    "loser_school": "Northern Iowa",
    "result": "TF 15-0 6:00"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Dave Lilovich",
    "loser_school": "Purdue",
    "result": "Dec 7-5"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 511,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Royce Alger",
    "loser_school": "Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 512,
    "winner": "Johnny Johnson",
    "winner_school": "Oklahoma",
    "loser": "Ardeshir Asgari",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "Dave Lilovich",
    "winner_school": "Purdue",
    "loser": "Jeff Clutter",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-4"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Royce Alger",
    "winner_school": "Iowa",
    "loser": "Ardeshir Asgari",
    "loser_school": "Cal State Fullerton",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Rob Koll",
    "winner_school": "North Carolina",
    "loser": "Johnny Johnson",
    "loser_school": "Oklahoma",
    "result": "Dec 7-0"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Jude Skove",
    "winner_school": "Ohio State",
    "loser": "Greg Elinsky",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Fred Little",
    "winner_school": "Fresno State",
    "loser": "Dave McCormick",
    "loser_school": "Army",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Mike Van Arsdale",
    "winner_school": "Iowa State",
    "loser": "Kerry Ritrievi",
    "loser_school": "Lehigh",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Brad Lloyd",
    "winner_school": "Lock Haven",
    "loser": "Pat Gibson",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Rob Kuzy",
    "winner_school": "Rider",
    "loser": "Mark Litts",
    "loser_school": "Clemson",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "John Laviolette",
    "winner_school": "Oklahoma",
    "loser": "Ozzie Porter",
    "loser_school": "Eastern Illinois",
    "result": "TF 6:56"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Marty Kistler",
    "winner_school": "Iowa",
    "loser": "Rod Sande",
    "loser_school": "Minnesota",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Bryan Wilson",
    "winner_school": "Wyoming",
    "loser": "Jim Reich",
    "loser_school": "Navy",
    "result": "Dec 15-9"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Fred Little",
    "winner_school": "Fresno State",
    "loser": "Danny George",
    "loser_school": "Ohio State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Tad Wilson",
    "winner_school": "North Carolina",
    "loser": "Kevin Kahl",
    "loser_school": "Northern Iowa",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Jim Szalai",
    "winner_school": "Ohio",
    "loser": "John Meyers",
    "loser_school": "Nebraska",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Darryl Pope",
    "winner_school": "CSU Bakersfield",
    "loser": "Tim Weckworth",
    "loser_school": "New Hampshire",
    "result": "Fall 1:08"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Eric Brugel",
    "winner_school": "Penn State",
    "loser": "Ralph Voit",
    "loser_school": "Slippery Rock",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Dave Lee",
    "winner_school": "Stanford",
    "loser": "Todd Arris",
    "loser_school": "VMI",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Matt Haak",
    "winner_school": "Temple",
    "loser": "Vince Corning",
    "loser_school": "Northern Arizona",
    "result": "Dec 7-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Mark Van Tine",
    "winner_school": "Oklahoma State",
    "loser": "Robert Fair",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Steve Klein",
    "winner_school": "Buffalo",
    "loser": "Nate Carter",
    "loser_school": "Clarion",
    "result": "Fall 4:14"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Terry Manning",
    "winner_school": "Wisconsin",
    "loser": "Scott Diveney",
    "loser_school": "Drake",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 257,
    "winner": "Danny George",
    "winner_school": "Ohio State",
    "loser": "Dave McCormick",
    "loser_school": "Army",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Mike Van Arsdale",
    "winner_school": "Iowa State",
    "loser": "Brad Lloyd",
    "loser_school": "Lock Haven",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "John Laviolette",
    "winner_school": "Oklahoma",
    "loser": "Rob Kuzy",
    "loser_school": "Rider",
    "result": "Fall 0:42"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Marty Kistler",
    "winner_school": "Iowa",
    "loser": "Bryan Wilson",
    "loser_school": "Wyoming",
    "result": "MD 21-8"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Fred Little",
    "winner_school": "Fresno State",
    "loser": "Tad Wilson",
    "loser_school": "North Carolina",
    "result": "Fall 1:48"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Darryl Pope",
    "winner_school": "CSU Bakersfield",
    "loser": "Jim Szalai",
    "loser_school": "Ohio",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Dave Lee",
    "winner_school": "Stanford",
    "loser": "Eric Brugel",
    "loser_school": "Penn State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Mark Van Tine",
    "winner_school": "Oklahoma State",
    "loser": "Matt Haak",
    "loser_school": "Temple",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Steve Klein",
    "winner_school": "Buffalo",
    "loser": "Terry Manning",
    "loser_school": "Wisconsin",
    "result": "Dec 11-9"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 309,
    "winner": "Brad Lloyd",
    "winner_school": "Lock Haven",
    "loser": "Kerry Ritrievi",
    "loser_school": "Lehigh",
    "result": "TF 3:46"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 310,
    "winner": "Ozzie Porter",
    "winner_school": "Eastern Illinois",
    "loser": "Rob Kuzy",
    "loser_school": "Rider",
    "result": "Dec 13-6"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 311,
    "winner": "Bryan Wilson",
    "winner_school": "Wyoming",
    "loser": "Rod Sande",
    "loser_school": "Minnesota",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 312,
    "winner": "Tad Wilson",
    "winner_school": "North Carolina",
    "loser": "Danny George",
    "loser_school": "Ohio State",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 313,
    "winner": "Jim Szalai",
    "winner_school": "Ohio",
    "loser": "Tim Weckworth",
    "loser_school": "New Hampshire",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 314,
    "winner": "Eric Brugel",
    "winner_school": "Penn State",
    "loser": "Todd Arris",
    "loser_school": "VMI",
    "result": "MD 11-2"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 315,
    "winner": "Robert Fair",
    "winner_school": "Virginia Tech",
    "loser": "Matt Haak",
    "loser_school": "Temple",
    "result": "Dec 8-7"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 316,
    "winner": "Nate Carter",
    "winner_school": "Clarion",
    "loser": "Terry Manning",
    "loser_school": "Wisconsin",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Mike Van Arsdale",
    "winner_school": "Iowa State",
    "loser": "John Laviolette",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Marty Kistler",
    "winner_school": "Iowa",
    "loser": "Fred Little",
    "loser_school": "Fresno State",
    "result": "TF 20-4 6:46"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Dave Lee",
    "winner_school": "Stanford",
    "loser": "Darryl Pope",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Mark Van Tine",
    "winner_school": "Oklahoma State",
    "loser": "Steve Klein",
    "loser_school": "Buffalo",
    "result": "MD 17-5"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Brad Lloyd",
    "winner_school": "Lock Haven",
    "loser": "Ozzie Porter",
    "loser_school": "Eastern Illinois",
    "result": "MD 16-2"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Tad Wilson",
    "winner_school": "North Carolina",
    "loser": "Bryan Wilson",
    "loser_school": "Wyoming",
    "result": "MD 10-2"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "Eric Brugel",
    "winner_school": "Penn State",
    "loser": "Jim Szalai",
    "loser_school": "Ohio",
    "result": "MD 12-3"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Nate Carter",
    "winner_school": "Clarion",
    "loser": "Robert Fair",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 445,
    "winner": "Brad Lloyd",
    "winner_school": "Lock Haven",
    "loser": "Steve Klein",
    "loser_school": "Buffalo",
    "result": "MD 12-0"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 446,
    "winner": "Darryl Pope",
    "winner_school": "CSU Bakersfield",
    "loser": "Tad Wilson",
    "loser_school": "North Carolina",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 447,
    "winner": "Fred Little",
    "winner_school": "Fresno State",
    "loser": "Eric Brugel",
    "loser_school": "Penn State",
    "result": "Dec 13-11"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 448,
    "winner": "John Laviolette",
    "winner_school": "Oklahoma",
    "loser": "Nate Carter",
    "loser_school": "Clarion",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Marty Kistler",
    "winner_school": "Iowa",
    "loser": "Mike Van Arsdale",
    "loser_school": "Iowa State",
    "result": "Dec 9-3"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Mark Van Tine",
    "winner_school": "Oklahoma State",
    "loser": "Dave Lee",
    "loser_school": "Stanford",
    "result": "Dec 2-1"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Darryl Pope",
    "winner_school": "CSU Bakersfield",
    "loser": "Brad Lloyd",
    "loser_school": "Lock Haven",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "John Laviolette",
    "winner_school": "Oklahoma",
    "loser": "Fred Little",
    "loser_school": "Fresno State",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 513,
    "winner": "Mike Van Arsdale",
    "winner_school": "Iowa State",
    "loser": "Darryl Pope",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 514,
    "winner": "John Laviolette",
    "winner_school": "Oklahoma",
    "loser": "Dave Lee",
    "loser_school": "Stanford",
    "result": "Dec 11-9"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "Brad Lloyd",
    "winner_school": "Lock Haven",
    "loser": "Fred Little",
    "loser_school": "Fresno State",
    "result": "Dec 4-1"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Dave Lee",
    "winner_school": "Stanford",
    "loser": "Darryl Pope",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Mike Van Arsdale",
    "winner_school": "Iowa State",
    "loser": "John Laviolette",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Marty Kistler",
    "winner_school": "Iowa",
    "loser": "Mark Van Tine",
    "loser_school": "Oklahoma State",
    "result": "MD 15-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Wayne Catan",
    "winner_school": "Syracuse",
    "loser": "Reggie Wilson",
    "loser_school": "Oklahoma State",
    "result": "MD 13-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "Darrin Evans",
    "loser_school": "Bloomsburg",
    "result": "Fall 6:02"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Dan Mayo",
    "winner_school": "Penn State",
    "loser": "Bob Gassman",
    "loser_school": "Iowa State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Dave Mariola",
    "winner_school": "Michigan State",
    "loser": "Mike Harter",
    "loser_school": "Oregon",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Jim Bouwman",
    "winner_school": "Utah State",
    "loser": "Marvin Jones",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "John Stafford",
    "winner_school": "Rider",
    "loser": "John Patterson",
    "loser_school": "Drake",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Joe Decamillis",
    "winner_school": "Wyoming",
    "loser": "John Monaco",
    "loser_school": "Montclair State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Steve Peperak",
    "winner_school": "Maryland",
    "loser": "Jeff Weatherman",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "Mike Cochran",
    "loser_school": "Illinois State",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "John Major",
    "winner_school": "Northern Illinois",
    "loser": "Eyvind Boyesen",
    "loser_school": "Lehigh",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Charlie Buckshaw",
    "winner_school": "Chattanooga",
    "loser": "Kevin Hill",
    "loser_school": "Michigan",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Wayne Catan",
    "winner_school": "Syracuse",
    "loser": "Ralph Liegel",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Bob McCurdy",
    "winner_school": "Shippensburg",
    "loser": "Mel Robinson",
    "loser_school": "Weber State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Mark Tracey",
    "winner_school": "Cal Poly",
    "loser": "Norm Corkhill",
    "loser_school": "NC State",
    "result": "Fall 5:31"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Paul Jones",
    "winner_school": "Nebraska-Omaha",
    "loser": "Tim Curry",
    "loser_school": "Navy",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Jim Beichner",
    "winner_school": "Clarion",
    "loser": "Carlton Kinkade",
    "loser_school": "Central Michigan",
    "result": "TF 18-2 4:26"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Todd Moseley",
    "winner_school": "Missouri",
    "loser": "Carl Cullenberg",
    "loser_school": "Maine",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "John Ginther",
    "loser_school": "Arizona State",
    "result": "Fall 2:06"
  },
  {
    "round": "ConsPrelims",
    "weight": "177",
    "bout": 258,
    "winner": "Darrin Evans",
    "winner_school": "Bloomsburg",
    "loser": "Mike Cochran",
    "loser_school": "Illinois State",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "177",
    "bout": 1258,
    "winner": "Reggie Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Ralph Liegel",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Dave Mariola",
    "winner_school": "Michigan State",
    "loser": "Dan Mayo",
    "loser_school": "Penn State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Jim Bouwman",
    "winner_school": "Utah State",
    "loser": "John Stafford",
    "loser_school": "Rider",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Steve Peperak",
    "winner_school": "Maryland",
    "loser": "Joe Decamillis",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "John Major",
    "loser_school": "Northern Illinois",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Wayne Catan",
    "winner_school": "Syracuse",
    "loser": "Charlie Buckshaw",
    "loser_school": "Chattanooga",
    "result": "TF 21-6 6:36"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Mark Tracey",
    "winner_school": "Cal Poly",
    "loser": "Bob McCurdy",
    "loser_school": "Shippensburg",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Jim Beichner",
    "winner_school": "Clarion",
    "loser": "Paul Jones",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Todd Moseley",
    "loser_school": "Missouri",
    "result": "Fall 1:02"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 317,
    "winner": "Dan Mayo",
    "winner_school": "Penn State",
    "loser": "Mike Harter",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 318,
    "winner": "Marvin Jones",
    "winner_school": "CSU Bakersfield",
    "loser": "John Stafford",
    "loser_school": "Rider",
    "result": "Fall 0:32"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 319,
    "winner": "Jeff Weatherman",
    "winner_school": "Northern Iowa",
    "loser": "Joe Decamillis",
    "loser_school": "Wyoming",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 320,
    "winner": "Darrin Evans",
    "winner_school": "Bloomsburg",
    "loser": "John Major",
    "loser_school": "Northern Illinois",
    "result": "Dec 18-14"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 321,
    "winner": "Reggie Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Charlie Buckshaw",
    "loser_school": "Chattanooga",
    "result": "MD 17-8"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 322,
    "winner": "Norm Corkhill",
    "winner_school": "NC State",
    "loser": "Bob McCurdy",
    "loser_school": "Shippensburg",
    "result": "MD 12-1"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 323,
    "winner": "Carlton Kinkade",
    "winner_school": "Central Michigan",
    "loser": "Paul Jones",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 324,
    "winner": "John Ginther",
    "winner_school": "Arizona State",
    "loser": "Todd Moseley",
    "loser_school": "Missouri",
    "result": "MD 11-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Dave Mariola",
    "winner_school": "Michigan State",
    "loser": "Jim Bouwman",
    "loser_school": "Utah State",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "Steve Peperak",
    "loser_school": "Maryland",
    "result": "MD 14-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Wayne Catan",
    "winner_school": "Syracuse",
    "loser": "Mark Tracey",
    "loser_school": "Cal Poly",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Jim Beichner",
    "loser_school": "Clarion",
    "result": "Dec 8-5"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Marvin Jones",
    "winner_school": "CSU Bakersfield",
    "loser": "Dan Mayo",
    "loser_school": "Penn State",
    "result": "Dec 3-0"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Jeff Weatherman",
    "winner_school": "Northern Iowa",
    "loser": "Darrin Evans",
    "loser_school": "Bloomsburg",
    "result": "Fall 2:54"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Reggie Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Norm Corkhill",
    "loser_school": "NC State",
    "result": "Fall 4:38"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "John Ginther",
    "winner_school": "Arizona State",
    "loser": "Carlton Kinkade",
    "loser_school": "Central Michigan",
    "result": "MD 12-2"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 449,
    "winner": "Marvin Jones",
    "winner_school": "CSU Bakersfield",
    "loser": "Jim Beichner",
    "loser_school": "Clarion",
    "result": "Dec 9-2"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 450,
    "winner": "Mark Tracey",
    "winner_school": "Cal Poly",
    "loser": "Jeff Weatherman",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 451,
    "winner": "Reggie Wilson",
    "winner_school": "Oklahoma State",
    "loser": "Steve Peperak",
    "loser_school": "Maryland",
    "result": "Dec 15-8"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 452,
    "winner": "John Ginther",
    "winner_school": "Arizona State",
    "loser": "Jim Bouwman",
    "loser_school": "Utah State",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "Dave Mariola",
    "loser_school": "Michigan State",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Wayne Catan",
    "winner_school": "Syracuse",
    "loser": "Rico Chiapparelli",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Marvin Jones",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark Tracey",
    "loser_school": "Cal Poly",
    "result": "Dec 11-6"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Reggie Wilson",
    "winner_school": "Oklahoma State",
    "loser": "John Ginther",
    "loser_school": "Arizona State",
    "result": "MD 11-3"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 515,
    "winner": "Marvin Jones",
    "winner_school": "CSU Bakersfield",
    "loser": "Dave Mariola",
    "loser_school": "Michigan State",
    "result": "MD 14-4"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 516,
    "winner": "Rico Chiapparelli",
    "winner_school": "Iowa",
    "loser": "Reggie Wilson",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-5"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "Mark Tracey",
    "winner_school": "Cal Poly",
    "loser": "John Ginther",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Dave Mariola",
    "winner_school": "Michigan State",
    "loser": "Reggie Wilson",
    "loser_school": "Oklahoma State",
    "result": "MD 19-5"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Marvin Jones",
    "winner_school": "CSU Bakersfield",
    "loser": "Rico Chiapparelli",
    "loser_school": "Iowa",
    "result": "Fall 0:59"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Melvin Douglas",
    "winner_school": "Oklahoma",
    "loser": "Wayne Catan",
    "loser_school": "Syracuse",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Eric Voelker",
    "winner_school": "Iowa State",
    "loser": "Tracey Davis",
    "loser_school": "North Carolina",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Mark Coleman",
    "winner_school": "Miami Ohio",
    "loser": "Mike Lombardo",
    "loser_school": "NC State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Paul Neuner",
    "winner_school": "Central Florida",
    "loser": "Mike Zerr",
    "loser_school": "Brigham Young",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Koln Knight",
    "winner_school": "Augustana SD",
    "loser": "John Pryzbyla",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Wade Ayala",
    "winner_school": "Montana State",
    "loser": "Mike Farrell",
    "loser_school": "Oklahoma State",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Dave Dewalt",
    "winner_school": "Delaware",
    "loser": "Fritz Stratton",
    "loser_school": "Nebraska",
    "result": "DQ"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Leland Rogers",
    "loser_school": "Syracuse",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Mike Sudduth",
    "winner_school": "Washington State",
    "loser": "Chris Thornbury",
    "loser_school": "Chattanooga",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Jeff Smyth",
    "winner_school": "Oregon State",
    "loser": "Kevin Carlson",
    "loser_school": "Indiana State",
    "result": "TF 16-0 2:33"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Robert Picchiotti",
    "winner_school": "Purdue",
    "loser": "Dave Cowan",
    "loser_school": "Clarion",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Paul Diekel",
    "winner_school": "Lehigh",
    "loser": "Doug Baker",
    "loser_school": "Kent State",
    "result": "MD 20-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Barry Preslaski",
    "winner_school": "Drake",
    "loser": "Dan Costigan",
    "loser_school": "Army",
    "result": "Fall 5:30"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "John Burdek",
    "loser_school": "Seton Hall",
    "result": "Fall 1:36"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Bruce Wallace",
    "winner_school": "Bloomsburg",
    "loser": "John O'Brien",
    "loser_school": "Fresno State",
    "result": "Fall 6:04"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Joel Greenlee",
    "winner_school": "Northern Iowa",
    "loser": "John Bragg",
    "loser_school": "Wyoming",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Scott Rechsteiner",
    "winner_school": "Michigan",
    "loser": "Chris Pease",
    "loser_school": "Idaho State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Mark Coleman",
    "winner_school": "Miami Ohio",
    "loser": "Eric Voelker",
    "loser_school": "Iowa State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Koln Knight",
    "winner_school": "Augustana SD",
    "loser": "Paul Neuner",
    "loser_school": "Central Florida",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Wade Ayala",
    "winner_school": "Montana State",
    "loser": "Dave Dewalt",
    "loser_school": "Delaware",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Mike Sudduth",
    "loser_school": "Washington State",
    "result": "TF 16-0 3:35"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Jeff Smyth",
    "winner_school": "Oregon State",
    "loser": "Robert Picchiotti",
    "loser_school": "Purdue",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Paul Diekel",
    "winner_school": "Lehigh",
    "loser": "Barry Preslaski",
    "loser_school": "Drake",
    "result": "Fall 2:04"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Bruce Wallace",
    "loser_school": "Bloomsburg",
    "result": "Fall 2:50"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Scott Rechsteiner",
    "winner_school": "Michigan",
    "loser": "Joel Greenlee",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-7"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 325,
    "winner": "Mike Lombardo",
    "winner_school": "NC State",
    "loser": "Eric Voelker",
    "loser_school": "Iowa State",
    "result": "Dec 5-0"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 326,
    "winner": "John Pryzbyla",
    "winner_school": "Michigan State",
    "loser": "Paul Neuner",
    "loser_school": "Central Florida",
    "result": "Dec 3-0"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 327,
    "winner": "Dave Dewalt",
    "winner_school": "Delaware",
    "loser": "Mike Farrell",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-3"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 328,
    "winner": "Leland Rogers",
    "winner_school": "Syracuse",
    "loser": "Mike Sudduth",
    "loser_school": "Washington State",
    "result": "Dec 7-1"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 329,
    "winner": "Robert Picchiotti",
    "winner_school": "Purdue",
    "loser": "Kevin Carlson",
    "loser_school": "Indiana State",
    "result": "Dec 14-10"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 330,
    "winner": "Doug Baker",
    "winner_school": "Kent State",
    "loser": "Barry Preslaski",
    "loser_school": "Drake",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 331,
    "winner": "Bruce Wallace",
    "winner_school": "Bloomsburg",
    "loser": "John Burdek",
    "loser_school": "Seton Hall",
    "result": "Fall 0:21"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 332,
    "winner": "Chris Pease",
    "winner_school": "Idaho State",
    "loser": "Joel Greenlee",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Koln Knight",
    "winner_school": "Augustana SD",
    "loser": "Mark Coleman",
    "loser_school": "Miami Ohio",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Wade Ayala",
    "loser_school": "Montana State",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Paul Diekel",
    "winner_school": "Lehigh",
    "loser": "Jeff Smyth",
    "loser_school": "Oregon State",
    "result": "MD 9-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Scott Rechsteiner",
    "loser_school": "Michigan",
    "result": "MD 15-1"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "John Pryzbyla",
    "winner_school": "Michigan State",
    "loser": "Mike Lombardo",
    "loser_school": "NC State",
    "result": "Dec 7-1"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Dave Dewalt",
    "winner_school": "Delaware",
    "loser": "Leland Rogers",
    "loser_school": "Syracuse",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Doug Baker",
    "winner_school": "Kent State",
    "loser": "Robert Picchiotti",
    "loser_school": "Purdue",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Bruce Wallace",
    "winner_school": "Bloomsburg",
    "loser": "Chris Pease",
    "loser_school": "Idaho State",
    "result": "MD 15-2"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 453,
    "winner": "Scott Rechsteiner",
    "winner_school": "Michigan",
    "loser": "John Pryzbyla",
    "loser_school": "Michigan State",
    "result": "MD 12-2"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 454,
    "winner": "Dave Dewalt",
    "winner_school": "Delaware",
    "loser": "Jeff Smyth",
    "loser_school": "Oregon State",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 455,
    "winner": "Wade Ayala",
    "winner_school": "Montana State",
    "loser": "Doug Baker",
    "loser_school": "Kent State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 456,
    "winner": "Mark Coleman",
    "winner_school": "Miami Ohio",
    "loser": "Bruce Wallace",
    "loser_school": "Bloomsburg",
    "result": "MD 15-1"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Koln Knight",
    "loser_school": "Augustana SD",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Dan Chaid",
    "winner_school": "Oklahoma",
    "loser": "Paul Diekel",
    "loser_school": "Lehigh",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Scott Rechsteiner",
    "winner_school": "Michigan",
    "loser": "Dave Dewalt",
    "loser_school": "Delaware",
    "result": "TF 16-0 5:27"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Mark Coleman",
    "winner_school": "Miami Ohio",
    "loser": "Wade Ayala",
    "loser_school": "Montana State",
    "result": "DEF"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 517,
    "winner": "Koln Knight",
    "winner_school": "Augustana SD",
    "loser": "Scott Rechsteiner",
    "loser_school": "Michigan",
    "result": "Dec 8-7"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 518,
    "winner": "Mark Coleman",
    "winner_school": "Miami Ohio",
    "loser": "Paul Diekel",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Dave Dewalt",
    "winner_school": "Delaware",
    "loser": "Wade Ayala",
    "loser_school": "Montana State",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Paul Diekel",
    "winner_school": "Lehigh",
    "loser": "Scott Rechsteiner",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Koln Knight",
    "winner_school": "Augustana SD",
    "loser": "Mark Coleman",
    "loser_school": "Miami Ohio",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Duane Goldman",
    "winner_school": "Iowa",
    "loser": "Dan Chaid",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "Brian McCracken",
    "winner_school": "Illinois",
    "loser": "Jon Cogdill",
    "loser_school": "Wyoming",
    "result": "MD 18-5"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 1010,
    "winner": "Mark Tatum",
    "winner_school": "Oklahoma",
    "loser": "Norries Wilson",
    "loser_school": "Minnesota",
    "result": "Dec 9-6"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 2010,
    "winner": "Pat McDade",
    "winner_school": "Boise State",
    "loser": "George Kovach",
    "loser_school": "Drexel",
    "result": "Fall 2:44"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Tom Reese",
    "winner_school": "Maryland",
    "loser": "Tony Koontz",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "Bernie Brown",
    "winner_school": "Lehigh",
    "loser": "Bill Paxton",
    "loser_school": "Indiana",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "John Heropoulos",
    "winner_school": "Iowa State",
    "loser": "Ron Madigan",
    "loser_school": "New Hampshire",
    "result": "TF 6:19"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Garrett Keith",
    "winner_school": "NC State",
    "loser": "Chris Tironi",
    "loser_school": "SUNY-Albany",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Mark Tatum",
    "winner_school": "Oklahoma",
    "loser": "Kevin Wattles",
    "loser_school": "Harvard",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Bill Nye",
    "winner_school": "West Virginia",
    "loser": "Steve Grimet",
    "loser_school": "Illinois State",
    "result": "Dec 2-2 UTB"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "John Potts",
    "winner_school": "Toledo",
    "loser": "Brian McCracken",
    "loser_school": "Illinois",
    "result": "MD 14-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Tom Erikson",
    "winner_school": "Oklahoma State",
    "loser": "Jamie Lazarou",
    "loser_school": "Rider",
    "result": "Fall 2:44"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Kirk Butryn",
    "winner_school": "Clarion",
    "loser": "John Place",
    "loser_school": "Penn State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Gary Albright",
    "winner_school": "Nebraska",
    "loser": "Pat McDade",
    "loser_school": "Boise State",
    "result": "Fall 2:16"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "Wendall Ellis",
    "winner_school": "Washington State",
    "loser": "Rich Pilkington",
    "loser_school": "Columbia",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Dean Hall",
    "winner_school": "Edinboro",
    "loser": "Stacey Davis",
    "loser_school": "North Carolina",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "Emanuel Yarbrough",
    "winner_school": "Morgan State",
    "loser": "Mike Wallace",
    "loser_school": "Chattanooga",
    "result": "Fall 0:53"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "Kirk Trost",
    "winner_school": "Michigan",
    "loser": "Chris Mast",
    "loser_school": "Fresno State",
    "result": "Fall 0:57"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "Jim Nielsen",
    "winner_school": "Idaho State",
    "loser": "Demetrius Harper",
    "loser_school": "Eastern Illinois",
    "result": "Fall 1:43"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "Rocco Liace",
    "winner_school": "Arizona State",
    "loser": "Lee Getz",
    "loser_school": "Rutgers",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "UNL",
    "bout": 260,
    "winner": "Kevin Wattles",
    "winner_school": "Harvard",
    "loser": "Norries Wilson",
    "loser_school": "Minnesota",
    "result": "Fall 5:58"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Bernie Brown",
    "winner_school": "Lehigh",
    "loser": "Tom Reese",
    "loser_school": "Maryland",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "John Heropoulos",
    "winner_school": "Iowa State",
    "loser": "Garrett Keith",
    "loser_school": "NC State",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Mark Tatum",
    "winner_school": "Oklahoma",
    "loser": "Bill Nye",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Tom Erikson",
    "winner_school": "Oklahoma State",
    "loser": "John Potts",
    "loser_school": "Toledo",
    "result": "Dec 15-11"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Gary Albright",
    "winner_school": "Nebraska",
    "loser": "Kirk Butryn",
    "loser_school": "Clarion",
    "result": "Fall 0:58"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Wendall Ellis",
    "winner_school": "Washington State",
    "loser": "Dean Hall",
    "loser_school": "Edinboro",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Kirk Trost",
    "winner_school": "Michigan",
    "loser": "Emanuel Yarbrough",
    "loser_school": "Morgan State",
    "result": "DQ"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Rocco Liace",
    "winner_school": "Arizona State",
    "loser": "Jim Nielsen",
    "loser_school": "Idaho State",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR1",
    "weight": "UNL",
    "bout": 333,
    "winner": "Bill Paxton",
    "winner_school": "Indiana",
    "loser": "Tom Reese",
    "loser_school": "Maryland",
    "result": "Dec 10-5"
  },
  {
    "round": "WbConsR1",
    "weight": "UNL",
    "bout": 334,
    "winner": "Garrett Keith",
    "winner_school": "NC State",
    "loser": "Ron Madigan",
    "loser_school": "New Hampshire",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR1",
    "weight": "UNL",
    "bout": 335,
    "winner": "Bill Nye",
    "winner_school": "West Virginia",
    "loser": "Kevin Wattles",
    "loser_school": "Harvard",
    "result": "Fall 1:35"
  },
  {
    "round": "WbConsR1",
    "weight": "UNL",
    "bout": 336,
    "winner": "John Potts",
    "winner_school": "Toledo",
    "loser": "Jamie Lazarou",
    "loser_school": "Rider",
    "result": "Fall 1:27"
  },
  {
    "round": "WbConsR1",
    "weight": "UNL",
    "bout": 337,
    "winner": "Kirk Butryn",
    "winner_school": "Clarion",
    "loser": "Pat McDade",
    "loser_school": "Boise State",
    "result": "MD 18-6"
  },
  {
    "round": "WbConsR1",
    "weight": "UNL",
    "bout": 338,
    "winner": "Dean Hall",
    "winner_school": "Edinboro",
    "loser": "Rich Pilkington",
    "loser_school": "Columbia",
    "result": "MD 12-1"
  },
  {
    "round": "WbConsR1",
    "weight": "UNL",
    "bout": 339,
    "winner": "Emanuel Yarbrough",
    "winner_school": "Morgan State",
    "loser": "Chris Mast",
    "loser_school": "Fresno State",
    "result": "Fall 2:08"
  },
  {
    "round": "WbConsR1",
    "weight": "UNL",
    "bout": 340,
    "winner": "Lee Getz",
    "winner_school": "Rutgers",
    "loser": "Jim Nielsen",
    "loser_school": "Idaho State",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "John Heropoulos",
    "winner_school": "Iowa State",
    "loser": "Bernie Brown",
    "loser_school": "Lehigh",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Tom Erikson",
    "winner_school": "Oklahoma State",
    "loser": "Mark Tatum",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Gary Albright",
    "winner_school": "Nebraska",
    "loser": "Wendall Ellis",
    "loser_school": "Washington State",
    "result": "Fall 4:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Kirk Trost",
    "winner_school": "Michigan",
    "loser": "Rocco Liace",
    "loser_school": "Arizona State",
    "result": "MD 9-1"
  },
  {
    "round": "WbConsR2",
    "weight": "UNL",
    "bout": 417,
    "winner": "Bill Paxton",
    "winner_school": "Indiana",
    "loser": "Garrett Keith",
    "loser_school": "NC State",
    "result": "Fall 3:44"
  },
  {
    "round": "WbConsR2",
    "weight": "UNL",
    "bout": 418,
    "winner": "John Potts",
    "winner_school": "Toledo",
    "loser": "Bill Nye",
    "loser_school": "West Virginia",
    "result": "MD 12-4"
  },
  {
    "round": "WbConsR2",
    "weight": "UNL",
    "bout": 419,
    "winner": "Dean Hall",
    "winner_school": "Edinboro",
    "loser": "Kirk Butryn",
    "loser_school": "Clarion",
    "result": "Fall 2:51"
  },
  {
    "round": "WbConsR2",
    "weight": "UNL",
    "bout": 420,
    "winner": "Emanuel Yarbrough",
    "winner_school": "Morgan State",
    "loser": "Lee Getz",
    "loser_school": "Rutgers",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "UNL",
    "bout": 457,
    "winner": "Rocco Liace",
    "winner_school": "Arizona State",
    "loser": "Bill Paxton",
    "loser_school": "Indiana",
    "result": "MD 11-3"
  },
  {
    "round": "WbConsR3",
    "weight": "UNL",
    "bout": 458,
    "winner": "John Potts",
    "winner_school": "Toledo",
    "loser": "Wendall Ellis",
    "loser_school": "Washington State",
    "result": "Dec 8-6"
  },
  {
    "round": "WbConsR3",
    "weight": "UNL",
    "bout": 459,
    "winner": "Dean Hall",
    "winner_school": "Edinboro",
    "loser": "Mark Tatum",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR3",
    "weight": "UNL",
    "bout": 460,
    "winner": "Emanuel Yarbrough",
    "winner_school": "Morgan State",
    "loser": "Bernie Brown",
    "loser_school": "Lehigh",
    "result": "MD 9-1"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "John Heropoulos",
    "winner_school": "Iowa State",
    "loser": "Tom Erikson",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Kirk Trost",
    "winner_school": "Michigan",
    "loser": "Gary Albright",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR4",
    "weight": "UNL",
    "bout": 499,
    "winner": "John Potts",
    "winner_school": "Toledo",
    "loser": "Rocco Liace",
    "loser_school": "Arizona State",
    "result": "Dec 7-1"
  },
  {
    "round": "WbConsR4",
    "weight": "UNL",
    "bout": 500,
    "winner": "Dean Hall",
    "winner_school": "Edinboro",
    "loser": "Emanuel Yarbrough",
    "loser_school": "Morgan State",
    "result": "Fall 1:13"
  },
  {
    "round": "WbConsR5",
    "weight": "UNL",
    "bout": 519,
    "winner": "Tom Erikson",
    "winner_school": "Oklahoma State",
    "loser": "John Potts",
    "loser_school": "Toledo",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR5",
    "weight": "UNL",
    "bout": 520,
    "winner": "Gary Albright",
    "winner_school": "Nebraska",
    "loser": "Dean Hall",
    "loser_school": "Edinboro",
    "result": "Fall 1:33"
  },
  {
    "round": "7thPlace",
    "weight": "UNL",
    "bout": 530,
    "winner": "Rocco Liace",
    "winner_school": "Arizona State",
    "loser": "Emanuel Yarbrough",
    "loser_school": "Morgan State",
    "result": "Fall 1:22"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "John Potts",
    "winner_school": "Toledo",
    "loser": "Dean Hall",
    "loser_school": "Edinboro",
    "result": "MD 13-3"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Gary Albright",
    "winner_school": "Nebraska",
    "loser": "Tom Erikson",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:57"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Kirk Trost",
    "winner_school": "Michigan",
    "loser": "John Heropoulos",
    "loser_school": "Iowa State",
    "result": "Dec 6-3"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
