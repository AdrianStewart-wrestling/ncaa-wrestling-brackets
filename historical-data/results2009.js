// 2009 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, crossovers) and COMPLETED RESULTS: WrestlingStats 2009 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source (official 2009 bracket not obtainable).
// Gaps/defects in the WrestlingStats print supplied from the NCAA Records Book 2009-10 (official text). Bout numbers: internal keys (2010 scheme), not printed.
// Per-bout provenance: results2009-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Brad Pataky",
    "winner_school": "Penn State",
    "loser": "Ian Moser",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:40"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Dave Marble",
    "winner_school": "Bucknell",
    "loser": "James Kennedy",
    "loser_school": "Illinois",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Seth Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Cody Cleveland",
    "loser_school": "Chattanooga",
    "result": "Fall 3:59"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "George Hickman",
    "loser_school": "Bloomsburg",
    "result": "Fall 4:48"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Matt Dragon",
    "loser_school": "Penn",
    "result": "Dec 8-5"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Chris Brown",
    "winner_school": "Old Dominion",
    "loser": "Justin Zeerip",
    "loser_school": "Michigan",
    "result": "Dec 4-0"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Nate Rock",
    "winner_school": "Buffalo",
    "loser": "Anthony Trongone",
    "loser_school": "Virginia Tech",
    "result": "Dec 2-1"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Vincenzo DiDona",
    "winner_school": "Central Michigan",
    "loser": "Justin Kerber",
    "loser_school": "Cornell",
    "result": "Dec 9-2"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Charles Silber",
    "loser_school": "American",
    "result": "MD 16-3"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Nate Everhart",
    "winner_school": "Indiana",
    "loser": "Trey McLean",
    "loser_school": "Penn",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Paul Donahoe",
    "winner_school": "Edinboro",
    "loser": "Ode Blanc",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Bernard Futrell",
    "winner_school": "Illinois",
    "loser": "William Chamberlain",
    "loser_school": "Duquesne",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Tyler Clark",
    "winner_school": "Iowa State",
    "loser": "Prescott Garner",
    "loser_school": "Navy",
    "result": "MD 19-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Rollie Peterkin",
    "winner_school": "Penn",
    "loser": "Eric Olanowski",
    "loser_school": "Michigan State",
    "result": "TF 21-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Charlie Falck",
    "winner_school": "Iowa",
    "loser": "Derek Reber",
    "loser_school": "Bucknell",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Nikko Triggas",
    "loser_school": "Ohio State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Michael Martinez",
    "winner_school": "Wyoming",
    "loser": "Marcos Orozco",
    "loser_school": "UC Davis",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Anthony Mustari",
    "loser_school": "Northern Colorado",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Brian Owen",
    "loser_school": "Boise State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Nic Bedelyon",
    "loser_school": "Kent State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Jay Ivanco",
    "loser_school": "Clarion",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Brad Pataky",
    "loser_school": "Penn State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Joey Fio",
    "winner_school": "Oklahoma",
    "loser": "Demetrius Johnson",
    "loser_school": "Chattanooga",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Scott Sentes",
    "winner_school": "Central Michigan",
    "loser": "Brandon Zoetewey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Steve Bonanno",
    "winner_school": "Hofstra",
    "loser": "Brendan Byrne",
    "loser_school": "Maryland",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Mike Watts",
    "loser_school": "Michigan",
    "result": "Fall 5:51"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "Todd Schavrien",
    "loser_school": "Missouri",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Filip Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Michael Rappo",
    "loser_school": "North Carolina",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Matt Fisk",
    "loser_school": "Lehigh",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Thomas Kimbrell",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Kyle Hutter",
    "loser_school": "Old Dominion",
    "result": "Fall 2:20"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Kelly Kubec",
    "loser_school": "Oregon State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Tristen DeShazer",
    "winner_school": "Northern Illinois",
    "loser": "Darius Little",
    "loser_school": "NC State",
    "result": "Fall 2:32"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Daniel Dennis",
    "winner_school": "Iowa",
    "loser": "Chris Notte",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Dave Marble",
    "winner_school": "Bucknell",
    "loser": "Cory VomBaur",
    "loser_school": "Wyoming",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Dan Mitcheff",
    "winner_school": "Kent State",
    "loser": "Frank Celorrio",
    "loser_school": "Appalachian State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Brandon Low",
    "loser_school": "UC Davis",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Conor Beebe",
    "loser_school": "Central Michigan",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Nick Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Tyler Dillashaw",
    "loser_school": "Cal State Fullerton",
    "result": "TF 19-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Jake Strayer",
    "winner_school": "Penn State",
    "loser": "Rick Deubel",
    "loser_school": "Edinboro",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Christian Smith",
    "winner_school": "Liberty",
    "loser": "Matt Bonson",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Jim Conroy",
    "loser_school": "Pittsburgh",
    "result": "Fall 0:12"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Kellan Russell",
    "winner_school": "Michigan",
    "loser": "Christopher Bencivenga",
    "loser_school": "UNC Greensboro",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Ryan Prater",
    "winner_school": "Illinois",
    "loser": "Tim Harner",
    "loser_school": "Liberty",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Joe Caramanica",
    "winner_school": "NC State",
    "loser": "Corey Jantzen",
    "loser_school": "Harvard",
    "result": "Fall 1:51"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Ryan Williams",
    "winner_school": "Old Dominion",
    "loser": "Frank Molinaro",
    "loser_school": "Penn State",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Marcus Hoehn",
    "winner_school": "Missouri",
    "loser": "Richard Rappo",
    "loser_school": "Penn",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Drew Lashaway",
    "winner_school": "Kent State",
    "loser": "Cory Fish",
    "loser_school": "Boise State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Vincent Ramirez",
    "loser_school": "North Carolina",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Alex Krom",
    "winner_school": "Maryland",
    "loser": "Alex Tsirtsis",
    "loser_school": "Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Adin Duenas",
    "loser_school": "Cal State Fullerton",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Justin Accordino",
    "loser_school": "Hofstra",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Seth Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Anthony D'Alie",
    "loser_school": "Central Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Keith Sulzer",
    "loser_school": "Northwestern",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Chris Drouin",
    "winner_school": "Arizona State",
    "loser": "William Simpson",
    "loser_school": "Army",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Trenton Washington",
    "winner_school": "Northern Iowa",
    "loser": "Mike Thorn",
    "loser_school": "Minnesota",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Nick Nelson",
    "winner_school": "Virginia",
    "loser": "Elijah Nacita",
    "loser_school": "CSU Bakersfield",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Christopher Diaz",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Kevin LeValley",
    "loser_school": "Bucknell",
    "result": "Fall 6:01"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Heinrich Barnes",
    "winner_school": "Oregon State",
    "loser": "Robert Sanders",
    "loser_school": "Nebraska",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Kyle Terry",
    "winner_school": "Oklahoma",
    "loser": "Trevor Kittleson",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Matt Kyler",
    "winner_school": "Army",
    "loser": "Daniel Waddell",
    "loser_school": "Chattanooga",
    "result": "Fall 1:26"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "D.J. Meagher",
    "loser_school": "Cornell",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Trevor Chinn",
    "winner_school": "Lehigh",
    "loser": "Peter Yates",
    "loser_school": "Virginia Tech",
    "result": "FOR"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Mitch Mueller",
    "winner_school": "Iowa State",
    "loser": "Jason Chamberlain",
    "loser_school": "Boise State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Matt Cathell",
    "loser_school": "Delaware State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Cesar Grajales",
    "loser_school": "Penn",
    "result": "Fall 3:27"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Desmond Green",
    "winner_school": "Buffalo",
    "loser": "Mitchell Polkowske",
    "loser_school": "Northern Colorado",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Steve Brown",
    "winner_school": "Central Michigan",
    "loser": "Michael Roberts",
    "loser_school": "Boston University",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "Kellon Balum",
    "loser_school": "Virginia",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Bryce Saddoris",
    "winner_school": "Navy",
    "loser": "Nicholas Stabile",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Kyle Borshoff",
    "winner_school": "American",
    "loser": "Torsten Gillespie",
    "loser_school": "Edinboro",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Paul Gillespie",
    "winner_school": "Hofstra",
    "loser": "David Jauregui",
    "loser_school": "West Virginia",
    "result": "Fall 2:33"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Matt Fittery",
    "winner_school": "Lock Haven",
    "loser": "Bubba Jenkins",
    "loser_school": "Penn State",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Hadley Harrison",
    "loser_school": "Clarion",
    "result": "TF 23-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Colton Salazar",
    "winner_school": "Purdue",
    "loser": "Chad Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Bryan Deutsch",
    "loser_school": "Northern Illinois",
    "result": "Fall 4:46"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Anthony Jones",
    "loser_school": "Michigan State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Mike Kessler",
    "loser_school": "Rider",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Neil Erisman",
    "winner_school": "Oklahoma State",
    "loser": "Justin Gaethje",
    "loser_school": "Northern Colorado",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "Jedd Moore",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Shaun Smith",
    "loser_school": "Liberty",
    "result": "TF 16-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Kody Hamrah",
    "loser_school": "NC State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Thomas Scotton",
    "winner_school": "North Carolina",
    "loser": "Aaron Hynes",
    "loser_school": "Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Chase Pami",
    "winner_school": "Cal Poly",
    "loser": "Jesse Dong",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Kurt Kinser",
    "loser_school": "Indiana",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Jason Johnstone",
    "loser_school": "Ohio State",
    "result": "Fall 6:51"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Tyler Safratowich",
    "winner_school": "Minnesota",
    "loser": "Scott Winston",
    "loser_school": "Rutgers",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Joseph Knox",
    "winner_school": "Chattanooga",
    "loser": "Jonny Bonilla-Bowman",
    "loser_school": "Hofstra",
    "result": "Dec 15-12"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Ryan Goodman",
    "loser_school": "West Virginia",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Ryan Patrovich",
    "winner_school": "Hofstra",
    "loser": "Mack Lewnes",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Keegan Mueller",
    "winner_school": "North Carolina",
    "loser": "Luke Manuel",
    "loser_school": "Purdue",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Brandon Mason",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Ethan Headlee",
    "loser_school": "Pittsburgh",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Nick Marable",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Rex Kendle",
    "loser_school": "Michigan State",
    "result": "Fall 1:04"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Tyler Sherfey",
    "winner_school": "Boise State",
    "loser": "Paul Young",
    "loser_school": "Indiana",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Keegan Davis",
    "loser_school": "Oregon State",
    "result": "Fall 1:00"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Donnie Jones",
    "loser_school": "West Virginia",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Jason Lapham",
    "winner_school": "Rider",
    "loser": "Jeremy Brooks",
    "loser_school": "Millersville",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Trevor Stewart",
    "winner_school": "Central Michigan",
    "loser": "Matt Pletcher",
    "loser_school": "Rutgers",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Colt Sponseller",
    "winner_school": "Ohio State",
    "loser": "William Garvin",
    "loser_school": "Chattanooga",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Mike Galante",
    "loser_school": "Lehigh",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Chris Brown",
    "loser_school": "Old Dominion",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Rick Schmelyun",
    "winner_school": "Bloomsburg",
    "loser": "Roger Smith-Bergsrud",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Ryan Smith",
    "loser_school": "Oklahoma",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Justin Herbert",
    "loser_school": "Franklin and Marshall",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Luke Rebertus",
    "winner_school": "Navy",
    "loser": "Ian Hinton",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Newly McSpadden",
    "winner_school": "Oklahoma State",
    "loser": "Dave Rella",
    "loser_school": "Ohio State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Chris Henrich",
    "winner_school": "Virginia",
    "loser": "Shane Smith",
    "loser_school": "Michigan State",
    "result": "Fall 4:17"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Shane Riccio",
    "loser_school": "Bucknell",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Ryan Duke Burk",
    "winner_school": "Iowa State",
    "loser": "Alton Lucas",
    "loser_school": "Hofstra",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Trevor Perry",
    "winner_school": "Indiana",
    "loser": "Hunter Meys",
    "loser_school": "Boston University",
    "result": "Fall 0:17"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Shane Onufer",
    "loser_school": "Wyoming",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Brandon Browne",
    "winner_school": "Nebraska",
    "loser": "Eric Decker",
    "loser_school": "Old Dominion",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Nathan Lee",
    "winner_school": "Boise State",
    "loser": "Nate Rock",
    "loser_school": "Buffalo",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Byron Sigmon",
    "loser_school": "UNC Greensboro",
    "result": "Fall 1:17"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Jeff James",
    "loser_school": "Oklahoma",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Mike Miller",
    "winner_school": "Central Michigan",
    "loser": "Bagna Tovuujav",
    "loser_school": "George Mason",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Scott Giffin",
    "winner_school": "Penn",
    "loser": "Kurt Brenner",
    "loser_school": "West Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Alex Caruso",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Jason McCroskey",
    "loser_school": "Chattanooga",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "John Barone",
    "loser_school": "Duke",
    "result": "Fall 0:53"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Alex Dolly",
    "winner_school": "Northern Iowa",
    "loser": "Eric Cameron",
    "loser_school": "Indiana",
    "result": "Fall 2:35"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Jordan Blanton",
    "loser_school": "Illinois",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "David Craig",
    "winner_school": "Lehigh",
    "loser": "Rocco Caponi",
    "loser_school": "Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "A.J. Kissel",
    "winner_school": "Purdue",
    "loser": "Dustin Kilgore",
    "loser_school": "Kent State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Vince Jones",
    "winner_school": "Nebraska",
    "loser": "Riley Orozco",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 4:15"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Vincenzo DiDona",
    "winner_school": "Central Michigan",
    "loser": "Dorian Henderson",
    "loser_school": "Missouri",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Jerome Ward",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Matthew Gevelinger",
    "loser_school": "Brown",
    "result": "TF 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Thomas Spellman",
    "winner_school": "Virginia Tech",
    "loser": "Christopher McNeil",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Louis Caputo",
    "winner_school": "Harvard",
    "loser": "Anthony Biondo",
    "loser_school": "Michigan",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Joshua Patterson",
    "winner_school": "Binghamton",
    "loser": "Mikal McKee",
    "loser_school": "UNC Greensboro",
    "result": "Fall 1:49"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Doug Umbehauer",
    "winner_school": "Rider",
    "loser": "David Thompson",
    "loser_school": "Bucknell",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Chris Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Chris Dagget",
    "loser_school": "Liberty",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Patrick Flynn",
    "winner_school": "Oklahoma",
    "loser": "Kenneth Caldwell",
    "loser_school": "Navy",
    "result": "Fall 0:37"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Mickey Moran",
    "loser_school": "Buffalo",
    "result": "Fall 2:28"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Joe Fagiano",
    "loser_school": "Hofstra",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Jesse Strawn",
    "winner_school": "Old Dominion",
    "loser": "Dennis Drury",
    "loser_school": "North Carolina",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Cayle Byers",
    "winner_school": "George Mason",
    "loser": "John McClure",
    "loser_school": "Eastern Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "Chad Beatty",
    "loser_school": "Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Jon Oplinger",
    "winner_school": "Drexel",
    "loser": "Dallas Herbst",
    "loser_school": "Wisconsin",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Eric Chine",
    "winner_school": "Kent State",
    "loser": "Brent Jones",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Eric Lapotsky",
    "winner_school": "Oklahoma",
    "loser": "Pat Bradshaw",
    "loser_school": "Edinboro",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Tyler Sorensen",
    "loser_school": "South Dakota State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Brent Chriswell",
    "winner_school": "Boise State",
    "loser": "Patrick Bond",
    "loser_school": "Illinois",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Luke Feist",
    "winner_school": "Stanford",
    "loser": "John Hall",
    "loser_school": "Boston University",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Andrew Anderson",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Max Askren",
    "winner_school": "Missouri",
    "loser": "Raymond Bennet",
    "loser_school": "Millersville",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Brandon Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "James Hamel",
    "loser_school": "Buffalo",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Andrew Delaney",
    "loser_school": "The Citadel",
    "result": "Fall 1:32"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Logan Brown",
    "winner_school": "Purdue",
    "loser": "Dan Tulley",
    "loser_school": "Duke",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Daniel Bruce",
    "loser_school": "Virginia Tech",
    "result": "TF 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Chris Birchler",
    "loser_school": "East Stroudsburg",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Dustin Rogers",
    "winner_school": "West Virginia",
    "loser": "Zach Hammond",
    "loser_school": "Cornell",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "John Wise",
    "winner_school": "Illinois",
    "loser": "Ricardo Alcala",
    "loser_school": "UC Davis",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Kyle Massey",
    "winner_school": "Wisconsin",
    "loser": "Tucker Lane",
    "loser_school": "Nebraska",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Konrad Dudziak",
    "winner_school": "Duke",
    "loser": "Josh Wine",
    "loser_school": "VMI",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Chris Brantley",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Dominick Russo",
    "winner_school": "Rutgers",
    "loser": "David Marone",
    "loser_school": "Virginia Tech",
    "result": "Fall 4:48"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Clayton Jack",
    "loser_school": "Oregon State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Jermail Porter",
    "winner_school": "Kent State",
    "loser": "Ed Bordas",
    "loser_school": "Rider",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Justin Dobies",
    "winner_school": "North Carolina",
    "loser": "Corey Morrison",
    "loser_school": "Ohio State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Dustin Porter",
    "loser_school": "Gardner-Webb",
    "result": "Fall 0:40"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Mitch Monteiro",
    "winner_school": "CSU Bakersfield",
    "loser": "Joe Fendone",
    "loser_school": "Edinboro",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Dan Erekson",
    "winner_school": "Iowa",
    "loser": "Nathan Fernandez",
    "loser_school": "Oklahoma",
    "result": "Fall 1:48"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Benjamin Berhow",
    "winner_school": "Minnesota",
    "loser": "Ryan Flores",
    "loser_school": "Columbia",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Rashad Goff",
    "winner_school": "Cleveland State",
    "loser": "Nate Everhart",
    "loser_school": "Indiana",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Zach Sheaffer",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Ian Moser",
    "winner_school": "Bloomsburg",
    "loser": "Derek Reber",
    "loser_school": "Bucknell",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Chris Notte",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Cory Fish",
    "winner_school": "Boise State",
    "loser": "Cody Cleveland",
    "loser_school": "Chattanooga",
    "result": "Fall 4:02"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "Cesar Grajales",
    "winner_school": "Penn",
    "loser": "George Hickman",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Jason Johnstone",
    "winner_school": "Ohio State",
    "loser": "Matt Dragon",
    "loser_school": "Penn",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Brandon Mason",
    "winner_school": "Oklahoma State",
    "loser": "Justin Zeerip",
    "loser_school": "Michigan",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Anthony Trongone",
    "winner_school": "Virginia Tech",
    "loser": "Hunter Meys",
    "loser_school": "Boston University",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Christopher McNeil",
    "winner_school": "Oklahoma State",
    "loser": "Justin Kerber",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Charles Silber",
    "winner_school": "American",
    "loser": "Daniel Bruce",
    "loser_school": "Virginia Tech",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Zach Hammond",
    "winner_school": "Cornell",
    "loser": "Trey McLean",
    "loser_school": "Penn",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Paul Donahoe",
    "winner_school": "Edinboro",
    "loser": "Bernard Futrell",
    "loser_school": "Illinois",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Rollie Peterkin",
    "winner_school": "Penn",
    "loser": "Tyler Clark",
    "loser_school": "Iowa State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Charlie Falck",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Michael Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Jarrod Garnett",
    "loser_school": "Virginia Tech",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Joey Fio",
    "winner_school": "Oklahoma",
    "loser": "Scott Sentes",
    "loser_school": "Central Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Steve Bonanno",
    "loser_school": "Hofstra",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Brendan Byrne",
    "winner_school": "Maryland",
    "loser": "Mike Watts",
    "loser_school": "Michigan",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Brandon Zoetewey",
    "winner_school": "CSU Bakersfield",
    "loser": "Demetrius Johnson",
    "loser_school": "Chattanooga",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Brad Pataky",
    "winner_school": "Penn State",
    "loser": "Jay Ivanco",
    "loser_school": "Clarion",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Nic Bedelyon",
    "winner_school": "Kent State",
    "loser": "Brian Owen",
    "loser_school": "Boise State",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Marcos Orozco",
    "winner_school": "UC Davis",
    "loser": "Anthony Mustari",
    "loser_school": "Northern Colorado",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Nikko Triggas",
    "winner_school": "Ohio State",
    "loser": "Ian Moser",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:21"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Prescott Garner",
    "winner_school": "Navy",
    "loser": "Eric Olanowski",
    "loser_school": "Michigan State",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Ode Blanc",
    "winner_school": "Oklahoma State",
    "loser": "William Chamberlain",
    "loser_school": "Duquesne",
    "result": "Fall 3:18"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "Filip Novachkov",
    "loser_school": "Cal Poly",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "Fall 6:49"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Steve Bell",
    "loser_school": "Maryland",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Daniel Dennis",
    "winner_school": "Iowa",
    "loser": "Tristen DeShazer",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Dan Mitcheff",
    "winner_school": "Kent State",
    "loser": "Dave Marble",
    "loser_school": "Bucknell",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Jake Strayer",
    "winner_school": "Penn State",
    "loser": "Nick Fanthorpe",
    "loser_school": "Iowa State",
    "result": "Dec 7-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Christian Smith",
    "loser_school": "Liberty",
    "result": "MD 16-7"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Jim Conroy",
    "winner_school": "Pittsburgh",
    "loser": "Matt Bonson",
    "loser_school": "Virginia",
    "result": "MD 17-5"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Rick Deubel",
    "winner_school": "Edinboro",
    "loser": "Tyler Dillashaw",
    "loser_school": "Cal State Fullerton",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Brandon Low",
    "winner_school": "UC Davis",
    "loser": "Conor Beebe",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Cory VomBaur",
    "winner_school": "Wyoming",
    "loser": "Frank Celorrio",
    "loser_school": "Appalachian State",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Darius Little",
    "loser_school": "NC State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Kyle Hutter",
    "winner_school": "Old Dominion",
    "loser": "Kelly Kubec",
    "loser_school": "Oregon State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Thomas Kimbrell",
    "winner_school": "CSU Bakersfield",
    "loser": "Matt Fisk",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Todd Schavrien",
    "winner_school": "Missouri",
    "loser": "Michael Rappo",
    "loser_school": "North Carolina",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Ryan Prater",
    "winner_school": "Illinois",
    "loser": "Kellan Russell",
    "loser_school": "Michigan",
    "result": "Fall 4:00"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Ryan Williams",
    "winner_school": "Old Dominion",
    "loser": "Joe Caramanica",
    "loser_school": "NC State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Drew Lashaway",
    "winner_school": "Kent State",
    "loser": "Marcus Hoehn",
    "loser_school": "Missouri",
    "result": "Dec 7-5 TB"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Alex Krom",
    "winner_school": "Maryland",
    "loser": "Jamal Parks",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Tyler Nauman",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Seth Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Chris Drouin",
    "winner_school": "Arizona State",
    "loser": "Trenton Washington",
    "loser_school": "Northern Iowa",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Nick Nelson",
    "winner_school": "Virginia",
    "loser": "Zach Tanelli",
    "loser_school": "Wisconsin",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Christopher Diaz",
    "winner_school": "Virginia Tech",
    "loser": "Elijah Nacita",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "William Simpson",
    "winner_school": "Army",
    "loser": "Mike Thorn",
    "loser_school": "Minnesota",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Keith Sulzer",
    "winner_school": "Northwestern",
    "loser": "Anthony D'Alie",
    "loser_school": "Central Michigan",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Justin Accordino",
    "winner_school": "Hofstra",
    "loser": "Adin Duenas",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Alex Tsirtsis",
    "winner_school": "Iowa",
    "loser": "Vincent Ramirez",
    "loser_school": "North Carolina",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Cory Fish",
    "winner_school": "Boise State",
    "loser": "Richard Rappo",
    "loser_school": "Penn",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Corey Jantzen",
    "loser_school": "Harvard",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Christopher Bencivenga",
    "winner_school": "UNC Greensboro",
    "loser": "Tim Harner",
    "loser_school": "Liberty",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Heinrich Barnes",
    "loser_school": "Oregon State",
    "result": "Fall 3:47"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Kyle Terry",
    "winner_school": "Oklahoma",
    "loser": "Matt Kyler",
    "loser_school": "Army",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Trevor Chinn",
    "loser_school": "Lehigh",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Mitch Mueller",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Desmond Green",
    "loser_school": "Buffalo",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "Steve Brown",
    "loser_school": "Central Michigan",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Bryce Saddoris",
    "winner_school": "Navy",
    "loser": "Kyle Borshoff",
    "loser_school": "American",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Paul Gillespie",
    "winner_school": "Hofstra",
    "loser": "Matt Fittery",
    "loser_school": "Lock Haven",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "David Jauregui",
    "winner_school": "West Virginia",
    "loser": "Bubba Jenkins",
    "loser_school": "Penn State",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Torsten Gillespie",
    "winner_school": "Edinboro",
    "loser": "Nicholas Stabile",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Michael Roberts",
    "winner_school": "Boston University",
    "loser": "Kellon Balum",
    "loser_school": "Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Cesar Grajales",
    "winner_school": "Penn",
    "loser": "Mitchell Polkowske",
    "loser_school": "Northern Colorado",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Matt Cathell",
    "loser_school": "Delaware State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "D.J. Meagher",
    "winner_school": "Cornell",
    "loser": "Peter Yates",
    "loser_school": "Virginia Tech",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "Trevor Kittleson",
    "winner_school": "Northern Iowa",
    "loser": "Daniel Waddell",
    "loser_school": "Chattanooga",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Robert Sanders",
    "loser_school": "Nebraska",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Colton Salazar",
    "loser_school": "Purdue",
    "result": "Fall 2:27"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Cyler Sanderson",
    "winner_school": "Iowa State",
    "loser": "Adam Hall",
    "loser_school": "Boise State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Neil Erisman",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Jason Welch",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Thomas Scotton",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Chase Pami",
    "loser_school": "Cal Poly",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Tyler Safratowich",
    "winner_school": "Minnesota",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Joseph Knox",
    "loser_school": "Chattanooga",
    "result": "MD 16-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Jonny Bonilla-Bowman",
    "winner_school": "Hofstra",
    "loser": "Ryan Goodman",
    "loser_school": "West Virginia",
    "result": "MD 18-10"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Scott Winston",
    "winner_school": "Rutgers",
    "loser": "Jason Johnstone",
    "loser_school": "Ohio State",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Kurt Kinser",
    "winner_school": "Indiana",
    "loser": "Jesse Dong",
    "loser_school": "Virginia Tech",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Aaron Hynes",
    "winner_school": "Michigan",
    "loser": "Kody Hamrah",
    "loser_school": "NC State",
    "result": "Dec 14-12"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Jedd Moore",
    "winner_school": "Virginia",
    "loser": "Shaun Smith",
    "loser_school": "Liberty",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Mike Kessler",
    "winner_school": "Rider",
    "loser": "Justin Gaethje",
    "loser_school": "Northern Colorado",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Bryan Deutsch",
    "winner_school": "Northern Illinois",
    "loser": "Anthony Jones",
    "loser_school": "Michigan State",
    "result": "Fall 1:11"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Chad Terry",
    "winner_school": "Oklahoma",
    "loser": "Hadley Harrison",
    "loser_school": "Clarion",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Ryan Patrovich",
    "winner_school": "Hofstra",
    "loser": "Keegan Mueller",
    "loser_school": "North Carolina",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Dan Vallimont",
    "loser_school": "Penn State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Nick Amuchastegui",
    "loser_school": "Stanford",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Tyler Sherfey",
    "loser_school": "Boise State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Jason Lapham",
    "loser_school": "Rider",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Colt Sponseller",
    "winner_school": "Ohio State",
    "loser": "Trevor Stewart",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Stephen Dwyer",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Rick Schmelyun",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Roger Smith-Bergsrud",
    "winner_school": "Illinois",
    "loser": "Ryan Smith",
    "loser_school": "Oklahoma",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Mike Galante",
    "winner_school": "Lehigh",
    "loser": "Chris Brown",
    "loser_school": "Old Dominion",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "William Garvin",
    "winner_school": "Chattanooga",
    "loser": "Matt Pletcher",
    "loser_school": "Rutgers",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Donnie Jones",
    "winner_school": "West Virginia",
    "loser": "Jeremy Brooks",
    "loser_school": "Millersville",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Keegan Davis",
    "winner_school": "Oregon State",
    "loser": "Paul Young",
    "loser_school": "Indiana",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Rex Kendle",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Ethan Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Brandon Mason",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Luke Manuel",
    "winner_school": "Purdue",
    "loser": "Mack Lewnes",
    "loser_school": "Cornell",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Luke Rebertus",
    "loser_school": "Navy",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Chris Henrich",
    "winner_school": "Virginia",
    "loser": "Newly McSpadden",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Ryan Duke Burk",
    "loser_school": "Iowa State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Trevor Perry",
    "loser_school": "Indiana",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Brandon Browne",
    "winner_school": "Nebraska",
    "loser": "Nathan Lee",
    "loser_school": "Boise State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Steve Anceravage",
    "loser_school": "Cornell",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Mike Miller",
    "winner_school": "Central Michigan",
    "loser": "Scott Giffin",
    "loser_school": "Penn",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "John Dergo",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Alex Caruso",
    "winner_school": "Lehigh",
    "loser": "Jason McCroskey",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Kurt Brenner",
    "winner_school": "West Virginia",
    "loser": "Bagna Tovuujav",
    "loser_school": "George Mason",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Jeff James",
    "winner_school": "Oklahoma",
    "loser": "Byron Sigmon",
    "loser_school": "UNC Greensboro",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Eric Decker",
    "winner_school": "Old Dominion",
    "loser": "Nate Rock",
    "loser_school": "Buffalo",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Anthony Trongone",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Shane Riccio",
    "winner_school": "Bucknell",
    "loser": "Alton Lucas",
    "loser_school": "Hofstra",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Dave Rella",
    "winner_school": "Ohio State",
    "loser": "Shane Smith",
    "loser_school": "Michigan State",
    "result": "MD 20-6"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Ian Hinton",
    "winner_school": "Michigan State",
    "loser": "Justin Herbert",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Alex Dolly",
    "loser_school": "Northern Iowa",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "David Craig",
    "loser_school": "Lehigh",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Vince Jones",
    "winner_school": "Nebraska",
    "loser": "A.J. Kissel",
    "loser_school": "Purdue",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Vincenzo DiDona",
    "loser_school": "Central Michigan",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Thomas Spellman",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Louis Caputo",
    "winner_school": "Harvard",
    "loser": "Joshua Patterson",
    "loser_school": "Binghamton",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Doug Umbehauer",
    "winner_school": "Rider",
    "loser": "Chris Honeycutt",
    "loser_school": "Edinboro",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Patrick Flynn",
    "loser_school": "Oklahoma",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Kenneth Caldwell",
    "winner_school": "Navy",
    "loser": "Mickey Moran",
    "loser_school": "Buffalo",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "David Thompson",
    "winner_school": "Bucknell",
    "loser": "Chris Dagget",
    "loser_school": "Liberty",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Mikal McKee",
    "winner_school": "UNC Greensboro",
    "loser": "Anthony Biondo",
    "loser_school": "Michigan",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Christopher McNeil",
    "winner_school": "Oklahoma State",
    "loser": "Matthew Gevelinger",
    "loser_school": "Brown",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Jerome Ward",
    "winner_school": "Iowa State",
    "loser": "Dorian Henderson",
    "loser_school": "Missouri",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Riley Orozco",
    "loser_school": "CSU Bakersfield",
    "result": "TF 16-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Rocco Caponi",
    "winner_school": "Virginia",
    "loser": "Jordan Blanton",
    "loser_school": "Illinois",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Eric Cameron",
    "winner_school": "Indiana",
    "loser": "John Barone",
    "loser_school": "Duke",
    "result": "Fall 0:50"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Jesse Strawn",
    "loser_school": "Old Dominion",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Cayle Byers",
    "winner_school": "George Mason",
    "loser": "Clayton Foster",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-4 TB"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Jon Oplinger",
    "winner_school": "Drexel",
    "loser": "Eric Chine",
    "loser_school": "Kent State",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Eric Lapotsky",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Brent Chriswell",
    "winner_school": "Boise State",
    "loser": "Luke Feist",
    "loser_school": "Stanford",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Max Askren",
    "winner_school": "Missouri",
    "loser": "Cam Simaz",
    "loser_school": "Cornell",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Brandon Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Hudson Taylor",
    "loser_school": "Maryland",
    "result": "Fall 0:40"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Logan Brown",
    "loser_school": "Purdue",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Charles Silber",
    "winner_school": "American",
    "loser": "Dan Tulley",
    "loser_school": "Duke",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "James Hamel",
    "winner_school": "Buffalo",
    "loser": "Andrew Delaney",
    "loser_school": "The Citadel",
    "result": "MD 14-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Andrew Anderson",
    "winner_school": "Northern Iowa",
    "loser": "Raymond Bennet",
    "loser_school": "Millersville",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Patrick Bond",
    "winner_school": "Illinois",
    "loser": "John Hall",
    "loser_school": "Boston University",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Pat Bradshaw",
    "winner_school": "Edinboro",
    "loser": "Tyler Sorensen",
    "loser_school": "South Dakota State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Dallas Herbst",
    "winner_school": "Wisconsin",
    "loser": "Brent Jones",
    "loser_school": "Virginia",
    "result": "Fall 1:11"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Chad Beatty",
    "winner_school": "Iowa",
    "loser": "John McClure",
    "loser_school": "Eastern Michigan",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Joe Fagiano",
    "winner_school": "Hofstra",
    "loser": "Dennis Drury",
    "loser_school": "North Carolina",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Dustin Rogers",
    "loser_school": "West Virginia",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "John Wise",
    "winner_school": "Illinois",
    "loser": "Kyle Massey",
    "loser_school": "Wisconsin",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Konrad Dudziak",
    "winner_school": "Duke",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Dominick Russo",
    "loser_school": "Rutgers",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Jermail Porter",
    "winner_school": "Kent State",
    "loser": "Justin Dobies",
    "loser_school": "North Carolina",
    "result": "Fall 3:47"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Mitch Monteiro",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Dan Erekson",
    "winner_school": "Iowa",
    "loser": "Benjamin Berhow",
    "loser_school": "Minnesota",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Rashad Goff",
    "loser_school": "Cleveland State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Zach Sheaffer",
    "winner_school": "Pittsburgh",
    "loser": "Nate Everhart",
    "loser_school": "Indiana",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Nathan Fernandez",
    "winner_school": "Oklahoma",
    "loser": "Ryan Flores",
    "loser_school": "Columbia",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Joe Fendone",
    "winner_school": "Edinboro",
    "loser": "Dustin Porter",
    "loser_school": "Gardner-Webb",
    "result": "Fall 2:04"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Corey Morrison",
    "winner_school": "Ohio State",
    "loser": "Ed Bordas",
    "loser_school": "Rider",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "David Marone",
    "winner_school": "Virginia Tech",
    "loser": "Clayton Jack",
    "loser_school": "Oregon State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Chris Brantley",
    "winner_school": "Northern Iowa",
    "loser": "Josh Wine",
    "loser_school": "VMI",
    "result": "MD 15-7"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Tucker Lane",
    "winner_school": "Nebraska",
    "loser": "Ricardo Alcala",
    "loser_school": "UC Davis",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Chris Birchler",
    "winner_school": "East Stroudsburg",
    "loser": "Zach Hammond",
    "loser_school": "Cornell",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Charlie Falck",
    "winner_school": "Iowa",
    "loser": "Brendan Byrne",
    "loser_school": "Maryland",
    "result": "Fall 6:30"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Brandon Zoetewey",
    "winner_school": "CSU Bakersfield",
    "loser": "Michael Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Brad Pataky",
    "winner_school": "Penn State",
    "loser": "Bernard Futrell",
    "loser_school": "Illinois",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Nic Bedelyon",
    "winner_school": "Kent State",
    "loser": "Tyler Clark",
    "loser_school": "Iowa State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Scott Sentes",
    "winner_school": "Central Michigan",
    "loser": "Marcos Orozco",
    "loser_school": "UC Davis",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Nikko Triggas",
    "winner_school": "Ohio State",
    "loser": "Steve Bonanno",
    "loser_school": "Hofstra",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Prescott Garner",
    "loser_school": "Navy",
    "result": "MD 18-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Ode Blanc",
    "winner_school": "Oklahoma State",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Jim Conroy",
    "loser_school": "Pittsburgh",
    "result": "Dec 14-8"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Tristen DeShazer",
    "winner_school": "Northern Illinois",
    "loser": "Rick Deubel",
    "loser_school": "Edinboro",
    "result": "Fall 2:06"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Brandon Low",
    "winner_school": "UC Davis",
    "loser": "Filip Novachkov",
    "loser_school": "Cal Poly",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Cory VomBaur",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Nick Fanthorpe",
    "loser_school": "Iowa State",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Kyle Hutter",
    "winner_school": "Old Dominion",
    "loser": "Christian Smith",
    "loser_school": "Liberty",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Dave Marble",
    "winner_school": "Bucknell",
    "loser": "Thomas Kimbrell",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 14-9"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Todd Schavrien",
    "loser_school": "Missouri",
    "result": "MD 19-7"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Christopher Diaz",
    "winner_school": "Virginia Tech",
    "loser": "Marcus Hoehn",
    "loser_school": "Missouri",
    "result": "MD 16-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "William Simpson",
    "loser_school": "Army",
    "result": "MD 15-7"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Kellan Russell",
    "winner_school": "Michigan",
    "loser": "Keith Sulzer",
    "loser_school": "Northwestern",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Justin Accordino",
    "winner_school": "Hofstra",
    "loser": "Joe Caramanica",
    "loser_school": "NC State",
    "result": "Dec 11-6 SV"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Alex Tsirtsis",
    "winner_school": "Iowa",
    "loser": "Trenton Washington",
    "loser_school": "Northern Iowa",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Cory Fish",
    "loser_school": "Boise State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Tyler Nauman",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Seth Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Christopher Bencivenga",
    "loser_school": "UNC Greensboro",
    "result": "Fall 1:37"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Trevor Chinn",
    "winner_school": "Lehigh",
    "loser": "David Jauregui",
    "loser_school": "West Virginia",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Mitch Mueller",
    "winner_school": "Iowa State",
    "loser": "Torsten Gillespie",
    "loser_school": "Edinboro",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Heinrich Barnes",
    "winner_school": "Oregon State",
    "loser": "Michael Roberts",
    "loser_school": "Boston University",
    "result": "MD 14-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Cesar Grajales",
    "winner_school": "Penn",
    "loser": "Matt Kyler",
    "loser_school": "Army",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Kyle Borshoff",
    "winner_school": "American",
    "loser": "Jason Chamberlain",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Matt Fittery",
    "winner_school": "Lock Haven",
    "loser": "D.J. Meagher",
    "loser_school": "Cornell",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Desmond Green",
    "winner_school": "Buffalo",
    "loser": "Trevor Kittleson",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Steve Brown",
    "winner_school": "Central Michigan",
    "loser": "Kevin LeValley",
    "loser_school": "Bucknell",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Jonny Bonilla-Bowman",
    "winner_school": "Hofstra",
    "loser": "Neil Erisman",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "Scott Winston",
    "loser_school": "Rutgers",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Colton Salazar",
    "winner_school": "Purdue",
    "loser": "Kurt Kinser",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Aaron Hynes",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Jedd Moore",
    "loser_school": "Virginia",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Joseph Knox",
    "winner_school": "Chattanooga",
    "loser": "Mike Kessler",
    "loser_school": "Rider",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Thomas Scotton",
    "winner_school": "North Carolina",
    "loser": "Bryan Deutsch",
    "loser_school": "Northern Illinois",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Chase Pami",
    "winner_school": "Cal Poly",
    "loser": "Chad Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Roger Smith-Bergsrud",
    "winner_school": "Illinois",
    "loser": "Nick Amuchastegui",
    "loser_school": "Stanford",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Tyler Sherfey",
    "winner_school": "Boise State",
    "loser": "Mike Galante",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "William Garvin",
    "winner_school": "Chattanooga",
    "loser": "Keegan Mueller",
    "loser_school": "North Carolina",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Donnie Jones",
    "loser_school": "West Virginia",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Keegan Davis",
    "loser_school": "Oregon State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Rick Schmelyun",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Ethan Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Jason Lapham",
    "loser_school": "Rider",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Trevor Stewart",
    "winner_school": "Central Michigan",
    "loser": "Luke Manuel",
    "loser_school": "Purdue",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Ryan Duke Burk",
    "winner_school": "Iowa State",
    "loser": "Alex Caruso",
    "loser_school": "Lehigh",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Trevor Perry",
    "winner_school": "Indiana",
    "loser": "Kurt Brenner",
    "loser_school": "West Virginia",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Luke Rebertus",
    "winner_school": "Navy",
    "loser": "Jeff James",
    "loser_school": "Oklahoma",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Newly McSpadden",
    "winner_school": "Oklahoma State",
    "loser": "Eric Decker",
    "loser_school": "Old Dominion",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Scott Giffin",
    "loser_school": "Penn",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Shane Riccio",
    "loser_school": "Bucknell",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Nathan Lee",
    "winner_school": "Boise State",
    "loser": "Dave Rella",
    "loser_school": "Ohio State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Ian Hinton",
    "loser_school": "Michigan State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "A.J. Kissel",
    "winner_school": "Purdue",
    "loser": "Kenneth Caldwell",
    "loser_school": "Navy",
    "result": "Fall 2:36"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Vincenzo DiDona",
    "winner_school": "Central Michigan",
    "loser": "David Thompson",
    "loser_school": "Bucknell",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Alex Dolly",
    "winner_school": "Northern Iowa",
    "loser": "Mikal McKee",
    "loser_school": "UNC Greensboro",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "David Craig",
    "winner_school": "Lehigh",
    "loser": "Christopher McNeil",
    "loser_school": "Oklahoma State",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Chris Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Jerome Ward",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Patrick Flynn",
    "loser_school": "Oklahoma",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Rocco Caponi",
    "winner_school": "Virginia",
    "loser": "Thomas Spellman",
    "loser_school": "Virginia Tech",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Joshua Patterson",
    "winner_school": "Binghamton",
    "loser": "Eric Cameron",
    "loser_school": "Indiana",
    "result": "Fall 1:02"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Eric Chine",
    "winner_school": "Kent State",
    "loser": "Charles Silber",
    "loser_school": "American",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Eric Lapotsky",
    "winner_school": "Oklahoma",
    "loser": "James Hamel",
    "loser_school": "Buffalo",
    "result": "Fall 4:16"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Jesse Strawn",
    "winner_school": "Old Dominion",
    "loser": "Andrew Anderson",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "Patrick Bond",
    "loser_school": "Illinois",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Pat Bradshaw",
    "loser_school": "Edinboro",
    "result": "Fall 1:21"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Dallas Herbst",
    "winner_school": "Wisconsin",
    "loser": "Logan Brown",
    "loser_school": "Purdue",
    "result": "Fall 1:52"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Luke Feist",
    "winner_school": "Stanford",
    "loser": "Chad Beatty",
    "loser_school": "Iowa",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Joe Fagiano",
    "loser_school": "Hofstra",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Zach Sheaffer",
    "winner_school": "Pittsburgh",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Dominick Russo",
    "winner_school": "Rutgers",
    "loser": "Nathan Fernandez",
    "loser_school": "Oklahoma",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Joe Fendone",
    "winner_school": "Edinboro",
    "loser": "Dustin Rogers",
    "loser_school": "West Virginia",
    "result": "Fall 1:22"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Kyle Massey",
    "winner_school": "Wisconsin",
    "loser": "Corey Morrison",
    "loser_school": "Ohio State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "David Marone",
    "winner_school": "Virginia Tech",
    "loser": "Benjamin Berhow",
    "loser_school": "Minnesota",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Rashad Goff",
    "winner_school": "Cleveland State",
    "loser": "Chris Brantley",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Tucker Lane",
    "winner_school": "Nebraska",
    "loser": "Justin Dobies",
    "loser_school": "North Carolina",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Chris Birchler",
    "winner_school": "East Stroudsburg",
    "loser": "Mitch Monteiro",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Paul Donahoe",
    "winner_school": "Edinboro",
    "loser": "Rollie Peterkin",
    "loser_school": "Penn",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Brandon Precin",
    "loser_school": "Northwestern",
    "result": "MD 9-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Zachary Sanders",
    "loser_school": "Minnesota",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Joey Fio",
    "loser_school": "Oklahoma",
    "result": "Fall 0:14"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Charlie Falck",
    "winner_school": "Iowa",
    "loser": "Brandon Zoetewey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Nic Bedelyon",
    "winner_school": "Kent State",
    "loser": "Brad Pataky",
    "loser_school": "Penn State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Scott Sentes",
    "winner_school": "Central Michigan",
    "loser": "Nikko Triggas",
    "loser_school": "Ohio State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Ode Blanc",
    "winner_school": "Oklahoma State",
    "loser": "Jarrod Garnett",
    "loser_school": "Virginia Tech",
    "result": "MD 17-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "Lou Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Daniel Dennis",
    "loser_school": "Iowa",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Dan Mitcheff",
    "loser_school": "Kent State",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Jake Strayer",
    "loser_school": "Penn State",
    "result": "MD 15-6"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Tristen DeShazer",
    "loser_school": "Northern Illinois",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Brandon Low",
    "loser_school": "UC Davis",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Kyle Hutter",
    "loser_school": "Old Dominion",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Dave Marble",
    "loser_school": "Bucknell",
    "result": "MD 13-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Ryan Williams",
    "winner_school": "Old Dominion",
    "loser": "Ryan Prater",
    "loser_school": "Illinois",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Alex Krom",
    "winner_school": "Maryland",
    "loser": "Drew Lashaway",
    "loser_school": "Kent State",
    "result": "MD 10-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Nick Gallick",
    "loser_school": "Iowa State",
    "result": "Fall 1:48"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Chris Drouin",
    "winner_school": "Arizona State",
    "loser": "Nick Nelson",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Christopher Diaz",
    "winner_school": "Virginia Tech",
    "loser": "Jamal Parks",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Kellan Russell",
    "winner_school": "Michigan",
    "loser": "Justin Accordino",
    "loser_school": "Hofstra",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Alex Tsirtsis",
    "loser_school": "Iowa",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Seth Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Kyle Terry",
    "loser_school": "Oklahoma",
    "result": "MD 14-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Kyle Ruschell",
    "loser_school": "Wisconsin",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Jake Patacsil",
    "loser_school": "Purdue",
    "result": "MD 10-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Bryce Saddoris",
    "winner_school": "Navy",
    "loser": "Paul Gillespie",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Mitch Mueller",
    "winner_school": "Iowa State",
    "loser": "Trevor Chinn",
    "loser_school": "Lehigh",
    "result": "Fall 0:44"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Heinrich Barnes",
    "winner_school": "Oregon State",
    "loser": "Cesar Grajales",
    "loser_school": "Penn",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Kyle Borshoff",
    "winner_school": "American",
    "loser": "Matt Fittery",
    "loser_school": "Lock Haven",
    "result": "Fall 5:49"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Steve Brown",
    "winner_school": "Central Michigan",
    "loser": "Desmond Green",
    "loser_school": "Buffalo",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Cyler Sanderson",
    "loser_school": "Iowa State",
    "result": "MD 14-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "J.P. O'Connor",
    "loser_school": "Harvard",
    "result": "Dec 1-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Michael Chandler",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Tyler Safratowich",
    "loser_school": "Minnesota",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Jonny Bonilla-Bowman",
    "winner_school": "Hofstra",
    "loser": "Jason Welch",
    "loser_school": "Northwestern",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Colton Salazar",
    "loser_school": "Purdue",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Joseph Knox",
    "loser_school": "Chattanooga",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Chase Pami",
    "winner_school": "Cal Poly",
    "loser": "Thomas Scotton",
    "loser_school": "North Carolina",
    "result": "Dec 7-4 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Ryan Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Moza Fay",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Colt Sponseller",
    "loser_school": "Ohio State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Andrew Rendos",
    "loser_school": "Bucknell",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Tyler Sherfey",
    "winner_school": "Boise State",
    "loser": "Roger Smith-Bergsrud",
    "loser_school": "Illinois",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "William Garvin",
    "loser_school": "Chattanooga",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Stephen Dwyer",
    "loser_school": "Nebraska",
    "result": "Dec 7-5 TB"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Trevor Stewart",
    "winner_school": "Central Michigan",
    "loser": "Ethan Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Chris Henrich",
    "loser_school": "Virginia",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Jay Borschel",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Brandon Browne",
    "winner_school": "Nebraska",
    "loser": "Quentin Wright",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Mike Miller",
    "winner_school": "Central Michigan",
    "loser": "Michael Cannon",
    "loser_school": "American",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Trevor Perry",
    "winner_school": "Indiana",
    "loser": "Ryan Duke Burk",
    "loser_school": "Iowa State",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Newly McSpadden",
    "winner_school": "Oklahoma State",
    "loser": "Luke Rebertus",
    "loser_school": "Navy",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Shane Onufer",
    "loser_school": "Wyoming",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Nathan Lee",
    "loser_school": "Boise State",
    "result": "Dec 11-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Joe LeBlanc",
    "loser_school": "Wyoming",
    "result": "MD 18-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Vince Jones",
    "winner_school": "Nebraska",
    "loser": "Kirk Smith",
    "loser_school": "Boise State",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Louis Caputo",
    "loser_school": "Harvard",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Doug Umbehauer",
    "winner_school": "Rider",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 8-4 TB"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "A.J. Kissel",
    "winner_school": "Purdue",
    "loser": "Vincenzo DiDona",
    "loser_school": "Central Michigan",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Alex Dolly",
    "winner_school": "Northern Iowa",
    "loser": "David Craig",
    "loser_school": "Lehigh",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Chris Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Dustin Kilgore",
    "loser_school": "Kent State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Joshua Patterson",
    "winner_school": "Binghamton",
    "loser": "Rocco Caponi",
    "loser_school": "Virginia",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Cayle Byers",
    "loser_school": "George Mason",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Jon Oplinger",
    "loser_school": "Drexel",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Max Askren",
    "winner_school": "Missouri",
    "loser": "Brent Chriswell",
    "loser_school": "Boise State",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Brandon Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Eric Lapotsky",
    "winner_school": "Oklahoma",
    "loser": "Eric Chine",
    "loser_school": "Kent State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Jesse Strawn",
    "winner_school": "Old Dominion",
    "loser": "Clayton Foster",
    "loser_school": "Oklahoma State",
    "result": "Fall 6:02"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Dallas Herbst",
    "loser_school": "Wisconsin",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Luke Feist",
    "loser_school": "Stanford",
    "result": "MD 14-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "John Wise",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Konrad Dudziak",
    "winner_school": "Duke",
    "loser": "Jared Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Jermail Porter",
    "winner_school": "Kent State",
    "loser": "Zachery Rey",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Dan Erekson",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Zach Sheaffer",
    "winner_school": "Pittsburgh",
    "loser": "Dominick Russo",
    "loser_school": "Rutgers",
    "result": "Fall 2:39"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Joe Fendone",
    "winner_school": "Edinboro",
    "loser": "Kyle Massey",
    "loser_school": "Wisconsin",
    "result": "Fall 3:52"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "David Marone",
    "winner_school": "Virginia Tech",
    "loser": "Rashad Goff",
    "loser_school": "Cleveland State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Chris Birchler",
    "winner_school": "East Stroudsburg",
    "loser": "Tucker Lane",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Charlie Falck",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Nic Bedelyon",
    "winner_school": "Kent State",
    "loser": "Joey Fio",
    "loser_school": "Oklahoma",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Scott Sentes",
    "winner_school": "Central Michigan",
    "loser": "Rollie Peterkin",
    "loser_school": "Penn",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Ode Blanc",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Dan Mitcheff",
    "loser_school": "Kent State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Joe Baker",
    "winner_school": "Navy",
    "loser": "Jake Strayer",
    "loser_school": "Penn State",
    "result": "DEF"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Lou Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Daniel Dennis",
    "winner_school": "Iowa",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Christopher Diaz",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Kellan Russell",
    "winner_school": "Michigan",
    "loser": "Nick Nelson",
    "loser_school": "Virginia",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Ryan Prater",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Drew Lashaway",
    "loser_school": "Kent State",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "Mitch Mueller",
    "loser_school": "Iowa State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Heinrich Barnes",
    "winner_school": "Oregon State",
    "loser": "Paul Gillespie",
    "loser_school": "Hofstra",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Kyle Borshoff",
    "winner_school": "American",
    "loser": "Kyle Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Steve Brown",
    "loser_school": "Central Michigan",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Jonny Bonilla-Bowman",
    "loser_school": "Hofstra",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Tyler Safratowich",
    "winner_school": "Minnesota",
    "loser": "Adam Hall",
    "loser_school": "Boise State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Cyler Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Chase Pami",
    "winner_school": "Cal Poly",
    "loser": "J.P. O'Connor",
    "loser_school": "Harvard",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Tyler Sherfey",
    "winner_school": "Boise State",
    "loser": "Colt Sponseller",
    "loser_school": "Ohio State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Dan Vallimont",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Ryan Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Trevor Stewart",
    "loser_school": "Central Michigan",
    "result": "Fall 4:08"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Trevor Perry",
    "loser_school": "Indiana",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Newly McSpadden",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Chris Henrich",
    "winner_school": "Virginia",
    "loser": "John Dergo",
    "loser_school": "Illinois",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Jay Borschel",
    "loser_school": "Iowa",
    "result": "Fall 1:54"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Louis Caputo",
    "winner_school": "Harvard",
    "loser": "A.J. Kissel",
    "loser_school": "Purdue",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Alex Dolly",
    "loser_school": "Northern Iowa",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Chris Honeycutt",
    "loser_school": "Edinboro",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Joshua Patterson",
    "winner_school": "Binghamton",
    "loser": "Kirk Smith",
    "loser_school": "Boise State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Brent Chriswell",
    "winner_school": "Boise State",
    "loser": "Eric Lapotsky",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Brandon Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Jesse Strawn",
    "loser_school": "Old Dominion",
    "result": "MD 14-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Cayle Byers",
    "loser_school": "George Mason",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Jon Oplinger",
    "loser_school": "Drexel",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Zach Sheaffer",
    "winner_school": "Pittsburgh",
    "loser": "Zachery Rey",
    "loser_school": "Lehigh",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Dan Erekson",
    "winner_school": "Iowa",
    "loser": "Joe Fendone",
    "loser_school": "Edinboro",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "John Wise",
    "winner_school": "Illinois",
    "loser": "David Marone",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Chris Birchler",
    "loser_school": "East Stroudsburg",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Paul Donahoe",
    "winner_school": "Edinboro",
    "loser": "Anthony Robles",
    "loser_school": "Arizona State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Angel Escobedo",
    "loser_school": "Indiana",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Nic Bedelyon",
    "loser_school": "Kent State",
    "result": "MD 9-0"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Scott Sentes",
    "loser_school": "Central Michigan",
    "result": "MD 13-2"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "Andrew Hochstrasser",
    "loser_school": "Boise State",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Jayson Ness",
    "loser_school": "Minnesota",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "M FOR"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Daniel Dennis",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Ryan Williams",
    "winner_school": "Old Dominion",
    "loser": "Alex Krom",
    "loser_school": "Maryland",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Chris Drouin",
    "loser_school": "Arizona State",
    "result": "Fall 4:27"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Kellan Russell",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Frank Molinaro",
    "loser_school": "Penn State",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Lance Palmer",
    "loser_school": "Ohio State",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Bryce Saddoris",
    "loser_school": "Navy",
    "result": "MD 13-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "Heinrich Barnes",
    "loser_school": "Oregon State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Kyle Borshoff",
    "loser_school": "American",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Gregor Gillespie",
    "loser_school": "Edinboro",
    "result": "MD 13-4"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Michael Poeta",
    "winner_school": "Illinois",
    "loser": "Jordan Leen",
    "loser_school": "Cornell",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Tyler Safratowich",
    "loser_school": "Minnesota",
    "result": "MD 13-5"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Chase Pami",
    "loser_school": "Cal Poly",
    "result": "Dec 8-3"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Jonathan Reader",
    "loser_school": "Iowa State",
    "result": "Dec 6-6 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Ryan Morningstar",
    "loser_school": "Iowa",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Tyler Sherfey",
    "loser_school": "Boise State",
    "result": "MD 11-2"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Moza Fay",
    "winner_school": "Northern Iowa",
    "loser": "Nick Marable",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Raymond Jordan",
    "loser_school": "Missouri",
    "result": "Dec 4-2 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Mike Miller",
    "winner_school": "Central Michigan",
    "loser": "Brandon Browne",
    "loser_school": "Nebraska",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Michael Cannon",
    "loser_school": "American",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Chris Henrich",
    "loser_school": "Virginia",
    "result": "Fall 4:10"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Vince Jones",
    "loser_school": "Nebraska",
    "result": "MD 11-1"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Doug Umbehauer",
    "loser_school": "Rider",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Louis Caputo",
    "loser_school": "Harvard",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Joshua Patterson",
    "loser_school": "Binghamton",
    "result": "Fall 2:30"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Tyrel Todd",
    "loser_school": "Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Max Askren",
    "loser_school": "Missouri",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Brent Chriswell",
    "winner_school": "Boise State",
    "loser": "Brandon Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Cam Simaz",
    "loser_school": "Cornell",
    "result": "Fall 2:45"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Konrad Dudziak",
    "winner_school": "Duke",
    "loser": "David Zabriskie",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Jermail Porter",
    "loser_school": "Kent State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Dan Erekson",
    "winner_school": "Iowa",
    "loser": "Zach Sheaffer",
    "loser_school": "Pittsburgh",
    "result": "DEF"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "John Wise",
    "loser_school": "Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Zachary Sanders",
    "loser_school": "Minnesota",
    "result": "MD 19-10"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Angel Escobedo",
    "loser_school": "Indiana",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Steve Bell",
    "loser_school": "Maryland",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "James Kennedy",
    "loser_school": "Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Alex Krom",
    "loser_school": "Maryland",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Zach Tanelli",
    "winner_school": "Wisconsin",
    "loser": "Chris Drouin",
    "loser_school": "Arizona State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Jake Patacsil",
    "loser_school": "Purdue",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Bryce Saddoris",
    "loser_school": "Navy",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Gregor Gillespie",
    "winner_school": "Edinboro",
    "loser": "Michael Chandler",
    "loser_school": "Missouri",
    "result": "MD 10-2"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Andrew Rendos",
    "loser_school": "Bucknell",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Moza Fay",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Quentin Wright",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Brandon Browne",
    "winner_school": "Nebraska",
    "loser": "Steve Anceravage",
    "loser_school": "Cornell",
    "result": "Fall 7:18"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Vince Jones",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Doug Umbehauer",
    "winner_school": "Rider",
    "loser": "Joe LeBlanc",
    "loser_school": "Wyoming",
    "result": "Dec 13-11 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Tyrel Todd",
    "winner_school": "Michigan",
    "loser": "Brent Chriswell",
    "loser_school": "Boise State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Max Askren",
    "loser_school": "Missouri",
    "result": "MD 8-0"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Dan Erekson",
    "winner_school": "Iowa",
    "loser": "David Zabriskie",
    "loser_school": "Iowa State",
    "result": "Fall 1:31"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Jermail Porter",
    "loser_school": "Kent State",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Anthony Robles",
    "loser_school": "Arizona State",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Zachary Sanders",
    "loser_school": "Minnesota",
    "result": "MD 8-0"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Scott Sentes",
    "winner_school": "Central Michigan",
    "loser": "Nic Bedelyon",
    "loser_school": "Kent State",
    "result": "Dec 7-2"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Andrew Hochstrasser",
    "loser_school": "Boise State",
    "result": "MD 14-6"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Steve Bell",
    "loser_school": "Maryland",
    "result": "TF 16-0"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Daniel Dennis",
    "winner_school": "Iowa",
    "loser": "Joe Baker",
    "loser_school": "Navy",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Nick Gallick",
    "winner_school": "Iowa State",
    "loser": "Zach Tanelli",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Alex Krom",
    "winner_school": "Maryland",
    "loser": "Chris Drouin",
    "loser_school": "Arizona State",
    "result": "Dec 4-0"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Kellan Russell",
    "winner_school": "Michigan",
    "loser": "Frank Molinaro",
    "loser_school": "Penn State",
    "result": "Dec 7-4"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Lance Palmer",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Jake Patacsil",
    "winner_school": "Purdue",
    "loser": "Bryce Saddoris",
    "loser_school": "Navy",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Kyle Borshoff",
    "winner_school": "American",
    "loser": "Heinrich Barnes",
    "loser_school": "Oregon State",
    "result": "MD 9-1"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Jordan Leen",
    "winner_school": "Cornell",
    "loser": "Gregor Gillespie",
    "loser_school": "Edinboro",
    "result": "Dec 4-0"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Michael Chandler",
    "winner_school": "Missouri",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "Dec 2-1"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Chase Pami",
    "winner_school": "Cal Poly",
    "loser": "Tyler Safratowich",
    "loser_school": "Minnesota",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Jonathan Reader",
    "loser_school": "Iowa State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Moza Fay",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Tyler Sherfey",
    "loser_school": "Boise State",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Raymond Jordan",
    "winner_school": "Missouri",
    "loser": "Brandon Browne",
    "loser_school": "Nebraska",
    "result": "Dec 4-0"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Steve Anceravage",
    "winner_school": "Cornell",
    "loser": "Quentin Wright",
    "loser_school": "Penn State",
    "result": "MD 13-3"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Chris Henrich",
    "winner_school": "Virginia",
    "loser": "Michael Cannon",
    "loser_school": "American",
    "result": "MD 13-3"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Doug Umbehauer",
    "winner_school": "Rider",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Vince Jones",
    "loser_school": "Nebraska",
    "result": "Dec 9-2"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Joshua Patterson",
    "winner_school": "Binghamton",
    "loser": "Louis Caputo",
    "loser_school": "Harvard",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Tyrel Todd",
    "loser_school": "Michigan",
    "result": "Dec 11-4"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Max Askren",
    "winner_school": "Missouri",
    "loser": "Brent Chriswell",
    "loser_school": "Boise State",
    "result": "Dec 3-0"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Brandon Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Cam Simaz",
    "loser_school": "Cornell",
    "result": "MD 14-4"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Dan Erekson",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Jermail Porter",
    "loser_school": "Kent State",
    "result": "Dec 4-2"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "John Wise",
    "winner_school": "Illinois",
    "loser": "Zach Sheaffer",
    "loser_school": "Pittsburgh",
    "result": "M FOR"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Paul Donahoe",
    "loser_school": "Edinboro",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Frank Gomez",
    "winner_school": "Michigan State",
    "loser": "Reece Humphrey",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "J Jaggers",
    "winner_school": "Ohio State",
    "loser": "Ryan Williams",
    "loser_school": "Old Dominion",
    "result": "Dec 10-4"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Brent Metcalf",
    "loser_school": "Iowa",
    "result": "Dec 11-6"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Michael Poeta",
    "loser_school": "Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Andrew Howe",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Steve Luke",
    "winner_school": "Michigan",
    "loser": "Mike Miller",
    "loser_school": "Central Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Jake Herbert",
    "winner_school": "Northwestern",
    "loser": "Mike Pucillo",
    "loser_school": "Ohio State",
    "result": "Dec 6-3"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Craig Brester",
    "loser_school": "Nebraska",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Konrad Dudziak",
    "loser_school": "Duke",
    "result": "Dec 3-2 TB"
  }
];
