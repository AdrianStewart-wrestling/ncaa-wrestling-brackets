// 2011 NCAA Division I Wrestling Championships -- transcribed from the official NCAA final brackets (bout numbers, explicit result codes).
// Schools from the year-aware school-code map (codes1011.json). Byes are NOT rows (see HistoricalSeeds.facts byes).
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Camden Eppert",
    "loser_school": "Purdue",
    "result": "Dec 11-9"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Frank Cagnina",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Levi Jones",
    "winner_school": "Boise State",
    "loser": "Hicks Manson",
    "loser_school": "Cornell",
    "result": "Dec 9-3"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Matt Lester",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Corey Mock",
    "winner_school": "North Carolina",
    "loser": "Bryan Deutsch",
    "loser_school": "Northern Illinois",
    "result": "Fall 6:39"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Joe Booth",
    "winner_school": "Drexel",
    "loser": "Thomas Scotton",
    "loser_school": "North Carolina",
    "result": "Dec 5-0"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Dorian Henderson",
    "winner_school": "Missouri",
    "loser": "Rob Morrison",
    "loser_school": "Rider",
    "result": "TB-1 4-1"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Grant Gambrall",
    "winner_school": "Iowa",
    "loser": "Corey Peltier",
    "loser_school": "Maryland",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Anthony Biondo",
    "winner_school": "Michigan",
    "loser": "Daniel Mitchell",
    "loser_school": "American",
    "result": "Dec 10-4"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Clayton Jack",
    "winner_school": "Oregon State",
    "loser": "Jeremy Johnson",
    "loser_school": "Ohio",
    "result": "Fall 3:17"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Matthew Snyder",
    "loser_school": "Virginia",
    "result": "TF 17-1 4:23"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Steven Keith",
    "winner_school": "Harvard",
    "loser": "Shane Young",
    "loser_school": "West Virginia",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Mark Rappo",
    "winner_school": "Penn",
    "loser": "Jonathon Morrison",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Allen Bartelli",
    "loser_school": "Boise State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Jason Lara",
    "loser_school": "Oregon State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Brad Pataky",
    "loser_school": "Penn State",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Ben Kjar",
    "winner_school": "Utah Valley",
    "loser": "Steve Bonanno",
    "loser_school": "Hofstra",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Tyler Iwamura",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 3:49"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Robert Jillard",
    "loser_school": "Liberty",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Joseph Langel",
    "winner_school": "Rutgers",
    "loser": "Michael Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Frank Perrelli",
    "winner_school": "Cornell",
    "loser": "Trent Sprenkle",
    "loser_school": "North Dakota State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Nicholas Bedelyon",
    "winner_school": "Kent State",
    "loser": "Garrett Frey",
    "loser_school": "Princeton",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Aaron Kalil",
    "loser_school": "Navy",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Anthony Zanetta",
    "winner_school": "Pittsburgh",
    "loser": "Alan Waters",
    "loser_school": "Missouri",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Sean Boyle",
    "winner_school": "Michigan",
    "loser": "David Klingsheim",
    "loser_school": "Nebraska",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Manuel Ramirez",
    "loser_school": "UNC Greensboro",
    "result": "Fall 2:31"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Tyler Small",
    "loser_school": "Kent State",
    "result": "Fall 2:56"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Levi Mele",
    "winner_school": "Northwestern",
    "loser": "Joseph Spisak",
    "loser_school": "Virginia",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Ian Paddock",
    "loser_school": "Ohio State",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Garrett Drucker",
    "loser_school": "Oregon State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Demetrius Johnson",
    "loser_school": "Chattanooga",
    "result": "Fall 0:57"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Kyle Hutter",
    "winner_school": "Old Dominion",
    "loser": "Zac Stevens",
    "loser_school": "Michigan",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Fred Santaite",
    "winner_school": "Boston University",
    "loser": "Justin Paulsen",
    "loser_school": "Stanford",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Ridge Kiley",
    "loser_school": "Nebraska",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Andrew Long",
    "winner_school": "Penn State",
    "loser": "Casey Cruz",
    "loser_school": "Northern Colorado",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Jordan Thome",
    "loser_school": "Army",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Scotti Sentes",
    "winner_school": "Central Michigan",
    "loser": "Nathan Pennesi",
    "loser_school": "West Virginia",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Jordan Keller",
    "loser_school": "Oklahoma",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Bernard Futrell",
    "winner_school": "Illinois",
    "loser": "Eric Morrill",
    "loser_school": "Edinboro",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Flint Ray",
    "winner_school": "Utah Valley",
    "loser": "Rollie Peterkin",
    "loser_school": "Penn",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Kevin Smith",
    "winner_school": "Buffalo",
    "loser": "Thomas Mitchell",
    "loser_school": "Liberty",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Nathan McCormick",
    "loser_school": "Missouri",
    "result": "Fall 2:26"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Mike Koehnlein",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Vicente Varela",
    "loser_school": "Hofstra",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Cole VonOhlen",
    "winner_school": "Air Force",
    "loser": "Christopher Drouin",
    "loser_school": "Iowa State",
    "result": "Fall 2:20"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Cody Cleveland",
    "loser_school": "Chattanooga",
    "result": "SV-1 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Stephen Dutton",
    "loser_school": "Lehigh",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Zack Kemmerer",
    "winner_school": "Penn",
    "loser": "Jon Kohler",
    "loser_school": "Maryland",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Christopher Diaz",
    "winner_school": "Virginia Tech",
    "loser": "Mike Greck",
    "loser_school": "Millersville",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Justin Morrill",
    "loser_school": "Utah Valley",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Andrew Schutt",
    "loser_school": "Buffalo",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Matthew Bonson",
    "winner_school": "Lock Haven",
    "loser": "Levi Jones",
    "loser_school": "Boise State",
    "result": "Fall 3:34"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Matthew Mariacher",
    "winner_school": "American",
    "loser": "Kaleb Friedley",
    "loser_school": "Northwestern",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Andrew Alton",
    "winner_school": "Penn State",
    "loser": "Anwar Goeres",
    "loser_school": "Binghamton",
    "result": "Fall 2:20"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Joshua Kindig",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Todd Schavrien",
    "winner_school": "Missouri",
    "loser": "Trevor Melde",
    "loser_school": "Rutgers",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Nick Nelson",
    "winner_school": "Virginia",
    "loser": "Casey Thome",
    "loser_school": "Army",
    "result": "TB-1 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "Darius Little",
    "loser_school": "NC State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Darrion Caldwell",
    "winner_school": "NC State",
    "loser": "Ivan Lopouchanski",
    "loser_school": "UNC Greensboro",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Brandon Rader",
    "loser_school": "West Virginia",
    "result": "Fall 4:51"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Coulthurst Schmitt",
    "winner_school": "Wisconsin",
    "loser": "Donald Vinson",
    "loser_school": "Binghamton",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Ganbayar Sanjaa",
    "winner_school": "American",
    "loser": "Justin Gaethje",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Daniel Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Eric Terrazas",
    "winner_school": "Illinois",
    "loser": "Desi Green",
    "loser_school": "Buffalo",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Torsten Gillespie",
    "winner_school": "Edinboro",
    "loser": "Ryan Medved",
    "loser_school": "Gardner-Webb",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Donnie Corby",
    "loser_school": "Central Michigan",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Joey Metzler",
    "loser_school": "Old Dominion",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Cole Dallaserra",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Joseph Napoli",
    "winner_school": "Lehigh",
    "loser": "Andrew Nadhir",
    "loser_school": "Northwestern",
    "result": "Fall 6:00"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Dane Johnson",
    "loser_school": "Pittsburgh",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Mario Mason",
    "winner_school": "Rutgers",
    "loser": "Brian Stephens",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Kurt Kinser",
    "winner_school": "Indiana",
    "loser": "Kyle Bradley",
    "loser_school": "Missouri",
    "result": "SV-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Derek Valenti",
    "winner_school": "Virginia",
    "loser": "Dan Osterman",
    "loser_school": "Michigan State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Zac Cibula",
    "loser_school": "Rider",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "DJ Meagher",
    "loser_school": "Cornell",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Colton Salazar",
    "winner_school": "Purdue",
    "loser": "Aaron Sulzer",
    "loser_school": "Eastern Michigan",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Sean McMurray",
    "loser_school": "Michigan State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "Chase Nelson",
    "loser_school": "Oklahoma",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Jesse Dong",
    "winner_school": "Virginia Tech",
    "loser": "Matt Cathell",
    "loser_school": "Kent State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Paul Young",
    "winner_school": "Indiana",
    "loser": "Donnie Tasser",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Mark Lewandowski",
    "winner_school": "Buffalo",
    "loser": "Josh Condon",
    "loser_school": "Chattanooga",
    "result": "Fall 3:37"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Bubba Jenkins",
    "winner_school": "Arizona State",
    "loser": "Alex Medved",
    "loser_school": "Gardner-Webb",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Robert Erisman",
    "loser_school": "Oklahoma State",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "David Bonin",
    "winner_school": "Northern Iowa",
    "loser": "Matt Kaylor",
    "loser_school": "Binghamton",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Walter Peppelman",
    "winner_school": "Harvard",
    "loser": "Vincent Salminen",
    "loser_school": "North Dakota State",
    "result": "Fall 0:32"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Frank Hickman",
    "loser_school": "Bloomsburg",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Bryce Saddoris",
    "winner_school": "Navy",
    "loser": "Jackson Morse",
    "loser_school": "Illinois",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Daryl Cocozzo",
    "winner_school": "Rutgers",
    "loser": "Corey Mock",
    "loser_school": "North Carolina",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Johnny Greisheimer",
    "winner_school": "Edinboro",
    "loser": "Barrett Abel",
    "loser_school": "Cal Poly",
    "result": "Fall 4:31"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Steve Fittery",
    "winner_school": "American",
    "loser": "Kyle John",
    "loser_school": "Maryland",
    "result": "TF 19-4 5:52"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Ethan Headlee",
    "loser_school": "Pittsburgh",
    "result": "TF 23-7 5:16"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Justin Lister",
    "winner_school": "Binghamton",
    "loser": "Kyle Blevins",
    "loser_school": "Appalachian State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Justin Kerber",
    "winner_school": "Cornell",
    "loser": "Bekzod Abdurakhmonov",
    "loser_school": "Clarion",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Scott Winston",
    "winner_school": "Rutgers",
    "loser": "Dan Yates",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Colt Sponseller",
    "winner_school": "Ohio State",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Eren Civan",
    "winner_school": "Columbia",
    "loser": "Cody Yohn",
    "loser_school": "Minnesota",
    "result": "Fall 2:28"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Stephen Burak",
    "winner_school": "Penn",
    "loser": "Joe Booth",
    "loser_school": "Drexel",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Kurt Swartz",
    "loser_school": "Boise State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma",
    "loser": "Patrick Graham",
    "loser_school": "American",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Donald Jones",
    "winner_school": "West Virginia",
    "loser": "Ross Tice",
    "loser_school": "Kent State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Aaron Janssen",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Paul Gillespie",
    "winner_school": "Hofstra",
    "loser": "Dallas Bailey",
    "loser_school": "Oklahoma State",
    "result": "SV-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Turtogtokh Luvsandorj",
    "loser_school": "The Citadel",
    "result": "Fall 5:33"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Jim Resnick",
    "winner_school": "Rider",
    "loser": "Zach Toal",
    "loser_school": "Missouri",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "John-Martin Cannon",
    "loser_school": "Buffalo",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Ryan DesRoches",
    "loser_school": "Cal Poly",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Justin Zeerip",
    "loser_school": "Michigan",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Luke Manuel",
    "winner_school": "Purdue",
    "loser": "Ryan Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Dorian Henderson",
    "loser_school": "Missouri",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Mike Letts",
    "winner_school": "Maryland",
    "loser": "Scott Giffin",
    "loser_school": "Penn",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Christopher Henrich",
    "winner_school": "Virginia",
    "loser": "Eric Starks",
    "loser_school": "Arizona State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Mike Benefiel",
    "winner_school": "Oklahoma State",
    "loser": "Brandon Wright",
    "loser_school": "Chattanooga",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Matt Fullowan",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Colby Covington",
    "winner_school": "Oregon State",
    "loser": "Mike Dessino",
    "loser_school": "Bloomsburg",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Hunter Meys",
    "loser_school": "Boston University",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Nick Purdue",
    "winner_school": "Ohio",
    "loser": "Ryan McGarity",
    "loser_school": "Binghamton",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Curran Jacobs",
    "winner_school": "Michigan State",
    "loser": "Austin Meys",
    "loser_school": "Lehigh",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Alex Caruso",
    "loser_school": "Rutgers",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Benjamin Jordan",
    "loser_school": "Wisconsin",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Matt Demichiel",
    "loser_school": "Navy",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Scott Glasser",
    "winner_school": "Minnesota",
    "loser": "Patrick Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Royal Brettrager",
    "loser_school": "Liberty",
    "result": "Fall 0:24"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Christopher Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Brice Arand",
    "loser_school": "Oregon State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Luke Rebertus",
    "winner_school": "Navy",
    "loser": "Jonathan Velazquez",
    "loser_school": "Gardner-Webb",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Jonathan Fausey",
    "loser_school": "Virginia",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Jason McCroskey",
    "loser_school": "Chattanooga",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "A.J. Kissel",
    "loser_school": "Purdue",
    "result": "Fall 6:41"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Grant Gambrall",
    "winner_school": "Iowa",
    "loser": "Austin Trotman",
    "loser_school": "Appalachian State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Max Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Erich Schmditke",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Travis Rutt",
    "winner_school": "Wisconsin",
    "loser": "Nathan Schiedel",
    "loser_school": "Binghamton",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Brad Dieckhaus",
    "loser_school": "Northern Illinois",
    "result": "TF 16-0 6:51"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Jake Meredith",
    "winner_school": "Arizona State",
    "loser": "Richard Shafer",
    "loser_school": "Iowa State",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Diego Bencomo",
    "winner_school": "Duke",
    "loser": "Kirk Smith",
    "loser_school": "Boise State",
    "result": "FOR"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Ben Clymer",
    "loser_school": "Hofstra",
    "result": "TB-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Tony Dallago",
    "loser_school": "Illinois",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Matt Ryan",
    "loser_school": "West Virginia",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Daniel Rinaldi",
    "winner_school": "Rutgers",
    "loser": "Cody Magrum",
    "loser_school": "Ohio State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Mike Larson",
    "loser_school": "Missouri",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Ryan Smith",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Andy Johnson",
    "winner_school": "Nebraska",
    "loser": "Zachary Bennett",
    "loser_school": "North Carolina",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Anthony Biondo",
    "loser_school": "Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Matt Powless",
    "winner_school": "Indiana",
    "loser": "LJ Helbig",
    "loser_school": "Wyoming",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Luke Lofthouse",
    "winner_school": "Iowa",
    "loser": "Riley Orozco",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Zack Giesen",
    "winner_school": "Stanford",
    "loser": "Travis Porter",
    "loser_school": "Gardner-Webb",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Jay Hahn",
    "winner_school": "Bucknell",
    "loser": "Nikolas Brown",
    "loser_school": "Chattanooga",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Brent Haynes",
    "loser_school": "Missouri",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Trevor Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Caylor Williams",
    "loser_school": "UNC Greensboro",
    "result": "Fall 1:06"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "John Hall",
    "winner_school": "Boston University",
    "loser": "Chad Hanke",
    "loser_school": "Oregon State",
    "result": "Fall 6:50"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Jerome Ward",
    "winner_school": "Iowa State",
    "loser": "Erik Schuth",
    "loser_school": "Ohio",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "Peter Capone",
    "loser_school": "Ohio State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Zac Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Matt Casperson",
    "loser_school": "Boise State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Logan Brown",
    "winner_school": "Purdue",
    "loser": "Shawn Fendone",
    "loser_school": "Edinboro",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Joseph Kennedy",
    "winner_school": "Lehigh",
    "loser": "Tyler Dickenson",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "Luke Macchiaroli",
    "loser_school": "Arizona State",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Parker Burns",
    "loser_school": "Campbell",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "David Marone",
    "winner_school": "Virginia Tech",
    "loser": "Blake Rosholt",
    "loser_school": "Oklahoma State",
    "result": "TB-1 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Cameron Wade",
    "winner_school": "Penn State",
    "loser": "Clayton Jack",
    "loser_school": "Oregon State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Christian Brantley",
    "loser_school": "Northern Iowa",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Dominque Bradley",
    "winner_school": "Missouri",
    "loser": "J.T. Felix",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Eric Bugenhagen",
    "winner_school": "Wisconsin",
    "loser": "Paul Snyder",
    "loser_school": "Hofstra",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Joseph Rizqallah",
    "winner_school": "Michigan State",
    "loser": "David Wade",
    "loser_school": "Eastern Michigan",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Levi Cooper",
    "winner_school": "Arizona State",
    "loser": "Dominick Russo III",
    "loser_school": "Rutgers",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Ryan Flores",
    "winner_school": "American",
    "loser": "Ben Apland",
    "loser_school": "Michigan",
    "result": "Fall 1:58"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Kevin Lester",
    "winner_school": "Columbia",
    "loser": "John Danilkowicz",
    "loser_school": "Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Tucker Lane",
    "winner_school": "Nebraska",
    "loser": "Brett Correll",
    "loser_school": "Buffalo",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Brendan Barlow",
    "winner_school": "Kent State",
    "loser": "Ryan Tomei",
    "loser_school": "Pittsburgh",
    "result": "TB-1 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Blake Rasing",
    "winner_school": "Iowa",
    "loser": "Kyle Simonson",
    "loser_school": "Iowa State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Nathan Fernandez",
    "winner_school": "Oklahoma",
    "loser": "Peter Sturgeon",
    "loser_school": "UNC Greensboro",
    "result": "SV-1 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Ricardo Alcala",
    "winner_school": "Indiana",
    "loser": "Spencer Myers",
    "loser_school": "Maryland",
    "result": "SV-1 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Joshua Wine",
    "loser_school": "VMI",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Allen Bartelli",
    "winner_school": "Boise State",
    "loser": "Camden Eppert",
    "loser_school": "Purdue",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Frank Cagnina",
    "winner_school": "Lehigh",
    "loser": "Demetrius Johnson",
    "loser_school": "Chattanooga",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Hicks Manson",
    "winner_school": "Cornell",
    "loser": "Mike Greck",
    "loser_school": "Millersville",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "Matt Lester",
    "winner_school": "Oklahoma",
    "loser": "Ryan Medved",
    "loser_school": "Gardner-Webb",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Bryan Deutsch",
    "winner_school": "Northern Illinois",
    "loser": "Sean McMurray",
    "loser_school": "Michigan State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Ross Tice",
    "winner_school": "Kent State",
    "loser": "Thomas Scotton",
    "loser_school": "North Carolina",
    "result": "MD 12-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Rob Morrison",
    "winner_school": "Rider",
    "loser": "Matt Demichiel",
    "loser_school": "Navy",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Corey Peltier",
    "winner_school": "Maryland",
    "loser": "Kirk Smith",
    "loser_school": "Boise State",
    "result": "FOR"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Daniel Mitchell",
    "winner_school": "American",
    "loser": "Shawn Fendone",
    "loser_school": "Edinboro",
    "result": "MD 11-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Peter Sturgeon",
    "loser_school": "UNC Greensboro",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Steven Keith",
    "loser_school": "Harvard",
    "result": "TF 15-0 3:32"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Mark Rappo",
    "loser_school": "Penn",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Jarrod Garnett",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Ben Kjar",
    "winner_school": "Utah Valley",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Joseph Langel",
    "loser_school": "Rutgers",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Nicholas Bedelyon",
    "winner_school": "Kent State",
    "loser": "Frank Perrelli",
    "loser_school": "Cornell",
    "result": "Fall 2:30"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Anthony Zanetta",
    "loser_school": "Pittsburgh",
    "result": "Fall 4:37"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Sean Boyle",
    "loser_school": "Michigan",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Manuel Ramirez",
    "winner_school": "UNC Greensboro",
    "loser": "David Klingsheim",
    "loser_school": "Nebraska",
    "result": "MD 19-7"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Aaron Kalil",
    "loser_school": "Navy",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Garrett Frey",
    "loser_school": "Princeton",
    "result": "Fall 2:48"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Michael Martinez",
    "winner_school": "Wyoming",
    "loser": "Robert Jillard",
    "loser_school": "Liberty",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Steve Bonanno",
    "winner_school": "Hofstra",
    "loser": "Tyler Iwamura",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Brad Pataky",
    "winner_school": "Penn State",
    "loser": "Jason Lara",
    "loser_school": "Oregon State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Allen Bartelli",
    "winner_school": "Boise State",
    "loser": "Jonathon Morrison",
    "loser_school": "Oklahoma State",
    "result": "SV-2 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Matthew Snyder",
    "winner_school": "Virginia",
    "loser": "Shane Young",
    "loser_school": "West Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Levi Mele",
    "loser_school": "Northwestern",
    "result": "Fall 2:11"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Devin Carter",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Kyle Hutter",
    "loser_school": "Old Dominion",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Fred Santaite",
    "loser_school": "Boston University",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Andrew Long",
    "winner_school": "Penn State",
    "loser": "David Thorn",
    "loser_school": "Minnesota",
    "result": "SV-1 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Scotti Sentes",
    "winner_school": "Central Michigan",
    "loser": "Tony Ramos",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Bernard Futrell",
    "winner_school": "Illinois",
    "loser": "Flint Ray",
    "loser_school": "Utah Valley",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Kevin Smith",
    "loser_school": "Buffalo",
    "result": "TF 16-1 7:00"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Nathan McCormick",
    "winner_school": "Missouri",
    "loser": "Thomas Mitchell",
    "loser_school": "Liberty",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Rollie Peterkin",
    "winner_school": "Penn",
    "loser": "Eric Morrill",
    "loser_school": "Edinboro",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Jordan Keller",
    "winner_school": "Oklahoma",
    "loser": "Nathan Pennesi",
    "loser_school": "West Virginia",
    "result": "TB-1 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Casey Cruz",
    "winner_school": "Northern Colorado",
    "loser": "Jordan Thome",
    "loser_school": "Army",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Ridge Kiley",
    "winner_school": "Nebraska",
    "loser": "Justin Paulsen",
    "loser_school": "Stanford",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Zac Stevens",
    "winner_school": "Michigan",
    "loser": "Frank Cagnina",
    "loser_school": "Lehigh",
    "result": "Dec 12-9"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Ian Paddock",
    "winner_school": "Ohio State",
    "loser": "Garrett Drucker",
    "loser_school": "Oregon State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Tyler Small",
    "winner_school": "Kent State",
    "loser": "Joseph Spisak",
    "loser_school": "Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Michael Mangrum",
    "loser_school": "Oregon State",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Cole VonOhlen",
    "loser_school": "Air Force",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Zack Kemmerer",
    "loser_school": "Penn",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Christopher Diaz",
    "loser_school": "Virginia Tech",
    "result": "Fall 4:43"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Matthew Bonson",
    "loser_school": "Lock Haven",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Andrew Alton",
    "winner_school": "Penn State",
    "loser": "Matthew Mariacher",
    "loser_school": "American",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Todd Schavrien",
    "winner_school": "Missouri",
    "loser": "Tyler Nauman",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "Nick Nelson",
    "loser_school": "Virginia",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Casey Thome",
    "winner_school": "Army",
    "loser": "Darius Little",
    "loser_school": "NC State",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Joshua Kindig",
    "winner_school": "Oklahoma State",
    "loser": "Trevor Melde",
    "loser_school": "Rutgers",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Anwar Goeres",
    "winner_school": "Binghamton",
    "loser": "Kaleb Friedley",
    "loser_school": "Northwestern",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Levi Jones",
    "winner_school": "Boise State",
    "loser": "Andrew Schutt",
    "loser_school": "Buffalo",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Hicks Manson",
    "winner_school": "Cornell",
    "loser": "Justin Morrill",
    "loser_school": "Utah Valley",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Stephen Dutton",
    "winner_school": "Lehigh",
    "loser": "Jon Kohler",
    "loser_school": "Maryland",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Christopher Drouin",
    "winner_school": "Iowa State",
    "loser": "Cody Cleveland",
    "loser_school": "Chattanooga",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Vicente Varela",
    "winner_school": "Hofstra",
    "loser": "Mike Koehnlein",
    "loser_school": "Nebraska",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Darrion Caldwell",
    "loser_school": "NC State",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Ganbayar Sanjaa",
    "winner_school": "American",
    "loser": "Coulthurst Schmitt",
    "loser_school": "Wisconsin",
    "result": "Fall 1:53"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Eric Terrazas",
    "loser_school": "Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Torsten Gillespie",
    "loser_school": "Edinboro",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Scott Sakaguchi",
    "loser_school": "Oregon State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Joseph Napoli",
    "loser_school": "Lehigh",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Mario Mason",
    "winner_school": "Rutgers",
    "loser": "Kurt Kinser",
    "loser_school": "Indiana",
    "result": "TB-2 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Derek Valenti",
    "loser_school": "Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Zac Cibula",
    "winner_school": "Rider",
    "loser": "Dan Osterman",
    "loser_school": "Michigan State",
    "result": "TB-2 (RT) 7-7"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Kyle Bradley",
    "winner_school": "Missouri",
    "loser": "Brian Stephens",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Andrew Nadhir",
    "winner_school": "Northwestern",
    "loser": "Dane Johnson",
    "loser_school": "Pittsburgh",
    "result": "SV-1 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Cole Dallaserra",
    "winner_school": "Wyoming",
    "loser": "Joey Metzler",
    "loser_school": "Old Dominion",
    "result": "Fall 1:55"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Donnie Corby",
    "winner_school": "Central Michigan",
    "loser": "Matt Lester",
    "loser_school": "Oklahoma",
    "result": "TB-1 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Desi Green",
    "winner_school": "Buffalo",
    "loser": "Daniel Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "Justin Gaethje",
    "winner_school": "Northern Colorado",
    "loser": "Donald Vinson",
    "loser_school": "Binghamton",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Ivan Lopouchanski",
    "winner_school": "UNC Greensboro",
    "loser": "Brandon Rader",
    "loser_school": "West Virginia",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Colton Salazar",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "James Fleming",
    "loser_school": "Clarion",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Paul Young",
    "winner_school": "Indiana",
    "loser": "Jesse Dong",
    "loser_school": "Virginia Tech",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Bubba Jenkins",
    "winner_school": "Arizona State",
    "loser": "Mark Lewandowski",
    "loser_school": "Buffalo",
    "result": "Fall 5:41"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "David Bonin",
    "loser_school": "Northern Iowa",
    "result": "TF 20-3 5:49"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Walter Peppelman",
    "loser_school": "Harvard",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Bryce Saddoris",
    "winner_school": "Navy",
    "loser": "Daryl Cocozzo",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Steve Fittery",
    "winner_school": "American",
    "loser": "Johnny Greisheimer",
    "loser_school": "Edinboro",
    "result": "TF 23-7 5:58"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Kyle John",
    "winner_school": "Maryland",
    "loser": "Barrett Abel",
    "loser_school": "Cal Poly",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Corey Mock",
    "winner_school": "North Carolina",
    "loser": "Jackson Morse",
    "loser_school": "Illinois",
    "result": "Dec 12-10"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Frank Hickman",
    "winner_school": "Bloomsburg",
    "loser": "Vincent Salminen",
    "loser_school": "North Dakota State",
    "result": "MD 17-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Robert Erisman",
    "winner_school": "Oklahoma State",
    "loser": "Matt Kaylor",
    "loser_school": "Binghamton",
    "result": "MD 14-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Alex Medved",
    "winner_school": "Gardner-Webb",
    "loser": "Josh Condon",
    "loser_school": "Chattanooga",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Donnie Tasser",
    "winner_school": "Pittsburgh",
    "loser": "Matt Cathell",
    "loser_school": "Kent State",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Bryan Deutsch",
    "winner_school": "Northern Illinois",
    "loser": "Chase Nelson",
    "loser_school": "Oklahoma",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "DJ Meagher",
    "winner_school": "Cornell",
    "loser": "Aaron Sulzer",
    "loser_school": "Eastern Michigan",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Justin Lister",
    "loser_school": "Binghamton",
    "result": "DEF"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Scott Winston",
    "winner_school": "Rutgers",
    "loser": "Justin Kerber",
    "loser_school": "Cornell",
    "result": "TB-1 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Colt Sponseller",
    "winner_school": "Ohio State",
    "loser": "Eren Civan",
    "loser_school": "Columbia",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Stephen Burak",
    "loser_school": "Penn",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma",
    "loser": "Donald Jones",
    "loser_school": "West Virginia",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Paul Gillespie",
    "winner_school": "Hofstra",
    "loser": "Peter Yates",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Jim Resnick",
    "loser_school": "Rider",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Brandon Hatchett",
    "loser_school": "Lehigh",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "John-Martin Cannon",
    "winner_school": "Buffalo",
    "loser": "Ryan DesRoches",
    "loser_school": "Cal Poly",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Zach Toal",
    "winner_school": "Missouri",
    "loser": "Turtogtokh Luvsandorj",
    "loser_school": "The Citadel",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Aaron Janssen",
    "winner_school": "Iowa",
    "loser": "Dallas Bailey",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Ross Tice",
    "winner_school": "Kent State",
    "loser": "Patrick Graham",
    "loser_school": "American",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Joe Booth",
    "winner_school": "Drexel",
    "loser": "Kurt Swartz",
    "loser_school": "Boise State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Cody Yohn",
    "winner_school": "Minnesota",
    "loser": "Chad Porter",
    "loser_school": "Liberty",
    "result": "Fall 1:40"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Bekzod Abdurakhmonov",
    "winner_school": "Clarion",
    "loser": "Dan Yates",
    "loser_school": "Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Kyle Blevins",
    "winner_school": "Appalachian State",
    "loser": "Ethan Headlee",
    "loser_school": "Pittsburgh",
    "result": "SV-1 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Luke Manuel",
    "loser_school": "Purdue",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Mike Letts",
    "winner_school": "Maryland",
    "loser": "Ethen Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Christopher Henrich",
    "winner_school": "Virginia",
    "loser": "Mike Benefiel",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Colby Covington",
    "winner_school": "Oregon State",
    "loser": "Jacob Swartz",
    "loser_school": "Boise State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Nick Purdue",
    "loser_school": "Ohio",
    "result": "Fall 2:55"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Curran Jacobs",
    "loser_school": "Michigan State",
    "result": "MD 16-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Nick Heflin",
    "loser_school": "Ohio State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Scott Glasser",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Patrick Martinez",
    "winner_school": "Wyoming",
    "loser": "Royal Brettrager",
    "loser_school": "Liberty",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Rob Morrison",
    "winner_school": "Rider",
    "loser": "Benjamin Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Alex Caruso",
    "winner_school": "Rutgers",
    "loser": "Austin Meys",
    "loser_school": "Lehigh",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Hunter Meys",
    "winner_school": "Boston University",
    "loser": "Ryan McGarity",
    "loser_school": "Binghamton",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Mike Dessino",
    "winner_school": "Bloomsburg",
    "loser": "Matt Fullowan",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Eric Starks",
    "winner_school": "Arizona State",
    "loser": "Brandon Wright",
    "loser_school": "Chattanooga",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Dorian Henderson",
    "winner_school": "Missouri",
    "loser": "Scott Giffin",
    "loser_school": "Penn",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Ryan Patrovich",
    "winner_school": "Hofstra",
    "loser": "Justin Zeerip",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Christopher Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Luke Rebertus",
    "loser_school": "Navy",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Kevin Steinhaus",
    "loser_school": "Minnesota",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Grant Gambrall",
    "winner_school": "Iowa",
    "loser": "Joe LeBlanc",
    "loser_school": "Wyoming",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Travis Rutt",
    "winner_school": "Wisconsin",
    "loser": "Max Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Jake Meredith",
    "loser_school": "Arizona State",
    "result": "Fall 4:41"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Diego Bencomo",
    "winner_school": "Duke",
    "loser": "Ryan Loder",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-10"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Josh Ihnen",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Daniel Rinaldi",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Cody Magrum",
    "winner_school": "Ohio State",
    "loser": "Mike Larson",
    "loser_school": "Missouri",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Matt Ryan",
    "winner_school": "West Virginia",
    "loser": "Tony Dallago",
    "loser_school": "Illinois",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Ben Clymer",
    "winner_school": "Hofstra",
    "loser": "Corey Peltier",
    "loser_school": "Maryland",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Brad Dieckhaus",
    "winner_school": "Northern Illinois",
    "loser": "Richard Shafer",
    "loser_school": "Iowa State",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Erich Schmditke",
    "winner_school": "Oklahoma",
    "loser": "Nathan Schiedel",
    "loser_school": "Binghamton",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Austin Trotman",
    "winner_school": "Appalachian State",
    "loser": "A.J. Kissel",
    "loser_school": "Purdue",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Jonathan Fausey",
    "winner_school": "Virginia",
    "loser": "Jason McCroskey",
    "loser_school": "Chattanooga",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Brice Arand",
    "winner_school": "Oregon State",
    "loser": "Jonathan Velazquez",
    "loser_school": "Gardner-Webb",
    "result": "Fall 1:33"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Andy Johnson",
    "loser_school": "Nebraska",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Matt Powless",
    "winner_school": "Indiana",
    "loser": "Sonny Yohn",
    "loser_school": "Minnesota",
    "result": "SV-1 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Luke Lofthouse",
    "winner_school": "Iowa",
    "loser": "Zack Giesen",
    "loser_school": "Stanford",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Jay Hahn",
    "loser_school": "Bucknell",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Trevor Brandvold",
    "winner_school": "Wisconsin",
    "loser": "John Hall",
    "loser_school": "Boston University",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "Jerome Ward",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Zac Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Logan Brown",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "Joseph Kennedy",
    "loser_school": "Lehigh",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Tyler Dickenson",
    "winner_school": "Michigan State",
    "loser": "Luke Macchiaroli",
    "loser_school": "Arizona State",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Daniel Mitchell",
    "winner_school": "American",
    "loser": "Matt Casperson",
    "loser_school": "Boise State",
    "result": "DEF"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Peter Capone",
    "winner_school": "Ohio State",
    "loser": "Erik Schuth",
    "loser_school": "Ohio",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Chad Hanke",
    "winner_school": "Oregon State",
    "loser": "Caylor Williams",
    "loser_school": "UNC Greensboro",
    "result": "TF 21-4 6:15"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Brent Haynes",
    "winner_school": "Missouri",
    "loser": "Nikolas Brown",
    "loser_school": "Chattanooga",
    "result": "TF 18-0 2:48"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Riley Orozco",
    "winner_school": "CSU Bakersfield",
    "loser": "Travis Porter",
    "loser_school": "Gardner-Webb",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Anthony Biondo",
    "winner_school": "Michigan",
    "loser": "LJ Helbig",
    "loser_school": "Wyoming",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Zachary Bennett",
    "winner_school": "North Carolina",
    "loser": "Ryan Smith",
    "loser_school": "Cal Poly",
    "result": "Fall 2:32"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "David Marone",
    "loser_school": "Virginia Tech",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Cameron Wade",
    "winner_school": "Penn State",
    "loser": "Anthony Nelson",
    "loser_school": "Minnesota",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Dominque Bradley",
    "winner_school": "Missouri",
    "loser": "Eric Bugenhagen",
    "loser_school": "Wisconsin",
    "result": "TB-2 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Levi Cooper",
    "winner_school": "Arizona State",
    "loser": "Joseph Rizqallah",
    "loser_school": "Michigan State",
    "result": "Fall 6:24"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Ryan Flores",
    "winner_school": "American",
    "loser": "Kevin Lester",
    "loser_school": "Columbia",
    "result": "MD 18-5"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Tucker Lane",
    "winner_school": "Nebraska",
    "loser": "Brendan Barlow",
    "loser_school": "Kent State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Nathan Fernandez",
    "winner_school": "Oklahoma",
    "loser": "Blake Rasing",
    "loser_school": "Iowa",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Ricardo Alcala",
    "loser_school": "Indiana",
    "result": "TB-2 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Spencer Myers",
    "winner_school": "Maryland",
    "loser": "Joshua Wine",
    "loser_school": "VMI",
    "result": "Fall 5:43"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Kyle Simonson",
    "winner_school": "Iowa State",
    "loser": "Jeremy Johnson",
    "loser_school": "Ohio",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Ryan Tomei",
    "winner_school": "Pittsburgh",
    "loser": "Brett Correll",
    "loser_school": "Buffalo",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Ben Apland",
    "winner_school": "Michigan",
    "loser": "John Danilkowicz",
    "loser_school": "Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Dominick Russo III",
    "winner_school": "Rutgers",
    "loser": "David Wade",
    "loser_school": "Eastern Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "J.T. Felix",
    "winner_school": "Boise State",
    "loser": "Paul Snyder",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Clayton Jack",
    "winner_school": "Oregon State",
    "loser": "Christian Brantley",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Blake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Parker Burns",
    "loser_school": "Campbell",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Manuel Ramirez",
    "loser_school": "UNC Greensboro",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Alan Waters",
    "loser_school": "Missouri",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Steven Keith",
    "loser_school": "Harvard",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Michael Martinez",
    "winner_school": "Wyoming",
    "loser": "Mark Rappo",
    "loser_school": "Penn",
    "result": "SV-1 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Anthony Zanetta",
    "winner_school": "Pittsburgh",
    "loser": "Steve Bonanno",
    "loser_school": "Hofstra",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Sean Boyle",
    "winner_school": "Michigan",
    "loser": "Brad Pataky",
    "loser_school": "Penn State",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Joseph Langel",
    "winner_school": "Rutgers",
    "loser": "Allen Bartelli",
    "loser_school": "Boise State",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Matthew Snyder",
    "winner_school": "Virginia",
    "loser": "Frank Perrelli",
    "loser_school": "Cornell",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Kyle Hutter",
    "winner_school": "Old Dominion",
    "loser": "Nathan McCormick",
    "loser_school": "Missouri",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Rollie Peterkin",
    "winner_school": "Penn",
    "loser": "Fred Santaite",
    "loser_school": "Boston University",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Levi Mele",
    "winner_school": "Northwestern",
    "loser": "Jordan Keller",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Casey Cruz",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Flint Ray",
    "winner_school": "Utah Valley",
    "loser": "Ridge Kiley",
    "loser_school": "Nebraska",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Zac Stevens",
    "winner_school": "Michigan",
    "loser": "Kevin Smith",
    "loser_school": "Buffalo",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Ian Paddock",
    "loser_school": "Ohio State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Tyler Small",
    "loser_school": "Kent State",
    "result": "TF 21-4 7:00"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Zack Kemmerer",
    "winner_school": "Penn",
    "loser": "Casey Thome",
    "loser_school": "Army",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Joshua Kindig",
    "winner_school": "Oklahoma State",
    "loser": "Christopher Diaz",
    "loser_school": "Virginia Tech",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Anwar Goeres",
    "loser_school": "Binghamton",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Cole VonOhlen",
    "winner_school": "Air Force",
    "loser": "Levi Jones",
    "loser_school": "Boise State",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Hicks Manson",
    "loser_school": "Cornell",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Stephen Dutton",
    "winner_school": "Lehigh",
    "loser": "Nick Nelson",
    "loser_school": "Virginia",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Matthew Bonson",
    "winner_school": "Lock Haven",
    "loser": "Christopher Drouin",
    "loser_school": "Iowa State",
    "result": "TF 17-0 4:43"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Matthew Mariacher",
    "winner_school": "American",
    "loser": "Vicente Varela",
    "loser_school": "Hofstra",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Eric Terrazas",
    "winner_school": "Illinois",
    "loser": "Zac Cibula",
    "loser_school": "Rider",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Torsten Gillespie",
    "winner_school": "Edinboro",
    "loser": "Kyle Bradley",
    "loser_school": "Missouri",
    "result": "Fall 6:49"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Andrew Nadhir",
    "winner_school": "Northwestern",
    "loser": "Darrion Caldwell",
    "loser_school": "NC State",
    "result": "M FOR"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Cole Dallaserra",
    "winner_school": "Wyoming",
    "loser": "Coulthurst Schmitt",
    "loser_school": "Wisconsin",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Donnie Corby",
    "winner_school": "Central Michigan",
    "loser": "Kurt Kinser",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Derek Valenti",
    "winner_school": "Virginia",
    "loser": "Desi Green",
    "loser_school": "Buffalo",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Justin Gaethje",
    "loser_school": "Northern Colorado",
    "result": "SV-1 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Ivan Lopouchanski",
    "winner_school": "UNC Greensboro",
    "loser": "Joseph Napoli",
    "loser_school": "Lehigh",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Jesse Dong",
    "winner_school": "Virginia Tech",
    "loser": "Kyle John",
    "loser_school": "Maryland",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Mark Lewandowski",
    "winner_school": "Buffalo",
    "loser": "Corey Mock",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Frank Hickman",
    "winner_school": "Bloomsburg",
    "loser": "Colton Salazar",
    "loser_school": "Purdue",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Robert Erisman",
    "winner_school": "Oklahoma State",
    "loser": "James Fleming",
    "loser_school": "Clarion",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Daryl Cocozzo",
    "winner_school": "Rutgers",
    "loser": "Alex Medved",
    "loser_school": "Gardner-Webb",
    "result": "Fall 2:43"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Johnny Greisheimer",
    "winner_school": "Edinboro",
    "loser": "Donnie Tasser",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "David Bonin",
    "winner_school": "Northern Iowa",
    "loser": "Bryan Deutsch",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Walter Peppelman",
    "winner_school": "Harvard",
    "loser": "DJ Meagher",
    "loser_school": "Cornell",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Eren Civan",
    "winner_school": "Columbia",
    "loser": "John-Martin Cannon",
    "loser_school": "Buffalo",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Stephen Burak",
    "winner_school": "Penn",
    "loser": "Zach Toal",
    "loser_school": "Missouri",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Aaron Janssen",
    "winner_school": "Iowa",
    "loser": "Justin Lister",
    "loser_school": "Binghamton",
    "result": "TF 23-8 7:00"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Justin Kerber",
    "winner_school": "Cornell",
    "loser": "Ross Tice",
    "loser_school": "Kent State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Jim Resnick",
    "winner_school": "Rider",
    "loser": "Joe Booth",
    "loser_school": "Drexel",
    "result": "SV-1 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "Cody Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Bekzod Abdurakhmonov",
    "winner_school": "Clarion",
    "loser": "Donald Jones",
    "loser_school": "West Virginia",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Kyle Blevins",
    "winner_school": "Appalachian State",
    "loser": "Peter Yates",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Mike Benefiel",
    "winner_school": "Oklahoma State",
    "loser": "Patrick Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Rob Morrison",
    "loser_school": "Rider",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Luke Manuel",
    "winner_school": "Purdue",
    "loser": "Alex Caruso",
    "loser_school": "Rutgers",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Hunter Meys",
    "winner_school": "Boston University",
    "loser": "Ethen Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Mike Dessino",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Scott Glasser",
    "winner_school": "Minnesota",
    "loser": "Eric Starks",
    "loser_school": "Arizona State",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Dorian Henderson",
    "winner_school": "Missouri",
    "loser": "Nick Purdue",
    "loser_school": "Ohio",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Ryan Patrovich",
    "winner_school": "Hofstra",
    "loser": "Curran Jacobs",
    "loser_school": "Michigan State",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Cody Magrum",
    "loser_school": "Ohio State",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Matt Ryan",
    "winner_school": "West Virginia",
    "loser": "Max Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Luke Rebertus",
    "winner_school": "Navy",
    "loser": "Ben Clymer",
    "loser_school": "Hofstra",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Brad Dieckhaus",
    "loser_school": "Northern Illinois",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Erich Schmditke",
    "loser_school": "Oklahoma",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Austin Trotman",
    "winner_school": "Appalachian State",
    "loser": "Daniel Rinaldi",
    "loser_school": "Rutgers",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Jonathan Fausey",
    "winner_school": "Virginia",
    "loser": "Jake Meredith",
    "loser_school": "Arizona State",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Brice Arand",
    "loser_school": "Oregon State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Zack Giesen",
    "winner_school": "Stanford",
    "loser": "Tyler Dickenson",
    "loser_school": "Michigan State",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Daniel Mitchell",
    "winner_school": "American",
    "loser": "Jay Hahn",
    "loser_school": "Bucknell",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Andy Johnson",
    "winner_school": "Nebraska",
    "loser": "Peter Capone",
    "loser_school": "Ohio State",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Chad Hanke",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Brent Haynes",
    "winner_school": "Missouri",
    "loser": "Logan Brown",
    "loser_school": "Purdue",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Joseph Kennedy",
    "winner_school": "Lehigh",
    "loser": "Riley Orozco",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "John Hall",
    "winner_school": "Boston University",
    "loser": "Anthony Biondo",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Jerome Ward",
    "winner_school": "Iowa State",
    "loser": "Zachary Bennett",
    "loser_school": "North Carolina",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Spencer Myers",
    "winner_school": "Maryland",
    "loser": "Eric Bugenhagen",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Kyle Simonson",
    "winner_school": "Iowa State",
    "loser": "Joseph Rizqallah",
    "loser_school": "Michigan State",
    "result": "Fall 6:03"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Ryan Tomei",
    "winner_school": "Pittsburgh",
    "loser": "David Marone",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Ben Apland",
    "loser_school": "Michigan",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Dominick Russo III",
    "winner_school": "Rutgers",
    "loser": "Blake Rasing",
    "loser_school": "Iowa",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Ricardo Alcala",
    "winner_school": "Indiana",
    "loser": "J.T. Felix",
    "loser_school": "Boise State",
    "result": "TB-1 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Kevin Lester",
    "winner_school": "Columbia",
    "loser": "Clayton Jack",
    "loser_school": "Oregon State",
    "result": "Fall 0:41"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Brendan Barlow",
    "winner_school": "Kent State",
    "loser": "Blake Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Jarrod Patterson",
    "loser_school": "Oklahoma",
    "result": "Dec 9-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Ben Kjar",
    "winner_school": "Utah Valley",
    "loser": "Zachary Sanders",
    "loser_school": "Minnesota",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Nicholas Bedelyon",
    "loser_school": "Kent State",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Ryan Mango",
    "loser_school": "Stanford",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Jarrod Garnett",
    "loser_school": "Virginia Tech",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Michael Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Sean Boyle",
    "winner_school": "Michigan",
    "loser": "Anthony Zanetta",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Matthew Snyder",
    "winner_school": "Virginia",
    "loser": "Joseph Langel",
    "loser_school": "Rutgers",
    "result": "Dec 13-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Lou Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Andrew Long",
    "winner_school": "Penn State",
    "loser": "Scotti Sentes",
    "loser_school": "Central Michigan",
    "result": "Fall 2:46"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Bernard Futrell",
    "loser_school": "Illinois",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Rollie Peterkin",
    "winner_school": "Penn",
    "loser": "Kyle Hutter",
    "loser_school": "Old Dominion",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Levi Mele",
    "loser_school": "Northwestern",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Flint Ray",
    "winner_school": "Utah Valley",
    "loser": "Zac Stevens",
    "loser_school": "Michigan",
    "result": "Fall 4:40"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "David Thorn",
    "loser_school": "Minnesota",
    "result": "SV-1 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Zack Bailey",
    "loser_school": "Oklahoma",
    "result": "TB-2 (RT) 3-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "James Kennedy",
    "loser_school": "Illinois",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Andrew Alton",
    "loser_school": "Penn State",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "Todd Schavrien",
    "loser_school": "Missouri",
    "result": "Fall 2:03"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Zack Kemmerer",
    "winner_school": "Penn",
    "loser": "Joshua Kindig",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Cole VonOhlen",
    "loser_school": "Air Force",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Stephen Dutton",
    "winner_school": "Lehigh",
    "loser": "Tyler Nauman",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Matthew Mariacher",
    "winner_school": "American",
    "loser": "Matthew Bonson",
    "loser_school": "Lock Haven",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Ganbayar Sanjaa",
    "winner_school": "American",
    "loser": "Eric Grajales",
    "loser_school": "Michigan",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Jamal Parks",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Kevin LeValley",
    "loser_school": "Bucknell",
    "result": "TB-1 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Mario Mason",
    "loser_school": "Rutgers",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Torsten Gillespie",
    "winner_school": "Edinboro",
    "loser": "Eric Terrazas",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Andrew Nadhir",
    "winner_school": "Northwestern",
    "loser": "Cole Dallaserra",
    "loser_school": "Wyoming",
    "result": "SV-1 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Derek Valenti",
    "winner_school": "Virginia",
    "loser": "Donnie Corby",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Ivan Lopouchanski",
    "winner_school": "UNC Greensboro",
    "loser": "Scott Sakaguchi",
    "loser_school": "Oregon State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "Adam Hall",
    "loser_school": "Boise State",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Bubba Jenkins",
    "winner_school": "Arizona State",
    "loser": "Paul Young",
    "loser_school": "Indiana",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Derek St. John",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Steve Fittery",
    "winner_school": "American",
    "loser": "Bryce Saddoris",
    "loser_school": "Navy",
    "result": "Fall 4:11"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Mark Lewandowski",
    "winner_school": "Buffalo",
    "loser": "Jesse Dong",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Robert Erisman",
    "winner_school": "Oklahoma State",
    "loser": "Frank Hickman",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Johnny Greisheimer",
    "winner_school": "Edinboro",
    "loser": "Daryl Cocozzo",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Walter Peppelman",
    "winner_school": "Harvard",
    "loser": "David Bonin",
    "loser_school": "Northern Iowa",
    "result": "Fall 0:39"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Scott Winston",
    "loser_school": "Rutgers",
    "result": "TF 23-8 5:22"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Colt Sponseller",
    "winner_school": "Ohio State",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma",
    "loser": "Paul Gillespie",
    "loser_school": "Hofstra",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Shane Onufer",
    "loser_school": "Wyoming",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Stephen Burak",
    "winner_school": "Penn",
    "loser": "Eren Civan",
    "loser_school": "Columbia",
    "result": "TB-1 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Aaron Janssen",
    "winner_school": "Iowa",
    "loser": "Justin Kerber",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "Jim Resnick",
    "loser_school": "Rider",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Bekzod Abdurakhmonov",
    "winner_school": "Clarion",
    "loser": "Kyle Blevins",
    "loser_school": "Appalachian State",
    "result": "MD 9-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Mike Letts",
    "loser_school": "Maryland",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Christopher Henrich",
    "winner_school": "Virginia",
    "loser": "Colby Covington",
    "loser_school": "Oregon State",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Edward Ruth",
    "loser_school": "Penn State",
    "result": "DEF"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Mike Benefiel",
    "winner_school": "Oklahoma State",
    "loser": "Jacob Swartz",
    "loser_school": "Boise State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Luke Manuel",
    "winner_school": "Purdue",
    "loser": "Hunter Meys",
    "loser_school": "Boston University",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Scott Glasser",
    "loser_school": "Minnesota",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Ryan Patrovich",
    "winner_school": "Hofstra",
    "loser": "Dorian Henderson",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Christopher Honeycutt",
    "loser_school": "Edinboro",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Grant Gambrall",
    "winner_school": "Iowa",
    "loser": "Travis Rutt",
    "loser_school": "Wisconsin",
    "result": "TB-2 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Diego Bencomo",
    "loser_school": "Duke",
    "result": "TF 16-0 6:28"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Chris Perry",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Matt Ryan",
    "loser_school": "West Virginia",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Luke Rebertus",
    "loser_school": "Navy",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Austin Trotman",
    "loser_school": "Appalachian State",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Jonathan Fausey",
    "loser_school": "Virginia",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Matt Powless",
    "loser_school": "Indiana",
    "result": "Fall 2:20"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Luke Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Trevor Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Micah Burak",
    "loser_school": "Penn",
    "result": "Dec 1-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "Zac Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Zack Giesen",
    "winner_school": "Stanford",
    "loser": "Daniel Mitchell",
    "loser_school": "American",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Andy Johnson",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Joseph Kennedy",
    "winner_school": "Lehigh",
    "loser": "Brent Haynes",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Jerome Ward",
    "winner_school": "Iowa State",
    "loser": "John Hall",
    "loser_school": "Boston University",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Cameron Wade",
    "loser_school": "Penn State",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Dominque Bradley",
    "winner_school": "Missouri",
    "loser": "Levi Cooper",
    "loser_school": "Arizona State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Ryan Flores",
    "winner_school": "American",
    "loser": "Tucker Lane",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Nathan Fernandez",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Spencer Myers",
    "winner_school": "Maryland",
    "loser": "Kyle Simonson",
    "loser_school": "Iowa State",
    "result": "DEF"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Ryan Tomei",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Ricardo Alcala",
    "winner_school": "Indiana",
    "loser": "Dominick Russo III",
    "loser_school": "Rutgers",
    "result": "SV-1 9-7"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Brendan Barlow",
    "winner_school": "Kent State",
    "loser": "Kevin Lester",
    "loser_school": "Columbia",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "James Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Nicholas Bedelyon",
    "loser_school": "Kent State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Trent Sprenkle",
    "loser_school": "North Dakota State",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Sean Boyle",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Matthew Snyder",
    "loser_school": "Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Scotti Sentes",
    "winner_school": "Central Michigan",
    "loser": "Rollie Peterkin",
    "loser_school": "Penn",
    "result": "Fall 4:08"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Bernard Futrell",
    "winner_school": "Illinois",
    "loser": "Devin Carter",
    "loser_school": "Virginia Tech",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Flint Ray",
    "loser_school": "Utah Valley",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Tony Ramos",
    "loser_school": "Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Zack Kemmerer",
    "winner_school": "Penn",
    "loser": "Andrew Alton",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Todd Schavrien",
    "winner_school": "Missouri",
    "loser": "Michael Mangrum",
    "loser_school": "Oregon State",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Stephen Dutton",
    "loser_school": "Lehigh",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Matthew Mariacher",
    "loser_school": "American",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Torsten Gillespie",
    "loser_school": "Edinboro",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Andrew Nadhir",
    "winner_school": "Northwestern",
    "loser": "Mario Mason",
    "loser_school": "Rutgers",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Derek Valenti",
    "winner_school": "Virginia",
    "loser": "Eric Grajales",
    "loser_school": "Michigan",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Ivan Lopouchanski",
    "loser_school": "UNC Greensboro",
    "result": "SV-1 8-6"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Mark Lewandowski",
    "loser_school": "Buffalo",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Bryce Saddoris",
    "winner_school": "Navy",
    "loser": "Robert Erisman",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Johnny Greisheimer",
    "loser_school": "Edinboro",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Walter Peppelman",
    "winner_school": "Harvard",
    "loser": "Paul Young",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Paul Gillespie",
    "winner_school": "Hofstra",
    "loser": "Stephen Burak",
    "loser_school": "Penn",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Aaron Janssen",
    "loser_school": "Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "Scott Winston",
    "loser_school": "Rutgers",
    "result": "TB-1 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Bekzod Abdurakhmonov",
    "loser_school": "Clarion",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Mike Benefiel",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Luke Manuel",
    "loser_school": "Purdue",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Mike Letts",
    "winner_school": "Maryland",
    "loser": "Nick Heflin",
    "loser_school": "Ohio State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Colby Covington",
    "winner_school": "Oregon State",
    "loser": "Ryan Patrovich",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Diego Bencomo",
    "loser_school": "Duke",
    "result": "MD 18-8"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Chris Perry",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Christopher Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Josh Ihnen",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Travis Rutt",
    "winner_school": "Wisconsin",
    "loser": "Ryan Loder",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Zack Giesen",
    "winner_school": "Stanford",
    "loser": "Micah Burak",
    "loser_school": "Penn",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Zac Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Matt Powless",
    "winner_school": "Indiana",
    "loser": "Joseph Kennedy",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Luke Lofthouse",
    "winner_school": "Iowa",
    "loser": "Jerome Ward",
    "loser_school": "Iowa State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Spencer Myers",
    "winner_school": "Maryland",
    "loser": "Tucker Lane",
    "loser_school": "Nebraska",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Nathan Fernandez",
    "loser_school": "Oklahoma",
    "result": "TB-1 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Ricardo Alcala",
    "winner_school": "Indiana",
    "loser": "Cameron Wade",
    "loser_school": "Penn State",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Levi Cooper",
    "winner_school": "Arizona State",
    "loser": "Brendan Barlow",
    "loser_school": "Kent State",
    "result": "TB-1 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Ben Kjar",
    "loser_school": "Utah Valley",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Brandon Precin",
    "loser_school": "Northwestern",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Jarrod Patterson",
    "loser_school": "Oklahoma",
    "result": "SV-1 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Tyler Graff",
    "loser_school": "Wisconsin",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Andrew Hochstrasser",
    "winner_school": "Boise State",
    "loser": "Andrew Long",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Scotti Sentes",
    "winner_school": "Central Michigan",
    "loser": "Bernard Futrell",
    "loser_school": "Illinois",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Mike Grey",
    "winner_school": "Cornell",
    "loser": "Lou Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Montell Marion",
    "loser_school": "Iowa",
    "result": "TB-2 (RT) 3-3"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Michael Thorn",
    "loser_school": "Minnesota",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Todd Schavrien",
    "winner_school": "Missouri",
    "loser": "Zack Kemmerer",
    "loser_school": "Penn",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Zack Bailey",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Ganbayar Sanjaa",
    "loser_school": "American",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Jason Chamberlain",
    "loser_school": "Boise State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Andrew Nadhir",
    "winner_school": "Northwestern",
    "loser": "Kevin LeValley",
    "loser_school": "Bucknell",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Derek Valenti",
    "loser_school": "Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Bubba Jenkins",
    "winner_school": "Arizona State",
    "loser": "Jason Welch",
    "loser_school": "Northwestern",
    "result": "Dec 8-5"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Steve Fittery",
    "loser_school": "American",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Bryce Saddoris",
    "loser_school": "Navy",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Walter Peppelman",
    "loser_school": "Harvard",
    "result": "Fall 3:40"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Colt Sponseller",
    "loser_school": "Ohio State",
    "result": "MD 14-6"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma",
    "loser": "Andrew Howe",
    "loser_school": "Wisconsin",
    "result": "TB-3 (RT) 2-2"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Paul Gillespie",
    "loser_school": "Hofstra",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Brandon Hatchett",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Christopher Henrich",
    "loser_school": "Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Mack Lewnes",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Fall 0:42"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Colby Covington",
    "winner_school": "Oregon State",
    "loser": "Mike Letts",
    "loser_school": "Maryland",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Grant Gambrall",
    "loser_school": "Iowa",
    "result": "Fall 3:53"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Steve Bosak",
    "loser_school": "Cornell",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Kevin Steinhaus",
    "loser_school": "Minnesota",
    "result": "Dec 11-9"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Christopher Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Travis Rutt",
    "loser_school": "Wisconsin",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Cam Simaz",
    "loser_school": "Cornell",
    "result": "Dec 10-9"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Clayton Foster",
    "winner_school": "Oklahoma State",
    "loser": "Trevor Brandvold",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Zack Giesen",
    "winner_school": "Stanford",
    "loser": "Sonny Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Luke Lofthouse",
    "winner_school": "Iowa",
    "loser": "Matt Powless",
    "loser_school": "Indiana",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Dominque Bradley",
    "loser_school": "Missouri",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Ryan Flores",
    "winner_school": "American",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Spencer Myers",
    "winner_school": "Maryland",
    "loser": "Anthony Nelson",
    "loser_school": "Minnesota",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Ricardo Alcala",
    "winner_school": "Indiana",
    "loser": "Levi Cooper",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Ben Kjar",
    "winner_school": "Utah Valley",
    "loser": "Ryan Mango",
    "loser_school": "Stanford",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Zachary Sanders",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Scotti Sentes",
    "winner_school": "Central Michigan",
    "loser": "Tyler Graff",
    "loser_school": "Wisconsin",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Andrew Long",
    "winner_school": "Penn State",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "Fall 4:59"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Todd Schavrien",
    "loser_school": "Missouri",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "James Kennedy",
    "loser_school": "Illinois",
    "result": "Fall 1:29"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Ganbayar Sanjaa",
    "winner_school": "American",
    "loser": "Andrew Nadhir",
    "loser_school": "Northwestern",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Jamal Parks",
    "loser_school": "Oklahoma State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Jason Welch",
    "loser_school": "Northwestern",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Steve Fittery",
    "winner_school": "American",
    "loser": "Adam Hall",
    "loser_school": "Boise State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Colt Sponseller",
    "winner_school": "Ohio State",
    "loser": "Shane Onufer",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Christopher Henrich",
    "loser_school": "Virginia",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Mack Lewnes",
    "winner_school": "Cornell",
    "loser": "Colby Covington",
    "loser_school": "Oregon State",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Grant Gambrall",
    "winner_school": "Iowa",
    "loser": "Joe LeBlanc",
    "loser_school": "Wyoming",
    "result": "FOR"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Christopher Honeycutt",
    "loser_school": "Edinboro",
    "result": "MD 12-0"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Zack Giesen",
    "loser_school": "Stanford",
    "result": "Fall 3:31"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Trevor Brandvold",
    "winner_school": "Wisconsin",
    "loser": "Luke Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Dominque Bradley",
    "winner_school": "Missouri",
    "loser": "Spencer Myers",
    "loser_school": "Maryland",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Ricardo Alcala",
    "loser_school": "Indiana",
    "result": "TB-2 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Brandon Precin",
    "winner_school": "Northwestern",
    "loser": "Ben Kjar",
    "loser_school": "Utah Valley",
    "result": "Dec 5-0"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Ryan Mango",
    "loser_school": "Stanford",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "James Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Andrew Long",
    "winner_school": "Penn State",
    "loser": "Scotti Sentes",
    "loser_school": "Central Michigan",
    "result": "Dec 7-5"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Mike Grey",
    "loser_school": "Cornell",
    "result": "Dec 7-2"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Lou Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Bernard Futrell",
    "loser_school": "Illinois",
    "result": "Dec 9-6"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Michael Thorn",
    "winner_school": "Minnesota",
    "loser": "Montell Marion",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "James Kennedy",
    "winner_school": "Illinois",
    "loser": "Todd Schavrien",
    "loser_school": "Missouri",
    "result": "MD 11-1"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Zack Bailey",
    "winner_school": "Oklahoma",
    "loser": "Zack Kemmerer",
    "loser_school": "Penn",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Ganbayar Sanjaa",
    "loser_school": "American",
    "result": "Dec 3-0"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Andrew Nadhir",
    "loser_school": "Northwestern",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Kevin LeValley",
    "winner_school": "Bucknell",
    "loser": "Derek Valenti",
    "loser_school": "Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Steve Fittery",
    "winner_school": "American",
    "loser": "Derek St. John",
    "loser_school": "Iowa",
    "result": "MD 13-1"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Adam Hall",
    "winner_school": "Boise State",
    "loser": "Jason Welch",
    "loser_school": "Northwestern",
    "result": "Dec 5-1"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Bryce Saddoris",
    "winner_school": "Navy",
    "loser": "Walter Peppelman",
    "loser_school": "Harvard",
    "result": "TB-1 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Andrew Howe",
    "winner_school": "Wisconsin",
    "loser": "Colt Sponseller",
    "loser_school": "Ohio State",
    "result": "Dec 6-4"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "Dec 5-4"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "Paul Gillespie",
    "loser_school": "Hofstra",
    "result": "Dec 3-0"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Mack Lewnes",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Colby Covington",
    "winner_school": "Oregon State",
    "loser": "Christopher Henrich",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Mike Letts",
    "winner_school": "Maryland",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Grant Gambrall",
    "winner_school": "Iowa",
    "loser": "Steve Bosak",
    "loser_school": "Cornell",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Christopher Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Joe LeBlanc",
    "loser_school": "Wyoming",
    "result": "FOR"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Travis Rutt",
    "winner_school": "Wisconsin",
    "loser": "Kevin Steinhaus",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Trevor Brandvold",
    "loser_school": "Wisconsin",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Luke Lofthouse",
    "winner_school": "Iowa",
    "loser": "Zack Giesen",
    "loser_school": "Stanford",
    "result": "Dec 6-3"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Matt Powless",
    "loser_school": "Indiana",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Dominque Bradley",
    "winner_school": "Missouri",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Ricardo Alcala",
    "winner_school": "Indiana",
    "loser": "Spencer Myers",
    "loser_school": "Maryland",
    "result": "Dec 5-4"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Levi Cooper",
    "loser_school": "Arizona State",
    "result": "Fall 2:37"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Anthony Robles",
    "winner_school": "Arizona State",
    "loser": "Matt McDonough",
    "loser_school": "Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Andrew Hochstrasser",
    "loser_school": "Boise State",
    "result": "Dec 8-4"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Borislav Novachkov",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Frank Molinaro",
    "loser_school": "Penn State",
    "result": "Dec 8-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Bubba Jenkins",
    "winner_school": "Arizona State",
    "loser": "David Taylor",
    "loser_school": "Penn State",
    "result": "Fall 4:14"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Jordan Burroughs",
    "winner_school": "Nebraska",
    "loser": "Tyler Caldwell",
    "loser_school": "Oklahoma",
    "result": "MD 11-3"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Jonathan Reader",
    "winner_school": "Iowa State",
    "loser": "Nick Amuchastegui",
    "loser_school": "Stanford",
    "result": "Dec 10-3"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Robert Hamlin",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Clayton Foster",
    "loser_school": "Oklahoma State",
    "result": "Fall 4:56"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Ryan Flores",
    "loser_school": "American",
    "result": "Dec 2-1"
  }
];
