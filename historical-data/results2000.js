// 2000 NCAA Division I Wrestling Championships.
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 2000 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Gaps/defects in the print supplied from the NCAA Records Book (official text). Bout numbers: internal keys (2010 scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results2000-provenance.js
const resultData = [
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 3,
    "winner": "Jamill Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Mike Castillo",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 4,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Joey Calavitta",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 1:58"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 5,
    "winner": "David Kjeldgaard",
    "winner_school": "Oklahoma",
    "loser": "Kevin Stanley",
    "loser_school": "Indiana",
    "result": "MD 15-5"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 6,
    "winner": "Yanni Diamond",
    "winner_school": "Edinboro",
    "loser": "Kirk Moore",
    "loser_school": "Purdue",
    "result": "Dec 8-2"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 7,
    "winner": "Mark Dufresne",
    "winner_school": "Lehigh",
    "loser": "Delaney Berger",
    "loser_school": "Minnesota",
    "result": "Dec 10-5"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 10,
    "winner": "Ken Haines",
    "winner_school": "Lock Haven",
    "loser": "Seth Charles",
    "loser_school": "Cornell",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 11,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "Nathan Navarro",
    "loser_school": "Oregon State",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 12,
    "winner": "Jeremy Sluyter",
    "winner_school": "East Stroudsburg",
    "loser": "Alexis Rivera",
    "loser_school": "Northern Illinois",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 13,
    "winner": "Mike Kawamura",
    "winner_school": "Arizona State",
    "loser": "Omar Porratta",
    "loser_school": "Millersville",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 14,
    "winner": "Steve Garland",
    "winner_school": "Virginia",
    "loser": "Adrian Tramutola",
    "loser_school": "Chattanooga",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 15,
    "winner": "T.J. Hill",
    "winner_school": "Cal State Fullerton",
    "loser": "Pat Cassidy",
    "loser_school": "Indiana",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 16,
    "winner": "Ryan Escobar",
    "winner_school": "Illinois",
    "loser": "K.C. Rock",
    "loser_school": "Boise State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 17,
    "winner": "Kore Sharpley",
    "winner_school": "Ohio State",
    "loser": "Matt Azevedo",
    "loser_school": "Iowa State",
    "result": "Dec 4-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 18,
    "winner": "Ruben DeLeon",
    "winner_school": "CSU Bakersfield",
    "loser": "Quantres Bates",
    "loser_school": "Oklahoma",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 19,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Trent Rollins",
    "loser_school": "Brigham Young",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 20,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Trap McCormack",
    "loser_school": "Lock Haven",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 21,
    "winner": "Jose Leon",
    "winner_school": "Boston University",
    "loser": "Bruce Kelly",
    "loser_school": "Lehigh",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 22,
    "winner": "Jeff Ragan",
    "winner_school": "Oklahoma State",
    "loser": "Jonathan Huesdash",
    "loser_school": "James Madison",
    "result": "Fall 2:33"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 23,
    "winner": "Skyler Holman",
    "winner_school": "North Carolina",
    "loser": "Brent Thompson",
    "loser_school": "Kent State",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 24,
    "winner": "Paul Gomez",
    "winner_school": "Nebraska",
    "loser": "Jason Silverstein",
    "loser_school": "Purdue",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 25,
    "winner": "Angelo Zegarelli",
    "winner_school": "West Virginia",
    "loser": "Jerold Limongelli",
    "loser_school": "Rider",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "125",
    "bout": 26,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Mike Akers",
    "loser_school": "Virginia Tech",
    "result": "TF 17-2 5:05"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 27,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Alberto Garza",
    "loser_school": "Cal Poly",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 29,
    "winner": "Brad Byers",
    "winner_school": "North Carolina",
    "loser": "Zach Zimmerer",
    "loser_school": "Stanford",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 30,
    "winner": "Paris Ruiz",
    "winner_school": "Fresno State",
    "loser": "Brandon York",
    "loser_school": "Maryland",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 31,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Ben Richards",
    "loser_school": "Oregon State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 32,
    "winner": "Evan Robinson",
    "winner_school": "Purdue",
    "loser": "Livio DiRubbo",
    "loser_school": "Brown",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 33,
    "winner": "Mike Coyle",
    "winner_school": "James Madison",
    "loser": "Dave Stoltz",
    "loser_school": "Illinois",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 34,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "Brian Watson",
    "loser_school": "Oregon",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 35,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Shawn Kegal",
    "loser_school": "Buffalo",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 36,
    "winner": "Scott Moore",
    "winner_school": "Penn State",
    "loser": "Jason Nagle",
    "loser_school": "Penn",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 37,
    "winner": "Bob Patnesky",
    "winner_school": "West Virginia",
    "loser": "Kelly Revells",
    "loser_school": "Eastern Illinois",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 39,
    "winner": "Todd Beckerman",
    "winner_school": "Nebraska",
    "loser": "Brett Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 40,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Chris Matarrese",
    "loser_school": "Slippery Rock",
    "result": "TF 18-3 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 41,
    "winner": "Brad Wright",
    "winner_school": "Ohio",
    "loser": "Corey Hamrick",
    "loser_school": "Wyoming",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "133",
    "bout": 42,
    "winner": "Cody Sanderson",
    "winner_school": "Iowa State",
    "loser": "Scott Bair",
    "loser_school": "Lock Haven",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 43,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Gabe Vigil",
    "loser_school": "Boise State",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 44,
    "winner": "Grant Hoerr",
    "winner_school": "Wisconsin",
    "loser": "Mark Mansueto",
    "loser_school": "Maryland",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 45,
    "winner": "Jeremy Hart",
    "winner_school": "Appalachian State",
    "loser": "Sean Gray",
    "loser_school": "Virginia Tech",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 46,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "P.J. Bory",
    "loser_school": "Virginia",
    "result": "TF 18-2 6:46"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 47,
    "winner": "Jamill Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Jody Giuricich",
    "loser_school": "Penn",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 48,
    "winner": "Jeremy Spates",
    "winner_school": "Missouri",
    "loser": "Nick Flach",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 49,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Tom LeCuyer",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 50,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "James Torres",
    "loser_school": "Indiana",
    "result": "TF 15-0 3:30"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 51,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Matt Goldstein",
    "loser_school": "Lehigh",
    "result": "MD 16-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 52,
    "winner": "Aaron Holker",
    "winner_school": "Brigham Young",
    "loser": "Blaise Mucci",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 53,
    "winner": "Sonny Marchette",
    "winner_school": "Iowa State",
    "loser": "Dave Vollmer",
    "loser_school": "James Madison",
    "result": "MD 15-6"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 54,
    "winner": "Damion Logan",
    "winner_school": "Michigan",
    "loser": "Ben New",
    "loser_school": "Cornell",
    "result": "Dec 11-7"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 55,
    "winner": "Chris Marshall",
    "winner_school": "Central Michigan",
    "loser": "Shane Cunanan",
    "loser_school": "Oregon State",
    "result": "MD 19-8"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 56,
    "winner": "Jason DeBruin",
    "winner_school": "Hofstra",
    "loser": "Ralph Lopez",
    "loser_school": "Fresno State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 57,
    "winner": "Donnie DeFilippis",
    "winner_school": "George Mason",
    "loser": "Jonathon Archuleta",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 3:24"
  },
  {
    "round": "ChampR1",
    "weight": "141",
    "bout": 58,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Cory Ace",
    "loser_school": "Edinboro",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 59,
    "winner": "Tony Davis",
    "winner_school": "Northern Iowa",
    "loser": "Max Odom",
    "loser_school": "Harvard",
    "result": "Fall 6:46"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 60,
    "winner": "Brian Roskovich",
    "winner_school": "Ohio State",
    "loser": "Jon Gough",
    "loser_school": "Penn",
    "result": "Dec 2-0"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 61,
    "winner": "George Carter",
    "winner_school": "Bloomsburg",
    "loser": "Derek Jenkins",
    "loser_school": "Rider",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 62,
    "winner": "Quinn Foster",
    "winner_school": "Arizona State",
    "loser": "Jeremy Hardman",
    "loser_school": "Central Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 63,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Justin Giovinco",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 64,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "Stan Spoor",
    "loser_school": "Clarion",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 65,
    "winner": "Tim Myers",
    "winner_school": "Indiana",
    "loser": "Tommy Davis",
    "loser_school": "NC State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 66,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "John Pozniak",
    "loser_school": "Virginia",
    "result": "TF 27-10 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 67,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Eric Arbogast",
    "loser_school": "Portland State",
    "result": "Fall 0:27"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 68,
    "winner": "Malik Elliott",
    "winner_school": "Boston University",
    "loser": "Cairo Moorman",
    "loser_school": "Coppin State",
    "result": "Fall 3:51"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 69,
    "winner": "Joe Henson",
    "winner_school": "Nebraska",
    "loser": "Karl Nadolsky",
    "loser_school": "Michigan State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 70,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Jason Lawrence",
    "loser_school": "Eastern Illinois",
    "result": "Fall 2:50"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 71,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Melvin Saunders",
    "loser_school": "UNC Greensboro",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 72,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Billy Smith",
    "loser_school": "West Virginia",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 73,
    "winner": "Mike Kulczycki",
    "winner_school": "Michigan",
    "loser": "Jay McGuffin",
    "loser_school": "Boise State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "149",
    "bout": 74,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Jeff Urban",
    "loser_school": "Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 75,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Scott Garren",
    "loser_school": "NC State",
    "result": "MD 16-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 76,
    "winner": "Warren McPherson",
    "winner_school": "Stanford",
    "loser": "Doug Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 77,
    "winner": "Ed Hockenberry",
    "winner_school": "Bloomsburg",
    "loser": "Rob Booth",
    "loser_school": "Maryland",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 78,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Anthony Ralph",
    "loser_school": "Kent State",
    "result": "TF 20-2 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 79,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Neil Posmer",
    "loser_school": "Marquette",
    "result": "Fall 2:03"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 80,
    "winner": "Joe Carr",
    "winner_school": "West Virginia",
    "loser": "Griff Powell",
    "loser_school": "Illinois",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 81,
    "winner": "Mike Ziska",
    "winner_school": "Pittsburgh",
    "loser": "Shane Roller",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 82,
    "winner": "David Kjeldgaard",
    "winner_school": "Oklahoma",
    "loser": "Bill Boeh",
    "loser_school": "Duquesne",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 83,
    "winner": "Shaun Shapert",
    "winner_school": "Edinboro",
    "loser": "Bryan Snyder",
    "loser_school": "Nebraska",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 84,
    "winner": "Leo Urbinelli",
    "winner_school": "Cornell",
    "loser": "Ray Stofko",
    "loser_school": "Drexel",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 85,
    "winner": "Corey Wallman",
    "winner_school": "Wisconsin",
    "loser": "Eugene Harris",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 86,
    "winner": "Dennis Papadatos",
    "winner_school": "Hofstra",
    "loser": "Rocky Smart",
    "loser_school": "Brigham Young",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 87,
    "winner": "Cole Sanderson",
    "winner_school": "Iowa State",
    "loser": "Nate Wachter",
    "loser_school": "Penn State",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 88,
    "winner": "Gray Maynard",
    "winner_school": "Michigan State",
    "loser": "Scott Frohardt",
    "loser_school": "Air Force",
    "result": "Fall 1:59"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 89,
    "winner": "Nathan Vasquez",
    "winner_school": "CSU Bakersfield",
    "loser": "Tim Cornish",
    "loser_school": "Fresno State",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "157",
    "bout": 90,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "P.J. Boccia",
    "loser_school": "Appalachian State",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 91,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Ephraim Walker",
    "loser_school": "Howard",
    "result": "Fall 2:07"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 92,
    "winner": "Bill Zeman",
    "winner_school": "Illinois",
    "loser": "Mike Pierce",
    "loser_school": "Portland State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 93,
    "winner": "Brad Pike",
    "winner_school": "Minnesota",
    "loser": "Nick Nemeth",
    "loser_school": "Kent State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 94,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Jeff Rusak",
    "loser_school": "Old Dominion",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 95,
    "winner": "Ty Wilcox",
    "winner_school": "Oklahoma State",
    "loser": "Denis Alampiev",
    "loser_school": "American",
    "result": "MD 14-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 96,
    "winner": "Chris Martin",
    "winner_school": "Virginia Tech",
    "loser": "Greg DeGrand",
    "loser_school": "Michigan State",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 97,
    "winner": "Matt Erwin",
    "winner_school": "VMI",
    "loser": "Matt Anderson",
    "loser_school": "Iowa",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 98,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Carl Fronhofer",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 99,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Yanni Diamond",
    "loser_school": "Edinboro",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 100,
    "winner": "Vernon Cannon",
    "winner_school": "Central Michigan",
    "loser": "Peter Rogers",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 101,
    "winner": "Rangi Smart",
    "winner_school": "Brigham Young",
    "loser": "Hunter Guenot",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 102,
    "winner": "Joey Killar",
    "winner_school": "Harvard",
    "loser": "Noel Thompson",
    "loser_school": "Hofstra",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 103,
    "winner": "Travis Doto",
    "winner_school": "Lehigh",
    "loser": "Peter Butville",
    "loser_school": "Marquette",
    "result": "TF 16-0 5:36"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 104,
    "winner": "Heath Eslinger",
    "winner_school": "Chattanooga",
    "loser": "Nate Lawrenz",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 105,
    "winner": "Joel Dramis",
    "winner_school": "NC State",
    "loser": "Seth Cameron",
    "loser_school": "James Madison",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "165",
    "bout": 106,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Ian Nelms",
    "loser_school": "CSU Bakersfield",
    "result": "MD 19-7"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 107,
    "winner": "Byron Tucker",
    "winner_school": "Oklahoma",
    "loser": "William Hill",
    "loser_school": "Michigan State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 108,
    "winner": "Maurice Worthy",
    "winner_school": "Army",
    "loser": "Adam Duncan",
    "loser_school": "Chattanooga",
    "result": "Fall 4:05"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 109,
    "winner": "Gabe McMahan",
    "winner_school": "Iowa",
    "loser": "John Kopnisky",
    "loser_school": "Missouri",
    "result": "Dec 15-10"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 110,
    "winner": "Kole Clauson",
    "winner_school": "Wisconsin",
    "loser": "Corey Bell",
    "loser_school": "North Carolina",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 111,
    "winner": "Randy Pugh",
    "winner_school": "Northern Iowa",
    "loser": "Rob Anspach",
    "loser_school": "Hofstra",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 112,
    "winner": "Nick Mengerink",
    "winner_school": "Pittsburgh",
    "loser": "Jason Webster",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 1:35"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 113,
    "winner": "Curtis Owen",
    "winner_school": "Arizona State",
    "loser": "Austin Palmer",
    "loser_school": "VMI",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 114,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Charles Martelli",
    "loser_school": "Michigan",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 115,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Tony Gansen",
    "loser_school": "Oklahoma State",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 116,
    "winner": "Cassidy Shults",
    "winner_school": "Bloomsburg",
    "loser": "Mack Rohaly",
    "loser_school": "Duquesne",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 117,
    "winner": "Eric Hall",
    "winner_school": "Virginia Tech",
    "loser": "Andy Varner",
    "loser_school": "CSU Bakersfield",
    "result": "Fall 3:30"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 118,
    "winner": "Ed Mosley",
    "winner_school": "Harvard",
    "loser": "Steve Strange",
    "loser_school": "Cal Poly",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 119,
    "winner": "Mark Bybee",
    "winner_school": "Northwestern",
    "loser": "Kevin Boross",
    "loser_school": "NC State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 120,
    "winner": "Mark Dufresne",
    "winner_school": "Lehigh",
    "loser": "Mike Feeney",
    "loser_school": "Eastern Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 121,
    "winner": "Joe Tucceri",
    "winner_school": "Cornell",
    "loser": "Nathan Coy",
    "loser_school": "Oregon State",
    "result": "Fall 4:57"
  },
  {
    "round": "ChampR1",
    "weight": "174",
    "bout": 122,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Nathan Rickman",
    "loser_school": "James Madison",
    "result": "Fall 2:19"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 123,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Adam Schaaf",
    "loser_school": "Millersville",
    "result": "Fall 3:51"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 124,
    "winner": "Dax Pecaro",
    "winner_school": "UNC Greensboro",
    "loser": "John Christian",
    "loser_school": "Campbell",
    "result": "Fall 1:32"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 125,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Ryan McGrath",
    "loser_school": "Virginia",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 126,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "David Potter",
    "loser_school": "Northern Illinois",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 127,
    "winner": "Nate Patrick",
    "winner_school": "Illinois",
    "loser": "Scott Justus",
    "loser_school": "Virginia Tech",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 128,
    "winner": "Shawn Scannell",
    "winner_school": "Rider",
    "loser": "Donovan True",
    "loser_school": "Ohio State",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 129,
    "winner": "Josh States",
    "winner_school": "Buffalo",
    "loser": "Karl Rittger",
    "loser_school": "Brown",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 130,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Tom Grossman",
    "loser_school": "Oklahoma",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 131,
    "winner": "Daniel Cormier",
    "winner_school": "Oklahoma State",
    "loser": "Jeff Knupp",
    "loser_school": "Penn State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 132,
    "winner": "Zach Breitenbach",
    "winner_school": "NC State",
    "loser": "Ty Matthews",
    "loser_school": "Indiana",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 133,
    "winner": "Dave Murray",
    "winner_school": "Lock Haven",
    "loser": "Mike Regner",
    "loser_school": "The Citadel",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 134,
    "winner": "Doug Lee",
    "winner_school": "Oregon",
    "loser": "Jessman Smith",
    "loser_school": "Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 136,
    "winner": "Lionel Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Tom Ciezki",
    "loser_school": "Northwestern",
    "result": "Dec 1-0"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 137,
    "winner": "Jeremy Wilson",
    "winner_school": "Portland State",
    "loser": "Kyle Hansen",
    "loser_school": "Northern Iowa",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "184",
    "bout": 138,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Cash Edwards",
    "loser_school": "Boise State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 140,
    "winner": "Dan Bednar",
    "winner_school": "Ohio",
    "loser": "Todd Hockenbroch",
    "loser_school": "Bloomsburg",
    "result": "Fall 1:23"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 141,
    "winner": "Ross Thatcher",
    "winner_school": "Penn State",
    "loser": "Todd Palmisano",
    "loser_school": "Rider",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 142,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Corey Anderson",
    "loser_school": "Cornell",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 144,
    "winner": "A.J. Johnson",
    "winner_school": "Edinboro",
    "loser": "Clint Osborn",
    "loser_school": "North Carolina",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 145,
    "winner": "Elliot Williams",
    "winner_school": "James Madison",
    "loser": "Robert Odell",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 9-8"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 146,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Josh Lambrecht",
    "loser_school": "Chattanooga",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 147,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Erik Gladish",
    "loser_school": "Arizona State",
    "result": "TF 16-0 5:00"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 149,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Tony Wieland",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 150,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Matt Huebner",
    "loser_school": "Northwestern",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 151,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Justin Woodruff",
    "loser_school": "Navy",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 152,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Babek Nejadmaghaddam",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 153,
    "winner": "Dan Stine",
    "winner_school": "Pittsburgh",
    "loser": "Brad Heeter",
    "loser_school": "Slippery Rock",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "197",
    "bout": 154,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Mike Fickell",
    "loser_school": "Penn",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 155,
    "winner": "Brock Lesnar",
    "winner_school": "Minnesota",
    "loser": "Bart Johnson",
    "loser_school": "Boise State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 156,
    "winner": "Shawn Laughlin",
    "winner_school": "Lehigh",
    "loser": "Jake Vercelli",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 157,
    "winner": "Tim Courtad",
    "winner_school": "Ohio",
    "loser": "Brent Boeshans",
    "loser_school": "Oklahoma",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 158,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Marc DeFrancesco",
    "loser_school": "Rider",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 159,
    "winner": "Bandele Adeniyi-Bada",
    "winner_school": "Penn",
    "loser": "Jack Leffler",
    "loser_school": "Central Michigan",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 160,
    "winner": "Matt Brink",
    "winner_school": "Michigan",
    "loser": "Ken Haines",
    "loser_school": "Lock Haven",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 161,
    "winner": "Josh Pearce",
    "winner_school": "Edinboro",
    "loser": "Kevin Baltz",
    "loser_school": "Chattanooga",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 162,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "John Testa",
    "loser_school": "Clarion",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 163,
    "winner": "Wes Hand",
    "winner_school": "Iowa",
    "loser": "Dawid Rechul",
    "loser_school": "Harvard",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 164,
    "winner": "Bronson Lingamfelter",
    "winner_school": "Brown",
    "loser": "Mark Janus",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 165,
    "winner": "Matt Lamb",
    "winner_school": "Michigan State",
    "loser": "Mike Russow",
    "loser_school": "Eastern Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 166,
    "winner": "Russ Davie",
    "winner_school": "Cleveland State",
    "loser": "Antonio Garay",
    "loser_school": "Boston College",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 167,
    "winner": "Dave Anderton",
    "winner_school": "Oklahoma State",
    "loser": "Jason Cooley",
    "loser_school": "Oregon State",
    "result": "Fall 0:28"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 168,
    "winner": "Matt Kenny",
    "winner_school": "North Carolina",
    "loser": "Sean Hage",
    "loser_school": "West Virginia",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 169,
    "winner": "Chris Miller",
    "winner_school": "Brigham Young",
    "loser": "Kellan Fluckiger",
    "loser_school": "Arizona State",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "285",
    "bout": 170,
    "winner": "Trent Hynek",
    "winner_school": "Iowa State",
    "loser": "D.J. Hockman",
    "loser_school": "James Madison",
    "result": "TF 16-1 7:00"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 173,
    "winner": "Mark Mansueto",
    "winner_school": "Maryland",
    "loser": "Bryan McDermott",
    "loser_school": "Duquesne",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 174,
    "winner": "Jeff Urban",
    "winner_school": "Missouri",
    "loser": "Dennis Whitby",
    "loser_school": "Old Dominion",
    "result": "Fall 2:01"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 175,
    "winner": "Eric Jorgensen",
    "winner_school": "Oregon State",
    "loser": "Neil Posmer",
    "loser_school": "Marquette",
    "result": "TF 17-1 4:12"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 176,
    "winner": "Peter Rogers",
    "winner_school": "Ohio State",
    "loser": "Josh Weidman",
    "loser_school": "Maryland",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 177,
    "winner": "Mack Rohaly",
    "winner_school": "Duquesne",
    "loser": "Ben King",
    "loser_school": "Illinois",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 180,
    "winner": "Seth Charles",
    "winner_school": "Cornell",
    "loser": "Mike Russow",
    "loser_school": "Eastern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 181,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "Jeremy Sluyter",
    "loser_school": "East Stroudsburg",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 182,
    "winner": "Steve Garland",
    "winner_school": "Virginia",
    "loser": "Mike Kawamura",
    "loser_school": "Arizona State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 183,
    "winner": "T.J. Hill",
    "winner_school": "Cal State Fullerton",
    "loser": "Ryan Escobar",
    "loser_school": "Illinois",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 184,
    "winner": "Ruben DeLeon",
    "winner_school": "CSU Bakersfield",
    "loser": "Kore Sharpley",
    "loser_school": "Ohio State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 185,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "A.J. Grant",
    "loser_school": "Michigan",
    "result": "TF 20-4 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 186,
    "winner": "Jeff Ragan",
    "winner_school": "Oklahoma State",
    "loser": "Jose Leon",
    "loser_school": "Boston University",
    "result": "Fall 4:31"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 187,
    "winner": "Paul Gomez",
    "winner_school": "Nebraska",
    "loser": "Skyler Holman",
    "loser_school": "North Carolina",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "125",
    "bout": 188,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Angelo Zegarelli",
    "loser_school": "West Virginia",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 189,
    "winner": "Jerold Limongelli",
    "winner_school": "Rider",
    "loser": "Mike Akers",
    "loser_school": "Virginia Tech",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 190,
    "winner": "Jason Silverstein",
    "winner_school": "Purdue",
    "loser": "Brent Thompson",
    "loser_school": "Kent State",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 191,
    "winner": "Bruce Kelly",
    "winner_school": "Lehigh",
    "loser": "Jonathan Huesdash",
    "loser_school": "James Madison",
    "result": "Fall 5:59"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 192,
    "winner": "Trent Rollins",
    "winner_school": "Brigham Young",
    "loser": "Trap McCormack",
    "loser_school": "Lock Haven",
    "result": "Dec 13-8"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 193,
    "winner": "Quantres Bates",
    "winner_school": "Oklahoma",
    "loser": "Matt Azevedo",
    "loser_school": "Iowa State",
    "result": "Fall 3:58"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 194,
    "winner": "K.C. Rock",
    "winner_school": "Boise State",
    "loser": "Pat Cassidy",
    "loser_school": "Indiana",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 195,
    "winner": "Adrian Tramutola",
    "winner_school": "Chattanooga",
    "loser": "Omar Porratta",
    "loser_school": "Millersville",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "125",
    "bout": 196,
    "winner": "Nathan Navarro",
    "winner_school": "Oregon State",
    "loser": "Alexis Rivera",
    "loser_school": "Northern Illinois",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 197,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Chad Caros",
    "loser_school": "Edinboro",
    "result": "Fall 6:24"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 198,
    "winner": "Brad Byers",
    "winner_school": "North Carolina",
    "loser": "Paris Ruiz",
    "loser_school": "Fresno State",
    "result": "Fall 1:18"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 199,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Evan Robinson",
    "loser_school": "Purdue",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 200,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "Mike Coyle",
    "loser_school": "James Madison",
    "result": "Dec 15-12"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 201,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Scott Moore",
    "loser_school": "Penn State",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 202,
    "winner": "Charles Walker",
    "winner_school": "Oklahoma State",
    "loser": "Bob Patnesky",
    "loser_school": "West Virginia",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 203,
    "winner": "Todd Beckerman",
    "winner_school": "Nebraska",
    "loser": "Rob Loper",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "133",
    "bout": 204,
    "winner": "Cody Sanderson",
    "winner_school": "Iowa State",
    "loser": "Brad Wright",
    "loser_school": "Ohio",
    "result": "MD 15-4"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 205,
    "winner": "Scott Bair",
    "winner_school": "Lock Haven",
    "loser": "Corey Hamrick",
    "loser_school": "Wyoming",
    "result": "MD 16-2"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 206,
    "winner": "Brett Lawrence",
    "winner_school": "Minnesota",
    "loser": "Chris Matarrese",
    "loser_school": "Slippery Rock",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 208,
    "winner": "Jason Nagle",
    "winner_school": "Penn",
    "loser": "Shawn Kegal",
    "loser_school": "Buffalo",
    "result": "Fall 4:56"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 209,
    "winner": "Dave Stoltz",
    "winner_school": "Illinois",
    "loser": "Brian Watson",
    "loser_school": "Oregon",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 210,
    "winner": "Ben Richards",
    "winner_school": "Oregon State",
    "loser": "Livio DiRubbo",
    "loser_school": "Brown",
    "result": "Fall 6:10"
  },
  {
    "round": "ConsR1",
    "weight": "133",
    "bout": 211,
    "winner": "Zach Zimmerer",
    "winner_school": "Stanford",
    "loser": "Brandon York",
    "loser_school": "Maryland",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 213,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Grant Hoerr",
    "loser_school": "Wisconsin",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 214,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Jeremy Hart",
    "loser_school": "Appalachian State",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 215,
    "winner": "Jamill Kelly",
    "winner_school": "Oklahoma State",
    "loser": "Jeremy Spates",
    "loser_school": "Missouri",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 216,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "David Douglas",
    "loser_school": "Arizona State",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 217,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Aaron Holker",
    "loser_school": "Brigham Young",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 218,
    "winner": "Damion Logan",
    "winner_school": "Michigan",
    "loser": "Sonny Marchette",
    "loser_school": "Iowa State",
    "result": "Fall 0:42"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 219,
    "winner": "Chris Marshall",
    "winner_school": "Central Michigan",
    "loser": "Jason DeBruin",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "141",
    "bout": 220,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Donnie DeFilippis",
    "loser_school": "George Mason",
    "result": "DEF"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 221,
    "winner": "Jonathon Archuleta",
    "winner_school": "CSU Bakersfield",
    "loser": "Cory Ace",
    "loser_school": "Edinboro",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 222,
    "winner": "Shane Cunanan",
    "winner_school": "Oregon State",
    "loser": "Ralph Lopez",
    "loser_school": "Fresno State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 223,
    "winner": "Mike Castillo",
    "winner_school": "Michigan State",
    "loser": "Dave Vollmer",
    "loser_school": "James Madison",
    "result": "MD 14-3"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 224,
    "winner": "Blaise Mucci",
    "winner_school": "Pittsburgh",
    "loser": "Matt Goldstein",
    "loser_school": "Lehigh",
    "result": "Dec 7-6 SV"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 225,
    "winner": "Tom LeCuyer",
    "winner_school": "Northern Illinois",
    "loser": "James Torres",
    "loser_school": "Indiana",
    "result": "Fall 3:54"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 226,
    "winner": "Nick Flach",
    "winner_school": "Northern Iowa",
    "loser": "Jody Giuricich",
    "loser_school": "Penn",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 227,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "P.J. Bory",
    "loser_school": "Virginia",
    "result": "MD 10-0"
  },
  {
    "round": "ConsR1",
    "weight": "141",
    "bout": 228,
    "winner": "Gabe Vigil",
    "winner_school": "Boise State",
    "loser": "Mark Mansueto",
    "loser_school": "Maryland",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 229,
    "winner": "Tony Davis",
    "winner_school": "Northern Iowa",
    "loser": "Brian Roskovich",
    "loser_school": "Ohio State",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 230,
    "winner": "Quinn Foster",
    "winner_school": "Arizona State",
    "loser": "George Carter",
    "loser_school": "Bloomsburg",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 231,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Jared Frayer",
    "loser_school": "Oklahoma",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 232,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Tim Myers",
    "loser_school": "Indiana",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 233,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Malik Elliott",
    "loser_school": "Boston University",
    "result": "MD 20-7"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 234,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Joe Henson",
    "loser_school": "Nebraska",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 235,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Bill Maldonado",
    "loser_school": "Iowa State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "149",
    "bout": 236,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Mike Kulczycki",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 237,
    "winner": "Jeff Urban",
    "winner_school": "Missouri",
    "loser": "Jay McGuffin",
    "loser_school": "Boise State",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 238,
    "winner": "Melvin Saunders",
    "winner_school": "UNC Greensboro",
    "loser": "Billy Smith",
    "loser_school": "West Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 239,
    "winner": "Karl Nadolsky",
    "winner_school": "Michigan State",
    "loser": "Jason Lawrence",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 240,
    "winner": "Cairo Moorman",
    "winner_school": "Coppin State",
    "loser": "Eric Arbogast",
    "loser_school": "Portland State",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 241,
    "winner": "Tommy Davis",
    "winner_school": "NC State",
    "loser": "John Pozniak",
    "loser_school": "Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 242,
    "winner": "Justin Giovinco",
    "winner_school": "Pittsburgh",
    "loser": "Stan Spoor",
    "loser_school": "Clarion",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 243,
    "winner": "Derek Jenkins",
    "winner_school": "Rider",
    "loser": "Jeremy Hardman",
    "loser_school": "Central Michigan",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR1",
    "weight": "149",
    "bout": 244,
    "winner": "Max Odom",
    "winner_school": "Harvard",
    "loser": "Jon Gough",
    "loser_school": "Penn",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 245,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Warren McPherson",
    "loser_school": "Stanford",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 246,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Ed Hockenberry",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-6 TB"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 247,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Joe Carr",
    "loser_school": "West Virginia",
    "result": "Fall 2:30"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 248,
    "winner": "Mike Ziska",
    "winner_school": "Pittsburgh",
    "loser": "David Kjeldgaard",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 249,
    "winner": "Shaun Shapert",
    "winner_school": "Edinboro",
    "loser": "Leo Urbinelli",
    "loser_school": "Cornell",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 250,
    "winner": "Corey Wallman",
    "winner_school": "Wisconsin",
    "loser": "Dennis Papadatos",
    "loser_school": "Hofstra",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 251,
    "winner": "Cole Sanderson",
    "winner_school": "Iowa State",
    "loser": "Gray Maynard",
    "loser_school": "Michigan State",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "157",
    "bout": 252,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "Nathan Vasquez",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 253,
    "winner": "Tim Cornish",
    "winner_school": "Fresno State",
    "loser": "P.J. Boccia",
    "loser_school": "Appalachian State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 254,
    "winner": "Scott Frohardt",
    "winner_school": "Air Force",
    "loser": "Nate Wachter",
    "loser_school": "Penn State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 255,
    "winner": "Rocky Smart",
    "winner_school": "Brigham Young",
    "loser": "Eugene Harris",
    "loser_school": "Oregon",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 256,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Ray Stofko",
    "loser_school": "Drexel",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 257,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Bill Boeh",
    "loser_school": "Duquesne",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 258,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "Eric Jorgensen",
    "loser_school": "Oregon State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 259,
    "winner": "Anthony Ralph",
    "winner_school": "Kent State",
    "loser": "Rob Booth",
    "loser_school": "Maryland",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "157",
    "bout": 260,
    "winner": "Scott Garren",
    "winner_school": "NC State",
    "loser": "Doug Cieleski",
    "loser_school": "Slippery Rock",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 261,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Bill Zeman",
    "loser_school": "Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 262,
    "winner": "Brad Pike",
    "winner_school": "Minnesota",
    "loser": "Robbie Waller",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 263,
    "winner": "Chris Martin",
    "winner_school": "Virginia Tech",
    "loser": "Ty Wilcox",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 264,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Matt Erwin",
    "loser_school": "VMI",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 265,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Vernon Cannon",
    "loser_school": "Central Michigan",
    "result": "MD 11-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 266,
    "winner": "Joey Killar",
    "winner_school": "Harvard",
    "loser": "Rangi Smart",
    "loser_school": "Brigham Young",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 267,
    "winner": "Travis Doto",
    "winner_school": "Lehigh",
    "loser": "Heath Eslinger",
    "loser_school": "Chattanooga",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "165",
    "bout": 268,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Joel Dramis",
    "loser_school": "NC State",
    "result": "MD 15-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 269,
    "winner": "Ian Nelms",
    "winner_school": "CSU Bakersfield",
    "loser": "Seth Cameron",
    "loser_school": "James Madison",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 270,
    "winner": "Peter Butville",
    "winner_school": "Marquette",
    "loser": "Nate Lawrenz",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 271,
    "winner": "Hunter Guenot",
    "winner_school": "Bloomsburg",
    "loser": "Noel Thompson",
    "loser_school": "Hofstra",
    "result": "Fall 2:01"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 272,
    "winner": "Yanni Diamond",
    "winner_school": "Edinboro",
    "loser": "Peter Rogers",
    "loser_school": "Ohio State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 273,
    "winner": "Matt Anderson",
    "winner_school": "Iowa",
    "loser": "Carl Fronhofer",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 274,
    "winner": "Greg DeGrand",
    "winner_school": "Michigan State",
    "loser": "Denis Alampiev",
    "loser_school": "American",
    "result": "Fall 2:05"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 275,
    "winner": "Jeff Rusak",
    "winner_school": "Old Dominion",
    "loser": "Nick Nemeth",
    "loser_school": "Kent State",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ConsR1",
    "weight": "165",
    "bout": 276,
    "winner": "Mike Pierce",
    "winner_school": "Portland State",
    "loser": "Ephraim Walker",
    "loser_school": "Howard",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 277,
    "winner": "Byron Tucker",
    "winner_school": "Oklahoma",
    "loser": "Maurice Worthy",
    "loser_school": "Army",
    "result": "MD 21-8"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 278,
    "winner": "Kole Clauson",
    "winner_school": "Wisconsin",
    "loser": "Gabe McMahan",
    "loser_school": "Iowa",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 279,
    "winner": "Randy Pugh",
    "winner_school": "Northern Iowa",
    "loser": "Nick Mengerink",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 280,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Curtis Owen",
    "loser_school": "Arizona State",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 281,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Cassidy Shults",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 282,
    "winner": "Ed Mosley",
    "winner_school": "Harvard",
    "loser": "Eric Hall",
    "loser_school": "Virginia Tech",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 283,
    "winner": "Mark Dufresne",
    "winner_school": "Lehigh",
    "loser": "Mark Bybee",
    "loser_school": "Northwestern",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "174",
    "bout": 284,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Joe Tucceri",
    "loser_school": "Cornell",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 285,
    "winner": "Nathan Coy",
    "winner_school": "Oregon State",
    "loser": "Nathan Rickman",
    "loser_school": "James Madison",
    "result": "MD 13-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 286,
    "winner": "Mike Feeney",
    "winner_school": "Eastern Michigan",
    "loser": "Kevin Boross",
    "loser_school": "NC State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 287,
    "winner": "Steve Strange",
    "winner_school": "Cal Poly",
    "loser": "Andy Varner",
    "loser_school": "CSU Bakersfield",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 288,
    "winner": "Tony Gansen",
    "winner_school": "Oklahoma State",
    "loser": "Mack Rohaly",
    "loser_school": "Duquesne",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 289,
    "winner": "Charles Martelli",
    "winner_school": "Michigan",
    "loser": "Austin Palmer",
    "loser_school": "VMI",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 290,
    "winner": "Jason Webster",
    "winner_school": "Cal State Fullerton",
    "loser": "Rob Anspach",
    "loser_school": "Hofstra",
    "result": "Fall 5:55"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 291,
    "winner": "Corey Bell",
    "winner_school": "North Carolina",
    "loser": "Delaney Berger",
    "loser_school": "Minnesota",
    "result": "MD 17-8"
  },
  {
    "round": "ConsR1",
    "weight": "174",
    "bout": 292,
    "winner": "William Hill",
    "winner_school": "Michigan State",
    "loser": "Adam Duncan",
    "loser_school": "Chattanooga",
    "result": "TF 16-0 6:50"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 293,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Dax Pecaro",
    "loser_school": "UNC Greensboro",
    "result": "TF 21-6 7:00"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 294,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Andy Hrovat",
    "loser_school": "Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 295,
    "winner": "Shawn Scannell",
    "winner_school": "Rider",
    "loser": "Nate Patrick",
    "loser_school": "Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 296,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Josh States",
    "loser_school": "Buffalo",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 297,
    "winner": "Daniel Cormier",
    "winner_school": "Oklahoma State",
    "loser": "Zach Breitenbach",
    "loser_school": "NC State",
    "result": "Dec 16-9"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 298,
    "winner": "Doug Lee",
    "winner_school": "Oregon",
    "loser": "Dave Murray",
    "loser_school": "Lock Haven",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 299,
    "winner": "Kevin Welsh",
    "winner_school": "Edinboro",
    "loser": "Lionel Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ChampR2",
    "weight": "184",
    "bout": 300,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Jeremy Wilson",
    "loser_school": "Portland State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 301,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "Kyle Hansen",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 303,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Mike Regner",
    "loser_school": "The Citadel",
    "result": "Fall 4:16"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 304,
    "winner": "Ty Matthews",
    "winner_school": "Indiana",
    "loser": "Jeff Knupp",
    "loser_school": "Penn State",
    "result": "M FOR"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 305,
    "winner": "Tom Grossman",
    "winner_school": "Oklahoma",
    "loser": "Karl Rittger",
    "loser_school": "Brown",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 306,
    "winner": "Scott Justus",
    "winner_school": "Virginia Tech",
    "loser": "Donovan True",
    "loser_school": "Ohio State",
    "result": "Fall 2:00"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 307,
    "winner": "Ryan McGrath",
    "winner_school": "Virginia",
    "loser": "David Potter",
    "loser_school": "Northern Illinois",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "184",
    "bout": 308,
    "winner": "John Christian",
    "winner_school": "Campbell",
    "loser": "Adam Schaaf",
    "loser_school": "Millersville",
    "result": "Dec 4-0"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 309,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Dan Bednar",
    "loser_school": "Ohio",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 310,
    "winner": "Ross Thatcher",
    "winner_school": "Penn State",
    "loser": "Viktor Sveda",
    "loser_school": "Indiana",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 311,
    "winner": "Orville Palmer",
    "winner_school": "Oklahoma",
    "loser": "A.J. Johnson",
    "loser_school": "Edinboro",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 312,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Elliot Williams",
    "loser_school": "James Madison",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 313,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Joe Downey",
    "loser_school": "Buffalo",
    "result": "MD 14-0"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 314,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Rusty Cook",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 315,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Owen Elzen",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR2",
    "weight": "197",
    "bout": 316,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Dan Stine",
    "loser_school": "Pittsburgh",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 317,
    "winner": "Mike Fickell",
    "winner_school": "Penn",
    "loser": "Brad Heeter",
    "loser_school": "Slippery Rock",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 318,
    "winner": "Justin Woodruff",
    "winner_school": "Navy",
    "loser": "Babek Nejadmaghaddam",
    "loser_school": "Cal State Fullerton",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 319,
    "winner": "Matt Huebner",
    "winner_school": "Northwestern",
    "loser": "Tony Wieland",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 321,
    "winner": "Josh Lambrecht",
    "winner_school": "Chattanooga",
    "loser": "Robert Odell",
    "loser_school": "CSU Bakersfield",
    "result": "TF 15-0 5:17"
  },
  {
    "round": "ConsR1",
    "weight": "197",
    "bout": 323,
    "winner": "Corey Anderson",
    "winner_school": "Cornell",
    "loser": "Todd Palmisano",
    "loser_school": "Rider",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 325,
    "winner": "Brock Lesnar",
    "winner_school": "Minnesota",
    "loser": "Shawn Laughlin",
    "loser_school": "Lehigh",
    "result": "Fall 2:18"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 326,
    "winner": "Tim Courtad",
    "winner_school": "Ohio",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 327,
    "winner": "Bandele Adeniyi-Bada",
    "winner_school": "Penn",
    "loser": "Matt Brink",
    "loser_school": "Michigan",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 328,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Josh Pearce",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 329,
    "winner": "Wes Hand",
    "winner_school": "Iowa",
    "loser": "Bronson Lingamfelter",
    "loser_school": "Brown",
    "result": "TF 15-0 3:47"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 330,
    "winner": "Matt Lamb",
    "winner_school": "Michigan State",
    "loser": "Russ Davie",
    "loser_school": "Cleveland State",
    "result": "Dec 7-0"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 331,
    "winner": "Dave Anderton",
    "winner_school": "Oklahoma State",
    "loser": "Matt Kenny",
    "loser_school": "North Carolina",
    "result": "Fall 1:01"
  },
  {
    "round": "ChampR2",
    "weight": "285",
    "bout": 332,
    "winner": "Trent Hynek",
    "winner_school": "Iowa State",
    "loser": "Chris Miller",
    "loser_school": "Brigham Young",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 333,
    "winner": "Kellan Fluckiger",
    "winner_school": "Arizona State",
    "loser": "D.J. Hockman",
    "loser_school": "James Madison",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 334,
    "winner": "Jason Cooley",
    "winner_school": "Oregon State",
    "loser": "Sean Hage",
    "loser_school": "West Virginia",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 335,
    "winner": "Antonio Garay",
    "winner_school": "Boston College",
    "loser": "Seth Charles",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 336,
    "winner": "Mark Janus",
    "winner_school": "Penn State",
    "loser": "Dawid Rechul",
    "loser_school": "Harvard",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 337,
    "winner": "John Testa",
    "winner_school": "Clarion",
    "loser": "Kevin Baltz",
    "loser_school": "Chattanooga",
    "result": "Dec 13-9"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 338,
    "winner": "Ken Haines",
    "winner_school": "Lock Haven",
    "loser": "Jack Leffler",
    "loser_school": "Central Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 339,
    "winner": "Brent Boeshans",
    "winner_school": "Oklahoma",
    "loser": "Marc DeFrancesco",
    "loser_school": "Rider",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR1",
    "weight": "285",
    "bout": 340,
    "winner": "Bart Johnson",
    "winner_school": "Boise State",
    "loser": "Jake Vercelli",
    "loser_school": "Purdue",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 341,
    "winner": "Ryan Escobar",
    "winner_school": "Illinois",
    "loser": "Jerold Limongelli",
    "loser_school": "Rider",
    "result": "Dec 14-9"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 342,
    "winner": "Jason Silverstein",
    "winner_school": "Purdue",
    "loser": "Kore Sharpley",
    "loser_school": "Ohio State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 343,
    "winner": "Jeremy Sluyter",
    "winner_school": "East Stroudsburg",
    "loser": "Bruce Kelly",
    "loser_school": "Lehigh",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 344,
    "winner": "Mike Kawamura",
    "winner_school": "Arizona State",
    "loser": "Trent Rollins",
    "loser_school": "Brigham Young",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 345,
    "winner": "Quantres Bates",
    "winner_school": "Oklahoma",
    "loser": "Skyler Holman",
    "loser_school": "North Carolina",
    "result": "TF 23-7 6:49"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 346,
    "winner": "K.C. Rock",
    "winner_school": "Boise State",
    "loser": "Angelo Zegarelli",
    "loser_school": "West Virginia",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 347,
    "winner": "A.J. Grant",
    "winner_school": "Michigan",
    "loser": "Adrian Tramutola",
    "loser_school": "Chattanooga",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR2",
    "weight": "125",
    "bout": 348,
    "winner": "Nathan Navarro",
    "winner_school": "Oregon State",
    "loser": "Jose Leon",
    "loser_school": "Boston University",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 349,
    "winner": "Evan Robinson",
    "winner_school": "Purdue",
    "loser": "Scott Bair",
    "loser_school": "Lock Haven",
    "result": "MD 14-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 350,
    "winner": "Mike Coyle",
    "winner_school": "James Madison",
    "loser": "Brett Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 11-5"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 351,
    "winner": "Kelly Revells",
    "winner_school": "Eastern Illinois",
    "loser": "Chad Caros",
    "loser_school": "Edinboro",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 352,
    "winner": "Paris Ruiz",
    "winner_school": "Fresno State",
    "loser": "Jason Nagle",
    "loser_school": "Penn",
    "result": "Dec 6-0"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 353,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Dave Stoltz",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 354,
    "winner": "Brad Wright",
    "winner_school": "Ohio",
    "loser": "Ben Richards",
    "loser_school": "Oregon State",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 355,
    "winner": "Scott Moore",
    "winner_school": "Penn State",
    "loser": "Zach Zimmerer",
    "loser_school": "Stanford",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR2",
    "weight": "133",
    "bout": 356,
    "winner": "Bob Patnesky",
    "winner_school": "West Virginia",
    "loser": "Alberto Garza",
    "loser_school": "Cal Poly",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 357,
    "winner": "Jonathon Archuleta",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeremy Spates",
    "loser_school": "Missouri",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 358,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Shane Cunanan",
    "loser_school": "Oregon State",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 359,
    "winner": "Mike Castillo",
    "winner_school": "Michigan State",
    "loser": "Grant Hoerr",
    "loser_school": "Wisconsin",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 360,
    "winner": "Jeremy Hart",
    "winner_school": "Appalachian State",
    "loser": "Blaise Mucci",
    "loser_school": "Pittsburgh",
    "result": "Fall 5:51"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 361,
    "winner": "Tom LeCuyer",
    "winner_school": "Northern Illinois",
    "loser": "Jason DeBruin",
    "loser_school": "Hofstra",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 362,
    "winner": "Donnie DeFilippis",
    "winner_school": "George Mason",
    "loser": "Nick Flach",
    "loser_school": "Northern Iowa",
    "result": "TF 19-3 0:00"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 363,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Aaron Holker",
    "loser_school": "Brigham Young",
    "result": "Dec 13-8"
  },
  {
    "round": "ConsR2",
    "weight": "141",
    "bout": 364,
    "winner": "Sonny Marchette",
    "winner_school": "Iowa State",
    "loser": "Gabe Vigil",
    "loser_school": "Boise State",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 365,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "Jeff Urban",
    "loser_school": "Missouri",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 366,
    "winner": "Melvin Saunders",
    "winner_school": "UNC Greensboro",
    "loser": "Tim Myers",
    "loser_school": "Indiana",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 367,
    "winner": "Karl Nadolsky",
    "winner_school": "Michigan State",
    "loser": "Brian Roskovich",
    "loser_school": "Ohio State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 368,
    "winner": "George Carter",
    "winner_school": "Bloomsburg",
    "loser": "Cairo Moorman",
    "loser_school": "Coppin State",
    "result": "Fall 2:48"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 369,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Tommy Davis",
    "loser_school": "NC State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 370,
    "winner": "Justin Giovinco",
    "winner_school": "Pittsburgh",
    "loser": "Mike Kulczycki",
    "loser_school": "Michigan",
    "result": "Fall 0:26"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 371,
    "winner": "Malik Elliott",
    "winner_school": "Boston University",
    "loser": "Derek Jenkins",
    "loser_school": "Rider",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "149",
    "bout": 372,
    "winner": "Joe Henson",
    "winner_school": "Nebraska",
    "loser": "Max Odom",
    "loser_school": "Harvard",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 373,
    "winner": "Tim Cornish",
    "winner_school": "Fresno State",
    "loser": "Joe Carr",
    "loser_school": "West Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 374,
    "winner": "David Kjeldgaard",
    "winner_school": "Oklahoma",
    "loser": "Scott Frohardt",
    "loser_school": "Air Force",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 375,
    "winner": "Warren McPherson",
    "winner_school": "Stanford",
    "loser": "Rocky Smart",
    "loser_school": "Brigham Young",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 376,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Ed Hockenberry",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 377,
    "winner": "Shane Roller",
    "winner_school": "Oklahoma State",
    "loser": "Gray Maynard",
    "loser_school": "Michigan State",
    "result": "Fall 2:15"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 378,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "Nathan Vasquez",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 379,
    "winner": "Leo Urbinelli",
    "winner_school": "Cornell",
    "loser": "Anthony Ralph",
    "loser_school": "Kent State",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "157",
    "bout": 380,
    "winner": "Dennis Papadatos",
    "winner_school": "Hofstra",
    "loser": "Scott Garren",
    "loser_school": "NC State",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 381,
    "winner": "Ty Wilcox",
    "winner_school": "Oklahoma State",
    "loser": "Ian Nelms",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 382,
    "winner": "Matt Erwin",
    "winner_school": "VMI",
    "loser": "Peter Butville",
    "loser_school": "Marquette",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 383,
    "winner": "Hunter Guenot",
    "winner_school": "Bloomsburg",
    "loser": "Bill Zeman",
    "loser_school": "Illinois",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 384,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Yanni Diamond",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 385,
    "winner": "Matt Anderson",
    "winner_school": "Iowa",
    "loser": "Heath Eslinger",
    "loser_school": "Chattanooga",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 386,
    "winner": "Joel Dramis",
    "winner_school": "NC State",
    "loser": "Greg DeGrand",
    "loser_school": "Michigan State",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 387,
    "winner": "Vernon Cannon",
    "winner_school": "Central Michigan",
    "loser": "Jeff Rusak",
    "loser_school": "Old Dominion",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "165",
    "bout": 388,
    "winner": "Rangi Smart",
    "winner_school": "Brigham Young",
    "loser": "Mike Pierce",
    "loser_school": "Portland State",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 389,
    "winner": "Nick Mengerink",
    "winner_school": "Pittsburgh",
    "loser": "Nathan Coy",
    "loser_school": "Oregon State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 390,
    "winner": "Mike Feeney",
    "winner_school": "Eastern Michigan",
    "loser": "Curtis Owen",
    "loser_school": "Arizona State",
    "result": "Fall 4:58"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 391,
    "winner": "Maurice Worthy",
    "winner_school": "Army",
    "loser": "Steve Strange",
    "loser_school": "Cal Poly",
    "result": "Dec 15-11"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 392,
    "winner": "Gabe McMahan",
    "winner_school": "Iowa",
    "loser": "Tony Gansen",
    "loser_school": "Oklahoma State",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 393,
    "winner": "Mark Bybee",
    "winner_school": "Northwestern",
    "loser": "Charles Martelli",
    "loser_school": "Michigan",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 394,
    "winner": "Joe Tucceri",
    "winner_school": "Cornell",
    "loser": "Jason Webster",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 395,
    "winner": "Corey Bell",
    "winner_school": "North Carolina",
    "loser": "Cassidy Shults",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR2",
    "weight": "174",
    "bout": 396,
    "winner": "Eric Hall",
    "winner_school": "Virginia Tech",
    "loser": "William Hill",
    "loser_school": "Michigan State",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 397,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "Nate Patrick",
    "loser_school": "Illinois",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 398,
    "winner": "Josh States",
    "winner_school": "Buffalo",
    "loser": "Tom Ciezki",
    "loser_school": "Northwestern",
    "result": "Fall 1:56"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 399,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Dax Pecaro",
    "loser_school": "UNC Greensboro",
    "result": "Dec 13-6"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 400,
    "winner": "Andy Hrovat",
    "winner_school": "Michigan",
    "loser": "Ty Matthews",
    "loser_school": "Indiana",
    "result": "Dec 15-8"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 401,
    "winner": "Lionel Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Tom Grossman",
    "loser_school": "Oklahoma",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 402,
    "winner": "Jeremy Wilson",
    "winner_school": "Portland State",
    "loser": "Scott Justus",
    "loser_school": "Virginia Tech",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 403,
    "winner": "Ryan McGrath",
    "winner_school": "Virginia",
    "loser": "Zach Breitenbach",
    "loser_school": "NC State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "184",
    "bout": 404,
    "winner": "Dave Murray",
    "winner_school": "Lock Haven",
    "loser": "John Christian",
    "loser_school": "Campbell",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 405,
    "winner": "Mike Fickell",
    "winner_school": "Penn",
    "loser": "A.J. Johnson",
    "loser_school": "Edinboro",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 406,
    "winner": "Elliot Williams",
    "winner_school": "James Madison",
    "loser": "Justin Woodruff",
    "loser_school": "Navy",
    "result": "Dec 12-9"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 407,
    "winner": "Dan Bednar",
    "winner_school": "Ohio",
    "loser": "Matt Huebner",
    "loser_school": "Northwestern",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 408,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Erik Gladish",
    "loser_school": "Arizona State",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 409,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Josh Lambrecht",
    "loser_school": "Chattanooga",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 410,
    "winner": "Dan Stine",
    "winner_school": "Pittsburgh",
    "loser": "Clint Osborn",
    "loser_school": "North Carolina",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 411,
    "winner": "Corey Anderson",
    "winner_school": "Cornell",
    "loser": "Joe Downey",
    "loser_school": "Buffalo",
    "result": "Fall 1:32"
  },
  {
    "round": "ConsR2",
    "weight": "197",
    "bout": 412,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Todd Hockenbroch",
    "loser_school": "Bloomsburg",
    "result": "Fall 5:27"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 413,
    "winner": "Matt Brink",
    "winner_school": "Michigan",
    "loser": "Kellan Fluckiger",
    "loser_school": "Arizona State",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 414,
    "winner": "Josh Pearce",
    "winner_school": "Edinboro",
    "loser": "Jason Cooley",
    "loser_school": "Oregon State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 415,
    "winner": "Antonio Garay",
    "winner_school": "Boston College",
    "loser": "Shawn Laughlin",
    "loser_school": "Lehigh",
    "result": "Fall 2:27"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 416,
    "winner": "Paul Hynek",
    "winner_school": "Northern Iowa",
    "loser": "Mark Janus",
    "loser_school": "Penn State",
    "result": "Fall 6:03"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 417,
    "winner": "Matt Kenny",
    "winner_school": "North Carolina",
    "loser": "John Testa",
    "loser_school": "Clarion",
    "result": "Fall 1:05"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 418,
    "winner": "Chris Miller",
    "winner_school": "Brigham Young",
    "loser": "Ken Haines",
    "loser_school": "Lock Haven",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 419,
    "winner": "Brent Boeshans",
    "winner_school": "Oklahoma",
    "loser": "Bronson Lingamfelter",
    "loser_school": "Brown",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "285",
    "bout": 420,
    "winner": "Bart Johnson",
    "winner_school": "Boise State",
    "loser": "Russ Davie",
    "loser_school": "Cleveland State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 421,
    "winner": "Steve Garland",
    "winner_school": "Virginia",
    "loser": "Jody Strittmatter",
    "loser_school": "Iowa",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 422,
    "winner": "T.J. Hill",
    "winner_school": "Cal State Fullerton",
    "loser": "Ruben DeLeon",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 423,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Jeff Ragan",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "125",
    "bout": 424,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Paul Gomez",
    "loser_school": "Nebraska",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 425,
    "winner": "Jason Silverstein",
    "winner_school": "Purdue",
    "loser": "Ryan Escobar",
    "loser_school": "Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 426,
    "winner": "Mike Kawamura",
    "winner_school": "Arizona State",
    "loser": "Jeremy Sluyter",
    "loser_school": "East Stroudsburg",
    "result": "Fall 0:35"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 427,
    "winner": "Quantres Bates",
    "winner_school": "Oklahoma",
    "loser": "K.C. Rock",
    "loser_school": "Boise State",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR3",
    "weight": "125",
    "bout": 428,
    "winner": "Nathan Navarro",
    "winner_school": "Oregon State",
    "loser": "A.J. Grant",
    "loser_school": "Michigan",
    "result": "Dec 8-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 429,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Brad Byers",
    "loser_school": "North Carolina",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 430,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "Roman Fleszar",
    "loser_school": "Hofstra",
    "result": "Dec 5-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 431,
    "winner": "Pat McNamara",
    "winner_school": "Michigan State",
    "loser": "Charles Walker",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "133",
    "bout": 432,
    "winner": "Cody Sanderson",
    "winner_school": "Iowa State",
    "loser": "Todd Beckerman",
    "loser_school": "Nebraska",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 433,
    "winner": "Mike Coyle",
    "winner_school": "James Madison",
    "loser": "Evan Robinson",
    "loser_school": "Purdue",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 434,
    "winner": "Kelly Revells",
    "winner_school": "Eastern Illinois",
    "loser": "Paris Ruiz",
    "loser_school": "Fresno State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 435,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Brad Wright",
    "loser_school": "Ohio",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR3",
    "weight": "133",
    "bout": 436,
    "winner": "Bob Patnesky",
    "winner_school": "West Virginia",
    "loser": "Scott Moore",
    "loser_school": "Penn State",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 437,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Doug Schwab",
    "loser_school": "Iowa",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 438,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Jamill Kelly",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 439,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Damion Logan",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "141",
    "bout": 440,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Chris Marshall",
    "loser_school": "Central Michigan",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 441,
    "winner": "David Douglas",
    "winner_school": "Arizona State",
    "loser": "Jonathon Archuleta",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 442,
    "winner": "Mike Castillo",
    "winner_school": "Michigan State",
    "loser": "Jeremy Hart",
    "loser_school": "Appalachian State",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 443,
    "winner": "Donnie DeFilippis",
    "winner_school": "George Mason",
    "loser": "Tom LeCuyer",
    "loser_school": "Northern Illinois",
    "result": "MD 15-4"
  },
  {
    "round": "ConsR3",
    "weight": "141",
    "bout": 444,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Sonny Marchette",
    "loser_school": "Iowa State",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 445,
    "winner": "Tony Davis",
    "winner_school": "Northern Iowa",
    "loser": "Quinn Foster",
    "loser_school": "Arizona State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 446,
    "winner": "Jared Lawrence",
    "winner_school": "Minnesota",
    "loser": "Dave Esposito",
    "loser_school": "Lehigh",
    "result": "Dec 10-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 447,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Reggie Wright",
    "loser_school": "Oklahoma State",
    "result": "Dec 9-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "149",
    "bout": 448,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Mike Zadick",
    "loser_school": "Iowa",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 449,
    "winner": "Jared Frayer",
    "winner_school": "Oklahoma",
    "loser": "Melvin Saunders",
    "loser_school": "UNC Greensboro",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 450,
    "winner": "Karl Nadolsky",
    "winner_school": "Michigan State",
    "loser": "George Carter",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 451,
    "winner": "Bill Maldonado",
    "winner_school": "Iowa State",
    "loser": "Justin Giovinco",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "149",
    "bout": 452,
    "winner": "Joe Henson",
    "winner_school": "Nebraska",
    "loser": "Malik Elliott",
    "loser_school": "Boston University",
    "result": "Dec 7-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 453,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Luke Becker",
    "loser_school": "Minnesota",
    "result": "MD 10-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 454,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "Mike Ziska",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 455,
    "winner": "Corey Wallman",
    "winner_school": "Wisconsin",
    "loser": "Shaun Shapert",
    "loser_school": "Edinboro",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "157",
    "bout": 456,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "Cole Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 457,
    "winner": "Tim Cornish",
    "winner_school": "Fresno State",
    "loser": "David Kjeldgaard",
    "loser_school": "Oklahoma",
    "result": "Dec 9-6"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 458,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Warren McPherson",
    "loser_school": "Stanford",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 459,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "Shane Roller",
    "loser_school": "Oklahoma State",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR3",
    "weight": "157",
    "bout": 460,
    "winner": "Leo Urbinelli",
    "winner_school": "Cornell",
    "loser": "Dennis Papadatos",
    "loser_school": "Hofstra",
    "result": "Dec 6-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 461,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Brad Pike",
    "loser_school": "Minnesota",
    "result": "Fall 5:50"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 462,
    "winner": "Chris Martin",
    "winner_school": "Virginia Tech",
    "loser": "Kirk White",
    "loser_school": "Boise State",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 463,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Joey Killar",
    "loser_school": "Harvard",
    "result": "Dec 8-3 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "165",
    "bout": 464,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Travis Doto",
    "loser_school": "Lehigh",
    "result": "Dec 12-7"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 465,
    "winner": "Ty Wilcox",
    "winner_school": "Oklahoma State",
    "loser": "Matt Erwin",
    "loser_school": "VMI",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 466,
    "winner": "Robbie Waller",
    "winner_school": "Oklahoma",
    "loser": "Hunter Guenot",
    "loser_school": "Bloomsburg",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 467,
    "winner": "Joel Dramis",
    "winner_school": "NC State",
    "loser": "Matt Anderson",
    "loser_school": "Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR3",
    "weight": "165",
    "bout": 468,
    "winner": "Rangi Smart",
    "winner_school": "Brigham Young",
    "loser": "Vernon Cannon",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 469,
    "winner": "Byron Tucker",
    "winner_school": "Oklahoma",
    "loser": "Kole Clauson",
    "loser_school": "Wisconsin",
    "result": "Dec 16-9"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 470,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Randy Pugh",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 471,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Ed Mosley",
    "loser_school": "Harvard",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "174",
    "bout": 472,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Mark Dufresne",
    "loser_school": "Lehigh",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 473,
    "winner": "Mike Feeney",
    "winner_school": "Eastern Michigan",
    "loser": "Nick Mengerink",
    "loser_school": "Pittsburgh",
    "result": "Fall 2:50"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 474,
    "winner": "Gabe McMahan",
    "winner_school": "Iowa",
    "loser": "Maurice Worthy",
    "loser_school": "Army",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 475,
    "winner": "Joe Tucceri",
    "winner_school": "Cornell",
    "loser": "Mark Bybee",
    "loser_school": "Northwestern",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "174",
    "bout": 476,
    "winner": "Eric Hall",
    "winner_school": "Virginia Tech",
    "loser": "Corey Bell",
    "loser_school": "North Carolina",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 477,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Rob Rohn",
    "loser_school": "Lehigh",
    "result": "TF 20-5 7:00"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 478,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Shawn Scannell",
    "loser_school": "Rider",
    "result": "Dec 4-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 479,
    "winner": "Doug Lee",
    "winner_school": "Oregon",
    "loser": "Daniel Cormier",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "184",
    "bout": 480,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Kevin Welsh",
    "loser_school": "Edinboro",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 481,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "Josh States",
    "loser_school": "Buffalo",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 482,
    "winner": "Jessman Smith",
    "winner_school": "Iowa",
    "loser": "Andy Hrovat",
    "loser_school": "Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 483,
    "winner": "Lionel Halsey",
    "winner_school": "CSU Bakersfield",
    "loser": "Jeremy Wilson",
    "loser_school": "Portland State",
    "result": "Fall 1:50"
  },
  {
    "round": "ConsR3",
    "weight": "184",
    "bout": 484,
    "winner": "Ryan McGrath",
    "winner_school": "Virginia",
    "loser": "Dave Murray",
    "loser_school": "Lock Haven",
    "result": "Fall 2:25"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 485,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Ross Thatcher",
    "loser_school": "Penn State",
    "result": "Dec 6-4 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 486,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Orville Palmer",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 487,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Pat Quirk",
    "loser_school": "Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "197",
    "bout": 488,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Nick Preston",
    "loser_school": "Ohio State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 489,
    "winner": "Mike Fickell",
    "winner_school": "Penn",
    "loser": "Elliot Williams",
    "loser_school": "James Madison",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 490,
    "winner": "Viktor Sveda",
    "winner_school": "Indiana",
    "loser": "Dan Bednar",
    "loser_school": "Ohio",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 491,
    "winner": "Owen Elzen",
    "winner_school": "Minnesota",
    "loser": "Dan Stine",
    "loser_school": "Pittsburgh",
    "result": "TF 15-0 3:29"
  },
  {
    "round": "ConsR3",
    "weight": "197",
    "bout": 492,
    "winner": "Rusty Cook",
    "winner_school": "Boise State",
    "loser": "Corey Anderson",
    "loser_school": "Cornell",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 493,
    "winner": "Brock Lesnar",
    "winner_school": "Minnesota",
    "loser": "Tim Courtad",
    "loser_school": "Ohio",
    "result": "Fall 4:04"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 494,
    "winner": "Bandele Adeniyi-Bada",
    "winner_school": "Penn",
    "loser": "John Lockhart",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 495,
    "winner": "Wes Hand",
    "winner_school": "Iowa",
    "loser": "Matt Lamb",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "285",
    "bout": 496,
    "winner": "Trent Hynek",
    "winner_school": "Iowa State",
    "loser": "Dave Anderton",
    "loser_school": "Oklahoma State",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 497,
    "winner": "Matt Brink",
    "winner_school": "Michigan",
    "loser": "Josh Pearce",
    "loser_school": "Edinboro",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 498,
    "winner": "Antonio Garay",
    "winner_school": "Boston College",
    "loser": "Paul Hynek",
    "loser_school": "Northern Iowa",
    "result": "Fall 0:33"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 499,
    "winner": "Matt Kenny",
    "winner_school": "North Carolina",
    "loser": "Chris Miller",
    "loser_school": "Brigham Young",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "285",
    "bout": 500,
    "winner": "Brent Boeshans",
    "winner_school": "Oklahoma",
    "loser": "Bart Johnson",
    "loser_school": "Boise State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 501,
    "winner": "Jeff Ragan",
    "winner_school": "Oklahoma State",
    "loser": "Jason Silverstein",
    "loser_school": "Purdue",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 502,
    "winner": "Paul Gomez",
    "winner_school": "Nebraska",
    "loser": "Mike Kawamura",
    "loser_school": "Arizona State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 503,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "Quantres Bates",
    "loser_school": "Oklahoma",
    "result": "Fall 4:11"
  },
  {
    "round": "ConsR4",
    "weight": "125",
    "bout": 504,
    "winner": "Ruben DeLeon",
    "winner_school": "CSU Bakersfield",
    "loser": "Nathan Navarro",
    "loser_school": "Oregon State",
    "result": "MD 11-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 505,
    "winner": "Mike Coyle",
    "winner_school": "James Madison",
    "loser": "Charles Walker",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 506,
    "winner": "Todd Beckerman",
    "winner_school": "Nebraska",
    "loser": "Kelly Revells",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 507,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Brad Byers",
    "loser_school": "North Carolina",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR4",
    "weight": "133",
    "bout": 508,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Bob Patnesky",
    "loser_school": "West Virginia",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 509,
    "winner": "Damion Logan",
    "winner_school": "Michigan",
    "loser": "David Douglas",
    "loser_school": "Arizona State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 510,
    "winner": "Chris Marshall",
    "winner_school": "Central Michigan",
    "loser": "Mike Castillo",
    "loser_school": "Michigan State",
    "result": "MD 12-3"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 511,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Donnie DeFilippis",
    "loser_school": "George Mason",
    "result": "MD 19-6"
  },
  {
    "round": "ConsR4",
    "weight": "141",
    "bout": 512,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Jamill Kelly",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 513,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Jared Frayer",
    "loser_school": "Oklahoma",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 514,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Karl Nadolsky",
    "loser_school": "Michigan State",
    "result": "DEF"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 515,
    "winner": "Quinn Foster",
    "winner_school": "Arizona State",
    "loser": "Bill Maldonado",
    "loser_school": "Iowa State",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR4",
    "weight": "149",
    "bout": 516,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Joe Henson",
    "loser_school": "Nebraska",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 517,
    "winner": "Shaun Shapert",
    "winner_school": "Edinboro",
    "loser": "Tim Cornish",
    "loser_school": "Fresno State",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 518,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Cole Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 519,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Griff Powell",
    "loser_school": "Illinois",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR4",
    "weight": "157",
    "bout": 520,
    "winner": "Mike Ziska",
    "winner_school": "Pittsburgh",
    "loser": "Leo Urbinelli",
    "loser_school": "Cornell",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 521,
    "winner": "Joey Killar",
    "winner_school": "Harvard",
    "loser": "Ty Wilcox",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 522,
    "winner": "Travis Doto",
    "winner_school": "Lehigh",
    "loser": "Robbie Waller",
    "loser_school": "Oklahoma",
    "result": "Dec 2-0"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 523,
    "winner": "Brad Pike",
    "winner_school": "Minnesota",
    "loser": "Joel Dramis",
    "loser_school": "NC State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "165",
    "bout": 524,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Rangi Smart",
    "loser_school": "Brigham Young",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 525,
    "winner": "Ed Mosley",
    "winner_school": "Harvard",
    "loser": "Mike Feeney",
    "loser_school": "Eastern Michigan",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 526,
    "winner": "Mark Dufresne",
    "winner_school": "Lehigh",
    "loser": "Gabe McMahan",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 527,
    "winner": "Kole Clauson",
    "winner_school": "Wisconsin",
    "loser": "Joe Tucceri",
    "loser_school": "Cornell",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "174",
    "bout": 528,
    "winner": "Randy Pugh",
    "winner_school": "Northern Iowa",
    "loser": "Eric Hall",
    "loser_school": "Virginia Tech",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 529,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "Daniel Cormier",
    "loser_school": "Oklahoma State",
    "result": "Dec 15-10"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 530,
    "winner": "Kevin Welsh",
    "winner_school": "Edinboro",
    "loser": "Jessman Smith",
    "loser_school": "Iowa",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 531,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Lionel Halsey",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR4",
    "weight": "184",
    "bout": 532,
    "winner": "Shawn Scannell",
    "winner_school": "Rider",
    "loser": "Ryan McGrath",
    "loser_school": "Virginia",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 533,
    "winner": "Pat Quirk",
    "winner_school": "Illinois",
    "loser": "Mike Fickell",
    "loser_school": "Penn",
    "result": "Dec 13-8"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 534,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Viktor Sveda",
    "loser_school": "Indiana",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 535,
    "winner": "Ross Thatcher",
    "winner_school": "Penn State",
    "loser": "Owen Elzen",
    "loser_school": "Minnesota",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR4",
    "weight": "197",
    "bout": 536,
    "winner": "Orville Palmer",
    "winner_school": "Oklahoma",
    "loser": "Rusty Cook",
    "loser_school": "Boise State",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 537,
    "winner": "Matt Brink",
    "winner_school": "Michigan",
    "loser": "Matt Lamb",
    "loser_school": "Michigan State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 538,
    "winner": "Antonio Garay",
    "winner_school": "Boston College",
    "loser": "Dave Anderton",
    "loser_school": "Oklahoma State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 539,
    "winner": "Tim Courtad",
    "winner_school": "Ohio",
    "loser": "Matt Kenny",
    "loser_school": "North Carolina",
    "result": "Fall 0:30"
  },
  {
    "round": "ConsR4",
    "weight": "285",
    "bout": 540,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Brent Boeshans",
    "loser_school": "Oklahoma",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 541,
    "winner": "Steve Garland",
    "winner_school": "Virginia",
    "loser": "T.J. Hill",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 6-5 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "125",
    "bout": 542,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Leroy Vega",
    "loser_school": "Minnesota",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 543,
    "winner": "Jeff Ragan",
    "winner_school": "Oklahoma State",
    "loser": "Paul Gomez",
    "loser_school": "Nebraska",
    "result": "Fall 4:23"
  },
  {
    "round": "ConsQtr",
    "weight": "125",
    "bout": 544,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "Ruben DeLeon",
    "loser_school": "CSU Bakersfield",
    "result": "MD 10-2"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 545,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Joe Warren",
    "loser_school": "Michigan",
    "result": "MD 12-3"
  },
  {
    "round": "SemiFinals",
    "weight": "133",
    "bout": 546,
    "winner": "Cody Sanderson",
    "winner_school": "Iowa State",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 547,
    "winner": "Todd Beckerman",
    "winner_school": "Nebraska",
    "loser": "Mike Coyle",
    "loser_school": "James Madison",
    "result": "Fall 1:59"
  },
  {
    "round": "ConsQtr",
    "weight": "133",
    "bout": 548,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Roman Fleszar",
    "loser_school": "Hofstra",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 549,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Mark Angle",
    "loser_school": "Clarion",
    "result": "Dec 2-0"
  },
  {
    "round": "SemiFinals",
    "weight": "141",
    "bout": 550,
    "winner": "Michael Lightner",
    "winner_school": "Oklahoma",
    "loser": "Scott Schatzman",
    "loser_school": "Northwestern",
    "result": "MD 12-4"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 551,
    "winner": "Damion Logan",
    "winner_school": "Michigan",
    "loser": "Chris Marshall",
    "loser_school": "Central Michigan",
    "result": "M FOR"
  },
  {
    "round": "ConsQtr",
    "weight": "141",
    "bout": 552,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Sean Gray",
    "loser_school": "Virginia Tech",
    "result": "Fall 4:18"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 553,
    "winner": "Tony Davis",
    "winner_school": "Northern Iowa",
    "loser": "Jared Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 9-4"
  },
  {
    "round": "SemiFinals",
    "weight": "149",
    "bout": 554,
    "winner": "Adam Tirapelle",
    "winner_school": "Illinois",
    "loser": "Eric Schmiesing",
    "loser_school": "Hofstra",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 555,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Mike Zadick",
    "loser_school": "Iowa",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsQtr",
    "weight": "149",
    "bout": 556,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Quinn Foster",
    "loser_school": "Arizona State",
    "result": "Fall 4:23"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 557,
    "winner": "Larry Quisel",
    "winner_school": "Boise State",
    "loser": "T.J. Williams",
    "loser_school": "Iowa",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "157",
    "bout": 558,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "Corey Wallman",
    "loser_school": "Wisconsin",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 559,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Shaun Shapert",
    "loser_school": "Edinboro",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsQtr",
    "weight": "157",
    "bout": 560,
    "winner": "Luke Becker",
    "winner_school": "Minnesota",
    "loser": "Mike Ziska",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-2"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 561,
    "winner": "Joe Heskett",
    "winner_school": "Iowa State",
    "loser": "Chris Martin",
    "loser_school": "Virginia Tech",
    "result": "Dec 11-4"
  },
  {
    "round": "SemiFinals",
    "weight": "165",
    "bout": 562,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Steven Blackford",
    "loser_school": "Arizona State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 563,
    "winner": "Travis Doto",
    "winner_school": "Lehigh",
    "loser": "Joey Killar",
    "loser_school": "Harvard",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "165",
    "bout": 564,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Brad Pike",
    "loser_school": "Minnesota",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 565,
    "winner": "Byron Tucker",
    "winner_school": "Oklahoma",
    "loser": "Ryan Cunningham",
    "loser_school": "Central Michigan",
    "result": "MD 12-1"
  },
  {
    "round": "SemiFinals",
    "weight": "174",
    "bout": 566,
    "winner": "Josh Koscheck",
    "winner_school": "Edinboro",
    "loser": "Rick Springman",
    "loser_school": "Penn",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 567,
    "winner": "Mark Dufresne",
    "winner_school": "Lehigh",
    "loser": "Ed Mosley",
    "loser_school": "Harvard",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "174",
    "bout": 568,
    "winner": "Randy Pugh",
    "winner_school": "Northern Iowa",
    "loser": "Kole Clauson",
    "loser_school": "Wisconsin",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 569,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Brandon Eggum",
    "loser_school": "Minnesota",
    "result": "MD 16-5"
  },
  {
    "round": "SemiFinals",
    "weight": "184",
    "bout": 570,
    "winner": "Vertus Jones",
    "winner_school": "West Virginia",
    "loser": "Doug Lee",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 571,
    "winner": "Kevin Welsh",
    "winner_school": "Edinboro",
    "loser": "Cash Edwards",
    "loser_school": "Boise State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "184",
    "bout": 572,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Shawn Scannell",
    "loser_school": "Rider",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 573,
    "winner": "Zach Thompson",
    "winner_school": "Iowa State",
    "loser": "Mark Munoz",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "197",
    "bout": 574,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Nick Muzashvili",
    "loser_school": "Michigan State",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 575,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Pat Quirk",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "197",
    "bout": 576,
    "winner": "Ross Thatcher",
    "winner_school": "Penn State",
    "loser": "Orville Palmer",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 577,
    "winner": "Brock Lesnar",
    "winner_school": "Minnesota",
    "loser": "Bandele Adeniyi-Bada",
    "loser_school": "Penn",
    "result": "Fall 6:41"
  },
  {
    "round": "SemiFinals",
    "weight": "285",
    "bout": 578,
    "winner": "Wes Hand",
    "winner_school": "Iowa",
    "loser": "Trent Hynek",
    "loser_school": "Iowa State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 579,
    "winner": "Antonio Garay",
    "winner_school": "Boston College",
    "loser": "Matt Brink",
    "loser_school": "Michigan",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsQtr",
    "weight": "285",
    "bout": 580,
    "winner": "Tim Courtad",
    "winner_school": "Ohio",
    "loser": "John Lockhart",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 581,
    "winner": "T.J. Hill",
    "winner_school": "Cal State Fullerton",
    "loser": "Jeff Ragan",
    "loser_school": "Oklahoma State",
    "result": "MD 19-11"
  },
  {
    "round": "ConsSemi",
    "weight": "125",
    "bout": 582,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "Leroy Vega",
    "loser_school": "Minnesota",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 583,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "Todd Beckerman",
    "loser_school": "Nebraska",
    "result": "MD 12-4"
  },
  {
    "round": "ConsSemi",
    "weight": "133",
    "bout": 584,
    "winner": "Rob Loper",
    "winner_school": "Pittsburgh",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 585,
    "winner": "Mark Angle",
    "winner_school": "Clarion",
    "loser": "Damion Logan",
    "loser_school": "Michigan",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsSemi",
    "weight": "141",
    "bout": 586,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Scott Schatzman",
    "loser_school": "Northwestern",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 587,
    "winner": "Reggie Wright",
    "winner_school": "Oklahoma State",
    "loser": "Jared Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 13-12"
  },
  {
    "round": "ConsSemi",
    "weight": "149",
    "bout": 588,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Eric Schmiesing",
    "loser_school": "Hofstra",
    "result": "Fall 0:34"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 589,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Bryan Snyder",
    "loser_school": "Nebraska",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "157",
    "bout": 590,
    "winner": "Corey Wallman",
    "winner_school": "Wisconsin",
    "loser": "Luke Becker",
    "loser_school": "Minnesota",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 591,
    "winner": "Chris Martin",
    "winner_school": "Virginia Tech",
    "loser": "Travis Doto",
    "loser_school": "Lehigh",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsSemi",
    "weight": "165",
    "bout": 592,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Kirk White",
    "loser_school": "Boise State",
    "result": "Dec 12-10"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 593,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Mark Dufresne",
    "loser_school": "Lehigh",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsSemi",
    "weight": "174",
    "bout": 594,
    "winner": "Randy Pugh",
    "winner_school": "Northern Iowa",
    "loser": "Rick Springman",
    "loser_school": "Penn",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 595,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Kevin Welsh",
    "loser_school": "Edinboro",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsSemi",
    "weight": "184",
    "bout": 596,
    "winner": "Doug Lee",
    "winner_school": "Oregon",
    "loser": "Rob Rohn",
    "loser_school": "Lehigh",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 597,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Nick Preston",
    "loser_school": "Ohio State",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "197",
    "bout": 598,
    "winner": "Nick Muzashvili",
    "winner_school": "Michigan State",
    "loser": "Ross Thatcher",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 599,
    "winner": "Antonio Garay",
    "winner_school": "Boston College",
    "loser": "Bandele Adeniyi-Bada",
    "loser_school": "Penn",
    "result": "Fall 5:54"
  },
  {
    "round": "ConsSemi",
    "weight": "285",
    "bout": 600,
    "winner": "Trent Hynek",
    "winner_school": "Iowa State",
    "loser": "Tim Courtad",
    "loser_school": "Ohio",
    "result": "Dec 6-3"
  },
  {
    "round": "3rdPlace",
    "weight": "125",
    "bout": 601,
    "winner": "Jody Strittmatter",
    "winner_school": "Iowa",
    "loser": "T.J. Hill",
    "loser_school": "Cal State Fullerton",
    "result": "MD 11-2"
  },
  {
    "round": "5thPlace",
    "weight": "125",
    "bout": 602,
    "winner": "Leroy Vega",
    "winner_school": "Minnesota",
    "loser": "Jeff Ragan",
    "loser_school": "Oklahoma State",
    "result": "Dec 13-7"
  },
  {
    "round": "7thPlace",
    "weight": "125",
    "bout": 603,
    "winner": "Ruben DeLeon",
    "winner_school": "CSU Bakersfield",
    "loser": "Paul Gomez",
    "loser_school": "Nebraska",
    "result": "Fall 2:19"
  },
  {
    "round": "3rdPlace",
    "weight": "133",
    "bout": 604,
    "winner": "Joe Warren",
    "winner_school": "Michigan",
    "loser": "Rob Loper",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-3"
  },
  {
    "round": "5thPlace",
    "weight": "133",
    "bout": 605,
    "winner": "Todd Beckerman",
    "winner_school": "Nebraska",
    "loser": "Pat McNamara",
    "loser_school": "Michigan State",
    "result": "Dec 8-2"
  },
  {
    "round": "7thPlace",
    "weight": "133",
    "bout": 606,
    "winner": "Roman Fleszar",
    "winner_school": "Hofstra",
    "loser": "Mike Coyle",
    "loser_school": "James Madison",
    "result": "Dec 4-3"
  },
  {
    "round": "3rdPlace",
    "weight": "141",
    "bout": 607,
    "winner": "Doug Schwab",
    "winner_school": "Iowa",
    "loser": "Mark Angle",
    "loser_school": "Clarion",
    "result": "DEF"
  },
  {
    "round": "5thPlace",
    "weight": "141",
    "bout": 608,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Damion Logan",
    "loser_school": "Michigan",
    "result": "MD 17-4"
  },
  {
    "round": "7thPlace",
    "weight": "141",
    "bout": 609,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Chris Marshall",
    "loser_school": "Central Michigan",
    "result": "FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "149",
    "bout": 610,
    "winner": "Dave Esposito",
    "winner_school": "Lehigh",
    "loser": "Reggie Wright",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-6"
  },
  {
    "round": "5thPlace",
    "weight": "149",
    "bout": 611,
    "winner": "Eric Schmiesing",
    "winner_school": "Hofstra",
    "loser": "Jared Lawrence",
    "loser_school": "Minnesota",
    "result": "Dec 9-4"
  },
  {
    "round": "7thPlace",
    "weight": "149",
    "bout": 612,
    "winner": "Mike Zadick",
    "winner_school": "Iowa",
    "loser": "Quinn Foster",
    "loser_school": "Arizona State",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "157",
    "bout": 613,
    "winner": "T.J. Williams",
    "winner_school": "Iowa",
    "loser": "Corey Wallman",
    "loser_school": "Wisconsin",
    "result": "Dec 7-4"
  },
  {
    "round": "5thPlace",
    "weight": "157",
    "bout": 614,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Luke Becker",
    "loser_school": "Minnesota",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "157",
    "bout": 615,
    "winner": "Shaun Shapert",
    "winner_school": "Edinboro",
    "loser": "Mike Ziska",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "165",
    "bout": 616,
    "winner": "Steven Blackford",
    "winner_school": "Arizona State",
    "loser": "Chris Martin",
    "loser_school": "Virginia Tech",
    "result": "MD 10-2"
  },
  {
    "round": "5thPlace",
    "weight": "165",
    "bout": 617,
    "winner": "Kirk White",
    "winner_school": "Boise State",
    "loser": "Travis Doto",
    "loser_school": "Lehigh",
    "result": "Dec 7-3"
  },
  {
    "round": "7thPlace",
    "weight": "165",
    "bout": 618,
    "winner": "Brad Pike",
    "winner_school": "Minnesota",
    "loser": "Joey Killar",
    "loser_school": "Harvard",
    "result": "Dec 9-3"
  },
  {
    "round": "3rdPlace",
    "weight": "174",
    "bout": 619,
    "winner": "Ryan Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Randy Pugh",
    "loser_school": "Northern Iowa",
    "result": "Fall 3:20"
  },
  {
    "round": "5thPlace",
    "weight": "174",
    "bout": 620,
    "winner": "Rick Springman",
    "winner_school": "Penn",
    "loser": "Mark Dufresne",
    "loser_school": "Lehigh",
    "result": "Dec 8-1"
  },
  {
    "round": "7thPlace",
    "weight": "174",
    "bout": 621,
    "winner": "Kole Clauson",
    "winner_school": "Wisconsin",
    "loser": "Ed Mosley",
    "loser_school": "Harvard",
    "result": "MD 10-2"
  },
  {
    "round": "3rdPlace",
    "weight": "184",
    "bout": 622,
    "winner": "Brandon Eggum",
    "winner_school": "Minnesota",
    "loser": "Doug Lee",
    "loser_school": "Oregon",
    "result": "Dec 9-5"
  },
  {
    "round": "5thPlace",
    "weight": "184",
    "bout": 623,
    "winner": "Rob Rohn",
    "winner_school": "Lehigh",
    "loser": "Kevin Welsh",
    "loser_school": "Edinboro",
    "result": "Dec 2-1"
  },
  {
    "round": "7thPlace",
    "weight": "184",
    "bout": 624,
    "winner": "Cash Edwards",
    "winner_school": "Boise State",
    "loser": "Shawn Scannell",
    "loser_school": "Rider",
    "result": "Dec 6-4"
  },
  {
    "round": "3rdPlace",
    "weight": "197",
    "bout": 625,
    "winner": "Mark Munoz",
    "winner_school": "Oklahoma State",
    "loser": "Nick Muzashvili",
    "loser_school": "Michigan State",
    "result": "Dec 3-2"
  },
  {
    "round": "5thPlace",
    "weight": "197",
    "bout": 626,
    "winner": "Nick Preston",
    "winner_school": "Ohio State",
    "loser": "Ross Thatcher",
    "loser_school": "Penn State",
    "result": "Dec 2-1 SV"
  },
  {
    "round": "7thPlace",
    "weight": "197",
    "bout": 627,
    "winner": "Orville Palmer",
    "winner_school": "Oklahoma",
    "loser": "Pat Quirk",
    "loser_school": "Illinois",
    "result": "MD 10-2"
  },
  {
    "round": "3rdPlace",
    "weight": "285",
    "bout": 628,
    "winner": "Trent Hynek",
    "winner_school": "Iowa State",
    "loser": "Antonio Garay",
    "loser_school": "Boston College",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "5thPlace",
    "weight": "285",
    "bout": 629,
    "winner": "Tim Courtad",
    "winner_school": "Ohio",
    "loser": "Bandele Adeniyi-Bada",
    "loser_school": "Penn",
    "result": "Dec 8-3"
  },
  {
    "round": "7thPlace",
    "weight": "285",
    "bout": 630,
    "winner": "John Lockhart",
    "winner_school": "Illinois",
    "loser": "Matt Brink",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "Finals",
    "weight": "125",
    "bout": 631,
    "winner": "Jeremy Hunter",
    "winner_school": "Penn State",
    "loser": "Steve Garland",
    "loser_school": "Virginia",
    "result": "Dec 7-3"
  },
  {
    "round": "Finals",
    "weight": "133",
    "bout": 632,
    "winner": "Eric Juergens",
    "winner_school": "Iowa",
    "loser": "Cody Sanderson",
    "loser_school": "Iowa State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "Finals",
    "weight": "141",
    "bout": 633,
    "winner": "Carl Perry",
    "winner_school": "Illinois",
    "loser": "Michael Lightner",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "Finals",
    "weight": "149",
    "bout": 634,
    "winner": "Tony Davis",
    "winner_school": "Northern Iowa",
    "loser": "Adam Tirapelle",
    "loser_school": "Illinois",
    "result": "Dec 5-1 SV"
  },
  {
    "round": "Finals",
    "weight": "157",
    "bout": 635,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "Larry Quisel",
    "loser_school": "Boise State",
    "result": "Dec 4-2"
  },
  {
    "round": "Finals",
    "weight": "165",
    "bout": 636,
    "winner": "Don Pritzlaff",
    "winner_school": "Wisconsin",
    "loser": "Joe Heskett",
    "loser_school": "Iowa State",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "Finals",
    "weight": "174",
    "bout": 637,
    "winner": "Byron Tucker",
    "winner_school": "Oklahoma",
    "loser": "Josh Koscheck",
    "loser_school": "Edinboro",
    "result": "Dec 3-0"
  },
  {
    "round": "Finals",
    "weight": "184",
    "bout": 638,
    "winner": "Cael Sanderson",
    "winner_school": "Iowa State",
    "loser": "Vertus Jones",
    "loser_school": "West Virginia",
    "result": "MD 19-6"
  },
  {
    "round": "Finals",
    "weight": "197",
    "bout": 639,
    "winner": "Brad Vering",
    "winner_school": "Nebraska",
    "loser": "Zach Thompson",
    "loser_school": "Iowa State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "Finals",
    "weight": "285",
    "bout": 640,
    "winner": "Brock Lesnar",
    "winner_school": "Minnesota",
    "loser": "Wes Hand",
    "loser_school": "Iowa",
    "result": "Dec 3-2 TB"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 1003,
    "winner": "Jonathon Archuleta",
    "winner_school": "CSU Bakersfield",
    "loser": "Bryan McDermott",
    "loser_school": "Duquesne",
    "result": "TF 15-0 5:09"
  },
  {
    "round": "Prelims",
    "weight": "149",
    "bout": 1004,
    "winner": "Max Odom",
    "winner_school": "Harvard",
    "loser": "Dennis Whitby",
    "loser_school": "Old Dominion",
    "result": "Fall 2:59"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 1005,
    "winner": "Dennis Papadatos",
    "winner_school": "Hofstra",
    "loser": "Eric Jorgensen",
    "loser_school": "Oregon State",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 1006,
    "winner": "Denis Alampiev",
    "winner_school": "American",
    "loser": "David Dietrich",
    "loser_school": "Drexel",
    "result": "Dec 10-8 SV"
  },
  {
    "round": "Prelims",
    "weight": "174",
    "bout": 1007,
    "winner": "Curtis Owen",
    "winner_school": "Arizona State",
    "loser": "Ben King",
    "loser_school": "Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 1010,
    "winner": "John Testa",
    "winner_school": "Clarion",
    "loser": "John Devine",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 1173,
    "winner": "Mike Castillo",
    "winner_school": "Michigan State",
    "loser": "Ben New",
    "loser_school": "Cornell",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "149",
    "bout": 1174,
    "winner": "Max Odom",
    "winner_school": "Harvard",
    "loser": "Joey Calavitta",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 1175,
    "winner": "Bryan Snyder",
    "winner_school": "Nebraska",
    "loser": "Kevin Stanley",
    "loser_school": "Indiana",
    "result": "Dec 4-3 TB"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 1176,
    "winner": "Noel Thompson",
    "winner_school": "Hofstra",
    "loser": "David Dietrich",
    "loser_school": "Drexel",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "174",
    "bout": 1177,
    "winner": "Delaney Berger",
    "winner_school": "Minnesota",
    "loser": "John Kopnisky",
    "loser_school": "Missouri",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 1180,
    "winner": "John Testa",
    "winner_school": "Clarion",
    "loser": "Matt Fisher",
    "loser_school": "Duquesne",
    "result": "MD 12-4"
  },
  {
    "round": "Prelims",
    "weight": "141",
    "bout": 2003,
    "winner": "Jason DeBruin",
    "winner_school": "Hofstra",
    "loser": "Joe Herron",
    "loser_school": "UNC Greensboro",
    "result": "MD 15-1"
  },
  {
    "round": "Prelims",
    "weight": "157",
    "bout": 2005,
    "winner": "Griff Powell",
    "winner_school": "Illinois",
    "loser": "Billy Greene",
    "loser_school": "Campbell",
    "result": "MD 14-5"
  },
  {
    "round": "Prelims",
    "weight": "165",
    "bout": 2006,
    "winner": "Matt Anderson",
    "winner_school": "Iowa",
    "loser": "Josh Weidman",
    "loser_school": "Maryland",
    "result": "TF 26-10 7:00"
  },
  {
    "round": "Prelims",
    "weight": "285",
    "bout": 2010,
    "winner": "Dawid Rechul",
    "winner_school": "Harvard",
    "loser": "Matt Fisher",
    "loser_school": "Duquesne",
    "result": "MD 11-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "141",
    "bout": 2173,
    "winner": "Sean Gray",
    "winner_school": "Virginia Tech",
    "loser": "Joe Herron",
    "loser_school": "UNC Greensboro",
    "result": "MD 12-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "157",
    "bout": 2175,
    "winner": "Eugene Harris",
    "winner_school": "Oregon",
    "loser": "Billy Greene",
    "loser_school": "Campbell",
    "result": "Fall 4:56"
  },
  {
    "round": "ConsPrelims",
    "weight": "165",
    "bout": 2176,
    "winner": "Carl Fronhofer",
    "winner_school": "Pittsburgh",
    "loser": "Kirk Moore",
    "loser_school": "Purdue",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "285",
    "bout": 2180,
    "winner": "Dawid Rechul",
    "winner_school": "Harvard",
    "loser": "John Devine",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 12-7"
  }
];
