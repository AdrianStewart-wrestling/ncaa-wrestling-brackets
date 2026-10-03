// 2002 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 2002 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results2002-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Rob Rebmann",
    "loser_school": "Drexel",
    "result": "Dec 10-8"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Jordan Webster",
    "winner_school": "Central Michigan",
    "loser": "Alejandro Alvarez",
    "loser_school": "Cornell",
    "result": "MD 11-0"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Clint Frease",
    "loser_school": "Brown",
    "result": "Fall 2:43"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Jeremiah Jarvis",
    "winner_school": "UC Davis",
    "loser": "Doug Cieleski",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Pat Owens",
    "loser_school": "Boise State",
    "result": "TF 16-1 6:11"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Avery Zerkle",
    "winner_school": "Lock Haven",
    "loser": "Jason Gore",
    "loser_school": "NC State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Jose Leon",
    "loser_school": "Boston University",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Chris Williams",
    "winner_school": "Michigan State",
    "loser": "Rocco Mansueto",
    "loser_school": "Cleveland State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Jesse Leng",
    "loser_school": "Ohio State",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Shawn Williams",
    "winner_school": "Oregon",
    "loser": "Heath McKim",
    "loser_school": "Air Force",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Trap McCormack",
    "loser_school": "Lock Haven",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Twan Pham",
    "winner_school": "Illinois",
    "loser": "Nathan Peterson",
    "loser_school": "Stanford",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Chris Rodrigues",
    "loser_school": "North Carolina",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "George Cintron",
    "loser_school": "NC State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Skyler Holman",
    "winner_school": "Oklahoma State",
    "loser": "Matt Sanchez",
    "loser_school": "CSU Bakersfield",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Greg Schaefer",
    "winner_school": "Indiana",
    "loser": "Willie Harris",
    "loser_school": "American",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Matthew Pitts",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Matt Ridings",
    "winner_school": "Oklahoma",
    "loser": "Jerold Limongelli",
    "loser_school": "Rider",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Luke Eustice",
    "winner_school": "Iowa",
    "loser": "Michael Delaney",
    "loser_school": "Oregon State",
    "result": "Fall 6:47"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Tommy Hoang",
    "loser_school": "Duke",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Tom Noto",
    "winner_school": "Hofstra",
    "loser": "Mason Lenhard",
    "loser_school": "Penn",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Jared Opfer",
    "loser_school": "Kent State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Ryan Lewis",
    "winner_school": "Minnesota",
    "loser": "Joe Cristaldi",
    "loser_school": "Drexel",
    "result": "MD 23-9"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Jordan Webster",
    "winner_school": "Central Michigan",
    "loser": "Jason Cucolo",
    "loser_school": "Sacred Heart",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Anthony Carrizales",
    "loser_school": "Ohio",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Foley Dowd",
    "winner_school": "Michigan",
    "loser": "Evan Sola",
    "loser_school": "North Carolina",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "David Hoffman",
    "loser_school": "Virginia Tech",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Marat Tomaev",
    "winner_school": "Penn State",
    "loser": "Rad Martinez",
    "loser_school": "Clarion",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Travis Drake",
    "winner_school": "Appalachian State",
    "loser": "Jesse Brock",
    "loser_school": "Boise State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Kevin Black",
    "winner_school": "Wisconsin",
    "loser": "Jason Gabrielson",
    "loser_school": "Millersville",
    "result": "Fall 5:57"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Cory Ace",
    "loser_school": "Edinboro",
    "result": "TF 18-3 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Urijah Faber",
    "winner_school": "UC Davis",
    "loser": "Chris Matarrese",
    "loser_school": "Slippery Rock",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Chad Hay",
    "winner_school": "Illinois",
    "loser": "Dan Hyman",
    "loser_school": "Lehigh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Efren Ceballos",
    "loser_school": "CSU Bakersfield",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Jeff Ratliff",
    "winner_school": "Ohio State",
    "loser": "Mark Manchio",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Phil Mansueto",
    "winner_school": "Cleveland State",
    "loser": "Pat Dowty",
    "loser_school": "Eastern Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Chris Spealler",
    "winner_school": "Lock Haven",
    "loser": "Jason Harless",
    "loser_school": "Oregon",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Shawn Amistade",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Grant Hoerr",
    "loser_school": "Wisconsin",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Brad Byers",
    "loser_school": "North Carolina",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Shane Cunanan",
    "winner_school": "West Virginia",
    "loser": "Ralph Lopez",
    "loser_school": "Fresno State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Chad Erikson",
    "winner_school": "Minnesota",
    "loser": "Chad Caros",
    "loser_school": "Edinboro",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Aaron Holker",
    "winner_school": "Iowa State",
    "loser": "Scott Moore",
    "loser_school": "Penn State",
    "result": "TF 17-0 6:50"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Coyte Cooper",
    "winner_school": "Indiana",
    "loser": "Jason Mester",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "John Giacche",
    "winner_school": "Northwestern",
    "loser": "Rob Becker",
    "loser_school": "George Mason",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Jon Masa",
    "loser_school": "Hofstra",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Brian Watson",
    "loser_school": "Oregon",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Nate Parker",
    "winner_school": "Oklahoma",
    "loser": "Brad Metzler",
    "loser_school": "Stanford",
    "result": "Fall 0:57"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Nick Boucher",
    "loser_school": "Cleveland State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Cedric Haymon",
    "winner_school": "Cal Poly",
    "loser": "Mark DiSalvo",
    "loser_school": "VMI",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "J.P. Reese",
    "winner_school": "Missouri",
    "loser": "Luke Moffitt",
    "loser_school": "Iowa",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Darren McLane",
    "loser_school": "Duquesne",
    "result": "Fall 4:28"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Gabe Vigil",
    "winner_school": "Boise State",
    "loser": "Darnell Ruffin",
    "loser_school": "Eastern Michigan",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Brandon York",
    "loser_school": "Maryland",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Billy Smith",
    "loser_school": "West Virginia",
    "result": "Fall 2:35"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Adrian Austin",
    "winner_school": "George Mason",
    "loser": "Brad Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Keaton Anderson",
    "winner_school": "Ohio State",
    "loser": "Ty Morgan",
    "loser_school": "Central Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Casey Hunt",
    "loser_school": "Oregon",
    "result": "Fall 1:02"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Ryan Berger",
    "loser_school": "Illinois",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Scott Frohardt",
    "winner_school": "Air Force",
    "loser": "Marc Hoffer",
    "loser_school": "American",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Collin Robertson",
    "winner_school": "Boise State",
    "loser": "Nate Wachter",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "Jon Garvin",
    "loser_school": "Northern Iowa",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "JaMarr Billman",
    "winner_school": "Lock Haven",
    "loser": "Jason Mercado",
    "loser_school": "Brown",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Karl Nadolsky",
    "winner_school": "Michigan State",
    "loser": "Travis Shufelt",
    "loser_school": "Nebraska",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Jerrod Sanders",
    "winner_school": "Oklahoma State",
    "loser": "Matt Gentry",
    "loser_school": "Stanford",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Mike Kulczycki",
    "winner_school": "Michigan",
    "loser": "Wayne Watts",
    "loser_school": "The Citadel",
    "result": "TF 24-9 5:49"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Jason DeBruin",
    "loser_school": "Hofstra",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Joe Henson",
    "winner_school": "Penn",
    "loser": "Thomas Juarez",
    "loser_school": "CSU Bakersfield",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Justin Giovinco",
    "winner_school": "Pittsburgh",
    "loser": "Jake Giamoni",
    "loser_school": "NC State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Greg Austin",
    "loser_school": "Rutgers",
    "result": "Fall 6:41"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Warren Stout",
    "loser_school": "Lehigh",
    "result": "TF 25-10 4:54"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Tony Overstake",
    "winner_school": "Oregon",
    "loser": "Frank DeFillippis",
    "loser_school": "Eastern Illinois",
    "result": "TF 16-1 4:59"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Paul Siemon",
    "loser_school": "Hofstra",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Matt Anderson",
    "winner_school": "Iowa",
    "loser": "Rocky Smart",
    "loser_school": "Arizona State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Jeremiah Jarvis",
    "loser_school": "UC Davis",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Josh Janson",
    "winner_school": "Ohio State",
    "loser": "P.J. Boccia",
    "loser_school": "Appalachian State",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Brad Harper",
    "winner_school": "Purdue",
    "loser": "Levi Prevost",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Mike Tolar",
    "loser_school": "Kent State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Gabe Webster",
    "loser_school": "Cornell",
    "result": "Fall 5:37"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Jeremy Reitz",
    "winner_school": "Clarion",
    "loser": "Levi Weikel-Magden",
    "loser_school": "Stanford",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Derek Jenkins",
    "winner_school": "Rider",
    "loser": "David Bolyard",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Zachariah Doll",
    "loser_school": "Pittsburgh",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Adam Britt",
    "winner_school": "VMI",
    "loser": "Joe Carr",
    "loser_school": "West Virginia",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "Mitch Morgan",
    "loser_school": "Boise State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Tim Foley",
    "winner_school": "Virginia",
    "loser": "Ryan Yates",
    "loser_school": "Edinboro",
    "result": "Dec 4-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Jesse Reed",
    "loser_school": "Millersville",
    "result": "MD 17-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "John Garriques",
    "loser_school": "Hofstra",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Nate Baker",
    "winner_school": "Minnesota",
    "loser": "Pierre Pryor",
    "loser_school": "NC State",
    "result": "Dec 13-11"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Nate Lawrenz",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "Craig Johnson",
    "loser_school": "Chattanooga",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Josh Henson",
    "winner_school": "Penn",
    "loser": "Ryan Kane",
    "loser_school": "Northwestern",
    "result": "TF 17-2 4:40"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Nick Nemeth",
    "winner_school": "Kent State",
    "loser": "Pat O'Donnell",
    "loser_school": "Harvard",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Scott Roth",
    "loser_school": "Cornell",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Mark Fee",
    "winner_school": "Appalachian State",
    "loser": "Tom McMath",
    "loser_school": "West Virginia",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Seth Cameron",
    "loser_school": "James Madison",
    "result": "Fall 1:34"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Nick Frost",
    "winner_school": "Arizona State",
    "loser": "Oscar Santiago",
    "loser_school": "Purdue",
    "result": "Fall 6:49"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Doc Vecchio",
    "winner_school": "Penn State",
    "loser": "Chris Carlino",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Burt Pierson",
    "winner_school": "UC Davis",
    "loser": "Chris Vitale",
    "loser_school": "Lehigh",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Eugene Harris",
    "winner_school": "Oregon",
    "loser": "Bill Boeh",
    "loser_school": "Duquesne",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Mike Mitchell",
    "loser_school": "Duke",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Charles Martelli",
    "winner_school": "Michigan",
    "loser": "Nick Harrington",
    "loser_school": "Rider",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Carl Fronhofer",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Mark Canty",
    "loser_school": "North Carolina",
    "result": "Fall 2:59"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Terry Parham",
    "winner_school": "Air Force",
    "loser": "Jim Stanec",
    "loser_school": "Cornell",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Bill Lowney",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Luke Moore",
    "loser_school": "Ohio",
    "result": "TF 18-3 0:00"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Matt Erwin",
    "winner_school": "VMI",
    "loser": "Jeff Rusak",
    "loser_school": "Old Dominion",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "John Kopnisky",
    "winner_school": "Missouri",
    "loser": "Curtis Yeager",
    "loser_school": "Millersville",
    "result": "Fall 4:01"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Andrew Roy",
    "winner_school": "Rutgers",
    "loser": "Ralph Everett",
    "loser_school": "Hofstra",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Greg Parker",
    "winner_school": "Princeton",
    "loser": "Brian Glynn",
    "loser_school": "Illinois",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Lance Nixon",
    "loser_school": "Campbell",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Nick Passolano",
    "winner_school": "Iowa State",
    "loser": "Tony Gansen",
    "loser_school": "Central Michigan",
    "result": "Fall 2:45"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Nathan Coy",
    "winner_school": "Oregon State",
    "loser": "Gerald Harris",
    "loser_school": "Cleveland State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Tony Denke",
    "loser_school": "Nebraska",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Tyler Nixt",
    "winner_school": "Iowa",
    "loser": "Ben Chunko",
    "loser_school": "Drexel",
    "result": "MD 18-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Ty Wilcox",
    "winner_school": "Oklahoma State",
    "loser": "Ed Pawlak",
    "loser_school": "Lock Haven",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Michael Barger",
    "winner_school": "Oklahoma",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Steve Strange",
    "loser_school": "Cal Poly",
    "result": "Dec 17-10"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Rowdy Lundegreen",
    "winner_school": "Cal State Fullerton",
    "loser": "Scott Justus",
    "loser_school": "Virginia Tech",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Ralph DeNisco",
    "winner_school": "Wisconsin",
    "loser": "Jeremy Wilson",
    "loser_school": "Portland State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Josh Millard",
    "winner_school": "Lock Haven",
    "loser": "Pat Popolizio",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Blake Kaplan",
    "loser_school": "Ohio State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Dave Colabella",
    "loser_school": "James Madison",
    "result": "Fall 4:38"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Kyle Hansen",
    "winner_school": "Northern Iowa",
    "loser": "Tom Tanis",
    "loser_school": "Rutgers",
    "result": "Fall 6:51"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Jake Stork",
    "winner_school": "Maryland",
    "loser": "Eddy Gifford",
    "loser_school": "Fresno State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Pat Miller",
    "loser_school": "Drexel",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Jason Potter",
    "winner_school": "Illinois",
    "loser": "Justin Johnson",
    "loser_school": "Bloomsburg",
    "result": "Dec 9-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Jimi Massey",
    "loser_school": "Virginia",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Jeffrey Moskyok",
    "loser_school": "Duquesne",
    "result": "Fall 1:30"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Clint Wattenberg",
    "winner_school": "Cornell",
    "loser": "Tony D'Amico",
    "loser_school": "Boise State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Ben Heizer",
    "winner_school": "Northern Illinois",
    "loser": "Quantel Langford",
    "loser_school": "Chattanooga",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Mark Becks",
    "winner_school": "Penn State",
    "loser": "Isaac Weber",
    "loser_school": "Oregon State",
    "result": "Fall 5:51"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Ali Abri",
    "loser_school": "Boston University",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Eric Mausser",
    "loser_school": "Clarion",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Kyle Cerminara",
    "winner_school": "Buffalo",
    "loser": "Greg Eynon",
    "loser_school": "Millersville",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "David Sandberg",
    "winner_school": "Pittsburgh",
    "loser": "Erik Gladish",
    "loser_school": "Arizona State",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Jason Payne",
    "winner_school": "Northern Iowa",
    "loser": "Pete Mielnik",
    "loser_school": "Penn State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Scott Barker",
    "winner_school": "Missouri",
    "loser": "Randy Davidson",
    "loser_school": "Portland State",
    "result": "TF 19-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Anthony Reynolds",
    "winner_school": "Sacred Heart",
    "loser": "John Wechter",
    "loser_school": "Michigan State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Brent Miller",
    "winner_school": "West Virginia",
    "loser": "Tyrone Byrd",
    "loser_school": "Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "David Schenk",
    "loser_school": "Cal Poly",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Nick Ciarcia",
    "loser_school": "Brown",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Chris Jones",
    "winner_school": "Drexel",
    "loser": "Avery Zerkle",
    "loser_school": "Lock Haven",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "David Shunamon",
    "winner_school": "Edinboro",
    "loser": "Pat DeGain",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Kyle Smith",
    "winner_school": "Michigan",
    "loser": "Greg Sawyer",
    "loser_school": "Rider",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Chris Skretkowicz",
    "loser_school": "Hofstra",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Tom Grossman",
    "winner_school": "Oklahoma",
    "loser": "Austin David",
    "loser_school": "Chattanooga",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "Willie Gruenwald",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Marcio Botelho",
    "loser_school": "Fresno State",
    "result": "Fall 1:47"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Mark Knauer",
    "loser_school": "Iowa State",
    "result": "Fall 4:31"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Mike Carroll",
    "loser_school": "Drexel",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Ryan Painter",
    "loser_school": "Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Adrian Thompson",
    "winner_school": "Howard",
    "loser": "Kevin Hoy",
    "loser_school": "Air Force",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Eric Webb",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "John Testa",
    "winner_school": "Clarion",
    "loser": "Steve Kovach",
    "loser_school": "Navy",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Boe Rushton",
    "winner_school": "Boise State",
    "loser": "Craig Tefft",
    "loser_school": "Binghamton",
    "result": "Fall 1:52"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Ryan Kehler",
    "loser_school": "West Virginia",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Bronson Lingamfelter",
    "winner_school": "Brown",
    "loser": "Matt Brink",
    "loser_school": "Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Jake Vercelli",
    "winner_school": "Purdue",
    "loser": "Dawid Rechul",
    "loser_school": "Harvard",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Jason Cooley",
    "winner_school": "Oregon State",
    "loser": "Jacob Lininger",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Kellan Fluckiger",
    "winner_school": "Arizona State",
    "loser": "Jack Leffler",
    "loser_school": "Central Michigan",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Matt Kenny",
    "loser_school": "North Carolina",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Steve Mocco",
    "winner_school": "Iowa",
    "loser": "Greg Forbes",
    "loser_school": "UNC Greensboro",
    "result": "Fall 2:18"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Rob Rebmann",
    "winner_school": "Drexel",
    "loser": "George Cintron",
    "loser_school": "NC State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Jason Harless",
    "winner_school": "Oregon",
    "loser": "Alejandro Alvarez",
    "loser_school": "Cornell",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Jared Sullivan",
    "winner_school": "Chattanooga",
    "loser": "Brandon York",
    "loser_school": "Maryland",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Doug Cieleski",
    "winner_school": "Oklahoma",
    "loser": "Zachariah Doll",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Shane Webster",
    "winner_school": "Oregon",
    "loser": "Tony Gansen",
    "loser_school": "Central Michigan",
    "result": "Dec 18-15"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Tyrone Byrd",
    "winner_school": "Illinois",
    "loser": "Jason Gore",
    "loser_school": "NC State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Chris Williams",
    "loser_school": "Michigan State",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Shawn Williams",
    "winner_school": "Oregon",
    "loser": "Jason Powell",
    "loser_school": "Nebraska",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Twan Pham",
    "loser_school": "Illinois",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Shawn Bunch",
    "loser_school": "Edinboro",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Skyler Holman",
    "winner_school": "Oklahoma State",
    "loser": "Greg Schaefer",
    "loser_school": "Indiana",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Matt Ridings",
    "loser_school": "Oklahoma",
    "result": "Fall 6:52"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Luke Eustice",
    "winner_school": "Iowa",
    "loser": "A.J. Grant",
    "loser_school": "Michigan",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Tom Noto",
    "winner_school": "Hofstra",
    "loser": "Leroy Vega",
    "loser_school": "Minnesota",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Mason Lenhard",
    "winner_school": "Penn",
    "loser": "Jared Opfer",
    "loser_school": "Kent State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Tommy Hoang",
    "winner_school": "Duke",
    "loser": "Marlon Felton",
    "loser_school": "Northern Illinois",
    "result": "Fall 4:05"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Jerold Limongelli",
    "loser_school": "Rider",
    "result": "Fall 1:31"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Willie Harris",
    "loser_school": "American",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Chris Rodrigues",
    "winner_school": "North Carolina",
    "loser": "Rob Rebmann",
    "loser_school": "Drexel",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Nathan Peterson",
    "winner_school": "Stanford",
    "loser": "Trap McCormack",
    "loser_school": "Lock Haven",
    "result": "Fall 1:59"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Heath McKim",
    "winner_school": "Air Force",
    "loser": "Jesse Leng",
    "loser_school": "Ohio State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Jose Leon",
    "winner_school": "Boston University",
    "loser": "Rocco Mansueto",
    "loser_school": "Cleveland State",
    "result": "Fall 0:39"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Ryan Lewis",
    "winner_school": "Minnesota",
    "loser": "Jordan Webster",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Foley Dowd",
    "loser_school": "Michigan",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Marat Tomaev",
    "loser_school": "Penn State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Kevin Black",
    "winner_school": "Wisconsin",
    "loser": "Travis Drake",
    "loser_school": "Appalachian State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Urijah Faber",
    "loser_school": "UC Davis",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Chad Hay",
    "loser_school": "Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Jeff Ratliff",
    "winner_school": "Ohio State",
    "loser": "Phil Mansueto",
    "loser_school": "Cleveland State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Chris Spealler",
    "loser_school": "Lock Haven",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Shawn Amistade",
    "winner_school": "Pittsburgh",
    "loser": "Jason Harless",
    "loser_school": "Oregon",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Pat Dowty",
    "winner_school": "Eastern Illinois",
    "loser": "Mark Manchio",
    "loser_school": "Northern Iowa",
    "result": "Fall 6:39"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Dan Hyman",
    "winner_school": "Lehigh",
    "loser": "Efren Ceballos",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Cory Ace",
    "winner_school": "Edinboro",
    "loser": "Chris Matarrese",
    "loser_school": "Slippery Rock",
    "result": "Fall 5:26"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Jesse Brock",
    "winner_school": "Boise State",
    "loser": "Jason Gabrielson",
    "loser_school": "Millersville",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Rad Martinez",
    "loser_school": "Clarion",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Anthony Carrizales",
    "winner_school": "Ohio",
    "loser": "Evan Sola",
    "loser_school": "North Carolina",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Joe Cristaldi",
    "winner_school": "Drexel",
    "loser": "Jason Cucolo",
    "loser_school": "Sacred Heart",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Chad Erikson",
    "winner_school": "Minnesota",
    "loser": "Shane Cunanan",
    "loser_school": "West Virginia",
    "result": "Fall 6:52"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Aaron Holker",
    "winner_school": "Iowa State",
    "loser": "Coyte Cooper",
    "loser_school": "Indiana",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "John Giacche",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Nate Parker",
    "winner_school": "Oklahoma",
    "loser": "Sean Gray",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Cedric Haymon",
    "winner_school": "Cal Poly",
    "loser": "Robert Sessley",
    "loser_school": "Ohio State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "J.P. Reese",
    "winner_school": "Missouri",
    "loser": "Phillip Simpson",
    "loser_school": "Army",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Gabe Vigil",
    "loser_school": "Boise State",
    "result": "Fall 2:30"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Darnell Ruffin",
    "winner_school": "Eastern Michigan",
    "loser": "Jared Sullivan",
    "loser_school": "Chattanooga",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Luke Moffitt",
    "winner_school": "Iowa",
    "loser": "Darren McLane",
    "loser_school": "Duquesne",
    "result": "Fall 4:34"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Mark DiSalvo",
    "winner_school": "VMI",
    "loser": "Nick Boucher",
    "loser_school": "Cleveland State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Brian Watson",
    "winner_school": "Oregon",
    "loser": "Brad Metzler",
    "loser_school": "Stanford",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Rob Becker",
    "winner_school": "George Mason",
    "loser": "Clint Frease",
    "loser_school": "Brown",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Scott Moore",
    "loser_school": "Penn State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Chad Caros",
    "winner_school": "Edinboro",
    "loser": "Ralph Lopez",
    "loser_school": "Fresno State",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Grant Hoerr",
    "winner_school": "Wisconsin",
    "loser": "Brad Byers",
    "loser_school": "North Carolina",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Adrian Austin",
    "loser_school": "George Mason",
    "result": "TF 24-8 6:27"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Keaton Anderson",
    "loser_school": "Ohio State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Scott Frohardt",
    "loser_school": "Air Force",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "Collin Robertson",
    "loser_school": "Boise State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "JaMarr Billman",
    "winner_school": "Lock Haven",
    "loser": "Karl Nadolsky",
    "loser_school": "Michigan State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Mike Kulczycki",
    "winner_school": "Michigan",
    "loser": "Jerrod Sanders",
    "loser_school": "Oklahoma State",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Joe Henson",
    "loser_school": "Penn",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Justin Giovinco",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Jake Giamoni",
    "winner_school": "NC State",
    "loser": "Greg Austin",
    "loser_school": "Rutgers",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Jason DeBruin",
    "winner_school": "Hofstra",
    "loser": "Thomas Juarez",
    "loser_school": "CSU Bakersfield",
    "result": "MD 19-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Wayne Watts",
    "loser_school": "The Citadel",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Travis Shufelt",
    "winner_school": "Nebraska",
    "loser": "Jason Mercado",
    "loser_school": "Brown",
    "result": "Dec 13-9"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Nate Wachter",
    "winner_school": "Penn State",
    "loser": "Jon Garvin",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Marc Hoffer",
    "winner_school": "American",
    "loser": "Ryan Berger",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "Ty Morgan",
    "winner_school": "Central Michigan",
    "loser": "Casey Hunt",
    "loser_school": "Oregon",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Billy Smith",
    "winner_school": "West Virginia",
    "loser": "Brad Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Tony Overstake",
    "loser_school": "Oregon",
    "result": "TF 25-10 6:39"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Matt Anderson",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Josh Janson",
    "loser_school": "Ohio State",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Brad Harper",
    "loser_school": "Purdue",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Jeremy Reitz",
    "loser_school": "Clarion",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Derek Jenkins",
    "loser_school": "Rider",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "Adam Britt",
    "loser_school": "VMI",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Tim Foley",
    "loser_school": "Virginia",
    "result": "TF 19-3 7:00"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Ryan Yates",
    "winner_school": "Edinboro",
    "loser": "Jesse Reed",
    "loser_school": "Millersville",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Joe Carr",
    "winner_school": "West Virginia",
    "loser": "Mitch Morgan",
    "loser_school": "Boise State",
    "result": "Fall 0:49"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Doug Cieleski",
    "winner_school": "Oklahoma",
    "loser": "David Bolyard",
    "loser_school": "Central Michigan",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Gabe Webster",
    "winner_school": "Cornell",
    "loser": "Levi Weikel-Magden",
    "loser_school": "Stanford",
    "result": "TF 19-4 7:00"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Mike Tolar",
    "winner_school": "Kent State",
    "loser": "Levi Prevost",
    "loser_school": "Wyoming",
    "result": "Dec 16-9"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "P.J. Boccia",
    "winner_school": "Appalachian State",
    "loser": "Jeremiah Jarvis",
    "loser_school": "UC Davis",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Rocky Smart",
    "winner_school": "Arizona State",
    "loser": "Paul Siemon",
    "loser_school": "Hofstra",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Warren Stout",
    "winner_school": "Lehigh",
    "loser": "Frank DeFillippis",
    "loser_school": "Eastern Illinois",
    "result": "Fall 3:34"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Nate Baker",
    "loser_school": "Minnesota",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "John Clark",
    "loser_school": "Ohio State",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Josh Henson",
    "winner_school": "Penn",
    "loser": "Nick Nemeth",
    "loser_school": "Kent State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Mark Fee",
    "winner_school": "Appalachian State",
    "loser": "Tyron Woodley",
    "loser_school": "Missouri",
    "result": "Fall 0:47"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Nick Frost",
    "loser_school": "Arizona State",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Doc Vecchio",
    "winner_school": "Penn State",
    "loser": "Burt Pierson",
    "loser_school": "UC Davis",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Eugene Harris",
    "winner_school": "Oregon",
    "loser": "Matt King",
    "loser_school": "Edinboro",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Charles Martelli",
    "loser_school": "Michigan",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Carl Fronhofer",
    "winner_school": "Pittsburgh",
    "loser": "Nick Harrington",
    "loser_school": "Rider",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Bill Boeh",
    "winner_school": "Duquesne",
    "loser": "Mike Mitchell",
    "loser_school": "Duke",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Chris Vitale",
    "winner_school": "Lehigh",
    "loser": "Chris Carlino",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Oscar Santiago",
    "winner_school": "Purdue",
    "loser": "Seth Cameron",
    "loser_school": "James Madison",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Tom McMath",
    "winner_school": "West Virginia",
    "loser": "Scott Roth",
    "loser_school": "Cornell",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Pat O'Donnell",
    "winner_school": "Harvard",
    "loser": "Ryan Kane",
    "loser_school": "Northwestern",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Nate Lawrenz",
    "winner_school": "Northern Iowa",
    "loser": "Craig Johnson",
    "loser_school": "Chattanooga",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Pierre Pryor",
    "winner_school": "NC State",
    "loser": "John Garriques",
    "loser_school": "Hofstra",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Terry Parham",
    "loser_school": "Air Force",
    "result": "MD 18-10"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Jacob Volkmann",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "John Kopnisky",
    "winner_school": "Missouri",
    "loser": "Matt Erwin",
    "loser_school": "VMI",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Greg Parker",
    "winner_school": "Princeton",
    "loser": "Andrew Roy",
    "loser_school": "Rutgers",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Nick Passolano",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Nathan Coy",
    "loser_school": "Oregon State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Tyler Nixt",
    "winner_school": "Iowa",
    "loser": "Ty Wilcox",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Michael Barger",
    "loser_school": "Oklahoma",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Steve Strange",
    "winner_school": "Cal Poly",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Ben Chunko",
    "winner_school": "Drexel",
    "loser": "Ed Pawlak",
    "loser_school": "Lock Haven",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Gerald Harris",
    "winner_school": "Cleveland State",
    "loser": "Tony Denke",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Lance Nixon",
    "winner_school": "Campbell",
    "loser": "Shane Webster",
    "loser_school": "Oregon",
    "result": "Dec 18-13"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Dustin Kawa",
    "loser_school": "NC State",
    "result": "Fall 6:59"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Jeff Rusak",
    "winner_school": "Old Dominion",
    "loser": "Curtis Yeager",
    "loser_school": "Millersville",
    "result": "Fall 2:56"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Luke Moore",
    "winner_school": "Ohio",
    "loser": "Bill Lowney",
    "loser_school": "Northern Illinois",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Jim Stanec",
    "winner_school": "Cornell",
    "loser": "Mark Canty",
    "loser_school": "North Carolina",
    "result": "Fall 5:52"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Ralph DeNisco",
    "winner_school": "Wisconsin",
    "loser": "Rowdy Lundegreen",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Josh Millard",
    "loser_school": "Lock Haven",
    "result": "Fall 0:25"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Kyle Hansen",
    "winner_school": "Northern Iowa",
    "loser": "Viktor Sveda",
    "loser_school": "Indiana",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Jake Stork",
    "loser_school": "Maryland",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Jason Potter",
    "loser_school": "Illinois",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Travis Pascoe",
    "loser_school": "Nebraska",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Clint Wattenberg",
    "winner_school": "Cornell",
    "loser": "Ben Heizer",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Mark Becks",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Isaac Weber",
    "winner_school": "Oregon State",
    "loser": "Ali Abri",
    "loser_school": "Boston University",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Tony D'Amico",
    "winner_school": "Boise State",
    "loser": "Quantel Langford",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Jimi Massey",
    "winner_school": "Virginia",
    "loser": "Jeffrey Moskyok",
    "loser_school": "Duquesne",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Justin Johnson",
    "winner_school": "Bloomsburg",
    "loser": "Pat Miller",
    "loser_school": "Drexel",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Tom Tanis",
    "winner_school": "Rutgers",
    "loser": "Dave Colabella",
    "loser_school": "James Madison",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Pat Popolizio",
    "winner_school": "Oklahoma State",
    "loser": "Blake Kaplan",
    "loser_school": "Ohio State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Scott Justus",
    "winner_school": "Virginia Tech",
    "loser": "Jeremy Wilson",
    "loser_school": "Portland State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Kyle Cerminara",
    "loser_school": "Buffalo",
    "result": "Fall 6:33"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Jason Payne",
    "winner_school": "Northern Iowa",
    "loser": "David Sandberg",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Scott Barker",
    "winner_school": "Missouri",
    "loser": "Anthony Reynolds",
    "loser_school": "Sacred Heart",
    "result": "TF 16-1 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Brent Miller",
    "loser_school": "West Virginia",
    "result": "Fall 6:26"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Chris Jones",
    "loser_school": "Drexel",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Kyle Smith",
    "winner_school": "Michigan",
    "loser": "David Shunamon",
    "loser_school": "Edinboro",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Tom Grossman",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Matt Greenberg",
    "loser_school": "Cornell",
    "result": "Fall 3:15"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Willie Gruenwald",
    "winner_school": "Oklahoma State",
    "loser": "Marcio Botelho",
    "loser_school": "Fresno State",
    "result": "Fall 1:48"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Austin David",
    "loser_school": "Chattanooga",
    "result": "MD 14-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Greg Sawyer",
    "loser_school": "Rider",
    "result": "MD 16-7"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Avery Zerkle",
    "winner_school": "Lock Haven",
    "loser": "Nick Ciarcia",
    "loser_school": "Brown",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "David Schenk",
    "winner_school": "Cal Poly",
    "loser": "Tyrone Byrd",
    "loser_school": "Illinois",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "John Wechter",
    "winner_school": "Michigan State",
    "loser": "Randy Davidson",
    "loser_school": "Portland State",
    "result": "MD 20-8"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Erik Gladish",
    "winner_school": "Arizona State",
    "loser": "Pete Mielnik",
    "loser_school": "Penn State",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Eric Mausser",
    "winner_school": "Clarion",
    "loser": "Greg Eynon",
    "loser_school": "Millersville",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Pat Cummins",
    "loser_school": "Penn State",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Adrian Thompson",
    "loser_school": "Howard",
    "result": "Fall 0:47"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "John Testa",
    "winner_school": "Clarion",
    "loser": "John Lockhart",
    "loser_school": "Illinois",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Garrett Lowney",
    "winner_school": "Minnesota",
    "loser": "Boe Rushton",
    "loser_school": "Boise State",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Bronson Lingamfelter",
    "loser_school": "Brown",
    "result": "Fall 4:39"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Jake Vercelli",
    "winner_school": "Purdue",
    "loser": "James Huml",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Kellan Fluckiger",
    "winner_school": "Arizona State",
    "loser": "Jason Cooley",
    "loser_school": "Oregon State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Steve Mocco",
    "winner_school": "Iowa",
    "loser": "Matt Feast",
    "loser_school": "Penn",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Matt Kenny",
    "winner_school": "North Carolina",
    "loser": "Greg Forbes",
    "loser_school": "UNC Greensboro",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Jack Leffler",
    "winner_school": "Central Michigan",
    "loser": "Jacob Lininger",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Ryan Kehler",
    "winner_school": "West Virginia",
    "loser": "Matt Brink",
    "loser_school": "Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Steve Kovach",
    "winner_school": "Navy",
    "loser": "Eric Webb",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "Ryan Painter",
    "loser_school": "Virginia",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Mark Knauer",
    "winner_school": "Iowa State",
    "loser": "Mike Carroll",
    "loser_school": "Drexel",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Twan Pham",
    "winner_school": "Illinois",
    "loser": "Mason Lenhard",
    "loser_school": "Penn",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Tommy Hoang",
    "loser_school": "Duke",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Chris Williams",
    "winner_school": "Michigan State",
    "loser": "Mario Stuart",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Matt Sanchez",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 2:45"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Chris Rodrigues",
    "winner_school": "North Carolina",
    "loser": "A.J. Grant",
    "loser_school": "Michigan",
    "result": "Fall 4:25"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Nathan Peterson",
    "loser_school": "Stanford",
    "result": "Fall 2:25"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Heath McKim",
    "winner_school": "Air Force",
    "loser": "Greg Schaefer",
    "loser_school": "Indiana",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Matt Ridings",
    "winner_school": "Oklahoma",
    "loser": "Jose Leon",
    "loser_school": "Boston University",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Marat Tomaev",
    "winner_school": "Penn State",
    "loser": "Shawn Amistade",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Travis Drake",
    "winner_school": "Appalachian State",
    "loser": "Pat Dowty",
    "loser_school": "Eastern Illinois",
    "result": "Dec 15-9"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Jordan Webster",
    "winner_school": "Central Michigan",
    "loser": "Dan Hyman",
    "loser_school": "Lehigh",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Cory Ace",
    "winner_school": "Edinboro",
    "loser": "Foley Dowd",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Phil Mansueto",
    "winner_school": "Cleveland State",
    "loser": "Jesse Brock",
    "loser_school": "Boise State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Chris Spealler",
    "loser_school": "Lock Haven",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Urijah Faber",
    "winner_school": "UC Davis",
    "loser": "Anthony Carrizales",
    "loser_school": "Ohio",
    "result": "Fall 2:46"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Chad Hay",
    "winner_school": "Illinois",
    "loser": "Joe Cristaldi",
    "loser_school": "Drexel",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Darnell Ruffin",
    "winner_school": "Eastern Michigan",
    "loser": "Coyte Cooper",
    "loser_school": "Indiana",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Luke Moffitt",
    "winner_school": "Iowa",
    "loser": "John Giacche",
    "loser_school": "Northwestern",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Mark DiSalvo",
    "loser_school": "VMI",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Shane Cunanan",
    "winner_school": "West Virginia",
    "loser": "Brian Watson",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Rob Becker",
    "loser_school": "George Mason",
    "result": "Fall 3:42"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Gabe Vigil",
    "winner_school": "Boise State",
    "loser": "Jason Mester",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Chad Caros",
    "loser_school": "Edinboro",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Grant Hoerr",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Scott Frohardt",
    "winner_school": "Air Force",
    "loser": "Jake Giamoni",
    "loser_school": "NC State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Jason DeBruin",
    "winner_school": "Hofstra",
    "loser": "Collin Robertson",
    "loser_school": "Boise State",
    "result": "MD 15-7"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Adrian Austin",
    "winner_school": "George Mason",
    "loser": "Matt Gentry",
    "loser_school": "Stanford",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Keaton Anderson",
    "winner_school": "Ohio State",
    "loser": "Travis Shufelt",
    "loser_school": "Nebraska",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Joe Henson",
    "winner_school": "Penn",
    "loser": "Nate Wachter",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Marc Hoffer",
    "winner_school": "American",
    "loser": "Justin Giovinco",
    "loser_school": "Pittsburgh",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Karl Nadolsky",
    "winner_school": "Michigan State",
    "loser": "Ty Morgan",
    "loser_school": "Central Michigan",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Jerrod Sanders",
    "winner_school": "Oklahoma State",
    "loser": "Billy Smith",
    "loser_school": "West Virginia",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Josh Janson",
    "winner_school": "Ohio State",
    "loser": "Ryan Yates",
    "loser_school": "Edinboro",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Joe Carr",
    "winner_school": "West Virginia",
    "loser": "Brad Harper",
    "loser_school": "Purdue",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Doug Cieleski",
    "winner_school": "Oklahoma",
    "loser": "Tony Overstake",
    "loser_school": "Oregon",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Matt Anderson",
    "winner_school": "Iowa",
    "loser": "Gabe Webster",
    "loser_school": "Cornell",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Adam Britt",
    "winner_school": "VMI",
    "loser": "Mike Tolar",
    "loser_school": "Kent State",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Tim Foley",
    "winner_school": "Virginia",
    "loser": "P.J. Boccia",
    "loser_school": "Appalachian State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Rocky Smart",
    "winner_school": "Arizona State",
    "loser": "Jeremy Reitz",
    "loser_school": "Clarion",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Derek Jenkins",
    "winner_school": "Rider",
    "loser": "Warren Stout",
    "loser_school": "Lehigh",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Carl Fronhofer",
    "winner_school": "Pittsburgh",
    "loser": "Nick Nemeth",
    "loser_school": "Kent State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Bill Boeh",
    "loser_school": "Duquesne",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Chris Vitale",
    "winner_school": "Lehigh",
    "loser": "Nate Baker",
    "loser_school": "Minnesota",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "Oscar Santiago",
    "loser_school": "Purdue",
    "result": "Dec 15-10"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Tom McMath",
    "winner_school": "West Virginia",
    "loser": "Matt King",
    "loser_school": "Edinboro",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Charles Martelli",
    "winner_school": "Michigan",
    "loser": "Pat O'Donnell",
    "loser_school": "Harvard",
    "result": "MD 17-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Nick Frost",
    "winner_school": "Arizona State",
    "loser": "Nate Lawrenz",
    "loser_school": "Northern Iowa",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Pierre Pryor",
    "winner_school": "NC State",
    "loser": "Burt Pierson",
    "loser_school": "UC Davis",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Matt Erwin",
    "winner_school": "VMI",
    "loser": "Steve Strange",
    "loser_school": "Cal Poly",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Ben Chunko",
    "winner_school": "Drexel",
    "loser": "Andrew Roy",
    "loser_school": "Rutgers",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Terry Parham",
    "winner_school": "Air Force",
    "loser": "Gerald Harris",
    "loser_school": "Cleveland State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Lance Nixon",
    "loser_school": "Campbell",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Ty Wilcox",
    "winner_school": "Oklahoma State",
    "loser": "Brian Glynn",
    "loser_school": "Illinois",
    "result": "Fall 1:58"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Michael Barger",
    "winner_school": "Oklahoma",
    "loser": "Jeff Rusak",
    "loser_school": "Old Dominion",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Nick Passolano",
    "winner_school": "Iowa State",
    "loser": "Luke Moore",
    "loser_school": "Ohio",
    "result": "Fall 4:04"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Nathan Coy",
    "winner_school": "Oregon State",
    "loser": "Jim Stanec",
    "loser_school": "Cornell",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Isaac Weber",
    "loser_school": "Oregon State",
    "result": "MD 18-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Jake Stork",
    "winner_school": "Maryland",
    "loser": "Tony D'Amico",
    "loser_school": "Boise State",
    "result": "Fall 5:32"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Jimi Massey",
    "winner_school": "Virginia",
    "loser": "Rowdy Lundegreen",
    "loser_school": "Cal State Fullerton",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Justin Johnson",
    "winner_school": "Bloomsburg",
    "loser": "Josh Millard",
    "loser_school": "Lock Haven",
    "result": "Fall 4:07"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Eddy Gifford",
    "winner_school": "Fresno State",
    "loser": "Ben Heizer",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Tom Tanis",
    "winner_school": "Rutgers",
    "loser": "Mark Becks",
    "loser_school": "Penn State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Pat Popolizio",
    "winner_school": "Oklahoma State",
    "loser": "Jason Potter",
    "loser_school": "Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Scott Justus",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Willie Gruenwald",
    "winner_school": "Oklahoma State",
    "loser": "Anthony Reynolds",
    "loser_school": "Sacred Heart",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Brent Miller",
    "winner_school": "West Virginia",
    "loser": "Chris Skretkowicz",
    "loser_school": "Hofstra",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Kyle Cerminara",
    "loser_school": "Buffalo",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Avery Zerkle",
    "winner_school": "Lock Haven",
    "loser": "David Sandberg",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "David Schenk",
    "winner_school": "Cal Poly",
    "loser": "Tom Grossman",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "John Wechter",
    "winner_school": "Michigan State",
    "loser": "Matt Greenberg",
    "loser_school": "Cornell",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Chris Jones",
    "winner_school": "Drexel",
    "loser": "Erik Gladish",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Eric Mausser",
    "winner_school": "Clarion",
    "loser": "David Shunamon",
    "loser_school": "Edinboro",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Matt Kenny",
    "loser_school": "North Carolina",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Boe Rushton",
    "winner_school": "Boise State",
    "loser": "Jack Leffler",
    "loser_school": "Central Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Dawid Rechul",
    "winner_school": "Harvard",
    "loser": "Pat Cummins",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Ryan Kehler",
    "winner_school": "West Virginia",
    "loser": "Adrian Thompson",
    "loser_school": "Howard",
    "result": "Fall 1:01"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Jason Cooley",
    "winner_school": "Oregon State",
    "loser": "Craig Tefft",
    "loser_school": "Binghamton",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Steve Kovach",
    "winner_school": "Navy",
    "loser": "Matt Feast",
    "loser_school": "Penn",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "Bronson Lingamfelter",
    "loser_school": "Brown",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Mark Knauer",
    "winner_school": "Iowa State",
    "loser": "James Huml",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Shawn Williams",
    "loser_school": "Oregon",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Ben Vombaur",
    "loser_school": "Boise State",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Skyler Holman",
    "winner_school": "Oklahoma State",
    "loser": "Travis Lee",
    "loser_school": "Cornell",
    "result": "Dec 12-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Luke Eustice",
    "winner_school": "Iowa",
    "loser": "Tom Noto",
    "loser_school": "Hofstra",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Twan Pham",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Chris Williams",
    "loser_school": "Michigan State",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Chris Rodrigues",
    "winner_school": "North Carolina",
    "loser": "Leroy Vega",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Matt Ridings",
    "winner_school": "Oklahoma",
    "loser": "Heath McKim",
    "loser_school": "Air Force",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Ryan Lewis",
    "winner_school": "Minnesota",
    "loser": "Zach Roberson",
    "loser_school": "Iowa State",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Kevin Black",
    "winner_school": "Wisconsin",
    "loser": "David Douglas",
    "loser_school": "Arizona State",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Cliff Moore",
    "loser_school": "Iowa",
    "result": "Dec 11-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Ratliff",
    "loser_school": "Ohio State",
    "result": "Fall 2:04"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Marat Tomaev",
    "winner_school": "Penn State",
    "loser": "Travis Drake",
    "loser_school": "Appalachian State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Cory Ace",
    "winner_school": "Edinboro",
    "loser": "Jordan Webster",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Phil Mansueto",
    "winner_school": "Cleveland State",
    "loser": "David Hoffman",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Urijah Faber",
    "winner_school": "UC Davis",
    "loser": "Chad Hay",
    "loser_school": "Illinois",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Chad Erikson",
    "loser_school": "Minnesota",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Aaron Holker",
    "winner_school": "Iowa State",
    "loser": "Dylan Long",
    "loser_school": "Northern Iowa",
    "result": "MD 15-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Nate Parker",
    "winner_school": "Oklahoma",
    "loser": "Cedric Haymon",
    "loser_school": "Cal Poly",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "J.P. Reese",
    "loser_school": "Missouri",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Luke Moffitt",
    "winner_school": "Iowa",
    "loser": "Darnell Ruffin",
    "loser_school": "Eastern Michigan",
    "result": "Fall 1:12"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Shane Cunanan",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Gabe Vigil",
    "loser_school": "Boise State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Sean Gray",
    "loser_school": "Virginia Tech",
    "result": "Dec 12-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Mike Zadick",
    "loser_school": "Iowa",
    "result": "MD 18-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "Jesse Jantzen",
    "loser_school": "Harvard",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "JaMarr Billman",
    "winner_school": "Lock Haven",
    "loser": "Mike Kulczycki",
    "loser_school": "Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Bill Maldonado",
    "loser_school": "Iowa State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Scott Frohardt",
    "winner_school": "Air Force",
    "loser": "Jason DeBruin",
    "loser_school": "Hofstra",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Keaton Anderson",
    "winner_school": "Ohio State",
    "loser": "Adrian Austin",
    "loser_school": "George Mason",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Marc Hoffer",
    "winner_school": "American",
    "loser": "Joe Henson",
    "loser_school": "Penn",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Jerrod Sanders",
    "winner_school": "Oklahoma State",
    "loser": "Karl Nadolsky",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Gray Maynard",
    "loser_school": "Michigan State",
    "result": "Fall 5:07"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Scott Owen",
    "loser_school": "Northern Illinois",
    "result": "Fall 3:48"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Ryan Bertin",
    "loser_school": "Michigan",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Griff Powell",
    "loser_school": "Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Josh Janson",
    "winner_school": "Ohio State",
    "loser": "Joe Carr",
    "loser_school": "West Virginia",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Matt Anderson",
    "winner_school": "Iowa",
    "loser": "Doug Cieleski",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Adam Britt",
    "winner_school": "VMI",
    "loser": "Tim Foley",
    "loser_school": "Virginia",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Rocky Smart",
    "winner_school": "Arizona State",
    "loser": "Derek Jenkins",
    "loser_school": "Rider",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Robbie Waller",
    "loser_school": "Oklahoma",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Mark Fee",
    "winner_school": "Appalachian State",
    "loser": "Josh Henson",
    "loser_school": "Penn",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Doc Vecchio",
    "loser_school": "Penn State",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Eugene Harris",
    "loser_school": "Oregon",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Carl Fronhofer",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Chris Vitale",
    "winner_school": "Lehigh",
    "loser": "John Clark",
    "loser_school": "Ohio State",
    "result": "Dec 11-9"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Tom McMath",
    "winner_school": "West Virginia",
    "loser": "Charles Martelli",
    "loser_school": "Michigan",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Pierre Pryor",
    "winner_school": "NC State",
    "loser": "Nick Frost",
    "loser_school": "Arizona State",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Ryan Lange",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Greg Parker",
    "winner_school": "Princeton",
    "loser": "John Kopnisky",
    "loser_school": "Missouri",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Josh Koscheck",
    "loser_school": "Edinboro",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Tyler Nixt",
    "loser_school": "Iowa",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Ben Chunko",
    "winner_school": "Drexel",
    "loser": "Matt Erwin",
    "loser_school": "VMI",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Terry Parham",
    "winner_school": "Air Force",
    "loser": "Jacob Volkmann",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Michael Barger",
    "winner_school": "Oklahoma",
    "loser": "Ty Wilcox",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Nathan Coy",
    "winner_school": "Oregon State",
    "loser": "Nick Passolano",
    "loser_school": "Iowa State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Ralph DeNisco",
    "loser_school": "Wisconsin",
    "result": "Fall 3:19"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Kyle Hansen",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Andy Hrovat",
    "loser_school": "Michigan",
    "result": "TF 19-2 6:34"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Clint Wattenberg",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Jake Stork",
    "loser_school": "Maryland",
    "result": "Fall 6:26"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Jimi Massey",
    "winner_school": "Virginia",
    "loser": "Justin Johnson",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-7 TB"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Tom Tanis",
    "winner_school": "Rutgers",
    "loser": "Eddy Gifford",
    "loser_school": "Fresno State",
    "result": "Fall 6:37"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Pat Popolizio",
    "winner_school": "Oklahoma State",
    "loser": "Travis Pascoe",
    "loser_school": "Nebraska",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Jason Payne",
    "loser_school": "Northern Iowa",
    "result": "TF 23-8 6:51"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Scott Barker",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Kyle Smith",
    "loser_school": "Michigan",
    "result": "Fall 4:15"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Justin Ruiz",
    "loser_school": "Nebraska",
    "result": "Fall 1:20"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Brent Miller",
    "winner_school": "West Virginia",
    "loser": "Willie Gruenwald",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Avery Zerkle",
    "loser_school": "Lock Haven",
    "result": "Fall 3:38"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "John Wechter",
    "winner_school": "Michigan State",
    "loser": "David Schenk",
    "loser_school": "Cal Poly",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Eric Mausser",
    "winner_school": "Clarion",
    "loser": "Chris Jones",
    "loser_school": "Drexel",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Garrett Lowney",
    "winner_school": "Minnesota",
    "loser": "John Testa",
    "loser_school": "Clarion",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Jake Vercelli",
    "winner_school": "Purdue",
    "loser": "Leonce Crump",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Steve Mocco",
    "winner_school": "Iowa",
    "loser": "Kellan Fluckiger",
    "loser_school": "Arizona State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Boe Rushton",
    "loser_school": "Boise State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Dawid Rechul",
    "winner_school": "Harvard",
    "loser": "Ryan Kehler",
    "loser_school": "West Virginia",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Steve Kovach",
    "winner_school": "Navy",
    "loser": "Jason Cooley",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "Mark Knauer",
    "loser_school": "Iowa State",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Shawn Bunch",
    "loser_school": "Edinboro",
    "result": "Dec 12-10 SV"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Tom Noto",
    "loser_school": "Hofstra",
    "result": "Fall 6:16"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Chris Rodrigues",
    "winner_school": "North Carolina",
    "loser": "Shawn Williams",
    "loser_school": "Oregon",
    "result": "Fall 6:59"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Matt Ridings",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Marat Tomaev",
    "loser_school": "Penn State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Cory Ace",
    "winner_school": "Edinboro",
    "loser": "Jeff Ratliff",
    "loser_school": "Ohio State",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Phil Mansueto",
    "loser_school": "Cleveland State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Urijah Faber",
    "loser_school": "UC Davis",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Cedric Haymon",
    "winner_school": "Cal Poly",
    "loser": "Luke Moffitt",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "J.P. Reese",
    "loser_school": "Missouri",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Chad Erikson",
    "winner_school": "Minnesota",
    "loser": "Phillip Simpson",
    "loser_school": "Army",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Dylan Long",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:54"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Scott Frohardt",
    "winner_school": "Air Force",
    "loser": "Mike Kulczycki",
    "loser_school": "Michigan",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Keaton Anderson",
    "loser_school": "Ohio State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Marc Hoffer",
    "loser_school": "American",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Jerrod Sanders",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Josh Janson",
    "loser_school": "Ohio State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "Matt Anderson",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Adam Britt",
    "loser_school": "VMI",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Rocky Smart",
    "loser_school": "Arizona State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Doc Vecchio",
    "winner_school": "Penn State",
    "loser": "Tyron Woodley",
    "loser_school": "Missouri",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Eugene Harris",
    "winner_school": "Oregon",
    "loser": "Chris Vitale",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Tom McMath",
    "loser_school": "West Virginia",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Josh Henson",
    "winner_school": "Penn",
    "loser": "Pierre Pryor",
    "loser_school": "NC State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Ben Chunko",
    "loser_school": "Drexel",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Terry Parham",
    "winner_school": "Air Force",
    "loser": "Tyler Nixt",
    "loser_school": "Iowa",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Michael Barger",
    "winner_school": "Oklahoma",
    "loser": "Ryan Lange",
    "loser_school": "Purdue",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Nathan Coy",
    "winner_school": "Oregon State",
    "loser": "John Kopnisky",
    "loser_school": "Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Viktor Sveda",
    "loser_school": "Indiana",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Clint Wattenberg",
    "winner_school": "Cornell",
    "loser": "Jimi Massey",
    "loser_school": "Virginia",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Tom Tanis",
    "winner_school": "Rutgers",
    "loser": "Ralph DeNisco",
    "loser_school": "Wisconsin",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Kyle Hansen",
    "winner_school": "Northern Iowa",
    "loser": "Pat Popolizio",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Kyle Smith",
    "winner_school": "Michigan",
    "loser": "Brent Miller",
    "loser_school": "West Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Pat DeGain",
    "loser_school": "Indiana",
    "result": "Fall 1:50"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Jason Payne",
    "winner_school": "Northern Iowa",
    "loser": "John Wechter",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Scott Barker",
    "winner_school": "Missouri",
    "loser": "Eric Mausser",
    "loser_school": "Clarion",
    "result": "Fall 7:00"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Leonce Crump",
    "loser_school": "Oklahoma",
    "result": "M FOR"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Dawid Rechul",
    "winner_school": "Harvard",
    "loser": "Kellan Fluckiger",
    "loser_school": "Arizona State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Steve Kovach",
    "loser_school": "Navy",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "John Testa",
    "loser_school": "Clarion",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Chris Fleeger",
    "loser_school": "Purdue",
    "result": "MD 14-5"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Luke Eustice",
    "winner_school": "Iowa",
    "loser": "Skyler Holman",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Travis Lee",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Chris Rodrigues",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Ryan Lewis",
    "winner_school": "Minnesota",
    "loser": "Kevin Black",
    "loser_school": "Wisconsin",
    "result": "Fall 4:51"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Witt Durden",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Cory Ace",
    "loser_school": "Edinboro",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Zach Roberson",
    "loser_school": "Iowa State",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Aaron Holker",
    "winner_school": "Iowa State",
    "loser": "Mark Conley",
    "loser_school": "Navy",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Nate Parker",
    "loser_school": "Oklahoma",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Cedric Haymon",
    "winner_school": "Cal Poly",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "MD 10-2"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Chad Erikson",
    "loser_school": "Minnesota",
    "result": "Dec 9-6"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "Jake Percival",
    "loser_school": "Ohio",
    "result": "Dec 11-6"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "JaMarr Billman",
    "loser_school": "Lock Haven",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Scott Frohardt",
    "loser_school": "Air Force",
    "result": "MD 14-3"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Mike Zadick",
    "loser_school": "Iowa",
    "result": "Dec 4-4 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Shane Roller",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Yoshi Nakamura",
    "loser_school": "Penn",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Griff Powell",
    "loser_school": "Illinois",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Gray Maynard",
    "loser_school": "Michigan State",
    "result": "Fall 6:51"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Mark Fee",
    "loser_school": "Appalachian State",
    "result": "Fall 5:24"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Tyrone Lewis",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Eugene Harris",
    "winner_school": "Oregon",
    "loser": "Doc Vecchio",
    "loser_school": "Penn State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Josh Henson",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Greg Parker",
    "winner_school": "Princeton",
    "loser": "Otto Olson",
    "loser_school": "Michigan",
    "result": "Dec 12-8"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Rick Springman",
    "loser_school": "Penn",
    "result": "MD 15-5"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Terry Parham",
    "loser_school": "Air Force",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Nathan Coy",
    "winner_school": "Oregon State",
    "loser": "Michael Barger",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Jessman Smith",
    "loser_school": "Iowa",
    "result": "Fall 2:57"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Damion Hahn",
    "loser_school": "Minnesota",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Clint Wattenberg",
    "winner_school": "Cornell",
    "loser": "Andy Hrovat",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Tom Tanis",
    "winner_school": "Rutgers",
    "loser": "Kyle Hansen",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Nick Preston",
    "loser_school": "Ohio State",
    "result": "MD 18-7"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Owen Elzen",
    "loser_school": "Minnesota",
    "result": "MD 16-6"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Kyle Smith",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Scott Barker",
    "winner_school": "Missouri",
    "loser": "Jason Payne",
    "loser_school": "Northern Iowa",
    "result": "Fall 6:40"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Garrett Lowney",
    "loser_school": "Minnesota",
    "result": "Dec 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Steve Mocco",
    "winner_school": "Iowa",
    "loser": "Jake Vercelli",
    "loser_school": "Purdue",
    "result": "MD 9-1"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Dawid Rechul",
    "loser_school": "Harvard",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Kevin Hoy",
    "loser_school": "Air Force",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Jason Powell",
    "loser_school": "Nebraska",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Skyler Holman",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Kevin Black",
    "winner_school": "Wisconsin",
    "loser": "Cliff Moore",
    "loser_school": "Iowa",
    "result": "MD 13-4"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "David Douglas",
    "loser_school": "Arizona State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Cedric Haymon",
    "winner_school": "Cal Poly",
    "loser": "Mark Conley",
    "loser_school": "Navy",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Nate Parker",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Bill Maldonado",
    "loser_school": "Iowa State",
    "result": "MD 8-0"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "JaMarr Billman",
    "loser_school": "Lock Haven",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Bertin",
    "loser_school": "Michigan",
    "result": "Fall 5:41"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Scott Owen",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Eugene Harris",
    "winner_school": "Oregon",
    "loser": "Mark Fee",
    "loser_school": "Appalachian State",
    "result": "MD 18-9"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Robbie Waller",
    "loser_school": "Oklahoma",
    "result": "M FOR"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Otto Olson",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Nathan Coy",
    "winner_school": "Oregon State",
    "loser": "Rick Springman",
    "loser_school": "Penn",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Clint Wattenberg",
    "loser_school": "Cornell",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Tom Tanis",
    "winner_school": "Rutgers",
    "loser": "Damion Hahn",
    "loser_school": "Minnesota",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Justin Ruiz",
    "loser_school": "Nebraska",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Scott Barker",
    "loser_school": "Missouri",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Garrett Lowney",
    "loser_school": "Minnesota",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Jake Vercelli",
    "winner_school": "Purdue",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Ben Vombaur",
    "loser_school": "Boise State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Skyler Holman",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Chris Rodrigues",
    "loser_school": "North Carolina",
    "result": "MD 14-4"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Kevin Black",
    "loser_school": "Wisconsin",
    "result": "MD 14-6"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Cliff Moore",
    "loser_school": "Iowa",
    "result": "MD 14-4"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Cory Ace",
    "loser_school": "Edinboro",
    "result": "FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Cedric Haymon",
    "winner_school": "Cal Poly",
    "loser": "Robert Sessley",
    "loser_school": "Ohio State",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Nate Parker",
    "winner_school": "Oklahoma",
    "loser": "Mark Conley",
    "loser_school": "Navy",
    "result": "Dec 8-5"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Chad Erikson",
    "winner_school": "Minnesota",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Jake Percival",
    "loser_school": "Ohio",
    "result": "Fall 2:54"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "JaMarr Billman",
    "winner_school": "Lock Haven",
    "loser": "Bill Maldonado",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Scott Frohardt",
    "loser_school": "Air Force",
    "result": "Dec 12-9"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Shane Roller",
    "loser_school": "Oklahoma State",
    "result": "Fall 2:39"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Ryan Bertin",
    "loser_school": "Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Griff Powell",
    "loser_school": "Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Eugene Harris",
    "loser_school": "Oregon",
    "result": "Dec 8-2"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Mark Fee",
    "winner_school": "Appalachian State",
    "loser": "Robbie Waller",
    "loser_school": "Oklahoma",
    "result": "FOR"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Josh Henson",
    "winner_school": "Penn",
    "loser": "Doc Vecchio",
    "loser_school": "Penn State",
    "result": "Dec 11-9"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Nathan Coy",
    "loser_school": "Oregon State",
    "result": "Dec 8-1"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Rick Springman",
    "loser_school": "Penn",
    "result": "Dec 6-5"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Terry Parham",
    "winner_school": "Air Force",
    "loser": "Michael Barger",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Tom Tanis",
    "loser_school": "Rutgers",
    "result": "Dec 9-5"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Clint Wattenberg",
    "loser_school": "Cornell",
    "result": "Dec 3-3 TB"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Kyle Hansen",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Owen Elzen",
    "loser_school": "Minnesota",
    "result": "Dec 7-4"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Scott Barker",
    "loser_school": "Missouri",
    "result": "Dec 7-6"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Kyle Smith",
    "winner_school": "Michigan",
    "loser": "Jason Payne",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-4"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Jake Vercelli",
    "loser_school": "Purdue",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Garrett Lowney",
    "winner_school": "Minnesota",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Dawid Rechul",
    "winner_school": "Harvard",
    "loser": "Kevin Hoy",
    "loser_school": "Air Force",
    "result": "Dec 6-5"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Luke Eustice",
    "loser_school": "Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Lewis",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Aaron Holker",
    "winner_school": "Iowa State",
    "loser": "Eric Larkin",
    "loser_school": "Arizona State",
    "result": "Dec 10-5"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Jared Frayer",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Bryan Snyder",
    "loser_school": "Nebraska",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Matt Lackey",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Greg Parker",
    "loser_school": "Princeton",
    "result": "Dec 12-5"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Josh Lambrecht",
    "loser_school": "Oklahoma",
    "result": "Fall 6:47"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Jon Trenge",
    "loser_school": "Lehigh",
    "result": "MD 12-4"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Steve Mocco",
    "loser_school": "Iowa",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1001,
    "winner": "Twan Pham",
    "winner_school": "Illinois",
    "loser": "Mario Stuart",
    "loser_school": "Lehigh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 1003,
    "winner": "Mark Conley",
    "winner_school": "Navy",
    "loser": "Jared Sullivan",
    "loser_school": "Chattanooga",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 1007,
    "winner": "Terry Parham",
    "winner_school": "Air Force",
    "loser": "Rashad Evans",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 1171,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Matthew Pitts",
    "loser_school": "Chattanooga",
    "result": "MD 11-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 1173,
    "winner": "Clint Frease",
    "winner_school": "Brown",
    "loser": "Jon Masa",
    "loser_school": "Hofstra",
    "result": "Dec 12-10 SV"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 1177,
    "winner": "Jim Stanec",
    "winner_school": "Cornell",
    "loser": "Brady Reinke",
    "loser_school": "Wisconsin",
    "result": "Dec 12-6"
  },
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 2001,
    "winner": "Heath McKim",
    "winner_school": "Air Force",
    "loser": "Marlon Felton",
    "loser_school": "Northern Illinois",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 2007,
    "winner": "Tony Gansen",
    "winner_school": "Central Michigan",
    "loser": "Dustin Kawa",
    "loser_school": "NC State",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 2171,
    "winner": "Marlon Felton",
    "winner_school": "Northern Illinois",
    "loser": "Michael Delaney",
    "loser_school": "Oregon State",
    "result": "MD 9-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 2177,
    "winner": "Jeff Rusak",
    "winner_school": "Old Dominion",
    "loser": "Pat Owens",
    "loser_school": "Boise State",
    "result": "Fall 0:59"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 3007,
    "winner": "Ralph Everett",
    "winner_school": "Hofstra",
    "loser": "Shane Webster",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 3177,
    "winner": "Dustin Kawa",
    "winner_school": "NC State",
    "loser": "Ralph Everett",
    "loser_school": "Hofstra",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 4007,
    "winner": "Michael Barger",
    "winner_school": "Oklahoma",
    "loser": "Brady Reinke",
    "loser_school": "Wisconsin",
    "result": "Fall 0:49"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 4177,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "Rashad Evans",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  }
];
