// 1973 NCAA Division I Wrestling Championships (3/8/1973 to 3/10/1973 at Washington). Weight classes 118-275. Consolation: SEMIFINALIST WRESTLEBACK (rounds SfConsR1-R4).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1973 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1973-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1,
    "winner": "Sal Lanuto",
    "winner_school": "Columbia",
    "loser": "Bob Cruzado",
    "loser_school": "Ohio",
    "result": "MD 21-3"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 1001,
    "winner": "Dave Amato",
    "winner_school": "Massachusetts",
    "loser": "Mike Beining",
    "loser_school": "Marquette",
    "result": "Dec 9-6"
  },
  {
    "round": "Prelims",
    "weight": "118",
    "bout": 2001,
    "winner": "Dan Kida",
    "winner_school": "San Jose State",
    "loser": "Steve Hart",
    "loser_school": "Oregon",
    "result": "Dec 7-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Dan Sherman",
    "winner_school": "Iowa",
    "loser": "Dan Kida",
    "loser_school": "San Jose State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Everett Gomez",
    "winner_school": "Oklahoma State",
    "loser": "Andy Burge",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Ron Castle",
    "winner_school": "Portland State",
    "loser": "Jack Love",
    "loser_school": "Georgia Tech",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Stan Opp",
    "winner_school": "South Dakota State",
    "loser": "Mike Frick",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Jack Spates",
    "winner_school": "Slippery Rock",
    "loser": "Glenn Baker",
    "loser_school": "East Carolina",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Tom Teagarden",
    "winner_school": "Penn State",
    "loser": "Steve Weiss",
    "loser_school": "UCLA",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Bill Morgan",
    "winner_school": "Kent State",
    "loser": "Alan Karstetter",
    "loser_school": "Brigham Young",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Gary Breece",
    "winner_school": "Oklahoma",
    "loser": "Dave Amato",
    "loser_school": "Massachusetts",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "Tom Phillips",
    "winner_school": "Oregon State",
    "loser": "Sal Lanuto",
    "loser_school": "Columbia",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Paul Hetrick",
    "winner_school": "Gettysburg",
    "loser": "Greg Penny",
    "loser_school": "Duke",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "John Hobbs",
    "winner_school": "Indiana",
    "loser": "Mark Matkovic",
    "loser_school": "Alabama",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "Randy Miller",
    "winner_school": "Michigan State",
    "loser": "Dan Mallinger",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Jim Brown",
    "winner_school": "Michigan",
    "loser": "John Price",
    "loser_school": "Utah State",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Mike Downer",
    "winner_school": "Washington",
    "loser": "Bill Murphy",
    "loser_school": "Weber State",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Mike Fowler",
    "winner_school": "Missouri",
    "loser": "George Bryant",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 26,
    "winner": "Dale Brumit",
    "winner_school": "Arizona",
    "loser": "Brad Thompson",
    "loser_school": "Minnesota State-Mankato",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 171,
    "winner": "Dan Sherman",
    "winner_school": "Iowa",
    "loser": "Everett Gomez",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 172,
    "winner": "Stan Opp",
    "winner_school": "South Dakota State",
    "loser": "Ron Castle",
    "loser_school": "Portland State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 173,
    "winner": "Jack Spates",
    "winner_school": "Slippery Rock",
    "loser": "Tom Teagarden",
    "loser_school": "Penn State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 174,
    "winner": "Gary Breece",
    "winner_school": "Oklahoma",
    "loser": "Bill Morgan",
    "loser_school": "Kent State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 175,
    "winner": "Tom Phillips",
    "winner_school": "Oregon State",
    "loser": "Paul Hetrick",
    "loser_school": "Gettysburg",
    "result": "MD 17-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 176,
    "winner": "Randy Miller",
    "winner_school": "Michigan State",
    "loser": "John Hobbs",
    "loser_school": "Indiana",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 177,
    "winner": "Jim Brown",
    "winner_school": "Michigan",
    "loser": "Mike Downer",
    "loser_school": "Washington",
    "result": "Fall 6:42"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 178,
    "winner": "Dale Brumit",
    "winner_school": "Arizona",
    "loser": "Mike Fowler",
    "loser_school": "Missouri",
    "result": "MD 23-3"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 261,
    "winner": "Dan Kida",
    "winner_school": "San Jose State",
    "loser": "Everett Gomez",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 262,
    "winner": "Bill Morgan",
    "winner_school": "Kent State",
    "loser": "Dave Amato",
    "loser_school": "Massachusetts",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 263,
    "winner": "Sal Lanuto",
    "winner_school": "Columbia",
    "loser": "Paul Hetrick",
    "loser_school": "Gettysburg",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "118",
    "bout": 264,
    "winner": "Mike Downer",
    "winner_school": "Washington",
    "loser": "John Price",
    "loser_school": "Utah State",
    "result": "MD 18-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 341,
    "winner": "Dan Sherman",
    "winner_school": "Iowa",
    "loser": "Stan Opp",
    "loser_school": "South Dakota State",
    "result": "MD 9-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 342,
    "winner": "Gary Breece",
    "winner_school": "Oklahoma",
    "loser": "Jack Spates",
    "loser_school": "Slippery Rock",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 343,
    "winner": "Tom Phillips",
    "winner_school": "Oregon State",
    "loser": "Randy Miller",
    "loser_school": "Michigan State",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 344,
    "winner": "Jim Brown",
    "winner_school": "Michigan",
    "loser": "Dale Brumit",
    "loser_school": "Arizona",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 381,
    "winner": "Dan Kida",
    "winner_school": "San Jose State",
    "loser": "Stan Opp",
    "loser_school": "South Dakota State",
    "result": "MD 11-3"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 382,
    "winner": "Jack Spates",
    "winner_school": "Slippery Rock",
    "loser": "Bill Morgan",
    "loser_school": "Kent State",
    "result": "MD 18-10"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 383,
    "winner": "Sal Lanuto",
    "winner_school": "Columbia",
    "loser": "Randy Miller",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR2",
    "weight": "118",
    "bout": 384,
    "winner": "Dale Brumit",
    "winner_school": "Arizona",
    "loser": "Mike Downer",
    "loser_school": "Washington",
    "result": "MD 18-6"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 421,
    "winner": "Dan Kida",
    "winner_school": "San Jose State",
    "loser": "Jack Spates",
    "loser_school": "Slippery Rock",
    "result": "Dec 11-4"
  },
  {
    "round": "SfConsR3",
    "weight": "118",
    "bout": 422,
    "winner": "Dale Brumit",
    "winner_school": "Arizona",
    "loser": "Sal Lanuto",
    "loser_school": "Columbia",
    "result": "MD 15-4"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 461,
    "winner": "Dan Sherman",
    "winner_school": "Iowa",
    "loser": "Gary Breece",
    "loser_school": "Oklahoma",
    "result": "Dec 8-7"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 462,
    "winner": "Tom Phillips",
    "winner_school": "Oregon State",
    "loser": "Jim Brown",
    "loser_school": "Michigan",
    "result": "Dec 3-3 UTB"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 481,
    "winner": "Jim Brown",
    "winner_school": "Michigan",
    "loser": "Dan Kida",
    "loser_school": "San Jose State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR4",
    "weight": "118",
    "bout": 482,
    "winner": "Dale Brumit",
    "winner_school": "Arizona",
    "loser": "Gary Breece",
    "loser_school": "Oklahoma",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 531,
    "winner": "Dan Kida",
    "winner_school": "San Jose State",
    "loser": "Gary Breece",
    "loser_school": "Oklahoma",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 541,
    "winner": "Jim Brown",
    "winner_school": "Michigan",
    "loser": "Dale Brumit",
    "loser_school": "Arizona",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 551,
    "winner": "Dan Sherman",
    "winner_school": "Iowa",
    "loser": "Tom Phillips",
    "loser_school": "Oregon State",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "John Berry",
    "winner_school": "Idaho State",
    "loser": "Scott Pucino",
    "loser_school": "Rhode Island",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "Dave Romero",
    "winner_school": "New Mexico",
    "loser": "Phil Steiner",
    "loser_school": "Rutgers",
    "result": "Dec 11-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2002,
    "winner": "Bill Davids",
    "winner_school": "Michigan",
    "loser": "Ray Ferrara",
    "loser_school": "American",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Mark Massery",
    "winner_school": "Northwestern",
    "loser": "John Berry",
    "loser_school": "Idaho State",
    "result": "MD 19-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Dave Groverman",
    "winner_school": "Penn",
    "loser": "Carlos Rodriquez",
    "loser_school": "California-Berkeley",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "John Smith",
    "winner_school": "Ball State",
    "loser": "Norm Hatchet",
    "loser_school": "Oklahoma",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Dan Monroe",
    "winner_school": "East Carolina",
    "loser": "Phil Reimnitz",
    "loser_school": "North Dakota State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Harold Wiley",
    "winner_school": "Cal State Fullerton",
    "loser": "Don Williams",
    "loser_school": "Drake",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Jim Rodriguez",
    "winner_school": "UCLA",
    "loser": "Jim Abbott",
    "loser_school": "Wisconsin",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Kerry Anderson",
    "winner_school": "Brigham Young",
    "loser": "Bill Jacoutot",
    "loser_school": "Buffalo",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Billy Martin",
    "winner_school": "Oklahoma State",
    "loser": "Dave Romero",
    "loser_school": "New Mexico",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "Bill Davids",
    "loser_school": "Michigan",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Dan Mello",
    "winner_school": "Portland State",
    "loser": "Bob Dalton",
    "loser_school": "Miami Ohio",
    "result": "Fall 7:52"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Pat Quinlan",
    "winner_school": "Central Michigan",
    "loser": "Bob Roberts",
    "loser_school": "Wilkes",
    "result": "MD 16-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Brad Jacot",
    "winner_school": "Washington",
    "loser": "Grant Kusuno",
    "loser_school": "Colorado",
    "result": "Fall 5:10"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Mike A. Jones",
    "winner_school": "Oregon State",
    "loser": "Tim Cysewski",
    "loser_school": "Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Chico Lutes",
    "winner_school": "Indiana State",
    "loser": "Keith Controneo",
    "loser_school": "Auburn",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Dave Wendall",
    "winner_school": "Virginia",
    "loser": "Ken Berger",
    "loser_school": "Navy",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Ron Glass",
    "winner_school": "Iowa State",
    "loser": "Oscar Trevino",
    "loser_school": "San Jose State",
    "result": "Fall 3:45"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 179,
    "winner": "Mark Massery",
    "winner_school": "Northwestern",
    "loser": "Dave Groverman",
    "loser_school": "Penn",
    "result": "Fall 7:04"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 180,
    "winner": "John Smith",
    "winner_school": "Ball State",
    "loser": "Dan Monroe",
    "loser_school": "East Carolina",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 181,
    "winner": "Jim Rodriguez",
    "winner_school": "UCLA",
    "loser": "Harold Wiley",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 182,
    "winner": "Billy Martin",
    "winner_school": "Oklahoma State",
    "loser": "Kerry Anderson",
    "loser_school": "Brigham Young",
    "result": "Fall 1:15"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 183,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "Dan Mello",
    "loser_school": "Portland State",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 184,
    "winner": "Pat Quinlan",
    "winner_school": "Central Michigan",
    "loser": "Brad Jacot",
    "loser_school": "Washington",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 185,
    "winner": "Mike A. Jones",
    "winner_school": "Oregon State",
    "loser": "Chico Lutes",
    "loser_school": "Indiana State",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 186,
    "winner": "Ron Glass",
    "winner_school": "Iowa State",
    "loser": "Dave Wendall",
    "loser_school": "Virginia",
    "result": "MD 16-6"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 265,
    "winner": "Dave Groverman",
    "winner_school": "Penn",
    "loser": "John Berry",
    "loser_school": "Idaho State",
    "result": "MD 14-1"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 266,
    "winner": "Dave Romero",
    "winner_school": "New Mexico",
    "loser": "Kerry Anderson",
    "loser_school": "Brigham Young",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 267,
    "winner": "Bill Davids",
    "winner_school": "Michigan",
    "loser": "Dan Mello",
    "loser_school": "Portland State",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR1",
    "weight": "126",
    "bout": 268,
    "winner": "Dave Wendall",
    "winner_school": "Virginia",
    "loser": "Oscar Trevino",
    "loser_school": "San Jose State",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 345,
    "winner": "Mark Massery",
    "winner_school": "Northwestern",
    "loser": "John Smith",
    "loser_school": "Ball State",
    "result": "MD 16-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 346,
    "winner": "Billy Martin",
    "winner_school": "Oklahoma State",
    "loser": "Jim Rodriguez",
    "loser_school": "UCLA",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 347,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "Pat Quinlan",
    "loser_school": "Central Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 348,
    "winner": "Ron Glass",
    "winner_school": "Iowa State",
    "loser": "Mike A. Jones",
    "loser_school": "Oregon State",
    "result": "Dec 13-8"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 385,
    "winner": "John Smith",
    "winner_school": "Ball State",
    "loser": "Dave Groverman",
    "loser_school": "Penn",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 386,
    "winner": "Jim Rodriguez",
    "winner_school": "UCLA",
    "loser": "Dave Romero",
    "loser_school": "New Mexico",
    "result": "MD 17-3"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 387,
    "winner": "Bill Davids",
    "winner_school": "Michigan",
    "loser": "Pat Quinlan",
    "loser_school": "Central Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR2",
    "weight": "126",
    "bout": 388,
    "winner": "Mike A. Jones",
    "winner_school": "Oregon State",
    "loser": "Dave Wendall",
    "loser_school": "Virginia",
    "result": "MD 13-4"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 423,
    "winner": "John Smith",
    "winner_school": "Ball State",
    "loser": "Jim Rodriguez",
    "loser_school": "UCLA",
    "result": "Dec 9-8"
  },
  {
    "round": "SfConsR3",
    "weight": "126",
    "bout": 424,
    "winner": "Bill Davids",
    "winner_school": "Michigan",
    "loser": "Mike A. Jones",
    "loser_school": "Oregon State",
    "result": "Dec 9-7"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 463,
    "winner": "Mark Massery",
    "winner_school": "Northwestern",
    "loser": "Billy Martin",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-0 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 464,
    "winner": "Ron Glass",
    "winner_school": "Iowa State",
    "loser": "John Fritz",
    "loser_school": "Penn State",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 483,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "John Smith",
    "loser_school": "Ball State",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR4",
    "weight": "126",
    "bout": 484,
    "winner": "Bill Davids",
    "winner_school": "Michigan",
    "loser": "Billy Martin",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 532,
    "winner": "Billy Martin",
    "winner_school": "Oklahoma State",
    "loser": "John Smith",
    "loser_school": "Ball State",
    "result": "Fall 1:48"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 542,
    "winner": "John Fritz",
    "winner_school": "Penn State",
    "loser": "Bill Davids",
    "loser_school": "Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 552,
    "winner": "Mark Massery",
    "winner_school": "Northwestern",
    "loser": "Ron Glass",
    "loser_school": "Iowa State",
    "result": "Dec 9-8"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 3,
    "winner": "Mike Turley",
    "winner_school": "Ohio State",
    "loser": "Mike McGonigal",
    "loser_school": "Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 1003,
    "winner": "Ron Miller",
    "winner_school": "Western Michigan",
    "loser": "Mario Ianni",
    "loser_school": "Rider",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "134",
    "bout": 2003,
    "winner": "Paul Danelo",
    "winner_school": "Washington State",
    "loser": "Jake Holloway",
    "loser_school": "Cincinnati",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Bill Fjetland",
    "winner_school": "Iowa State",
    "loser": "Ron Miller",
    "loser_school": "Western Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Dave Luke",
    "winner_school": "Oregon",
    "loser": "Gus Malavite",
    "loser_school": "Ohio",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Rick Freitas",
    "winner_school": "Boston University",
    "loser": "Bob Beck",
    "loser_school": "Pittsburgh",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Greg Maestas",
    "winner_school": "Western State",
    "loser": "Mark Belknap",
    "loser_school": "William & Mary",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Don Rohn",
    "winner_school": "Clarion",
    "loser": "Bob Ciarrocki",
    "loser_school": "Rutgers",
    "result": "MD 26-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Conrad Calendar",
    "winner_school": "Michigan State",
    "loser": "Bill Komoloske",
    "loser_school": "Colorado",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Jeff Gerry",
    "winner_school": "Fresno State",
    "loser": "Dennis Goldberg",
    "loser_school": "Indiana State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Larry Morgan",
    "winner_school": "Cal Poly",
    "loser": "Paul Danelo",
    "loser_school": "Washington State",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Bobby Stites",
    "winner_school": "Oklahoma State",
    "loser": "Mike Turley",
    "loser_school": "Ohio State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Steve Jones",
    "winner_school": "SIU-Carbondale",
    "loser": "Roy DeVore",
    "loser_school": "New Mexico",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Gary Christianson",
    "winner_school": "Drake",
    "loser": "Cesar Vasquez",
    "loser_school": "California-Berkeley",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Tom Sculley",
    "winner_school": "Lehigh",
    "loser": "Tom Harrington",
    "loser_school": "Boise State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "Jeff Guyton",
    "winner_school": "Michigan",
    "loser": "Bob Medina",
    "loser_school": "Penn State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Andre Allen",
    "winner_school": "Northwestern",
    "loser": "Gordon Iiams",
    "loser_school": "Oregon State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Wayne Jackson",
    "winner_school": "Kansas State",
    "loser": "Tim Vance",
    "loser_school": "Utah State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Laron Hansen",
    "winner_school": "Brigham Young",
    "loser": "Dave Cathey",
    "loser_school": "Auburn",
    "result": "Fall 5:59"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 187,
    "winner": "Bill Fjetland",
    "winner_school": "Iowa State",
    "loser": "Dave Luke",
    "loser_school": "Oregon",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 188,
    "winner": "Greg Maestas",
    "winner_school": "Western State",
    "loser": "Rick Freitas",
    "loser_school": "Boston University",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 189,
    "winner": "Don Rohn",
    "winner_school": "Clarion",
    "loser": "Conrad Calendar",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 190,
    "winner": "Larry Morgan",
    "winner_school": "Cal Poly",
    "loser": "Jeff Gerry",
    "loser_school": "Fresno State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 191,
    "winner": "Bobby Stites",
    "winner_school": "Oklahoma State",
    "loser": "Steve Jones",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 192,
    "winner": "Tom Sculley",
    "winner_school": "Lehigh",
    "loser": "Gary Christianson",
    "loser_school": "Drake",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 193,
    "winner": "Jeff Guyton",
    "winner_school": "Michigan",
    "loser": "Andre Allen",
    "loser_school": "Northwestern",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 194,
    "winner": "Laron Hansen",
    "winner_school": "Brigham Young",
    "loser": "Wayne Jackson",
    "loser_school": "Kansas State",
    "result": "MD 14-5"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 269,
    "winner": "Ron Miller",
    "winner_school": "Western Michigan",
    "loser": "Dave Luke",
    "loser_school": "Oregon",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 270,
    "winner": "Conrad Calendar",
    "winner_school": "Michigan State",
    "loser": "Bob Ciarrocki",
    "loser_school": "Rutgers",
    "result": "MD 11-3"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 271,
    "winner": "Steve Jones",
    "winner_school": "SIU-Carbondale",
    "loser": "Mike Turley",
    "loser_school": "Ohio State",
    "result": "Dec 8-6"
  },
  {
    "round": "SfConsR1",
    "weight": "134",
    "bout": 272,
    "winner": "Wayne Jackson",
    "winner_school": "Kansas State",
    "loser": "Dave Cathey",
    "loser_school": "Auburn",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 349,
    "winner": "Bill Fjetland",
    "winner_school": "Iowa State",
    "loser": "Greg Maestas",
    "loser_school": "Western State",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 350,
    "winner": "Don Rohn",
    "winner_school": "Clarion",
    "loser": "Larry Morgan",
    "loser_school": "Cal Poly",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 351,
    "winner": "Bobby Stites",
    "winner_school": "Oklahoma State",
    "loser": "Tom Sculley",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 352,
    "winner": "Laron Hansen",
    "winner_school": "Brigham Young",
    "loser": "Jeff Guyton",
    "loser_school": "Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 389,
    "winner": "Ron Miller",
    "winner_school": "Western Michigan",
    "loser": "Greg Maestas",
    "loser_school": "Western State",
    "result": "Dec 9-2"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 390,
    "winner": "Conrad Calendar",
    "winner_school": "Michigan State",
    "loser": "Larry Morgan",
    "loser_school": "Cal Poly",
    "result": "Dec 9-7"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 391,
    "winner": "Tom Sculley",
    "winner_school": "Lehigh",
    "loser": "Steve Jones",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 10-1 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "134",
    "bout": 392,
    "winner": "Jeff Guyton",
    "winner_school": "Michigan",
    "loser": "Wayne Jackson",
    "loser_school": "Kansas State",
    "result": "MD 11-1"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 425,
    "winner": "Conrad Calendar",
    "winner_school": "Michigan State",
    "loser": "Ron Miller",
    "loser_school": "Western Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "SfConsR3",
    "weight": "134",
    "bout": 426,
    "winner": "Jeff Guyton",
    "winner_school": "Michigan",
    "loser": "Tom Sculley",
    "loser_school": "Lehigh",
    "result": "Dec 8-7"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 465,
    "winner": "Don Rohn",
    "winner_school": "Clarion",
    "loser": "Bill Fjetland",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 466,
    "winner": "Bobby Stites",
    "winner_school": "Oklahoma State",
    "loser": "Laron Hansen",
    "loser_school": "Brigham Young",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 485,
    "winner": "Laron Hansen",
    "winner_school": "Brigham Young",
    "loser": "Conrad Calendar",
    "loser_school": "Michigan State",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR4",
    "weight": "134",
    "bout": 486,
    "winner": "Bill Fjetland",
    "winner_school": "Iowa State",
    "loser": "Jeff Guyton",
    "loser_school": "Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 533,
    "winner": "Jeff Guyton",
    "winner_school": "Michigan",
    "loser": "Conrad Calendar",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 543,
    "winner": "Laron Hansen",
    "winner_school": "Brigham Young",
    "loser": "Bill Fjetland",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 553,
    "winner": "Don Rohn",
    "winner_school": "Clarion",
    "loser": "Bobby Stites",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Dave Toth",
    "winner_school": "Ashland",
    "loser": "Steve Barkman",
    "loser_school": "Indiana State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Barry Snyder",
    "winner_school": "Penn State",
    "loser": "Joe Bold",
    "loser_school": "Oregon State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Ken Snyder",
    "winner_school": "Northern Iowa",
    "loser": "Harvey Cavayero",
    "loser_school": "Hofstra",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Brian Beatson",
    "winner_school": "Oklahoma",
    "loser": "Dale Spies",
    "loser_school": "Wisconsin",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Reed Fehlberg",
    "winner_school": "Brigham Young",
    "loser": "Lee Petersen",
    "loser_school": "North Dakota State",
    "result": "Dec 16-9"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Don Glass",
    "winner_school": "Iowa State",
    "loser": "Dennis Underkoffler",
    "loser_school": "Princeton",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Shuichi Shoji",
    "winner_school": "Oregon",
    "loser": "Greg Gruss",
    "loser_school": "Drake",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Tim Granowitz",
    "winner_school": "Florida",
    "loser": "John Zychowicz",
    "loser_school": "Toledo",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Tom Milkovich",
    "winner_school": "Michigan State",
    "loser": "Dave Toth",
    "loser_school": "Ashland",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Tim Williams",
    "winner_school": "Colorado State",
    "loser": "Dan Brown",
    "loser_school": "Central Michigan",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Rusty Cunningham",
    "winner_school": "SIU-Carbondale",
    "loser": "Keith Kovash",
    "loser_school": "Montana State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Bob McNeil",
    "winner_school": "California-Berkeley",
    "loser": "Kim Hagedorn",
    "loser_school": "Lehigh",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "David Domnick",
    "winner_school": "Oklahoma State",
    "loser": "Dean Armstrong",
    "loser_school": "Ohio State",
    "result": "MD 21-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Dan Muthler",
    "winner_school": "Navy",
    "loser": "Tom Kryzak",
    "loser_school": "Boston University",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Tom Lotko",
    "winner_school": "Nebraska",
    "loser": "Pete Holman",
    "loser_school": "Fresno State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Steve Daniels",
    "winner_school": "Portland State",
    "loser": "Rich Gautsch",
    "loser_school": "Minnesota",
    "result": "Fall 3:14"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "Tom Brown",
    "winner_school": "Washington",
    "loser": "Milt Sherman",
    "loser_school": "East Carolina",
    "result": "MD 19-0"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 195,
    "winner": "Barry Snyder",
    "winner_school": "Penn State",
    "loser": "Ken Snyder",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 196,
    "winner": "Reed Fehlberg",
    "winner_school": "Brigham Young",
    "loser": "Brian Beatson",
    "loser_school": "Oklahoma",
    "result": "Fall 2:10"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 197,
    "winner": "Shuichi Shoji",
    "winner_school": "Oregon",
    "loser": "Don Glass",
    "loser_school": "Iowa State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 198,
    "winner": "Tom Milkovich",
    "winner_school": "Michigan State",
    "loser": "Tim Granowitz",
    "loser_school": "Florida",
    "result": "Fall 6:28"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 199,
    "winner": "Tim Williams",
    "winner_school": "Colorado State",
    "loser": "Rusty Cunningham",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 200,
    "winner": "David Domnick",
    "winner_school": "Oklahoma State",
    "loser": "Bob McNeil",
    "loser_school": "California-Berkeley",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 201,
    "winner": "Dan Muthler",
    "winner_school": "Navy",
    "loser": "Tom Lotko",
    "loser_school": "Nebraska",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 202,
    "winner": "Tom Brown",
    "winner_school": "Washington",
    "loser": "Steve Daniels",
    "loser_school": "Portland State",
    "result": "Fall 1:06"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 273,
    "winner": "Lee Petersen",
    "winner_school": "North Dakota State",
    "loser": "Brian Beatson",
    "loser_school": "Oklahoma",
    "result": "Dec 10-4"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 274,
    "winner": "Tim Granowitz",
    "winner_school": "Florida",
    "loser": "Dave Toth",
    "loser_school": "Ashland",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 275,
    "winner": "Dan Brown",
    "winner_school": "Central Michigan",
    "loser": "Rusty Cunningham",
    "loser_school": "SIU-Carbondale",
    "result": "DEF"
  },
  {
    "round": "SfConsR1",
    "weight": "142",
    "bout": 276,
    "winner": "Tom Lotko",
    "winner_school": "Nebraska",
    "loser": "Tom Kryzak",
    "loser_school": "Boston University",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 353,
    "winner": "Reed Fehlberg",
    "winner_school": "Brigham Young",
    "loser": "Barry Snyder",
    "loser_school": "Penn State",
    "result": "Fall 5:25"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 354,
    "winner": "Tom Milkovich",
    "winner_school": "Michigan State",
    "loser": "Shuichi Shoji",
    "loser_school": "Oregon",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 355,
    "winner": "Tim Williams",
    "winner_school": "Colorado State",
    "loser": "David Domnick",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:51"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 356,
    "winner": "Dan Muthler",
    "winner_school": "Navy",
    "loser": "Tom Brown",
    "loser_school": "Washington",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 393,
    "winner": "Lee Petersen",
    "winner_school": "North Dakota State",
    "loser": "Barry Snyder",
    "loser_school": "Penn State",
    "result": "Dec 3-1"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 394,
    "winner": "Tim Granowitz",
    "winner_school": "Florida",
    "loser": "Shuichi Shoji",
    "loser_school": "Oregon",
    "result": "Dec 6-2"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 395,
    "winner": "David Domnick",
    "winner_school": "Oklahoma State",
    "loser": "Dan Brown",
    "loser_school": "Central Michigan",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR2",
    "weight": "142",
    "bout": 396,
    "winner": "Tom Brown",
    "winner_school": "Washington",
    "loser": "Tom Lotko",
    "loser_school": "Nebraska",
    "result": "Dec 9-6"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 427,
    "winner": "Lee Petersen",
    "winner_school": "North Dakota State",
    "loser": "Tim Granowitz",
    "loser_school": "Florida",
    "result": "Dec 4-1"
  },
  {
    "round": "SfConsR3",
    "weight": "142",
    "bout": 428,
    "winner": "Tom Brown",
    "winner_school": "Washington",
    "loser": "David Domnick",
    "loser_school": "Oklahoma State",
    "result": "Dec 15-10"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 467,
    "winner": "Reed Fehlberg",
    "winner_school": "Brigham Young",
    "loser": "Tom Milkovich",
    "loser_school": "Michigan State",
    "result": "Fall 5:20"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 468,
    "winner": "Dan Muthler",
    "winner_school": "Navy",
    "loser": "Tim Williams",
    "loser_school": "Colorado State",
    "result": "Fall 10:26 SV"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 487,
    "winner": "Lee Petersen",
    "winner_school": "North Dakota State",
    "loser": "Tim Williams",
    "loser_school": "Colorado State",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "SfConsR4",
    "weight": "142",
    "bout": 488,
    "winner": "Tom Brown",
    "winner_school": "Washington",
    "loser": "Tom Milkovich",
    "loser_school": "Michigan State",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 534,
    "winner": "Tim Williams",
    "winner_school": "Colorado State",
    "loser": "Tom Milkovich",
    "loser_school": "Michigan State",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 544,
    "winner": "Tom Brown",
    "winner_school": "Washington",
    "loser": "Lee Petersen",
    "loser_school": "North Dakota State",
    "result": "Fall 4:16"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 554,
    "winner": "Dan Muthler",
    "winner_school": "Navy",
    "loser": "Reed Fehlberg",
    "loser_school": "Brigham Young",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 5,
    "winner": "John Ruhlig",
    "winner_school": "Central Michigan",
    "loser": "Craig Deane",
    "loser_school": "UCLA",
    "result": "Dec 8-5"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 1005,
    "winner": "Dave Strauss",
    "winner_school": "Maryland",
    "loser": "Vane Overturff",
    "loser_school": "Drake",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "150",
    "bout": 2005,
    "winner": "Dean Dixon",
    "winner_school": "Oregon",
    "loser": "Mark Mayer",
    "loser_school": "Colorado",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Pete Galea",
    "winner_school": "Iowa State",
    "loser": "Dave Strauss",
    "loser_school": "Maryland",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Brian Oswald",
    "winner_school": "Ohio",
    "loser": "Ray Sarinelli",
    "loser_school": "Penn",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Don Jackson",
    "winner_school": "New Mexico",
    "loser": "John Brewer",
    "loser_school": "Ohio State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Mike Fitzpatrick",
    "winner_school": "Washington",
    "loser": "Tim Fisher",
    "loser_school": "Idaho State",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Larry Johnson",
    "winner_school": "Northern Illinois",
    "loser": "Gary Blosser",
    "loser_school": "Colorado State",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Bob Healy",
    "winner_school": "Marquette",
    "loser": "Bob Smith",
    "loser_school": "Nebraska",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Mike Mousetis",
    "winner_school": "Penn State",
    "loser": "Al Ordonez",
    "loser_school": "Eastern Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Jarrett Hubbard",
    "winner_school": "Michigan",
    "loser": "John Ruhlig",
    "loser_school": "Central Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Glenn Anderson",
    "winner_school": "Cal Poly",
    "loser": "Dean Dixon",
    "loser_school": "Oregon",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "Pat Moore",
    "loser_school": "Auburn",
    "result": "Fall 7:51"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Jim Callard",
    "winner_school": "Air Force",
    "loser": "Ralph Reish",
    "loser_school": "West Chester",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Ross Chaffin",
    "winner_school": "Navy",
    "loser": "Guy Morrison",
    "loser_school": "Long Beach State",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Steve Randall",
    "winner_school": "Oklahoma State",
    "loser": "Tom Cavanaugh",
    "loser_school": "Cleveland State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Dale Porter",
    "winner_school": "Cornell",
    "loser": "Greg Gamon",
    "loser_school": "Rhode Island",
    "result": "Fall 4:30"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Tom Marriott",
    "winner_school": "East Carolina",
    "loser": "Kevin Keller",
    "loser_school": "Cincinnati",
    "result": "Dec 9-5 TB"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 90,
    "winner": "Rich Lawinger",
    "winner_school": "Wisconsin",
    "loser": "Chris Horpel",
    "loser_school": "Stanford",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 203,
    "winner": "Brian Oswald",
    "winner_school": "Ohio",
    "loser": "Pete Galea",
    "loser_school": "Iowa State",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 204,
    "winner": "Mike Fitzpatrick",
    "winner_school": "Washington",
    "loser": "Don Jackson",
    "loser_school": "New Mexico",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 205,
    "winner": "Larry Johnson",
    "winner_school": "Northern Illinois",
    "loser": "Bob Healy",
    "loser_school": "Marquette",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 206,
    "winner": "Jarrett Hubbard",
    "winner_school": "Michigan",
    "loser": "Mike Mousetis",
    "loser_school": "Penn State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 207,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "Glenn Anderson",
    "loser_school": "Cal Poly",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 208,
    "winner": "Ross Chaffin",
    "winner_school": "Navy",
    "loser": "Jim Callard",
    "loser_school": "Air Force",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 209,
    "winner": "Steve Randall",
    "winner_school": "Oklahoma State",
    "loser": "Dale Porter",
    "loser_school": "Cornell",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 210,
    "winner": "Rich Lawinger",
    "winner_school": "Wisconsin",
    "loser": "Tom Marriott",
    "loser_school": "East Carolina",
    "result": "Fall 4:28"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 277,
    "winner": "Pete Galea",
    "winner_school": "Iowa State",
    "loser": "Ray Sarinelli",
    "loser_school": "Penn",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 278,
    "winner": "John Ruhlig",
    "winner_school": "Central Michigan",
    "loser": "Mike Mousetis",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 279,
    "winner": "Pat Moore",
    "winner_school": "Auburn",
    "loser": "Glenn Anderson",
    "loser_school": "Cal Poly",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "150",
    "bout": 280,
    "winner": "Chris Horpel",
    "winner_school": "Stanford",
    "loser": "Tom Marriott",
    "loser_school": "East Carolina",
    "result": "Fall 3:29"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 357,
    "winner": "Brian Oswald",
    "winner_school": "Ohio",
    "loser": "Mike Fitzpatrick",
    "loser_school": "Washington",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 358,
    "winner": "Jarrett Hubbard",
    "winner_school": "Michigan",
    "loser": "Larry Johnson",
    "loser_school": "Northern Illinois",
    "result": "Dec 1-1 UTB"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 359,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "Ross Chaffin",
    "loser_school": "Navy",
    "result": "Fall 7:22"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 360,
    "winner": "Rich Lawinger",
    "winner_school": "Wisconsin",
    "loser": "Steve Randall",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-5"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 397,
    "winner": "Mike Fitzpatrick",
    "winner_school": "Washington",
    "loser": "Pete Galea",
    "loser_school": "Iowa State",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 398,
    "winner": "Larry Johnson",
    "winner_school": "Northern Illinois",
    "loser": "John Ruhlig",
    "loser_school": "Central Michigan",
    "result": "Dec 14-7"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 399,
    "winner": "Pat Moore",
    "winner_school": "Auburn",
    "loser": "Ross Chaffin",
    "loser_school": "Navy",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR2",
    "weight": "150",
    "bout": 400,
    "winner": "Chris Horpel",
    "winner_school": "Stanford",
    "loser": "Steve Randall",
    "loser_school": "Oklahoma State",
    "result": "DEF"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 429,
    "winner": "Mike Fitzpatrick",
    "winner_school": "Washington",
    "loser": "Larry Johnson",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR3",
    "weight": "150",
    "bout": 430,
    "winner": "Chris Horpel",
    "winner_school": "Stanford",
    "loser": "Pat Moore",
    "loser_school": "Auburn",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 469,
    "winner": "Jarrett Hubbard",
    "winner_school": "Michigan",
    "loser": "Brian Oswald",
    "loser_school": "Ohio",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 470,
    "winner": "Rich Lawinger",
    "winner_school": "Wisconsin",
    "loser": "Dan Holm",
    "loser_school": "Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 489,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "Mike Fitzpatrick",
    "loser_school": "Washington",
    "result": "MD 13-4"
  },
  {
    "round": "SfConsR4",
    "weight": "150",
    "bout": 490,
    "winner": "Brian Oswald",
    "winner_school": "Ohio",
    "loser": "Chris Horpel",
    "loser_school": "Stanford",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 535,
    "winner": "Chris Horpel",
    "winner_school": "Stanford",
    "loser": "Mike Fitzpatrick",
    "loser_school": "Washington",
    "result": "Fall 1:11"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 545,
    "winner": "Dan Holm",
    "winner_school": "Iowa",
    "loser": "Brian Oswald",
    "loser_school": "Ohio",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 555,
    "winner": "Jarrett Hubbard",
    "winner_school": "Michigan",
    "loser": "Rich Lawinger",
    "loser_school": "Wisconsin",
    "result": "Dec 8-4"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Dan Chandler",
    "winner_school": "Minnesota",
    "loser": "Bob Hartman",
    "loser_school": "Navy",
    "result": "MD 9-1"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Ivar Moi",
    "winner_school": "Indiana State",
    "loser": "Chris Koll",
    "loser_school": "Penn State",
    "result": "Fall 7:05"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Allyn Cooke",
    "winner_school": "Cal Poly",
    "loser": "Dennis Jossi",
    "loser_school": "Oregon",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Pat Christenson",
    "winner_school": "Wisconsin",
    "loser": "John Allen",
    "loser_school": "Syracuse",
    "result": "MD 25-8"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Rod Kilgore",
    "winner_school": "Oklahoma",
    "loser": "Russ Paulsen",
    "loser_school": "Utah State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Marlin Grahn",
    "winner_school": "Portland State",
    "loser": "Tom Derrickson",
    "loser_school": "Virginia",
    "result": "Fall 6:21"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Jan Sanderson",
    "winner_school": "Iowa",
    "loser": "Pat Capone",
    "loser_school": "Marquette",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "George Landis",
    "winner_school": "Alabama",
    "loser": "Rick Santee",
    "loser_school": "Hofstra",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "John Showalter",
    "winner_school": "Iowa State",
    "loser": "Emmett Stanton",
    "loser_school": "Stanford",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Wade Schalles",
    "winner_school": "Clarion",
    "loser": "Ivar Moi",
    "loser_school": "Indiana State",
    "result": "Fall 1:32"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Mike R. Jones",
    "winner_school": "Oregon State",
    "loser": "Dan Chandler",
    "loser_school": "Minnesota",
    "result": "Fall 1:59"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Mark Hansen",
    "winner_school": "Brigham Young",
    "loser": "Jim Miller",
    "loser_school": "Brown",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Jody Smith",
    "winner_school": "Utah",
    "loser": "Jerry Nowakowski",
    "loser_school": "Buffalo",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Alan Albright",
    "winner_school": "Oklahoma State",
    "loser": "John Matthews",
    "loser_school": "Central Michigan",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Mitch Mendrygal",
    "winner_school": "Michigan",
    "loser": "John Chatman",
    "loser_school": "Pittsburgh",
    "result": "Fall 7:48"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Dave Chandler",
    "winner_school": "Boise State",
    "loser": "Bert Dalton",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Bob Tscholl",
    "winner_school": "Ohio",
    "loser": "Bruce Hall",
    "loser_school": "East Carolina",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "Hajime Shinjo",
    "winner_school": "Washington",
    "loser": "Tim Kerr",
    "loser_school": "San Jose State",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 211,
    "winner": "Allyn Cooke",
    "winner_school": "Cal Poly",
    "loser": "Pat Christenson",
    "loser_school": "Wisconsin",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 212,
    "winner": "Rod Kilgore",
    "winner_school": "Oklahoma",
    "loser": "Marlin Grahn",
    "loser_school": "Portland State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 213,
    "winner": "Jan Sanderson",
    "winner_school": "Iowa",
    "loser": "George Landis",
    "loser_school": "Alabama",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 214,
    "winner": "Wade Schalles",
    "winner_school": "Clarion",
    "loser": "John Showalter",
    "loser_school": "Iowa State",
    "result": "Fall 7:29"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 215,
    "winner": "Mike R. Jones",
    "winner_school": "Oregon State",
    "loser": "Mark Hansen",
    "loser_school": "Brigham Young",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 216,
    "winner": "Alan Albright",
    "winner_school": "Oklahoma State",
    "loser": "Jody Smith",
    "loser_school": "Utah",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 217,
    "winner": "Mitch Mendrygal",
    "winner_school": "Michigan",
    "loser": "Dave Chandler",
    "loser_school": "Boise State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 218,
    "winner": "Hajime Shinjo",
    "winner_school": "Washington",
    "loser": "Bob Tscholl",
    "loser_school": "Ohio",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 281,
    "winner": "Russ Paulsen",
    "winner_school": "Utah State",
    "loser": "Marlin Grahn",
    "loser_school": "Portland State",
    "result": "M FOR"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 282,
    "winner": "John Showalter",
    "winner_school": "Iowa State",
    "loser": "Ivar Moi",
    "loser_school": "Indiana State",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 283,
    "winner": "Mark Hansen",
    "winner_school": "Brigham Young",
    "loser": "Dan Chandler",
    "loser_school": "Minnesota",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "SfConsR1",
    "weight": "158",
    "bout": 284,
    "winner": "Bob Tscholl",
    "winner_school": "Ohio",
    "loser": "Tim Kerr",
    "loser_school": "San Jose State",
    "result": "M FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 361,
    "winner": "Rod Kilgore",
    "winner_school": "Oklahoma",
    "loser": "Allyn Cooke",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 362,
    "winner": "Wade Schalles",
    "winner_school": "Clarion",
    "loser": "Jan Sanderson",
    "loser_school": "Iowa",
    "result": "Fall 2:13"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 363,
    "winner": "Mike R. Jones",
    "winner_school": "Oregon State",
    "loser": "Alan Albright",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 364,
    "winner": "Hajime Shinjo",
    "winner_school": "Washington",
    "loser": "Mitch Mendrygal",
    "loser_school": "Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 401,
    "winner": "Allyn Cooke",
    "winner_school": "Cal Poly",
    "loser": "Russ Paulsen",
    "loser_school": "Utah State",
    "result": "Dec 5-0 TB"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 402,
    "winner": "John Showalter",
    "winner_school": "Iowa State",
    "loser": "Jan Sanderson",
    "loser_school": "Iowa",
    "result": "Dec 7-0"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 403,
    "winner": "Alan Albright",
    "winner_school": "Oklahoma State",
    "loser": "Mark Hansen",
    "loser_school": "Brigham Young",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR2",
    "weight": "158",
    "bout": 404,
    "winner": "Bob Tscholl",
    "winner_school": "Ohio",
    "loser": "Mitch Mendrygal",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 431,
    "winner": "Allyn Cooke",
    "winner_school": "Cal Poly",
    "loser": "John Showalter",
    "loser_school": "Iowa State",
    "result": "Dec 1-0 TB"
  },
  {
    "round": "SfConsR3",
    "weight": "158",
    "bout": 432,
    "winner": "Bob Tscholl",
    "winner_school": "Ohio",
    "loser": "Alan Albright",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 471,
    "winner": "Wade Schalles",
    "winner_school": "Clarion",
    "loser": "Rod Kilgore",
    "loser_school": "Oklahoma",
    "result": "Fall 0:38"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 472,
    "winner": "Mike R. Jones",
    "winner_school": "Oregon State",
    "loser": "Hajime Shinjo",
    "loser_school": "Washington",
    "result": "Fall 3:02"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 491,
    "winner": "Allyn Cooke",
    "winner_school": "Cal Poly",
    "loser": "Hajime Shinjo",
    "loser_school": "Washington",
    "result": "M FOR"
  },
  {
    "round": "SfConsR4",
    "weight": "158",
    "bout": 492,
    "winner": "Rod Kilgore",
    "winner_school": "Oklahoma",
    "loser": "Bob Tscholl",
    "loser_school": "Ohio",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 536,
    "winner": "Bob Tscholl",
    "winner_school": "Ohio",
    "loser": "Hajime Shinjo",
    "loser_school": "Washington",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 546,
    "winner": "Rod Kilgore",
    "winner_school": "Oklahoma",
    "loser": "Allyn Cooke",
    "loser_school": "Cal Poly",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 556,
    "winner": "Wade Schalles",
    "winner_school": "Clarion",
    "loser": "Mike R. Jones",
    "loser_school": "Oregon State",
    "result": "Dec 9-2"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "George Beene",
    "winner_school": "Ball State",
    "loser": "Kevin Michaels",
    "loser_school": "Virginia",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "Brady Hall",
    "winner_school": "UCLA",
    "loser": "Doug Stone",
    "loser_school": "Humboldt State",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Bill Simpson",
    "winner_school": "Clarion",
    "loser": "Bruce Hrycyk",
    "loser_school": "Ohio",
    "result": "Fall 7:19"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Joe Vento",
    "winner_school": "Rider",
    "loser": "Robin Richards",
    "loser_school": "Portland State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Chris Hurchanik",
    "winner_school": "California-Berkeley",
    "loser": "Bob Sacavage",
    "loser_school": "Columbia",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Ed Vatch",
    "winner_school": "Wisconsin",
    "loser": "Steve Ravenscroft",
    "loser_school": "Nebraska",
    "result": "Fall 6:55"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Brendt Noon",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Roger Ritzman",
    "winner_school": "Michigan",
    "loser": "Jim Urquhart",
    "loser_school": "Rhode Island",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Scott Moyer",
    "winner_school": "William & Mary",
    "loser": "Jim Majxner",
    "loser_school": "California-Santa Barbara",
    "result": "Fall 2:43"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Keith Abens",
    "winner_school": "Iowa State",
    "loser": "Brady Hall",
    "loser_school": "UCLA",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Doug Wyn",
    "winner_school": "Western Michigan",
    "loser": "George Beene",
    "loser_school": "Ball State",
    "result": "Dec 15-14"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Gerry Person",
    "winner_school": "South Dakota State",
    "loser": "Bruce Zindel",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Eric Knuutila",
    "winner_school": "Buffalo",
    "loser": "Steve Jentzen",
    "loser_school": "Colorado State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Jerry Villecco",
    "winner_school": "Penn State",
    "loser": "Duane Stutzman",
    "loser_school": "Oregon",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Mike Roberts",
    "winner_school": "Auburn",
    "loser": "Dennis Whimpey",
    "loser_school": "Brigham Young",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Don Stumpf",
    "winner_school": "SIU-Carbondale",
    "loser": "John Christensen",
    "loser_school": "Navy",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Mel Renfro",
    "winner_school": "Washington",
    "loser": "Dan Wagemann",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Steve Campbell",
    "loser_school": "Air Force",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 219,
    "winner": "Bill Simpson",
    "winner_school": "Clarion",
    "loser": "Joe Vento",
    "loser_school": "Rider",
    "result": "Fall 6:24"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 220,
    "winner": "Ed Vatch",
    "winner_school": "Wisconsin",
    "loser": "Chris Hurchanik",
    "loser_school": "California-Berkeley",
    "result": "Fall 0:38"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 221,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Roger Ritzman",
    "loser_school": "Michigan",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 222,
    "winner": "Keith Abens",
    "winner_school": "Iowa State",
    "loser": "Scott Moyer",
    "loser_school": "William & Mary",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 223,
    "winner": "Doug Wyn",
    "winner_school": "Western Michigan",
    "loser": "Gerry Person",
    "loser_school": "South Dakota State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 224,
    "winner": "Jerry Villecco",
    "winner_school": "Penn State",
    "loser": "Eric Knuutila",
    "loser_school": "Buffalo",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 225,
    "winner": "Don Stumpf",
    "winner_school": "SIU-Carbondale",
    "loser": "Mike Roberts",
    "loser_school": "Auburn",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 226,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Mel Renfro",
    "loser_school": "Washington",
    "result": "MD 19-2"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Bruce Hrycyk",
    "winner_school": "Ohio",
    "loser": "Joe Vento",
    "loser_school": "Rider",
    "result": "MD 10-2"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Scott Moyer",
    "winner_school": "William & Mary",
    "loser": "Brady Hall",
    "loser_school": "UCLA",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "George Beene",
    "winner_school": "Ball State",
    "loser": "Gerry Person",
    "loser_school": "South Dakota State",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Mel Renfro",
    "winner_school": "Washington",
    "loser": "Steve Campbell",
    "loser_school": "Air Force",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 365,
    "winner": "Bill Simpson",
    "winner_school": "Clarion",
    "loser": "Ed Vatch",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 366,
    "winner": "Keith Abens",
    "winner_school": "Iowa State",
    "loser": "Terry DeStito",
    "loser_school": "Lehigh",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 367,
    "winner": "Doug Wyn",
    "winner_school": "Western Michigan",
    "loser": "Jerry Villecco",
    "loser_school": "Penn State",
    "result": "MD 15-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 368,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Don Stumpf",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 3-0"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 405,
    "winner": "Bruce Hrycyk",
    "winner_school": "Ohio",
    "loser": "Ed Vatch",
    "loser_school": "Wisconsin",
    "result": "Dec 7-6"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 406,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Scott Moyer",
    "loser_school": "William & Mary",
    "result": "Dec 5-1"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 407,
    "winner": "George Beene",
    "winner_school": "Ball State",
    "loser": "Jerry Villecco",
    "loser_school": "Penn State",
    "result": "Dec 12-6"
  },
  {
    "round": "SfConsR2",
    "weight": "167",
    "bout": 408,
    "winner": "Don Stumpf",
    "winner_school": "SIU-Carbondale",
    "loser": "Mel Renfro",
    "loser_school": "Washington",
    "result": "Fall 5:48"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 433,
    "winner": "Terry DeStito",
    "winner_school": "Lehigh",
    "loser": "Bruce Hrycyk",
    "loser_school": "Ohio",
    "result": "Dec 10-3"
  },
  {
    "round": "SfConsR3",
    "weight": "167",
    "bout": 434,
    "winner": "Don Stumpf",
    "winner_school": "SIU-Carbondale",
    "loser": "George Beene",
    "loser_school": "Ball State",
    "result": "Dec 10-4"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 473,
    "winner": "Bill Simpson",
    "winner_school": "Clarion",
    "loser": "Keith Abens",
    "loser_school": "Iowa State",
    "result": "Dec 12-5"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 474,
    "winner": "Doug Wyn",
    "winner_school": "Western Michigan",
    "loser": "Jeff Callard",
    "loser_school": "Oklahoma",
    "result": "Fall 0:33"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 493,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Terry DeStito",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR4",
    "weight": "167",
    "bout": 494,
    "winner": "Keith Abens",
    "winner_school": "Iowa State",
    "loser": "Don Stumpf",
    "loser_school": "SIU-Carbondale",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 537,
    "winner": "Don Stumpf",
    "winner_school": "SIU-Carbondale",
    "loser": "Terry DeStito",
    "loser_school": "Lehigh",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 547,
    "winner": "Jeff Callard",
    "winner_school": "Oklahoma",
    "loser": "Keith Abens",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 557,
    "winner": "Bill Simpson",
    "winner_school": "Clarion",
    "loser": "Doug Wyn",
    "loser_school": "Western Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 8,
    "winner": "Frank Lyman",
    "winner_school": "Hofstra",
    "loser": "Mike Barklarcz",
    "loser_school": "Duquesne",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "177",
    "bout": 1008,
    "winner": "Kelly Bledsoe",
    "winner_school": "Portland State",
    "loser": "Ed Hamilton",
    "loser_school": "Buffalo",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Rick Jones",
    "winner_school": "Oklahoma State",
    "loser": "Tim Roosa",
    "loser_school": "Utah State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Garry Castelli",
    "winner_school": "Alabama",
    "loser": "Pat McCall",
    "loser_school": "Maryland",
    "result": "Fall 4:10"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Bill Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Eldon Hosey",
    "loser_school": "Central Michigan",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Larry Loerch",
    "winner_school": "Navy",
    "loser": "Bill Murdock",
    "loser_school": "Washington",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Bill Bragg",
    "winner_school": "Colorado",
    "loser": "Jim Kulpa",
    "loser_school": "Western Illinois",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Jeff Zindel",
    "winner_school": "Michigan State",
    "loser": "Jeff Minard",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Gene Barber",
    "winner_school": "College of New Jersey",
    "loser": "John Needham",
    "loser_school": "Utah",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 130,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "Kelly Bledsoe",
    "loser_school": "Portland State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "John Panning",
    "winner_school": "Minnesota",
    "loser": "Frank Lyman",
    "loser_school": "Hofstra",
    "result": "Fall 3:22"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Stu Horowitz",
    "winner_school": "Rhode Island",
    "loser": "Dan Brenneman",
    "loser_school": "Penn State",
    "result": "Fall 7:05"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Warren Reid",
    "winner_school": "Oklahoma",
    "loser": "John White",
    "loser_school": "UCLA",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Bill Hill",
    "winner_school": "East Carolina",
    "loser": "Barry Reighard",
    "loser_school": "Ohio",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "Rich Binek",
    "winner_school": "Iowa State",
    "loser": "Nage Damas",
    "loser_school": "Army",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Scott Manley",
    "winner_school": "Montana State",
    "loser": "Rick Fronberry",
    "loser_school": "Marquette",
    "result": "MD 21-6"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Bill Knippel",
    "winner_school": "Seattle Pacific",
    "loser": "Laurent Soucie",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 138,
    "winner": "Albert Sye",
    "winner_school": "Arizona",
    "loser": "Mike McIntyre",
    "loser_school": "California-Berkeley",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 227,
    "winner": "Rick Jones",
    "winner_school": "Oklahoma State",
    "loser": "Garry Castelli",
    "loser_school": "Alabama",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 228,
    "winner": "Bill Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Larry Loerch",
    "loser_school": "Navy",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 229,
    "winner": "Bill Bragg",
    "winner_school": "Colorado",
    "loser": "Jeff Zindel",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 230,
    "winner": "Gene Barber",
    "winner_school": "College of New Jersey",
    "loser": "Jim Crumley",
    "loser_school": "Oregon State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 231,
    "winner": "Stu Horowitz",
    "winner_school": "Rhode Island",
    "loser": "John Panning",
    "loser_school": "Minnesota",
    "result": "Fall 2:38"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 232,
    "winner": "Warren Reid",
    "winner_school": "Oklahoma",
    "loser": "Bill Hill",
    "loser_school": "East Carolina",
    "result": "Dec 3-0 TB"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 233,
    "winner": "Rich Binek",
    "winner_school": "Iowa State",
    "loser": "Scott Manley",
    "loser_school": "Montana State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 234,
    "winner": "Bill Knippel",
    "winner_school": "Seattle Pacific",
    "loser": "Albert Sye",
    "loser_school": "Arizona",
    "result": "Dec 4-0"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 289,
    "winner": "Larry Loerch",
    "winner_school": "Navy",
    "loser": "Eldon Hosey",
    "loser_school": "Central Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 290,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "John Needham",
    "loser_school": "Utah",
    "result": "MD 11-2"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 291,
    "winner": "Bill Hill",
    "winner_school": "East Carolina",
    "loser": "John White",
    "loser_school": "UCLA",
    "result": "Fall 4:25"
  },
  {
    "round": "SfConsR1",
    "weight": "177",
    "bout": 292,
    "winner": "Nage Damas",
    "winner_school": "Army",
    "loser": "Scott Manley",
    "loser_school": "Montana State",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 369,
    "winner": "Bill Reinbolt",
    "winner_school": "Ohio State",
    "loser": "Rick Jones",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 370,
    "winner": "Gene Barber",
    "winner_school": "College of New Jersey",
    "loser": "Bill Bragg",
    "loser_school": "Colorado",
    "result": "Dec 12-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 371,
    "winner": "Warren Reid",
    "winner_school": "Oklahoma",
    "loser": "Stu Horowitz",
    "loser_school": "Rhode Island",
    "result": "Fall 7:09"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 372,
    "winner": "Rich Binek",
    "winner_school": "Iowa State",
    "loser": "Bill Knippel",
    "loser_school": "Seattle Pacific",
    "result": "Dec 10-5"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 409,
    "winner": "Rick Jones",
    "winner_school": "Oklahoma State",
    "loser": "Larry Loerch",
    "loser_school": "Navy",
    "result": "Dec 11-5"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 410,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "Bill Bragg",
    "loser_school": "Colorado",
    "result": "Dec 8-2"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 411,
    "winner": "Bill Hill",
    "winner_school": "East Carolina",
    "loser": "Stu Horowitz",
    "loser_school": "Rhode Island",
    "result": "MD 13-5"
  },
  {
    "round": "SfConsR2",
    "weight": "177",
    "bout": 412,
    "winner": "Bill Knippel",
    "winner_school": "Seattle Pacific",
    "loser": "Nage Damas",
    "loser_school": "Army",
    "result": "MD 10-1"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 435,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "Rick Jones",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR3",
    "weight": "177",
    "bout": 436,
    "winner": "Bill Knippel",
    "winner_school": "Seattle Pacific",
    "loser": "Bill Hill",
    "loser_school": "East Carolina",
    "result": "MD 8-0"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 475,
    "winner": "Gene Barber",
    "winner_school": "College of New Jersey",
    "loser": "Bill Reinbolt",
    "loser_school": "Ohio State",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 476,
    "winner": "Rich Binek",
    "winner_school": "Iowa State",
    "loser": "Warren Reid",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 495,
    "winner": "Warren Reid",
    "winner_school": "Oklahoma",
    "loser": "Jim Crumley",
    "loser_school": "Oregon State",
    "result": "Dec 8-7"
  },
  {
    "round": "SfConsR4",
    "weight": "177",
    "bout": 496,
    "winner": "Bill Knippel",
    "winner_school": "Seattle Pacific",
    "loser": "Bill Reinbolt",
    "loser_school": "Ohio State",
    "result": "Dec 5-1"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 538,
    "winner": "Jim Crumley",
    "winner_school": "Oregon State",
    "loser": "Bill Reinbolt",
    "loser_school": "Ohio State",
    "result": "MD 15-1"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 548,
    "winner": "Bill Knippel",
    "winner_school": "Seattle Pacific",
    "loser": "Warren Reid",
    "loser_school": "Oklahoma",
    "result": "Fall 4:59"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 558,
    "winner": "Rich Binek",
    "winner_school": "Iowa State",
    "loser": "Gene Barber",
    "loser_school": "College of New Jersey",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 9,
    "winner": "Mike Woelffer",
    "winner_school": "Illinois State",
    "loser": "Nate Kempler",
    "loser_school": "Purdue",
    "result": "Dec 12-6"
  },
  {
    "round": "Prelims",
    "weight": "190",
    "bout": 1009,
    "winner": "George Calloway",
    "winner_school": "Auburn",
    "loser": "Pat Mulhern",
    "loser_school": "Delaware",
    "result": "Fall 6:50"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Russ Johnson",
    "winner_school": "Ohio",
    "loser": "Neal Brendel",
    "loser_school": "Yale",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Kirk Thorburn",
    "winner_school": "California-Berkeley",
    "loser": "John Buxton",
    "loser_school": "Montana",
    "result": "Fall 3:48"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Dan Jones",
    "winner_school": "Marquette",
    "loser": "Kevin Quigley",
    "loser_school": "Oklahoma",
    "result": "Fall 5:36"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "Ben Ohai",
    "winner_school": "Brigham Young",
    "loser": "Jerry Guth",
    "loser_school": "Wisconsin",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Craig Tritch",
    "winner_school": "Pittsburgh",
    "loser": "John Berg",
    "loser_school": "Fresno State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Keith Leland",
    "winner_school": "Cal Poly",
    "loser": "Milke Furniss",
    "loser_school": "William & Mary",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "John Bell",
    "winner_school": "Nebraska",
    "loser": "Joel Savage",
    "loser_school": "Utah",
    "result": "Fall 1:24"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Greg Strobel",
    "winner_school": "Oregon State",
    "loser": "Mike Woelffer",
    "loser_school": "Illinois State",
    "result": "Fall 6:19"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Al Nacin",
    "winner_school": "Iowa State",
    "loser": "George Calloway",
    "loser_school": "Auburn",
    "result": "Fall 3:51"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Tom Lowe",
    "winner_school": "North Dakota State",
    "loser": "Tom Swoyer",
    "loser_school": "Drake",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Jeff Simons",
    "winner_school": "Navy",
    "loser": "Fred Penrod",
    "loser_school": "Iowa",
    "result": "Fall 9:48 SV"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Wes Hines",
    "winner_school": "Oregon",
    "loser": "Rich Ragan",
    "loser_school": "Maryland",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Johnny Johnson",
    "winner_school": "Northern Illinois",
    "loser": "Alex Macaluso",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:08"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Martin Roberts",
    "winner_school": "Portland State",
    "loser": "Jim Contreato",
    "loser_school": "Dartmouth",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Bill Allen",
    "winner_school": "Washington",
    "loser": "Rich Zweig",
    "loser_school": "Penn",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 154,
    "winner": "Fletcher Carr",
    "winner_school": "Tampa",
    "loser": "Evan Johnson",
    "loser_school": "Minnesota",
    "result": "Fall 2:17"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 235,
    "winner": "Russ Johnson",
    "winner_school": "Ohio",
    "loser": "Kirk Thorburn",
    "loser_school": "California-Berkeley",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 236,
    "winner": "Ben Ohai",
    "winner_school": "Brigham Young",
    "loser": "Dan Jones",
    "loser_school": "Marquette",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 237,
    "winner": "Craig Tritch",
    "winner_school": "Pittsburgh",
    "loser": "Keith Leland",
    "loser_school": "Cal Poly",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 238,
    "winner": "Greg Strobel",
    "winner_school": "Oregon State",
    "loser": "John Bell",
    "loser_school": "Nebraska",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 239,
    "winner": "Al Nacin",
    "winner_school": "Iowa State",
    "loser": "Tom Lowe",
    "loser_school": "North Dakota State",
    "result": "MD 16-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 240,
    "winner": "Jeff Simons",
    "winner_school": "Navy",
    "loser": "Wes Hines",
    "loser_school": "Oregon",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 241,
    "winner": "Johnny Johnson",
    "winner_school": "Northern Illinois",
    "loser": "Martin Roberts",
    "loser_school": "Portland State",
    "result": "Fall 7:10"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 242,
    "winner": "Fletcher Carr",
    "winner_school": "Tampa",
    "loser": "Bill Allen",
    "loser_school": "Washington",
    "result": "Dec 6-3"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 293,
    "winner": "Kirk Thorburn",
    "winner_school": "California-Berkeley",
    "loser": "Neal Brendel",
    "loser_school": "Yale",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 294,
    "winner": "John Bell",
    "winner_school": "Nebraska",
    "loser": "Mike Woelffer",
    "loser_school": "Illinois State",
    "result": "Fall 5:51"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 295,
    "winner": "George Calloway",
    "winner_school": "Auburn",
    "loser": "Tom Lowe",
    "loser_school": "North Dakota State",
    "result": "Dec 4-2"
  },
  {
    "round": "SfConsR1",
    "weight": "190",
    "bout": 296,
    "winner": "Alex Macaluso",
    "winner_school": "Oklahoma State",
    "loser": "Martin Roberts",
    "loser_school": "Portland State",
    "result": "Fall 3:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 373,
    "winner": "Russ Johnson",
    "winner_school": "Ohio",
    "loser": "Ben Ohai",
    "loser_school": "Brigham Young",
    "result": "Dec 14-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 374,
    "winner": "Greg Strobel",
    "winner_school": "Oregon State",
    "loser": "Craig Tritch",
    "loser_school": "Pittsburgh",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 375,
    "winner": "Al Nacin",
    "winner_school": "Iowa State",
    "loser": "Jeff Simons",
    "loser_school": "Navy",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 376,
    "winner": "Johnny Johnson",
    "winner_school": "Northern Illinois",
    "loser": "Fletcher Carr",
    "loser_school": "Tampa",
    "result": "MD 12-3"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 413,
    "winner": "Ben Ohai",
    "winner_school": "Brigham Young",
    "loser": "Kirk Thorburn",
    "loser_school": "California-Berkeley",
    "result": "Dec 5-2"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 414,
    "winner": "John Bell",
    "winner_school": "Nebraska",
    "loser": "Craig Tritch",
    "loser_school": "Pittsburgh",
    "result": "M FOR"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 415,
    "winner": "George Calloway",
    "winner_school": "Auburn",
    "loser": "Jeff Simons",
    "loser_school": "Navy",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR2",
    "weight": "190",
    "bout": 416,
    "winner": "Fletcher Carr",
    "winner_school": "Tampa",
    "loser": "Alex Macaluso",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:05"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 437,
    "winner": "Ben Ohai",
    "winner_school": "Brigham Young",
    "loser": "John Bell",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "SfConsR3",
    "weight": "190",
    "bout": 438,
    "winner": "Fletcher Carr",
    "winner_school": "Tampa",
    "loser": "George Calloway",
    "loser_school": "Auburn",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 477,
    "winner": "Greg Strobel",
    "winner_school": "Oregon State",
    "loser": "Russ Johnson",
    "loser_school": "Ohio",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 478,
    "winner": "Johnny Johnson",
    "winner_school": "Northern Illinois",
    "loser": "Al Nacin",
    "loser_school": "Iowa State",
    "result": "Fall 0:58"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 497,
    "winner": "Ben Ohai",
    "winner_school": "Brigham Young",
    "loser": "Al Nacin",
    "loser_school": "Iowa State",
    "result": "Dec 8-4"
  },
  {
    "round": "SfConsR4",
    "weight": "190",
    "bout": 498,
    "winner": "Fletcher Carr",
    "winner_school": "Tampa",
    "loser": "Russ Johnson",
    "loser_school": "Ohio",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 539,
    "winner": "Al Nacin",
    "winner_school": "Iowa State",
    "loser": "Russ Johnson",
    "loser_school": "Ohio",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 549,
    "winner": "Ben Ohai",
    "winner_school": "Brigham Young",
    "loser": "Fletcher Carr",
    "loser_school": "Tampa",
    "result": "MD 13-4"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 559,
    "winner": "Greg Strobel",
    "winner_school": "Oregon State",
    "loser": "Johnny Johnson",
    "loser_school": "Northern Illinois",
    "result": "Dec 11-7"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 10,
    "winner": "George Ireland",
    "winner_school": "Massachusetts",
    "loser": "Bill Demeroutis",
    "loser_school": "Washington State",
    "result": "Fall 4:48"
  },
  {
    "round": "Prelims",
    "weight": "UNL",
    "bout": 1010,
    "winner": "Tony Policare",
    "winner_school": "Buffalo",
    "loser": "Chuck Coryea",
    "loser_school": "Clarion",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 155,
    "winner": "Milt Seals",
    "winner_school": "New Mexico",
    "loser": "Tom Trettin",
    "loser_school": "Army",
    "result": "Fall 1:48"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 156,
    "winner": "Dave Simonson",
    "winner_school": "Minnesota",
    "loser": "Frank Barnhart",
    "loser_school": "Cal Poly",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 157,
    "winner": "Jeff Class",
    "winner_school": "Nebraska",
    "loser": "Mark Pohern",
    "loser_school": "East Carolina",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 158,
    "winner": "Joel Kislin",
    "winner_school": "Hofstra",
    "loser": "Don Jackson",
    "loser_school": "San Jose State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 159,
    "winner": "Tom Hazell",
    "winner_school": "Oklahoma State",
    "loser": "Russ Ranno",
    "loser_school": "Ohio",
    "result": "Fall 3:34"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 160,
    "winner": "Pete Lee",
    "winner_school": "Ball State",
    "loser": "Forrest Waugh",
    "loser_school": "Ohio State",
    "result": "Fall 0:39"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 161,
    "winner": "Joel Puleo",
    "winner_school": "Duke",
    "loser": "Terry Gorman",
    "loser_school": "UCLA",
    "result": "Fall 3:22"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 162,
    "winner": "Chris Taylor",
    "winner_school": "Iowa State",
    "loser": "Tony Policare",
    "loser_school": "Buffalo",
    "result": "Fall 2:26"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 163,
    "winner": "Gary Ernst",
    "winner_school": "Michigan",
    "loser": "George Ireland",
    "loser_school": "Massachusetts",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 164,
    "winner": "Gil Damiani",
    "winner_school": "Northern Michigan",
    "loser": "Tom Cook",
    "loser_school": "Missouri",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 165,
    "winner": "Bob Poweski",
    "winner_school": "Kent State",
    "loser": "Ken Westfall",
    "loser_school": "Brigham Young",
    "result": "Dec 4-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 166,
    "winner": "Tim Karpoff",
    "winner_school": "Yale",
    "loser": "Steve Combs",
    "loser_school": "Northern Arizona",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 167,
    "winner": "Rick Meinders",
    "winner_school": "Utah State",
    "loser": "Dave Graves",
    "loser_school": "Washington",
    "result": "Dec 5-0 TB"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 168,
    "winner": "Charlie Getty",
    "winner_school": "Penn State",
    "loser": "Jay Achterhoff",
    "loser_school": "Notre Dame",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 169,
    "winner": "Jim Waschek",
    "winner_school": "Iowa",
    "loser": "Don Bonner",
    "loser_school": "Drake",
    "result": "Fall 2:22"
  },
  {
    "round": "ChampR1",
    "weight": "UNL",
    "bout": 170,
    "winner": "Jim Hagen",
    "winner_school": "Oregon State",
    "loser": "Bob Walker",
    "loser_school": "Alabama",
    "result": "Fall 4:53"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 243,
    "winner": "Dave Simonson",
    "winner_school": "Minnesota",
    "loser": "Milt Seals",
    "loser_school": "New Mexico",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 244,
    "winner": "Joel Kislin",
    "winner_school": "Hofstra",
    "loser": "Jeff Class",
    "loser_school": "Nebraska",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 245,
    "winner": "Tom Hazell",
    "winner_school": "Oklahoma State",
    "loser": "Pete Lee",
    "loser_school": "Ball State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 246,
    "winner": "Chris Taylor",
    "winner_school": "Iowa State",
    "loser": "Joel Puleo",
    "loser_school": "Duke",
    "result": "Fall 3:28"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 247,
    "winner": "Gary Ernst",
    "winner_school": "Michigan",
    "loser": "Gil Damiani",
    "loser_school": "Northern Michigan",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 248,
    "winner": "Tim Karpoff",
    "winner_school": "Yale",
    "loser": "Bob Poweski",
    "loser_school": "Kent State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 249,
    "winner": "Charlie Getty",
    "winner_school": "Penn State",
    "loser": "Rick Meinders",
    "loser_school": "Utah State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "UNL",
    "bout": 250,
    "winner": "Jim Hagen",
    "winner_school": "Oregon State",
    "loser": "Jim Waschek",
    "loser_school": "Iowa",
    "result": "MD 8-0"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 297,
    "winner": "Don Jackson",
    "winner_school": "San Jose State",
    "loser": "Jeff Class",
    "loser_school": "Nebraska",
    "result": "Dec 7-0"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 298,
    "winner": "Tony Policare",
    "winner_school": "Buffalo",
    "loser": "Joel Puleo",
    "loser_school": "Duke",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 299,
    "winner": "Gil Damiani",
    "winner_school": "Northern Michigan",
    "loser": "George Ireland",
    "loser_school": "Massachusetts",
    "result": "Fall 3:31"
  },
  {
    "round": "SfConsR1",
    "weight": "UNL",
    "bout": 300,
    "winner": "Bob Walker",
    "winner_school": "Alabama",
    "loser": "Jim Waschek",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 377,
    "winner": "Joel Kislin",
    "winner_school": "Hofstra",
    "loser": "Dave Simonson",
    "loser_school": "Minnesota",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 378,
    "winner": "Chris Taylor",
    "winner_school": "Iowa State",
    "loser": "Tom Hazell",
    "loser_school": "Oklahoma State",
    "result": "Fall 2:39"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 379,
    "winner": "Gary Ernst",
    "winner_school": "Michigan",
    "loser": "Tim Karpoff",
    "loser_school": "Yale",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "UNL",
    "bout": 380,
    "winner": "Jim Hagen",
    "winner_school": "Oregon State",
    "loser": "Charlie Getty",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 417,
    "winner": "Dave Simonson",
    "winner_school": "Minnesota",
    "loser": "Don Jackson",
    "loser_school": "San Jose State",
    "result": "Dec 0-0 UTB"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 418,
    "winner": "Tom Hazell",
    "winner_school": "Oklahoma State",
    "loser": "Tony Policare",
    "loser_school": "Buffalo",
    "result": "Dec 10-3"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 419,
    "winner": "Tim Karpoff",
    "winner_school": "Yale",
    "loser": "Gil Damiani",
    "loser_school": "Northern Michigan",
    "result": "Dec 2-1"
  },
  {
    "round": "SfConsR2",
    "weight": "UNL",
    "bout": 420,
    "winner": "Charlie Getty",
    "winner_school": "Penn State",
    "loser": "Bob Walker",
    "loser_school": "Alabama",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 439,
    "winner": "Tom Hazell",
    "winner_school": "Oklahoma State",
    "loser": "Dave Simonson",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "SfConsR3",
    "weight": "UNL",
    "bout": 440,
    "winner": "Charlie Getty",
    "winner_school": "Penn State",
    "loser": "Tim Karpoff",
    "loser_school": "Yale",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 479,
    "winner": "Chris Taylor",
    "winner_school": "Iowa State",
    "loser": "Joel Kislin",
    "loser_school": "Hofstra",
    "result": "Fall 1:00"
  },
  {
    "round": "SemiFinals",
    "weight": "UNL",
    "bout": 480,
    "winner": "Jim Hagen",
    "winner_school": "Oregon State",
    "loser": "Gary Ernst",
    "loser_school": "Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 499,
    "winner": "Gary Ernst",
    "winner_school": "Michigan",
    "loser": "Tom Hazell",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "SfConsR4",
    "weight": "UNL",
    "bout": 500,
    "winner": "Joel Kislin",
    "winner_school": "Hofstra",
    "loser": "Charlie Getty",
    "loser_school": "Penn State",
    "result": "Fall 5:59"
  },
  {
    "round": "5thPlace",
    "weight": "UNL",
    "bout": 540,
    "winner": "Charlie Getty",
    "winner_school": "Penn State",
    "loser": "Tom Hazell",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "UNL",
    "bout": 550,
    "winner": "Joel Kislin",
    "winner_school": "Hofstra",
    "loser": "Gary Ernst",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "UNL",
    "bout": 560,
    "winner": "Chris Taylor",
    "winner_school": "Iowa State",
    "loser": "Jim Hagen",
    "loser_school": "Oregon State",
    "result": "Fall 4:19"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
