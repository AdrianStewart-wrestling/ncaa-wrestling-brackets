// 2012 NCAA Division I Wrestling Championships.
// STRUCTURE (entrants, seeds, lines, crossovers): OFFICIAL NCAA 2012 draw.
// COMPLETED RESULTS: WrestlingStats 2012 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source (official final bracket not yet recovered).
// Per-bout provenance (printed text + class EXPLICIT / EXPLICIT-OT/TB / SCORE-DEC / DERIVED-MAJOR / UNRESOLVED-TYPE): results2012-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Shane Gentry",
    "loser_school": "Maryland",
    "result": "MD 9-0"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Steven Keith",
    "winner_school": "Harvard",
    "loser": "Geoffrey Alexander",
    "loser_school": "Maryland",
    "result": "MD 8-0"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Zack Kemmerer",
    "winner_school": "Penn",
    "loser": "Evan Henderson",
    "loser_school": "North Carolina",
    "result": "Dec 6-2"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Josh Wilson",
    "winner_school": "Utah Valley",
    "loser": "Kyle Bradley",
    "loser_school": "Missouri",
    "result": "Dec 7-3"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Josh Demas",
    "winner_school": "Ohio State",
    "loser": "Mallie Shuster",
    "loser_school": "Kent State",
    "result": "Dec 2-1"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Mark Lewandowski",
    "loser_school": "Buffalo",
    "result": "Dec 5-0"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Dave Foxen",
    "loser_school": "Brown",
    "result": "Dec 8-4"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Matt Ryan",
    "loser_school": "West Virginia",
    "result": "Dec 5-0"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "James Nakashima",
    "winner_school": "Nebraska",
    "loser": "Kelby Smith",
    "loser_school": "The Citadel",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Ryan Flores",
    "winner_school": "American",
    "loser": "Ernest James",
    "loser_school": "Edinboro",
    "result": "Fall 5:36"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Jared Germaine",
    "loser_school": "Eastern Michigan",
    "result": "Fall 3:24"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Vince Rodriguez",
    "loser_school": "George Mason",
    "result": "Fall 2:23"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Levi Mele",
    "winner_school": "Northwestern",
    "loser": "Garrett Frey",
    "loser_school": "Princeton",
    "result": "Fall 2:38"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Shane Young",
    "loser_school": "West Virginia",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Nicholas Bedelyon",
    "winner_school": "Kent State",
    "loser": "Cory Finch",
    "loser_school": "Iowa State",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Steve Bonanno",
    "winner_school": "Hofstra",
    "loser": "Tyler Iwamura",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Camden Eppert",
    "winner_school": "Purdue",
    "loser": "Joe Roth",
    "loser_school": "Central Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Jerome Robinson",
    "loser_school": "Old Dominion",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Pat Rollins",
    "loser_school": "Oregon State",
    "result": "TF 15-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Anthony Zanetta",
    "winner_school": "Pittsburgh",
    "loser": "Coltin Fought",
    "loser_school": "NC State",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Matthew Snyder",
    "winner_school": "Virginia",
    "loser": "Johnni DiJulius",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Frank Perrelli",
    "winner_school": "Cornell",
    "loser": "Erik Spjut",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Max Soria",
    "loser_school": "Buffalo",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Michael Martinez",
    "loser_school": "Wyoming",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Jonathon Morrison",
    "winner_school": "Oklahoma State",
    "loser": "Antonio Gravely",
    "loser_school": "Appalachian State",
    "result": "TF 16-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Austin Miller",
    "loser_school": "Bucknell",
    "result": "Fall 6:00"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Frank Martellotti",
    "loser_school": "Penn State",
    "result": "Fall 2:07"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Shelton Mack",
    "winner_school": "Pittsburgh",
    "loser": "Frank Lomas",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Cashé Quiroga",
    "winner_school": "Purdue",
    "loser": "Shane McGough",
    "loser_school": "Arizona State",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Zachery Stevens",
    "winner_school": "Michigan",
    "loser": "Naryman Arujau",
    "loser_school": "Cornell",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Joe Colon",
    "winner_school": "Northern Iowa",
    "loser": "Ridge Kiley",
    "loser_school": "Nebraska",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Zach Horan",
    "winner_school": "Central Michigan",
    "loser": "Bryan Ortenzio",
    "loser_school": "Penn",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Zach Zehner",
    "winner_school": "Wyoming",
    "loser": "Scott Festejo",
    "loser_school": "Old Dominion",
    "result": "TF 21-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Bernard Futrell",
    "winner_school": "Illinois",
    "loser": "Nick Soto",
    "loser_school": "Chattanooga",
    "result": "Fall 4:14"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Brian Owen",
    "loser_school": "Boise State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Aaron Kalil",
    "winner_school": "Navy",
    "loser": "Nathan Pennesi",
    "loser_school": "West Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Steven Keith",
    "winner_school": "Harvard",
    "loser": "Jordan Keller",
    "loser_school": "Oklahoma",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Nathan McCormick",
    "loser_school": "Missouri",
    "result": "Fall 4:39"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Aaron (A.J.) Schopp",
    "winner_school": "Edinboro",
    "loser": "Matthew Nelson",
    "loser_school": "Virginia",
    "result": "Fall 2:23"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "C. Dardanes",
    "winner_school": "Minnesota",
    "loser": "Jamie Franco",
    "loser_school": "Hofstra",
    "result": "Fall 2:43"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Jordan Thome",
    "winner_school": "Army",
    "loser": "Garrett Drucker",
    "loser_school": "Oregon State",
    "result": "Fall 4:20"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Mason Beckman",
    "loser_school": "Lehigh",
    "result": "Fall 5:52"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Nicholas Hucke",
    "loser_school": "Missouri",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Luke Vaith",
    "winner_school": "Hofstra",
    "loser": "Tanner Hough",
    "loser_school": "Duke",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Kevin Fanta",
    "loser_school": "Northern Illinois",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Darius Little",
    "winner_school": "NC State",
    "loser": "Luke Goettl",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Hunter Stieber",
    "winner_school": "Ohio State",
    "loser": "Richard Durso",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Tyler Small",
    "winner_school": "Kent State",
    "loser": "Richard Krop",
    "loser_school": "Princeton",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "William Ashnault",
    "winner_school": "Rutgers",
    "loser": "Levi Wolfensperger",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Joshua Kindig",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Mike Morales",
    "loser_school": "West Virginia",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Stephen Dutton",
    "loser_school": "Lehigh",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Justin LaValle",
    "winner_school": "Old Dominion",
    "loser": "Matthew Mariacher",
    "loser_school": "American",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Zack Kemmerer",
    "loser_school": "Penn",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Nick Nelson",
    "winner_school": "Virginia",
    "loser": "Mike Kessler",
    "loser_school": "Appalachian State",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Zach Neibert",
    "winner_school": "Virginia Tech",
    "loser": "Jake Sueflohn",
    "loser_school": "Nebraska",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Scott Mattingly",
    "loser_school": "Central Michigan",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Nathan Hoffer",
    "loser_school": "Arizona State",
    "result": "Fall 4:48"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Christopher Villalonga",
    "loser_school": "Cornell",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Matthew Nereim",
    "loser_school": "NC State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "David Habat",
    "loser_school": "Edinboro",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Stephen Robertson",
    "loser_school": "Penn",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Eric Terrazas",
    "loser_school": "Illinois",
    "result": "Fall 0:57"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Justin Accordino",
    "winner_school": "Hofstra",
    "loser": "Ivan Lopouchanski",
    "loser_school": "Purdue",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Kevin Tao",
    "winner_school": "American",
    "loser": "Dan Osterman",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Nick Lester",
    "winner_school": "Oklahoma",
    "loser": "Donald Vinson",
    "loser_school": "Binghamton",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Cole VonOhlen",
    "winner_school": "Air Force",
    "loser": "Kaleb Friedley",
    "loser_school": "Northwestern",
    "result": "Fall 4:34"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Steve Santos",
    "winner_school": "Columbia",
    "loser": "Owen Wilkinson",
    "loser_school": "Lock Haven",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Bryce Busler",
    "winner_school": "Bloomsburg",
    "loser": "Taylor Walsh",
    "loser_school": "Indiana",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Dean Pavlou",
    "loser_school": "Chattanooga",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Shane Welsh",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Corey Jantzen",
    "winner_school": "Harvard",
    "loser": "Cam Tessari",
    "loser_school": "Ohio State",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Josh Wilson",
    "winner_school": "Utah Valley",
    "loser": "Mario Mason",
    "loser_school": "Rutgers",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Augustus Sako",
    "loser_school": "Virginia",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "John Nicholson",
    "loser_school": "Old Dominion",
    "result": "Fall 1:13"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Joshua Kreimier",
    "winner_school": "Air Force",
    "loser": "Georgi Ivanov",
    "loser_school": "Boise State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Justin Lister",
    "winner_school": "Binghamton",
    "loser": "Aaron Sulzer",
    "loser_school": "Eastern Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Frank Hickman",
    "winner_school": "Bloomsburg",
    "loser": "Bobby Barnhisel",
    "loser_school": "Navy",
    "result": "Fall 2:41"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Ganbayar Sanjaa",
    "winner_school": "American",
    "loser": "Josh Demas",
    "loser_school": "Ohio State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Donnie Corby",
    "loser_school": "Central Michigan",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Daniel Kolodzik",
    "winner_school": "Princeton",
    "loser": "Kyle John",
    "loser_school": "Maryland",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "David Bonin",
    "winner_school": "Northern Iowa",
    "loser": "Walter Peppelman",
    "loser_school": "Harvard",
    "result": "Fall 2:55"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "Matt Lester",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Tommy Churchard",
    "winner_school": "Purdue",
    "loser": "Colton Palmer",
    "loser_school": "NC State",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Brian Tanen",
    "loser_school": "Lehigh",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Daniel Waddell",
    "loser_school": "Chattanooga",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Jake O`Hara",
    "loser_school": "Columbia",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Anthony Jones",
    "winner_school": "Michigan State",
    "loser": "Albert White",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Roger Pena",
    "winner_school": "Oregon State",
    "loser": "Corey Mock",
    "loser_school": "North Carolina",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Drake Houdashelt",
    "loser_school": "Missouri",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Corey Lear",
    "loser_school": "Bucknell",
    "result": "Fall 1:40"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Brandon Wright",
    "winner_school": "Chattanooga",
    "loser": "David Cheza",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Patrick Graham",
    "winner_school": "Oklahoma",
    "loser": "Conrad Polz",
    "loser_school": "Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Zach Toal",
    "loser_school": "Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Kyle Blevins",
    "loser_school": "Appalachian State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Paul Gillespie",
    "winner_school": "Hofstra",
    "loser": "Scott Winston",
    "loser_school": "Rutgers",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Coleman Gracey",
    "winner_school": "Army",
    "loser": "Mike Ottinger",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Bekzod Abdurakhmonov",
    "winner_school": "Clarion",
    "loser": "Gabriel Burak",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Andrew Sorenson",
    "winner_school": "Iowa State",
    "loser": "Joe Booth",
    "loser_school": "Drexel",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Marshall Peppelman",
    "winner_school": "Cornell",
    "loser": "Pierce Harger",
    "loser_school": "Northwestern",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "James Brundage",
    "loser_school": "Rider",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Dallas Bailey",
    "winner_school": "Oklahoma State",
    "loser": "Peter Yates",
    "loser_school": "Virginia Tech",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Nicholas Sulzer",
    "loser_school": "Virginia",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Dominic Kastl",
    "winner_school": "Cal Poly",
    "loser": "Cody Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Daniel Yates",
    "winner_school": "Michigan",
    "loser": "Tristan Warner",
    "loser_school": "Old Dominion",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Benjamin Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Jim Resnick",
    "loser_school": "Rider",
    "result": "Fall 1:43"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Dorian Henderson",
    "winner_school": "Missouri",
    "loser": "Kyle Czarnecki",
    "loser_school": "Boston University",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Nick Purdue",
    "loser_school": "Ohio",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Leroy Munster",
    "winner_school": "Northwestern",
    "loser": "Ethan Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Seth Creasy",
    "loser_school": "Lock Haven",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Kyle Detmer",
    "loser_school": "Oklahoma",
    "result": "TF 18-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Lance Bryson",
    "winner_school": "West Virginia",
    "loser": "Patrick Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Levi Clemons",
    "loser_school": "Chattanooga",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Peter Huntley",
    "loser_school": "Navy",
    "result": "Fall 2:01"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Tyler Koehn",
    "winner_school": "Nebraska",
    "loser": "Quinton Godley",
    "loser_school": "NC State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Justin Zeerip",
    "winner_school": "Michigan",
    "loser": "Greg Zannetti",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Ryan DesRoches",
    "winner_school": "Cal Poly",
    "loser": "Phillip Joseph",
    "loser_school": "Eastern Michigan",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Turtogtokh Luvsandorj",
    "loser_school": "The Citadel",
    "result": "Fall 6:16"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Ryan Leblanc",
    "winner_school": "Indiana",
    "loser": "Te Edwards",
    "loser_school": "Old Dominion",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Curran Jacobs",
    "winner_school": "Michigan State",
    "loser": "Mike Dessino",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Chris Moon",
    "loser_school": "Virginia Tech",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Mike Larson",
    "loser_school": "Missouri",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Erich Smith",
    "winner_school": "Penn",
    "loser": "Kevin Radford",
    "loser_school": "Arizona State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Austin Trotman",
    "winner_school": "Appalachian State",
    "loser": "MacKain Stoll",
    "loser_school": "North Dakota State",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Grant Gambrall",
    "loser_school": "Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Steven Cressley",
    "loser_school": "Clarion",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Jonathan Fausey",
    "winner_school": "Virginia",
    "loser": "Ian Hinton",
    "loser_school": "Michigan State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Nathan Schiedel",
    "winner_school": "Binghamton",
    "loser": "Brad Dieckhaus",
    "loser_school": "Northern Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Braden Atwood",
    "loser_school": "Purdue",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Erich Schmditke",
    "loser_school": "Oklahoma",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Victor Avery",
    "winner_school": "Edinboro",
    "loser": "Boaz Beard",
    "loser_school": "Iowa State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Ben Clymer",
    "winner_school": "Hofstra",
    "loser": "Ty Vinson",
    "loser_school": "Oregon State",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Thomas Ferguson",
    "loser_school": "North Carolina",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Ophir Bernstein",
    "loser_school": "Brown",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Ryan Garringer",
    "loser_school": "Ohio",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Tony Dallago",
    "winner_school": "Illinois",
    "loser": "Luke Rebertus",
    "loser_school": "Navy",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Casey Newburg",
    "loser_school": "Kent State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Brandon Palik",
    "loser_school": "Drexel",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Taylor Meeks",
    "loser_school": "Oregon State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Alfonso Hernandez",
    "winner_school": "Wyoming",
    "loser": "Daniel Mitchell",
    "loser_school": "American",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Matt Powless",
    "winner_school": "Indiana",
    "loser": "James Fox",
    "loser_school": "Harvard",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Cayle Byers",
    "winner_school": "Oklahoma State",
    "loser": "Brent Chriswell",
    "loser_school": "Boise State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Joseph Kennedy",
    "winner_school": "Lehigh",
    "loser": "Richard Perry",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "James Nakashima",
    "winner_school": "Nebraska",
    "loser": "Joe Budi",
    "loser_school": "Old Dominion",
    "result": "Dec 7-6 TB"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Cody Reed",
    "winner_school": "Binghamton",
    "loser": "Christian Boley",
    "loser_school": "Maryland",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Bagna Tovuujav",
    "loser_school": "George Mason",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "A.J. Kissel",
    "winner_school": "Purdue",
    "loser": "John Weakley",
    "loser_school": "Campbell",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "Andrew Campolattano",
    "loser_school": "Ohio State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Brent Haynes",
    "winner_school": "Missouri",
    "loser": "Maxwell Huntley",
    "loser_school": "Michigan",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Derek Stanley",
    "loser_school": "Army",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Ryan Smith",
    "loser_school": "Cal Poly",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Daniel Rinaldi",
    "winner_school": "Rutgers",
    "loser": "Keith Witt",
    "loser_school": "Kent State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Christopher Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Keldrick Hall",
    "loser_school": "Oklahoma",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Ryan Flores",
    "winner_school": "American",
    "loser": "Devon Mellon",
    "loser_school": "Missouri",
    "result": "Fall 4:23"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Wesley Schroeder",
    "winner_school": "Eastern Michigan",
    "loser": "Kevin Lester",
    "loser_school": "Columbia",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Steve Andrus",
    "winner_school": "Michigan State",
    "loser": "Levi Cooper",
    "loser_school": "Arizona State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Andrew Delaney",
    "winner_school": "The Citadel",
    "loser": "Spencer Myers",
    "loser_school": "Maryland",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Blayne Beale",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Peter Capone",
    "winner_school": "Ohio State",
    "loser": "Matthew Gibson",
    "loser_school": "Iowa State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Brandon Williamson",
    "winner_school": "West Virginia",
    "loser": "Austin Marsden",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Adam Chalfant",
    "loser_school": "Indiana",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Clayton Jack",
    "winner_school": "Oregon State",
    "loser": "Benjamin Apland",
    "loser_school": "Michigan",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Kevin Innis",
    "winner_school": "Boston University",
    "loser": "Patrick Tasser",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Maciej Jochym",
    "winner_school": "Cornell",
    "loser": "Tucker Lane",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Cameron Wade",
    "winner_school": "Penn State",
    "loser": "Quintas McCorkle",
    "loser_school": "Clarion",
    "result": "TF 17-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Cole Tobin",
    "loser_school": "Wisconsin",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Brendan Barlow",
    "loser_school": "Kent State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Peter Sturgeon",
    "winner_school": "Central Michigan",
    "loser": "Kyle Frey",
    "loser_school": "Drexel",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Nick Gwiazdowski",
    "loser_school": "Binghamton",
    "result": "MD 8-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Shane Young",
    "winner_school": "West Virginia",
    "loser": "Shane Gentry",
    "loser_school": "Maryland",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Bryan Ortenzio",
    "winner_school": "Penn",
    "loser": "Geoffrey Alexander",
    "loser_school": "Maryland",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Evan Henderson",
    "winner_school": "North Carolina",
    "loser": "Richard Durso",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "Kyle Bradley",
    "winner_school": "Missouri",
    "loser": "Matthew Nereim",
    "loser_school": "NC State",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Daniel Waddell",
    "winner_school": "Chattanooga",
    "loser": "Mallie Shuster",
    "loser_school": "Kent State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Mark Lewandowski",
    "winner_school": "Buffalo",
    "loser": "Zach Toal",
    "loser_school": "Missouri",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Phillip Joseph",
    "winner_school": "Eastern Michigan",
    "loser": "Dave Foxen",
    "loser_school": "Brown",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "MacKain Stoll",
    "winner_school": "North Dakota State",
    "loser": "Matt Ryan",
    "loser_school": "West Virginia",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "John Weakley",
    "winner_school": "Campbell",
    "loser": "Kelby Smith",
    "loser_school": "The Citadel",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Nick Gwiazdowski",
    "winner_school": "Binghamton",
    "loser": "Ernest James",
    "loser_school": "Edinboro",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Trent Sprenkle",
    "loser_school": "North Dakota State",
    "result": "Fall 2:56"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Levi Mele",
    "loser_school": "Northwestern",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Nicholas Bedelyon",
    "winner_school": "Kent State",
    "loser": "Steve Bonanno",
    "loser_school": "Hofstra",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Camden Eppert",
    "loser_school": "Purdue",
    "result": "Fall 5:12"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Anthony Zanetta",
    "winner_school": "Pittsburgh",
    "loser": "Alan Waters",
    "loser_school": "Missouri",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Frank Perrelli",
    "winner_school": "Cornell",
    "loser": "Matthew Snyder",
    "loser_school": "Virginia",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Jarrod Patterson",
    "loser_school": "Oklahoma",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Jonathon Morrison",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Antonio Gravely",
    "winner_school": "Appalachian State",
    "loser": "Austin Miller",
    "loser_school": "Bucknell",
    "result": "Dec 13-10"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Michael Martinez",
    "winner_school": "Wyoming",
    "loser": "Max Soria",
    "loser_school": "Buffalo",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Erik Spjut",
    "winner_school": "Virginia Tech",
    "loser": "Johnni DiJulius",
    "loser_school": "Ohio State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Pat Rollins",
    "winner_school": "Oregon State",
    "loser": "Coltin Fought",
    "loser_school": "NC State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Joe Roth",
    "winner_school": "Central Michigan",
    "loser": "Jerome Robinson",
    "loser_school": "Old Dominion",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Cory Finch",
    "winner_school": "Iowa State",
    "loser": "Tyler Iwamura",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 0:52"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Garrett Frey",
    "winner_school": "Princeton",
    "loser": "Shane Young",
    "loser_school": "West Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Jared Germaine",
    "winner_school": "Eastern Michigan",
    "loser": "Vince Rodriguez",
    "loser_school": "George Mason",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Shelton Mack",
    "loser_school": "Pittsburgh",
    "result": "Fall 1:30"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Zachery Stevens",
    "winner_school": "Michigan",
    "loser": "Cashé Quiroga",
    "loser_school": "Purdue",
    "result": "Dec 14-9"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Joe Colon",
    "winner_school": "Northern Iowa",
    "loser": "Zach Horan",
    "loser_school": "Central Michigan",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Bernard Futrell",
    "winner_school": "Illinois",
    "loser": "Zach Zehner",
    "loser_school": "Wyoming",
    "result": "Fall 1:06"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Aaron Kalil",
    "loser_school": "Navy",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Steven Keith",
    "winner_school": "Harvard",
    "loser": "Devin Carter",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "C. Dardanes",
    "winner_school": "Minnesota",
    "loser": "Aaron (A.J.) Schopp",
    "loser_school": "Edinboro",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Jordan Thome",
    "loser_school": "Army",
    "result": "Fall 1:19"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Garrett Drucker",
    "loser_school": "Oregon State",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Matthew Nelson",
    "winner_school": "Virginia",
    "loser": "Jamie Franco",
    "loser_school": "Hofstra",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Nathan McCormick",
    "winner_school": "Missouri",
    "loser": "Jordan Keller",
    "loser_school": "Oklahoma",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Brian Owen",
    "winner_school": "Boise State",
    "loser": "Nathan Pennesi",
    "loser_school": "West Virginia",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Nick Soto",
    "winner_school": "Chattanooga",
    "loser": "Scott Festejo",
    "loser_school": "Old Dominion",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Bryan Ortenzio",
    "winner_school": "Penn",
    "loser": "Ridge Kiley",
    "loser_school": "Nebraska",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Naryman Arujau",
    "winner_school": "Cornell",
    "loser": "Shane McGough",
    "loser_school": "Arizona State",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Frank Martellotti",
    "winner_school": "Penn State",
    "loser": "Frank Lomas",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Luke Vaith",
    "loser_school": "Hofstra",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Darius Little",
    "loser_school": "NC State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Hunter Stieber",
    "winner_school": "Ohio State",
    "loser": "Tyler Small",
    "loser_school": "Kent State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "William Ashnault",
    "loser_school": "Rutgers",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Mitchell Port",
    "loser_school": "Edinboro",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Justin LaValle",
    "loser_school": "Old Dominion",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Zach Neibert",
    "winner_school": "Virginia Tech",
    "loser": "Nick Nelson",
    "loser_school": "Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Michael Nevinger",
    "loser_school": "Cornell",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Scott Mattingly",
    "winner_school": "Central Michigan",
    "loser": "Nathan Hoffer",
    "loser_school": "Arizona State",
    "result": "Fall 4:21"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Jake Sueflohn",
    "winner_school": "Nebraska",
    "loser": "Mike Kessler",
    "loser_school": "Appalachian State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Zack Kemmerer",
    "winner_school": "Penn",
    "loser": "Matthew Mariacher",
    "loser_school": "American",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Stephen Dutton",
    "winner_school": "Lehigh",
    "loser": "Mike Morales",
    "loser_school": "West Virginia",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Joshua Kindig",
    "winner_school": "Oklahoma State",
    "loser": "Levi Wolfensperger",
    "loser_school": "Northern Iowa",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Richard Krop",
    "winner_school": "Princeton",
    "loser": "Evan Henderson",
    "loser_school": "North Carolina",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Luke Goettl",
    "winner_school": "Iowa State",
    "loser": "Kevin Fanta",
    "loser_school": "Northern Illinois",
    "result": "Fall 1:40"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Nicholas Hucke",
    "winner_school": "Missouri",
    "loser": "Tanner Hough",
    "loser_school": "Duke",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Scott Sakaguchi",
    "loser_school": "Oregon State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Nick Brascetta",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Justin Accordino",
    "winner_school": "Hofstra",
    "loser": "Ian Miller",
    "loser_school": "Kent State",
    "result": "Fall 3:33"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Nick Lester",
    "winner_school": "Oklahoma",
    "loser": "Kevin Tao",
    "loser_school": "American",
    "result": "TF 16-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Cole VonOhlen",
    "winner_school": "Air Force",
    "loser": "Steve Santos",
    "loser_school": "Columbia",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Bryce Busler",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Corey Jantzen",
    "loser_school": "Harvard",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Jamal Parks",
    "winner_school": "Oklahoma State",
    "loser": "Josh Wilson",
    "loser_school": "Utah Valley",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Augustus Sako",
    "winner_school": "Virginia",
    "loser": "Mario Mason",
    "loser_school": "Rutgers",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Cam Tessari",
    "winner_school": "Ohio State",
    "loser": "Shane Welsh",
    "loser_school": "Lehigh",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Taylor Walsh",
    "winner_school": "Indiana",
    "loser": "Dean Pavlou",
    "loser_school": "Chattanooga",
    "result": "Fall 1:02"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Kaleb Friedley",
    "winner_school": "Northwestern",
    "loser": "Owen Wilkinson",
    "loser_school": "Lock Haven",
    "result": "Fall 2:30"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Dan Osterman",
    "loser_school": "Michigan State",
    "result": "Fall 2:55"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Eric Terrazas",
    "winner_school": "Illinois",
    "loser": "Ivan Lopouchanski",
    "loser_school": "Purdue",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Stephen Robertson",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Kyle Bradley",
    "winner_school": "Missouri",
    "loser": "Christopher Villalonga",
    "loser_school": "Cornell",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Joshua Kreimier",
    "loser_school": "Air Force",
    "result": "Fall 1:31"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Frank Hickman",
    "winner_school": "Bloomsburg",
    "loser": "Justin Lister",
    "loser_school": "Binghamton",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Ganbayar Sanjaa",
    "winner_school": "American",
    "loser": "Steven Monk",
    "loser_school": "North Dakota State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Daniel Kolodzik",
    "winner_school": "Princeton",
    "loser": "David Bonin",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "Tommy Churchard",
    "loser_school": "Purdue",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "James Fleming",
    "loser_school": "Clarion",
    "result": "Dec 8-3 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Anthony Jones",
    "loser_school": "Michigan State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Roger Pena",
    "loser_school": "Oregon State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Corey Mock",
    "winner_school": "North Carolina",
    "loser": "Drake Houdashelt",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Jake O`Hara",
    "winner_school": "Columbia",
    "loser": "Albert White",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Brian Tanen",
    "winner_school": "Lehigh",
    "loser": "Daniel Waddell",
    "loser_school": "Chattanooga",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Matt Lester",
    "winner_school": "Oklahoma",
    "loser": "Colton Palmer",
    "loser_school": "NC State",
    "result": "MD 13-0"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Walter Peppelman",
    "winner_school": "Harvard",
    "loser": "Kyle John",
    "loser_school": "Maryland",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Josh Demas",
    "winner_school": "Ohio State",
    "loser": "Donnie Corby",
    "loser_school": "Central Michigan",
    "result": "Dec 4-1 TB"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Aaron Sulzer",
    "winner_school": "Eastern Michigan",
    "loser": "Bobby Barnhisel",
    "loser_school": "Navy",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "John Nicholson",
    "winner_school": "Old Dominion",
    "loser": "Georgi Ivanov",
    "loser_school": "Boise State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Brandon Wright",
    "loser_school": "Chattanooga",
    "result": "Fall 1:52"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Patrick Graham",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Paul Gillespie",
    "winner_school": "Hofstra",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Bekzod Abdurakhmonov",
    "winner_school": "Clarion",
    "loser": "Coleman Gracey",
    "loser_school": "Army",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Andrew Sorenson",
    "winner_school": "Iowa State",
    "loser": "Marshall Peppelman",
    "loser_school": "Cornell",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "Dallas Bailey",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Dominic Kastl",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Shane Onufer",
    "winner_school": "Wyoming",
    "loser": "Daniel Yates",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Benjamin Jordan",
    "winner_school": "Wisconsin",
    "loser": "Tristan Warner",
    "loser_school": "Old Dominion",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Cody Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "James Brundage",
    "loser_school": "Rider",
    "result": "Fall 0:11"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Pierce Harger",
    "winner_school": "Northwestern",
    "loser": "Joe Booth",
    "loser_school": "Drexel",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Gabriel Burak",
    "winner_school": "Northern Colorado",
    "loser": "Mike Ottinger",
    "loser_school": "Central Michigan",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Kyle Blevins",
    "winner_school": "Appalachian State",
    "loser": "Scott Winston",
    "loser_school": "Rutgers",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Conrad Polz",
    "winner_school": "Illinois",
    "loser": "Mark Lewandowski",
    "loser_school": "Buffalo",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Corey Lear",
    "winner_school": "Bucknell",
    "loser": "David Cheza",
    "loser_school": "Michigan State",
    "result": "Fall 1:02"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Dorian Henderson",
    "loser_school": "Missouri",
    "result": "Fall 1:26"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Leroy Munster",
    "loser_school": "Northwestern",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Jimmy Sheptock",
    "loser_school": "Maryland",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Lance Bryson",
    "loser_school": "West Virginia",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Tyler Koehn",
    "loser_school": "Nebraska",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Ryan DesRoches",
    "winner_school": "Cal Poly",
    "loser": "Justin Zeerip",
    "loser_school": "Michigan",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Ryan Leblanc",
    "loser_school": "Indiana",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Curran Jacobs",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Mike Dessino",
    "winner_school": "Bloomsburg",
    "loser": "Chris Moon",
    "loser_school": "Virginia Tech",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Turtogtokh Luvsandorj",
    "winner_school": "The Citadel",
    "loser": "Te Edwards",
    "loser_school": "Old Dominion",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Greg Zannetti",
    "winner_school": "Rutgers",
    "loser": "Phillip Joseph",
    "loser_school": "Eastern Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Peter Huntley",
    "winner_school": "Navy",
    "loser": "Quinton Godley",
    "loser_school": "NC State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Patrick Martinez",
    "winner_school": "Wyoming",
    "loser": "Levi Clemons",
    "loser_school": "Chattanooga",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Seth Creasy",
    "winner_school": "Lock Haven",
    "loser": "Kyle Detmer",
    "loser_school": "Oklahoma",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Ethan Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Nick Purdue",
    "loser_school": "Ohio",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Jim Resnick",
    "winner_school": "Rider",
    "loser": "Kyle Czarnecki",
    "loser_school": "Boston University",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Erich Smith",
    "loser_school": "Penn",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Austin Trotman",
    "winner_school": "Appalachian State",
    "loser": "Ryan Loder",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Jonathan Fausey",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Nathan Schiedel",
    "loser_school": "Binghamton",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Victor Avery",
    "loser_school": "Edinboro",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Ben Clymer",
    "loser_school": "Hofstra",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Jacob Swartz",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Tony Dallago",
    "loser_school": "Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Casey Newburg",
    "winner_school": "Kent State",
    "loser": "Luke Rebertus",
    "loser_school": "Navy",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Ryan Garringer",
    "winner_school": "Ohio",
    "loser": "Ophir Bernstein",
    "loser_school": "Brown",
    "result": "Fall 2:41"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Thomas Ferguson",
    "winner_school": "North Carolina",
    "loser": "Ty Vinson",
    "loser_school": "Oregon State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Erich Schmditke",
    "winner_school": "Oklahoma",
    "loser": "Boaz Beard",
    "loser_school": "Iowa State",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Braden Atwood",
    "winner_school": "Purdue",
    "loser": "Brad Dieckhaus",
    "loser_school": "Northern Illinois",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Ian Hinton",
    "winner_school": "Michigan State",
    "loser": "Steven Cressley",
    "loser_school": "Clarion",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Grant Gambrall",
    "winner_school": "Iowa",
    "loser": "MacKain Stoll",
    "loser_school": "North Dakota State",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Mike Larson",
    "winner_school": "Missouri",
    "loser": "Kevin Radford",
    "loser_school": "Arizona State",
    "result": "Fall 6:09"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Morgan McIntosh",
    "loser_school": "Penn State",
    "result": "TF 22-7"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Alfonso Hernandez",
    "winner_school": "Wyoming",
    "loser": "Matt Powless",
    "loser_school": "Indiana",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Cayle Byers",
    "winner_school": "Oklahoma State",
    "loser": "Joseph Kennedy",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "James Nakashima",
    "winner_school": "Nebraska",
    "loser": "Cody Reed",
    "loser_school": "Binghamton",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "A.J. Kissel",
    "loser_school": "Purdue",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Brent Haynes",
    "winner_school": "Missouri",
    "loser": "Micah Burak",
    "loser_school": "Penn",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Mario Gonzalez",
    "loser_school": "Illinois",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Christopher Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Daniel Rinaldi",
    "loser_school": "Rutgers",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Keldrick Hall",
    "winner_school": "Oklahoma",
    "loser": "Keith Witt",
    "loser_school": "Kent State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Derek Stanley",
    "winner_school": "Army",
    "loser": "Ryan Smith",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Andrew Campolattano",
    "winner_school": "Ohio State",
    "loser": "Maxwell Huntley",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "John Weakley",
    "winner_school": "Campbell",
    "loser": "Bagna Tovuujav",
    "loser_school": "George Mason",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Christian Boley",
    "winner_school": "Maryland",
    "loser": "Joe Budi",
    "loser_school": "Old Dominion",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Richard Perry",
    "winner_school": "Bloomsburg",
    "loser": "Brent Chriswell",
    "loser_school": "Boise State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Daniel Mitchell",
    "winner_school": "American",
    "loser": "James Fox",
    "loser_school": "Harvard",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Taylor Meeks",
    "winner_school": "Oregon State",
    "loser": "Brandon Palik",
    "loser_school": "Drexel",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Ryan Flores",
    "winner_school": "American",
    "loser": "Wesley Schroeder",
    "loser_school": "Eastern Michigan",
    "result": "Fall 2:21"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Andrew Delaney",
    "winner_school": "The Citadel",
    "loser": "Steve Andrus",
    "loser_school": "Michigan State",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Peter Capone",
    "loser_school": "Ohio State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Brandon Williamson",
    "loser_school": "West Virginia",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Clayton Jack",
    "winner_school": "Oregon State",
    "loser": "Kevin Innis",
    "loser_school": "Boston University",
    "result": "TF 17-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Cameron Wade",
    "winner_school": "Penn State",
    "loser": "Maciej Jochym",
    "loser_school": "Cornell",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Jeremy Johnson",
    "loser_school": "Ohio",
    "result": "Fall 4:05"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Peter Sturgeon",
    "loser_school": "Central Michigan",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Nick Gwiazdowski",
    "winner_school": "Binghamton",
    "loser": "Kyle Frey",
    "loser_school": "Drexel",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Cole Tobin",
    "winner_school": "Wisconsin",
    "loser": "Brendan Barlow",
    "loser_school": "Kent State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Tucker Lane",
    "winner_school": "Nebraska",
    "loser": "Quintas McCorkle",
    "loser_school": "Clarion",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Benjamin Apland",
    "winner_school": "Michigan",
    "loser": "Patrick Tasser",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Austin Marsden",
    "winner_school": "Oklahoma State",
    "loser": "Adam Chalfant",
    "loser_school": "Indiana",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Matthew Gibson",
    "winner_school": "Iowa State",
    "loser": "Blayne Beale",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Levi Cooper",
    "winner_school": "Arizona State",
    "loser": "Spencer Myers",
    "loser_school": "Maryland",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Kevin Lester",
    "winner_school": "Columbia",
    "loser": "Devon Mellon",
    "loser_school": "Missouri",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Steve Bonanno",
    "winner_school": "Hofstra",
    "loser": "Antonio Gravely",
    "loser_school": "Appalachian State",
    "result": "MD 15-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Camden Eppert",
    "winner_school": "Purdue",
    "loser": "Michael Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Erik Spjut",
    "loser_school": "Virginia Tech",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Pat Rollins",
    "winner_school": "Oregon State",
    "loser": "Levi Mele",
    "loser_school": "Northwestern",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Joe Roth",
    "loser_school": "Central Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Jonathon Morrison",
    "winner_school": "Oklahoma State",
    "loser": "Cory Finch",
    "loser_school": "Iowa State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Garrett Frey",
    "loser_school": "Princeton",
    "result": "TF 15-0"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Matthew Snyder",
    "winner_school": "Virginia",
    "loser": "Jared Germaine",
    "loser_school": "Eastern Michigan",
    "result": "Fall 5:24"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Zach Horan",
    "winner_school": "Central Michigan",
    "loser": "Mason Beckman",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Matthew Nelson",
    "winner_school": "Virginia",
    "loser": "Zach Zehner",
    "loser_school": "Wyoming",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Shelton Mack",
    "winner_school": "Pittsburgh",
    "loser": "Nathan McCormick",
    "loser_school": "Missouri",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Cashé Quiroga",
    "winner_school": "Purdue",
    "loser": "Brian Owen",
    "loser_school": "Boise State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Aaron (A.J.) Schopp",
    "winner_school": "Edinboro",
    "loser": "Nick Soto",
    "loser_school": "Chattanooga",
    "result": "Fall 2:08"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Jordan Thome",
    "winner_school": "Army",
    "loser": "Bryan Ortenzio",
    "loser_school": "Penn",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Aaron Kalil",
    "winner_school": "Navy",
    "loser": "Naryman Arujau",
    "loser_school": "Cornell",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Frank Martellotti",
    "loser_school": "Penn State",
    "result": "MD 19-9"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Tyler Small",
    "winner_school": "Kent State",
    "loser": "Scott Mattingly",
    "loser_school": "Central Michigan",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "William Ashnault",
    "winner_school": "Rutgers",
    "loser": "Jake Sueflohn",
    "loser_school": "Nebraska",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Zack Kemmerer",
    "winner_school": "Penn",
    "loser": "Luke Vaith",
    "loser_school": "Hofstra",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Darius Little",
    "winner_school": "NC State",
    "loser": "Stephen Dutton",
    "loser_school": "Lehigh",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Nick Nelson",
    "winner_school": "Virginia",
    "loser": "Joshua Kindig",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Richard Krop",
    "loser_school": "Princeton",
    "result": "Fall 2:01"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Luke Goettl",
    "loser_school": "Iowa State",
    "result": "TF 17-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Justin LaValle",
    "winner_school": "Old Dominion",
    "loser": "Nicholas Hucke",
    "loser_school": "Missouri",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Augustus Sako",
    "winner_school": "Virginia",
    "loser": "Ian Miller",
    "loser_school": "Kent State",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Cam Tessari",
    "winner_school": "Ohio State",
    "loser": "Kevin Tao",
    "loser_school": "American",
    "result": "Fall 5:51"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Taylor Walsh",
    "loser_school": "Indiana",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Kaleb Friedley",
    "winner_school": "Northwestern",
    "loser": "Nick Brascetta",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Corey Jantzen",
    "loser_school": "Harvard",
    "result": "TF 16-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Eric Terrazas",
    "winner_school": "Illinois",
    "loser": "Josh Wilson",
    "loser_school": "Utah Valley",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Steve Santos",
    "winner_school": "Columbia",
    "loser": "David Habat",
    "loser_school": "Edinboro",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Kyle Bradley",
    "winner_school": "Missouri",
    "loser": "Bryce Busler",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Corey Mock",
    "loser_school": "North Carolina",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Jake O`Hara",
    "winner_school": "Columbia",
    "loser": "David Bonin",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Joshua Kreimier",
    "winner_school": "Air Force",
    "loser": "Brian Tanen",
    "loser_school": "Lehigh",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Justin Lister",
    "winner_school": "Binghamton",
    "loser": "Matt Lester",
    "loser_school": "Oklahoma",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Walter Peppelman",
    "winner_school": "Harvard",
    "loser": "Anthony Jones",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Roger Pena",
    "winner_school": "Oregon State",
    "loser": "Josh Demas",
    "loser_school": "Ohio State",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Tommy Churchard",
    "winner_school": "Purdue",
    "loser": "Aaron Sulzer",
    "loser_school": "Eastern Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "John Nicholson",
    "loser_school": "Old Dominion",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Benjamin Jordan",
    "winner_school": "Wisconsin",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Coleman Gracey",
    "loser_school": "Army",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Brandon Wright",
    "loser_school": "Chattanooga",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Patrick Graham",
    "winner_school": "Oklahoma",
    "loser": "Pierce Harger",
    "loser_school": "Northwestern",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Dominic Kastl",
    "winner_school": "Cal Poly",
    "loser": "Gabriel Burak",
    "loser_school": "Northern Colorado",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Kyle Blevins",
    "winner_school": "Appalachian State",
    "loser": "Daniel Yates",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Conrad Polz",
    "winner_school": "Illinois",
    "loser": "Marshall Peppelman",
    "loser_school": "Cornell",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Corey Lear",
    "winner_school": "Bucknell",
    "loser": "Dallas Bailey",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Mike Dessino",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Turtogtokh Luvsandorj",
    "winner_school": "The Citadel",
    "loser": "Lance Bryson",
    "loser_school": "West Virginia",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Dorian Henderson",
    "winner_school": "Missouri",
    "loser": "Greg Zannetti",
    "loser_school": "Rutgers",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Peter Huntley",
    "winner_school": "Navy",
    "loser": "Leroy Munster",
    "loser_school": "Northwestern",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Ryan Leblanc",
    "winner_school": "Indiana",
    "loser": "Patrick Martinez",
    "loser_school": "Wyoming",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Curran Jacobs",
    "winner_school": "Michigan State",
    "loser": "Seth Creasy",
    "loser_school": "Lock Haven",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Ethan Headlee",
    "winner_school": "Pittsburgh",
    "loser": "Tyler Koehn",
    "loser_school": "Nebraska",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Justin Zeerip",
    "winner_school": "Michigan",
    "loser": "Jim Resnick",
    "loser_school": "Rider",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Jonathan Fausey",
    "winner_school": "Virginia",
    "loser": "Casey Newburg",
    "loser_school": "Kent State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Nathan Schiedel",
    "winner_school": "Binghamton",
    "loser": "Ryan Garringer",
    "loser_school": "Ohio",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Thomas Ferguson",
    "winner_school": "North Carolina",
    "loser": "Erich Smith",
    "loser_school": "Penn",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Erich Schmditke",
    "loser_school": "Oklahoma",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Braden Atwood",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Tony Dallago",
    "winner_school": "Illinois",
    "loser": "Ian Hinton",
    "loser_school": "Michigan State",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Grant Gambrall",
    "winner_school": "Iowa",
    "loser": "Victor Avery",
    "loser_school": "Edinboro",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Mike Larson",
    "winner_school": "Missouri",
    "loser": "Ben Clymer",
    "loser_school": "Hofstra",
    "result": "Fall 4:26"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Joseph Kennedy",
    "winner_school": "Lehigh",
    "loser": "Keldrick Hall",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Cody Reed",
    "winner_school": "Binghamton",
    "loser": "Derek Stanley",
    "loser_school": "Army",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Andrew Campolattano",
    "winner_school": "Ohio State",
    "loser": "Morgan McIntosh",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Matt Powless",
    "winner_school": "Indiana",
    "loser": "John Weakley",
    "loser_school": "Campbell",
    "result": "Fall 3:51"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Christian Boley",
    "loser_school": "Maryland",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Richard Perry",
    "winner_school": "Bloomsburg",
    "loser": "Daniel Rinaldi",
    "loser_school": "Rutgers",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "A.J. Kissel",
    "winner_school": "Purdue",
    "loser": "Daniel Mitchell",
    "loser_school": "American",
    "result": "TF 19-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "Taylor Meeks",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Nick Gwiazdowski",
    "winner_school": "Binghamton",
    "loser": "Peter Capone",
    "loser_school": "Ohio State",
    "result": "Fall 3:49"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Brandon Williamson",
    "winner_school": "West Virginia",
    "loser": "Cole Tobin",
    "loser_school": "Wisconsin",
    "result": "Fall 4:23"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Tucker Lane",
    "winner_school": "Nebraska",
    "loser": "Wesley Schroeder",
    "loser_school": "Eastern Michigan",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Benjamin Apland",
    "winner_school": "Michigan",
    "loser": "Steve Andrus",
    "loser_school": "Michigan State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Austin Marsden",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Matthew Gibson",
    "winner_school": "Iowa State",
    "loser": "Peter Sturgeon",
    "loser_school": "Central Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Levi Cooper",
    "winner_school": "Arizona State",
    "loser": "Kevin Innis",
    "loser_school": "Boston University",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Kevin Lester",
    "winner_school": "Columbia",
    "loser": "Maciej Jochym",
    "loser_school": "Cornell",
    "result": "Dec 9-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Ryan Mango",
    "loser_school": "Stanford",
    "result": "MD 13-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Nicholas Bedelyon",
    "winner_school": "Kent State",
    "loser": "Jesse Delgado",
    "loser_school": "Illinois",
    "result": "Dec 8-5 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Frank Perrelli",
    "winner_school": "Cornell",
    "loser": "Anthony Zanetta",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Zachary Sanders",
    "loser_school": "Minnesota",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Steve Bonanno",
    "winner_school": "Hofstra",
    "loser": "Camden Eppert",
    "loser_school": "Purdue",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Pat Rollins",
    "loser_school": "Oregon State",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Jonathon Morrison",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Matthew Snyder",
    "loser_school": "Virginia",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Zachery Stevens",
    "loser_school": "Michigan",
    "result": "Fall 2:35"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Bernard Futrell",
    "winner_school": "Illinois",
    "loser": "Joe Colon",
    "loser_school": "Northern Iowa",
    "result": "Fall 0:44"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Steven Keith",
    "loser_school": "Harvard",
    "result": "Fall 1:57"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "C. Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Zach Horan",
    "winner_school": "Central Michigan",
    "loser": "Matthew Nelson",
    "loser_school": "Virginia",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Shelton Mack",
    "winner_school": "Pittsburgh",
    "loser": "Cashé Quiroga",
    "loser_school": "Purdue",
    "result": "Dec 12-11"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Aaron (A.J.) Schopp",
    "winner_school": "Edinboro",
    "loser": "Jordan Thome",
    "loser_school": "Army",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Aaron Kalil",
    "loser_school": "Navy",
    "result": "MD 13-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Nick Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Hunter Stieber",
    "winner_school": "Ohio State",
    "loser": "Michael Mangrum",
    "loser_school": "Oregon State",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Borislav Novachkov",
    "loser_school": "Cal Poly",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Zach Neibert",
    "loser_school": "Virginia Tech",
    "result": "MD 15-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "William Ashnault",
    "winner_school": "Rutgers",
    "loser": "Tyler Small",
    "loser_school": "Kent State",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Darius Little",
    "winner_school": "NC State",
    "loser": "Zack Kemmerer",
    "loser_school": "Penn",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Nick Nelson",
    "loser_school": "Virginia",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Justin LaValle",
    "loser_school": "Old Dominion",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Eric Grajales",
    "loser_school": "Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Justin Accordino",
    "winner_school": "Hofstra",
    "loser": "Nick Lester",
    "loser_school": "Oklahoma",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Cole VonOhlen",
    "loser_school": "Air Force",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Jamal Parks",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Cam Tessari",
    "winner_school": "Ohio State",
    "loser": "Augustus Sako",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Kaleb Friedley",
    "loser_school": "Northwestern",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Eric Terrazas",
    "loser_school": "Illinois",
    "result": "Fall 2:32"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Steve Santos",
    "winner_school": "Columbia",
    "loser": "Kyle Bradley",
    "loser_school": "Missouri",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Frank Hickman",
    "loser_school": "Bloomsburg",
    "result": "Fall 4:10"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Ganbayar Sanjaa",
    "winner_school": "American",
    "loser": "Daniel Kolodzik",
    "loser_school": "Princeton",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "James Green",
    "loser_school": "Nebraska",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Dylan Alton",
    "loser_school": "Penn State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Jake O`Hara",
    "loser_school": "Columbia",
    "result": "MD 12-0"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Joshua Kreimier",
    "winner_school": "Air Force",
    "loser": "Justin Lister",
    "loser_school": "Binghamton",
    "result": "Fall 5:33"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Walter Peppelman",
    "winner_school": "Harvard",
    "loser": "Roger Pena",
    "loser_school": "Oregon State",
    "result": "Fall 2:29"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Tommy Churchard",
    "loser_school": "Purdue",
    "result": "TF 15-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Robert Kokesh",
    "loser_school": "Nebraska",
    "result": "Fall 0:30"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Bekzod Abdurakhmonov",
    "winner_school": "Clarion",
    "loser": "Paul Gillespie",
    "loser_school": "Hofstra",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "Andrew Sorenson",
    "loser_school": "Iowa State",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Shane Onufer",
    "loser_school": "Wyoming",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Benjamin Jordan",
    "winner_school": "Wisconsin",
    "loser": "Nicholas Sulzer",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Patrick Graham",
    "loser_school": "Oklahoma",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Kyle Blevins",
    "winner_school": "Appalachian State",
    "loser": "Dominic Kastl",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Conrad Polz",
    "winner_school": "Illinois",
    "loser": "Corey Lear",
    "loser_school": "Bucknell",
    "result": "Fall 0:33"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Nick Heflin",
    "loser_school": "Ohio State",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Ethen Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Ryan DesRoches",
    "loser_school": "Cal Poly",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Jordan Blanton",
    "loser_school": "Illinois",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Turtogtokh Luvsandorj",
    "loser_school": "The Citadel",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Peter Huntley",
    "winner_school": "Navy",
    "loser": "Dorian Henderson",
    "loser_school": "Missouri",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Curran Jacobs",
    "winner_school": "Michigan State",
    "loser": "Ryan Leblanc",
    "loser_school": "Indiana",
    "result": "Fall 4:47"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Justin Zeerip",
    "winner_school": "Michigan",
    "loser": "Ethan Headlee",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Austin Trotman",
    "winner_school": "Appalachian State",
    "loser": "Joe LeBlanc",
    "loser_school": "Wyoming",
    "result": "Dec 12-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Kevin Steinhaus",
    "loser_school": "Minnesota",
    "result": "Dec 1-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Fall 2:35"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Josh Ihnen",
    "loser_school": "Nebraska",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Jonathan Fausey",
    "winner_school": "Virginia",
    "loser": "Nathan Schiedel",
    "loser_school": "Binghamton",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Thomas Ferguson",
    "loser_school": "North Carolina",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Tony Dallago",
    "winner_school": "Illinois",
    "loser": "Jacob Swartz",
    "loser_school": "Boise State",
    "result": "Fall 0:33"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Mike Larson",
    "winner_school": "Missouri",
    "loser": "Grant Gambrall",
    "loser_school": "Iowa",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Alfonso Hernandez",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Cayle Byers",
    "winner_school": "Oklahoma State",
    "loser": "James Nakashima",
    "loser_school": "Nebraska",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Brent Haynes",
    "loser_school": "Missouri",
    "result": "Fall 7:13"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Christopher Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Sonny Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Joseph Kennedy",
    "winner_school": "Lehigh",
    "loser": "Cody Reed",
    "loser_school": "Binghamton",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Andrew Campolattano",
    "winner_school": "Ohio State",
    "loser": "Matt Powless",
    "loser_school": "Indiana",
    "result": "Fall 4:37"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Richard Perry",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "A.J. Kissel",
    "loser_school": "Purdue",
    "result": "Fall 0:48"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Ryan Flores",
    "winner_school": "American",
    "loser": "Andrew Delaney",
    "loser_school": "The Citadel",
    "result": "Fall 2:27"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Bobby Telford",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Clayton Jack",
    "winner_school": "Oregon State",
    "loser": "Cameron Wade",
    "loser_school": "Penn State",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Michael McMullan",
    "loser_school": "Northwestern",
    "result": "Fall 4:50"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Nick Gwiazdowski",
    "winner_school": "Binghamton",
    "loser": "Brandon Williamson",
    "loser_school": "West Virginia",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Tucker Lane",
    "winner_school": "Nebraska",
    "loser": "Benjamin Apland",
    "loser_school": "Michigan",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Matthew Gibson",
    "loser_school": "Iowa State",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Levi Cooper",
    "winner_school": "Arizona State",
    "loser": "Kevin Lester",
    "loser_school": "Columbia",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Steve Bonanno",
    "winner_school": "Hofstra",
    "loser": "Anthony Zanetta",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-4 SV"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Trent Sprenkle",
    "loser_school": "North Dakota State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Jarrod Patterson",
    "loser_school": "Oklahoma",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Alan Waters",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Steven Keith",
    "winner_school": "Harvard",
    "loser": "Zach Horan",
    "loser_school": "Central Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "C. Dardanes",
    "winner_school": "Minnesota",
    "loser": "Shelton Mack",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Zachery Stevens",
    "winner_school": "Michigan",
    "loser": "Aaron (A.J.) Schopp",
    "loser_school": "Edinboro",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Joe Colon",
    "loser_school": "Northern Iowa",
    "result": "Dec 13-10"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "William Ashnault",
    "loser_school": "Rutgers",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Darius Little",
    "winner_school": "NC State",
    "loser": "Zach Neibert",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Nick Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Mitchell Port",
    "loser_school": "Edinboro",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Cam Tessari",
    "winner_school": "Ohio State",
    "loser": "Cole VonOhlen",
    "loser_school": "Air Force",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Jamal Parks",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Eric Grajales",
    "loser_school": "Michigan",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Nick Lester",
    "winner_school": "Oklahoma",
    "loser": "Steve Santos",
    "loser_school": "Columbia",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Steven Monk",
    "loser_school": "North Dakota State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Joshua Kreimier",
    "loser_school": "Air Force",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Walter Peppelman",
    "winner_school": "Harvard",
    "loser": "Frank Hickman",
    "loser_school": "Bloomsburg",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Daniel Kolodzik",
    "loser_school": "Princeton",
    "result": "Fall 1:52"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Benjamin Jordan",
    "winner_school": "Wisconsin",
    "loser": "Andrew Sorenson",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Shane Onufer",
    "loser_school": "Wyoming",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Kyle Blevins",
    "winner_school": "Appalachian State",
    "loser": "Robert Kokesh",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Conrad Polz",
    "winner_school": "Illinois",
    "loser": "Paul Gillespie",
    "loser_school": "Hofstra",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Ryan DesRoches",
    "winner_school": "Cal Poly",
    "loser": "Jimmy Sheptock",
    "loser_school": "Maryland",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Peter Huntley",
    "loser_school": "Navy",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Curran Jacobs",
    "loser_school": "Michigan State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Justin Zeerip",
    "loser_school": "Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Jonathan Fausey",
    "loser_school": "Virginia",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Ryan Loder",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Tony Dallago",
    "loser_school": "Illinois",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Mike Larson",
    "loser_school": "Missouri",
    "result": "TF 17-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Joseph Kennedy",
    "winner_school": "Lehigh",
    "loser": "Brent Haynes",
    "loser_school": "Missouri",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Andrew Campolattano",
    "loser_school": "Ohio State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Alfonso Hernandez",
    "winner_school": "Wyoming",
    "loser": "Mario Gonzalez",
    "loser_school": "Illinois",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "James Nakashima",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Nick Gwiazdowski",
    "winner_school": "Binghamton",
    "loser": "Cameron Wade",
    "loser_school": "Penn State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Tucker Lane",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Andrew Delaney",
    "loser_school": "The Citadel",
    "result": "Fall 5:25"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Levi Cooper",
    "loser_school": "Arizona State",
    "result": "Dec 6-0"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Nicholas Bedelyon",
    "loser_school": "Kent State",
    "result": "MD 15-7"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Frank Perrelli",
    "loser_school": "Cornell",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Steve Bonanno",
    "loser_school": "Hofstra",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Jesse Delgado",
    "loser_school": "Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Bernard Futrell",
    "loser_school": "Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Tony Ramos",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "C. Dardanes",
    "winner_school": "Minnesota",
    "loser": "Steven Keith",
    "loser_school": "Harvard",
    "result": "Fall 7:48"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Zachery Stevens",
    "loser_school": "Michigan",
    "result": "Fall 1:43"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Hunter Stieber",
    "loser_school": "Ohio State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Montell Marion",
    "winner_school": "Iowa",
    "loser": "Kendric Maple",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Darius Little",
    "loser_school": "NC State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Michael Nevinger",
    "loser_school": "Cornell",
    "result": "Dec 9-3"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Justin Accordino",
    "loser_school": "Hofstra",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Tyler Nauman",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Cam Tessari",
    "winner_school": "Ohio State",
    "loser": "Scott Sakaguchi",
    "loser_school": "Oregon State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Nick Lester",
    "loser_school": "Oklahoma",
    "result": "MD 16-5"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Ganbayar Sanjaa",
    "loser_school": "American",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Jason Welch",
    "loser_school": "Northwestern",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "James Green",
    "loser_school": "Nebraska",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Walter Peppelman",
    "loser_school": "Harvard",
    "result": "MD 9-0"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Bekzod Abdurakhmonov",
    "loser_school": "Clarion",
    "result": "Fall 4:44"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Brandon Hatchett",
    "winner_school": "Lehigh",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Benjamin Jordan",
    "loser_school": "Wisconsin",
    "result": "MD 11-2"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Kyle Blevins",
    "winner_school": "Appalachian State",
    "loser": "Conrad Polz",
    "loser_school": "Illinois",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Logan Storley",
    "loser_school": "Minnesota",
    "result": "TF 17-1"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Nick Amuchastegui",
    "winner_school": "Stanford",
    "loser": "Chris Perry",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Ryan DesRoches",
    "loser_school": "Cal Poly",
    "result": "MD 11-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Ethen Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Austin Trotman",
    "loser_school": "Appalachian State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Robert Hamlin",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Josh Ihnen",
    "loser_school": "Nebraska",
    "result": "M FOR"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Joe LeBlanc",
    "loser_school": "Wyoming",
    "result": "Dec 9-6"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Cayle Byers",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Christopher Honeycutt",
    "winner_school": "Edinboro",
    "loser": "Matthew Wilps",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-3 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Joseph Kennedy",
    "loser_school": "Lehigh",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Alfonso Hernandez",
    "winner_school": "Wyoming",
    "loser": "Micah Burak",
    "loser_school": "Penn",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Zachery Rey",
    "winner_school": "Lehigh",
    "loser": "Ryan Flores",
    "loser_school": "American",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Clayton Jack",
    "loser_school": "Oregon State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Nick Gwiazdowski",
    "loser_school": "Binghamton",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Jeremy Johnson",
    "loser_school": "Ohio",
    "result": "Fall 3:46"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Nicholas Bedelyon",
    "loser_school": "Kent State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Frank Perrelli",
    "winner_school": "Cornell",
    "loser": "Ryan Mango",
    "loser_school": "Stanford",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "C. Dardanes",
    "winner_school": "Minnesota",
    "loser": "Bernard Futrell",
    "loser_school": "Illinois",
    "result": "Fall 6:29"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Devin Carter",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Hunter Stieber",
    "loser_school": "Ohio State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Michael Mangrum",
    "loser_school": "Oregon State",
    "result": "Fall 4:09"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Cam Tessari",
    "winner_school": "Ohio State",
    "loser": "Justin Accordino",
    "loser_school": "Hofstra",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Tyler Nauman",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Ganbayar Sanjaa",
    "loser_school": "American",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "James Fleming",
    "loser_school": "Clarion",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Bekzod Abdurakhmonov",
    "winner_school": "Clarion",
    "loser": "Peter Yates",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Kyle Blevins",
    "winner_school": "Appalachian State",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Logan Storley",
    "loser_school": "Minnesota",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Nick Heflin",
    "loser_school": "Ohio State",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Austin Trotman",
    "winner_school": "Appalachian State",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Kevin Steinhaus",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Cayle Byers",
    "winner_school": "Oklahoma State",
    "loser": "Sonny Yohn",
    "loser_school": "Minnesota",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Alfonso Hernandez",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Ryan Flores",
    "loser_school": "American",
    "result": "M FOR"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Clayton Jack",
    "winner_school": "Oregon State",
    "loser": "Bobby Telford",
    "loser_school": "Iowa",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Zachary Sanders",
    "winner_school": "Minnesota",
    "loser": "Frank Perrelli",
    "loser_school": "Cornell",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Nicholas Bedelyon",
    "loser_school": "Kent State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Steve Bonanno",
    "loser_school": "Hofstra",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "C. Dardanes",
    "loser_school": "Minnesota",
    "result": "Fall 6:50"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Bernard Futrell",
    "loser_school": "Illinois",
    "result": "Fall 1:45"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Zachery Stevens",
    "winner_school": "Michigan",
    "loser": "Steven Keith",
    "loser_school": "Harvard",
    "result": "Dec 13-11"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Borislav Novachkov",
    "winner_school": "Cal Poly",
    "loser": "Kendric Maple",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Hunter Stieber",
    "loser_school": "Ohio State",
    "result": "Fall 4:14"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Darius Little",
    "loser_school": "NC State",
    "result": "Dec 10-3"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Cam Tessari",
    "loser_school": "Ohio State",
    "result": "Dec 12-10"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Tyler Nauman",
    "winner_school": "Pittsburgh",
    "loser": "Justin Accordino",
    "loser_school": "Hofstra",
    "result": "Dec 4-3"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Nick Lester",
    "loser_school": "Oklahoma",
    "result": "Dec 1-0"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Jason Welch",
    "loser_school": "Northwestern",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Ganbayar Sanjaa",
    "loser_school": "American",
    "result": "Dec 7-5"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Walter Peppelman",
    "loser_school": "Harvard",
    "result": "MD 9-1"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Bekzod Abdurakhmonov",
    "winner_school": "Clarion",
    "loser": "Kyle Blevins",
    "loser_school": "Appalachian State",
    "result": "Dec 6-2"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "Dec 13-7"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Benjamin Jordan",
    "winner_school": "Wisconsin",
    "loser": "Conrad Polz",
    "loser_school": "Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Jordan Blanton",
    "loser_school": "Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Logan Storley",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Ryan DesRoches",
    "loser_school": "Cal Poly",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Austin Trotman",
    "winner_school": "Appalachian State",
    "loser": "Robert Hamlin",
    "loser_school": "Lehigh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Joe LeBlanc",
    "winner_school": "Wyoming",
    "loser": "Josh Ihnen",
    "loser_school": "Nebraska",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Cayle Byers",
    "winner_school": "Oklahoma State",
    "loser": "Matthew Wilps",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Sonny Yohn",
    "winner_school": "Minnesota",
    "loser": "Alfonso Hernandez",
    "loser_school": "Wyoming",
    "result": "Dec 4-1"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "Joseph Kennedy",
    "loser_school": "Lehigh",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Clayton Jack",
    "loser_school": "Oregon State",
    "result": "Dec 10-5"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Ryan Flores",
    "loser_school": "American",
    "result": "M FOR"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Nick Gwiazdowski",
    "loser_school": "Binghamton",
    "result": "Dec 11-5"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Nicholas Megaludis",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Jordan Oliver",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Kellen Russell",
    "winner_school": "Michigan",
    "loser": "Montell Marion",
    "loser_school": "Iowa",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Frank Molinaro",
    "winner_school": "Penn State",
    "loser": "Dylan Ness",
    "loser_school": "Minnesota",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Derek St. John",
    "loser_school": "Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Brandon Hatchett",
    "loser_school": "Lehigh",
    "result": "TF 22-7"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Nick Amuchastegui",
    "loser_school": "Stanford",
    "result": "MD 13-2"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Quentin Wright",
    "loser_school": "Penn State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Cam Simaz",
    "winner_school": "Cornell",
    "loser": "Christopher Honeycutt",
    "loser_school": "Edinboro",
    "result": "Dec 7-5"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Zachery Rey",
    "loser_school": "Lehigh",
    "result": "Dec 4-1"
  }
];
