// 2010 NCAA Division I Wrestling Championships -- transcribed from the official NCAA final brackets (bout numbers, explicit result codes).
// Schools from the year-aware school-code map (codes1011.json). Byes are NOT rows (see HistoricalSeeds.facts byes).
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Jason Lara",
    "winner_school": "Oregon State",
    "loser": "Eric Morrill",
    "loser_school": "Edinboro",
    "result": "Dec 9-6"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Matthew Fisk",
    "winner_school": "Lehigh",
    "loser": "Scotti Sentes",
    "loser_school": "Central Michigan",
    "result": "Fall 3:29"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Kenneth Hashimoto",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-0"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "David Cheza",
    "loser_school": "Michigan State",
    "result": "Dec 9-5"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Justin Gaethje",
    "winner_school": "Northern Colorado",
    "loser": "Hadley Harrison",
    "loser_school": "Clarion",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Kyle Bounds",
    "loser_school": "Michigan State",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Jarion Beets",
    "winner_school": "Northern Iowa",
    "loser": "Jeff James",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Mike Miller",
    "winner_school": "Central Michigan",
    "loser": "Mike Pucillo",
    "loser_school": "Ohio State",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Tyler Smith",
    "winner_school": "Rider",
    "loser": "Dylan Temple",
    "loser_school": "Appalachian State",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Brendan Barlow",
    "winner_school": "Kent State",
    "loser": "Joshua Arnone",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Garrett Frey",
    "loser_school": "Princeton",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Frank Lomas",
    "winner_school": "CSU Bakersfield",
    "loser": "Shane Young",
    "loser_school": "West Virginia",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Brad Pataky",
    "winner_school": "Penn State",
    "loser": "Jarrod Patterson",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Matt Steintrager",
    "winner_school": "Central Michigan",
    "loser": "James Knox",
    "loser_school": "Maryland",
    "result": "TB-1 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Andrew Long",
    "winner_school": "Iowa State",
    "loser": "Ryan Mango",
    "loser_school": "Stanford",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Ben Kjar",
    "winner_school": "Utah Valley",
    "loser": "Steven Keith",
    "loser_school": "Harvard",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Tony Gravely",
    "winner_school": "Appalachian State",
    "loser": "Jonathan Childress",
    "loser_school": "Liberty",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Ross Gitomer",
    "loser_school": "Virginia",
    "result": "Fall 2:59"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Jason Lara",
    "loser_school": "Oregon State",
    "result": "TF 15-0 6:31"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Anthony Zanetta",
    "winner_school": "Pittsburgh",
    "loser": "Andre Gonzalez",
    "loser_school": "Cal State Fullerton",
    "result": "SV-1 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Michael Martinez",
    "winner_school": "Wyoming",
    "loser": "Aaron Kalil",
    "loser_school": "Navy",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Zachary Sanders",
    "loser_school": "Minnesota",
    "result": "MD 17-7"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Cashé Quiroga",
    "winner_school": "Purdue",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Joseph Langel",
    "winner_school": "Rutgers",
    "loser": "Christopher Notte",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Fred Santaite",
    "winner_school": "Boston University",
    "loser": "Nikko Triggas",
    "loser_school": "Ohio State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Allen Bartelli",
    "loser_school": "Boise State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Sean Clair",
    "loser_school": "Eastern Michigan",
    "result": "Fall 2:12"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Ian Paddock",
    "winner_school": "Ohio State",
    "loser": "Alex Radsky",
    "loser_school": "Davidson",
    "result": "Fall 4:38"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Akif Eren",
    "loser_school": "Purdue",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Bryan Ortenzio",
    "loser_school": "Penn",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Kendric Maple",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Steve Mytych",
    "winner_school": "Drexel",
    "loser": "Brandon Low",
    "loser_school": "UC Davis",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "David Marble",
    "winner_school": "Bucknell",
    "loser": "John Trumbetti",
    "loser_school": "Lock Haven",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Zac Stevens",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Franklin Gomez",
    "winner_school": "Michigan State",
    "loser": "Flint Ray",
    "loser_school": "Utah Valley",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "William Ashnault",
    "winner_school": "Rutgers",
    "loser": "Joe Pantaleo",
    "loser_school": "Liberty",
    "result": "TF 16-1 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Matthew Fisk",
    "winner_school": "Lehigh",
    "loser": "Cory VomBaur",
    "loser_school": "Wyoming",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Dan Mitcheff",
    "winner_school": "Kent State",
    "loser": "Justin Paulsen",
    "loser_school": "Stanford",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Ben Ashmore",
    "loser_school": "Arizona State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Nicholas Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Cortlandt Choate",
    "loser_school": "Brown",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Kelly Kubec",
    "winner_school": "Oregon State",
    "loser": "Jimmy Kirchner",
    "loser_school": "Rider",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Daniel Dennis",
    "winner_school": "Iowa",
    "loser": "Kevin Smith",
    "loser_school": "Buffalo",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Todd Schavrien",
    "loser_school": "Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Elijah Nacita",
    "winner_school": "CSU Bakersfield",
    "loser": "Zack Kemmerer",
    "loser_school": "Penn",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Levi Jones",
    "winner_school": "Boise State",
    "loser": "Jordan Lipp",
    "loser_school": "American",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Alex Krom",
    "winner_school": "Maryland",
    "loser": "Chris Drouin",
    "loser_school": "Arizona State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Seth Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Zack Bailey",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Scott Clymer",
    "winner_school": "Liberty",
    "loser": "Adin Duenas",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Mike Koehnlein",
    "loser_school": "Nebraska",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Dalton Jensen",
    "loser_school": "Iowa State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "Anwar Goeres",
    "loser_school": "Binghamton",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Germane Lindsey",
    "winner_school": "Ohio",
    "loser": "Trevor Melde",
    "loser_school": "Rutgers",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Conor Beebe",
    "winner_school": "Central Michigan",
    "loser": "Christopher Diaz",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Cole VonOhlen",
    "loser_school": "Air Force",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Filip Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Ryan Adams",
    "loser_school": "North Dakota State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Cole Schmitt",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Derek Valenti",
    "winner_school": "Virginia",
    "loser": "Ivan Lopouchanski",
    "loser_school": "UNC Greensboro",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Juan Archuleta",
    "loser_school": "Purdue",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Seth Morton",
    "loser_school": "Ohio",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Nicholas Bertucci",
    "winner_school": "Purdue",
    "loser": "Nick Fisher",
    "loser_school": "Cal Poly",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Andrew Nadhir",
    "loser_school": "Northwestern",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Brian Stephens",
    "loser_school": "Virginia Tech",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Donald Vinson",
    "loser_school": "Binghamton",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Eric Albright",
    "winner_school": "Pittsburgh",
    "loser": "Mario Mason",
    "loser_school": "Minnesota",
    "result": "TB-1 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Torsten Gillespie",
    "winner_school": "Edinboro",
    "loser": "Dean Pavlou",
    "loser_school": "Chattanooga",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Glenn Shober",
    "loser_school": "Navy",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Kyle Terry",
    "winner_school": "Oklahoma",
    "loser": "Cesar Grajales",
    "loser_school": "Penn",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Bobby Ward",
    "winner_school": "NC State",
    "loser": "Michael Kessler",
    "loser_school": "Rider",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Desmond Green",
    "winner_school": "Buffalo",
    "loser": "Shawn Harris",
    "loser_school": "Virginia",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Matthew Kyler",
    "winner_school": "Army",
    "loser": "Brandon Bucher",
    "loser_school": "George Mason",
    "result": "Fall 6:46"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Mitch Mueller",
    "winner_school": "Iowa State",
    "loser": "Frank Gayeski",
    "loser_school": "Liberty",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Anthony D'Alie",
    "winner_school": "Central Michigan",
    "loser": "Barrett Abel",
    "loser_school": "UC Davis",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Kyle Borshoff",
    "winner_school": "American",
    "loser": "James Fleming",
    "loser_school": "Clarion",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Trenton Washington",
    "loser_school": "Northern Iowa",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Vincent Salminen",
    "loser_school": "North Dakota State",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Jake Kerr",
    "winner_school": "Iowa",
    "loser": "Tejovan Edwards",
    "loser_school": "Arizona State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Colton Salazar",
    "loser_school": "Purdue",
    "result": "Fall 6:31"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Justin Gaethje",
    "winner_school": "Northern Colorado",
    "loser": "Bryce Saddoris",
    "loser_school": "Navy",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Steve Fittery",
    "winner_school": "American",
    "loser": "Jarrett Hostetter",
    "loser_school": "Millersville",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Steven Brown",
    "winner_school": "Central Michigan",
    "loser": "Turtogtokh Luvsandorj",
    "loser_school": "The Citadel",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Dan Gonsor",
    "winner_school": "Virginia",
    "loser": "Tyson Reiner",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Cyler Sanderson",
    "winner_school": "Penn State",
    "loser": "Bryan Deutsch",
    "loser_school": "Northern Illinois",
    "result": "Dec 16-12"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Jesse Dong",
    "winner_school": "Virginia Tech",
    "loser": "Joseph Booth",
    "loser_school": "Drexel",
    "result": "Fall 2:53"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Anthony Jones",
    "winner_school": "Michigan State",
    "loser": "Andrew Sorenson",
    "loser_school": "Iowa State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Justin Lister",
    "winner_school": "Binghamton",
    "loser": "Robert Erisman",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Thomas Scotton",
    "winner_school": "North Carolina",
    "loser": "Dustin Schlatter",
    "loser_school": "Minnesota",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Chase Pami",
    "winner_school": "Cal Poly",
    "loser": "Kurt Kinser",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Shane Vernon",
    "winner_school": "Oklahoma",
    "loser": "Daryl Cocozzo",
    "loser_school": "Rutgers",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Keegan Davis",
    "winner_school": "Oregon State",
    "loser": "Kyle John",
    "loser_school": "Maryland",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "Fall 2:03"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Justin Kerber",
    "winner_school": "Cornell",
    "loser": "Cody Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Edwin Hojilla",
    "loser_school": "UNC Greensboro",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Tyler Grayson",
    "winner_school": "Central Michigan",
    "loser": "Shane Onufer",
    "loser_school": "Wyoming",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Colt Sponseller",
    "winner_school": "Ohio State",
    "loser": "John-Martin Cannon",
    "loser_school": "Buffalo",
    "result": "Fall 6:22"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma",
    "loser": "Paul Young",
    "loser_school": "Indiana",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Matt Kaylor",
    "winner_school": "Binghamton",
    "loser": "Robby Neill",
    "loser_school": "Navy",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Chris Brown",
    "winner_school": "Old Dominion",
    "loser": "Jonathan Reader",
    "loser_school": "Iowa State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Nick Marable",
    "loser_school": "Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Stephen Burak",
    "loser_school": "Penn",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Rick Schmelyun",
    "winner_school": "Bloomsburg",
    "loser": "Paul Gillespie",
    "loser_school": "Hofstra",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Matt Epperly",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Donald Jones",
    "loser_school": "West Virginia",
    "result": "SV-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Alex Meade",
    "winner_school": "Oklahoma State",
    "loser": "Rob Morrison",
    "loser_school": "Rider",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "Ross Tice",
    "loser_school": "Kent State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Eren Civan",
    "loser_school": "Columbia",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Nathan Lee",
    "loser_school": "Boise State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Jacob Ison",
    "winner_school": "Ohio",
    "loser": "Nathan Graham",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Luke Manuel",
    "winner_school": "Purdue",
    "loser": "Philip Moricone",
    "loser_school": "Edinboro",
    "result": "TB-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Colby Covington",
    "winner_school": "Oregon State",
    "loser": "Jim Resnick",
    "loser_school": "Rider",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Jarion Beets",
    "winner_school": "Northern Iowa",
    "loser": "Scott Glasser",
    "loser_school": "Minnesota",
    "result": "Dec 14-7"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Justin Zeerip",
    "winner_school": "Michigan",
    "loser": "Bagna Tovuujav",
    "loser_school": "George Mason",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Dorian Henderson",
    "winner_school": "Missouri",
    "loser": "Shane Riccio",
    "loser_school": "Bucknell",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Brad Darrington",
    "loser_school": "Utah Valley",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Christopher Henrich",
    "winner_school": "Virginia",
    "loser": "David Rella",
    "loser_school": "Ohio State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Byron Sigmon",
    "winner_school": "UNC Greensboro",
    "loser": "Ian Hinton",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Joshua Patterson",
    "winner_school": "Binghamton",
    "loser": "Shane Smith",
    "loser_school": "Millersville",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Mike Benefiel",
    "winner_school": "Oklahoma State",
    "loser": "Keith Witt",
    "loser_school": "Kent State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Robert Hamlin",
    "loser_school": "Lehigh",
    "result": "TB-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Ryan (Duke) Burk",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Daniel Rinaldi",
    "winner_school": "Rutgers",
    "loser": "Ryan DesRoches",
    "loser_school": "Cal Poly",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Scott Giffin",
    "loser_school": "Penn",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Jerome Ward",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Travis Rutt",
    "winner_school": "Wisconsin",
    "loser": "Nathan Schiedel",
    "loser_school": "Binghamton",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Michael Salopek",
    "loser_school": "Virginia",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Louis Caputo",
    "winner_school": "Harvard",
    "loser": "Austin Trotman",
    "loser_school": "Appalachian State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "Patrick Bradshaw",
    "loser_school": "Edinboro",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "David Craig",
    "winner_school": "Lehigh",
    "loser": "Eric Cameron",
    "loser_school": "Indiana",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Thomas Spellman",
    "winner_school": "Virginia Tech",
    "loser": "Nick Purdue",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Michael Larson",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 4:22"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Steve Bosak",
    "loser_school": "Cornell",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Nick Palmieri",
    "winner_school": "Michigan State",
    "loser": "Ben Clymer",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Dave Erwin",
    "winner_school": "Penn State",
    "loser": "Erich Schmditke",
    "loser_school": "Oklahoma",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Maxwell Askren",
    "winner_school": "Missouri",
    "loser": "Zack Giesen",
    "loser_school": "Stanford",
    "result": "Fall 1:38"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Josh Ihnen",
    "loser_school": "Nebraska",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Jason McCroskey",
    "winner_school": "Chattanooga",
    "loser": "Mike Miller",
    "loser_school": "Central Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Andrew Saunders",
    "winner_school": "UNC Greensboro",
    "loser": "Nick Knowles",
    "loser_school": "Liberty",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Zac Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Matt Casperson",
    "loser_school": "Boise State",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Riley Orozco",
    "winner_school": "CSU Bakersfield",
    "loser": "Lamar Brown",
    "loser_school": "Rutgers",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "Chad Beatty",
    "loser_school": "Iowa",
    "result": "TB-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Dennis Drury",
    "loser_school": "North Carolina",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Trevor Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Brent Jones",
    "loser_school": "Virginia",
    "result": "Fall 3:19"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Brent Haynes",
    "winner_school": "Missouri",
    "loser": "Erik Schuth",
    "loser_school": "Ohio",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "James Hamel",
    "loser_school": "Buffalo",
    "result": "TB-2 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Tyler Sorenson",
    "loser_school": "South Dakota State",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Daniel Mitchell",
    "loser_school": "American",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Joseph Kennedy",
    "winner_school": "Lehigh",
    "loser": "Eric Simaz",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Patrick Bond",
    "loser_school": "Illinois",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Eric Lapotsky",
    "winner_school": "Oklahoma",
    "loser": "Matt Powless",
    "loser_school": "Indiana",
    "result": "Fall 2:19"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Anthony Biondo",
    "winner_school": "Michigan",
    "loser": "Parker Burns",
    "loser_school": "Campbell",
    "result": "Fall 1:07"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Jesse Strawn",
    "winner_school": "Old Dominion",
    "loser": "Cody Magrum",
    "loser_school": "Ohio State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Logan Brown",
    "winner_school": "Purdue",
    "loser": "Richard Starks",
    "loser_school": "Army",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Tyler Smith",
    "loser_school": "Rider",
    "result": "Fall 2:59"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Eric Bugenhagen",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Eric Nye",
    "winner_school": "Arizona State",
    "loser": "Eddie Bordas",
    "loser_school": "Rider",
    "result": "TB-1 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Brendan Barlow",
    "loser_school": "Kent State",
    "result": "SV-1 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Ryan Tomei",
    "winner_school": "Pittsburgh",
    "loser": "Ziad Haddad",
    "loser_school": "North Carolina",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Daniel Erekson",
    "winner_school": "Iowa",
    "loser": "Clayton Jack",
    "loser_school": "Oregon State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Scott Steele",
    "winner_school": "Navy",
    "loser": "Ricardo Alcala",
    "loser_school": "UC Davis",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Tucker Lane",
    "winner_school": "Nebraska",
    "loser": "John Danilkowicz",
    "loser_school": "Virginia",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Konrad Dudziak",
    "winner_school": "Duke",
    "loser": "Odie Delaney",
    "loser_school": "The Citadel",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Cameron Wade",
    "loser_school": "Penn State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Kurt Klimek",
    "winner_school": "Cal State Fullerton",
    "loser": "David Wade",
    "loser_school": "Eastern Michigan",
    "result": "Fall 6:13"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Benjamin Berhow",
    "winner_school": "Minnesota",
    "loser": "Mitchell Monteiro",
    "loser_school": "CSU Bakersfield",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Nathan Everhart",
    "winner_school": "Indiana",
    "loser": "Corey Morrison",
    "loser_school": "Ohio State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Brandon Williamson",
    "winner_school": "West Virginia",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Fall 6:59"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Dominick Russo",
    "winner_school": "Rutgers",
    "loser": "Nathan Fernandez",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Christopher Birchler",
    "winner_school": "Edinboro",
    "loser": "Christian Brantley",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Dustin Porter",
    "loser_school": "Gardner-Webb",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Ross Gitomer",
    "winner_school": "Virginia",
    "loser": "Eric Morrill",
    "loser_school": "Edinboro",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Scotti Sentes",
    "winner_school": "Central Michigan",
    "loser": "Brandon Low",
    "loser_school": "UC Davis",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Kenneth Hashimoto",
    "winner_school": "Northern Colorado",
    "loser": "Cole VonOhlen",
    "loser_school": "Air Force",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "David Cheza",
    "winner_school": "Michigan State",
    "loser": "Frank Gayeski",
    "loser_school": "Liberty",
    "result": "Fall 2:10"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Kurt Kinser",
    "winner_school": "Indiana",
    "loser": "Hadley Harrison",
    "loser_school": "Clarion",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Kyle Bounds",
    "winner_school": "Michigan State",
    "loser": "Rob Morrison",
    "loser_school": "Rider",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Jeff James",
    "winner_school": "Oklahoma",
    "loser": "Keith Witt",
    "loser_school": "Kent State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Michael Salopek",
    "loser_school": "Virginia",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Matt Casperson",
    "winner_school": "Boise State",
    "loser": "Dylan Temple",
    "loser_school": "Appalachian State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Nathan Fernandez",
    "winner_school": "Oklahoma",
    "loser": "Joshua Arnone",
    "loser_school": "Cornell",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Frank Lomas",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 1:46"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Brad Pataky",
    "winner_school": "Penn State",
    "loser": "Matt Steintrager",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Andrew Long",
    "winner_school": "Iowa State",
    "loser": "Ben Kjar",
    "loser_school": "Utah Valley",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Tony Gravely",
    "loser_school": "Appalachian State",
    "result": "TF 16-0 3:15"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Anthony Zanetta",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Michael Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Cashé Quiroga",
    "winner_school": "Purdue",
    "loser": "Joseph Langel",
    "loser_school": "Rutgers",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Fred Santaite",
    "winner_school": "Boston University",
    "loser": "Troy Nickerson",
    "loser_school": "Cornell",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Nikko Triggas",
    "winner_school": "Ohio State",
    "loser": "Allen Bartelli",
    "loser_school": "Boise State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Christopher Notte",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Aaron Kalil",
    "loser_school": "Navy",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Jason Lara",
    "winner_school": "Oregon State",
    "loser": "Andre Gonzalez",
    "loser_school": "Cal State Fullerton",
    "result": "MD 16-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Ross Gitomer",
    "winner_school": "Virginia",
    "loser": "Jonathan Childress",
    "loser_school": "Liberty",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Steven Keith",
    "loser_school": "Harvard",
    "result": "Fall 3:56"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "James Knox",
    "loser_school": "Maryland",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Garrett Frey",
    "winner_school": "Princeton",
    "loser": "Shane Young",
    "loser_school": "West Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Ian Paddock",
    "loser_school": "Ohio State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Steve Bell",
    "loser_school": "Maryland",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Steve Mytych",
    "loser_school": "Drexel",
    "result": "TB-1 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "David Marble",
    "loser_school": "Bucknell",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Franklin Gomez",
    "winner_school": "Michigan State",
    "loser": "William Ashnault",
    "loser_school": "Rutgers",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Dan Mitcheff",
    "winner_school": "Kent State",
    "loser": "Matthew Fisk",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Nicholas Fanthorpe",
    "winner_school": "Iowa State",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Daniel Dennis",
    "winner_school": "Iowa",
    "loser": "Kelly Kubec",
    "loser_school": "Oregon State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Kevin Smith",
    "winner_school": "Buffalo",
    "loser": "Jimmy Kirchner",
    "loser_school": "Rider",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Ben Ashmore",
    "winner_school": "Arizona State",
    "loser": "Cortlandt Choate",
    "loser_school": "Brown",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Justin Paulsen",
    "winner_school": "Stanford",
    "loser": "Cory VomBaur",
    "loser_school": "Wyoming",
    "result": "TF 16-1 5:18"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Flint Ray",
    "winner_school": "Utah Valley",
    "loser": "Joe Pantaleo",
    "loser_school": "Liberty",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "John Trumbetti",
    "winner_school": "Lock Haven",
    "loser": "Zac Stevens",
    "loser_school": "Michigan",
    "result": "Fall 3:42"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Scotti Sentes",
    "loser_school": "Central Michigan",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Bryan Ortenzio",
    "winner_school": "Penn",
    "loser": "Akif Eren",
    "loser_school": "Purdue",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Sean Clair",
    "winner_school": "Eastern Michigan",
    "loser": "Alex Radsky",
    "loser_school": "Davidson",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Elijah Nacita",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 3:48"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Levi Jones",
    "winner_school": "Boise State",
    "loser": "Alex Krom",
    "loser_school": "Maryland",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Seth Ciasulli",
    "winner_school": "Lehigh",
    "loser": "Scott Clymer",
    "loser_school": "Liberty",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Michael Mangrum",
    "loser_school": "Oregon State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Germane Lindsey",
    "winner_school": "Ohio",
    "loser": "Michael Thorn",
    "loser_school": "Minnesota",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Conor Beebe",
    "loser_school": "Central Michigan",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Filip Novachkov",
    "loser_school": "Cal Poly",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Derek Valenti",
    "loser_school": "Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Juan Archuleta",
    "winner_school": "Purdue",
    "loser": "Ivan Lopouchanski",
    "loser_school": "UNC Greensboro",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Cole Schmitt",
    "winner_school": "Wisconsin",
    "loser": "Ryan Adams",
    "loser_school": "North Dakota State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Christopher Diaz",
    "winner_school": "Virginia Tech",
    "loser": "Kenneth Hashimoto",
    "loser_school": "Northern Colorado",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Anwar Goeres",
    "winner_school": "Binghamton",
    "loser": "Trevor Melde",
    "loser_school": "Rutgers",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Dalton Jensen",
    "winner_school": "Iowa State",
    "loser": "Mike Koehnlein",
    "loser_school": "Nebraska",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Adin Duenas",
    "loser_school": "Cal State Fullerton",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Chris Drouin",
    "winner_school": "Arizona State",
    "loser": "Jordan Lipp",
    "loser_school": "American",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Todd Schavrien",
    "winner_school": "Missouri",
    "loser": "Zack Kemmerer",
    "loser_school": "Penn",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Nicholas Bertucci",
    "loser_school": "Purdue",
    "result": "Fall 1:23"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Kevin LeValley",
    "loser_school": "Bucknell",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Eric Albright",
    "loser_school": "Pittsburgh",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Torsten Gillespie",
    "winner_school": "Edinboro",
    "loser": "Kyle Ruschell",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Kyle Terry",
    "winner_school": "Oklahoma",
    "loser": "Bobby Ward",
    "loser_school": "NC State",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Matthew Kyler",
    "winner_school": "Army",
    "loser": "Desmond Green",
    "loser_school": "Buffalo",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Mitch Mueller",
    "winner_school": "Iowa State",
    "loser": "Anthony D'Alie",
    "loser_school": "Central Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Kyle Borshoff",
    "loser_school": "American",
    "result": "MD 20-7"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Trenton Washington",
    "winner_school": "Northern Iowa",
    "loser": "James Fleming",
    "loser_school": "Clarion",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "David Cheza",
    "winner_school": "Michigan State",
    "loser": "Barrett Abel",
    "loser_school": "UC Davis",
    "result": "Dec 14-9"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Shawn Harris",
    "winner_school": "Virginia",
    "loser": "Brandon Bucher",
    "loser_school": "George Mason",
    "result": "Fall 6:59"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Cesar Grajales",
    "winner_school": "Penn",
    "loser": "Michael Kessler",
    "loser_school": "Rider",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Glenn Shober",
    "winner_school": "Navy",
    "loser": "Dean Pavlou",
    "loser_school": "Chattanooga",
    "result": "Fall 2:48"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Mario Mason",
    "loser_school": "Minnesota",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "Andrew Nadhir",
    "winner_school": "Northwestern",
    "loser": "Brian Stephens",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Seth Morton",
    "winner_school": "Ohio",
    "loser": "Nick Fisher",
    "loser_school": "Cal Poly",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Jake Kerr",
    "loser_school": "Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Justin Gaethje",
    "winner_school": "Northern Colorado",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "TB-1 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Steve Fittery",
    "winner_school": "American",
    "loser": "Steven Brown",
    "loser_school": "Central Michigan",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Cyler Sanderson",
    "winner_school": "Penn State",
    "loser": "Dan Gonsor",
    "loser_school": "Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Jesse Dong",
    "winner_school": "Virginia Tech",
    "loser": "Anthony Jones",
    "loser_school": "Michigan State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Justin Lister",
    "winner_school": "Binghamton",
    "loser": "Thomas Scotton",
    "loser_school": "North Carolina",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Chase Pami",
    "winner_school": "Cal Poly",
    "loser": "Shane Vernon",
    "loser_school": "Oklahoma",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Keegan Davis",
    "loser_school": "Oregon State",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Kurt Kinser",
    "winner_school": "Indiana",
    "loser": "Daryl Cocozzo",
    "loser_school": "Rutgers",
    "result": "SV-1 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Robert Erisman",
    "winner_school": "Oklahoma State",
    "loser": "Dustin Schlatter",
    "loser_school": "Minnesota",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Joseph Booth",
    "winner_school": "Drexel",
    "loser": "Andrew Sorenson",
    "loser_school": "Iowa State",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Tyson Reiner",
    "winner_school": "Northern Iowa",
    "loser": "Bryan Deutsch",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Jarrett Hostetter",
    "winner_school": "Millersville",
    "loser": "Turtogtokh Luvsandorj",
    "loser_school": "The Citadel",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Bryce Saddoris",
    "winner_school": "Navy",
    "loser": "Colton Salazar",
    "loser_school": "Purdue",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Tejovan Edwards",
    "winner_school": "Arizona State",
    "loser": "Vincent Salminen",
    "loser_school": "North Dakota State",
    "result": "Fall 2:57"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Justin Kerber",
    "loser_school": "Cornell",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Tyler Grayson",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma",
    "loser": "Colt Sponseller",
    "loser_school": "Ohio State",
    "result": "TB-2 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Chris Brown",
    "winner_school": "Old Dominion",
    "loser": "Matt Kaylor",
    "loser_school": "Binghamton",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "SV-1 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Rick Schmelyun",
    "loser_school": "Bloomsburg",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Alex Meade",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Brandon Hatchett",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Ross Tice",
    "winner_school": "Kent State",
    "loser": "Eren Civan",
    "loser_school": "Columbia",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Kyle Bounds",
    "winner_school": "Michigan State",
    "loser": "Donald Jones",
    "loser_school": "West Virginia",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Paul Gillespie",
    "winner_school": "Hofstra",
    "loser": "Matt Epperly",
    "loser_school": "Virginia Tech",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Stephen Burak",
    "loser_school": "Penn",
    "result": "TF 18-3 7:00"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Robby Neill",
    "loser_school": "Navy",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Paul Young",
    "winner_school": "Indiana",
    "loser": "John-Martin Cannon",
    "loser_school": "Buffalo",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Edwin Hojilla",
    "loser_school": "UNC Greensboro",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Cody Yohn",
    "winner_school": "Minnesota",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Jacob Ison",
    "loser_school": "Ohio",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Colby Covington",
    "winner_school": "Oregon State",
    "loser": "Luke Manuel",
    "loser_school": "Purdue",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Jarion Beets",
    "winner_school": "Northern Iowa",
    "loser": "Justin Zeerip",
    "loser_school": "Michigan",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Dorian Henderson",
    "loser_school": "Missouri",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Christopher Henrich",
    "winner_school": "Virginia",
    "loser": "Byron Sigmon",
    "loser_school": "UNC Greensboro",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Mike Benefiel",
    "winner_school": "Oklahoma State",
    "loser": "Joshua Patterson",
    "loser_school": "Binghamton",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Daniel Rinaldi",
    "loser_school": "Rutgers",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Scott Giffin",
    "winner_school": "Penn",
    "loser": "Ryan DesRoches",
    "loser_school": "Cal Poly",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Ryan (Duke) Burk",
    "winner_school": "Iowa State",
    "loser": "Robert Hamlin",
    "loser_school": "Lehigh",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Jeff James",
    "winner_school": "Oklahoma",
    "loser": "Shane Smith",
    "loser_school": "Millersville",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "David Rella",
    "winner_school": "Ohio State",
    "loser": "Ian Hinton",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Brad Darrington",
    "winner_school": "Utah Valley",
    "loser": "Shane Riccio",
    "loser_school": "Bucknell",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Scott Glasser",
    "winner_school": "Minnesota",
    "loser": "Bagna Tovuujav",
    "loser_school": "George Mason",
    "result": "Fall 6:16"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Philip Moricone",
    "winner_school": "Edinboro",
    "loser": "Jim Resnick",
    "loser_school": "Rider",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Nathan Lee",
    "winner_school": "Boise State",
    "loser": "Nathan Graham",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Travis Rutt",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Louis Caputo",
    "loser_school": "Harvard",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "David Craig",
    "loser_school": "Lehigh",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Thomas Spellman",
    "loser_school": "Virginia Tech",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Nick Palmieri",
    "loser_school": "Michigan State",
    "result": "Fall 2:31"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Maxwell Askren",
    "winner_school": "Missouri",
    "loser": "Dave Erwin",
    "loser_school": "Penn State",
    "result": "Fall 3:51"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Jason McCroskey",
    "loser_school": "Chattanooga",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Andrew Saunders",
    "loser_school": "UNC Greensboro",
    "result": "TF 21-5 6:27"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Zac Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Nick Knowles",
    "loser_school": "Liberty",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Mike Miller",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Zack Giesen",
    "winner_school": "Stanford",
    "loser": "Erich Schmditke",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Ben Clymer",
    "loser_school": "Hofstra",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Nick Purdue",
    "winner_school": "Ohio",
    "loser": "Michael Larson",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Patrick Bradshaw",
    "winner_school": "Edinboro",
    "loser": "Eric Cameron",
    "loser_school": "Indiana",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Austin Trotman",
    "loser_school": "Appalachian State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Jerome Ward",
    "winner_school": "Iowa State",
    "loser": "Nathan Schiedel",
    "loser_school": "Binghamton",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Riley Orozco",
    "loser_school": "CSU Bakersfield",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Alan Gelogaev",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Trevor Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Brent Haynes",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Micah Burak",
    "loser_school": "Penn",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Joseph Kennedy",
    "loser_school": "Lehigh",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Eric Lapotsky",
    "winner_school": "Oklahoma",
    "loser": "Matthew Wilps",
    "loser_school": "Pittsburgh",
    "result": "Fall 2:23"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Anthony Biondo",
    "winner_school": "Michigan",
    "loser": "Jesse Strawn",
    "loser_school": "Old Dominion",
    "result": "TB-1 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Logan Brown",
    "loser_school": "Purdue",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Richard Starks",
    "winner_school": "Army",
    "loser": "Tyler Smith",
    "loser_school": "Rider",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Cody Magrum",
    "winner_school": "Ohio State",
    "loser": "Parker Burns",
    "loser_school": "Campbell",
    "result": "TF 15-0 4:49"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Patrick Bond",
    "winner_school": "Illinois",
    "loser": "Matt Powless",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Daniel Mitchell",
    "winner_school": "American",
    "loser": "Eric Simaz",
    "loser_school": "Central Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Tyler Sorenson",
    "winner_school": "South Dakota State",
    "loser": "James Hamel",
    "loser_school": "Buffalo",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Brent Jones",
    "winner_school": "Virginia",
    "loser": "Erik Schuth",
    "loser_school": "Ohio",
    "result": "Fall 1:03"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Chad Beatty",
    "winner_school": "Iowa",
    "loser": "Dennis Drury",
    "loser_school": "North Carolina",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Matt Casperson",
    "winner_school": "Boise State",
    "loser": "Lamar Brown",
    "loser_school": "Rutgers",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Eric Nye",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Ryan Tomei",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Daniel Erekson",
    "winner_school": "Iowa",
    "loser": "Scott Steele",
    "loser_school": "Navy",
    "result": "Fall 2:36"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Konrad Dudziak",
    "winner_school": "Duke",
    "loser": "Tucker Lane",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Kurt Klimek",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Benjamin Berhow",
    "winner_school": "Minnesota",
    "loser": "Nathan Everhart",
    "loser_school": "Indiana",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Brandon Williamson",
    "winner_school": "West Virginia",
    "loser": "Dominick Russo",
    "loser_school": "Rutgers",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Christopher Birchler",
    "loser_school": "Edinboro",
    "result": "Fall 0:58"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Christian Brantley",
    "winner_school": "Northern Iowa",
    "loser": "Dustin Porter",
    "loser_school": "Gardner-Webb",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Nathan Fernandez",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Mitchell Monteiro",
    "winner_school": "CSU Bakersfield",
    "loser": "Corey Morrison",
    "loser_school": "Ohio State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Cameron Wade",
    "winner_school": "Penn State",
    "loser": "David Wade",
    "loser_school": "Eastern Michigan",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "John Danilkowicz",
    "winner_school": "Virginia",
    "loser": "Odie Delaney",
    "loser_school": "The Citadel",
    "result": "SV-1 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Clayton Jack",
    "winner_school": "Oregon State",
    "loser": "Ricardo Alcala",
    "loser_school": "UC Davis",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Brendan Barlow",
    "winner_school": "Kent State",
    "loser": "Ziad Haddad",
    "loser_school": "North Carolina",
    "result": "SV-2 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Eric Bugenhagen",
    "winner_school": "Wisconsin",
    "loser": "Eddie Bordas",
    "loser_school": "Rider",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Nikko Triggas",
    "winner_school": "Ohio State",
    "loser": "Ben Kjar",
    "loser_school": "Utah Valley",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Tony Gravely",
    "loser_school": "Appalachian State",
    "result": "Fall 4:19"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Frank Lomas",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Jason Lara",
    "winner_school": "Oregon State",
    "loser": "Matt Steintrager",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Ross Gitomer",
    "winner_school": "Virginia",
    "loser": "Joseph Langel",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Ryan Mango",
    "loser_school": "Stanford",
    "result": "Fall 3:13"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Anthony Zanetta",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Michael Martinez",
    "winner_school": "Wyoming",
    "loser": "Garrett Frey",
    "loser_school": "Princeton",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Steve Mytych",
    "winner_school": "Drexel",
    "loser": "Kevin Smith",
    "loser_school": "Buffalo",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "David Marble",
    "winner_school": "Bucknell",
    "loser": "Ben Ashmore",
    "loser_school": "Arizona State",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Ian Paddock",
    "winner_school": "Ohio State",
    "loser": "Justin Paulsen",
    "loser_school": "Stanford",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Flint Ray",
    "loser_school": "Utah Valley",
    "result": "Fall 5:22"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "John Trumbetti",
    "loser_school": "Lock Haven",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Kelly Kubec",
    "loser_school": "Oregon State",
    "result": "Fall 5:29"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "William Ashnault",
    "winner_school": "Rutgers",
    "loser": "Bryan Ortenzio",
    "loser_school": "Penn",
    "result": "Fall 5:47"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Matthew Fisk",
    "winner_school": "Lehigh",
    "loser": "Sean Clair",
    "loser_school": "Eastern Michigan",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Juan Archuleta",
    "winner_school": "Purdue",
    "loser": "Scott Clymer",
    "loser_school": "Liberty",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Cole Schmitt",
    "loser_school": "Wisconsin",
    "result": "Fall 3:50"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Christopher Diaz",
    "winner_school": "Virginia Tech",
    "loser": "Elijah Nacita",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Alex Krom",
    "winner_school": "Maryland",
    "loser": "Anwar Goeres",
    "loser_school": "Binghamton",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Filip Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Dalton Jensen",
    "loser_school": "Iowa State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Derek Valenti",
    "loser_school": "Virginia",
    "result": "MD 15-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "Chris Drouin",
    "loser_school": "Arizona State",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Todd Schavrien",
    "winner_school": "Missouri",
    "loser": "Conor Beebe",
    "loser_school": "Central Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Eric Albright",
    "winner_school": "Pittsburgh",
    "loser": "Trenton Washington",
    "loser_school": "Northern Iowa",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "David Cheza",
    "loser_school": "Michigan State",
    "result": "Fall 1:46"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Nicholas Bertucci",
    "winner_school": "Purdue",
    "loser": "Shawn Harris",
    "loser_school": "Virginia",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Cesar Grajales",
    "loser_school": "Penn",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Anthony D'Alie",
    "winner_school": "Central Michigan",
    "loser": "Glenn Shober",
    "loser_school": "Navy",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Kyle Borshoff",
    "winner_school": "American",
    "loser": "Donald Vinson",
    "loser_school": "Binghamton",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Andrew Nadhir",
    "winner_school": "Northwestern",
    "loser": "Bobby Ward",
    "loser_school": "NC State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Desmond Green",
    "winner_school": "Buffalo",
    "loser": "Seth Morton",
    "loser_school": "Ohio",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Steven Brown",
    "winner_school": "Central Michigan",
    "loser": "Kyle John",
    "loser_school": "Maryland",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Kurt Kinser",
    "winner_school": "Indiana",
    "loser": "Dan Gonsor",
    "loser_school": "Virginia",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Jake Kerr",
    "winner_school": "Iowa",
    "loser": "Robert Erisman",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Joseph Booth",
    "loser_school": "Drexel",
    "result": "Fall 2:24"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Shane Vernon",
    "winner_school": "Oklahoma",
    "loser": "Tyson Reiner",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Keegan Davis",
    "winner_school": "Oregon State",
    "loser": "Jarrett Hostetter",
    "loser_school": "Millersville",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Anthony Jones",
    "winner_school": "Michigan State",
    "loser": "Bryce Saddoris",
    "loser_school": "Navy",
    "result": "Fall 0:57"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Tejovan Edwards",
    "winner_school": "Arizona State",
    "loser": "Thomas Scotton",
    "loser_school": "North Carolina",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Colt Sponseller",
    "winner_school": "Ohio State",
    "loser": "Ross Tice",
    "loser_school": "Kent State",
    "result": "MD 17-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Kyle Bounds",
    "winner_school": "Michigan State",
    "loser": "Matt Kaylor",
    "loser_school": "Binghamton",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Justin Kerber",
    "winner_school": "Cornell",
    "loser": "Paul Gillespie",
    "loser_school": "Hofstra",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Nick Marable",
    "winner_school": "Missouri",
    "loser": "Tyler Grayson",
    "loser_school": "Central Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Alex Meade",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Paul Young",
    "winner_school": "Indiana",
    "loser": "Brandon Hatchett",
    "loser_school": "Lehigh",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Shane Onufer",
    "loser_school": "Wyoming",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Cody Yohn",
    "winner_school": "Minnesota",
    "loser": "Rick Schmelyun",
    "loser_school": "Bloomsburg",
    "result": "Fall 2:52"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Scott Giffin",
    "winner_school": "Penn",
    "loser": "Justin Zeerip",
    "loser_school": "Michigan",
    "result": "SV-1 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Dorian Henderson",
    "winner_school": "Missouri",
    "loser": "Ryan (Duke) Burk",
    "loser_school": "Iowa State",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Jacob Ison",
    "winner_school": "Ohio",
    "loser": "Jeff James",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Luke Manuel",
    "winner_school": "Purdue",
    "loser": "David Rella",
    "loser_school": "Ohio State",
    "result": "TB-1 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Brad Darrington",
    "loser_school": "Utah Valley",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Scott Glasser",
    "winner_school": "Minnesota",
    "loser": "Daniel Rinaldi",
    "loser_school": "Rutgers",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Philip Moricone",
    "winner_school": "Edinboro",
    "loser": "Byron Sigmon",
    "loser_school": "UNC Greensboro",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Joshua Patterson",
    "winner_school": "Binghamton",
    "loser": "Nathan Lee",
    "loser_school": "Boise State",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Zac Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "David Craig",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Thomas Spellman",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Zack Giesen",
    "winner_school": "Stanford",
    "loser": "Travis Rutt",
    "loser_school": "Wisconsin",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Louis Caputo",
    "loser_school": "Harvard",
    "result": "Fall 3:29"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Jason McCroskey",
    "winner_school": "Chattanooga",
    "loser": "Nick Purdue",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Andrew Saunders",
    "winner_school": "UNC Greensboro",
    "loser": "Patrick Bradshaw",
    "loser_school": "Edinboro",
    "result": "Fall 2:44"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Nick Palmieri",
    "loser_school": "Michigan State",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Dave Erwin",
    "winner_school": "Penn State",
    "loser": "Jerome Ward",
    "loser_school": "Iowa State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Brent Haynes",
    "winner_school": "Missouri",
    "loser": "Richard Starks",
    "loser_school": "Army",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Cody Magrum",
    "winner_school": "Ohio State",
    "loser": "Micah Burak",
    "loser_school": "Penn",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Patrick Bond",
    "winner_school": "Illinois",
    "loser": "Riley Orozco",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "Daniel Mitchell",
    "loser_school": "American",
    "result": "Fall 3:39"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Tyler Sorenson",
    "winner_school": "South Dakota State",
    "loser": "Jesse Strawn",
    "loser_school": "Old Dominion",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Brent Jones",
    "winner_school": "Virginia",
    "loser": "Logan Brown",
    "loser_school": "Purdue",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Chad Beatty",
    "winner_school": "Iowa",
    "loser": "Joseph Kennedy",
    "loser_school": "Lehigh",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Matt Casperson",
    "loser_school": "Boise State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Scott Steele",
    "winner_school": "Navy",
    "loser": "Christian Brantley",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Tucker Lane",
    "loser_school": "Nebraska",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Mitchell Monteiro",
    "winner_school": "CSU Bakersfield",
    "loser": "Eric Nye",
    "loser_school": "Arizona State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Cameron Wade",
    "winner_school": "Penn State",
    "loser": "Ryan Tomei",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Dominick Russo",
    "winner_school": "Rutgers",
    "loser": "John Danilkowicz",
    "loser_school": "Virginia",
    "result": "Fall 6:18"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Christopher Birchler",
    "winner_school": "Edinboro",
    "loser": "Clayton Jack",
    "loser_school": "Oregon State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Brendan Barlow",
    "winner_school": "Kent State",
    "loser": "Kurt Klimek",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Nathan Everhart",
    "winner_school": "Indiana",
    "loser": "Eric Bugenhagen",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Brad Pataky",
    "loser_school": "Penn State",
    "result": "TF 15-0 6:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Andrew Long",
    "winner_school": "Iowa State",
    "loser": "Anthony Robles",
    "loser_school": "Arizona State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Jarrod Garnett",
    "loser_school": "Virginia Tech",
    "result": "MD 9-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Cashé Quiroga",
    "winner_school": "Purdue",
    "loser": "Fred Santaite",
    "loser_school": "Boston University",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Nikko Triggas",
    "winner_school": "Ohio State",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Jason Lara",
    "loser_school": "Oregon State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Ross Gitomer",
    "loser_school": "Virginia",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Michael Martinez",
    "winner_school": "Wyoming",
    "loser": "Jarrod Patterson",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Tyler Graff",
    "loser_school": "Wisconsin",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Borislav Novachkov",
    "loser_school": "Cal Poly",
    "result": "TB-1 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Franklin Gomez",
    "winner_school": "Michigan State",
    "loser": "Dan Mitcheff",
    "loser_school": "Kent State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Daniel Dennis",
    "winner_school": "Iowa",
    "loser": "Nicholas Fanthorpe",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Steve Mytych",
    "winner_school": "Drexel",
    "loser": "David Marble",
    "loser_school": "Bucknell",
    "result": "SV-1 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Ian Paddock",
    "loser_school": "Ohio State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Kendric Maple",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Matthew Fisk",
    "winner_school": "Lehigh",
    "loser": "William Ashnault",
    "loser_school": "Rutgers",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Levi Jones",
    "loser_school": "Boise State",
    "result": "MD 11-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Seth Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Germane Lindsey",
    "loser_school": "Ohio",
    "result": "SV-1 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Jamal Parks",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Juan Archuleta",
    "loser_school": "Purdue",
    "result": "TB-1 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Christopher Diaz",
    "winner_school": "Virginia Tech",
    "loser": "Alex Krom",
    "loser_school": "Maryland",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Filip Novachkov",
    "loser_school": "Cal Poly",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "Todd Schavrien",
    "loser_school": "Missouri",
    "result": "Fall 3:34"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Jason Chamberlain",
    "loser_school": "Boise State",
    "result": "Fall 1:14"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Torsten Gillespie",
    "loser_school": "Edinboro",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Kyle Terry",
    "winner_school": "Oklahoma",
    "loser": "Matthew Kyler",
    "loser_school": "Army",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Mitch Mueller",
    "loser_school": "Iowa State",
    "result": "MD 16-4"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Eric Albright",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Nicholas Bertucci",
    "loser_school": "Purdue",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Kyle Borshoff",
    "winner_school": "American",
    "loser": "Anthony D'Alie",
    "loser_school": "Central Michigan",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Andrew Nadhir",
    "winner_school": "Northwestern",
    "loser": "Desmond Green",
    "loser_school": "Buffalo",
    "result": "Dec 9-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Justin Gaethje",
    "loser_school": "Northern Colorado",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Steve Fittery",
    "winner_school": "American",
    "loser": "Cyler Sanderson",
    "loser_school": "Penn State",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Justin Lister",
    "winner_school": "Binghamton",
    "loser": "Jesse Dong",
    "loser_school": "Virginia Tech",
    "result": "Fall 1:18"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Chase Pami",
    "winner_school": "Cal Poly",
    "loser": "Adam Hall",
    "loser_school": "Boise State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Steven Brown",
    "winner_school": "Central Michigan",
    "loser": "Kurt Kinser",
    "loser_school": "Indiana",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Matt Moley",
    "winner_school": "Bloomsburg",
    "loser": "Jake Kerr",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Shane Vernon",
    "winner_school": "Oklahoma",
    "loser": "Keegan Davis",
    "loser_school": "Oregon State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Anthony Jones",
    "winner_school": "Michigan State",
    "loser": "Tejovan Edwards",
    "loser_school": "Arizona State",
    "result": "Dec 10-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Andrew Rendos",
    "loser_school": "Bucknell",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma",
    "loser": "Chris Brown",
    "loser_school": "Old Dominion",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Nick Amuchastegui",
    "loser_school": "Stanford",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Ryan Morningstar",
    "loser_school": "Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Colt Sponseller",
    "winner_school": "Ohio State",
    "loser": "Kyle Bounds",
    "loser_school": "Michigan State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Justin Kerber",
    "winner_school": "Cornell",
    "loser": "Nick Marable",
    "loser_school": "Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Paul Young",
    "loser_school": "Indiana",
    "result": "Dec 13-11"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Cody Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Colby Covington",
    "loser_school": "Oregon State",
    "result": "SV-2 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Jarion Beets",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Christopher Henrich",
    "winner_school": "Virginia",
    "loser": "Mike Benefiel",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Jordan Blanton",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Scott Giffin",
    "winner_school": "Penn",
    "loser": "Dorian Henderson",
    "loser_school": "Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Jacob Ison",
    "winner_school": "Ohio",
    "loser": "Luke Manuel",
    "loser_school": "Purdue",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Scott Glasser",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Philip Moricone",
    "winner_school": "Edinboro",
    "loser": "Joshua Patterson",
    "loser_school": "Binghamton",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Clayton Foster",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Maxwell Askren",
    "winner_school": "Missouri",
    "loser": "Dustin Kilgore",
    "loser_school": "Kent State",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "John Dergo",
    "loser_school": "Illinois",
    "result": "SV-1 10-8"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Zac Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Zack Giesen",
    "loser_school": "Stanford",
    "result": "Fall 0:31"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Andrew Saunders",
    "winner_school": "UNC Greensboro",
    "loser": "Jason McCroskey",
    "loser_school": "Chattanooga",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Mike Pucillo",
    "winner_school": "Ohio State",
    "loser": "Dave Erwin",
    "loser_school": "Penn State",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Sonny Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Trevor Brandvold",
    "loser_school": "Wisconsin",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Eric Lapotsky",
    "loser_school": "Oklahoma",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Anthony Biondo",
    "loser_school": "Michigan",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Brent Haynes",
    "winner_school": "Missouri",
    "loser": "Cody Magrum",
    "loser_school": "Ohio State",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "Patrick Bond",
    "loser_school": "Illinois",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Brent Jones",
    "winner_school": "Virginia",
    "loser": "Tyler Sorenson",
    "loser_school": "South Dakota State",
    "result": "Fall 0:30"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Chad Beatty",
    "winner_school": "Iowa",
    "loser": "Matthew Wilps",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Mark Ellis",
    "loser_school": "Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Konrad Dudziak",
    "winner_school": "Duke",
    "loser": "Daniel Erekson",
    "loser_school": "Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Benjamin Berhow",
    "loser_school": "Minnesota",
    "result": "TB-1 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Brandon Williamson",
    "loser_school": "West Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Scott Steele",
    "loser_school": "Navy",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Mitchell Monteiro",
    "winner_school": "CSU Bakersfield",
    "loser": "Cameron Wade",
    "loser_school": "Penn State",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Dominick Russo",
    "winner_school": "Rutgers",
    "loser": "Christopher Birchler",
    "loser_school": "Edinboro",
    "result": "Fall 5:21"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Nathan Everhart",
    "winner_school": "Indiana",
    "loser": "Brendan Barlow",
    "loser_school": "Kent State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Nikko Triggas",
    "winner_school": "Ohio State",
    "loser": "Jarrod Garnett",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Fred Santaite",
    "loser_school": "Boston University",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Brad Pataky",
    "loser_school": "Penn State",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Michael Martinez",
    "loser_school": "Wyoming",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Dan Mitcheff",
    "winner_school": "Kent State",
    "loser": "Steve Mytych",
    "loser_school": "Drexel",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Steve Bell",
    "winner_school": "Maryland",
    "loser": "Nicholas Fanthorpe",
    "loser_school": "Iowa State",
    "result": "SV-1 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Matthew Fisk",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Germane Lindsey",
    "winner_school": "Ohio",
    "loser": "Michael Mangrum",
    "loser_school": "Oregon State",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Christopher Diaz",
    "winner_school": "Virginia Tech",
    "loser": "Jamal Parks",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Levi Jones",
    "loser_school": "Boise State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "Seth Ciasulli",
    "loser_school": "Lehigh",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Matthew Kyler",
    "loser_school": "Army",
    "result": "TB-2 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Mitch Mueller",
    "loser_school": "Iowa State",
    "result": "TB-1 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Kyle Borshoff",
    "winner_school": "American",
    "loser": "Jason Chamberlain",
    "loser_school": "Boise State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Torsten Gillespie",
    "winner_school": "Edinboro",
    "loser": "Andrew Nadhir",
    "loser_school": "Northwestern",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Steven Brown",
    "winner_school": "Central Michigan",
    "loser": "Jesse Dong",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Matt Moley",
    "loser_school": "Bloomsburg",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Justin Gaethje",
    "winner_school": "Northern Colorado",
    "loser": "Shane Vernon",
    "loser_school": "Oklahoma",
    "result": "TB-1 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Cyler Sanderson",
    "winner_school": "Penn State",
    "loser": "Anthony Jones",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Colt Sponseller",
    "loser_school": "Ohio State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Justin Kerber",
    "loser_school": "Cornell",
    "result": "TB-1 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Jonathan Reader",
    "loser_school": "Iowa State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Chris Brown",
    "winner_school": "Old Dominion",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Scott Giffin",
    "winner_school": "Penn",
    "loser": "Mike Benefiel",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Jacob Ison",
    "loser_school": "Ohio",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Colby Covington",
    "loser_school": "Oregon State",
    "result": "Fall 0:44"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Jarion Beets",
    "winner_school": "Northern Iowa",
    "loser": "Philip Moricone",
    "loser_school": "Edinboro",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Josh Ihnen",
    "loser_school": "Nebraska",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Steve Bosak",
    "loser_school": "Cornell",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Phillip Keddy",
    "winner_school": "Iowa",
    "loser": "Andrew Saunders",
    "loser_school": "UNC Greensboro",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "Mike Pucillo",
    "loser_school": "Ohio State",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Eric Lapotsky",
    "winner_school": "Oklahoma",
    "loser": "Brent Haynes",
    "loser_school": "Missouri",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "Anthony Biondo",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Brent Jones",
    "loser_school": "Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Trevor Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Chad Beatty",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Benjamin Berhow",
    "loser_school": "Minnesota",
    "result": "TB-1 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Mitchell Monteiro",
    "winner_school": "CSU Bakersfield",
    "loser": "Brandon Williamson",
    "loser_school": "West Virginia",
    "result": "TB-1 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Dominick Russo",
    "loser_school": "Rutgers",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Daniel Erekson",
    "winner_school": "Iowa",
    "loser": "Nathan Everhart",
    "loser_school": "Indiana",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Andrew Long",
    "winner_school": "Iowa State",
    "loser": "Angel Escobedo",
    "loser_school": "Indiana",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Cashé Quiroga",
    "loser_school": "Purdue",
    "result": "MD 14-3"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Nikko Triggas",
    "loser_school": "Ohio State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Anthony Robles",
    "loser_school": "Arizona State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Jordan Oliver",
    "loser_school": "Oklahoma State",
    "result": "TB-2 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Daniel Dennis",
    "winner_school": "Iowa",
    "loser": "Franklin Gomez",
    "loser_school": "Michigan State",
    "result": "SV-1 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Dan Mitcheff",
    "winner_school": "Kent State",
    "loser": "Steve Bell",
    "loser_school": "Maryland",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Borislav Novachkov",
    "loser_school": "Cal Poly",
    "result": "TB-1 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Reece Humphrey",
    "loser_school": "Ohio State",
    "result": "TB-1 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Tyler Nauman",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Germane Lindsey",
    "winner_school": "Ohio",
    "loser": "Christopher Diaz",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Michael Thorn",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Lance Palmer",
    "winner_school": "Ohio State",
    "loser": "Frank Molinaro",
    "loser_school": "Penn State",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Kyle Terry",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Kevin LeValley",
    "loser_school": "Bucknell",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Torsten Gillespie",
    "winner_school": "Edinboro",
    "loser": "Kyle Borshoff",
    "loser_school": "American",
    "result": "SV-1 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Steve Fittery",
    "loser_school": "American",
    "result": "MD 14-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Chase Pami",
    "winner_school": "Cal Poly",
    "loser": "Justin Lister",
    "loser_school": "Binghamton",
    "result": "MD 13-5"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Steven Brown",
    "loser_school": "Central Michigan",
    "result": "MD 12-4"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Cyler Sanderson",
    "winner_school": "Penn State",
    "loser": "Justin Gaethje",
    "loser_school": "Northern Colorado",
    "result": "Dec 10-6"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Tyler Caldwell",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Dan Vallimont",
    "winner_school": "Penn State",
    "loser": "Jarrod King",
    "loser_school": "Edinboro",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Ryan Morningstar",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Andrew Rendos",
    "winner_school": "Bucknell",
    "loser": "Chris Brown",
    "loser_school": "Old Dominion",
    "result": "Dec 9-5"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Stephen Dwyer",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Christopher Henrich",
    "loser_school": "Virginia",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Scott Giffin",
    "loser_school": "Penn",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Jarion Beets",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:23"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Kirk Smith",
    "winner_school": "Boise State",
    "loser": "Michael Cannon",
    "loser_school": "American",
    "result": "MD 11-2"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Maxwell Askren",
    "winner_school": "Missouri",
    "loser": "Joe LeBlanc",
    "loser_school": "Wyoming",
    "result": "SV-1 9-7"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Dustin Kilgore",
    "loser_school": "Kent State",
    "result": "Dec 11-9"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Cam Simaz",
    "loser_school": "Cornell",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Craig Brester",
    "winner_school": "Nebraska",
    "loser": "Hudson Taylor",
    "loser_school": "Maryland",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Eric Lapotsky",
    "winner_school": "Oklahoma",
    "loser": "Alan Gelogaev",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Trevor Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Sonny Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 13-7"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Konrad Dudziak",
    "loser_school": "Duke",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Jared Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Zachery Rey",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Mitchell Monteiro",
    "winner_school": "CSU Bakersfield",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Mark Ellis",
    "winner_school": "Missouri",
    "loser": "Daniel Erekson",
    "loser_school": "Iowa",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Zachary Sanders",
    "loser_school": "Minnesota",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Troy Nickerson",
    "winner_school": "Cornell",
    "loser": "Cashé Quiroga",
    "loser_school": "Purdue",
    "result": "Fall 4:01"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Dan Mitcheff",
    "loser_school": "Kent State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Franklin Gomez",
    "winner_school": "Michigan State",
    "loser": "Tyler Graff",
    "loser_school": "Wisconsin",
    "result": "Fall 3:56"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Germane Lindsey",
    "loser_school": "Ohio",
    "result": "MD 15-4"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Tyler Nauman",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Kyle Ruschell",
    "winner_school": "Wisconsin",
    "loser": "Frank Molinaro",
    "loser_school": "Penn State",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Kyle Terry",
    "winner_school": "Oklahoma",
    "loser": "Torsten Gillespie",
    "loser_school": "Edinboro",
    "result": "MD 10-1"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Steve Fittery",
    "loser_school": "American",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Justin Lister",
    "winner_school": "Binghamton",
    "loser": "Cyler Sanderson",
    "loser_school": "Penn State",
    "result": "Fall 4:04"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Tyler Caldwell",
    "loser_school": "Oklahoma",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Andrew Rendos",
    "loser_school": "Bucknell",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Stephen Dwyer",
    "winner_school": "Nebraska",
    "loser": "Jordan Blanton",
    "loser_school": "Illinois",
    "result": "MD 9-0"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Christopher Henrich",
    "winner_school": "Virginia",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "SV-1 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "John Dergo",
    "loser_school": "Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Clayton Foster",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Eric Lapotsky",
    "loser_school": "Oklahoma",
    "result": "MD 9-1"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Hudson Taylor",
    "winner_school": "Maryland",
    "loser": "Trevor Brandvold",
    "loser_school": "Wisconsin",
    "result": "MD 10-0"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Konrad Dudziak",
    "winner_school": "Duke",
    "loser": "Mitchell Monteiro",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Mark Ellis",
    "loser_school": "Missouri",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Angel Escobedo",
    "winner_school": "Indiana",
    "loser": "Troy Nickerson",
    "loser_school": "Cornell",
    "result": "Dec 2-0"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Cashé Quiroga",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Nikko Triggas",
    "loser_school": "Ohio State",
    "result": "Dec 9-3"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Franklin Gomez",
    "winner_school": "Michigan State",
    "loser": "Jordan Oliver",
    "loser_school": "Oklahoma State",
    "result": "MD 8-0"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Dan Mitcheff",
    "loser_school": "Kent State",
    "result": "Dec 5-3"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Steve Bell",
    "loser_school": "Maryland",
    "result": "Fall 4:24"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Reece Humphrey",
    "winner_school": "Ohio State",
    "loser": "Zack Bailey",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Germane Lindsey",
    "loser_school": "Ohio",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "Christopher Diaz",
    "loser_school": "Virginia Tech",
    "result": "Fall 0:56"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Kyle Terry",
    "winner_school": "Oklahoma",
    "loser": "Kyle Ruschell",
    "loser_school": "Wisconsin",
    "result": "Dec 5-4"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Torsten Gillespie",
    "loser_school": "Edinboro",
    "result": "MD 10-1"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Kyle Borshoff",
    "loser_school": "American",
    "result": "Dec 5-0"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Justin Lister",
    "loser_school": "Binghamton",
    "result": "MD 8-0"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Steve Fittery",
    "winner_school": "American",
    "loser": "Cyler Sanderson",
    "loser_school": "Penn State",
    "result": "MD 15-6"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Justin Gaethje",
    "winner_school": "Northern Colorado",
    "loser": "Steven Brown",
    "loser_school": "Central Michigan",
    "result": "Dec 12-7"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Jarrod King",
    "winner_school": "Edinboro",
    "loser": "Nick Amuchastegui",
    "loser_school": "Stanford",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma",
    "loser": "Andrew Rendos",
    "loser_school": "Bucknell",
    "result": "Dec 6-3"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Ryan Morningstar",
    "winner_school": "Iowa",
    "loser": "Chris Brown",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Christopher Henrich",
    "winner_school": "Virginia",
    "loser": "Stephen Dwyer",
    "loser_school": "Nebraska",
    "result": "MD 10-1"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Scott Giffin",
    "winner_school": "Penn",
    "loser": "Jarion Beets",
    "loser_school": "Northern Iowa",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Michael Cannon",
    "winner_school": "American",
    "loser": "Joe LeBlanc",
    "loser_school": "Wyoming",
    "result": "Dec 7-2"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "John Dergo",
    "winner_school": "Illinois",
    "loser": "Clayton Foster",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-4"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Phillip Keddy",
    "loser_school": "Iowa",
    "result": "Dec 9-5"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Hudson Taylor",
    "loser_school": "Maryland",
    "result": "SV-1 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Eric Lapotsky",
    "winner_school": "Oklahoma",
    "loser": "Trevor Brandvold",
    "loser_school": "Wisconsin",
    "result": "Dec 7-0"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "Sonny Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 12-7"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Konrad Dudziak",
    "loser_school": "Duke",
    "result": "SV-2 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Mitchell Monteiro",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark Ellis",
    "loser_school": "Missouri",
    "result": "SV-1 3-1"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Daniel Erekson",
    "winner_school": "Iowa",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Andrew Long",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Jayson Ness",
    "winner_school": "Minnesota",
    "loser": "Daniel Dennis",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Montell Marion",
    "loser_school": "Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Brent Metcalf",
    "winner_school": "Iowa",
    "loser": "Lance Palmer",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "J.P. O'Connor",
    "winner_school": "Harvard",
    "loser": "Chase Pami",
    "loser_school": "Cal Poly",
    "result": "Dec 6-4"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Dan Vallimont",
    "loser_school": "Penn State",
    "result": "Dec 9-3"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Jay Borschel",
    "winner_school": "Iowa",
    "loser": "Mack Lewnes",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Maxwell Askren",
    "winner_school": "Missouri",
    "loser": "Kirk Smith",
    "loser_school": "Boise State",
    "result": "Dec 10-3"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Jake Varner",
    "winner_school": "Iowa State",
    "loser": "Craig Brester",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "David Zabriskie",
    "winner_school": "Iowa State",
    "loser": "Jared Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  }
];
