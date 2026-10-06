// 1991 NCAA Division I Wrestling Championships (3/14/1991 to 3/16/1991 at Iowa). Weight classes 118-275. Consolation: QUARTERFINAL WRESTLEBACK (rounds WbConsR1-R5).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1991 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1991-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Pat Higa",
    "winner_school": "CSU Bakersfield",
    "loser": "Charlie Irick",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "John Buxton",
    "winner_school": "Nebraska",
    "loser": "Dave Range",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Lou Rosselli",
    "winner_school": "Edinboro",
    "loser": "Dantae Smith",
    "loser_school": "Morgan State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Tim Casey",
    "winner_school": "Bloomsburg",
    "loser": "Ricky Strausbaugh",
    "loser_school": "NC State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Adam Derengowski",
    "winner_school": "Rider",
    "loser": "Soon Thackthay",
    "loser_school": "Michigan State",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Michael Grubbs",
    "winner_school": "Cal State Fullerton",
    "loser": "Tony Venturini",
    "loser_school": "Eastern Michigan",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Jeff Stepanic",
    "loser_school": "Navy",
    "result": "Fall 6:41"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Ty Moore",
    "winner_school": "North Carolina",
    "loser": "Bret Maughan",
    "loser_school": "North Dakota State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "John Buxton",
    "winner_school": "Nebraska",
    "loser": "Tim King",
    "loser_school": "Boston University",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Eric Akin",
    "winner_school": "Iowa State",
    "loser": "Antonio Calloway",
    "loser_school": "Appalachian State",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Sam Henson",
    "winner_school": "Missouri",
    "loser": "Steve Trumpet",
    "loser_school": "Syracuse",
    "result": "Fall 1:52"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Rich Douglas",
    "winner_school": "St. Cloud State",
    "loser": "Pat Higa",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 6:06"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Donnie Heckel",
    "winner_school": "Clemson",
    "loser": "Rico Jourdan",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Burke Tyree",
    "winner_school": "Northern Iowa",
    "loser": "Keith Taylor",
    "loser_school": "James Madison",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Nick Purler",
    "winner_school": "Oklahoma State",
    "loser": "Matt Guinn",
    "loser_school": "New Mexico",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Dan Vidlak",
    "winner_school": "Oregon",
    "loser": "Dan McIntyre",
    "loser_school": "Maryland",
    "result": "TF 22-7 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Chad Zaputil",
    "winner_school": "Iowa",
    "loser": "Erik Burnett",
    "loser_school": "Clarion",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Salem Yaffai",
    "winner_school": "Michigan",
    "loser": "David Sims",
    "loser_school": "Cornell",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Lou Rosselli",
    "winner_school": "Edinboro",
    "loser": "Tim Casey",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Adam Derengowski",
    "winner_school": "Rider",
    "loser": "Michael Grubbs",
    "loser_school": "Cal State Fullerton",
    "result": "MD 16-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Ty Moore",
    "loser_school": "North Carolina",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Eric Akin",
    "winner_school": "Iowa State",
    "loser": "John Buxton",
    "loser_school": "Nebraska",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Sam Henson",
    "winner_school": "Missouri",
    "loser": "Rich Douglas",
    "loser_school": "St. Cloud State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Donnie Heckel",
    "winner_school": "Clemson",
    "loser": "Burke Tyree",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Dan Vidlak",
    "winner_school": "Oregon",
    "loser": "Nick Purler",
    "loser_school": "Oklahoma State",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Chad Zaputil",
    "winner_school": "Iowa",
    "loser": "Salem Yaffai",
    "loser_school": "Michigan",
    "result": "MD 13-4"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Dantae Smith",
    "winner_school": "Morgan State",
    "loser": "Soon Thackthay",
    "loser_school": "Michigan State",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Michael Grubbs",
    "winner_school": "Cal State Fullerton",
    "loser": "Tim Casey",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Ty Moore",
    "winner_school": "North Carolina",
    "loser": "Jeff Stepanic",
    "loser_school": "Navy",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "John Buxton",
    "winner_school": "Nebraska",
    "loser": "Antonio Calloway",
    "loser_school": "Appalachian State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 265,
    "winner": "Steve Trumpet",
    "winner_school": "Syracuse",
    "loser": "Rich Douglas",
    "loser_school": "St. Cloud State",
    "result": "Dec 10-6"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 266,
    "winner": "Burke Tyree",
    "winner_school": "Northern Iowa",
    "loser": "Rico Jourdan",
    "loser_school": "Oklahoma",
    "result": "Dec 9-7"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 267,
    "winner": "Nick Purler",
    "winner_school": "Oklahoma State",
    "loser": "Dan McIntyre",
    "loser_school": "Maryland",
    "result": "Dec 7-5"
  },
  {
    "round": "WbConsR1",
    "weight": "118",
    "bout": 268,
    "winner": "Erik Burnett",
    "winner_school": "Clarion",
    "loser": "Salem Yaffai",
    "loser_school": "Michigan",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Lou Rosselli",
    "winner_school": "Edinboro",
    "loser": "Adam Derengowski",
    "loser_school": "Rider",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Eric Akin",
    "loser_school": "Iowa State",
    "result": "MD 20-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Sam Henson",
    "winner_school": "Missouri",
    "loser": "Donnie Heckel",
    "loser_school": "Clemson",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Chad Zaputil",
    "winner_school": "Iowa",
    "loser": "Dan Vidlak",
    "loser_school": "Oregon",
    "result": "Dec 15-8"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Dantae Smith",
    "winner_school": "Morgan State",
    "loser": "Michael Grubbs",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-5"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Ty Moore",
    "winner_school": "North Carolina",
    "loser": "John Buxton",
    "loser_school": "Nebraska",
    "result": "MD 9-0"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Steve Trumpet",
    "winner_school": "Syracuse",
    "loser": "Burke Tyree",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "WbConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Erik Burnett",
    "winner_school": "Clarion",
    "loser": "Nick Purler",
    "loser_school": "Oklahoma State",
    "result": "Fall 0:41"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Dan Vidlak",
    "winner_school": "Oregon",
    "loser": "Dantae Smith",
    "loser_school": "Morgan State",
    "result": "Fall 4:26"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Donnie Heckel",
    "winner_school": "Clemson",
    "loser": "Ty Moore",
    "loser_school": "North Carolina",
    "result": "Dec 6-5"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 423,
    "winner": "Eric Akin",
    "winner_school": "Iowa State",
    "loser": "Steve Trumpet",
    "loser_school": "Syracuse",
    "result": "TF 17-2 5:46"
  },
  {
    "round": "WbConsR3",
    "weight": "118",
    "bout": 424,
    "winner": "Adam Derengowski",
    "winner_school": "Rider",
    "loser": "Erik Burnett",
    "loser_school": "Clarion",
    "result": "MD 8-0"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Lou Rosselli",
    "loser_school": "Edinboro",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Chad Zaputil",
    "winner_school": "Iowa",
    "loser": "Sam Henson",
    "loser_school": "Missouri",
    "result": "MD 12-1"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Donnie Heckel",
    "winner_school": "Clemson",
    "loser": "Dan Vidlak",
    "loser_school": "Oregon",
    "result": "MD 16-7"
  },
  {
    "round": "WbConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Adam Derengowski",
    "winner_school": "Rider",
    "loser": "Eric Akin",
    "loser_school": "Iowa State",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 501,
    "winner": "Lou Rosselli",
    "winner_school": "Edinboro",
    "loser": "Donnie Heckel",
    "loser_school": "Clemson",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR5",
    "weight": "118",
    "bout": 502,
    "winner": "Adam Derengowski",
    "winner_school": "Rider",
    "loser": "Sam Henson",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 521,
    "winner": "Dan Vidlak",
    "winner_school": "Oregon",
    "loser": "Eric Akin",
    "loser_school": "Iowa State",
    "result": "Dec 8-3"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Sam Henson",
    "winner_school": "Missouri",
    "loser": "Donnie Heckel",
    "loser_school": "Clemson",
    "result": "MD 13-2"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Adam Derengowski",
    "winner_school": "Rider",
    "loser": "Lou Rosselli",
    "loser_school": "Edinboro",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Jeff Prescott",
    "winner_school": "Penn State",
    "loser": "Chad Zaputil",
    "loser_school": "Iowa",
    "result": "MD 14-0"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Eric DeVenney",
    "loser_school": "Missouri",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Adam DiSabato",
    "winner_school": "Ohio State",
    "loser": "Marc Zapf",
    "loser_school": "William & Mary",
    "result": "MD 18-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Scott Stoner",
    "winner_school": "Slippery Rock",
    "loser": "Jeff Maes",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Noel Clavel",
    "winner_school": "Old Dominion",
    "loser": "Mike Krafchick",
    "loser_school": "Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Tony Purler",
    "winner_school": "Oklahoma State",
    "loser": "Owen Hibberd",
    "loser_school": "Drexel",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Terry Brands",
    "winner_school": "Iowa",
    "loser": "Nick Pendolino",
    "loser_school": "Clarion",
    "result": "Fall 2:00"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Marcus Gowens",
    "winner_school": "Notre Dame",
    "loser": "Danny Smith",
    "loser_school": "Lock Haven",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Brett Raimondo",
    "loser_school": "Central Connecticut",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Ahmed El-Sokkary",
    "winner_school": "CSU Bakersfield",
    "loser": "Brian Mason",
    "loser_school": "VMI",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Mark Pustelnik",
    "winner_school": "Northern Iowa",
    "loser": "Shawn Harrison",
    "loser_school": "Oklahoma",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Kurt Howell",
    "winner_school": "Clemson",
    "loser": "Dave Warnick",
    "loser_school": "Army",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Thad Allen",
    "winner_school": "Air Force",
    "loser": "Dave Nieradka",
    "loser_school": "Indiana",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Jason Kelber",
    "winner_school": "Nebraska",
    "loser": "Harold Zinkin",
    "loser_school": "Fresno State",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Mark Smith",
    "winner_school": "Navy",
    "loser": "Tad Yeager",
    "loser_school": "Northwestern",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Babak Mohammadi",
    "winner_school": "Oregon State",
    "loser": "Kurt McHenry",
    "loser_school": "Boston University",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Bob Truby",
    "winner_school": "Penn State",
    "loser": "Dane Campbell",
    "loser_school": "Miami Ohio",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Brett Porter",
    "winner_school": "Edinboro",
    "loser": "Clayton Grice",
    "loser_school": "NC State",
    "result": "Fall 6:54"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 252,
    "winner": "Brett Raimondo",
    "winner_school": "Central Connecticut",
    "loser": "Eric DeVenney",
    "loser_school": "Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Adam DiSabato",
    "winner_school": "Ohio State",
    "loser": "Scott Stoner",
    "loser_school": "Slippery Rock",
    "result": "TF 23-8 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "Tony Purler",
    "winner_school": "Oklahoma State",
    "loser": "Noel Clavel",
    "loser_school": "Old Dominion",
    "result": "Fall 4:32"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Terry Brands",
    "winner_school": "Iowa",
    "loser": "Marcus Gowens",
    "loser_school": "Notre Dame",
    "result": "Fall 6:04"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Ahmed El-Sokkary",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "Kurt Howell",
    "winner_school": "Clemson",
    "loser": "Mark Pustelnik",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Jason Kelber",
    "winner_school": "Nebraska",
    "loser": "Thad Allen",
    "loser_school": "Air Force",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Babak Mohammadi",
    "winner_school": "Oregon State",
    "loser": "Mark Smith",
    "loser_school": "Navy",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Bob Truby",
    "winner_school": "Penn State",
    "loser": "Brett Porter",
    "loser_school": "Edinboro",
    "result": "MD 12-1"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 269,
    "winner": "Scott Stoner",
    "winner_school": "Slippery Rock",
    "loser": "Marc Zapf",
    "loser_school": "William & Mary",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 270,
    "winner": "Noel Clavel",
    "winner_school": "Old Dominion",
    "loser": "Owen Hibberd",
    "loser_school": "Drexel",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 271,
    "winner": "Nick Pendolino",
    "winner_school": "Clarion",
    "loser": "Marcus Gowens",
    "loser_school": "Notre Dame",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 272,
    "winner": "Brett Raimondo",
    "winner_school": "Central Connecticut",
    "loser": "Ahmed El-Sokkary",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 11-7"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 273,
    "winner": "Dave Warnick",
    "winner_school": "Army",
    "loser": "Mark Pustelnik",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:39"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 274,
    "winner": "Harold Zinkin",
    "winner_school": "Fresno State",
    "loser": "Thad Allen",
    "loser_school": "Air Force",
    "result": "Dec 7-1"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 275,
    "winner": "Mark Smith",
    "winner_school": "Navy",
    "loser": "Kurt McHenry",
    "loser_school": "Boston University",
    "result": "TF 15-0 4:52"
  },
  {
    "round": "WbConsR1",
    "weight": "126",
    "bout": 276,
    "winner": "Dane Campbell",
    "winner_school": "Miami Ohio",
    "loser": "Brett Porter",
    "loser_school": "Edinboro",
    "result": "MD 13-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Tony Purler",
    "winner_school": "Oklahoma State",
    "loser": "Adam DiSabato",
    "loser_school": "Ohio State",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Terry Brands",
    "winner_school": "Iowa",
    "loser": "Shawn Charles",
    "loser_school": "Arizona State",
    "result": "MD 13-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "Jason Kelber",
    "winner_school": "Nebraska",
    "loser": "Kurt Howell",
    "loser_school": "Clemson",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Bob Truby",
    "winner_school": "Penn State",
    "loser": "Babak Mohammadi",
    "loser_school": "Oregon State",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "Scott Stoner",
    "winner_school": "Slippery Rock",
    "loser": "Noel Clavel",
    "loser_school": "Old Dominion",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Brett Raimondo",
    "winner_school": "Central Connecticut",
    "loser": "Nick Pendolino",
    "loser_school": "Clarion",
    "result": "MD 15-4"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Harold Zinkin",
    "winner_school": "Fresno State",
    "loser": "Dave Warnick",
    "loser_school": "Army",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Dane Campbell",
    "winner_school": "Miami Ohio",
    "loser": "Mark Smith",
    "loser_school": "Navy",
    "result": "Dec 8-7"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 425,
    "winner": "Babak Mohammadi",
    "winner_school": "Oregon State",
    "loser": "Scott Stoner",
    "loser_school": "Slippery Rock",
    "result": "Dec 8-5"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 426,
    "winner": "Kurt Howell",
    "winner_school": "Clemson",
    "loser": "Brett Raimondo",
    "loser_school": "Central Connecticut",
    "result": "Dec 11-6"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 427,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Harold Zinkin",
    "loser_school": "Fresno State",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR3",
    "weight": "126",
    "bout": 428,
    "winner": "Adam DiSabato",
    "winner_school": "Ohio State",
    "loser": "Dane Campbell",
    "loser_school": "Miami Ohio",
    "result": "MD 13-5"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Terry Brands",
    "winner_school": "Iowa",
    "loser": "Tony Purler",
    "loser_school": "Oklahoma State",
    "result": "TF 20-5 7:00"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Jason Kelber",
    "winner_school": "Nebraska",
    "loser": "Bob Truby",
    "loser_school": "Penn State",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "Babak Mohammadi",
    "winner_school": "Oregon State",
    "loser": "Kurt Howell",
    "loser_school": "Clemson",
    "result": "Dec 14-8"
  },
  {
    "round": "WbConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Adam DiSabato",
    "winner_school": "Ohio State",
    "loser": "Shawn Charles",
    "loser_school": "Arizona State",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 503,
    "winner": "Tony Purler",
    "winner_school": "Oklahoma State",
    "loser": "Babak Mohammadi",
    "loser_school": "Oregon State",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR5",
    "weight": "126",
    "bout": 504,
    "winner": "Adam DiSabato",
    "winner_school": "Ohio State",
    "loser": "Bob Truby",
    "loser_school": "Penn State",
    "result": "Dec 2-1 SV"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 522,
    "winner": "Shawn Charles",
    "winner_school": "Arizona State",
    "loser": "Kurt Howell",
    "loser_school": "Clemson",
    "result": "Fall 3:40"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Bob Truby",
    "winner_school": "Penn State",
    "loser": "Babak Mohammadi",
    "loser_school": "Oregon State",
    "result": "MD 17-3"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "Tony Purler",
    "winner_school": "Oklahoma State",
    "loser": "Adam DiSabato",
    "loser_school": "Ohio State",
    "result": "Dec 10-4"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Jason Kelber",
    "winner_school": "Nebraska",
    "loser": "Terry Brands",
    "loser_school": "Iowa",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Ray Serbick",
    "winner_school": "Eastern Illinois",
    "loser": "Mike Donovan",
    "loser_school": "Wyoming",
    "result": "Fall 1:48"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Jon Erickson",
    "winner_school": "Air Force",
    "loser": "Scott Hassel",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "Mark Mangrum",
    "loser_school": "NC State",
    "result": "TF 20-5 6:45"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Jade Montrie",
    "winner_school": "Toledo",
    "loser": "Ryan Hager",
    "loser_school": "Oklahoma",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Joey Gilbert",
    "winner_school": "Michigan",
    "loser": "Mike Kocsis",
    "loser_school": "Central Connecticut",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Scott Glenn",
    "winner_school": "Oregon",
    "loser": "Eric Kimble",
    "loser_school": "Ohio",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Dave Zuniga",
    "winner_school": "Minnesota",
    "loser": "Lyndon Campbell",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Shannyn Gillespie",
    "winner_school": "Lock Haven",
    "loser": "Ray Serbick",
    "loser_school": "Eastern Illinois",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "Jason Dewland",
    "loser_school": "Boston University",
    "result": "TF 23-8 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Chad Dubin",
    "winner_school": "Penn State",
    "loser": "Dave Droegemueller",
    "loser_school": "Nebraska",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Marco Sanchez",
    "winner_school": "Arizona State",
    "loser": "Jody Jackson",
    "loser_school": "Virginia",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Alan Fried",
    "winner_school": "Oklahoma State",
    "loser": "Robert Tabarez",
    "loser_school": "Cal Poly",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Lonnie Davis",
    "winner_school": "William & Mary",
    "loser": "Jevon Morris",
    "loser_school": "Appalachian State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Pete Horst",
    "winner_school": "Old Dominion",
    "loser": "Ron Pieper",
    "loser_school": "Wisconsin",
    "result": "Fall 0:14"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Mark Fergeson",
    "winner_school": "Cornell",
    "loser": "Tim Anderson",
    "loser_school": "Iowa State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "John Dasta",
    "winner_school": "Clarion",
    "loser": "Kenny Liddell",
    "loser_school": "Missouri",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Rich Santana",
    "winner_school": "Syracuse",
    "loser": "Tom Kuntzleman",
    "loser_school": "Bloomsburg",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "Jon Erickson",
    "loser_school": "Air Force",
    "result": "TF 23-5 5:33"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Joey Gilbert",
    "winner_school": "Michigan",
    "loser": "Jade Montrie",
    "loser_school": "Toledo",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Dave Zuniga",
    "winner_school": "Minnesota",
    "loser": "Scott Glenn",
    "loser_school": "Oregon",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "Shannyn Gillespie",
    "loser_school": "Lock Haven",
    "result": "TF 25-10 6:54"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Marco Sanchez",
    "winner_school": "Arizona State",
    "loser": "Chad Dubin",
    "loser_school": "Penn State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Alan Fried",
    "winner_school": "Oklahoma State",
    "loser": "Lonnie Davis",
    "loser_school": "William & Mary",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Pete Horst",
    "winner_school": "Old Dominion",
    "loser": "Mark Fergeson",
    "loser_school": "Cornell",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Rich Santana",
    "winner_school": "Syracuse",
    "loser": "John Dasta",
    "loser_school": "Clarion",
    "result": "Dec 1-0"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 277,
    "winner": "Mark Mangrum",
    "winner_school": "NC State",
    "loser": "Jon Erickson",
    "loser_school": "Air Force",
    "result": "Dec 1-0"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 278,
    "winner": "Jade Montrie",
    "winner_school": "Toledo",
    "loser": "Mike Kocsis",
    "loser_school": "Central Connecticut",
    "result": "Dec 9-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 279,
    "winner": "Scott Glenn",
    "winner_school": "Oregon",
    "loser": "Lyndon Campbell",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 280,
    "winner": "Shannyn Gillespie",
    "winner_school": "Lock Haven",
    "loser": "Jason Dewland",
    "loser_school": "Boston University",
    "result": "MD 12-4"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 281,
    "winner": "Chad Dubin",
    "winner_school": "Penn State",
    "loser": "Jody Jackson",
    "loser_school": "Virginia",
    "result": "MD 14-6"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 282,
    "winner": "Lonnie Davis",
    "winner_school": "William & Mary",
    "loser": "Robert Tabarez",
    "loser_school": "Cal Poly",
    "result": "MD 15-5"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 283,
    "winner": "Mark Fergeson",
    "winner_school": "Cornell",
    "loser": "Ron Pieper",
    "loser_school": "Wisconsin",
    "result": "MD 12-3"
  },
  {
    "round": "WbConsR1",
    "weight": "134",
    "bout": 284,
    "winner": "John Dasta",
    "winner_school": "Clarion",
    "loser": "Tom Kuntzleman",
    "loser_school": "Bloomsburg",
    "result": "MD 14-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Joey Gilbert",
    "winner_school": "Michigan",
    "loser": "Mark Marinelli",
    "loser_school": "Ohio State",
    "result": "Dec 16-12"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "Dave Zuniga",
    "loser_school": "Minnesota",
    "result": "Dec 12-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Alan Fried",
    "winner_school": "Oklahoma State",
    "loser": "Marco Sanchez",
    "loser_school": "Arizona State",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Rich Santana",
    "winner_school": "Syracuse",
    "loser": "Pete Horst",
    "loser_school": "Old Dominion",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Mark Mangrum",
    "winner_school": "NC State",
    "loser": "Jade Montrie",
    "loser_school": "Toledo",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Scott Glenn",
    "winner_school": "Oregon",
    "loser": "Shannyn Gillespie",
    "loser_school": "Lock Haven",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Lonnie Davis",
    "winner_school": "William & Mary",
    "loser": "Chad Dubin",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Mark Fergeson",
    "winner_school": "Cornell",
    "loser": "John Dasta",
    "loser_school": "Clarion",
    "result": "Dec 1-0"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 429,
    "winner": "Pete Horst",
    "winner_school": "Old Dominion",
    "loser": "Mark Mangrum",
    "loser_school": "NC State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 430,
    "winner": "Scott Glenn",
    "winner_school": "Oregon",
    "loser": "Marco Sanchez",
    "loser_school": "Arizona State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 431,
    "winner": "Dave Zuniga",
    "winner_school": "Minnesota",
    "loser": "Lonnie Davis",
    "loser_school": "William & Mary",
    "result": "DEF"
  },
  {
    "round": "WbConsR3",
    "weight": "134",
    "bout": 432,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "Mark Fergeson",
    "loser_school": "Cornell",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "Joey Gilbert",
    "loser_school": "Michigan",
    "result": "MD 33-19"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Alan Fried",
    "winner_school": "Oklahoma State",
    "loser": "Rich Santana",
    "loser_school": "Syracuse",
    "result": "MD 16-5"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Pete Horst",
    "winner_school": "Old Dominion",
    "loser": "Scott Glenn",
    "loser_school": "Oregon",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "Dave Zuniga",
    "loser_school": "Minnesota",
    "result": "Dec 11-7"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 505,
    "winner": "Joey Gilbert",
    "winner_school": "Michigan",
    "loser": "Pete Horst",
    "loser_school": "Old Dominion",
    "result": "MD 15-2"
  },
  {
    "round": "WbConsR5",
    "weight": "134",
    "bout": 506,
    "winner": "Mark Marinelli",
    "winner_school": "Ohio State",
    "loser": "Rich Santana",
    "loser_school": "Syracuse",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 523,
    "winner": "Dave Zuniga",
    "winner_school": "Minnesota",
    "loser": "Scott Glenn",
    "loser_school": "Oregon",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Rich Santana",
    "winner_school": "Syracuse",
    "loser": "Pete Horst",
    "loser_school": "Old Dominion",
    "result": "MD 10-0"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Joey Gilbert",
    "winner_school": "Michigan",
    "loser": "Mark Marinelli",
    "loser_school": "Ohio State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Tom Brands",
    "winner_school": "Iowa",
    "loser": "Alan Fried",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Tim McClellan",
    "winner_school": "Purdue",
    "loser": "Chip Bunner",
    "loser_school": "Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "David Marlow",
    "winner_school": "Eastern Illinois",
    "loser": "Mike Lightner",
    "loser_school": "Lock Haven",
    "result": "Fall 6:01"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 2004,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Layne Billings",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 3004,
    "winner": "Tom Barley",
    "winner_school": "Millersville",
    "loser": "Charlie Dotson",
    "loser_school": "New Mexico",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Jack Bell",
    "winner_school": "Slippery Rock",
    "loser": "Jon Pierro",
    "loser_school": "Fresno State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Darren Schulman",
    "winner_school": "Syracuse",
    "loser": "Steve Lilley",
    "loser_school": "Bloomsburg",
    "result": "Fall 3:35"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Steve Dernlan",
    "winner_school": "Liberty",
    "loser": "Rick Brzozinsky",
    "loser_school": "Virginia",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Tom Barley",
    "loser_school": "Millersville",
    "result": "Fall 6:59"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Jim Carazola",
    "winner_school": "Clemson",
    "loser": "Tim Rothka",
    "loser_school": "Drexel",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Steve Hartle",
    "winner_school": "Northern Iowa",
    "loser": "Matt Ciccarello",
    "loser_school": "Air Force",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Scott Collins",
    "winner_school": "West Virginia",
    "loser": "Tim McClellan",
    "loser_school": "Purdue",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Dan Spilde",
    "winner_school": "Wisconsin",
    "loser": "Andy McNaughton",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Laurence Jackson",
    "winner_school": "CSU Bakersfield",
    "loser": "Shawn Rustad",
    "loser_school": "Iowa State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "David Marlow",
    "winner_school": "Eastern Illinois",
    "loser": "Thierry Chaney",
    "loser_school": "William & Mary",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Troy Sunderland",
    "winner_school": "Penn State",
    "loser": "Rob Stone",
    "loser_school": "Oregon",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "Steve Thoma",
    "winner_school": "Brown",
    "loser": "James Rawls",
    "loser_school": "Michigan",
    "result": "Fall 6:10"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Marty Fajerman",
    "loser_school": "Furman",
    "result": "TF 17-2 5:57"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Robert Young",
    "winner_school": "Chicago State",
    "loser": "Cory Palmer",
    "loser_school": "Seton Hall",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Damon Johnson",
    "winner_school": "Minnesota",
    "loser": "Tom Miller",
    "loser_school": "Maryland",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Jeff Lyons",
    "winner_school": "Indiana",
    "loser": "Brett Adkins",
    "loser_school": "Ohio",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 254,
    "winner": "Layne Billings",
    "winner_school": "Nebraska",
    "loser": "Marty Fajerman",
    "loser_school": "Furman",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Darren Schulman",
    "winner_school": "Syracuse",
    "loser": "Jack Bell",
    "loser_school": "Slippery Rock",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Steve Dernlan",
    "loser_school": "Liberty",
    "result": "Fall 4:14"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Steve Hartle",
    "winner_school": "Northern Iowa",
    "loser": "Jim Carazola",
    "loser_school": "Clemson",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Scott Collins",
    "winner_school": "West Virginia",
    "loser": "Dan Spilde",
    "loser_school": "Wisconsin",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Laurence Jackson",
    "winner_school": "CSU Bakersfield",
    "loser": "David Marlow",
    "loser_school": "Eastern Illinois",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "Troy Sunderland",
    "winner_school": "Penn State",
    "loser": "Steve Thoma",
    "loser_school": "Brown",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Robert Young",
    "loser_school": "Chicago State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Damon Johnson",
    "winner_school": "Minnesota",
    "loser": "Jeff Lyons",
    "loser_school": "Indiana",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 285,
    "winner": "Jack Bell",
    "winner_school": "Slippery Rock",
    "loser": "Steve Lilley",
    "loser_school": "Bloomsburg",
    "result": "MD 16-2"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 286,
    "winner": "Tom Barley",
    "winner_school": "Millersville",
    "loser": "Steve Dernlan",
    "loser_school": "Liberty",
    "result": "Dec 8-4"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 287,
    "winner": "Matt Ciccarello",
    "winner_school": "Air Force",
    "loser": "Jim Carazola",
    "loser_school": "Clemson",
    "result": "MD 10-1"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 288,
    "winner": "Tim McClellan",
    "winner_school": "Purdue",
    "loser": "Dan Spilde",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 289,
    "winner": "David Marlow",
    "winner_school": "Eastern Illinois",
    "loser": "Shawn Rustad",
    "loser_school": "Iowa State",
    "result": "MD 15-1"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 290,
    "winner": "Steve Thoma",
    "winner_school": "Brown",
    "loser": "Rob Stone",
    "loser_school": "Oregon",
    "result": "Dec 2-0"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 291,
    "winner": "Layne Billings",
    "winner_school": "Nebraska",
    "loser": "Robert Young",
    "loser_school": "Chicago State",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR1",
    "weight": "142",
    "bout": 292,
    "winner": "Jeff Lyons",
    "winner_school": "Indiana",
    "loser": "Tom Miller",
    "loser_school": "Maryland",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Darren Schulman",
    "loser_school": "Syracuse",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Scott Collins",
    "winner_school": "West Virginia",
    "loser": "Steve Hartle",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Troy Sunderland",
    "winner_school": "Penn State",
    "loser": "Laurence Jackson",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Damon Johnson",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Tom Barley",
    "winner_school": "Millersville",
    "loser": "Jack Bell",
    "loser_school": "Slippery Rock",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Tim McClellan",
    "winner_school": "Purdue",
    "loser": "Matt Ciccarello",
    "loser_school": "Air Force",
    "result": "Fall 2:50"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "Steve Thoma",
    "winner_school": "Brown",
    "loser": "David Marlow",
    "loser_school": "Eastern Illinois",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Layne Billings",
    "winner_school": "Nebraska",
    "loser": "Jeff Lyons",
    "loser_school": "Indiana",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 433,
    "winner": "Tom Barley",
    "winner_school": "Millersville",
    "loser": "Damon Johnson",
    "loser_school": "Minnesota",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 434,
    "winner": "Laurence Jackson",
    "winner_school": "CSU Bakersfield",
    "loser": "Tim McClellan",
    "loser_school": "Purdue",
    "result": "Fall 5:14"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 435,
    "winner": "Steve Hartle",
    "winner_school": "Northern Iowa",
    "loser": "Steve Thoma",
    "loser_school": "Brown",
    "result": "Fall 3:27"
  },
  {
    "round": "WbConsR3",
    "weight": "142",
    "bout": 436,
    "winner": "Darren Schulman",
    "winner_school": "Syracuse",
    "loser": "Layne Billings",
    "loser_school": "Nebraska",
    "result": "MD 15-5"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Scott Collins",
    "winner_school": "West Virginia",
    "loser": "Chuck Barbee",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Troy Steiner",
    "winner_school": "Iowa",
    "loser": "Troy Sunderland",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Laurence Jackson",
    "winner_school": "CSU Bakersfield",
    "loser": "Tom Barley",
    "loser_school": "Millersville",
    "result": "MD 12-4"
  },
  {
    "round": "WbConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Darren Schulman",
    "winner_school": "Syracuse",
    "loser": "Steve Hartle",
    "loser_school": "Northern Iowa",
    "result": "MD 12-1"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 507,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Laurence Jackson",
    "loser_school": "CSU Bakersfield",
    "result": "MD 13-5"
  },
  {
    "round": "WbConsR5",
    "weight": "142",
    "bout": 508,
    "winner": "Troy Sunderland",
    "winner_school": "Penn State",
    "loser": "Darren Schulman",
    "loser_school": "Syracuse",
    "result": "Dec 1-0"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 524,
    "winner": "Steve Hartle",
    "winner_school": "Northern Iowa",
    "loser": "Tom Barley",
    "loser_school": "Millersville",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Darren Schulman",
    "winner_school": "Syracuse",
    "loser": "Laurence Jackson",
    "loser_school": "CSU Bakersfield",
    "result": "MD 19-7"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Chuck Barbee",
    "winner_school": "Oklahoma State",
    "loser": "Troy Sunderland",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Scott Collins",
    "winner_school": "West Virginia",
    "loser": "Troy Steiner",
    "loser_school": "Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "Tobin Roitsch",
    "winner_school": "Wyoming",
    "loser": "Mike Mammon",
    "loser_school": "Clemson",
    "result": "Dec 10-6"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Doug Roemer",
    "winner_school": "North Carolina",
    "loser": "Moss Grays",
    "loser_school": "Clarion",
    "result": "Dec 11-5"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Gary Hoopes",
    "winner_school": "Ferris State",
    "loser": "Mark Cesari",
    "loser_school": "NC State",
    "result": "Dec 7-6"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 3005,
    "winner": "Anthony Camacho",
    "winner_school": "Fresno State",
    "loser": "Adam Caldwell",
    "loser_school": "Indiana",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 4005,
    "winner": "Jamie St. John",
    "winner_school": "Syracuse",
    "loser": "Joe Burke",
    "loser_school": "Wagner",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Terry Steiner",
    "winner_school": "Iowa",
    "loser": "Todd Enger",
    "loser_school": "Nebraska",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Nels Nelson",
    "winner_school": "Boise State",
    "loser": "Darren Anthony",
    "loser_school": "George Mason",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Ken Ramsey",
    "winner_school": "Ohio State",
    "loser": "Sepp Dobler",
    "loser_school": "Brown",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Marty Kouyoumtjian",
    "winner_school": "Cal State Fullerton",
    "loser": "Tobin Roitsch",
    "loser_school": "Wyoming",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Nick Garone",
    "winner_school": "Old Dominion",
    "loser": "Jamie St. John",
    "loser_school": "Syracuse",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Tim Wittman",
    "winner_school": "Penn State",
    "loser": "Ernest Franks",
    "loser_school": "Oklahoma",
    "result": "Fall 3:31"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Doug Roemer",
    "winner_school": "North Carolina",
    "loser": "Herman Moultrie",
    "loser_school": "Cheyney",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Matt Demaray",
    "winner_school": "Wisconsin",
    "loser": "Tom Onorato",
    "loser_school": "West Virginia",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Gary Steffensmeier",
    "winner_school": "Northern Iowa",
    "loser": "Adrian Hines",
    "loser_school": "Appalachian State",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Anthony Camacho",
    "winner_school": "Fresno State",
    "loser": "Kemal Pegram",
    "loser_school": "Lock Haven",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Willy Short",
    "winner_school": "Minnesota",
    "loser": "Dante Winslow",
    "loser_school": "Virginia Tech",
    "result": "Fall 4:23"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Mike Carpenter",
    "winner_school": "Cleveland State",
    "loser": "John Messenbrink",
    "loser_school": "Drake",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "David Barnes",
    "winner_school": "Miami Ohio",
    "loser": "Gary Hoopes",
    "loser_school": "Ferris State",
    "result": "Fall 6:50"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Steve Hamilton",
    "winner_school": "Iowa State",
    "loser": "Ted Hickey",
    "loser_school": "Southwest Missouri",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Andy Fitzpatrick",
    "winner_school": "Bloomsburg",
    "loser": "Jason Roach",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Todd Chesbro",
    "winner_school": "Oklahoma State",
    "loser": "Mike Van Doren",
    "loser_school": "Bucknell",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Terry Steiner",
    "winner_school": "Iowa",
    "loser": "Nels Nelson",
    "loser_school": "Boise State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Ken Ramsey",
    "winner_school": "Ohio State",
    "loser": "Marty Kouyoumtjian",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Tim Wittman",
    "winner_school": "Penn State",
    "loser": "Nick Garone",
    "loser_school": "Old Dominion",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Matt Demaray",
    "winner_school": "Wisconsin",
    "loser": "Doug Roemer",
    "loser_school": "North Carolina",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Gary Steffensmeier",
    "winner_school": "Northern Iowa",
    "loser": "Anthony Camacho",
    "loser_school": "Fresno State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Willy Short",
    "winner_school": "Minnesota",
    "loser": "Mike Carpenter",
    "loser_school": "Cleveland State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Steve Hamilton",
    "winner_school": "Iowa State",
    "loser": "David Barnes",
    "loser_school": "Miami Ohio",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Todd Chesbro",
    "winner_school": "Oklahoma State",
    "loser": "Andy Fitzpatrick",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 293,
    "winner": "Nels Nelson",
    "winner_school": "Boise State",
    "loser": "Todd Enger",
    "loser_school": "Nebraska",
    "result": "Dec 10-6"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 294,
    "winner": "Marty Kouyoumtjian",
    "winner_school": "Cal State Fullerton",
    "loser": "Sepp Dobler",
    "loser_school": "Brown",
    "result": "Dec 9-5"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 295,
    "winner": "Nick Garone",
    "winner_school": "Old Dominion",
    "loser": "Ernest Franks",
    "loser_school": "Oklahoma",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 296,
    "winner": "Tom Onorato",
    "winner_school": "West Virginia",
    "loser": "Doug Roemer",
    "loser_school": "North Carolina",
    "result": "Fall 2:26"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 297,
    "winner": "Anthony Camacho",
    "winner_school": "Fresno State",
    "loser": "Adrian Hines",
    "loser_school": "Appalachian State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 298,
    "winner": "Mike Carpenter",
    "winner_school": "Cleveland State",
    "loser": "Dante Winslow",
    "loser_school": "Virginia Tech",
    "result": "Dec 12-8"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 299,
    "winner": "Ted Hickey",
    "winner_school": "Southwest Missouri",
    "loser": "David Barnes",
    "loser_school": "Miami Ohio",
    "result": "Fall 0:37"
  },
  {
    "round": "WbConsR1",
    "weight": "150",
    "bout": 300,
    "winner": "Mike Van Doren",
    "winner_school": "Bucknell",
    "loser": "Andy Fitzpatrick",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:54"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Terry Steiner",
    "winner_school": "Iowa",
    "loser": "Ken Ramsey",
    "loser_school": "Ohio State",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Matt Demaray",
    "winner_school": "Wisconsin",
    "loser": "Tim Wittman",
    "loser_school": "Penn State",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Gary Steffensmeier",
    "winner_school": "Northern Iowa",
    "loser": "Willy Short",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Steve Hamilton",
    "winner_school": "Iowa State",
    "loser": "Todd Chesbro",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Nels Nelson",
    "winner_school": "Boise State",
    "loser": "Marty Kouyoumtjian",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Nick Garone",
    "winner_school": "Old Dominion",
    "loser": "Tom Onorato",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Mike Carpenter",
    "winner_school": "Cleveland State",
    "loser": "Anthony Camacho",
    "loser_school": "Fresno State",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Ted Hickey",
    "winner_school": "Southwest Missouri",
    "loser": "Mike Van Doren",
    "loser_school": "Bucknell",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 437,
    "winner": "Todd Chesbro",
    "winner_school": "Oklahoma State",
    "loser": "Nels Nelson",
    "loser_school": "Boise State",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 438,
    "winner": "Nick Garone",
    "winner_school": "Old Dominion",
    "loser": "Willy Short",
    "loser_school": "Minnesota",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 439,
    "winner": "Tim Wittman",
    "winner_school": "Penn State",
    "loser": "Mike Carpenter",
    "loser_school": "Cleveland State",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR3",
    "weight": "150",
    "bout": 440,
    "winner": "Ken Ramsey",
    "winner_school": "Ohio State",
    "loser": "Ted Hickey",
    "loser_school": "Southwest Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Matt Demaray",
    "winner_school": "Wisconsin",
    "loser": "Terry Steiner",
    "loser_school": "Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Steve Hamilton",
    "winner_school": "Iowa State",
    "loser": "Gary Steffensmeier",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Nick Garone",
    "winner_school": "Old Dominion",
    "loser": "Todd Chesbro",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Ken Ramsey",
    "winner_school": "Ohio State",
    "loser": "Tim Wittman",
    "loser_school": "Penn State",
    "result": "Dec 9-6"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 509,
    "winner": "Terry Steiner",
    "winner_school": "Iowa",
    "loser": "Nick Garone",
    "loser_school": "Old Dominion",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "WbConsR5",
    "weight": "150",
    "bout": 510,
    "winner": "Gary Steffensmeier",
    "winner_school": "Northern Iowa",
    "loser": "Ken Ramsey",
    "loser_school": "Ohio State",
    "result": "Dec 3-0"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 525,
    "winner": "Tim Wittman",
    "winner_school": "Penn State",
    "loser": "Todd Chesbro",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Ken Ramsey",
    "winner_school": "Ohio State",
    "loser": "Nick Garone",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Terry Steiner",
    "winner_school": "Iowa",
    "loser": "Gary Steffensmeier",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-6"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Matt Demaray",
    "winner_school": "Wisconsin",
    "loser": "Steve Hamilton",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Mike Schyck",
    "winner_school": "Ohio State",
    "loser": "Matt Caro",
    "loser_school": "Maryland",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Scott Hovan",
    "winner_school": "Pittsburgh",
    "loser": "Curt Bennethum",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:34"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Sean Bormet",
    "winner_school": "Michigan",
    "loser": "Dave Onorato",
    "loser_school": "West Virginia",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Joe Sabol",
    "winner_school": "Hofstra",
    "loser": "T.C. Dantzler",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Brian Malavar",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeff Clark",
    "loser_school": "VMI",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Rod Fisher",
    "loser_school": "Liberty",
    "result": "Dec 16-10"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Pete Welch",
    "winner_school": "North Carolina",
    "loser": "Darren Gustafson",
    "loser_school": "Oregon",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Torrae Jackson",
    "winner_school": "Iowa State",
    "loser": "Brian McGill",
    "loser_school": "Air Force",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Mike Marzetta",
    "winner_school": "Minnesota",
    "loser": "Jason Suter",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Nick Mauldin",
    "winner_school": "Army",
    "loser": "Mike Bartholomew",
    "loser_school": "Rider",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Brian Unkert",
    "winner_school": "Bloomsburg",
    "loser": "Adam Millson",
    "loser_school": "Miami Ohio",
    "result": "Fall 2:15"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Tom Ryan",
    "winner_school": "Iowa",
    "loser": "Chris Studer",
    "loser_school": "Boston University",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Joe Mocco",
    "winner_school": "Brown",
    "loser": "Aaron Gaier",
    "loser_school": "Oklahoma",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Ray Miller",
    "winner_school": "Arizona State",
    "loser": "Scott Henry",
    "loser_school": "Clarion",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Dave Walter",
    "winner_school": "Purdue",
    "loser": "Greg Warren",
    "loser_school": "Missouri",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Roy Hall",
    "winner_school": "Michigan State",
    "loser": "Matt Topham",
    "loser_school": "Stanford",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Scott Hovan",
    "winner_school": "Pittsburgh",
    "loser": "Mike Schyck",
    "loser_school": "Ohio State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Sean Bormet",
    "winner_school": "Michigan",
    "loser": "Joe Sabol",
    "loser_school": "Hofstra",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Brian Malavar",
    "loser_school": "CSU Bakersfield",
    "result": "TF 17-2 5:12"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Torrae Jackson",
    "winner_school": "Iowa State",
    "loser": "Pete Welch",
    "loser_school": "North Carolina",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Mike Marzetta",
    "winner_school": "Minnesota",
    "loser": "Nick Mauldin",
    "loser_school": "Army",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Tom Ryan",
    "winner_school": "Iowa",
    "loser": "Brian Unkert",
    "loser_school": "Bloomsburg",
    "result": "TF 24-9 6:10"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Ray Miller",
    "winner_school": "Arizona State",
    "loser": "Joe Mocco",
    "loser_school": "Brown",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Dave Walter",
    "winner_school": "Purdue",
    "loser": "Roy Hall",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 301,
    "winner": "Mike Schyck",
    "winner_school": "Ohio State",
    "loser": "Curt Bennethum",
    "loser_school": "Northern Iowa",
    "result": "Fall 4:16"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 302,
    "winner": "Dave Onorato",
    "winner_school": "West Virginia",
    "loser": "Joe Sabol",
    "loser_school": "Hofstra",
    "result": "Dec 11-4"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 303,
    "winner": "Rod Fisher",
    "winner_school": "Liberty",
    "loser": "Brian Malavar",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 304,
    "winner": "Pete Welch",
    "winner_school": "North Carolina",
    "loser": "Brian McGill",
    "loser_school": "Air Force",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 305,
    "winner": "Jason Suter",
    "winner_school": "Penn State",
    "loser": "Nick Mauldin",
    "loser_school": "Army",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 306,
    "winner": "Chris Studer",
    "winner_school": "Boston University",
    "loser": "Brian Unkert",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 307,
    "winner": "Joe Mocco",
    "winner_school": "Brown",
    "loser": "Scott Henry",
    "loser_school": "Clarion",
    "result": "MD 17-5"
  },
  {
    "round": "WbConsR1",
    "weight": "158",
    "bout": 308,
    "winner": "Greg Warren",
    "winner_school": "Missouri",
    "loser": "Roy Hall",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Scott Hovan",
    "winner_school": "Pittsburgh",
    "loser": "Sean Bormet",
    "loser_school": "Michigan",
    "result": "Dec 13-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Torrae Jackson",
    "loser_school": "Iowa State",
    "result": "MD 16-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Tom Ryan",
    "winner_school": "Iowa",
    "loser": "Mike Marzetta",
    "loser_school": "Minnesota",
    "result": "TF 20-5 7:00"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Ray Miller",
    "winner_school": "Arizona State",
    "loser": "Dave Walter",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Dave Onorato",
    "winner_school": "West Virginia",
    "loser": "Mike Schyck",
    "loser_school": "Ohio State",
    "result": "Fall 3:47"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "Pete Welch",
    "winner_school": "North Carolina",
    "loser": "Rod Fisher",
    "loser_school": "Liberty",
    "result": "Dec 9-8"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Jason Suter",
    "winner_school": "Penn State",
    "loser": "Chris Studer",
    "loser_school": "Boston University",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Greg Warren",
    "winner_school": "Missouri",
    "loser": "Joe Mocco",
    "loser_school": "Brown",
    "result": "Dec 9-3"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 441,
    "winner": "Dave Walter",
    "winner_school": "Purdue",
    "loser": "Dave Onorato",
    "loser_school": "West Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 442,
    "winner": "Pete Welch",
    "winner_school": "North Carolina",
    "loser": "Mike Marzetta",
    "loser_school": "Minnesota",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 443,
    "winner": "Jason Suter",
    "winner_school": "Penn State",
    "loser": "Torrae Jackson",
    "loser_school": "Iowa State",
    "result": "Dec 9-8"
  },
  {
    "round": "WbConsR3",
    "weight": "158",
    "bout": 444,
    "winner": "Greg Warren",
    "winner_school": "Missouri",
    "loser": "Sean Bormet",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Scott Hovan",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Tom Ryan",
    "winner_school": "Iowa",
    "loser": "Ray Miller",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Dave Walter",
    "winner_school": "Purdue",
    "loser": "Pete Welch",
    "loser_school": "North Carolina",
    "result": "TF 15-0 4:45"
  },
  {
    "round": "WbConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Jason Suter",
    "winner_school": "Penn State",
    "loser": "Greg Warren",
    "loser_school": "Missouri",
    "result": "Dec 7-6"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 511,
    "winner": "Dave Walter",
    "winner_school": "Purdue",
    "loser": "Scott Hovan",
    "loser_school": "Pittsburgh",
    "result": "MD 10-0"
  },
  {
    "round": "WbConsR5",
    "weight": "158",
    "bout": 512,
    "winner": "Ray Miller",
    "winner_school": "Arizona State",
    "loser": "Jason Suter",
    "loser_school": "Penn State",
    "result": "Dec 9-2"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 526,
    "winner": "Greg Warren",
    "winner_school": "Missouri",
    "loser": "Pete Welch",
    "loser_school": "North Carolina",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Jason Suter",
    "winner_school": "Penn State",
    "loser": "Scott Hovan",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Dave Walter",
    "winner_school": "Purdue",
    "loser": "Ray Miller",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Pat Smith",
    "winner_school": "Oklahoma State",
    "loser": "Tom Ryan",
    "loser_school": "Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Dan Russell",
    "winner_school": "Portland State",
    "loser": "Dave Miller",
    "loser_school": "Clemson",
    "result": "TF 19-3 6:19"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Mark Reiland",
    "winner_school": "Iowa",
    "loser": "Eric Unger",
    "loser_school": "Kent State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Tom Socker",
    "winner_school": "Bloomsburg",
    "loser": "Jason Leonard",
    "loser_school": "Oklahoma",
    "result": "Fall 3:27"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Craig Holiday",
    "winner_school": "Liberty",
    "loser": "Ron Coffel",
    "loser_school": "Lock Haven",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Mark Banks",
    "winner_school": "West Virginia",
    "loser": "Tommy Robbins",
    "loser_school": "Nebraska",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Tom Marchetti",
    "winner_school": "Bucknell",
    "loser": "John Gluckow",
    "loser_school": "Princeton",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Ray Brinzer",
    "winner_school": "Oklahoma State",
    "loser": "Mike Scott",
    "loser_school": "Wyoming",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Dan Russell",
    "winner_school": "Portland State",
    "loser": "Brian Woods",
    "loser_school": "Michigan State",
    "result": "Fall 0:28"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Chris Kwortnik",
    "winner_school": "NC State",
    "loser": "Darrin Farrell",
    "loser_school": "Syracuse",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Billy Kumprey",
    "winner_school": "Marquette",
    "loser": "Dave Hart",
    "loser_school": "Penn State",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "G.T. Taylor",
    "winner_school": "Arizona State",
    "loser": "Jacob Garcia",
    "loser_school": "Army",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Kevin Randleman",
    "winner_school": "Ohio State",
    "loser": "John Marshall",
    "loser_school": "Miami Ohio",
    "result": "Fall 1:21"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Shaon Fry",
    "winner_school": "Missouri",
    "loser": "Bryan Flint",
    "loser_school": "Chattanooga",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Steve Buddie",
    "winner_school": "Stanford",
    "loser": "Jim Marcotte",
    "loser_school": "New Hampshire",
    "result": "Fall 1:42"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Shane Camera",
    "winner_school": "North Carolina",
    "loser": "Laszlo Molnar",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Charlie Jones",
    "winner_school": "Purdue",
    "loser": "Anthony DiFlumeri",
    "loser_school": "Seton Hall",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Bob Thompson",
    "winner_school": "Iowa State",
    "loser": "John Harms",
    "loser_school": "Wisconsin",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 257,
    "winner": "Brian Woods",
    "winner_school": "Michigan State",
    "loser": "Dave Miller",
    "loser_school": "Clemson",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Mark Reiland",
    "winner_school": "Iowa",
    "loser": "Tom Socker",
    "loser_school": "Bloomsburg",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Mark Banks",
    "winner_school": "West Virginia",
    "loser": "Craig Holiday",
    "loser_school": "Liberty",
    "result": "Fall 1:18"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Ray Brinzer",
    "winner_school": "Oklahoma State",
    "loser": "Tom Marchetti",
    "loser_school": "Bucknell",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Dan Russell",
    "winner_school": "Portland State",
    "loser": "Chris Kwortnik",
    "loser_school": "NC State",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Billy Kumprey",
    "winner_school": "Marquette",
    "loser": "G.T. Taylor",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Kevin Randleman",
    "winner_school": "Ohio State",
    "loser": "Shaon Fry",
    "loser_school": "Missouri",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Shane Camera",
    "winner_school": "North Carolina",
    "loser": "Steve Buddie",
    "loser_school": "Stanford",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Charlie Jones",
    "winner_school": "Purdue",
    "loser": "Bob Thompson",
    "loser_school": "Iowa State",
    "result": "DEF"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 309,
    "winner": "Eric Unger",
    "winner_school": "Kent State",
    "loser": "Tom Socker",
    "loser_school": "Bloomsburg",
    "result": "MD 13-4"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 310,
    "winner": "Craig Holiday",
    "winner_school": "Liberty",
    "loser": "Tommy Robbins",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 311,
    "winner": "Mike Scott",
    "winner_school": "Wyoming",
    "loser": "Tom Marchetti",
    "loser_school": "Bucknell",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 312,
    "winner": "Chris Kwortnik",
    "winner_school": "NC State",
    "loser": "Brian Woods",
    "loser_school": "Michigan State",
    "result": "MD 12-0"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 313,
    "winner": "G.T. Taylor",
    "winner_school": "Arizona State",
    "loser": "Dave Hart",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 314,
    "winner": "John Marshall",
    "winner_school": "Miami Ohio",
    "loser": "Shaon Fry",
    "loser_school": "Missouri",
    "result": "Dec 7-3"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 315,
    "winner": "Steve Buddie",
    "winner_school": "Stanford",
    "loser": "Laszlo Molnar",
    "loser_school": "Cal State Fullerton",
    "result": "TF 21-6 6:00"
  },
  {
    "round": "WbConsR1",
    "weight": "167",
    "bout": 316,
    "winner": "Anthony DiFlumeri",
    "winner_school": "Seton Hall",
    "loser": "Bob Thompson",
    "loser_school": "Iowa State",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Mark Reiland",
    "winner_school": "Iowa",
    "loser": "Mark Banks",
    "loser_school": "West Virginia",
    "result": "Fall 2:02"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Dan Russell",
    "winner_school": "Portland State",
    "loser": "Ray Brinzer",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Kevin Randleman",
    "winner_school": "Ohio State",
    "loser": "Billy Kumprey",
    "loser_school": "Marquette",
    "result": "MD 21-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Charlie Jones",
    "winner_school": "Purdue",
    "loser": "Shane Camera",
    "loser_school": "North Carolina",
    "result": "MD 12-4"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Eric Unger",
    "winner_school": "Kent State",
    "loser": "Craig Holiday",
    "loser_school": "Liberty",
    "result": "Dec 5-4"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Chris Kwortnik",
    "winner_school": "NC State",
    "loser": "Mike Scott",
    "loser_school": "Wyoming",
    "result": "Dec 13-6"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "G.T. Taylor",
    "winner_school": "Arizona State",
    "loser": "John Marshall",
    "loser_school": "Miami Ohio",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Steve Buddie",
    "winner_school": "Stanford",
    "loser": "Anthony DiFlumeri",
    "loser_school": "Seton Hall",
    "result": "Fall 0:53"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 445,
    "winner": "Shane Camera",
    "winner_school": "North Carolina",
    "loser": "Eric Unger",
    "loser_school": "Kent State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 446,
    "winner": "Chris Kwortnik",
    "winner_school": "NC State",
    "loser": "Billy Kumprey",
    "loser_school": "Marquette",
    "result": "Dec 11-9"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 447,
    "winner": "G.T. Taylor",
    "winner_school": "Arizona State",
    "loser": "Ray Brinzer",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR3",
    "weight": "167",
    "bout": 448,
    "winner": "Mark Banks",
    "winner_school": "West Virginia",
    "loser": "Steve Buddie",
    "loser_school": "Stanford",
    "result": "MD 12-4"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Mark Reiland",
    "winner_school": "Iowa",
    "loser": "Dan Russell",
    "loser_school": "Portland State",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Kevin Randleman",
    "winner_school": "Ohio State",
    "loser": "Charlie Jones",
    "loser_school": "Purdue",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Chris Kwortnik",
    "winner_school": "NC State",
    "loser": "Shane Camera",
    "loser_school": "North Carolina",
    "result": "Dec 11-6"
  },
  {
    "round": "WbConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Mark Banks",
    "winner_school": "West Virginia",
    "loser": "G.T. Taylor",
    "loser_school": "Arizona State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 513,
    "winner": "Dan Russell",
    "winner_school": "Portland State",
    "loser": "Chris Kwortnik",
    "loser_school": "NC State",
    "result": "M FOR"
  },
  {
    "round": "WbConsR5",
    "weight": "167",
    "bout": 514,
    "winner": "Charlie Jones",
    "winner_school": "Purdue",
    "loser": "Mark Banks",
    "loser_school": "West Virginia",
    "result": "Dec 7-1"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 527,
    "winner": "G.T. Taylor",
    "winner_school": "Arizona State",
    "loser": "Shane Camera",
    "loser_school": "North Carolina",
    "result": "Dec 5-3"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Mark Banks",
    "winner_school": "West Virginia",
    "loser": "Chris Kwortnik",
    "loser_school": "NC State",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Charlie Jones",
    "winner_school": "Purdue",
    "loser": "Dan Russell",
    "loser_school": "Portland State",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Mark Reiland",
    "winner_school": "Iowa",
    "loser": "Kevin Randleman",
    "loser_school": "Ohio State",
    "result": "Fall 4:59"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "Doug DelRosa",
    "loser_school": "Kent State",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Ramon Diaz",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 1:19"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Steve Yarbrough",
    "winner_school": "Stanford",
    "loser": "Dan Staats",
    "loser_school": "West Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "John Hangey",
    "winner_school": "Rider",
    "loser": "Ken Bauer",
    "loser_school": "Edinboro",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Kyle Scrimgeour",
    "winner_school": "Oklahoma",
    "loser": "Scott Boness",
    "loser_school": "Fresno State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Dave Meyers",
    "loser_school": "Wyoming",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Mark Cheff",
    "winner_school": "CSU Bakersfield",
    "loser": "Keith Davison",
    "loser_school": "Wisconsin",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Scott Chenoweth",
    "winner_school": "Nebraska",
    "loser": "Kirk Volm",
    "loser_school": "George Mason",
    "result": "TF 22-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "Robbie Hadden",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "J.J. McGrew",
    "winner_school": "Notre Dame",
    "loser": "Steve Williams",
    "loser_school": "NC State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Mike Caro",
    "winner_school": "Maryland",
    "loser": "Greg Casamento",
    "loser_school": "Boston University",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Joe Wypiszenski",
    "loser_school": "Nebraska-Omaha",
    "result": "Fall 0:55"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Matt White",
    "winner_school": "Penn State",
    "loser": "Steve Cantrell",
    "loser_school": "Navy",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Ben Morgan",
    "winner_school": "Cornell",
    "loser": "Scott Brown",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Lanny Green",
    "winner_school": "Michigan",
    "loser": "Greg Gardner",
    "loser_school": "Illinois State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Bret Gustafson",
    "winner_school": "Chattanooga",
    "loser": "T.J. Wright",
    "loser_school": "Army",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Jay Landolfo",
    "winner_school": "North Carolina",
    "loser": "Mike Galvin",
    "loser_school": "Central Michigan",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Matt Johnson",
    "winner_school": "Iowa State",
    "loser": "Keith Linden",
    "loser_school": "Purdue",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "177",
    "bout": 258,
    "winner": "Robbie Hadden",
    "winner_school": "Oklahoma State",
    "loser": "Doug DelRosa",
    "loser_school": "Kent State",
    "result": "MD 13-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "177",
    "bout": 1258,
    "winner": "Ramon Diaz",
    "winner_school": "Cal State Fullerton",
    "loser": "Joe Wypiszenski",
    "loser_school": "Nebraska-Omaha",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Steve Yarbrough",
    "winner_school": "Stanford",
    "loser": "John Hangey",
    "loser_school": "Rider",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Kyle Scrimgeour",
    "loser_school": "Oklahoma",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Scott Chenoweth",
    "winner_school": "Nebraska",
    "loser": "Mark Cheff",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "J.J. McGrew",
    "loser_school": "Notre Dame",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Mike Caro",
    "loser_school": "Maryland",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Matt White",
    "winner_school": "Penn State",
    "loser": "Ben Morgan",
    "loser_school": "Cornell",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Bret Gustafson",
    "winner_school": "Chattanooga",
    "loser": "Lanny Green",
    "loser_school": "Michigan",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Matt Johnson",
    "winner_school": "Iowa State",
    "loser": "Jay Landolfo",
    "loser_school": "North Carolina",
    "result": "Fall 5:15"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 317,
    "winner": "John Hangey",
    "winner_school": "Rider",
    "loser": "Dan Staats",
    "loser_school": "West Virginia",
    "result": "MD 10-1"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 318,
    "winner": "Kyle Scrimgeour",
    "winner_school": "Oklahoma",
    "loser": "Dave Meyers",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 319,
    "winner": "Mark Cheff",
    "winner_school": "CSU Bakersfield",
    "loser": "Kirk Volm",
    "loser_school": "George Mason",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 320,
    "winner": "Robbie Hadden",
    "winner_school": "Oklahoma State",
    "loser": "J.J. McGrew",
    "loser_school": "Notre Dame",
    "result": "Fall 1:08"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 321,
    "winner": "Ramon Diaz",
    "winner_school": "Cal State Fullerton",
    "loser": "Mike Caro",
    "loser_school": "Maryland",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 322,
    "winner": "Steve Cantrell",
    "winner_school": "Navy",
    "loser": "Ben Morgan",
    "loser_school": "Cornell",
    "result": "Dec 2-0"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 323,
    "winner": "Lanny Green",
    "winner_school": "Michigan",
    "loser": "T.J. Wright",
    "loser_school": "Army",
    "result": "Dec 9-2"
  },
  {
    "round": "WbConsR1",
    "weight": "177",
    "bout": 324,
    "winner": "Jay Landolfo",
    "winner_school": "North Carolina",
    "loser": "Keith Linden",
    "loser_school": "Purdue",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Steve Yarbrough",
    "loser_school": "Stanford",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "Scott Chenoweth",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Matt White",
    "loser_school": "Penn State",
    "result": "Dec 9-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Matt Johnson",
    "winner_school": "Iowa State",
    "loser": "Bret Gustafson",
    "loser_school": "Chattanooga",
    "result": "Fall 6:05"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "John Hangey",
    "winner_school": "Rider",
    "loser": "Kyle Scrimgeour",
    "loser_school": "Oklahoma",
    "result": "Dec 5-0"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Mark Cheff",
    "winner_school": "CSU Bakersfield",
    "loser": "Robbie Hadden",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Ramon Diaz",
    "winner_school": "Cal State Fullerton",
    "loser": "Steve Cantrell",
    "loser_school": "Navy",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "WbConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Lanny Green",
    "winner_school": "Michigan",
    "loser": "Jay Landolfo",
    "loser_school": "North Carolina",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 449,
    "winner": "Bret Gustafson",
    "winner_school": "Chattanooga",
    "loser": "John Hangey",
    "loser_school": "Rider",
    "result": "MD 10-0"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 450,
    "winner": "Matt White",
    "winner_school": "Penn State",
    "loser": "Mark Cheff",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 451,
    "winner": "Scott Chenoweth",
    "winner_school": "Nebraska",
    "loser": "Ramon Diaz",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-1"
  },
  {
    "round": "WbConsR3",
    "weight": "177",
    "bout": 452,
    "winner": "Lanny Green",
    "winner_school": "Michigan",
    "loser": "Steve Yarbrough",
    "loser_school": "Stanford",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "Bart Chelesvig",
    "loser_school": "Iowa",
    "result": "MD 9-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Matt Johnson",
    "winner_school": "Iowa State",
    "loser": "Rich Powers",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:55"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Bret Gustafson",
    "winner_school": "Chattanooga",
    "loser": "Matt White",
    "loser_school": "Penn State",
    "result": "DEF"
  },
  {
    "round": "WbConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Lanny Green",
    "winner_school": "Michigan",
    "loser": "Scott Chenoweth",
    "loser_school": "Nebraska",
    "result": "Dec 10-7"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 515,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Bret Gustafson",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "WbConsR5",
    "weight": "177",
    "bout": 516,
    "winner": "Rich Powers",
    "winner_school": "Northern Iowa",
    "loser": "Lanny Green",
    "loser_school": "Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 528,
    "winner": "Scott Chenoweth",
    "winner_school": "Nebraska",
    "loser": "Matt White",
    "loser_school": "Penn State",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Bret Gustafson",
    "winner_school": "Chattanooga",
    "loser": "Lanny Green",
    "loser_school": "Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Bart Chelesvig",
    "winner_school": "Iowa",
    "loser": "Rich Powers",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-4"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Marty Morgan",
    "winner_school": "Minnesota",
    "loser": "Matt Johnson",
    "loser_school": "Iowa State",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Paul Keysaw",
    "winner_school": "CSU Bakersfield",
    "loser": "Rick Evans",
    "loser_school": "Brigham Young",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Andy Foster",
    "winner_school": "Oklahoma",
    "loser": "Steve Hughes",
    "loser_school": "Illinois State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Dan Troupe",
    "winner_school": "Iowa State",
    "loser": "Jeff Kloiber",
    "loser_school": "Pittsburgh",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Rob Nusum",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Dominick Black",
    "winner_school": "West Virginia",
    "loser": "Jamie Richardson",
    "loser_school": "Michigan State",
    "result": "TF 26-11"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Ted Casto",
    "winner_school": "Brown",
    "loser": "Mark Lindlow",
    "loser_school": "Air Force",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Hamilton Munnell",
    "winner_school": "Miami Ohio",
    "loser": "Eric Schultz",
    "loser_school": "Purdue",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Curt Strahm",
    "winner_school": "Oregon",
    "loser": "Kevin Brown",
    "loser_school": "Maryland",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Chris Nelson",
    "winner_school": "Nebraska",
    "loser": "Mike Kraft",
    "loser_school": "Penn State",
    "result": "Fall 6:46"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Fritz Lehrke",
    "winner_school": "Michigan",
    "loser": "Todd Hartung",
    "loser_school": "North Carolina",
    "result": "MD 20-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Rex Holman",
    "winner_school": "Arizona State",
    "loser": "John Curtis",
    "loser_school": "George Mason",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Travis Fiser",
    "winner_school": "Iowa",
    "loser": "Dave Malecek",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Randy Couture",
    "winner_school": "Oklahoma State",
    "loser": "Rod Horner",
    "loser_school": "Chattanooga",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Dan Sanchez",
    "winner_school": "Wagner",
    "loser": "Jason Loukides",
    "loser_school": "Edinboro",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Bryan Burns",
    "winner_school": "Bucknell",
    "loser": "Dan Ritchie",
    "loser_school": "Ohio State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Steve King",
    "winner_school": "Notre Dame",
    "loser": "Mark Kerr",
    "loser_school": "Syracuse",
    "result": "Dec 17-14"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Paul Keysaw",
    "winner_school": "CSU Bakersfield",
    "loser": "Andy Foster",
    "loser_school": "Oklahoma",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Dan Troupe",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Dominick Black",
    "winner_school": "West Virginia",
    "loser": "Ted Casto",
    "loser_school": "Brown",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Curt Strahm",
    "winner_school": "Oregon",
    "loser": "Hamilton Munnell",
    "loser_school": "Miami Ohio",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Fritz Lehrke",
    "winner_school": "Michigan",
    "loser": "Chris Nelson",
    "loser_school": "Nebraska",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Travis Fiser",
    "winner_school": "Iowa",
    "loser": "Rex Holman",
    "loser_school": "Arizona State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Randy Couture",
    "winner_school": "Oklahoma State",
    "loser": "Dan Sanchez",
    "loser_school": "Wagner",
    "result": "MD 20-6"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Bryan Burns",
    "winner_school": "Bucknell",
    "loser": "Steve King",
    "loser_school": "Notre Dame",
    "result": "TF 21-5 6:08"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 325,
    "winner": "Andy Foster",
    "winner_school": "Oklahoma",
    "loser": "Rick Evans",
    "loser_school": "Brigham Young",
    "result": "Dec 9-2"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 326,
    "winner": "Dan Troupe",
    "winner_school": "Iowa State",
    "loser": "Rob Nusum",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 5-1"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 327,
    "winner": "Ted Casto",
    "winner_school": "Brown",
    "loser": "Jamie Richardson",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 328,
    "winner": "Hamilton Munnell",
    "winner_school": "Miami Ohio",
    "loser": "Kevin Brown",
    "loser_school": "Maryland",
    "result": "Dec 8-7"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 329,
    "winner": "Chris Nelson",
    "winner_school": "Nebraska",
    "loser": "Todd Hartung",
    "loser_school": "North Carolina",
    "result": "MD 19-5"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 330,
    "winner": "Rex Holman",
    "winner_school": "Arizona State",
    "loser": "Dave Malecek",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 331,
    "winner": "Dan Sanchez",
    "winner_school": "Wagner",
    "loser": "Rod Horner",
    "loser_school": "Chattanooga",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR1",
    "weight": "190",
    "bout": 332,
    "winner": "Steve King",
    "winner_school": "Notre Dame",
    "loser": "Dan Ritchie",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Paul Keysaw",
    "winner_school": "CSU Bakersfield",
    "loser": "Mike Funk",
    "loser_school": "Northwestern",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Curt Strahm",
    "winner_school": "Oregon",
    "loser": "Dominick Black",
    "loser_school": "West Virginia",
    "result": "MD 14-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Fritz Lehrke",
    "winner_school": "Michigan",
    "loser": "Travis Fiser",
    "loser_school": "Iowa",
    "result": "MD 10-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Randy Couture",
    "winner_school": "Oklahoma State",
    "loser": "Bryan Burns",
    "loser_school": "Bucknell",
    "result": "Dec 7-2"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Dan Troupe",
    "winner_school": "Iowa State",
    "loser": "Andy Foster",
    "loser_school": "Oklahoma",
    "result": "Dec 8-5"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "Hamilton Munnell",
    "winner_school": "Miami Ohio",
    "loser": "Ted Casto",
    "loser_school": "Brown",
    "result": "Dec 5-3"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "Chris Nelson",
    "winner_school": "Nebraska",
    "loser": "Rex Holman",
    "loser_school": "Arizona State",
    "result": "Dec 8-3"
  },
  {
    "round": "WbConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Steve King",
    "winner_school": "Notre Dame",
    "loser": "Dan Sanchez",
    "loser_school": "Wagner",
    "result": "Dec 6-4"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 453,
    "winner": "Bryan Burns",
    "winner_school": "Bucknell",
    "loser": "Dan Troupe",
    "loser_school": "Iowa State",
    "result": "Fall 1:11"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 454,
    "winner": "Travis Fiser",
    "winner_school": "Iowa",
    "loser": "Hamilton Munnell",
    "loser_school": "Miami Ohio",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 455,
    "winner": "Dominick Black",
    "winner_school": "West Virginia",
    "loser": "Chris Nelson",
    "loser_school": "Nebraska",
    "result": "Dec 7-4"
  },
  {
    "round": "WbConsR3",
    "weight": "190",
    "bout": 456,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Steve King",
    "loser_school": "Notre Dame",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Paul Keysaw",
    "winner_school": "CSU Bakersfield",
    "loser": "Curt Strahm",
    "loser_school": "Oregon",
    "result": "Fall 1:21"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Randy Couture",
    "winner_school": "Oklahoma State",
    "loser": "Fritz Lehrke",
    "loser_school": "Michigan",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Travis Fiser",
    "winner_school": "Iowa",
    "loser": "Bryan Burns",
    "loser_school": "Bucknell",
    "result": "Dec 4-2"
  },
  {
    "round": "WbConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Dominick Black",
    "winner_school": "West Virginia",
    "loser": "Mike Funk",
    "loser_school": "Northwestern",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 517,
    "winner": "Curt Strahm",
    "winner_school": "Oregon",
    "loser": "Travis Fiser",
    "loser_school": "Iowa",
    "result": "MD 13-3"
  },
  {
    "round": "WbConsR5",
    "weight": "190",
    "bout": 518,
    "winner": "Dominick Black",
    "winner_school": "West Virginia",
    "loser": "Fritz Lehrke",
    "loser_school": "Michigan",
    "result": "Dec 13-6"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 529,
    "winner": "Mike Funk",
    "winner_school": "Northwestern",
    "loser": "Bryan Burns",
    "loser_school": "Bucknell",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Fritz Lehrke",
    "winner_school": "Michigan",
    "loser": "Travis Fiser",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Curt Strahm",
    "winner_school": "Oregon",
    "loser": "Dominick Black",
    "loser_school": "West Virginia",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Paul Keysaw",
    "winner_school": "CSU Bakersfield",
    "loser": "Randy Couture",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 156,
    "winner": "John Oostendorp",
    "winner_school": "Iowa",
    "loser": "Warren Osbourn",
    "loser_school": "Chattanooga",
    "result": "Fall 1:37"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 157,
    "winner": "Todd Kinney",
    "winner_school": "Iowa State",
    "loser": "Brian Walczak",
    "loser_school": "Toledo",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 158,
    "winner": "Cam Strahm",
    "winner_school": "Oregon",
    "loser": "John Matyiko",
    "loser_school": "Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 159,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "Seth Woodill",
    "loser_school": "Cal Poly",
    "result": "Fall 3:53"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 160,
    "winner": "Kevin Marriner",
    "winner_school": "Central Connecticut",
    "loser": "Curt Engler",
    "loser_school": "Notre Dame",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 161,
    "winner": "Steven Sciandra",
    "winner_school": "Old Dominion",
    "loser": "Sonny Manley",
    "loser_school": "Nebraska",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 162,
    "winner": "Matt Lindley",
    "winner_school": "Purdue",
    "loser": "Jeff Datkuliak",
    "loser_school": "Kent State",
    "result": "Fall 3:50"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 163,
    "winner": "Don Whipp",
    "winner_school": "Michigan State",
    "loser": "Andrew Borodow",
    "loser_school": "William & Mary",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 164,
    "winner": "Kurt Angle",
    "winner_school": "Clarion",
    "loser": "Matt Willhite",
    "loser_school": "Oregon State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 165,
    "winner": "Mike Anderson",
    "winner_school": "Arizona State",
    "loser": "Kenny Walker",
    "loser_school": "Lock Haven",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 166,
    "winner": "Brett Bourne",
    "winner_school": "Navy",
    "loser": "Shawn Holliday",
    "loser_school": "Manhattan",
    "result": "Fall 5:17"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 167,
    "winner": "Perry Miller",
    "winner_school": "Pittsburgh",
    "loser": "Adam Green",
    "loser_school": "Penn",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 168,
    "winner": "Sylvester Terkay",
    "winner_school": "NC State",
    "loser": "Phil Tomek",
    "loser_school": "Michigan",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 169,
    "winner": "Kirk Mammen",
    "winner_school": "Oklahoma State",
    "loser": "Marc Padwe",
    "loser_school": "Penn State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 243,
    "winner": "David Jones",
    "winner_school": "Cal State Fullerton",
    "loser": "John Oostendorp",
    "loser_school": "Iowa",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 244,
    "winner": "Todd Kinney",
    "winner_school": "Iowa State",
    "loser": "Cam Strahm",
    "loser_school": "Oregon",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 245,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "Kevin Marriner",
    "loser_school": "Central Connecticut",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 246,
    "winner": "Matt Lindley",
    "winner_school": "Purdue",
    "loser": "Steven Sciandra",
    "loser_school": "Old Dominion",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 247,
    "winner": "Kurt Angle",
    "winner_school": "Clarion",
    "loser": "Don Whipp",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 248,
    "winner": "Mike Anderson",
    "winner_school": "Arizona State",
    "loser": "Brett Bourne",
    "loser_school": "Navy",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 249,
    "winner": "Sylvester Terkay",
    "winner_school": "NC State",
    "loser": "Perry Miller",
    "loser_school": "Pittsburgh",
    "result": "Fall 3:56"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 250,
    "winner": "Kirk Mammen",
    "winner_school": "Oklahoma State",
    "loser": "Bret Sharp",
    "loser_school": "Drake",
    "result": "Dec 6-1"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 334,
    "winner": "Brian Walczak",
    "winner_school": "Toledo",
    "loser": "Cam Strahm",
    "loser_school": "Oregon",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 335,
    "winner": "Seth Woodill",
    "winner_school": "Cal Poly",
    "loser": "Kevin Marriner",
    "loser_school": "Central Connecticut",
    "result": "Dec 7-0"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 336,
    "winner": "Jeff Datkuliak",
    "winner_school": "Kent State",
    "loser": "Steven Sciandra",
    "loser_school": "Old Dominion",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 337,
    "winner": "Don Whipp",
    "winner_school": "Michigan State",
    "loser": "Matt Willhite",
    "loser_school": "Oregon State",
    "result": "Dec 4-1"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 338,
    "winner": "Kenny Walker",
    "winner_school": "Lock Haven",
    "loser": "Brett Bourne",
    "loser_school": "Navy",
    "result": "Dec 3-1"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 339,
    "winner": "Perry Miller",
    "winner_school": "Pittsburgh",
    "loser": "Phil Tomek",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR1",
    "weight": "275",
    "bout": 340,
    "winner": "Marc Padwe",
    "winner_school": "Penn State",
    "loser": "Bret Sharp",
    "loser_school": "Drake",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 377,
    "winner": "David Jones",
    "winner_school": "Cal State Fullerton",
    "loser": "Todd Kinney",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 378,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "Matt Lindley",
    "loser_school": "Purdue",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 379,
    "winner": "Kurt Angle",
    "winner_school": "Clarion",
    "loser": "Mike Anderson",
    "loser_school": "Arizona State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 380,
    "winner": "Sylvester Terkay",
    "winner_school": "NC State",
    "loser": "Kirk Mammen",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-5"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 417,
    "winner": "John Oostendorp",
    "winner_school": "Iowa",
    "loser": "Brian Walczak",
    "loser_school": "Toledo",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 418,
    "winner": "Seth Woodill",
    "winner_school": "Cal Poly",
    "loser": "Jeff Datkuliak",
    "loser_school": "Kent State",
    "result": "Fall 2:10"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 419,
    "winner": "Don Whipp",
    "winner_school": "Michigan State",
    "loser": "Kenny Walker",
    "loser_school": "Lock Haven",
    "result": "Dec 6-0"
  },
  {
    "round": "WbConsR2",
    "weight": "275",
    "bout": 420,
    "winner": "Perry Miller",
    "winner_school": "Pittsburgh",
    "loser": "Marc Padwe",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 457,
    "winner": "Kirk Mammen",
    "winner_school": "Oklahoma State",
    "loser": "John Oostendorp",
    "loser_school": "Iowa",
    "result": "MD 14-6"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 458,
    "winner": "Mike Anderson",
    "winner_school": "Arizona State",
    "loser": "Seth Woodill",
    "loser_school": "Cal Poly",
    "result": "Fall 5:38"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 459,
    "winner": "Matt Lindley",
    "winner_school": "Purdue",
    "loser": "Don Whipp",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "WbConsR3",
    "weight": "275",
    "bout": 460,
    "winner": "Perry Miller",
    "winner_school": "Pittsburgh",
    "loser": "Todd Kinney",
    "loser_school": "Iowa State",
    "result": "Fall 1:06"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 479,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "David Jones",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 480,
    "winner": "Kurt Angle",
    "winner_school": "Clarion",
    "loser": "Sylvester Terkay",
    "loser_school": "NC State",
    "result": "Dec 3-2"
  },
  {
    "round": "WbConsR4",
    "weight": "275",
    "bout": 499,
    "winner": "Kirk Mammen",
    "winner_school": "Oklahoma State",
    "loser": "Mike Anderson",
    "loser_school": "Arizona State",
    "result": "Dec 2-1"
  },
  {
    "round": "WbConsR4",
    "weight": "275",
    "bout": 500,
    "winner": "Matt Lindley",
    "winner_school": "Purdue",
    "loser": "Perry Miller",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-0"
  },
  {
    "round": "WbConsR5",
    "weight": "275",
    "bout": 519,
    "winner": "David Jones",
    "winner_school": "Cal State Fullerton",
    "loser": "Kirk Mammen",
    "loser_school": "Oklahoma State",
    "result": "MD 14-5"
  },
  {
    "round": "WbConsR5",
    "weight": "275",
    "bout": 520,
    "winner": "Sylvester Terkay",
    "winner_school": "NC State",
    "loser": "Matt Lindley",
    "loser_school": "Purdue",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "7thPlace",
    "weight": "275",
    "bout": 530,
    "winner": "Mike Anderson",
    "winner_school": "Arizona State",
    "loser": "Perry Miller",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4"
  },
  {
    "round": "5thPlace",
    "weight": "275",
    "bout": 540,
    "winner": "Kirk Mammen",
    "winner_school": "Oklahoma State",
    "loser": "Matt Lindley",
    "loser_school": "Purdue",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "275",
    "bout": 550,
    "winner": "Sylvester Terkay",
    "winner_school": "NC State",
    "loser": "David Jones",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 9-7"
  },
  {
    "round": "Finals",
    "weight": "275",
    "bout": 560,
    "winner": "Jon Llewellyn",
    "winner_school": "Illinois",
    "loser": "Kurt Angle",
    "loser_school": "Clarion",
    "result": "Dec 6-3"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
