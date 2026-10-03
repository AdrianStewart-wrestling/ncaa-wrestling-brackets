// 2004 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 2004 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results2004-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Peter Derstine",
    "loser_school": "Clarion",
    "result": "Fall 3:59"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Matt Ciasulli",
    "winner_school": "Lehigh",
    "loser": "David Hoffman",
    "loser_school": "Virginia Tech",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Joey Rivera",
    "loser_school": "Boston University",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "David Dies",
    "winner_school": "Brown",
    "loser": "Matt Kocher",
    "loser_school": "Pittsburgh",
    "result": "MD 10-1"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Leighton Brady",
    "loser_school": "Boston University",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "John Davis",
    "loser_school": "Chattanooga",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Chris Helgeson",
    "loser_school": "Northern Iowa",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Drew Opfer",
    "winner_school": "Kent State",
    "loser": "Grant Nakamura",
    "loser_school": "Iowa State",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Jeremy Hartum",
    "winner_school": "NC State",
    "loser": "Mark Moos",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Rob Rebmann",
    "winner_school": "Drexel",
    "loser": "Matthew Pitts",
    "loser_school": "Chattanooga",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Casey Brewster",
    "loser_school": "West Virginia",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "Ben Watson",
    "loser_school": "Slippery Rock",
    "result": "TF 17-2 0:00"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Christian Bowerman",
    "winner_school": "Fresno State",
    "loser": "DeAngelo Penn",
    "loser_school": "Cleveland State",
    "result": "Fall 4:26"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Tom Clum",
    "loser_school": "Wisconsin",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Mark McKnight",
    "winner_school": "Buffalo",
    "loser": "Matt Valenti",
    "loser_school": "Penn",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Mike Mormile",
    "winner_school": "Cornell",
    "loser": "Tanner Gardner",
    "loser_school": "Stanford",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Chris Staylor",
    "loser_school": "Arizona State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Christian Smith",
    "loser_school": "Duke",
    "result": "MD 20-7"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Tom Noto",
    "winner_school": "Hofstra",
    "loser": "Tommy Schurkamp",
    "loser_school": "UC Davis",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "Adam Smith",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Ryan McClester",
    "loser_school": "The Citadel",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Luke Eustice",
    "winner_school": "Iowa",
    "loser": "Jesse Miramontes",
    "loser_school": "Cal State Fullerton",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Derek Moore",
    "loser_school": "UC Davis",
    "result": "Fall 5:34"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Pat Dowty",
    "winner_school": "Eastern Illinois",
    "loser": "Jacob Gray",
    "loser_school": "Edinboro",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Matt Keller",
    "winner_school": "Nebraska",
    "loser": "Paul Gross",
    "loser_school": "Stanford",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Trent Goodale",
    "loser_school": "Iowa",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Matt Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Sean Markey",
    "winner_school": "The Citadel",
    "loser": "Jordan Webster",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Scott Jorgenson",
    "winner_school": "Boise State",
    "loser": "Josh Priewski",
    "loser_school": "Gardner-Webb",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Foley Dowd",
    "winner_school": "Michigan",
    "loser": "Joe Cristaldi",
    "loser_school": "Drexel",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Mike Messina",
    "loser_school": "Sacred Heart",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Josh Keefe",
    "winner_school": "Chattanooga",
    "loser": "Rene Hernandez",
    "loser_school": "Purdue",
    "result": "Fall 6:44"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Ed Gutnik",
    "winner_school": "Wisconsin",
    "loser": "Brandon Strong",
    "loser_school": "Air Force",
    "result": "Fall 6:07"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Don Fisch",
    "loser_school": "Rider",
    "result": "Fall 1:02"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Adam Benitez",
    "loser_school": "Duke",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Sam Hiatt",
    "winner_school": "Northern Illinois",
    "loser": "Bryan Hart",
    "loser_school": "Bloomsburg",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Mimi Miller",
    "winner_school": "Oklahoma",
    "loser": "Quincy Osborn",
    "loser_school": "Minnesota",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Steve Sutton",
    "loser_school": "Columbia",
    "result": "TF 21-6 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Scott Moore",
    "winner_school": "Virginia",
    "loser": "Blake Gunter",
    "loser_school": "Wyoming",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Steve Esparza",
    "winner_school": "Cal Poly",
    "loser": "Tommy Owen",
    "loser_school": "Minnesota",
    "result": "Fall 3:57"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Joe Clarke",
    "winner_school": "West Virginia",
    "loser": "Michael Martin",
    "loser_school": "Illinois",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Coyte Cooper",
    "winner_school": "Indiana",
    "loser": "Juan Mora",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Kevin Artis",
    "loser_school": "UNC Greensboro",
    "result": "Fall 5:53"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Ronald Tarquinio",
    "winner_school": "Pittsburgh",
    "loser": "Nate Gulosh",
    "loser_school": "Navy",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Max Meltzer",
    "winner_school": "Harvard",
    "loser": "Scott Heckman",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Rob Becker",
    "loser_school": "George Mason",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Anthony Coleman",
    "loser_school": "Cleveland State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Jesse Brock",
    "winner_school": "Boise State",
    "loser": "Doug Withstandley",
    "loser_school": "Purdue",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Alex Hernandez",
    "loser_school": "NC State",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Michael Keefe",
    "loser_school": "Chattanooga",
    "result": "MD 17-8"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Matt Murray",
    "winner_school": "Nebraska",
    "loser": "John Manarte",
    "loser_school": "Hofstra",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Doug McGraw",
    "winner_school": "Penn",
    "loser": "Frank Edgar",
    "loser_school": "Clarion",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Brad Metzler",
    "winner_school": "Stanford",
    "loser": "Derek Sola",
    "loser_school": "Millersville",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Tyler Laudon",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Dan Jankowski",
    "loser_school": "Purdue",
    "result": "TF 15-0 6:04"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Patrick Williams",
    "winner_school": "Arizona State",
    "loser": "James Strouse",
    "loser_school": "Hofstra",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "David Dies",
    "winner_school": "Brown",
    "loser": "Ty Eustice",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Matt Storniolo",
    "winner_school": "Penn State",
    "loser": "Sam Alvarenga",
    "loser_school": "VMI",
    "result": "Fall 2:28"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Mike Torriero",
    "winner_school": "West Virginia",
    "loser": "Trent Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Adam Cunningham",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Casey Olsen",
    "winner_school": "Fresno State",
    "loser": "Darren McKnight",
    "loser_school": "Michigan State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Chris Nissen",
    "loser_school": "Air Force",
    "result": "Fall 6:48"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Travis Shufelt",
    "winner_school": "Nebraska",
    "loser": "Tony Hook",
    "loser_school": "Oregon State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Anton Dietzen",
    "winner_school": "Illinois",
    "loser": "Ben Young",
    "loser_school": "Slippery Rock",
    "result": "TF 16-1 0:00"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Jeff Ratliff",
    "winner_school": "Ohio State",
    "loser": "Josh Wooton",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Adrian Austin",
    "loser_school": "George Mason",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Jeremy Spates",
    "winner_school": "Missouri",
    "loser": "Deonte Penn",
    "loser_school": "Edinboro",
    "result": "TF 16-0 5:54"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Jeff Ecklof",
    "winner_school": "Oklahoma",
    "loser": "Matt Anderson",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Jeff Harrison",
    "winner_school": "Northern Iowa",
    "loser": "Jake Giamoni",
    "loser_school": "NC State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Anthony Baza",
    "loser_school": "CSU Bakersfield",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Jeremiah Jarvis",
    "loser_school": "UC Davis",
    "result": "Fall 6:49"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Ben Cherrington",
    "winner_school": "Boise State",
    "loser": "Brett Vanderveer",
    "loser_school": "Penn",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Joe Johnston",
    "loser_school": "Iowa",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "B.J. Wright",
    "winner_school": "Nebraska",
    "loser": "Nick Baima",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Kenny Burleson",
    "winner_school": "Missouri",
    "loser": "Matt Nagel",
    "loser_school": "Minnesota",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Brad Harper",
    "winner_school": "Purdue",
    "loser": "Joey Bracamonte",
    "loser_school": "Oregon",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Scott Roth",
    "winner_school": "Cornell",
    "loser": "Brad Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "James Woodall",
    "loser_school": "Penn State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Andrew Shuler",
    "loser_school": "Wyoming",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Scott Garren",
    "winner_school": "NC State",
    "loser": "Mike Kimberlin",
    "loser_school": "Northwestern",
    "result": "Fall 1:31"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "Dan Thompson",
    "loser_school": "The Citadel",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Brian Cobb",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Justin Nestor",
    "loser_school": "Pittsburgh",
    "result": "TF 15-0 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Charlie Brenneman",
    "loser_school": "Lock Haven",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Chris Horning",
    "winner_school": "Clarion",
    "loser": "Paul Siemon",
    "loser_school": "Hofstra",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Dave Miller",
    "loser_school": "Rider",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Christian Arellano",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 0:22"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "John Sioredas",
    "winner_school": "Chattanooga",
    "loser": "Joe Mazzurco",
    "loser_school": "Cornell",
    "result": "Fall 1:57"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Levi Prevost",
    "winner_school": "Wyoming",
    "loser": "Dustin Kawa",
    "loser_school": "NC State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Nick Passolano",
    "winner_school": "Iowa State",
    "loser": "Jason Gilligan",
    "loser_school": "Lock Haven",
    "result": "Fall 2:55"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Pat Owen",
    "winner_school": "Michigan",
    "loser": "Matt Veach",
    "loser_school": "Eastern Illinois",
    "result": "Fall 1:04"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "J.J. Holmes",
    "winner_school": "Eastern Michigan",
    "loser": "Ben Hay",
    "loser_school": "Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Chris Stith",
    "winner_school": "Virginia Tech",
    "loser": "Nick Hayes",
    "loser_school": "Northwestern",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Zac Fryling",
    "loser_school": "West Virginia",
    "result": "Fall 4:17"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Matt Ellis",
    "loser_school": "Oregon State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Luke Larwin",
    "winner_school": "Oregon",
    "loser": "Craig Pequignot",
    "loser_school": "Millersville",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Tim Foley",
    "winner_school": "Virginia",
    "loser": "Kelly Flaherty",
    "loser_school": "Wisconsin",
    "result": "Dec 14-9"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Ralph Everett",
    "winner_school": "Hofstra",
    "loser": "Jason Cardillo",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "David Bolyard",
    "winner_school": "Central Michigan",
    "loser": "Jacob Klein",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "Hesston Johnson",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Cole Pape",
    "winner_school": "Iowa",
    "loser": "Michael Barikian",
    "loser_school": "Navy",
    "result": "Dec 9-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Jeremy Reitz",
    "loser_school": "Clarion",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Leonel Sanchez",
    "winner_school": "Cal State Fullerton",
    "loser": "Nick Kozar",
    "loser_school": "Drexel",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Mitch Hancock",
    "winner_school": "Central Michigan",
    "loser": "Andrew Roy",
    "loser_school": "Rutgers",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "Keith Clifton",
    "loser_school": "The Citadel",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "E.K. Waldhaus",
    "winner_school": "Oklahoma",
    "loser": "Jon Duncombe",
    "loser_school": "Minnesota",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Tyler Baier",
    "winner_school": "Cornell",
    "loser": "Curtis Yeager",
    "loser_school": "Millersville",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Brad Dillon",
    "winner_school": "Lehigh",
    "loser": "Francis Iorfido",
    "loser_school": "Pittsburgh",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Matt Kallai",
    "winner_school": "Cleveland State",
    "loser": "Levi Craig",
    "loser_school": "Duke",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Imad Kharbush",
    "loser_school": "Stanford",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Nate Yetzer",
    "winner_school": "Edinboro",
    "loser": "Brady Richardson",
    "loser_school": "Indiana",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "Nick Roy",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Ralph DeNisco",
    "winner_school": "Wisconsin",
    "loser": "Jed Pennell",
    "loser_school": "Oregon State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Tyler Nixt",
    "winner_school": "Iowa",
    "loser": "Ed Pawlak",
    "loser_school": "Buffalo",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Frank Cornely",
    "loser_school": "Duke",
    "result": "TF 22-7 6:50"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Josh McLay",
    "winner_school": "Minnesota",
    "loser": "Brad Christie",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Mike Frank",
    "loser_school": "Duquesne",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Brad Reinke",
    "winner_school": "Wisconsin",
    "loser": "Kurt Backes",
    "loser_school": "Iowa State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Blake Kaplan",
    "winner_school": "Ohio State",
    "loser": "Travis Pascoe",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Alex Clemsen",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Paul Velekei",
    "loser_school": "Penn",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "Ryan Halsey",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Sam Wendland",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Dan Pitsch",
    "winner_school": "Oregon State",
    "loser": "Nick Ciarcia",
    "loser_school": "Brown",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Nick Catone",
    "winner_school": "Rider",
    "loser": "Ron Howard",
    "loser_school": "Cleveland State",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Nate Mesyn",
    "winner_school": "Michigan State",
    "loser": "Nick Frost",
    "loser_school": "Arizona State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Luke Calvert",
    "loser_school": "Army",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Travis Frick",
    "winner_school": "Lehigh",
    "loser": "Ed Magrys",
    "loser_school": "Eastern Michigan",
    "result": "Fall 6:59"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "Justin Dyer",
    "loser_school": "Oklahoma",
    "result": "Dec 8-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Ben Heizer",
    "winner_school": "Northern Illinois",
    "loser": "Rudy Medini",
    "loser_school": "Rutgers",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Kevin Kessner",
    "loser_school": "Wyoming",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Rusty Blackmon",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Clemens",
    "loser_school": "Michigan State",
    "result": "Fall 5:39"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "K.C. Walsh",
    "winner_school": "Boise State",
    "loser": "Venroy July",
    "loser_school": "North Carolina",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Josh Birt",
    "winner_school": "Pittsburgh",
    "loser": "Matt Greenberg",
    "loser_school": "Cornell",
    "result": "Fall 1:14"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "J.D. Bergman",
    "loser_school": "Ohio State",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Marcio Botelho",
    "winner_school": "Fresno State",
    "loser": "Joe Phillips",
    "loser_school": "Cleveland State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Joel Weimer",
    "winner_school": "Ohio",
    "loser": "Reggie Lee",
    "loser_school": "Harvard",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Jeff Foust",
    "loser_school": "Missouri",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Matt Delguyd",
    "loser_school": "Northwestern",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Matt Daddino",
    "winner_school": "West Virginia",
    "loser": "Zach Garren",
    "loser_school": "NC State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Dave Burns",
    "loser_school": "UNC Greensboro",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Matt Monteiro",
    "winner_school": "CSU Bakersfield",
    "loser": "Ryan Flaherty",
    "loser_school": "Wisconsin",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Chris Jones",
    "winner_school": "Drexel",
    "loser": "Landon Seefeldt",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Marcus Schontube",
    "winner_school": "Penn",
    "loser": "Aaron Smith",
    "loser_school": "Millersville",
    "result": "Fall 1:13"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Kyle Cerminara",
    "loser_school": "Buffalo",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Bill Stouffer",
    "loser_school": "Central Michigan",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Bode Ogunwole",
    "winner_school": "Harvard",
    "loser": "Russ Davie",
    "loser_school": "Cleveland State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Clinton Walbeck",
    "winner_school": "Fresno State",
    "loser": "Ryan Adams",
    "loser_school": "North Carolina",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Joe Hennis",
    "loser_school": "Edinboro",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Ryan Fuller",
    "winner_school": "Iowa",
    "loser": "Scott Coleman",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Jeremiah Beltran",
    "winner_school": "Ohio",
    "loser": "Clifford Starks",
    "loser_school": "Arizona State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Tanner Garrett",
    "loser_school": "Navy",
    "result": "Fall 1:12"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Jacob McGinnis",
    "loser_school": "Boise State",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Derrell Lorthridge",
    "winner_school": "Old Dominion",
    "loser": "Ramel Meekins",
    "loser_school": "Rutgers",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Dusty Hoffschneider",
    "winner_school": "Wyoming",
    "loser": "Marc Allemang",
    "loser_school": "Duquesne",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Jamie Rakevich",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Carmelo Marrero",
    "winner_school": "Rider",
    "loser": "Israel Blevins",
    "loser_school": "Purdue",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Jareck Horton",
    "winner_school": "Wisconsin",
    "loser": "Billy Linane",
    "loser_school": "The Citadel",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Payam Zarrinpour",
    "loser_school": "Sacred Heart",
    "result": "MD 12-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Peter Derstine",
    "winner_school": "Clarion",
    "loser": "Casey Brewster",
    "loser_school": "West Virginia",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Don Fisch",
    "loser_school": "Rider",
    "result": "Fall 3:20"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Joey Rivera",
    "winner_school": "Boston University",
    "loser": "Blake Gunter",
    "loser_school": "Wyoming",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Matt Cox",
    "loser_school": "Cal Poly",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Michael Barikian",
    "winner_school": "Navy",
    "loser": "Leighton Brady",
    "loser_school": "Boston University",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Ed Magrys",
    "winner_school": "Eastern Michigan",
    "loser": "Mark Canty",
    "loser_school": "North Carolina",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Drew Opfer",
    "loser_school": "Kent State",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Rob Rebmann",
    "winner_school": "Drexel",
    "loser": "Jeremy Hartum",
    "loser_school": "NC State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Efren Ceballos",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Christian Bowerman",
    "loser_school": "Fresno State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Mark McKnight",
    "winner_school": "Buffalo",
    "loser": "Mike Mormile",
    "loser_school": "Cornell",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Bobbe Lowe",
    "loser_school": "Minnesota",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "Tom Noto",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Luke Eustice",
    "winner_school": "Iowa",
    "loser": "John Velez",
    "loser_school": "Northwestern",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Ryan McClester",
    "winner_school": "The Citadel",
    "loser": "Jesse Miramontes",
    "loser_school": "Cal State Fullerton",
    "result": "TF 15-0 6:43"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Christian Smith",
    "loser_school": "Duke",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Chris Staylor",
    "winner_school": "Arizona State",
    "loser": "Adam Smith",
    "loser_school": "Penn State",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Tanner Gardner",
    "loser_school": "Stanford",
    "result": "Dec 10-7 TB"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "DeAngelo Penn",
    "loser_school": "Cleveland State",
    "result": "Fall 0:37"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Peter Derstine",
    "winner_school": "Clarion",
    "loser": "Ben Watson",
    "loser_school": "Slippery Rock",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Matthew Pitts",
    "winner_school": "Chattanooga",
    "loser": "Mark Moos",
    "loser_school": "Michigan",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Grant Nakamura",
    "winner_school": "Iowa State",
    "loser": "Chris Helgeson",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Pat Dowty",
    "loser_school": "Eastern Illinois",
    "result": "TF 19-4 0:00"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Matt Keller",
    "loser_school": "Nebraska",
    "result": "Fall 4:57"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Sean Markey",
    "loser_school": "The Citadel",
    "result": "Fall 3:56"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Foley Dowd",
    "winner_school": "Michigan",
    "loser": "Scott Jorgenson",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Josh Keefe",
    "loser_school": "Chattanooga",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Ed Gutnik",
    "loser_school": "Wisconsin",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Sam Hiatt",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Mimi Miller",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Quincy Osborn",
    "winner_school": "Minnesota",
    "loser": "Steve Sutton",
    "loser_school": "Columbia",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Adam Benitez",
    "winner_school": "Duke",
    "loser": "Bryan Hart",
    "loser_school": "Bloomsburg",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Brandon Strong",
    "loser_school": "Air Force",
    "result": "Fall 2:53"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Rene Hernandez",
    "winner_school": "Purdue",
    "loser": "Mike Messina",
    "loser_school": "Sacred Heart",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Joe Cristaldi",
    "winner_school": "Drexel",
    "loser": "Josh Priewski",
    "loser_school": "Gardner-Webb",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Matt Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Jordan Webster",
    "loser_school": "Central Michigan",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Paul Gross",
    "winner_school": "Stanford",
    "loser": "Trent Goodale",
    "loser_school": "Iowa",
    "result": "Fall 3:52"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Jacob Gray",
    "loser_school": "Edinboro",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Scott Moore",
    "winner_school": "Virginia",
    "loser": "Steve Esparza",
    "loser_school": "Cal Poly",
    "result": "Fall 1:14"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Coyte Cooper",
    "winner_school": "Indiana",
    "loser": "Joe Clarke",
    "loser_school": "West Virginia",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Ronald Tarquinio",
    "loser_school": "Pittsburgh",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Max Meltzer",
    "loser_school": "Harvard",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Jesse Brock",
    "loser_school": "Boise State",
    "result": "Fall 6:18"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Dylan Long",
    "winner_school": "Northern Iowa",
    "loser": "Andy Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Matt Murray",
    "winner_school": "Nebraska",
    "loser": "Doug McGraw",
    "loser_school": "Penn",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Brad Metzler",
    "loser_school": "Stanford",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Tyler Laudon",
    "winner_school": "Wisconsin",
    "loser": "Derek Sola",
    "loser_school": "Millersville",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "John Manarte",
    "loser_school": "Hofstra",
    "result": "Fall 5:42"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Josh Ruff",
    "winner_school": "Binghamton",
    "loser": "Alex Hernandez",
    "loser_school": "NC State",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Anthony Coleman",
    "winner_school": "Cleveland State",
    "loser": "Doug Withstandley",
    "loser_school": "Purdue",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Scott Heckman",
    "winner_school": "Bloomsburg",
    "loser": "Rob Becker",
    "loser_school": "George Mason",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Kevin Artis",
    "winner_school": "UNC Greensboro",
    "loser": "Nate Gulosh",
    "loser_school": "Navy",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Juan Mora",
    "winner_school": "Cal State Fullerton",
    "loser": "Michael Martin",
    "loser_school": "Illinois",
    "result": "Fall 6:52"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Tommy Owen",
    "winner_school": "Minnesota",
    "loser": "Joey Rivera",
    "loser_school": "Boston University",
    "result": "TF 15-0 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Patrick Williams",
    "loser_school": "Arizona State",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "David Dies",
    "winner_school": "Brown",
    "loser": "Matt Storniolo",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Mike Maney",
    "winner_school": "Lock Haven",
    "loser": "Mike Torriero",
    "loser_school": "West Virginia",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Casey Olsen",
    "loser_school": "Fresno State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Travis Shufelt",
    "winner_school": "Nebraska",
    "loser": "Anton Dietzen",
    "loser_school": "Illinois",
    "result": "Fall 4:20"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Jeff Ratliff",
    "loser_school": "Ohio State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Jeremy Spates",
    "winner_school": "Missouri",
    "loser": "Jeff Ecklof",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Harrison",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Jake Giamoni",
    "winner_school": "NC State",
    "loser": "Anthony Baza",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 16-12"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Deonte Penn",
    "loser_school": "Edinboro",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Josh Wooton",
    "winner_school": "Northern Illinois",
    "loser": "Adrian Austin",
    "loser_school": "George Mason",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Ben Young",
    "winner_school": "Slippery Rock",
    "loser": "Tony Hook",
    "loser_school": "Oregon State",
    "result": "DEF"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Darren McKnight",
    "winner_school": "Michigan State",
    "loser": "Chris Nissen",
    "loser_school": "Air Force",
    "result": "Fall 2:29"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Adam Cunningham",
    "loser_school": "Central Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Sam Alvarenga",
    "loser_school": "VMI",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "James Strouse",
    "winner_school": "Hofstra",
    "loser": "Dan Jankowski",
    "loser_school": "Purdue",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Ben Cherrington",
    "loser_school": "Boise State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "B.J. Wright",
    "winner_school": "Nebraska",
    "loser": "Matt Lebe",
    "loser_school": "West Virginia",
    "result": "Fall 2:44"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Kenny Burleson",
    "winner_school": "Missouri",
    "loser": "Brad Harper",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Scott Roth",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Scott Garren",
    "loser_school": "NC State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Derek Zinck",
    "loser_school": "Lehigh",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Chris Horning",
    "loser_school": "Clarion",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Paul Siemon",
    "winner_school": "Hofstra",
    "loser": "Dave Miller",
    "loser_school": "Rider",
    "result": "DEF"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Charlie Brenneman",
    "winner_school": "Lock Haven",
    "loser": "Justin Nestor",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Brian Cobb",
    "winner_school": "CSU Bakersfield",
    "loser": "Dan Thompson",
    "loser_school": "The Citadel",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Andrew Shuler",
    "winner_school": "Wyoming",
    "loser": "Mike Kimberlin",
    "loser_school": "Northwestern",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "James Woodall",
    "winner_school": "Penn State",
    "loser": "Brad Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Matt Nagel",
    "winner_school": "Minnesota",
    "loser": "Joey Bracamonte",
    "loser_school": "Oregon",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Nick Baima",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Jeremiah Jarvis",
    "winner_school": "UC Davis",
    "loser": "Brett Vanderveer",
    "loser_school": "Penn",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "John Sioredas",
    "loser_school": "Chattanooga",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Nick Passolano",
    "winner_school": "Iowa State",
    "loser": "Levi Prevost",
    "loser_school": "Wyoming",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Pat Owen",
    "winner_school": "Michigan",
    "loser": "J.J. Holmes",
    "loser_school": "Eastern Michigan",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Chris Stith",
    "loser_school": "Virginia Tech",
    "result": "Fall 6:43"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Luke Larwin",
    "loser_school": "Oregon",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Ralph Everett",
    "winner_school": "Hofstra",
    "loser": "Tim Foley",
    "loser_school": "Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "David Bolyard",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Cole Pape",
    "loser_school": "Iowa",
    "result": "MD 16-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Jeremy Reitz",
    "winner_school": "Clarion",
    "loser": "Michael Barikian",
    "loser_school": "Navy",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Hesston Johnson",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Kelly Flaherty",
    "winner_school": "Wisconsin",
    "loser": "Jason Cardillo",
    "loser_school": "Slippery Rock",
    "result": "MD 15-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Craig Pequignot",
    "winner_school": "Millersville",
    "loser": "Matt Ellis",
    "loser_school": "Oregon State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Zac Fryling",
    "winner_school": "West Virginia",
    "loser": "Nick Hayes",
    "loser_school": "Northwestern",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Matt Veach",
    "winner_school": "Eastern Illinois",
    "loser": "Ben Hay",
    "loser_school": "Illinois",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Dustin Kawa",
    "winner_school": "NC State",
    "loser": "Jason Gilligan",
    "loser_school": "Lock Haven",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Christian Arellano",
    "loser_school": "CSU Bakersfield",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Leonel Sanchez",
    "loser_school": "Cal State Fullerton",
    "result": "TF 19-2 4:49"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Mitch Hancock",
    "loser_school": "Central Michigan",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "E.K. Waldhaus",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Tyler Baier",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Brad Dillon",
    "winner_school": "Lehigh",
    "loser": "Matt Kallai",
    "loser_school": "Cleveland State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Matt Herrington",
    "loser_school": "Penn",
    "result": "Fall 2:12"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Nate Yetzer",
    "winner_school": "Edinboro",
    "loser": "Noel Thompson",
    "loser_school": "Hofstra",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Tyler Nixt",
    "winner_school": "Iowa",
    "loser": "Ralph DeNisco",
    "loser_school": "Wisconsin",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Ed Pawlak",
    "winner_school": "Buffalo",
    "loser": "Jed Pennell",
    "loser_school": "Oregon State",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Andrew Roy",
    "winner_school": "Rutgers",
    "loser": "Brady Richardson",
    "loser_school": "Indiana",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Francis Iorfido",
    "winner_school": "Pittsburgh",
    "loser": "Levi Craig",
    "loser_school": "Duke",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Jon Duncombe",
    "winner_school": "Minnesota",
    "loser": "Keith Clifton",
    "loser_school": "The Citadel",
    "result": "M FOR"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Josh McLay",
    "loser_school": "Minnesota",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Brad Reinke",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Blake Kaplan",
    "loser_school": "Ohio State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Eric Bradley",
    "loser_school": "Penn State",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Dan Pitsch",
    "loser_school": "Oregon State",
    "result": "TF 16-0 4:23"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Nate Mesyn",
    "winner_school": "Michigan State",
    "loser": "Nick Catone",
    "loser_school": "Rider",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Travis Frick",
    "winner_school": "Lehigh",
    "loser": "Matt Pell",
    "loser_school": "Missouri",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Ben Heizer",
    "winner_school": "Northern Illinois",
    "loser": "Jerry Rinaldi",
    "loser_school": "Cornell",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Rudy Medini",
    "winner_school": "Rutgers",
    "loser": "Justin Dyer",
    "loser_school": "Oklahoma",
    "result": "Fall 6:06"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Luke Calvert",
    "winner_school": "Army",
    "loser": "Ed Magrys",
    "loser_school": "Eastern Michigan",
    "result": "Fall 1:14"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Nick Frost",
    "winner_school": "Arizona State",
    "loser": "Ron Howard",
    "loser_school": "Cleveland State",
    "result": "TF 18-3 5:44"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Nick Ciarcia",
    "winner_school": "Brown",
    "loser": "Sam Wendland",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Ryan Halsey",
    "winner_school": "Cal Poly",
    "loser": "Paul Velekei",
    "loser_school": "Penn",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Alex Clemsen",
    "loser_school": "Edinboro",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Mike Frank",
    "loser_school": "Duquesne",
    "result": "Fall 3:56"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Frank Cornely",
    "winner_school": "Duke",
    "loser": "Brad Christie",
    "loser_school": "Hofstra",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Rusty Blackmon",
    "loser_school": "Oklahoma State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Josh Birt",
    "winner_school": "Pittsburgh",
    "loser": "K.C. Walsh",
    "loser_school": "Boise State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Marcio Botelho",
    "loser_school": "Fresno State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Joel Weimer",
    "loser_school": "Ohio",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Matt Daddino",
    "loser_school": "West Virginia",
    "result": "MD 17-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Pat DeGain",
    "winner_school": "Indiana",
    "loser": "Matt Monteiro",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 12-10"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Ryan Fulsaas",
    "winner_school": "Iowa",
    "loser": "Chris Jones",
    "loser_school": "Drexel",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Marcus Schontube",
    "loser_school": "Penn",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Kyle Cerminara",
    "winner_school": "Buffalo",
    "loser": "Aaron Smith",
    "loser_school": "Millersville",
    "result": "Fall 2:08"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Ryan Flaherty",
    "winner_school": "Wisconsin",
    "loser": "Dave Burns",
    "loser_school": "UNC Greensboro",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Matt Delguyd",
    "winner_school": "Northwestern",
    "loser": "Zach Garren",
    "loser_school": "NC State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Jeff Foust",
    "winner_school": "Missouri",
    "loser": "Reggie Lee",
    "loser_school": "Harvard",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Joe Phillips",
    "loser_school": "Cleveland State",
    "result": "Fall 2:27"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "Venroy July",
    "loser_school": "North Carolina",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Kevin Kessner",
    "winner_school": "Wyoming",
    "loser": "Jeff Clemens",
    "loser_school": "Michigan State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Matt Wilcox",
    "loser_school": "Clarion",
    "result": "Fall 4:03"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Bode Ogunwole",
    "winner_school": "Harvard",
    "loser": "Clinton Walbeck",
    "loser_school": "Fresno State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Ryan Fuller",
    "loser_school": "Iowa",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Jeremiah Beltran",
    "loser_school": "Ohio",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Derrell Lorthridge",
    "loser_school": "Old Dominion",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Dusty Hoffschneider",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Willie Gruenwald",
    "winner_school": "Oklahoma State",
    "loser": "Carmelo Marrero",
    "loser_school": "Rider",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Jareck Horton",
    "loser_school": "Wisconsin",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "Billy Linane",
    "loser_school": "The Citadel",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Jamie Rakevich",
    "winner_school": "Oregon State",
    "loser": "Marc Allemang",
    "loser_school": "Duquesne",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Ramel Meekins",
    "winner_school": "Rutgers",
    "loser": "Jacob McGinnis",
    "loser_school": "Boise State",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Tanner Garrett",
    "winner_school": "Navy",
    "loser": "Clifford Starks",
    "loser_school": "Arizona State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Scott Coleman",
    "winner_school": "Iowa State",
    "loser": "Joe Hennis",
    "loser_school": "Edinboro",
    "result": "Fall 1:09"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Russ Davie",
    "winner_school": "Cleveland State",
    "loser": "Ryan Adams",
    "loser_school": "North Carolina",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "Ryan McClester",
    "loser_school": "The Citadel",
    "result": "Dec 11-10"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Christian Bowerman",
    "loser_school": "Fresno State",
    "result": "Fall 3:49"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Drew Opfer",
    "winner_school": "Kent State",
    "loser": "Chris Staylor",
    "loser_school": "Arizona State",
    "result": "Fall 2:01"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Jeremy Hartum",
    "loser_school": "NC State",
    "result": "Fall 4:32"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Tom Noto",
    "winner_school": "Hofstra",
    "loser": "Tom Clum",
    "loser_school": "Wisconsin",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Peter Derstine",
    "loser_school": "Clarion",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Matthew Pitts",
    "winner_school": "Chattanooga",
    "loser": "Mike Mormile",
    "loser_school": "Cornell",
    "result": "Fall 6:26"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Bobbe Lowe",
    "winner_school": "Minnesota",
    "loser": "Grant Nakamura",
    "loser_school": "Iowa State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Quincy Osborn",
    "winner_school": "Minnesota",
    "loser": "Sean Markey",
    "loser_school": "The Citadel",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Scott Jorgenson",
    "winner_school": "Boise State",
    "loser": "Adam Benitez",
    "loser_school": "Duke",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Pat Dowty",
    "loser_school": "Eastern Illinois",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Matt Keller",
    "winner_school": "Nebraska",
    "loser": "Rene Hernandez",
    "loser_school": "Purdue",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Sam Hiatt",
    "winner_school": "Northern Illinois",
    "loser": "Joe Cristaldi",
    "loser_school": "Drexel",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Mimi Miller",
    "winner_school": "Oklahoma",
    "loser": "Matt Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Paul Gross",
    "winner_school": "Stanford",
    "loser": "Josh Keefe",
    "loser_school": "Chattanooga",
    "result": "Dec 14-7"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Ed Gutnik",
    "loser_school": "Wisconsin",
    "result": "TF 15-0 6:36"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Tyler Laudon",
    "winner_school": "Wisconsin",
    "loser": "Ronald Tarquinio",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Max Meltzer",
    "loser_school": "Harvard",
    "result": "TF 16-1 0:00"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Steve Esparza",
    "winner_school": "Cal Poly",
    "loser": "Josh Ruff",
    "loser_school": "Binghamton",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Joe Clarke",
    "winner_school": "West Virginia",
    "loser": "Anthony Coleman",
    "loser_school": "Cleveland State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Doug McGraw",
    "winner_school": "Penn",
    "loser": "Scott Heckman",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Brad Metzler",
    "winner_school": "Stanford",
    "loser": "Kevin Artis",
    "loser_school": "UNC Greensboro",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Jesse Brock",
    "winner_school": "Boise State",
    "loser": "Juan Mora",
    "loser_school": "Cal State Fullerton",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Tommy Owen",
    "loser_school": "Minnesota",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Jake Giamoni",
    "winner_school": "NC State",
    "loser": "Mike Torriero",
    "loser_school": "West Virginia",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Casey Olsen",
    "loser_school": "Fresno State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Patrick Williams",
    "winner_school": "Arizona State",
    "loser": "Josh Wooton",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Matt Storniolo",
    "winner_school": "Penn State",
    "loser": "Ben Young",
    "loser_school": "Slippery Rock",
    "result": "TF 15-0 6:47"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Jeff Ecklof",
    "winner_school": "Oklahoma",
    "loser": "Darren McKnight",
    "loser_school": "Michigan State",
    "result": "Fall 2:42"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Jeff Harrison",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Anton Dietzen",
    "loser_school": "Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Jeff Ratliff",
    "winner_school": "Ohio State",
    "loser": "James Strouse",
    "loser_school": "Hofstra",
    "result": "Dec 11-9"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Paul Siemon",
    "winner_school": "Hofstra",
    "loser": "Brad Harper",
    "loser_school": "Purdue",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Charlie Brenneman",
    "winner_school": "Lock Haven",
    "loser": "Scott Roth",
    "loser_school": "Cornell",
    "result": "Fall 1:48"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Brian Cobb",
    "winner_school": "CSU Bakersfield",
    "loser": "Ben Cherrington",
    "loser_school": "Boise State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Andrew Shuler",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "James Woodall",
    "loser_school": "Penn State",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Chris Horning",
    "winner_school": "Clarion",
    "loser": "Matt Nagel",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Scott Garren",
    "loser_school": "NC State",
    "result": "FOR"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "Jeremiah Jarvis",
    "loser_school": "UC Davis",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "J.J. Holmes",
    "winner_school": "Eastern Michigan",
    "loser": "Jeremy Reitz",
    "loser_school": "Clarion",
    "result": "Fall 3:40"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Chris Stith",
    "loser_school": "Virginia Tech",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "John Sioredas",
    "winner_school": "Chattanooga",
    "loser": "Kelly Flaherty",
    "loser_school": "Wisconsin",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Levi Prevost",
    "winner_school": "Wyoming",
    "loser": "Craig Pequignot",
    "loser_school": "Millersville",
    "result": "TF 19-3 6:27"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "David Bolyard",
    "winner_school": "Central Michigan",
    "loser": "Zac Fryling",
    "loser_school": "West Virginia",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Cole Pape",
    "winner_school": "Iowa",
    "loser": "Matt Veach",
    "loser_school": "Eastern Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Dustin Kawa",
    "winner_school": "NC State",
    "loser": "Luke Larwin",
    "loser_school": "Oregon",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Tim Foley",
    "winner_school": "Virginia",
    "loser": "Joe Mazzurco",
    "loser_school": "Cornell",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Ed Pawlak",
    "winner_school": "Buffalo",
    "loser": "E.K. Waldhaus",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Tyler Baier",
    "winner_school": "Cornell",
    "loser": "Andrew Roy",
    "loser_school": "Rutgers",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Leonel Sanchez",
    "winner_school": "Cal State Fullerton",
    "loser": "Imad Kharbush",
    "loser_school": "Stanford",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Mitch Hancock",
    "winner_school": "Central Michigan",
    "loser": "Francis Iorfido",
    "loser_school": "Pittsburgh",
    "result": "Fall 0:24"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "Curtis Yeager",
    "loser_school": "Millersville",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Ralph DeNisco",
    "winner_school": "Wisconsin",
    "loser": "Jon Duncombe",
    "loser_school": "Minnesota",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Nick Roy",
    "winner_school": "Michigan",
    "loser": "Matt Kallai",
    "loser_school": "Cleveland State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Nick Kozar",
    "loser_school": "Drexel",
    "result": "Fall 0:29"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Blake Kaplan",
    "winner_school": "Ohio State",
    "loser": "Rudy Medini",
    "loser_school": "Rutgers",
    "result": "Fall 0:46"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "Luke Calvert",
    "loser_school": "Army",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Nick Frost",
    "winner_school": "Arizona State",
    "loser": "Josh McLay",
    "loser_school": "Minnesota",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Nick Ciarcia",
    "winner_school": "Brown",
    "loser": "Brad Reinke",
    "loser_school": "Wisconsin",
    "result": "Fall 1:16"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Ryan Halsey",
    "loser_school": "Cal Poly",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Travis Pascoe",
    "winner_school": "Nebraska",
    "loser": "Jerry Rinaldi",
    "loser_school": "Cornell",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Dan Pitsch",
    "loser_school": "Oregon State",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Frank Cornely",
    "winner_school": "Duke",
    "loser": "Nick Catone",
    "loser_school": "Rider",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Kyle Cerminara",
    "winner_school": "Buffalo",
    "loser": "Marcio Botelho",
    "loser_school": "Fresno State",
    "result": "Dec 9-6 SV"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Joel Weimer",
    "winner_school": "Ohio",
    "loser": "Landon Seefeldt",
    "loser_school": "Cal State Fullerton",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Rusty Blackmon",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Flaherty",
    "loser_school": "Wisconsin",
    "result": "Fall 1:29"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Matt Delguyd",
    "winner_school": "Northwestern",
    "loser": "K.C. Walsh",
    "loser_school": "Boise State",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Jeff Foust",
    "winner_school": "Missouri",
    "loser": "Chris Jones",
    "loser_school": "Drexel",
    "result": "DEF"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Marcus Schontube",
    "loser_school": "Penn",
    "result": "Fall 1:45"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "Matt Daddino",
    "loser_school": "West Virginia",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Kevin Kessner",
    "winner_school": "Wyoming",
    "loser": "Matt Monteiro",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "Ryan Fuller",
    "loser_school": "Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Israel Blevins",
    "winner_school": "Purdue",
    "loser": "Jeremiah Beltran",
    "loser_school": "Ohio",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Jamie Rakevich",
    "winner_school": "Oregon State",
    "loser": "Matt Wilcox",
    "loser_school": "Clarion",
    "result": "MD 15-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Ramel Meekins",
    "winner_school": "Rutgers",
    "loser": "Clinton Walbeck",
    "loser_school": "Fresno State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Carmelo Marrero",
    "winner_school": "Rider",
    "loser": "Tanner Garrett",
    "loser_school": "Navy",
    "result": "Fall 6:14"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Scott Coleman",
    "winner_school": "Iowa State",
    "loser": "Jareck Horton",
    "loser_school": "Wisconsin",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Russ Davie",
    "winner_school": "Cleveland State",
    "loser": "Derrell Lorthridge",
    "loser_school": "Old Dominion",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Bill Stouffer",
    "winner_school": "Central Michigan",
    "loser": "Dusty Hoffschneider",
    "loser_school": "Wyoming",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Rob Rebmann",
    "loser_school": "Drexel",
    "result": "Fall 4:28"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Mario Stuart",
    "loser_school": "Lehigh",
    "result": "Dec 12-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Mark McKnight",
    "loser_school": "Buffalo",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Vic Moreno",
    "winner_school": "Cal Poly",
    "loser": "Luke Eustice",
    "loser_school": "Iowa",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Efren Ceballos",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Drew Opfer",
    "loser_school": "Kent State",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Tom Noto",
    "winner_school": "Hofstra",
    "loser": "John Velez",
    "loser_school": "Northwestern",
    "result": "DEF"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Matthew Pitts",
    "winner_school": "Chattanooga",
    "loser": "Bobbe Lowe",
    "loser_school": "Minnesota",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Matt Sanchez",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 6:22"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Foley Dowd",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Johnny Thompson",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Mark Jayne",
    "loser_school": "Illinois",
    "result": "Dec 9-8 TB"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Scott Jorgenson",
    "winner_school": "Boise State",
    "loser": "Quincy Osborn",
    "loser_school": "Minnesota",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Matt Keller",
    "winner_school": "Nebraska",
    "loser": "David Hoffman",
    "loser_school": "Virginia Tech",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Sam Hiatt",
    "winner_school": "Northern Illinois",
    "loser": "Mimi Miller",
    "loser_school": "Oklahoma",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Paul Gross",
    "loser_school": "Stanford",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Scott Moore",
    "winner_school": "Virginia",
    "loser": "Coyte Cooper",
    "loser_school": "Indiana",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Jason Mester",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Dylan Long",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Matt Murray",
    "winner_school": "Nebraska",
    "loser": "Nate Gallick",
    "loser_school": "Iowa State",
    "result": "Dec 3-3 TB"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Tyler Laudon",
    "loser_school": "Wisconsin",
    "result": "Fall 2:26"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Joe Clarke",
    "winner_school": "West Virginia",
    "loser": "Steve Esparza",
    "loser_school": "Cal Poly",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Brad Metzler",
    "winner_school": "Stanford",
    "loser": "Doug McGraw",
    "loser_school": "Penn",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Jesse Brock",
    "loser_school": "Boise State",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "David Dies",
    "loser_school": "Brown",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Travis Shufelt",
    "loser_school": "Nebraska",
    "result": "Dec 10-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Jeremy Spates",
    "loser_school": "Missouri",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Jake Giamoni",
    "winner_school": "NC State",
    "loser": "Matt Kocher",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Matt Storniolo",
    "winner_school": "Penn State",
    "loser": "Patrick Williams",
    "loser_school": "Arizona State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Jeff Ecklof",
    "winner_school": "Oklahoma",
    "loser": "Trent Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Jeff Ratliff",
    "winner_school": "Ohio State",
    "loser": "Ty Eustice",
    "loser_school": "Iowa",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "B.J. Wright",
    "loser_school": "Nebraska",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Kenny Burleson",
    "loser_school": "Missouri",
    "result": "Dec 9-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Johny Hendricks",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Phillip Simpson",
    "loser_school": "Army",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Charlie Brenneman",
    "winner_school": "Lock Haven",
    "loser": "Paul Siemon",
    "loser_school": "Hofstra",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Brian Cobb",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Chris Horning",
    "loser_school": "Clarion",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "Joe Johnston",
    "loser_school": "Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Nick Passolano",
    "loser_school": "Iowa State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "Pat Owen",
    "loser_school": "Michigan",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Ralph Everett",
    "loser_school": "Hofstra",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "John Clark",
    "loser_school": "Ohio State",
    "result": "Fall 1:22"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "J.J. Holmes",
    "loser_school": "Eastern Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Levi Prevost",
    "winner_school": "Wyoming",
    "loser": "John Sioredas",
    "loser_school": "Chattanooga",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "David Bolyard",
    "winner_school": "Central Michigan",
    "loser": "Cole Pape",
    "loser_school": "Iowa",
    "result": "TF 16-1 7:00"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Tim Foley",
    "winner_school": "Virginia",
    "loser": "Dustin Kawa",
    "loser_school": "NC State",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Pete Friedl",
    "loser_school": "Illinois",
    "result": "MD 14-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Brad Dillon",
    "loser_school": "Lehigh",
    "result": "Dec 12-7 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Tyler Nixt",
    "winner_school": "Iowa",
    "loser": "Nate Yetzer",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Ed Pawlak",
    "winner_school": "Buffalo",
    "loser": "Tyler Baier",
    "loser_school": "Cornell",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Mitch Hancock",
    "winner_school": "Central Michigan",
    "loser": "Leonel Sanchez",
    "loser_school": "Cal State Fullerton",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "Ralph DeNisco",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Nick Roy",
    "winner_school": "Michigan",
    "loser": "Matt Herrington",
    "loser_school": "Penn",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Brian Glynn",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Ben Wissel",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Nate Mesyn",
    "loser_school": "Michigan State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Ben Heizer",
    "winner_school": "Northern Illinois",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Blake Kaplan",
    "winner_school": "Ohio State",
    "loser": "Eric Bradley",
    "loser_school": "Penn State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Nick Ciarcia",
    "winner_school": "Brown",
    "loser": "Nick Frost",
    "loser_school": "Arizona State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Travis Pascoe",
    "loser_school": "Nebraska",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Frank Cornely",
    "loser_school": "Duke",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Josh Birt",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "B.J. Padden",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Sean Stender",
    "winner_school": "Northern Iowa",
    "loser": "Pat DeGain",
    "loser_school": "Indiana",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Ryan Fulsaas",
    "winner_school": "Iowa",
    "loser": "Chris Skretkowicz",
    "loser_school": "Hofstra",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Kyle Cerminara",
    "winner_school": "Buffalo",
    "loser": "Joel Weimer",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Rusty Blackmon",
    "winner_school": "Oklahoma State",
    "loser": "Matt Delguyd",
    "loser_school": "Northwestern",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Jeff Foust",
    "loser_school": "Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "Kevin Kessner",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Bode Ogunwole",
    "loser_school": "Harvard",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Cole Konrad",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Greg Wagner",
    "loser_school": "Michigan",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Willie Gruenwald",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Israel Blevins",
    "winner_school": "Purdue",
    "loser": "Payam Zarrinpour",
    "loser_school": "Sacred Heart",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Jamie Rakevich",
    "winner_school": "Oregon State",
    "loser": "Ramel Meekins",
    "loser_school": "Rutgers",
    "result": "Fall 7:59"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Scott Coleman",
    "winner_school": "Iowa State",
    "loser": "Carmelo Marrero",
    "loser_school": "Rider",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Bill Stouffer",
    "winner_school": "Central Michigan",
    "loser": "Russ Davie",
    "loser_school": "Cleveland State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Mark McKnight",
    "loser_school": "Buffalo",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Luke Eustice",
    "loser_school": "Iowa",
    "result": "Dec 3-2 SV"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Rob Rebmann",
    "winner_school": "Drexel",
    "loser": "Tom Noto",
    "loser_school": "Hofstra",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Matthew Pitts",
    "loser_school": "Chattanooga",
    "result": "Dec 14-9"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Scott Jorgenson",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Matt Keller",
    "loser_school": "Nebraska",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Matt Sanchez",
    "winner_school": "CSU Bakersfield",
    "loser": "Sam Hiatt",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Foley Dowd",
    "winner_school": "Michigan",
    "loser": "Derek Moore",
    "loser_school": "UC Davis",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Dylan Long",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Joe Clarke",
    "loser_school": "West Virginia",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Coyte Cooper",
    "winner_school": "Indiana",
    "loser": "Brad Metzler",
    "loser_school": "Stanford",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Andy Simmons",
    "loser_school": "Michigan State",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Travis Shufelt",
    "winner_school": "Nebraska",
    "loser": "Jake Giamoni",
    "loser_school": "NC State",
    "result": "Fall 4:15"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Jeremy Spates",
    "winner_school": "Missouri",
    "loser": "Matt Storniolo",
    "loser_school": "Penn State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Jeff Ecklof",
    "winner_school": "Oklahoma",
    "loser": "David Dies",
    "loser_school": "Brown",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Jeff Ratliff",
    "winner_school": "Ohio State",
    "loser": "Mike Maney",
    "loser_school": "Lock Haven",
    "result": "Fall 6:08"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Charlie Brenneman",
    "loser_school": "Lock Haven",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Phillip Simpson",
    "winner_school": "Army",
    "loser": "Matt Lebe",
    "loser_school": "West Virginia",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "B.J. Wright",
    "loser_school": "Nebraska",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Kenny Burleson",
    "winner_school": "Missouri",
    "loser": "Derek Zinck",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Ralph Everett",
    "loser_school": "Hofstra",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "Levi Prevost",
    "loser_school": "Wyoming",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "David Bolyard",
    "winner_school": "Central Michigan",
    "loser": "Nick Passolano",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Tim Foley",
    "winner_school": "Virginia",
    "loser": "Pat Owen",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Brad Dillon",
    "winner_school": "Lehigh",
    "loser": "Ed Pawlak",
    "loser_school": "Buffalo",
    "result": "Dec 10-8 TB"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Nate Yetzer",
    "winner_school": "Edinboro",
    "loser": "Mitch Hancock",
    "loser_school": "Central Michigan",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Noel Thompson",
    "loser_school": "Hofstra",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "Nick Roy",
    "loser_school": "Michigan",
    "result": "Dec 7-5 TB"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Blake Kaplan",
    "winner_school": "Ohio State",
    "loser": "Nate Mesyn",
    "loser_school": "Michigan State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Travis Frick",
    "winner_school": "Lehigh",
    "loser": "Nick Ciarcia",
    "loser_school": "Brown",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Matt Pell",
    "loser_school": "Missouri",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Ben Wissel",
    "loser_school": "Purdue",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Kyle Cerminara",
    "winner_school": "Buffalo",
    "loser": "Pat DeGain",
    "loser_school": "Indiana",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Rusty Blackmon",
    "loser_school": "Oklahoma State",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Josh Birt",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "B.J. Padden",
    "loser_school": "Nebraska",
    "result": "DEF"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Israel Blevins",
    "loser_school": "Purdue",
    "result": "Fall 6:18"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Willie Gruenwald",
    "winner_school": "Oklahoma State",
    "loser": "Jamie Rakevich",
    "loser_school": "Oregon State",
    "result": "Fall 6:58"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Scott Coleman",
    "winner_school": "Iowa State",
    "loser": "Bode Ogunwole",
    "loser_school": "Harvard",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Bill Stouffer",
    "loser_school": "Central Michigan",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Sam Hazewinkel",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Vic Moreno",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Joe Dubuque",
    "loser_school": "Indiana",
    "result": "DEF"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Rob Rebmann",
    "loser_school": "Drexel",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Travis Lee",
    "loser_school": "Cornell",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Josh Moore",
    "winner_school": "Penn State",
    "loser": "Darrel Vasquez",
    "loser_school": "Cal Poly",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Mark Jayne",
    "loser_school": "Illinois",
    "result": "Fall 5:33"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Foley Dowd",
    "winner_school": "Michigan",
    "loser": "Matt Sanchez",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Scott Moore",
    "loser_school": "Virginia",
    "result": "MD 14-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Matt Murray",
    "winner_school": "Nebraska",
    "loser": "Teyon Ware",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Cory Cooperman",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Coyte Cooper",
    "loser_school": "Indiana",
    "result": "MD 13-0"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Ryan Churella",
    "loser_school": "Michigan",
    "result": "Dec 11-4"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Dustin Manotti",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Jeremy Spates",
    "winner_school": "Missouri",
    "loser": "Travis Shufelt",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Jeff Ecklof",
    "winner_school": "Oklahoma",
    "loser": "Jeff Ratliff",
    "loser_school": "Ohio State",
    "result": "Dec 9-5 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Jake Percival",
    "winner_school": "Ohio",
    "loser": "Alex Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Ryan Bertin",
    "loser_school": "Michigan",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Phillip Simpson",
    "loser_school": "Army",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Kenny Burleson",
    "loser_school": "Missouri",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Tyrone Lewis",
    "winner_school": "Oklahoma State",
    "loser": "Jacob Volkmann",
    "loser_school": "Minnesota",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Matt King",
    "loser_school": "Edinboro",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "Jacob Klein",
    "loser_school": "Nebraska",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "David Bolyard",
    "winner_school": "Central Michigan",
    "loser": "Tim Foley",
    "loser_school": "Virginia",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Chris Pendleton",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Lange",
    "loser_school": "Purdue",
    "result": "Fall 2:08"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Tyler Nixt",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Brad Dillon",
    "winner_school": "Lehigh",
    "loser": "Nate Yetzer",
    "loser_school": "Edinboro",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Eric Hauan",
    "winner_school": "Northern Iowa",
    "loser": "Pete Friedl",
    "loser_school": "Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Paul Bradley",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Ben Heizer",
    "winner_school": "Northern Illinois",
    "loser": "Jake Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Blake Kaplan",
    "winner_school": "Ohio State",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "MD 9-1"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Kurt Backes",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Ryan Bader",
    "loser_school": "Arizona State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Ryan Fulsaas",
    "winner_school": "Iowa",
    "loser": "Sean Stender",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Kyle Cerminara",
    "loser_school": "Buffalo",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Matt Greenberg",
    "loser_school": "Cornell",
    "result": "DEF"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Leonce Crump",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Pat Cummins",
    "winner_school": "Penn State",
    "loser": "Matt Feast",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Willie Gruenwald",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Scott Coleman",
    "loser_school": "Iowa State",
    "result": "Fall 6:15"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Matt Valenti",
    "loser_school": "Penn",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Mario Stuart",
    "winner_school": "Lehigh",
    "loser": "Vic Moreno",
    "loser_school": "Cal Poly",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Travis Lee",
    "loser_school": "Cornell",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Foley Dowd",
    "loser_school": "Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Scott Moore",
    "winner_school": "Virginia",
    "loser": "Nate Gallick",
    "loser_school": "Iowa State",
    "result": "Fall 1:22"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Jason Mester",
    "winner_school": "Central Michigan",
    "loser": "Teyon Ware",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Jeremy Spates",
    "loser_school": "Missouri",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Jeff Ecklof",
    "loser_school": "Oklahoma",
    "result": "Fall 2:52"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Johny Hendricks",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Jacob Volkmann",
    "winner_school": "Minnesota",
    "loser": "John Clark",
    "loser_school": "Ohio State",
    "result": "MD 13-0"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "David Bolyard",
    "loser_school": "Central Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Brad Dillon",
    "winner_school": "Lehigh",
    "loser": "Ryan Lange",
    "loser_school": "Purdue",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Tyler Nixt",
    "winner_school": "Iowa",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Blake Kaplan",
    "loser_school": "Ohio State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Brian Glynn",
    "loser_school": "Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Chris Skretkowicz",
    "loser_school": "Hofstra",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Sean Stender",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Greg Wagner",
    "loser_school": "Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Matt Feast",
    "loser_school": "Penn",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Mario Stuart",
    "loser_school": "Lehigh",
    "result": "MD 9-1"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Vic Moreno",
    "loser_school": "Cal Poly",
    "result": "Dec 5-4"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Rob Rebmann",
    "winner_school": "Drexel",
    "loser": "Joe Dubuque",
    "loser_school": "Indiana",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Johnny Thompson",
    "winner_school": "Oklahoma State",
    "loser": "Darrel Vasquez",
    "loser_school": "Cal Poly",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Travis Lee",
    "winner_school": "Cornell",
    "loser": "Foley Dowd",
    "loser_school": "Michigan",
    "result": "MD 12-0"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Mark Jayne",
    "winner_school": "Illinois",
    "loser": "Matt Sanchez",
    "loser_school": "CSU Bakersfield",
    "result": "MD 14-3"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Scott Moore",
    "winner_school": "Virginia",
    "loser": "Jason Mester",
    "loser_school": "Central Michigan",
    "result": "Fall 1:43"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Teyon Ware",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Coyte Cooper",
    "loser_school": "Indiana",
    "result": "Dec 7-1"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Dustin Manotti",
    "loser_school": "Cornell",
    "result": "Dec 9-4"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Jeremy Spates",
    "winner_school": "Missouri",
    "loser": "Jeff Ecklof",
    "loser_school": "Oklahoma",
    "result": "Dec 7-0"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Travis Shufelt",
    "winner_school": "Nebraska",
    "loser": "Jeff Ratliff",
    "loser_school": "Ohio State",
    "result": "Dec 5-1"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Ryan Bertin",
    "winner_school": "Michigan",
    "loser": "Alex Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Fall 4:47"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Kenny Burleson",
    "winner_school": "Missouri",
    "loser": "Phillip Simpson",
    "loser_school": "Army",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Matt King",
    "winner_school": "Edinboro",
    "loser": "Jacob Volkmann",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "John Clark",
    "winner_school": "Ohio State",
    "loser": "David Bolyard",
    "loser_school": "Central Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Tim Foley",
    "loser_school": "Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Tyler Nixt",
    "winner_school": "Iowa",
    "loser": "Brad Dillon",
    "loser_school": "Lehigh",
    "result": "Dec 9-3"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Ryan Lange",
    "winner_school": "Purdue",
    "loser": "Eric Hauan",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Nate Yetzer",
    "loser_school": "Edinboro",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Paul Bradley",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Blake Kaplan",
    "winner_school": "Ohio State",
    "loser": "Brian Glynn",
    "loser_school": "Illinois",
    "result": "MD 8-0"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Ryan Bader",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Chris Skretkowicz",
    "winner_school": "Hofstra",
    "loser": "Sean Stender",
    "loser_school": "Northern Iowa",
    "result": "DEF"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Matt Greenberg",
    "winner_school": "Cornell",
    "loser": "Kyle Cerminara",
    "loser_school": "Buffalo",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Leonce Crump",
    "winner_school": "Oklahoma",
    "loser": "Cole Konrad",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Matt Feast",
    "winner_school": "Penn",
    "loser": "Greg Wagner",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Willie Gruenwald",
    "winner_school": "Oklahoma State",
    "loser": "Scott Coleman",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Jason Powell",
    "winner_school": "Nebraska",
    "loser": "Kyle Ott",
    "loser_school": "Illinois",
    "result": "TF 17-2 0:00"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Zach Roberson",
    "winner_school": "Iowa State",
    "loser": "Josh Moore",
    "loser_school": "Penn State",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Matt Murray",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Jesse Jantzen",
    "winner_school": "Harvard",
    "loser": "Zack Esposito",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-3"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Matt Gentry",
    "winner_school": "Stanford",
    "loser": "Jake Percival",
    "loser_school": "Ohio",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Tyrone Lewis",
    "loser_school": "Oklahoma State",
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
    "result": "Dec 11-4"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Greg Jones",
    "winner_school": "West Virginia",
    "loser": "Ben Heizer",
    "loser_school": "Northern Illinois",
    "result": "Dec 10-5"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Damion Hahn",
    "winner_school": "Minnesota",
    "loser": "Ryan Fulsaas",
    "loser_school": "Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Tommy Rowlands",
    "winner_school": "Ohio State",
    "loser": "Pat Cummins",
    "loser_school": "Penn State",
    "result": "Dec 6-2"
  },
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1001,
    "winner": "Efren Ceballos",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeff Sato",
    "loser_school": "Columbia",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 1003,
    "winner": "Michael Martin",
    "winner_school": "Illinois",
    "loser": "Cory Cooperman",
    "loser_school": "Lehigh",
    "result": "Fall 0:26"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 1004,
    "winner": "Adrian Austin",
    "winner_school": "George Mason",
    "loser": "Matt Cox",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 1006,
    "winner": "Ralph Everett",
    "winner_school": "Hofstra",
    "loser": "Zachariah Doll",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 1008,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Greg Gifford",
    "loser_school": "Fresno State",
    "result": "Fall 4:33"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 1171,
    "winner": "Chris Staylor",
    "winner_school": "Arizona State",
    "loser": "Jeff Sato",
    "loser_school": "Columbia",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 1173,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Frank Edgar",
    "loser_school": "Clarion",
    "result": "MD 12-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 1174,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Matt Anderson",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 1176,
    "winner": "Matt Veach",
    "winner_school": "Eastern Illinois",
    "loser": "Zachariah Doll",
    "loser_school": "Pittsburgh",
    "result": "Dec 15-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 1178,
    "winner": "Ron Howard",
    "winner_school": "Cleveland State",
    "loser": "Greg Gifford",
    "loser_school": "Fresno State",
    "result": "Dec 11-4"
  },
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 2001,
    "winner": "Matthew Pitts",
    "winner_school": "Chattanooga",
    "loser": "Joe Dubuque",
    "loser_school": "Indiana",
    "result": "Fall 3:22"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 2003,
    "winner": "Cliff Moore",
    "winner_school": "Iowa",
    "loser": "Josh Ruff",
    "loser_school": "Binghamton",
    "result": "Dec 8-6"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 2008,
    "winner": "Nick Catone",
    "winner_school": "Rider",
    "loser": "Brandon Bear",
    "loser_school": "UC Davis",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 2171,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Tommy Schurkamp",
    "loser_school": "UC Davis",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 2173,
    "winner": "Josh Ruff",
    "winner_school": "Binghamton",
    "loser": "Michael Keefe",
    "loser_school": "Chattanooga",
    "result": "Fall 4:26"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 2178,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "John Davis",
    "loser_school": "Chattanooga",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 3008,
    "winner": "Brian Glynn",
    "winner_school": "Illinois",
    "loser": "Mark Canty",
    "loser_school": "North Carolina",
    "result": "MD 11-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 3178,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "Brandon Bear",
    "loser_school": "UC Davis",
    "result": "Dec 8-5"
  }
];
