// 2015 NCAA Division I Wrestling Championships — transcribed from the official NCAA bracket PDF (see FREEZE.md / transcription report).
// Result text exactly as printed. School names from the year-aware school-code map (school-codes.json).
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Josh Martinez",
    "winner_school": "Air Force",
    "loser": "Dominic Parisi",
    "loser_school": "Appalachian State",
    "result": "Dec 8-5"
  },
  {
    "round": "Prelims",
    "weight": "133",
    "bout": 2,
    "winner": "Ian Nickell",
    "winner_school": "CSU Bakersfield",
    "loser": "Troy Heilmann",
    "loser_school": "North Carolina",
    "result": "Dec 8-4"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Jordan Laster",
    "winner_school": "Princeton",
    "loser": "Chuck Zeisloft",
    "loser_school": "Rider",
    "result": "SV-2 4-2"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Christian Barber",
    "winner_school": "North Carolina",
    "loser": "Clayton Ream",
    "loser_school": "North Dakota State",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Louis Mascola",
    "winner_school": "Maryland",
    "loser": "Immanuel Kerr-Brown",
    "loser_school": "Duke",
    "result": "Dec 11-10"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Mike England",
    "winner_school": "Missouri",
    "loser": "Tyrel White",
    "loser_school": "Columbia",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Nathan Jackson",
    "winner_school": "Indiana",
    "loser": "Ethan Smith",
    "loser_school": "Utah Valley",
    "result": "Dec 11-4"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Ben Stroh",
    "winner_school": "Wyoming",
    "loser": "Jack McKeever",
    "loser_school": "Binghamton",
    "result": "Dec 4-0"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Basil Minto",
    "winner_school": "Northern Iowa",
    "loser": "Nathan Rotert",
    "loser_school": "South Dakota State",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Nathan Butler",
    "winner_school": "Stanford",
    "loser": "David Ng",
    "loser_school": "Harvard",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Brandon Jeske",
    "loser_school": "Old Dominion",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Conor Youtsey",
    "winner_school": "Michigan",
    "loser": "Paul Petrov",
    "loser_school": "Bucknell",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "David Terao",
    "winner_school": "American",
    "loser": "Dylan Peters",
    "loser_school": "Northern Iowa",
    "result": "Dec 12-10"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Jesse Delgado",
    "winner_school": "Illinois",
    "loser": "Tyler Cox",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Sean Boyle",
    "winner_school": "Chattanooga",
    "loser": "Scott Parker",
    "loser_school": "Lehigh",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Kory Mines",
    "winner_school": "Edinboro",
    "loser": "Ares Carpio",
    "loser_school": "Arizona State",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Ben Willeford",
    "winner_school": "Cleveland State",
    "loser": "Ethan Lizak",
    "loser_school": "Minnesota",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Nathan Tomasello",
    "winner_school": "Ohio State",
    "loser": "Joe DeAngelo",
    "loser_school": "NC State",
    "result": "Fall 2:25"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Joey Dance",
    "winner_school": "Virginia Tech",
    "loser": "Dom Forys",
    "loser_school": "Pittsburgh",
    "result": "Fall 6:37"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Josh Martinez",
    "winner_school": "Air Force",
    "loser": "Joshua Rodriguez",
    "loser_school": "North Dakota State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Jordan Conaway",
    "winner_school": "Penn State",
    "loser": "Joaquin Marquez",
    "loser_school": "The Citadel",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Thomas Gilman",
    "winner_school": "Iowa",
    "loser": "Evan Silver",
    "loser_school": "Stanford",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Eddie Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Trey Andrews",
    "loser_school": "Northern Colorado",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Ronnie Rios",
    "winner_school": "Oregon State",
    "loser": "Nick Herrmann",
    "loser_school": "Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Zeke Moisey",
    "winner_school": "West Virginia",
    "loser": "Chasen Tolbert",
    "loser_school": "Utah Valley",
    "result": "MD 14-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Tim Lambert",
    "loser_school": "Nebraska",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Connor Schram",
    "loser_school": "Stanford",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "Mackenzie McGuire",
    "winner_school": "Kent State",
    "loser": "Gary Wayne Harding",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Caleb Richardson",
    "winner_school": "Penn",
    "loser": "A.J. Schopp",
    "loser_school": "Edinboro",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Kevin Devoy",
    "winner_school": "Drexel",
    "loser": "Geoffrey Alexander",
    "loser_school": "Maryland",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Zane Richards",
    "winner_school": "Illinois",
    "loser": "Jack Hathaway",
    "loser_school": "Oregon State",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "George DiCamillo",
    "winner_school": "Virginia",
    "loser": "Kevin Norstrem",
    "loser_school": "Virginia Tech",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Dominick Malone",
    "loser_school": "Northwestern",
    "result": "Fall 3:28"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Johnni DiJulius",
    "winner_school": "Ohio State",
    "loser": "Ian Nickell",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Cory Clark",
    "winner_school": "Iowa",
    "loser": "Ronald Perry",
    "loser_school": "Lock Haven",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Rossi Bruno",
    "winner_school": "Michigan",
    "loser": "Robert Deutsch",
    "loser_school": "Rider",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Danny Sabatello",
    "winner_school": "Purdue",
    "loser": "Zach Synon",
    "loser_school": "Missouri",
    "result": "SV-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Earl Hall",
    "winner_school": "Iowa State",
    "loser": "Eric Montoya",
    "loser_school": "Nebraska",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "James Gulibon",
    "winner_school": "Penn State",
    "loser": "Scott Delvecchio",
    "loser_school": "Rutgers",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Jade Rauser",
    "winner_school": "Utah Valley",
    "loser": "Mason Beckman",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Mark Grey",
    "winner_school": "Cornell",
    "loser": "Nick Soto",
    "loser_school": "Chattanooga",
    "result": "Fall 2:53"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Bradley Taylor",
    "winner_school": "Wisconsin",
    "loser": "Mitch Finesilver",
    "loser_school": "Duke",
    "result": "TF-1 5:58 (23-8)"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Jordan Laster",
    "loser_school": "Princeton",
    "result": "TF-1.5 3:33 (18-1)"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Mike Morales",
    "winner_school": "West Virginia",
    "loser": "George Fisher",
    "loser_school": "Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Anthony Abidin",
    "winner_school": "Nebraska",
    "loser": "Nick Lawrence",
    "loser_school": "Purdue",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Geo Martinez",
    "winner_school": "Boise State",
    "loser": "David Pearce",
    "loser_school": "Drexel",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Kevin Jack",
    "winner_school": "NC State",
    "loser": "Josh Dziewa",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Joseph Ward",
    "winner_school": "North Carolina",
    "loser": "Mike Pongracz",
    "loser_school": "Chattanooga",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Randy Cruz",
    "winner_school": "Lehigh",
    "loser": "Dante Rodriguez",
    "loser_school": "Iowa State",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Tyler Small",
    "loser_school": "Kent State",
    "result": "TF-1 6:59 (23-7)"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Lavion Mayes",
    "winner_school": "Missouri",
    "loser": "Joseph Spisak",
    "loser_school": "Virginia",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Dean Heil",
    "winner_school": "Oklahoma State",
    "loser": "Jesse Thielke",
    "loser_school": "Wisconsin",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Chris Mecate",
    "winner_school": "Old Dominion",
    "loser": "Tyler Smith",
    "loser_school": "Bucknell",
    "result": "Fall 1:16"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Nick Dardanes",
    "winner_school": "Minnesota",
    "loser": "Steven Rodrigues",
    "loser_school": "Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Anthony Ashnault",
    "winner_school": "Rutgers",
    "loser": "Mike Longo",
    "loser_school": "Appalachian State",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Zachary Horan",
    "winner_school": "Central Michigan",
    "loser": "Matthew Kraus",
    "loser_school": "Arizona State",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Jamel Hudson",
    "winner_school": "Hofstra",
    "loser": "Jameston Oster",
    "loser_school": "Northwestern",
    "result": "Fall 5:16"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Mitchell Bengtson",
    "loser_school": "North Dakota State",
    "result": "MD 17-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Christian Barber",
    "loser_school": "North Carolina",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Brandon Nelson",
    "winner_school": "Purdue",
    "loser": "Mike Racciato",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Colin Heffernan",
    "winner_school": "Central Michigan",
    "loser": "Gabe Moreno",
    "loser_school": "Iowa State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Alexander Richardson",
    "winner_school": "Old Dominion",
    "loser": "Chris Perez",
    "loser_school": "Princeton",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Christopher Villalonga",
    "winner_school": "Cornell",
    "loser": "Marcus Cain",
    "loser_school": "Duke",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Zack Beitz",
    "winner_school": "Penn State",
    "loser": "Shawn Greevy",
    "loser_school": "Chattanooga",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Charles Cobb",
    "winner_school": "Penn",
    "loser": "Michael Depalma",
    "loser_school": "Kent State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Brandon Sorensen",
    "winner_school": "Iowa",
    "loser": "Kyle Langenderfer",
    "loser_school": "Illinois",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Joshua Kindig",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Cody Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Hunter Stieber",
    "loser_school": "Ohio State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Tywan Claxton",
    "winner_school": "Ohio",
    "loser": "Matthew Frisch",
    "loser_school": "The Citadel",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Garrett Schaner",
    "winner_school": "Stanford",
    "loser": "Alec Pantaleo",
    "loser_school": "Michigan",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Sal Mastriani",
    "winner_school": "Virginia Tech",
    "loser": "Matthew Cimato",
    "loser_school": "Drexel",
    "result": "SV-1 13-11"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Kenneth Theobold",
    "winner_school": "Rutgers",
    "loser": "Christian Pagdilao",
    "loser_school": "Arizona State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Bryant Clagon",
    "winner_school": "Rider",
    "loser": "Ryan Mosley",
    "loser_school": "Gardner-Webb",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "Daniel Neff",
    "loser_school": "Lock Haven",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Isaiah Martinez",
    "winner_school": "Illinois",
    "loser": "Russell Parsons",
    "loser_school": "Army",
    "result": "TF-1.5 6:43 (18-2)"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Spartak Chino",
    "winner_school": "Ohio",
    "loser": "Aaron Walker",
    "loser_school": "The Citadel",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "Joseph LaVallee",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "John Boyle",
    "winner_school": "American",
    "loser": "Steven Hernandez",
    "loser_school": "Boise State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Louis Mascola",
    "winner_school": "Maryland",
    "loser": "Cody Pack",
    "loser_school": "South Dakota State",
    "result": "Dec 10-9"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Mitchell Minotti",
    "winner_school": "Lehigh",
    "loser": "Andrew Atkinson",
    "loser_school": "Virginia",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Noel Blanco",
    "winner_school": "Drexel",
    "loser": "Anthony Perrotti",
    "loser_school": "Rutgers",
    "result": "SV-1 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Markus Scheidel",
    "loser_school": "Columbia",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Brandon Zeerip",
    "loser_school": "Eastern Michigan",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Chad Walsh",
    "winner_school": "Rider",
    "loser": "Gregory Flournoy",
    "loser_school": "George Mason",
    "result": "TB-1 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Brian Murphy",
    "winner_school": "Michigan",
    "loser": "Alex Elder",
    "loser_school": "Oregon State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Josh Demas",
    "winner_school": "Ohio State",
    "loser": "Mike Kelly",
    "loser_school": "Iowa",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Doug Welch",
    "loser_school": "Purdue",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Justin DeAngelis",
    "winner_school": "Oklahoma",
    "loser": "Brooks Martino",
    "loser_school": "Penn",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Anthony Collica",
    "winner_school": "Oklahoma State",
    "loser": "Justin Staudenmayer",
    "loser_school": "Brown",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Brian Realbuto",
    "winner_school": "Cornell",
    "loser": "Oliver Pierce",
    "loser_school": "Arizona State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Connor McMahon",
    "loser_school": "SIU Edwardsville",
    "result": "Fall 4:33"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Max Rohskopf",
    "winner_school": "NC State",
    "loser": "Harrison Hightower",
    "loser_school": "Ohio",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Jackson Morse",
    "winner_school": "Illinois",
    "loser": "Connor Brennan",
    "loser_school": "Rider",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Peyton Walsh",
    "winner_school": "Navy",
    "loser": "Jesse Stafford",
    "loser_school": "Air Force",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Bo Jordan",
    "winner_school": "Ohio State",
    "loser": "Garrett Sutton",
    "loser_school": "Michigan",
    "result": "Fall 4:03"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Dylan Palacio",
    "winner_school": "Cornell",
    "loser": "Troy Reaghard",
    "loser_school": "Pittsburgh",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Cooper Moore",
    "winner_school": "Northern Iowa",
    "loser": "Patrick Robinson IV",
    "loser_school": "Purdue",
    "result": "Fall 1:37"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Clark Glass",
    "loser_school": "Oklahoma",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Isaac Jordan",
    "winner_school": "Wisconsin",
    "loser": "Jonathan Schleifer",
    "loser_school": "Princeton",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Coleman Gracey",
    "winner_school": "Army",
    "loser": "Adam Fierro",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Mike England",
    "winner_school": "Missouri",
    "loser": "Tristan Warner",
    "loser_school": "Old Dominion",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Taylor Walsh",
    "winner_school": "Indiana",
    "loser": "Dakota Friesth",
    "loser_school": "Wyoming",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Pierce Harger",
    "winner_school": "Northwestern",
    "loser": "Nick Moore",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Jim Wilson",
    "winner_school": "Stanford",
    "loser": "Mitchell Polkowske",
    "loser_school": "Northern Colorado",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Ethan Ramos",
    "winner_school": "North Carolina",
    "loser": "Seth Thomas",
    "loser_school": "Oregon State",
    "result": "Fall 6:47"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Austin Wilson",
    "winner_school": "Nebraska",
    "loser": "Michael Moreno",
    "loser_school": "Iowa State",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Taylor Massa",
    "loser_school": "Michigan",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Chad Welch",
    "winner_school": "Purdue",
    "loser": "Frank Cousins",
    "loser_school": "Wisconsin",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Cody Walters",
    "winner_school": "Ohio",
    "loser": "George Pickett",
    "loser_school": "Cornell",
    "result": "TB-1 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Tyler Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Matt Reed",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Blaise Butler",
    "winner_school": "Virginia",
    "loser": "Jordan Ellingwood",
    "loser_school": "Central Michigan",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Kyle Crutchmer",
    "winner_school": "Oklahoma State",
    "loser": "Jadaen Bernstein",
    "loser_school": "Navy",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Dominic Kastl",
    "winner_school": "Cal Poly",
    "loser": "Tanner Weatherman",
    "loser_school": "Iowa State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Joe Latham",
    "winner_school": "Oregon State",
    "loser": "John Eblen",
    "loser_school": "Missouri",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Nathan Jackson",
    "loser_school": "Indiana",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Andy McCulley",
    "winner_school": "Wyoming",
    "loser": "John Staudenmayer",
    "loser_school": "North Carolina",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Zach Brunson",
    "winner_school": "Illinois",
    "loser": "Ryan Wolfe",
    "loser_school": "Rider",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Brian Harvey",
    "loser_school": "Army",
    "result": "Dec 11-9"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Zach Epperly",
    "winner_school": "Virginia Tech",
    "loser": "Sean Mappes",
    "loser_school": "Chattanooga",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Kurtis Julson",
    "winner_school": "North Dakota State",
    "loser": "Mark Martin",
    "loser_school": "Ohio State",
    "result": "TB-2 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Santiago Martinez",
    "winner_school": "Lehigh",
    "loser": "Raymond Waters",
    "loser_school": "Arizona State",
    "result": "Fall 6:56"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Matthew Brown",
    "winner_school": "Penn State",
    "loser": "Pete Renda",
    "loser_school": "NC State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "Patrick Kissel",
    "loser_school": "Purdue",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Timothy Dudley",
    "winner_school": "Nebraska",
    "loser": "Ophir Bernstein",
    "loser_school": "Brown",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Sam Brooks",
    "winner_school": "Iowa",
    "loser": "Ben Stroh",
    "loser_school": "Wyoming",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Domenic Abounader",
    "winner_school": "Michigan",
    "loser": "Fred Garcia",
    "loser_school": "Lock Haven",
    "result": "Fall 5:52"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Taylor Meeks",
    "winner_school": "Oregon State",
    "loser": "Thomas Sleigh",
    "loser_school": "Bucknell",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Nolan Boyd",
    "winner_school": "Oklahoma State",
    "loser": "Lelund Weatherspoon",
    "loser_school": "Iowa State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Victor Avery",
    "winner_school": "Edinboro",
    "loser": "Lazarus Reyes",
    "loser_school": "Illinois",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Jack Dechow",
    "winner_school": "Old Dominion",
    "loser": "Jacob Kasper",
    "loser_school": "Duke",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Blake Stauffer",
    "winner_school": "Arizona State",
    "loser": "John Rizqallah",
    "loser_school": "Michigan State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Matthew McCutcheon",
    "winner_school": "Penn State",
    "loser": "Nick Fiegener",
    "loser_school": "Cal Poly",
    "result": "TF-1.5 7:00 (20-5)"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Scott Patrick",
    "winner_school": "Davidson",
    "loser": "Brett Pfarr",
    "loser_school": "Minnesota",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Kenny Courts",
    "winner_school": "Ohio State",
    "loser": "Hayden Zillmer",
    "loser_school": "North Dakota State",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Nathaniel Brown",
    "winner_school": "Lehigh",
    "loser": "Andrew Romanchik",
    "loser_school": "Ohio",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Willie Miklus",
    "winner_school": "Missouri",
    "loser": "Lorenzo Thomas",
    "loser_school": "Penn",
    "result": "Fall 2:16"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Richard Robertson",
    "winner_school": "Wisconsin",
    "loser": "Brett Harner",
    "loser_school": "Princeton",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Max Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Jakob Scheffel",
    "loser_school": "West Virginia",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "J`Den Cox",
    "winner_school": "Missouri",
    "loser": "Scottie Boykin",
    "loser_school": "Chattanooga",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Jeffrey Koepke",
    "winner_school": "Illinois",
    "loser": "Elliot Riddick",
    "loser_school": "Lehigh",
    "result": "SV-1 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Trent Noon",
    "winner_school": "Northern Colorado",
    "loser": "Jace Bennett",
    "loser_school": "Cornell",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Max Huntley",
    "winner_school": "Michigan",
    "loser": "Shawn Scott",
    "loser_school": "Northern Illinois",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Bryce Barnes",
    "loser_school": "Army",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Cody Crawford",
    "winner_school": "Oregon State",
    "loser": "Timothy McCall",
    "loser_school": "Wisconsin",
    "result": "TB-1 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Shane Woods",
    "winner_school": "Wyoming",
    "loser": "Jared Haught",
    "loser_school": "Virginia Tech",
    "result": "SV-1 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Kyle Snyder",
    "winner_school": "Ohio State",
    "loser": "Braden Atwood",
    "loser_school": "Purdue",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Basil Minto",
    "loser_school": "Northern Iowa",
    "result": "TF-1.5 7:00 (19-4)"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Anthony Abro",
    "winner_school": "Eastern Michigan",
    "loser": "Phillip Wellington",
    "loser_school": "Ohio",
    "result": "SV-2 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Jake Tindle",
    "winner_school": "SIU Edwardsville",
    "loser": "Alex Polizzi",
    "loser_school": "Northwestern",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "Vincent Pickett",
    "loser_school": "Edinboro",
    "result": "MD 18-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Abram Ayala",
    "winner_school": "Princeton",
    "loser": "Kevin Beazley",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Conner Hartmann",
    "winner_school": "Duke",
    "loser": "Canaan Bethea",
    "loser_school": "Penn",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Aaron Studebaker",
    "winner_school": "Nebraska",
    "loser": "Jake Smith",
    "loser_school": "West Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Zach Nye",
    "loser_school": "Virginia",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "William Smith",
    "loser_school": "Rutgers",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Evan Knutson",
    "winner_school": "North Dakota State",
    "loser": "Jacob Kettler",
    "loser_school": "George Mason",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Michael Kroells",
    "winner_school": "Minnesota",
    "loser": "Garrett Ryan",
    "loser_school": "Columbia",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "James Lawson",
    "winner_school": "Penn State",
    "loser": "Jacob Aiken-Phillips",
    "loser_school": "Cornell",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Connor Medbery",
    "winner_school": "Wisconsin",
    "loser": "Riley Shaw",
    "loser_school": "Cleveland State",
    "result": "TF-1.5 5:57 (15-0)"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Denzel Dejournette",
    "winner_school": "Appalachian State",
    "loser": "Mimmo Lytle",
    "loser_school": "Kent State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Tyler Deuel",
    "winner_school": "Binghamton",
    "loser": "Ryan Solomon",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Austin Marsden",
    "winner_school": "Oklahoma State",
    "loser": "Jared Johnson",
    "loser_school": "Chattanooga",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Spencer Myers",
    "winner_school": "Maryland",
    "loser": "Bobby Telford",
    "loser_school": "Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Joe Stolfi",
    "winner_school": "Bucknell",
    "loser": "J.J. Everard",
    "loser_school": "South Dakota State",
    "result": "Fall 6:29"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Devin Mellon",
    "winner_school": "Missouri",
    "loser": "Nathan Butler",
    "loser_school": "Stanford",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Adam Coon",
    "winner_school": "Michigan",
    "loser": "Collin Jensen",
    "loser_school": "Nebraska",
    "result": "Fall 4:29"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Blaize Cabell",
    "winner_school": "Northern Iowa",
    "loser": "Brooks Black",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Ty Walz",
    "winner_school": "Virginia Tech",
    "loser": "Nick Tavanello",
    "loser_school": "Ohio State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Ross Larson",
    "winner_school": "Oklahoma",
    "loser": "Jacob Henderson",
    "loser_school": "Old Dominion",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Tanner Harms",
    "loser_school": "Wyoming",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Dominic Parisi",
    "winner_school": "Appalachian State",
    "loser": "Paul Petrov",
    "loser_school": "Bucknell",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "133",
    "bout": 172,
    "winner": "Troy Heilmann",
    "winner_school": "North Carolina",
    "loser": "Mitch Finesilver",
    "loser_school": "Duke",
    "result": "MD 8-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Joseph Spisak",
    "winner_school": "Virginia",
    "loser": "Chuck Zeisloft",
    "loser_school": "Rider",
    "result": "MD 11-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "Clayton Ream",
    "winner_school": "North Dakota State",
    "loser": "Joshua Kindig",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Immanuel Kerr-Brown",
    "winner_school": "Duke",
    "loser": "Doug Welch",
    "loser_school": "Purdue",
    "result": "MD 10-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Connor Brennan",
    "winner_school": "Rider",
    "loser": "Tyrel White",
    "loser_school": "Columbia",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Taylor Massa",
    "winner_school": "Michigan",
    "loser": "Ethan Smith",
    "loser_school": "Utah Valley",
    "result": "MD 11-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Brett Pfarr",
    "winner_school": "Minnesota",
    "loser": "Jack McKeever",
    "loser_school": "Binghamton",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Scottie Boykin",
    "winner_school": "Chattanooga",
    "loser": "Nathan Rotert",
    "loser_school": "South Dakota State",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "David Ng",
    "winner_school": "Harvard",
    "loser": "Garrett Ryan",
    "loser_school": "Columbia",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Conor Youtsey",
    "loser_school": "Michigan",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "David Terao",
    "winner_school": "American",
    "loser": "Jesse Delgado",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Kory Mines",
    "winner_school": "Edinboro",
    "loser": "Sean Boyle",
    "loser_school": "Chattanooga",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Nathan Tomasello",
    "winner_school": "Ohio State",
    "loser": "Ben Willeford",
    "loser_school": "Cleveland State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Joey Dance",
    "winner_school": "Virginia Tech",
    "loser": "Josh Martinez",
    "loser_school": "Air Force",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Thomas Gilman",
    "winner_school": "Iowa",
    "loser": "Jordan Conaway",
    "loser_school": "Penn State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Eddie Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Ronnie Rios",
    "loser_school": "Oregon State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Zeke Moisey",
    "winner_school": "West Virginia",
    "loser": "Nahshon Garrett",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 189,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Mackenzie McGuire",
    "loser_school": "Kent State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 190,
    "winner": "Kevin Devoy",
    "winner_school": "Drexel",
    "loser": "Caleb Richardson",
    "loser_school": "Penn",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 191,
    "winner": "George DiCamillo",
    "winner_school": "Virginia",
    "loser": "Zane Richards",
    "loser_school": "Illinois",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 192,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Johnni DiJulius",
    "loser_school": "Ohio State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 193,
    "winner": "Cory Clark",
    "winner_school": "Iowa",
    "loser": "Rossi Bruno",
    "loser_school": "Michigan",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 194,
    "winner": "Earl Hall",
    "winner_school": "Iowa State",
    "loser": "Danny Sabatello",
    "loser_school": "Purdue",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 195,
    "winner": "James Gulibon",
    "winner_school": "Penn State",
    "loser": "Jade Rauser",
    "loser_school": "Utah Valley",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 196,
    "winner": "Bradley Taylor",
    "winner_school": "Wisconsin",
    "loser": "Mark Grey",
    "loser_school": "Cornell",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 197,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Mike Morales",
    "loser_school": "West Virginia",
    "result": "Fall 2:10"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 198,
    "winner": "Anthony Abidin",
    "winner_school": "Nebraska",
    "loser": "Geo Martinez",
    "loser_school": "Boise State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 199,
    "winner": "Kevin Jack",
    "winner_school": "NC State",
    "loser": "Joseph Ward",
    "loser_school": "North Carolina",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 200,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Randy Cruz",
    "loser_school": "Lehigh",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 201,
    "winner": "Dean Heil",
    "winner_school": "Oklahoma State",
    "loser": "Lavion Mayes",
    "loser_school": "Missouri",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 202,
    "winner": "Chris Mecate",
    "winner_school": "Old Dominion",
    "loser": "Nick Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 203,
    "winner": "Anthony Ashnault",
    "winner_school": "Rutgers",
    "loser": "Zachary Horan",
    "loser_school": "Central Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 204,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Jamel Hudson",
    "loser_school": "Hofstra",
    "result": "Inj. 0:56"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 205,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Brandon Nelson",
    "loser_school": "Purdue",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 206,
    "winner": "Alexander Richardson",
    "winner_school": "Old Dominion",
    "loser": "Colin Heffernan",
    "loser_school": "Central Michigan",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 207,
    "winner": "Christopher Villalonga",
    "winner_school": "Cornell",
    "loser": "Zack Beitz",
    "loser_school": "Penn State",
    "result": "SV-1 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 208,
    "winner": "Charles Cobb",
    "winner_school": "Penn",
    "loser": "Brandon Sorensen",
    "loser_school": "Iowa",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 209,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Cody Ruggirello",
    "loser_school": "Hofstra",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 210,
    "winner": "Tywan Claxton",
    "winner_school": "Ohio",
    "loser": "Garrett Schaner",
    "loser_school": "Stanford",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 211,
    "winner": "Sal Mastriani",
    "winner_school": "Virginia Tech",
    "loser": "Kenneth Theobold",
    "loser_school": "Rutgers",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 212,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "Bryant Clagon",
    "loser_school": "Rider",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 213,
    "winner": "Isaiah Martinez",
    "winner_school": "Illinois",
    "loser": "Spartak Chino",
    "loser_school": "Ohio",
    "result": "Fall 1:25"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 214,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "John Boyle",
    "loser_school": "American",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 215,
    "winner": "Mitchell Minotti",
    "winner_school": "Lehigh",
    "loser": "Louis Mascola",
    "loser_school": "Maryland",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 216,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Noel Blanco",
    "loser_school": "Drexel",
    "result": "TF-1.5 5:50 (20-5)"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 217,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Chad Walsh",
    "loser_school": "Rider",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 218,
    "winner": "Brian Murphy",
    "winner_school": "Michigan",
    "loser": "Josh Demas",
    "loser_school": "Ohio State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 219,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Justin DeAngelis",
    "loser_school": "Oklahoma",
    "result": "Fall 5:07"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 220,
    "winner": "Brian Realbuto",
    "winner_school": "Cornell",
    "loser": "Anthony Collica",
    "loser_school": "Oklahoma State",
    "result": "TF-1.5 5:47 (17-0)"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 221,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Max Rohskopf",
    "loser_school": "NC State",
    "result": "Fall 4:48"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 222,
    "winner": "Jackson Morse",
    "winner_school": "Illinois",
    "loser": "Peyton Walsh",
    "loser_school": "Navy",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 223,
    "winner": "Bo Jordan",
    "winner_school": "Ohio State",
    "loser": "Dylan Palacio",
    "loser_school": "Cornell",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 224,
    "winner": "Cooper Moore",
    "winner_school": "Northern Iowa",
    "loser": "Nicholas Sulzer",
    "loser_school": "Virginia",
    "result": "Fall 2:19"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 225,
    "winner": "Isaac Jordan",
    "winner_school": "Wisconsin",
    "loser": "Coleman Gracey",
    "loser_school": "Army",
    "result": "Dec 9-6"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 226,
    "winner": "Taylor Walsh",
    "winner_school": "Indiana",
    "loser": "Mike England",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 227,
    "winner": "Pierce Harger",
    "winner_school": "Northwestern",
    "loser": "Jim Wilson",
    "loser_school": "Stanford",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 228,
    "winner": "Ethan Ramos",
    "winner_school": "North Carolina",
    "loser": "Austin Wilson",
    "loser_school": "Nebraska",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 229,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Chad Welch",
    "loser_school": "Purdue",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 230,
    "winner": "Tyler Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Cody Walters",
    "loser_school": "Ohio",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 231,
    "winner": "Kyle Crutchmer",
    "winner_school": "Oklahoma State",
    "loser": "Blaise Butler",
    "loser_school": "Virginia",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 232,
    "winner": "Joe Latham",
    "winner_school": "Oregon State",
    "loser": "Dominic Kastl",
    "loser_school": "Cal Poly",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 233,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Andy McCulley",
    "loser_school": "Wyoming",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 234,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Zach Brunson",
    "loser_school": "Illinois",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 235,
    "winner": "Zach Epperly",
    "winner_school": "Virginia Tech",
    "loser": "Kurtis Julson",
    "loser_school": "North Dakota State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 236,
    "winner": "Matthew Brown",
    "winner_school": "Penn State",
    "loser": "Santiago Martinez",
    "loser_school": "Lehigh",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 237,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "Timothy Dudley",
    "loser_school": "Nebraska",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 238,
    "winner": "Sam Brooks",
    "winner_school": "Iowa",
    "loser": "Domenic Abounader",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 239,
    "winner": "Taylor Meeks",
    "winner_school": "Oregon State",
    "loser": "Nolan Boyd",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 240,
    "winner": "Victor Avery",
    "winner_school": "Edinboro",
    "loser": "Jack Dechow",
    "loser_school": "Old Dominion",
    "result": "TB-2 (RT) 3-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 241,
    "winner": "Matthew McCutcheon",
    "winner_school": "Penn State",
    "loser": "Blake Stauffer",
    "loser_school": "Arizona State",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 242,
    "winner": "Kenny Courts",
    "winner_school": "Ohio State",
    "loser": "Scott Patrick",
    "loser_school": "Davidson",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 243,
    "winner": "Nathaniel Brown",
    "winner_school": "Lehigh",
    "loser": "Willie Miklus",
    "loser_school": "Missouri",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 244,
    "winner": "Max Thomusseit",
    "winner_school": "Pittsburgh",
    "loser": "Richard Robertson",
    "loser_school": "Wisconsin",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 245,
    "winner": "J`Den Cox",
    "winner_school": "Missouri",
    "loser": "Jeffrey Koepke",
    "loser_school": "Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 246,
    "winner": "Max Huntley",
    "winner_school": "Michigan",
    "loser": "Trent Noon",
    "loser_school": "Northern Colorado",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 247,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Cody Crawford",
    "loser_school": "Oregon State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 248,
    "winner": "Kyle Snyder",
    "winner_school": "Ohio State",
    "loser": "Shane Woods",
    "loser_school": "Wyoming",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 249,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Anthony Abro",
    "loser_school": "Eastern Michigan",
    "result": "Fall 4:55"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 250,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "Jake Tindle",
    "loser_school": "SIU Edwardsville",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 251,
    "winner": "Conner Hartmann",
    "winner_school": "Duke",
    "loser": "Abram Ayala",
    "loser_school": "Princeton",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 252,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Aaron Studebaker",
    "loser_school": "Nebraska",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 253,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "Evan Knutson",
    "loser_school": "North Dakota State",
    "result": "MD 14-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 254,
    "winner": "James Lawson",
    "winner_school": "Penn State",
    "loser": "Michael Kroells",
    "loser_school": "Minnesota",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 255,
    "winner": "Connor Medbery",
    "winner_school": "Wisconsin",
    "loser": "Denzel Dejournette",
    "loser_school": "Appalachian State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 256,
    "winner": "Austin Marsden",
    "winner_school": "Oklahoma State",
    "loser": "Tyler Deuel",
    "loser_school": "Binghamton",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 257,
    "winner": "Spencer Myers",
    "winner_school": "Maryland",
    "loser": "Joe Stolfi",
    "loser_school": "Bucknell",
    "result": "Fall 8:30"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 258,
    "winner": "Adam Coon",
    "winner_school": "Michigan",
    "loser": "Devin Mellon",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 259,
    "winner": "Blaize Cabell",
    "winner_school": "Northern Iowa",
    "loser": "Ty Walz",
    "loser_school": "Virginia Tech",
    "result": "SV-1 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 260,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Ross Larson",
    "loser_school": "Oklahoma",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 261,
    "winner": "Brandon Jeske",
    "winner_school": "Old Dominion",
    "loser": "Dominic Parisi",
    "loser_school": "Appalachian State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 262,
    "winner": "Tyler Cox",
    "winner_school": "Wyoming",
    "loser": "Dylan Peters",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 263,
    "winner": "Scott Parker",
    "winner_school": "Lehigh",
    "loser": "Ares Carpio",
    "loser_school": "Arizona State",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 264,
    "winner": "Ethan Lizak",
    "winner_school": "Minnesota",
    "loser": "Joe DeAngelo",
    "loser_school": "NC State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 265,
    "winner": "Joshua Rodriguez",
    "winner_school": "North Dakota State",
    "loser": "Dom Forys",
    "loser_school": "Pittsburgh",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 266,
    "winner": "Joaquin Marquez",
    "winner_school": "The Citadel",
    "loser": "Evan Silver",
    "loser_school": "Stanford",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 267,
    "winner": "Nick Herrmann",
    "winner_school": "Virginia",
    "loser": "Trey Andrews",
    "loser_school": "Northern Colorado",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 268,
    "winner": "Tim Lambert",
    "winner_school": "Nebraska",
    "loser": "Chasen Tolbert",
    "loser_school": "Utah Valley",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 269,
    "winner": "Gary Wayne Harding",
    "winner_school": "Oklahoma State",
    "loser": "Connor Schram",
    "loser_school": "Stanford",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 270,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "Geoffrey Alexander",
    "loser_school": "Maryland",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 271,
    "winner": "Kevin Norstrem",
    "winner_school": "Virginia Tech",
    "loser": "Jack Hathaway",
    "loser_school": "Oregon State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 272,
    "winner": "Dominick Malone",
    "winner_school": "Northwestern",
    "loser": "Ian Nickell",
    "loser_school": "CSU Bakersfield",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 273,
    "winner": "Robert Deutsch",
    "winner_school": "Rider",
    "loser": "Ronald Perry",
    "loser_school": "Lock Haven",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 274,
    "winner": "Eric Montoya",
    "winner_school": "Nebraska",
    "loser": "Zach Synon",
    "loser_school": "Missouri",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 275,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Scott Delvecchio",
    "loser_school": "Rutgers",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 276,
    "winner": "Nick Soto",
    "winner_school": "Chattanooga",
    "loser": "Troy Heilmann",
    "loser_school": "North Carolina",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 277,
    "winner": "Jordan Laster",
    "winner_school": "Princeton",
    "loser": "George Fisher",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 278,
    "winner": "Nick Lawrence",
    "winner_school": "Purdue",
    "loser": "David Pearce",
    "loser_school": "Drexel",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 279,
    "winner": "Josh Dziewa",
    "winner_school": "Iowa",
    "loser": "Mike Pongracz",
    "loser_school": "Chattanooga",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 280,
    "winner": "Dante Rodriguez",
    "winner_school": "Iowa State",
    "loser": "Tyler Small",
    "loser_school": "Kent State",
    "result": "Fall 5:56"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 281,
    "winner": "Jesse Thielke",
    "winner_school": "Wisconsin",
    "loser": "Joseph Spisak",
    "loser_school": "Virginia",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 282,
    "winner": "Steven Rodrigues",
    "winner_school": "Illinois",
    "loser": "Tyler Smith",
    "loser_school": "Bucknell",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 283,
    "winner": "Mike Longo",
    "winner_school": "Appalachian State",
    "loser": "Matthew Kraus",
    "loser_school": "Arizona State",
    "result": "Fall 4:08"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 284,
    "winner": "Jameston Oster",
    "winner_school": "Northwestern",
    "loser": "Mitchell Bengtson",
    "loser_school": "North Dakota State",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 285,
    "winner": "Mike Racciato",
    "winner_school": "Pittsburgh",
    "loser": "Christian Barber",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 286,
    "winner": "Chris Perez",
    "winner_school": "Princeton",
    "loser": "Gabe Moreno",
    "loser_school": "Iowa State",
    "result": "M. For."
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 287,
    "winner": "Marcus Cain",
    "winner_school": "Duke",
    "loser": "Shawn Greevy",
    "loser_school": "Chattanooga",
    "result": "Fall 0:36"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 288,
    "winner": "Kyle Langenderfer",
    "winner_school": "Illinois",
    "loser": "Michael Depalma",
    "loser_school": "Kent State",
    "result": "Fall 4:48"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 289,
    "winner": "Clayton Ream",
    "winner_school": "North Dakota State",
    "loser": "Hunter Stieber",
    "loser_school": "Ohio State",
    "result": "Inj. 3:39"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 290,
    "winner": "Alec Pantaleo",
    "winner_school": "Michigan",
    "loser": "Matthew Frisch",
    "loser_school": "The Citadel",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 291,
    "winner": "Matthew Cimato",
    "winner_school": "Drexel",
    "loser": "Christian Pagdilao",
    "loser_school": "Arizona State",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 292,
    "winner": "Daniel Neff",
    "winner_school": "Lock Haven",
    "loser": "Ryan Mosley",
    "loser_school": "Gardner-Webb",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 293,
    "winner": "Aaron Walker",
    "winner_school": "The Citadel",
    "loser": "Russell Parsons",
    "loser_school": "Army",
    "result": "SV-1 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 294,
    "winner": "Joseph LaVallee",
    "winner_school": "Missouri",
    "loser": "Steven Hernandez",
    "loser_school": "Boise State",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 295,
    "winner": "Cody Pack",
    "winner_school": "South Dakota State",
    "loser": "Andrew Atkinson",
    "loser_school": "Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 296,
    "winner": "Markus Scheidel",
    "winner_school": "Columbia",
    "loser": "Anthony Perrotti",
    "loser_school": "Rutgers",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 297,
    "winner": "Gregory Flournoy",
    "winner_school": "George Mason",
    "loser": "Brandon Zeerip",
    "loser_school": "Eastern Michigan",
    "result": "TB-1 9-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 298,
    "winner": "Alex Elder",
    "winner_school": "Oregon State",
    "loser": "Mike Kelly",
    "loser_school": "Iowa",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 299,
    "winner": "Immanuel Kerr-Brown",
    "winner_school": "Duke",
    "loser": "Brooks Martino",
    "loser_school": "Penn",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 300,
    "winner": "Justin Staudenmayer",
    "winner_school": "Brown",
    "loser": "Oliver Pierce",
    "loser_school": "Arizona State",
    "result": "M. For."
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 301,
    "winner": "Harrison Hightower",
    "winner_school": "Ohio",
    "loser": "Connor McMahon",
    "loser_school": "SIU Edwardsville",
    "result": "Fall 3:22"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 302,
    "winner": "Connor Brennan",
    "winner_school": "Rider",
    "loser": "Jesse Stafford",
    "loser_school": "Air Force",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 303,
    "winner": "Troy Reaghard",
    "winner_school": "Pittsburgh",
    "loser": "Garrett Sutton",
    "loser_school": "Michigan",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 304,
    "winner": "Clark Glass",
    "winner_school": "Oklahoma",
    "loser": "Patrick Robinson IV",
    "loser_school": "Purdue",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 305,
    "winner": "Jonathan Schleifer",
    "winner_school": "Princeton",
    "loser": "Adam Fierro",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 306,
    "winner": "Dakota Friesth",
    "winner_school": "Wyoming",
    "loser": "Tristan Warner",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 307,
    "winner": "Mitchell Polkowske",
    "winner_school": "Northern Colorado",
    "loser": "Nick Moore",
    "loser_school": "Iowa",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 308,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Seth Thomas",
    "loser_school": "Oregon State",
    "result": "Fall 2:34"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 309,
    "winner": "Frank Cousins",
    "winner_school": "Wisconsin",
    "loser": "Taylor Massa",
    "loser_school": "Michigan",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 310,
    "winner": "Matt Reed",
    "winner_school": "Oklahoma",
    "loser": "George Pickett",
    "loser_school": "Cornell",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 311,
    "winner": "Jadaen Bernstein",
    "winner_school": "Navy",
    "loser": "Jordan Ellingwood",
    "loser_school": "Central Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 312,
    "winner": "John Eblen",
    "winner_school": "Missouri",
    "loser": "Tanner Weatherman",
    "loser_school": "Iowa State",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 313,
    "winner": "Nathan Jackson",
    "winner_school": "Indiana",
    "loser": "John Staudenmayer",
    "loser_school": "North Carolina",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 314,
    "winner": "Brian Harvey",
    "winner_school": "Army",
    "loser": "Ryan Wolfe",
    "loser_school": "Rider",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 315,
    "winner": "Mark Martin",
    "winner_school": "Ohio State",
    "loser": "Sean Mappes",
    "loser_school": "Chattanooga",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 316,
    "winner": "Pete Renda",
    "winner_school": "NC State",
    "loser": "Raymond Waters",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 317,
    "winner": "Ophir Bernstein",
    "winner_school": "Brown",
    "loser": "Patrick Kissel",
    "loser_school": "Purdue",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 318,
    "winner": "Fred Garcia",
    "winner_school": "Lock Haven",
    "loser": "Ben Stroh",
    "loser_school": "Wyoming",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 319,
    "winner": "Lelund Weatherspoon",
    "winner_school": "Iowa State",
    "loser": "Thomas Sleigh",
    "loser_school": "Bucknell",
    "result": "TB-1 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 320,
    "winner": "Lazarus Reyes",
    "winner_school": "Illinois",
    "loser": "Jacob Kasper",
    "loser_school": "Duke",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 321,
    "winner": "John Rizqallah",
    "winner_school": "Michigan State",
    "loser": "Nick Fiegener",
    "loser_school": "Cal Poly",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 322,
    "winner": "Hayden Zillmer",
    "winner_school": "North Dakota State",
    "loser": "Brett Pfarr",
    "loser_school": "Minnesota",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 323,
    "winner": "Lorenzo Thomas",
    "winner_school": "Penn",
    "loser": "Andrew Romanchik",
    "loser_school": "Ohio",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 324,
    "winner": "Brett Harner",
    "winner_school": "Princeton",
    "loser": "Jakob Scheffel",
    "loser_school": "West Virginia",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 325,
    "winner": "Scottie Boykin",
    "winner_school": "Chattanooga",
    "loser": "Elliot Riddick",
    "loser_school": "Lehigh",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 326,
    "winner": "Jace Bennett",
    "winner_school": "Cornell",
    "loser": "Shawn Scott",
    "loser_school": "Northern Illinois",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 327,
    "winner": "Timothy McCall",
    "winner_school": "Wisconsin",
    "loser": "Bryce Barnes",
    "loser_school": "Army",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 328,
    "winner": "Jared Haught",
    "winner_school": "Virginia Tech",
    "loser": "Braden Atwood",
    "loser_school": "Purdue",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 329,
    "winner": "Phillip Wellington",
    "winner_school": "Ohio",
    "loser": "Basil Minto",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 330,
    "winner": "Alex Polizzi",
    "winner_school": "Northwestern",
    "loser": "Vincent Pickett",
    "loser_school": "Edinboro",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 331,
    "winner": "Canaan Bethea",
    "winner_school": "Penn",
    "loser": "Kevin Beazley",
    "loser_school": "Old Dominion",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 332,
    "winner": "Jake Smith",
    "winner_school": "West Virginia",
    "loser": "Zach Nye",
    "loser_school": "Virginia",
    "result": "TB-3 (RT) 3-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "William Smith",
    "winner_school": "Rutgers",
    "loser": "Jacob Kettler",
    "loser_school": "George Mason",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Jacob Aiken-Phillips",
    "winner_school": "Cornell",
    "loser": "David Ng",
    "loser_school": "Harvard",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Riley Shaw",
    "winner_school": "Cleveland State",
    "loser": "Mimmo Lytle",
    "loser_school": "Kent State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Ryan Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Jared Johnson",
    "loser_school": "Chattanooga",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "J.J. Everard",
    "loser_school": "South Dakota State",
    "result": "Fall 0:39"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Collin Jensen",
    "winner_school": "Nebraska",
    "loser": "Nathan Butler",
    "loser_school": "Stanford",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Brooks Black",
    "winner_school": "Illinois",
    "loser": "Nick Tavanello",
    "loser_school": "Ohio State",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Jacob Henderson",
    "winner_school": "Old Dominion",
    "loser": "Tanner Harms",
    "loser_school": "Wyoming",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 341,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "David Terao",
    "loser_school": "American",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 342,
    "winner": "Nathan Tomasello",
    "winner_school": "Ohio State",
    "loser": "Kory Mines",
    "loser_school": "Edinboro",
    "result": "TF-1.5 5:25 (16-1)"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 343,
    "winner": "Thomas Gilman",
    "winner_school": "Iowa",
    "loser": "Joey Dance",
    "loser_school": "Virginia Tech",
    "result": "SV-1 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 344,
    "winner": "Zeke Moisey",
    "winner_school": "West Virginia",
    "loser": "Eddie Klimara",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 345,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Kevin Devoy",
    "loser_school": "Drexel",
    "result": "Dec 7-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 346,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "George DiCamillo",
    "loser_school": "Virginia",
    "result": "MD 14-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 347,
    "winner": "Cory Clark",
    "winner_school": "Iowa",
    "loser": "Earl Hall",
    "loser_school": "Iowa State",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 348,
    "winner": "James Gulibon",
    "winner_school": "Penn State",
    "loser": "Bradley Taylor",
    "loser_school": "Wisconsin",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 349,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Anthony Abidin",
    "loser_school": "Nebraska",
    "result": "TF-1.5 5:31 (16-1)"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 350,
    "winner": "Kevin Jack",
    "winner_school": "NC State",
    "loser": "Devin Carter",
    "loser_school": "Virginia Tech",
    "result": "Dec 10-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 351,
    "winner": "Chris Mecate",
    "winner_school": "Old Dominion",
    "loser": "Dean Heil",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 352,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Anthony Ashnault",
    "loser_school": "Rutgers",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 353,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Alexander Richardson",
    "loser_school": "Old Dominion",
    "result": "MD 10-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 354,
    "winner": "Christopher Villalonga",
    "winner_school": "Cornell",
    "loser": "Charles Cobb",
    "loser_school": "Penn",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 355,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Tywan Claxton",
    "loser_school": "Ohio",
    "result": "MD 10-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 356,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "Sal Mastriani",
    "loser_school": "Virginia Tech",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 357,
    "winner": "Isaiah Martinez",
    "winner_school": "Illinois",
    "loser": "Nick Brascetta",
    "loser_school": "Virginia Tech",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 358,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Mitchell Minotti",
    "loser_school": "Lehigh",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 359,
    "winner": "Dylan Ness",
    "winner_school": "Minnesota",
    "loser": "Brian Murphy",
    "loser_school": "Michigan",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 360,
    "winner": "Brian Realbuto",
    "winner_school": "Cornell",
    "loser": "Ian Miller",
    "loser_school": "Kent State",
    "result": "SV-1 11-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 361,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Jackson Morse",
    "loser_school": "Illinois",
    "result": "MD 18-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 362,
    "winner": "Bo Jordan",
    "winner_school": "Ohio State",
    "loser": "Cooper Moore",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:56"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 363,
    "winner": "Taylor Walsh",
    "winner_school": "Indiana",
    "loser": "Isaac Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 4-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 364,
    "winner": "Ethan Ramos",
    "winner_school": "North Carolina",
    "loser": "Pierce Harger",
    "loser_school": "Northwestern",
    "result": "Inj. 6:05"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 365,
    "winner": "Tyler Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Robert Kokesh",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 366,
    "winner": "Kyle Crutchmer",
    "winner_school": "Oklahoma State",
    "loser": "Joe Latham",
    "loser_school": "Oregon State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 367,
    "winner": "Michael Evans",
    "winner_school": "Iowa",
    "loser": "Logan Storley",
    "loser_school": "Minnesota",
    "result": "TB-1 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 368,
    "winner": "Matthew Brown",
    "winner_school": "Penn State",
    "loser": "Zach Epperly",
    "loser_school": "Virginia Tech",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 369,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "Sam Brooks",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 370,
    "winner": "Victor Avery",
    "winner_school": "Edinboro",
    "loser": "Taylor Meeks",
    "loser_school": "Oregon State",
    "result": "MD 14-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 371,
    "winner": "Kenny Courts",
    "winner_school": "Ohio State",
    "loser": "Matthew McCutcheon",
    "loser_school": "Penn State",
    "result": "SV-1 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 372,
    "winner": "Nathaniel Brown",
    "winner_school": "Lehigh",
    "loser": "Max Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 373,
    "winner": "J`Den Cox",
    "winner_school": "Missouri",
    "loser": "Max Huntley",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 374,
    "winner": "Kyle Snyder",
    "winner_school": "Ohio State",
    "loser": "Scott Schiller",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 375,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Nathan Burak",
    "loser_school": "Iowa",
    "result": "MD 12-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 376,
    "winner": "Conner Hartmann",
    "winner_school": "Duke",
    "loser": "Morgan McIntosh",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 377,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "James Lawson",
    "loser_school": "Penn State",
    "result": "MD 11-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 378,
    "winner": "Connor Medbery",
    "winner_school": "Wisconsin",
    "loser": "Austin Marsden",
    "loser_school": "Oklahoma State",
    "result": "SV-2 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 379,
    "winner": "Adam Coon",
    "winner_school": "Michigan",
    "loser": "Spencer Myers",
    "loser_school": "Maryland",
    "result": "Dec 2-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 380,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Blaize Cabell",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 381,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Brandon Jeske",
    "loser_school": "Old Dominion",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 382,
    "winner": "Ronnie Rios",
    "winner_school": "Oregon State",
    "loser": "Tyler Cox",
    "loser_school": "Wyoming",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 383,
    "winner": "Jordan Conaway",
    "winner_school": "Penn State",
    "loser": "Scott Parker",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 384,
    "winner": "Ethan Lizak",
    "winner_school": "Minnesota",
    "loser": "Josh Martinez",
    "loser_school": "Air Force",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 385,
    "winner": "Joshua Rodriguez",
    "winner_school": "North Dakota State",
    "loser": "Ben Willeford",
    "loser_school": "Cleveland State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 386,
    "winner": "Sean Boyle",
    "winner_school": "Chattanooga",
    "loser": "Joaquin Marquez",
    "loser_school": "The Citadel",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 387,
    "winner": "Nick Herrmann",
    "winner_school": "Virginia",
    "loser": "Jesse Delgado",
    "loser_school": "Illinois",
    "result": "Inj. 2:52"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 388,
    "winner": "Conor Youtsey",
    "winner_school": "Michigan",
    "loser": "Tim Lambert",
    "loser_school": "Nebraska",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 389,
    "winner": "Gary Wayne Harding",
    "winner_school": "Oklahoma State",
    "loser": "Mark Grey",
    "loser_school": "Cornell",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 390,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "Jade Rauser",
    "loser_school": "Utah Valley",
    "result": "Fall 3:17"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 391,
    "winner": "Danny Sabatello",
    "winner_school": "Purdue",
    "loser": "Kevin Norstrem",
    "loser_school": "Virginia Tech",
    "result": "Dec 1-0"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 392,
    "winner": "Rossi Bruno",
    "winner_school": "Michigan",
    "loser": "Dominick Malone",
    "loser_school": "Northwestern",
    "result": "Fall 1:26"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 393,
    "winner": "Johnni DiJulius",
    "winner_school": "Ohio State",
    "loser": "Robert Deutsch",
    "loser_school": "Rider",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 394,
    "winner": "Eric Montoya",
    "winner_school": "Nebraska",
    "loser": "Zane Richards",
    "loser_school": "Illinois",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 395,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Caleb Richardson",
    "loser_school": "Penn",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 396,
    "winner": "Mackenzie McGuire",
    "winner_school": "Kent State",
    "loser": "Nick Soto",
    "loser_school": "Chattanooga",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 397,
    "winner": "Jordan Laster",
    "winner_school": "Princeton",
    "loser": "Jamel Hudson",
    "loser_school": "Hofstra",
    "result": "M. For."
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 398,
    "winner": "Nick Lawrence",
    "winner_school": "Purdue",
    "loser": "Zachary Horan",
    "loser_school": "Central Michigan",
    "result": "SV-1 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 399,
    "winner": "Josh Dziewa",
    "winner_school": "Iowa",
    "loser": "Nick Dardanes",
    "loser_school": "Minnesota",
    "result": "MD 18-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 400,
    "winner": "Lavion Mayes",
    "winner_school": "Missouri",
    "loser": "Dante Rodriguez",
    "loser_school": "Iowa State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 401,
    "winner": "Randy Cruz",
    "winner_school": "Lehigh",
    "loser": "Jesse Thielke",
    "loser_school": "Wisconsin",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 402,
    "winner": "Joseph Ward",
    "winner_school": "North Carolina",
    "loser": "Steven Rodrigues",
    "loser_school": "Illinois",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 403,
    "winner": "Geo Martinez",
    "winner_school": "Boise State",
    "loser": "Mike Longo",
    "loser_school": "Appalachian State",
    "result": "Fall 1:40"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 404,
    "winner": "Mike Morales",
    "winner_school": "West Virginia",
    "loser": "Jameston Oster",
    "loser_school": "Northwestern",
    "result": "Fall 0:20"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 405,
    "winner": "Bryant Clagon",
    "winner_school": "Rider",
    "loser": "Mike Racciato",
    "loser_school": "Pittsburgh",
    "result": "MD 16-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 406,
    "winner": "Chris Perez",
    "winner_school": "Princeton",
    "loser": "Kenneth Theobold",
    "loser_school": "Rutgers",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 407,
    "winner": "Garrett Schaner",
    "winner_school": "Stanford",
    "loser": "Marcus Cain",
    "loser_school": "Duke",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 408,
    "winner": "Cody Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Kyle Langenderfer",
    "loser_school": "Illinois",
    "result": "Fall 2:04"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 409,
    "winner": "Brandon Sorensen",
    "winner_school": "Iowa",
    "loser": "Clayton Ream",
    "loser_school": "North Dakota State",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 410,
    "winner": "Alec Pantaleo",
    "winner_school": "Michigan",
    "loser": "Zack Beitz",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 411,
    "winner": "Colin Heffernan",
    "winner_school": "Central Michigan",
    "loser": "Matthew Cimato",
    "loser_school": "Drexel",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 412,
    "winner": "Daniel Neff",
    "winner_school": "Lock Haven",
    "loser": "Brandon Nelson",
    "loser_school": "Purdue",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 413,
    "winner": "Anthony Collica",
    "winner_school": "Oklahoma State",
    "loser": "Aaron Walker",
    "loser_school": "The Citadel",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 414,
    "winner": "Joseph LaVallee",
    "winner_school": "Missouri",
    "loser": "Justin DeAngelis",
    "loser_school": "Oklahoma",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 415,
    "winner": "Cody Pack",
    "winner_school": "South Dakota State",
    "loser": "Josh Demas",
    "loser_school": "Ohio State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 416,
    "winner": "Markus Scheidel",
    "winner_school": "Columbia",
    "loser": "Chad Walsh",
    "loser_school": "Rider",
    "result": "SV-3 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 417,
    "winner": "Noel Blanco",
    "winner_school": "Drexel",
    "loser": "Gregory Flournoy",
    "loser_school": "George Mason",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 418,
    "winner": "Alex Elder",
    "winner_school": "Oregon State",
    "loser": "Louis Mascola",
    "loser_school": "Maryland",
    "result": "Dec 16-9"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 419,
    "winner": "Immanuel Kerr-Brown",
    "winner_school": "Duke",
    "loser": "John Boyle",
    "loser_school": "American",
    "result": "SV-1 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 420,
    "winner": "Spartak Chino",
    "winner_school": "Ohio",
    "loser": "Justin Staudenmayer",
    "loser_school": "Brown",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 421,
    "winner": "Harrison Hightower",
    "winner_school": "Ohio",
    "loser": "Austin Wilson",
    "loser_school": "Nebraska",
    "result": "SV-1 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 422,
    "winner": "Jim Wilson",
    "winner_school": "Stanford",
    "loser": "Connor Brennan",
    "loser_school": "Rider",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 423,
    "winner": "Mike England",
    "winner_school": "Missouri",
    "loser": "Troy Reaghard",
    "loser_school": "Pittsburgh",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 424,
    "winner": "Clark Glass",
    "winner_school": "Oklahoma",
    "loser": "Coleman Gracey",
    "loser_school": "Army",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 425,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Jonathan Schleifer",
    "loser_school": "Princeton",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 426,
    "winner": "Dylan Palacio",
    "winner_school": "Cornell",
    "loser": "Dakota Friesth",
    "loser_school": "Wyoming",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 427,
    "winner": "Mitchell Polkowske",
    "winner_school": "Northern Colorado",
    "loser": "Peyton Walsh",
    "loser_school": "Navy",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 428,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Max Rohskopf",
    "loser_school": "NC State",
    "result": "Fall 3:42"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 429,
    "winner": "Frank Cousins",
    "winner_school": "Wisconsin",
    "loser": "Santiago Martinez",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 430,
    "winner": "Kurtis Julson",
    "winner_school": "North Dakota State",
    "loser": "Matt Reed",
    "loser_school": "Oklahoma",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 431,
    "winner": "Zach Brunson",
    "winner_school": "Illinois",
    "loser": "Jadaen Bernstein",
    "loser_school": "Navy",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 432,
    "winner": "John Eblen",
    "winner_school": "Missouri",
    "loser": "Andy McCulley",
    "loser_school": "Wyoming",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 433,
    "winner": "Nathan Jackson",
    "winner_school": "Indiana",
    "loser": "Dominic Kastl",
    "loser_school": "Cal Poly",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 434,
    "winner": "Blaise Butler",
    "winner_school": "Virginia",
    "loser": "Brian Harvey",
    "loser_school": "Army",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 435,
    "winner": "Cody Walters",
    "winner_school": "Ohio",
    "loser": "Mark Martin",
    "loser_school": "Ohio State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 436,
    "winner": "Pete Renda",
    "winner_school": "NC State",
    "loser": "Chad Welch",
    "loser_school": "Purdue",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 437,
    "winner": "Richard Robertson",
    "winner_school": "Wisconsin",
    "loser": "Ophir Bernstein",
    "loser_school": "Brown",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 438,
    "winner": "Willie Miklus",
    "winner_school": "Missouri",
    "loser": "Fred Garcia",
    "loser_school": "Lock Haven",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 439,
    "winner": "Scott Patrick",
    "winner_school": "Davidson",
    "loser": "Lelund Weatherspoon",
    "loser_school": "Iowa State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 440,
    "winner": "Blake Stauffer",
    "winner_school": "Arizona State",
    "loser": "Lazarus Reyes",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 441,
    "winner": "Jack Dechow",
    "winner_school": "Old Dominion",
    "loser": "John Rizqallah",
    "loser_school": "Michigan State",
    "result": "SV-2 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 442,
    "winner": "Hayden Zillmer",
    "winner_school": "North Dakota State",
    "loser": "Nolan Boyd",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 443,
    "winner": "Lorenzo Thomas",
    "winner_school": "Penn",
    "loser": "Domenic Abounader",
    "loser_school": "Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 444,
    "winner": "Timothy Dudley",
    "winner_school": "Nebraska",
    "loser": "Brett Harner",
    "loser_school": "Princeton",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 445,
    "winner": "Aaron Studebaker",
    "winner_school": "Nebraska",
    "loser": "Scottie Boykin",
    "loser_school": "Chattanooga",
    "result": "Fall 3:40"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 446,
    "winner": "Jace Bennett",
    "winner_school": "Cornell",
    "loser": "Abram Ayala",
    "loser_school": "Princeton",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 447,
    "winner": "Timothy McCall",
    "winner_school": "Wisconsin",
    "loser": "Jake Tindle",
    "loser_school": "SIU Edwardsville",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 448,
    "winner": "Anthony Abro",
    "winner_school": "Eastern Michigan",
    "loser": "Jared Haught",
    "loser_school": "Virginia Tech",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 449,
    "winner": "Shane Woods",
    "winner_school": "Wyoming",
    "loser": "Phillip Wellington",
    "loser_school": "Ohio",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 450,
    "winner": "Cody Crawford",
    "winner_school": "Oregon State",
    "loser": "Alex Polizzi",
    "loser_school": "Northwestern",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 451,
    "winner": "Canaan Bethea",
    "winner_school": "Penn",
    "loser": "Trent Noon",
    "loser_school": "Northern Colorado",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 452,
    "winner": "Jake Smith",
    "winner_school": "West Virginia",
    "loser": "Jeffrey Koepke",
    "loser_school": "Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 453,
    "winner": "William Smith",
    "winner_school": "Rutgers",
    "loser": "Ross Larson",
    "loser_school": "Oklahoma",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 454,
    "winner": "Ty Walz",
    "winner_school": "Virginia Tech",
    "loser": "Jacob Aiken-Phillips",
    "loser_school": "Cornell",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 455,
    "winner": "Devin Mellon",
    "winner_school": "Missouri",
    "loser": "Riley Shaw",
    "loser_school": "Cleveland State",
    "result": "TB-1 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 456,
    "winner": "Ryan Solomon",
    "winner_school": "Pittsburgh",
    "loser": "Joe Stolfi",
    "loser_school": "Bucknell",
    "result": "M. For."
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 457,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Tyler Deuel",
    "loser_school": "Binghamton",
    "result": "Fall 1:47"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 458,
    "winner": "Collin Jensen",
    "winner_school": "Nebraska",
    "loser": "Denzel Dejournette",
    "loser_school": "Appalachian State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 459,
    "winner": "Michael Kroells",
    "winner_school": "Minnesota",
    "loser": "Brooks Black",
    "loser_school": "Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 460,
    "winner": "Evan Knutson",
    "winner_school": "North Dakota State",
    "loser": "Jacob Henderson",
    "loser_school": "Old Dominion",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 461,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Ronnie Rios",
    "loser_school": "Oregon State",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 462,
    "winner": "Jordan Conaway",
    "winner_school": "Penn State",
    "loser": "Ethan Lizak",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 463,
    "winner": "Sean Boyle",
    "winner_school": "Chattanooga",
    "loser": "Joshua Rodriguez",
    "loser_school": "North Dakota State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 464,
    "winner": "Conor Youtsey",
    "winner_school": "Michigan",
    "loser": "Nick Herrmann",
    "loser_school": "Virginia",
    "result": "SV-2 9-7"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 465,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "Gary Wayne Harding",
    "loser_school": "Oklahoma State",
    "result": "Fall 1:24"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 466,
    "winner": "Rossi Bruno",
    "winner_school": "Michigan",
    "loser": "Danny Sabatello",
    "loser_school": "Purdue",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 467,
    "winner": "Eric Montoya",
    "winner_school": "Nebraska",
    "loser": "Johnni DiJulius",
    "loser_school": "Ohio State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 468,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Mackenzie McGuire",
    "loser_school": "Kent State",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 469,
    "winner": "Jordan Laster",
    "winner_school": "Princeton",
    "loser": "Nick Lawrence",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 470,
    "winner": "Lavion Mayes",
    "winner_school": "Missouri",
    "loser": "Josh Dziewa",
    "loser_school": "Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 471,
    "winner": "Randy Cruz",
    "winner_school": "Lehigh",
    "loser": "Joseph Ward",
    "loser_school": "North Carolina",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 472,
    "winner": "Geo Martinez",
    "winner_school": "Boise State",
    "loser": "Mike Morales",
    "loser_school": "West Virginia",
    "result": "SV-1 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 473,
    "winner": "Bryant Clagon",
    "winner_school": "Rider",
    "loser": "Chris Perez",
    "loser_school": "Princeton",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 474,
    "winner": "Cody Ruggirello",
    "winner_school": "Hofstra",
    "loser": "Garrett Schaner",
    "loser_school": "Stanford",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 475,
    "winner": "Brandon Sorensen",
    "winner_school": "Iowa",
    "loser": "Alec Pantaleo",
    "loser_school": "Michigan",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 476,
    "winner": "Daniel Neff",
    "winner_school": "Lock Haven",
    "loser": "Colin Heffernan",
    "loser_school": "Central Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 477,
    "winner": "Anthony Collica",
    "winner_school": "Oklahoma State",
    "loser": "Joseph LaVallee",
    "loser_school": "Missouri",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 478,
    "winner": "Cody Pack",
    "winner_school": "South Dakota State",
    "loser": "Markus Scheidel",
    "loser_school": "Columbia",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 479,
    "winner": "Alex Elder",
    "winner_school": "Oregon State",
    "loser": "Noel Blanco",
    "loser_school": "Drexel",
    "result": "Fall 6:43"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 480,
    "winner": "Spartak Chino",
    "winner_school": "Ohio",
    "loser": "Immanuel Kerr-Brown",
    "loser_school": "Duke",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 481,
    "winner": "Jim Wilson",
    "winner_school": "Stanford",
    "loser": "Harrison Hightower",
    "loser_school": "Ohio",
    "result": "SV-1 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 482,
    "winner": "Mike England",
    "winner_school": "Missouri",
    "loser": "Clark Glass",
    "loser_school": "Oklahoma",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 483,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Dylan Palacio",
    "loser_school": "Cornell",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 484,
    "winner": "Michael Moreno",
    "winner_school": "Iowa State",
    "loser": "Mitchell Polkowske",
    "loser_school": "Northern Colorado",
    "result": "Fall 4:27"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 485,
    "winner": "Kurtis Julson",
    "winner_school": "North Dakota State",
    "loser": "Frank Cousins",
    "loser_school": "Wisconsin",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 486,
    "winner": "Zach Brunson",
    "winner_school": "Illinois",
    "loser": "John Eblen",
    "loser_school": "Missouri",
    "result": "DQ"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 487,
    "winner": "Blaise Butler",
    "winner_school": "Virginia",
    "loser": "Nathan Jackson",
    "loser_school": "Indiana",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 488,
    "winner": "Cody Walters",
    "winner_school": "Ohio",
    "loser": "Pete Renda",
    "loser_school": "NC State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 489,
    "winner": "Willie Miklus",
    "winner_school": "Missouri",
    "loser": "Richard Robertson",
    "loser_school": "Wisconsin",
    "result": "Fall 3:31"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 490,
    "winner": "Blake Stauffer",
    "winner_school": "Arizona State",
    "loser": "Scott Patrick",
    "loser_school": "Davidson",
    "result": "Dec 12-9"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 491,
    "winner": "Hayden Zillmer",
    "winner_school": "North Dakota State",
    "loser": "Jack Dechow",
    "loser_school": "Old Dominion",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 492,
    "winner": "Timothy Dudley",
    "winner_school": "Nebraska",
    "loser": "Lorenzo Thomas",
    "loser_school": "Penn",
    "result": "MD 17-5"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 493,
    "winner": "Aaron Studebaker",
    "winner_school": "Nebraska",
    "loser": "Jace Bennett",
    "loser_school": "Cornell",
    "result": "Fall 6:12"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 494,
    "winner": "Timothy McCall",
    "winner_school": "Wisconsin",
    "loser": "Anthony Abro",
    "loser_school": "Eastern Michigan",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 495,
    "winner": "Shane Woods",
    "winner_school": "Wyoming",
    "loser": "Cody Crawford",
    "loser_school": "Oregon State",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 496,
    "winner": "Canaan Bethea",
    "winner_school": "Penn",
    "loser": "Jake Smith",
    "loser_school": "West Virginia",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Ty Walz",
    "winner_school": "Virginia Tech",
    "loser": "William Smith",
    "loser_school": "Rutgers",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Devin Mellon",
    "winner_school": "Missouri",
    "loser": "Ryan Solomon",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Collin Jensen",
    "loser_school": "Nebraska",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Michael Kroells",
    "winner_school": "Minnesota",
    "loser": "Evan Knutson",
    "loser_school": "North Dakota State",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 501,
    "winner": "Nathan Tomasello",
    "winner_school": "Ohio State",
    "loser": "Alan Waters",
    "loser_school": "Missouri",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 502,
    "winner": "Zeke Moisey",
    "winner_school": "West Virginia",
    "loser": "Thomas Gilman",
    "loser_school": "Iowa",
    "result": "Fall 0:52"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 503,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Christopher Dardanes",
    "loser_school": "Minnesota",
    "result": "MD 15-3"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 504,
    "winner": "Cory Clark",
    "winner_school": "Iowa",
    "loser": "James Gulibon",
    "loser_school": "Penn State",
    "result": "Dec 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 505,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Kevin Jack",
    "loser_school": "NC State",
    "result": "MD 12-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 506,
    "winner": "Mitchell Port",
    "winner_school": "Edinboro",
    "loser": "Chris Mecate",
    "loser_school": "Old Dominion",
    "result": "MD 14-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 507,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "Christopher Villalonga",
    "loser_school": "Cornell",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 508,
    "winner": "David Habat",
    "winner_school": "Edinboro",
    "loser": "Jason Tsirtsis",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 509,
    "winner": "Isaiah Martinez",
    "winner_school": "Illinois",
    "loser": "James Green",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 510,
    "winner": "Brian Realbuto",
    "winner_school": "Cornell",
    "loser": "Dylan Ness",
    "loser_school": "Minnesota",
    "result": "Inj. 2:28"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 511,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Bo Jordan",
    "loser_school": "Ohio State",
    "result": "Dec 6-1"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 512,
    "winner": "Taylor Walsh",
    "winner_school": "Indiana",
    "loser": "Ethan Ramos",
    "loser_school": "North Carolina",
    "result": "Dec 5-0"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 513,
    "winner": "Tyler Wilps",
    "winner_school": "Pittsburgh",
    "loser": "Kyle Crutchmer",
    "loser_school": "Oklahoma State",
    "result": "SV-1 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 514,
    "winner": "Matthew Brown",
    "winner_school": "Penn State",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 515,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "Victor Avery",
    "loser_school": "Edinboro",
    "result": "TB-2 4-3"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 516,
    "winner": "Nathaniel Brown",
    "winner_school": "Lehigh",
    "loser": "Kenny Courts",
    "loser_school": "Ohio State",
    "result": "Dec 4-0"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 517,
    "winner": "Kyle Snyder",
    "winner_school": "Ohio State",
    "loser": "J`Den Cox",
    "loser_school": "Missouri",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 518,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Conner Hartmann",
    "loser_school": "Duke",
    "result": "Dec 4-1"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 519,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "Connor Medbery",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 520,
    "winner": "Adam Coon",
    "winner_school": "Michigan",
    "loser": "Michael McMullan",
    "loser_school": "Northwestern",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 521,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Kory Mines",
    "loser_school": "Edinboro",
    "result": "MD 11-0"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 522,
    "winner": "Jordan Conaway",
    "winner_school": "Penn State",
    "loser": "David Terao",
    "loser_school": "American",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 523,
    "winner": "Eddie Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Sean Boyle",
    "loser_school": "Chattanooga",
    "result": "Fall 0:28"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 524,
    "winner": "Conor Youtsey",
    "winner_school": "Michigan",
    "loser": "Joey Dance",
    "loser_school": "Virginia Tech",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 525,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "George DiCamillo",
    "loser_school": "Virginia",
    "result": "Fall 3:33"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 526,
    "winner": "Rossi Bruno",
    "winner_school": "Michigan",
    "loser": "Kevin Devoy",
    "loser_school": "Drexel",
    "result": "SV-1 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 527,
    "winner": "Bradley Taylor",
    "winner_school": "Wisconsin",
    "loser": "Eric Montoya",
    "loser_school": "Nebraska",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 528,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Earl Hall",
    "loser_school": "Iowa State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 529,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Jordan Laster",
    "loser_school": "Princeton",
    "result": "MD 18-7"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 530,
    "winner": "Lavion Mayes",
    "winner_school": "Missouri",
    "loser": "Anthony Abidin",
    "loser_school": "Nebraska",
    "result": "MD 16-8"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 531,
    "winner": "Anthony Ashnault",
    "winner_school": "Rutgers",
    "loser": "Randy Cruz",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 532,
    "winner": "Dean Heil",
    "winner_school": "Oklahoma State",
    "loser": "Geo Martinez",
    "loser_school": "Boise State",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 533,
    "winner": "Bryant Clagon",
    "winner_school": "Rider",
    "loser": "Charles Cobb",
    "loser_school": "Penn",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 534,
    "winner": "Alexander Richardson",
    "winner_school": "Old Dominion",
    "loser": "Cody Ruggirello",
    "loser_school": "Hofstra",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 535,
    "winner": "Brandon Sorensen",
    "winner_school": "Iowa",
    "loser": "Sal Mastriani",
    "loser_school": "Virginia Tech",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 536,
    "winner": "Daniel Neff",
    "winner_school": "Lock Haven",
    "loser": "Tywan Claxton",
    "loser_school": "Ohio",
    "result": "TB-1 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 537,
    "winner": "Mitchell Minotti",
    "winner_school": "Lehigh",
    "loser": "Anthony Collica",
    "loser_school": "Oklahoma State",
    "result": "TB-2 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 538,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "Cody Pack",
    "loser_school": "South Dakota State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 539,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Alex Elder",
    "loser_school": "Oregon State",
    "result": "TF-1.5 5:26 (24-6)"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 540,
    "winner": "Brian Murphy",
    "winner_school": "Michigan",
    "loser": "Spartak Chino",
    "loser_school": "Ohio",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 541,
    "winner": "Jim Wilson",
    "winner_school": "Stanford",
    "loser": "Cooper Moore",
    "loser_school": "Northern Iowa",
    "result": "SV-1 7-5"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 542,
    "winner": "Jackson Morse",
    "winner_school": "Illinois",
    "loser": "Mike England",
    "loser_school": "Missouri",
    "result": "Fall 4:31"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 543,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Pierce Harger",
    "loser_school": "Northwestern",
    "result": "For."
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 544,
    "winner": "Isaac Jordan",
    "winner_school": "Wisconsin",
    "loser": "Michael Moreno",
    "loser_school": "Iowa State",
    "result": "SV-1 8-6"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 545,
    "winner": "Kurtis Julson",
    "winner_school": "North Dakota State",
    "loser": "Joe Latham",
    "loser_school": "Oregon State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 546,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Zach Brunson",
    "loser_school": "Illinois",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 547,
    "winner": "Zach Epperly",
    "winner_school": "Virginia Tech",
    "loser": "Blaise Butler",
    "loser_school": "Virginia",
    "result": "Fall 6:25"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 548,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Cody Walters",
    "loser_school": "Ohio",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 549,
    "winner": "Willie Miklus",
    "winner_school": "Missouri",
    "loser": "Taylor Meeks",
    "loser_school": "Oregon State",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 550,
    "winner": "Blake Stauffer",
    "winner_school": "Arizona State",
    "loser": "Sam Brooks",
    "loser_school": "Iowa",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 551,
    "winner": "Hayden Zillmer",
    "winner_school": "North Dakota State",
    "loser": "Max Thomusseit",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 552,
    "winner": "Timothy Dudley",
    "winner_school": "Nebraska",
    "loser": "Matthew McCutcheon",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 553,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Aaron Studebaker",
    "loser_school": "Nebraska",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 554,
    "winner": "Max Huntley",
    "winner_school": "Michigan",
    "loser": "Timothy McCall",
    "loser_school": "Wisconsin",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 555,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Shane Woods",
    "loser_school": "Wyoming",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 556,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "Canaan Bethea",
    "loser_school": "Penn",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 557,
    "winner": "Ty Walz",
    "winner_school": "Virginia Tech",
    "loser": "Austin Marsden",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 558,
    "winner": "James Lawson",
    "winner_school": "Penn State",
    "loser": "Devin Mellon",
    "loser_school": "Missouri",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 559,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Blaize Cabell",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 560,
    "winner": "Michael Kroells",
    "winner_school": "Minnesota",
    "loser": "Spencer Myers",
    "loser_school": "Maryland",
    "result": "TB-2 (RT) 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 561,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Jordan Conaway",
    "loser_school": "Penn State",
    "result": "MD 10-1"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 562,
    "winner": "Conor Youtsey",
    "winner_school": "Michigan",
    "loser": "Eddie Klimara",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 563,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "Rossi Bruno",
    "loser_school": "Michigan",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 564,
    "winner": "Mason Beckman",
    "winner_school": "Lehigh",
    "loser": "Bradley Taylor",
    "loser_school": "Wisconsin",
    "result": "Fall 6:59"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 565,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Lavion Mayes",
    "loser_school": "Missouri",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 566,
    "winner": "Dean Heil",
    "winner_school": "Oklahoma State",
    "loser": "Anthony Ashnault",
    "loser_school": "Rutgers",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 567,
    "winner": "Bryant Clagon",
    "winner_school": "Rider",
    "loser": "Alexander Richardson",
    "loser_school": "Old Dominion",
    "result": "TB-1 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 568,
    "winner": "Brandon Sorensen",
    "winner_school": "Iowa",
    "loser": "Daniel Neff",
    "loser_school": "Lock Haven",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 569,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "Mitchell Minotti",
    "loser_school": "Lehigh",
    "result": "MD 8-0"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 570,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Brian Murphy",
    "loser_school": "Michigan",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 571,
    "winner": "Jackson Morse",
    "winner_school": "Illinois",
    "loser": "Jim Wilson",
    "loser_school": "Stanford",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 572,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Isaac Jordan",
    "loser_school": "Wisconsin",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 573,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Kurtis Julson",
    "loser_school": "North Dakota State",
    "result": "MD 11-3"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 574,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Zach Epperly",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 575,
    "winner": "Blake Stauffer",
    "winner_school": "Arizona State",
    "loser": "Willie Miklus",
    "loser_school": "Missouri",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 576,
    "winner": "Hayden Zillmer",
    "winner_school": "North Dakota State",
    "loser": "Timothy Dudley",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 577,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Max Huntley",
    "loser_school": "Michigan",
    "result": "Fall 1:11"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 578,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Nathan Burak",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "James Lawson",
    "winner_school": "Penn State",
    "loser": "Ty Walz",
    "loser_school": "Virginia Tech",
    "result": "SV-1 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "Michael Kroells",
    "loser_school": "Minnesota",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Thomas Gilman",
    "winner_school": "Iowa",
    "loser": "Nahshon Garrett",
    "loser_school": "Cornell",
    "result": "Fall 6:25"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Conor Youtsey",
    "loser_school": "Michigan",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "James Gulibon",
    "loser_school": "Penn State",
    "result": "Fall 3:39"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Christopher Dardanes",
    "winner_school": "Minnesota",
    "loser": "Mason Beckman",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Chris Mecate",
    "loser_school": "Old Dominion",
    "result": "Fall 4:13"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Dean Heil",
    "winner_school": "Oklahoma State",
    "loser": "Kevin Jack",
    "loser_school": "NC State",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "Bryant Clagon",
    "loser_school": "Rider",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Brandon Sorensen",
    "winner_school": "Iowa",
    "loser": "Christopher Villalonga",
    "loser_school": "Cornell",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Nick Brascetta",
    "winner_school": "Virginia Tech",
    "loser": "Dylan Ness",
    "loser_school": "Minnesota",
    "result": "Inj. 0:01"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Ian Miller",
    "loser_school": "Kent State",
    "result": "MD 13-4"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Jackson Morse",
    "winner_school": "Illinois",
    "loser": "Ethan Ramos",
    "loser_school": "North Carolina",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Bo Jordan",
    "winner_school": "Ohio State",
    "loser": "Nicholas Sulzer",
    "loser_school": "Virginia",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "SV-1 6-4"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Logan Storley",
    "winner_school": "Minnesota",
    "loser": "Kyle Crutchmer",
    "loser_school": "Oklahoma State",
    "result": "TB-1 9-7"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Blake Stauffer",
    "winner_school": "Arizona State",
    "loser": "Kenny Courts",
    "loser_school": "Ohio State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Victor Avery",
    "winner_school": "Edinboro",
    "loser": "Hayden Zillmer",
    "loser_school": "North Dakota State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Scott Schiller",
    "winner_school": "Minnesota",
    "loser": "Conner Hartmann",
    "loser_school": "Duke",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "J`Den Cox",
    "loser_school": "Missouri",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "James Lawson",
    "loser_school": "Penn State",
    "result": "MD 10-1"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Connor Medbery",
    "winner_school": "Wisconsin",
    "loser": "Bobby Telford",
    "loser_school": "Iowa",
    "result": "SV-1 3-1"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Alan Waters",
    "winner_school": "Missouri",
    "loser": "Thomas Gilman",
    "loser_school": "Iowa",
    "result": "Dec 8-4"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Nahshon Garrett",
    "winner_school": "Cornell",
    "loser": "Conor Youtsey",
    "loser_school": "Michigan",
    "result": "Dec 9-3"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Eddie Klimara",
    "winner_school": "Oklahoma State",
    "loser": "Jordan Conaway",
    "loser_school": "Penn State",
    "result": "Dec 5-4"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "A.J. Schopp",
    "winner_school": "Edinboro",
    "loser": "Christopher Dardanes",
    "loser_school": "Minnesota",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "James Gulibon",
    "winner_school": "Penn State",
    "loser": "Mason Beckman",
    "loser_school": "Lehigh",
    "result": "Dec 9-5"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Bradley Taylor",
    "winner_school": "Wisconsin",
    "loser": "Rossi Bruno",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Devin Carter",
    "winner_school": "Virginia Tech",
    "loser": "Dean Heil",
    "loser_school": "Oklahoma State",
    "result": "MD 17-8"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Kevin Jack",
    "winner_school": "NC State",
    "loser": "Chris Mecate",
    "loser_school": "Old Dominion",
    "result": "Dec 3-0"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Lavion Mayes",
    "winner_school": "Missouri",
    "loser": "Anthony Ashnault",
    "loser_school": "Rutgers",
    "result": "M. For."
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Jason Tsirtsis",
    "winner_school": "Northwestern",
    "loser": "Brandon Sorensen",
    "loser_school": "Iowa",
    "result": "SV-1 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Bryant Clagon",
    "winner_school": "Rider",
    "loser": "Christopher Villalonga",
    "loser_school": "Cornell",
    "result": "Dec 6-3"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Alexander Richardson",
    "winner_school": "Old Dominion",
    "loser": "Daniel Neff",
    "loser_school": "Lock Haven",
    "result": "Fall 2:39"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "James Green",
    "winner_school": "Nebraska",
    "loser": "Nick Brascetta",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Ian Miller",
    "winner_school": "Kent State",
    "loser": "Dylan Ness",
    "loser_school": "Minnesota",
    "result": "M. For."
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Brian Murphy",
    "winner_school": "Michigan",
    "loser": "Mitchell Minotti",
    "loser_school": "Lehigh",
    "result": "M. For."
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Bo Jordan",
    "winner_school": "Ohio State",
    "loser": "Jackson Morse",
    "loser_school": "Illinois",
    "result": "Fall 1:00"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Nicholas Sulzer",
    "winner_school": "Virginia",
    "loser": "Ethan Ramos",
    "loser_school": "North Carolina",
    "result": "MD 12-4"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Isaac Jordan",
    "winner_school": "Wisconsin",
    "loser": "Jim Wilson",
    "loser_school": "Stanford",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Robert Kokesh",
    "winner_school": "Nebraska",
    "loser": "Logan Storley",
    "loser_school": "Minnesota",
    "result": "SV-1 6-4"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Kyle Crutchmer",
    "winner_school": "Oklahoma State",
    "loser": "Michael Evans",
    "loser_school": "Iowa",
    "result": "TB-1 2-1"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Zach Epperly",
    "winner_school": "Virginia Tech",
    "loser": "Kurtis Julson",
    "loser_school": "North Dakota State",
    "result": "Dec 3-2"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Victor Avery",
    "winner_school": "Edinboro",
    "loser": "Blake Stauffer",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Kenny Courts",
    "winner_school": "Ohio State",
    "loser": "Hayden Zillmer",
    "loser_school": "North Dakota State",
    "result": "Dec 4-3"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Willie Miklus",
    "winner_school": "Missouri",
    "loser": "Timothy Dudley",
    "loser_school": "Nebraska",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Morgan McIntosh",
    "winner_school": "Penn State",
    "loser": "Scott Schiller",
    "loser_school": "Minnesota",
    "result": "Dec 12-7"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "J`Den Cox",
    "winner_school": "Missouri",
    "loser": "Conner Hartmann",
    "loser_school": "Duke",
    "result": "TB-1 4-2"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Nathan Burak",
    "winner_school": "Iowa",
    "loser": "Max Huntley",
    "loser_school": "Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Michael McMullan",
    "winner_school": "Northwestern",
    "loser": "Connor Medbery",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Bobby Telford",
    "winner_school": "Iowa",
    "loser": "James Lawson",
    "loser_school": "Penn State",
    "result": "Dec 6-0"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Ty Walz",
    "winner_school": "Virginia Tech",
    "loser": "Michael Kroells",
    "loser_school": "Minnesota",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Nathan Tomasello",
    "winner_school": "Ohio State",
    "loser": "Zeke Moisey",
    "loser_school": "West Virginia",
    "result": "Dec 9-5"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Cody Brewer",
    "winner_school": "Oklahoma",
    "loser": "Cory Clark",
    "loser_school": "Iowa",
    "result": "Dec 11-8"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Logan Stieber",
    "winner_school": "Ohio State",
    "loser": "Mitchell Port",
    "loser_school": "Edinboro",
    "result": "Dec 11-5"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Drake Houdashelt",
    "winner_school": "Missouri",
    "loser": "David Habat",
    "loser_school": "Edinboro",
    "result": "SV-1 3-1"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Isaiah Martinez",
    "winner_school": "Illinois",
    "loser": "Brian Realbuto",
    "loser_school": "Cornell",
    "result": "MD 10-2"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Alex Dieringer",
    "winner_school": "Oklahoma State",
    "loser": "Taylor Walsh",
    "loser_school": "Indiana",
    "result": "Dec 14-7"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Matthew Brown",
    "winner_school": "Penn State",
    "loser": "Tyler Wilps",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Gabriel Dean",
    "winner_school": "Cornell",
    "loser": "Nathaniel Brown",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Kyven Gadson",
    "winner_school": "Iowa State",
    "loser": "Kyle Snyder",
    "loser_school": "Ohio State",
    "result": "Fall 4:24"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Nick Gwiazdowski",
    "winner_school": "NC State",
    "loser": "Adam Coon",
    "loser_school": "Michigan",
    "result": "Dec 7-6"
  }
];
