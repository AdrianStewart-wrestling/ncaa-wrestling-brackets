// 2003 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 2003 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results2003-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Seth Lisa",
    "winner_school": "West Virginia",
    "loser": "Adam Renner",
    "loser_school": "Slippery Rock",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Justin Owens",
    "winner_school": "Lock Haven",
    "loser": "Joe Cristaldi",
    "loser_school": "Drexel",
    "result": "Dec 9-6"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Andrew Shuler",
    "loser_school": "Wyoming",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Carl Fronhofer",
    "winner_school": "Pittsburgh",
    "loser": "Blake Kaplan",
    "loser_school": "Ohio State",
    "result": "Fall 4:46"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Scott Justus",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "K.C. Walsh",
    "winner_school": "Boise State",
    "loser": "Greg Sawyer",
    "loser_school": "Rider",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Jared Opfer",
    "loser_school": "Kent State",
    "result": "Fall 2:38"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Seth Lisa",
    "winner_school": "West Virginia",
    "loser": "Ryan McClester",
    "loser_school": "The Citadel",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Bobbe Lowe",
    "loser_school": "Minnesota",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Rocco Mansueto",
    "winner_school": "Cleveland State",
    "loser": "Skyler Holman",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-6 TB"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Jacob Gray",
    "loser_school": "Edinboro",
    "result": "Fall 4:39"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Terrance Clendenin",
    "winner_school": "Lehigh",
    "loser": "Vic Moreno",
    "loser_school": "Cal Poly",
    "result": "Fall 0:19"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Grant Nakamura",
    "winner_school": "Iowa State",
    "loser": "Efren Ceballos",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Kyle Stoffer",
    "loser_school": "Central Michigan",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Matt Valenti",
    "loser_school": "Penn",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Tommy Hoang",
    "winner_school": "Duke",
    "loser": "Michael Delaney",
    "loser_school": "Oregon State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Chris Rodrigues",
    "winner_school": "North Carolina",
    "loser": "Pat Flynn",
    "loser_school": "Hofstra",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Bo Maynes",
    "winner_school": "Oklahoma",
    "loser": "Adam Smith",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Luke Eustice",
    "winner_school": "Iowa",
    "loser": "George Cintron",
    "loser_school": "NC State",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Tony Black",
    "winner_school": "Wisconsin",
    "loser": "Heath McKim",
    "loser_school": "Air Force",
    "result": "Fall 4:54"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Bobby Stinson",
    "winner_school": "Rider",
    "loser": "Twan Pham",
    "loser_school": "Illinois",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Rich Caisse",
    "loser_school": "Appalachian State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Tom Clum",
    "loser_school": "Wisconsin",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Dave Roberts",
    "loser_school": "Millersville",
    "result": "Fall 2:58"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Alejandro Alvarez",
    "loser_school": "Cornell",
    "result": "Dec 14-11"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Joe Alexander",
    "loser_school": "Virginia",
    "result": "Fall 6:32"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Brandon Lauer",
    "winner_school": "West Virginia",
    "loser": "Zach Roberson",
    "loser_school": "Iowa State",
    "result": "Fall 4:21"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Jason Cucolo",
    "winner_school": "Sacred Heart",
    "loser": "Mike Simpson",
    "loser_school": "Arizona State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Rad Martinez",
    "winner_school": "Clarion",
    "loser": "Jason Harless",
    "loser_school": "Oregon",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Witt Durden",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Ryan Lewis",
    "winner_school": "Minnesota",
    "loser": "Justin Owens",
    "loser_school": "Lock Haven",
    "result": "Fall 2:16"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Joey Malia",
    "winner_school": "Nebraska",
    "loser": "Anthony Carrizales",
    "loser_school": "Ohio",
    "result": "Dec 15-13"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Pat Dowty",
    "winner_school": "Eastern Illinois",
    "loser": "Phil Mansueto",
    "loser_school": "Cleveland State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Jesse Brock",
    "loser_school": "Boise State",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Sam Hiatt",
    "winner_school": "Northern Illinois",
    "loser": "Richard LaForge",
    "loser_school": "Hofstra",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Travis Drake",
    "winner_school": "Appalachian State",
    "loser": "Greg Schaefer",
    "loser_school": "Indiana",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Sean Markey",
    "loser_school": "The Citadel",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Juan Mora",
    "loser_school": "Cal State Fullerton",
    "result": "TF 18-3 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Mike Messina",
    "winner_school": "Sacred Heart",
    "loser": "Ryan L'Amoreaux",
    "loser_school": "Michigan State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Scott Moore",
    "winner_school": "Penn State",
    "loser": "Clint Frease",
    "loser_school": "Brown",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Casey Olsen",
    "loser_school": "Fresno State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Aaron Holker",
    "winner_school": "Iowa State",
    "loser": "Tyler Laudon",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "J.P. Reese",
    "winner_school": "Missouri",
    "loser": "Clark Forward",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Bob Seidel",
    "winner_school": "Virginia",
    "loser": "Ronald Tarquinio",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Frank Edgar",
    "loser_school": "Clarion",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Derek Phillips",
    "loser_school": "Minnesota",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Josh Ruff",
    "winner_school": "Binghamton",
    "loser": "Jared Sullivan",
    "loser_school": "Chattanooga",
    "result": "Fall 4:06"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Coyte Cooper",
    "winner_school": "Indiana",
    "loser": "Josh Wooton",
    "loser_school": "Northern Illinois",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Casey Hunt",
    "loser_school": "Oregon",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Dana Holland",
    "winner_school": "Arizona State",
    "loser": "Jeff Ratliff",
    "loser_school": "Ohio State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Cory Ace",
    "winner_school": "Edinboro",
    "loser": "Gabe Vigil",
    "loser_school": "Boise State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Shane Cunanan",
    "winner_school": "West Virginia",
    "loser": "Doug McGraw",
    "loser_school": "Penn",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Derek Sola",
    "loser_school": "Millersville",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Ed Gutnik",
    "loser_school": "Wisconsin",
    "result": "Fall 0:49"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Matt Cox",
    "winner_school": "Cal Poly",
    "loser": "Dan Jankowski",
    "loser_school": "Purdue",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Brad Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Karl Nadolsky",
    "winner_school": "Michigan State",
    "loser": "Travis Shufelt",
    "loser_school": "Nebraska",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Jerrod Sanders",
    "winner_school": "Oklahoma State",
    "loser": "Rob Becker",
    "loser_school": "George Mason",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Jody Giuricich",
    "winner_school": "Penn",
    "loser": "Jeremy Spates",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Jake Giamoni",
    "winner_school": "NC State",
    "loser": "Jacob Harris",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Jon Garvin",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Jason Holder",
    "loser_school": "Boston University",
    "result": "Fall 1:22"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Ty Morgan",
    "loser_school": "Central Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Billy Smith",
    "winner_school": "West Virginia",
    "loser": "Greg Austin",
    "loser_school": "Rutgers",
    "result": "Fall 1:35"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Collin Robertson",
    "winner_school": "Boise State",
    "loser": "Ron Doppelheuer",
    "loser_school": "Edinboro",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Tony Hook",
    "loser_school": "Oregon State",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Justin Giovinco",
    "winner_school": "Pittsburgh",
    "loser": "Tony Pedrosa",
    "loser_school": "Illinois",
    "result": "Fall 6:46"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Anthony Coleman",
    "loser_school": "Cleveland State",
    "result": "TF 17-2 6:31"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Ben Cherrington",
    "loser_school": "Boise State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Clovis Crane",
    "winner_school": "Purdue",
    "loser": "David Bolyard",
    "loser_school": "Central Michigan",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Tim Foley",
    "loser_school": "Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Jim Medeiros",
    "winner_school": "Fresno State",
    "loser": "Joe Johnston",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Rocky Smart",
    "loser_school": "Arizona State",
    "result": "TF 17-1 4:57"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Kenny Burleson",
    "winner_school": "Missouri",
    "loser": "Brian Cobb",
    "loser_school": "CSU Bakersfield",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Scott Garren",
    "winner_school": "NC State",
    "loser": "Amir Khan",
    "loser_school": "Rutgers",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Rafael Maturino",
    "loser_school": "Oklahoma",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Mike Patrovich",
    "loser_school": "Hofstra",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Labe Black",
    "loser_school": "Buffalo",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Nate Wachter",
    "winner_school": "Penn State",
    "loser": "Adam Britt",
    "loser_school": "VMI",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Rob Belville",
    "loser_school": "Sacred Heart",
    "result": "Fall 2:01"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "Chris DiGuiseppe",
    "loser_school": "North Carolina",
    "result": "Fall 5:45"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Justin Nestor",
    "winner_school": "Pittsburgh",
    "loser": "Derek Jenkins",
    "loser_school": "Rider",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Jeremiah Jarvis",
    "winner_school": "UC Davis",
    "loser": "Gabe Webster",
    "loser_school": "Cornell",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Keaton Anderson",
    "winner_school": "Ohio State",
    "loser": "Matt Gentry",
    "loser_school": "Stanford",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Leighton Brady",
    "loser_school": "Boston University",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Oscar Santiago",
    "winner_school": "Purdue",
    "loser": "Jimmy O'Connor",
    "loser_school": "North Carolina",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Mike Kulczycki",
    "loser_school": "Michigan",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Frank Edwards",
    "winner_school": "Navy",
    "loser": "Noel Thompson",
    "loser_school": "Hofstra",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Nick Nemeth",
    "loser_school": "Kent State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Kevin Carr",
    "winner_school": "Central Michigan",
    "loser": "Jason Gilligan",
    "loser_school": "Lock Haven",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Doc Vecchio",
    "winner_school": "Penn State",
    "loser": "Scott Roth",
    "loser_school": "Cornell",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Dustin Kawa",
    "loser_school": "NC State",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Bill Boeh",
    "loser_school": "Duquesne",
    "result": "Fall 3:25"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Drew Kelly",
    "winner_school": "Northern Iowa",
    "loser": "Eric Arbogast",
    "loser_school": "Portland State",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Nick Frost",
    "winner_school": "Arizona State",
    "loser": "Jacob Klein",
    "loser_school": "Nebraska",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "Lee Roper",
    "loser_school": "Appalachian State",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Nick Passolano",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Levi Prevost",
    "winner_school": "Wyoming",
    "loser": "Matt Ellis",
    "loser_school": "Oregon State",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Jason Erwinski",
    "winner_school": "Northwestern",
    "loser": "Tom McMath",
    "loser_school": "West Virginia",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Ben Baca",
    "loser_school": "Fresno State",
    "result": "Fall 1:17"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Ralph Everett",
    "winner_school": "Hofstra",
    "loser": "Greg Jones",
    "loser_school": "West Virginia",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Matt Erwin",
    "winner_school": "VMI",
    "loser": "Hunter Guenot",
    "loser_school": "Bloomsburg",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Carl Fronhofer",
    "winner_school": "Pittsburgh",
    "loser": "Curtis Yeager",
    "loser_school": "Millersville",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Erik Wince",
    "loser_school": "Gardner-Webb",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Tyler Nixt",
    "winner_school": "Iowa",
    "loser": "Mark Canty",
    "loser_school": "North Carolina",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Shane Webster",
    "winner_school": "Oregon",
    "loser": "Tyler Baier",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Jake Huffman",
    "loser_school": "Oregon State",
    "result": "Fall 4:51"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Andrew Roy",
    "loser_school": "Rutgers",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Eddy Gifford",
    "loser_school": "Fresno State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Rashad Evans",
    "winner_school": "Michigan State",
    "loser": "Nate Yetzer",
    "loser_school": "Edinboro",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Mark Fee",
    "winner_school": "Appalachian State",
    "loser": "Pat Owen",
    "loser_school": "Michigan",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "Seth Cameron",
    "loser_school": "James Madison",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Brad Dillon",
    "winner_school": "Lehigh",
    "loser": "Chris Carlino",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Curtis Owen",
    "winner_school": "Arizona State",
    "loser": "Travis Pascoe",
    "loser_school": "Nebraska",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Gary Cooper",
    "winner_school": "Buffalo",
    "loser": "Pat O'Donnell",
    "loser_school": "Harvard",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Brady Reinke",
    "loser_school": "Wisconsin",
    "result": "TF 18-3 4:24"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Jed Pennell",
    "loser_school": "Oregon State",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Austen Palmer",
    "winner_school": "Iowa State",
    "loser": "Rowdy Lundegreen",
    "loser_school": "Cal State Fullerton",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Ben Heizer",
    "winner_school": "Northern Illinois",
    "loser": "Jordan Holm",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Ryan Halsey",
    "winner_school": "Cal Poly",
    "loser": "Ty Matthews",
    "loser_school": "Indiana",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Mark Becks",
    "winner_school": "Penn State",
    "loser": "Russ Vanderheyden",
    "loser_school": "Central Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Jake Stork",
    "winner_school": "Maryland",
    "loser": "Ben Wissel",
    "loser_school": "Purdue",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Dave Colabella",
    "winner_school": "James Madison",
    "loser": "Casey Kapustka",
    "loser_school": "Ohio State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Scott Barker",
    "winner_school": "Missouri",
    "loser": "Dusty Heist",
    "loser_school": "North Carolina",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Clint Wattenberg",
    "winner_school": "Cornell",
    "loser": "Ryan Wilman",
    "loser_school": "West Virginia",
    "result": "TF 15-0 0:00"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "Brad Christie",
    "loser_school": "Hofstra",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Brian Neuman",
    "loser_school": "Duquesne",
    "result": "Fall 4:17"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Gerald Harris",
    "winner_school": "Cleveland State",
    "loser": "Nick Ciarcia",
    "loser_school": "Brown",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Keith Clifton",
    "loser_school": "The Citadel",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Ed Strauss",
    "winner_school": "Boston University",
    "loser": "Bryan Travers",
    "loser_school": "CSU Bakersfield",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Greg Parker",
    "winner_school": "Princeton",
    "loser": "Tony D'Amico",
    "loser_school": "Boise State",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "K.C. Walsh",
    "loser_school": "Boise State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Adam Schaaf",
    "loser_school": "Millersville",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Kyle Smith",
    "winner_school": "Michigan",
    "loser": "Kevin Kessner",
    "loser_school": "Wyoming",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Anthony Reynolds",
    "winner_school": "Sacred Heart",
    "loser": "Stipe Miocic",
    "loser_school": "Cleveland State",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Anton Talamantes",
    "winner_school": "Ohio State",
    "loser": "David Shunamon",
    "loser_school": "Edinboro",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Morgan Horner",
    "winner_school": "Lock Haven",
    "loser": "David Dashiell",
    "loser_school": "North Carolina",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "David Schenk",
    "winner_school": "Cal Poly",
    "loser": "Paul Velekei",
    "loser_school": "Penn",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Ryan Cummins",
    "loser_school": "Penn State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Lee Kraemer",
    "loser_school": "Wisconsin",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Tom Grossman",
    "winner_school": "Oklahoma",
    "loser": "Josh Carroll",
    "loser_school": "Appalachian State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Dante Stone",
    "winner_school": "Missouri",
    "loser": "Matt Greenberg",
    "loser_school": "Cornell",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Ryan McGrath",
    "loser_school": "Rutgers",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Nik Fekete",
    "winner_school": "Michigan State",
    "loser": "Marcio Botelho",
    "loser_school": "Fresno State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Landon Seefeldt",
    "loser_school": "Cal State Fullerton",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Tyrone Byrd",
    "winner_school": "Illinois",
    "loser": "Chris Jones",
    "loser_school": "Drexel",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Muhammed Lawal",
    "winner_school": "Oklahoma State",
    "loser": "Eric Mausser",
    "loser_school": "Clarion",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Scott Coleman",
    "winner_school": "Iowa State",
    "loser": "Greg Wagner",
    "loser_school": "Michigan",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "John Testa",
    "winner_school": "Clarion",
    "loser": "Tomas Rodriguez",
    "loser_school": "Kent State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Garrett Lowney",
    "winner_school": "Minnesota",
    "loser": "Brad Steele",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Boe Rushton",
    "winner_school": "Boise State",
    "loser": "Kevin Herron",
    "loser_school": "Missouri",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Israel Blevins",
    "winner_school": "Purdue",
    "loser": "Marc Allemang",
    "loser_school": "Duquesne",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Kellan Fluckiger",
    "winner_school": "Arizona State",
    "loser": "Mike Carroll",
    "loser_school": "Drexel",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Willie Gruenwald",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:15"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Carmelo Marrero",
    "winner_school": "Rider",
    "loser": "Andy Bowlby",
    "loser_school": "Oregon State",
    "result": "Dec 16-12"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Justin Staebler",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Russ Davie",
    "loser_school": "Cleveland State",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "John Paxton",
    "winner_school": "Army",
    "loser": "Billy Linane",
    "loser_school": "The Citadel",
    "result": "Fall 2:34"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "Joe Sahl",
    "loser_school": "Lehigh",
    "result": "Fall 5:41"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Twan Pham",
    "winner_school": "Illinois",
    "loser": "Adam Renner",
    "loser_school": "Slippery Rock",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Nate Ybarra",
    "winner_school": "Cal Poly",
    "loser": "Dave Roberts",
    "loser_school": "Millersville",
    "result": "MD 21-7"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Amir Khan",
    "winner_school": "Rutgers",
    "loser": "Andrew Shuler",
    "loser_school": "Wyoming",
    "result": "Dec 11-9"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Blake Kaplan",
    "loser_school": "Ohio State",
    "result": "Fall 1:25"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Scott Justus",
    "winner_school": "Virginia Tech",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Brett Faustman",
    "winner_school": "Central Michigan",
    "loser": "David Dashiell",
    "loser_school": "North Carolina",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Seth Lisa",
    "loser_school": "West Virginia",
    "result": "Fall 1:13"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Rocco Mansueto",
    "loser_school": "Cleveland State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Terrance Clendenin",
    "winner_school": "Lehigh",
    "loser": "Nick Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Grant Nakamura",
    "loser_school": "Iowa State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Tommy Hoang",
    "loser_school": "Duke",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Bo Maynes",
    "winner_school": "Oklahoma",
    "loser": "Chris Rodrigues",
    "loser_school": "North Carolina",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Tony Black",
    "winner_school": "Wisconsin",
    "loser": "Luke Eustice",
    "loser_school": "Iowa",
    "result": "TF 15-0 5:42"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Bobby Stinson",
    "loser_school": "Rider",
    "result": "Fall 2:50"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Twan Pham",
    "winner_school": "Illinois",
    "loser": "Rich Caisse",
    "loser_school": "Appalachian State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Heath McKim",
    "winner_school": "Air Force",
    "loser": "George Cintron",
    "loser_school": "NC State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Adam Smith",
    "winner_school": "Penn State",
    "loser": "Pat Flynn",
    "loser_school": "Hofstra",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Michael Delaney",
    "loser_school": "Oregon State",
    "result": "Fall 4:23"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "Kyle Stoffer",
    "loser_school": "Central Michigan",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "Jacob Gray",
    "loser_school": "Edinboro",
    "result": "MD 16-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Skyler Holman",
    "loser_school": "Oklahoma State",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Ryan McClester",
    "winner_school": "The Citadel",
    "loser": "Jared Opfer",
    "loser_school": "Kent State",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Matt Sanchez",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 2:01"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Shawn Bunch",
    "loser_school": "Edinboro",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Brandon Lauer",
    "winner_school": "West Virginia",
    "loser": "Jason Cucolo",
    "loser_school": "Sacred Heart",
    "result": "Fall 2:19"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Rad Martinez",
    "winner_school": "Clarion",
    "loser": "Evan Sola",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Ryan Lewis",
    "winner_school": "Minnesota",
    "loser": "Joey Malia",
    "loser_school": "Nebraska",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Pat Garcia",
    "winner_school": "Northern Iowa",
    "loser": "Pat Dowty",
    "loser_school": "Eastern Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Sam Hiatt",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Travis Drake",
    "loser_school": "Appalachian State",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Greg Schaefer",
    "winner_school": "Indiana",
    "loser": "Sean Markey",
    "loser_school": "The Citadel",
    "result": "MD 17-7"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Jesse Brock",
    "winner_school": "Boise State",
    "loser": "Richard LaForge",
    "loser_school": "Hofstra",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Rene Hernandez",
    "winner_school": "Purdue",
    "loser": "Anthony Carrizales",
    "loser_school": "Ohio",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Jason Harless",
    "loser_school": "Oregon",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Mike Simpson",
    "loser_school": "Arizona State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Alejandro Alvarez",
    "winner_school": "Cornell",
    "loser": "Joe Alexander",
    "loser_school": "Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Nate Ybarra",
    "loser_school": "Cal Poly",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Mike Messina",
    "loser_school": "Sacred Heart",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Scott Moore",
    "loser_school": "Penn State",
    "result": "Fall 6:58"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Aaron Holker",
    "winner_school": "Iowa State",
    "loser": "J.P. Reese",
    "loser_school": "Missouri",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Bob Seidel",
    "loser_school": "Virginia",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Josh Ruff",
    "loser_school": "Binghamton",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Coyte Cooper",
    "loser_school": "Indiana",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Dana Holland",
    "winner_school": "Arizona State",
    "loser": "Cory Ace",
    "loser_school": "Edinboro",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Shane Cunanan",
    "winner_school": "West Virginia",
    "loser": "Zack Esposito",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Doug McGraw",
    "winner_school": "Penn",
    "loser": "Derek Sola",
    "loser_school": "Millersville",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Gabe Vigil",
    "winner_school": "Boise State",
    "loser": "Jeff Ratliff",
    "loser_school": "Ohio State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Josh Wooton",
    "winner_school": "Northern Illinois",
    "loser": "Casey Hunt",
    "loser_school": "Oregon",
    "result": "TF 19-3 7:00"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Derek Phillips",
    "winner_school": "Minnesota",
    "loser": "Jared Sullivan",
    "loser_school": "Chattanooga",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Ronald Tarquinio",
    "winner_school": "Pittsburgh",
    "loser": "Frank Edgar",
    "loser_school": "Clarion",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Clark Forward",
    "winner_school": "Michigan",
    "loser": "Tyler Laudon",
    "loser_school": "Wisconsin",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Casey Olsen",
    "winner_school": "Fresno State",
    "loser": "Clint Frease",
    "loser_school": "Brown",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Ryan L'Amoreaux",
    "winner_school": "Michigan State",
    "loser": "Juan Mora",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Matt Cox",
    "loser_school": "Cal Poly",
    "result": "Fall 2:23"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Karl Nadolsky",
    "winner_school": "Michigan State",
    "loser": "Ty Eustice",
    "loser_school": "Iowa",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Jerrod Sanders",
    "winner_school": "Oklahoma State",
    "loser": "Jody Giuricich",
    "loser_school": "Penn",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Jake Giamoni",
    "loser_school": "NC State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Ryan Churella",
    "loser_school": "Michigan",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Collin Robertson",
    "winner_school": "Boise State",
    "loser": "Billy Smith",
    "loser_school": "West Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Jon Masa",
    "loser_school": "Hofstra",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Justin Giovinco",
    "loser_school": "Pittsburgh",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Tony Pedrosa",
    "winner_school": "Illinois",
    "loser": "Anthony Coleman",
    "loser_school": "Cleveland State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Ron Doppelheuer",
    "winner_school": "Edinboro",
    "loser": "Greg Austin",
    "loser_school": "Rutgers",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Ty Morgan",
    "winner_school": "Central Michigan",
    "loser": "Jason Holder",
    "loser_school": "Boston University",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Jon Garvin",
    "winner_school": "Northern Iowa",
    "loser": "Jacob Harris",
    "loser_school": "Chattanooga",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Rob Becker",
    "winner_school": "George Mason",
    "loser": "Jeremy Spates",
    "loser_school": "Missouri",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "Travis Shufelt",
    "winner_school": "Nebraska",
    "loser": "Brad Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Ed Gutnik",
    "winner_school": "Wisconsin",
    "loser": "Dan Jankowski",
    "loser_school": "Purdue",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Clovis Crane",
    "loser_school": "Purdue",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Jim Medeiros",
    "loser_school": "Fresno State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Kenny Burleson",
    "loser_school": "Missouri",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Scott Garren",
    "loser_school": "NC State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Matt Lebe",
    "loser_school": "West Virginia",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Nate Wachter",
    "loser_school": "Penn State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "Justin Nestor",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Keaton Anderson",
    "winner_school": "Ohio State",
    "loser": "Jeremiah Jarvis",
    "loser_school": "UC Davis",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Gabe Webster",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Derek Jenkins",
    "winner_school": "Rider",
    "loser": "Chris DiGuiseppe",
    "loser_school": "North Carolina",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Rob Belville",
    "winner_school": "Sacred Heart",
    "loser": "Adam Britt",
    "loser_school": "VMI",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Labe Black",
    "loser_school": "Buffalo",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Rafael Maturino",
    "winner_school": "Oklahoma",
    "loser": "Amir Khan",
    "loser_school": "Rutgers",
    "result": "Fall 1:27"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Rocky Smart",
    "winner_school": "Arizona State",
    "loser": "Brian Cobb",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Tim Foley",
    "loser_school": "Virginia",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "David Bolyard",
    "winner_school": "Central Michigan",
    "loser": "Chris Bitetto",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Oscar Santiago",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Frank Edwards",
    "loser_school": "Navy",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Kevin Carr",
    "loser_school": "Central Michigan",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Doc Vecchio",
    "loser_school": "Penn State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Drew Kelly",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:26"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "Nick Frost",
    "loser_school": "Arizona State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Levi Prevost",
    "winner_school": "Wyoming",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Jason Erwinski",
    "loser_school": "Northwestern",
    "result": "Fall 2:02"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Tom McMath",
    "winner_school": "West Virginia",
    "loser": "Ben Baca",
    "loser_school": "Fresno State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Nick Passolano",
    "winner_school": "Iowa State",
    "loser": "Matt Ellis",
    "loser_school": "Oregon State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Lee Roper",
    "loser_school": "Appalachian State",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Bill Boeh",
    "winner_school": "Duquesne",
    "loser": "Eric Arbogast",
    "loser_school": "Portland State",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Scott Roth",
    "winner_school": "Cornell",
    "loser": "Dustin Kawa",
    "loser_school": "NC State",
    "result": "MD 16-7"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Nick Nemeth",
    "winner_school": "Kent State",
    "loser": "Jason Gilligan",
    "loser_school": "Lock Haven",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "Mike Kulczycki",
    "loser_school": "Michigan",
    "result": "Dec 16-13"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Jimmy O'Connor",
    "winner_school": "North Carolina",
    "loser": "Leighton Brady",
    "loser_school": "Boston University",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Ralph Everett",
    "winner_school": "Hofstra",
    "loser": "Matt Erwin",
    "loser_school": "VMI",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Carl Fronhofer",
    "winner_school": "Pittsburgh",
    "loser": "Brian Glynn",
    "loser_school": "Illinois",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Shane Webster",
    "winner_school": "Oregon",
    "loser": "Tyler Nixt",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Matt Herrington",
    "loser_school": "Penn",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Rashad Evans",
    "loser_school": "Michigan State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Mark Fee",
    "winner_school": "Appalachian State",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Brad Dillon",
    "winner_school": "Lehigh",
    "loser": "Curtis Owen",
    "loser_school": "Arizona State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Gary Cooper",
    "loser_school": "Buffalo",
    "result": "Fall 5:55"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Pat O'Donnell",
    "winner_school": "Harvard",
    "loser": "Brady Reinke",
    "loser_school": "Wisconsin",
    "result": "Dec 15-9"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Chris Carlino",
    "loser_school": "Cal State Fullerton",
    "result": "MD 22-8"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Pat Owen",
    "winner_school": "Michigan",
    "loser": "Seth Cameron",
    "loser_school": "James Madison",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Eddy Gifford",
    "winner_school": "Fresno State",
    "loser": "Nate Yetzer",
    "loser_school": "Edinboro",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Andrew Roy",
    "winner_school": "Rutgers",
    "loser": "Jake Huffman",
    "loser_school": "Oregon State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Tyler Baier",
    "winner_school": "Cornell",
    "loser": "Mark Canty",
    "loser_school": "North Carolina",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Erik Wince",
    "winner_school": "Gardner-Webb",
    "loser": "Curtis Yeager",
    "loser_school": "Millersville",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Hunter Guenot",
    "loser_school": "Bloomsburg",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Austen Palmer",
    "loser_school": "Iowa State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Ben Heizer",
    "winner_school": "Northern Illinois",
    "loser": "Ryan Halsey",
    "loser_school": "Cal Poly",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Mark Becks",
    "winner_school": "Penn State",
    "loser": "Jake Stork",
    "loser_school": "Maryland",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Scott Barker",
    "winner_school": "Missouri",
    "loser": "Dave Colabella",
    "loser_school": "James Madison",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Clint Wattenberg",
    "winner_school": "Cornell",
    "loser": "Alex Clemsen",
    "loser_school": "Edinboro",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Pete Friedl",
    "loser_school": "Illinois",
    "result": "Fall 2:53"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Gerald Harris",
    "loser_school": "Cleveland State",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Greg Parker",
    "winner_school": "Princeton",
    "loser": "Ed Strauss",
    "loser_school": "Boston University",
    "result": "TF 19-4 5:26"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Tony D'Amico",
    "winner_school": "Boise State",
    "loser": "Bryan Travers",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Nick Ciarcia",
    "winner_school": "Brown",
    "loser": "Keith Clifton",
    "loser_school": "The Citadel",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Scott Justus",
    "winner_school": "Virginia Tech",
    "loser": "Brian Neuman",
    "loser_school": "Duquesne",
    "result": "Fall 2:10"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Brad Christie",
    "winner_school": "Hofstra",
    "loser": "Ryan Wilman",
    "loser_school": "West Virginia",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Casey Kapustka",
    "winner_school": "Ohio State",
    "loser": "Dusty Heist",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Ralph DeNisco",
    "winner_school": "Wisconsin",
    "loser": "Ben Wissel",
    "loser_school": "Purdue",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Jordan Holm",
    "winner_school": "Northern Iowa",
    "loser": "Ty Matthews",
    "loser_school": "Indiana",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Jed Pennell",
    "winner_school": "Oregon State",
    "loser": "Rowdy Lundegreen",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Ryan Bader",
    "loser_school": "Arizona State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Kyle Smith",
    "winner_school": "Michigan",
    "loser": "Anthony Reynolds",
    "loser_school": "Sacred Heart",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Morgan Horner",
    "winner_school": "Lock Haven",
    "loser": "Anton Talamantes",
    "loser_school": "Ohio State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "David Schenk",
    "loser_school": "Cal Poly",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Tom Grossman",
    "winner_school": "Oklahoma",
    "loser": "Justin Ruiz",
    "loser_school": "Nebraska",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Dante Stone",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Nik Fekete",
    "loser_school": "Michigan State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Muhammed Lawal",
    "winner_school": "Oklahoma State",
    "loser": "Tyrone Byrd",
    "loser_school": "Illinois",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Eric Mausser",
    "winner_school": "Clarion",
    "loser": "Chris Jones",
    "loser_school": "Drexel",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Marcio Botelho",
    "winner_school": "Fresno State",
    "loser": "Landon Seefeldt",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "Ryan McGrath",
    "loser_school": "Rutgers",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Lee Kraemer",
    "winner_school": "Wisconsin",
    "loser": "Josh Carroll",
    "loser_school": "Appalachian State",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Paul Velekei",
    "winner_school": "Penn",
    "loser": "Ryan Cummins",
    "loser_school": "Penn State",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "David Shunamon",
    "winner_school": "Edinboro",
    "loser": "Brett Faustman",
    "loser_school": "Central Michigan",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Kevin Kessner",
    "winner_school": "Wyoming",
    "loser": "Stipe Miocic",
    "loser_school": "Cleveland State",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "K.C. Walsh",
    "winner_school": "Boise State",
    "loser": "Adam Schaaf",
    "loser_school": "Millersville",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Steve Mocco",
    "winner_school": "Iowa",
    "loser": "Scott Coleman",
    "loser_school": "Iowa State",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "John Testa",
    "winner_school": "Clarion",
    "loser": "Garrett Lowney",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Boe Rushton",
    "winner_school": "Boise State",
    "loser": "Brent Miller",
    "loser_school": "West Virginia",
    "result": "Fall 8:15"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Kellan Fluckiger",
    "winner_school": "Arizona State",
    "loser": "Israel Blevins",
    "loser_school": "Purdue",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Dan Howe",
    "loser_school": "Cal Poly",
    "result": "Fall 1:22"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Carmelo Marrero",
    "loser_school": "Rider",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "John Paxton",
    "loser_school": "Army",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Joe Sahl",
    "winner_school": "Lehigh",
    "loser": "Billy Linane",
    "loser_school": "The Citadel",
    "result": "Fall 1:48"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Justin Staebler",
    "winner_school": "Wisconsin",
    "loser": "Andy Bowlby",
    "loser_school": "Oregon State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Mike Carroll",
    "winner_school": "Drexel",
    "loser": "Marc Allemang",
    "loser_school": "Duquesne",
    "result": "Fall 6:45"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Tomas Rodriguez",
    "winner_school": "Kent State",
    "loser": "Brad Steele",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Twan Pham",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Heath McKim",
    "winner_school": "Air Force",
    "loser": "Grant Nakamura",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Seth Lisa",
    "winner_school": "West Virginia",
    "loser": "Adam Smith",
    "loser_school": "Penn State",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Rocco Mansueto",
    "loser_school": "Cleveland State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "Luke Eustice",
    "loser_school": "Iowa",
    "result": "FOR"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "Bobby Stinson",
    "loser_school": "Rider",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Tommy Hoang",
    "loser_school": "Duke",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Ryan McClester",
    "winner_school": "The Citadel",
    "loser": "Chris Rodrigues",
    "loser_school": "North Carolina",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Greg Schaefer",
    "winner_school": "Indiana",
    "loser": "Jason Cucolo",
    "loser_school": "Sacred Heart",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Jesse Brock",
    "loser_school": "Boise State",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Phil Mansueto",
    "winner_school": "Cleveland State",
    "loser": "Matt Sanchez",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Rene Hernandez",
    "winner_school": "Purdue",
    "loser": "Shawn Bunch",
    "loser_school": "Edinboro",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Sam Hiatt",
    "loser_school": "Northern Illinois",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Travis Drake",
    "loser_school": "Appalachian State",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Joey Malia",
    "winner_school": "Nebraska",
    "loser": "Alejandro Alvarez",
    "loser_school": "Cornell",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Pat Dowty",
    "loser_school": "Eastern Illinois",
    "result": "Dec 15-10"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Doug McGraw",
    "winner_school": "Penn",
    "loser": "J.P. Reese",
    "loser_school": "Missouri",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Bob Seidel",
    "winner_school": "Virginia",
    "loser": "Gabe Vigil",
    "loser_school": "Boise State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Josh Wooton",
    "winner_school": "Northern Illinois",
    "loser": "Mike Messina",
    "loser_school": "Sacred Heart",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Scott Moore",
    "winner_school": "Penn State",
    "loser": "Derek Phillips",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Cory Ace",
    "winner_school": "Edinboro",
    "loser": "Ronald Tarquinio",
    "loser_school": "Pittsburgh",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Clark Forward",
    "loser_school": "Michigan",
    "result": "Fall 3:26"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Casey Olsen",
    "winner_school": "Fresno State",
    "loser": "Josh Ruff",
    "loser_school": "Binghamton",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Coyte Cooper",
    "winner_school": "Indiana",
    "loser": "Ryan L'Amoreaux",
    "loser_school": "Michigan State",
    "result": "Dec 11-9 SV"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Jody Giuricich",
    "winner_school": "Penn",
    "loser": "Tony Pedrosa",
    "loser_school": "Illinois",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Jake Giamoni",
    "winner_school": "NC State",
    "loser": "Tony Hook",
    "loser_school": "Oregon State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Matt Cox",
    "winner_school": "Cal Poly",
    "loser": "Ron Doppelheuer",
    "loser_school": "Edinboro",
    "result": "Dec 14-11"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Ty Morgan",
    "loser_school": "Central Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Jon Garvin",
    "loser_school": "Northern Iowa",
    "result": "MD 14-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Justin Giovinco",
    "winner_school": "Pittsburgh",
    "loser": "Rob Becker",
    "loser_school": "George Mason",
    "result": "Fall 2:40"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Travis Shufelt",
    "loser_school": "Nebraska",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Billy Smith",
    "winner_school": "West Virginia",
    "loser": "Ed Gutnik",
    "loser_school": "Wisconsin",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Kenny Burleson",
    "loser_school": "Missouri",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Derek Jenkins",
    "winner_school": "Rider",
    "loser": "Scott Garren",
    "loser_school": "NC State",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Clovis Crane",
    "winner_school": "Purdue",
    "loser": "Rob Belville",
    "loser_school": "Sacred Heart",
    "result": "Fall 3:59"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Jim Medeiros",
    "winner_school": "Fresno State",
    "loser": "Mike Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Rafael Maturino",
    "winner_school": "Oklahoma",
    "loser": "Justin Nestor",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Rocky Smart",
    "winner_school": "Arizona State",
    "loser": "Jeremiah Jarvis",
    "loser_school": "UC Davis",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Matt Lebe",
    "loser_school": "West Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Nate Wachter",
    "winner_school": "Penn State",
    "loser": "David Bolyard",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Tom McMath",
    "winner_school": "West Virginia",
    "loser": "Kevin Carr",
    "loser_school": "Central Michigan",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Doc Vecchio",
    "winner_school": "Penn State",
    "loser": "Nick Passolano",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Oscar Santiago",
    "winner_school": "Purdue",
    "loser": "Jacob Klein",
    "loser_school": "Nebraska",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Frank Edwards",
    "winner_school": "Navy",
    "loser": "Bill Boeh",
    "loser_school": "Duquesne",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Scott Roth",
    "loser_school": "Cornell",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Jason Erwinski",
    "winner_school": "Northwestern",
    "loser": "Nick Nemeth",
    "loser_school": "Kent State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "Drew Kelly",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Nick Frost",
    "winner_school": "Arizona State",
    "loser": "Jimmy O'Connor",
    "loser_school": "North Carolina",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Pat O'Donnell",
    "winner_school": "Harvard",
    "loser": "Tyler Nixt",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Matt Herrington",
    "loser_school": "Penn",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Pat Owen",
    "winner_school": "Michigan",
    "loser": "Matt Erwin",
    "loser_school": "VMI",
    "result": "Fall 3:34"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Eddy Gifford",
    "winner_school": "Fresno State",
    "loser": "Brian Glynn",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Curtis Owen",
    "winner_school": "Arizona State",
    "loser": "Andrew Roy",
    "loser_school": "Rutgers",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Tyler Baier",
    "winner_school": "Cornell",
    "loser": "Gary Cooper",
    "loser_school": "Buffalo",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Rashad Evans",
    "winner_school": "Michigan State",
    "loser": "Erik Wince",
    "loser_school": "Gardner-Webb",
    "result": "Fall 6:19"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Jake Stork",
    "winner_school": "Maryland",
    "loser": "Tony D'Amico",
    "loser_school": "Boise State",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Dave Colabella",
    "winner_school": "James Madison",
    "loser": "Nick Ciarcia",
    "loser_school": "Brown",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Scott Justus",
    "winner_school": "Virginia Tech",
    "loser": "Austen Palmer",
    "loser_school": "Iowa State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Ryan Halsey",
    "winner_school": "Cal Poly",
    "loser": "Brad Christie",
    "loser_school": "Hofstra",
    "result": "Fall 1:40"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Gerald Harris",
    "winner_school": "Cleveland State",
    "loser": "Casey Kapustka",
    "loser_school": "Ohio State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Ralph DeNisco",
    "winner_school": "Wisconsin",
    "loser": "Ed Strauss",
    "loser_school": "Boston University",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Jordan Holm",
    "winner_school": "Northern Iowa",
    "loser": "Alex Clemsen",
    "loser_school": "Edinboro",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Jed Pennell",
    "loser_school": "Oregon State",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Eric Mausser",
    "winner_school": "Clarion",
    "loser": "Anton Talamantes",
    "loser_school": "Ohio State",
    "result": "FOR"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Marcio Botelho",
    "winner_school": "Fresno State",
    "loser": "David Schenk",
    "loser_school": "Cal Poly",
    "result": "Fall 4:25"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "Ryan Bader",
    "loser_school": "Arizona State",
    "result": "MD 14-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Lee Kraemer",
    "winner_school": "Wisconsin",
    "loser": "Anthony Reynolds",
    "loser_school": "Sacred Heart",
    "result": "Fall 2:37"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Nik Fekete",
    "winner_school": "Michigan State",
    "loser": "Paul Velekei",
    "loser_school": "Penn",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "David Shunamon",
    "winner_school": "Edinboro",
    "loser": "Tyrone Byrd",
    "loser_school": "Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Kevin Kessner",
    "loser_school": "Wyoming",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Dante Stone",
    "winner_school": "Missouri",
    "loser": "K.C. Walsh",
    "loser_school": "Boise State",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Brent Miller",
    "winner_school": "West Virginia",
    "loser": "Joe Sahl",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Israel Blevins",
    "winner_school": "Purdue",
    "loser": "Russ Davie",
    "loser_school": "Cleveland State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Justin Staebler",
    "winner_school": "Wisconsin",
    "loser": "Scott Coleman",
    "loser_school": "Iowa State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Willie Gruenwald",
    "winner_school": "Oklahoma State",
    "loser": "Garrett Lowney",
    "loser_school": "Minnesota",
    "result": "DEF"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Mike Carroll",
    "loser_school": "Drexel",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Kevin Herron",
    "winner_school": "Missouri",
    "loser": "John Paxton",
    "loser_school": "Army",
    "result": "Fall 5:26"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Tomas Rodriguez",
    "winner_school": "Kent State",
    "loser": "Dan Howe",
    "loser_school": "Cal Poly",
    "result": "MD 16-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Carmelo Marrero",
    "loser_school": "Rider",
    "result": "Fall 2:58"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Jason Powell",
    "loser_school": "Nebraska",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Terrance Clendenin",
    "loser_school": "Lehigh",
    "result": "MD 10-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Ben Vombaur",
    "winner_school": "Boise State",
    "loser": "Bo Maynes",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Tony Black",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Heath McKim",
    "loser_school": "Air Force",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Seth Lisa",
    "loser_school": "West Virginia",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "Efren Ceballos",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Ryan McClester",
    "loser_school": "The Citadel",
    "result": "Dec 11-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Mark Jayne",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Rad Martinez",
    "winner_school": "Clarion",
    "loser": "Brandon Lauer",
    "loser_school": "West Virginia",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Ryan Lewis",
    "winner_school": "Minnesota",
    "loser": "Pat Garcia",
    "loser_school": "Northern Iowa",
    "result": "Fall 0:36"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Josh Moore",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Greg Schaefer",
    "loser_school": "Indiana",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Phil Mansueto",
    "winner_school": "Cleveland State",
    "loser": "Rene Hernandez",
    "loser_school": "Purdue",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Witt Durden",
    "loser_school": "Oklahoma",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Joey Malia",
    "loser_school": "Nebraska",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Phillip Simpson",
    "loser_school": "Army",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Aaron Holker",
    "loser_school": "Iowa State",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Shane Cunanan",
    "winner_school": "West Virginia",
    "loser": "Dana Holland",
    "loser_school": "Arizona State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Doug McGraw",
    "winner_school": "Penn",
    "loser": "Bob Seidel",
    "loser_school": "Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Scott Moore",
    "winner_school": "Penn State",
    "loser": "Josh Wooton",
    "loser_school": "Northern Illinois",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Cory Ace",
    "loser_school": "Edinboro",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Coyte Cooper",
    "winner_school": "Indiana",
    "loser": "Casey Olsen",
    "loser_school": "Fresno State",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Karl Nadolsky",
    "loser_school": "Michigan State",
    "result": "MD 15-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Jerrod Sanders",
    "winner_school": "Oklahoma State",
    "loser": "Jake Percival",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Collin Robertson",
    "loser_school": "Boise State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Dustin Manotti",
    "loser_school": "Cornell",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Jody Giuricich",
    "winner_school": "Penn",
    "loser": "Jake Giamoni",
    "loser_school": "NC State",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Matt Cox",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Justin Giovinco",
    "loser_school": "Pittsburgh",
    "result": "MD 16-8"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Billy Smith",
    "winner_school": "West Virginia",
    "loser": "Ryan Churella",
    "loser_school": "Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Luke Becker",
    "loser_school": "Minnesota",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Gray Maynard",
    "loser_school": "Michigan State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Shane Roller",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Keaton Anderson",
    "winner_school": "Ohio State",
    "loser": "Derek Zinck",
    "loser_school": "Lehigh",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Derek Jenkins",
    "loser_school": "Rider",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Clovis Crane",
    "winner_school": "Purdue",
    "loser": "Jim Medeiros",
    "loser_school": "Fresno State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Rocky Smart",
    "winner_school": "Arizona State",
    "loser": "Rafael Maturino",
    "loser_school": "Oklahoma",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Nate Wachter",
    "winner_school": "Penn State",
    "loser": "Joe Johnston",
    "loser_school": "Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Matt King",
    "loser_school": "Edinboro",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Tyron Woodley",
    "loser_school": "Missouri",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "John Clark",
    "loser_school": "Ohio State",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Levi Prevost",
    "loser_school": "Wyoming",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Doc Vecchio",
    "winner_school": "Penn State",
    "loser": "Tom McMath",
    "loser_school": "West Virginia",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Frank Edwards",
    "winner_school": "Navy",
    "loser": "Oscar Santiago",
    "loser_school": "Purdue",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Jason Erwinski",
    "winner_school": "Northwestern",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "Nick Frost",
    "loser_school": "Arizona State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Carl Fronhofer",
    "winner_school": "Pittsburgh",
    "loser": "Ralph Everett",
    "loser_school": "Hofstra",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Shane Webster",
    "winner_school": "Oregon",
    "loser": "Ryan Lange",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Mark Fee",
    "loser_school": "Appalachian State",
    "result": "Fall 1:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Brad Dillon",
    "winner_school": "Lehigh",
    "loser": "Chris Pendleton",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Pat O'Donnell",
    "winner_school": "Harvard",
    "loser": "Travis Pascoe",
    "loser_school": "Nebraska",
    "result": "Fall 3:46"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Eddy Gifford",
    "winner_school": "Fresno State",
    "loser": "Pat Owen",
    "loser_school": "Michigan",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Curtis Owen",
    "winner_school": "Arizona State",
    "loser": "Tyler Baier",
    "loser_school": "Cornell",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Rashad Evans",
    "winner_school": "Michigan State",
    "loser": "Greg Jones",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Ben Heizer",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Scott Barker",
    "winner_school": "Missouri",
    "loser": "Mark Becks",
    "loser_school": "Penn State",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Clint Wattenberg",
    "loser_school": "Cornell",
    "result": "Fall 4:31"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Greg Parker",
    "loser_school": "Princeton",
    "result": "Fall 2:20"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Jake Stork",
    "winner_school": "Maryland",
    "loser": "Dave Colabella",
    "loser_school": "James Madison",
    "result": "TF 16-1 4:27"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Scott Justus",
    "winner_school": "Virginia Tech",
    "loser": "Ryan Halsey",
    "loser_school": "Cal Poly",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Ralph DeNisco",
    "winner_school": "Wisconsin",
    "loser": "Gerald Harris",
    "loser_school": "Cleveland State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Jordan Holm",
    "winner_school": "Northern Iowa",
    "loser": "Pete Friedl",
    "loser_school": "Illinois",
    "result": "Dec 10-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Kyle Smith",
    "loser_school": "Michigan",
    "result": "Fall 6:55"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Morgan Horner",
    "loser_school": "Lock Haven",
    "result": "Dec 14-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Tom Grossman",
    "loser_school": "Oklahoma",
    "result": "MD 14-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Muhammed Lawal",
    "winner_school": "Oklahoma State",
    "loser": "Sean Stender",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Marcio Botelho",
    "winner_school": "Fresno State",
    "loser": "Eric Mausser",
    "loser_school": "Clarion",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "Lee Kraemer",
    "loser_school": "Wisconsin",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Nik Fekete",
    "winner_school": "Michigan State",
    "loser": "David Shunamon",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Dante Stone",
    "loser_school": "Missouri",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Steve Mocco",
    "winner_school": "Iowa",
    "loser": "John Testa",
    "loser_school": "Clarion",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Kellan Fluckiger",
    "winner_school": "Arizona State",
    "loser": "Boe Rushton",
    "loser_school": "Boise State",
    "result": "Fall 1:21"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Matt Feast",
    "loser_school": "Penn",
    "result": "Dec 11-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "Pat Cummins",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Brent Miller",
    "winner_school": "West Virginia",
    "loser": "Israel Blevins",
    "loser_school": "Purdue",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Justin Staebler",
    "winner_school": "Wisconsin",
    "loser": "Willie Gruenwald",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Kevin Herron",
    "loser_school": "Missouri",
    "result": "Fall 0:49"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Tomas Rodriguez",
    "loser_school": "Kent State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Bo Maynes",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Tony Black",
    "winner_school": "Wisconsin",
    "loser": "Matt Valenti",
    "loser_school": "Penn",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Vic Moreno",
    "loser_school": "Cal Poly",
    "result": "Fall 2:39"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Terrance Clendenin",
    "loser_school": "Lehigh",
    "result": "Fall 5:24"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Pat Garcia",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Phil Mansueto",
    "loser_school": "Cleveland State",
    "result": "Fall 0:30"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Mark Jayne",
    "loser_school": "Illinois",
    "result": "Dec 7-6 TB"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Brandon Lauer",
    "winner_school": "West Virginia",
    "loser": "Tom Clum",
    "loser_school": "Wisconsin",
    "result": "Dec 15-13 SV"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Doug McGraw",
    "loser_school": "Penn",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Scott Moore",
    "winner_school": "Penn State",
    "loser": "Dana Holland",
    "loser_school": "Arizona State",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Zack Esposito",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Aaron Holker",
    "winner_school": "Iowa State",
    "loser": "Coyte Cooper",
    "loser_school": "Indiana",
    "result": "Fall 3:37"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Collin Robertson",
    "winner_school": "Boise State",
    "loser": "Jody Giuricich",
    "loser_school": "Penn",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Ty Eustice",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Karl Nadolsky",
    "loser_school": "Michigan State",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Billy Smith",
    "loser_school": "West Virginia",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Matt Gentry",
    "loser_school": "Stanford",
    "result": "Fall 3:43"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "Clovis Crane",
    "loser_school": "Purdue",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Rocky Smart",
    "loser_school": "Arizona State",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Nate Wachter",
    "loser_school": "Penn State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "Doc Vecchio",
    "loser_school": "Penn State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Frank Edwards",
    "winner_school": "Navy",
    "loser": "Levi Prevost",
    "loser_school": "Wyoming",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Jason Erwinski",
    "loser_school": "Northwestern",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Tyron Woodley",
    "winner_school": "Missouri",
    "loser": "Noel Thompson",
    "loser_school": "Hofstra",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Mark Fee",
    "winner_school": "Appalachian State",
    "loser": "Pat O'Donnell",
    "loser_school": "Harvard",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Eddy Gifford",
    "loser_school": "Fresno State",
    "result": "MD 16-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Curtis Owen",
    "winner_school": "Arizona State",
    "loser": "Ralph Everett",
    "loser_school": "Hofstra",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Rashad Evans",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Clint Wattenberg",
    "winner_school": "Cornell",
    "loser": "Jake Stork",
    "loser_school": "Maryland",
    "result": "MD 18-6"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Greg Parker",
    "winner_school": "Princeton",
    "loser": "Scott Justus",
    "loser_school": "Virginia Tech",
    "result": "MD 14-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Ben Heizer",
    "winner_school": "Northern Illinois",
    "loser": "Ralph DeNisco",
    "loser_school": "Wisconsin",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Mark Becks",
    "winner_school": "Penn State",
    "loser": "Jordan Holm",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Marcio Botelho",
    "winner_school": "Fresno State",
    "loser": "Tom Grossman",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Matt Greenberg",
    "loser_school": "Cornell",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Kyle Smith",
    "winner_school": "Michigan",
    "loser": "Nik Fekete",
    "loser_school": "Michigan State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Morgan Horner",
    "loser_school": "Lock Haven",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Brent Miller",
    "loser_school": "West Virginia",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Justin Staebler",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "John Testa",
    "winner_school": "Clarion",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Boe Rushton",
    "winner_school": "Boise State",
    "loser": "Greg Wagner",
    "loser_school": "Michigan",
    "result": "Fall 2:43"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "A.J. Grant",
    "loser_school": "Michigan",
    "result": "Dec 3-0"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Ben Vombaur",
    "loser_school": "Boise State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Tony Black",
    "winner_school": "Wisconsin",
    "loser": "Nick Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Bobbe Lowe",
    "loser_school": "Minnesota",
    "result": "Fall 1:03"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Rad Martinez",
    "loser_school": "Clarion",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Ryan Lewis",
    "winner_school": "Minnesota",
    "loser": "Cliff Moore",
    "loser_school": "Iowa",
    "result": "MD 13-3"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Evan Sola",
    "loser_school": "North Carolina",
    "result": "Fall 1:05"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Brandon Lauer",
    "loser_school": "West Virginia",
    "result": "TF 16-1 4:09"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Jason Mester",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Shane Cunanan",
    "loser_school": "West Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Scott Moore",
    "winner_school": "Penn State",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Aaron Holker",
    "loser_school": "Iowa State",
    "result": "Fall 3:30"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Jerrod Sanders",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Jesse Jantzen",
    "loser_school": "Harvard",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Collin Robertson",
    "winner_school": "Boise State",
    "loser": "Dustin Manotti",
    "loser_school": "Cornell",
    "result": "MD 10-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Jon Masa",
    "loser_school": "Hofstra",
    "result": "Dec 9-7"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Scott Owen",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Keaton Anderson",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Derek Zinck",
    "loser_school": "Lehigh",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Gray Maynard",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Jacob Volkmann",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Tyrone Lewis",
    "loser_school": "Oklahoma State",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "Frank Edwards",
    "loser_school": "Navy",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Tyron Woodley",
    "loser_school": "Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Carl Fronhofer",
    "winner_school": "Pittsburgh",
    "loser": "Shane Webster",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Brad Dillon",
    "loser_school": "Lehigh",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Mark Fee",
    "loser_school": "Appalachian State",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Curtis Owen",
    "winner_school": "Arizona State",
    "loser": "Ryan Lange",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Scott Barker",
    "winner_school": "Missouri",
    "loser": "Jessman Smith",
    "loser_school": "Iowa",
    "result": "Dec 9-4"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Josh Lambrecht",
    "loser_school": "Oklahoma",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Clint Wattenberg",
    "winner_school": "Cornell",
    "loser": "Greg Parker",
    "loser_school": "Princeton",
    "result": "Dec 16-12"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Ben Heizer",
    "winner_school": "Northern Illinois",
    "loser": "Mark Becks",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Jon Trenge",
    "winner_school": "Lehigh",
    "loser": "Chris Skretkowicz",
    "loser_school": "Hofstra",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Muhammed Lawal",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Marcio Botelho",
    "loser_school": "Fresno State",
    "result": "Fall 1:23"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Kyle Smith",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Steve Mocco",
    "winner_school": "Iowa",
    "loser": "Kellan Fluckiger",
    "loser_school": "Arizona State",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Kevin Hoy",
    "winner_school": "Air Force",
    "loser": "Tommy Rowlands",
    "loser_school": "Ohio State",
    "result": "DEF"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Matt Feast",
    "loser_school": "Penn",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Boe Rushton",
    "winner_school": "Boise State",
    "loser": "John Testa",
    "loser_school": "Clarion",
    "result": "MD 12-4"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Tony Black",
    "loser_school": "Wisconsin",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Ben Vombaur",
    "loser_school": "Boise State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Rad Martinez",
    "loser_school": "Clarion",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Cliff Moore",
    "loser_school": "Iowa",
    "result": "Dec 14-8"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Scott Moore",
    "winner_school": "Penn State",
    "loser": "Jason Mester",
    "loser_school": "Central Michigan",
    "result": "Fall 4:54"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Shane Cunanan",
    "loser_school": "West Virginia",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Jerrod Sanders",
    "winner_school": "Oklahoma State",
    "loser": "Collin Robertson",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Jake Percival",
    "loser_school": "Ohio",
    "result": "Fall 0:59"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Scott Owen",
    "loser_school": "Northern Illinois",
    "result": "Fall 5:30"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Keaton Anderson",
    "loser_school": "Ohio State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "John Clark",
    "loser_school": "Ohio State",
    "result": "Fall 1:29"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Tyrone Lewis",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Shane Webster",
    "loser_school": "Oregon",
    "result": "Fall 0:17"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Curtis Owen",
    "winner_school": "Arizona State",
    "loser": "Brad Dillon",
    "loser_school": "Lehigh",
    "result": "Dec 6-6 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Clint Wattenberg",
    "loser_school": "Cornell",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Ben Heizer",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Chris Skretkowicz",
    "loser_school": "Hofstra",
    "result": "MD 10-1"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Muhammed Lawal",
    "winner_school": "Oklahoma State",
    "loser": "Justin Ruiz",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Kellan Fluckiger",
    "loser_school": "Arizona State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Boe Rushton",
    "winner_school": "Boise State",
    "loser": "Tommy Rowlands",
    "loser_school": "Ohio State",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "A.J. Grant",
    "loser_school": "Michigan",
    "result": "Fall 4:38"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Tony Black",
    "winner_school": "Wisconsin",
    "loser": "Ben Vombaur",
    "loser_school": "Boise State",
    "result": "Dec 9-5"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Bobbe Lowe",
    "loser_school": "Minnesota",
    "result": "Fall 2:38"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Zach Roberson",
    "loser_school": "Iowa State",
    "result": "MD 13-3"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Rad Martinez",
    "winner_school": "Clarion",
    "loser": "Cliff Moore",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Evan Sola",
    "winner_school": "North Carolina",
    "loser": "Brandon Lauer",
    "loser_school": "West Virginia",
    "result": "Dec 4-0"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Scott Moore",
    "loser_school": "Penn State",
    "result": "Dec 6-0"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Shane Cunanan",
    "loser_school": "West Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Aaron Holker",
    "winner_school": "Iowa State",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Jerrod Sanders",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Collin Robertson",
    "loser_school": "Boise State",
    "result": "Dec 9-6"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Dustin Manotti",
    "loser_school": "Cornell",
    "result": "MD 12-2"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Luke Becker",
    "loser_school": "Minnesota",
    "result": "Fall 0:34"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Keaton Anderson",
    "loser_school": "Ohio State",
    "result": "Dec 7-4"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Derek Zinck",
    "loser_school": "Lehigh",
    "result": "MD 12-2"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Matt King",
    "loser_school": "Edinboro",
    "result": "Dec 6-0"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "John Clark",
    "loser_school": "Ohio State",
    "result": "Dec 12-6"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Frank Edwards",
    "winner_school": "Navy",
    "loser": "Tyron Woodley",
    "loser_school": "Missouri",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Curtis Owen",
    "loser_school": "Arizona State",
    "result": "MD 17-4"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Brad Dillon",
    "winner_school": "Lehigh",
    "loser": "Shane Webster",
    "loser_school": "Oregon",
    "result": "Dec 11-6"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Mark Fee",
    "winner_school": "Appalachian State",
    "loser": "Ryan Lange",
    "loser_school": "Purdue",
    "result": "Fall 1:57"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Jessman Smith",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Clint Wattenberg",
    "winner_school": "Cornell",
    "loser": "Ben Heizer",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-5"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Mark Becks",
    "winner_school": "Penn State",
    "loser": "Greg Parker",
    "loser_school": "Princeton",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Muhammed Lawal",
    "winner_school": "Oklahoma State",
    "loser": "Sean Stender",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Justin Ruiz",
    "winner_school": "Nebraska",
    "loser": "Chris Skretkowicz",
    "loser_school": "Hofstra",
    "result": "Dec 7-4"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Kyle Smith",
    "winner_school": "Michigan",
    "loser": "Marcio Botelho",
    "loser_school": "Fresno State",
    "result": "Fall 2:32"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Boe Rushton",
    "winner_school": "Boise State",
    "loser": "Pat Cummins",
    "loser_school": "Penn State",
    "result": "Dec 10-8"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Kellan Fluckiger",
    "winner_school": "Arizona State",
    "loser": "Tommy Rowlands",
    "loser_school": "Ohio State",
    "result": "FOR"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "John Testa",
    "loser_school": "Clarion",
    "result": "Dec 8-6"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Chris Fleeger",
    "loser_school": "Purdue",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Lewis",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Dylan Long",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Jared Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 10-8"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Alex Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Matt Lackey",
    "winner_school": "Illinois",
    "loser": "Troy Letters",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Carl Fronhofer",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Scott Barker",
    "loser_school": "Missouri",
    "result": "MD 13-5"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Jon Trenge",
    "loser_school": "Lehigh",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Steve Mocco",
    "winner_school": "Iowa",
    "loser": "Kevin Hoy",
    "loser_school": "Air Force",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1001,
    "winner": "George Cintron",
    "winner_school": "NC State",
    "loser": "Aaron Suranofsky",
    "loser_school": "George Mason",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 1002,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Bernard Gardner",
    "loser_school": "Army",
    "result": "MD 16-5"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 1005,
    "winner": "Kenny Burleson",
    "winner_school": "Missouri",
    "loser": "Craig Pequignot",
    "loser_school": "Millersville",
    "result": "MD 14-3"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 1008,
    "winner": "Josh Lambrecht",
    "winner_school": "Oklahoma",
    "loser": "Ralph DeNisco",
    "loser_school": "Wisconsin",
    "result": "Dec 10-6"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 1009,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "Brett Faustman",
    "loser_school": "Central Michigan",
    "result": "Dec 5-1 SV"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 1171,
    "winner": "Skyler Holman",
    "winner_school": "Oklahoma State",
    "loser": "Aaron Suranofsky",
    "loser_school": "George Mason",
    "result": "MD 18-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 1172,
    "winner": "Rene Hernandez",
    "winner_school": "Purdue",
    "loser": "Justin Owens",
    "loser_school": "Lock Haven",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 1175,
    "winner": "Chris Bitetto",
    "winner_school": "Northern Iowa",
    "loser": "Ben Cherrington",
    "loser_school": "Boise State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 1178,
    "winner": "Ralph DeNisco",
    "winner_school": "Wisconsin",
    "loser": "Russ Vanderheyden",
    "loser_school": "Central Michigan",
    "result": "Dec 13-10"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 1179,
    "winner": "Eric Mausser",
    "winner_school": "Clarion",
    "loser": "Greg Sawyer",
    "loser_school": "Rider",
    "result": "Dec 6-0"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2002,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Rene Hernandez",
    "loser_school": "Purdue",
    "result": "MD 13-2"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 2005,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Chris Bitetto",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 2172,
    "winner": "Witt Durden",
    "winner_school": "Oklahoma",
    "loser": "Joe Cristaldi",
    "loser_school": "Drexel",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 2175,
    "winner": "Derek Jenkins",
    "winner_school": "Rider",
    "loser": "George Carter",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 3002,
    "winner": "Travis Drake",
    "winner_school": "Appalachian State",
    "loser": "Nate Ybarra",
    "loser_school": "Cal Poly",
    "result": "Dec 11-9"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 3005,
    "winner": "Tim Foley",
    "winner_school": "Virginia",
    "loser": "George Carter",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 3172,
    "winner": "Jesse Brock",
    "winner_school": "Boise State",
    "loser": "Bernard Gardner",
    "loser_school": "Army",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 3175,
    "winner": "Adam Britt",
    "winner_school": "VMI",
    "loser": "Craig Pequignot",
    "loser_school": "Millersville",
    "result": "TF 16-1 7:00"
  }
];
