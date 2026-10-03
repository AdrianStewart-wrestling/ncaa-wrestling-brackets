// 2014 NCAA Division I Wrestling Championships — transcribed from the official NCAA bracket PDF (see FREEZE.md / transcription report).
// Result text exactly as printed. School names from the year-aware school-code map (school-codes.json).
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Brandon Jeske",
    "winner_school": "Old Dominion",
    "loser": "Corey Keener",
    "loser_school": "Central Michigan",
    "result": "Fall 5:25"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Shelton Mack",
    "winner_school": "Pittsburgh",
    "loser": "Devon Lotito",
    "loser_school": "Cal Poly",
    "result": "Dec 2-1"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Gabe Moreno",
    "winner_school": "Iowa State",
    "loser": "Nick Lester",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Cody Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Kevin Birmingham",
    "loser_school": "Davidson",
    "result": "Dec 10-7"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Brian Murphy",
    "winner_school": "Michigan",
    "loser": "Justin DeAngelis",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Ramon Santiago",
    "winner_school": "Rider",
    "loser": "Mitchell Wightman",
    "loser_school": "Boston University",
    "result": "Dec 7-0"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Joe Latham",
    "winner_school": "Oregon State",
    "loser": "Brian Harvey",
    "loser_school": "Army",
    "result": "Dec 7-6"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Fred Garcia",
    "winner_school": "Lock Haven",
    "loser": "Lucas Sheridan",
    "loser_school": "Indiana",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Blake Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Ty Walz",
    "winner_school": "Virginia Tech",
    "loser": "Nick Tavanello",
    "loser_school": "Ohio State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Jade Rauser",
    "loser_school": "Utah Valley",
    "result": "Fall 6:53"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Joey Dance",
    "winner_school": "Virginia Tech",
    "loser": "Paul Petrov",
    "loser_school": "Bucknell",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Tyler Cox",
    "winner_school": "Wyoming",
    "loser": "Caleb Richardson",
    "loser_school": "Penn",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Cory Clark",
    "winner_school": "Iowa",
    "loser": "Kory Mines",
    "loser_school": "Edinboro",
    "result": "TF-1.5 5:14 (18-2)"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Dylan Peters",
    "winner_school": "Northern Iowa",
    "loser": "Nick Roberts",
    "loser_school": "Ohio State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Tim Lambert",
    "winner_school": "Nebraska",
    "loser": "David White",
    "loser_school": "Binghamton",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Earl Hall",
    "winner_school": "Iowa State",
    "loser": "Evan Silver",
    "loser_school": "Stanford",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Josh Martinez",
    "winner_school": "Air Force",
    "loser": "Nathan Kraisser",
    "loser_school": "North Carolina",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Darian Cruz",
    "loser_school": "Lehigh",
    "result": "TF-1.5 7:00 (18-3)"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Edward Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Dominic Parisi",
    "loser_school": "Appalachian State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Robert Deutsch",
    "winner_school": "Rider",
    "loser": "Cory Stainbrook",
    "loser_school": "West Virginia",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Nick Herrmann",
    "loser_school": "Virginia",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Jared Germaine",
    "winner_school": "Eastern Michigan",
    "loser": "Bradley Taylor",
    "loser_school": "Wisconsin",
    "result": "Fall 0:46"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "David Terao",
    "winner_school": "American",
    "loser": "Brandon Jeske",
    "loser_school": "Old Dominion",
    "result": "TB-1 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Anthony Zanetta",
    "winner_school": "Pittsburgh",
    "loser": "Conor Youtsey",
    "loser_school": "Michigan",
    "result": "Fall 3:44"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Jamie Franco",
    "loser_school": "Hofstra",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Joe Colon",
    "winner_school": "Northern Iowa",
    "loser": "Vincent Dellefave",
    "loser_school": "Rutgers",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Matt Manley",
    "winner_school": "Missouri",
    "loser": "Mackenzie McGuire",
    "loser_school": "Kent State",
    "result": "SV-2 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Johnni DiJulius",
    "winner_school": "Ohio State",
    "loser": "Tyler Goodwin",
    "loser_school": "Maryland",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Nick Smith",
    "loser_school": "Northern Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Dominick Malone",
    "loser_school": "Northwestern",
    "result": "TF-1.5 6:21 (25-9)"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Joe Roth",
    "winner_school": "Central Michigan",
    "loser": "Kevin Devoy",
    "loser_school": "Drexel",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Vincent Pizzuto",
    "loser_school": "Eastern Michigan",
    "result": "TF-1.5 7:00 (18-3)"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Jonathon Morrison",
    "winner_school": "Oklahoma State",
    "loser": "James Gulibon",
    "loser_school": "Penn State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Shelton Mack",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Zane Richards",
    "winner_school": "Illinois",
    "loser": "Nick Wilcox",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Chuck Zeisloft",
    "loser_school": "Rider",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Gregory Rinker",
    "loser_school": "Air Force",
    "result": "TF-1.5 7:00 (17-2)"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Cash Quiroga",
    "winner_school": "Purdue",
    "loser": "Dennis Gustafson",
    "loser_school": "Virginia Tech",
    "result": "Fall 4:51"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Nick Soto",
    "winner_school": "Chattanooga",
    "loser": "Joey Palmer",
    "loser_school": "Oregon State",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Rosario Bruno",
    "winner_school": "Michigan",
    "loser": "Mark Grey",
    "loser_school": "Cornell",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Aaron (A.J.) Schopp",
    "winner_school": "Edinboro",
    "loser": "Colton Rasche",
    "loser_school": "Navy",
    "result": "Fall 4:55"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Gabe Moreno",
    "loser_school": "Iowa State",
    "result": "Fall 2:24"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Laike Gardner",
    "winner_school": "Lehigh",
    "loser": "Joseph Spisak",
    "loser_school": "Virginia",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Evan Henderson",
    "winner_school": "North Carolina",
    "loser": "Colin Johnston",
    "loser_school": "West Virginia",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Luke Vaith",
    "winner_school": "Hofstra",
    "loser": "Steven Rodrigues",
    "loser_school": "Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Chris Mecate",
    "winner_school": "Old Dominion",
    "loser": "Joey Delgado",
    "loser_school": "Oregon State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Richard Durso",
    "winner_school": "Franklin and Marshall",
    "loser": "Shyhiem Brown",
    "loser_school": "Maryland",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Stephen Dutton III",
    "winner_school": "Michigan",
    "loser": "Josh Dziewa",
    "loser_school": "Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Nick Flannery",
    "loser_school": "Buffalo",
    "result": "Fall 3:53"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Zain Retherford",
    "winner_school": "Penn State",
    "loser": "Undrakhbayar Khishignyam",
    "loser_school": "The Citadel",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Edgar Bright",
    "winner_school": "Pittsburgh",
    "loser": "Tyler Scotton",
    "loser_school": "Boston University",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Joey Lazor",
    "winner_school": "Northern Iowa",
    "loser": "Sam Speno",
    "loser_school": "NC State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Danny Sabatello",
    "loser_school": "Purdue",
    "result": "SV-1 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Zach Horan",
    "winner_school": "Central Michigan",
    "loser": "Michael Nevinger",
    "loser_school": "Cornell",
    "result": "SV-1 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Todd Preston",
    "winner_school": "Harvard",
    "loser": "Daniel Neff",
    "loser_school": "Lock Haven",
    "result": "TB-1 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Anthony Collica",
    "winner_school": "Oklahoma State",
    "loser": "Avery Garner",
    "loser_school": "Utah Valley",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Lavion Mayes",
    "loser_school": "Missouri",
    "result": "Fall 2:48"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Alex Kocer",
    "loser_school": "South Dakota State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Alexander Richardson",
    "winner_school": "Old Dominion",
    "loser": "Justin Arthur",
    "loser_school": "Clarion",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Michael Depalma",
    "loser_school": "Kent State",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Macaulay Maldarelli",
    "loser_school": "Lock Haven",
    "result": "MD 16-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "Bryce Busler",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "James English",
    "winner_school": "Penn State",
    "loser": "Dylan Cottrell",
    "loser_school": "Appalachian State",
    "result": "TB-1 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Brody Grothus",
    "winner_school": "Iowa",
    "loser": "Mike Morales",
    "loser_school": "West Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Tywan Claxton",
    "loser_school": "Ohio",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Christopher Villalonga",
    "winner_school": "Cornell",
    "loser": "Mike Racciato",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Rylan Lubeck",
    "loser_school": "Wisconsin",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Joshua Kindig",
    "winner_school": "Oklahoma State",
    "loser": "Ian Paddock",
    "loser_school": "Ohio State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Jake Sueflohn",
    "winner_school": "Nebraska",
    "loser": "Christian Barber",
    "loser_school": "North Carolina",
    "result": "TF-1.5 6:51 (16-0)"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Augustus Sako",
    "winner_school": "Virginia",
    "loser": "Robert Jillard",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Zach Neibert",
    "winner_school": "Virginia Tech",
    "loser": "Ken Theobold",
    "loser_school": "Rutgers",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Mitchell Minotti",
    "winner_school": "Lehigh",
    "loser": "Cody Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Matthew Frisch",
    "winner_school": "The Citadel",
    "loser": "Nick Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Joshua Kreimier",
    "loser_school": "Air Force",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Zach Brunson",
    "winner_school": "Illinois",
    "loser": "Thomas Gantt",
    "loser_school": "NC State",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Spartak Chino",
    "loser_school": "Ohio",
    "result": "Fall 3:56"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Roger Pena",
    "winner_school": "Oregon State",
    "loser": "Markus Scheidel",
    "loser_school": "Columbia",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Isaac Jordan",
    "winner_school": "Wisconsin",
    "loser": "Paul Hancock",
    "loser_school": "Army",
    "result": "Fall 1:26"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Luke Smith",
    "winner_school": "Central Michigan",
    "loser": "Tristan Warner",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Brian Murphy",
    "loser_school": "Michigan",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Johnny Greisheimer",
    "loser_school": "Edinboro",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Austin Sommer",
    "loser_school": "Drexel",
    "result": "TF-1.5 5:00 (19-1)"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Joseph LaVallee",
    "winner_school": "Missouri",
    "loser": "Immanuel Kerr-Brown",
    "loser_school": "Duke",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Taylor Walsh",
    "winner_school": "Indiana",
    "loser": "Alex Hudson",
    "loser_school": "Chattanooga",
    "result": "Fall 2:19"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Nestor Taffur",
    "winner_school": "Boston University",
    "loser": "Austin Matthews",
    "loser_school": "Clarion",
    "result": "Fall 1:11"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Brian Realbuto",
    "winner_school": "Cornell",
    "loser": "Brandon Zeerip",
    "loser_school": "Eastern Michigan",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Blaise Butler",
    "winner_school": "Virginia",
    "loser": "Anthony Perrotti",
    "loser_school": "Rutgers",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Aaron Walker",
    "winner_school": "The Citadel",
    "loser": "Cody Pack",
    "loser_school": "South Dakota State",
    "result": "Fall 5:25"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Joseph Napoli",
    "loser_school": "Lehigh",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Joseph Brewster",
    "loser_school": "South Dakota State",
    "result": "Fall 2:59"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Jim Wilson",
    "winner_school": "Stanford",
    "loser": "Josh Houldsworth",
    "loser_school": "Columbia",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Joseph Booth",
    "winner_school": "Hofstra",
    "loser": "Jacob Kemerer",
    "loser_school": "Lock Haven",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Ramon Santiago",
    "loser_school": "Rider",
    "result": "Fall 2:31"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Josh Veltre",
    "winner_school": "Bloomsburg",
    "loser": "Nick Moore",
    "loser_school": "Iowa",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Ryan Leblanc",
    "winner_school": "Indiana",
    "loser": "Jackson Morse",
    "loser_school": "Illinois",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Daniel Yates",
    "winner_school": "Michigan",
    "loser": "John Staudenmayer",
    "loser_school": "North Carolina",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Casey Kent",
    "loser_school": "Penn",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Chris Moon",
    "loser_school": "Virginia Tech",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Dylan Palacio",
    "winner_school": "Cornell",
    "loser": "Harrison Hightower",
    "loser_school": "Ohio",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Turtogtokh Luvsandorj",
    "winner_school": "The Citadel",
    "loser": "Dakota Friesth",
    "loser_school": "Wyoming",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Corey Mock",
    "winner_school": "Chattanooga",
    "loser": "Peyton Walsh",
    "loser_school": "Navy",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Pierce Harger",
    "winner_school": "Northwestern",
    "loser": "Zach Toal",
    "loser_school": "Missouri",
    "result": "Fall 3:32"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Cooper Moore",
    "winner_school": "Northern Iowa",
    "loser": "Austin Wilson",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Daniel Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Austin Trott",
    "loser_school": "Gardner-Webb",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma State",
    "loser": "Curtis Cook",
    "loser_school": "Utah Valley",
    "result": "Fall 3:36"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Scott Liegel",
    "loser_school": "Wisconsin",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Tony Dallago",
    "winner_school": "Illinois",
    "loser": "Mathew Miller",
    "loser_school": "Navy",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Elliot Riddick",
    "winner_school": "Lehigh",
    "loser": "Pete Renda",
    "loser_school": "NC State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Cody Caldwell",
    "winner_school": "Northern Iowa",
    "loser": "Cody Walters",
    "loser_school": "Ohio",
    "result": "TB-1 9-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Matt Brown",
    "winner_school": "Penn State",
    "loser": "Kyle Meyer",
    "loser_school": "Stanford",
    "result": "MD 17-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Tanner Weatherman",
    "winner_school": "Iowa State",
    "loser": "Levi Clemons",
    "loser_school": "Chattanooga",
    "result": "Fall 2:09"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Mike Dessino",
    "winner_school": "Bloomsburg",
    "loser": "Hayden Zillmer",
    "loser_school": "North Dakota State",
    "result": "SV-1 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Bryce Hammond",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Jakob Scheffel",
    "loser_school": "West Virginia",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Conor Brennan",
    "winner_school": "Rider",
    "loser": "Mark Martin",
    "loser_school": "Ohio State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Stephen Doty",
    "winner_school": "Virginia",
    "loser": "Austin Gabel",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Caleb Marsh",
    "loser_school": "Kent State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Tyler Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Bradley Wukie",
    "loser_school": "Penn",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Mike Ottinger",
    "winner_school": "Central Michigan",
    "loser": "Joe Latham",
    "loser_school": "Oregon State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Billy Curling",
    "winner_school": "Old Dominion",
    "loser": "Shane Hughes",
    "loser_school": "Columbia",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Andrew Howe",
    "winner_school": "Oklahoma",
    "loser": "Mike England",
    "loser_school": "Missouri",
    "result": "TF-1.5 5:59 (19-4)"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Benjamin Stroh",
    "loser_school": "Wyoming",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Devin Hightower",
    "winner_school": "Air Force",
    "loser": "Nick Vetterlein",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Blake Stauffer",
    "winner_school": "Arizona State",
    "loser": "Domenic Abounader",
    "loser_school": "Michigan",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Timothy Dudley",
    "winner_school": "Nebraska",
    "loser": "Donald Patrick",
    "loser_school": "Davidson",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Victor Avery",
    "winner_school": "Edinboro",
    "loser": "Ethen Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Ophir Bernstein",
    "winner_school": "Brown",
    "loser": "Zack Hernandez",
    "loser_school": "Columbia",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Jack Dechow",
    "winner_school": "Old Dominion",
    "loser": "Jonathan Fausey",
    "loser_school": "Virginia",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Max Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Clint Morrison",
    "loser_school": "Rider",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "Lelund Weatherspoon",
    "loser_school": "Iowa State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "John Rizqallah",
    "winner_school": "Michigan State",
    "loser": "Fred Garcia",
    "loser_school": "Lock Haven",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Lawrence Thomas",
    "winner_school": "Penn",
    "loser": "Austin Morehead",
    "loser_school": "Oregon State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Phillip Joseph",
    "loser_school": "Eastern Michigan",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Nolan Boyd",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Kenny Courts",
    "winner_school": "Ohio State",
    "loser": "Kurtis Julson",
    "loser_school": "North Dakota State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Lazarus Reyes",
    "winner_school": "Illinois",
    "loser": "Ryan Loder",
    "loser_school": "Northern Iowa",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Jackson Hein",
    "loser_school": "Wisconsin",
    "result": "Fall 1:59"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Paul Rands",
    "loser_school": "Navy",
    "result": "Inj. 5:36"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Dan Scherer",
    "winner_school": "Stanford",
    "loser": "Alex Polizzi",
    "loser_school": "Northwestern",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Cody Reed",
    "winner_school": "Binghamton",
    "loser": "Christian Boley",
    "loser_school": "Maryland",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Phillip Wellington",
    "winner_school": "Ohio",
    "loser": "James Fox",
    "loser_school": "Harvard",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Abram Ayala",
    "loser_school": "Princeton",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Taylor Meeks",
    "winner_school": "Oregon State",
    "loser": "Marshall Haas",
    "loser_school": "The Citadel",
    "result": "Fall 6:53"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Timothy McCall",
    "winner_school": "Wisconsin",
    "loser": "Daniel Mitchell",
    "loser_school": "American",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Zach Nye",
    "loser_school": "Virginia",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "John Bolich",
    "loser_school": "Lehigh",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Chris Penny",
    "winner_school": "Virginia Tech",
    "loser": "Nick Bonaccorsi",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "Shane Woods",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Richard Perry",
    "winner_school": "Bloomsburg",
    "loser": "Bryce Barnes",
    "loser_school": "Army",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Travis Rutt",
    "winner_school": "Oklahoma",
    "loser": "Brandon Palik",
    "loser_school": "Drexel",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Conner Hartmann",
    "winner_school": "Duke",
    "loser": "Jace Bennett",
    "loser_school": "Cornell",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Braden Atwood",
    "winner_school": "Purdue",
    "loser": "KaRonne Jones",
    "loser_school": "NC State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "J`Den Cox",
    "winner_school": "Missouri",
    "loser": "Mario Gonzalez",
    "loser_school": "Illinois",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Blaize Cabell",
    "loser_school": "Northern Iowa",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Amarveer Dhesi",
    "winner_school": "Oregon State",
    "loser": "Joe Stolfi",
    "loser_school": "Bucknell",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Connor Medbery",
    "winner_school": "Wisconsin",
    "loser": "Devin Mellon",
    "loser_school": "Missouri",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "J.T Felix",
    "winner_school": "Boise State",
    "loser": "Ty Walz",
    "loser_school": "Virginia Tech",
    "result": "Fall 2:55"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Anthony Vizcarrondo",
    "loser_school": "West Virginia",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Spencer Myers",
    "winner_school": "Maryland",
    "loser": "Dawson Peck",
    "loser_school": "Chattanooga",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Ernest James",
    "winner_school": "Edinboro",
    "loser": "Eloheim Palma",
    "loser_school": "Campbell",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Adam Coon",
    "winner_school": "Michigan",
    "loser": "Ross Larson",
    "loser_school": "Oklahoma",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Adam Chalfant",
    "winner_school": "Indiana",
    "loser": "Justin Grant",
    "loser_school": "Bloomsburg",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Jonathan Gingrich",
    "winner_school": "Penn State",
    "loser": "David Devine",
    "loser_school": "SIU Edwardsville",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Austin Marsden",
    "winner_school": "Oklahoma State",
    "loser": "Collin Jensen",
    "loser_school": "Nebraska",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Evan Knutson",
    "loser_school": "North Dakota State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Mike McClure",
    "winner_school": "Michigan State",
    "loser": "Patrick Tasser",
    "loser_school": "Pittsburgh",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Blake Herrin",
    "loser_school": "American",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "William Smith",
    "winner_school": "Rutgers",
    "loser": "Adam Fager",
    "loser_school": "Utah Valley",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "Maximilian Wessell",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "David White",
    "winner_school": "Binghamton",
    "loser": "Corey Keener",
    "loser_school": "Central Michigan",
    "result": "Fall 2:34"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Devon Lotito",
    "winner_school": "Cal Poly",
    "loser": "Vincent Dellefave",
    "loser_school": "Rutgers",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Nick Lester",
    "winner_school": "Oklahoma",
    "loser": "Undrakhbayar Khishignyam",
    "loser_school": "The Citadel",
    "result": "MD 13-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "Mike Morales",
    "winner_school": "West Virginia",
    "loser": "Kevin Birmingham",
    "loser_school": "Davidson",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Justin DeAngelis",
    "winner_school": "Oklahoma",
    "loser": "Cody Pack",
    "loser_school": "South Dakota State",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Peyton Walsh",
    "winner_school": "Navy",
    "loser": "Mitchell Wightman",
    "loser_school": "Boston University",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Brian Harvey",
    "winner_school": "Army",
    "loser": "Levi Clemons",
    "loser_school": "Chattanooga",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Lucas Sheridan",
    "winner_school": "Indiana",
    "loser": "Nick Vetterlein",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Zach Nye",
    "winner_school": "Virginia",
    "loser": "Blake Rosholt",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Nick Tavanello",
    "winner_school": "Ohio State",
    "loser": "Evan Knutson",
    "loser_school": "North Dakota State",
    "result": "Fall 0:47"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Joey Dance",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Cory Clark",
    "winner_school": "Iowa",
    "loser": "Tyler Cox",
    "loser_school": "Wyoming",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Dylan Peters",
    "winner_school": "Northern Iowa",
    "loser": "Tim Lambert",
    "loser_school": "Nebraska",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Earl Hall",
    "winner_school": "Iowa State",
    "loser": "Josh Martinez",
    "loser_school": "Air Force",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Edward Klimara",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Jarrod Patterson",
    "winner_school": "Oklahoma",
    "loser": "Robert Deutsch",
    "loser_school": "Rider",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "David Terao",
    "winner_school": "American",
    "loser": "Jared Germaine",
    "loser_school": "Eastern Michigan",
    "result": "Dec 13-11"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Anthony Zanetta",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 189,
    "winner": "Joe Colon",
    "winner_school": "Northern Iowa",
    "loser": "Matt Manley",
    "loser_school": "Missouri",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 190,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Johnni DiJulius",
    "loser_school": "Ohio State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 191,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Joe Roth",
    "loser_school": "Central Michigan",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 192,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Jonathon Morrison",
    "loser_school": "Oklahoma State",
    "result": "Fall 2:45"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 193,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Zane Richards",
    "loser_school": "Illinois",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 194,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Ryan Mango",
    "loser_school": "Stanford",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 195,
    "winner": "Cash Quiroga",
    "winner_school": "Purdue",
    "loser": "Nick Soto",
    "loser_school": "Chattanooga",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 196,
    "winner": "Aaron (A.J.) Schopp",
    "winner_school": "Edinboro",
    "loser": "Rosario Bruno",
    "loser_school": "Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 197,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Laike Gardner",
    "loser_school": "Lehigh",
    "result": "Fall 3:23"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 198,
    "winner": "Evan Henderson",
    "winner_school": "North Carolina",
    "loser": "Luke Vaith",
    "loser_school": "Hofstra",
    "result": "Fall 4:03"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 199,
    "winner": "Richard Durso",
    "winner_school": "Franklin and Marshall",
    "loser": "Chris Mecate",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 200,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Stephen Dutton III",
    "loser_school": "Michigan",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 201,
    "winner": "Zain Retherford",
    "winner_school": "Penn State",
    "loser": "Edgar Bright",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 202,
    "winner": "Joey Lazor",
    "winner_school": "Northern Iowa",
    "loser": "Christopher Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 203,
    "winner": "Todd Preston",
    "winner_school": "Harvard",
    "loser": "Zach Horan",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 204,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Anthony Collica",
    "loser_school": "Oklahoma State",
    "result": "TF-1.5 4:52 (17-1)"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 205,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Alexander Richardson",
    "loser_school": "Old Dominion",
    "result": "MD 13-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 206,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "David Habat",
    "loser_school": "Edinboro",
    "result": "Dec 15-10"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 207,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "James English",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 208,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Brody Grothus",
    "loser_school": "Iowa",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 209,
    "winner": "Scott Sakaguchi",
    "winner_school": "Oregon State",
    "loser": "Christopher Villalonga",
    "loser_school": "Cornell",
    "result": "Fall 4:43"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 210,
    "winner": "Joshua Kindig",
    "winner_school": "Oklahoma State",
    "loser": "Jake Sueflohn",
    "loser_school": "Nebraska",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 211,
    "winner": "Zach Neibert",
    "winner_school": "Virginia Tech",
    "loser": "Augustus Sako",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 212,
    "winner": "Mitchell Minotti",
    "winner_school": "Lehigh",
    "loser": "Matthew Frisch",
    "loser_school": "The Citadel",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Zach Brunson",
    "loser_school": "Illinois",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Roger Pena",
    "loser_school": "Oregon State",
    "result": "Fall 5:45"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Isaac Jordan",
    "winner_school": "Wisconsin",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Dylan Alton",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Joseph LaVallee",
    "loser_school": "Missouri",
    "result": "Fall 1:39"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Nestor Taffur",
    "winner_school": "Boston University",
    "loser": "Taylor Walsh",
    "loser_school": "Indiana",
    "result": "Fall 6:58"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 219,
    "winner": "Brian Realbuto",
    "winner_school": "Cornell",
    "loser": "Blaise Butler",
    "loser_school": "Virginia",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 220,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Aaron Walker",
    "loser_school": "The Citadel",
    "result": "MD 18-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 221,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Jim Wilson",
    "loser_school": "Stanford",
    "result": "Fall 6:55"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 222,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Joseph Booth",
    "loser_school": "Hofstra",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 223,
    "winner": "Josh Veltre",
    "winner_school": "Bloomsburg",
    "loser": "Ryan Leblanc",
    "loser_school": "Indiana",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 224,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Daniel Yates",
    "loser_school": "Michigan",
    "result": "Fall 3:38"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 225,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Dylan Palacio",
    "loser_school": "Cornell",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 226,
    "winner": "Turtogtokh Luvsandorj",
    "winner_school": "The Citadel",
    "loser": "Corey Mock",
    "loser_school": "Chattanooga",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 227,
    "winner": "Pierce Harger",
    "winner_school": "Northwestern",
    "loser": "Cooper Moore",
    "loser_school": "Northern Iowa",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 228,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma State",
    "loser": "Daniel Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 229,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Tony Dallago",
    "loser_school": "Illinois",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 230,
    "winner": "Elliot Riddick",
    "winner_school": "Lehigh",
    "loser": "Cody Caldwell",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-9"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 231,
    "winner": "Matt Brown",
    "winner_school": "Penn State",
    "loser": "Tanner Weatherman",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 232,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Mike Dessino",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 233,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Conor Brennan",
    "loser_school": "Rider",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 234,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Stephen Doty",
    "loser_school": "Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 235,
    "winner": "Tyler Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Mike Ottinger",
    "loser_school": "Central Michigan",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 236,
    "winner": "Andrew Howe",
    "winner_school": "Oklahoma",
    "loser": "Billy Curling",
    "loser_school": "Old Dominion",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 237,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Devin Hightower",
    "loser_school": "Air Force",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 238,
    "winner": "Blake Stauffer",
    "winner_school": "Arizona State",
    "loser": "Timothy Dudley",
    "loser_school": "Nebraska",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 239,
    "winner": "Ophir Bernstein",
    "winner_school": "Brown",
    "loser": "Victor Avery",
    "loser_school": "Edinboro",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 240,
    "winner": "Jack Dechow",
    "winner_school": "Old Dominion",
    "loser": "Max Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 241,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "John Rizqallah",
    "loser_school": "Michigan State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 242,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Lawrence Thomas",
    "loser_school": "Penn",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 243,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Kenny Courts",
    "loser_school": "Ohio State",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 244,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Lazarus Reyes",
    "loser_school": "Illinois",
    "result": "TF-1.5 7:00 (15-0)"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 245,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Dan Scherer",
    "loser_school": "Stanford",
    "result": "M. For."
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 246,
    "winner": "Cody Reed",
    "winner_school": "Binghamton",
    "loser": "Phillip Wellington",
    "loser_school": "Ohio",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 247,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Taylor Meeks",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 248,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Timothy McCall",
    "loser_school": "Wisconsin",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 249,
    "winner": "Chris Penny",
    "winner_school": "Virginia Tech",
    "loser": "Morgan McIntosh",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 250,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "Richard Perry",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 251,
    "winner": "Conner Hartmann",
    "winner_school": "Duke",
    "loser": "Travis Rutt",
    "loser_school": "Oklahoma",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 252,
    "winner": "J`Den Cox",
    "winner_school": "Missouri",
    "loser": "Braden Atwood",
    "loser_school": "Purdue",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 253,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Amarveer Dhesi",
    "loser_school": "Oregon State",
    "result": "Fall 4:23"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 254,
    "winner": "Connor Medbery",
    "winner_school": "Wisconsin",
    "loser": "J.T Felix",
    "loser_school": "Boise State",
    "result": "Fall 3:42"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 255,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Spencer Myers",
    "loser_school": "Maryland",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 256,
    "winner": "Adam Coon",
    "winner_school": "Michigan",
    "loser": "Ernest James",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 257,
    "winner": "Adam Chalfant",
    "winner_school": "Indiana",
    "loser": "Jonathan Gingrich",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 258,
    "winner": "Austin Marsden",
    "winner_school": "Oklahoma State",
    "loser": "Michael McMullan",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 259,
    "winner": "Mike McClure",
    "winner_school": "Michigan State",
    "loser": "Jeremy Johnson",
    "loser_school": "Ohio",
    "result": "TB-1 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 260,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "William Smith",
    "loser_school": "Rutgers",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 261,
    "winner": "Paul Petrov",
    "winner_school": "Bucknell",
    "loser": "Jade Rauser",
    "loser_school": "Utah Valley",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 262,
    "winner": "Kory Mines",
    "winner_school": "Edinboro",
    "loser": "Caleb Richardson",
    "loser_school": "Penn",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 263,
    "winner": "Nick Roberts",
    "winner_school": "Ohio State",
    "loser": "David White",
    "loser_school": "Binghamton",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 264,
    "winner": "Evan Silver",
    "winner_school": "Stanford",
    "loser": "Nathan Kraisser",
    "loser_school": "North Carolina",
    "result": "Fall 3:45"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 265,
    "winner": "Darian Cruz",
    "winner_school": "Lehigh",
    "loser": "Dominic Parisi",
    "loser_school": "Appalachian State",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 266,
    "winner": "Nick Herrmann",
    "winner_school": "Virginia",
    "loser": "Cory Stainbrook",
    "loser_school": "West Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 267,
    "winner": "Bradley Taylor",
    "winner_school": "Wisconsin",
    "loser": "Brandon Jeske",
    "loser_school": "Old Dominion",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 268,
    "winner": "Conor Youtsey",
    "winner_school": "Michigan",
    "loser": "Jamie Franco",
    "loser_school": "Hofstra",
    "result": "Fall 2:14"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 269,
    "winner": "Devon Lotito",
    "winner_school": "Cal Poly",
    "loser": "Mackenzie McGuire",
    "loser_school": "Kent State",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 270,
    "winner": "Nick Smith",
    "winner_school": "Northern Illinois",
    "loser": "Tyler Goodwin",
    "loser_school": "Maryland",
    "result": "Fall 4:31"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 271,
    "winner": "Dominick Malone",
    "winner_school": "Northwestern",
    "loser": "Kevin Devoy",
    "loser_school": "Drexel",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 272,
    "winner": "James Gulibon",
    "winner_school": "Penn State",
    "loser": "Vincent Pizzuto",
    "loser_school": "Eastern Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 273,
    "winner": "Shelton Mack",
    "winner_school": "Pittsburgh",
    "loser": "Nick Wilcox",
    "loser_school": "Bloomsburg",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 274,
    "winner": "Chuck Zeisloft",
    "winner_school": "Rider",
    "loser": "Gregory Rinker",
    "loser_school": "Air Force",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 275,
    "winner": "Dennis Gustafson",
    "winner_school": "Virginia Tech",
    "loser": "Joey Palmer",
    "loser_school": "Oregon State",
    "result": "Fall 2:56"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 276,
    "winner": "Mark Grey",
    "winner_school": "Cornell",
    "loser": "Colton Rasche",
    "loser_school": "Navy",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 277,
    "winner": "Gabe Moreno",
    "winner_school": "Iowa State",
    "loser": "Joseph Spisak",
    "loser_school": "Virginia",
    "result": "Fall 1:09"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 278,
    "winner": "Colin Johnston",
    "winner_school": "West Virginia",
    "loser": "Steven Rodrigues",
    "loser_school": "Illinois",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 279,
    "winner": "Shyhiem Brown",
    "winner_school": "Maryland",
    "loser": "Joey Delgado",
    "loser_school": "Oregon State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 280,
    "winner": "Josh Dziewa",
    "winner_school": "Iowa",
    "loser": "Nick Flannery",
    "loser_school": "Buffalo",
    "result": "TF-1.5 7:00 (24-7)"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 281,
    "winner": "Nick Lester",
    "winner_school": "Oklahoma",
    "loser": "Tyler Scotton",
    "loser_school": "Boston University",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 282,
    "winner": "Sam Speno",
    "winner_school": "NC State",
    "loser": "Danny Sabatello",
    "loser_school": "Purdue",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 283,
    "winner": "Daniel Neff",
    "winner_school": "Lock Haven",
    "loser": "Michael Nevinger",
    "loser_school": "Cornell",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 284,
    "winner": "Lavion Mayes",
    "winner_school": "Missouri",
    "loser": "Avery Garner",
    "loser_school": "Utah Valley",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 285,
    "winner": "Justin Arthur",
    "winner_school": "Clarion",
    "loser": "Alex Kocer",
    "loser_school": "South Dakota State",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 286,
    "winner": "Michael Depalma",
    "winner_school": "Kent State",
    "loser": "Macaulay Maldarelli",
    "loser_school": "Lock Haven",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 287,
    "winner": "Bryce Busler",
    "winner_school": "Bloomsburg",
    "loser": "Dylan Cottrell",
    "loser_school": "Appalachian State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 288,
    "winner": "Tywan Claxton",
    "winner_school": "Ohio",
    "loser": "Mike Morales",
    "loser_school": "West Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 289,
    "winner": "Rylan Lubeck",
    "winner_school": "Wisconsin",
    "loser": "Mike Racciato",
    "loser_school": "Pittsburgh",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 290,
    "winner": "Christian Barber",
    "winner_school": "North Carolina",
    "loser": "Ian Paddock",
    "loser_school": "Ohio State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 291,
    "winner": "Robert Jillard",
    "winner_school": "Northern Illinois",
    "loser": "Ken Theobold",
    "loser_school": "Rutgers",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 292,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Cody Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 293,
    "winner": "Thomas Gantt",
    "winner_school": "NC State",
    "loser": "Joshua Kreimier",
    "loser_school": "Air Force",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 294,
    "winner": "Markus Scheidel",
    "winner_school": "Columbia",
    "loser": "Spartak Chino",
    "loser_school": "Ohio",
    "result": "TB-2 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 295,
    "winner": "Paul Hancock",
    "winner_school": "Army",
    "loser": "Tristan Warner",
    "loser_school": "Old Dominion",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 296,
    "winner": "Johnny Greisheimer",
    "winner_school": "Edinboro",
    "loser": "Brian Murphy",
    "loser_school": "Michigan",
    "result": "SV-1 (Fall) 7:29"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 297,
    "winner": "Immanuel Kerr-Brown",
    "winner_school": "Duke",
    "loser": "Austin Sommer",
    "loser_school": "Drexel",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 298,
    "winner": "Austin Matthews",
    "winner_school": "Clarion",
    "loser": "Alex Hudson",
    "loser_school": "Chattanooga",
    "result": "Fall 0:55"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 299,
    "winner": "Anthony Perrotti",
    "winner_school": "Rutgers",
    "loser": "Brandon Zeerip",
    "loser_school": "Eastern Michigan",
    "result": "Dec 13-8"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 300,
    "winner": "Justin DeAngelis",
    "winner_school": "Oklahoma",
    "loser": "Joseph Napoli",
    "loser_school": "Lehigh",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 301,
    "winner": "Josh Houldsworth",
    "winner_school": "Columbia",
    "loser": "Joseph Brewster",
    "loser_school": "South Dakota State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 302,
    "winner": "Ramon Santiago",
    "winner_school": "Rider",
    "loser": "Jacob Kemerer",
    "loser_school": "Lock Haven",
    "result": "Fall 5:57"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 303,
    "winner": "Nick Moore",
    "winner_school": "Iowa",
    "loser": "Jackson Morse",
    "loser_school": "Illinois",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 304,
    "winner": "John Staudenmayer",
    "winner_school": "North Carolina",
    "loser": "Casey Kent",
    "loser_school": "Penn",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 305,
    "winner": "Chris Moon",
    "winner_school": "Virginia Tech",
    "loser": "Harrison Hightower",
    "loser_school": "Ohio",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 306,
    "winner": "Dakota Friesth",
    "winner_school": "Wyoming",
    "loser": "Peyton Walsh",
    "loser_school": "Navy",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 307,
    "winner": "Austin Wilson",
    "winner_school": "Nebraska",
    "loser": "Zach Toal",
    "loser_school": "Missouri",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 308,
    "winner": "Austin Trott",
    "winner_school": "Gardner-Webb",
    "loser": "Curtis Cook",
    "loser_school": "Utah Valley",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 309,
    "winner": "Mathew Miller",
    "winner_school": "Navy",
    "loser": "Scott Liegel",
    "loser_school": "Wisconsin",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 310,
    "winner": "Cody Walters",
    "winner_school": "Ohio",
    "loser": "Pete Renda",
    "loser_school": "NC State",
    "result": "Fall 3:54"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 311,
    "winner": "Brian Harvey",
    "winner_school": "Army",
    "loser": "Kyle Meyer",
    "loser_school": "Stanford",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 312,
    "winner": "Bryce Hammond",
    "winner_school": "CSU Bakersfield",
    "loser": "Hayden Zillmer",
    "loser_school": "North Dakota State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 313,
    "winner": "Mark Martin",
    "winner_school": "Ohio State",
    "loser": "Jakob Scheffel",
    "loser_school": "West Virginia",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 314,
    "winner": "Austin Gabel",
    "winner_school": "Virginia Tech",
    "loser": "Caleb Marsh",
    "loser_school": "Kent State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 315,
    "winner": "Joe Latham",
    "winner_school": "Oregon State",
    "loser": "Bradley Wukie",
    "loser_school": "Penn",
    "result": "Dec 13-11"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 316,
    "winner": "Shane Hughes",
    "winner_school": "Columbia",
    "loser": "Mike England",
    "loser_school": "Missouri",
    "result": "Fall 3:00"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 317,
    "winner": "Benjamin Stroh",
    "winner_school": "Wyoming",
    "loser": "Lucas Sheridan",
    "loser_school": "Indiana",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 318,
    "winner": "Domenic Abounader",
    "winner_school": "Michigan",
    "loser": "Donald Patrick",
    "loser_school": "Davidson",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 319,
    "winner": "Ethen Lofthouse",
    "winner_school": "Iowa",
    "loser": "Zack Hernandez",
    "loser_school": "Columbia",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 320,
    "winner": "Clint Morrison",
    "winner_school": "Rider",
    "loser": "Jonathan Fausey",
    "loser_school": "Virginia",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 321,
    "winner": "Lelund Weatherspoon",
    "winner_school": "Iowa State",
    "loser": "Fred Garcia",
    "loser_school": "Lock Haven",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 322,
    "winner": "Phillip Joseph",
    "winner_school": "Eastern Michigan",
    "loser": "Austin Morehead",
    "loser_school": "Oregon State",
    "result": "TF-1.5 4:04 (20-5)"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 323,
    "winner": "Kurtis Julson",
    "winner_school": "North Dakota State",
    "loser": "Nolan Boyd",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 324,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Jackson Hein",
    "loser_school": "Wisconsin",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 325,
    "winner": "Alex Polizzi",
    "winner_school": "Northwestern",
    "loser": "Paul Rands",
    "loser_school": "Navy",
    "result": "M. For."
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 326,
    "winner": "Christian Boley",
    "winner_school": "Maryland",
    "loser": "James Fox",
    "loser_school": "Harvard",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 327,
    "winner": "Abram Ayala",
    "winner_school": "Princeton",
    "loser": "Marshall Haas",
    "loser_school": "The Citadel",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 328,
    "winner": "Daniel Mitchell",
    "winner_school": "American",
    "loser": "Zach Nye",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 329,
    "winner": "Nick Bonaccorsi",
    "winner_school": "Pittsburgh",
    "loser": "John Bolich",
    "loser_school": "Lehigh",
    "result": "Fall 2:27"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 330,
    "winner": "Shane Woods",
    "winner_school": "Wyoming",
    "loser": "Bryce Barnes",
    "loser_school": "Army",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 331,
    "winner": "Jace Bennett",
    "winner_school": "Cornell",
    "loser": "Brandon Palik",
    "loser_school": "Drexel",
    "result": "Dec 12-10"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 332,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "KaRonne Jones",
    "loser_school": "NC State",
    "result": "TB-1 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Joe Stolfi",
    "winner_school": "Bucknell",
    "loser": "Blaize Cabell",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:24"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Ty Walz",
    "winner_school": "Virginia Tech",
    "loser": "Devin Mellon",
    "loser_school": "Missouri",
    "result": "SV-1 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Anthony Vizcarrondo",
    "winner_school": "West Virginia",
    "loser": "Dawson Peck",
    "loser_school": "Chattanooga",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Ross Larson",
    "winner_school": "Oklahoma",
    "loser": "Eloheim Palma",
    "loser_school": "Campbell",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Justin Grant",
    "winner_school": "Bloomsburg",
    "loser": "David Devine",
    "loser_school": "SIU Edwardsville",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Nick Tavanello",
    "winner_school": "Ohio State",
    "loser": "Collin Jensen",
    "loser_school": "Nebraska",
    "result": "Fall 3:41"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Patrick Tasser",
    "winner_school": "Pittsburgh",
    "loser": "Blake Herrin",
    "loser_school": "American",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Adam Fager",
    "winner_school": "Utah Valley",
    "loser": "Maximilian Wessell",
    "loser_school": "Lehigh",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 341,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Cory Clark",
    "loser_school": "Iowa",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 342,
    "winner": "Dylan Peters",
    "winner_school": "Northern Iowa",
    "loser": "Earl Hall",
    "loser_school": "Iowa State",
    "result": "SV-1 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 343,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Jarrod Patterson",
    "loser_school": "Oklahoma",
    "result": "Dec 6-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 344,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "David Terao",
    "loser_school": "American",
    "result": "MD 11-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 345,
    "winner": "Joe Colon",
    "winner_school": "Northern Iowa",
    "loser": "David Thorn",
    "loser_school": "Minnesota",
    "result": "MD 19-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 346,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Cody Brewer",
    "loser_school": "Oklahoma",
    "result": "Dec 9-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 347,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Mason Beckman",
    "loser_school": "Lehigh",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 348,
    "winner": "Aaron (A.J.) Schopp",
    "winner_school": "Edinboro",
    "loser": "Cash Quiroga",
    "loser_school": "Purdue",
    "result": "Dec 11-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 349,
    "winner": "Evan Henderson",
    "winner_school": "North Carolina",
    "loser": "Mitchell Port",
    "loser_school": "Edinboro",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 350,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Richard Durso",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 351,
    "winner": "Zain Retherford",
    "winner_school": "Penn State",
    "loser": "Joey Lazor",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 352,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Todd Preston",
    "loser_school": "Harvard",
    "result": "Fall 1:29"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 353,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Eric Grajales",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 354,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "Kendric Maple",
    "loser_school": "Oklahoma",
    "result": "TB-1 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 355,
    "winner": "Joshua Kindig",
    "winner_school": "Oklahoma State",
    "loser": "Scott Sakaguchi",
    "loser_school": "Oregon State",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 356,
    "winner": "Mitchell Minotti",
    "winner_school": "Lehigh",
    "loser": "Zach Neibert",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 357,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "James Green",
    "loser_school": "Nebraska",
    "result": "Fall 3:36"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 358,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Isaac Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 359,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Nestor Taffur",
    "loser_school": "Boston University",
    "result": "Dec 18-11"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 360,
    "winner": "Brian Realbuto",
    "winner_school": "Cornell",
    "loser": "Derek St. John",
    "loser_school": "Iowa",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 361,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Michael Moreno",
    "loser_school": "Iowa State",
    "result": "Fall 3:19"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 362,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Josh Veltre",
    "loser_school": "Bloomsburg",
    "result": "Fall 6:41"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 363,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Turtogtokh Luvsandorj",
    "loser_school": "The Citadel",
    "result": "TB-1 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 364,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma State",
    "loser": "Pierce Harger",
    "loser_school": "Northwestern",
    "result": "MD 14-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 365,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Elliot Riddick",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 366,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Matt Brown",
    "loser_school": "Penn State",
    "result": "TB-1 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 367,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Robert Kokesh",
    "loser_school": "Nebraska",
    "result": "TB-2 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 368,
    "winner": "Andrew Howe",
    "winner_school": "Oklahoma",
    "loser": "Tyler Wilps",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 369,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Blake Stauffer",
    "loser_school": "Arizona State",
    "result": "Dec 6-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 370,
    "winner": "Jack Dechow",
    "winner_school": "Old Dominion",
    "loser": "Ophir Bernstein",
    "loser_school": "Brown",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 371,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "Jacob Swartz",
    "loser_school": "Boise State",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 372,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Kevin Steinhaus",
    "loser_school": "Minnesota",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 373,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Cody Reed",
    "loser_school": "Binghamton",
    "result": "Dec 8-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 374,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Kyven Gadson",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 375,
    "winner": "Chris Penny",
    "winner_school": "Virginia Tech",
    "loser": "Nathan Burak",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 376,
    "winner": "J`Den Cox",
    "winner_school": "Missouri",
    "loser": "Conner Hartmann",
    "loser_school": "Duke",
    "result": "Dec 5-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 377,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Connor Medbery",
    "loser_school": "Wisconsin",
    "result": "Fall 1:26"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 378,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Adam Coon",
    "loser_school": "Michigan",
    "result": "TB-2 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 379,
    "winner": "Adam Chalfant",
    "winner_school": "Indiana",
    "loser": "Austin Marsden",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 380,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "Mike McClure",
    "loser_school": "Michigan State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 381,
    "winner": "Anthony Zanetta",
    "winner_school": "Pittsburgh",
    "loser": "Paul Petrov",
    "loser_school": "Bucknell",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 382,
    "winner": "Kory Mines",
    "winner_school": "Edinboro",
    "loser": "Jared Germaine",
    "loser_school": "Eastern Michigan",
    "result": "Fall 3:40"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 383,
    "winner": "Robert Deutsch",
    "winner_school": "Rider",
    "loser": "Nick Roberts",
    "loser_school": "Ohio State",
    "result": "Fall 5:53"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 384,
    "winner": "Edward Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Evan Silver",
    "loser_school": "Stanford",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 385,
    "winner": "Darian Cruz",
    "winner_school": "Lehigh",
    "loser": "Josh Martinez",
    "loser_school": "Air Force",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 386,
    "winner": "Tim Lambert",
    "winner_school": "Nebraska",
    "loser": "Nick Herrmann",
    "loser_school": "Virginia",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 387,
    "winner": "Bradley Taylor",
    "winner_school": "Wisconsin",
    "loser": "Tyler Cox",
    "loser_school": "Wyoming",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 388,
    "winner": "Joey Dance",
    "winner_school": "Virginia Tech",
    "loser": "Conor Youtsey",
    "loser_school": "Michigan",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 389,
    "winner": "Rosario Bruno",
    "winner_school": "Michigan",
    "loser": "Devon Lotito",
    "loser_school": "Cal Poly",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 390,
    "winner": "Nick Soto",
    "winner_school": "Chattanooga",
    "loser": "Nick Smith",
    "loser_school": "Northern Illinois",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 391,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Dominick Malone",
    "loser_school": "Northwestern",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 392,
    "winner": "Zane Richards",
    "winner_school": "Illinois",
    "loser": "James Gulibon",
    "loser_school": "Penn State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 393,
    "winner": "Jonathon Morrison",
    "winner_school": "Oklahoma State",
    "loser": "Shelton Mack",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 394,
    "winner": "Joe Roth",
    "winner_school": "Central Michigan",
    "loser": "Chuck Zeisloft",
    "loser_school": "Rider",
    "result": "MD 15-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 395,
    "winner": "Johnni DiJulius",
    "winner_school": "Ohio State",
    "loser": "Dennis Gustafson",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 396,
    "winner": "Mark Grey",
    "winner_school": "Cornell",
    "loser": "Matt Manley",
    "loser_school": "Missouri",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 397,
    "winner": "Anthony Collica",
    "winner_school": "Oklahoma State",
    "loser": "Gabe Moreno",
    "loser_school": "Iowa State",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 398,
    "winner": "Zach Horan",
    "winner_school": "Central Michigan",
    "loser": "Colin Johnston",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 399,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Shyhiem Brown",
    "loser_school": "Maryland",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 400,
    "winner": "Josh Dziewa",
    "winner_school": "Iowa",
    "loser": "Edgar Bright",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 401,
    "winner": "Stephen Dutton III",
    "winner_school": "Michigan",
    "loser": "Nick Lester",
    "loser_school": "Oklahoma",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 402,
    "winner": "Sam Speno",
    "winner_school": "NC State",
    "loser": "Chris Mecate",
    "loser_school": "Old Dominion",
    "result": "SV-1 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 403,
    "winner": "Luke Vaith",
    "winner_school": "Hofstra",
    "loser": "Daniel Neff",
    "loser_school": "Lock Haven",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 404,
    "winner": "Lavion Mayes",
    "winner_school": "Missouri",
    "loser": "Laike Gardner",
    "loser_school": "Lehigh",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 405,
    "winner": "Justin Arthur",
    "winner_school": "Clarion",
    "loser": "Matthew Frisch",
    "loser_school": "The Citadel",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 406,
    "winner": "Michael Depalma",
    "winner_school": "Kent State",
    "loser": "Augustus Sako",
    "loser_school": "Virginia",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 407,
    "winner": "Jake Sueflohn",
    "winner_school": "Nebraska",
    "loser": "Bryce Busler",
    "loser_school": "Bloomsburg",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 408,
    "winner": "Christopher Villalonga",
    "winner_school": "Cornell",
    "loser": "Tywan Claxton",
    "loser_school": "Ohio",
    "result": "SV-2 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 409,
    "winner": "Rylan Lubeck",
    "winner_school": "Wisconsin",
    "loser": "Brody Grothus",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 410,
    "winner": "James English",
    "winner_school": "Penn State",
    "loser": "Christian Barber",
    "loser_school": "North Carolina",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 411,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Robert Jillard",
    "loser_school": "Northern Illinois",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 412,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Alexander Richardson",
    "loser_school": "Old Dominion",
    "result": "M. For."
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 413,
    "winner": "Thomas Gantt",
    "winner_school": "NC State",
    "loser": "Aaron Walker",
    "loser_school": "The Citadel",
    "result": "TF-1.5 4:19 (18-0)"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 414,
    "winner": "Blaise Butler",
    "winner_school": "Virginia",
    "loser": "Markus Scheidel",
    "loser_school": "Columbia",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 415,
    "winner": "Paul Hancock",
    "winner_school": "Army",
    "loser": "Taylor Walsh",
    "loser_school": "Indiana",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 416,
    "winner": "Joseph LaVallee",
    "winner_school": "Missouri",
    "loser": "Johnny Greisheimer",
    "loser_school": "Edinboro",
    "result": "TF-1.5 7:00 (22-7)"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 417,
    "winner": "Dylan Alton",
    "winner_school": "Penn State",
    "loser": "Immanuel Kerr-Brown",
    "loser_school": "Duke",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 418,
    "winner": "Luke Smith",
    "winner_school": "Central Michigan",
    "loser": "Austin Matthews",
    "loser_school": "Clarion",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 419,
    "winner": "Anthony Perrotti",
    "winner_school": "Rutgers",
    "loser": "Roger Pena",
    "loser_school": "Oregon State",
    "result": "Fall 0:10"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 420,
    "winner": "Zach Brunson",
    "winner_school": "Illinois",
    "loser": "Justin DeAngelis",
    "loser_school": "Oklahoma",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 421,
    "winner": "Daniel Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Josh Houldsworth",
    "loser_school": "Columbia",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 422,
    "winner": "Ramon Santiago",
    "winner_school": "Rider",
    "loser": "Cooper Moore",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 423,
    "winner": "Nick Moore",
    "winner_school": "Iowa",
    "loser": "Corey Mock",
    "loser_school": "Chattanooga",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 424,
    "winner": "Dylan Palacio",
    "winner_school": "Cornell",
    "loser": "John Staudenmayer",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 425,
    "winner": "Chris Moon",
    "winner_school": "Virginia Tech",
    "loser": "Daniel Yates",
    "loser_school": "Michigan",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 426,
    "winner": "Ryan Leblanc",
    "winner_school": "Indiana",
    "loser": "Dakota Friesth",
    "loser_school": "Wyoming",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 427,
    "winner": "Joseph Booth",
    "winner_school": "Hofstra",
    "loser": "Austin Wilson",
    "loser_school": "Nebraska",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 428,
    "winner": "Jim Wilson",
    "winner_school": "Stanford",
    "loser": "Austin Trott",
    "loser_school": "Gardner-Webb",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 429,
    "winner": "Mathew Miller",
    "winner_school": "Navy",
    "loser": "Billy Curling",
    "loser_school": "Old Dominion",
    "result": "Fall 2:48"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 430,
    "winner": "Mike Ottinger",
    "winner_school": "Central Michigan",
    "loser": "Cody Walters",
    "loser_school": "Ohio",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 431,
    "winner": "Stephen Doty",
    "winner_school": "Virginia",
    "loser": "Brian Harvey",
    "loser_school": "Army",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 432,
    "winner": "Bryce Hammond",
    "winner_school": "CSU Bakersfield",
    "loser": "Conor Brennan",
    "loser_school": "Rider",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 433,
    "winner": "Mike Dessino",
    "winner_school": "Bloomsburg",
    "loser": "Mark Martin",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 434,
    "winner": "Tanner Weatherman",
    "winner_school": "Iowa State",
    "loser": "Austin Gabel",
    "loser_school": "Virginia Tech",
    "result": "TB-1 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 435,
    "winner": "Joe Latham",
    "winner_school": "Oregon State",
    "loser": "Cody Caldwell",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 436,
    "winner": "Tony Dallago",
    "winner_school": "Illinois",
    "loser": "Shane Hughes",
    "loser_school": "Columbia",
    "result": "Fall 4:13"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 437,
    "winner": "Lazarus Reyes",
    "winner_school": "Illinois",
    "loser": "Benjamin Stroh",
    "loser_school": "Wyoming",
    "result": "Fall 1:23"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 438,
    "winner": "Kenny Courts",
    "winner_school": "Ohio State",
    "loser": "Domenic Abounader",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 439,
    "winner": "Lawrence Thomas",
    "winner_school": "Penn",
    "loser": "Ethen Lofthouse",
    "loser_school": "Iowa",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 440,
    "winner": "John Rizqallah",
    "winner_school": "Michigan State",
    "loser": "Clint Morrison",
    "loser_school": "Rider",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 441,
    "winner": "Max Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Lelund Weatherspoon",
    "loser_school": "Iowa State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 442,
    "winner": "Victor Avery",
    "winner_school": "Edinboro",
    "loser": "Phillip Joseph",
    "loser_school": "Eastern Michigan",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 443,
    "winner": "Kurtis Julson",
    "winner_school": "North Dakota State",
    "loser": "Timothy Dudley",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 444,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Devin Hightower",
    "loser_school": "Air Force",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 445,
    "winner": "Braden Atwood",
    "winner_school": "Purdue",
    "loser": "Alex Polizzi",
    "loser_school": "Northwestern",
    "result": "Fall 2:32"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 446,
    "winner": "Christian Boley",
    "winner_school": "Maryland",
    "loser": "Travis Rutt",
    "loser_school": "Oklahoma",
    "result": "For."
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 447,
    "winner": "Richard Perry",
    "winner_school": "Bloomsburg",
    "loser": "Abram Ayala",
    "loser_school": "Princeton",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 448,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Daniel Mitchell",
    "loser_school": "American",
    "result": "MD 15-7"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 449,
    "winner": "Nick Bonaccorsi",
    "winner_school": "Pittsburgh",
    "loser": "Timothy McCall",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 450,
    "winner": "Shane Woods",
    "winner_school": "Wyoming",
    "loser": "Taylor Meeks",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 451,
    "winner": "Jace Bennett",
    "winner_school": "Cornell",
    "loser": "Phillip Wellington",
    "loser_school": "Ohio",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 452,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Dan Scherer",
    "loser_school": "Stanford",
    "result": "M. For."
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 453,
    "winner": "William Smith",
    "winner_school": "Rutgers",
    "loser": "Joe Stolfi",
    "loser_school": "Bucknell",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 454,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Ty Walz",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 455,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Anthony Vizcarrondo",
    "loser_school": "West Virginia",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 456,
    "winner": "Ross Larson",
    "winner_school": "Oklahoma",
    "loser": "Jonathan Gingrich",
    "loser_school": "Penn State",
    "result": "Fall 2:03"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 457,
    "winner": "Ernest James",
    "winner_school": "Edinboro",
    "loser": "Justin Grant",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 458,
    "winner": "Nick Tavanello",
    "winner_school": "Ohio State",
    "loser": "Spencer Myers",
    "loser_school": "Maryland",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 459,
    "winner": "J.T Felix",
    "winner_school": "Boise State",
    "loser": "Patrick Tasser",
    "loser_school": "Pittsburgh",
    "result": "Fall 1:35"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 460,
    "winner": "Amarveer Dhesi",
    "winner_school": "Oregon State",
    "loser": "Adam Fager",
    "loser_school": "Utah Valley",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 461,
    "winner": "Anthony Zanetta",
    "winner_school": "Pittsburgh",
    "loser": "Kory Mines",
    "loser_school": "Edinboro",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 462,
    "winner": "Edward Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Robert Deutsch",
    "loser_school": "Rider",
    "result": "Fall 3:36"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 463,
    "winner": "Darian Cruz",
    "winner_school": "Lehigh",
    "loser": "Tim Lambert",
    "loser_school": "Nebraska",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 464,
    "winner": "Joey Dance",
    "winner_school": "Virginia Tech",
    "loser": "Bradley Taylor",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 465,
    "winner": "Rosario Bruno",
    "winner_school": "Michigan",
    "loser": "Nick Soto",
    "loser_school": "Chattanooga",
    "result": "Fall 4:47"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 466,
    "winner": "Ryan Mango",
    "winner_school": "Stanford",
    "loser": "Zane Richards",
    "loser_school": "Illinois",
    "result": "Dec 19-13"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 467,
    "winner": "Joe Roth",
    "winner_school": "Central Michigan",
    "loser": "Jonathon Morrison",
    "loser_school": "Oklahoma State",
    "result": "TB-1 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 468,
    "winner": "Mark Grey",
    "winner_school": "Cornell",
    "loser": "Johnni DiJulius",
    "loser_school": "Ohio State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 469,
    "winner": "Anthony Collica",
    "winner_school": "Oklahoma State",
    "loser": "Zach Horan",
    "loser_school": "Central Michigan",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 470,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Josh Dziewa",
    "loser_school": "Iowa",
    "result": "SV-2 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 471,
    "winner": "Stephen Dutton III",
    "winner_school": "Michigan",
    "loser": "Sam Speno",
    "loser_school": "NC State",
    "result": "MD 13-0"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 472,
    "winner": "Luke Vaith",
    "winner_school": "Hofstra",
    "loser": "Lavion Mayes",
    "loser_school": "Missouri",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 473,
    "winner": "Justin Arthur",
    "winner_school": "Clarion",
    "loser": "Michael Depalma",
    "loser_school": "Kent State",
    "result": "Fall 4:11"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 474,
    "winner": "Christopher Villalonga",
    "winner_school": "Cornell",
    "loser": "Jake Sueflohn",
    "loser_school": "Nebraska",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 475,
    "winner": "James English",
    "winner_school": "Penn State",
    "loser": "Rylan Lubeck",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 476,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Nick Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 477,
    "winner": "Thomas Gantt",
    "winner_school": "NC State",
    "loser": "Blaise Butler",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 478,
    "winner": "Joseph LaVallee",
    "winner_school": "Missouri",
    "loser": "Paul Hancock",
    "loser_school": "Army",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 479,
    "winner": "Luke Smith",
    "winner_school": "Central Michigan",
    "loser": "Dylan Alton",
    "loser_school": "Penn State",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 480,
    "winner": "Anthony Perrotti",
    "winner_school": "Rutgers",
    "loser": "Zach Brunson",
    "loser_school": "Illinois",
    "result": "Fall 4:29"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 481,
    "winner": "Daniel Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Ramon Santiago",
    "loser_school": "Rider",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 482,
    "winner": "Dylan Palacio",
    "winner_school": "Cornell",
    "loser": "Nick Moore",
    "loser_school": "Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 483,
    "winner": "Ryan Leblanc",
    "winner_school": "Indiana",
    "loser": "Chris Moon",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 484,
    "winner": "Joseph Booth",
    "winner_school": "Hofstra",
    "loser": "Jim Wilson",
    "loser_school": "Stanford",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 485,
    "winner": "Mathew Miller",
    "winner_school": "Navy",
    "loser": "Mike Ottinger",
    "loser_school": "Central Michigan",
    "result": "DQ"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 486,
    "winner": "Bryce Hammond",
    "winner_school": "CSU Bakersfield",
    "loser": "Stephen Doty",
    "loser_school": "Virginia",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 487,
    "winner": "Tanner Weatherman",
    "winner_school": "Iowa State",
    "loser": "Mike Dessino",
    "loser_school": "Bloomsburg",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 488,
    "winner": "Tony Dallago",
    "winner_school": "Illinois",
    "loser": "Joe Latham",
    "loser_school": "Oregon State",
    "result": "Fall 0:40"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 489,
    "winner": "Kenny Courts",
    "winner_school": "Ohio State",
    "loser": "Lazarus Reyes",
    "loser_school": "Illinois",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 490,
    "winner": "Lawrence Thomas",
    "winner_school": "Penn",
    "loser": "John Rizqallah",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 491,
    "winner": "Max Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Victor Avery",
    "loser_school": "Edinboro",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 492,
    "winner": "Ryan Loder",
    "winner_school": "Northern Iowa",
    "loser": "Kurtis Julson",
    "loser_school": "North Dakota State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 493,
    "winner": "Christian Boley",
    "winner_school": "Maryland",
    "loser": "Braden Atwood",
    "loser_school": "Purdue",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 494,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Richard Perry",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 495,
    "winner": "Nick Bonaccorsi",
    "winner_school": "Pittsburgh",
    "loser": "Shane Woods",
    "loser_school": "Wyoming",
    "result": "SV-1 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 496,
    "winner": "Mario Gonzalez",
    "winner_school": "Illinois",
    "loser": "Jace Bennett",
    "loser_school": "Cornell",
    "result": "Fall 3:30"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "William Smith",
    "loser_school": "Rutgers",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Ross Larson",
    "loser_school": "Oklahoma",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Nick Tavanello",
    "winner_school": "Ohio State",
    "loser": "Ernest James",
    "loser_school": "Edinboro",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "J.T Felix",
    "winner_school": "Boise State",
    "loser": "Amarveer Dhesi",
    "loser_school": "Oregon State",
    "result": "Fall 2:29"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 501,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Dylan Peters",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-6"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 502,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Nicholas Megaludis",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 503,
    "winner": "Tyler Graff",
    "winner_school": "Wisconsin",
    "loser": "Joe Colon",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 504,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Aaron (A.J.) Schopp",
    "loser_school": "Edinboro",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 505,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Evan Henderson",
    "loser_school": "North Carolina",
    "result": "MD 12-3"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 506,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Zain Retherford",
    "loser_school": "Penn State",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 507,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "Drake Houdashelt",
    "loser_school": "Missouri",
    "result": "TB-1 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 508,
    "winner": "Joshua Kindig",
    "winner_school": "Oklahoma State",
    "loser": "Mitchell Minotti",
    "loser_school": "Lehigh",
    "result": "Dec 5-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 509,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Ian Miller",
    "loser_school": "Kent State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 510,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Brian Realbuto",
    "loser_school": "Cornell",
    "result": "Dec 7-4"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 511,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Steven Monk",
    "loser_school": "North Dakota State",
    "result": "MD 13-5"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 512,
    "winner": "Tyler Caldwell",
    "winner_school": "Oklahoma State",
    "loser": "Nicholas Sulzer",
    "loser_school": "Virginia",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 513,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "TB-1 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 514,
    "winner": "Andrew Howe",
    "winner_school": "Oklahoma",
    "loser": "Logan Storley",
    "loser_school": "Minnesota",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 515,
    "winner": "Jimmy Sheptock",
    "winner_school": "Maryland",
    "loser": "Jack Dechow",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 516,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Gabriel Dean",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 517,
    "winner": "Nick Heflin",
    "winner_school": "Ohio State",
    "loser": "Scott Schiller",
    "loser_school": "Minnesota",
    "result": "TB-1 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 518,
    "winner": "J`Den Cox",
    "winner_school": "Missouri",
    "loser": "Chris Penny",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 519,
    "winner": "Anthony Nelson",
    "winner_school": "Minnesota",
    "loser": "Bobby Telford",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 520,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "Adam Chalfant",
    "loser_school": "Indiana",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 521,
    "winner": "Earl Hall",
    "winner_school": "Iowa State",
    "loser": "Anthony Zanetta",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 522,
    "winner": "Cory Clark",
    "winner_school": "Iowa",
    "loser": "Edward Klimara",
    "loser_school": "Oklahoma State",
    "result": "TB-1 7-6"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 523,
    "winner": "Darian Cruz",
    "winner_school": "Lehigh",
    "loser": "David Terao",
    "loser_school": "American",
    "result": "TB-1 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 524,
    "winner": "Joey Dance",
    "winner_school": "Virginia Tech",
    "loser": "Jarrod Patterson",
    "loser_school": "Oklahoma",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 525,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Rosario Bruno",
    "loser_school": "Michigan",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 526,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Ryan Mango",
    "loser_school": "Stanford",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 527,
    "winner": "Joe Roth",
    "winner_school": "Central Michigan",
    "loser": "Cash Quiroga",
    "loser_school": "Purdue",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 528,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Mark Grey",
    "loser_school": "Cornell",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 529,
    "winner": "Richard Durso",
    "winner_school": "Franklin and Marshall",
    "loser": "Anthony Collica",
    "loser_school": "Oklahoma State",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 530,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Christopher Dardanes",
    "loser_school": "Minnesota",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 531,
    "winner": "Stephen Dutton III",
    "winner_school": "Michigan",
    "loser": "Todd Preston",
    "loser_school": "Harvard",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 532,
    "winner": "Joey Lazor",
    "winner_school": "Northern Iowa",
    "loser": "Luke Vaith",
    "loser_school": "Hofstra",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 533,
    "winner": "Kendric Maple",
    "winner_school": "Oklahoma",
    "loser": "Justin Arthur",
    "loser_school": "Clarion",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 534,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Christopher Villalonga",
    "loser_school": "Cornell",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 535,
    "winner": "James English",
    "winner_school": "Penn State",
    "loser": "Zach Neibert",
    "loser_school": "Virginia Tech",
    "result": "SV-1 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 536,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Scott Sakaguchi",
    "loser_school": "Oregon State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 537,
    "winner": "Isaac Jordan",
    "winner_school": "Wisconsin",
    "loser": "Thomas Gantt",
    "loser_school": "NC State",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 538,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Joseph LaVallee",
    "loser_school": "Missouri",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 539,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Luke Smith",
    "loser_school": "Central Michigan",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 540,
    "winner": "Anthony Perrotti",
    "winner_school": "Rutgers",
    "loser": "Nestor Taffur",
    "loser_school": "Boston University",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 541,
    "winner": "Daniel Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Josh Veltre",
    "loser_school": "Bloomsburg",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 542,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Dylan Palacio",
    "loser_school": "Cornell",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 543,
    "winner": "Pierce Harger",
    "winner_school": "Northwestern",
    "loser": "Ryan Leblanc",
    "loser_school": "Indiana",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 544,
    "winner": "Turtogtokh Luvsandorj",
    "winner_school": "The Citadel",
    "loser": "Joseph Booth",
    "loser_school": "Hofstra",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 545,
    "winner": "Matt Brown",
    "winner_school": "Penn State",
    "loser": "Mathew Miller",
    "loser_school": "Navy",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 546,
    "winner": "Bryce Hammond",
    "winner_school": "CSU Bakersfield",
    "loser": "Elliot Riddick",
    "loser_school": "Lehigh",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 547,
    "winner": "Tyler Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Tanner Weatherman",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 548,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Tony Dallago",
    "loser_school": "Illinois",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 549,
    "winner": "Ophir Bernstein",
    "winner_school": "Brown",
    "loser": "Kenny Courts",
    "loser_school": "Ohio State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 550,
    "winner": "Lawrence Thomas",
    "winner_school": "Penn",
    "loser": "Blake Stauffer",
    "loser_school": "Arizona State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 551,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Max Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 552,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Ryan Loder",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 553,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Christian Boley",
    "loser_school": "Maryland",
    "result": "Fall 2:41"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 554,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Cody Reed",
    "loser_school": "Binghamton",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 555,
    "winner": "Conner Hartmann",
    "winner_school": "Duke",
    "loser": "Nick Bonaccorsi",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 556,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "Mario Gonzalez",
    "loser_school": "Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 557,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Adam Coon",
    "loser_school": "Michigan",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 558,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Connor Medbery",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 559,
    "winner": "Mike McClure",
    "winner_school": "Michigan State",
    "loser": "Nick Tavanello",
    "loser_school": "Ohio State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 560,
    "winner": "Austin Marsden",
    "winner_school": "Oklahoma State",
    "loser": "J.T Felix",
    "loser_school": "Boise State",
    "result": "SV-1 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 561,
    "winner": "Cory Clark",
    "winner_school": "Iowa",
    "loser": "Earl Hall",
    "loser_school": "Iowa State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 562,
    "winner": "Joey Dance",
    "winner_school": "Virginia Tech",
    "loser": "Darian Cruz",
    "loser_school": "Lehigh",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 563,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Cody Brewer",
    "loser_school": "Oklahoma",
    "result": "Dec 14-10"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 564,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Joe Roth",
    "loser_school": "Central Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 565,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Richard Durso",
    "loser_school": "Franklin and Marshall",
    "result": "MD 11-3"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 566,
    "winner": "Joey Lazor",
    "winner_school": "Northern Iowa",
    "loser": "Stephen Dutton III",
    "loser_school": "Michigan",
    "result": "Fall 3:27"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 567,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Kendric Maple",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 568,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "James English",
    "loser_school": "Penn State",
    "result": "Fall 4:52"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 569,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Isaac Jordan",
    "loser_school": "Wisconsin",
    "result": "TF-1.5 4:20 (15-0)"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 570,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Anthony Perrotti",
    "loser_school": "Rutgers",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 571,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Daniel Zilverberg",
    "loser_school": "Minnesota",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 572,
    "winner": "Turtogtokh Luvsandorj",
    "winner_school": "The Citadel",
    "loser": "Pierce Harger",
    "loser_school": "Northwestern",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 573,
    "winner": "Matt Brown",
    "winner_school": "Penn State",
    "loser": "Bryce Hammond",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 574,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Tyler Wilps",
    "loser_school": "Pittsburgh",
    "result": "TB-1 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 575,
    "winner": "Lawrence Thomas",
    "winner_school": "Penn",
    "loser": "Ophir Bernstein",
    "loser_school": "Brown",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 576,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Jacob Swartz",
    "loser_school": "Boise State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 577,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Morgan McIntosh",
    "loser_school": "Penn State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 578,
    "winner": "Conner Hartmann",
    "winner_school": "Duke",
    "loser": "Nathan Burak",
    "loser_school": "Iowa",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Jeremy Johnson",
    "loser_school": "Ohio",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Mike McClure",
    "winner_school": "Michigan State",
    "loser": "Austin Marsden",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Cory Clark",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Joey Dance",
    "winner_school": "Virginia Tech",
    "loser": "Dylan Peters",
    "loser_school": "Northern Iowa",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Aaron (A.J.) Schopp",
    "winner_school": "Edinboro",
    "loser": "David Thorn",
    "loser_school": "Minnesota",
    "result": "MD 12-4"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Joe Colon",
    "winner_school": "Northern Iowa",
    "loser": "Mason Beckman",
    "loser_school": "Lehigh",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Zain Retherford",
    "loser_school": "Penn State",
    "result": "TB-2 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Evan Henderson",
    "winner_school": "North Carolina",
    "loser": "Joey Lazor",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "Mitchell Minotti",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Drake Houdashelt",
    "loser_school": "Missouri",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Brian Realbuto",
    "loser_school": "Cornell",
    "result": "M. For."
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Derek St. John",
    "loser_school": "Iowa",
    "result": "Dec 14-9"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Michael Moreno",
    "loser_school": "Iowa State",
    "result": "MD 13-1"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Turtogtokh Luvsandorj",
    "loser_school": "The Citadel",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Matt Brown",
    "loser_school": "Penn State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "Lawrence Thomas",
    "loser_school": "Penn",
    "result": "Fall 6:42"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Jack Dechow",
    "winner_school": "Old Dominion",
    "loser": "Kevin Steinhaus",
    "loser_school": "Minnesota",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Chris Penny",
    "loser_school": "Virginia Tech",
    "result": "Fall 3:24"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Conner Hartmann",
    "loser_school": "Duke",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Adam Chalfant",
    "loser_school": "Indiana",
    "result": "Fall 0:18"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Mike McClure",
    "loser_school": "Michigan State",
    "result": "Dec 1-0"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Nicholas Megaludis",
    "winner_school": "Penn State",
    "loser": "Joey Dance",
    "loser_school": "Virginia Tech",
    "result": "Dec 6-1"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Cory Clark",
    "winner_school": "Iowa",
    "loser": "Dylan Peters",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Darian Cruz",
    "winner_school": "Lehigh",
    "loser": "Earl Hall",
    "loser_school": "Iowa State",
    "result": "TB-2 2-1"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Joe Colon",
    "winner_school": "Northern Iowa",
    "loser": "Aaron (A.J.) Schopp",
    "loser_school": "Edinboro",
    "result": "Dec 1-0"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "David Thorn",
    "winner_school": "Minnesota",
    "loser": "Mason Beckman",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Joe Roth",
    "winner_school": "Central Michigan",
    "loser": "Cody Brewer",
    "loser_school": "Oklahoma",
    "result": "Dec 8-6"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Evan Henderson",
    "loser_school": "North Carolina",
    "result": "MD 9-1"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Zain Retherford",
    "winner_school": "Penn State",
    "loser": "Joey Lazor",
    "loser_school": "Northern Iowa",
    "result": "M. For."
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Stephen Dutton III",
    "winner_school": "Michigan",
    "loser": "Richard Durso",
    "loser_school": "Franklin and Marshall",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Eric Grajales",
    "winner_school": "Michigan",
    "loser": "David Habat",
    "loser_school": "Edinboro",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Mitchell Minotti",
    "loser_school": "Lehigh",
    "result": "Dec 3-0"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "James English",
    "winner_school": "Penn State",
    "loser": "Kendric Maple",
    "loser_school": "Oklahoma",
    "result": "TB-1 2-1"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Ian Miller",
    "loser_school": "Kent State",
    "result": "MD 13-1"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Derek St. John",
    "winner_school": "Iowa",
    "loser": "Brian Realbuto",
    "loser_school": "Cornell",
    "result": "M. For."
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Isaac Jordan",
    "winner_school": "Wisconsin",
    "loser": "Anthony Perrotti",
    "loser_school": "Rutgers",
    "result": "Dec 2-0"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Steven Monk",
    "winner_school": "North Dakota State",
    "loser": "Nicholas Sulzer",
    "loser_school": "Virginia",
    "result": "Fall 5:26"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Turtogtokh Luvsandorj",
    "loser_school": "The Citadel",
    "result": "Dec 9-3"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Daniel Zilverberg",
    "winner_school": "Minnesota",
    "loser": "Pierce Harger",
    "loser_school": "Northwestern",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Robert Kokesh",
    "loser_school": "Nebraska",
    "result": "TB-1 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Matt Brown",
    "winner_school": "Penn State",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Tyler Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Bryce Hammond",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-2"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "Jack Dechow",
    "loser_school": "Old Dominion",
    "result": "Dec 5-4"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Kevin Steinhaus",
    "winner_school": "Minnesota",
    "loser": "Lawrence Thomas",
    "loser_school": "Penn",
    "result": "TF-1.5 6:03 (18-2)"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Jacob Swartz",
    "winner_school": "Boise State",
    "loser": "Ophir Bernstein",
    "loser_school": "Brown",
    "result": "Dec 6-1"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Kyven Gadson",
    "loser_school": "Iowa State",
    "result": "Dec 9-6"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Conner Hartmann",
    "winner_school": "Duke",
    "loser": "Chris Penny",
    "loser_school": "Virginia Tech",
    "result": "M. For."
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Nathan Burak",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Bobby Telford",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Mike McClure",
    "winner_school": "Michigan State",
    "loser": "Adam Chalfant",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Jeremy Johnson",
    "winner_school": "Ohio",
    "loser": "Austin Marsden",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Nahshon Garrett",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Tony Ramos",
    "winner_school": "Iowa",
    "loser": "Tyler Graff",
    "loser_school": "Wisconsin",
    "result": "TB-1 3-1"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Devin Carter",
    "loser_school": "Virginia Tech",
    "result": "MD 10-1"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "Joshua Kindig",
    "loser_school": "Oklahoma State",
    "result": "SV-1 3-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Dylan Ness",
    "loser_school": "Minnesota",
    "result": "MD 13-4"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "David Taylor",
    "winner_school": "Penn State",
    "loser": "Tyler Caldwell",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-0"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Chris Perry",
    "winner_school": "Oklahoma State",
    "loser": "Andrew Howe",
    "loser_school": "Oklahoma",
    "result": "Dec 4-0"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Edward Ruth",
    "winner_school": "Penn State",
    "loser": "Jimmy Sheptock",
    "loser_school": "Maryland",
    "result": "Dec 7-2"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "J`Den Cox",
    "winner_school": "Missouri",
    "loser": "Nick Heflin",
    "loser_school": "Ohio State",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "Anthony Nelson",
    "loser_school": "Minnesota",
    "result": "Dec 4-2"
  }
];
