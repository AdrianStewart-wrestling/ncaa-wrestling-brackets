// 1999 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1999 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1999-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "125",
    "bout": 1,
    "winner": "Jeremy Sluyter",
    "winner_school": "East Stroudsburg",
    "loser": "Dave Ilaria",
    "loser_school": "Seton Hall",
    "result": "MD 8-0"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Jonathon Archuleta",
    "winner_school": "CSU Bakersfield",
    "loser": "Scott Owen",
    "loser_school": "Northern Illinois",
    "result": "Dec 12-6"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "George Carter",
    "winner_school": "Bloomsburg",
    "loser": "John Pozniak",
    "loser_school": "Virginia",
    "result": "Dec 10-7"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "Jimmy Arias",
    "winner_school": "Oklahoma State",
    "loser": "Brian Singleton",
    "loser_school": "Kent State",
    "result": "Dec 4-3"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Brian Pitzer",
    "winner_school": "Bucknell",
    "loser": "Peter Rogers",
    "loser_school": "Ohio State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 8,
    "winner": "Josh Didion",
    "winner_school": "Cleveland State",
    "loser": "Matt Esposito",
    "loser_school": "American",
    "result": "MD 12-3"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 9,
    "winner": "Craig Fenstermaker",
    "winner_school": "Virginia",
    "loser": "Justin Woodruff",
    "loser_school": "Navy",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Matt Mueller",
    "loser_school": "Pittsburgh",
    "result": "Fall 4:49"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Tom Combes",
    "loser_school": "Eastern Illinois",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Matt Azevedo",
    "winner_school": "Arizona State",
    "loser": "Brent Thompson",
    "loser_school": "Kent State",
    "result": "Fall 1:18"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Pat Cassidy",
    "winner_school": "Indiana",
    "loser": "Jason Gabrielson",
    "loser_school": "Edinboro",
    "result": "Fall 2:43"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Matt Roth",
    "winner_school": "Virginia",
    "loser": "Steve Doerrer",
    "loser_school": "Illinois",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "Paul Gomez",
    "winner_school": "Nebraska",
    "loser": "K.C. Rock",
    "loser_school": "Boise State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Jason Silverstein",
    "winner_school": "Purdue",
    "loser": "Paul Jimenez",
    "loser_school": "Old Dominion",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Jeremy Sluyter",
    "winner_school": "East Stroudsburg",
    "loser": "Angelo Zegarelli",
    "loser_school": "West Virginia",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Nathan Navarro",
    "loser_school": "Oregon State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Shane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Martin Kusick",
    "loser_school": "Coppin State",
    "result": "MD 19-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "Russ Witt",
    "winner_school": "Bloomsburg",
    "loser": "Adrian Tramutola",
    "loser_school": "Chattanooga",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Trap McCormack",
    "winner_school": "Lock Haven",
    "loser": "Dominic Caruso",
    "loser_school": "Northwestern",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Moses Delfin",
    "winner_school": "CSU Bakersfield",
    "loser": "Justin Bravo",
    "loser_school": "Penn",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Chuckie Connor",
    "winner_school": "North Carolina",
    "loser": "Kevin Black",
    "loser_school": "Wisconsin",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Rudy Ruiz",
    "loser_school": "Stanford",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Phil Mansueto",
    "winner_school": "Cleveland State",
    "loser": "Lee Carroll",
    "loser_school": "NC State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Brian Schaal",
    "loser_school": "Buffalo",
    "result": "TF 18-2 5:25"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Brad Collins",
    "loser_school": "Clarion",
    "result": "TF 20-5 6:05"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 28,
    "winner": "David Yi",
    "winner_school": "UC Davis",
    "loser": "Jason Nagle",
    "loser_school": "Penn",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Eric Keller",
    "winner_school": "Northern Iowa",
    "loser": "Brad Byers",
    "loser_school": "North Carolina",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Bob Hanson",
    "winner_school": "Chattanooga",
    "loser": "Justin Wilcox",
    "loser_school": "Edinboro",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "Bob Patnesky",
    "loser_school": "West Virginia",
    "result": "Fall 3:57"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Bart Golyer",
    "loser_school": "Minnesota",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Zach Zimmerer",
    "winner_school": "Stanford",
    "loser": "Ryan Egan",
    "loser_school": "Northern Illinois",
    "result": "Fall 5:29"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Livio DiRubbo",
    "loser_school": "Brown",
    "result": "Dec 15-10"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Nate Parker",
    "loser_school": "Penn State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Dane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Aaron Holker",
    "loser_school": "Brigham Young",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Sean Shea",
    "loser_school": "George Mason",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 38,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Ben Richards",
    "loser_school": "Oregon State",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Dave Vollmer",
    "winner_school": "James Madison",
    "loser": "Jay Vesperman",
    "loser_school": "Central Michigan",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Dave Stoltz",
    "loser_school": "Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Shawn Amistade",
    "winner_school": "Pittsburgh",
    "loser": "Brandon York",
    "loser_school": "Maryland",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Don Pool",
    "loser_school": "Eastern Illinois",
    "result": "TF 15-0 4:24"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Ben New",
    "winner_school": "Cornell",
    "loser": "Jonathon Archuleta",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 4:33"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Scott Bair",
    "loser_school": "Lock Haven",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Rafael Vega",
    "loser_school": "Edinboro",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Damion Logan",
    "winner_school": "Michigan",
    "loser": "Francky Francois",
    "loser_school": "Delaware State",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Brett Tullo",
    "winner_school": "Bloomsburg",
    "loser": "Mark Perryman",
    "loser_school": "Arizona State",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "Isaac Miller",
    "winner_school": "Michigan State",
    "loser": "Mike Coyle",
    "loser_school": "James Madison",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "James Gross",
    "loser_school": "Cal Poly",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Tommy Davis",
    "loser_school": "NC State",
    "result": "MD 16-6"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Jeremy Hart",
    "winner_school": "Appalachian State",
    "loser": "Joey Coughran",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 6:42"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Jason DeBruin",
    "winner_school": "Hofstra",
    "loser": "Matt Goldstein",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "James Torres",
    "loser_school": "Indiana",
    "result": "Fall 2:13"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Dustin Denunzio",
    "winner_school": "Harvard",
    "loser": "Derek Jenkins",
    "loser_school": "Rider",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Jose Deanda",
    "winner_school": "Nebraska",
    "loser": "Josh Cowley",
    "loser_school": "North Carolina",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Paris Ruiz",
    "winner_school": "Fresno State",
    "loser": "Charles Walker",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Chris Marshall",
    "winner_school": "Central Michigan",
    "loser": "Mark Piotrowsky",
    "loser_school": "Penn",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Melvin Saunders",
    "loser_school": "UNC Greensboro",
    "result": "Fall 1:08"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Joe Carr",
    "winner_school": "West Virginia",
    "loser": "Dusty Coufal",
    "loser_school": "Wisconsin",
    "result": "Fall 3:18"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "Shawn Bradley",
    "winner_school": "Cornell",
    "loser": "Corey Grant",
    "loser_school": "Michigan",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Greg Mayer",
    "winner_school": "Central Michigan",
    "loser": "JohnMark Bentley",
    "loser_school": "North Carolina",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "George Carter",
    "loser_school": "Bloomsburg",
    "result": "Fall 2:50"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Ryan Shapert",
    "winner_school": "Edinboro",
    "loser": "Jared Frayer",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Scott Frohardt",
    "loser_school": "Air Force",
    "result": "Fall 4:40"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Mike Mendoza",
    "winner_school": "CSU Bakersfield",
    "loser": "Troy Marr",
    "loser_school": "Minnesota",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Joe Henson",
    "loser_school": "Nebraska",
    "result": "Fall 1:18"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Marc Hoffer",
    "winner_school": "American",
    "loser": "Jeff Urban",
    "loser_school": "Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Ryan Bernholz",
    "winner_school": "Lehigh",
    "loser": "Jeff Bucher",
    "loser_school": "Ohio State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Tony Davis",
    "winner_school": "Northern Iowa",
    "loser": "Stan Spoor",
    "loser_school": "Clarion",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Cedric Haymon",
    "loser_school": "Cal Poly",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Cole Sanderson",
    "winner_school": "Iowa State",
    "loser": "Quinn Foster",
    "loser_school": "Arizona State",
    "result": "TF 21-6 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Chad Jesko",
    "winner_school": "Pittsburgh",
    "loser": "Chris Elliott",
    "loser_school": "Slippery Rock",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Biff Walizer",
    "loser_school": "Penn State",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Shane McChesney",
    "loser_school": "Clarion",
    "result": "Fall 2:09"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Heath Eslinger",
    "winner_school": "Chattanooga",
    "loser": "Zachary Miller",
    "loser_school": "Hofstra",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "David Maldonado",
    "winner_school": "Iowa State",
    "loser": "Griff Powell",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Willie Wineberg",
    "winner_school": "Purdue",
    "loser": "Pat Cadwallader",
    "loser_school": "North Carolina",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Eric Jorgensen",
    "loser_school": "Oregon State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Ben Boozer",
    "winner_school": "Edinboro",
    "loser": "Kevin Stanley",
    "loser_school": "Indiana",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Mike Ziska",
    "winner_school": "Pittsburgh",
    "loser": "Mark Weader",
    "loser_school": "George Mason",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "Corey Wallman",
    "winner_school": "Wisconsin",
    "loser": "Larry Quisel",
    "loser_school": "Boise State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Clint Musser",
    "winner_school": "Penn State",
    "loser": "Jeff Rusak",
    "loser_school": "Old Dominion",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "David Kjeldgaard",
    "winner_school": "Oklahoma",
    "loser": "Pierre Pryor",
    "loser_school": "NC State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Chris Ayres",
    "winner_school": "Lehigh",
    "loser": "Darryl Christian",
    "loser_school": "Oregon",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Jamie Heidt",
    "winner_school": "Iowa",
    "loser": "Matt Erwin",
    "loser_school": "VMI",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Jimmy Arias",
    "winner_school": "Oklahoma State",
    "loser": "Doug Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Beau Weiner",
    "winner_school": "Stanford",
    "loser": "Yoshi Nakamura",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Matt Winninger",
    "winner_school": "Wyoming",
    "loser": "Brian Olenek",
    "loser_school": "Lock Haven",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Adam Whitlach",
    "loser_school": "Ohio",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Chris Snyder",
    "loser_school": "Central Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Brian Pitzer",
    "winner_school": "Bucknell",
    "loser": "Matt Demers",
    "loser_school": "Fresno State",
    "result": "Fall 2:34"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Kris Bishop",
    "loser_school": "James Madison",
    "result": "Fall 4:35"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Richard Taylor",
    "winner_school": "West Virginia",
    "loser": "Chad Liott",
    "loser_school": "Rider",
    "result": "Fall 4:00"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Rodney Jones",
    "winner_school": "Oklahoma",
    "loser": "Peter Butville",
    "loser_school": "Marquette",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Alex Leykikh",
    "winner_school": "Penn State",
    "loser": "Gerald Harris",
    "loser_school": "Cleveland State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Josh Holiday",
    "winner_school": "Minnesota",
    "loser": "Nate Lawrenz",
    "loser_school": "Northern Iowa",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Brian Wood",
    "loser_school": "Wyoming",
    "result": "TF 19-4 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Andy Varner",
    "winner_school": "CSU Bakersfield",
    "loser": "Ben Uker",
    "loser_school": "Iowa",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Jim Harshaw",
    "winner_school": "Virginia",
    "loser": "Sean Morgan",
    "loser_school": "Oregon",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Mark Samples",
    "winner_school": "Edinboro",
    "loser": "Matt Mapes",
    "loser_school": "Duke",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Joey Killar",
    "winner_school": "Harvard",
    "loser": "Drew Pariano",
    "loser_school": "Northwestern",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Brian Pardini",
    "loser_school": "Pittsburgh",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Ty Wilcox",
    "winner_school": "Oklahoma State",
    "loser": "Dan Calhoun",
    "loser_school": "North Carolina",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Tim Ritchie",
    "loser_school": "The Citadel",
    "result": "Fall 6:59"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Luke Bindriff",
    "loser_school": "Air Force",
    "result": "TF 17-1 3:52"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Kevin Boross",
    "winner_school": "NC State",
    "loser": "Clint Wilson",
    "loser_school": "Oregon State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Gabe McMahan",
    "winner_school": "Iowa",
    "loser": "Mike Feeney",
    "loser_school": "Eastern Michigan",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Kyle Klonizos",
    "loser_school": "Boise State",
    "result": "Fall 4:27"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Michael Barger",
    "loser_school": "Oklahoma",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Perry Parks",
    "winner_school": "Iowa State",
    "loser": "Joe Tucceri",
    "loser_school": "Cornell",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Mark Bybee",
    "winner_school": "Northwestern",
    "loser": "Randy Pugh",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Leo Giel",
    "winner_school": "Rider",
    "loser": "Delaney Berger",
    "loser_school": "Minnesota",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Jamie Groudle",
    "winner_school": "North Carolina",
    "loser": "Brad McDonald",
    "loser_school": "Brown",
    "result": "Fall 2:27"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Jason Moaney",
    "winner_school": "Clarion",
    "loser": "Jacob Schaus",
    "loser_school": "Buffalo",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "William Hill",
    "winner_school": "Michigan State",
    "loser": "David Wells",
    "loser_school": "Cal Poly",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Kole Clauson",
    "winner_school": "Wisconsin",
    "loser": "Jason Webster",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Neil Johnson",
    "loser_school": "George Mason",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Glenn Pritzlaff",
    "winner_school": "Penn State",
    "loser": "Jamie Hensch",
    "loser_school": "UNC Greensboro",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Josh Didion",
    "loser_school": "Cleveland State",
    "result": "Fall 4:46"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Nate Patrick",
    "winner_school": "Illinois",
    "loser": "Corey Bell",
    "loser_school": "North Carolina",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Russell Jones",
    "winner_school": "Hofstra",
    "loser": "Dax McMillan",
    "loser_school": "Boise State",
    "result": "Fall 2:49"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Greg Gingeleskie",
    "loser_school": "Navy",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Steve Schenk",
    "loser_school": "Wyoming",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Todd Palmisano",
    "loser_school": "Rider",
    "result": "Fall 5:42"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Tom Grossman",
    "winner_school": "Oklahoma",
    "loser": "Scott Coleman",
    "loser_school": "Brigham Young",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "John Van Doren",
    "winner_school": "Lehigh",
    "loser": "Josh Heffernan",
    "loser_school": "Ohio",
    "result": "TF 19-4 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Paul Jenn",
    "loser_school": "Iowa",
    "result": "TF 24-9 6:24"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Doug Lee",
    "winner_school": "Oregon",
    "loser": "Nick Preston",
    "loser_school": "Ohio State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Ross Thatcher",
    "winner_school": "Penn State",
    "loser": "Lionel Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Steve Alf",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 135,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Nate Burroughs",
    "loser_school": "Brown",
    "result": "Fall 4:59"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Mike Greenfield",
    "winner_school": "Central Michigan",
    "loser": "Dave Murray",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Ken Bigley",
    "winner_school": "Northern Iowa",
    "loser": "Dax Pecaro",
    "loser_school": "UNC Greensboro",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Shawn Finnicum",
    "loser_school": "Air Force",
    "result": "TF 19-4 6:15"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 139,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Babek Nejadmaghaddam",
    "loser_school": "Cal State Fullerton",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Waymon May",
    "winner_school": "Oklahoma",
    "loser": "Shawn Scannell",
    "loser_school": "Rider",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Raphael Davis",
    "winner_school": "CSU Bakersfield",
    "loser": "Brett Calabretta",
    "loser_school": "Penn State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Tony Wieland",
    "winner_school": "Northern Iowa",
    "loser": "Frank Lodeserto",
    "loser_school": "Michigan",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 143,
    "winner": "Chris Vike",
    "winner_school": "Central Michigan",
    "loser": "Chad Roland",
    "loser_school": "Duquesne",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "Demetrist Huff",
    "winner_school": "Fresno State",
    "loser": "Dan Stine",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Isaac Moore",
    "winner_school": "VMI",
    "loser": "Eric Mausser",
    "loser_school": "Clarion",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Craig Rumsey",
    "loser_school": "Wyoming",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Scott Munson",
    "loser_school": "Nebraska",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 148,
    "winner": "Damien Craighton",
    "winner_school": "Drexel",
    "loser": "Craig Fenstermaker",
    "loser_school": "Virginia",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Chael Sonnen",
    "winner_school": "Oregon",
    "loser": "Brad Soltis",
    "loser_school": "Harvard",
    "result": "Fall 2:40"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Mike French",
    "loser_school": "Cal Poly",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Greg Forbes",
    "loser_school": "UNC Greensboro",
    "result": "MD 13-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Bob Greenleaf",
    "loser_school": "Cornell",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Jameel Abdullah",
    "winner_school": "Boston University",
    "loser": "Ken Haines",
    "loser_school": "Lock Haven",
    "result": "Fall 0:43"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Andrei Rodzianko",
    "winner_school": "Penn",
    "loser": "Josh Schroeder",
    "loser_school": "American",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Matt Lamb",
    "loser_school": "Michigan State",
    "result": "Fall 1:38"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Dave Anderton",
    "winner_school": "Oklahoma State",
    "loser": "Jason Pernat",
    "loser_school": "Wisconsin",
    "result": "Fall 4:27"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Wes Hand",
    "winner_school": "Iowa",
    "loser": "Bill Bell",
    "loser_school": "Lock Haven",
    "result": "TF 23-8 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Matt Kenny",
    "winner_school": "North Carolina",
    "loser": "J.R. Plienis",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Seth Charles",
    "loser_school": "Cornell",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Mike Russow",
    "winner_school": "Eastern Illinois",
    "loser": "Leo Sandoval",
    "loser_school": "Portland State",
    "result": "Fall 7:26"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Mark Janus",
    "winner_school": "Penn State",
    "loser": "Antonio Garay",
    "loser_school": "Boston College",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "Mat Orndorff",
    "winner_school": "Oregon State",
    "loser": "Mark Knauer",
    "loser_school": "Iowa State",
    "result": "Fall 6:53"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Leslie Apedoe",
    "winner_school": "VMI",
    "loser": "John Eschenfelder",
    "loser_school": "Buffalo",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "David Pierce",
    "winner_school": "Purdue",
    "loser": "Brent Lancaster",
    "loser_school": "George Mason",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "A.J. Johnson",
    "loser_school": "Edinboro",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "John Henry Ward",
    "winner_school": "Oklahoma",
    "loser": "Matt Brink",
    "loser_school": "Michigan",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Derek DelPorto",
    "winner_school": "Slippery Rock",
    "loser": "Chris Miller",
    "loser_school": "Brigham Young",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Bandele Adeniyi-Bada",
    "winner_school": "Penn",
    "loser": "Gan McGee",
    "loser_school": "Cal Poly",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Bronson Lingamfelter",
    "winner_school": "Brown",
    "loser": "Abe Boomer",
    "loser_school": "Wyoming",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Brock Lesnar",
    "winner_school": "Minnesota",
    "loser": "Sean Hage",
    "loser_school": "West Virginia",
    "result": "MD 12-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "125",
    "bout": 171,
    "winner": "Adrian Tramutola",
    "winner_school": "Chattanooga",
    "loser": "Dave Ilaria",
    "loser_school": "Seton Hall",
    "result": "MD 15-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Scott Owen",
    "winner_school": "Northern Illinois",
    "loser": "Charles Walker",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "John Pozniak",
    "winner_school": "Virginia",
    "loser": "Stan Spoor",
    "loser_school": "Clarion",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Brian Singleton",
    "winner_school": "Kent State",
    "loser": "Pat Cadwallader",
    "loser_school": "North Carolina",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Peter Rogers",
    "winner_school": "Ohio State",
    "loser": "Dan Calhoun",
    "loser_school": "North Carolina",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 178,
    "winner": "Matt Esposito",
    "winner_school": "American",
    "loser": "Shawn Finnicum",
    "loser_school": "Air Force",
    "result": "MD 13-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 179,
    "winner": "Justin Woodruff",
    "winner_school": "Navy",
    "loser": "Eric Mausser",
    "loser_school": "Clarion",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Matt Mueller",
    "winner_school": "Pittsburgh",
    "loser": "Matt Brink",
    "loser_school": "Michigan",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Matt Azevedo",
    "loser_school": "Arizona State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Pat Cassidy",
    "winner_school": "Indiana",
    "loser": "Matt Roth",
    "loser_school": "Virginia",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "Jason Silverstein",
    "winner_school": "Purdue",
    "loser": "Paul Gomez",
    "loser_school": "Nebraska",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Jeremy Sluyter",
    "loser_school": "East Stroudsburg",
    "result": "Fall 6:02"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Shane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Russ Witt",
    "loser_school": "Bloomsburg",
    "result": "TF 18-2 5:56"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Moses Delfin",
    "winner_school": "CSU Bakersfield",
    "loser": "Trap McCormack",
    "loser_school": "Lock Haven",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Chuckie Connor",
    "winner_school": "North Carolina",
    "loser": "Leroy Vega",
    "loser_school": "Minnesota",
    "result": "Fall 0:40"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Phil Mansueto",
    "loser_school": "Cleveland State",
    "result": "MD 18-5"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Lee Carroll",
    "winner_school": "NC State",
    "loser": "Brian Schaal",
    "loser_school": "Buffalo",
    "result": "Dec 11-10"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Rudy Ruiz",
    "winner_school": "Stanford",
    "loser": "Kevin Black",
    "loser_school": "Wisconsin",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Dominic Caruso",
    "winner_school": "Northwestern",
    "loser": "Justin Bravo",
    "loser_school": "Penn",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Adrian Tramutola",
    "winner_school": "Chattanooga",
    "loser": "Martin Kusick",
    "loser_school": "Coppin State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Nathan Navarro",
    "winner_school": "Oregon State",
    "loser": "Angelo Zegarelli",
    "loser_school": "West Virginia",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "K.C. Rock",
    "winner_school": "Boise State",
    "loser": "Paul Jimenez",
    "loser_school": "Old Dominion",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Steve Doerrer",
    "winner_school": "Illinois",
    "loser": "Jason Gabrielson",
    "loser_school": "Edinboro",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Tom Combes",
    "winner_school": "Eastern Illinois",
    "loser": "Brent Thompson",
    "loser_school": "Kent State",
    "result": "MD 16-7"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "David Yi",
    "loser_school": "UC Davis",
    "result": "TF 18-2 5:00"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Eric Keller",
    "winner_school": "Northern Iowa",
    "loser": "Bob Hanson",
    "loser_school": "Chattanooga",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Joe Warren",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Zach Zimmerer",
    "loser_school": "Stanford",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Dane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Robert Sessley",
    "loser_school": "Ohio State",
    "result": "Dec 3-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Dave Vollmer",
    "loser_school": "James Madison",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Cody Sanderson",
    "winner_school": "Iowa State",
    "loser": "Shawn Amistade",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Jay Vesperman",
    "winner_school": "Central Michigan",
    "loser": "Dave Stoltz",
    "loser_school": "Illinois",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 207,
    "winner": "Sean Shea",
    "winner_school": "George Mason",
    "loser": "Ben Richards",
    "loser_school": "Oregon State",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Aaron Holker",
    "winner_school": "Brigham Young",
    "loser": "Nate Parker",
    "loser_school": "Penn State",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Ryan Egan",
    "winner_school": "Northern Illinois",
    "loser": "Livio DiRubbo",
    "loser_school": "Brown",
    "result": "MD 21-9"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Bart Golyer",
    "winner_school": "Minnesota",
    "loser": "Bob Patnesky",
    "loser_school": "West Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Justin Wilcox",
    "winner_school": "Edinboro",
    "loser": "Brad Byers",
    "loser_school": "North Carolina",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 212,
    "winner": "Jason Nagle",
    "winner_school": "Penn",
    "loser": "Brad Collins",
    "loser_school": "Clarion",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Ben New",
    "loser_school": "Cornell",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Scott Schatzman",
    "loser_school": "Northwestern",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Damion Logan",
    "winner_school": "Michigan",
    "loser": "Brett Tullo",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Isaac Miller",
    "loser_school": "Michigan State",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Jeremy Hart",
    "loser_school": "Appalachian State",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Jason DeBruin",
    "loser_school": "Hofstra",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Jose Deanda",
    "winner_school": "Nebraska",
    "loser": "Dustin Denunzio",
    "loser_school": "Harvard",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Chris Marshall",
    "winner_school": "Central Michigan",
    "loser": "Paris Ruiz",
    "loser_school": "Fresno State",
    "result": "Fall 2:59"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Mark Piotrowsky",
    "winner_school": "Penn",
    "loser": "Scott Owen",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Derek Jenkins",
    "winner_school": "Rider",
    "loser": "Josh Cowley",
    "loser_school": "North Carolina",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "James Torres",
    "winner_school": "Indiana",
    "loser": "Matt Goldstein",
    "loser_school": "Wisconsin",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Tommy Davis",
    "winner_school": "NC State",
    "loser": "Joey Coughran",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "James Gross",
    "winner_school": "Cal Poly",
    "loser": "Mike Coyle",
    "loser_school": "James Madison",
    "result": "Dec 9-5 SV"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Mark Perryman",
    "winner_school": "Arizona State",
    "loser": "Francky Francois",
    "loser_school": "Delaware State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Scott Bair",
    "winner_school": "Lock Haven",
    "loser": "Rafael Vega",
    "loser_school": "Edinboro",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Jonathon Archuleta",
    "winner_school": "CSU Bakersfield",
    "loser": "Don Pool",
    "loser_school": "Eastern Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Joe Carr",
    "loser_school": "West Virginia",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Shawn Bradley",
    "winner_school": "Cornell",
    "loser": "Greg Mayer",
    "loser_school": "Central Michigan",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "Ryan Shapert",
    "loser_school": "Edinboro",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Mike Mendoza",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Marc Hoffer",
    "winner_school": "American",
    "loser": "Oscar Wood",
    "loser_school": "Oregon State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Tony Davis",
    "winner_school": "Northern Iowa",
    "loser": "Ryan Bernholz",
    "loser_school": "Lehigh",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Cole Sanderson",
    "loser_school": "Iowa State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Chad Jesko",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Biff Walizer",
    "winner_school": "Penn State",
    "loser": "Chris Elliott",
    "loser_school": "Slippery Rock",
    "result": "Fall 5:57"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Cedric Haymon",
    "winner_school": "Cal Poly",
    "loser": "Quinn Foster",
    "loser_school": "Arizona State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Jeff Bucher",
    "winner_school": "Ohio State",
    "loser": "John Pozniak",
    "loser_school": "Virginia",
    "result": "MD 15-7"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Joe Henson",
    "winner_school": "Nebraska",
    "loser": "Jeff Urban",
    "loser_school": "Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Troy Marr",
    "winner_school": "Minnesota",
    "loser": "Scott Frohardt",
    "loser_school": "Air Force",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "George Carter",
    "loser_school": "Bloomsburg",
    "result": "Fall 3:23"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "JohnMark Bentley",
    "winner_school": "North Carolina",
    "loser": "Corey Grant",
    "loser_school": "Michigan",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Dusty Coufal",
    "winner_school": "Wisconsin",
    "loser": "Melvin Saunders",
    "loser_school": "UNC Greensboro",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Heath Eslinger",
    "loser_school": "Chattanooga",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Willie Wineberg",
    "winner_school": "Purdue",
    "loser": "David Maldonado",
    "loser_school": "Iowa State",
    "result": "Dec 5-3 TB"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Ben Boozer",
    "loser_school": "Edinboro",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Mike Ziska",
    "winner_school": "Pittsburgh",
    "loser": "Corey Wallman",
    "loser_school": "Wisconsin",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Clint Musser",
    "winner_school": "Penn State",
    "loser": "David Kjeldgaard",
    "loser_school": "Oklahoma",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Chris Ayres",
    "winner_school": "Lehigh",
    "loser": "Jamie Heidt",
    "loser_school": "Iowa",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Beau Weiner",
    "winner_school": "Stanford",
    "loser": "Jimmy Arias",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Matt Winninger",
    "loser_school": "Wyoming",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Nathan Vasquez",
    "winner_school": "CSU Bakersfield",
    "loser": "Adam Whitlach",
    "loser_school": "Ohio",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Yoshi Nakamura",
    "winner_school": "Penn",
    "loser": "Doug Cieleski",
    "loser_school": "Slippery Rock",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Darryl Christian",
    "winner_school": "Oregon",
    "loser": "Matt Erwin",
    "loser_school": "VMI",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Jeff Rusak",
    "winner_school": "Old Dominion",
    "loser": "Pierre Pryor",
    "loser_school": "NC State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Mark Weader",
    "loser_school": "George Mason",
    "result": "Fall 3:36"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "Kevin Stanley",
    "loser_school": "Indiana",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "Brian Singleton",
    "loser_school": "Kent State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Zachary Miller",
    "winner_school": "Hofstra",
    "loser": "Shane McChesney",
    "loser_school": "Clarion",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Brian Pitzer",
    "loser_school": "Bucknell",
    "result": "Fall 1:54"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Richard Taylor",
    "loser_school": "West Virginia",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Rodney Jones",
    "winner_school": "Oklahoma",
    "loser": "Bill Zeman",
    "loser_school": "Illinois",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Josh Holiday",
    "winner_school": "Minnesota",
    "loser": "Alex Leykikh",
    "loser_school": "Penn State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Andy Varner",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 2:35"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Mark Samples",
    "winner_school": "Edinboro",
    "loser": "Jim Harshaw",
    "loser_school": "Virginia",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Joey Killar",
    "winner_school": "Harvard",
    "loser": "Rick Springman",
    "loser_school": "Penn",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Ty Wilcox",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Peter Rogers",
    "winner_school": "Ohio State",
    "loser": "Tim Ritchie",
    "loser_school": "The Citadel",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Brian Pardini",
    "winner_school": "Pittsburgh",
    "loser": "Drew Pariano",
    "loser_school": "Northwestern",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Sean Morgan",
    "winner_school": "Oregon",
    "loser": "Matt Mapes",
    "loser_school": "Duke",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Ben Uker",
    "winner_school": "Iowa",
    "loser": "Brian Wood",
    "loser_school": "Wyoming",
    "result": "MD 16-7"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Nate Lawrenz",
    "winner_school": "Northern Iowa",
    "loser": "Gerald Harris",
    "loser_school": "Cleveland State",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Chad Liott",
    "winner_school": "Rider",
    "loser": "Kris Bishop",
    "loser_school": "James Madison",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Chris Snyder",
    "winner_school": "Central Michigan",
    "loser": "Matt Demers",
    "loser_school": "Fresno State",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Kevin Boross",
    "winner_school": "NC State",
    "loser": "Mark Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Sam Kline",
    "winner_school": "West Virginia",
    "loser": "Gabe McMahan",
    "loser_school": "Iowa",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Ryan Cunningham",
    "loser_school": "Central Michigan",
    "result": "Dec 13-9"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Perry Parks",
    "winner_school": "Iowa State",
    "loser": "Mark Bybee",
    "loser_school": "Northwestern",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Leo Giel",
    "winner_school": "Rider",
    "loser": "Jamie Groudle",
    "loser_school": "North Carolina",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "William Hill",
    "winner_school": "Michigan State",
    "loser": "Jason Moaney",
    "loser_school": "Clarion",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Kole Clauson",
    "winner_school": "Wisconsin",
    "loser": "Josh Koscheck",
    "loser_school": "Edinboro",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Glenn Pritzlaff",
    "winner_school": "Penn State",
    "loser": "Nick Mengerink",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Jason Webster",
    "winner_school": "Cal State Fullerton",
    "loser": "Neil Johnson",
    "loser_school": "George Mason",
    "result": "MD 14-3"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Jacob Schaus",
    "winner_school": "Buffalo",
    "loser": "David Wells",
    "loser_school": "Cal Poly",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Delaney Berger",
    "winner_school": "Minnesota",
    "loser": "Brad McDonald",
    "loser_school": "Brown",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Randy Pugh",
    "winner_school": "Northern Iowa",
    "loser": "Joe Tucceri",
    "loser_school": "Cornell",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Michael Barger",
    "winner_school": "Oklahoma",
    "loser": "Kyle Klonizos",
    "loser_school": "Boise State",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "Luke Bindriff",
    "winner_school": "Air Force",
    "loser": "Clint Wilson",
    "loser_school": "Oregon State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Nate Patrick",
    "loser_school": "Illinois",
    "result": "MD 18-6"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Russell Jones",
    "loser_school": "Hofstra",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Viktor Sveda",
    "loser_school": "Indiana",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "John Van Doren",
    "winner_school": "Lehigh",
    "loser": "Tom Grossman",
    "loser_school": "Oklahoma",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Doug Lee",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Ross Thatcher",
    "winner_school": "Penn State",
    "loser": "Casey Strand",
    "loser_school": "Arizona State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Mike Greenfield",
    "winner_school": "Central Michigan",
    "loser": "Mark Munoz",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Ken Bigley",
    "loser_school": "Northern Iowa",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Dax Pecaro",
    "winner_school": "UNC Greensboro",
    "loser": "Matt Esposito",
    "loser_school": "American",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 302,
    "winner": "Dave Murray",
    "winner_school": "Lock Haven",
    "loser": "Nate Burroughs",
    "loser_school": "Brown",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Lionel Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Steve Alf",
    "loser_school": "Wisconsin",
    "result": "Fall 5:19"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Paul Jenn",
    "winner_school": "Iowa",
    "loser": "Nick Preston",
    "loser_school": "Ohio State",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Scott Coleman",
    "winner_school": "Brigham Young",
    "loser": "Josh Heffernan",
    "loser_school": "Ohio",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Steve Schenk",
    "winner_school": "Wyoming",
    "loser": "Todd Palmisano",
    "loser_school": "Rider",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Greg Gingeleskie",
    "winner_school": "Navy",
    "loser": "Dax McMillan",
    "loser_school": "Boise State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "Corey Bell",
    "winner_school": "North Carolina",
    "loser": "Josh Didion",
    "loser_school": "Cleveland State",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Waymon May",
    "loser_school": "Oklahoma",
    "result": "TF 15-0 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Raphael Davis",
    "winner_school": "CSU Bakersfield",
    "loser": "Tony Wieland",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Chris Vike",
    "winner_school": "Central Michigan",
    "loser": "Demetrist Huff",
    "loser_school": "Fresno State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Isaac Moore",
    "loser_school": "VMI",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Damien Craighton",
    "loser_school": "Drexel",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Chael Sonnen",
    "loser_school": "Oregon",
    "result": "Fall 2:32"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Pat Quirk",
    "loser_school": "Illinois",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Andrei Rodzianko",
    "winner_school": "Penn",
    "loser": "Jameel Abdullah",
    "loser_school": "Boston University",
    "result": "Fall 1:40"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Josh Schroeder",
    "winner_school": "American",
    "loser": "Ken Haines",
    "loser_school": "Lock Haven",
    "result": "Fall 5:14"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Bob Greenleaf",
    "winner_school": "Cornell",
    "loser": "Greg Forbes",
    "loser_school": "UNC Greensboro",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Mike French",
    "winner_school": "Cal Poly",
    "loser": "Brad Soltis",
    "loser_school": "Harvard",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 320,
    "winner": "Craig Fenstermaker",
    "winner_school": "Virginia",
    "loser": "Elliot Williams",
    "loser_school": "James Madison",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Justin Woodruff",
    "winner_school": "Navy",
    "loser": "Craig Rumsey",
    "loser_school": "Wyoming",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 322,
    "winner": "Chad Roland",
    "winner_school": "Duquesne",
    "loser": "Dan Stine",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Brett Calabretta",
    "winner_school": "Penn State",
    "loser": "Frank Lodeserto",
    "loser_school": "Michigan",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 324,
    "winner": "Babek Nejadmaghaddam",
    "winner_school": "Cal State Fullerton",
    "loser": "Shawn Scannell",
    "loser_school": "Rider",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Dave Anderton",
    "loser_school": "Oklahoma State",
    "result": "Fall 0:37"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Matt Kenny",
    "winner_school": "North Carolina",
    "loser": "Wes Hand",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Mike Russow",
    "loser_school": "Eastern Illinois",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "Mat Orndorff",
    "winner_school": "Oregon State",
    "loser": "Mark Janus",
    "loser_school": "Penn State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Leslie Apedoe",
    "winner_school": "VMI",
    "loser": "David Pierce",
    "loser_school": "Purdue",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "John Henry Ward",
    "winner_school": "Oklahoma",
    "loser": "Rusty Cook",
    "loser_school": "Boise State",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Derek DelPorto",
    "winner_school": "Slippery Rock",
    "loser": "Bandele Adeniyi-Bada",
    "loser_school": "Penn",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Brock Lesnar",
    "winner_school": "Minnesota",
    "loser": "Bronson Lingamfelter",
    "loser_school": "Brown",
    "result": "Fall 0:22"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Sean Hage",
    "winner_school": "West Virginia",
    "loser": "Abe Boomer",
    "loser_school": "Wyoming",
    "result": "Fall 2:11"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Gan McGee",
    "winner_school": "Cal Poly",
    "loser": "Chris Miller",
    "loser_school": "Brigham Young",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "A.J. Johnson",
    "winner_school": "Edinboro",
    "loser": "Matt Mueller",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "John Eschenfelder",
    "winner_school": "Buffalo",
    "loser": "Brent Lancaster",
    "loser_school": "George Mason",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "Antonio Garay",
    "winner_school": "Boston College",
    "loser": "Mark Knauer",
    "loser_school": "Iowa State",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Leo Sandoval",
    "winner_school": "Portland State",
    "loser": "Seth Charles",
    "loser_school": "Cornell",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "J.R. Plienis",
    "winner_school": "Nebraska",
    "loser": "Bill Bell",
    "loser_school": "Lock Haven",
    "result": "Fall 5:18"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Matt Lamb",
    "winner_school": "Michigan State",
    "loser": "Jason Pernat",
    "loser_school": "Wisconsin",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Paul Gomez",
    "winner_school": "Nebraska",
    "loser": "Lee Carroll",
    "loser_school": "NC State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Jeremy Sluyter",
    "winner_school": "East Stroudsburg",
    "loser": "Rudy Ruiz",
    "loser_school": "Stanford",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Matt Azevedo",
    "winner_school": "Arizona State",
    "loser": "Dominic Caruso",
    "loser_school": "Northwestern",
    "result": "Fall 6:33"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Matt Roth",
    "winner_school": "Virginia",
    "loser": "Adrian Tramutola",
    "loser_school": "Chattanooga",
    "result": "Fall 3:57"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Nathan Navarro",
    "loser_school": "Oregon State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "K.C. Rock",
    "winner_school": "Boise State",
    "loser": "Phil Mansueto",
    "loser_school": "Cleveland State",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "Steve Doerrer",
    "winner_school": "Illinois",
    "loser": "Russ Witt",
    "loser_school": "Bloomsburg",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Tom Combes",
    "winner_school": "Eastern Illinois",
    "loser": "Trap McCormack",
    "loser_school": "Lock Haven",
    "result": "Fall 1:24"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "Brandon York",
    "loser_school": "Maryland",
    "result": "Fall 4:09"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Zach Zimmerer",
    "winner_school": "Stanford",
    "loser": "Jay Vesperman",
    "loser_school": "Central Michigan",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Sean Shea",
    "winner_school": "George Mason",
    "loser": "David Yi",
    "loser_school": "UC Davis",
    "result": "Fall 2:31"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Aaron Holker",
    "winner_school": "Brigham Young",
    "loser": "Bob Hanson",
    "loser_school": "Chattanooga",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Ryan Egan",
    "winner_school": "Northern Illinois",
    "loser": "Dave Vollmer",
    "loser_school": "James Madison",
    "result": "TF 20-5 6:16"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Bart Golyer",
    "winner_school": "Minnesota",
    "loser": "Shawn Amistade",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Dane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Justin Wilcox",
    "loser_school": "Edinboro",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Jason Nagle",
    "loser_school": "Penn",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Mark Piotrowsky",
    "winner_school": "Penn",
    "loser": "Brett Tullo",
    "loser_school": "Bloomsburg",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "Derek Jenkins",
    "winner_school": "Rider",
    "loser": "Isaac Miller",
    "loser_school": "Michigan State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Ben New",
    "winner_school": "Cornell",
    "loser": "James Torres",
    "loser_school": "Indiana",
    "result": "Dec 13-8"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Tommy Davis",
    "loser_school": "NC State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Dustin Denunzio",
    "winner_school": "Harvard",
    "loser": "James Gross",
    "loser_school": "Cal Poly",
    "result": "Fall 4:48"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Mark Perryman",
    "winner_school": "Arizona State",
    "loser": "Paris Ruiz",
    "loser_school": "Fresno State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Scott Bair",
    "winner_school": "Lock Haven",
    "loser": "Jeremy Hart",
    "loser_school": "Appalachian State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Jonathon Archuleta",
    "winner_school": "CSU Bakersfield",
    "loser": "Jason DeBruin",
    "loser_school": "Hofstra",
    "result": "Dec 8-7 TB"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Biff Walizer",
    "winner_school": "Penn State",
    "loser": "Ryan Shapert",
    "loser_school": "Edinboro",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Mike Mendoza",
    "winner_school": "CSU Bakersfield",
    "loser": "Cedric Haymon",
    "loser_school": "Cal Poly",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Joe Carr",
    "winner_school": "West Virginia",
    "loser": "Jeff Bucher",
    "loser_school": "Ohio State",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "Greg Mayer",
    "winner_school": "Central Michigan",
    "loser": "Joe Henson",
    "loser_school": "Nebraska",
    "result": "Fall 4:07"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Troy Marr",
    "winner_school": "Minnesota",
    "loser": "Cole Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "Chad Jesko",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "JohnMark Bentley",
    "loser_school": "North Carolina",
    "result": "DQ"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Ryan Bernholz",
    "winner_school": "Lehigh",
    "loser": "Dusty Coufal",
    "loser_school": "Wisconsin",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Ben Boozer",
    "winner_school": "Edinboro",
    "loser": "Nathan Vasquez",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "Corey Wallman",
    "winner_school": "Wisconsin",
    "loser": "Yoshi Nakamura",
    "loser_school": "Penn",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Darryl Christian",
    "winner_school": "Oregon",
    "loser": "Heath Eslinger",
    "loser_school": "Chattanooga",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "David Maldonado",
    "winner_school": "Iowa State",
    "loser": "Jeff Rusak",
    "loser_school": "Old Dominion",
    "result": "Fall 4:43"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Jimmy Arias",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "Matt Winninger",
    "loser_school": "Wyoming",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "David Kjeldgaard",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Jamie Heidt",
    "winner_school": "Iowa",
    "loser": "Zachary Miller",
    "loser_school": "Hofstra",
    "result": "MD 19-7"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Bill Zeman",
    "winner_school": "Illinois",
    "loser": "Peter Rogers",
    "loser_school": "Ohio State",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Alex Leykikh",
    "winner_school": "Penn State",
    "loser": "Brian Pardini",
    "loser_school": "Pittsburgh",
    "result": "Fall 6:05"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Sean Morgan",
    "winner_school": "Oregon",
    "loser": "Brian Pitzer",
    "loser_school": "Bucknell",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Ben Uker",
    "winner_school": "Iowa",
    "loser": "Richard Taylor",
    "loser_school": "West Virginia",
    "result": "Fall 1:40"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Nate Lawrenz",
    "loser_school": "Northern Iowa",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Ty Wilcox",
    "winner_school": "Oklahoma State",
    "loser": "Peter Butville",
    "loser_school": "Marquette",
    "result": "MD 16-4"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Andy Varner",
    "winner_school": "CSU Bakersfield",
    "loser": "Chad Liott",
    "loser_school": "Rider",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Jim Harshaw",
    "winner_school": "Virginia",
    "loser": "Chris Snyder",
    "loser_school": "Central Michigan",
    "result": "Fall 3:37"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Jamie Hensch",
    "loser_school": "UNC Greensboro",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Mark Bybee",
    "winner_school": "Northwestern",
    "loser": "Jason Webster",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Jacob Schaus",
    "loser_school": "Buffalo",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Gabe McMahan",
    "winner_school": "Iowa",
    "loser": "Delaney Berger",
    "loser_school": "Minnesota",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Randy Pugh",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Michael Barger",
    "winner_school": "Oklahoma",
    "loser": "Nick Mengerink",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Mike Feeney",
    "winner_school": "Eastern Michigan",
    "loser": "Jamie Groudle",
    "loser_school": "North Carolina",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Luke Bindriff",
    "winner_school": "Air Force",
    "loser": "Jason Moaney",
    "loser_school": "Clarion",
    "result": "Dec 12-11"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Dax Pecaro",
    "loser_school": "UNC Greensboro",
    "result": "Fall 4:35"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Tom Grossman",
    "winner_school": "Oklahoma",
    "loser": "Dave Murray",
    "loser_school": "Lock Haven",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Nate Patrick",
    "winner_school": "Illinois",
    "loser": "Lionel Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Russell Jones",
    "winner_school": "Hofstra",
    "loser": "Paul Jenn",
    "loser_school": "Iowa",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Scott Coleman",
    "loser_school": "Brigham Young",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Ken Bigley",
    "winner_school": "Northern Iowa",
    "loser": "Steve Schenk",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Doug Lee",
    "winner_school": "Oregon",
    "loser": "Greg Gingeleskie",
    "loser_school": "Navy",
    "result": "Dec 14-11"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Corey Bell",
    "loser_school": "North Carolina",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Demetrist Huff",
    "winner_school": "Fresno State",
    "loser": "Josh Schroeder",
    "loser_school": "American",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Bob Greenleaf",
    "winner_school": "Cornell",
    "loser": "Isaac Moore",
    "loser_school": "VMI",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Mike French",
    "winner_school": "Cal Poly",
    "loser": "Waymon May",
    "loser_school": "Oklahoma",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Craig Fenstermaker",
    "winner_school": "Virginia",
    "loser": "Tony Wieland",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Justin Woodruff",
    "loser_school": "Navy",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Chad Roland",
    "winner_school": "Duquesne",
    "loser": "Jameel Abdullah",
    "loser_school": "Boston University",
    "result": "Fall 4:04"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Brett Calabretta",
    "winner_school": "Penn State",
    "loser": "Damien Craighton",
    "loser_school": "Drexel",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Chael Sonnen",
    "winner_school": "Oregon",
    "loser": "Babek Nejadmaghaddam",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Sean Hage",
    "winner_school": "West Virginia",
    "loser": "Mike Russow",
    "loser_school": "Eastern Illinois",
    "result": "Fall 3:36"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Mark Janus",
    "winner_school": "Penn State",
    "loser": "Gan McGee",
    "loser_school": "Cal Poly",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Dave Anderton",
    "winner_school": "Oklahoma State",
    "loser": "A.J. Johnson",
    "loser_school": "Edinboro",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Wes Hand",
    "winner_school": "Iowa",
    "loser": "John Eschenfelder",
    "loser_school": "Buffalo",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Bandele Adeniyi-Bada",
    "winner_school": "Penn",
    "loser": "Antonio Garay",
    "loser_school": "Boston College",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Bronson Lingamfelter",
    "winner_school": "Brown",
    "loser": "Leo Sandoval",
    "loser_school": "Portland State",
    "result": "Fall 4:52"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "J.R. Plienis",
    "winner_school": "Nebraska",
    "loser": "David Pierce",
    "loser_school": "Purdue",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Matt Lamb",
    "loser_school": "Michigan State",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Pat Cassidy",
    "loser_school": "Indiana",
    "result": "MD 15-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Jason Silverstein",
    "loser_school": "Purdue",
    "result": "MD 12-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Shane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Moses Delfin",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 10-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Chuckie Connor",
    "loser_school": "North Carolina",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Jeremy Sluyter",
    "winner_school": "East Stroudsburg",
    "loser": "Paul Gomez",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Matt Roth",
    "winner_school": "Virginia",
    "loser": "Matt Azevedo",
    "loser_school": "Arizona State",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "K.C. Rock",
    "loser_school": "Boise State",
    "result": "Fall 4:57"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Tom Combes",
    "winner_school": "Eastern Illinois",
    "loser": "Steve Doerrer",
    "loser_school": "Illinois",
    "result": "MD 14-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Eric Keller",
    "loser_school": "Northern Iowa",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Eric Juergens",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Cody Sanderson",
    "winner_school": "Iowa State",
    "loser": "Roman Fleszar",
    "loser_school": "Hofstra",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "Zach Zimmerer",
    "loser_school": "Stanford",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Aaron Holker",
    "winner_school": "Brigham Young",
    "loser": "Sean Shea",
    "loser_school": "George Mason",
    "result": "MD 15-3"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Bart Golyer",
    "winner_school": "Minnesota",
    "loser": "Ryan Egan",
    "loser_school": "Northern Illinois",
    "result": "Dec 10-7"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Dane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Carl Perry",
    "loser_school": "Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Damion Logan",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Whitey Chlebove",
    "loser_school": "West Virginia",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Chris Marshall",
    "winner_school": "Central Michigan",
    "loser": "Jose Deanda",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "Mark Piotrowsky",
    "winner_school": "Penn",
    "loser": "Derek Jenkins",
    "loser_school": "Rider",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Ben New",
    "loser_school": "Cornell",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Dustin Denunzio",
    "winner_school": "Harvard",
    "loser": "Mark Perryman",
    "loser_school": "Arizona State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Jonathon Archuleta",
    "winner_school": "CSU Bakersfield",
    "loser": "Scott Bair",
    "loser_school": "Lock Haven",
    "result": "Dec 3-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Shawn Bradley",
    "loser_school": "Cornell",
    "result": "MD 18-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "Eric Schmiesing",
    "loser_school": "Hofstra",
    "result": "MD 8-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Tony Davis",
    "winner_school": "Northern Iowa",
    "loser": "Marc Hoffer",
    "loser_school": "American",
    "result": "Dec 11-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Reggie Wright",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Biff Walizer",
    "winner_school": "Penn State",
    "loser": "Mike Mendoza",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 6:42"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Greg Mayer",
    "winner_school": "Central Michigan",
    "loser": "Joe Carr",
    "loser_school": "West Virginia",
    "result": "Fall 5:50"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Troy Marr",
    "winner_school": "Minnesota",
    "loser": "Jared Frayer",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Ryan Bernholz",
    "winner_school": "Lehigh",
    "loser": "Oscar Wood",
    "loser_school": "Oregon State",
    "result": "Dec 8-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Willie Wineberg",
    "loser_school": "Purdue",
    "result": "Fall 1:58"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Mike Ziska",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Clint Musser",
    "winner_school": "Penn State",
    "loser": "Chris Ayres",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Beau Weiner",
    "loser_school": "Stanford",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Ben Boozer",
    "winner_school": "Edinboro",
    "loser": "Corey Wallman",
    "loser_school": "Wisconsin",
    "result": "Dec 8-7 TB"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "David Maldonado",
    "winner_school": "Iowa State",
    "loser": "Darryl Christian",
    "loser_school": "Oregon",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Eric Jorgensen",
    "loser_school": "Oregon State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Jamie Heidt",
    "winner_school": "Iowa",
    "loser": "Griff Powell",
    "loser_school": "Illinois",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Joe Heskett",
    "loser_school": "Iowa State",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Rodney Jones",
    "winner_school": "Oklahoma",
    "loser": "Josh Holiday",
    "loser_school": "Minnesota",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Mark Samples",
    "loser_school": "Edinboro",
    "result": "Dec 5-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Joey Killar",
    "loser_school": "Harvard",
    "result": "Dec 12-11"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Bill Zeman",
    "winner_school": "Illinois",
    "loser": "Alex Leykikh",
    "loser_school": "Penn State",
    "result": "Dec 8-7 TB"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Sean Morgan",
    "winner_school": "Oregon",
    "loser": "Ben Uker",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Ty Wilcox",
    "loser_school": "Oklahoma State",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Jim Harshaw",
    "winner_school": "Virginia",
    "loser": "Andy Varner",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Sam Kline",
    "winner_school": "West Virginia",
    "loser": "Kevin Boross",
    "loser_school": "NC State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Perry Parks",
    "loser_school": "Iowa State",
    "result": "MD 11-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Leo Giel",
    "winner_school": "Rider",
    "loser": "William Hill",
    "loser_school": "Michigan State",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Glenn Pritzlaff",
    "winner_school": "Penn State",
    "loser": "Kole Clauson",
    "loser_school": "Wisconsin",
    "result": "Dec 12-9"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Mark Bybee",
    "loser_school": "Northwestern",
    "result": "Dec 9-8"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Gabe McMahan",
    "loser_school": "Iowa",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Michael Barger",
    "loser_school": "Oklahoma",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Mike Feeney",
    "winner_school": "Eastern Michigan",
    "loser": "Luke Bindriff",
    "loser_school": "Air Force",
    "result": "Fall 4:39"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Andy Hrovat",
    "loser_school": "Michigan",
    "result": "Fall 4:24"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "John Van Doren",
    "loser_school": "Lehigh",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Ross Thatcher",
    "loser_school": "Penn State",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Mike Greenfield",
    "loser_school": "Central Michigan",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Tom Grossman",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Nate Patrick",
    "winner_school": "Illinois",
    "loser": "Russell Jones",
    "loser_school": "Hofstra",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Ken Bigley",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Doug Lee",
    "loser_school": "Oregon",
    "result": "Fall 2:34"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Raphael Davis",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Chris Vike",
    "winner_school": "Central Michigan",
    "loser": "Zach Thompson",
    "loser_school": "Iowa State",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Sam Neider",
    "loser_school": "Northwestern",
    "result": "MD 13-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Andrei Rodzianko",
    "loser_school": "Penn",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Bob Greenleaf",
    "winner_school": "Cornell",
    "loser": "Demetrist Huff",
    "loser_school": "Fresno State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Craig Fenstermaker",
    "winner_school": "Virginia",
    "loser": "Mike French",
    "loser_school": "Cal Poly",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Chad Roland",
    "loser_school": "Duquesne",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Chael Sonnen",
    "winner_school": "Oregon",
    "loser": "Brett Calabretta",
    "loser_school": "Penn State",
    "result": "Fall 0:23"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Matt Kenny",
    "loser_school": "North Carolina",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Mat Orndorff",
    "loser_school": "Oregon State",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Leslie Apedoe",
    "winner_school": "VMI",
    "loser": "John Henry Ward",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Brock Lesnar",
    "winner_school": "Minnesota",
    "loser": "Derek DelPorto",
    "loser_school": "Slippery Rock",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Sean Hage",
    "winner_school": "West Virginia",
    "loser": "Mark Janus",
    "loser_school": "Penn State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Dave Anderton",
    "winner_school": "Oklahoma State",
    "loser": "Wes Hand",
    "loser_school": "Iowa",
    "result": "Fall 0:59"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Bandele Adeniyi-Bada",
    "winner_school": "Penn",
    "loser": "Bronson Lingamfelter",
    "loser_school": "Brown",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "J.R. Plienis",
    "winner_school": "Nebraska",
    "loser": "Rusty Cook",
    "loser_school": "Boise State",
    "result": "Fall 4:12"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Moses Delfin",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeremy Sluyter",
    "loser_school": "East Stroudsburg",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Matt Roth",
    "winner_school": "Virginia",
    "loser": "Chuckie Connor",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Pat Cassidy",
    "loser_school": "Indiana",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Jason Silverstein",
    "winner_school": "Purdue",
    "loser": "Tom Combes",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Joe Warren",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Aaron Holker",
    "winner_school": "Brigham Young",
    "loser": "Roman Fleszar",
    "loser_school": "Hofstra",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Eric Keller",
    "winner_school": "Northern Iowa",
    "loser": "Bart Golyer",
    "loser_school": "Minnesota",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Robert Sessley",
    "winner_school": "Ohio State",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Mark Piotrowsky",
    "loser_school": "Penn",
    "result": "Fall 2:09"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Jose Deanda",
    "winner_school": "Nebraska",
    "loser": "Scott Schatzman",
    "loser_school": "Northwestern",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Dustin Denunzio",
    "winner_school": "Harvard",
    "loser": "Carl Perry",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Damion Logan",
    "winner_school": "Michigan",
    "loser": "Jonathon Archuleta",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 6:34"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Biff Walizer",
    "winner_school": "Penn State",
    "loser": "Marc Hoffer",
    "loser_school": "American",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Greg Mayer",
    "loser_school": "Central Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Troy Marr",
    "winner_school": "Minnesota",
    "loser": "Shawn Bradley",
    "loser_school": "Cornell",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Ryan Bernholz",
    "winner_school": "Lehigh",
    "loser": "Eric Schmiesing",
    "loser_school": "Hofstra",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Chris Ayres",
    "winner_school": "Lehigh",
    "loser": "Ben Boozer",
    "loser_school": "Edinboro",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Beau Weiner",
    "winner_school": "Stanford",
    "loser": "David Maldonado",
    "loser_school": "Iowa State",
    "result": "TF 18-3 5:48"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Willie Wineberg",
    "loser_school": "Purdue",
    "result": "Fall 2:16"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Jamie Heidt",
    "winner_school": "Iowa",
    "loser": "Mike Ziska",
    "loser_school": "Pittsburgh",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Mark Samples",
    "winner_school": "Edinboro",
    "loser": "Bill Zeman",
    "loser_school": "Illinois",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Joey Killar",
    "winner_school": "Harvard",
    "loser": "Sean Morgan",
    "loser_school": "Oregon",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Rick Springman",
    "loser_school": "Penn",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Jim Harshaw",
    "winner_school": "Virginia",
    "loser": "Josh Holiday",
    "loser_school": "Minnesota",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "William Hill",
    "loser_school": "Michigan State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Kole Clauson",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Kevin Boross",
    "loser_school": "NC State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Mike Feeney",
    "winner_school": "Eastern Michigan",
    "loser": "Perry Parks",
    "loser_school": "Iowa State",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Ross Thatcher",
    "loser_school": "Penn State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Mike Greenfield",
    "winner_school": "Central Michigan",
    "loser": "Nate Patrick",
    "loser_school": "Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Mark Munoz",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "John Van Doren",
    "winner_school": "Lehigh",
    "loser": "Casey Strand",
    "loser_school": "Arizona State",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Bob Greenleaf",
    "loser_school": "Cornell",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Andrei Rodzianko",
    "winner_school": "Penn",
    "loser": "Craig Fenstermaker",
    "loser_school": "Virginia",
    "result": "MD 11-1"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Raphael Davis",
    "winner_school": "CSU Bakersfield",
    "loser": "Pat Quirk",
    "loser_school": "Illinois",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Chael Sonnen",
    "loser_school": "Oregon",
    "result": "Fall 4:09"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "John Henry Ward",
    "winner_school": "Oklahoma",
    "loser": "Sean Hage",
    "loser_school": "West Virginia",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Derek DelPorto",
    "winner_school": "Slippery Rock",
    "loser": "Dave Anderton",
    "loser_school": "Oklahoma State",
    "result": "Dec 13-7"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Bandele Adeniyi-Bada",
    "winner_school": "Penn",
    "loser": "Matt Kenny",
    "loser_school": "North Carolina",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "Mat Orndorff",
    "winner_school": "Oregon State",
    "loser": "J.R. Plienis",
    "loser_school": "Nebraska",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Teague Moore",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-3 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Shane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Moses Delfin",
    "winner_school": "CSU Bakersfield",
    "loser": "Matt Roth",
    "loser_school": "Virginia",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Jason Silverstein",
    "loser_school": "Purdue",
    "result": "M FOR"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Stan Greene",
    "loser_school": "Fresno State",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Cody Sanderson",
    "winner_school": "Iowa State",
    "loser": "Eric Larkin",
    "loser_school": "Arizona State",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Aaron Holker",
    "loser_school": "Brigham Young",
    "result": "MD 10-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Eric Keller",
    "winner_school": "Northern Iowa",
    "loser": "Robert Sessley",
    "loser_school": "Ohio State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Mark Angle",
    "loser_school": "Clarion",
    "result": "Dec 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Chris Marshall",
    "loser_school": "Central Michigan",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Jose Deanda",
    "loser_school": "Nebraska",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Dustin Denunzio",
    "winner_school": "Harvard",
    "loser": "Damion Logan",
    "loser_school": "Michigan",
    "result": "Fall 1:09"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Brett Matter",
    "loser_school": "Penn",
    "result": "Dec 7-2"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Tony Davis",
    "winner_school": "Northern Iowa",
    "loser": "Adam Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Biff Walizer",
    "loser_school": "Penn State",
    "result": "MD 13-5"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Ryan Bernholz",
    "winner_school": "Lehigh",
    "loser": "Troy Marr",
    "loser_school": "Minnesota",
    "result": "MD 14-3"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Bryan Snyder",
    "loser_school": "Nebraska",
    "result": "Dec 1-0"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Clint Musser",
    "winner_school": "Penn State",
    "loser": "Chad Kraft",
    "loser_school": "Minnesota",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Chris Ayres",
    "winner_school": "Lehigh",
    "loser": "Beau Weiner",
    "loser_school": "Stanford",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Jamie Heidt",
    "loser_school": "Iowa",
    "result": "Dec 6-3"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Rodney Jones",
    "winner_school": "Oklahoma",
    "loser": "Steven Blackford",
    "loser_school": "Arizona State",
    "result": "Dec 7-6"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Don Pritzlaff",
    "loser_school": "Wisconsin",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Joey Killar",
    "winner_school": "Harvard",
    "loser": "Mark Samples",
    "loser_school": "Edinboro",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Jim Harshaw",
    "loser_school": "Virginia",
    "result": "Fall 1:33"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Otto Olson",
    "winner_school": "Michigan",
    "loser": "Sam Kline",
    "loser_school": "West Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Glenn Pritzlaff",
    "winner_school": "Penn State",
    "loser": "Leo Giel",
    "loser_school": "Rider",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Ryan Cunningham",
    "loser_school": "Central Michigan",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Mike Feeney",
    "loser_school": "Eastern Michigan",
    "result": "MD 9-0"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Brad Vering",
    "loser_school": "Nebraska",
    "result": "Fall 1:58"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Vertus Jones",
    "loser_school": "West Virginia",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Mike Greenfield",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "John Van Doren",
    "winner_school": "Lehigh",
    "loser": "Andy Hrovat",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Chris Vike",
    "loser_school": "Central Michigan",
    "result": "MD 9-0"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Nick Muzashvili",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Andrei Rodzianko",
    "winner_school": "Penn",
    "loser": "Sam Neider",
    "loser_school": "Northwestern",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Raphael Davis",
    "winner_school": "CSU Bakersfield",
    "loser": "Zach Thompson",
    "loser_school": "Iowa State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Karl Roesler",
    "loser_school": "Illinois",
    "result": "TF 17-2 7:00"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Brock Lesnar",
    "winner_school": "Minnesota",
    "loser": "Leslie Apedoe",
    "loser_school": "VMI",
    "result": "MD 10-2"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "John Henry Ward",
    "winner_school": "Oklahoma",
    "loser": "Derek DelPorto",
    "loser_school": "Slippery Rock",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Mat Orndorff",
    "winner_school": "Oregon State",
    "loser": "Bandele Adeniyi-Bada",
    "loser_school": "Penn",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Moses Delfin",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Shane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Leroy Vega",
    "loser_school": "Minnesota",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Stan Greene",
    "loser_school": "Fresno State",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Eric Larkin",
    "winner_school": "Arizona State",
    "loser": "Eric Keller",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Whitey Chlebove",
    "loser_school": "West Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Dustin Denunzio",
    "winner_school": "Harvard",
    "loser": "Chris Marshall",
    "loser_school": "Central Michigan",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Brett Matter",
    "loser_school": "Penn",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Ryan Bernholz",
    "loser_school": "Lehigh",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Chris Ayres",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Chad Kraft",
    "loser_school": "Minnesota",
    "result": "Fall 4:39"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Joey Killar",
    "loser_school": "Harvard",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Don Pritzlaff",
    "loser_school": "Wisconsin",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Sam Kline",
    "winner_school": "West Virginia",
    "loser": "Mark Smith",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Leo Giel",
    "loser_school": "Rider",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Viktor Sveda",
    "loser_school": "Indiana",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "John Van Doren",
    "loser_school": "Lehigh",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Andrei Rodzianko",
    "winner_school": "Penn",
    "loser": "Chris Vike",
    "loser_school": "Central Michigan",
    "result": "Fall 5:28"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Raphael Davis",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "John Henry Ward",
    "loser_school": "Oklahoma",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Mat Orndorff",
    "winner_school": "Oregon State",
    "loser": "Leslie Apedoe",
    "loser_school": "VMI",
    "result": "Dec 5-1"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Shane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 2-0"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Moses Delfin",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-6"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Matt Roth",
    "winner_school": "Virginia",
    "loser": "Jason Silverstein",
    "loser_school": "Purdue",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Eric Larkin",
    "loser_school": "Arizona State",
    "result": "Dec 10-4"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Stan Greene",
    "winner_school": "Fresno State",
    "loser": "Eric Keller",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Aaron Holker",
    "winner_school": "Brigham Young",
    "loser": "Robert Sessley",
    "loser_school": "Ohio State",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Dustin Denunzio",
    "loser_school": "Harvard",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Chris Marshall",
    "winner_school": "Central Michigan",
    "loser": "Whitey Chlebove",
    "loser_school": "West Virginia",
    "result": "Dec 4-3"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Damion Logan",
    "winner_school": "Michigan",
    "loser": "Jose Deanda",
    "loser_school": "Nebraska",
    "result": "Fall 4:55"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Reggie Wright",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "Ryan Bernholz",
    "loser_school": "Lehigh",
    "result": "Dec 5-3"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Troy Marr",
    "winner_school": "Minnesota",
    "loser": "Biff Walizer",
    "loser_school": "Penn State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Bryan Snyder",
    "loser_school": "Nebraska",
    "result": "Dec 8-2"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Chris Ayres",
    "loser_school": "Lehigh",
    "result": "Dec 2-1"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Beau Weiner",
    "winner_school": "Stanford",
    "loser": "Jamie Heidt",
    "loser_school": "Iowa",
    "result": "Dec 8-6"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Steven Blackford",
    "loser_school": "Arizona State",
    "result": "Dec 7-2"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Joey Killar",
    "loser_school": "Harvard",
    "result": "Dec 8-2"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Mark Samples",
    "winner_school": "Edinboro",
    "loser": "Jim Harshaw",
    "loser_school": "Virginia",
    "result": "Fall 1:47"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Sam Kline",
    "winner_school": "West Virginia",
    "loser": "Josh Koscheck",
    "loser_school": "Edinboro",
    "result": "Dec 4-2"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Mark Smith",
    "winner_school": "Oklahoma State",
    "loser": "Leo Giel",
    "loser_school": "Rider",
    "result": "Dec 7-3"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Mike Feeney",
    "loser_school": "Eastern Michigan",
    "result": "DEF"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Brad Vering",
    "loser_school": "Nebraska",
    "result": "MD 14-2"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "John Van Doren",
    "winner_school": "Lehigh",
    "loser": "Viktor Sveda",
    "loser_school": "Indiana",
    "result": "Dec 10-3"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Mike Greenfield",
    "winner_school": "Central Michigan",
    "loser": "Andy Hrovat",
    "loser_school": "Michigan",
    "result": "Fall 5:23"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Andrei Rodzianko",
    "loser_school": "Penn",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Raphael Davis",
    "winner_school": "CSU Bakersfield",
    "loser": "Chris Vike",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Sam Neider",
    "winner_school": "Northwestern",
    "loser": "Zach Thompson",
    "loser_school": "Iowa State",
    "result": "Dec 6-2"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Mat Orndorff",
    "loser_school": "Oregon State",
    "result": "Dec 7-2"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "John Henry Ward",
    "winner_school": "Oklahoma",
    "loser": "Leslie Apedoe",
    "loser_school": "VMI",
    "result": "Dec 4-2"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "Bandele Adeniyi-Bada",
    "winner_school": "Penn",
    "loser": "Derek DelPorto",
    "loser_school": "Slippery Rock",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Stephen Abas",
    "winner_school": "Fresno State",
    "loser": "Jeremy Hunter",
    "loser_school": "Penn State",
    "result": "Dec 7-4"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Cody Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Michael Lightner",
    "loser_school": "Oklahoma",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Tony Davis",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Clint Musser",
    "loser_school": "Penn State",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Rodney Jones",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Glenn Pritzlaff",
    "winner_school": "Penn State",
    "loser": "Otto Olson",
    "loser_school": "Michigan",
    "result": "Dec 10-4"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Brandon Eggum",
    "loser_school": "Minnesota",
    "result": "Dec 6-1"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Lee Fullhart",
    "loser_school": "Iowa",
    "result": "Dec 2-1"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Brock Lesnar",
    "loser_school": "Minnesota",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 1005,
    "winner": "Heath Eslinger",
    "winner_school": "Chattanooga",
    "loser": "Nathan Vasquez",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-3"
  },
  {
    "round": "Prelims",
    "weight": "184",
    "bout": 1008,
    "winner": "Ken Bigley",
    "winner_school": "Northern Iowa",
    "loser": "Zach Breitenbach",
    "loser_school": "NC State",
    "result": "MD 12-3"
  },
  {
    "round": "Prelims",
    "weight": "197",
    "bout": 1009,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Elliot Williams",
    "loser_school": "James Madison",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 1175,
    "winner": "Darryl Christian",
    "winner_school": "Oregon",
    "loser": "Russell Read",
    "loser_school": "Boston University",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "184",
    "bout": 1178,
    "winner": "Corey Bell",
    "winner_school": "North Carolina",
    "loser": "Zach Breitenbach",
    "loser_school": "NC State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "197",
    "bout": 1179,
    "winner": "Elliot Williams",
    "winner_school": "James Madison",
    "loser": "Scott Munson",
    "loser_school": "Nebraska",
    "result": "Dec 3-2"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 2005,
    "winner": "Kevin Stanley",
    "winner_school": "Indiana",
    "loser": "Russell Read",
    "loser_school": "Boston University",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 2175,
    "winner": "Nathan Vasquez",
    "winner_school": "CSU Bakersfield",
    "loser": "Brian Olenek",
    "loser_school": "Lock Haven",
    "result": "Dec 10-3"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 3005,
    "winner": "Jeff Rusak",
    "winner_school": "Old Dominion",
    "loser": "Ian Kaplan",
    "loser_school": "Davidson",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 3175,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Ian Kaplan",
    "loser_school": "Davidson",
    "result": "MD 14-4"
  }
];
