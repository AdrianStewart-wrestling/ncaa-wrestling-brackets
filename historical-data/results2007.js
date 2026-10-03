// 2007 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 2007 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results2007-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Kyle Anson",
    "winner_school": "Northern Iowa",
    "loser": "Eric Albright",
    "loser_school": "Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Jacob Yost",
    "winner_school": "Chattanooga",
    "loser": "Zac Fryling",
    "loser_school": "West Virginia",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Daniel Atondo",
    "winner_school": "CSU Bakersfield",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Matt Maciag",
    "winner_school": "Wisconsin",
    "loser": "John Heleniak",
    "loser_school": "Millersville",
    "result": "Dec 9-6"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Cornelius Murray",
    "winner_school": "VMI",
    "loser": "James Gibson",
    "loser_school": "Edinboro",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Chris Cowen",
    "winner_school": "Drexel",
    "loser": "Patrick Walker",
    "loser_school": "Liberty",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Javier Maldonado",
    "loser_school": "Chattanooga",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Mark McKnight",
    "winner_school": "Penn State",
    "loser": "Matt Fisk",
    "loser_school": "Lehigh",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Ode Blanc",
    "winner_school": "Lock Haven",
    "loser": "Chad Sportelli",
    "loser_school": "Kent State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Gabe Flores",
    "winner_school": "Illinois",
    "loser": "Eric Hoffman",
    "loser_school": "North Dakota State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Charlie Falck",
    "winner_school": "Iowa",
    "loser": "Marcos Orozco",
    "loser_school": "UC Davis",
    "result": "TF 15-0 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Steve Mytych",
    "winner_school": "Drexel",
    "loser": "Matt Eveleth",
    "loser_school": "Penn",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Tyler Shinn",
    "winner_school": "Oklahoma State",
    "loser": "Fernando Martinez",
    "loser_school": "Army",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Taylor Cummings",
    "loser_school": "NC State",
    "result": "Fall 2:28"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Brandon Kinney",
    "loser_school": "Columbia",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Nick Ramirez",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Dave Tomasette",
    "winner_school": "Hofstra",
    "loser": "Anthony Mustari",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Patrick Castillo",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Mike Sees",
    "winner_school": "Bloomsburg",
    "loser": "Nick Fanthorpe",
    "loser_school": "Iowa State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Collin Cudd",
    "winner_school": "Wisconsin",
    "loser": "Eric Stevenson",
    "loser_school": "Oregon State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Christian Smith",
    "loser_school": "Liberty",
    "result": "Fall 2:39"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Dan Mitcheff",
    "loser_school": "Kent State",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Dave Marble",
    "winner_school": "Bucknell",
    "loser": "Tyler Dillashaw",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Seth Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Chris Staylor",
    "loser_school": "Old Dominion",
    "result": "Fall 3:52"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Matt Keller",
    "winner_school": "Chattanooga",
    "loser": "Kyle Anson",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Robbie Preston",
    "winner_school": "Harvard",
    "loser": "T.J. Enright",
    "loser_school": "Ohio State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Mario Galanakis",
    "winner_school": "Iowa",
    "loser": "Conor Beebe",
    "loser_school": "Central Michigan",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Omar Gaitan",
    "loser_school": "UC Davis",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Adam Frey",
    "loser_school": "Cornell",
    "result": "Fall 2:41"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Jake Strayer",
    "winner_school": "Penn State",
    "loser": "Lou Ruggirello",
    "loser_school": "Hofstra",
    "result": "Fall 6:19"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Drew Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Cory VomBaur",
    "loser_school": "Wyoming",
    "result": "Fall 4:40"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Richard Donald",
    "loser_school": "Bloomsburg",
    "result": "Fall 5:36"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Evan Sola",
    "loser_school": "North Carolina",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Andrae Hernandez",
    "winner_school": "Indiana",
    "loser": "Mark Budd",
    "loser_school": "Buffalo",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Bobby Pfennings",
    "loser_school": "Oregon State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Matt Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Mitch Mueller",
    "winner_school": "Iowa State",
    "loser": "Eric Kruger",
    "loser_school": "Central Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Kenneth Hashimoto",
    "loser_school": "Northern Colorado",
    "result": "Fall 0:28"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Dave Roberts",
    "loser_school": "Cal Poly",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Don Fisch",
    "winner_school": "Rider",
    "loser": "Dominick Moyer",
    "loser_school": "Nebraska",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Casio Pero",
    "winner_school": "Illinois",
    "loser": "Daryl Cocozzo",
    "loser_school": "Edinboro",
    "result": "FOR"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Manny Rivera",
    "winner_school": "Minnesota",
    "loser": "Matt Schumm",
    "loser_school": "CSU Bakersfield",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Max Meltzer",
    "loser_school": "Harvard",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Darren Kern",
    "loser_school": "Bloomsburg",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Alex Tsirtsis",
    "winner_school": "Iowa",
    "loser": "Justin Pearch",
    "loser_school": "Oregon",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Brandon Rader",
    "winner_school": "West Virginia",
    "loser": "Kyle Borshoff",
    "loser_school": "American",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Michael Keefe",
    "winner_school": "Chattanooga",
    "loser": "Kyle Ruschell",
    "loser_school": "Wisconsin",
    "result": "Dec 12-10"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Kyle Terry",
    "winner_school": "Oklahoma",
    "loser": "Tim Hamer",
    "loser_school": "Liberty",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "C.J. Ettelson",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:46"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Jordan Burroughs",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Matt Dunn",
    "loser_school": "Columbia",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Tyler Turner",
    "winner_school": "Wisconsin",
    "loser": "Morgan Atkinson",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Aaron Martin",
    "winner_school": "Chattanooga",
    "loser": "Joe Caramanica",
    "loser_school": "NC State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Sam Alvarenga",
    "loser_school": "VMI",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Ryan Adams",
    "loser_school": "North Dakota State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Josh Wagner",
    "winner_school": "Missouri",
    "loser": "Jake Patacsil",
    "loser_school": "Purdue",
    "result": "Fall 6:25"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Mike Kessler",
    "loser_school": "Rider",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Brandon Doyle",
    "loser_school": "CSU Bakersfield",
    "result": "MD 19-10"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Ryan Hurley",
    "winner_school": "Cleveland State",
    "loser": "Cody Becker",
    "loser_school": "Millersville",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Michael Roberts",
    "loser_school": "Boston University",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Carter Downing",
    "loser_school": "Wyoming",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Scott Ervin",
    "winner_school": "Appalachian State",
    "loser": "Derek Kipperberg",
    "loser_school": "Oregon State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "John Cox",
    "loser_school": "Navy",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Matt Coughlin",
    "winner_school": "Indiana",
    "loser": "David Jauregui",
    "loser_school": "West Virginia",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "Jermaine Thompson",
    "loser_school": "Eastern Michigan",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Matt Dragon",
    "loser_school": "Penn",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Ryan Hluschak",
    "winner_school": "Drexel",
    "loser": "Ryan Morningstar",
    "loser_school": "Iowa",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Chris Oliver",
    "winner_school": "Nebraska",
    "loser": "Jacob Frerichs",
    "loser_school": "Ohio",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Josh Zupancic",
    "winner_school": "Stanford",
    "loser": "Seth Martin",
    "loser_school": "Lock Haven",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Chase Pami",
    "loser_school": "Cal Poly",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Will Rowe",
    "winner_school": "Oklahoma",
    "loser": "Matt Hill",
    "loser_school": "Edinboro",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "John Jarred",
    "winner_school": "Navy",
    "loser": "Victer Crenshaw",
    "loser_school": "Cleveland State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Cody Midlam",
    "loser_school": "Duquesne",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "James Strouse",
    "winner_school": "Hofstra",
    "loser": "Tyler Sherley",
    "loser_school": "Boise State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Bubba Jenkins",
    "winner_school": "Penn State",
    "loser": "Michael Chandler",
    "loser_school": "Missouri",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Dave Nakasone",
    "loser_school": "Lehigh",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Jarrett Hostetter",
    "loser_school": "Millersville",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Craig Henning",
    "winner_school": "Wisconsin",
    "loser": "Devin Mesanko",
    "loser_school": "Columbia",
    "result": "Fall 6:52"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Jacob Yost",
    "loser_school": "Chattanooga",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Nate Galloway",
    "winner_school": "Rider",
    "loser": "Jacob Murphy",
    "loser_school": "Purdue",
    "result": "Fall 1:11"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "Newly McSpadden",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Daniel Atondo",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 1:12"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Justin Fraga",
    "winner_school": "Purdue",
    "loser": "Tim Sayers",
    "loser_school": "Chattanooga",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Nick Pullano",
    "loser_school": "Old Dominion",
    "result": "Fall 5:49"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Tyler Safratowich",
    "winner_school": "Minnesota",
    "loser": "Steve Anceravage",
    "loser_school": "Cornell",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Nick Baima",
    "winner_school": "Northern Iowa",
    "loser": "Shawn Kitchner",
    "loser_school": "Brown",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Jason Kiessling",
    "winner_school": "Maryland",
    "loser": "John Galloway",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Smith-Bergsrud",
    "winner_school": "Illinois",
    "loser": "Bryan Tice",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Sean Richmond",
    "loser_school": "Pittsburgh",
    "result": "Fall 1:56"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Eric Decker",
    "loser_school": "Virginia Tech",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Brian Perry",
    "loser_school": "Stanford",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Mike Miller",
    "winner_school": "Central Michigan",
    "loser": "Patrick Pitsch",
    "loser_school": "Arizona State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Chris Vondruska",
    "loser_school": "Ohio State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Deonte Penn",
    "winner_school": "Edinboro",
    "loser": "Max Dean",
    "loser_school": "Indiana",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Stephen Dwyer",
    "loser_school": "Nebraska",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Zack Shanaman",
    "winner_school": "Penn",
    "loser": "Ryan Meyer",
    "loser_school": "South Dakota State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Dustin Noack",
    "loser_school": "UC Davis",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Lloyd Rogers",
    "loser_school": "Chattanooga",
    "result": "Fall 2:54"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Gabriel Dretsch",
    "winner_school": "Minnesota",
    "loser": "Nathan Lee",
    "loser_school": "Boise State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Doug Umbehauer",
    "loser_school": "Rider",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Nick Hayes",
    "winner_school": "Northwestern",
    "loser": "Matt Stolpinski",
    "loser_school": "Navy",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Eric Luedke",
    "winner_school": "Iowa",
    "loser": "Grant Turner",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Kenny Robertson",
    "winner_school": "Eastern Illinois",
    "loser": "Kurt Brenner",
    "loser_school": "West Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Randy Rueda",
    "winner_school": "American",
    "loser": "Luke Feist",
    "loser_school": "Stanford",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "James Yonushonis",
    "winner_school": "Penn State",
    "loser": "Neal Martin",
    "loser_school": "Appalachian State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Steve Luke",
    "loser_school": "Michigan",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Joey Hooker",
    "winner_school": "Cornell",
    "loser": "Joe Lowe",
    "loser_school": "UNC Greensboro",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Jeremy Larson",
    "winner_school": "Oregon State",
    "loser": "Nick Kozar",
    "loser_school": "Drexel",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Kenneth Cook",
    "winner_school": "UC Davis",
    "loser": "Trevor Perry",
    "loser_school": "Indiana",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Joshua Weitzel",
    "winner_school": "Oklahoma",
    "loser": "Brandon Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Alex Dolly",
    "loser_school": "Northern Iowa",
    "result": "Fall 6:07"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Matt Maciag",
    "winner_school": "Wisconsin",
    "loser": "Joshua Patterson",
    "loser_school": "Binghamton",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Keith Gavin",
    "winner_school": "Pittsburgh",
    "loser": "Ronnie Lee",
    "loser_school": "Oregon",
    "result": "Fall 3:36"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Greg Gifford",
    "loser_school": "Arizona State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Antonio Miranda",
    "winner_school": "Navy",
    "loser": "Jared Ricotta",
    "loser_school": "Duquesne",
    "result": "Fall 3:20"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Christian Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Joe Rovelli",
    "winner_school": "Hofstra",
    "loser": "Greg Perz",
    "loser_school": "Eastern Illinois",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Trevor Brandvold",
    "loser_school": "Wisconsin",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "David Craig",
    "winner_school": "Lehigh",
    "loser": "Nathan Shirk",
    "loser_school": "Bloomsburg",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Tyler Todd",
    "winner_school": "Michigan",
    "loser": "Josh Edmondson",
    "loser_school": "Chattanooga",
    "result": "MD 20-7"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Zack Giesen",
    "loser_school": "Stanford",
    "result": "Fall 6:24"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Ryan Burk",
    "winner_school": "Northern Illinois",
    "loser": "John Dergo",
    "loser_school": "Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Lior Zamir",
    "loser_school": "Penn",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "Marc Bennett",
    "loser_school": "Indiana",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Louis Caputo",
    "winner_school": "Harvard",
    "loser": "Michael Miller",
    "loser_school": "Rider",
    "result": "TF 17-2 5:53"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Shawn Vincent",
    "winner_school": "Northern Colorado",
    "loser": "Kyle Bressler",
    "loser_school": "Oregon State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Jack Jensen",
    "loser_school": "Oklahoma State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Brandon Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Max Askren",
    "loser_school": "Missouri",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Nick Roy",
    "winner_school": "Michigan",
    "loser": "Eric Lapotsky",
    "loser_school": "Bucknell",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Jacob Bryce",
    "loser_school": "North Dakota State",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Nathan Moore",
    "loser_school": "Purdue",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "T.J. Morrison",
    "loser_school": "Rider",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Dallas Herbst",
    "winner_school": "Wisconsin",
    "loser": "Sam Wendland",
    "loser_school": "Wyoming",
    "result": "Fall 2:59"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Travis Gardner",
    "winner_school": "Oregon State",
    "loser": "Jeremie Cook",
    "loser_school": "Lock Haven",
    "result": "Fall 2:53"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Ryan Goodman",
    "loser_school": "NC State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Mike Tamillow",
    "winner_school": "Northwestern",
    "loser": "Matt Cassidy",
    "loser_school": "Lehigh",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Matt Monteiro",
    "loser_school": "Cal Poly",
    "result": "Fall 3:57"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Chris Weidman",
    "winner_school": "Hofstra",
    "loser": "Dustin Porter",
    "loser_school": "Gardner-Webb",
    "result": "Fall 1:09"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Jared Villers",
    "winner_school": "West Virginia",
    "loser": "J.D. Bergman",
    "loser_school": "Ohio State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "David Mendoza",
    "loser_school": "Old Dominion",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Jason Trulson",
    "loser_school": "Arizona State",
    "result": "Dec 7-3 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Patrick Bond",
    "winner_school": "Illinois",
    "loser": "Cornelius Murray",
    "loser_school": "VMI",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Andrew Anderson",
    "loser_school": "Northern Illinois",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Jared Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Rashad Goff",
    "winner_school": "Cleveland State",
    "loser": "Zach Hammond",
    "loser_school": "Cornell",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Mike Spaid",
    "winner_school": "Bloomsburg",
    "loser": "Josh Buuck",
    "loser_school": "Indiana",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Janior Palma",
    "winner_school": "NC State",
    "loser": "Chris Cowen",
    "loser_school": "Drexel",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Ty Watterson",
    "winner_school": "Oregon State",
    "loser": "Jermail Porter",
    "loser_school": "Kent State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Wade Sauer",
    "winner_school": "Cal State Fullerton",
    "loser": "Kyle Massey",
    "loser_school": "Wisconsin",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "A.J. Brooks",
    "loser_school": "Clarion",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Paul Weibel",
    "loser_school": "Lehigh",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Bubba Gritter",
    "winner_school": "Central Michigan",
    "loser": "Colton Nichols",
    "loser_school": "CSU Bakersfield",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Matt Koz",
    "winner_school": "Chattanooga",
    "loser": "John Wise",
    "loser_school": "Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Dustin Rogers",
    "winner_school": "West Virginia",
    "loser": "Spencer Nadolsky",
    "loser_school": "North Carolina",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Ed Prendergast",
    "winner_school": "Navy",
    "loser": "David Zabriskie",
    "loser_school": "Iowa State",
    "result": "Fall 1:20"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Matt Fields",
    "winner_school": "Iowa",
    "loser": "Nathan Thobaden",
    "loser_school": "Army",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "Cody Parker",
    "loser_school": "Cal Poly",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Joe Fendone",
    "winner_school": "Edinboro",
    "loser": "Reece Hopkin",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Aaron Anspach",
    "winner_school": "Penn State",
    "loser": "Levon Mock",
    "loser_school": "Brown",
    "result": "MD 13-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Rob Tate",
    "winner_school": "Gardner-Webb",
    "loser": "Omar Gaitan",
    "loser_school": "UC Davis",
    "result": "MD 19-7"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Jacob Murphy",
    "winner_school": "Purdue",
    "loser": "Jonny Bonilla-Bowman",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Dustin Noack",
    "winner_school": "UC Davis",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Ronnie Lee",
    "winner_school": "Oregon",
    "loser": "John Heleniak",
    "loser_school": "Millersville",
    "result": "MD 12-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Eric Lapotsky",
    "winner_school": "Bucknell",
    "loser": "James Gibson",
    "loser_school": "Edinboro",
    "result": "Fall 1:28"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Patrick Walker",
    "winner_school": "Liberty",
    "loser": "Nathan Thobaden",
    "loser_school": "Army",
    "result": "Fall 4:23"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Mark McKnight",
    "loser_school": "Penn State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Ode Blanc",
    "winner_school": "Lock Haven",
    "loser": "Gabe Flores",
    "loser_school": "Illinois",
    "result": "Fall 4:54"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Charlie Falck",
    "winner_school": "Iowa",
    "loser": "Steve Mytych",
    "loser_school": "Drexel",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Tyler Shinn",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:17"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Brandon Precin",
    "loser_school": "Northwestern",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Dave Tomasette",
    "loser_school": "Hofstra",
    "result": "Fall 5:26"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Mike Sees",
    "loser_school": "Bloomsburg",
    "result": "Fall 5:31"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Collin Cudd",
    "loser_school": "Wisconsin",
    "result": "Fall 1:25"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Javier Maldonado",
    "winner_school": "Chattanooga",
    "loser": "Matt Fisk",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Chad Sportelli",
    "winner_school": "Kent State",
    "loser": "Eric Hoffman",
    "loser_school": "North Dakota State",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Marcos Orozco",
    "winner_school": "UC Davis",
    "loser": "Matt Eveleth",
    "loser_school": "Penn",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Fernando Martinez",
    "winner_school": "Army",
    "loser": "Taylor Cummings",
    "loser_school": "NC State",
    "result": "Fall 5:45"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Brandon Kinney",
    "winner_school": "Columbia",
    "loser": "Nick Ramirez",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Patrick Castillo",
    "winner_school": "Northern Illinois",
    "loser": "Anthony Mustari",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Nick Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Eric Stevenson",
    "winner_school": "Oregon State",
    "loser": "Christian Smith",
    "loser_school": "Liberty",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Dave Marble",
    "loser_school": "Bucknell",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Tyler McCormick",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Matt Keller",
    "winner_school": "Chattanooga",
    "loser": "Robbie Preston",
    "loser_school": "Harvard",
    "result": "Fall 4:47"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Mario Galanakis",
    "loser_school": "Iowa",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Jake Strayer",
    "winner_school": "Penn State",
    "loser": "Nick Gallick",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Zach Tanelli",
    "loser_school": "Wisconsin",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Andrae Hernandez",
    "loser_school": "Indiana",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Mark Budd",
    "winner_school": "Buffalo",
    "loser": "Bobby Pfennings",
    "loser_school": "Oregon State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Richard Donald",
    "loser_school": "Bloomsburg",
    "result": "Fall 2:48"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Eric Albright",
    "winner_school": "Virginia",
    "loser": "Drew Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Adam Frey",
    "winner_school": "Cornell",
    "loser": "Lou Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Conor Beebe",
    "winner_school": "Central Michigan",
    "loser": "Rob Tate",
    "loser_school": "Gardner-Webb",
    "result": "Fall 2:38"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "T.J. Enright",
    "winner_school": "Ohio State",
    "loser": "Kyle Anson",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Chris Staylor",
    "winner_school": "Old Dominion",
    "loser": "Seth Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Dan Mitcheff",
    "winner_school": "Kent State",
    "loser": "Tyler Dillashaw",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Mitch Mueller",
    "loser_school": "Iowa State",
    "result": "Fall 2:17"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Andy Simmons",
    "loser_school": "Michigan State",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Don Fisch",
    "winner_school": "Rider",
    "loser": "Casio Pero",
    "loser_school": "Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Manny Rivera",
    "winner_school": "Minnesota",
    "loser": "Matt Kyler",
    "loser_school": "Army",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "J Jaggers",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Alex Tsirtsis",
    "loser_school": "Iowa",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Michael Keefe",
    "winner_school": "Chattanooga",
    "loser": "Brandon Rader",
    "loser_school": "West Virginia",
    "result": "Dec 14-13"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Kyle Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Matt Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Eric Kruger",
    "loser_school": "Central Michigan",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Dave Roberts",
    "winner_school": "Cal Poly",
    "loser": "Kenneth Hashimoto",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Dominick Moyer",
    "winner_school": "Nebraska",
    "loser": "Daryl Cocozzo",
    "loser_school": "Edinboro",
    "result": "FOR"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Darren Kern",
    "winner_school": "Bloomsburg",
    "loser": "Justin Pearch",
    "loser_school": "Oregon",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Kyle Borshoff",
    "loser_school": "American",
    "result": "Dec 8-7 TB"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "C.J. Ettelson",
    "winner_school": "Northern Iowa",
    "loser": "Tim Hamer",
    "loser_school": "Liberty",
    "result": "Fall 2:51"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Tyler Turner",
    "winner_school": "Wisconsin",
    "loser": "Aaron Martin",
    "loser_school": "Chattanooga",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Dan Vallimont",
    "loser_school": "Penn State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Josh Wagner",
    "loser_school": "Missouri",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Ryan Hurley",
    "loser_school": "Cleveland State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Cyler Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Scott Ervin",
    "loser_school": "Appalachian State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Matt Coughlin",
    "winner_school": "Indiana",
    "loser": "Matt Storniolo",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Matt Dunn",
    "loser_school": "Columbia",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Morgan Atkinson",
    "winner_school": "Cal State Fullerton",
    "loser": "Joe Caramanica",
    "loser_school": "NC State",
    "result": "DEF"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Ryan Adams",
    "winner_school": "North Dakota State",
    "loser": "Sam Alvarenga",
    "loser_school": "VMI",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "Mike Kessler",
    "loser_school": "Rider",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Brandon Doyle",
    "winner_school": "CSU Bakersfield",
    "loser": "Cody Becker",
    "loser_school": "Millersville",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Michael Roberts",
    "winner_school": "Boston University",
    "loser": "Carter Downing",
    "loser_school": "Wyoming",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "John Cox",
    "winner_school": "Navy",
    "loser": "Derek Kipperberg",
    "loser_school": "Oregon State",
    "result": "Fall 5:31"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "David Jauregui",
    "winner_school": "West Virginia",
    "loser": "Jermaine Thompson",
    "loser_school": "Eastern Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Ryan Hluschak",
    "loser_school": "Drexel",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Josh Zupancic",
    "winner_school": "Stanford",
    "loser": "Chris Oliver",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Will Rowe",
    "loser_school": "Oklahoma",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "John Jarred",
    "loser_school": "Navy",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "James Strouse",
    "winner_school": "Hofstra",
    "loser": "Bubba Jenkins",
    "loser_school": "Penn State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Brandon Becker",
    "loser_school": "Indiana",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Craig Henning",
    "winner_school": "Wisconsin",
    "loser": "Moza Fay",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "Nate Galloway",
    "loser_school": "Rider",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Jacob Murphy",
    "winner_school": "Purdue",
    "loser": "Newly McSpadden",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Jacob Yost",
    "winner_school": "Chattanooga",
    "loser": "Devin Mesanko",
    "loser_school": "Columbia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Dave Nakasone",
    "winner_school": "Lehigh",
    "loser": "Jarrett Hostetter",
    "loser_school": "Millersville",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Tyler Sherley",
    "loser_school": "Boise State",
    "result": "Fall 2:33"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Kurt Gross",
    "winner_school": "Kent State",
    "loser": "Cody Midlam",
    "loser_school": "Duquesne",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Matt Hill",
    "winner_school": "Edinboro",
    "loser": "Chase Pami",
    "loser_school": "Cal Poly",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Seth Martin",
    "winner_school": "Lock Haven",
    "loser": "Zac Fryling",
    "loser_school": "West Virginia",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Matt Dragon",
    "loser_school": "Penn",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Justin Fraga",
    "loser_school": "Purdue",
    "result": "TF 20-5 6:00"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Tyler Safratowich",
    "loser_school": "Minnesota",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Nick Baima",
    "winner_school": "Northern Iowa",
    "loser": "Jason Kiessling",
    "loser_school": "Maryland",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Smith-Bergsrud",
    "loser_school": "Illinois",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Andrew Rendos",
    "loser_school": "Bucknell",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Mike Miller",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Deonte Penn",
    "winner_school": "Edinboro",
    "loser": "Michael Cannon",
    "loser_school": "American",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Zack Shanaman",
    "loser_school": "Penn",
    "result": "Fall 1:53"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Dustin Noack",
    "winner_school": "UC Davis",
    "loser": "Ryan Meyer",
    "loser_school": "South Dakota State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Max Dean",
    "loser_school": "Indiana",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Chris Vondruska",
    "loser_school": "Ohio State",
    "result": "Fall 3:53"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Eric Decker",
    "winner_school": "Virginia Tech",
    "loser": "Brian Perry",
    "loser_school": "Stanford",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Bryan Tice",
    "winner_school": "Cal State Fullerton",
    "loser": "Sean Richmond",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "John Galloway",
    "winner_school": "Northern Illinois",
    "loser": "Shawn Kitchner",
    "loser_school": "Brown",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Nick Pullano",
    "loser_school": "Old Dominion",
    "result": "Fall 2:30"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Daniel Atondo",
    "winner_school": "CSU Bakersfield",
    "loser": "Tim Sayers",
    "loser_school": "Chattanooga",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Gabriel Dretsch",
    "loser_school": "Minnesota",
    "result": "Fall 4:51"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Nick Hayes",
    "loser_school": "Northwestern",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Eric Luedke",
    "winner_school": "Iowa",
    "loser": "Kenny Robertson",
    "loser_school": "Eastern Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Randy Rueda",
    "winner_school": "American",
    "loser": "James Yonushonis",
    "loser_school": "Penn State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Joey Hooker",
    "loser_school": "Cornell",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Jeremy Larson",
    "winner_school": "Oregon State",
    "loser": "Kenneth Cook",
    "loser_school": "UC Davis",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Joshua Weitzel",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Keith Gavin",
    "winner_school": "Pittsburgh",
    "loser": "Matt Maciag",
    "loser_school": "Wisconsin",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Daniel Burk",
    "winner_school": "Northern Illinois",
    "loser": "Joshua Patterson",
    "loser_school": "Binghamton",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Alex Dolly",
    "loser_school": "Northern Iowa",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Mike Letts",
    "winner_school": "Maryland",
    "loser": "Trevor Perry",
    "loser_school": "Indiana",
    "result": "Fall 1:41"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Joe Lowe",
    "loser_school": "UNC Greensboro",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Phil Moricone",
    "winner_school": "Edinboro",
    "loser": "Neal Martin",
    "loser_school": "Appalachian State",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Kurt Brenner",
    "winner_school": "West Virginia",
    "loser": "Grant Turner",
    "loser_school": "Iowa State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Doug Umbehauer",
    "loser_school": "Rider",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Lloyd Rogers",
    "winner_school": "Chattanooga",
    "loser": "Nathan Lee",
    "loser_school": "Boise State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Antonio Miranda",
    "loser_school": "Navy",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Christian Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Joe Rovelli",
    "loser_school": "Hofstra",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Rocco Caponi",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Tyler Todd",
    "winner_school": "Michigan",
    "loser": "David Craig",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Josh Arnone",
    "winner_school": "Cornell",
    "loser": "Mike Pucillo",
    "loser_school": "Ohio State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Ryan Burk",
    "loser_school": "Northern Illinois",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "Louis Caputo",
    "loser_school": "Harvard",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Shawn Vincent",
    "loser_school": "Northern Colorado",
    "result": "Fall 1:44"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Greg Gifford",
    "winner_school": "Arizona State",
    "loser": "Jared Ricotta",
    "loser_school": "Duquesne",
    "result": "MD 15-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Greg Perz",
    "loser_school": "Eastern Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Nathan Shirk",
    "winner_school": "Bloomsburg",
    "loser": "Josh Edmondson",
    "loser_school": "Chattanooga",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Lior Zamir",
    "loser_school": "Penn",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Marc Bennett",
    "winner_school": "Indiana",
    "loser": "Michael Miller",
    "loser_school": "Rider",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Jack Jensen",
    "winner_school": "Oklahoma State",
    "loser": "Kyle Bressler",
    "loser_school": "Oregon State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Nick Roy",
    "winner_school": "Michigan",
    "loser": "Brandon Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Joel Flaggert",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "Dallas Herbst",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Travis Gardner",
    "loser_school": "Oregon State",
    "result": "Fall 4:30"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Mike Tamillow",
    "winner_school": "Northwestern",
    "loser": "Hudson Taylor",
    "loser_school": "Maryland",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Chris Weidman",
    "winner_school": "Hofstra",
    "loser": "Jared Villers",
    "loser_school": "West Virginia",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Wynn Michalak",
    "loser_school": "Central Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Patrick Bond",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Cornelius Murray",
    "winner_school": "VMI",
    "loser": "Andrew Anderson",
    "loser_school": "Northern Illinois",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Jason Trulson",
    "winner_school": "Arizona State",
    "loser": "David Mendoza",
    "loser_school": "Old Dominion",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Dustin Porter",
    "loser_school": "Gardner-Webb",
    "result": "Fall 1:45"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Matt Monteiro",
    "winner_school": "Cal Poly",
    "loser": "Matt Cassidy",
    "loser_school": "Lehigh",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Ryan Goodman",
    "winner_school": "NC State",
    "loser": "Jeremie Cook",
    "loser_school": "Lock Haven",
    "result": "Fall 6:25"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "T.J. Morrison",
    "winner_school": "Rider",
    "loser": "Sam Wendland",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Nathan Moore",
    "winner_school": "Purdue",
    "loser": "Jacob Bryce",
    "loser_school": "North Dakota State",
    "result": "MD 12-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Eric Lapotsky",
    "winner_school": "Bucknell",
    "loser": "Max Askren",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Rashad Goff",
    "loser_school": "Cleveland State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Mike Spaid",
    "winner_school": "Bloomsburg",
    "loser": "Janior Palma",
    "loser_school": "NC State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Ty Watterson",
    "winner_school": "Oregon State",
    "loser": "Wade Sauer",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Mark Ellis",
    "loser_school": "Missouri",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Bubba Gritter",
    "winner_school": "Central Michigan",
    "loser": "Matt Koz",
    "loser_school": "Chattanooga",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Dustin Rogers",
    "winner_school": "West Virginia",
    "loser": "Ed Prendergast",
    "loser_school": "Navy",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "Matt Fields",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Aaron Anspach",
    "winner_school": "Penn State",
    "loser": "Joe Fendone",
    "loser_school": "Edinboro",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Reece Hopkin",
    "winner_school": "Northern Colorado",
    "loser": "Levon Mock",
    "loser_school": "Brown",
    "result": "Dec 15-13"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Cody Parker",
    "winner_school": "Cal Poly",
    "loser": "Patrick Walker",
    "loser_school": "Liberty",
    "result": "Fall 1:48"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Spencer Nadolsky",
    "loser_school": "North Carolina",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Colton Nichols",
    "winner_school": "CSU Bakersfield",
    "loser": "John Wise",
    "loser_school": "Illinois",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Paul Weibel",
    "winner_school": "Lehigh",
    "loser": "A.J. Brooks",
    "loser_school": "Clarion",
    "result": "Fall 0:52"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Kyle Massey",
    "winner_school": "Wisconsin",
    "loser": "Jermail Porter",
    "loser_school": "Kent State",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Josh Buuck",
    "winner_school": "Indiana",
    "loser": "Chris Cowen",
    "loser_school": "Drexel",
    "result": "Fall 5:28"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Zach Hammond",
    "loser_school": "Cornell",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Javier Maldonado",
    "winner_school": "Chattanooga",
    "loser": "Collin Cudd",
    "loser_school": "Wisconsin",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Mike Sees",
    "winner_school": "Bloomsburg",
    "loser": "Chad Sportelli",
    "loser_school": "Kent State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Dave Tomasette",
    "winner_school": "Hofstra",
    "loser": "Marcos Orozco",
    "loser_school": "UC Davis",
    "result": "MD 14-0"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Fernando Martinez",
    "loser_school": "Army",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Tyler Shinn",
    "winner_school": "Oklahoma State",
    "loser": "Brandon Kinney",
    "loser_school": "Columbia",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Patrick Castillo",
    "winner_school": "Northern Illinois",
    "loser": "Steve Mytych",
    "loser_school": "Drexel",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Nick Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Gabe Flores",
    "loser_school": "Illinois",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Mark McKnight",
    "winner_school": "Penn State",
    "loser": "Eric Stevenson",
    "loser_school": "Oregon State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Robbie Preston",
    "winner_school": "Harvard",
    "loser": "Mark Budd",
    "loser_school": "Buffalo",
    "result": "Fall 6:10"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Mario Galanakis",
    "winner_school": "Iowa",
    "loser": "Evan Sola",
    "loser_school": "North Carolina",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Eric Albright",
    "winner_school": "Virginia",
    "loser": "Dave Marble",
    "loser_school": "Bucknell",
    "result": "MD 16-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Adam Frey",
    "loser_school": "Cornell",
    "result": "FOR"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Conor Beebe",
    "loser_school": "Central Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Andrae Hernandez",
    "winner_school": "Indiana",
    "loser": "T.J. Enright",
    "loser_school": "Ohio State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Chris Staylor",
    "winner_school": "Old Dominion",
    "loser": "Nick Gallick",
    "loser_school": "Iowa State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Dan Mitcheff",
    "winner_school": "Kent State",
    "loser": "Zach Tanelli",
    "loser_school": "Wisconsin",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Matt Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Kyle Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Brandon Rader",
    "winner_school": "West Virginia",
    "loser": "Dave Roberts",
    "loser_school": "Cal Poly",
    "result": "TF 19-3 5:32"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Dominick Moyer",
    "winner_school": "Nebraska",
    "loser": "Alex Tsirtsis",
    "loser_school": "Iowa",
    "result": "Fall 5:19"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Matt Schumm",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Max Meltzer",
    "winner_school": "Harvard",
    "loser": "Matt Kyler",
    "loser_school": "Army",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Casio Pero",
    "winner_school": "Illinois",
    "loser": "Darren Kern",
    "loser_school": "Bloomsburg",
    "result": "MD 13-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Andy Simmons",
    "loser_school": "Michigan State",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "C.J. Ettelson",
    "winner_school": "Northern Iowa",
    "loser": "Mitch Mueller",
    "loser_school": "Iowa State",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "Jordan Burroughs",
    "loser_school": "Nebraska",
    "result": "Dec 6-1 SV"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Scott Ervin",
    "winner_school": "Appalachian State",
    "loser": "Morgan Atkinson",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Ryan Adams",
    "loser_school": "North Dakota State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "Ryan Hurley",
    "loser_school": "Cleveland State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Josh Wagner",
    "winner_school": "Missouri",
    "loser": "Brandon Doyle",
    "loser_school": "CSU Bakersfield",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Michael Roberts",
    "loser_school": "Boston University",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Aaron Martin",
    "winner_school": "Chattanooga",
    "loser": "John Cox",
    "loser_school": "Navy",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "David Jauregui",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Will Rowe",
    "winner_school": "Oklahoma",
    "loser": "Jacob Murphy",
    "loser_school": "Purdue",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Jacob Yost",
    "winner_school": "Chattanooga",
    "loser": "John Jarred",
    "loser_school": "Navy",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Ryan Hluschak",
    "winner_school": "Drexel",
    "loser": "Dave Nakasone",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Chris Oliver",
    "loser_school": "Nebraska",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Kurt Gross",
    "loser_school": "Kent State",
    "result": "TF 16-0 6:51"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Matt Hill",
    "winner_school": "Edinboro",
    "loser": "Nate Galloway",
    "loser_school": "Rider",
    "result": "Fall 9:44"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Seth Martin",
    "winner_school": "Lock Haven",
    "loser": "Bubba Jenkins",
    "loser_school": "Penn State",
    "result": "Fall 2:44"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Ryan Morningstar",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Dustin Noack",
    "winner_school": "UC Davis",
    "loser": "Jason Kiessling",
    "loser_school": "Maryland",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Smith-Bergsrud",
    "winner_school": "Illinois",
    "loser": "Stephen Dwyer",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Justin Fraga",
    "loser_school": "Purdue",
    "result": "Fall 2:14"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Tyler Safratowich",
    "winner_school": "Minnesota",
    "loser": "Eric Decker",
    "loser_school": "Virginia Tech",
    "result": "Fall 4:30"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Bryan Tice",
    "loser_school": "Cal State Fullerton",
    "result": "TF 16-1 7:00"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "John Galloway",
    "winner_school": "Northern Illinois",
    "loser": "Zack Shanaman",
    "loser_school": "Penn",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Andrew Rendos",
    "loser_school": "Bucknell",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Mike Miller",
    "winner_school": "Central Michigan",
    "loser": "Daniel Atondo",
    "loser_school": "CSU Bakersfield",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Daniel Burk",
    "winner_school": "Northern Illinois",
    "loser": "Kenny Robertson",
    "loser_school": "Eastern Illinois",
    "result": "Dec 6-4 TB"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "James Yonushonis",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Gabriel Dretsch",
    "winner_school": "Minnesota",
    "loser": "Mike Letts",
    "loser_school": "Maryland",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Nick Hayes",
    "loser_school": "Northwestern",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Joshua Weitzel",
    "winner_school": "Oklahoma",
    "loser": "Phil Moricone",
    "loser_school": "Edinboro",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Kurt Brenner",
    "winner_school": "West Virginia",
    "loser": "Matt Maciag",
    "loser_school": "Wisconsin",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Joey Hooker",
    "loser_school": "Cornell",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Kenneth Cook",
    "winner_school": "UC Davis",
    "loser": "Lloyd Rogers",
    "loser_school": "Chattanooga",
    "result": "MD 16-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Greg Gifford",
    "winner_school": "Arizona State",
    "loser": "Shawn Vincent",
    "loser_school": "Northern Colorado",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Louis Caputo",
    "winner_school": "Harvard",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Trevor Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Ryan Burk",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Nathan Shirk",
    "loser_school": "Bloomsburg",
    "result": "MD 17-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "David Craig",
    "winner_school": "Lehigh",
    "loser": "Zack Giesen",
    "loser_school": "Stanford",
    "result": "Fall 2:28"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Rocco Caponi",
    "loser_school": "Virginia",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Marc Bennett",
    "winner_school": "Indiana",
    "loser": "Joe Rovelli",
    "loser_school": "Hofstra",
    "result": "Fall 4:25"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Jack Jensen",
    "winner_school": "Oklahoma State",
    "loser": "Antonio Miranda",
    "loser_school": "Navy",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Dallas Herbst",
    "winner_school": "Wisconsin",
    "loser": "Cornelius Murray",
    "loser_school": "VMI",
    "result": "Fall 4:42"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Jason Trulson",
    "winner_school": "Arizona State",
    "loser": "Travis Gardner",
    "loser_school": "Oregon State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Brandon Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Matt Monteiro",
    "winner_school": "Cal Poly",
    "loser": "Joel Flaggert",
    "loser_school": "Oklahoma",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Ryan Goodman",
    "loser_school": "NC State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "T.J. Morrison",
    "winner_school": "Rider",
    "loser": "Patrick Bond",
    "loser_school": "Illinois",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Nathan Moore",
    "loser_school": "Purdue",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Jared Villers",
    "winner_school": "West Virginia",
    "loser": "Eric Lapotsky",
    "loser_school": "Bucknell",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Wade Sauer",
    "winner_school": "Cal State Fullerton",
    "loser": "Reece Hopkin",
    "loser_school": "Northern Colorado",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Cody Parker",
    "winner_school": "Cal Poly",
    "loser": "Mark Ellis",
    "loser_school": "Missouri",
    "result": "Fall 6:50"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Rashad Goff",
    "loser_school": "Cleveland State",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Colton Nichols",
    "winner_school": "CSU Bakersfield",
    "loser": "Janior Palma",
    "loser_school": "NC State",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Matt Fields",
    "winner_school": "Iowa",
    "loser": "Paul Weibel",
    "loser_school": "Lehigh",
    "result": "Fall 6:01"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Joe Fendone",
    "winner_school": "Edinboro",
    "loser": "Kyle Massey",
    "loser_school": "Wisconsin",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Matt Koz",
    "winner_school": "Chattanooga",
    "loser": "Josh Buuck",
    "loser_school": "Indiana",
    "result": "DEF"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Ed Prendergast",
    "winner_school": "Navy",
    "loser": "Jared Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Fall 6:32"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Ode Blanc",
    "loser_school": "Lock Haven",
    "result": "MD 16-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Charlie Falck",
    "loser_school": "Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Tanner Gardner",
    "loser_school": "Stanford",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Angel Escobedo",
    "loser_school": "Indiana",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Javier Maldonado",
    "winner_school": "Chattanooga",
    "loser": "Mike Sees",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Dave Tomasette",
    "winner_school": "Hofstra",
    "loser": "Brandon Precin",
    "loser_school": "Northwestern",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Tyler Shinn",
    "winner_school": "Oklahoma State",
    "loser": "Patrick Castillo",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Nick Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Mark McKnight",
    "loser_school": "Penn State",
    "result": "MD 16-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "James Kennedy",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Matt Keller",
    "loser_school": "Chattanooga",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Jake Strayer",
    "loser_school": "Penn State",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Mack Reiter",
    "loser_school": "Minnesota",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Robbie Preston",
    "winner_school": "Harvard",
    "loser": "Mario Galanakis",
    "loser_school": "Iowa",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Eric Albright",
    "loser_school": "Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Andrae Hernandez",
    "winner_school": "Indiana",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Chris Staylor",
    "winner_school": "Old Dominion",
    "loser": "Dan Mitcheff",
    "loser_school": "Kent State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Darrion Caldwell",
    "loser_school": "NC State",
    "result": "Fall 1:40"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Don Fisch",
    "winner_school": "Rider",
    "loser": "Manny Rivera",
    "loser_school": "Minnesota",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Charles Griffin",
    "loser_school": "Hofstra",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Michael Keefe",
    "loser_school": "Chattanooga",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Brandon Rader",
    "winner_school": "West Virginia",
    "loser": "Matt Ciasulli",
    "loser_school": "Lehigh",
    "result": "MD 15-6"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Dominick Moyer",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Max Meltzer",
    "winner_school": "Harvard",
    "loser": "Casio Pero",
    "loser_school": "Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "C.J. Ettelson",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Tyler Turner",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Jordan Leen",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "J.P. O'Connor",
    "loser_school": "Harvard",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Matt Coughlin",
    "loser_school": "Indiana",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Scott Ervin",
    "winner_school": "Appalachian State",
    "loser": "Matt Storniolo",
    "loser_school": "Oklahoma",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Jake Patacsil",
    "loser_school": "Purdue",
    "result": "MD 17-3"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Josh Wagner",
    "loser_school": "Missouri",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Aaron Martin",
    "winner_school": "Chattanooga",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Josh Zupancic",
    "loser_school": "Stanford",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "C.P. Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "James Strouse",
    "winner_school": "Hofstra",
    "loser": "Matt Kocher",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Craig Henning",
    "winner_school": "Wisconsin",
    "loser": "Brian Stith",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Jacob Yost",
    "winner_school": "Chattanooga",
    "loser": "Will Rowe",
    "loser_school": "Oklahoma",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Ryan Hluschak",
    "winner_school": "Drexel",
    "loser": "Michael Chandler",
    "loser_school": "Missouri",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Matt Hill",
    "loser_school": "Edinboro",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Seth Martin",
    "loser_school": "Lock Haven",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Matt Pell",
    "loser_school": "Missouri",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Nick Baima",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Eric Tannenbaum",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Deonte Penn",
    "loser_school": "Edinboro",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Smith-Bergsrud",
    "winner_school": "Illinois",
    "loser": "Dustin Noack",
    "loser_school": "UC Davis",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Tyler Safratowich",
    "loser_school": "Minnesota",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "John Galloway",
    "winner_school": "Northern Illinois",
    "loser": "Michael Cannon",
    "loser_school": "American",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Mike Miller",
    "winner_school": "Central Michigan",
    "loser": "Steve Anceravage",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "Fall 4:42"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Eric Luedke",
    "winner_school": "Iowa",
    "loser": "Randy Rueda",
    "loser_school": "American",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Jeremy Larson",
    "loser_school": "Oregon State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Keith Gavin",
    "winner_school": "Pittsburgh",
    "loser": "Matt Herrington",
    "loser_school": "Penn",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Daniel Burk",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Gabriel Dretsch",
    "loser_school": "Minnesota",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Joshua Weitzel",
    "winner_school": "Oklahoma",
    "loser": "Kurt Brenner",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Kenneth Cook",
    "loser_school": "UC Davis",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Christian Sinnott",
    "loser_school": "Central Michigan",
    "result": "MD 11-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Tyler Todd",
    "winner_school": "Michigan",
    "loser": "Raymond Jordan",
    "loser_school": "Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Josh Arnone",
    "loser_school": "Cornell",
    "result": "Fall 1:54"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Alex Clemsen",
    "loser_school": "Edinboro",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Louis Caputo",
    "winner_school": "Harvard",
    "loser": "Greg Gifford",
    "loser_school": "Arizona State",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Trevor Brandvold",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "David Craig",
    "winner_school": "Lehigh",
    "loser": "John Dergo",
    "loser_school": "Illinois",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Marc Bennett",
    "winner_school": "Indiana",
    "loser": "Jack Jensen",
    "loser_school": "Oklahoma State",
    "result": "Fall 2:22"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Nick Roy",
    "loser_school": "Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Jerry Rinaldi",
    "loser_school": "Cornell",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Chris Weidman",
    "winner_school": "Hofstra",
    "loser": "Mike Tamillow",
    "loser_school": "Northwestern",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Craig Brester",
    "loser_school": "Nebraska",
    "result": "Fall 6:36"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Dallas Herbst",
    "winner_school": "Wisconsin",
    "loser": "Jason Trulson",
    "loser_school": "Arizona State",
    "result": "MD 13-0"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Matt Monteiro",
    "loser_school": "Cal Poly",
    "result": "Fall 1:54"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "T.J. Morrison",
    "loser_school": "Rider",
    "result": "Fall 2:35"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Jared Villers",
    "loser_school": "West Virginia",
    "result": "Fall 3:29"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Mike Spaid",
    "loser_school": "Bloomsburg",
    "result": "MD 16-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Ty Watterson",
    "winner_school": "Oregon State",
    "loser": "Dustin Fox",
    "loser_school": "Northwestern",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Bubba Gritter",
    "winner_school": "Central Michigan",
    "loser": "Dustin Rogers",
    "loser_school": "West Virginia",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Aaron Anspach",
    "winner_school": "Penn State",
    "loser": "Payam Zarrinpour",
    "loser_school": "Sacred Heart",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Wade Sauer",
    "winner_school": "Cal State Fullerton",
    "loser": "Cody Parker",
    "loser_school": "Cal Poly",
    "result": "Dec 14-9"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Colton Nichols",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Joe Fendone",
    "winner_school": "Edinboro",
    "loser": "Matt Fields",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Matt Koz",
    "winner_school": "Chattanooga",
    "loser": "Ed Prendergast",
    "loser_school": "Navy",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Charlie Falck",
    "winner_school": "Iowa",
    "loser": "Javier Maldonado",
    "loser_school": "Chattanooga",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Ode Blanc",
    "winner_school": "Lock Haven",
    "loser": "Dave Tomasette",
    "loser_school": "Hofstra",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Tyler Shinn",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Nick Fanthorpe",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Jake Strayer",
    "winner_school": "Penn State",
    "loser": "Robbie Preston",
    "loser_school": "Harvard",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Mack Reiter",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Andrae Hernandez",
    "winner_school": "Indiana",
    "loser": "James Kennedy",
    "loser_school": "Illinois",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Matt Keller",
    "winner_school": "Chattanooga",
    "loser": "Chris Staylor",
    "loser_school": "Old Dominion",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Brandon Rader",
    "winner_school": "West Virginia",
    "loser": "Manny Rivera",
    "loser_school": "Minnesota",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Darrion Caldwell",
    "loser_school": "NC State",
    "result": "Fall 5:49"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Max Meltzer",
    "winner_school": "Harvard",
    "loser": "Michael Keefe",
    "loser_school": "Chattanooga",
    "result": "Dec 13-9"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Kyle Ruschell",
    "loser_school": "Wisconsin",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Scott Ervin",
    "loser_school": "Appalachian State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Tyler Turner",
    "winner_school": "Wisconsin",
    "loser": "Cyler Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Matt Coughlin",
    "winner_school": "Indiana",
    "loser": "Dan Vallimont",
    "loser_school": "Penn State",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Aaron Martin",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Jacob Yost",
    "loser_school": "Chattanooga",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Ryan Hluschak",
    "winner_school": "Drexel",
    "loser": "Brian Stith",
    "loser_school": "Arizona State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Josh Zupancic",
    "winner_school": "Stanford",
    "loser": "Moza Fay",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Brandon Becker",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Smith-Bergsrud",
    "loser_school": "Illinois",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Deonte Penn",
    "winner_school": "Edinboro",
    "loser": "Patrick Pitsch",
    "loser_school": "Arizona State",
    "result": "Dec 13-8"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "John Galloway",
    "loser_school": "Northern Illinois",
    "result": "Fall 6:08"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Mike Miller",
    "winner_school": "Central Michigan",
    "loser": "Nick Baima",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Jeremy Larson",
    "loser_school": "Oregon State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Matt Herrington",
    "loser_school": "Penn",
    "result": "DEF"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Joshua Weitzel",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Randy Rueda",
    "loser_school": "American",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Louis Caputo",
    "winner_school": "Harvard",
    "loser": "Raymond Jordan",
    "loser_school": "Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Christian Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "David Craig",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Josh Arnone",
    "winner_school": "Cornell",
    "loser": "Marc Bennett",
    "loser_school": "Indiana",
    "result": "Fall 1:24"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Mike Tamillow",
    "winner_school": "Northwestern",
    "loser": "Dallas Herbst",
    "loser_school": "Wisconsin",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Craig Brester",
    "loser_school": "Nebraska",
    "result": "Fall 3:15"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Nick Roy",
    "winner_school": "Michigan",
    "loser": "Wynn Michalak",
    "loser_school": "Central Michigan",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "Hudson Taylor",
    "loser_school": "Maryland",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Wade Sauer",
    "winner_school": "Cal State Fullerton",
    "loser": "Dustin Rogers",
    "loser_school": "West Virginia",
    "result": "Fall 6:10"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "David Zabriskie",
    "loser_school": "Iowa State",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Mike Spaid",
    "winner_school": "Bloomsburg",
    "loser": "Joe Fendone",
    "loser_school": "Edinboro",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Matt Koz",
    "loser_school": "Chattanooga",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Jayson Ness",
    "loser_school": "Minnesota",
    "result": "MD 10-0"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Troy Nickerson",
    "loser_school": "Cornell",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Ode Blanc",
    "winner_school": "Lock Haven",
    "loser": "Charlie Falck",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Tanner Gardner",
    "loser_school": "Stanford",
    "result": "Dec 9-3"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Nick Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Darrel Vasquez",
    "loser_school": "Cal Poly",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Jake Strayer",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Matt Keller",
    "winner_school": "Chattanooga",
    "loser": "Andrae Hernandez",
    "loser_school": "Indiana",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Don Fisch",
    "loser_school": "Rider",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Nathan Morgan",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Brandon Rader",
    "winner_school": "West Virginia",
    "loser": "J Jaggers",
    "loser_school": "Ohio State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Max Meltzer",
    "loser_school": "Harvard",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Dustin Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Lance Palmer",
    "loser_school": "Ohio State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Tyler Turner",
    "winner_school": "Wisconsin",
    "loser": "Jordan Leen",
    "loser_school": "Cornell",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Matt Coughlin",
    "loser_school": "Indiana",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Michael Poeta",
    "loser_school": "Illinois",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Craig Henning",
    "winner_school": "Wisconsin",
    "loser": "James Strouse",
    "loser_school": "Hofstra",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Ryan Hluschak",
    "loser_school": "Drexel",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Josh Zupancic",
    "loser_school": "Stanford",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Mike Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Deonte Penn",
    "loser_school": "Edinboro",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Mike Miller",
    "loser_school": "Central Michigan",
    "result": "Fall 5:34"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Eric Luedke",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Keith Gavin",
    "winner_school": "Pittsburgh",
    "loser": "Brandon Mason",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Brandon Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "Dec 11-8"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Tyler Todd",
    "loser_school": "Michigan",
    "result": "MD 13-4"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Roger Kish",
    "loser_school": "Minnesota",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Louis Caputo",
    "loser_school": "Harvard",
    "result": "MD 11-3"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "Josh Arnone",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Phil Davis",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Chris Weidman",
    "loser_school": "Hofstra",
    "result": "Fall 4:27"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Mike Tamillow",
    "loser_school": "Northwestern",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "Nick Roy",
    "loser_school": "Michigan",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Ty Watterson",
    "loser_school": "Oregon State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Aaron Anspach",
    "winner_school": "Penn State",
    "loser": "Bubba Gritter",
    "loser_school": "Central Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Wade Sauer",
    "winner_school": "Cal State Fullerton",
    "loser": "Payam Zarrinpour",
    "loser_school": "Sacred Heart",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Mike Spaid",
    "loser_school": "Bloomsburg",
    "result": "DEF"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Ode Blanc",
    "loser_school": "Lock Haven",
    "result": "MD 13-0"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Jayson Ness",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Tyler McCormick",
    "loser_school": "Missouri",
    "result": "MD 9-0"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Matt Keller",
    "winner_school": "Chattanooga",
    "loser": "Darrel Vasquez",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Brandon Rader",
    "loser_school": "West Virginia",
    "result": "Fall 4:27"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Don Fisch",
    "loser_school": "Rider",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Tyler Turner",
    "loser_school": "Wisconsin",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "J.P. O'Connor",
    "loser_school": "Harvard",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Matt Kocher",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "James Strouse",
    "winner_school": "Hofstra",
    "loser": "C.P. Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Mike Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Eric Luedke",
    "winner_school": "Iowa",
    "loser": "Steve Luke",
    "loser_school": "Michigan",
    "result": "Dec 3-3 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Brandon Mason",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:55"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Mike Pucillo",
    "loser_school": "Ohio State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "Tyler Todd",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Phil Davis",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Chris Weidman",
    "winner_school": "Hofstra",
    "loser": "Jerry Rinaldi",
    "loser_school": "Cornell",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Ty Watterson",
    "winner_school": "Oregon State",
    "loser": "Wade Sauer",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Bubba Gritter",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Angel Escobedo",
    "loser_school": "Indiana",
    "result": "Dec 3-0"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Ode Blanc",
    "loser_school": "Lock Haven",
    "result": "Fall 1:00"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Charlie Falck",
    "loser_school": "Iowa",
    "result": "Fall 2:41"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Matt Keller",
    "loser_school": "Chattanooga",
    "result": "MD 8-0"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Tyler McCormick",
    "loser_school": "Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Jake Strayer",
    "winner_school": "Penn State",
    "loser": "Andrae Hernandez",
    "loser_school": "Indiana",
    "result": "Fall 2:38"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Nathan Morgan",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Don Fisch",
    "winner_school": "Rider",
    "loser": "Brandon Rader",
    "loser_school": "West Virginia",
    "result": "Fall 4:42"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Max Meltzer",
    "loser_school": "Harvard",
    "result": "Dec 7-1"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Lance Palmer",
    "loser_school": "Ohio State",
    "result": "Dec 1-0"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Tyler Turner",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Matt Coughlin",
    "winner_school": "Indiana",
    "loser": "Jordan Leen",
    "loser_school": "Cornell",
    "result": "Dec 11-6"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "James Strouse",
    "loser_school": "Hofstra",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "C.P. Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 2-1"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Josh Zupancic",
    "winner_school": "Stanford",
    "loser": "Ryan Hluschak",
    "loser_school": "Drexel",
    "result": "Dec 11-10 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Eric Tannenbaum",
    "loser_school": "Michigan",
    "result": "Fall 3:15"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Mike Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 5-4"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Deonte Penn",
    "winner_school": "Edinboro",
    "loser": "Mike Miller",
    "loser_school": "Central Michigan",
    "result": "Fall 4:55"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Eric Luedke",
    "winner_school": "Iowa",
    "loser": "Matt Stolpinski",
    "loser_school": "Navy",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Steve Luke",
    "loser_school": "Michigan",
    "result": "Dec 1-0"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "Dec 7-3"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Alex Clemsen",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Tyler Todd",
    "winner_school": "Michigan",
    "loser": "Mike Pucillo",
    "loser_school": "Ohio State",
    "result": "Fall 4:34"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Louis Caputo",
    "winner_school": "Harvard",
    "loser": "Josh Arnone",
    "loser_school": "Cornell",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Chris Weidman",
    "winner_school": "Hofstra",
    "loser": "J.D. Bergman",
    "loser_school": "Ohio State",
    "result": "Dec 9-4"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Jerry Rinaldi",
    "loser_school": "Cornell",
    "result": "Dec 8-4"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Mike Tamillow",
    "winner_school": "Northwestern",
    "loser": "Nick Roy",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Ty Watterson",
    "loser_school": "Oregon State",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Bubba Gritter",
    "winner_school": "Central Michigan",
    "loser": "Wade Sauer",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 9-6"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "Mike Spaid",
    "loser_school": "Bloomsburg",
    "result": "Dec 11-8"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Sam Hazewinkel",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Coleman Scott",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Ryan Lang",
    "loser_school": "Northwestern",
    "result": "TF 17-2 5:41"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Josh Churella",
    "loser_school": "Michigan",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Craig Henning",
    "loser_school": "Wisconsin",
    "result": "Dec 6-5"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Johny Hendricks",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Keith Gavin",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-2"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Jake Varner",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Kurt Backes",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Aaron Anspach",
    "loser_school": "Penn State",
    "result": "Fall 1:53"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 1002,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Rob Tate",
    "loser_school": "Gardner-Webb",
    "result": "Fall 4:22"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 1005,
    "winner": "Ryan Hluschak",
    "winner_school": "Drexel",
    "loser": "Jonny Bonilla-Bowman",
    "loser_school": "Virginia Tech",
    "result": "Dec 19-12"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 1007,
    "winner": "Joe Lowe",
    "winner_school": "UNC Greensboro",
    "loser": "Phil Moricone",
    "loser_school": "Edinboro",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 1172,
    "winner": "Eric Albright",
    "winner_school": "Virginia",
    "loser": "Cory VomBaur",
    "loser_school": "Wyoming",
    "result": "MD 12-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 1175,
    "winner": "Tyler Sherley",
    "winner_school": "Boise State",
    "loser": "Luke Salazar",
    "loser_school": "Northern Colorado",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 1177,
    "winner": "Phil Moricone",
    "winner_school": "Edinboro",
    "loser": "Luke Feist",
    "loser_school": "Stanford",
    "result": "Fall 5:36"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2002,
    "winner": "Chris Staylor",
    "winner_school": "Old Dominion",
    "loser": "Mark Anderson",
    "loser_school": "West Virginia",
    "result": "Dec 6-0"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 2005,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Kurt Gross",
    "loser_school": "Kent State",
    "result": "Dec 7-5"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 2007,
    "winner": "Kenny Robertson",
    "winner_school": "Eastern Illinois",
    "loser": "Mike Letts",
    "loser_school": "Maryland",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 2172,
    "winner": "Richard Donald",
    "winner_school": "Bloomsburg",
    "loser": "Mark Anderson",
    "loser_school": "West Virginia",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 2175,
    "winner": "Kurt Gross",
    "winner_school": "Kent State",
    "loser": "Victer Crenshaw",
    "loser_school": "Cleveland State",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 2177,
    "winner": "Daniel Burk",
    "winner_school": "Northern Illinois",
    "loser": "Ronnie Lee",
    "loser_school": "Oregon",
    "result": "MD 11-3"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 3005,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Luke Salazar",
    "loser_school": "Northern Colorado",
    "result": "MD 9-1"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 3007,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Daniel Burk",
    "loser_school": "Northern Illinois",
    "result": "TF 19-4 7:00"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 3175,
    "winner": "Zac Fryling",
    "winner_school": "West Virginia",
    "loser": "Jacob Frerichs",
    "loser_school": "Ohio",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 3177,
    "winner": "Mike Letts",
    "winner_school": "Maryland",
    "loser": "Nick Kozar",
    "loser_school": "Drexel",
    "result": "Dec 5-1"
  }
];
