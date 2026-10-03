// 2013 NCAA Division I Wrestling Championships — transcribed from the official NCAA bracket PDF (see FREEZE.md / transcription report).
// Result text exactly as printed. School names from the year-aware school-code map (school-codes.json).
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Mark Rappo",
    "winner_school": "Penn",
    "loser": "Max Soria",
    "loser_school": "Buffalo",
    "result": "MD 13-4"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Geoffrey Alexander",
    "winner_school": "Maryland",
    "loser": "Devon Lotito",
    "loser_school": "Cal Poly",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Joey Lazor",
    "winner_school": "Northern Iowa",
    "loser": "Connor Hanafee",
    "loser_school": "Army",
    "result": "MD 12-2"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Ian Paddock",
    "loser_school": "Ohio State",
    "result": "Dec 9-5"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Jake O`Hara",
    "loser_school": "Columbia",
    "result": "MD 10-2"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Ryan Leblanc",
    "winner_school": "Indiana",
    "loser": "Mike Ottinger",
    "loser_school": "Central Michigan",
    "result": "TB-1 5-3"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Lee Helbig",
    "winner_school": "Wyoming",
    "loser": "Austin Gabel",
    "loser_school": "Virginia Tech",
    "result": "SV-1 5-3"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Boaz Beard",
    "winner_school": "Iowa State",
    "loser": "Stephen Doty",
    "loser_school": "Virginia",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Jace Bennett",
    "loser_school": "Cornell",
    "result": "MD 12-3"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Matthew Gibson",
    "winner_school": "Iowa State",
    "loser": "Adam Fager",
    "loser_school": "Utah Valley",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "David Thorn",
    "loser_school": "Minnesota",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Sean Boyle",
    "winner_school": "Michigan",
    "loser": "Mark Rappo",
    "loser_school": "Penn",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Tyler Iwamura",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Matthew Snyder",
    "winner_school": "Virginia",
    "loser": "Rob Deutsch",
    "loser_school": "Old Dominion",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Dominic Parisi",
    "winner_school": "Appalachian State",
    "loser": "Jarrod Garnett",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Tyler Cox",
    "winner_school": "Wyoming",
    "loser": "Nick Soto",
    "loser_school": "Chattanooga",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Christian Cullinan",
    "winner_school": "Central Michigan",
    "loser": "Joe DeAngelo",
    "loser_school": "NC State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Kevon Powell",
    "loser_school": "Ohio",
    "result": "TF-1.5 6:26 (18-2)"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Ben Willeford",
    "loser_school": "Cleveland State",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Steve Mitcheff",
    "winner_school": "Kent State",
    "loser": "Edward Klimara",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Evan Silver",
    "winner_school": "Stanford",
    "loser": "Nikko Triggas",
    "loser_school": "Ohio State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Eric Montoya",
    "loser_school": "Campbell",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Nathan Kraisser",
    "winner_school": "North Carolina",
    "loser": "David Terao",
    "loser_school": "American",
    "result": "Fall 6:27"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Steve Bonanno",
    "winner_school": "Hofstra",
    "loser": "Josh Martinez",
    "loser_school": "Air Force",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "William Watterson",
    "winner_school": "Brown",
    "loser": "Joseph Duca",
    "loser_school": "Indiana",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Jade Rauser",
    "loser_school": "Utah Valley",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Brandon Gambucci",
    "loser_school": "Duke",
    "result": "Fall 3:00"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Shelton Mack",
    "winner_school": "Pittsburgh",
    "loser": "Jamie Franco",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Levi Wolfensperger",
    "winner_school": "Northern Iowa",
    "loser": "Anthony Elias",
    "loser_school": "Davidson",
    "result": "Fall 1:39"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Matt Bystol",
    "loser_school": "Columbia",
    "result": "TF-1.5 7:00 (20-5)"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Dylan Hyder",
    "loser_school": "Air Force",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Vincent Dellafave",
    "winner_school": "Rutgers",
    "loser": "Jordan Conaway",
    "loser_school": "Penn State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Derek Steeley",
    "winner_school": "Binghamton",
    "loser": "Sam Speno",
    "loser_school": "NC State",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "Rosario Bruno",
    "loser_school": "Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Geoffrey Alexander",
    "loser_school": "Maryland",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Randy Cruz",
    "winner_school": "Lehigh",
    "loser": "Brian Owen",
    "loser_school": "Boise State",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Dane Harlowe",
    "winner_school": "Boston University",
    "loser": "George DiCamillo",
    "loser_school": "Virginia",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Nathan McCormick",
    "winner_school": "Missouri",
    "loser": "Erik Spjut",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Jonathon Morrison",
    "winner_school": "Oklahoma State",
    "loser": "Mackenzie McGuire",
    "loser_school": "Kent State",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Scotti Sentes",
    "winner_school": "Central Michigan",
    "loser": "Jimmy Morris",
    "loser_school": "Rider",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Joseph Ward",
    "winner_school": "North Carolina",
    "loser": "Daryl Thomas",
    "loser_school": "Illinois",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Nick Wilcox",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:56"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Hunter Stieber",
    "winner_school": "Ohio State",
    "loser": "Joseph Spisak",
    "loser_school": "Virginia",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Steven Keith",
    "winner_school": "Harvard",
    "loser": "Julian Feikert",
    "loser_school": "Oklahoma State",
    "result": "Fall 3:39"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Richard Durso",
    "winner_school": "Franklin and Marshall",
    "loser": "McCade Ford",
    "loser_school": "Wyoming",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Luke Goettl",
    "loser_school": "Iowa State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Evan Henderson",
    "winner_school": "North Carolina",
    "loser": "Pasquale Greco",
    "loser_school": "Northwestern",
    "result": "Fall 5:49"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Chris Mecate",
    "winner_school": "Old Dominion",
    "loser": "Brandon Nelsen",
    "loser_school": "Purdue",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Luke Vaith",
    "winner_school": "Hofstra",
    "loser": "Nathan Pennesi",
    "loser_school": "West Virginia",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Frank Cimato",
    "loser_school": "Drexel",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Nicholas Hucke",
    "loser_school": "Missouri",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Trevor Melde",
    "winner_school": "Rutgers",
    "loser": "Dean Pavlou",
    "loser_school": "Chattanooga",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Zach Neibert",
    "winner_school": "Virginia Tech",
    "loser": "Michael Nevinger",
    "loser_school": "Cornell",
    "result": "TB-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Undrakhbayar Khishignyam",
    "winner_school": "The Citadel",
    "loser": "Anthony Salupo",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Mark Ballweg",
    "winner_school": "Iowa",
    "loser": "Daniel Neff",
    "loser_school": "Lock Haven",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Charles Cobb",
    "winner_school": "Penn",
    "loser": "Ridge Kiley",
    "loser_school": "Nebraska",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Joey Lazor",
    "winner_school": "Northern Iowa",
    "loser": "Bryan Pearsall",
    "loser_school": "Penn State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Frank Goodwin",
    "loser_school": "Maryland",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "David Habat",
    "loser_school": "Edinboro",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Derek Valenti",
    "winner_school": "Virginia",
    "loser": "Christopher Villalonga",
    "loser_school": "Cornell",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Jake Sueflohn",
    "winner_school": "Nebraska",
    "loser": "Ronnie Garbinsky",
    "loser_school": "Pittsburgh",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "Brandon Richardson",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Steve Santos",
    "winner_school": "Columbia",
    "loser": "Alex Hudson",
    "loser_school": "Chattanooga",
    "result": "Fall 6:19"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Max Mayfield",
    "loser_school": "Iowa State",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Dan Osterman",
    "winner_school": "Michigan State",
    "loser": "Donnie Corby",
    "loser_school": "Central Michigan",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Cole VonOhlen",
    "winner_school": "Air Force",
    "loser": "Alexander Richardson",
    "loser_school": "Old Dominion",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Kevin Tao",
    "winner_school": "American",
    "loser": "Donald Vinson",
    "loser_school": "Binghamton",
    "result": "TB-1 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Raymond Borja",
    "winner_school": "Navy",
    "loser": "Tyler Bedelyon",
    "loser_school": "Clarion",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Andrew Alton",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Daniel Young",
    "loser_school": "Army",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Blake Roulo",
    "loser_school": "Buffalo",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Ivan Lopouchanski",
    "winner_school": "Purdue",
    "loser": "Josh Roosa",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Nick Lester",
    "winner_school": "Oklahoma",
    "loser": "Josh Wilson",
    "loser_school": "Utah Valley",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Caleb Ervin",
    "loser_school": "Illinois",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "Nestor Taffur",
    "loser_school": "Boston University",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Scott Winston",
    "winner_school": "Rutgers",
    "loser": "Andy McCulley",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Zac Cibula",
    "winner_school": "Rider",
    "loser": "Frank Hickman",
    "loser_school": "Bloomsburg",
    "result": "Fall 2:14"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Donnie Tasser",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Tommy Churchard",
    "loser_school": "Purdue",
    "result": "TF-1.5 4:44 (16-0)"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Jedd Moore",
    "winner_school": "Virginia",
    "loser": "Cody Pack",
    "loser_school": "South Dakota State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "David Bonin",
    "winner_school": "Northern Iowa",
    "loser": "Bobby Barnhisel",
    "loser_school": "Navy",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Kyle Bradley",
    "winner_school": "Missouri",
    "loser": "James Green",
    "loser_school": "Nebraska",
    "result": "TB-2 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Taylor Walsh",
    "winner_school": "Indiana",
    "loser": "Joseph Napoli",
    "loser_school": "Lehigh",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Georgi Ivanov",
    "winner_school": "Boise State",
    "loser": "Daniel Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Spartak Chino",
    "winner_school": "Ohio",
    "loser": "Walter Peppelman",
    "loser_school": "Harvard",
    "result": "Fall 1:05"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Watts",
    "loser_school": "Michigan State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Jesse Dong",
    "winner_school": "Virginia Tech",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Josh Demas",
    "winner_school": "Ohio State",
    "loser": "Roger Pena",
    "loser_school": "Oregon State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Joshua Kreimier",
    "winner_school": "Air Force",
    "loser": "Matt Lester",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Matthew Frisch",
    "loser_school": "The Citadel",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Mark Martin",
    "loser_school": "Ohio State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Ryan Leblanc",
    "winner_school": "Indiana",
    "loser": "Peyton Walsh",
    "loser_school": "Navy",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Josh Veltre",
    "winner_school": "Bloomsburg",
    "loser": "Nijel Jones",
    "loser_school": "NC State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Bret Baumbach",
    "loser_school": "Stanford",
    "result": "SV-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Tyler Wilps",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Taylor Massa",
    "winner_school": "Michigan",
    "loser": "Paul Hancock",
    "loser_school": "Army",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Josh Condon",
    "winner_school": "Chattanooga",
    "loser": "Johnny Greisheimer",
    "loser_school": "Edinboro",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma State",
    "loser": "Pierce Harger",
    "loser_school": "Northwestern",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Mark Lewandowski",
    "loser_school": "Buffalo",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Zach Toal",
    "winner_school": "Missouri",
    "loser": "Austin Wilson",
    "loser_school": "Nebraska",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Cody Yohn",
    "winner_school": "Minnesota",
    "loser": "Josh Houldsworth",
    "loser_school": "Columbia",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Patrick Graham",
    "winner_school": "Oklahoma",
    "loser": "Ramon Santiago",
    "loser_school": "Rider",
    "result": "MD 15-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Conrad Polz",
    "winner_school": "Illinois",
    "loser": "Caleb Marsh",
    "loser_school": "Kent State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Nick Moore",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Zachary Strickland",
    "winner_school": "Appalachian State",
    "loser": "Nicholas Visicaro",
    "loser_school": "Rutgers",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "John Staudenmayer",
    "loser_school": "North Carolina",
    "result": "Fall 2:52"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Cody Weishoff",
    "loser_school": "Oregon State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Jonathan Fausey",
    "winner_school": "Virginia",
    "loser": "Stephen West",
    "loser_school": "Columbia",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Hunter Gamble",
    "winner_school": "Gardner-Webb",
    "loser": "Nathaniel Brown",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Greg Zannetti",
    "loser_school": "Rutgers",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "Sam Wheeler",
    "loser_school": "Kent State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "John-Martin Cannon",
    "winner_school": "Buffalo",
    "loser": "Mathew Miller",
    "loser_school": "Navy",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Cody Walters",
    "winner_school": "Ohio",
    "loser": "Chad Welch",
    "loser_school": "Purdue",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Ian Korb",
    "loser_school": "Penn",
    "result": "Fall 4:08"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Craig Kelliher",
    "loser_school": "Central Michigan",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Phillip Joseph",
    "winner_school": "Eastern Michigan",
    "loser": "Leroy Munster",
    "loser_school": "Northwestern",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Matt Mougin",
    "winner_school": "Northern Illinois",
    "loser": "Blake Stauffer",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Bryce Hammond",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Lee Helbig",
    "loser_school": "Wyoming",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Tanner Weatherman",
    "winner_school": "Iowa State",
    "loser": "Daniel Yates",
    "loser_school": "Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Nick Bonaccorsi",
    "winner_school": "Pittsburgh",
    "loser": "Billy Curling",
    "loser_school": "Old Dominion",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Mathew Brown",
    "winner_school": "Penn State",
    "loser": "Todd Porter",
    "loser_school": "Missouri",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Fred Garcia",
    "loser_school": "Lock Haven",
    "result": "Fall 0:28"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Kevin Radford",
    "winner_school": "Arizona State",
    "loser": "Canaan Bethea",
    "loser_school": "Penn",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Max Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Christopher Chionuma",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "MacKain Stoll",
    "loser_school": "North Dakota State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Nick Vetterlein",
    "loser_school": "Virginia Tech",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Boaz Beard",
    "loser_school": "Iowa State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Mason Bailey",
    "winner_school": "Navy",
    "loser": "John Rizqallah",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Ty Vinson",
    "loser_school": "Oregon State",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Casey Newburg",
    "loser_school": "Kent State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Daniel Rinaldi",
    "winner_school": "Rutgers",
    "loser": "Cody Magrum",
    "loser_school": "Ohio State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Mike Larson",
    "winner_school": "Missouri",
    "loser": "Ophir Bernstein",
    "loser_school": "Brown",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Cody Reed",
    "loser_school": "Binghamton",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Shane Woods",
    "loser_school": "Wyoming",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "James Cook",
    "loser_school": "Campbell",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Alex Utley",
    "winner_school": "North Carolina",
    "loser": "Lucas Sheridan",
    "loser_school": "Indiana",
    "result": "TB-1 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Tony Dallago",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Nathan Burak",
    "loser_school": "Iowa",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Phillip Wellington",
    "winner_school": "Ohio",
    "loser": "James Fox",
    "loser_school": "Harvard",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Jake Meredith",
    "winner_school": "Arizona State",
    "loser": "Nikolas Brown",
    "loser_school": "Chattanooga",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "Andrew Campolattano",
    "loser_school": "Ohio State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Taylor Meeks",
    "winner_school": "Oregon State",
    "loser": "Maxwell Huntley",
    "loser_school": "Michigan",
    "result": "Fall 1:49"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Jackson Hein",
    "winner_school": "Wisconsin",
    "loser": "Brent Haynes",
    "loser_school": "Missouri",
    "result": "SV-3 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Nick Whitenburg",
    "winner_school": "Eastern Michigan",
    "loser": "Alex Polizzi",
    "loser_school": "Northwestern",
    "result": "Fall 4:45"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Alfonso Hernandez",
    "winner_school": "Wyoming",
    "loser": "Caleb Kolb",
    "loser_school": "Nebraska",
    "result": "MD 15-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Derrick Borlie",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Richard Perry",
    "winner_school": "Bloomsburg",
    "loser": "Bryce Barnes",
    "loser_school": "Army",
    "result": "SV-1 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Blake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Braden Atwood",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Mario Gonzalez",
    "loser_school": "Illinois",
    "result": "Fall 1:42"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Nathan Schiedel",
    "winner_school": "Binghamton",
    "loser": "Conner Hartmann",
    "loser_school": "Duke",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Christian Boley",
    "loser_school": "Maryland",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Brandon Palik",
    "winner_school": "Drexel",
    "loser": "Michael Salopek",
    "loser_school": "Virginia",
    "result": "SV-1 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Donald Mcneil",
    "loser_school": "Rider",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Dominque Bradley",
    "winner_school": "Missouri",
    "loser": "Stryker Lane",
    "loser_school": "Cornell",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Matthew Gibson",
    "winner_school": "Iowa State",
    "loser": "Blake Herrin",
    "loser_school": "American",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Zac Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Levi Cooper",
    "loser_school": "Arizona State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Mike McClure",
    "winner_school": "Michigan State",
    "loser": "Riley Shaw",
    "loser_school": "Cleveland State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Dan Scherer",
    "loser_school": "Stanford",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Adam Chalfant",
    "winner_school": "Indiana",
    "loser": "Jacob Kettler",
    "loser_school": "George Mason",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Ernest James",
    "winner_school": "Edinboro",
    "loser": "William Smith",
    "loser_school": "Rutgers",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Chad Hanke",
    "winner_school": "Oregon State",
    "loser": "Kevin Innis",
    "loser_school": "Boston University",
    "result": "Fall 0:42"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "Benjamin Apland",
    "loser_school": "Michigan",
    "result": "Fall 0:18"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "James Lawson",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "J.T Felix",
    "winner_school": "Boise State",
    "loser": "Justin Grant",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Joe Stolfi",
    "loser_school": "Bucknell",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Connor Medbery",
    "winner_school": "Wisconsin",
    "loser": "David Marone",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Daniel Miller",
    "loser_school": "Navy",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Odie Delaney",
    "winner_school": "The Citadel",
    "loser": "Evan Knutson",
    "loser_school": "North Dakota State",
    "result": "SV-1 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Steven Graziano",
    "loser_school": "Penn",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Edward Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Max Soria",
    "loser_school": "Buffalo",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Brandon Gambucci",
    "winner_school": "Duke",
    "loser": "Devon Lotito",
    "loser_school": "Cal Poly",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Nathan Pennesi",
    "winner_school": "West Virginia",
    "loser": "Connor Hanafee",
    "loser_school": "Army",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Ian Paddock",
    "loser_school": "Ohio State",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Jake O`Hara",
    "winner_school": "Columbia",
    "loser": "Ryan Watts",
    "loser_school": "Michigan State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Austin Wilson",
    "winner_school": "Nebraska",
    "loser": "Mike Ottinger",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Austin Gabel",
    "winner_school": "Virginia Tech",
    "loser": "Sam Wheeler",
    "loser_school": "Kent State",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Stephen Doty",
    "winner_school": "Virginia",
    "loser": "James Cook",
    "loser_school": "Campbell",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Jace Bennett",
    "winner_school": "Cornell",
    "loser": "Andrew Campolattano",
    "loser_school": "Ohio State",
    "result": "Fall 4:48"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "James Lawson",
    "winner_school": "Penn State",
    "loser": "Adam Fager",
    "loser_school": "Utah Valley",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Sean Boyle",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Matthew Snyder",
    "winner_school": "Virginia",
    "loser": "Trent Sprenkle",
    "loser_school": "North Dakota State",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Dominic Parisi",
    "winner_school": "Appalachian State",
    "loser": "Tyler Cox",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Christian Cullinan",
    "loser_school": "Central Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Matt McDonough",
    "winner_school": "Iowa",
    "loser": "Steve Mitcheff",
    "loser_school": "Kent State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Evan Silver",
    "loser_school": "Stanford",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Nathan Kraisser",
    "winner_school": "North Carolina",
    "loser": "Steve Bonanno",
    "loser_school": "Hofstra",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "William Watterson",
    "loser_school": "Brown",
    "result": "TF-1.5 7:00 (20-5)"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Mark Rappo",
    "loser_school": "Penn",
    "result": "Fall 1:20"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Tyler Iwamura",
    "winner_school": "CSU Bakersfield",
    "loser": "Rob Deutsch",
    "loser_school": "Old Dominion",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Nick Soto",
    "loser_school": "Chattanooga",
    "result": "Fall 4:11"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Joe DeAngelo",
    "winner_school": "NC State",
    "loser": "Kevon Powell",
    "loser_school": "Ohio",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Edward Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Ben Willeford",
    "loser_school": "Cleveland State",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "Nikko Triggas",
    "winner_school": "Ohio State",
    "loser": "Eric Montoya",
    "loser_school": "Campbell",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Josh Martinez",
    "winner_school": "Air Force",
    "loser": "David Terao",
    "loser_school": "American",
    "result": "MD 13-0"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Jade Rauser",
    "winner_school": "Utah Valley",
    "loser": "Joseph Duca",
    "loser_school": "Indiana",
    "result": "Fall 1:49"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Shelton Mack",
    "loser_school": "Pittsburgh",
    "result": "Fall 2:40"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Levi Wolfensperger",
    "loser_school": "Northern Iowa",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Vincent Dellafave",
    "loser_school": "Rutgers",
    "result": "Fall 2:47"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "Derek Steeley",
    "loser_school": "Binghamton",
    "result": "TF-1.5 2:42 (18-1)"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Randy Cruz",
    "loser_school": "Lehigh",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Nathan McCormick",
    "winner_school": "Missouri",
    "loser": "Dane Harlowe",
    "loser_school": "Boston University",
    "result": "MD 11-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Jonathon Morrison",
    "winner_school": "Oklahoma State",
    "loser": "Scotti Sentes",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Joseph Ward",
    "loser_school": "North Carolina",
    "result": "Fall 1:07"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Jamie Franco",
    "winner_school": "Hofstra",
    "loser": "Brandon Gambucci",
    "loser_school": "Duke",
    "result": "SV-1 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Matt Bystol",
    "winner_school": "Columbia",
    "loser": "Anthony Elias",
    "loser_school": "Davidson",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Jordan Conaway",
    "winner_school": "Penn State",
    "loser": "Dylan Hyder",
    "loser_school": "Air Force",
    "result": "SV-2 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Rosario Bruno",
    "winner_school": "Michigan",
    "loser": "Sam Speno",
    "loser_school": "NC State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Geoffrey Alexander",
    "winner_school": "Maryland",
    "loser": "Brian Owen",
    "loser_school": "Boise State",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "George DiCamillo",
    "winner_school": "Virginia",
    "loser": "Erik Spjut",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Mackenzie McGuire",
    "winner_school": "Kent State",
    "loser": "Jimmy Morris",
    "loser_school": "Rider",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Nick Wilcox",
    "winner_school": "Bloomsburg",
    "loser": "Daryl Thomas",
    "loser_school": "Illinois",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Hunter Stieber",
    "winner_school": "Ohio State",
    "loser": "Steven Keith",
    "loser_school": "Harvard",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Richard Durso",
    "winner_school": "Franklin and Marshall",
    "loser": "Nick Dardanes",
    "loser_school": "Minnesota",
    "result": "TB-1 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Evan Henderson",
    "winner_school": "North Carolina",
    "loser": "Chris Mecate",
    "loser_school": "Old Dominion",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Luke Vaith",
    "loser_school": "Hofstra",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Michael Mangrum",
    "winner_school": "Oregon State",
    "loser": "Trevor Melde",
    "loser_school": "Rutgers",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Undrakhbayar Khishignyam",
    "winner_school": "The Citadel",
    "loser": "Zach Neibert",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Mark Ballweg",
    "winner_school": "Iowa",
    "loser": "Charles Cobb",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Joey Lazor",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:42"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Julian Feikert",
    "winner_school": "Oklahoma State",
    "loser": "Joseph Spisak",
    "loser_school": "Virginia",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "McCade Ford",
    "winner_school": "Wyoming",
    "loser": "Luke Goettl",
    "loser_school": "Iowa State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Brandon Nelsen",
    "winner_school": "Purdue",
    "loser": "Pasquale Greco",
    "loser_school": "Northwestern",
    "result": "Fall 4:37"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Frank Cimato",
    "winner_school": "Drexel",
    "loser": "Nathan Pennesi",
    "loser_school": "West Virginia",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Nicholas Hucke",
    "winner_school": "Missouri",
    "loser": "Dean Pavlou",
    "loser_school": "Chattanooga",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Anthony Salupo",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Daniel Neff",
    "winner_school": "Lock Haven",
    "loser": "Ridge Kiley",
    "loser_school": "Nebraska",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Bryan Pearsall",
    "winner_school": "Penn State",
    "loser": "Frank Goodwin",
    "loser_school": "Maryland",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Derek Valenti",
    "loser_school": "Virginia",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Jake Sueflohn",
    "winner_school": "Nebraska",
    "loser": "Nick Brascetta",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Steve Santos",
    "winner_school": "Columbia",
    "loser": "Eric Grajales",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Cole VonOhlen",
    "winner_school": "Air Force",
    "loser": "Dan Osterman",
    "loser_school": "Michigan State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Kevin Tao",
    "winner_school": "American",
    "loser": "Raymond Borja",
    "loser_school": "Navy",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Dylan Ness",
    "loser_school": "Minnesota",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Ivan Lopouchanski",
    "loser_school": "Purdue",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Nick Lester",
    "loser_school": "Oklahoma",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Christopher Villalonga",
    "loser_school": "Cornell",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Brandon Richardson",
    "winner_school": "Wyoming",
    "loser": "Ronnie Garbinsky",
    "loser_school": "Pittsburgh",
    "result": "Fall 4:44"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Alex Hudson",
    "winner_school": "Chattanooga",
    "loser": "Max Mayfield",
    "loser_school": "Iowa State",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Donnie Corby",
    "winner_school": "Central Michigan",
    "loser": "Alexander Richardson",
    "loser_school": "Old Dominion",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Tyler Bedelyon",
    "loser_school": "Clarion",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Andrew Alton",
    "winner_school": "Penn State",
    "loser": "Daniel Young",
    "loser_school": "Army",
    "result": "Fall 2:05"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "Josh Roosa",
    "winner_school": "Bloomsburg",
    "loser": "Blake Roulo",
    "loser_school": "Buffalo",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Josh Wilson",
    "winner_school": "Utah Valley",
    "loser": "Caleb Ervin",
    "loser_school": "Illinois",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "Scott Winston",
    "loser_school": "Rutgers",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Zac Cibula",
    "loser_school": "Rider",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Jedd Moore",
    "winner_school": "Virginia",
    "loser": "James Fleming",
    "loser_school": "Clarion",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "David Bonin",
    "winner_school": "Northern Iowa",
    "loser": "Kyle Bradley",
    "loser_school": "Missouri",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Georgi Ivanov",
    "winner_school": "Boise State",
    "loser": "Taylor Walsh",
    "loser_school": "Indiana",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Spartak Chino",
    "loser_school": "Ohio",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Josh Demas",
    "winner_school": "Ohio State",
    "loser": "Jesse Dong",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Joshua Kreimier",
    "loser_school": "Air Force",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Nestor Taffur",
    "winner_school": "Boston University",
    "loser": "Andy McCulley",
    "loser_school": "Wyoming",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Frank Hickman",
    "winner_school": "Bloomsburg",
    "loser": "Donnie Tasser",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Tommy Churchard",
    "winner_school": "Purdue",
    "loser": "Cody Pack",
    "loser_school": "South Dakota State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Bobby Barnhisel",
    "loser_school": "Navy",
    "result": "TF-1.5 6:04 (21-6)"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Daniel Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Joseph Napoli",
    "loser_school": "Lehigh",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Walter Peppelman",
    "winner_school": "Harvard",
    "loser": "Jake O`Hara",
    "loser_school": "Columbia",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Roger Pena",
    "winner_school": "Oregon State",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "Fall 2:29"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Matt Lester",
    "winner_school": "Oklahoma",
    "loser": "Matthew Frisch",
    "loser_school": "The Citadel",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Ryan Leblanc",
    "loser_school": "Indiana",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Josh Veltre",
    "loser_school": "Bloomsburg",
    "result": "TB-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Taylor Massa",
    "winner_school": "Michigan",
    "loser": "Steven Monk",
    "loser_school": "North Dakota State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma State",
    "loser": "Josh Condon",
    "loser_school": "Chattanooga",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Zach Toal",
    "loser_school": "Missouri",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Cody Yohn",
    "winner_school": "Minnesota",
    "loser": "Patrick Graham",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Conrad Polz",
    "winner_school": "Illinois",
    "loser": "Michael Moreno",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Zachary Strickland",
    "loser_school": "Appalachian State",
    "result": "Fall 2:42"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Mark Martin",
    "winner_school": "Ohio State",
    "loser": "Peyton Walsh",
    "loser_school": "Navy",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Bret Baumbach",
    "winner_school": "Stanford",
    "loser": "Nijel Jones",
    "loser_school": "NC State",
    "result": "MD 15-6"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Tyler Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Paul Hancock",
    "loser_school": "Army",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Pierce Harger",
    "winner_school": "Northwestern",
    "loser": "Johnny Greisheimer",
    "loser_school": "Edinboro",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Austin Wilson",
    "winner_school": "Nebraska",
    "loser": "Mark Lewandowski",
    "loser_school": "Buffalo",
    "result": "Fall 2:01"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Ramon Santiago",
    "winner_school": "Rider",
    "loser": "Josh Houldsworth",
    "loser_school": "Columbia",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Nick Moore",
    "winner_school": "Iowa",
    "loser": "Caleb Marsh",
    "loser_school": "Kent State",
    "result": "Fall 6:11"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "John Staudenmayer",
    "winner_school": "North Carolina",
    "loser": "Nicholas Visicaro",
    "loser_school": "Rutgers",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Jonathan Fausey",
    "loser_school": "Virginia",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Hunter Gamble",
    "loser_school": "Gardner-Webb",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Josh Asper",
    "winner_school": "Maryland",
    "loser": "John-Martin Cannon",
    "loser_school": "Buffalo",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Cody Walters",
    "loser_school": "Ohio",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Phillip Joseph",
    "loser_school": "Eastern Michigan",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Matt Mougin",
    "loser_school": "Northern Illinois",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Tanner Weatherman",
    "winner_school": "Iowa State",
    "loser": "Jordan Blanton",
    "loser_school": "Illinois",
    "result": "Dec 16-14"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Mathew Brown",
    "winner_school": "Penn State",
    "loser": "Nick Bonaccorsi",
    "loser_school": "Pittsburgh",
    "result": "Fall 1:30"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Stephen West",
    "winner_school": "Columbia",
    "loser": "Cody Weishoff",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Nathaniel Brown",
    "winner_school": "Lehigh",
    "loser": "Greg Zannetti",
    "loser_school": "Rutgers",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Austin Gabel",
    "winner_school": "Virginia Tech",
    "loser": "Mathew Miller",
    "loser_school": "Navy",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Ian Korb",
    "winner_school": "Penn",
    "loser": "Chad Welch",
    "loser_school": "Purdue",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Craig Kelliher",
    "winner_school": "Central Michigan",
    "loser": "Leroy Munster",
    "loser_school": "Northwestern",
    "result": "TB-1 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Bryce Hammond",
    "winner_school": "CSU Bakersfield",
    "loser": "Blake Stauffer",
    "loser_school": "Arizona State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Daniel Yates",
    "winner_school": "Michigan",
    "loser": "Lee Helbig",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Todd Porter",
    "winner_school": "Missouri",
    "loser": "Billy Curling",
    "loser_school": "Old Dominion",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Kevin Radford",
    "loser_school": "Arizona State",
    "result": "Fall 3:42"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Max Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Josh Ihnen",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Kevin Steinhaus",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Mason Bailey",
    "loser_school": "Navy",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Daniel Rinaldi",
    "loser_school": "Rutgers",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Mike Larson",
    "loser_school": "Missouri",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Jacob Swartz",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Alex Utley",
    "loser_school": "North Carolina",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Fred Garcia",
    "winner_school": "Lock Haven",
    "loser": "Canaan Bethea",
    "loser_school": "Penn",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Christopher Chionuma",
    "winner_school": "Oklahoma State",
    "loser": "MacKain Stoll",
    "loser_school": "North Dakota State",
    "result": "Fall 2:26"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Boaz Beard",
    "winner_school": "Iowa State",
    "loser": "Nick Vetterlein",
    "loser_school": "Virginia Tech",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Ty Vinson",
    "winner_school": "Oregon State",
    "loser": "John Rizqallah",
    "loser_school": "Michigan State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Cody Magrum",
    "winner_school": "Ohio State",
    "loser": "Casey Newburg",
    "loser_school": "Kent State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Ophir Bernstein",
    "winner_school": "Brown",
    "loser": "Cody Reed",
    "loser_school": "Binghamton",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Stephen Doty",
    "winner_school": "Virginia",
    "loser": "Shane Woods",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Tony Dallago",
    "winner_school": "Illinois",
    "loser": "Lucas Sheridan",
    "loser_school": "Indiana",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Phillip Wellington",
    "loser_school": "Ohio",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Micah Burak",
    "winner_school": "Penn",
    "loser": "Jake Meredith",
    "loser_school": "Arizona State",
    "result": "TB-2 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Taylor Meeks",
    "winner_school": "Oregon State",
    "loser": "Jackson Hein",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Alfonso Hernandez",
    "winner_school": "Wyoming",
    "loser": "Nick Whitenburg",
    "loser_school": "Eastern Michigan",
    "result": "TF-1.5 7:00 (19-4)"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Richard Perry",
    "loser_school": "Bloomsburg",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Blake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Kyven Gadson",
    "loser_school": "Iowa State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Nathan Schiedel",
    "loser_school": "Binghamton",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Brandon Palik",
    "loser_school": "Drexel",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "James Fox",
    "loser_school": "Harvard",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Nikolas Brown",
    "winner_school": "Chattanooga",
    "loser": "Jace Bennett",
    "loser_school": "Cornell",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Brent Haynes",
    "winner_school": "Missouri",
    "loser": "Maxwell Huntley",
    "loser_school": "Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Caleb Kolb",
    "winner_school": "Nebraska",
    "loser": "Alex Polizzi",
    "loser_school": "Northwestern",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Derrick Borlie",
    "winner_school": "Virginia Tech",
    "loser": "Bryce Barnes",
    "loser_school": "Army",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Braden Atwood",
    "loser_school": "Purdue",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Christian Boley",
    "winner_school": "Maryland",
    "loser": "Conner Hartmann",
    "loser_school": "Duke",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Michael Salopek",
    "winner_school": "Virginia",
    "loser": "Donald Mcneil",
    "loser_school": "Rider",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Dominque Bradley",
    "winner_school": "Missouri",
    "loser": "Matthew Gibson",
    "loser_school": "Iowa State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Zac Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Mike McClure",
    "loser_school": "Michigan State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Adam Chalfant",
    "loser_school": "Indiana",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Chad Hanke",
    "winner_school": "Oregon State",
    "loser": "Ernest James",
    "loser_school": "Edinboro",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "Jeremy Johnson",
    "loser_school": "Ohio",
    "result": "Fall 0:34"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "J.T Felix",
    "winner_school": "Boise State",
    "loser": "Bobby Telford",
    "loser_school": "Iowa",
    "result": "Inj. 0:02"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Connor Medbery",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Odie Delaney",
    "loser_school": "The Citadel",
    "result": "Fall 5:42"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Blake Herrin",
    "winner_school": "American",
    "loser": "Stryker Lane",
    "loser_school": "Cornell",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Levi Cooper",
    "winner_school": "Arizona State",
    "loser": "Riley Shaw",
    "loser_school": "Cleveland State",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Dan Scherer",
    "winner_school": "Stanford",
    "loser": "Jacob Kettler",
    "loser_school": "George Mason",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Kevin Innis",
    "winner_school": "Boston University",
    "loser": "William Smith",
    "loser_school": "Rutgers",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Benjamin Apland",
    "winner_school": "Michigan",
    "loser": "James Lawson",
    "loser_school": "Penn State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Joe Stolfi",
    "winner_school": "Bucknell",
    "loser": "Justin Grant",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "David Marone",
    "winner_school": "Virginia Tech",
    "loser": "Daniel Miller",
    "loser_school": "Navy",
    "result": "TB-1 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Evan Knutson",
    "winner_school": "North Dakota State",
    "loser": "Steven Graziano",
    "loser_school": "Penn",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "William Watterson",
    "loser_school": "Brown",
    "result": "Fall 5:32"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Steve Bonanno",
    "winner_school": "Hofstra",
    "loser": "Tyler Iwamura",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Evan Silver",
    "loser_school": "Stanford",
    "result": "SV-1 9-7"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Steve Mitcheff",
    "winner_school": "Kent State",
    "loser": "Joe DeAngelo",
    "loser_school": "NC State",
    "result": "SV-2 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Edward Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Christian Cullinan",
    "loser_school": "Central Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "Tyler Cox",
    "winner_school": "Wyoming",
    "loser": "Nikko Triggas",
    "loser_school": "Ohio State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Josh Martinez",
    "loser_school": "Air Force",
    "result": "Fall 1:07"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Sean Boyle",
    "winner_school": "Michigan",
    "loser": "Jade Rauser",
    "loser_school": "Utah Valley",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Jamie Franco",
    "winner_school": "Hofstra",
    "loser": "Joseph Ward",
    "loser_school": "North Carolina",
    "result": "TB-1 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Scotti Sentes",
    "winner_school": "Central Michigan",
    "loser": "Matt Bystol",
    "loser_school": "Columbia",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Jordan Conaway",
    "winner_school": "Penn State",
    "loser": "Dane Harlowe",
    "loser_school": "Boston University",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Rosario Bruno",
    "winner_school": "Michigan",
    "loser": "Randy Cruz",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Geoffrey Alexander",
    "winner_school": "Maryland",
    "loser": "Derek Steeley",
    "loser_school": "Binghamton",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "George DiCamillo",
    "winner_school": "Virginia",
    "loser": "Vincent Dellafave",
    "loser_school": "Rutgers",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Levi Wolfensperger",
    "winner_school": "Northern Iowa",
    "loser": "Mackenzie McGuire",
    "loser_school": "Kent State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Nick Wilcox",
    "winner_school": "Bloomsburg",
    "loser": "Shelton Mack",
    "loser_school": "Pittsburgh",
    "result": "TB-3 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Joey Lazor",
    "winner_school": "Northern Iowa",
    "loser": "Julian Feikert",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Charles Cobb",
    "winner_school": "Penn",
    "loser": "McCade Ford",
    "loser_school": "Wyoming",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Zach Neibert",
    "winner_school": "Virginia Tech",
    "loser": "Brandon Nelsen",
    "loser_school": "Purdue",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Trevor Melde",
    "winner_school": "Rutgers",
    "loser": "Frank Cimato",
    "loser_school": "Drexel",
    "result": "Fall 1:29"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Nicholas Hucke",
    "winner_school": "Missouri",
    "loser": "Luke Vaith",
    "loser_school": "Hofstra",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Chris Mecate",
    "loser_school": "Old Dominion",
    "result": "Fall 4:13"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Daniel Neff",
    "loser_school": "Lock Haven",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Steven Keith",
    "winner_school": "Harvard",
    "loser": "Bryan Pearsall",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Nick Lester",
    "loser_school": "Oklahoma",
    "result": "Fall 0:59"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Ivan Lopouchanski",
    "winner_school": "Purdue",
    "loser": "Brandon Richardson",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Alex Hudson",
    "loser_school": "Chattanooga",
    "result": "Fall 2:30"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Raymond Borja",
    "winner_school": "Navy",
    "loser": "Donnie Corby",
    "loser_school": "Central Michigan",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Dan Osterman",
    "loser_school": "Michigan State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Andrew Alton",
    "loser_school": "Penn State",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "Josh Roosa",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Josh Wilson",
    "winner_school": "Utah Valley",
    "loser": "Derek Valenti",
    "loser_school": "Virginia",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Nestor Taffur",
    "winner_school": "Boston University",
    "loser": "Joshua Kreimier",
    "loser_school": "Air Force",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Jesse Dong",
    "winner_school": "Virginia Tech",
    "loser": "Frank Hickman",
    "loser_school": "Bloomsburg",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Tommy Churchard",
    "winner_school": "Purdue",
    "loser": "Spartak Chino",
    "loser_school": "Ohio",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Taylor Walsh",
    "loser_school": "Indiana",
    "result": "MD 19-8"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Daniel Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Kyle Bradley",
    "loser_school": "Missouri",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Walter Peppelman",
    "loser_school": "Harvard",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Roger Pena",
    "winner_school": "Oregon State",
    "loser": "Zac Cibula",
    "loser_school": "Rider",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Scott Winston",
    "winner_school": "Rutgers",
    "loser": "Matt Lester",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Mark Martin",
    "winner_school": "Ohio State",
    "loser": "Zachary Strickland",
    "loser_school": "Appalachian State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Bret Baumbach",
    "loser_school": "Stanford",
    "result": "Fall 3:37"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Patrick Graham",
    "winner_school": "Oklahoma",
    "loser": "Tyler Wilps",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Zach Toal",
    "winner_school": "Missouri",
    "loser": "Pierce Harger",
    "loser_school": "Northwestern",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Austin Wilson",
    "winner_school": "Nebraska",
    "loser": "Josh Condon",
    "loser_school": "Chattanooga",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Ramon Santiago",
    "loser_school": "Rider",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Josh Veltre",
    "winner_school": "Bloomsburg",
    "loser": "Nick Moore",
    "loser_school": "Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "John Staudenmayer",
    "winner_school": "North Carolina",
    "loser": "Ryan Leblanc",
    "loser_school": "Indiana",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Nick Bonaccorsi",
    "winner_school": "Pittsburgh",
    "loser": "Stephen West",
    "loser_school": "Columbia",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Nathaniel Brown",
    "loser_school": "Lehigh",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Matt Mougin",
    "winner_school": "Northern Illinois",
    "loser": "Austin Gabel",
    "loser_school": "Virginia Tech",
    "result": "Inj. 1:21"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Ian Korb",
    "winner_school": "Penn",
    "loser": "Phillip Joseph",
    "loser_school": "Eastern Michigan",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Cody Walters",
    "winner_school": "Ohio",
    "loser": "Craig Kelliher",
    "loser_school": "Central Michigan",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "John-Martin Cannon",
    "winner_school": "Buffalo",
    "loser": "Bryce Hammond",
    "loser_school": "CSU Bakersfield",
    "result": "TB-1 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Daniel Yates",
    "winner_school": "Michigan",
    "loser": "Hunter Gamble",
    "loser_school": "Gardner-Webb",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Todd Porter",
    "winner_school": "Missouri",
    "loser": "Jonathan Fausey",
    "loser_school": "Virginia",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Fred Garcia",
    "winner_school": "Lock Haven",
    "loser": "Alex Utley",
    "loser_school": "North Carolina",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Christopher Chionuma",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Mike Larson",
    "winner_school": "Missouri",
    "loser": "Boaz Beard",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Daniel Rinaldi",
    "winner_school": "Rutgers",
    "loser": "Ty Vinson",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Mason Bailey",
    "winner_school": "Navy",
    "loser": "Cody Magrum",
    "loser_school": "Ohio State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Ophir Bernstein",
    "loser_school": "Brown",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Stephen Doty",
    "loser_school": "Virginia",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Tony Dallago",
    "winner_school": "Illinois",
    "loser": "Kevin Radford",
    "loser_school": "Arizona State",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "Brandon Palik",
    "loser_school": "Drexel",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Nathan Schiedel",
    "winner_school": "Binghamton",
    "loser": "Nikolas Brown",
    "loser_school": "Chattanooga",
    "result": "Fall 6:12"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Brent Haynes",
    "loser_school": "Missouri",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Richard Perry",
    "winner_school": "Bloomsburg",
    "loser": "Caleb Kolb",
    "loser_school": "Nebraska",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Derrick Borlie",
    "winner_school": "Virginia Tech",
    "loser": "Nick Whitenburg",
    "loser_school": "Eastern Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Jackson Hein",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Christian Boley",
    "winner_school": "Maryland",
    "loser": "Jake Meredith",
    "loser_school": "Arizona State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Phillip Wellington",
    "winner_school": "Ohio",
    "loser": "Michael Salopek",
    "loser_school": "Virginia",
    "result": "Fall 6:27"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Odie Delaney",
    "winner_school": "The Citadel",
    "loser": "Blake Herrin",
    "loser_school": "American",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Levi Cooper",
    "winner_school": "Arizona State",
    "loser": "Connor Medbery",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Dan Scherer",
    "winner_school": "Stanford",
    "loser": "Bobby Telford",
    "loser_school": "Iowa",
    "result": "Inj. 0:00"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Kevin Innis",
    "loser_school": "Boston University",
    "result": "Fall 4:12"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Benjamin Apland",
    "winner_school": "Michigan",
    "loser": "Ernest James",
    "loser_school": "Edinboro",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Joe Stolfi",
    "winner_school": "Bucknell",
    "loser": "Adam Chalfant",
    "loser_school": "Indiana",
    "result": "Fall 6:38"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Mike McClure",
    "winner_school": "Michigan State",
    "loser": "David Marone",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Matthew Gibson",
    "winner_school": "Iowa State",
    "loser": "Evan Knutson",
    "loser_school": "North Dakota State",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Matthew Snyder",
    "loser_school": "Virginia",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Dominic Parisi",
    "loser_school": "Appalachian State",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Matt McDonough",
    "loser_school": "Iowa",
    "result": "SV-1 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Nathan Kraisser",
    "loser_school": "North Carolina",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Steve Bonanno",
    "loser_school": "Hofstra",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Steve Mitcheff",
    "loser_school": "Kent State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Tyler Cox",
    "winner_school": "Wyoming",
    "loser": "Edward Klimara",
    "loser_school": "Oklahoma State",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Sean Boyle",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Cody Brewer",
    "loser_school": "Oklahoma",
    "result": "TF-1.5 3:43 (17-1)"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "Christopher Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 11-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Nathan McCormick",
    "loser_school": "Missouri",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Jonathon Morrison",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Scotti Sentes",
    "winner_school": "Central Michigan",
    "loser": "Jamie Franco",
    "loser_school": "Hofstra",
    "result": "Fall 2:25"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Jordan Conaway",
    "winner_school": "Penn State",
    "loser": "Rosario Bruno",
    "loser_school": "Michigan",
    "result": "Fall 6:17"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "George DiCamillo",
    "winner_school": "Virginia",
    "loser": "Geoffrey Alexander",
    "loser_school": "Maryland",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Levi Wolfensperger",
    "winner_school": "Northern Iowa",
    "loser": "Nick Wilcox",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:56"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Hunter Stieber",
    "winner_school": "Ohio State",
    "loser": "Richard Durso",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 9-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Evan Henderson",
    "loser_school": "North Carolina",
    "result": "MD 13-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Undrakhbayar Khishignyam",
    "winner_school": "The Citadel",
    "loser": "Michael Mangrum",
    "loser_school": "Oregon State",
    "result": "TB-1 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Mark Ballweg",
    "loser_school": "Iowa",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Joey Lazor",
    "winner_school": "Northern Iowa",
    "loser": "Charles Cobb",
    "loser_school": "Penn",
    "result": "MD 15-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Zach Neibert",
    "winner_school": "Virginia Tech",
    "loser": "Trevor Melde",
    "loser_school": "Rutgers",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Nicholas Hucke",
    "loser_school": "Missouri",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Steven Keith",
    "loser_school": "Harvard",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Jake Sueflohn",
    "loser_school": "Nebraska",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Steve Santos",
    "winner_school": "Columbia",
    "loser": "Cole VonOhlen",
    "loser_school": "Air Force",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Kevin Tao",
    "loser_school": "American",
    "result": "TB-1 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Scott Sakaguchi",
    "loser_school": "Oregon State",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Ivan Lopouchanski",
    "winner_school": "Purdue",
    "loser": "David Habat",
    "loser_school": "Edinboro",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Raymond Borja",
    "loser_school": "Navy",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Donald Vinson",
    "winner_school": "Binghamton",
    "loser": "Eric Grajales",
    "loser_school": "Michigan",
    "result": "MD 12-0"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "Josh Wilson",
    "loser_school": "Utah Valley",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "Dylan Alton",
    "loser_school": "Penn State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "David Bonin",
    "winner_school": "Northern Iowa",
    "loser": "Jedd Moore",
    "loser_school": "Virginia",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Georgi Ivanov",
    "loser_school": "Boise State",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Josh Demas",
    "loser_school": "Ohio State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Jesse Dong",
    "winner_school": "Virginia Tech",
    "loser": "Nestor Taffur",
    "loser_school": "Boston University",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Tommy Churchard",
    "loser_school": "Purdue",
    "result": "Fall 3:31"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Daniel Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Roger Pena",
    "winner_school": "Oregon State",
    "loser": "Scott Winston",
    "loser_school": "Rutgers",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Nicholas Sulzer",
    "loser_school": "Virginia",
    "result": "MD 13-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma State",
    "loser": "Taylor Massa",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Cody Yohn",
    "loser_school": "Minnesota",
    "result": "SV-2 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Conrad Polz",
    "loser_school": "Illinois",
    "result": "Fall 0:24"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Mark Martin",
    "loser_school": "Ohio State",
    "result": "Fall 4:28"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Patrick Graham",
    "winner_school": "Oklahoma",
    "loser": "Zach Toal",
    "loser_school": "Missouri",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Austin Wilson",
    "loser_school": "Nebraska",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "John Staudenmayer",
    "winner_school": "North Carolina",
    "loser": "Josh Veltre",
    "loser_school": "Bloomsburg",
    "result": "TB-1 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Nick Heflin",
    "loser_school": "Ohio State",
    "result": "TB-1 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Mathew Brown",
    "winner_school": "Penn State",
    "loser": "Tanner Weatherman",
    "loser_school": "Iowa State",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Nick Bonaccorsi",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Matt Mougin",
    "winner_school": "Northern Illinois",
    "loser": "Ian Korb",
    "loser_school": "Penn",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Cody Walters",
    "winner_school": "Ohio",
    "loser": "John-Martin Cannon",
    "loser_school": "Buffalo",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Todd Porter",
    "winner_school": "Missouri",
    "loser": "Daniel Yates",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Max Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "MD 11-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Ethen Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Ryan Loder",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Jimmy Sheptock",
    "loser_school": "Maryland",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Fred Garcia",
    "loser_school": "Lock Haven",
    "result": "Fall 8:30"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Mike Larson",
    "winner_school": "Missouri",
    "loser": "Daniel Rinaldi",
    "loser_school": "Rutgers",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Mason Bailey",
    "loser_school": "Navy",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Josh Ihnen",
    "winner_school": "Nebraska",
    "loser": "Tony Dallago",
    "loser_school": "Illinois",
    "result": "Dec 9-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Micah Burak",
    "loser_school": "Penn",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Taylor Meeks",
    "winner_school": "Oregon State",
    "loser": "Alfonso Hernandez",
    "loser_school": "Wyoming",
    "result": "Fall 4:54"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Blake Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Scott Schiller",
    "loser_school": "Minnesota",
    "result": "Fall 2:49"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "Nathan Schiedel",
    "loser_school": "Binghamton",
    "result": "Fall 2:34"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Richard Perry",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Derrick Borlie",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Christian Boley",
    "winner_school": "Maryland",
    "loser": "Phillip Wellington",
    "loser_school": "Ohio",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Dominque Bradley",
    "winner_school": "Missouri",
    "loser": "Zac Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "TB-1 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Chad Hanke",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "J.T Felix",
    "loser_school": "Boise State",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Odie Delaney",
    "winner_school": "The Citadel",
    "loser": "Levi Cooper",
    "loser_school": "Arizona State",
    "result": "Fall 5:18"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Dan Scherer",
    "loser_school": "Stanford",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Joe Stolfi",
    "winner_school": "Bucknell",
    "loser": "Benjamin Apland",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Matthew Gibson",
    "winner_school": "Iowa State",
    "loser": "Mike McClure",
    "loser_school": "Michigan State",
    "result": "Fall 1:34"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Dominic Parisi",
    "loser_school": "Appalachian State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "Matthew Snyder",
    "loser_school": "Virginia",
    "result": "MD 16-5"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Tyler Cox",
    "winner_school": "Wyoming",
    "loser": "Nathan Kraisser",
    "loser_school": "North Carolina",
    "result": "MD 19-7"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Matt McDonough",
    "loser_school": "Iowa",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Scotti Sentes",
    "loser_school": "Central Michigan",
    "result": "SV-1 11-9"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Jordan Conaway",
    "loser_school": "Penn State",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Jonathon Morrison",
    "winner_school": "Oklahoma State",
    "loser": "George DiCamillo",
    "loser_school": "Virginia",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Nathan McCormick",
    "winner_school": "Missouri",
    "loser": "Levi Wolfensperger",
    "loser_school": "Northern Iowa",
    "result": "Fall 4:54"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Evan Henderson",
    "winner_school": "North Carolina",
    "loser": "Joey Lazor",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:42"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Zach Neibert",
    "winner_school": "Virginia Tech",
    "loser": "Richard Durso",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Mark Ballweg",
    "loser_school": "Iowa",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Michael Mangrum",
    "loser_school": "Oregon State",
    "result": "TB-1 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Ivan Lopouchanski",
    "winner_school": "Purdue",
    "loser": "Cole VonOhlen",
    "loser_school": "Air Force",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Jake Sueflohn",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Donald Vinson",
    "loser_school": "Binghamton",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "Kevin Tao",
    "loser_school": "American",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Jedd Moore",
    "winner_school": "Virginia",
    "loser": "Jesse Dong",
    "loser_school": "Virginia Tech",
    "result": "SV-1 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Dylan Alton",
    "loser_school": "Penn State",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "James Fleming",
    "winner_school": "Clarion",
    "loser": "Josh Demas",
    "loser_school": "Ohio State",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Roger Pena",
    "winner_school": "Oregon State",
    "loser": "Georgi Ivanov",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Taylor Massa",
    "loser_school": "Michigan",
    "result": "TF-1.5 0:00 (17-2)"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Patrick Graham",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Conrad Polz",
    "winner_school": "Illinois",
    "loser": "Steven Monk",
    "loser_school": "North Dakota State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Cody Yohn",
    "winner_school": "Minnesota",
    "loser": "John Staudenmayer",
    "loser_school": "North Carolina",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Josh Asper",
    "loser_school": "Maryland",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Matt Mougin",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Cody Walters",
    "winner_school": "Ohio",
    "loser": "Tanner Weatherman",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Todd Porter",
    "loser_school": "Missouri",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Jacob Swartz",
    "loser_school": "Boise State",
    "result": "TB-2 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Mike Larson",
    "winner_school": "Missouri",
    "loser": "Max Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Kevin Steinhaus",
    "loser_school": "Minnesota",
    "result": "SV-1 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Josh Ihnen",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Alfonso Hernandez",
    "winner_school": "Wyoming",
    "loser": "Nathan Burak",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Micah Burak",
    "loser_school": "Penn",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Mario Gonzalez",
    "loser_school": "Illinois",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Blake Rosholt",
    "winner_school": "Oklahoma State",
    "loser": "Christian Boley",
    "loser_school": "Maryland",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Odie Delaney",
    "winner_school": "The Citadel",
    "loser": "Chad Hanke",
    "loser_school": "Oregon State",
    "result": "Fall 4:22"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Zac Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Jeremy Johnson",
    "loser_school": "Ohio",
    "result": "Fall 6:43"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Joe Stolfi",
    "loser_school": "Bucknell",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Matthew Gibson",
    "winner_school": "Iowa State",
    "loser": "J.T Felix",
    "loser_school": "Boise State",
    "result": "MD 15-2"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Alan Waters",
    "loser_school": "Missouri",
    "result": "TB-2 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Nahshon Garrett",
    "loser_school": "Cornell",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Jarrod Garnett",
    "winner_school": "Virginia Tech",
    "loser": "David Thorn",
    "loser_school": "Minnesota",
    "result": "Fall 3:55"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Tyler Cox",
    "loser_school": "Wyoming",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "A.J. Schopp",
    "loser_school": "Edinboro",
    "result": "TF-1.5 7:00 (18-2)"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Tyler Graff",
    "loser_school": "Wisconsin",
    "result": "SV-2 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Cody Brewer",
    "loser_school": "Oklahoma",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Jonathon Morrison",
    "winner_school": "Oklahoma State",
    "loser": "Nathan McCormick",
    "loser_school": "Missouri",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Hunter Stieber",
    "loser_school": "Ohio State",
    "result": "Dec 7-6"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Undrakhbayar Khishignyam",
    "loser_school": "The Citadel",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Evan Henderson",
    "winner_school": "North Carolina",
    "loser": "Zach Neibert",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Nick Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 6-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Steve Santos",
    "loser_school": "Columbia",
    "result": "MD 14-3"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Jason Chamberlain",
    "winner_school": "Boise State",
    "loser": "Drake Houdashelt",
    "loser_school": "Missouri",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Ivan Lopouchanski",
    "loser_school": "Purdue",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Nick Brascetta",
    "loser_school": "Virginia Tech",
    "result": "Dec 8-5"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Jason Welch",
    "winner_school": "Northwestern",
    "loser": "David Bonin",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Alex Dieringer",
    "loser_school": "Oklahoma State",
    "result": "TB-2 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Jedd Moore",
    "winner_school": "Virginia",
    "loser": "James Green",
    "loser_school": "Nebraska",
    "result": "Fall 6:15"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Roger Pena",
    "winner_school": "Oregon State",
    "loser": "James Fleming",
    "loser_school": "Clarion",
    "result": "MD 8-0"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "Tyler Caldwell",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Peter Yates",
    "loser_school": "Virginia Tech",
    "result": "Fall 3:25"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Nicholas Sulzer",
    "loser_school": "Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Conrad Polz",
    "winner_school": "Illinois",
    "loser": "Cody Yohn",
    "loser_school": "Minnesota",
    "result": "TB-1 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Robert Kokesh",
    "loser_school": "Nebraska",
    "result": "SV-1 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Mathew Brown",
    "winner_school": "Penn State",
    "loser": "Logan Storley",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Jordan Blanton",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Cody Walters",
    "loser_school": "Ohio",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Steve Bosak",
    "loser_school": "Cornell",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Robert Hamlin",
    "winner_school": "Lehigh",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Mike Larson",
    "loser_school": "Missouri",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Ryan Loder",
    "loser_school": "Northern Iowa",
    "result": "TB-1 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Dustin Kilgore",
    "winner_school": "Kent State",
    "loser": "Taylor Meeks",
    "loser_school": "Oregon State",
    "result": "Dec 8-6"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Matthew Wilps",
    "loser_school": "Pittsburgh",
    "result": "TB-2 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Alfonso Hernandez",
    "loser_school": "Wyoming",
    "result": "MD 12-4"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Blake Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Dominque Bradley",
    "loser_school": "Missouri",
    "result": "SV-1 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Alan Gelogaev",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Zac Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Odie Delaney",
    "loser_school": "The Citadel",
    "result": "MD 9-1"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Jarod Trice",
    "winner_school": "Central Michigan",
    "loser": "Matthew Gibson",
    "loser_school": "Iowa State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Jarrod Garnett",
    "loser_school": "Virginia Tech",
    "result": "Dec 13-9"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Trent Sprenkle",
    "loser_school": "North Dakota State",
    "result": "Fall 1:59"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Christopher Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "Jonathon Morrison",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Undrakhbayar Khishignyam",
    "winner_school": "The Citadel",
    "loser": "Evan Henderson",
    "loser_school": "North Carolina",
    "result": "Fall 1:08"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Hunter Stieber",
    "winner_school": "Ohio State",
    "loser": "Michael Nevinger",
    "loser_school": "Cornell",
    "result": "MD 9-0"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Drake Houdashelt",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Steve Santos",
    "winner_school": "Columbia",
    "loser": "Scott Sakaguchi",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Jedd Moore",
    "loser_school": "Virginia",
    "result": "MD 12-2"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "David Bonin",
    "winner_school": "Northern Iowa",
    "loser": "Roger Pena",
    "loser_school": "Oregon State",
    "result": "Fall 5:39"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Peter Yates",
    "winner_school": "Virginia Tech",
    "loser": "Michael Moreno",
    "loser_school": "Iowa State",
    "result": "MD 12-2"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma State",
    "loser": "Conrad Polz",
    "loser_school": "Illinois",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Nick Heflin",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Ben Bennett",
    "winner_school": "Central Michigan",
    "loser": "Ethen Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Jimmy Sheptock",
    "loser_school": "Maryland",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Kyven Gadson",
    "loser_school": "Iowa State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Taylor Meeks",
    "winner_school": "Oregon State",
    "loser": "Scott Schiller",
    "loser_school": "Minnesota",
    "result": "MD 11-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "Zac Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Dominque Bradley",
    "winner_school": "Missouri",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 601,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Nicholas Megaludis",
    "loser_school": "Penn State",
    "result": "Dec 7-4"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Alan Waters",
    "loser_school": "Missouri",
    "result": "Dec 6-1"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Trent Sprenkle",
    "winner_school": "North Dakota State",
    "loser": "Jarrod Garnett",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-2"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 604,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Tyler Cox",
    "loser_school": "Wyoming",
    "result": "Fall 1:17"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 605,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Tony Ramos",
    "loser_school": "Iowa",
    "result": "Dec 7-4"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "A.J. Schopp",
    "loser_school": "Edinboro",
    "result": "Dec 6-3"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 607,
    "winner": "Jonathon Morrison",
    "winner_school": "Oklahoma State",
    "loser": "Christopher Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 608,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Nathan McCormick",
    "loser_school": "Missouri",
    "result": "Dec 15-10"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 609,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Mitchell Port",
    "loser_school": "Edinboro",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 610,
    "winner": "Hunter Stieber",
    "winner_school": "Ohio State",
    "loser": "Undrakhbayar Khishignyam",
    "loser_school": "The Citadel",
    "result": "MD 12-4"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 611,
    "winner": "Michael Nevinger",
    "winner_school": "Cornell",
    "loser": "Evan Henderson",
    "loser_school": "North Carolina",
    "result": "Dec 9-2"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 612,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Zach Neibert",
    "loser_school": "Virginia Tech",
    "result": "Dec 9-5"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 613,
    "winner": "Jordan Oliver",
    "winner_school": "Oklahoma State",
    "loser": "Jason Chamberlain",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 614,
    "winner": "Steve Santos",
    "winner_school": "Columbia",
    "loser": "Dylan Ness",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 615,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Drake Houdashelt",
    "loser_school": "Missouri",
    "result": "Dec 6-5"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 616,
    "winner": "Ivan Lopouchanski",
    "winner_school": "Purdue",
    "loser": "Nick Brascetta",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 617,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Jason Welch",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 618,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "David Bonin",
    "loser_school": "Northern Iowa",
    "result": "Fall 1:39"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 619,
    "winner": "Roger Pena",
    "winner_school": "Oregon State",
    "loser": "Jedd Moore",
    "loser_school": "Virginia",
    "result": "MD 11-2"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 620,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "James Fleming",
    "loser_school": "Clarion",
    "result": "MD 14-4"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 621,
    "winner": "Kyle Dake",
    "winner_school": "Cornell",
    "loser": "David Taylor",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 622,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma State",
    "loser": "Peter Yates",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-1"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 623,
    "winner": "Conrad Polz",
    "winner_school": "Illinois",
    "loser": "Michael Moreno",
    "loser_school": "Iowa State",
    "result": "Dec 7-5"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 624,
    "winner": "Cody Yohn",
    "winner_school": "Minnesota",
    "loser": "Nicholas Sulzer",
    "loser_school": "Virginia",
    "result": "TB-1 8-5"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 625,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Mathew Brown",
    "loser_school": "Penn State",
    "result": "TB-1 2-1"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 626,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Logan Storley",
    "loser_school": "Minnesota",
    "result": "SV-1 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 627,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "Fall 2:10"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 628,
    "winner": "Jordan Blanton",
    "winner_school": "Illinois",
    "loser": "Cody Walters",
    "loser_school": "Ohio",
    "result": "Dec 4-3"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 629,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Robert Hamlin",
    "loser_school": "Lehigh",
    "result": "MD 12-4"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 630,
    "winner": "Steve Bosak",
    "winner_school": "Cornell",
    "loser": "Ben Bennett",
    "loser_school": "Central Michigan",
    "result": "Dec 2-0"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 631,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Jimmy Sheptock",
    "loser_school": "Maryland",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 632,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Mike Larson",
    "loser_school": "Missouri",
    "result": "MD 8-0"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 633,
    "winner": "Quentin Wright",
    "winner_school": "Penn State",
    "loser": "Dustin Kilgore",
    "loser_school": "Kent State",
    "result": "Dec 8-6"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 634,
    "winner": "Matthew Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Taylor Meeks",
    "loser_school": "Oregon State",
    "result": "TF-1.5 4:02 (18-2)"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 635,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Kyven Gadson",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 636,
    "winner": "Alfonso Hernandez",
    "winner_school": "Wyoming",
    "loser": "Blake Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 637,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Michael McMullan",
    "loser_school": "Northwestern",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 638,
    "winner": "Alan Gelogaev",
    "winner_school": "Oklahoma State",
    "loser": "Dominque Bradley",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 639,
    "winner": "Zac Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Jarod Trice",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 640,
    "winner": "Odie Delaney",
    "winner_school": "The Citadel",
    "loser": "Matthew Gibson",
    "loser_school": "Iowa State",
    "result": "Fall 2:44"
  }
];
