// 2006 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 2006 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results2006-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Javier Maldonado",
    "winner_school": "Chattanooga",
    "loser": "Matt Fisk",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Mark Budd",
    "winner_school": "Buffalo",
    "loser": "Bobby Pfennings",
    "loser_school": "Oregon State",
    "result": "Dec 8-4"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Cesar Grajales",
    "winner_school": "Penn",
    "loser": "Casio Pero",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Patrick Simpson",
    "winner_school": "Army",
    "loser": "Joe Caramanica",
    "loser_school": "NC State",
    "result": "Fall 0:19"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Joe Rovelli",
    "winner_school": "Hofstra",
    "loser": "Jesse Taylor",
    "loser_school": "CSU Bakersfield",
    "result": "TF 17-1 6:36"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Chris Pogue",
    "winner_school": "Navy",
    "loser": "Joe Fendone",
    "loser_school": "Edinboro",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Seth Wright",
    "loser_school": "Northern Iowa",
    "result": "Fall 0:44"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Ode Blanc",
    "winner_school": "Lock Haven",
    "loser": "Mike Watts",
    "loser_school": "Michigan",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "Brad Gentzle",
    "loser_school": "Pittsburgh",
    "result": "Fall 0:47"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Chad Sportelli",
    "winner_school": "Kent State",
    "loser": "John Velez",
    "loser_school": "Northwestern",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Austin Devoe",
    "loser_school": "Missouri",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Steve Mytych",
    "loser_school": "Drexel",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Rick Deubel",
    "winner_school": "Edinboro",
    "loser": "William Simpson",
    "loser_school": "Army",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Mike Sees",
    "winner_school": "Bloomsburg",
    "loser": "Kyle Ott",
    "loser_school": "Illinois",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Mike Silengo",
    "loser_school": "Penn",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Dave Tomasette",
    "winner_school": "Hofstra",
    "loser": "Collin Cudd",
    "loser_school": "Wisconsin",
    "result": "TF 16-0 1:37"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Luke Smith",
    "winner_school": "Central Michigan",
    "loser": "Javier Maldonado",
    "loser_school": "Chattanooga",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Bryce Leonhardt",
    "winner_school": "Wyoming",
    "loser": "Coleman Scott",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Jeremy Mendoza",
    "winner_school": "Arizona State",
    "loser": "Justin Staylor",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Patrick Castillo",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Luke Magnani",
    "winner_school": "Iowa",
    "loser": "Chris Clarke",
    "loser_school": "Slippery Rock",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Borges. Cory",
    "loser_school": "Fresno State",
    "result": "TF 18-1 0:00"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Jesse Sundell",
    "loser_school": "Iowa State",
    "result": "MD 17-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Ryan Willams",
    "loser_school": "Old Dominion",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Phillip Plowman",
    "winner_school": "Eastern Michigan",
    "loser": "Scott Jorgenson",
    "loser_school": "Boise State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Matt Keller",
    "winner_school": "Chattanooga",
    "loser": "Omar Gaitan",
    "loser_school": "UC Davis",
    "result": "Fall 3:34"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Zach Cunliffe",
    "loser_school": "Rider",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Chris Helgeson",
    "winner_school": "Northern Iowa",
    "loser": "Mark Moos",
    "loser_school": "Michigan",
    "result": "Dec 13-12"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Josh Pniewski",
    "winner_school": "Gardner-Webb",
    "loser": "Reece Humphrey",
    "loser_school": "Ohio State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Mark Budd",
    "loser_school": "Buffalo",
    "result": "Fall 1:32"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Jared Royer",
    "loser_school": "North Carolina",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Patrick Aleksanyan",
    "winner_school": "Nebraska",
    "loser": "Dave Armstrong",
    "loser_school": "Cleveland State",
    "result": "Fall 2:12"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Robbie Preston",
    "winner_school": "Harvard",
    "loser": "Mike Ciotti",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Brandon Strong",
    "loser_school": "Air Force",
    "result": "Fall 5:45"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Jake Strayer",
    "winner_school": "Penn State",
    "loser": "Tommy Vargas",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Jason Borrelli",
    "winner_school": "Central Michigan",
    "loser": "Darrel Vasquez",
    "loser_school": "Cal Poly",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Gabe Flores",
    "winner_school": "Illinois",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Andrae Hernandez",
    "loser_school": "Indiana",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "David Hoffman",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Dave Roberts",
    "winner_school": "Cal Poly",
    "loser": "Mike Hurley",
    "loser_school": "Cleveland State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Brandon Rader",
    "winner_school": "West Virginia",
    "loser": "Cesar Grajales",
    "loser_school": "Penn",
    "result": "Fall 5:24"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Derek Moore",
    "winner_school": "UC Davis",
    "loser": "Brandon Carter",
    "loser_school": "Central Michigan",
    "result": "Fall 4:30"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Jacob Kreigbaum",
    "loser_school": "Air Force",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Sean Markey",
    "winner_school": "The Citadel",
    "loser": "Chris Davis",
    "loser_school": "Sacred Heart",
    "result": "Fall 1:10"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "C.J. Ettelson",
    "winner_school": "Northern Iowa",
    "loser": "Vincent Ramirez",
    "loser_school": "North Carolina",
    "result": "Fall 4:09"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Brad Forbes",
    "loser_school": "Bloomsburg",
    "result": "Fall 4:30"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Kevin Artis",
    "loser_school": "UNC Greensboro",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Sal Tirico",
    "winner_school": "Columbia",
    "loser": "Cody Becker",
    "loser_school": "Millersville",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Max Meltzer",
    "winner_school": "Harvard",
    "loser": "Charles Griffin",
    "loser_school": "Hofstra",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Dominick Moyer",
    "loser_school": "Nebraska",
    "result": "Fall 3:57"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Alex Tsirtsis",
    "winner_school": "Iowa",
    "loser": "Charlie Pienaar",
    "loser_school": "Slippery Rock",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Ronald Tarquinio",
    "winner_school": "Pittsburgh",
    "loser": "Michael Keefe",
    "loser_school": "Chattanooga",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Ed Gutnik",
    "winner_school": "Wisconsin",
    "loser": "Kyle Larson",
    "loser_school": "Oregon State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Manny Rivera",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Anthony Baza",
    "loser_school": "CSU Bakersfield",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Ryan Osgood",
    "winner_school": "Northern Iowa",
    "loser": "Jeff Ecklof",
    "loser_school": "Pittsburgh",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Tyler Turner",
    "winner_school": "Wisconsin",
    "loser": "Mike Kessler",
    "loser_school": "Rider",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Carter Downing",
    "loser_school": "Wyoming",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Mark DiSalvo",
    "winner_school": "Central Michigan",
    "loser": "Aaron Martin",
    "loser_school": "Chattanooga",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Matt Dragon",
    "winner_school": "Penn",
    "loser": "Jeff Owens",
    "loser_school": "Cal Poly",
    "result": "TF 15-0 3:16"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Robert Sanders",
    "winner_school": "Nebraska",
    "loser": "David Jauregui",
    "loser_school": "West Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "James Woodall",
    "loser_school": "Penn State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Darren McKnight",
    "loser_school": "Michigan State",
    "result": "Fall 0:31"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Morgan Atkinson",
    "winner_school": "Cal State Fullerton",
    "loser": "Jason Bake",
    "loser_school": "Kent State",
    "result": "Fall 6:46"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Tyler Sherfey",
    "winner_school": "Boise State",
    "loser": "Troy Tirapelle",
    "loser_school": "Illinois",
    "result": "TF 20-4 4:37"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Patrick Simpson",
    "loser_school": "Army",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Trevor Chinn",
    "loser_school": "Lehigh",
    "result": "Fall 4:13"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Keith Dickey",
    "winner_school": "Cornell",
    "loser": "Josh Medina",
    "loser_school": "Lock Haven",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "John Cox",
    "winner_school": "Navy",
    "loser": "Ryan Hurley",
    "loser_school": "Cleveland State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Andrew Schlaffer",
    "loser_school": "Maryland",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Danny Clum",
    "loser_school": "Wyoming",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Nate Galloway",
    "winner_school": "Penn State",
    "loser": "Aric Fuhrman",
    "loser_school": "Bloomsburg",
    "result": "Fall 0:26"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Kurt Gross",
    "loser_school": "Kent State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Craig Henning",
    "winner_school": "Wisconsin",
    "loser": "Kody Hamrah",
    "loser_school": "NC State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Ben Cherrington",
    "winner_school": "Boise State",
    "loser": "Kevin Ward",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Will Rowe",
    "winner_school": "Oklahoma",
    "loser": "Steve Luke",
    "loser_school": "Michigan",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Matt Lebe",
    "winner_school": "West Virginia",
    "loser": "Michael Savino",
    "loser_school": "Brown",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Adam Glaser",
    "loser_school": "Gardner-Webb",
    "result": "Fall 2:01"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "James Strouse",
    "loser_school": "Hofstra",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Ryan Hluschak",
    "loser_school": "Drexel",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Tony Hook",
    "winner_school": "Oregon State",
    "loser": "Dustin Manotti",
    "loser_school": "Cornell",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "Jacob Yost",
    "loser_school": "Chattanooga",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Andrew Flanagan",
    "winner_school": "Harvard",
    "loser": "Chris Bitetto",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Seth Martin",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Justin Nestor",
    "loser_school": "Pittsburgh",
    "result": "Fall 2:02"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Chris Vondruska",
    "winner_school": "Hofstra",
    "loser": "Daniel Bedoy",
    "loser_school": "Purdue",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Jon Anderson",
    "loser_school": "Army",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Joey Bracamonte",
    "winner_school": "Oregon",
    "loser": "Matt Pell",
    "loser_school": "Missouri",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Larry Hall",
    "winner_school": "West Virginia",
    "loser": "Marc Harwood",
    "loser_school": "Nebraska",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "John Galloway",
    "winner_school": "Northern Illinois",
    "loser": "Max Dean",
    "loser_school": "Indiana",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Nick Baima",
    "winner_school": "Northern Iowa",
    "loser": "Ray Blake",
    "loser_school": "Stanford",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Muzaffar Abdurakhmanov",
    "winner_school": "American",
    "loser": "Tyler Tisdell",
    "loser_school": "George Mason",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Will Durkee",
    "winner_school": "Northwestern",
    "loser": "Steve Anceravage",
    "loser_school": "Cornell",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Deonte Penn",
    "winner_school": "Edinboro",
    "loser": "Matt Nagel",
    "loser_school": "Minnesota",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Troy Letters",
    "winner_school": "Lehigh",
    "loser": "Jason Cardillo",
    "loser_school": "Slippery Rock",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Dan Thompson",
    "winner_school": "The Citadel",
    "loser": "Patrick Pitsch",
    "loser_school": "Arizona State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Garrett Atkinson",
    "winner_school": "North Carolina",
    "loser": "Beau Tresemer",
    "loser_school": "Air Force",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Brian Busby",
    "loser_school": "CSU Bakersfield",
    "result": "TF 25-8 0:00"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Christian Arellano",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Wes Roberts",
    "winner_school": "Oklahoma",
    "loser": "Dan Miracola",
    "loser_school": "Cornell",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "James Yonushonis",
    "winner_school": "Penn State",
    "loser": "Brian Bernal",
    "loser_school": "Wyoming",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Travis Frick",
    "winner_school": "Lehigh",
    "loser": "Jared Ricotta",
    "loser_school": "Duquesne",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Nick Hernandez",
    "loser_school": "Cal Poly",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Alex Maciag",
    "loser_school": "North Carolina",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Kurt Brenner",
    "winner_school": "West Virginia",
    "loser": "Joe Lowe",
    "loser_school": "UNC Greensboro",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Jim Bertulis",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Brandon Sinnott",
    "loser_school": "Central Michigan",
    "result": "Fall 3:45"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Donny Reynolds",
    "loser_school": "Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Jeremy Larson",
    "loser_school": "Oregon State",
    "result": "TF 17-0 3:12"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Eric Ring",
    "winner_school": "Edinboro",
    "loser": "R.J. Boudro",
    "loser_school": "Michigan State",
    "result": "Dec 2-0 SV"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Kenneth Cook",
    "winner_school": "UC Davis",
    "loser": "Blake Mauer",
    "loser_school": "Ohio State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Kenny Robertson",
    "winner_school": "Eastern Illinois",
    "loser": "Gabriel Dretsch",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Aaron Miller",
    "loser_school": "Kent State",
    "result": "Fall 3:45"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Doug Umbehauer",
    "loser_school": "Rider",
    "result": "Fall 0:17"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Charlie Pienaar",
    "loser_school": "Slippery Rock",
    "result": "Fall 4:28"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Ron Howard",
    "winner_school": "Cleveland State",
    "loser": "Louis Caputo",
    "loser_school": "Harvard",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Raymond Jordan",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "Greg Perz",
    "loser_school": "Eastern Illinois",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Shane Webster",
    "winner_school": "Oregon",
    "loser": "Dave Helfrich",
    "loser_school": "Lehigh",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Joe Rovelli",
    "winner_school": "Hofstra",
    "loser": "Mike Tamillow",
    "loser_school": "Northwestern",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Christian Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Tyler Todd",
    "loser_school": "Michigan",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Tyler Bernacchi",
    "loser_school": "UC Davis",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Joe Maroney",
    "loser_school": "Rider",
    "result": "TF 20-5 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Greg Gifford",
    "winner_school": "Fresno State",
    "loser": "John Davis",
    "loser_school": "Chattanooga",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Alex Camargo",
    "winner_school": "Kent State",
    "loser": "Vince Jones",
    "loser_school": "Nebraska",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Derrick Morgan",
    "loser_school": "Lock Haven",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Alex Clemsen",
    "loser_school": "Edinboro",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "C.B. Dollaway",
    "winner_school": "Arizona State",
    "loser": "Rusty Blackmon",
    "loser_school": "Oklahoma State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Ryan Halsey",
    "winner_school": "Cal Poly",
    "loser": "Justin Dyer",
    "loser_school": "Oklahoma",
    "result": "Fall 1:24"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Jeremy Colbert",
    "loser_school": "NC State",
    "result": "Fall 2:00"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Dan Pitsch",
    "loser_school": "Oregon State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Chris Weidman",
    "winner_school": "Hofstra",
    "loser": "Daren Burns",
    "loser_school": "UNC Greensboro",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Tyrone Byrd",
    "winner_school": "Illinois",
    "loser": "Charles Martin",
    "loser_school": "Army",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Bredan McLean",
    "loser_school": "Air Force",
    "result": "Fall 2:18"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Nathan Moore",
    "loser_school": "Purdue",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Casey Phelps",
    "winner_school": "Boise State",
    "loser": "Malcom Havens",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Adam Wright",
    "winner_school": "Old Dominion",
    "loser": "Jeff Foust",
    "loser_school": "Missouri",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Willie Breyer",
    "loser_school": "Michigan",
    "result": "MD 21-9"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Matt Monteiro",
    "loser_school": "Cal Poly",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Dale Herbst",
    "winner_school": "Wisconsin",
    "loser": "Brent Blackwell",
    "loser_school": "Gardner-Webb",
    "result": "Fall 0:38"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Ryan Goodman",
    "winner_school": "NC State",
    "loser": "Chris Pogue",
    "loser_school": "Navy",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Jon Oplinger",
    "loser_school": "Drexel",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "T.J. Morrison",
    "loser_school": "Rider",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Matt Delguyd",
    "winner_school": "Northwestern",
    "loser": "Matt Cassidy",
    "loser_school": "Lehigh",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Jared Villers",
    "winner_school": "West Virginia",
    "loser": "Andrew Anderson",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Kyle Cerminara",
    "winner_school": "Buffalo",
    "loser": "David Dashiell",
    "loser_school": "North Carolina",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Dusty Hoffschneider",
    "loser_school": "Wyoming",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Tyler Shovlin",
    "winner_school": "UNC Greensboro",
    "loser": "Harold Sherrell",
    "loser_school": "Buffalo",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Ty Watterson",
    "winner_school": "Oregon State",
    "loser": "Payam Zarrinpour",
    "loser_school": "Sacred Heart",
    "result": "Fall 5:34"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Mike Faust",
    "winner_school": "Virginia Tech",
    "loser": "Mike Spaid",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Kirk Nail",
    "winner_school": "Ohio State",
    "loser": "Adam LoPiccolo",
    "loser_school": "American",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Paul Weibel",
    "winner_school": "Lehigh",
    "loser": "Tyler Rhodes",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:08"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Cain Velasquez",
    "winner_school": "Arizona State",
    "loser": "Joel Edwards",
    "loser_school": "Penn State",
    "result": "Fall 1:06"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Matt Burkholder",
    "loser_school": "Slippery Rock",
    "result": "Fall 3:43"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Dave Herman",
    "winner_school": "Indiana",
    "loser": "Jon May",
    "loser_school": "Nebraska",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Spencer Nadolsky",
    "winner_school": "North Carolina",
    "loser": "Rashad Goff",
    "loser_school": "Cleveland State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Tanner Garrett",
    "winner_school": "Navy",
    "loser": "Matt Weight",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Jake Hager",
    "winner_school": "Oklahoma",
    "loser": "Chris Cvitan",
    "loser_school": "James Madison",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Andrew Patrick",
    "winner_school": "Boise State",
    "loser": "Jeremy Mosely",
    "loser_school": "Edinboro",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Steve Mocco",
    "winner_school": "Oklahoma State",
    "loser": "Israel Silva",
    "loser_school": "Chattanooga",
    "result": "Fall 6:15"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Matt Fisk",
    "winner_school": "Lehigh",
    "loser": "Steve Mytych",
    "loser_school": "Drexel",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Jared Royer",
    "winner_school": "North Carolina",
    "loser": "Bobby Pfennings",
    "loser_school": "Oregon State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Dewitt Driscoll",
    "winner_school": "Penn State",
    "loser": "Cesar Grajales",
    "loser_school": "Penn",
    "result": "MD 13-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "Trevor Chinn",
    "winner_school": "Lehigh",
    "loser": "Chris Renninger",
    "loser_school": "Drexel",
    "result": "MD 8-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Vince Jones",
    "winner_school": "Nebraska",
    "loser": "Jesse Taylor",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 0:52"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Joe Fendone",
    "winner_school": "Edinboro",
    "loser": "Malcom Havens",
    "loser_school": "Wyoming",
    "result": "Fall 1:48"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Ode Blanc",
    "loser_school": "Lock Haven",
    "result": "Fall 1:00"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "Chad Sportelli",
    "loser_school": "Kent State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Tanner Gardner",
    "loser_school": "Stanford",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Mike Sees",
    "winner_school": "Bloomsburg",
    "loser": "Rick Deubel",
    "loser_school": "Edinboro",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Dave Tomasette",
    "loser_school": "Hofstra",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Luke Smith",
    "winner_school": "Central Michigan",
    "loser": "Bryce Leonhardt",
    "loser_school": "Wyoming",
    "result": "Fall 0:33"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Jeremy Mendoza",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Luke Magnani",
    "loser_school": "Iowa",
    "result": "Fall 6:23"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Borges. Cory",
    "winner_school": "Fresno State",
    "loser": "Chris Clarke",
    "loser_school": "Slippery Rock",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Patrick Castillo",
    "winner_school": "Northern Illinois",
    "loser": "Justin Staylor",
    "loser_school": "Virginia Tech",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Javier Maldonado",
    "loser_school": "Chattanooga",
    "result": "Fall 2:12"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Mike Silengo",
    "winner_school": "Penn",
    "loser": "Collin Cudd",
    "loser_school": "Wisconsin",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "William Simpson",
    "loser_school": "Army",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Matt Fisk",
    "winner_school": "Lehigh",
    "loser": "Austin Devoe",
    "loser_school": "Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Brad Gentzle",
    "loser_school": "Pittsburgh",
    "result": "MD 14-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Seth Wright",
    "winner_school": "Northern Iowa",
    "loser": "Mike Watts",
    "loser_school": "Michigan",
    "result": "Fall 0:27"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Tyler McCormick",
    "loser_school": "Missouri",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Matt Keller",
    "winner_school": "Chattanooga",
    "loser": "Phillip Plowman",
    "loser_school": "Eastern Michigan",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Chris Helgeson",
    "loser_school": "Northern Iowa",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Josh Pniewski",
    "loser_school": "Gardner-Webb",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Patrick Aleksanyan",
    "loser_school": "Nebraska",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Robbie Preston",
    "loser_school": "Harvard",
    "result": "Fall 6:57"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Jason Borrelli",
    "winner_school": "Central Michigan",
    "loser": "Jake Strayer",
    "loser_school": "Penn State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Gabe Flores",
    "loser_school": "Illinois",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Andrae Hernandez",
    "loser_school": "Indiana",
    "result": "Dec 16-9"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Tommy Vargas",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Mike Ciotti",
    "winner_school": "Pittsburgh",
    "loser": "Brandon Strong",
    "loser_school": "Air Force",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Dave Armstrong",
    "winner_school": "Cleveland State",
    "loser": "Jared Royer",
    "loser_school": "North Carolina",
    "result": "Dec 15-8"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Mark Budd",
    "winner_school": "Buffalo",
    "loser": "Reece Humphrey",
    "loser_school": "Ohio State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Mark Moos",
    "winner_school": "Michigan",
    "loser": "Zach Cunliffe",
    "loser_school": "Rider",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Scott Jorgenson",
    "winner_school": "Boise State",
    "loser": "Omar Gaitan",
    "loser_school": "UC Davis",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Mike Mormile",
    "winner_school": "Cornell",
    "loser": "Ryan Willams",
    "loser_school": "Old Dominion",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Dave Roberts",
    "loser_school": "Cal Poly",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Brandon Rader",
    "winner_school": "West Virginia",
    "loser": "Derek Moore",
    "loser_school": "UC Davis",
    "result": "Fall 2:17"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Sean Markey",
    "loser_school": "The Citadel",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "C.J. Ettelson",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Sal Tirico",
    "loser_school": "Columbia",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Max Meltzer",
    "loser_school": "Harvard",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Alex Tsirtsis",
    "winner_school": "Iowa",
    "loser": "Ronald Tarquinio",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Ed Gutnik",
    "loser_school": "Wisconsin",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Manny Rivera",
    "winner_school": "Minnesota",
    "loser": "Kyle Larson",
    "loser_school": "Oregon State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Charlie Pienaar",
    "winner_school": "Slippery Rock",
    "loser": "Casio Pero",
    "loser_school": "Illinois",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Dominick Moyer",
    "loser_school": "Nebraska",
    "result": "Fall 1:47"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Kevin Artis",
    "winner_school": "UNC Greensboro",
    "loser": "Cody Becker",
    "loser_school": "Millersville",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Brad Forbes",
    "winner_school": "Bloomsburg",
    "loser": "Vincent Ramirez",
    "loser_school": "North Carolina",
    "result": "Dec 11-10"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Josh Wooton",
    "winner_school": "Northern Illinois",
    "loser": "Jacob Kreigbaum",
    "loser_school": "Air Force",
    "result": "MD 17-9"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Dewitt Driscoll",
    "winner_school": "Penn State",
    "loser": "Brandon Carter",
    "loser_school": "Central Michigan",
    "result": "Fall 3:54"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Mike Hurley",
    "loser_school": "Cleveland State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Ryan Osgood",
    "loser_school": "Northern Iowa",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Tyler Turner",
    "loser_school": "Wisconsin",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Mark DiSalvo",
    "winner_school": "Central Michigan",
    "loser": "Matt Dragon",
    "loser_school": "Penn",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "Robert Sanders",
    "loser_school": "Nebraska",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Morgan Atkinson",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 4:25"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Tyler Sherfey",
    "loser_school": "Boise State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Keith Dickey",
    "loser_school": "Cornell",
    "result": "Fall 1:37"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "John Cox",
    "loser_school": "Navy",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Andrew Schlaffer",
    "winner_school": "Maryland",
    "loser": "Ryan Hurley",
    "loser_school": "Cleveland State",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Trevor Chinn",
    "winner_school": "Lehigh",
    "loser": "Josh Medina",
    "loser_school": "Lock Haven",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Patrick Simpson",
    "winner_school": "Army",
    "loser": "Troy Tirapelle",
    "loser_school": "Illinois",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Darren McKnight",
    "winner_school": "Michigan State",
    "loser": "Jason Bake",
    "loser_school": "Kent State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "David Jauregui",
    "winner_school": "West Virginia",
    "loser": "James Woodall",
    "loser_school": "Penn State",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Aaron Martin",
    "winner_school": "Chattanooga",
    "loser": "Jeff Owens",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "Carter Downing",
    "winner_school": "Wyoming",
    "loser": "Daniel Elliott",
    "loser_school": "Gardner-Webb",
    "result": "MD 19-9"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Anthony Baza",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeff Ecklof",
    "loser_school": "Pittsburgh",
    "result": "M FOR"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Nate Galloway",
    "loser_school": "Penn State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Craig Henning",
    "loser_school": "Wisconsin",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Ben Cherrington",
    "winner_school": "Boise State",
    "loser": "Will Rowe",
    "loser_school": "Oklahoma",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Matt Lebe",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Alex Tirapelle",
    "winner_school": "Illinois",
    "loser": "Matt Hill",
    "loser_school": "Edinboro",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "Brandon Becker",
    "loser_school": "Indiana",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "Tony Hook",
    "loser_school": "Oregon State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Andrew Flanagan",
    "winner_school": "Harvard",
    "loser": "C.P. Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Chris Bitetto",
    "winner_school": "Northern Iowa",
    "loser": "Seth Martin",
    "loser_school": "Lock Haven",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Jacob Yost",
    "loser_school": "Chattanooga",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "James Strouse",
    "winner_school": "Hofstra",
    "loser": "Ryan Hluschak",
    "loser_school": "Drexel",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Kevin Ward",
    "winner_school": "Oklahoma State",
    "loser": "Steve Luke",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Kurt Gross",
    "winner_school": "Kent State",
    "loser": "Kody Hamrah",
    "loser_school": "NC State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Danny Clum",
    "winner_school": "Wyoming",
    "loser": "Aric Fuhrman",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Chris Vondruska",
    "loser_school": "Hofstra",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Michael Poeta",
    "loser_school": "Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Joey Bracamonte",
    "winner_school": "Oregon",
    "loser": "Larry Hall",
    "loser_school": "West Virginia",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "John Galloway",
    "winner_school": "Northern Illinois",
    "loser": "Nick Baima",
    "loser_school": "Northern Iowa",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Muzaffar Abdurakhmanov",
    "winner_school": "American",
    "loser": "Eric Luedke",
    "loser_school": "Iowa",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Deonte Penn",
    "winner_school": "Edinboro",
    "loser": "Will Durkee",
    "loser_school": "Northwestern",
    "result": "Fall 0:53"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Dan Thompson",
    "winner_school": "The Citadel",
    "loser": "Troy Letters",
    "loser_school": "Lehigh",
    "result": "Fall 2:09"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Garrett Atkinson",
    "loser_school": "North Carolina",
    "result": "Fall 5:52"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Brian Busby",
    "winner_school": "CSU Bakersfield",
    "loser": "Beau Tresemer",
    "loser_school": "Air Force",
    "result": "MD 18-8"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Jason Cardillo",
    "loser_school": "Slippery Rock",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Matt Nagel",
    "winner_school": "Minnesota",
    "loser": "Steve Anceravage",
    "loser_school": "Cornell",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Max Dean",
    "winner_school": "Indiana",
    "loser": "Ray Blake",
    "loser_school": "Stanford",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Marc Harwood",
    "loser_school": "Nebraska",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Justin Nestor",
    "winner_school": "Pittsburgh",
    "loser": "Daniel Bedoy",
    "loser_school": "Purdue",
    "result": "Fall 2:27"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Wes Roberts",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Travis Frick",
    "winner_school": "Lehigh",
    "loser": "James Yonushonis",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Matt Herrington",
    "loser_school": "Penn",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Kurt Brenner",
    "loser_school": "West Virginia",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "Fall 4:05"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Eric Ring",
    "loser_school": "Edinboro",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Kenneth Cook",
    "winner_school": "UC Davis",
    "loser": "Kenny Robertson",
    "loser_school": "Eastern Illinois",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Matt Stolpinski",
    "loser_school": "Navy",
    "result": "Fall 0:47"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Aaron Miller",
    "winner_school": "Kent State",
    "loser": "Doug Umbehauer",
    "loser_school": "Rider",
    "result": "Fall 3:56"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Gabriel Dretsch",
    "winner_school": "Minnesota",
    "loser": "Blake Mauer",
    "loser_school": "Ohio State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "R.J. Boudro",
    "winner_school": "Michigan State",
    "loser": "Jeremy Larson",
    "loser_school": "Oregon State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Donny Reynolds",
    "winner_school": "Illinois",
    "loser": "Brandon Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Joe Lowe",
    "winner_school": "UNC Greensboro",
    "loser": "Jim Bertulis",
    "loser_school": "Bloomsburg",
    "result": "Fall 4:04"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Nick Hernandez",
    "winner_school": "Cal Poly",
    "loser": "Alex Maciag",
    "loser_school": "North Carolina",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Jared Ricotta",
    "winner_school": "Duquesne",
    "loser": "Brian Bernal",
    "loser_school": "Wyoming",
    "result": "Fall 6:17"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Dan Miracola",
    "winner_school": "Cornell",
    "loser": "Christian Arellano",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Ron Howard",
    "loser_school": "Cleveland State",
    "result": "Dec 14-10 TB"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "Paul Bradley",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Shane Webster",
    "winner_school": "Oregon",
    "loser": "Joe Rovelli",
    "loser_school": "Hofstra",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Christian Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Greg Gifford",
    "loser_school": "Fresno State",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Alex Camargo",
    "loser_school": "Kent State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "C.B. Dollaway",
    "winner_school": "Arizona State",
    "loser": "Kurt Backes",
    "loser_school": "Iowa State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Ryan Halsey",
    "loser_school": "Cal Poly",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Justin Dyer",
    "winner_school": "Oklahoma",
    "loser": "Jeremy Colbert",
    "loser_school": "NC State",
    "result": "Fall 2:44"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "Rusty Blackmon",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Vince Jones",
    "winner_school": "Nebraska",
    "loser": "Derrick Morgan",
    "loser_school": "Lock Haven",
    "result": "Fall 2:03"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "John Davis",
    "winner_school": "Chattanooga",
    "loser": "Joe Maroney",
    "loser_school": "Rider",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Tyler Todd",
    "winner_school": "Michigan",
    "loser": "Tyler Bernacchi",
    "loser_school": "UC Davis",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Dave Helfrich",
    "winner_school": "Lehigh",
    "loser": "Mike Tamillow",
    "loser_school": "Northwestern",
    "result": "Fall 4:09"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Raymond Jordan",
    "winner_school": "Nebraska",
    "loser": "Greg Perz",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Charlie Pienaar",
    "winner_school": "Slippery Rock",
    "loser": "Louis Caputo",
    "loser_school": "Harvard",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Chris Weidman",
    "winner_school": "Hofstra",
    "loser": "Wynn Michalak",
    "loser_school": "Central Michigan",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Tyrone Byrd",
    "loser_school": "Illinois",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Casey Phelps",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Adam Wright",
    "loser_school": "Old Dominion",
    "result": "Fall 1:28"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Dale Herbst",
    "loser_school": "Wisconsin",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Ryan Goodman",
    "loser_school": "NC State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "Matt Delguyd",
    "loser_school": "Northwestern",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Kyle Cerminara",
    "winner_school": "Buffalo",
    "loser": "Jared Villers",
    "loser_school": "West Virginia",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "David Dashiell",
    "winner_school": "North Carolina",
    "loser": "Dan Erekson",
    "loser_school": "Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "T.J. Morrison",
    "winner_school": "Rider",
    "loser": "Matt Cassidy",
    "loser_school": "Lehigh",
    "result": "Dec 16-10"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Jon Oplinger",
    "winner_school": "Drexel",
    "loser": "Chris Pogue",
    "loser_school": "Navy",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Matt Monteiro",
    "winner_school": "Cal Poly",
    "loser": "Brent Blackwell",
    "loser_school": "Gardner-Webb",
    "result": "TF 15-0 2:50"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Jeff Foust",
    "winner_school": "Missouri",
    "loser": "Willie Breyer",
    "loser_school": "Michigan",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Nathan Moore",
    "winner_school": "Purdue",
    "loser": "Joe Fendone",
    "loser_school": "Edinboro",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Charles Martin",
    "winner_school": "Army",
    "loser": "Bredan McLean",
    "loser_school": "Air Force",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Daren Burns",
    "winner_school": "UNC Greensboro",
    "loser": "Dan Pitsch",
    "loser_school": "Oregon State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Tyler Shovlin",
    "loser_school": "UNC Greensboro",
    "result": "Fall 3:19"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Mike Faust",
    "winner_school": "Virginia Tech",
    "loser": "Ty Watterson",
    "loser_school": "Oregon State",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Kirk Nail",
    "winner_school": "Ohio State",
    "loser": "Bode Ogunwole",
    "loser_school": "Harvard",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Cain Velasquez",
    "winner_school": "Arizona State",
    "loser": "Paul Weibel",
    "loser_school": "Lehigh",
    "result": "Fall 1:08"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Dave Herman",
    "loser_school": "Indiana",
    "result": "Fall 2:19"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Tanner Garrett",
    "winner_school": "Navy",
    "loser": "Spencer Nadolsky",
    "loser_school": "North Carolina",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Jake Hager",
    "winner_school": "Oklahoma",
    "loser": "Dustin Fox",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Steve Mocco",
    "winner_school": "Oklahoma State",
    "loser": "Andrew Patrick",
    "loser_school": "Boise State",
    "result": "Fall 1:18"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Israel Silva",
    "winner_school": "Chattanooga",
    "loser": "Jeremy Mosely",
    "loser_school": "Edinboro",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Rashad Goff",
    "winner_school": "Cleveland State",
    "loser": "Matt Weight",
    "loser_school": "Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Jon May",
    "winner_school": "Nebraska",
    "loser": "Matt Burkholder",
    "loser_school": "Slippery Rock",
    "result": "Fall 5:22"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Joel Edwards",
    "winner_school": "Penn State",
    "loser": "Tyler Rhodes",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:55"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Payam Zarrinpour",
    "winner_school": "Sacred Heart",
    "loser": "Mike Spaid",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Dusty Hoffschneider",
    "winner_school": "Wyoming",
    "loser": "Harold Sherrell",
    "loser_school": "Buffalo",
    "result": "MD 15-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Borges. Cory",
    "loser_school": "Fresno State",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Patrick Castillo",
    "winner_school": "Northern Illinois",
    "loser": "Rick Deubel",
    "loser_school": "Edinboro",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Ode Blanc",
    "loser_school": "Lock Haven",
    "result": "TF 22-5 7:00"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Mike Silengo",
    "winner_school": "Penn",
    "loser": "Chad Sportelli",
    "loser_school": "Kent State",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Jeremy Mendoza",
    "loser_school": "Arizona State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Matt Fisk",
    "winner_school": "Lehigh",
    "loser": "Luke Magnani",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Dave Tomasette",
    "loser_school": "Hofstra",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Bryce Leonhardt",
    "winner_school": "Wyoming",
    "loser": "Seth Wright",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Chris Helgeson",
    "winner_school": "Northern Iowa",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "Dec 12-9"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Josh Pniewski",
    "loser_school": "Gardner-Webb",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Mike Ciotti",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Dave Armstrong",
    "winner_school": "Cleveland State",
    "loser": "Phillip Plowman",
    "loser_school": "Eastern Michigan",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Jake Strayer",
    "winner_school": "Penn State",
    "loser": "Mark Budd",
    "loser_school": "Buffalo",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Gabe Flores",
    "winner_school": "Illinois",
    "loser": "Mark Moos",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Scott Jorgenson",
    "winner_school": "Boise State",
    "loser": "Patrick Aleksanyan",
    "loser_school": "Nebraska",
    "result": "Dec 14-7"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Mike Mormile",
    "winner_school": "Cornell",
    "loser": "Robbie Preston",
    "loser_school": "Harvard",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Sean Markey",
    "winner_school": "The Citadel",
    "loser": "Manny Rivera",
    "loser_school": "Minnesota",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "C.J. Ettelson",
    "winner_school": "Northern Iowa",
    "loser": "Charlie Pienaar",
    "loser_school": "Slippery Rock",
    "result": "Fall 2:14"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Dave Roberts",
    "winner_school": "Cal Poly",
    "loser": "Charles Griffin",
    "loser_school": "Hofstra",
    "result": "MD 15-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Kevin Artis",
    "winner_school": "UNC Greensboro",
    "loser": "Derek Moore",
    "loser_school": "UC Davis",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Ronald Tarquinio",
    "winner_school": "Pittsburgh",
    "loser": "Brad Forbes",
    "loser_school": "Bloomsburg",
    "result": "Fall 4:12"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Josh Wooton",
    "winner_school": "Northern Illinois",
    "loser": "Ed Gutnik",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Dewitt Driscoll",
    "winner_school": "Penn State",
    "loser": "Sal Tirico",
    "loser_school": "Columbia",
    "result": "Fall 0:41"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Max Meltzer",
    "loser_school": "Harvard",
    "result": "Fall 6:59"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Matt Dragon",
    "winner_school": "Penn",
    "loser": "Andrew Schlaffer",
    "loser_school": "Maryland",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Trevor Chinn",
    "winner_school": "Lehigh",
    "loser": "Robert Sanders",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Patrick Simpson",
    "winner_school": "Army",
    "loser": "Ryan Osgood",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Tyler Turner",
    "winner_school": "Wisconsin",
    "loser": "Darren McKnight",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Keith Dickey",
    "winner_school": "Cornell",
    "loser": "David Jauregui",
    "loser_school": "West Virginia",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "John Cox",
    "winner_school": "Navy",
    "loser": "Aaron Martin",
    "loser_school": "Chattanooga",
    "result": "Fall 1:16"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Morgan Atkinson",
    "winner_school": "Cal State Fullerton",
    "loser": "Carter Downing",
    "loser_school": "Wyoming",
    "result": "Fall 2:59"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Tyler Sherfey",
    "winner_school": "Boise State",
    "loser": "Anthony Baza",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Chris Bitetto",
    "winner_school": "Northern Iowa",
    "loser": "Will Rowe",
    "loser_school": "Oklahoma",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Matt Lebe",
    "loser_school": "West Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Nate Galloway",
    "winner_school": "Penn State",
    "loser": "James Strouse",
    "loser_school": "Hofstra",
    "result": "Fall 0:36"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Craig Henning",
    "winner_school": "Wisconsin",
    "loser": "Adam Glaser",
    "loser_school": "Gardner-Webb",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Tony Hook",
    "winner_school": "Oregon State",
    "loser": "Michael Savino",
    "loser_school": "Brown",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Kevin Ward",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Matt Hill",
    "winner_school": "Edinboro",
    "loser": "Kurt Gross",
    "loser_school": "Kent State",
    "result": "MD 17-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Danny Clum",
    "loser_school": "Wyoming",
    "result": "Fall 4:32"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Larry Hall",
    "winner_school": "West Virginia",
    "loser": "Brian Busby",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Nick Baima",
    "loser_school": "Northern Iowa",
    "result": "DEF"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Chris Vondruska",
    "winner_school": "Hofstra",
    "loser": "Matt Nagel",
    "loser_school": "Minnesota",
    "result": "Fall 6:14"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Tyler Tisdell",
    "loser_school": "George Mason",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Max Dean",
    "winner_school": "Indiana",
    "loser": "Troy Letters",
    "loser_school": "Lehigh",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Garrett Atkinson",
    "loser_school": "North Carolina",
    "result": "Fall 2:23"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Eric Luedke",
    "winner_school": "Iowa",
    "loser": "Jon Anderson",
    "loser_school": "Army",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Justin Nestor",
    "winner_school": "Pittsburgh",
    "loser": "Will Durkee",
    "loser_school": "Northwestern",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Aaron Miller",
    "loser_school": "Kent State",
    "result": "Fall 3:44"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Kurt Brenner",
    "winner_school": "West Virginia",
    "loser": "Gabriel Dretsch",
    "loser_school": "Minnesota",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Wes Roberts",
    "winner_school": "Oklahoma",
    "loser": "R.J. Boudro",
    "loser_school": "Michigan State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "James Yonushonis",
    "winner_school": "Penn State",
    "loser": "Donny Reynolds",
    "loser_school": "Illinois",
    "result": "Fall 3:16"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Kenny Robertson",
    "winner_school": "Eastern Illinois",
    "loser": "Joe Lowe",
    "loser_school": "UNC Greensboro",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Nick Hernandez",
    "winner_school": "Cal Poly",
    "loser": "Matt Stolpinski",
    "loser_school": "Navy",
    "result": "Dec 15-12"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Jared Ricotta",
    "loser_school": "Duquesne",
    "result": "Fall 2:39"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Eric Ring",
    "winner_school": "Edinboro",
    "loser": "Dan Miracola",
    "loser_school": "Cornell",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Joe Rovelli",
    "winner_school": "Hofstra",
    "loser": "Justin Dyer",
    "loser_school": "Oklahoma",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "Christian Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Vince Jones",
    "winner_school": "Nebraska",
    "loser": "Ron Howard",
    "loser_school": "Cleveland State",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "John Davis",
    "loser_school": "Chattanooga",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Tyler Todd",
    "loser_school": "Michigan",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Dave Helfrich",
    "winner_school": "Lehigh",
    "loser": "Ryan Halsey",
    "loser_school": "Cal Poly",
    "result": "Fall 1:57"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Raymond Jordan",
    "winner_school": "Nebraska",
    "loser": "Greg Gifford",
    "loser_school": "Fresno State",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Alex Camargo",
    "winner_school": "Kent State",
    "loser": "Charlie Pienaar",
    "loser_school": "Slippery Rock",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Casey Phelps",
    "winner_school": "Boise State",
    "loser": "David Dashiell",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Adam Wright",
    "winner_school": "Old Dominion",
    "loser": "T.J. Morrison",
    "loser_school": "Rider",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Jon Oplinger",
    "loser_school": "Drexel",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Matt Monteiro",
    "winner_school": "Cal Poly",
    "loser": "Tyrone Byrd",
    "loser_school": "Illinois",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Jeff Foust",
    "winner_school": "Missouri",
    "loser": "Matt Delguyd",
    "loser_school": "Northwestern",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Nathan Moore",
    "winner_school": "Purdue",
    "loser": "Jared Villers",
    "loser_school": "West Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Dale Herbst",
    "winner_school": "Wisconsin",
    "loser": "Charles Martin",
    "loser_school": "Army",
    "result": "Fall 3:11"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Daren Burns",
    "winner_school": "UNC Greensboro",
    "loser": "Ryan Goodman",
    "loser_school": "NC State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Bode Ogunwole",
    "winner_school": "Harvard",
    "loser": "Israel Silva",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Paul Weibel",
    "winner_school": "Lehigh",
    "loser": "Chris Cvitan",
    "loser_school": "James Madison",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Tyler Shovlin",
    "winner_school": "UNC Greensboro",
    "loser": "Rashad Goff",
    "loser_school": "Cleveland State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Ty Watterson",
    "winner_school": "Oregon State",
    "loser": "Jon May",
    "loser_school": "Nebraska",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Joel Edwards",
    "winner_school": "Penn State",
    "loser": "Dustin Fox",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Adam LoPiccolo",
    "winner_school": "American",
    "loser": "Andrew Patrick",
    "loser_school": "Boise State",
    "result": "Fall 2:27"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Dave Herman",
    "winner_school": "Indiana",
    "loser": "Payam Zarrinpour",
    "loser_school": "Sacred Heart",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Spencer Nadolsky",
    "winner_school": "North Carolina",
    "loser": "Dusty Hoffschneider",
    "loser_school": "Wyoming",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Chad Mendes",
    "loser_school": "Cal Poly",
    "result": "Fall 6:44"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Mike Sees",
    "loser_school": "Bloomsburg",
    "result": "Fall 3:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Paul Donahoe",
    "loser_school": "Nebraska",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Patrick Castillo",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Mike Silengo",
    "loser_school": "Penn",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Kyle Ott",
    "winner_school": "Illinois",
    "loser": "Matt Fisk",
    "loser_school": "Lehigh",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Bryce Leonhardt",
    "loser_school": "Wyoming",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Matt Keller",
    "loser_school": "Chattanooga",
    "result": "Dec 14-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Mack Reiter",
    "loser_school": "Minnesota",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Tom Clum",
    "loser_school": "Wisconsin",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Jason Borrelli",
    "loser_school": "Central Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Darrel Vasquez",
    "winner_school": "Cal Poly",
    "loser": "Chris Helgeson",
    "loser_school": "Northern Iowa",
    "result": "MD 19-7"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Dave Armstrong",
    "loser_school": "Cleveland State",
    "result": "Fall 1:26"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Jake Strayer",
    "winner_school": "Penn State",
    "loser": "Gabe Flores",
    "loser_school": "Illinois",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Scott Jorgenson",
    "winner_school": "Boise State",
    "loser": "Mike Mormile",
    "loser_school": "Cornell",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Brandon Rader",
    "loser_school": "West Virginia",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Josh Churella",
    "loser_school": "Michigan",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Ryan Lang",
    "loser_school": "Northwestern",
    "result": "Fall 6:05"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Alex Tsirtsis",
    "loser_school": "Iowa",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "C.J. Ettelson",
    "winner_school": "Northern Iowa",
    "loser": "Sean Markey",
    "loser_school": "The Citadel",
    "result": "Fall 1:27"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Kevin Artis",
    "winner_school": "UNC Greensboro",
    "loser": "Dave Roberts",
    "loser_school": "Cal Poly",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Ronald Tarquinio",
    "winner_school": "Pittsburgh",
    "loser": "Josh Wooton",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Dewitt Driscoll",
    "loser_school": "Penn State",
    "result": "MD 13-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Eric Tannenbaum",
    "loser_school": "Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "Mark DiSalvo",
    "loser_school": "Central Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Jon Masa",
    "loser_school": "Hofstra",
    "result": "Fall 3:57"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Gregor Gillespie",
    "loser_school": "Edinboro",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Matt Dragon",
    "winner_school": "Penn",
    "loser": "Trevor Chinn",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Patrick Simpson",
    "winner_school": "Army",
    "loser": "Tyler Turner",
    "loser_school": "Wisconsin",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "John Cox",
    "winner_school": "Navy",
    "loser": "Keith Dickey",
    "loser_school": "Cornell",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Tyler Sherfey",
    "winner_school": "Boise State",
    "loser": "Morgan Atkinson",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Joe Johnston",
    "winner_school": "Iowa",
    "loser": "Trent Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Ben Cherrington",
    "winner_school": "Boise State",
    "loser": "Michael Chandler",
    "loser_school": "Missouri",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "Alex Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "Andrew Flanagan",
    "loser_school": "Harvard",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Chris Bitetto",
    "loser_school": "Northern Iowa",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Craig Henning",
    "winner_school": "Wisconsin",
    "loser": "Nate Galloway",
    "loser_school": "Penn State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Tony Hook",
    "winner_school": "Oregon State",
    "loser": "C.P. Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Matt Hill",
    "loser_school": "Edinboro",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Joey Bracamonte",
    "winner_school": "Oregon",
    "loser": "John Galloway",
    "loser_school": "Northern Illinois",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Muzaffar Abdurakhmanov",
    "winner_school": "American",
    "loser": "Deonte Penn",
    "loser_school": "Edinboro",
    "result": "Fall 1:39"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Dan Thompson",
    "loser_school": "The Citadel",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Larry Hall",
    "loser_school": "West Virginia",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Chris Vondruska",
    "winner_school": "Hofstra",
    "loser": "Michael Poeta",
    "loser_school": "Illinois",
    "result": "Fall 6:14"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Matt Pell",
    "winner_school": "Missouri",
    "loser": "Max Dean",
    "loser_school": "Indiana",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Eric Luedke",
    "winner_school": "Iowa",
    "loser": "Justin Nestor",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "TF 19-3 5:13"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Jacob Klein",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Brandon Mason",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:28"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Kenneth Cook",
    "loser_school": "UC Davis",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Kurt Brenner",
    "loser_school": "West Virginia",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "James Yonushonis",
    "winner_school": "Penn State",
    "loser": "Wes Roberts",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Kenny Robertson",
    "winner_school": "Eastern Illinois",
    "loser": "Nick Hernandez",
    "loser_school": "Cal Poly",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Matt Palmer",
    "winner_school": "Columbia",
    "loser": "Eric Ring",
    "loser_school": "Edinboro",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Eric Bradley",
    "loser_school": "Penn State",
    "result": "Fall 6:30"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Shane Webster",
    "winner_school": "Oregon",
    "loser": "Joe Mazzurco",
    "loser_school": "Cornell",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Ben Wissel",
    "loser_school": "Purdue",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "C.B. Dollaway",
    "loser_school": "Arizona State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Alex Clemsen",
    "winner_school": "Edinboro",
    "loser": "Joe Rovelli",
    "loser_school": "Hofstra",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Paul Bradley",
    "winner_school": "Iowa",
    "loser": "Vince Jones",
    "loser_school": "Nebraska",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Kurt Backes",
    "winner_school": "Iowa State",
    "loser": "Dave Helfrich",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Alex Camargo",
    "winner_school": "Kent State",
    "loser": "Raymond Jordan",
    "loser_school": "Nebraska",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Chris Weidman",
    "winner_school": "Hofstra",
    "loser": "Ryan Bader",
    "loser_school": "Arizona State",
    "result": "Dec 10-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Joel Flaggert",
    "loser_school": "Oklahoma",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "B.J. Padden",
    "loser_school": "Nebraska",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "Kyle Cerminara",
    "loser_school": "Buffalo",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Casey Phelps",
    "winner_school": "Boise State",
    "loser": "Adam Wright",
    "loser_school": "Old Dominion",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Matt Monteiro",
    "loser_school": "Cal Poly",
    "result": "Fall 2:56"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Nathan Moore",
    "winner_school": "Purdue",
    "loser": "Jeff Foust",
    "loser_school": "Missouri",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Dale Herbst",
    "winner_school": "Wisconsin",
    "loser": "Daren Burns",
    "loser_school": "UNC Greensboro",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Mike Faust",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Cain Velasquez",
    "winner_school": "Arizona State",
    "loser": "Kirk Nail",
    "loser_school": "Ohio State",
    "result": "MD 9-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Tanner Garrett",
    "loser_school": "Navy",
    "result": "Fall 1:41"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Steve Mocco",
    "winner_school": "Oklahoma State",
    "loser": "Jake Hager",
    "loser_school": "Oklahoma",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Bode Ogunwole",
    "winner_school": "Harvard",
    "loser": "Paul Weibel",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Tyler Shovlin",
    "winner_school": "UNC Greensboro",
    "loser": "Ty Watterson",
    "loser_school": "Oregon State",
    "result": "Fall 2:46"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Joel Edwards",
    "winner_school": "Penn State",
    "loser": "Adam LoPiccolo",
    "loser_school": "American",
    "result": "Fall 3:38"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Spencer Nadolsky",
    "winner_school": "North Carolina",
    "loser": "Dave Herman",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Paul Donahoe",
    "loser_school": "Nebraska",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "Kyle Ott",
    "loser_school": "Illinois",
    "result": "Fall 2:57"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Mike Sees",
    "loser_school": "Bloomsburg",
    "result": "Fall 2:20"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Darrel Vasquez",
    "loser_school": "Cal Poly",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Jason Borrelli",
    "loser_school": "Central Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Matt Keller",
    "winner_school": "Chattanooga",
    "loser": "Jake Strayer",
    "loser_school": "Penn State",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Scott Jorgenson",
    "loser_school": "Boise State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "C.J. Ettelson",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Alex Tsirtsis",
    "winner_school": "Iowa",
    "loser": "Kevin Artis",
    "loser_school": "UNC Greensboro",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Brandon Rader",
    "winner_school": "West Virginia",
    "loser": "Ronald Tarquinio",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "David Hoffman",
    "winner_school": "Virginia Tech",
    "loser": "Josh Churella",
    "loser_school": "Michigan",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Matt Dragon",
    "loser_school": "Penn",
    "result": "TF 17-2 5:14"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Patrick Simpson",
    "loser_school": "Army",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "John Cox",
    "loser_school": "Navy",
    "result": "Dec 13-11"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Mark DiSalvo",
    "winner_school": "Central Michigan",
    "loser": "Tyler Sherfey",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Alex Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Craig Henning",
    "winner_school": "Wisconsin",
    "loser": "Andrew Flanagan",
    "loser_school": "Harvard",
    "result": "Fall 4:07"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Tony Hook",
    "loser_school": "Oregon State",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Michael Chandler",
    "loser_school": "Missouri",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Deonte Penn",
    "winner_school": "Edinboro",
    "loser": "Patrick Pitsch",
    "loser_school": "Arizona State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Dan Thompson",
    "winner_school": "The Citadel",
    "loser": "Chris Vondruska",
    "loser_school": "Hofstra",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Matt Pell",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Eric Luedke",
    "winner_school": "Iowa",
    "loser": "John Galloway",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Brandon Mason",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "James Yonushonis",
    "winner_school": "Penn State",
    "loser": "Kenneth Cook",
    "loser_school": "UC Davis",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Travis Frick",
    "winner_school": "Lehigh",
    "loser": "Kenny Robertson",
    "loser_school": "Eastern Illinois",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "Matt Palmer",
    "loser_school": "Columbia",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Alex Clemsen",
    "loser_school": "Edinboro",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "C.B. Dollaway",
    "winner_school": "Arizona State",
    "loser": "Paul Bradley",
    "loser_school": "Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Eric Bradley",
    "winner_school": "Penn State",
    "loser": "Kurt Backes",
    "loser_school": "Iowa State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Alex Camargo",
    "loser_school": "Kent State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Casey Phelps",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Kyle Cerminara",
    "loser_school": "Buffalo",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Nathan Moore",
    "loser_school": "Purdue",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Dale Herbst",
    "loser_school": "Wisconsin",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Bode Ogunwole",
    "winner_school": "Harvard",
    "loser": "Tanner Garrett",
    "loser_school": "Navy",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Jake Hager",
    "winner_school": "Oklahoma",
    "loser": "Tyler Shovlin",
    "loser_school": "UNC Greensboro",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Mike Faust",
    "winner_school": "Virginia Tech",
    "loser": "Joel Edwards",
    "loser_school": "Penn State",
    "result": "Dec 3-3 TB"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Kirk Nail",
    "winner_school": "Ohio State",
    "loser": "Spencer Nadolsky",
    "loser_school": "North Carolina",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Nick Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Sam Hazewinkel",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Tanner Gardner",
    "loser_school": "Stanford",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "John Velez",
    "loser_school": "Northwestern",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Chris Fleeger",
    "winner_school": "Purdue",
    "loser": "Shawn Bunch",
    "loser_school": "Edinboro",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Nathan Morgan",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Tyler McCormick",
    "loser_school": "Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Matt Keller",
    "loser_school": "Chattanooga",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Andy Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Teyon Ware",
    "winner_school": "Oklahoma",
    "loser": "Cory Cooperman",
    "loser_school": "Lehigh",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Alex Tsirtsis",
    "loser_school": "Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Brandon Rader",
    "winner_school": "West Virginia",
    "loser": "David Hoffman",
    "loser_school": "Virginia Tech",
    "result": "Dec 11-7"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Matt Storniolo",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Ty Eustice",
    "winner_school": "Iowa",
    "loser": "Zack Esposito",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Gregor Gillespie",
    "loser_school": "Edinboro",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Mark DiSalvo",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Ben Cherrington",
    "winner_school": "Boise State",
    "loser": "Joe Johnston",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Brian Stith",
    "winner_school": "Arizona State",
    "loser": "Derek Zinck",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Craig Henning",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Brandon Becker",
    "loser_school": "Indiana",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Ryan Churella",
    "winner_school": "Michigan",
    "loser": "Joey Bracamonte",
    "loser_school": "Oregon",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Muzaffar Abdurakhmanov",
    "loser_school": "American",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Deonte Penn",
    "winner_school": "Edinboro",
    "loser": "Dan Thompson",
    "loser_school": "The Citadel",
    "result": "Fall 1:37"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Travis Paulson",
    "winner_school": "Iowa State",
    "loser": "Eric Luedke",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Mike Patrovich",
    "loser_school": "Hofstra",
    "result": "TF 21-6 7:00"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Mark Perry",
    "loser_school": "Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "James Yonushonis",
    "loser_school": "Penn State",
    "result": "Fall 0:49"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Travis Frick",
    "winner_school": "Lehigh",
    "loser": "Jacob Klein",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Shane Webster",
    "winner_school": "Oregon",
    "loser": "Josh Glenn",
    "loser_school": "American",
    "result": "Dec 8-7"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Pete Friedl",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "C.B. Dollaway",
    "winner_school": "Arizona State",
    "loser": "Ben Wissel",
    "loser_school": "Purdue",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Joe Mazzurco",
    "winner_school": "Cornell",
    "loser": "Eric Bradley",
    "loser_school": "Penn State",
    "result": "Dec 11-4"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Chris Weidman",
    "loser_school": "Hofstra",
    "result": "Fall 1:08"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Jerry Rinaldi",
    "loser_school": "Cornell",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Wynn Michalak",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Ryan Bader",
    "loser_school": "Arizona State",
    "result": "Dec 9-4"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Cain Velasquez",
    "loser_school": "Arizona State",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Steve Mocco",
    "winner_school": "Oklahoma State",
    "loser": "Greg Wagner",
    "loser_school": "Michigan",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Bode Ogunwole",
    "winner_school": "Harvard",
    "loser": "Jake Hager",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Mike Faust",
    "winner_school": "Virginia Tech",
    "loser": "Kirk Nail",
    "loser_school": "Ohio State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Nick Simmons",
    "winner_school": "Michigan State",
    "loser": "Coleman Scott",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Chad Mendes",
    "loser_school": "Cal Poly",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Tom Clum",
    "loser_school": "Wisconsin",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Nathan Morgan",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Andy Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Brandon Rader",
    "loser_school": "West Virginia",
    "result": "MD 12-4"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Matt Storniolo",
    "winner_school": "Oklahoma",
    "loser": "Jon Masa",
    "loser_school": "Hofstra",
    "result": "Fall 6:21"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Eric Tannenbaum",
    "loser_school": "Michigan",
    "result": "MD 9-1"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Joe Johnston",
    "loser_school": "Iowa",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Trent Paulson",
    "winner_school": "Iowa State",
    "loser": "Derek Zinck",
    "loser_school": "Lehigh",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Deonte Penn",
    "winner_school": "Edinboro",
    "loser": "Joey Bracamonte",
    "loser_school": "Oregon",
    "result": "Dec 15-10"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Muzaffar Abdurakhmanov",
    "winner_school": "American",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Mike Patrovich",
    "winner_school": "Hofstra",
    "loser": "Matt Herrington",
    "loser_school": "Penn",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "Fall 3:15"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "C.B. Dollaway",
    "loser_school": "Arizona State",
    "result": "Fall 2:44"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Joe Mazzurco",
    "loser_school": "Cornell",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Chris Weidman",
    "loser_school": "Hofstra",
    "result": "DEF"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Jerry Rinaldi",
    "winner_school": "Cornell",
    "loser": "Joel Flaggert",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Cain Velasquez",
    "winner_school": "Arizona State",
    "loser": "Bode Ogunwole",
    "loser_school": "Harvard",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Mike Faust",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-0"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Sam Hazewinkel",
    "winner_school": "Oklahoma",
    "loser": "Nick Simmons",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Chad Mendes",
    "loser_school": "Cal Poly",
    "result": "Fall 0:58"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "John Velez",
    "winner_school": "Northwestern",
    "loser": "Tanner Gardner",
    "loser_school": "Stanford",
    "result": "Dec 8-5"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Shawn Bunch",
    "winner_school": "Edinboro",
    "loser": "Mack Reiter",
    "loser_school": "Minnesota",
    "result": "Dec 8-2"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Tom Clum",
    "winner_school": "Wisconsin",
    "loser": "Nathan Morgan",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-6"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Matt Keller",
    "loser_school": "Chattanooga",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Cory Cooperman",
    "winner_school": "Lehigh",
    "loser": "Ryan Lang",
    "loser_school": "Northwestern",
    "result": "MD 9-0"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Andy Simmons",
    "winner_school": "Michigan State",
    "loser": "Brandon Rader",
    "loser_school": "West Virginia",
    "result": "MD 11-2"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Alex Tsirtsis",
    "winner_school": "Iowa",
    "loser": "David Hoffman",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Zack Esposito",
    "winner_school": "Oklahoma State",
    "loser": "Matt Storniolo",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Jon Masa",
    "winner_school": "Hofstra",
    "loser": "Eric Tannenbaum",
    "loser_school": "Michigan",
    "result": "MD 9-0"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Mark DiSalvo",
    "loser_school": "Central Michigan",
    "result": "Fall 6:22"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Dustin Manotti",
    "winner_school": "Cornell",
    "loser": "Trent Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Derek Zinck",
    "winner_school": "Lehigh",
    "loser": "Joe Johnston",
    "loser_school": "Iowa",
    "result": "Dec 9-8"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Craig Henning",
    "loser_school": "Wisconsin",
    "result": "Dec 9-4"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Muzaffar Abdurakhmanov",
    "winner_school": "American",
    "loser": "Deonte Penn",
    "loser_school": "Edinboro",
    "result": "M FOR"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Joey Bracamonte",
    "winner_school": "Oregon",
    "loser": "Travis Paulson",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Dan Thompson",
    "winner_school": "The Citadel",
    "loser": "Eric Luedke",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Mike Patrovich",
    "loser_school": "Hofstra",
    "result": "MD 11-2"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Matt Herrington",
    "winner_school": "Penn",
    "loser": "Travis Frick",
    "loser_school": "Lehigh",
    "result": "Fall 6:44"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Jacob Klein",
    "winner_school": "Nebraska",
    "loser": "James Yonushonis",
    "loser_school": "Penn State",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Pete Friedl",
    "winner_school": "Illinois",
    "loser": "Josh Glenn",
    "loser_school": "American",
    "result": "MD 13-2"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "C.B. Dollaway",
    "winner_school": "Arizona State",
    "loser": "Joe Mazzurco",
    "loser_school": "Cornell",
    "result": "Dec 6-1"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Ben Wissel",
    "winner_school": "Purdue",
    "loser": "Eric Bradley",
    "loser_school": "Penn State",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "B.J. Padden",
    "winner_school": "Nebraska",
    "loser": "Jerry Rinaldi",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Chris Weidman",
    "loser_school": "Hofstra",
    "result": "M FOR"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Ryan Bader",
    "winner_school": "Arizona State",
    "loser": "Wynn Michalak",
    "loser_school": "Central Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Greg Wagner",
    "winner_school": "Michigan",
    "loser": "Cain Velasquez",
    "loser_school": "Arizona State",
    "result": "MD 9-1"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Mike Faust",
    "winner_school": "Virginia Tech",
    "loser": "Bode Ogunwole",
    "loser_school": "Harvard",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Jake Hager",
    "winner_school": "Oklahoma",
    "loser": "Kirk Nail",
    "loser_school": "Ohio State",
    "result": "Fall 2:28"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Joe Dubuque",
    "winner_school": "Indiana",
    "loser": "Troy Nickerson",
    "loser_school": "Cornell",
    "result": "Dec 8-3"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Matt Valenti",
    "winner_school": "Penn",
    "loser": "Chris Fleeger",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Nate Gallick",
    "winner_school": "Iowa State",
    "loser": "Teyon Ware",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Ty Eustice",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Ben Cherrington",
    "winner_school": "Boise State",
    "loser": "Brian Stith",
    "loser_school": "Arizona State",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Johny Hendricks",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Churella",
    "loser_school": "Michigan",
    "result": "Dec 9-8"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Ben Askren",
    "winner_school": "Missouri",
    "loser": "Jake Herbert",
    "loser_school": "Northwestern",
    "result": "MD 14-2"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Shane Webster",
    "winner_school": "Oregon",
    "loser": "Roger Kish",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Jake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Phil Davis",
    "loser_school": "Penn State",
    "result": "Dec 10-3"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Cole Konrad",
    "winner_school": "Minnesota",
    "loser": "Steve Mocco",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1001,
    "winner": "Austin Devoe",
    "winner_school": "Missouri",
    "loser": "Eric Stevenson",
    "loser_school": "Oregon State",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 1002,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Mike Mormile",
    "loser_school": "Cornell",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 1003,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Josh Wooton",
    "loser_school": "Northern Illinois",
    "result": "MD 16-5"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 1004,
    "winner": "Carter Downing",
    "winner_school": "Wyoming",
    "loser": "Chris Renninger",
    "loser_school": "Drexel",
    "result": "MD 8-0"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 1008,
    "winner": "Alex Camargo",
    "winner_school": "Kent State",
    "loser": "Dustin Wiles",
    "loser_school": "Penn",
    "result": "Dec 9-4"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 1009,
    "winner": "Willie Breyer",
    "winner_school": "Michigan",
    "loser": "Mike Heist",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 1171,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Eric Stevenson",
    "loser_school": "Oregon State",
    "result": "Fall 0:37"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 1172,
    "winner": "Mike Mormile",
    "winner_school": "Cornell",
    "loser": "Jesse Sundell",
    "loser_school": "Iowa State",
    "result": "Dec 12-9"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 1173,
    "winner": "Dominick Moyer",
    "winner_school": "Nebraska",
    "loser": "Steve Adamcsik",
    "loser_school": "Rutgers",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 1174,
    "winner": "Aaron Martin",
    "winner_school": "Chattanooga",
    "loser": "Joe Caramanica",
    "loser_school": "NC State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 1178,
    "winner": "Mike Tamillow",
    "winner_school": "Northwestern",
    "loser": "Dustin Wiles",
    "loser_school": "Penn",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 1179,
    "winner": "Dan Erekson",
    "winner_school": "Iowa",
    "loser": "Andrew Anderson",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:48"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 2003,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Steve Adamcsik",
    "loser_school": "Rutgers",
    "result": "Dec 6-1"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 2004,
    "winner": "Josh Medina",
    "winner_school": "Lock Haven",
    "loser": "Daniel Elliott",
    "loser_school": "Gardner-Webb",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 2009,
    "winner": "Daren Burns",
    "winner_school": "UNC Greensboro",
    "loser": "Dan Erekson",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 2173,
    "winner": "Casio Pero",
    "winner_school": "Illinois",
    "loser": "Michael Keefe",
    "loser_school": "Chattanooga",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 2174,
    "winner": "Daniel Elliott",
    "winner_school": "Gardner-Webb",
    "loser": "Mike Kessler",
    "loser_school": "Rider",
    "result": "Dec 11-9 SV"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 2179,
    "winner": "Matt Monteiro",
    "winner_school": "Cal Poly",
    "loser": "Mike Heist",
    "loser_school": "Pittsburgh",
    "result": "TF 15-0 3:18"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3003,
    "winner": "Michael Keefe",
    "winner_school": "Chattanooga",
    "loser": "Dewitt Driscoll",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 3173,
    "winner": "Josh Wooton",
    "winner_school": "Northern Illinois",
    "loser": "Chris Davis",
    "loser_school": "Sacred Heart",
    "result": "MD 22-9"
  }
];
