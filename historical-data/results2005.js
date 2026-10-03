// 2005 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 2005 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results2005-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Ode Blanc",
    "loser_school": "Lock Haven",
    "result": "Fall 2:01"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Tony Curto",
    "winner_school": "Bloomsburg",
    "loser": "Bryan Heller",
    "loser_school": "Penn State",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Nate Galloway",
    "winner_school": "Penn State",
    "loser": "Paul Bjorlo",
    "loser_school": "Virginia",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Justin Nestor",
    "winner_school": "Pittsburgh",
    "loser": "John Galloway",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Kevin Gabrielson",
    "loser_school": "NC State",
    "result": "DEF"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "John Davis",
    "loser_school": "Chattanooga",
    "result": "MD 10-1"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Tyler Shovlin",
    "winner_school": "Cornell",
    "loser": "Chris Cowen",
    "loser_school": "Drexel",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Jeff Schell",
    "loser_school": "Brown",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Adam Smith",
    "winner_school": "Penn State",
    "loser": "Shawn Cordell",
    "loser_school": "West Virginia",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Chris Staylor",
    "loser_school": "Old Dominion",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Brandon Strong",
    "loser_school": "Air Force",
    "result": "TF 20-5 6:00"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Mike Sees",
    "loser_school": "Bloomsburg",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Grant Nakamura",
    "winner_school": "Iowa State",
    "loser": "Jeremy Mendoza",
    "loser_school": "Arizona State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Mike Mormile",
    "winner_school": "Cornell",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "Robbie Preston",
    "loser_school": "Harvard",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Chris Helgeson",
    "loser_school": "Northern Iowa",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Drew Forshey",
    "winner_school": "North Carolina",
    "loser": "Collin Cudd",
    "loser_school": "Wisconsin",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Matthew Pitts",
    "loser_school": "Chattanooga",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeff Sato",
    "loser_school": "Columbia",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Mason Lenhard",
    "loser_school": "Penn",
    "result": "Fall 4:54"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Matt Keller",
    "winner_school": "Nebraska",
    "loser": "Joe Kemmerer",
    "loser_school": "UNC Greensboro",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Dave Tomasette",
    "winner_school": "Hofstra",
    "loser": "Jon Bittinger",
    "loser_school": "Duquesne",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Mark McKnight",
    "loser_school": "Buffalo",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Derek Moore",
    "loser_school": "UC Davis",
    "result": "Fall 1:51"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Kyle McCarthy",
    "loser_school": "Sacred Heart",
    "result": "TF 19-4 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Jason Borrelli",
    "winner_school": "Central Michigan",
    "loser": "Tony Curto",
    "loser_school": "Bloomsburg",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Scott Jorgenson",
    "winner_school": "Boise State",
    "loser": "Ryan McClester",
    "loser_school": "The Citadel",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Seth Lisa",
    "loser_school": "West Virginia",
    "result": "Fall 6:49"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Mario Galanakis",
    "winner_school": "Iowa",
    "loser": "Matt Benza",
    "loser_school": "Air Force",
    "result": "Fall 6:39"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Drew Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Tim Hamer",
    "loser_school": "Rider",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Matt DeLorenzo",
    "loser_school": "Columbia",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Jesse Sundell",
    "loser_school": "Iowa State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Dominick Moyer",
    "winner_school": "Nebraska",
    "loser": "Josh Keefe",
    "loser_school": "Chattanooga",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "Evan Sola",
    "loser_school": "North Carolina",
    "result": "Fall 1:30"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Matt Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Charles Griffin",
    "loser_school": "Hofstra",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Josh Pniewski",
    "loser_school": "Gardner-Webb",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "T.J. Enright",
    "loser_school": "Ohio State",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Sam Gray",
    "winner_school": "Navy",
    "loser": "Sam Hiatt",
    "loser_school": "Northern Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Mark Moos",
    "loser_school": "Michigan",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Jordan Leen",
    "loser_school": "Cornell",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Roberto Vargas",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 2:21"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Frank Edgar",
    "winner_school": "Clarion",
    "loser": "Alex Tsirtsis",
    "loser_school": "Iowa",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Ronald Tarquinio",
    "winner_school": "Pittsburgh",
    "loser": "Josh Wooton",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Myron Drayton",
    "loser_school": "Delaware State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Doug McGraw",
    "winner_school": "Penn",
    "loser": "Casio Pero",
    "loser_school": "Illinois",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Steve Esparza",
    "loser_school": "Cal Poly",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Charlie Pinto",
    "loser_school": "Maryland",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Don Fisch",
    "winner_school": "Rider",
    "loser": "C.J. Ettelson",
    "loser_school": "Northern Iowa",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Michael Keefe",
    "winner_school": "Chattanooga",
    "loser": "Tommy Owen",
    "loser_school": "Minnesota",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Matt Murray",
    "winner_school": "Nebraska",
    "loser": "Nate Gulosh",
    "loser_school": "Navy",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Daniel Frishkorn",
    "winner_school": "Oklahoma State",
    "loser": "Anthony Constantino",
    "loser_school": "Columbia",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Richard LaForge",
    "winner_school": "Hofstra",
    "loser": "Matt Fittery",
    "loser_school": "Lock Haven",
    "result": "Fall 1:14"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Jason Jones",
    "winner_school": "Appalachian State",
    "loser": "Jake Kriegbaum",
    "loser_school": "Air Force",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Jeff Bristol",
    "loser_school": "UC Davis",
    "result": "TF 19-2 6:57"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Matt Anderson",
    "loser_school": "Lehigh",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Doug Withstandley",
    "winner_school": "Purdue",
    "loser": "Ryan Hurley",
    "loser_school": "Cleveland State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Eddie Dahlen",
    "loser_school": "Portland State",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Ben Cherrington",
    "winner_school": "Boise State",
    "loser": "John Cox",
    "loser_school": "Navy",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Travis Shufelt",
    "loser_school": "Nebraska",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Darren McKnight",
    "winner_school": "Michigan State",
    "loser": "Ron Doppelheuer",
    "loser_school": "Edinboro",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Mark Cartella",
    "winner_school": "Drexel",
    "loser": "Levi Duyn",
    "loser_school": "The Citadel",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "Daniel Elliott",
    "loser_school": "Gardner-Webb",
    "result": "Fall 6:40"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Quincy Osborn",
    "loser_school": "Minnesota",
    "result": "TF 18-3 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Patrick Williams",
    "winner_school": "Arizona State",
    "loser": "Issac Knable",
    "loser_school": "Indiana",
    "result": "Fall 6:39"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Craig Henning",
    "winner_school": "Wisconsin",
    "loser": "Rayes Gonzales",
    "loser_school": "Boston University",
    "result": "Dec 13-11"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Mike Grimes",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Jeff Harrison",
    "winner_school": "Northern Iowa",
    "loser": "Tyde Prater",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Mark DiSalvo",
    "winner_school": "Central Michigan",
    "loser": "Cody Greene",
    "loser_school": "Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Anthony Baza",
    "winner_school": "CSU Bakersfield",
    "loser": "Josh Medina",
    "loser_school": "Lock Haven",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Alex Hernandez",
    "loser_school": "NC State",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Tony Hook",
    "loser_school": "Oregon State",
    "result": "Fall 1:05"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Colton Salazar",
    "winner_school": "Purdue",
    "loser": "Devin Mesanko",
    "loser_school": "Columbia",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Derek Zinck",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Kevin Ward",
    "loser_school": "Oklahoma State",
    "result": "MD 18-8"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Seth Martin",
    "loser_school": "Lock Haven",
    "result": "TF 15-0 3:56"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Jim Medeiros",
    "winner_school": "Fresno State",
    "loser": "Brandon Becker",
    "loser_school": "Indiana",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Chris Bitetto",
    "winner_school": "Northern Iowa",
    "loser": "Reed Carpenter",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Travis Piccard",
    "winner_school": "The Citadel",
    "loser": "Muzaffar Abdurakhmanov",
    "loser_school": "American",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Danny Clum",
    "loser_school": "Wyoming",
    "result": "TF 15-0 5:00"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Matt Hill",
    "winner_school": "Edinboro",
    "loser": "Eric Neil",
    "loser_school": "Central Michigan",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Chris Horning",
    "winner_school": "Clarion",
    "loser": "Brad Cieleski",
    "loser_school": "Missouri",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Marcus Effner",
    "loser_school": "Cleveland State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Nate Galloway",
    "winner_school": "Penn State",
    "loser": "Matt Lebe",
    "loser_school": "West Virginia",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "James Strouse",
    "loser_school": "Hofstra",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Tyler Turner",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Cory Mancuso",
    "loser_school": "Slippery Rock",
    "result": "Fall 2:23"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "John DeCeault",
    "loser_school": "Purdue",
    "result": "TF 19-4 4:48"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Justin Nestor",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "David Bolyard",
    "winner_school": "Central Michigan",
    "loser": "Craig Dziewiatkowski",
    "loser_school": "Navy",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Nick Balma",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Donny Reynolds",
    "loser_school": "Illinois",
    "result": "Fall 4:44"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Zac Fryling",
    "loser_school": "West Virginia",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Max Dean",
    "winner_school": "Indiana",
    "loser": "Sherwood Fendryk",
    "loser_school": "Sacred Heart",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Brody Barrios",
    "loser_school": "Cal Poly",
    "result": "Fall 0:47"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Garry Price",
    "loser_school": "Slippery Rock",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Joey Hooker",
    "winner_school": "Cornell",
    "loser": "Jake Donar",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Joey Bracamonte",
    "winner_school": "Oregon",
    "loser": "Nate Yetzer",
    "loser_school": "Edinboro",
    "result": "Fall 4:34"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "John Sioredas",
    "winner_school": "Chattanooga",
    "loser": "Shane Seibert",
    "loser_school": "Fresno State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Patrick Pitsch",
    "loser_school": "Arizona State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Matt Nagel",
    "winner_school": "Minnesota",
    "loser": "Jim Bertulis",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:40"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Matt Ellis",
    "winner_school": "Oregon State",
    "loser": "Garrett Atkinson",
    "loser_school": "North Carolina",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Gary Dack",
    "loser_school": "Wyoming",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "J.J. Holmes",
    "loser_school": "Eastern Michigan",
    "result": "Fall 5:54"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Daniel Waters",
    "winner_school": "American",
    "loser": "Carlos Ponce",
    "loser_school": "Lock Haven",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "Kelly Flaherty",
    "loser_school": "Wisconsin",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Travis Frick",
    "winner_school": "Lehigh",
    "loser": "Rocco Caponi",
    "loser_school": "Virginia",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Nick Passolano",
    "loser_school": "Iowa State",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Bryce Hasseman",
    "winner_school": "Bloomsburg",
    "loser": "Sean Jenkins",
    "loser_school": "Rider",
    "result": "Fall 4:54"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Imad Kharbush",
    "winner_school": "Stanford",
    "loser": "Kenny Robertson",
    "loser_school": "Eastern Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Jeremy Larson",
    "loser_school": "Oregon State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Dustin Wiles",
    "loser_school": "Penn",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Gabriel Dretsch",
    "winner_school": "Minnesota",
    "loser": "Joe Lowe",
    "loser_school": "UNC Greensboro",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Leonel Sanchez",
    "winner_school": "Cal State Fullerton",
    "loser": "Paul Siemon",
    "loser_school": "Hofstra",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Mitch Hancock",
    "winner_school": "Central Michigan",
    "loser": "R.J. Boudro",
    "loser_school": "Michigan State",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Andrew Roy",
    "winner_school": "Rutgers",
    "loser": "Ron Silva",
    "loser_school": "UC Davis",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "E.K. Waldhaus",
    "winner_school": "Oklahoma",
    "loser": "Nick Roy",
    "loser_school": "Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Brady Richardson",
    "winner_school": "Indiana",
    "loser": "Chris Gifford",
    "loser_school": "Fresno State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Mark Himes",
    "loser_school": "Duquesne",
    "result": "TF 18-2 6:25"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Alex Camargo",
    "loser_school": "Kent State",
    "result": "TF 23-8 6:37"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Joe Rovelli",
    "winner_school": "Hofstra",
    "loser": "Keith Gavin",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Shane Webster",
    "loser_school": "Oregon",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Alex Dolly",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Adam Wright",
    "loser_school": "Old Dominion",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "C.B. Dollaway",
    "winner_school": "Arizona State",
    "loser": "Frank Cornely",
    "loser_school": "Duke",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Brandon Bear",
    "loser_school": "UC Davis",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "T.J. Morrison",
    "loser_school": "Rider",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Charlie Pienaar",
    "loser_school": "Slippery Rock",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Steve Borja",
    "winner_school": "Virginia Tech",
    "loser": "Josh Glenn",
    "loser_school": "American",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Justin Dyer",
    "winner_school": "Oklahoma",
    "loser": "Alex Lammers",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Ryan Halsey",
    "winner_school": "Cal Poly",
    "loser": "Brad Reinke",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Tyler Baier",
    "winner_school": "Cornell",
    "loser": "Joshua Weitzel",
    "loser_school": "Michigan",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Ron Howard",
    "loser_school": "Cleveland State",
    "result": "TF 23-7 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Andy Rios",
    "winner_school": "Indiana",
    "loser": "Chris Ressa",
    "loser_school": "Rutgers",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Ed Magrys",
    "loser_school": "Eastern Michigan",
    "result": "Fall 5:37"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Bredan McLean",
    "loser_school": "Air Force",
    "result": "Fall 6:37"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "David Dashiell",
    "winner_school": "North Carolina",
    "loser": "Jared Ricotta",
    "loser_school": "Duquesne",
    "result": "Fall 6:50"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Marcio Botelho",
    "winner_school": "Fresno State",
    "loser": "Ryan Flaherty",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Matt Delguyd",
    "winner_school": "Northwestern",
    "loser": "Joe Phillips",
    "loser_school": "Cleveland State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Joel Flaggert",
    "loser_school": "Oklahoma",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Chad Hoare",
    "loser_school": "Bloomsburg",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Morgan Horner",
    "winner_school": "Lock Haven",
    "loser": "Joel Weimer",
    "loser_school": "Ohio",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Scott Barker",
    "winner_school": "Oregon",
    "loser": "John DaCruz",
    "loser_school": "Boston University",
    "result": "Fall 5:43"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Daren Burns",
    "winner_school": "UNC Greensboro",
    "loser": "Chris Skretkowicz",
    "loser_school": "Hofstra",
    "result": "Fall 2:28"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Matt Koz",
    "winner_school": "Minnesota",
    "loser": "Landon Seefeldt",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 3:52"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Casey Phelps",
    "winner_school": "Boise State",
    "loser": "J.D. Bergman",
    "loser_school": "Ohio State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Tyrone Byrd",
    "loser_school": "Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Jerry Rinaldi",
    "loser_school": "Cornell",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Thayer Paxton",
    "winner_school": "Navy",
    "loser": "Nathan Moore",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Jake Butler",
    "loser_school": "Princeton",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Steve Mocco",
    "winner_school": "Oklahoma State",
    "loser": "Adam LoPiccolo",
    "loser_school": "American",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Peter Ziminski",
    "winner_school": "Eastern Illinois",
    "loser": "Joel Edwards",
    "loser_school": "Penn State",
    "result": "Fall 3:52"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Matt Fields",
    "winner_school": "Iowa",
    "loser": "Courtney Howard",
    "loser_school": "Boston University",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Kirk Nail",
    "winner_school": "Ohio State",
    "loser": "Tanner Garrett",
    "loser_school": "Navy",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Joe Dennis",
    "loser_school": "Cleveland State",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Zach Sheaffer",
    "loser_school": "Pittsburgh",
    "result": "Fall 1:01"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Mike Spaid",
    "winner_school": "Bloomsburg",
    "loser": "Allen Kennett",
    "loser_school": "Portland State",
    "result": "Fall 6:56"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Mike Faust",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Cain Velasquez",
    "winner_school": "Arizona State",
    "loser": "Payam Zarrinpour",
    "loser_school": "Sacred Heart",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Marc Allenmang",
    "winner_school": "Duquesne",
    "loser": "Cody Parker",
    "loser_school": "Oregon",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Jake Hager",
    "winner_school": "Oklahoma",
    "loser": "Bode Ogunwole",
    "loser_school": "Harvard",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Joe Hennis",
    "loser_school": "Edinboro",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Bill Stouffer",
    "winner_school": "Central Michigan",
    "loser": "Ty Watterson",
    "loser_school": "Oregon State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Scott Coleman",
    "winner_school": "Iowa State",
    "loser": "Eric Smith",
    "loser_school": "Boise State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Tyler Shovlin",
    "winner_school": "Cornell",
    "loser": "Mike Behnke",
    "loser_school": "Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Dusty Hoffschneider",
    "loser_school": "Wyoming",
    "result": "MD 12-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Mark McKnight",
    "winner_school": "Buffalo",
    "loser": "Ode Blanc",
    "loser_school": "Lock Haven",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "T.J. Enright",
    "winner_school": "Ohio State",
    "loser": "Bryan Heller",
    "loser_school": "Penn State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Kevin Ward",
    "winner_school": "Oklahoma State",
    "loser": "Paul Bjorlo",
    "loser_school": "Virginia",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Garrett Atkinson",
    "winner_school": "North Carolina",
    "loser": "John Galloway",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "R.J. Boudro",
    "winner_school": "Michigan State",
    "loser": "Eric Ring",
    "loser_school": "Edinboro",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "John Davis",
    "loser_school": "Chattanooga",
    "result": "MD 15-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Ty Watterson",
    "winner_school": "Oregon State",
    "loser": "Ruebon Daniels",
    "loser_school": "Appalachian State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Adam Smith",
    "loser_school": "Penn State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Bobbe Lowe",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Grant Nakamura",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "Mike Mormile",
    "loser_school": "Cornell",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Drew Forshey",
    "loser_school": "North Carolina",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "John Velez",
    "loser_school": "Northwestern",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Matt Keller",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Dave Tomasette",
    "loser_school": "Hofstra",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Mark McKnight",
    "winner_school": "Buffalo",
    "loser": "Jon Bittinger",
    "loser_school": "Duquesne",
    "result": "TF 19-4 6:24"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Joe Kemmerer",
    "winner_school": "UNC Greensboro",
    "loser": "Mason Lenhard",
    "loser_school": "Penn",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Matthew Pitts",
    "winner_school": "Chattanooga",
    "loser": "Jeff Sato",
    "loser_school": "Columbia",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Chris Helgeson",
    "winner_school": "Northern Iowa",
    "loser": "Collin Cudd",
    "loser_school": "Wisconsin",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Robbie Preston",
    "winner_school": "Harvard",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Jeremy Mendoza",
    "winner_school": "Arizona State",
    "loser": "Mike Sees",
    "loser_school": "Bloomsburg",
    "result": "Fall 3:52"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Brandon Strong",
    "winner_school": "Air Force",
    "loser": "Chris Staylor",
    "loser_school": "Old Dominion",
    "result": "Fall 1:08"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Shawn Cordell",
    "winner_school": "West Virginia",
    "loser": "Jeff Schell",
    "loser_school": "Brown",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "David Hoffman",
    "loser_school": "Virginia Tech",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Scott Jorgenson",
    "winner_school": "Boise State",
    "loser": "Jason Borrelli",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Mario Galanakis",
    "loser_school": "Iowa",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Drew Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Mark Jayne",
    "loser_school": "Illinois",
    "result": "Dec 14-11"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Dominick Moyer",
    "loser_school": "Nebraska",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "Matt Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Matt Sanchez",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Sam Gray",
    "loser_school": "Navy",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Mark Moos",
    "winner_school": "Michigan",
    "loser": "Sam Hiatt",
    "loser_school": "Northern Illinois",
    "result": "Fall 3:39"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Josh Pniewski",
    "winner_school": "Gardner-Webb",
    "loser": "T.J. Enright",
    "loser_school": "Ohio State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Charles Griffin",
    "loser_school": "Hofstra",
    "result": "Fall 3:32"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Jesse Sundell",
    "winner_school": "Iowa State",
    "loser": "Josh Keefe",
    "loser_school": "Chattanooga",
    "result": "Fall 5:28"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Tim Hamer",
    "winner_school": "Rider",
    "loser": "Matt DeLorenzo",
    "loser_school": "Columbia",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Matt Benza",
    "winner_school": "Air Force",
    "loser": "Seth Lisa",
    "loser_school": "West Virginia",
    "result": "MD 15-6"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Ryan McClester",
    "winner_school": "The Citadel",
    "loser": "Tony Curto",
    "loser_school": "Bloomsburg",
    "result": "MD 15-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Kyle McCarthy",
    "loser_school": "Sacred Heart",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Ryan Lang",
    "loser_school": "Northwestern",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Frank Edgar",
    "winner_school": "Clarion",
    "loser": "Ronald Tarquinio",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Doug McGraw",
    "loser_school": "Penn",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Juan Mora",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Don Fisch",
    "loser_school": "Rider",
    "result": "Dec 10-8 TB"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Michael Keefe",
    "winner_school": "Chattanooga",
    "loser": "Matt Murray",
    "loser_school": "Nebraska",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Daniel Frishkorn",
    "winner_school": "Oklahoma State",
    "loser": "Richard LaForge",
    "loser_school": "Hofstra",
    "result": "Fall 4:35"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Jason Jones",
    "loser_school": "Appalachian State",
    "result": "MD 16-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Jeff Bristol",
    "winner_school": "UC Davis",
    "loser": "Jake Kriegbaum",
    "loser_school": "Air Force",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Anthony Constantino",
    "winner_school": "Columbia",
    "loser": "Matt Fittery",
    "loser_school": "Lock Haven",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Nate Gulosh",
    "winner_school": "Navy",
    "loser": "Tommy Owen",
    "loser_school": "Minnesota",
    "result": "Fall 5:28"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Charlie Pinto",
    "winner_school": "Maryland",
    "loser": "C.J. Ettelson",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Casio Pero",
    "winner_school": "Illinois",
    "loser": "Myron Drayton",
    "loser_school": "Delaware State",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Alex Tsirtsis",
    "winner_school": "Iowa",
    "loser": "Josh Wooton",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Roberto Vargas",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Doug Withstandley",
    "loser_school": "Purdue",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Ben Cherrington",
    "loser_school": "Boise State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Darren McKnight",
    "loser_school": "Michigan State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "Mark Cartella",
    "loser_school": "Drexel",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Patrick Williams",
    "loser_school": "Arizona State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Craig Henning",
    "loser_school": "Wisconsin",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Mark DiSalvo",
    "winner_school": "Central Michigan",
    "loser": "Jeff Harrison",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Anthony Baza",
    "loser_school": "CSU Bakersfield",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Josh Medina",
    "winner_school": "Lock Haven",
    "loser": "Alex Hernandez",
    "loser_school": "NC State",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Tyde Prater",
    "winner_school": "Virginia Tech",
    "loser": "Cody Greene",
    "loser_school": "Missouri",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Mike Grimes",
    "winner_school": "Northern Illinois",
    "loser": "Rayes Gonzales",
    "loser_school": "Boston University",
    "result": "Dec 14-8"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Quincy Osborn",
    "winner_school": "Minnesota",
    "loser": "Issac Knable",
    "loser_school": "Indiana",
    "result": "Fall 2:24"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Daniel Elliott",
    "winner_school": "Gardner-Webb",
    "loser": "Levi Duyn",
    "loser_school": "The Citadel",
    "result": "Fall 5:27"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Travis Shufelt",
    "winner_school": "Nebraska",
    "loser": "Ron Doppelheuer",
    "loser_school": "Edinboro",
    "result": "MD 16-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "John Cox",
    "winner_school": "Navy",
    "loser": "Eddie Dahlen",
    "loser_school": "Portland State",
    "result": "MD 14-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Ryan Hurley",
    "winner_school": "Cleveland State",
    "loser": "Matt Anderson",
    "loser_school": "Lehigh",
    "result": "Fall 0:46"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Colton Salazar",
    "loser_school": "Purdue",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "C.P. Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Jim Medeiros",
    "loser_school": "Fresno State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Travis Piccard",
    "winner_school": "The Citadel",
    "loser": "Chris Bitetto",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Matt Hill",
    "loser_school": "Edinboro",
    "result": "TF 15-0 3:29"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Chris Horning",
    "loser_school": "Clarion",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "Nate Galloway",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Matt Kocher",
    "loser_school": "Pittsburgh",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Tyler Turner",
    "winner_school": "Wisconsin",
    "loser": "Cory Mancuso",
    "loser_school": "Slippery Rock",
    "result": "Fall 6:03"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "James Strouse",
    "loser_school": "Hofstra",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Brad Cieleski",
    "winner_school": "Missouri",
    "loser": "Marcus Effner",
    "loser_school": "Cleveland State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Eric Neil",
    "winner_school": "Central Michigan",
    "loser": "Dave Miller",
    "loser_school": "Rider",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Muzaffar Abdurakhmanov",
    "winner_school": "American",
    "loser": "Reed Carpenter",
    "loser_school": "Virginia Tech",
    "result": "Dec 14-7"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Seth Martin",
    "loser_school": "Lock Haven",
    "result": "Fall 1:59"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Kevin Ward",
    "winner_school": "Oklahoma State",
    "loser": "Derek Zinck",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Tony Hook",
    "winner_school": "Oregon State",
    "loser": "Devin Mesanko",
    "loser_school": "Columbia",
    "result": "Fall 1:35"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "David Bolyard",
    "loser_school": "Central Michigan",
    "result": "Dec 7-5 TB"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Mike Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Max Dean",
    "loser_school": "Indiana",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Joey Hooker",
    "loser_school": "Cornell",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "John Sioredas",
    "winner_school": "Chattanooga",
    "loser": "Joey Bracamonte",
    "loser_school": "Oregon",
    "result": "Dec 8-5 TB"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Matt Nagel",
    "loser_school": "Minnesota",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Matt Ellis",
    "loser_school": "Oregon State",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Gary Dack",
    "winner_school": "Wyoming",
    "loser": "Garrett Atkinson",
    "loser_school": "North Carolina",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Jim Bertulis",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Nate Yetzer",
    "winner_school": "Edinboro",
    "loser": "Shane Seibert",
    "loser_school": "Fresno State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Jake Donar",
    "winner_school": "Wisconsin",
    "loser": "Garry Price",
    "loser_school": "Slippery Rock",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Brody Barrios",
    "winner_school": "Cal Poly",
    "loser": "Sherwood Fendryk",
    "loser_school": "Sacred Heart",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Zac Fryling",
    "winner_school": "West Virginia",
    "loser": "Donny Reynolds",
    "loser_school": "Illinois",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Nick Balma",
    "winner_school": "Northern Iowa",
    "loser": "Craig Dziewiatkowski",
    "loser_school": "Navy",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Justin Nestor",
    "winner_school": "Pittsburgh",
    "loser": "John DeCeault",
    "loser_school": "Purdue",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Daniel Waters",
    "loser_school": "American",
    "result": "Dec 14-10"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Bryce Hasseman",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Imad Kharbush",
    "winner_school": "Stanford",
    "loser": "Jake Herbert",
    "loser_school": "Northwestern",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Gabriel Dretsch",
    "loser_school": "Minnesota",
    "result": "Fall 1:32"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Leonel Sanchez",
    "winner_school": "Cal State Fullerton",
    "loser": "Mitch Hancock",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "E.K. Waldhaus",
    "winner_school": "Oklahoma",
    "loser": "Andrew Roy",
    "loser_school": "Rutgers",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Brady Richardson",
    "loser_school": "Indiana",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Chris Gifford",
    "winner_school": "Fresno State",
    "loser": "Mark Himes",
    "loser_school": "Duquesne",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Nick Roy",
    "winner_school": "Michigan",
    "loser": "Ron Silva",
    "loser_school": "UC Davis",
    "result": "TF 20-5 5:11"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Paul Siemon",
    "winner_school": "Hofstra",
    "loser": "R.J. Boudro",
    "loser_school": "Michigan State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Dustin Wiles",
    "winner_school": "Penn",
    "loser": "Joe Lowe",
    "loser_school": "UNC Greensboro",
    "result": "Fall 6:15"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Kenny Robertson",
    "winner_school": "Eastern Illinois",
    "loser": "Jeremy Larson",
    "loser_school": "Oregon State",
    "result": "Fall 2:22"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Nick Passolano",
    "winner_school": "Iowa State",
    "loser": "Sean Jenkins",
    "loser_school": "Rider",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Kelly Flaherty",
    "winner_school": "Wisconsin",
    "loser": "Rocco Caponi",
    "loser_school": "Virginia",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "J.J. Holmes",
    "winner_school": "Eastern Michigan",
    "loser": "Carlos Ponce",
    "loser_school": "Lock Haven",
    "result": "TF 19-4 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Joe Rovelli",
    "loser_school": "Hofstra",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Paul Bradley",
    "loser_school": "Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "C.B. Dollaway",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "Ben Wissel",
    "loser_school": "Purdue",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Steve Borja",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Justin Dyer",
    "winner_school": "Oklahoma",
    "loser": "Ryan Halsey",
    "loser_school": "Cal Poly",
    "result": "TF 17-0 2:42"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Tyler Baier",
    "winner_school": "Cornell",
    "loser": "Roger Kish",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Andy Rios",
    "loser_school": "Indiana",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Ed Magrys",
    "winner_school": "Eastern Michigan",
    "loser": "Chris Ressa",
    "loser_school": "Rutgers",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Ron Howard",
    "winner_school": "Cleveland State",
    "loser": "Joshua Weitzel",
    "loser_school": "Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Brad Reinke",
    "winner_school": "Wisconsin",
    "loser": "Alex Lammers",
    "loser_school": "Central Michigan",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Charlie Pienaar",
    "loser_school": "Slippery Rock",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "T.J. Morrison",
    "winner_school": "Rider",
    "loser": "Brandon Bear",
    "loser_school": "UC Davis",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Frank Cornely",
    "winner_school": "Duke",
    "loser": "Adam Wright",
    "loser_school": "Old Dominion",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Alex Dolly",
    "winner_school": "Northern Iowa",
    "loser": "Shane Webster",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Alex Camargo",
    "winner_school": "Kent State",
    "loser": "Keith Gavin",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "David Dashiell",
    "loser_school": "North Carolina",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Matt Delguyd",
    "winner_school": "Northwestern",
    "loser": "Marcio Botelho",
    "loser_school": "Fresno State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Wynn Michalak",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Morgan Horner",
    "winner_school": "Lock Haven",
    "loser": "Scott Barker",
    "loser_school": "Oregon",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Daren Burns",
    "winner_school": "UNC Greensboro",
    "loser": "Matt Koz",
    "loser_school": "Minnesota",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Casey Phelps",
    "loser_school": "Boise State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Ryan Bader",
    "loser_school": "Arizona State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Thayer Paxton",
    "loser_school": "Navy",
    "result": "MD 14-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Jake Butler",
    "winner_school": "Princeton",
    "loser": "Nathan Moore",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "Tyrone Byrd",
    "loser_school": "Illinois",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Landon Seefeldt",
    "loser_school": "Cal State Fullerton",
    "result": "MD 14-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Joel Weimer",
    "winner_school": "Ohio",
    "loser": "John DaCruz",
    "loser_school": "Boston University",
    "result": "Fall 5:36"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Chad Hoare",
    "loser_school": "Bloomsburg",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Ryan Flaherty",
    "winner_school": "Wisconsin",
    "loser": "Joe Phillips",
    "loser_school": "Cleveland State",
    "result": "Fall 0:11"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Bredan McLean",
    "winner_school": "Air Force",
    "loser": "Jared Ricotta",
    "loser_school": "Duquesne",
    "result": "TF 17-1 6:12"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Steve Mocco",
    "winner_school": "Oklahoma State",
    "loser": "Peter Ziminski",
    "loser_school": "Eastern Illinois",
    "result": "Fall 1:13"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Matt Fields",
    "winner_school": "Iowa",
    "loser": "Kirk Nail",
    "loser_school": "Ohio State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Dustin Fox",
    "loser_school": "Northwestern",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Mike Spaid",
    "loser_school": "Bloomsburg",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Cain Velasquez",
    "winner_school": "Arizona State",
    "loser": "Marc Allenmang",
    "loser_school": "Duquesne",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Jake Hager",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Scott Coleman",
    "winner_school": "Iowa State",
    "loser": "Bill Stouffer",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Tyler Shovlin",
    "loser_school": "Cornell",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Dusty Hoffschneider",
    "winner_school": "Wyoming",
    "loser": "Mike Behnke",
    "loser_school": "Illinois",
    "result": "Fall 3:45"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Eric Smith",
    "winner_school": "Boise State",
    "loser": "Ty Watterson",
    "loser_school": "Oregon State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Bode Ogunwole",
    "winner_school": "Harvard",
    "loser": "Joe Hennis",
    "loser_school": "Edinboro",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "Cody Parker",
    "loser_school": "Oregon",
    "result": "Fall 3:53"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Allen Kennett",
    "winner_school": "Portland State",
    "loser": "Mike Faust",
    "loser_school": "Virginia Tech",
    "result": "Fall 4:04"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Joe Dennis",
    "winner_school": "Cleveland State",
    "loser": "Zach Sheaffer",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Tanner Garrett",
    "winner_school": "Navy",
    "loser": "Courtney Howard",
    "loser_school": "Boston University",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Joel Edwards",
    "winner_school": "Penn State",
    "loser": "Adam LoPiccolo",
    "loser_school": "American",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Mark McKnight",
    "winner_school": "Buffalo",
    "loser": "Grant Nakamura",
    "loser_school": "Iowa State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Joe Kemmerer",
    "winner_school": "UNC Greensboro",
    "loser": "Mike Mormile",
    "loser_school": "Cornell",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Adam Smith",
    "winner_school": "Penn State",
    "loser": "Matthew Pitts",
    "loser_school": "Chattanooga",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Chris Helgeson",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Robbie Preston",
    "winner_school": "Harvard",
    "loser": "Matt Keller",
    "loser_school": "Nebraska",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Jeremy Mendoza",
    "winner_school": "Arizona State",
    "loser": "Dave Tomasette",
    "loser_school": "Hofstra",
    "result": "Fall 4:38"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Drew Forshey",
    "winner_school": "North Carolina",
    "loser": "Brandon Strong",
    "loser_school": "Air Force",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Shawn Cordell",
    "loser_school": "West Virginia",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Mario Galanakis",
    "winner_school": "Iowa",
    "loser": "Mark Moos",
    "loser_school": "Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Josh Pniewski",
    "loser_school": "Gardner-Webb",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "David Hoffman",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Jesse Sundell",
    "winner_school": "Iowa State",
    "loser": "Jason Borrelli",
    "loser_school": "Central Michigan",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Tim Hamer",
    "loser_school": "Rider",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Sam Gray",
    "winner_school": "Navy",
    "loser": "Matt Benza",
    "loser_school": "Air Force",
    "result": "Fall 5:27"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Ryan McClester",
    "winner_school": "The Citadel",
    "loser": "Dominick Moyer",
    "loser_school": "Nebraska",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Matt Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Doug McGraw",
    "winner_school": "Penn",
    "loser": "Jeff Bristol",
    "loser_school": "UC Davis",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Juan Mora",
    "winner_school": "Cal State Fullerton",
    "loser": "Anthony Constantino",
    "loser_school": "Columbia",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Nate Gulosh",
    "loser_school": "Navy",
    "result": "Fall 0:51"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Ronald Tarquinio",
    "winner_school": "Pittsburgh",
    "loser": "Charlie Pinto",
    "loser_school": "Maryland",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Richard LaForge",
    "winner_school": "Hofstra",
    "loser": "Steve Esparza",
    "loser_school": "Cal Poly",
    "result": "Fall 1:38"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Casio Pero",
    "winner_school": "Illinois",
    "loser": "Jason Jones",
    "loser_school": "Appalachian State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Don Fisch",
    "winner_school": "Rider",
    "loser": "Alex Tsirtsis",
    "loser_school": "Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Matt Murray",
    "loser_school": "Nebraska",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Josh Medina",
    "winner_school": "Lock Haven",
    "loser": "Darren McKnight",
    "loser_school": "Michigan State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Tyde Prater",
    "winner_school": "Virginia Tech",
    "loser": "Mark Cartella",
    "loser_school": "Drexel",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Mike Grimes",
    "winner_school": "Northern Illinois",
    "loser": "Doug Withstandley",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Ben Cherrington",
    "winner_school": "Boise State",
    "loser": "Quincy Osborn",
    "loser_school": "Minnesota",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Jeff Harrison",
    "winner_school": "Northern Iowa",
    "loser": "Daniel Elliott",
    "loser_school": "Gardner-Webb",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Travis Shufelt",
    "winner_school": "Nebraska",
    "loser": "Anthony Baza",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Patrick Williams",
    "winner_school": "Arizona State",
    "loser": "John Cox",
    "loser_school": "Navy",
    "result": "MD 15-7"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Ryan Hurley",
    "winner_school": "Cleveland State",
    "loser": "Craig Henning",
    "loser_school": "Wisconsin",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Jim Medeiros",
    "winner_school": "Fresno State",
    "loser": "Tyler Turner",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Chris Bitetto",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Brad Cieleski",
    "winner_school": "Missouri",
    "loser": "Colton Salazar",
    "loser_school": "Purdue",
    "result": "MD 15-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Eric Neil",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Nate Galloway",
    "winner_school": "Penn State",
    "loser": "Muzaffar Abdurakhmanov",
    "loser_school": "American",
    "result": "Dec 7-3 TB"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Matt Kocher",
    "loser_school": "Pittsburgh",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Kevin Ward",
    "winner_school": "Oklahoma State",
    "loser": "Matt Hill",
    "loser_school": "Edinboro",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Chris Horning",
    "winner_school": "Clarion",
    "loser": "Tony Hook",
    "loser_school": "Oregon State",
    "result": "TF 18-2 6:10"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Gary Dack",
    "loser_school": "Wyoming",
    "result": "MD 14-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Max Dean",
    "loser_school": "Indiana",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Nate Yetzer",
    "loser_school": "Edinboro",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "David Bolyard",
    "winner_school": "Central Michigan",
    "loser": "Jake Donar",
    "loser_school": "Wisconsin",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Matt Nagel",
    "winner_school": "Minnesota",
    "loser": "Brody Barrios",
    "loser_school": "Cal Poly",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Matt Ellis",
    "winner_school": "Oregon State",
    "loser": "Zac Fryling",
    "loser_school": "West Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Nick Balma",
    "winner_school": "Northern Iowa",
    "loser": "Joey Hooker",
    "loser_school": "Cornell",
    "result": "Fall 3:53"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Justin Nestor",
    "winner_school": "Pittsburgh",
    "loser": "Joey Bracamonte",
    "loser_school": "Oregon",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Bryce Hasseman",
    "winner_school": "Bloomsburg",
    "loser": "Chris Gifford",
    "loser_school": "Fresno State",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Nick Roy",
    "loser_school": "Michigan",
    "result": "Fall 4:56"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Daniel Waters",
    "winner_school": "American",
    "loser": "Paul Siemon",
    "loser_school": "Hofstra",
    "result": "Fall 5:31"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Travis Frick",
    "winner_school": "Lehigh",
    "loser": "Dustin Wiles",
    "loser_school": "Penn",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Andrew Roy",
    "winner_school": "Rutgers",
    "loser": "Kenny Robertson",
    "loser_school": "Eastern Illinois",
    "result": "Fall 4:19"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Nick Passolano",
    "winner_school": "Iowa State",
    "loser": "Brady Richardson",
    "loser_school": "Indiana",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Kelly Flaherty",
    "winner_school": "Wisconsin",
    "loser": "Gabriel Dretsch",
    "loser_school": "Minnesota",
    "result": "Fall 6:46"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Mitch Hancock",
    "winner_school": "Central Michigan",
    "loser": "J.J. Holmes",
    "loser_school": "Eastern Michigan",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Ed Magrys",
    "winner_school": "Eastern Michigan",
    "loser": "C.B. Dollaway",
    "loser_school": "Arizona State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Ron Howard",
    "loser_school": "Cleveland State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Brad Reinke",
    "winner_school": "Wisconsin",
    "loser": "Joe Rovelli",
    "loser_school": "Hofstra",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Josh Glenn",
    "loser_school": "American",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "T.J. Morrison",
    "loser_school": "Rider",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Frank Cornely",
    "winner_school": "Duke",
    "loser": "Andy Rios",
    "loser_school": "Indiana",
    "result": "Dec 14-13"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Alex Dolly",
    "winner_school": "Northern Iowa",
    "loser": "Steve Borja",
    "loser_school": "Virginia Tech",
    "result": "Fall 2:51"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Ryan Halsey",
    "winner_school": "Cal Poly",
    "loser": "Alex Camargo",
    "loser_school": "Kent State",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Jake Butler",
    "loser_school": "Princeton",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "Scott Barker",
    "loser_school": "Oregon",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "David Dashiell",
    "loser_school": "North Carolina",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Marcio Botelho",
    "loser_school": "Fresno State",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Joel Weimer",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Thayer Paxton",
    "loser_school": "Navy",
    "result": "Fall 5:40"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Ryan Flaherty",
    "winner_school": "Wisconsin",
    "loser": "Matt Koz",
    "loser_school": "Minnesota",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Bredan McLean",
    "winner_school": "Air Force",
    "loser": "Casey Phelps",
    "loser_school": "Boise State",
    "result": "Dec 8-7 TB"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Dusty Hoffschneider",
    "loser_school": "Wyoming",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Mike Spaid",
    "winner_school": "Bloomsburg",
    "loser": "Eric Smith",
    "loser_school": "Boise State",
    "result": "Fall 3:47"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Bode Ogunwole",
    "winner_school": "Harvard",
    "loser": "Peter Ziminski",
    "loser_school": "Eastern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "Kirk Nail",
    "loser_school": "Ohio State",
    "result": "Fall 0:59"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Bill Stouffer",
    "winner_school": "Central Michigan",
    "loser": "Allen Kennett",
    "loser_school": "Portland State",
    "result": "Fall 0:47"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Joe Dennis",
    "winner_school": "Cleveland State",
    "loser": "Tyler Shovlin",
    "loser_school": "Cornell",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Tanner Garrett",
    "winner_school": "Navy",
    "loser": "Marc Allenmang",
    "loser_school": "Duquesne",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Jake Hager",
    "winner_school": "Oklahoma",
    "loser": "Joel Edwards",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Coleman Scott",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Vic Moreno",
    "loser_school": "Cal Poly",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Efren Ceballos",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Andrew Hochstrasser",
    "loser_school": "Boise State",
    "result": "TF 15-0 4:56"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Mark McKnight",
    "winner_school": "Buffalo",
    "loser": "Joe Kemmerer",
    "loser_school": "UNC Greensboro",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Adam Smith",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Robbie Preston",
    "winner_school": "Harvard",
    "loser": "Jeremy Mendoza",
    "loser_school": "Arizona State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Drew Forshey",
    "loser_school": "North Carolina",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Scott Jorgenson",
    "loser_school": "Boise State",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Drew Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Chad Mendes",
    "loser_school": "Cal Poly",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Nathan Morgan",
    "loser_school": "Oklahoma State",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Mario Galanakis",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Jesse Sundell",
    "loser_school": "Iowa State",
    "result": "Fall 1:12"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Sam Gray",
    "loser_school": "Navy",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Ryan McClester",
    "loser_school": "The Citadel",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Frank Edgar",
    "loser_school": "Clarion",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Cory Cooperman",
    "loser_school": "Lehigh",
    "result": "Fall 6:18"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Michael Keefe",
    "winner_school": "Chattanooga",
    "loser": "Josh Churella",
    "loser_school": "Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Daniel Frishkorn",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Juan Mora",
    "winner_school": "Cal State Fullerton",
    "loser": "Doug McGraw",
    "loser_school": "Penn",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Ronald Tarquinio",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Casio Pero",
    "winner_school": "Illinois",
    "loser": "Richard LaForge",
    "loser_school": "Hofstra",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Don Fisch",
    "winner_school": "Rider",
    "loser": "Jordan Leen",
    "loser_school": "Cornell",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Jon Masa",
    "loser_school": "Hofstra",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Matt Storniolo",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Ty Eustice",
    "loser_school": "Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Mark DiSalvo",
    "loser_school": "Central Michigan",
    "result": "Fall 2:32"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Tyde Prater",
    "winner_school": "Virginia Tech",
    "loser": "Josh Medina",
    "loser_school": "Lock Haven",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Ben Cherrington",
    "winner_school": "Boise State",
    "loser": "Mike Grimes",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Travis Shufelt",
    "winner_school": "Nebraska",
    "loser": "Jeff Harrison",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Patrick Williams",
    "winner_school": "Arizona State",
    "loser": "Ryan Hurley",
    "loser_school": "Cleveland State",
    "result": "Fall 5:58"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Alex Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Travis Piccard",
    "loser_school": "The Citadel",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Matt Gentry",
    "loser_school": "Stanford",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Brian Stith",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Jim Medeiros",
    "loser_school": "Fresno State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Brad Cieleski",
    "loser_school": "Missouri",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Nate Galloway",
    "loser_school": "Penn State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Chris Horning",
    "winner_school": "Clarion",
    "loser": "Kevin Ward",
    "loser_school": "Oklahoma State",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Tyron Woodley",
    "loser_school": "Missouri",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "John Sioredas",
    "loser_school": "Chattanooga",
    "result": "Fall 6:20"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Jacob Klein",
    "loser_school": "Nebraska",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Patrick Pitsch",
    "loser_school": "Arizona State",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "David Bolyard",
    "loser_school": "Central Michigan",
    "result": "DEF"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Matt Nagel",
    "winner_school": "Minnesota",
    "loser": "Matt Ellis",
    "loser_school": "Oregon State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Justin Nestor",
    "winner_school": "Pittsburgh",
    "loser": "Nick Balma",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:58"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "TF 16-1 5:58"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Imad Kharbush",
    "loser_school": "Stanford",
    "result": "MD 15-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Leonel Sanchez",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "E.K. Waldhaus",
    "loser_school": "Oklahoma",
    "result": "MD 17-4"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Bryce Hasseman",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:08"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Daniel Waters",
    "winner_school": "American",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Andrew Roy",
    "winner_school": "Rutgers",
    "loser": "Nick Passolano",
    "loser_school": "Iowa State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Mitch Hancock",
    "winner_school": "Central Michigan",
    "loser": "Kelly Flaherty",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Matt Pell",
    "loser_school": "Missouri",
    "result": "MD 13-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Eric Bradley",
    "loser_school": "Penn State",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Justin Dyer",
    "loser_school": "Oklahoma",
    "result": "Dec 17-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Tyler Baier",
    "winner_school": "Cornell",
    "loser": "Kurt Backes",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Ed Magrys",
    "loser_school": "Eastern Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Brad Reinke",
    "loser_school": "Wisconsin",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Frank Cornely",
    "loser_school": "Duke",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Ryan Halsey",
    "winner_school": "Cal Poly",
    "loser": "Alex Dolly",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Matt Delguyd",
    "loser_school": "Northwestern",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Morgan Horner",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Daren Burns",
    "loser_school": "UNC Greensboro",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Phil Davis",
    "loser_school": "Penn State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Jerry Rinaldi",
    "loser_school": "Cornell",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "J.D. Bergman",
    "loser_school": "Ohio State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Ryan Bader",
    "loser_school": "Arizona State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Ryan Flaherty",
    "winner_school": "Wisconsin",
    "loser": "Bredan McLean",
    "loser_school": "Air Force",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Steve Mocco",
    "winner_school": "Oklahoma State",
    "loser": "Matt Fields",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Greg Wagner",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Cain Velasquez",
    "winner_school": "Arizona State",
    "loser": "Matt Feast",
    "loser_school": "Penn",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Scott Coleman",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Mike Spaid",
    "loser_school": "Bloomsburg",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "Bode Ogunwole",
    "loser_school": "Harvard",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Bill Stouffer",
    "winner_school": "Central Michigan",
    "loser": "Joe Dennis",
    "loser_school": "Cleveland State",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Jake Hager",
    "winner_school": "Oklahoma",
    "loser": "Tanner Garrett",
    "loser_school": "Navy",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark McKnight",
    "loser_school": "Buffalo",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Andrew Hochstrasser",
    "loser_school": "Boise State",
    "result": "MD 16-6"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Robbie Preston",
    "loser_school": "Harvard",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "John Velez",
    "loser_school": "Northwestern",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Chad Mendes",
    "loser_school": "Cal Poly",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Nathan Morgan",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Scott Jorgenson",
    "loser_school": "Boise State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Drew Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Derek Moore",
    "loser_school": "UC Davis",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Juan Mora",
    "loser_school": "Cal State Fullerton",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Daniel Frishkorn",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Lang",
    "loser_school": "Northwestern",
    "result": "Fall 2:22"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Casio Pero",
    "winner_school": "Illinois",
    "loser": "Frank Edgar",
    "loser_school": "Clarion",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Don Fisch",
    "loser_school": "Rider",
    "result": "TF 23-8 0:00"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Tyde Prater",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Mark DiSalvo",
    "winner_school": "Central Michigan",
    "loser": "Ben Cherrington",
    "loser_school": "Boise State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Travis Shufelt",
    "loser_school": "Nebraska",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "Patrick Williams",
    "loser_school": "Arizona State",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Matt Gentry",
    "loser_school": "Stanford",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "C.P. Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Alex Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Chris Horning",
    "winner_school": "Clarion",
    "loser": "Travis Piccard",
    "loser_school": "The Citadel",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "John Sioredas",
    "winner_school": "Chattanooga",
    "loser": "Mike Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Jacob Klein",
    "loser_school": "Nebraska",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Matt Nagel",
    "winner_school": "Minnesota",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Justin Nestor",
    "loser_school": "Pittsburgh",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Leonel Sanchez",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 4:42"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Daniel Waters",
    "winner_school": "American",
    "loser": "E.K. Waldhaus",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "Andrew Roy",
    "loser_school": "Rutgers",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Mitch Hancock",
    "winner_school": "Central Michigan",
    "loser": "Imad Kharbush",
    "loser_school": "Stanford",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Justin Dyer",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Kurt Backes",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Roger Kish",
    "loser_school": "Minnesota",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "Ryan Halsey",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Daren Burns",
    "loser_school": "UNC Greensboro",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Chris Skretkowicz",
    "loser_school": "Hofstra",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Matt Delguyd",
    "loser_school": "Northwestern",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Ryan Flaherty",
    "winner_school": "Wisconsin",
    "loser": "Morgan Horner",
    "loser_school": "Lock Haven",
    "result": "Fall 0:53"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Dustin Fox",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Scott Coleman",
    "winner_school": "Iowa State",
    "loser": "Payam Zarrinpour",
    "loser_school": "Sacred Heart",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Bill Stouffer",
    "winner_school": "Central Michigan",
    "loser": "Matt Fields",
    "loser_school": "Iowa",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Jake Hager",
    "loser_school": "Oklahoma",
    "result": "MD 11-2"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Sam Hazewinkel",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Nick Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "Bobbe Lowe",
    "loser_school": "Minnesota",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "Coleman Scott",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Tom Clum",
    "loser_school": "Wisconsin",
    "result": "Fall 2:55"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Mack Reiter",
    "loser_school": "Minnesota",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Mark Jayne",
    "loser_school": "Illinois",
    "result": "Fall 2:27"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Drew Headlee",
    "loser_school": "Pittsburgh",
    "result": "Fall 2:44"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Andy Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Michael Keefe",
    "loser_school": "Chattanooga",
    "result": "TF 18-3 5:40"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Daniel Frishkorn",
    "winner_school": "Oklahoma State",
    "loser": "Josh Churella",
    "loser_school": "Michigan",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Casio Pero",
    "loser_school": "Illinois",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Eric Tannenbaum",
    "loser_school": "Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Dustin Manotti",
    "loser_school": "Cornell",
    "result": "MD 8-0"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Mark DiSalvo",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Matt Storniolo",
    "loser_school": "Oklahoma",
    "result": "MD 11-3"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Jake Percival",
    "loser_school": "Ohio",
    "result": "Dec 9-8"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Trent Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "Matt Lebe",
    "loser_school": "West Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Chris Horning",
    "loser_school": "Clarion",
    "result": "Fall 4:03"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Troy Letters",
    "loser_school": "Lehigh",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Churella",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "John Sioredas",
    "winner_school": "Chattanooga",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "Fall 5:37"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Matt Nagel",
    "winner_school": "Minnesota",
    "loser": "Tyron Woodley",
    "loser_school": "Missouri",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Joe Mazzurco",
    "loser_school": "Cornell",
    "result": "TF 16-1 4:02"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Pete Friedl",
    "loser_school": "Illinois",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Daniel Waters",
    "loser_school": "American",
    "result": "TF 15-0 5:45"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "Mitch Hancock",
    "loser_school": "Central Michigan",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Brian Glynn",
    "loser_school": "Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Tyler Baier",
    "winner_school": "Cornell",
    "loser": "Travis Pascoe",
    "loser_school": "Nebraska",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Ben Wissel",
    "loser_school": "Purdue",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "Matt Pell",
    "loser_school": "Missouri",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Jon Trenge",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "B.J. Padden",
    "loser_school": "Nebraska",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Phil Davis",
    "loser_school": "Penn State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Ryan Flaherty",
    "loser_school": "Wisconsin",
    "result": "Dec 13-8"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Steve Mocco",
    "winner_school": "Oklahoma State",
    "loser": "Pat DeGain",
    "loser_school": "Indiana",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Cain Velasquez",
    "loser_school": "Arizona State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Scott Coleman",
    "loser_school": "Iowa State",
    "result": "Dec 3-2 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Bill Stouffer",
    "loser_school": "Central Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Efren Ceballos",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Vic Moreno",
    "loser_school": "Cal Poly",
    "result": "MD 8-0"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Evan Sola",
    "loser_school": "North Carolina",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Matt Sanchez",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 1:18"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Daniel Frishkorn",
    "winner_school": "Oklahoma State",
    "loser": "Andy Simmons",
    "loser_school": "Michigan State",
    "result": "DEF"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Michael Keefe",
    "loser_school": "Chattanooga",
    "result": "Fall 4:52"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Ty Eustice",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Dustin Manotti",
    "loser_school": "Cornell",
    "result": "MD 11-3"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Brian Stith",
    "loser_school": "Arizona State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Brandon Becker",
    "loser_school": "Indiana",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "John Sioredas",
    "loser_school": "Chattanooga",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Matt Nagel",
    "loser_school": "Minnesota",
    "result": "TF 16-0 5:26"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Joe Mazzurco",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Paul Bradley",
    "loser_school": "Iowa",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "Travis Pascoe",
    "loser_school": "Nebraska",
    "result": "Dec 14-10 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Wynn Michalak",
    "loser_school": "Central Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "B.J. Padden",
    "loser_school": "Nebraska",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Matt Feast",
    "loser_school": "Penn",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Cain Velasquez",
    "loser_school": "Arizona State",
    "result": "Dec 4-1"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Nick Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "Vic Moreno",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Coleman Scott",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Mack Reiter",
    "loser_school": "Minnesota",
    "result": "Dec 2-1"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Evan Sola",
    "loser_school": "North Carolina",
    "result": "Dec 10-5"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Drew Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Daniel Frishkorn",
    "loser_school": "Oklahoma State",
    "result": "MD 10-1"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Michael Keefe",
    "winner_school": "Chattanooga",
    "loser": "Andy Simmons",
    "loser_school": "Michigan State",
    "result": "M FOR"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Casio Pero",
    "winner_school": "Illinois",
    "loser": "Josh Churella",
    "loser_school": "Michigan",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Eric Tannenbaum",
    "loser_school": "Michigan",
    "result": "Dec 8-1"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Dustin Manotti",
    "loser_school": "Cornell",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "Mark DiSalvo",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Trent Paulson",
    "loser_school": "Iowa State",
    "result": "Fall 6:23"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Brian Stith",
    "loser_school": "Arizona State",
    "result": "Dec 10-6"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Chris Horning",
    "loser_school": "Clarion",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Ryan Churella",
    "loser_school": "Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "John Sioredas",
    "winner_school": "Chattanooga",
    "loser": "Matt Nagel",
    "loser_school": "Minnesota",
    "result": "Fall 6:07"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Pete Friedl",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Mitch Hancock",
    "winner_school": "Central Michigan",
    "loser": "Daniel Waters",
    "loser_school": "American",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Eric Bradley",
    "loser_school": "Penn State",
    "result": "Dec 9-3"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Travis Pascoe",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Ben Wissel",
    "loser_school": "Purdue",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Joel Flaggert",
    "loser_school": "Oklahoma",
    "result": "MD 12-1"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Wynn Michalak",
    "loser_school": "Central Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Ryan Flaherty",
    "loser_school": "Wisconsin",
    "result": "Dec 5-0"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Greg Wagner",
    "loser_school": "Michigan",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Cain Velasquez",
    "winner_school": "Arizona State",
    "loser": "Matt Feast",
    "loser_school": "Penn",
    "result": "Dec 5-1"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Scott Coleman",
    "winner_school": "Iowa State",
    "loser": "Bill Stouffer",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Kyle Ott",
    "loser_school": "Illinois",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Shawn Bunch",
    "loser_school": "Edinboro",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Nate Gallick",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Phillip Simpson",
    "loser_school": "Army",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Joe Johnston",
    "loser_school": "Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Mark Perry",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Ben Askren",
    "loser_school": "Missouri",
    "result": "Dec 10-5"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Tyler Baier",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Sean Stender",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Steve Mocco",
    "winner_school": "Oklahoma State",
    "loser": "Cole Konrad",
    "loser_school": "Minnesota",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 1005,
    "winner": "Muzaffar Abdurakhmanov",
    "winner_school": "American",
    "loser": "Dave Miller",
    "loser_school": "Rider",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 1007,
    "winner": "Nick Passolano",
    "winner_school": "Iowa State",
    "loser": "Eric Ring",
    "loser_school": "Edinboro",
    "result": "Dec 6-1"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 1008,
    "winner": "Tyler Baier",
    "winner_school": "Cornell",
    "loser": "Mark Knock",
    "loser_school": "Millersville",
    "result": "Fall 6:00"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 1010,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Clinton Walbeck",
    "loser_school": "Fresno State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 1175,
    "winner": "Dave Miller",
    "winner_school": "Rider",
    "loser": "Danny Clum",
    "loser_school": "Wyoming",
    "result": "Fall 1:36"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 1177,
    "winner": "Jeremy Larson",
    "winner_school": "Oregon State",
    "loser": "Kevin Gabrielson",
    "loser_school": "NC State",
    "result": "M FOR"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 1178,
    "winner": "Alex Dolly",
    "winner_school": "Northern Iowa",
    "loser": "Mark Knock",
    "loser_school": "Millersville",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 1180,
    "winner": "Joel Edwards",
    "winner_school": "Penn State",
    "loser": "Chris Cowen",
    "loser_school": "Drexel",
    "result": "Dec 7-1"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 2010,
    "winner": "Tanner Garrett",
    "winner_school": "Navy",
    "loser": "Ruebon Daniels",
    "loser_school": "Appalachian State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 2180,
    "winner": "Bode Ogunwole",
    "winner_school": "Harvard",
    "loser": "Clinton Walbeck",
    "loser_school": "Fresno State",
    "result": "Dec 4-2 SV"
  }
];
