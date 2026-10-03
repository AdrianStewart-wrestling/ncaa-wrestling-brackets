// 2008 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 2008 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results2008-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Brandon Kinney",
    "loser_school": "Columbia",
    "result": "Dec 12-5"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Dan Mitcheff",
    "winner_school": "Kent State",
    "loser": "Jeff Hedges",
    "loser_school": "UNC Greensboro",
    "result": "Dec 6-2"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Kurt Kinser",
    "winner_school": "Indiana",
    "loser": "Matt Cathell",
    "loser_school": "Delaware State",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "A.J. Kissel",
    "winner_school": "Purdue",
    "loser": "Manuel Schubert",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Richard Starks",
    "winner_school": "Army",
    "loser": "Justin Bronson",
    "loser_school": "Minnesota",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Bubba Gritter",
    "winner_school": "Central Michigan",
    "loser": "Justin Dobies",
    "loser_school": "North Carolina",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Anthony Robles",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Eric Hoffman",
    "winner_school": "North Dakota State",
    "loser": "Joey Fio",
    "loser_school": "Oklahoma",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Rollie Peterkin",
    "winner_school": "Penn",
    "loser": "Jon Bittinger",
    "loser_school": "Duquesne",
    "result": "TF 17-1 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Mike Rodriguez",
    "loser_school": "Cornell",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Charlie Falck",
    "winner_school": "Iowa",
    "loser": "Fernando Martinez",
    "loser_school": "Army",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Mark McKnight",
    "winner_school": "Penn State",
    "loser": "Tyler Shinn",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Anthony Mustari",
    "winner_school": "Northern Colorado",
    "loser": "Jasen Borshoff",
    "loser_school": "American",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Steve Mytych",
    "loser_school": "Drexel",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Nikko Triggas",
    "loser_school": "Ohio State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Brandon Zoetewey",
    "winner_school": "CSU Bakersfield",
    "loser": "Caleb Flores",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Dave Tomasette",
    "winner_school": "Hofstra",
    "loser": "Javier Maldonado",
    "loser_school": "Chattanooga",
    "result": "MD 15-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Gabe Flores",
    "winner_school": "Illinois",
    "loser": "Nic Bedelyon",
    "loser_school": "Kent State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Mike Sees",
    "winner_school": "Bloomsburg",
    "loser": "Collin Cudd",
    "loser_school": "Wisconsin",
    "result": "MD 21-10"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Eric Morrill",
    "loser_school": "Edinboro",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Luke Smith",
    "winner_school": "Central Michigan",
    "loser": "Tyler Clark",
    "loser_school": "Iowa State",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Marcos Orozco",
    "loser_school": "UC Davis",
    "result": "Fall 1:17"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "Josh Baldridge",
    "loser_school": "Northern Iowa",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Rick Deubel",
    "loser_school": "Edinboro",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Conor Beebe",
    "winner_school": "Central Michigan",
    "loser": "Zach Tanelli",
    "loser_school": "Wisconsin",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Jeff Schell",
    "loser_school": "Brown",
    "result": "Fall 2:13"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Nick Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Steve Bell",
    "loser_school": "Maryland",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Cory Fish",
    "winner_school": "Boise State",
    "loser": "Andrae Hernandez",
    "loser_school": "Indiana",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Kenny Jordan",
    "winner_school": "Nebraska",
    "loser": "Seth Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Joey Slaton",
    "winner_school": "Iowa",
    "loser": "Dan Mitcheff",
    "loser_school": "Kent State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Jim Conroy",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Ryan Dunn",
    "winner_school": "Oregon",
    "loser": "Billy Ashnault",
    "loser_school": "Lock Haven",
    "result": "Dec 12-11"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Kyle Hutter",
    "loser_school": "Old Dominion",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Steve Hromada",
    "loser_school": "Chattanooga",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Terreyl Williams",
    "loser_school": "Appalachian State",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Patrick Castillo",
    "winner_school": "Northern Illinois",
    "loser": "Christian Smith",
    "loser_school": "Liberty",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Tyler McCormick",
    "winner_school": "Missouri",
    "loser": "Tyler Dillashaw",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Dave Marble",
    "loser_school": "Bucknell",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "Steve Adamcsik",
    "loser_school": "Rutgers",
    "result": "Fall 0:34"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Ryan Williams",
    "winner_school": "Old Dominion",
    "loser": "Drew Lashaway",
    "loser_school": "Kent State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Chris Drouin",
    "loser_school": "Arizona State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Dan Leclere",
    "loser_school": "Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Manny Rivera",
    "winner_school": "Minnesota",
    "loser": "Torsten Gillespie",
    "loser_school": "Edinboro",
    "result": "TF 16-0 5:04"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Garrett Scott",
    "winner_school": "Penn State",
    "loser": "Carter Downing",
    "loser_school": "Wyoming",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Adam Frey",
    "winner_school": "Cornell",
    "loser": "C.J. Ettelson",
    "loser_school": "Northern Iowa",
    "result": "TF 17-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Patrick McLemore",
    "loser_school": "Northern Illinois",
    "result": "TF 15-0 5:04"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Kellan Russell",
    "winner_school": "Michigan",
    "loser": "Richard Rappo",
    "loser_school": "Penn",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Levi Jones",
    "winner_school": "Boise State",
    "loser": "Germane Lindsey",
    "loser_school": "Ohio",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Drew Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Keith Sulzer",
    "loser_school": "Northwestern",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Nexi Delgado",
    "loser_school": "UC Davis",
    "result": "Dec 13-10"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Corey Jantzen",
    "loser_school": "Harvard",
    "result": "Fall 6:01"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Matt Kyler",
    "winner_school": "Army",
    "loser": "Cody Cleveland",
    "loser_school": "Chattanooga",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Jacob Kriegbaum",
    "winner_school": "Air Force",
    "loser": "Jon Kohler",
    "loser_school": "Maryland",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Tim Harner",
    "loser_school": "Liberty",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Will Rowe",
    "loser_school": "Oklahoma",
    "result": "Fall 1:49"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Kurt Kinser",
    "winner_school": "Indiana",
    "loser": "Don Fisch",
    "loser_school": "Rider",
    "result": "Fall 1:32"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Kyle Larson",
    "loser_school": "Oregon State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "David Jauregui",
    "loser_school": "West Virginia",
    "result": "TF 16-0 5:17"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Ryan Adams",
    "loser_school": "North Dakota State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Morgan Atkinson",
    "winner_school": "Cal State Fullerton",
    "loser": "Nick Pickerell",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Ed McCray",
    "winner_school": "Gardner-Webb",
    "loser": "Lucas Espericueta",
    "loser_school": "Stanford",
    "result": "Fall 1:19"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Cesar Grajales",
    "loser_school": "Penn",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Joseph Knox",
    "loser_school": "Chattanooga",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Daryl Cocozzo",
    "winner_school": "Edinboro",
    "loser": "Eric Medina",
    "loser_school": "Maryland",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Ryan Lang",
    "winner_school": "Northwestern",
    "loser": "Matt Fittery",
    "loser_school": "Lock Haven",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Bubba Jenkins",
    "winner_school": "Penn State",
    "loser": "Bryce Saddoris",
    "loser_school": "Navy",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Michael Roberts",
    "loser_school": "Boston University",
    "result": "Fall 2:28"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Brandon Carter",
    "winner_school": "Central Michigan",
    "loser": "Scott Ervin",
    "loser_school": "Appalachian State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Mitch Mueller",
    "winner_school": "Iowa State",
    "loser": "Anthony Constantino",
    "loser_school": "Columbia",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Adam Hall",
    "loser_school": "Boise State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Spencer Manley",
    "loser_school": "Navy",
    "result": "TF 17-0 3:30"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Brian Letters",
    "winner_school": "Maryland",
    "loser": "Chase Pami",
    "loser_school": "Cal Poly",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Ryan Hluschak",
    "loser_school": "Drexel",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "C.P. Schlatter",
    "winner_school": "Minnesota",
    "loser": "Tyson Reiner",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Josh Zupancic",
    "winner_school": "Stanford",
    "loser": "Jeff Marsh",
    "loser_school": "Michigan",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Zac Fryling",
    "loser_school": "West Virginia",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "William Garvin",
    "loser_school": "Chattanooga",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Steve Brown",
    "winner_school": "Central Michigan",
    "loser": "Christian Snook",
    "loser_school": "Army",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Tyler Sherfey",
    "winner_school": "Boise State",
    "loser": "Chris Stout",
    "loser_school": "American",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Ryan Morningstar",
    "loser_school": "Iowa",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Dave Nakasone",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Newly McSpadden",
    "winner_school": "Oklahoma State",
    "loser": "Jarrett Hostetter",
    "loser_school": "Millersville",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Ethan Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Chad Porter",
    "winner_school": "Liberty",
    "loser": "Kurt Swartz",
    "loser_school": "Boise State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Trevor Stewart",
    "winner_school": "Central Michigan",
    "loser": "Roger Smith-Bergsrud",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Matt Epperly",
    "loser_school": "Virginia Tech",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Ryan Patrovich",
    "loser_school": "Hofstra",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Dave Rella",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Donnie Jones",
    "winner_school": "West Virginia",
    "loser": "Daniel Atondo",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Chris Brown",
    "loser_school": "Old Dominion",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Luke Manuel",
    "loser_school": "Purdue",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Jake Donar",
    "loser_school": "Wisconsin",
    "result": "Fall 5:08"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Kurt Gross",
    "winner_school": "Kent State",
    "loser": "Matt Coughlin",
    "loser_school": "Indiana",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Andrew Rendos",
    "loser_school": "Bucknell",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Zack Shanaman",
    "winner_school": "Penn",
    "loser": "Jake Dieffenbach",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Keegan Mueller",
    "loser_school": "North Carolina",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Stephen Crozier",
    "winner_school": "Air Force",
    "loser": "Byron Sigmon",
    "loser_school": "UNC Greensboro",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Marcus Effner",
    "loser_school": "Cleveland State",
    "result": "Fall 2:00"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Keith Gavin",
    "winner_school": "Pittsburgh",
    "loser": "Alex Dolly",
    "loser_school": "Northern Iowa",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Chance Litton",
    "winner_school": "West Virginia",
    "loser": "Shane Riccio",
    "loser_school": "Bucknell",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Scott Giffin",
    "loser_school": "Penn",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Nathan Lee",
    "winner_school": "Boise State",
    "loser": "Gabriel Dretsch",
    "loser_school": "Minnesota",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Tyler Bernacchi",
    "loser_school": "UC Davis",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Ryan Duke Burk",
    "winner_school": "Northern Illinois",
    "loser": "Nick Hayes",
    "loser_school": "Northwestern",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Phil Moricone",
    "loser_school": "Edinboro",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Lloyd Rogers",
    "loser_school": "Chattanooga",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Brandon Browne",
    "winner_school": "Nebraska",
    "loser": "Chris Henrich",
    "loser_school": "Virginia",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Aaron Scott",
    "winner_school": "Iowa State",
    "loser": "Randy Oates",
    "loser_school": "George Mason",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Aaron Kelly",
    "loser_school": "Liberty",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Alton Lucas",
    "winner_school": "Hofstra",
    "loser": "Trevor Perry",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Tyler French",
    "loser_school": "Air Force",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Mike Letts",
    "winner_school": "Maryland",
    "loser": "Danny Clum",
    "loser_school": "Wisconsin",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Luke Feist",
    "winner_school": "Stanford",
    "loser": "Alex Caruso",
    "loser_school": "Lehigh",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Joshua Patterson",
    "loser_school": "Binghamton",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Lior Zamir",
    "loser_school": "Penn",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Zack Giesen",
    "winner_school": "Stanford",
    "loser": "Chris Dagget",
    "loser_school": "Liberty",
    "result": "Fall 6:27"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "A.J. Kissel",
    "winner_school": "Purdue",
    "loser": "Brent Chriswell",
    "loser_school": "Arizona State",
    "result": "Fall 4:44"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "Josh Edmondson",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Doug Umbehauer",
    "winner_school": "Rider",
    "loser": "Joshua Weitzel",
    "loser_school": "Oklahoma",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Jack Jensen",
    "winner_school": "Oklahoma State",
    "loser": "Phil Bomberger",
    "loser_school": "Penn State",
    "result": "Fall 3:36"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Dave Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Austin Trotman",
    "loser_school": "Appalachian State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Christian Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Scott Ferguson",
    "loser_school": "Army",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Kurt Brenner",
    "loser_school": "West Virginia",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Vince Jones",
    "winner_school": "Nebraska",
    "loser": "Andy O'Loughlin",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Rocco Caponi",
    "winner_school": "Virginia",
    "loser": "Chris Honeycutt",
    "loser_school": "Edinboro",
    "result": "Fall 4:04"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Matthew Gevelinger",
    "loser_school": "Brown",
    "result": "TF 23-7 5:30"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Charlie Pienaar",
    "loser_school": "Eastern Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Jacob Devlin",
    "loser_school": "Air Force",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Ryan Goodman",
    "winner_school": "NC State",
    "loser": "Jesse Strawn",
    "loser_school": "Old Dominion",
    "result": "Dec 12-10"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Ian Murphy",
    "loser_school": "Cal State Fullerton",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Ben Hepburn",
    "loser_school": "Lock Haven",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Kyle Bressler",
    "winner_school": "Oregon State",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Patrick Bond",
    "winner_school": "Illinois",
    "loser": "Thomas Shovlin",
    "loser_school": "Penn",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Richard Starks",
    "loser_school": "Army",
    "result": "TF 17-0 4:07"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Max Askren",
    "winner_school": "Missouri",
    "loser": "Joe Fagiano",
    "loser_school": "Indiana",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Darren Burns",
    "winner_school": "UNC Greensboro",
    "loser": "Joe Rovelli",
    "loser_school": "Hofstra",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Cayle Byers",
    "winner_school": "George Mason",
    "loser": "Matt Koz",
    "loser_school": "Chattanooga",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "John Drake",
    "loser_school": "Cal State Fullerton",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Mike Tamillow",
    "winner_school": "Northwestern",
    "loser": "Jason Trulson",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "David Bertolino",
    "winner_school": "Iowa State",
    "loser": "Pat Bradshaw",
    "loser_school": "Edinboro",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "T.J. Morrison",
    "winner_school": "Rider",
    "loser": "Lamar Brown",
    "loser_school": "Rutgers",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Dallas Herbst",
    "winner_school": "Wisconsin",
    "loser": "Jacob Bryce",
    "loser_school": "North Dakota State",
    "result": "Fall 0:25"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Jared Villers",
    "loser_school": "West Virginia",
    "result": "Fall 5:39"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Joel Flaggert",
    "winner_school": "Oklahoma",
    "loser": "Matt Casperson",
    "loser_school": "Boise State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Logan Brown",
    "winner_school": "Purdue",
    "loser": "Andrew Anderson",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Riley Orozco",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 1:47"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Ryan Flores",
    "loser_school": "Columbia",
    "result": "TF 17-0 4:27"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Josh Wine",
    "winner_school": "VMI",
    "loser": "Charlie Alexander",
    "loser_school": "Oregon",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Jermail Porter",
    "winner_school": "Kent State",
    "loser": "Benjamin Berhow",
    "loser_school": "Minnesota",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Bubba Gritter",
    "winner_school": "Central Michigan",
    "loser": "Nathan Thobaden",
    "loser_school": "Army",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Trey McLean",
    "loser_school": "Penn",
    "result": "Fall 2:59"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "John Wise",
    "loser_school": "Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Nate Everhart",
    "winner_school": "Indiana",
    "loser": "Ed Bordas",
    "loser_school": "Rider",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Matt Fields",
    "winner_school": "Iowa",
    "loser": "Reece Hopkin",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Ed Prendergast",
    "winner_school": "Navy",
    "loser": "Jon May",
    "loser_school": "Nebraska",
    "result": "Fall 5:19"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Dustin Rogers",
    "winner_school": "West Virginia",
    "loser": "Andy Totusek",
    "loser_school": "Old Dominion",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Mike Spaid",
    "winner_school": "Bloomsburg",
    "loser": "Levon Mock",
    "loser_school": "Brown",
    "result": "Fall 2:06"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Kyle Massey",
    "winner_school": "Wisconsin",
    "loser": "Rashad Goff",
    "loser_school": "Cleveland State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Mitch Monteiro",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Zach Sheaffer",
    "winner_school": "Pittsburgh",
    "loser": "Nick Smith",
    "loser_school": "Boise State",
    "result": "Fall 4:11"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Joe Fendone",
    "winner_school": "Edinboro",
    "loser": "Travis Gardner",
    "loser_school": "Oregon State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Patrick Walker",
    "loser_school": "Liberty",
    "result": "Fall 0:27"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Joey Fio",
    "winner_school": "Oklahoma",
    "loser": "Ross Gitomer",
    "loser_school": "Virginia",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Jeff Hedges",
    "winner_school": "UNC Greensboro",
    "loser": "Jim Conroy",
    "loser_school": "Pittsburgh",
    "result": "MD 14-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "Matt Cathell",
    "winner_school": "Delaware State",
    "loser": "Anthony Constantino",
    "loser_school": "Columbia",
    "result": "MD 14-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Jacob Devlin",
    "winner_school": "Air Force",
    "loser": "Manuel Schubert",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Jared Villers",
    "winner_school": "West Virginia",
    "loser": "Justin Bronson",
    "loser_school": "Minnesota",
    "result": "MD 12-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Justin Dobies",
    "winner_school": "North Carolina",
    "loser": "Mitch Monteiro",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Eric Hoffman",
    "loser_school": "North Dakota State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Rollie Peterkin",
    "loser_school": "Penn",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Charlie Falck",
    "winner_school": "Iowa",
    "loser": "Mark McKnight",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Anthony Mustari",
    "loser_school": "Northern Colorado",
    "result": "TF 16-0 3:54"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Brandon Zoetewey",
    "loser_school": "CSU Bakersfield",
    "result": "TF 21-6 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Gabe Flores",
    "winner_school": "Illinois",
    "loser": "Dave Tomasette",
    "loser_school": "Hofstra",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Mike Sees",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Marcos Orozco",
    "winner_school": "UC Davis",
    "loser": "Tyler Clark",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Eric Morrill",
    "winner_school": "Edinboro",
    "loser": "Collin Cudd",
    "loser_school": "Wisconsin",
    "result": "Fall 6:38"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Javier Maldonado",
    "winner_school": "Chattanooga",
    "loser": "Nic Bedelyon",
    "loser_school": "Kent State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Nikko Triggas",
    "winner_school": "Ohio State",
    "loser": "Caleb Flores",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:24"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Steve Mytych",
    "winner_school": "Drexel",
    "loser": "Jasen Borshoff",
    "loser_school": "American",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Tyler Shinn",
    "winner_school": "Oklahoma State",
    "loser": "Fernando Martinez",
    "loser_school": "Army",
    "result": "Fall 6:45"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Mike Rodriguez",
    "winner_school": "Cornell",
    "loser": "Jon Bittinger",
    "loser_school": "Duquesne",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Joey Fio",
    "loser_school": "Oklahoma",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "Reece Humphrey",
    "loser_school": "Ohio State",
    "result": "Dec 5-5 TB"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Conor Beebe",
    "loser_school": "Central Michigan",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Nick Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Cory Fish",
    "loser_school": "Boise State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Joey Slaton",
    "winner_school": "Iowa",
    "loser": "Kenny Jordan",
    "loser_school": "Nebraska",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Dunn",
    "loser_school": "Oregon",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Lou Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Patrick Castillo",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Tyler McCormick",
    "loser_school": "Missouri",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Dave Marble",
    "winner_school": "Bucknell",
    "loser": "Tyler Dillashaw",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Terreyl Williams",
    "winner_school": "Appalachian State",
    "loser": "Christian Smith",
    "loser_school": "Liberty",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Kyle Hutter",
    "winner_school": "Old Dominion",
    "loser": "Steve Hromada",
    "loser_school": "Chattanooga",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Jeff Hedges",
    "winner_school": "UNC Greensboro",
    "loser": "Billy Ashnault",
    "loser_school": "Lock Haven",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Seth Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Dan Mitcheff",
    "loser_school": "Kent State",
    "result": "Fall 4:54"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Andrae Hernandez",
    "loser_school": "Indiana",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Jeff Schell",
    "loser_school": "Brown",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Josh Baldridge",
    "winner_school": "Northern Iowa",
    "loser": "Rick Deubel",
    "loser_school": "Edinboro",
    "result": "Fall 4:23"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "Ryan Williams",
    "loser_school": "Old Dominion",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Zack Bailey",
    "loser_school": "Oklahoma",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Manny Rivera",
    "winner_school": "Minnesota",
    "loser": "Garrett Scott",
    "loser_school": "Penn State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Adam Frey",
    "loser_school": "Cornell",
    "result": "Fall 1:39"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Kellan Russell",
    "winner_school": "Michigan",
    "loser": "Levi Jones",
    "loser_school": "Boise State",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Drew Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Matt Kyler",
    "winner_school": "Army",
    "loser": "Kyle Ruschell",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Jacob Kriegbaum",
    "loser_school": "Air Force",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Drew Lashaway",
    "winner_school": "Kent State",
    "loser": "Steve Adamcsik",
    "loser_school": "Rutgers",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Chris Drouin",
    "winner_school": "Arizona State",
    "loser": "Dan Leclere",
    "loser_school": "Iowa",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Carter Downing",
    "winner_school": "Wyoming",
    "loser": "Torsten Gillespie",
    "loser_school": "Edinboro",
    "result": "MD 15-7"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Patrick McLemore",
    "winner_school": "Northern Illinois",
    "loser": "C.J. Ettelson",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Germane Lindsey",
    "winner_school": "Ohio",
    "loser": "Richard Rappo",
    "loser_school": "Penn",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Keith Sulzer",
    "winner_school": "Northwestern",
    "loser": "Nexi Delgado",
    "loser_school": "UC Davis",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Cody Cleveland",
    "winner_school": "Chattanooga",
    "loser": "Corey Jantzen",
    "loser_school": "Harvard",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Tim Harner",
    "winner_school": "Liberty",
    "loser": "Jon Kohler",
    "loser_school": "Maryland",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Kurt Kinser",
    "loser_school": "Indiana",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Jake Patacsil",
    "loser_school": "Purdue",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Morgan Atkinson",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Ed McCray",
    "loser_school": "Gardner-Webb",
    "result": "TF 21-5 5:00"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Daryl Cocozzo",
    "loser_school": "Edinboro",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Bubba Jenkins",
    "winner_school": "Penn State",
    "loser": "Ryan Lang",
    "loser_school": "Northwestern",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Brandon Carter",
    "loser_school": "Central Michigan",
    "result": "Fall 0:42"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Mitch Mueller",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Matt Cathell",
    "loser_school": "Delaware State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Scott Ervin",
    "winner_school": "Appalachian State",
    "loser": "Michael Roberts",
    "loser_school": "Boston University",
    "result": "MD 14-0"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Trevor Chinn",
    "winner_school": "Lehigh",
    "loser": "Matt Fittery",
    "loser_school": "Lock Haven",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Eric Medina",
    "winner_school": "Maryland",
    "loser": "Joseph Knox",
    "loser_school": "Chattanooga",
    "result": "Fall 2:34"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Cesar Grajales",
    "winner_school": "Penn",
    "loser": "Lucas Espericueta",
    "loser_school": "Stanford",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Josh Wagner",
    "winner_school": "Missouri",
    "loser": "Ryan Adams",
    "loser_school": "North Dakota State",
    "result": "Fall 1:00"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "David Jauregui",
    "winner_school": "West Virginia",
    "loser": "Kyle Larson",
    "loser_school": "Oregon State",
    "result": "Dec 13-12"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Will Rowe",
    "winner_school": "Oklahoma",
    "loser": "Kyle Fried",
    "loser_school": "Binghamton",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Jason Johnstone",
    "loser_school": "Ohio State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Brian Letters",
    "loser_school": "Maryland",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Josh Zupancic",
    "winner_school": "Stanford",
    "loser": "C.P. Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Jonny Bonilla-Bowman",
    "winner_school": "Hofstra",
    "loser": "Brandon Becker",
    "loser_school": "Indiana",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Steve Brown",
    "loser_school": "Central Michigan",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Tyler Sherfey",
    "winner_school": "Boise State",
    "loser": "Matt Kocher",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Cyler Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Newly McSpadden",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Ryan Hluschak",
    "winner_school": "Drexel",
    "loser": "Chase Pami",
    "loser_school": "Cal Poly",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Tyson Reiner",
    "winner_school": "Northern Iowa",
    "loser": "Jeff Marsh",
    "loser_school": "Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "William Garvin",
    "winner_school": "Chattanooga",
    "loser": "Christian Snook",
    "loser_school": "Army",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Chris Stout",
    "loser_school": "American",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Dave Nakasone",
    "loser_school": "Lehigh",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Trevor Stewart",
    "loser_school": "Central Michigan",
    "result": "Fall 5:53"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Jarrod King",
    "loser_school": "Edinboro",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Donnie Jones",
    "loser_school": "West Virginia",
    "result": "Fall 4:09"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Patrick Pitsch",
    "loser_school": "Arizona State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Kurt Gross",
    "loser_school": "Kent State",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Zack Shanaman",
    "loser_school": "Penn",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Stephen Crozier",
    "loser_school": "Air Force",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Ethan Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Kurt Swartz",
    "loser_school": "Boise State",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Roger Smith-Bergsrud",
    "winner_school": "Illinois",
    "loser": "Matt Epperly",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Dave Rella",
    "winner_school": "Penn State",
    "loser": "Ryan Patrovich",
    "loser_school": "Hofstra",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Chris Brown",
    "winner_school": "Old Dominion",
    "loser": "Daniel Atondo",
    "loser_school": "CSU Bakersfield",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Luke Manuel",
    "winner_school": "Purdue",
    "loser": "Jake Donar",
    "loser_school": "Wisconsin",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Matt Coughlin",
    "loser_school": "Indiana",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Jake Dieffenbach",
    "winner_school": "Oklahoma State",
    "loser": "Keegan Mueller",
    "loser_school": "North Carolina",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Marcus Effner",
    "winner_school": "Cleveland State",
    "loser": "Byron Sigmon",
    "loser_school": "UNC Greensboro",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Keith Gavin",
    "winner_school": "Pittsburgh",
    "loser": "Chance Litton",
    "loser_school": "West Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Nathan Lee",
    "winner_school": "Boise State",
    "loser": "Brandon Mason",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Ryan Duke Burk",
    "loser_school": "Northern Illinois",
    "result": "Dec 3-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "John Dergo",
    "loser_school": "Illinois",
    "result": "Fall 6:06"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Brandon Browne",
    "winner_school": "Nebraska",
    "loser": "Aaron Scott",
    "loser_school": "Iowa State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Alton Lucas",
    "loser_school": "Hofstra",
    "result": "Fall 1:33"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Mike Letts",
    "loser_school": "Maryland",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Luke Feist",
    "loser_school": "Stanford",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Alex Dolly",
    "winner_school": "Northern Iowa",
    "loser": "Shane Riccio",
    "loser_school": "Bucknell",
    "result": "Fall 1:18"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Gabriel Dretsch",
    "winner_school": "Minnesota",
    "loser": "Scott Giffin",
    "loser_school": "Penn",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Nick Hayes",
    "winner_school": "Northwestern",
    "loser": "Tyler Bernacchi",
    "loser_school": "UC Davis",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Lloyd Rogers",
    "winner_school": "Chattanooga",
    "loser": "Phil Moricone",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Chris Henrich",
    "winner_school": "Virginia",
    "loser": "Randy Oates",
    "loser_school": "George Mason",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Aaron Kelly",
    "winner_school": "Liberty",
    "loser": "Trevor Perry",
    "loser_school": "Indiana",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Tyler French",
    "winner_school": "Air Force",
    "loser": "Danny Clum",
    "loser_school": "Wisconsin",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Alex Caruso",
    "winner_school": "Lehigh",
    "loser": "Joshua Patterson",
    "loser_school": "Binghamton",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Zack Giesen",
    "loser_school": "Stanford",
    "result": "Fall 2:06"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Roger Kish",
    "winner_school": "Minnesota",
    "loser": "A.J. Kissel",
    "loser_school": "Purdue",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Doug Umbehauer",
    "winner_school": "Rider",
    "loser": "Jack Jensen",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Christian Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Dave Brandvold",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Vince Jones",
    "winner_school": "Nebraska",
    "loser": "Tyrel Todd",
    "loser_school": "Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Rocco Caponi",
    "loser_school": "Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Kirk Smith",
    "loser_school": "Boise State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Ryan Goodman",
    "loser_school": "NC State",
    "result": "MD 14-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Ian Murphy",
    "winner_school": "Cal State Fullerton",
    "loser": "Jesse Strawn",
    "loser_school": "Old Dominion",
    "result": "Fall 0:27"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Jacob Devlin",
    "winner_school": "Air Force",
    "loser": "Charlie Pienaar",
    "loser_school": "Eastern Michigan",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Chris Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Matthew Gevelinger",
    "loser_school": "Brown",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Kurt Brenner",
    "winner_school": "West Virginia",
    "loser": "Andy O'Loughlin",
    "loser_school": "Northern Iowa",
    "result": "MD 16-8"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Austin Trotman",
    "winner_school": "Appalachian State",
    "loser": "Scott Ferguson",
    "loser_school": "Army",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Joshua Weitzel",
    "winner_school": "Oklahoma",
    "loser": "Phil Bomberger",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Brent Chriswell",
    "winner_school": "Arizona State",
    "loser": "Josh Edmondson",
    "loser_school": "Chattanooga",
    "result": "MD 14-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Lior Zamir",
    "winner_school": "Penn",
    "loser": "Chris Dagget",
    "loser_school": "Liberty",
    "result": "FOR"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Kyle Bressler",
    "loser_school": "Oregon State",
    "result": "Fall 1:49"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Patrick Bond",
    "loser_school": "Illinois",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Max Askren",
    "winner_school": "Missouri",
    "loser": "Darren Burns",
    "loser_school": "UNC Greensboro",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Cayle Byers",
    "loser_school": "George Mason",
    "result": "Fall 2:30"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "David Bertolino",
    "winner_school": "Iowa State",
    "loser": "Mike Tamillow",
    "loser_school": "Northwestern",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Dallas Herbst",
    "winner_school": "Wisconsin",
    "loser": "T.J. Morrison",
    "loser_school": "Rider",
    "result": "Fall 0:52"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Joel Flaggert",
    "loser_school": "Oklahoma",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Logan Brown",
    "loser_school": "Purdue",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Andrew Anderson",
    "winner_school": "Northern Iowa",
    "loser": "Riley Orozco",
    "loser_school": "CSU Bakersfield",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Matt Casperson",
    "winner_school": "Boise State",
    "loser": "Jared Villers",
    "loser_school": "West Virginia",
    "result": "Fall 3:24"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Lamar Brown",
    "winner_school": "Rutgers",
    "loser": "Jacob Bryce",
    "loser_school": "North Dakota State",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Jason Trulson",
    "winner_school": "Arizona State",
    "loser": "Pat Bradshaw",
    "loser_school": "Edinboro",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Matt Koz",
    "winner_school": "Chattanooga",
    "loser": "John Drake",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Joe Rovelli",
    "winner_school": "Hofstra",
    "loser": "Joe Fagiano",
    "loser_school": "Indiana",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Richard Starks",
    "winner_school": "Army",
    "loser": "Thomas Shovlin",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Ben Hepburn",
    "winner_school": "Lock Haven",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Josh Wine",
    "loser_school": "VMI",
    "result": "Fall 2:44"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Bubba Gritter",
    "winner_school": "Central Michigan",
    "loser": "Jermail Porter",
    "loser_school": "Kent State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Mark Ellis",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Matt Fields",
    "winner_school": "Iowa",
    "loser": "Nate Everhart",
    "loser_school": "Indiana",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Ed Prendergast",
    "winner_school": "Navy",
    "loser": "Dustin Rogers",
    "loser_school": "West Virginia",
    "result": "Dec 5-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Kyle Massey",
    "winner_school": "Wisconsin",
    "loser": "Mike Spaid",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Zach Sheaffer",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Joe Fendone",
    "loser_school": "Edinboro",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Travis Gardner",
    "winner_school": "Oregon State",
    "loser": "Patrick Walker",
    "loser_school": "Liberty",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Justin Dobies",
    "winner_school": "North Carolina",
    "loser": "Nick Smith",
    "loser_school": "Boise State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Rashad Goff",
    "winner_school": "Cleveland State",
    "loser": "Levon Mock",
    "loser_school": "Brown",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Jon May",
    "winner_school": "Nebraska",
    "loser": "Andy Totusek",
    "loser_school": "Old Dominion",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Reece Hopkin",
    "winner_school": "Northern Colorado",
    "loser": "Ed Bordas",
    "loser_school": "Rider",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "John Wise",
    "winner_school": "Illinois",
    "loser": "Trey McLean",
    "loser_school": "Penn",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Benjamin Berhow",
    "winner_school": "Minnesota",
    "loser": "Nathan Thobaden",
    "loser_school": "Army",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Ryan Flores",
    "winner_school": "Columbia",
    "loser": "Charlie Alexander",
    "loser_school": "Oregon",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Mark McKnight",
    "winner_school": "Penn State",
    "loser": "Marcos Orozco",
    "loser_school": "UC Davis",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Eric Morrill",
    "winner_school": "Edinboro",
    "loser": "Anthony Mustari",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Eric Hoffman",
    "winner_school": "North Dakota State",
    "loser": "Javier Maldonado",
    "loser_school": "Chattanooga",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Rollie Peterkin",
    "winner_school": "Penn",
    "loser": "Nikko Triggas",
    "loser_school": "Ohio State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Mike Sees",
    "winner_school": "Bloomsburg",
    "loser": "Steve Mytych",
    "loser_school": "Drexel",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Luke Smith",
    "winner_school": "Central Michigan",
    "loser": "Tyler Shinn",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Mike Rodriguez",
    "winner_school": "Cornell",
    "loser": "Brandon Zoetewey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Dave Tomasette",
    "loser_school": "Hofstra",
    "result": "DEF"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Cory Fish",
    "winner_school": "Boise State",
    "loser": "Dave Marble",
    "loser_school": "Bucknell",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Terreyl Williams",
    "winner_school": "Appalachian State",
    "loser": "Kenny Jordan",
    "loser_school": "Nebraska",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Kyle Hutter",
    "loser_school": "Old Dominion",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Conor Beebe",
    "winner_school": "Central Michigan",
    "loser": "Jeff Hedges",
    "loser_school": "UNC Greensboro",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Patrick Castillo",
    "winner_school": "Northern Illinois",
    "loser": "Seth Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Tyler McCormick",
    "loser_school": "Missouri",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Ryan Dunn",
    "loser_school": "Oregon",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Josh Baldridge",
    "loser_school": "Northern Iowa",
    "result": "Fall 0:41"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Jacob Kriegbaum",
    "winner_school": "Air Force",
    "loser": "Drew Lashaway",
    "loser_school": "Kent State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Chris Drouin",
    "winner_school": "Arizona State",
    "loser": "Kyle Ruschell",
    "loser_school": "Wisconsin",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Drew Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Carter Downing",
    "loser_school": "Wyoming",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Patrick McLemore",
    "winner_school": "Northern Illinois",
    "loser": "Levi Jones",
    "loser_school": "Boise State",
    "result": "Fall 1:10"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Adam Frey",
    "winner_school": "Cornell",
    "loser": "Germane Lindsey",
    "loser_school": "Ohio",
    "result": "Fall 0:22"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Garrett Scott",
    "winner_school": "Penn State",
    "loser": "Keith Sulzer",
    "loser_school": "Northwestern",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Cody Cleveland",
    "winner_school": "Chattanooga",
    "loser": "Zack Bailey",
    "loser_school": "Oklahoma",
    "result": "Dec 15-13"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Tim Harner",
    "winner_school": "Liberty",
    "loser": "Ryan Williams",
    "loser_school": "Old Dominion",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Morgan Atkinson",
    "loser_school": "Cal State Fullerton",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Scott Ervin",
    "winner_school": "Appalachian State",
    "loser": "Ed McCray",
    "loser_school": "Gardner-Webb",
    "result": "TF 21-4 4:59"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Kurt Kinser",
    "winner_school": "Indiana",
    "loser": "Trevor Chinn",
    "loser_school": "Lehigh",
    "result": "Dec 6-5 SV"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "Eric Medina",
    "loser_school": "Maryland",
    "result": "TF 17-0 3:38"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Brandon Carter",
    "winner_school": "Central Michigan",
    "loser": "Cesar Grajales",
    "loser_school": "Penn",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Josh Wagner",
    "winner_school": "Missouri",
    "loser": "Mitch Mueller",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "David Jauregui",
    "winner_school": "West Virginia",
    "loser": "Daryl Cocozzo",
    "loser_school": "Edinboro",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Will Rowe",
    "winner_school": "Oklahoma",
    "loser": "Ryan Lang",
    "loser_school": "Northwestern",
    "result": "MD 18-10"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Newly McSpadden",
    "winner_school": "Oklahoma State",
    "loser": "Spencer Manley",
    "loser_school": "Navy",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Ryan Hluschak",
    "loser_school": "Drexel",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Tyson Reiner",
    "loser_school": "Northern Iowa",
    "result": "TF 18-1 5:16"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Zac Fryling",
    "winner_school": "West Virginia",
    "loser": "Steve Brown",
    "loser_school": "Central Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "William Garvin",
    "loser_school": "Chattanooga",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "C.P. Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Brian Letters",
    "loser_school": "Maryland",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Jason Johnstone",
    "winner_school": "Ohio State",
    "loser": "Jarrett Hostetter",
    "loser_school": "Millersville",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Ethan Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Stephen Crozier",
    "loser_school": "Air Force",
    "result": "Fall 1:14"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Zack Shanaman",
    "winner_school": "Penn",
    "loser": "Roger Smith-Bergsrud",
    "loser_school": "Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Dave Rella",
    "winner_school": "Penn State",
    "loser": "Kurt Gross",
    "loser_school": "Kent State",
    "result": "Dec 12-10 SV"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Chris Brown",
    "loser_school": "Old Dominion",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Luke Manuel",
    "winner_school": "Purdue",
    "loser": "Donnie Jones",
    "loser_school": "West Virginia",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Andrew Rendos",
    "loser_school": "Bucknell",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Trevor Stewart",
    "winner_school": "Central Michigan",
    "loser": "Jake Dieffenbach",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Chad Porter",
    "winner_school": "Liberty",
    "loser": "Marcus Effner",
    "loser_school": "Cleveland State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Alex Dolly",
    "winner_school": "Northern Iowa",
    "loser": "Luke Feist",
    "loser_school": "Stanford",
    "result": "Fall 5:53"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Gabriel Dretsch",
    "winner_school": "Minnesota",
    "loser": "Mike Letts",
    "loser_school": "Maryland",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Alton Lucas",
    "winner_school": "Hofstra",
    "loser": "Nick Hayes",
    "loser_school": "Northwestern",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Lloyd Rogers",
    "winner_school": "Chattanooga",
    "loser": "Aaron Scott",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Chris Henrich",
    "loser_school": "Virginia",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Ryan Duke Burk",
    "winner_school": "Northern Illinois",
    "loser": "Aaron Kelly",
    "loser_school": "Liberty",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Tyler French",
    "loser_school": "Air Force",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Alex Caruso",
    "winner_school": "Lehigh",
    "loser": "Chance Litton",
    "loser_school": "West Virginia",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Jack Jensen",
    "winner_school": "Oklahoma State",
    "loser": "Ian Murphy",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Dave Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Jacob Devlin",
    "loser_school": "Air Force",
    "result": "TF 16-0 7:00"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Zack Giesen",
    "winner_school": "Stanford",
    "loser": "Chris Honeycutt",
    "loser_school": "Edinboro",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Kurt Brenner",
    "winner_school": "West Virginia",
    "loser": "A.J. Kissel",
    "loser_school": "Purdue",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Austin Trotman",
    "loser_school": "Appalachian State",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Joshua Weitzel",
    "winner_school": "Oklahoma",
    "loser": "Ryan Goodman",
    "loser_school": "NC State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Brent Chriswell",
    "loser_school": "Arizona State",
    "result": "Fall 4:37"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Rocco Caponi",
    "winner_school": "Virginia",
    "loser": "Lior Zamir",
    "loser_school": "Penn",
    "result": "Fall 2:11"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Darren Burns",
    "winner_school": "UNC Greensboro",
    "loser": "Andrew Anderson",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Matt Casperson",
    "winner_school": "Boise State",
    "loser": "Cayle Byers",
    "loser_school": "George Mason",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Kyle Bressler",
    "winner_school": "Oregon State",
    "loser": "Lamar Brown",
    "loser_school": "Rutgers",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Jason Trulson",
    "winner_school": "Arizona State",
    "loser": "Patrick Bond",
    "loser_school": "Illinois",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Matt Koz",
    "winner_school": "Chattanooga",
    "loser": "Joel Flaggert",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Joe Rovelli",
    "winner_school": "Hofstra",
    "loser": "Logan Brown",
    "loser_school": "Purdue",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Mike Tamillow",
    "winner_school": "Northwestern",
    "loser": "Richard Starks",
    "loser_school": "Army",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "T.J. Morrison",
    "winner_school": "Rider",
    "loser": "Ben Hepburn",
    "loser_school": "Lock Haven",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Travis Gardner",
    "loser_school": "Oregon State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Justin Dobies",
    "winner_school": "North Carolina",
    "loser": "Nate Everhart",
    "loser_school": "Indiana",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Rashad Goff",
    "winner_school": "Cleveland State",
    "loser": "Josh Wine",
    "loser_school": "VMI",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Jermail Porter",
    "winner_school": "Kent State",
    "loser": "Jon May",
    "loser_school": "Nebraska",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Reece Hopkin",
    "winner_school": "Northern Colorado",
    "loser": "Zach Sheaffer",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "John Wise",
    "winner_school": "Illinois",
    "loser": "Joe Fendone",
    "loser_school": "Edinboro",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Dustin Rogers",
    "winner_school": "West Virginia",
    "loser": "Benjamin Berhow",
    "loser_school": "Minnesota",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Mike Spaid",
    "winner_school": "Bloomsburg",
    "loser": "Ryan Flores",
    "loser_school": "Columbia",
    "result": "MD 12-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Brandon Precin",
    "loser_school": "Northwestern",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Charlie Falck",
    "winner_school": "Iowa",
    "loser": "Tanner Gardner",
    "loser_school": "Stanford",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Gabe Flores",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Fall 4:04"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Mark McKnight",
    "winner_school": "Penn State",
    "loser": "Eric Morrill",
    "loser_school": "Edinboro",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Rollie Peterkin",
    "winner_school": "Penn",
    "loser": "Eric Hoffman",
    "loser_school": "North Dakota State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Mike Sees",
    "winner_school": "Bloomsburg",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Mike Rodriguez",
    "loser_school": "Cornell",
    "result": "Dec 11-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "Mack Reiter",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Joey Slaton",
    "winner_school": "Iowa",
    "loser": "Nick Fanthorpe",
    "loser_school": "Iowa State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Cory Fish",
    "winner_school": "Boise State",
    "loser": "Terreyl Williams",
    "loser_school": "Appalachian State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Conor Beebe",
    "loser_school": "Central Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Patrick Castillo",
    "winner_school": "Northern Illinois",
    "loser": "Steve Bell",
    "loser_school": "Maryland",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Zach Tanelli",
    "loser_school": "Wisconsin",
    "result": "Fall 2:35"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "Nick Gallick",
    "loser_school": "Iowa State",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Manny Rivera",
    "loser_school": "Minnesota",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Kellan Russell",
    "loser_school": "Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Matt Kyler",
    "loser_school": "Army",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Chris Drouin",
    "winner_school": "Arizona State",
    "loser": "Jacob Kriegbaum",
    "loser_school": "Air Force",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Drew Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Patrick McLemore",
    "loser_school": "Northern Illinois",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Garrett Scott",
    "winner_school": "Penn State",
    "loser": "Adam Frey",
    "loser_school": "Cornell",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Cody Cleveland",
    "winner_school": "Chattanooga",
    "loser": "Tim Harner",
    "loser_school": "Liberty",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Lance Palmer",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Josh Churella",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Bubba Jenkins",
    "winner_school": "Penn State",
    "loser": "J.P. O'Connor",
    "loser_school": "Harvard",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Dustin Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Scott Ervin",
    "loser_school": "Appalachian State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "Kurt Kinser",
    "loser_school": "Indiana",
    "result": "MD 15-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Brandon Carter",
    "winner_school": "Central Michigan",
    "loser": "Josh Wagner",
    "loser_school": "Missouri",
    "result": "Fall 3:41"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Will Rowe",
    "winner_school": "Oklahoma",
    "loser": "David Jauregui",
    "loser_school": "West Virginia",
    "result": "Dec 13-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Gregor Gillespie",
    "loser_school": "Edinboro",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Josh Zupancic",
    "winner_school": "Stanford",
    "loser": "Jonny Bonilla-Bowman",
    "loser_school": "Hofstra",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Tyler Sherfey",
    "loser_school": "Boise State",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Michael Chandler",
    "loser_school": "Missouri",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Newly McSpadden",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Matt Kocher",
    "winner_school": "Pittsburgh",
    "loser": "Zac Fryling",
    "loser_school": "West Virginia",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Ryan Morningstar",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Jason Johnstone",
    "loser_school": "Ohio State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Moza Fay",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Stephen Dwyer",
    "loser_school": "Nebraska",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Jonathan Reader",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Michael Cannon",
    "loser_school": "American",
    "result": "Fall 0:37"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Zack Shanaman",
    "winner_school": "Penn",
    "loser": "Ethan Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Patrick Pitsch",
    "winner_school": "Arizona State",
    "loser": "Dave Rella",
    "loser_school": "Penn State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Luke Manuel",
    "winner_school": "Purdue",
    "loser": "Jarrod King",
    "loser_school": "Edinboro",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Trevor Stewart",
    "winner_school": "Central Michigan",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Keith Gavin",
    "winner_school": "Pittsburgh",
    "loser": "Nathan Lee",
    "loser_school": "Boise State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Brandon Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Brandon Browne",
    "winner_school": "Nebraska",
    "loser": "Steve Anceravage",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Matt Stolpinski",
    "loser_school": "Navy",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Alex Dolly",
    "winner_school": "Northern Iowa",
    "loser": "Gabriel Dretsch",
    "loser_school": "Minnesota",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Alton Lucas",
    "winner_school": "Hofstra",
    "loser": "Lloyd Rogers",
    "loser_school": "Chattanooga",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Ryan Duke Burk",
    "winner_school": "Northern Illinois",
    "loser": "John Dergo",
    "loser_school": "Illinois",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Alex Caruso",
    "loser_school": "Lehigh",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Roger Kish",
    "loser_school": "Minnesota",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Christian Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Doug Umbehauer",
    "loser_school": "Rider",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Vince Jones",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Jack Jensen",
    "winner_school": "Oklahoma State",
    "loser": "Dave Brandvold",
    "loser_school": "Wisconsin",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Kurt Brenner",
    "winner_school": "West Virginia",
    "loser": "Zack Giesen",
    "loser_school": "Stanford",
    "result": "Fall 6:53"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Joshua Weitzel",
    "loser_school": "Oklahoma",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Rocco Caponi",
    "loser_school": "Virginia",
    "result": "MD 13-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Craig Brester",
    "loser_school": "Nebraska",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Max Askren",
    "loser_school": "Missouri",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Dallas Herbst",
    "winner_school": "Wisconsin",
    "loser": "David Bertolino",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Hudson Taylor",
    "loser_school": "Maryland",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Darren Burns",
    "winner_school": "UNC Greensboro",
    "loser": "Matt Casperson",
    "loser_school": "Boise State",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Jason Trulson",
    "winner_school": "Arizona State",
    "loser": "Kyle Bressler",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Joe Rovelli",
    "winner_school": "Hofstra",
    "loser": "Matt Koz",
    "loser_school": "Chattanooga",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Mike Tamillow",
    "winner_school": "Northwestern",
    "loser": "T.J. Morrison",
    "loser_school": "Rider",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Bubba Gritter",
    "loser_school": "Central Michigan",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Matt Fields",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Ed Prendergast",
    "winner_school": "Navy",
    "loser": "Kyle Massey",
    "loser_school": "Wisconsin",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "David Zabriskie",
    "loser_school": "Iowa State",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Justin Dobies",
    "loser_school": "North Carolina",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Jermail Porter",
    "winner_school": "Kent State",
    "loser": "Rashad Goff",
    "loser_school": "Cleveland State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "John Wise",
    "winner_school": "Illinois",
    "loser": "Reece Hopkin",
    "loser_school": "Northern Colorado",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Mike Spaid",
    "winner_school": "Bloomsburg",
    "loser": "Dustin Rogers",
    "loser_school": "West Virginia",
    "result": "Fall 0:45"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Mark McKnight",
    "winner_school": "Penn State",
    "loser": "Gabe Flores",
    "loser_school": "Illinois",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Rollie Peterkin",
    "loser_school": "Penn",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Mike Sees",
    "loser_school": "Bloomsburg",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Anthony Robles",
    "loser_school": "Arizona State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Cory Fish",
    "loser_school": "Boise State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Reece Humphrey",
    "loser_school": "Ohio State",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Patrick Castillo",
    "loser_school": "Northern Illinois",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Nick Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Lou Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Manny Rivera",
    "winner_school": "Minnesota",
    "loser": "Chris Drouin",
    "loser_school": "Arizona State",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Drew Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Matt Kyler",
    "winner_school": "Army",
    "loser": "Garrett Scott",
    "loser_school": "Penn State",
    "result": "Fall 6:43"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Cody Cleveland",
    "winner_school": "Chattanooga",
    "loser": "Kellan Russell",
    "loser_school": "Michigan",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Adam Hall",
    "loser_school": "Boise State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Jake Patacsil",
    "loser_school": "Purdue",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Brandon Carter",
    "loser_school": "Central Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Will Rowe",
    "loser_school": "Oklahoma",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Jonny Bonilla-Bowman",
    "loser_school": "Hofstra",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Matt Kocher",
    "loser_school": "Pittsburgh",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Michael Chandler",
    "loser_school": "Missouri",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Tyler Sherfey",
    "loser_school": "Boise State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Zack Shanaman",
    "loser_school": "Penn",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Patrick Pitsch",
    "loser_school": "Arizona State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Luke Manuel",
    "loser_school": "Purdue",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Trevor Stewart",
    "loser_school": "Central Michigan",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Alex Dolly",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Alton Lucas",
    "winner_school": "Hofstra",
    "loser": "Nathan Lee",
    "loser_school": "Boise State",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Ryan Duke Burk",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Brandon Mason",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Jack Jensen",
    "winner_school": "Oklahoma State",
    "loser": "Vince Jones",
    "loser_school": "Nebraska",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Kurt Brenner",
    "loser_school": "West Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Roger Kish",
    "loser_school": "Minnesota",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Doug Umbehauer",
    "loser_school": "Rider",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "David Bertolino",
    "winner_school": "Iowa State",
    "loser": "Darren Burns",
    "loser_school": "UNC Greensboro",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Jason Trulson",
    "loser_school": "Arizona State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Joe Rovelli",
    "loser_school": "Hofstra",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Max Askren",
    "winner_school": "Missouri",
    "loser": "Mike Tamillow",
    "loser_school": "Northwestern",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Kyle Massey",
    "winner_school": "Wisconsin",
    "loser": "Mark Ellis",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Jermail Porter",
    "loser_school": "Kent State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Bubba Gritter",
    "winner_school": "Central Michigan",
    "loser": "John Wise",
    "loser_school": "Illinois",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Matt Fields",
    "winner_school": "Iowa",
    "loser": "Mike Spaid",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Charlie Falck",
    "loser_school": "Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Paul Donahoe",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Mark McKnight",
    "winner_school": "Penn State",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Brandon Precin",
    "loser_school": "Northwestern",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Joey Slaton",
    "winner_school": "Iowa",
    "loser": "Frank Gomez",
    "loser_school": "Michigan State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "James Kennedy",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "Fall 6:28"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Nick Fanthorpe",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Chad Mendes",
    "winner_school": "Cal Poly",
    "loser": "Nathan Morgan",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Charles Griffin",
    "loser_school": "Hofstra",
    "result": "Dec 11-9"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Manny Rivera",
    "loser_school": "Minnesota",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Matt Kyler",
    "winner_school": "Army",
    "loser": "Cody Cleveland",
    "loser_school": "Chattanooga",
    "result": "Dec 7-6"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Jordan Burroughs",
    "loser_school": "Nebraska",
    "result": "Dec 8-4"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Bubba Jenkins",
    "winner_school": "Penn State",
    "loser": "Darrion Caldwell",
    "loser_school": "NC State",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Dustin Schlatter",
    "loser_school": "Minnesota",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Lance Palmer",
    "loser_school": "Ohio State",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Josh Zupancic",
    "loser_school": "Stanford",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Dan Vallimont",
    "loser_school": "Penn State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Cyler Sanderson",
    "loser_school": "Iowa State",
    "result": "Fall 0:40"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:28"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Eric Tannenbaum",
    "winner_school": "Michigan",
    "loser": "Mack Lewnes",
    "loser_school": "Cornell",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Nick Marable",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Stephen Dwyer",
    "loser_school": "Nebraska",
    "result": "Fall 2:39"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Jonathan Reader",
    "loser_school": "Iowa State",
    "result": "Dec 7-6"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Keith Gavin",
    "winner_school": "Pittsburgh",
    "loser": "Jay Borschel",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Brandon Browne",
    "loser_school": "Nebraska",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Alton Lucas",
    "loser_school": "Hofstra",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Matt Stolpinski",
    "loser_school": "Navy",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Christian Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Raymond Jordan",
    "loser_school": "Missouri",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Jack Jensen",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Kirk Smith",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Wynn Michalak",
    "winner_school": "Central Michigan",
    "loser": "Josh Glenn",
    "loser_school": "American",
    "result": "Dec 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Dallas Herbst",
    "loser_school": "Wisconsin",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "David Bertolino",
    "loser_school": "Iowa State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Max Askren",
    "loser_school": "Missouri",
    "result": "Dec 9-2"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "Jared Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "J.D. Bergman",
    "winner_school": "Ohio State",
    "loser": "Ed Prendergast",
    "loser_school": "Navy",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Kyle Massey",
    "loser_school": "Wisconsin",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Matt Fields",
    "winner_school": "Iowa",
    "loser": "Bubba Gritter",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Mark McKnight",
    "winner_school": "Penn State",
    "loser": "Charlie Falck",
    "loser_school": "Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Tanner Gardner",
    "loser_school": "Stanford",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Mack Reiter",
    "loser_school": "Minnesota",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Nick Gallick",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Nathan Morgan",
    "winner_school": "Oklahoma State",
    "loser": "Matt Kyler",
    "loser_school": "Army",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "J.P. O'Connor",
    "loser_school": "Harvard",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Darrion Caldwell",
    "loser_school": "NC State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Gregor Gillespie",
    "loser_school": "Edinboro",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Brandon Becker",
    "winner_school": "Indiana",
    "loser": "Josh Zupancic",
    "loser_school": "Stanford",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Moza Fay",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Michael Cannon",
    "loser_school": "American",
    "result": "Fall 4:18"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Brandon Browne",
    "winner_school": "Nebraska",
    "loser": "Brandon Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Steve Anceravage",
    "loser_school": "Cornell",
    "result": "Fall 6:30"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Christian Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Raymond Jordan",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Josh Glenn",
    "loser_school": "American",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Dallas Herbst",
    "loser_school": "Wisconsin",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "David Zabriskie",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Ed Prendergast",
    "winner_school": "Navy",
    "loser": "Matt Fields",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Paul Donahoe",
    "winner_school": "Nebraska",
    "loser": "Mark McKnight",
    "loser_school": "Penn State",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Tanner Gardner",
    "winner_school": "Stanford",
    "loser": "Charlie Falck",
    "loser_school": "Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "James Kennedy",
    "loser_school": "Illinois",
    "result": "Dec 7-2"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Mack Reiter",
    "winner_school": "Minnesota",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "Dec 10-7"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Nick Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "Dec 7-6"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Charles Griffin",
    "winner_school": "Hofstra",
    "loser": "Nathan Morgan",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Matt Kyler",
    "loser_school": "Army",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Manny Rivera",
    "winner_school": "Minnesota",
    "loser": "Cody Cleveland",
    "loser_school": "Chattanooga",
    "result": "Fall 3:46"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Josh Churella",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "J.P. O'Connor",
    "loser_school": "Harvard",
    "result": "M FOR"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Dustin Schlatter",
    "winner_school": "Minnesota",
    "loser": "Lance Palmer",
    "loser_school": "Ohio State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Brandon Becker",
    "loser_school": "Indiana",
    "result": "Dec 5-4"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Josh Zupancic",
    "loser_school": "Stanford",
    "result": "TF 15-0 4:44"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Mack Lewnes",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Michael Cannon",
    "loser_school": "American",
    "result": "Dec 13-6"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Stephen Dwyer",
    "loser_school": "Nebraska",
    "result": "Dec 10-7"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Brandon Browne",
    "loser_school": "Nebraska",
    "result": "Dec 6-4"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Brandon Sinnott",
    "winner_school": "Central Michigan",
    "loser": "Steve Anceravage",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Matt Stolpinski",
    "winner_school": "Navy",
    "loser": "Alton Lucas",
    "loser_school": "Hofstra",
    "result": "Fall 4:07"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Christian Sinnott",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Jack Jensen",
    "winner_school": "Oklahoma State",
    "loser": "Kirk Smith",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Craig Brester",
    "loser_school": "Nebraska",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Josh Glenn",
    "winner_school": "American",
    "loser": "Dallas Herbst",
    "loser_school": "Wisconsin",
    "result": "Dec 11-6"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Max Askren",
    "winner_school": "Missouri",
    "loser": "David Bertolino",
    "loser_school": "Iowa State",
    "result": "Dec 11-9 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Ed Prendergast",
    "winner_school": "Navy",
    "loser": "Jared Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Matt Fields",
    "winner_school": "Iowa",
    "loser": "David Zabriskie",
    "loser_school": "Iowa State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Bubba Gritter",
    "winner_school": "Central Michigan",
    "loser": "Kyle Massey",
    "loser_school": "Wisconsin",
    "result": "DEF"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Jayson Ness",
    "loser_school": "Minnesota",
    "result": "Dec 10-3"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Coleman Scott",
    "winner_school": "Oklahoma State",
    "loser": "Joey Slaton",
    "loser_school": "Iowa",
    "result": "Fall 0:49"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Chad Mendes",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Bubba Jenkins",
    "loser_school": "Penn State",
    "result": "Dec 14-8"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Michael Poeta",
    "loser_school": "Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Mark Perry",
    "winner_school": "Iowa",
    "loser": "Eric Tannenbaum",
    "loser_school": "Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Keith Gavin",
    "winner_school": "Pittsburgh",
    "loser": "Steve Luke",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Jake Varner",
    "loser_school": "Iowa State",
    "result": "Dec 3-3 TB"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Phil Davis",
    "winner_school": "Penn State",
    "loser": "Wynn Michalak",
    "loser_school": "Central Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Dustin Fox",
    "winner_school": "Northwestern",
    "loser": "J.D. Bergman",
    "loser_school": "Ohio State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1001,
    "winner": "Luke Smith",
    "winner_school": "Central Michigan",
    "loser": "Ross Gitomer",
    "loser_school": "Virginia",
    "result": "Dec 2-1"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 1002,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Cory VomBaur",
    "loser_school": "Wyoming",
    "result": "Fall 1:38"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 1004,
    "winner": "Mitch Mueller",
    "winner_school": "Iowa State",
    "loser": "Kyle Fried",
    "loser_school": "Binghamton",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 1171,
    "winner": "Marcos Orozco",
    "winner_school": "UC Davis",
    "loser": "Brandon Kinney",
    "loser_school": "Columbia",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 1172,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Cory VomBaur",
    "loser_school": "Wyoming",
    "result": "MD 12-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 1174,
    "winner": "Kyle Fried",
    "winner_school": "Binghamton",
    "loser": "Don Fisch",
    "loser_school": "Rider",
    "result": "Dec 6-2"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2002,
    "winner": "Patrick Castillo",
    "winner_school": "Northern Illinois",
    "loser": "Boris Novachkov",
    "loser_school": "Cal Poly",
    "result": "Dec 9-2"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 2004,
    "winner": "Kyle Larson",
    "winner_school": "Oregon State",
    "loser": "Hadley Harrison",
    "loser_school": "Clarion",
    "result": "Dec 13-11 SV"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 2172,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Boris Novachkov",
    "loser_school": "Cal Poly",
    "result": "MD 11-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 2174,
    "winner": "Scott Ervin",
    "winner_school": "Appalachian State",
    "loser": "Hadley Harrison",
    "loser_school": "Clarion",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 3004,
    "winner": "Matt Fittery",
    "winner_school": "Lock Haven",
    "loser": "Josh Wagner",
    "loser_school": "Missouri",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 3174,
    "winner": "Josh Wagner",
    "winner_school": "Missouri",
    "loser": "Nick Pickerell",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:04"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4004,
    "winner": "Josh Churella",
    "winner_school": "Michigan",
    "loser": "Trevor Chinn",
    "loser_school": "Lehigh",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 4174,
    "winner": "Trevor Chinn",
    "winner_school": "Lehigh",
    "loser": "Bryce Saddoris",
    "loser_school": "Navy",
    "result": "Dec 6-1"
  }
];
