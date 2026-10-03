// 2001 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 2001 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results2001-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Eric Dunmire",
    "winner_school": "Northern Iowa",
    "loser": "Navarro, Nathan",
    "loser_school": "Oregon State",
    "result": "Dec 6-5"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Jason DeBruin",
    "winner_school": "Hofstra",
    "loser": "Waldron, Tom",
    "loser_school": "Cornell",
    "result": "Dec 5-1"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Ed Hockenberry",
    "winner_school": "Bloomsburg",
    "loser": "Papadatos, Dennis",
    "loser_school": "Hofstra",
    "result": "TF 18-3 7:00"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Pat O'Donnell",
    "winner_school": "Harvard",
    "loser": "Pennell, Jed",
    "loser_school": "Oregon State",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Everett Bell",
    "winner_school": "Seton Hall",
    "loser": "Hieber, Ryan",
    "loser_school": "Ohio State",
    "result": "Fall 1:41"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "David Shunamon",
    "winner_school": "Edinboro",
    "loser": "Tyner, David",
    "loser_school": "Chattanooga",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Jacob Gray",
    "loser_school": "Edinboro",
    "result": "Fall 4:38"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Shawn Amistade",
    "winner_school": "Pittsburgh",
    "loser": "Kore Sharpley",
    "loser_school": "Ohio State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Ruben DeLeon",
    "winner_school": "CSU Bakersfield",
    "loser": "Jerold Limongelli",
    "loser_school": "Rider",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Mason Lenhard",
    "loser_school": "Penn",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Matt Ridings",
    "winner_school": "Oklahoma",
    "loser": "Shawn Williams",
    "loser_school": "Oregon",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Tom Noto",
    "loser_school": "Hofstra",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Ahmad Sanders",
    "winner_school": "Central Michigan",
    "loser": "Jose Leon",
    "loser_school": "Boston University",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Tommy Hoang",
    "winner_school": "Duke",
    "loser": "Jason Powell",
    "loser_school": "Nebraska",
    "result": "Fall 6:43"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Eric Dunmire",
    "loser_school": "Northern Iowa",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Justin Spates",
    "winner_school": "Missouri",
    "loser": "Sean Shea",
    "loser_school": "George Mason",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Ryan Escobar",
    "winner_school": "Illinois",
    "loser": "Omar Porratta",
    "loser_school": "Millersville",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Matt Brown",
    "winner_school": "Oklahoma State",
    "loser": "Rich Caisse",
    "loser_school": "Appalachian State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Brent Thompson",
    "winner_school": "Kent State",
    "loser": "Chris Williams",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Rocco Mansueto",
    "loser_school": "Cleveland State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "George Cintron",
    "loser_school": "NC State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "John Fasana",
    "loser_school": "Portland State",
    "result": "Fall 5:17"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Derrick Hayes",
    "loser_school": "Fresno State",
    "result": "Fall 3:31"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Scott Bair",
    "loser_school": "Lock Haven",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Kevin Black",
    "winner_school": "Wisconsin",
    "loser": "Juan Venturi",
    "loser_school": "Princeton",
    "result": "Fall 1:50"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Evan Robinson",
    "winner_school": "Purdue",
    "loser": "Joe Alexander",
    "loser_school": "Virginia",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Jeff Ratliff",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Matt Hunkler",
    "winner_school": "George Mason",
    "loser": "Urijah Faber",
    "loser_school": "UC Davis",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Matt Picarsic",
    "loser_school": "Harvard",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Todd Beckerman",
    "winner_school": "Nebraska",
    "loser": "Nick Boucher",
    "loser_school": "Cleveland State",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Ben Richards",
    "winner_school": "Oregon State",
    "loser": "Rad Martinez",
    "loser_school": "Clarion",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Travis Drake",
    "loser_school": "Appalachian State",
    "result": "Fall 6:30"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Charlie Griggs",
    "loser_school": "Boise State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Matt Azevedo",
    "winner_school": "Iowa State",
    "loser": "Dylan Long",
    "loser_school": "Northern Iowa",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Brett Lawrence",
    "winner_school": "Minnesota",
    "loser": "Derek Butts",
    "loser_school": "Howard",
    "result": "TF 19-1 6:40"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Brandon York",
    "winner_school": "Maryland",
    "loser": "Jordan Webster",
    "loser_school": "Central Michigan",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Marat Tomaev",
    "loser_school": "Penn State",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Mark Conley",
    "loser_school": "Navy",
    "result": "TF 23-6 6:59"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Jared Sullivan",
    "winner_school": "Chattanooga",
    "loser": "Matt Goldstein",
    "loser_school": "Lehigh",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Mark Mansueto",
    "loser_school": "Maryland",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Charles Walker",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Egan",
    "loser_school": "Northern Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Donnie DeFilippis",
    "winner_school": "George Mason",
    "loser": "Frank Edgar",
    "loser_school": "Clarion",
    "result": "Fall 2:48"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Pat Diaz",
    "loser_school": "James Madison",
    "result": "Fall 6:27"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Mike Castillo",
    "winner_school": "Michigan State",
    "loser": "Andrew Gharst",
    "loser_school": "Cal Poly",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Robert Sessley",
    "loser_school": "Ohio State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Mark Rial",
    "loser_school": "Northern Iowa",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Ralph Lopez",
    "winner_school": "Fresno State",
    "loser": "Mike Settembrino",
    "loser_school": "Seton Hall",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Grant Hoerr",
    "winner_school": "Wisconsin",
    "loser": "Gabe Vigil",
    "loser_school": "Boise State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Cory Ace",
    "winner_school": "Edinboro",
    "loser": "Jason DeBruin",
    "loser_school": "Hofstra",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Chad Erikson",
    "winner_school": "Minnesota",
    "loser": "Corey Williams",
    "loser_school": "UNC Greensboro",
    "result": "Fall 1:35"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Mike Castillo",
    "winner_school": "Illinois",
    "loser": "Jason Mester",
    "loser_school": "Central Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Shane Cunanan",
    "winner_school": "Oregon State",
    "loser": "Coyte Cooper",
    "loser_school": "Indiana",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Tony Abbate",
    "loser_school": "Slippery Rock",
    "result": "TF 19-4 4:43"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Dana Holland",
    "loser_school": "Arizona State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Scott Frohardt",
    "loser_school": "Air Force",
    "result": "MD 26-12"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "George Carter",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Collin Robertson",
    "winner_school": "Boise State",
    "loser": "Marc Hoffer",
    "loser_school": "American",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Cedric Haymon",
    "winner_school": "Cal Poly",
    "loser": "Tommy Davis",
    "loser_school": "NC State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Joe Henson",
    "winner_school": "Penn",
    "loser": "Erick Glass",
    "loser_school": "Duquesne",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Bill Maldonado",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Malik Elliott",
    "loser_school": "Boston University",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Ty Morgan",
    "winner_school": "Central Michigan",
    "loser": "Adrian Austin",
    "loser_school": "George Mason",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Mike Kulczycki",
    "winner_school": "Michigan",
    "loser": "Jesse Jantzen",
    "loser_school": "Harvard",
    "result": "Dec 9-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Dom Surra",
    "loser_school": "Clarion",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "JaMarr Billman",
    "winner_school": "Lock Haven",
    "loser": "Nate Wachter",
    "loser_school": "Penn State",
    "result": "TF 24-9 6:20"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Keaton Anderson",
    "winner_school": "Ohio State",
    "loser": "Tony Overstake",
    "loser_school": "Oregon",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Ryan Shapert",
    "winner_school": "Edinboro",
    "loser": "Karl Nadolsky",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Adam Britt",
    "loser_school": "VMI",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Joe Carr",
    "loser_school": "West Virginia",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Ryan Bernholz",
    "winner_school": "Lehigh",
    "loser": "Pierre Pryor",
    "loser_school": "NC State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Zachariah Doll",
    "winner_school": "Pittsburgh",
    "loser": "Nathan Vasquez",
    "loser_school": "Fresno State",
    "result": "Fall 6:33"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Ed Hockenberry",
    "winner_school": "Bloomsburg",
    "loser": "Sean Early",
    "loser_school": "George Mason",
    "result": "TF 18-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Levi Prevost",
    "loser_school": "Wyoming",
    "result": "TF 21-6 6:24"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Timothy Huxel",
    "loser_school": "Air Force",
    "result": "Fall 6:32"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Shaun Shapert",
    "winner_school": "Edinboro",
    "loser": "Josh Janson",
    "loser_school": "Ohio State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "Max Odom",
    "loser_school": "Harvard",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "Yoshi Nakamura",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Clovis Crane",
    "loser_school": "Purdue",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Leo Urbinelli",
    "winner_school": "Cornell",
    "loser": "Ryan Smith",
    "loser_school": "Ohio",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Robby Bell",
    "loser_school": "The Citadel",
    "result": "TF 18-3 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Cole Sanderson",
    "winner_school": "Iowa State",
    "loser": "Eugene Harris",
    "loser_school": "Oregon",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Rocky Smart",
    "winner_school": "Arizona State",
    "loser": "Pat Owen",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Jason Gilligan",
    "loser_school": "Lock Haven",
    "result": "Fall 5:48"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Sulieman Mumin",
    "loser_school": "Coppin State",
    "result": "Fall 4:00"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Luke Larwin",
    "loser_school": "Oregon",
    "result": "TF 25-8 6:52"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Nick Nemeth",
    "winner_school": "Kent State",
    "loser": "Tony Howard",
    "loser_school": "George Mason",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Kevin Stanley",
    "winner_school": "Indiana",
    "loser": "Chris Pendleton",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Dave Guarino",
    "winner_school": "Buffalo",
    "loser": "Nick Catone",
    "loser_school": "Rider",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Mark Fee",
    "loser_school": "Appalachian State",
    "result": "Dec 19-12"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Tony Denke",
    "winner_school": "Nebraska",
    "loser": "Ian Nelms",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Doug Cieleski",
    "winner_school": "Slippery Rock",
    "loser": "Pat O'Donnell",
    "loser_school": "Harvard",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Hunter Guenot",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Chris Vitale",
    "winner_school": "Lehigh",
    "loser": "Steven Blackford",
    "loser_school": "Arizona State",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Ben Shirk",
    "winner_school": "Iowa",
    "loser": "Burt Pierson",
    "loser_school": "UC Davis",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Ben Boozer",
    "winner_school": "Edinboro",
    "loser": "Josh Weidman",
    "loser_school": "Maryland",
    "result": "MD 15-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Brad Pike",
    "winner_school": "Minnesota",
    "loser": "Nate Lawrenz",
    "loser_school": "Northern Iowa",
    "result": "MD 20-7"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Chris Martin",
    "winner_school": "Virginia Tech",
    "loser": "John Clark",
    "loser_school": "Ohio State",
    "result": "Fall 6:43"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Charles Martelli",
    "winner_school": "Michigan",
    "loser": "Tim Ortman",
    "loser_school": "Penn",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Denis Alampiev",
    "winner_school": "American",
    "loser": "Greg Francesca",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Noel Thompson",
    "loser_school": "Hofstra",
    "result": "Dec 5-5 TB"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Louis Taylor",
    "loser_school": "Eastern Illinois",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Luke Moore",
    "winner_school": "Ohio",
    "loser": "Steve Schenk",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Perry Parks",
    "winner_school": "Iowa State",
    "loser": "Jeff Rusak",
    "loser_school": "Old Dominion",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Nathan Coy",
    "winner_school": "Oregon State",
    "loser": "Cassidy Shults",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Gabe McMahan",
    "winner_school": "Iowa",
    "loser": "Dustin Kawa",
    "loser_school": "NC State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Ati Conner",
    "winner_school": "Nebraska",
    "loser": "Adrian Garcia",
    "loser_school": "UC Davis",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Mark Becks",
    "winner_school": "Penn State",
    "loser": "John Kopnisky",
    "loser_school": "Missouri",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Jim Stanec",
    "loser_school": "Cornell",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Maurice Worthy",
    "winner_school": "Army",
    "loser": "Ryan Lange",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Everett Bell",
    "winner_school": "Seton Hall",
    "loser": "Alan Grasso",
    "loser_school": "Millersville",
    "result": "Dec 6-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Michael Barger",
    "winner_school": "Oklahoma",
    "loser": "Mike Regner",
    "loser_school": "The Citadel",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Mike Feeney",
    "winner_school": "Eastern Michigan",
    "loser": "Corey Bell",
    "loser_school": "North Carolina",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Eric Hall",
    "winner_school": "Virginia Tech",
    "loser": "Steve Strange",
    "loser_school": "Cal Poly",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Rob Anspach",
    "loser_school": "Hofstra",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Ben King",
    "winner_school": "Illinois",
    "loser": "Eric Brown",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Curtis Owen",
    "loser_school": "Arizona State",
    "result": "Fall 2:38"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Kyle Hansen",
    "loser_school": "Northern Iowa",
    "result": "TF 24-9 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Jeremy Wilson",
    "winner_school": "Portland State",
    "loser": "Justin Millard",
    "loser_school": "Edinboro",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "Jimi Massey",
    "loser_school": "Virginia",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Dan Stine",
    "loser_school": "Pittsburgh",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Scott Justus",
    "winner_school": "Virginia Tech",
    "loser": "Damion Hahn",
    "loser_school": "Minnesota",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Francis Volpe",
    "winner_school": "Harvard",
    "loser": "Shawn Scannell",
    "loser_school": "Rider",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Adam Duncan",
    "winner_school": "Chattanooga",
    "loser": "Ralph DeNisco",
    "loser_school": "Wisconsin",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Josh Millard",
    "loser_school": "Lock Haven",
    "result": "Fall 3:56"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Daniel Cormier",
    "winner_school": "Oklahoma State",
    "loser": "R.D. Pursell",
    "loser_school": "Arizona State",
    "result": "Fall 2:50"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Jake Stork",
    "winner_school": "Maryland",
    "loser": "John Garriques",
    "loser_school": "Seton Hall",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Rob Rohn",
    "loser_school": "Lehigh",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Doug Lee",
    "winner_school": "Oregon",
    "loser": "Jeffrey Moskyok",
    "loser_school": "Duquesne",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Tom Cass",
    "loser_school": "Duke",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Tom Tanis",
    "winner_school": "Rutgers",
    "loser": "Nick Magistrelli",
    "loser_school": "Kent State",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Anton Talamantes",
    "winner_school": "Ohio State",
    "loser": "Josh States",
    "loser_school": "Buffalo",
    "result": "Dec 15-11"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Nate Patrick",
    "winner_school": "Illinois",
    "loser": "Dave Colabella",
    "loser_school": "James Madison",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Nik Fekete",
    "loser_school": "Michigan State",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Brett Faustman",
    "winner_school": "Central Michigan",
    "loser": "Chris Jones",
    "loser_school": "Drexel",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "David Schenk",
    "loser_school": "Cal Poly",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Waymon May",
    "winner_school": "Oklahoma",
    "loser": "Pete Mielnik",
    "loser_school": "Penn State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Eric Mausser",
    "loser_school": "Clarion",
    "result": "Fall 5:49"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Joe DeGain",
    "winner_school": "Michigan",
    "loser": "Avery Zerkle",
    "loser_school": "Lock Haven",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Babek Nejadmaghaddam",
    "winner_school": "Cal State Fullerton",
    "loser": "Ryan Pallinger",
    "loser_school": "American",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "David Sandberg",
    "winner_school": "Pittsburgh",
    "loser": "Rusty Cook",
    "loser_school": "Boise State",
    "result": "Fall 6:57"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Rick Romero",
    "winner_school": "Rutgers",
    "loser": "Zach Thompson",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Jon Bush",
    "winner_school": "Purdue",
    "loser": "Clint Osborn",
    "loser_school": "North Carolina",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Mike Fickell",
    "winner_school": "Penn",
    "loser": "Dan Bednar",
    "loser_school": "Ohio",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Craig Rumsey",
    "winner_school": "Wyoming",
    "loser": "Chael Sonnen",
    "loser_school": "Oregon",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "David Shunamon",
    "loser_school": "Edinboro",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Jason Payne",
    "winner_school": "Northern Iowa",
    "loser": "Zach Breitenbach",
    "loser_school": "NC State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Ty Matthews",
    "winner_school": "Indiana",
    "loser": "Corey Anderson",
    "loser_school": "Cornell",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Leonard Bridgeforth",
    "loser_school": "Delaware State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Garrett Lowney",
    "winner_school": "Minnesota",
    "loser": "Bronson Lingamfelter",
    "loser_school": "Brown",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Dawid Rechul",
    "winner_school": "Harvard",
    "loser": "Mike Maben",
    "loser_school": "UC Davis",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "John Devine",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "John Testa",
    "winner_school": "Clarion",
    "loser": "Adrian Thompson",
    "loser_school": "Howard",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "John Eschenfelder",
    "winner_school": "Buffalo",
    "loser": "Ryan Kehler",
    "loser_school": "West Virginia",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Jake Vercelli",
    "winner_school": "Purdue",
    "loser": "Brent Lancaster",
    "loser_school": "George Mason",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "James Huml",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Antonio Garay",
    "winner_school": "Boston College",
    "loser": "Matt Kenny",
    "loser_school": "North Carolina",
    "result": "Fall 1:48"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Shawn Laughlin",
    "winner_school": "Lehigh",
    "loser": "Kevin Hoy",
    "loser_school": "Air Force",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Mark Knauer",
    "winner_school": "Iowa State",
    "loser": "Jason Cooley",
    "loser_school": "Oregon State",
    "result": "Fall 3:14"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Billy Blunt",
    "winner_school": "Fresno State",
    "loser": "Justin Staebler",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Bob Jones",
    "winner_school": "Penn State",
    "loser": "David Kimble",
    "loser_school": "UNC Greensboro",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Josh Pearce",
    "loser_school": "Edinboro",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "McCormack, Trap",
    "winner_school": "Lock Haven",
    "loser": "Jacob Gray",
    "loser_school": "Edinboro",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Frank Edgar",
    "winner_school": "Clarion",
    "loser": "Waldron, Tom",
    "loser_school": "Cornell",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Eugene Harris",
    "winner_school": "Oregon",
    "loser": "Papadatos, Dennis",
    "loser_school": "Hofstra",
    "result": "MD 14-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Pennell, Jed",
    "winner_school": "Oregon State",
    "loser": "Burt Pierson",
    "loser_school": "UC Davis",
    "result": "Fall 6:41"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "John Kopnisky",
    "winner_school": "Missouri",
    "loser": "Hieber, Ryan",
    "loser_school": "Ohio State",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Pete Mielnik",
    "winner_school": "Penn State",
    "loser": "Tyner, David",
    "loser_school": "Chattanooga",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Shawn Amistade",
    "loser_school": "Pittsburgh",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Ruben DeLeon",
    "winner_school": "CSU Bakersfield",
    "loser": "Ben Vombaur",
    "loser_school": "Boise State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Matt Ridings",
    "loser_school": "Oklahoma",
    "result": "Dec 12-11"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Ahmad Sanders",
    "winner_school": "Central Michigan",
    "loser": "Tommy Hoang",
    "loser_school": "Duke",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Justin Spates",
    "loser_school": "Missouri",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Ryan Escobar",
    "winner_school": "Illinois",
    "loser": "Matt Brown",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Brent Thompson",
    "loser_school": "Kent State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "Josh Moore",
    "loser_school": "Penn State",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "John Fasana",
    "winner_school": "Portland State",
    "loser": "George Cintron",
    "loser_school": "NC State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Chris Williams",
    "winner_school": "Michigan State",
    "loser": "Rocco Mansueto",
    "loser_school": "Cleveland State",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Rich Caisse",
    "winner_school": "Appalachian State",
    "loser": "Omar Porratta",
    "loser_school": "Millersville",
    "result": "Dec 4-4 TB"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Sean Shea",
    "winner_school": "George Mason",
    "loser": "Eric Dunmire",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:35"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Navarro, Nathan",
    "winner_school": "Oregon State",
    "loser": "Jose Leon",
    "loser_school": "Boston University",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Shawn Williams",
    "winner_school": "Oregon",
    "loser": "Tom Noto",
    "loser_school": "Hofstra",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Jerold Limongelli",
    "winner_school": "Rider",
    "loser": "Mason Lenhard",
    "loser_school": "Penn",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "McCormack, Trap",
    "winner_school": "Lock Haven",
    "loser": "Kore Sharpley",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Witt Durden",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Kevin Black",
    "winner_school": "Wisconsin",
    "loser": "Evan Robinson",
    "loser_school": "Purdue",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Shawn Kegal",
    "loser_school": "Buffalo",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Matt Hunkler",
    "loser_school": "George Mason",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Todd Beckerman",
    "winner_school": "Nebraska",
    "loser": "Ben Richards",
    "loser_school": "Oregon State",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Rob Loper",
    "loser_school": "Pittsburgh",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Matt Azevedo",
    "winner_school": "Iowa State",
    "loser": "Brett Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Brandon York",
    "loser_school": "Maryland",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Marat Tomaev",
    "winner_school": "Penn State",
    "loser": "Jordan Webster",
    "loser_school": "Central Michigan",
    "result": "MD 16-8"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Derek Butts",
    "loser_school": "Howard",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Charlie Griggs",
    "winner_school": "Boise State",
    "loser": "Travis Drake",
    "loser_school": "Appalachian State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Nick Boucher",
    "winner_school": "Cleveland State",
    "loser": "Rad Martinez",
    "loser_school": "Clarion",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Urijah Faber",
    "winner_school": "UC Davis",
    "loser": "Matt Picarsic",
    "loser_school": "Harvard",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Joe Alexander",
    "winner_school": "Virginia",
    "loser": "Juan Venturi",
    "loser_school": "Princeton",
    "result": "MD 20-12"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Scott Bair",
    "winner_school": "Lock Haven",
    "loser": "Derrick Hayes",
    "loser_school": "Fresno State",
    "result": "Fall 4:45"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Jared Sullivan",
    "loser_school": "Chattanooga",
    "result": "TF 22-7 6:58"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Charles Walker",
    "winner_school": "Oklahoma State",
    "loser": "Zach Roberson",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Donnie DeFilippis",
    "loser_school": "George Mason",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Mike Castillo",
    "loser_school": "Michigan State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Ralph Lopez",
    "loser_school": "Fresno State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Grant Hoerr",
    "winner_school": "Wisconsin",
    "loser": "Cory Ace",
    "loser_school": "Edinboro",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Chad Erikson",
    "winner_school": "Minnesota",
    "loser": "Mike Castillo",
    "loser_school": "Illinois",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Shane Cunanan",
    "loser_school": "Oregon State",
    "result": "TF 17-2 4:44"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Coyte Cooper",
    "winner_school": "Indiana",
    "loser": "Tony Abbate",
    "loser_school": "Slippery Rock",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Corey Williams",
    "winner_school": "UNC Greensboro",
    "loser": "Hart, Jeremy",
    "loser_school": "Appalachian State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Gabe Vigil",
    "winner_school": "Boise State",
    "loser": "Jason DeBruin",
    "loser_school": "Hofstra",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Mark Rial",
    "winner_school": "Northern Iowa",
    "loser": "Mike Settembrino",
    "loser_school": "Seton Hall",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Andrew Gharst",
    "loser_school": "Cal Poly",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Pat Diaz",
    "winner_school": "James Madison",
    "loser": "Frank Edgar",
    "loser_school": "Clarion",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Ryan Egan",
    "winner_school": "Northern Illinois",
    "loser": "Mark Mansueto",
    "loser_school": "Maryland",
    "result": "MD 15-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Matt Goldstein",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Reggie Wright",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "JohnMark Bentley",
    "loser_school": "North Carolina",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Cedric Haymon",
    "winner_school": "Cal Poly",
    "loser": "Collin Robertson",
    "loser_school": "Boise State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Joe Henson",
    "loser_school": "Penn",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Ty Morgan",
    "loser_school": "Central Michigan",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Mike Kulczycki",
    "winner_school": "Michigan",
    "loser": "Eric Schmiesing",
    "loser_school": "Hofstra",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "JaMarr Billman",
    "winner_school": "Lock Haven",
    "loser": "Keaton Anderson",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Ryan Shapert",
    "loser_school": "Edinboro",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Karl Nadolsky",
    "winner_school": "Michigan State",
    "loser": "Adam Britt",
    "loser_school": "VMI",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Nate Wachter",
    "winner_school": "Penn State",
    "loser": "Tony Overstake",
    "loser_school": "Oregon",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Dom Surra",
    "loser_school": "Clarion",
    "result": "Fall 1:26"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Malik Elliott",
    "winner_school": "Boston University",
    "loser": "Adrian Austin",
    "loser_school": "George Mason",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Erick Glass",
    "loser_school": "Duquesne",
    "result": "TF 21-6 6:45"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Tommy Davis",
    "winner_school": "NC State",
    "loser": "Marc Hoffer",
    "loser_school": "American",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Dana Holland",
    "winner_school": "Arizona State",
    "loser": "Scott Frohardt",
    "loser_school": "Air Force",
    "result": "Fall 2:07"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Ryan Bernholz",
    "loser_school": "Lehigh",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Ed Hockenberry",
    "winner_school": "Bloomsburg",
    "loser": "Zachariah Doll",
    "loser_school": "Pittsburgh",
    "result": "Dec 13-12"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Kirk White",
    "loser_school": "Boise State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "Shaun Shapert",
    "loser_school": "Edinboro",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Griff Powell",
    "loser_school": "Illinois",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Leo Urbinelli",
    "loser_school": "Cornell",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Cole Sanderson",
    "winner_school": "Iowa State",
    "loser": "Rocky Smart",
    "loser_school": "Arizona State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Gray Maynard",
    "loser_school": "Michigan State",
    "result": "Fall 6:42"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Sulieman Mumin",
    "winner_school": "Coppin State",
    "loser": "Jason Gilligan",
    "loser_school": "Lock Haven",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Eugene Harris",
    "winner_school": "Oregon",
    "loser": "Pat Owen",
    "loser_school": "Michigan",
    "result": "Fall 6:37"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Ryan Smith",
    "winner_school": "Ohio",
    "loser": "Robby Bell",
    "loser_school": "The Citadel",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Clovis Crane",
    "loser_school": "Purdue",
    "result": "TF 20-5 6:30"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Josh Janson",
    "winner_school": "Ohio State",
    "loser": "Max Odom",
    "loser_school": "Harvard",
    "result": "Fall 6:15"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Timothy Huxel",
    "winner_school": "Air Force",
    "loser": "Levi Prevost",
    "loser_school": "Wyoming",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Nathan Vasquez",
    "winner_school": "Fresno State",
    "loser": "Sean Early",
    "loser_school": "George Mason",
    "result": "Fall 4:14"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Pierre Pryor",
    "winner_school": "NC State",
    "loser": "Joe Carr",
    "loser_school": "West Virginia",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Nick Nemeth",
    "loser_school": "Kent State",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Kevin Stanley",
    "winner_school": "Indiana",
    "loser": "Dave Guarino",
    "loser_school": "Buffalo",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Tony Denke",
    "loser_school": "Nebraska",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Doug Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Ben Shirk",
    "winner_school": "Iowa",
    "loser": "Chris Vitale",
    "loser_school": "Lehigh",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Brad Pike",
    "winner_school": "Minnesota",
    "loser": "Ben Boozer",
    "loser_school": "Edinboro",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Chris Martin",
    "winner_school": "Virginia Tech",
    "loser": "Charles Martelli",
    "loser_school": "Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Denis Alampiev",
    "loser_school": "American",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "Greg Francesca",
    "loser_school": "Virginia",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Tim Ortman",
    "winner_school": "Penn",
    "loser": "Fronhofer, Carl",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Nate Lawrenz",
    "winner_school": "Northern Iowa",
    "loser": "Josh Weidman",
    "loser_school": "Maryland",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Pennell, Jed",
    "loser_school": "Oregon State",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Hunter Guenot",
    "winner_school": "Bloomsburg",
    "loser": "Pat O'Donnell",
    "loser_school": "Harvard",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Ian Nelms",
    "winner_school": "CSU Bakersfield",
    "loser": "Bonfiglio, Ryan",
    "loser_school": "Princeton",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Nick Catone",
    "loser_school": "Rider",
    "result": "Fall 3:45"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Luke Larwin",
    "winner_school": "Oregon",
    "loser": "Tony Howard",
    "loser_school": "George Mason",
    "result": "Dec 16-14 SV"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Luke Moore",
    "loser_school": "Ohio",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Nathan Coy",
    "winner_school": "Oregon State",
    "loser": "Perry Parks",
    "loser_school": "Iowa State",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Gabe McMahan",
    "winner_school": "Iowa",
    "loser": "Ati Conner",
    "loser_school": "Nebraska",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Mark Becks",
    "loser_school": "Penn State",
    "result": "Fall 1:16"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Maurice Worthy",
    "winner_school": "Army",
    "loser": "Everett Bell",
    "loser_school": "Seton Hall",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Michael Barger",
    "winner_school": "Oklahoma",
    "loser": "Mike Feeney",
    "loser_school": "Eastern Michigan",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Eric Hall",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Ben King",
    "loser_school": "Illinois",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Curtis Owen",
    "winner_school": "Arizona State",
    "loser": "Eric Brown",
    "loser_school": "Northern Iowa",
    "result": "Dec 15-9"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Parker, Greg",
    "winner_school": "Princeton",
    "loser": "Rob Anspach",
    "loser_school": "Hofstra",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Corey Bell",
    "winner_school": "North Carolina",
    "loser": "Mike Regner",
    "loser_school": "The Citadel",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Alan Grasso",
    "loser_school": "Millersville",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Jim Stanec",
    "winner_school": "Cornell",
    "loser": "John Kopnisky",
    "loser_school": "Missouri",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Dustin Kawa",
    "winner_school": "NC State",
    "loser": "Adrian Garcia",
    "loser_school": "UC Davis",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Jeff Rusak",
    "winner_school": "Old Dominion",
    "loser": "Cassidy Shults",
    "loser_school": "Bloomsburg",
    "result": "Fall 4:58"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Steve Schenk",
    "winner_school": "Wyoming",
    "loser": "Louis Taylor",
    "loser_school": "Eastern Illinois",
    "result": "Fall 4:51"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Jeremy Wilson",
    "loser_school": "Portland State",
    "result": "Fall 1:37"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Cash Edwards",
    "loser_school": "Boise State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Scott Justus",
    "winner_school": "Virginia Tech",
    "loser": "Francis Volpe",
    "loser_school": "Harvard",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Adam Duncan",
    "loser_school": "Chattanooga",
    "result": "Fall 4:31"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Daniel Cormier",
    "winner_school": "Oklahoma State",
    "loser": "Jake Stork",
    "loser_school": "Maryland",
    "result": "TF 22-7 5:00"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Doug Lee",
    "loser_school": "Oregon",
    "result": "Fall 2:06"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Tom Tanis",
    "loser_school": "Rutgers",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Nate Patrick",
    "winner_school": "Illinois",
    "loser": "Anton Talamantes",
    "loser_school": "Ohio State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Dave Colabella",
    "winner_school": "James Madison",
    "loser": "Josh States",
    "loser_school": "Buffalo",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Nick Magistrelli",
    "winner_school": "Kent State",
    "loser": "Tom Cass",
    "loser_school": "Duke",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Jeffrey Moskyok",
    "loser_school": "Duquesne",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "R.D. Pursell",
    "winner_school": "Arizona State",
    "loser": "John Garriques",
    "loser_school": "Seton Hall",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Ralph DeNisco",
    "winner_school": "Wisconsin",
    "loser": "Josh Millard",
    "loser_school": "Lock Haven",
    "result": "Fall 6:08"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Shawn Scannell",
    "loser_school": "Rider",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Dan Stine",
    "winner_school": "Pittsburgh",
    "loser": "Jimi Massey",
    "loser_school": "Virginia",
    "result": "Dec 13-8"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Kyle Hansen",
    "winner_school": "Northern Iowa",
    "loser": "Justin Millard",
    "loser_school": "Edinboro",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Brett Faustman",
    "loser_school": "Central Michigan",
    "result": "TF 21-6 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Waymon May",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Joe DeGain",
    "loser_school": "Michigan",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Babek Nejadmaghaddam",
    "winner_school": "Cal State Fullerton",
    "loser": "David Sandberg",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Rick Romero",
    "winner_school": "Rutgers",
    "loser": "Jon Bush",
    "loser_school": "Purdue",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Mike Fickell",
    "winner_school": "Penn",
    "loser": "Craig Rumsey",
    "loser_school": "Wyoming",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Jason Payne",
    "loser_school": "Northern Iowa",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Ty Matthews",
    "loser_school": "Indiana",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Corey Anderson",
    "winner_school": "Cornell",
    "loser": "Leonard Bridgeforth",
    "loser_school": "Delaware State",
    "result": "Fall 1:46"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "David Shunamon",
    "winner_school": "Edinboro",
    "loser": "Zach Breitenbach",
    "loser_school": "NC State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Dan Bednar",
    "winner_school": "Ohio",
    "loser": "Eynon, Greg",
    "loser_school": "Millersville",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Clint Osborn",
    "loser_school": "North Carolina",
    "result": "MD 21-7"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Ryan Pallinger",
    "loser_school": "American",
    "result": "Fall 3:55"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Eric Mausser",
    "winner_school": "Clarion",
    "loser": "Avery Zerkle",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Pete Mielnik",
    "winner_school": "Penn State",
    "loser": "David Schenk",
    "loser_school": "Cal Poly",
    "result": "MD 15-6"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Nik Fekete",
    "winner_school": "Michigan State",
    "loser": "Chris Jones",
    "loser_school": "Drexel",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Garrett Lowney",
    "winner_school": "Minnesota",
    "loser": "Dawid Rechul",
    "loser_school": "Harvard",
    "result": "Fall 3:14"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "John Testa",
    "loser_school": "Clarion",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Matt Brink",
    "winner_school": "Michigan",
    "loser": "John Eschenfelder",
    "loser_school": "Buffalo",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Jake Vercelli",
    "loser_school": "Purdue",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Antonio Garay",
    "winner_school": "Boston College",
    "loser": "Shawn Laughlin",
    "loser_school": "Lehigh",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Mark Knauer",
    "loser_school": "Iowa State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Billy Blunt",
    "winner_school": "Fresno State",
    "loser": "Kellan Fluckiger",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Bob Jones",
    "loser_school": "Penn State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Josh Pearce",
    "winner_school": "Edinboro",
    "loser": "David Kimble",
    "loser_school": "UNC Greensboro",
    "result": "Fall 5:39"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "Matt Kenny",
    "loser_school": "North Carolina",
    "result": "Fall 1:37"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "James Huml",
    "winner_school": "Oklahoma State",
    "loser": "Brent Lancaster",
    "loser_school": "George Mason",
    "result": "DQ"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "John Devine",
    "winner_school": "CSU Bakersfield",
    "loser": "Adrian Thompson",
    "loser_school": "Howard",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Bronson Lingamfelter",
    "winner_school": "Brown",
    "loser": "Mike Maben",
    "loser_school": "UC Davis",
    "result": "Fall 5:38"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Matt Ridings",
    "winner_school": "Oklahoma",
    "loser": "John Fasana",
    "loser_school": "Portland State",
    "result": "MD 14-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Chris Williams",
    "winner_school": "Michigan State",
    "loser": "Tommy Hoang",
    "loser_school": "Duke",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Shawn Amistade",
    "winner_school": "Pittsburgh",
    "loser": "Rich Caisse",
    "loser_school": "Appalachian State",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Sean Shea",
    "loser_school": "George Mason",
    "result": "Fall 6:51"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Navarro, Nathan",
    "winner_school": "Oregon State",
    "loser": "Brent Thompson",
    "loser_school": "Kent State",
    "result": "Fall 1:40"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Shawn Williams",
    "loser_school": "Oregon",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Justin Spates",
    "winner_school": "Missouri",
    "loser": "Jerold Limongelli",
    "loser_school": "Rider",
    "result": "Fall 2:21"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Matt Brown",
    "winner_school": "Oklahoma State",
    "loser": "McCormack, Trap",
    "loser_school": "Lock Haven",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Marat Tomaev",
    "winner_school": "Penn State",
    "loser": "Shawn Kegal",
    "loser_school": "Buffalo",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Matt Hunkler",
    "loser_school": "George Mason",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Charlie Griggs",
    "loser_school": "Boise State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Nick Boucher",
    "winner_school": "Cleveland State",
    "loser": "Evan Robinson",
    "loser_school": "Purdue",
    "result": "Fall 3:38"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Brett Lawrence",
    "winner_school": "Minnesota",
    "loser": "Urijah Faber",
    "loser_school": "UC Davis",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Brandon York",
    "winner_school": "Maryland",
    "loser": "Jeff Ratliff",
    "loser_school": "Ohio State",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Joe Alexander",
    "winner_school": "Virginia",
    "loser": "Ben Richards",
    "loser_school": "Oregon State",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Scott Bair",
    "loser_school": "Lock Haven",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Donnie DeFilippis",
    "winner_school": "George Mason",
    "loser": "Coyte Cooper",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Mike Castillo",
    "winner_school": "Michigan State",
    "loser": "Corey Williams",
    "loser_school": "UNC Greensboro",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Gabe Vigil",
    "winner_school": "Boise State",
    "loser": "Jared Sullivan",
    "loser_school": "Chattanooga",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Mark Rial",
    "winner_school": "Northern Iowa",
    "loser": "Zach Roberson",
    "loser_school": "Iowa State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Mike Castillo",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Shane Cunanan",
    "winner_school": "Oregon State",
    "loser": "Pat Diaz",
    "loser_school": "James Madison",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Ralph Lopez",
    "winner_school": "Fresno State",
    "loser": "Ryan Egan",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Cory Ace",
    "loser_school": "Edinboro",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Collin Robertson",
    "winner_school": "Boise State",
    "loser": "Karl Nadolsky",
    "loser_school": "Michigan State",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Nate Wachter",
    "winner_school": "Penn State",
    "loser": "Joe Henson",
    "loser_school": "Penn",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Jesse Jantzen",
    "loser_school": "Harvard",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "JohnMark Bentley",
    "winner_school": "North Carolina",
    "loser": "Malik Elliott",
    "loser_school": "Boston University",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Keaton Anderson",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Ryan Shapert",
    "winner_school": "Edinboro",
    "loser": "Tommy Davis",
    "loser_school": "NC State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "George Carter",
    "winner_school": "Bloomsburg",
    "loser": "Ty Morgan",
    "loser_school": "Central Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Dana Holland",
    "loser_school": "Arizona State",
    "result": "Fall 6:25"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Sulieman Mumin",
    "loser_school": "Coppin State",
    "result": "TF 17-2 4:46"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Eugene Harris",
    "winner_school": "Oregon",
    "loser": "Shaun Shapert",
    "loser_school": "Edinboro",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Ryan Bernholz",
    "winner_school": "Lehigh",
    "loser": "Ryan Smith",
    "loser_school": "Ohio",
    "result": "Dec 13-11"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Zachariah Doll",
    "loser_school": "Pittsburgh",
    "result": "Fall 1:44"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Josh Janson",
    "winner_school": "Ohio State",
    "loser": "Rocky Smart",
    "loser_school": "Arizona State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Timothy Huxel",
    "loser_school": "Air Force",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Nathan Vasquez",
    "winner_school": "Fresno State",
    "loser": "Griff Powell",
    "loser_school": "Illinois",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Leo Urbinelli",
    "winner_school": "Cornell",
    "loser": "Pierre Pryor",
    "loser_school": "NC State",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "Tony Denke",
    "loser_school": "Nebraska",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Tim Ortman",
    "winner_school": "Penn",
    "loser": "Doug Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Nick Nemeth",
    "winner_school": "Kent State",
    "loser": "Nate Lawrenz",
    "loser_school": "Northern Iowa",
    "result": "Fall 0:50"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Dave Guarino",
    "loser_school": "Buffalo",
    "result": "MD 12-0"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Charles Martelli",
    "winner_school": "Michigan",
    "loser": "Hunter Guenot",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Ian Nelms",
    "winner_school": "CSU Bakersfield",
    "loser": "Denis Alampiev",
    "loser_school": "American",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Chris Vitale",
    "winner_school": "Lehigh",
    "loser": "Chris Pendleton",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Ben Boozer",
    "winner_school": "Edinboro",
    "loser": "Luke Larwin",
    "loser_school": "Oregon",
    "result": "TF 16-0 6:04"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Ati Conner",
    "winner_school": "Nebraska",
    "loser": "Curtis Owen",
    "loser_school": "Arizona State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Mark Becks",
    "winner_school": "Penn State",
    "loser": "Parker, Greg",
    "loser_school": "Princeton",
    "result": "Fall 0:41"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Luke Moore",
    "winner_school": "Ohio",
    "loser": "Corey Bell",
    "loser_school": "North Carolina",
    "result": "Fall 6:17"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Perry Parks",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Jim Stanec",
    "winner_school": "Cornell",
    "loser": "Eric Hall",
    "loser_school": "Virginia Tech",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Ben King",
    "winner_school": "Illinois",
    "loser": "Dustin Kawa",
    "loser_school": "NC State",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Jeff Rusak",
    "winner_school": "Old Dominion",
    "loser": "Everett Bell",
    "loser_school": "Seton Hall",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Steve Schenk",
    "winner_school": "Wyoming",
    "loser": "Mike Feeney",
    "loser_school": "Eastern Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Dave Colabella",
    "winner_school": "James Madison",
    "loser": "Francis Volpe",
    "loser_school": "Harvard",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Nick Magistrelli",
    "winner_school": "Kent State",
    "loser": "Adam Duncan",
    "loser_school": "Chattanooga",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Jeremy Wilson",
    "loser_school": "Portland State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "R.D. Pursell",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Tom Tanis",
    "winner_school": "Rutgers",
    "loser": "Ralph DeNisco",
    "loser_school": "Wisconsin",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Anton Talamantes",
    "loser_school": "Ohio State",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Dan Stine",
    "winner_school": "Pittsburgh",
    "loser": "Jake Stork",
    "loser_school": "Maryland",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Kyle Hansen",
    "winner_school": "Northern Iowa",
    "loser": "Doug Lee",
    "loser_school": "Oregon",
    "result": "Dec 13-10"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Corey Anderson",
    "winner_school": "Cornell",
    "loser": "Joe DeGain",
    "loser_school": "Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "David Shunamon",
    "winner_school": "Edinboro",
    "loser": "David Sandberg",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Dan Bednar",
    "winner_school": "Ohio",
    "loser": "Brett Faustman",
    "loser_school": "Central Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Waymon May",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Jason Payne",
    "loser_school": "Northern Iowa",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Eric Mausser",
    "winner_school": "Clarion",
    "loser": "Ty Matthews",
    "loser_school": "Indiana",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Jon Bush",
    "winner_school": "Purdue",
    "loser": "Pete Mielnik",
    "loser_school": "Penn State",
    "result": "Fall 5:58"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Nik Fekete",
    "winner_school": "Michigan State",
    "loser": "Craig Rumsey",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "John Eschenfelder",
    "winner_school": "Buffalo",
    "loser": "Josh Pearce",
    "loser_school": "Edinboro",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Jake Vercelli",
    "winner_school": "Purdue",
    "loser": "Justin Staebler",
    "loser_school": "Wisconsin",
    "result": "Dec 5-1 SV"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Dawid Rechul",
    "winner_school": "Harvard",
    "loser": "Jason Cooley",
    "loser_school": "Oregon State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "John Testa",
    "loser_school": "Clarion",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "James Huml",
    "winner_school": "Oklahoma State",
    "loser": "Kellan Fluckiger",
    "loser_school": "Arizona State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Ryan Kehler",
    "winner_school": "West Virginia",
    "loser": "Bob Jones",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Shawn Laughlin",
    "winner_school": "Lehigh",
    "loser": "John Devine",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Mark Knauer",
    "winner_school": "Iowa State",
    "loser": "Bronson Lingamfelter",
    "loser_school": "Brown",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Ruben DeLeon",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Ahmad Sanders",
    "loser_school": "Central Michigan",
    "result": "MD 17-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Ryan Escobar",
    "loser_school": "Illinois",
    "result": "MD 13-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "A.J. Grant",
    "loser_school": "Michigan",
    "result": "MD 12-0"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Chris Williams",
    "winner_school": "Michigan State",
    "loser": "Matt Ridings",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Shawn Amistade",
    "winner_school": "Pittsburgh",
    "loser": "Ben Vombaur",
    "loser_school": "Boise State",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Navarro, Nathan",
    "loser_school": "Oregon State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Matt Brown",
    "winner_school": "Oklahoma State",
    "loser": "Justin Spates",
    "loser_school": "Missouri",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Kevin Black",
    "loser_school": "Wisconsin",
    "result": "Dec 13-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Todd Beckerman",
    "winner_school": "Nebraska",
    "loser": "David Douglas",
    "loser_school": "Arizona State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Matt Azevedo",
    "loser_school": "Iowa State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Marat Tomaev",
    "loser_school": "Penn State",
    "result": "Fall 6:56"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Nick Boucher",
    "loser_school": "Cleveland State",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Brett Lawrence",
    "winner_school": "Minnesota",
    "loser": "Brandon York",
    "loser_school": "Maryland",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Joe Alexander",
    "loser_school": "Virginia",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Charles Walker",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Grant Hoerr",
    "winner_school": "Wisconsin",
    "loser": "Eric Larkin",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Chad Erikson",
    "loser_school": "Minnesota",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Mike Castillo",
    "winner_school": "Michigan State",
    "loser": "Donnie DeFilippis",
    "loser_school": "George Mason",
    "result": "DEF"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Mark Rial",
    "winner_school": "Northern Iowa",
    "loser": "Gabe Vigil",
    "loser_school": "Boise State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Shane Cunanan",
    "loser_school": "Oregon State",
    "result": "Fall 1:54"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Ralph Lopez",
    "loser_school": "Fresno State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "Mike Zadick",
    "loser_school": "Iowa",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Cedric Haymon",
    "loser_school": "Cal Poly",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Mike Kulczycki",
    "loser_school": "Michigan",
    "result": "Fall 1:55"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "JaMarr Billman",
    "loser_school": "Lock Haven",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Collin Robertson",
    "winner_school": "Boise State",
    "loser": "Nate Wachter",
    "loser_school": "Penn State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "JohnMark Bentley",
    "loser_school": "North Carolina",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Ryan Shapert",
    "loser_school": "Edinboro",
    "result": "Fall 8:23"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "George Carter",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Ed Hockenberry",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Eric Jorgensen",
    "loser_school": "Oregon State",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Scott Owen",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Cole Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Eugene Harris",
    "loser_school": "Oregon",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Ryan Bernholz",
    "loser_school": "Lehigh",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Josh Janson",
    "loser_school": "Ohio State",
    "result": "Fall 4:20"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Nathan Vasquez",
    "winner_school": "Fresno State",
    "loser": "Leo Urbinelli",
    "loser_school": "Cornell",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Kevin Stanley",
    "loser_school": "Indiana",
    "result": "TF 17-2 6:08"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Robbie Waller",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Brad Pike",
    "winner_school": "Minnesota",
    "loser": "Ben Shirk",
    "loser_school": "Iowa",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Chris Martin",
    "loser_school": "Virginia Tech",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "Tim Ortman",
    "loser_school": "Penn",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Nick Nemeth",
    "loser_school": "Kent State",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Charles Martelli",
    "winner_school": "Michigan",
    "loser": "Ian Nelms",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 6:24"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Chris Vitale",
    "winner_school": "Lehigh",
    "loser": "Ben Boozer",
    "loser_school": "Edinboro",
    "result": "Dec 14-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Nathan Coy",
    "loser_school": "Oregon State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Gabe McMahan",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Maurice Worthy",
    "winner_school": "Army",
    "loser": "Michael Barger",
    "loser_school": "Oklahoma",
    "result": "Fall 7:44"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Jacob Volkmann",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Ati Conner",
    "winner_school": "Nebraska",
    "loser": "Mark Becks",
    "loser_school": "Penn State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Luke Moore",
    "winner_school": "Ohio",
    "loser": "Ryan Lange",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Jim Stanec",
    "winner_school": "Cornell",
    "loser": "Ben King",
    "loser_school": "Illinois",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Steve Schenk",
    "winner_school": "Wyoming",
    "loser": "Jeff Rusak",
    "loser_school": "Old Dominion",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Jessman Smith",
    "loser_school": "Iowa",
    "result": "TF 21-6 6:16"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Scott Justus",
    "loser_school": "Virginia Tech",
    "result": "Dec 13-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Daniel Cormier",
    "winner_school": "Oklahoma State",
    "loser": "Josh Lambrecht",
    "loser_school": "Oklahoma",
    "result": "MD 16-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Nate Patrick",
    "loser_school": "Illinois",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Nick Magistrelli",
    "winner_school": "Kent State",
    "loser": "Dave Colabella",
    "loser_school": "James Madison",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "Rob Rohn",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Tom Tanis",
    "loser_school": "Rutgers",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Kyle Hansen",
    "winner_school": "Northern Iowa",
    "loser": "Dan Stine",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Nick Preston",
    "loser_school": "Ohio State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Babek Nejadmaghaddam",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Mike Fickell",
    "winner_school": "Penn",
    "loser": "Rick Romero",
    "loser_school": "Rutgers",
    "result": "Dec 16-10"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Brad Vering",
    "loser_school": "Nebraska",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "David Shunamon",
    "winner_school": "Edinboro",
    "loser": "Corey Anderson",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Dan Bednar",
    "loser_school": "Ohio",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Eric Mausser",
    "loser_school": "Clarion",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Nik Fekete",
    "winner_school": "Michigan State",
    "loser": "Jon Bush",
    "loser_school": "Purdue",
    "result": "Dec 11-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Garrett Lowney",
    "winner_school": "Minnesota",
    "loser": "Leonce Crump",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Matt Brink",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Antonio Garay",
    "loser_school": "Boston College",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Billy Blunt",
    "loser_school": "Fresno State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Jake Vercelli",
    "winner_school": "Purdue",
    "loser": "John Eschenfelder",
    "loser_school": "Buffalo",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Dawid Rechul",
    "winner_school": "Harvard",
    "loser": "Kevin Hoy",
    "loser_school": "Air Force",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Ryan Kehler",
    "winner_school": "West Virginia",
    "loser": "James Huml",
    "loser_school": "Oklahoma State",
    "result": "Fall 5:11"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Shawn Laughlin",
    "winner_school": "Lehigh",
    "loser": "Mark Knauer",
    "loser_school": "Iowa State",
    "result": "MD 15-4"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Chris Williams",
    "winner_school": "Michigan State",
    "loser": "Ryan Escobar",
    "loser_school": "Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Shawn Amistade",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Ruben DeLeon",
    "winner_school": "CSU Bakersfield",
    "loser": "Josh Moore",
    "loser_school": "Penn State",
    "result": "Fall 4:43"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Matt Brown",
    "winner_school": "Oklahoma State",
    "loser": "Ahmad Sanders",
    "loser_school": "Central Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Dylan Long",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Matt Azevedo",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Brett Lawrence",
    "winner_school": "Minnesota",
    "loser": "Kevin Black",
    "loser_school": "Wisconsin",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Rob Loper",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-4 TB"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Mike Castillo",
    "loser_school": "Michigan State",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Chad Erikson",
    "winner_school": "Minnesota",
    "loser": "Mark Rial",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Charles Walker",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Mike Kulczycki",
    "winner_school": "Michigan",
    "loser": "Collin Robertson",
    "loser_school": "Boise State",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "JaMarr Billman",
    "winner_school": "Lock Haven",
    "loser": "Reggie Wright",
    "loser_school": "Oklahoma State",
    "result": "Fall 1:49"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Bill Maldonado",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Cedric Haymon",
    "loser_school": "Cal Poly",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Scott Owen",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Cole Sanderson",
    "loser_school": "Iowa State",
    "result": "MD 20-8"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Ed Hockenberry",
    "loser_school": "Bloomsburg",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "Nathan Vasquez",
    "loser_school": "Fresno State",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Ben Shirk",
    "winner_school": "Iowa",
    "loser": "Noel Thompson",
    "loser_school": "Hofstra",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Chris Martin",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Kevin Stanley",
    "winner_school": "Indiana",
    "loser": "Charles Martelli",
    "loser_school": "Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Chris Vitale",
    "winner_school": "Lehigh",
    "loser": "Robbie Waller",
    "loser_school": "Oklahoma",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Ati Conner",
    "winner_school": "Nebraska",
    "loser": "Michael Barger",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Luke Moore",
    "loser_school": "Ohio",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Jim Stanec",
    "winner_school": "Cornell",
    "loser": "Nathan Coy",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Gabe McMahan",
    "winner_school": "Iowa",
    "loser": "Steve Schenk",
    "loser_school": "Wyoming",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Nick Magistrelli",
    "loser_school": "Kent State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "Nate Patrick",
    "loser_school": "Illinois",
    "result": "DEF"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Jessman Smith",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Kyle Hansen",
    "winner_school": "Northern Iowa",
    "loser": "Scott Justus",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "David Shunamon",
    "winner_school": "Edinboro",
    "loser": "Rick Romero",
    "loser_school": "Rutgers",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Zach Thompson",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Nick Preston",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Nik Fekete",
    "winner_school": "Michigan State",
    "loser": "Babek Nejadmaghaddam",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Jake Vercelli",
    "winner_school": "Purdue",
    "loser": "Antonio Garay",
    "loser_school": "Boston College",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Billy Blunt",
    "winner_school": "Fresno State",
    "loser": "Dawid Rechul",
    "loser_school": "Harvard",
    "result": "MD 16-7"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Ryan Kehler",
    "loser_school": "West Virginia",
    "result": "Fall 0:42"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Matt Brink",
    "winner_school": "Michigan",
    "loser": "Shawn Laughlin",
    "loser_school": "Lehigh",
    "result": "Dec 9-4"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Mario Stuart",
    "loser_school": "Lehigh",
    "result": "TF 20-4 5:57"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "Leroy Vega",
    "loser_school": "Minnesota",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Chris Williams",
    "loser_school": "Michigan State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Matt Brown",
    "winner_school": "Oklahoma State",
    "loser": "Ruben DeLeon",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-6"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Roman Fleszar",
    "loser_school": "Hofstra",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Todd Beckerman",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "David Douglas",
    "loser_school": "Arizona State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Brett Lawrence",
    "loser_school": "Minnesota",
    "result": "MD 9-0"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Sean Gray",
    "loser_school": "Virginia Tech",
    "result": "Dec 11-9"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Grant Hoerr",
    "loser_school": "Wisconsin",
    "result": "MD 8-0"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Chad Erikson",
    "loser_school": "Minnesota",
    "result": "MD 11-2"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Robert Sessley",
    "loser_school": "Ohio State",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Jared Frayer",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Jared Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "JaMarr Billman",
    "winner_school": "Lock Haven",
    "loser": "Mike Kulczycki",
    "loser_school": "Michigan",
    "result": "Dec 13-11"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Eric Schmiesing",
    "loser_school": "Hofstra",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Shane Roller",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Luke Becker",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Yoshi Nakamura",
    "loser_school": "Penn",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "Gray Maynard",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Matt Lackey",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Brad Pike",
    "loser_school": "Minnesota",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Ben Shirk",
    "loser_school": "Iowa",
    "result": "MD 11-3"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Kevin Stanley",
    "winner_school": "Indiana",
    "loser": "Chris Vitale",
    "loser_school": "Lehigh",
    "result": "Dec 9-4"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Tyrone Lewis",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Maurice Worthy",
    "winner_school": "Army",
    "loser": "Otto Olson",
    "loser_school": "Michigan",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Ati Conner",
    "loser_school": "Nebraska",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Gabe McMahan",
    "winner_school": "Iowa",
    "loser": "Jim Stanec",
    "loser_school": "Cornell",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Viktor Sveda",
    "loser_school": "Indiana",
    "result": "MD 21-7"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Daniel Cormier",
    "winner_school": "Oklahoma State",
    "loser": "Andy Hrovat",
    "loser_school": "Michigan",
    "result": "Fall 4:36"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "Josh Lambrecht",
    "loser_school": "Oklahoma",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Kyle Hansen",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Owen Elzen",
    "loser_school": "Minnesota",
    "result": "Dec 13-9"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Mike Fickell",
    "loser_school": "Penn",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "David Shunamon",
    "winner_school": "Edinboro",
    "loser": "Brad Vering",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Nik Fekete",
    "loser_school": "Michigan State",
    "result": "Dec 11-4"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Garrett Lowney",
    "loser_school": "Minnesota",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "MD 15-6"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Billy Blunt",
    "winner_school": "Fresno State",
    "loser": "Jake Vercelli",
    "loser_school": "Purdue",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Matt Brink",
    "loser_school": "Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Mario Stuart",
    "loser_school": "Lehigh",
    "result": "Fall 2:10"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Matt Brown",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Roman Fleszar",
    "loser_school": "Hofstra",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Todd Beckerman",
    "winner_school": "Nebraska",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Sean Gray",
    "loser_school": "Virginia Tech",
    "result": "M FOR"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Grant Hoerr",
    "winner_school": "Wisconsin",
    "loser": "Mark Conley",
    "loser_school": "Navy",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "JaMarr Billman",
    "loser_school": "Lock Haven",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Jared Lawrence",
    "loser_school": "Minnesota",
    "result": "MD 17-5"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Kirk White",
    "loser_school": "Boise State",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Eric Jorgensen",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Steven Blackford",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Brad Pike",
    "winner_school": "Minnesota",
    "loser": "Kevin Stanley",
    "loser_school": "Indiana",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Tyrone Lewis",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Gabe McMahan",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Cash Edwards",
    "loser_school": "Boise State",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Damion Hahn",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "David Shunamon",
    "loser_school": "Edinboro",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Mike Fickell",
    "loser_school": "Penn",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Garrett Lowney",
    "winner_school": "Minnesota",
    "loser": "Billy Blunt",
    "loser_school": "Fresno State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "MD 11-3"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "A.J. Grant",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Matt Brown",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Chris Williams",
    "winner_school": "Michigan State",
    "loser": "Ruben DeLeon",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Todd Beckerman",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Brett Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Grant Hoerr",
    "loser_school": "Wisconsin",
    "result": "Dec 8-2"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Sean Gray",
    "loser_school": "Virginia Tech",
    "result": "FOR"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Chad Erikson",
    "loser_school": "Minnesota",
    "result": "Dec 7-6"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Jared Frayer",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "JaMarr Billman",
    "winner_school": "Lock Haven",
    "loser": "Jared Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 7-4"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Mike Kulczycki",
    "winner_school": "Michigan",
    "loser": "Eric Schmiesing",
    "loser_school": "Hofstra",
    "result": "Dec 10-5"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Luke Becker",
    "loser_school": "Minnesota",
    "result": "Dec 12-10"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "Kirk White",
    "loser_school": "Boise State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Gray Maynard",
    "loser_school": "Michigan State",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Brad Pike",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Kevin Stanley",
    "loser_school": "Indiana",
    "result": "Dec 8-5"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Chris Vitale",
    "winner_school": "Lehigh",
    "loser": "Ben Shirk",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Jacob Volkmann",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Gabe McMahan",
    "loser_school": "Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Jim Stanec",
    "winner_school": "Cornell",
    "loser": "Ati Conner",
    "loser_school": "Nebraska",
    "result": "Dec 7-4"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Andy Hrovat",
    "loser_school": "Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Cash Edwards",
    "loser_school": "Boise State",
    "result": "Dec 4-2"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Kyle Hansen",
    "loser_school": "Northern Iowa",
    "result": "Fall 4:52"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Rusty Cook",
    "loser_school": "Boise State",
    "result": "Fall 3:59"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Mike Fickell",
    "winner_school": "Penn",
    "loser": "David Shunamon",
    "loser_school": "Edinboro",
    "result": "Dec 13-11 SV"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Nik Fekete",
    "loser_school": "Michigan State",
    "result": "Dec 14-8"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Garrett Lowney",
    "winner_school": "Minnesota",
    "loser": "Leonce Crump",
    "loser_school": "Oklahoma",
    "result": "Fall 0:42"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Billy Blunt",
    "winner_school": "Fresno State",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Matt Brink",
    "winner_school": "Michigan",
    "loser": "Jake Vercelli",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Jody Strittmatter",
    "loser_school": "Iowa",
    "result": "Dec 13-10"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Johnny Thompson",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-7"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Doug Schwab",
    "loser_school": "Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Dave Esposito",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Bryan Snyder",
    "loser_school": "Nebraska",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Joe Heskett",
    "loser_school": "Iowa State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Maurice Worthy",
    "loser_school": "Army",
    "result": "Dec 8-1"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Daniel Cormier",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Pat Quirk",
    "loser_school": "Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Tommy Rowlands",
    "loser_school": "Ohio State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1001,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Schaefer, Greg",
    "loser_school": "Indiana",
    "result": "Dec 3-1"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 1003,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Hart, Jeremy",
    "loser_school": "Appalachian State",
    "result": "MD 13-5"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 1005,
    "winner": "Clovis Crane",
    "winner_school": "Purdue",
    "loser": "Boccia, P.J.",
    "loser_school": "Appalachian State",
    "result": "Dec 8-6"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 1006,
    "winner": "Nate Lawrenz",
    "winner_school": "Northern Iowa",
    "loser": "Bonfiglio, Ryan",
    "loser_school": "Princeton",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 1007,
    "winner": "Cassidy Shults",
    "winner_school": "Bloomsburg",
    "loser": "Parker, Greg",
    "loser_school": "Princeton",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 1009,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Eynon, Greg",
    "loser_school": "Millersville",
    "result": "MD 10-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 1171,
    "winner": "Chris Williams",
    "winner_school": "Michigan State",
    "loser": "Schaefer, Greg",
    "loser_school": "Indiana",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 1173,
    "winner": "Hart, Jeremy",
    "winner_school": "Appalachian State",
    "loser": "Jason Mester",
    "loser_school": "Central Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 1175,
    "winner": "Josh Janson",
    "winner_school": "Ohio State",
    "loser": "Boccia, P.J.",
    "loser_school": "Appalachian State",
    "result": "MD 21-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 1176,
    "winner": "Bonfiglio, Ryan",
    "winner_school": "Princeton",
    "loser": "Mark Fee",
    "loser_school": "Appalachian State",
    "result": "MD 21-13"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 1177,
    "winner": "Parker, Greg",
    "winner_school": "Princeton",
    "loser": "Steve Strange",
    "loser_school": "Cal Poly",
    "result": "MD 17-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 1179,
    "winner": "Eynon, Greg",
    "winner_school": "Millersville",
    "loser": "Chael Sonnen",
    "loser_school": "Oregon",
    "result": "Fall 2:26"
  },
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 2001,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "McCormack, Trap",
    "loser_school": "Lock Haven",
    "result": "Fall 2:44"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 2006,
    "winner": "Nick Catone",
    "winner_school": "Rider",
    "loser": "Fronhofer, Carl",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 2171,
    "winner": "Navarro, Nathan",
    "winner_school": "Oregon State",
    "loser": "Jason Powell",
    "loser_school": "Nebraska",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 2176,
    "winner": "Fronhofer, Carl",
    "winner_school": "Pittsburgh",
    "loser": "John Clark",
    "loser_school": "Ohio State",
    "result": "MD 13-3"
  }
];
