// 1996 NCAA Division I Wrestling Championships (3/21/1996 to 3/23/1996 at Minnesota). Weight classes 118-275 (pre-1999 set).
// STRUCTURE (draw lines, seeds, wrestle-ins, byes, crossovers) and COMPLETED RESULTS: WrestlingStats 1996 compiled bracket -- ACCEPTED FALLBACK, NOT an official NCAA source.
// Extracted by page position (extract.py / assemble.py); every bout checked against the bracket structure. School spellings mapped to Tournament Central canonical names.
// Bout numbers: internal keys (the results1999.js scheme; wrestle-in k = base + 1000k), not printed.
// Per-bout provenance: results1996-provenance.js
const resultData = [
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 11,
    "winner": "Mike Miller",
    "winner_school": "NC State",
    "loser": "Sean Shea",
    "loser_school": "George Mason",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 12,
    "winner": "Chad Billy",
    "winner_school": "West Virginia",
    "loser": "Tony Hairston",
    "loser_school": "Appalachian State",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 13,
    "winner": "Jason Buce",
    "winner_school": "Oregon State",
    "loser": "Sean Kim",
    "loser_school": "Fresno State",
    "result": "Dec 11-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 14,
    "winner": "Mike Mena",
    "winner_school": "Iowa",
    "loser": "Frank Nocito",
    "loser_school": "North Carolina",
    "result": "Fall 2:30"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 15,
    "winner": "Jason Betz",
    "winner_school": "Penn State",
    "loser": "Scott Murray",
    "loser_school": "Northern Iowa",
    "result": "Fall 2:20"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 16,
    "winner": "Kevin Roberts",
    "winner_school": "Oregon",
    "loser": "Chris Madigan",
    "loser_school": "East Stroudsburg",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 17,
    "winner": "Orlando DeCastroverde",
    "winner_school": "Cal State Fullerton",
    "loser": "John Carvalheira",
    "loser_school": "Rider",
    "result": "Dec 7-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 18,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "Jason Wartinger",
    "loser_school": "Buffalo",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 19,
    "winner": "David Pena",
    "winner_school": "Eastern Illinois",
    "loser": "Brad Canoyer",
    "loser_school": "Nebraska",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 20,
    "winner": "Lindsay Durlacher",
    "winner_school": "Illinois",
    "loser": "Mike Kusick",
    "loser_school": "Lock Haven",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 21,
    "winner": "Lee Pritts",
    "winner_school": "Eastern Michigan",
    "loser": "Ben Hatta",
    "loser_school": "Penn",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 22,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Derrick Henson",
    "loser_school": "Howard",
    "result": "Fall 6:18"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 23,
    "winner": "Jason Nurre",
    "winner_school": "Iowa State",
    "loser": "Peter Poretta",
    "loser_school": "Brown",
    "result": "TF 24-6 6:31"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 24,
    "winner": "Shawn Conyers",
    "winner_school": "Ohio State",
    "loser": "Mike Tuttle",
    "loser_school": "Slippery Rock",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "118",
    "bout": 25,
    "winner": "Teague Moore",
    "winner_school": "Oklahoma State",
    "loser": "Chris Viola",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 181,
    "winner": "Mike Miller",
    "winner_school": "NC State",
    "loser": "Chad Billy",
    "loser_school": "West Virginia",
    "result": "Fall 6:33"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 182,
    "winner": "Mike Mena",
    "winner_school": "Iowa",
    "loser": "Jason Buce",
    "loser_school": "Oregon State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 183,
    "winner": "Jason Betz",
    "winner_school": "Penn State",
    "loser": "Kevin Roberts",
    "loser_school": "Oregon",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 184,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "Orlando DeCastroverde",
    "loser_school": "Cal State Fullerton",
    "result": "MD 10-0"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 185,
    "winner": "Lindsay Durlacher",
    "winner_school": "Illinois",
    "loser": "David Pena",
    "loser_school": "Eastern Illinois",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 186,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Lee Pritts",
    "loser_school": "Eastern Michigan",
    "result": "MD 15-2"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 187,
    "winner": "Jason Nurre",
    "winner_school": "Iowa State",
    "loser": "Shawn Conyers",
    "loser_school": "Ohio State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "118",
    "bout": 188,
    "winner": "Shane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Teague Moore",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 190,
    "winner": "Peter Poretta",
    "winner_school": "Brown",
    "loser": "Mike Tuttle",
    "loser_school": "Slippery Rock",
    "result": "Fall 1:59"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 191,
    "winner": "Derrick Henson",
    "winner_school": "Howard",
    "loser": "Ben Hatta",
    "loser_school": "Penn",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 192,
    "winner": "Brad Canoyer",
    "winner_school": "Nebraska",
    "loser": "Mike Kusick",
    "loser_school": "Lock Haven",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 193,
    "winner": "Jason Wartinger",
    "winner_school": "Buffalo",
    "loser": "John Carvalheira",
    "loser_school": "Rider",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 194,
    "winner": "Scott Murray",
    "winner_school": "Northern Iowa",
    "loser": "Chris Madigan",
    "loser_school": "East Stroudsburg",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 195,
    "winner": "Sean Kim",
    "winner_school": "Fresno State",
    "loser": "Frank Nocito",
    "loser_school": "North Carolina",
    "result": "Dec 18-11"
  },
  {
    "round": "ConsR1",
    "weight": "118",
    "bout": 196,
    "winner": "Tony Hairston",
    "winner_school": "Appalachian State",
    "loser": "Sean Shea",
    "loser_school": "George Mason",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 341,
    "winner": "Kevin Roberts",
    "winner_school": "Oregon",
    "loser": "Chris Viola",
    "loser_school": "Michigan",
    "result": "Dec 10-3"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 342,
    "winner": "Orlando DeCastroverde",
    "winner_school": "Cal State Fullerton",
    "loser": "Peter Poretta",
    "loser_school": "Brown",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 343,
    "winner": "Chad Billy",
    "winner_school": "West Virginia",
    "loser": "Derrick Henson",
    "loser_school": "Howard",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 344,
    "winner": "Jason Buce",
    "winner_school": "Oregon State",
    "loser": "Brad Canoyer",
    "loser_school": "Nebraska",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 345,
    "winner": "Shawn Conyers",
    "winner_school": "Ohio State",
    "loser": "Jason Wartinger",
    "loser_school": "Buffalo",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 346,
    "winner": "Scott Murray",
    "winner_school": "Northern Iowa",
    "loser": "Teague Moore",
    "loser_school": "Oklahoma State",
    "result": "Dec 13-8"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 347,
    "winner": "David Pena",
    "winner_school": "Eastern Illinois",
    "loser": "Sean Kim",
    "loser_school": "Fresno State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "118",
    "bout": 348,
    "winner": "Lee Pritts",
    "winner_school": "Eastern Michigan",
    "loser": "Tony Hairston",
    "loser_school": "Appalachian State",
    "result": "FOR"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 421,
    "winner": "Mike Mena",
    "winner_school": "Iowa",
    "loser": "Mike Miller",
    "loser_school": "NC State",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 422,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "Jason Betz",
    "loser_school": "Penn State",
    "result": "MD 11-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 423,
    "winner": "Lindsay Durlacher",
    "winner_school": "Illinois",
    "loser": "David Morgan",
    "loser_school": "Michigan State",
    "result": "Dec 6-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "118",
    "bout": 424,
    "winner": "Jason Nurre",
    "winner_school": "Iowa State",
    "loser": "Shane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "118",
    "bout": 425,
    "winner": "Orlando DeCastroverde",
    "winner_school": "Cal State Fullerton",
    "loser": "Kevin Roberts",
    "loser_school": "Oregon",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsR3",
    "weight": "118",
    "bout": 426,
    "winner": "Jason Buce",
    "winner_school": "Oregon State",
    "loser": "Chad Billy",
    "loser_school": "West Virginia",
    "result": "Fall 2:43"
  },
  {
    "round": "ConsR3",
    "weight": "118",
    "bout": 427,
    "winner": "Scott Murray",
    "winner_school": "Northern Iowa",
    "loser": "Shawn Conyers",
    "loser_school": "Ohio State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR3",
    "weight": "118",
    "bout": 428,
    "winner": "Lee Pritts",
    "winner_school": "Eastern Michigan",
    "loser": "David Pena",
    "loser_school": "Eastern Illinois",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "118",
    "bout": 501,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Orlando DeCastroverde",
    "loser_school": "Cal State Fullerton",
    "result": "MD 14-4"
  },
  {
    "round": "ConsR4",
    "weight": "118",
    "bout": 502,
    "winner": "Shane Valdez",
    "winner_school": "Oklahoma",
    "loser": "Jason Buce",
    "loser_school": "Oregon State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "118",
    "bout": 503,
    "winner": "Mike Miller",
    "winner_school": "NC State",
    "loser": "Scott Murray",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR4",
    "weight": "118",
    "bout": 504,
    "winner": "Lee Pritts",
    "winner_school": "Eastern Michigan",
    "loser": "Jason Betz",
    "loser_school": "Penn State",
    "result": "Dec 3-2"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 541,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "Mike Mena",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "118",
    "bout": 542,
    "winner": "Jason Nurre",
    "winner_school": "Iowa State",
    "loser": "Lindsay Durlacher",
    "loser_school": "Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsQtr",
    "weight": "118",
    "bout": 543,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Shane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsQtr",
    "weight": "118",
    "bout": 544,
    "winner": "Lee Pritts",
    "winner_school": "Eastern Michigan",
    "loser": "Mike Miller",
    "loser_school": "NC State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsSemi",
    "weight": "118",
    "bout": 581,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Mike Mena",
    "loser_school": "Iowa",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsSemi",
    "weight": "118",
    "bout": 582,
    "winner": "Lindsay Durlacher",
    "winner_school": "Illinois",
    "loser": "Lee Pritts",
    "loser_school": "Eastern Michigan",
    "result": "Dec 6-5"
  },
  {
    "round": "3rdPlace",
    "weight": "118",
    "bout": 601,
    "winner": "David Morgan",
    "winner_school": "Michigan State",
    "loser": "Lindsay Durlacher",
    "loser_school": "Illinois",
    "result": "Fall 3:52"
  },
  {
    "round": "5thPlace",
    "weight": "118",
    "bout": 602,
    "winner": "Mike Mena",
    "winner_school": "Iowa",
    "loser": "Lee Pritts",
    "loser_school": "Eastern Michigan",
    "result": "Dec 10-3"
  },
  {
    "round": "7thPlace",
    "weight": "118",
    "bout": 603,
    "winner": "Mike Miller",
    "winner_school": "NC State",
    "loser": "Shane Valdez",
    "loser_school": "Oklahoma",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "Finals",
    "weight": "118",
    "bout": 631,
    "winner": "Sheldon Thomas",
    "winner_school": "Clarion",
    "loser": "Jason Nurre",
    "loser_school": "Iowa State",
    "result": "Dec 6-4"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2,
    "winner": "Erick Shaw",
    "winner_school": "Old Dominion",
    "loser": "Brett Tullo",
    "loser_school": "Bloomsburg",
    "result": "MD 9-0"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 1002,
    "winner": "Jason Kutz",
    "winner_school": "Lehigh",
    "loser": "Jeramie Welder",
    "loser_school": "Nebraska",
    "result": "Fall 2:36"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 2002,
    "winner": "Willie Carpenter",
    "winner_school": "Brown",
    "loser": "Jason Hernandez",
    "loser_school": "Boston University",
    "result": "Dec 5-3"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 3002,
    "winner": "Terry Showalter",
    "winner_school": "Lock Haven",
    "loser": "Aaron Mickiewicz",
    "loser_school": "VMI",
    "result": "Dec 9-2"
  },
  {
    "round": "Prelims",
    "weight": "126",
    "bout": 4002,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Nick Zinkin",
    "loser_school": "Fresno State",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 27,
    "winner": "Terry Showalter",
    "winner_school": "Lock Haven",
    "loser": "John Kelly",
    "loser_school": "Brigham Young",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 28,
    "winner": "Sanshiro Abe",
    "winner_school": "Penn State",
    "loser": "John Taylor",
    "loser_school": "Oregon",
    "result": "Fall 4:46"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 29,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Doug Detrick",
    "loser_school": "James Madison",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 30,
    "winner": "Brandon Howe",
    "winner_school": "Michigan",
    "loser": "Chris Marshall",
    "loser_school": "Clarion",
    "result": "Fall 1:59"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 31,
    "winner": "Willie Carpenter",
    "winner_school": "Brown",
    "loser": "David Barden",
    "loser_school": "Chattanooga",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 32,
    "winner": "Eric Jetton",
    "winner_school": "Wisconsin",
    "loser": "Anthony Sorantino",
    "loser_school": "NC State",
    "result": "Fall 5:11"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 33,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Dock Kelly",
    "loser_school": "UNC Greensboro",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 34,
    "winner": "Brian Eveleth",
    "winner_school": "Penn",
    "loser": "Matt Roth",
    "loser_school": "Virginia",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 35,
    "winner": "Coby Wright",
    "winner_school": "CSU Bakersfield",
    "loser": "Erick Shaw",
    "loser_school": "Old Dominion",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 36,
    "winner": "Tom Hickenlooper",
    "winner_school": "Wyoming",
    "loser": "Jason LaMotta",
    "loser_school": "North Carolina",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 37,
    "winner": "Shawn Ford",
    "winner_school": "Arizona State",
    "loser": "Dustin Denunzio",
    "loser_school": "Harvard",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 38,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Jake Whisenhunt",
    "loser_school": "Oregon State",
    "result": "Dec 6-0"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 39,
    "winner": "Jason Kutz",
    "winner_school": "Lehigh",
    "loser": "Matt Turnbow",
    "loser_school": "Eastern Michigan",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 40,
    "winner": "Brian Bolton",
    "winner_school": "Michigan State",
    "loser": "Randy Dischner",
    "loser_school": "Duquesne",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 41,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Ryan Kutz",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "126",
    "bout": 42,
    "winner": "Alfredo Varela",
    "winner_school": "Oklahoma",
    "loser": "Gregg Kessler",
    "loser_school": "Rider",
    "result": "Fall 3:18"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 172,
    "winner": "Nick Zinkin",
    "winner_school": "Fresno State",
    "loser": "Randy Dischner",
    "loser_school": "Duquesne",
    "result": "MD 15-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 1172,
    "winner": "Jake Whisenhunt",
    "winner_school": "Oregon State",
    "loser": "Jason Hernandez",
    "loser_school": "Boston University",
    "result": "Fall 0:43"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 2172,
    "winner": "Gregg Kessler",
    "winner_school": "Rider",
    "loser": "Aaron Mickiewicz",
    "loser_school": "VMI",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 3172,
    "winner": "Brett Tullo",
    "winner_school": "Bloomsburg",
    "loser": "Matt Roth",
    "loser_school": "Virginia",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "126",
    "bout": 4172,
    "winner": "Chris Marshall",
    "winner_school": "Clarion",
    "loser": "Jeramie Welder",
    "loser_school": "Nebraska",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 197,
    "winner": "Sanshiro Abe",
    "winner_school": "Penn State",
    "loser": "Terry Showalter",
    "loser_school": "Lock Haven",
    "result": "TF 18-3 6:24"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 198,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Brandon Howe",
    "loser_school": "Michigan",
    "result": "MD 8-0"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 199,
    "winner": "Eric Jetton",
    "winner_school": "Wisconsin",
    "loser": "Willie Carpenter",
    "loser_school": "Brown",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 200,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Brian Eveleth",
    "loser_school": "Penn",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 201,
    "winner": "Coby Wright",
    "winner_school": "CSU Bakersfield",
    "loser": "Tom Hickenlooper",
    "loser_school": "Wyoming",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 202,
    "winner": "Shawn Ford",
    "winner_school": "Arizona State",
    "loser": "Jeff McGinness",
    "loser_school": "Iowa",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 203,
    "winner": "Brian Bolton",
    "winner_school": "Michigan State",
    "loser": "Jason Kutz",
    "loser_school": "Lehigh",
    "result": "Dec 10-7"
  },
  {
    "round": "ChampR2",
    "weight": "126",
    "bout": 204,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Alfredo Varela",
    "loser_school": "Oklahoma",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 205,
    "winner": "Gregg Kessler",
    "winner_school": "Rider",
    "loser": "Ryan Kutz",
    "loser_school": "Northern Iowa",
    "result": "MD 17-6"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 206,
    "winner": "Nick Zinkin",
    "winner_school": "Fresno State",
    "loser": "Matt Turnbow",
    "loser_school": "Eastern Michigan",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 207,
    "winner": "Jake Whisenhunt",
    "winner_school": "Oregon State",
    "loser": "Dustin Denunzio",
    "loser_school": "Harvard",
    "result": "Fall 4:21"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 208,
    "winner": "Jason LaMotta",
    "winner_school": "North Carolina",
    "loser": "Erick Shaw",
    "loser_school": "Old Dominion",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 209,
    "winner": "Dock Kelly",
    "winner_school": "UNC Greensboro",
    "loser": "Brett Tullo",
    "loser_school": "Bloomsburg",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 210,
    "winner": "David Barden",
    "winner_school": "Chattanooga",
    "loser": "Anthony Sorantino",
    "loser_school": "NC State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 211,
    "winner": "Chris Marshall",
    "winner_school": "Clarion",
    "loser": "Doug Detrick",
    "loser_school": "James Madison",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "126",
    "bout": 212,
    "winner": "John Kelly",
    "winner_school": "Brigham Young",
    "loser": "John Taylor",
    "loser_school": "Oregon",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 349,
    "winner": "Willie Carpenter",
    "winner_school": "Brown",
    "loser": "Gregg Kessler",
    "loser_school": "Rider",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 350,
    "winner": "Nick Zinkin",
    "winner_school": "Fresno State",
    "loser": "Brian Eveleth",
    "loser_school": "Penn",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 351,
    "winner": "Jake Whisenhunt",
    "winner_school": "Oregon State",
    "loser": "Terry Showalter",
    "loser_school": "Lock Haven",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 352,
    "winner": "Brandon Howe",
    "winner_school": "Michigan",
    "loser": "Jason LaMotta",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 353,
    "winner": "Jason Kutz",
    "winner_school": "Lehigh",
    "loser": "Dock Kelly",
    "loser_school": "UNC Greensboro",
    "result": "FOR"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 354,
    "winner": "David Barden",
    "winner_school": "Chattanooga",
    "loser": "Alfredo Varela",
    "loser_school": "Oklahoma",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 355,
    "winner": "Chris Marshall",
    "winner_school": "Clarion",
    "loser": "Tom Hickenlooper",
    "loser_school": "Wyoming",
    "result": "MD 14-6"
  },
  {
    "round": "ConsR2",
    "weight": "126",
    "bout": 356,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "John Kelly",
    "loser_school": "Brigham Young",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 429,
    "winner": "Sanshiro Abe",
    "winner_school": "Penn State",
    "loser": "Scott Schatzman",
    "loser_school": "Northwestern",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 430,
    "winner": "Eric Jetton",
    "winner_school": "Wisconsin",
    "loser": "Eric Guerrero",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 431,
    "winner": "Coby Wright",
    "winner_school": "CSU Bakersfield",
    "loser": "Shawn Ford",
    "loser_school": "Arizona State",
    "result": "Fall 2:19"
  },
  {
    "round": "QuarterFinals",
    "weight": "126",
    "bout": 432,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Brian Bolton",
    "loser_school": "Michigan State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "126",
    "bout": 433,
    "winner": "Willie Carpenter",
    "winner_school": "Brown",
    "loser": "Nick Zinkin",
    "loser_school": "Fresno State",
    "result": "Fall 1:18"
  },
  {
    "round": "ConsR3",
    "weight": "126",
    "bout": 434,
    "winner": "Brandon Howe",
    "winner_school": "Michigan",
    "loser": "Jake Whisenhunt",
    "loser_school": "Oregon State",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR3",
    "weight": "126",
    "bout": 435,
    "winner": "David Barden",
    "winner_school": "Chattanooga",
    "loser": "Jason Kutz",
    "loser_school": "Lehigh",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "126",
    "bout": 436,
    "winner": "Jeff McGinness",
    "winner_school": "Iowa",
    "loser": "Chris Marshall",
    "loser_school": "Clarion",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR4",
    "weight": "126",
    "bout": 505,
    "winner": "Willie Carpenter",
    "winner_school": "Brown",
    "loser": "Shawn Ford",
    "loser_school": "Arizona State",
    "result": "Fall 2:43"
  },
  {
    "round": "ConsR4",
    "weight": "126",
    "bout": 506,
    "winner": "Brandon Howe",
    "winner_school": "Michigan",
    "loser": "Brian Bolton",
    "loser_school": "Michigan State",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR4",
    "weight": "126",
    "bout": 507,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "David Barden",
    "loser_school": "Chattanooga",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR4",
    "weight": "126",
    "bout": 508,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Jeff McGinness",
    "loser_school": "Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 545,
    "winner": "Sanshiro Abe",
    "winner_school": "Penn State",
    "loser": "Eric Jetton",
    "loser_school": "Wisconsin",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "126",
    "bout": 546,
    "winner": "Dwight Hinson",
    "winner_school": "Iowa State",
    "loser": "Coby Wright",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsQtr",
    "weight": "126",
    "bout": 547,
    "winner": "Willie Carpenter",
    "winner_school": "Brown",
    "loser": "Brandon Howe",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsQtr",
    "weight": "126",
    "bout": 548,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Scott Schatzman",
    "loser_school": "Northwestern",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsSemi",
    "weight": "126",
    "bout": 583,
    "winner": "Eric Jetton",
    "winner_school": "Wisconsin",
    "loser": "Willie Carpenter",
    "loser_school": "Brown",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsSemi",
    "weight": "126",
    "bout": 584,
    "winner": "Coby Wright",
    "winner_school": "CSU Bakersfield",
    "loser": "Eric Guerrero",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-5"
  },
  {
    "round": "3rdPlace",
    "weight": "126",
    "bout": 604,
    "winner": "Eric Jetton",
    "winner_school": "Wisconsin",
    "loser": "Coby Wright",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-0"
  },
  {
    "round": "5thPlace",
    "weight": "126",
    "bout": 605,
    "winner": "Eric Guerrero",
    "winner_school": "Oklahoma State",
    "loser": "Willie Carpenter",
    "loser_school": "Brown",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "126",
    "bout": 606,
    "winner": "Scott Schatzman",
    "winner_school": "Northwestern",
    "loser": "Brandon Howe",
    "loser_school": "Michigan",
    "result": "Dec 5-0"
  },
  {
    "round": "Finals",
    "weight": "126",
    "bout": 632,
    "winner": "Sanshiro Abe",
    "winner_school": "Penn State",
    "loser": "Dwight Hinson",
    "loser_school": "Iowa State",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 43,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Jason Solomon",
    "loser_school": "Northern Illinois",
    "result": "TF 20-5 6:45"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 44,
    "winner": "Ed Schillig",
    "winner_school": "Ohio",
    "loser": "Jeremy Ensrud",
    "loser_school": "Oregon",
    "result": "Fall 6:00"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 45,
    "winner": "Yero Washington",
    "winner_school": "Fresno State",
    "loser": "Mark Beebe",
    "loser_school": "Wisconsin",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 46,
    "winner": "Jimmy Aguirre",
    "winner_school": "Stanford",
    "loser": "Emilio Nardone",
    "loser_school": "Seton Hall",
    "result": "Dec 7-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 47,
    "winner": "Steve St. John",
    "winner_school": "Arizona State",
    "loser": "Joel Friedman",
    "loser_school": "Harvard",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 48,
    "winner": "Tony Pariano",
    "winner_school": "Northwestern",
    "loser": "Whitey Chlebove",
    "loser_school": "West Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 49,
    "winner": "Biff Walizer",
    "winner_school": "Penn State",
    "loser": "Mike Buccigrossi",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 50,
    "winner": "Brian Singleton",
    "winner_school": "Kent State",
    "loser": "Tony DeAnda",
    "loser_school": "Nebraska",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 51,
    "winner": "Trevor Elliott",
    "winner_school": "Indiana",
    "loser": "Mike Mendoza",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 6-4"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 52,
    "winner": "Cary Kolat",
    "winner_school": "Lock Haven",
    "loser": "Mark Piotrowsky",
    "loser_school": "Penn",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 53,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Ryan Nunamaker",
    "loser_school": "NC State",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 54,
    "winner": "Carl Keske",
    "winner_school": "Cornell",
    "loser": "Doug Batey",
    "loser_school": "James Madison",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 55,
    "winner": "James Guzzio",
    "winner_school": "Maryland",
    "loser": "Adam Mickiewicz",
    "loser_school": "VMI",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 56,
    "winner": "Frank Laccone",
    "winner_school": "Purdue",
    "loser": "Jason Nase",
    "loser_school": "Rider",
    "result": "Fall 3:49"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 57,
    "winner": "Khalil Abdul-Malik",
    "winner_school": "North Carolina",
    "loser": "Ron Emery",
    "loser_school": "Missouri",
    "result": "Fall 2:27"
  },
  {
    "round": "ChampR1",
    "weight": "134",
    "bout": 58,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Jed Kramer",
    "loser_school": "Michigan State",
    "result": "Dec 10-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 213,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Ed Schillig",
    "loser_school": "Ohio",
    "result": "Fall 4:27"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 214,
    "winner": "Yero Washington",
    "winner_school": "Fresno State",
    "loser": "Jimmy Aguirre",
    "loser_school": "Stanford",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 215,
    "winner": "Steve St. John",
    "winner_school": "Arizona State",
    "loser": "Tony Pariano",
    "loser_school": "Northwestern",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 216,
    "winner": "Brian Singleton",
    "winner_school": "Kent State",
    "loser": "Biff Walizer",
    "loser_school": "Penn State",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 217,
    "winner": "Cary Kolat",
    "winner_school": "Lock Haven",
    "loser": "Trevor Elliott",
    "loser_school": "Indiana",
    "result": "MD 12-1"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 218,
    "winner": "Carl Keske",
    "winner_school": "Cornell",
    "loser": "Oscar Wood",
    "loser_school": "Oregon State",
    "result": "MD 15-7"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 219,
    "winner": "Frank Laccone",
    "winner_school": "Purdue",
    "loser": "James Guzzio",
    "loser_school": "Maryland",
    "result": "Dec 7-5"
  },
  {
    "round": "ChampR2",
    "weight": "134",
    "bout": 220,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Khalil Abdul-Malik",
    "loser_school": "North Carolina",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 221,
    "winner": "Jed Kramer",
    "winner_school": "Michigan State",
    "loser": "Ron Emery",
    "loser_school": "Missouri",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 222,
    "winner": "Jason Nase",
    "winner_school": "Rider",
    "loser": "Adam Mickiewicz",
    "loser_school": "VMI",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 223,
    "winner": "Ryan Nunamaker",
    "winner_school": "NC State",
    "loser": "Doug Batey",
    "loser_school": "James Madison",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 224,
    "winner": "Mike Mendoza",
    "winner_school": "CSU Bakersfield",
    "loser": "Mark Piotrowsky",
    "loser_school": "Penn",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 225,
    "winner": "Tony DeAnda",
    "winner_school": "Nebraska",
    "loser": "Mike Buccigrossi",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-7"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 226,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Joel Friedman",
    "loser_school": "Harvard",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 227,
    "winner": "Emilio Nardone",
    "winner_school": "Seton Hall",
    "loser": "Mark Beebe",
    "loser_school": "Wisconsin",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "134",
    "bout": 228,
    "winner": "Jeremy Ensrud",
    "winner_school": "Oregon",
    "loser": "Jason Solomon",
    "loser_school": "Northern Illinois",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 357,
    "winner": "Tony Pariano",
    "winner_school": "Northwestern",
    "loser": "Jed Kramer",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 358,
    "winner": "Biff Walizer",
    "winner_school": "Penn State",
    "loser": "Jason Nase",
    "loser_school": "Rider",
    "result": "Fall 3:36"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 359,
    "winner": "Ed Schillig",
    "winner_school": "Ohio",
    "loser": "Ryan Nunamaker",
    "loser_school": "NC State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 360,
    "winner": "Jimmy Aguirre",
    "winner_school": "Stanford",
    "loser": "Mike Mendoza",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 361,
    "winner": "Tony DeAnda",
    "winner_school": "Nebraska",
    "loser": "James Guzzio",
    "loser_school": "Maryland",
    "result": "Fall 3:45"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 362,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Khalil Abdul-Malik",
    "loser_school": "North Carolina",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 363,
    "winner": "Emilio Nardone",
    "winner_school": "Seton Hall",
    "loser": "Trevor Elliott",
    "loser_school": "Indiana",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "134",
    "bout": 364,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Jeremy Ensrud",
    "loser_school": "Oregon",
    "result": "Fall 1:08"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 437,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Yero Washington",
    "loser_school": "Fresno State",
    "result": "Fall 4:55"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 438,
    "winner": "Steve St. John",
    "winner_school": "Arizona State",
    "loser": "Brian Singleton",
    "loser_school": "Kent State",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 439,
    "winner": "Cary Kolat",
    "winner_school": "Lock Haven",
    "loser": "Carl Keske",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "134",
    "bout": 440,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Frank Laccone",
    "loser_school": "Purdue",
    "result": "Dec 10-5 SV"
  },
  {
    "round": "ConsR3",
    "weight": "134",
    "bout": 441,
    "winner": "Tony Pariano",
    "winner_school": "Northwestern",
    "loser": "Biff Walizer",
    "loser_school": "Penn State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR3",
    "weight": "134",
    "bout": 442,
    "winner": "Jimmy Aguirre",
    "winner_school": "Stanford",
    "loser": "Ed Schillig",
    "loser_school": "Ohio",
    "result": "MD 14-1"
  },
  {
    "round": "ConsR3",
    "weight": "134",
    "bout": 443,
    "winner": "Whitey Chlebove",
    "winner_school": "West Virginia",
    "loser": "Tony DeAnda",
    "loser_school": "Nebraska",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR3",
    "weight": "134",
    "bout": 444,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Emilio Nardone",
    "loser_school": "Seton Hall",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR4",
    "weight": "134",
    "bout": 509,
    "winner": "Tony Pariano",
    "winner_school": "Northwestern",
    "loser": "Carl Keske",
    "loser_school": "Cornell",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR4",
    "weight": "134",
    "bout": 510,
    "winner": "Frank Laccone",
    "winner_school": "Purdue",
    "loser": "Jimmy Aguirre",
    "loser_school": "Stanford",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "134",
    "bout": 511,
    "winner": "Yero Washington",
    "winner_school": "Fresno State",
    "loser": "Whitey Chlebove",
    "loser_school": "West Virginia",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR4",
    "weight": "134",
    "bout": 512,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Brian Singleton",
    "loser_school": "Kent State",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 549,
    "winner": "Steve St. John",
    "winner_school": "Arizona State",
    "loser": "Mark Ironside",
    "loser_school": "Iowa",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "SemiFinals",
    "weight": "134",
    "bout": 550,
    "winner": "Cary Kolat",
    "winner_school": "Lock Haven",
    "loser": "Steven Schmidt",
    "loser_school": "Oklahoma State",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsQtr",
    "weight": "134",
    "bout": 551,
    "winner": "Tony Pariano",
    "winner_school": "Northwestern",
    "loser": "Frank Laccone",
    "loser_school": "Purdue",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "134",
    "bout": 552,
    "winner": "Yero Washington",
    "winner_school": "Fresno State",
    "loser": "Oscar Wood",
    "loser_school": "Oregon State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsSemi",
    "weight": "134",
    "bout": 585,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Tony Pariano",
    "loser_school": "Northwestern",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsSemi",
    "weight": "134",
    "bout": 586,
    "winner": "Steven Schmidt",
    "winner_school": "Oklahoma State",
    "loser": "Yero Washington",
    "loser_school": "Fresno State",
    "result": "MD 8-0"
  },
  {
    "round": "3rdPlace",
    "weight": "134",
    "bout": 607,
    "winner": "Mark Ironside",
    "winner_school": "Iowa",
    "loser": "Steven Schmidt",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "5thPlace",
    "weight": "134",
    "bout": 608,
    "winner": "Tony Pariano",
    "winner_school": "Northwestern",
    "loser": "Yero Washington",
    "loser_school": "Fresno State",
    "result": "Dec 6-4"
  },
  {
    "round": "7thPlace",
    "weight": "134",
    "bout": 609,
    "winner": "Oscar Wood",
    "winner_school": "Oregon State",
    "loser": "Frank Laccone",
    "loser_school": "Purdue",
    "result": "Fall 3:29"
  },
  {
    "round": "Finals",
    "weight": "134",
    "bout": 633,
    "winner": "Cary Kolat",
    "winner_school": "Lock Haven",
    "loser": "Steve St. John",
    "loser_school": "Arizona State",
    "result": "Dec 5-2"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 4,
    "winner": "Dusty Morris",
    "winner_school": "Nebraska",
    "loser": "Richard Murry",
    "loser_school": "Eastern Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 1004,
    "winner": "Jason Ramstetter",
    "winner_school": "CSU Bakersfield",
    "loser": "Brian Leitzel",
    "loser_school": "Lock Haven",
    "result": "Dec 7-4"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 2004,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Joe Stephens",
    "loser_school": "Northern Iowa",
    "result": "Fall 0:52"
  },
  {
    "round": "Prelims",
    "weight": "142",
    "bout": 3004,
    "winner": "Dorian Hager",
    "winner_school": "West Virginia",
    "loser": "Doug Bonshak",
    "loser_school": "Rider",
    "result": "Dec 8-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 59,
    "winner": "Jason Ramstetter",
    "winner_school": "CSU Bakersfield",
    "loser": "Pat Coyle",
    "loser_school": "James Madison",
    "result": "Dec 13-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 60,
    "winner": "Bill Zadick",
    "winner_school": "Iowa",
    "loser": "Jason Foresman",
    "loser_school": "VMI",
    "result": "TF 24-9 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 61,
    "winner": "Phil Judge",
    "winner_school": "Michigan State",
    "loser": "Dustin Young",
    "loser_school": "Boise State",
    "result": "Dec 13-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 62,
    "winner": "Dave Leonardis",
    "winner_school": "North Carolina",
    "loser": "Eric McKay",
    "loser_school": "Slippery Rock",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 63,
    "winner": "Dusty Morris",
    "winner_school": "Nebraska",
    "loser": "Bobby Bellamy",
    "loser_school": "Cal Poly",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 64,
    "winner": "Derek Mountsier",
    "winner_school": "Iowa State",
    "loser": "Darryl Christian",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 4:50"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 65,
    "winner": "Alex Coriano",
    "winner_school": "Purdue",
    "loser": "Brett Matter",
    "loser_school": "Penn",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 66,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "Troy Charney",
    "loser_school": "NC State",
    "result": "Dec 13-7"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 67,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Kyle Bentley",
    "loser_school": "Kent State",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 68,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Chris Ayres",
    "loser_school": "Lehigh",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 69,
    "winner": "Scott Reyna",
    "winner_school": "Oklahoma State",
    "loser": "Shane Mack",
    "loser_school": "Maryland",
    "result": "MD 21-10"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 70,
    "winner": "J.J. Fasnacht",
    "winner_school": "Pittsburgh",
    "loser": "Jeff Fazio",
    "loser_school": "Bucknell",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 71,
    "winner": "Dorian Hager",
    "winner_school": "West Virginia",
    "loser": "Joe Calhoun",
    "loser_school": "Ohio",
    "result": "Dec 11-8"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 72,
    "winner": "Tod Surmon",
    "winner_school": "Stanford",
    "loser": "Jon Vaughn",
    "loser_school": "Illinois",
    "result": "Fall 6:18"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 73,
    "winner": "Steve Feckanin",
    "winner_school": "Edinboro",
    "loser": "Brad Fenske",
    "loser_school": "Army",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "142",
    "bout": 74,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Gary Sanderson",
    "loser_school": "Brigham Young",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 174,
    "winner": "Jeff Fazio",
    "winner_school": "Bucknell",
    "loser": "Richard Murry",
    "loser_school": "Eastern Illinois",
    "result": "MD 13-3"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 1174,
    "winner": "Troy Charney",
    "winner_school": "NC State",
    "loser": "Joe Stephens",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 2174,
    "winner": "Doug Bonshak",
    "winner_school": "Rider",
    "loser": "Eric McKay",
    "loser_school": "Slippery Rock",
    "result": "Fall 0:26"
  },
  {
    "round": "ConsPrelims",
    "weight": "142",
    "bout": 3174,
    "winner": "Brian Leitzel",
    "winner_school": "Lock Haven",
    "loser": "Gary Sanderson",
    "loser_school": "Brigham Young",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 229,
    "winner": "Bill Zadick",
    "winner_school": "Iowa",
    "loser": "Jason Ramstetter",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 10-6"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 230,
    "winner": "Phil Judge",
    "winner_school": "Michigan State",
    "loser": "Dave Leonardis",
    "loser_school": "North Carolina",
    "result": "Dec 8-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 231,
    "winner": "Derek Mountsier",
    "winner_school": "Iowa State",
    "loser": "Dusty Morris",
    "loser_school": "Nebraska",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 232,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "Alex Coriano",
    "loser_school": "Purdue",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 233,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Casey Cunningham",
    "loser_school": "Central Michigan",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 234,
    "winner": "Scott Reyna",
    "winner_school": "Oklahoma State",
    "loser": "J.J. Fasnacht",
    "loser_school": "Pittsburgh",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 235,
    "winner": "Tod Surmon",
    "winner_school": "Stanford",
    "loser": "Dorian Hager",
    "loser_school": "West Virginia",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR2",
    "weight": "142",
    "bout": 236,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Steve Feckanin",
    "loser_school": "Edinboro",
    "result": "Dec 1-1 TB"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 237,
    "winner": "Brad Fenske",
    "winner_school": "Army",
    "loser": "Brian Leitzel",
    "loser_school": "Lock Haven",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 238,
    "winner": "Jon Vaughn",
    "winner_school": "Illinois",
    "loser": "Joe Calhoun",
    "loser_school": "Ohio",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 239,
    "winner": "Shane Mack",
    "winner_school": "Maryland",
    "loser": "Jeff Fazio",
    "loser_school": "Bucknell",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 240,
    "winner": "Kyle Bentley",
    "winner_school": "Kent State",
    "loser": "Chris Ayres",
    "loser_school": "Lehigh",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 241,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "Troy Charney",
    "loser_school": "NC State",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 242,
    "winner": "Darryl Christian",
    "winner_school": "Cal State Fullerton",
    "loser": "Bobby Bellamy",
    "loser_school": "Cal Poly",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 243,
    "winner": "Dustin Young",
    "winner_school": "Boise State",
    "loser": "Doug Bonshak",
    "loser_school": "Rider",
    "result": "MD 10-2"
  },
  {
    "round": "ConsR1",
    "weight": "142",
    "bout": 244,
    "winner": "Jason Foresman",
    "winner_school": "VMI",
    "loser": "Pat Coyle",
    "loser_school": "James Madison",
    "result": "MD 13-1"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 365,
    "winner": "Brad Fenske",
    "winner_school": "Army",
    "loser": "Dusty Morris",
    "loser_school": "Nebraska",
    "result": "Fall 5:51"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 366,
    "winner": "Jon Vaughn",
    "winner_school": "Illinois",
    "loser": "Alex Coriano",
    "loser_school": "Purdue",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 367,
    "winner": "Jason Ramstetter",
    "winner_school": "CSU Bakersfield",
    "loser": "Shane Mack",
    "loser_school": "Maryland",
    "result": "Fall 5:24"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 368,
    "winner": "Dave Leonardis",
    "winner_school": "North Carolina",
    "loser": "Kyle Bentley",
    "loser_school": "Kent State",
    "result": "Dec 7-0"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 369,
    "winner": "Brett Matter",
    "winner_school": "Penn",
    "loser": "Dorian Hager",
    "loser_school": "West Virginia",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 370,
    "winner": "Steve Feckanin",
    "winner_school": "Edinboro",
    "loser": "Darryl Christian",
    "loser_school": "Cal State Fullerton",
    "result": "Fall 6:19 SV"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 371,
    "winner": "Casey Cunningham",
    "winner_school": "Central Michigan",
    "loser": "Dustin Young",
    "loser_school": "Boise State",
    "result": "Fall 3:13"
  },
  {
    "round": "ConsR2",
    "weight": "142",
    "bout": 372,
    "winner": "J.J. Fasnacht",
    "winner_school": "Pittsburgh",
    "loser": "Jason Foresman",
    "loser_school": "VMI",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 445,
    "winner": "Bill Zadick",
    "winner_school": "Iowa",
    "loser": "Phil Judge",
    "loser_school": "Michigan State",
    "result": "MD 18-8"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 446,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "Derek Mountsier",
    "loser_school": "Iowa State",
    "result": "Dec 10-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 447,
    "winner": "Scott Reyna",
    "winner_school": "Oklahoma State",
    "loser": "Roger Chandler",
    "loser_school": "Indiana",
    "result": "Dec 7-5"
  },
  {
    "round": "QuarterFinals",
    "weight": "142",
    "bout": 448,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Tod Surmon",
    "loser_school": "Stanford",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR3",
    "weight": "142",
    "bout": 449,
    "winner": "Jon Vaughn",
    "winner_school": "Illinois",
    "loser": "Brad Fenske",
    "loser_school": "Army",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "142",
    "bout": 450,
    "winner": "Jason Ramstetter",
    "winner_school": "CSU Bakersfield",
    "loser": "Dave Leonardis",
    "loser_school": "North Carolina",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR3",
    "weight": "142",
    "bout": 451,
    "winner": "Steve Feckanin",
    "winner_school": "Edinboro",
    "loser": "Brett Matter",
    "loser_school": "Penn",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "142",
    "bout": 452,
    "winner": "J.J. Fasnacht",
    "winner_school": "Pittsburgh",
    "loser": "Casey Cunningham",
    "loser_school": "Central Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR4",
    "weight": "142",
    "bout": 513,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Jon Vaughn",
    "loser_school": "Illinois",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR4",
    "weight": "142",
    "bout": 514,
    "winner": "Tod Surmon",
    "winner_school": "Stanford",
    "loser": "Jason Ramstetter",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR4",
    "weight": "142",
    "bout": 515,
    "winner": "Phil Judge",
    "winner_school": "Michigan State",
    "loser": "Steve Feckanin",
    "loser_school": "Edinboro",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "142",
    "bout": 516,
    "winner": "Derek Mountsier",
    "winner_school": "Iowa State",
    "loser": "J.J. Fasnacht",
    "loser_school": "Pittsburgh",
    "result": "Dec 5-4"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 553,
    "winner": "Bill Zadick",
    "winner_school": "Iowa",
    "loser": "Jason Davids",
    "loser_school": "Minnesota",
    "result": "Dec 7-3"
  },
  {
    "round": "SemiFinals",
    "weight": "142",
    "bout": 554,
    "winner": "John Hughes",
    "winner_school": "Penn State",
    "loser": "Scott Reyna",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "142",
    "bout": 555,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Tod Surmon",
    "loser_school": "Stanford",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsQtr",
    "weight": "142",
    "bout": 556,
    "winner": "Derek Mountsier",
    "winner_school": "Iowa State",
    "loser": "Phil Judge",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "142",
    "bout": 587,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Jason Davids",
    "loser_school": "Minnesota",
    "result": "MD 14-3"
  },
  {
    "round": "ConsSemi",
    "weight": "142",
    "bout": 588,
    "winner": "Derek Mountsier",
    "winner_school": "Iowa State",
    "loser": "Scott Reyna",
    "loser_school": "Oklahoma State",
    "result": "Dec 6-3"
  },
  {
    "round": "3rdPlace",
    "weight": "142",
    "bout": 610,
    "winner": "Roger Chandler",
    "winner_school": "Indiana",
    "loser": "Derek Mountsier",
    "loser_school": "Iowa State",
    "result": "Dec 7-1"
  },
  {
    "round": "5thPlace",
    "weight": "142",
    "bout": 611,
    "winner": "Jason Davids",
    "winner_school": "Minnesota",
    "loser": "Scott Reyna",
    "loser_school": "Oklahoma State",
    "result": "Dec 7-4"
  },
  {
    "round": "7thPlace",
    "weight": "142",
    "bout": 612,
    "winner": "Tod Surmon",
    "winner_school": "Stanford",
    "loser": "Phil Judge",
    "loser_school": "Michigan State",
    "result": "MD 13-2"
  },
  {
    "round": "Finals",
    "weight": "142",
    "bout": 634,
    "winner": "Bill Zadick",
    "winner_school": "Iowa",
    "loser": "John Hughes",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 75,
    "winner": "Brent Shiver",
    "winner_school": "Northwestern",
    "loser": "Scott Frinzi",
    "loser_school": "Duke",
    "result": "MD 18-7"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 76,
    "winner": "Russ Hughes",
    "winner_school": "Penn State",
    "loser": "Brian Sashko",
    "loser_school": "Cleveland State",
    "result": "MD 14-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 77,
    "winner": "Bill Lacure",
    "winner_school": "Michigan",
    "loser": "Jim Harshaw",
    "loser_school": "Virginia",
    "result": "MD 12-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 78,
    "winner": "Ramico Blackman",
    "winner_school": "Eastern Michigan",
    "loser": "Dave Leonardo",
    "loser_school": "Boston University",
    "result": "MD 16-2"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 79,
    "winner": "Mike Rogers",
    "winner_school": "Lock Haven",
    "loser": "Dan Zirbel",
    "loser_school": "Marquette",
    "result": "Fall 2:05"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 80,
    "winner": "Mike Mason",
    "winner_school": "West Virginia",
    "loser": "Carl Sharamitaro",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 81,
    "winner": "Charlie Becks",
    "winner_school": "Ohio State",
    "loser": "Mark Samples",
    "loser_school": "Edinboro",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 82,
    "winner": "Reese Edgington",
    "winner_school": "VMI",
    "loser": "Chris Bahr",
    "loser_school": "Northern Iowa",
    "result": "Dec 6-5"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 83,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Mike Uker",
    "loser_school": "Iowa",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 84,
    "winner": "Brent Voorhees",
    "winner_school": "Wyoming",
    "loser": "Kirk Stehman",
    "loser_school": "NC State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 85,
    "winner": "Mike Francesca",
    "winner_school": "Brown",
    "loser": "Matt Rampetsreiter",
    "loser_school": "George Mason",
    "result": "Fall 7:42 SV"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 86,
    "winner": "Biff Jones",
    "winner_school": "Oklahoma",
    "loser": "Tony DeSouza",
    "loser_school": "CSU Bakersfield",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 87,
    "winner": "Eric Siebert",
    "winner_school": "Illinois",
    "loser": "Fred Rodriguez",
    "loser_school": "Georgia State",
    "result": "Fall 4:18"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 88,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Jimmy Arias",
    "loser_school": "Oklahoma State",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "150",
    "bout": 89,
    "winner": "Mike Garcia",
    "winner_school": "Bucknell",
    "loser": "Greg Casino",
    "loser_school": "Syracuse",
    "result": "Dec 15-8"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 245,
    "winner": "Russ Hughes",
    "winner_school": "Penn State",
    "loser": "Brent Shiver",
    "loser_school": "Northwestern",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 246,
    "winner": "Bill Lacure",
    "winner_school": "Michigan",
    "loser": "Ramico Blackman",
    "loser_school": "Eastern Michigan",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 247,
    "winner": "Mike Mason",
    "winner_school": "West Virginia",
    "loser": "Mike Rogers",
    "loser_school": "Lock Haven",
    "result": "Dec 9-7"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 248,
    "winner": "Charlie Becks",
    "winner_school": "Ohio State",
    "loser": "Reese Edgington",
    "loser_school": "VMI",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 249,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Brent Voorhees",
    "loser_school": "Wyoming",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 250,
    "winner": "Biff Jones",
    "winner_school": "Oklahoma",
    "loser": "Mike Francesca",
    "loser_school": "Brown",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 251,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Eric Siebert",
    "loser_school": "Illinois",
    "result": "Dec 3-1 TB"
  },
  {
    "round": "ChampR2",
    "weight": "150",
    "bout": 252,
    "winner": "Mike Garcia",
    "winner_school": "Bucknell",
    "loser": "Scott Norton",
    "loser_school": "Oregon",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 254,
    "winner": "Fred Rodriguez",
    "winner_school": "Georgia State",
    "loser": "Jimmy Arias",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 255,
    "winner": "Tony DeSouza",
    "winner_school": "CSU Bakersfield",
    "loser": "Matt Rampetsreiter",
    "loser_school": "George Mason",
    "result": "MD 8-0"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 256,
    "winner": "Mike Uker",
    "winner_school": "Iowa",
    "loser": "Kirk Stehman",
    "loser_school": "NC State",
    "result": "Dec 8-6"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 257,
    "winner": "Mark Samples",
    "winner_school": "Edinboro",
    "loser": "Chris Bahr",
    "loser_school": "Northern Iowa",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 258,
    "winner": "Carl Sharamitaro",
    "winner_school": "Cal State Fullerton",
    "loser": "Dan Zirbel",
    "loser_school": "Marquette",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 259,
    "winner": "Dave Leonardo",
    "winner_school": "Boston University",
    "loser": "Jim Harshaw",
    "loser_school": "Virginia",
    "result": "Dec 10-9"
  },
  {
    "round": "ConsR1",
    "weight": "150",
    "bout": 260,
    "winner": "Scott Frinzi",
    "winner_school": "Duke",
    "loser": "Brian Sashko",
    "loser_school": "Cleveland State",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 373,
    "winner": "Mike Rogers",
    "winner_school": "Lock Haven",
    "loser": "Greg Casino",
    "loser_school": "Syracuse",
    "result": "Fall 4:17"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 374,
    "winner": "Fred Rodriguez",
    "winner_school": "Georgia State",
    "loser": "Reese Edgington",
    "loser_school": "VMI",
    "result": "MD 11-3"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 375,
    "winner": "Brent Shiver",
    "winner_school": "Northwestern",
    "loser": "Tony DeSouza",
    "loser_school": "CSU Bakersfield",
    "result": "MD 20-6"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 376,
    "winner": "Mike Uker",
    "winner_school": "Iowa",
    "loser": "Ramico Blackman",
    "loser_school": "Eastern Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 377,
    "winner": "Mark Samples",
    "winner_school": "Edinboro",
    "loser": "Eric Siebert",
    "loser_school": "Illinois",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 378,
    "winner": "Scott Norton",
    "winner_school": "Oregon",
    "loser": "Carl Sharamitaro",
    "loser_school": "Cal State Fullerton",
    "result": "Dec 5-0"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 379,
    "winner": "Brent Voorhees",
    "winner_school": "Wyoming",
    "loser": "Dave Leonardo",
    "loser_school": "Boston University",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "150",
    "bout": 380,
    "winner": "Mike Francesca",
    "winner_school": "Brown",
    "loser": "Scott Frinzi",
    "loser_school": "Duke",
    "result": "Dec 13-6"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 453,
    "winner": "Bill Lacure",
    "winner_school": "Michigan",
    "loser": "Russ Hughes",
    "loser_school": "Penn State",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 454,
    "winner": "Charlie Becks",
    "winner_school": "Ohio State",
    "loser": "Mike Mason",
    "loser_school": "West Virginia",
    "result": "Dec 7-1"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 455,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Biff Jones",
    "loser_school": "Oklahoma",
    "result": "Dec 7-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "150",
    "bout": 456,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Mike Garcia",
    "loser_school": "Bucknell",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "150",
    "bout": 457,
    "winner": "Mike Rogers",
    "winner_school": "Lock Haven",
    "loser": "Fred Rodriguez",
    "loser_school": "Georgia State",
    "result": "Fall 2:24"
  },
  {
    "round": "ConsR3",
    "weight": "150",
    "bout": 458,
    "winner": "Mike Uker",
    "winner_school": "Iowa",
    "loser": "Brent Shiver",
    "loser_school": "Northwestern",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "150",
    "bout": 459,
    "winner": "Scott Norton",
    "winner_school": "Oregon",
    "loser": "Mark Samples",
    "loser_school": "Edinboro",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR3",
    "weight": "150",
    "bout": 460,
    "winner": "Brent Voorhees",
    "winner_school": "Wyoming",
    "loser": "Mike Francesca",
    "loser_school": "Brown",
    "result": "MD 9-1"
  },
  {
    "round": "ConsR4",
    "weight": "150",
    "bout": 517,
    "winner": "Mike Rogers",
    "winner_school": "Lock Haven",
    "loser": "Biff Jones",
    "loser_school": "Oklahoma",
    "result": "MD 13-3"
  },
  {
    "round": "ConsR4",
    "weight": "150",
    "bout": 518,
    "winner": "Mike Uker",
    "winner_school": "Iowa",
    "loser": "Mike Garcia",
    "loser_school": "Bucknell",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR4",
    "weight": "150",
    "bout": 519,
    "winner": "Russ Hughes",
    "winner_school": "Penn State",
    "loser": "Scott Norton",
    "loser_school": "Oregon",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "150",
    "bout": 520,
    "winner": "Brent Voorhees",
    "winner_school": "Wyoming",
    "loser": "Mike Mason",
    "loser_school": "West Virginia",
    "result": "Fall 5:57"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 557,
    "winner": "Charlie Becks",
    "winner_school": "Ohio State",
    "loser": "Bill Lacure",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "SemiFinals",
    "weight": "150",
    "bout": 558,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Chad Kraft",
    "loser_school": "Minnesota",
    "result": "MD 8-0"
  },
  {
    "round": "ConsQtr",
    "weight": "150",
    "bout": 559,
    "winner": "Mike Rogers",
    "winner_school": "Lock Haven",
    "loser": "Mike Uker",
    "loser_school": "Iowa",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsQtr",
    "weight": "150",
    "bout": 560,
    "winner": "Russ Hughes",
    "winner_school": "Penn State",
    "loser": "Brent Voorhees",
    "loser_school": "Wyoming",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsSemi",
    "weight": "150",
    "bout": 589,
    "winner": "Bill Lacure",
    "winner_school": "Michigan",
    "loser": "Mike Rogers",
    "loser_school": "Lock Haven",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsSemi",
    "weight": "150",
    "bout": 590,
    "winner": "Russ Hughes",
    "winner_school": "Penn State",
    "loser": "Chad Kraft",
    "loser_school": "Minnesota",
    "result": "Dec 8-2"
  },
  {
    "round": "3rdPlace",
    "weight": "150",
    "bout": 613,
    "winner": "Russ Hughes",
    "winner_school": "Penn State",
    "loser": "Bill Lacure",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "150",
    "bout": 614,
    "winner": "Chad Kraft",
    "winner_school": "Minnesota",
    "loser": "Mike Rogers",
    "loser_school": "Lock Haven",
    "result": "Dec 4-1"
  },
  {
    "round": "7thPlace",
    "weight": "150",
    "bout": 615,
    "winner": "Brent Voorhees",
    "winner_school": "Wyoming",
    "loser": "Mike Uker",
    "loser_school": "Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "Finals",
    "weight": "150",
    "bout": 635,
    "winner": "Chris Bono",
    "winner_school": "Iowa State",
    "loser": "Charlie Becks",
    "loser_school": "Ohio State",
    "result": "Dec 6-3"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 6,
    "winner": "Mickey Ritter",
    "winner_school": "CSU Bakersfield",
    "loser": "Todd Sacksteder",
    "loser_school": "Missouri",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 1006,
    "winner": "Brooke Hoerr",
    "winner_school": "Indiana",
    "loser": "Tom O'Neill",
    "loser_school": "Columbia",
    "result": "MD 16-7"
  },
  {
    "round": "Prelims",
    "weight": "158",
    "bout": 2006,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Scott Surplus",
    "loser_school": "Boise State",
    "result": "Fall 4:03"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 91,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Mike Kwapniewski",
    "loser_school": "Rutgers",
    "result": "TF 21-6 6:52"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 92,
    "winner": "Jason Pratt",
    "winner_school": "Cal Poly",
    "loser": "Dan Kjeldgaard",
    "loser_school": "Northern Iowa",
    "result": "Fall 5:32"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 93,
    "winner": "Matt Hughes",
    "winner_school": "Eastern Illinois",
    "loser": "Babak Alimoradian",
    "loser_school": "Boston University",
    "result": "Fall 2:45"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 94,
    "winner": "Matt Suter",
    "winner_school": "Arizona State",
    "loser": "Kevin Welsh",
    "loser_school": "Edinboro",
    "result": "Dec 6-1"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 95,
    "winner": "Brandon Alderman",
    "winner_school": "Wyoming",
    "loser": "Brooke Hoerr",
    "loser_school": "Indiana",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 96,
    "winner": "Mark Bybee",
    "winner_school": "Northwestern",
    "loser": "Sahlan Martin",
    "loser_school": "Stanford",
    "result": "Dec 8-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 97,
    "winner": "Eric Smith",
    "winner_school": "Ohio State",
    "loser": "Patrick Flynn",
    "loser_school": "Maryland",
    "result": "Dec 7-6"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 98,
    "winner": "Alfonzo Tucker",
    "winner_school": "Fresno State",
    "loser": "Evan Dolan",
    "loser_school": "Rider",
    "result": "Dec 9-5"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 99,
    "winner": "Mickey Ritter",
    "winner_school": "CSU Bakersfield",
    "loser": "Jake Shulaw",
    "loser_school": "Eastern Michigan",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 100,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "David Cote",
    "loser_school": "Millersville",
    "result": "MD 23-9"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 101,
    "winner": "Ken Porter",
    "winner_school": "Clarion",
    "loser": "Mike Chase",
    "loser_school": "North Carolina",
    "result": "Fall 4:28"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 102,
    "winner": "Hardell Moore",
    "winner_school": "Oklahoma State",
    "loser": "Ed Mosley",
    "loser_school": "Harvard",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 103,
    "winner": "Ernest Benion",
    "winner_school": "Illinois",
    "loser": "Joe Stanton",
    "loser_school": "UNC Greensboro",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 104,
    "winner": "Jacob Schaus",
    "winner_school": "Pittsburgh",
    "loser": "Byron Tucker",
    "loser_school": "Oklahoma",
    "result": "Dec 12-7"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 105,
    "winner": "Jeff Catrabone",
    "winner_school": "Michigan",
    "loser": "Jason Frable",
    "loser_school": "West Virginia",
    "result": "Dec 5-4"
  },
  {
    "round": "ChampR1",
    "weight": "158",
    "bout": 106,
    "winner": "John Lange",
    "winner_school": "Penn State",
    "loser": "Derek Strobel",
    "loser_school": "Appalachian State",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 176,
    "winner": "Todd Sacksteder",
    "winner_school": "Missouri",
    "loser": "Evan Dolan",
    "loser_school": "Rider",
    "result": "MD 11-2"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 1176,
    "winner": "Scott Surplus",
    "winner_school": "Boise State",
    "loser": "Derek Strobel",
    "loser_school": "Appalachian State",
    "result": "Fall 0:40"
  },
  {
    "round": "ConsPrelims",
    "weight": "158",
    "bout": 2176,
    "winner": "Ed Mosley",
    "winner_school": "Harvard",
    "loser": "Tom O'Neill",
    "loser_school": "Columbia",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 261,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Jason Pratt",
    "loser_school": "Cal Poly",
    "result": "MD 15-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 262,
    "winner": "Matt Hughes",
    "winner_school": "Eastern Illinois",
    "loser": "Matt Suter",
    "loser_school": "Arizona State",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 263,
    "winner": "Brandon Alderman",
    "winner_school": "Wyoming",
    "loser": "Mark Bybee",
    "loser_school": "Northwestern",
    "result": "Dec 9-4"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 264,
    "winner": "Eric Smith",
    "winner_school": "Ohio State",
    "loser": "Alfonzo Tucker",
    "loser_school": "Fresno State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 265,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Mickey Ritter",
    "loser_school": "CSU Bakersfield",
    "result": "MD 12-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 266,
    "winner": "Hardell Moore",
    "winner_school": "Oklahoma State",
    "loser": "Ken Porter",
    "loser_school": "Clarion",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 267,
    "winner": "Ernest Benion",
    "winner_school": "Illinois",
    "loser": "Jacob Schaus",
    "loser_school": "Pittsburgh",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR2",
    "weight": "158",
    "bout": 268,
    "winner": "Jeff Catrabone",
    "winner_school": "Michigan",
    "loser": "John Lange",
    "loser_school": "Penn State",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 269,
    "winner": "Jason Frable",
    "winner_school": "West Virginia",
    "loser": "Scott Surplus",
    "loser_school": "Boise State",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 270,
    "winner": "Byron Tucker",
    "winner_school": "Oklahoma",
    "loser": "Joe Stanton",
    "loser_school": "UNC Greensboro",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 271,
    "winner": "Mike Chase",
    "winner_school": "North Carolina",
    "loser": "Ed Mosley",
    "loser_school": "Harvard",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 272,
    "winner": "Jake Shulaw",
    "winner_school": "Eastern Michigan",
    "loser": "David Cote",
    "loser_school": "Millersville",
    "result": "MD 12-2"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 273,
    "winner": "Patrick Flynn",
    "winner_school": "Maryland",
    "loser": "Todd Sacksteder",
    "loser_school": "Missouri",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 274,
    "winner": "Brooke Hoerr",
    "winner_school": "Indiana",
    "loser": "Sahlan Martin",
    "loser_school": "Stanford",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 275,
    "winner": "Babak Alimoradian",
    "winner_school": "Boston University",
    "loser": "Kevin Welsh",
    "loser_school": "Edinboro",
    "result": "Dec 12-5"
  },
  {
    "round": "ConsR1",
    "weight": "158",
    "bout": 276,
    "winner": "Mike Kwapniewski",
    "winner_school": "Rutgers",
    "loser": "Dan Kjeldgaard",
    "loser_school": "Northern Iowa",
    "result": "MD 13-2"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 381,
    "winner": "Jason Frable",
    "winner_school": "West Virginia",
    "loser": "Mark Bybee",
    "loser_school": "Northwestern",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 382,
    "winner": "Alfonzo Tucker",
    "winner_school": "Fresno State",
    "loser": "Byron Tucker",
    "loser_school": "Oklahoma",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 383,
    "winner": "Mike Chase",
    "winner_school": "North Carolina",
    "loser": "Jason Pratt",
    "loser_school": "Cal Poly",
    "result": "Fall 2:11"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 384,
    "winner": "Matt Suter",
    "winner_school": "Arizona State",
    "loser": "Jake Shulaw",
    "loser_school": "Eastern Michigan",
    "result": "TF 16-1 4:50"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 385,
    "winner": "Patrick Flynn",
    "winner_school": "Maryland",
    "loser": "Jacob Schaus",
    "loser_school": "Pittsburgh",
    "result": "Dec 6-5"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 386,
    "winner": "Brooke Hoerr",
    "winner_school": "Indiana",
    "loser": "John Lange",
    "loser_school": "Penn State",
    "result": "Dec 10-8"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 387,
    "winner": "Babak Alimoradian",
    "winner_school": "Boston University",
    "loser": "Mickey Ritter",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 11-8"
  },
  {
    "round": "ConsR2",
    "weight": "158",
    "bout": 388,
    "winner": "Ken Porter",
    "winner_school": "Clarion",
    "loser": "Mike Kwapniewski",
    "loser_school": "Rutgers",
    "result": "Dec 8-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 461,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Matt Hughes",
    "loser_school": "Eastern Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 462,
    "winner": "Eric Smith",
    "winner_school": "Ohio State",
    "loser": "Brandon Alderman",
    "loser_school": "Wyoming",
    "result": "Dec 5-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 463,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Hardell Moore",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "QuarterFinals",
    "weight": "158",
    "bout": 464,
    "winner": "Ernest Benion",
    "winner_school": "Illinois",
    "loser": "Jeff Catrabone",
    "loser_school": "Michigan",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR3",
    "weight": "158",
    "bout": 465,
    "winner": "Alfonzo Tucker",
    "winner_school": "Fresno State",
    "loser": "Jason Frable",
    "loser_school": "West Virginia",
    "result": "Dec 5-4 TB"
  },
  {
    "round": "ConsR3",
    "weight": "158",
    "bout": 466,
    "winner": "Matt Suter",
    "winner_school": "Arizona State",
    "loser": "Mike Chase",
    "loser_school": "North Carolina",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR3",
    "weight": "158",
    "bout": 467,
    "winner": "Patrick Flynn",
    "winner_school": "Maryland",
    "loser": "Brooke Hoerr",
    "loser_school": "Indiana",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR3",
    "weight": "158",
    "bout": 468,
    "winner": "Babak Alimoradian",
    "winner_school": "Boston University",
    "loser": "Ken Porter",
    "loser_school": "Clarion",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR4",
    "weight": "158",
    "bout": 521,
    "winner": "Alfonzo Tucker",
    "winner_school": "Fresno State",
    "loser": "Hardell Moore",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR4",
    "weight": "158",
    "bout": 522,
    "winner": "Jeff Catrabone",
    "winner_school": "Michigan",
    "loser": "Matt Suter",
    "loser_school": "Arizona State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "158",
    "bout": 523,
    "winner": "Matt Hughes",
    "winner_school": "Eastern Illinois",
    "loser": "Patrick Flynn",
    "loser_school": "Maryland",
    "result": "Dec 9-4"
  },
  {
    "round": "ConsR4",
    "weight": "158",
    "bout": 524,
    "winner": "Brandon Alderman",
    "winner_school": "Wyoming",
    "loser": "Babak Alimoradian",
    "loser_school": "Boston University",
    "result": "Dec 7-5"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 561,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Eric Smith",
    "loser_school": "Ohio State",
    "result": "Dec 2-1"
  },
  {
    "round": "SemiFinals",
    "weight": "158",
    "bout": 562,
    "winner": "Ernest Benion",
    "winner_school": "Illinois",
    "loser": "Temoer Terry",
    "loser_school": "Nebraska",
    "result": "DEF"
  },
  {
    "round": "ConsQtr",
    "weight": "158",
    "bout": 563,
    "winner": "Alfonzo Tucker",
    "winner_school": "Fresno State",
    "loser": "Jeff Catrabone",
    "loser_school": "Michigan",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsQtr",
    "weight": "158",
    "bout": 564,
    "winner": "Brandon Alderman",
    "winner_school": "Wyoming",
    "loser": "Matt Hughes",
    "loser_school": "Eastern Illinois",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "158",
    "bout": 591,
    "winner": "Alfonzo Tucker",
    "winner_school": "Fresno State",
    "loser": "Eric Smith",
    "loser_school": "Ohio State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsSemi",
    "weight": "158",
    "bout": 592,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Brandon Alderman",
    "loser_school": "Wyoming",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "158",
    "bout": 616,
    "winner": "Temoer Terry",
    "winner_school": "Nebraska",
    "loser": "Alfonzo Tucker",
    "loser_school": "Fresno State",
    "result": "Dec 5-2"
  },
  {
    "round": "5thPlace",
    "weight": "158",
    "bout": 617,
    "winner": "Eric Smith",
    "winner_school": "Ohio State",
    "loser": "Brandon Alderman",
    "loser_school": "Wyoming",
    "result": "M FOR"
  },
  {
    "round": "7thPlace",
    "weight": "158",
    "bout": 618,
    "winner": "Jeff Catrabone",
    "winner_school": "Michigan",
    "loser": "Matt Hughes",
    "loser_school": "Eastern Illinois",
    "result": "Fall 3:21"
  },
  {
    "round": "Finals",
    "weight": "158",
    "bout": 636,
    "winner": "Joe Williams",
    "winner_school": "Iowa",
    "loser": "Ernest Benion",
    "loser_school": "Illinois",
    "result": "Dec 9-8"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 7,
    "winner": "Barry Weldon",
    "winner_school": "Iowa State",
    "loser": "Rob MacArthur",
    "loser_school": "Georgia State",
    "result": "Dec 4-2"
  },
  {
    "round": "Prelims",
    "weight": "167",
    "bout": 1007,
    "winner": "Brad Alderman",
    "winner_school": "Wyoming",
    "loser": "Kevin Wilmot",
    "loser_school": "Wisconsin",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 107,
    "winner": "Barry Weldon",
    "winner_school": "Iowa State",
    "loser": "Josh Bailer",
    "loser_school": "Penn",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 108,
    "winner": "Paul Antonio",
    "winner_school": "Clarion",
    "loser": "Nate Miklusak",
    "loser_school": "Eastern Michigan",
    "result": "MD 16-5"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 109,
    "winner": "Jason Wedgbury",
    "winner_school": "Northern Iowa",
    "loser": "Justin Brinkley",
    "loser_school": "Bloomsburg",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 110,
    "winner": "Markus Mollica",
    "winner_school": "Arizona State",
    "loser": "Cory Brechbill",
    "loser_school": "Lehigh",
    "result": "MD 21-9"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 111,
    "winner": "Jonny McCreary",
    "winner_school": "CSU Bakersfield",
    "loser": "Chad Liott",
    "loser_school": "Rider",
    "result": "Dec 10-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 112,
    "winner": "Chad Renner",
    "winner_school": "Oregon State",
    "loser": "Jason Hooker",
    "loser_school": "Appalachian State",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 113,
    "winner": "Scott Hage",
    "winner_school": "West Virginia",
    "loser": "Jason Streeter",
    "loser_school": "Fresno State",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 114,
    "winner": "Daryl Weber",
    "winner_school": "Iowa",
    "loser": "Bret Ruth",
    "loser_school": "American",
    "result": "MD 17-8"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 115,
    "winner": "Brad Alderman",
    "winner_school": "Wyoming",
    "loser": "Howie Miller",
    "loser_school": "Virginia",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 116,
    "winner": "Joel Morissette",
    "winner_school": "Michigan State",
    "loser": "Marcus Hutchins",
    "loser_school": "Buffalo",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 117,
    "winner": "Mark Branch",
    "winner_school": "Oklahoma State",
    "loser": "Mike Greenfield",
    "loser_school": "Central Michigan",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 118,
    "winner": "Frank Trigg",
    "winner_school": "Oklahoma",
    "loser": "Chad Dennis",
    "loser_school": "Chattanooga",
    "result": "Dec 11-6"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 119,
    "winner": "Mike Powell",
    "winner_school": "Indiana",
    "loser": "Justin Thaw",
    "loser_school": "Missouri",
    "result": "Dec 9-7 SV"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 120,
    "winner": "Charles Burton",
    "winner_school": "Boise State",
    "loser": "Ken Johnson",
    "loser_school": "NC State",
    "result": "TF 19-4 6:19"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 121,
    "winner": "Bryan Matusic",
    "winner_school": "Pittsburgh",
    "loser": "Will Knight",
    "loser_school": "Ohio State",
    "result": "Dec 11-10"
  },
  {
    "round": "ChampR1",
    "weight": "167",
    "bout": 122,
    "winner": "Gerald Carr",
    "winner_school": "Minnesota",
    "loser": "Chad Nelson",
    "loser_school": "Nebraska",
    "result": "Fall 2:32"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 177,
    "winner": "Chad Nelson",
    "winner_school": "Nebraska",
    "loser": "Rob MacArthur",
    "loser_school": "Georgia State",
    "result": "MD 15-6"
  },
  {
    "round": "ConsPrelims",
    "weight": "167",
    "bout": 1177,
    "winner": "Kevin Wilmot",
    "winner_school": "Wisconsin",
    "loser": "Bret Ruth",
    "loser_school": "American",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 277,
    "winner": "Paul Antonio",
    "winner_school": "Clarion",
    "loser": "Barry Weldon",
    "loser_school": "Iowa State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 278,
    "winner": "Markus Mollica",
    "winner_school": "Arizona State",
    "loser": "Jason Wedgbury",
    "loser_school": "Northern Iowa",
    "result": "Dec 9-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 279,
    "winner": "Chad Renner",
    "winner_school": "Oregon State",
    "loser": "Jonny McCreary",
    "loser_school": "CSU Bakersfield",
    "result": "MD 24-12"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 280,
    "winner": "Daryl Weber",
    "winner_school": "Iowa",
    "loser": "Scott Hage",
    "loser_school": "West Virginia",
    "result": "Dec 12-6"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 281,
    "winner": "Brad Alderman",
    "winner_school": "Wyoming",
    "loser": "Joel Morissette",
    "loser_school": "Michigan State",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 282,
    "winner": "Mark Branch",
    "winner_school": "Oklahoma State",
    "loser": "Frank Trigg",
    "loser_school": "Oklahoma",
    "result": "MD 13-5"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 283,
    "winner": "Charles Burton",
    "winner_school": "Boise State",
    "loser": "Mike Powell",
    "loser_school": "Indiana",
    "result": "Dec 6-2"
  },
  {
    "round": "ChampR2",
    "weight": "167",
    "bout": 284,
    "winner": "Gerald Carr",
    "winner_school": "Minnesota",
    "loser": "Bryan Matusic",
    "loser_school": "Pittsburgh",
    "result": "Dec 12-6"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 285,
    "winner": "Chad Nelson",
    "winner_school": "Nebraska",
    "loser": "Will Knight",
    "loser_school": "Ohio State",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 286,
    "winner": "Justin Thaw",
    "winner_school": "Missouri",
    "loser": "Ken Johnson",
    "loser_school": "NC State",
    "result": "MD 12-1"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 287,
    "winner": "Mike Greenfield",
    "winner_school": "Central Michigan",
    "loser": "Chad Dennis",
    "loser_school": "Chattanooga",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 288,
    "winner": "Marcus Hutchins",
    "winner_school": "Buffalo",
    "loser": "Howie Miller",
    "loser_school": "Virginia",
    "result": "Dec 7-6"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 289,
    "winner": "Jason Streeter",
    "winner_school": "Fresno State",
    "loser": "Kevin Wilmot",
    "loser_school": "Wisconsin",
    "result": "Dec 10-6"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 290,
    "winner": "Chad Liott",
    "winner_school": "Rider",
    "loser": "Jason Hooker",
    "loser_school": "Appalachian State",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 291,
    "winner": "Justin Brinkley",
    "winner_school": "Bloomsburg",
    "loser": "Cory Brechbill",
    "loser_school": "Lehigh",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR1",
    "weight": "167",
    "bout": 292,
    "winner": "Josh Bailer",
    "winner_school": "Penn",
    "loser": "Nate Miklusak",
    "loser_school": "Eastern Michigan",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 389,
    "winner": "Chad Nelson",
    "winner_school": "Nebraska",
    "loser": "Jonny McCreary",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 390,
    "winner": "Scott Hage",
    "winner_school": "West Virginia",
    "loser": "Justin Thaw",
    "loser_school": "Missouri",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 391,
    "winner": "Barry Weldon",
    "winner_school": "Iowa State",
    "loser": "Mike Greenfield",
    "loser_school": "Central Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 392,
    "winner": "Jason Wedgbury",
    "winner_school": "Northern Iowa",
    "loser": "Marcus Hutchins",
    "loser_school": "Buffalo",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 393,
    "winner": "Mike Powell",
    "winner_school": "Indiana",
    "loser": "Jason Streeter",
    "loser_school": "Fresno State",
    "result": "DQ"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 394,
    "winner": "Bryan Matusic",
    "winner_school": "Pittsburgh",
    "loser": "Chad Liott",
    "loser_school": "Rider",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 395,
    "winner": "Joel Morissette",
    "winner_school": "Michigan State",
    "loser": "Justin Brinkley",
    "loser_school": "Bloomsburg",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR2",
    "weight": "167",
    "bout": 396,
    "winner": "Frank Trigg",
    "winner_school": "Oklahoma",
    "loser": "Josh Bailer",
    "loser_school": "Penn",
    "result": "Dec 7-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 469,
    "winner": "Markus Mollica",
    "winner_school": "Arizona State",
    "loser": "Paul Antonio",
    "loser_school": "Clarion",
    "result": "Dec 11-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 470,
    "winner": "Daryl Weber",
    "winner_school": "Iowa",
    "loser": "Chad Renner",
    "loser_school": "Oregon State",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 471,
    "winner": "Mark Branch",
    "winner_school": "Oklahoma State",
    "loser": "Brad Alderman",
    "loser_school": "Wyoming",
    "result": "MD 14-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "167",
    "bout": 472,
    "winner": "Charles Burton",
    "winner_school": "Boise State",
    "loser": "Gerald Carr",
    "loser_school": "Minnesota",
    "result": "Dec 11-9"
  },
  {
    "round": "ConsR3",
    "weight": "167",
    "bout": 473,
    "winner": "Chad Nelson",
    "winner_school": "Nebraska",
    "loser": "Scott Hage",
    "loser_school": "West Virginia",
    "result": "Dec 11-7"
  },
  {
    "round": "ConsR3",
    "weight": "167",
    "bout": 474,
    "winner": "Barry Weldon",
    "winner_school": "Iowa State",
    "loser": "Jason Wedgbury",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR3",
    "weight": "167",
    "bout": 475,
    "winner": "Mike Powell",
    "winner_school": "Indiana",
    "loser": "Bryan Matusic",
    "loser_school": "Pittsburgh",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR3",
    "weight": "167",
    "bout": 476,
    "winner": "Joel Morissette",
    "winner_school": "Michigan State",
    "loser": "Frank Trigg",
    "loser_school": "Oklahoma",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "167",
    "bout": 525,
    "winner": "Chad Nelson",
    "winner_school": "Nebraska",
    "loser": "Brad Alderman",
    "loser_school": "Wyoming",
    "result": "Dec 4-2 SV"
  },
  {
    "round": "ConsR4",
    "weight": "167",
    "bout": 526,
    "winner": "Barry Weldon",
    "winner_school": "Iowa State",
    "loser": "Gerald Carr",
    "loser_school": "Minnesota",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR4",
    "weight": "167",
    "bout": 527,
    "winner": "Mike Powell",
    "winner_school": "Indiana",
    "loser": "Paul Antonio",
    "loser_school": "Clarion",
    "result": "Dec 5-4"
  },
  {
    "round": "ConsR4",
    "weight": "167",
    "bout": 528,
    "winner": "Joel Morissette",
    "winner_school": "Michigan State",
    "loser": "Chad Renner",
    "loser_school": "Oregon State",
    "result": "M FOR"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 565,
    "winner": "Daryl Weber",
    "winner_school": "Iowa",
    "loser": "Markus Mollica",
    "loser_school": "Arizona State",
    "result": "Dec 6-4"
  },
  {
    "round": "SemiFinals",
    "weight": "167",
    "bout": 566,
    "winner": "Mark Branch",
    "winner_school": "Oklahoma State",
    "loser": "Charles Burton",
    "loser_school": "Boise State",
    "result": "MD 9-0"
  },
  {
    "round": "ConsQtr",
    "weight": "167",
    "bout": 567,
    "winner": "Barry Weldon",
    "winner_school": "Iowa State",
    "loser": "Chad Nelson",
    "loser_school": "Nebraska",
    "result": "Dec 6-1"
  },
  {
    "round": "ConsQtr",
    "weight": "167",
    "bout": 568,
    "winner": "Joel Morissette",
    "winner_school": "Michigan State",
    "loser": "Mike Powell",
    "loser_school": "Indiana",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsSemi",
    "weight": "167",
    "bout": 593,
    "winner": "Markus Mollica",
    "winner_school": "Arizona State",
    "loser": "Barry Weldon",
    "loser_school": "Iowa State",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsSemi",
    "weight": "167",
    "bout": 594,
    "winner": "Charles Burton",
    "winner_school": "Boise State",
    "loser": "Joel Morissette",
    "loser_school": "Michigan State",
    "result": "Dec 8-3"
  },
  {
    "round": "3rdPlace",
    "weight": "167",
    "bout": 619,
    "winner": "Charles Burton",
    "winner_school": "Boise State",
    "loser": "Markus Mollica",
    "loser_school": "Arizona State",
    "result": "Dec 4-3"
  },
  {
    "round": "5thPlace",
    "weight": "167",
    "bout": 620,
    "winner": "Barry Weldon",
    "winner_school": "Iowa State",
    "loser": "Joel Morissette",
    "loser_school": "Michigan State",
    "result": "Dec 6-2"
  },
  {
    "round": "7thPlace",
    "weight": "167",
    "bout": 621,
    "winner": "Mike Powell",
    "winner_school": "Indiana",
    "loser": "Chad Nelson",
    "loser_school": "Nebraska",
    "result": "Dec 10-8"
  },
  {
    "round": "Finals",
    "weight": "167",
    "bout": 637,
    "winner": "Daryl Weber",
    "winner_school": "Iowa",
    "loser": "Mark Branch",
    "loser_school": "Oklahoma State",
    "result": "DEF"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 123,
    "winner": "Jevon Herman",
    "winner_school": "Illinois",
    "loser": "Rob Barlow",
    "loser_school": "George Mason",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 124,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Kurt Sykes",
    "loser_school": "NC State",
    "result": "TF 24-7 5:32"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 125,
    "winner": "Derek Scott",
    "winner_school": "CSU Bakersfield",
    "loser": "Derek DelPorto",
    "loser_school": "Slippery Rock",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 126,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Erik Josephson",
    "loser_school": "Nebraska",
    "result": "Dec 8-6 SV"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 127,
    "winner": "Erich Harvey",
    "winner_school": "Michigan State",
    "loser": "Mike Auerbach",
    "loser_school": "Ohio",
    "result": "MD 12-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 128,
    "winner": "Clint Matter",
    "winner_school": "Penn",
    "loser": "Chris Krestinger",
    "loser_school": "Air Force",
    "result": "MD 11-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 129,
    "winner": "Aaron Simpson",
    "winner_school": "Arizona State",
    "loser": "John Dattalo",
    "loser_school": "Virginia Tech",
    "result": "Dec 3-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 131,
    "winner": "Curt Heideman",
    "winner_school": "Iowa",
    "loser": "Eddy Clark",
    "loser_school": "Appalachian State",
    "result": "MD 13-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 132,
    "winner": "Grant Johnson",
    "winner_school": "Boston University",
    "loser": "Zach Randall",
    "loser_school": "Oklahoma",
    "result": "Dec 5-1"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 133,
    "winner": "Rod Franklin",
    "winner_school": "Clarion",
    "loser": "Tim Fix",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 134,
    "winner": "Reese Andy",
    "winner_school": "Wyoming",
    "loser": "Mike French",
    "loser_school": "Cal Poly",
    "result": "Dec 12-8"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 135,
    "winner": "John Koss",
    "winner_school": "West Virginia",
    "loser": "Joel Holman",
    "loser_school": "Cornell",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 136,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Joe Wier",
    "loser_school": "Missouri",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR1",
    "weight": "177",
    "bout": 137,
    "winner": "Rohan Gardner",
    "winner_school": "Northwestern",
    "loser": "Josh Henson",
    "loser_school": "Rider",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 293,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Jevon Herman",
    "loser_school": "Illinois",
    "result": "Dec 8-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 294,
    "winner": "Derek Scott",
    "winner_school": "CSU Bakersfield",
    "loser": "Tim Hartung",
    "loser_school": "Minnesota",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 295,
    "winner": "Erich Harvey",
    "winner_school": "Michigan State",
    "loser": "Clint Matter",
    "loser_school": "Penn",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 296,
    "winner": "Aaron Simpson",
    "winner_school": "Arizona State",
    "loser": "Mike Geurin",
    "loser_school": "Lock Haven",
    "result": "Fall 6:09"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 297,
    "winner": "Curt Heideman",
    "winner_school": "Iowa",
    "loser": "Grant Johnson",
    "loser_school": "Boston University",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 298,
    "winner": "Reese Andy",
    "winner_school": "Wyoming",
    "loser": "Rod Franklin",
    "loser_school": "Clarion",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 299,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "John Koss",
    "loser_school": "West Virginia",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR2",
    "weight": "177",
    "bout": 300,
    "winner": "Rohan Gardner",
    "winner_school": "Northwestern",
    "loser": "Louis Pelsang",
    "loser_school": "North Carolina",
    "result": "MD 17-8"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 302,
    "winner": "Joe Wier",
    "winner_school": "Missouri",
    "loser": "Joel Holman",
    "loser_school": "Cornell",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 303,
    "winner": "Mike French",
    "winner_school": "Cal Poly",
    "loser": "Tim Fix",
    "loser_school": "Eastern Illinois",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 304,
    "winner": "Zach Randall",
    "winner_school": "Oklahoma",
    "loser": "Eddy Clark",
    "loser_school": "Appalachian State",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 306,
    "winner": "Mike Auerbach",
    "winner_school": "Ohio",
    "loser": "Chris Krestinger",
    "loser_school": "Air Force",
    "result": "Dec 7-4"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 307,
    "winner": "Erik Josephson",
    "winner_school": "Nebraska",
    "loser": "Derek DelPorto",
    "loser_school": "Slippery Rock",
    "result": "Dec 4-2"
  },
  {
    "round": "ConsR1",
    "weight": "177",
    "bout": 308,
    "winner": "Rob Barlow",
    "winner_school": "George Mason",
    "loser": "Kurt Sykes",
    "loser_school": "NC State",
    "result": "Dec 10-5"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 397,
    "winner": "Clint Matter",
    "winner_school": "Penn",
    "loser": "Josh Henson",
    "loser_school": "Rider",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 398,
    "winner": "Mike Geurin",
    "winner_school": "Lock Haven",
    "loser": "Joe Wier",
    "loser_school": "Missouri",
    "result": "Dec 6-2"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 399,
    "winner": "Jevon Herman",
    "winner_school": "Illinois",
    "loser": "Mike French",
    "loser_school": "Cal Poly",
    "result": "MD 12-4"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 400,
    "winner": "Tim Hartung",
    "winner_school": "Minnesota",
    "loser": "Zach Randall",
    "loser_school": "Oklahoma",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 401,
    "winner": "John Koss",
    "winner_school": "West Virginia",
    "loser": "John Dattalo",
    "loser_school": "Virginia Tech",
    "result": "Dec 11-4"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 402,
    "winner": "Louis Pelsang",
    "winner_school": "North Carolina",
    "loser": "Mike Auerbach",
    "loser_school": "Ohio",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 403,
    "winner": "Grant Johnson",
    "winner_school": "Boston University",
    "loser": "Erik Josephson",
    "loser_school": "Nebraska",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR2",
    "weight": "177",
    "bout": 404,
    "winner": "Rod Franklin",
    "winner_school": "Clarion",
    "loser": "Rob Barlow",
    "loser_school": "George Mason",
    "result": "Dec 9-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 477,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Derek Scott",
    "loser_school": "CSU Bakersfield",
    "result": "TF 22-7 6:48"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 478,
    "winner": "Erich Harvey",
    "winner_school": "Michigan State",
    "loser": "Aaron Simpson",
    "loser_school": "Arizona State",
    "result": "Dec 8-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 479,
    "winner": "Reese Andy",
    "winner_school": "Wyoming",
    "loser": "Curt Heideman",
    "loser_school": "Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "177",
    "bout": 480,
    "winner": "Rohan Gardner",
    "winner_school": "Northwestern",
    "loser": "Jesse Rawls",
    "loser_school": "Michigan",
    "result": "Dec 6-3"
  },
  {
    "round": "ConsR3",
    "weight": "177",
    "bout": 481,
    "winner": "Mike Geurin",
    "winner_school": "Lock Haven",
    "loser": "Clint Matter",
    "loser_school": "Penn",
    "result": "Dec 8-3"
  },
  {
    "round": "ConsR3",
    "weight": "177",
    "bout": 482,
    "winner": "Jevon Herman",
    "winner_school": "Illinois",
    "loser": "Tim Hartung",
    "loser_school": "Minnesota",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR3",
    "weight": "177",
    "bout": 483,
    "winner": "John Koss",
    "winner_school": "West Virginia",
    "loser": "Louis Pelsang",
    "loser_school": "North Carolina",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsR3",
    "weight": "177",
    "bout": 484,
    "winner": "Rod Franklin",
    "winner_school": "Clarion",
    "loser": "Grant Johnson",
    "loser_school": "Boston University",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR4",
    "weight": "177",
    "bout": 529,
    "winner": "Mike Geurin",
    "winner_school": "Lock Haven",
    "loser": "Curt Heideman",
    "loser_school": "Iowa",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR4",
    "weight": "177",
    "bout": 530,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Jevon Herman",
    "loser_school": "Illinois",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR4",
    "weight": "177",
    "bout": 531,
    "winner": "Derek Scott",
    "winner_school": "CSU Bakersfield",
    "loser": "John Koss",
    "loser_school": "West Virginia",
    "result": "Fall 2:18"
  },
  {
    "round": "ConsR4",
    "weight": "177",
    "bout": 532,
    "winner": "Aaron Simpson",
    "winner_school": "Arizona State",
    "loser": "Rod Franklin",
    "loser_school": "Clarion",
    "result": "Fall 5:56"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 569,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Erich Harvey",
    "loser_school": "Michigan State",
    "result": "MD 13-3"
  },
  {
    "round": "SemiFinals",
    "weight": "177",
    "bout": 570,
    "winner": "Reese Andy",
    "winner_school": "Wyoming",
    "loser": "Rohan Gardner",
    "loser_school": "Northwestern",
    "result": "Fall 4:05"
  },
  {
    "round": "ConsQtr",
    "weight": "177",
    "bout": 571,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Mike Geurin",
    "loser_school": "Lock Haven",
    "result": "Dec 8-1"
  },
  {
    "round": "ConsQtr",
    "weight": "177",
    "bout": 572,
    "winner": "Derek Scott",
    "winner_school": "CSU Bakersfield",
    "loser": "Aaron Simpson",
    "loser_school": "Arizona State",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsSemi",
    "weight": "177",
    "bout": 595,
    "winner": "Jesse Rawls",
    "winner_school": "Michigan",
    "loser": "Erich Harvey",
    "loser_school": "Michigan State",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "177",
    "bout": 596,
    "winner": "Rohan Gardner",
    "winner_school": "Northwestern",
    "loser": "Derek Scott",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 5-1"
  },
  {
    "round": "3rdPlace",
    "weight": "177",
    "bout": 622,
    "winner": "Rohan Gardner",
    "winner_school": "Northwestern",
    "loser": "Jesse Rawls",
    "loser_school": "Michigan",
    "result": "Dec 3-1"
  },
  {
    "round": "5thPlace",
    "weight": "177",
    "bout": 623,
    "winner": "Erich Harvey",
    "winner_school": "Michigan State",
    "loser": "Derek Scott",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 8-5"
  },
  {
    "round": "7thPlace",
    "weight": "177",
    "bout": 624,
    "winner": "Mike Geurin",
    "winner_school": "Lock Haven",
    "loser": "Aaron Simpson",
    "loser_school": "Arizona State",
    "result": "Dec 10-6"
  },
  {
    "round": "Finals",
    "weight": "177",
    "bout": 638,
    "winner": "Les Gutches",
    "winner_school": "Oregon State",
    "loser": "Reese Andy",
    "loser_school": "Wyoming",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 139,
    "winner": "Jeremy Clayton",
    "winner_school": "Boise State",
    "loser": "Carlos Eason",
    "loser_school": "Cornell",
    "result": "Fall 2:51"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 140,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Mike Jenson",
    "loser_school": "Rider",
    "result": "Dec 4-4 TB"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 141,
    "winner": "Anthony Gary",
    "winner_school": "Ohio State",
    "loser": "Matthew McRoberts",
    "loser_school": "Boston University",
    "result": "Dec 10-3"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 142,
    "winner": "John Kading",
    "winner_school": "Oklahoma",
    "loser": "Ben Nachtrieb",
    "loser_school": "Indiana",
    "result": "TF 21-6 7:00"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 143,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "John Leonardis",
    "loser_school": "Lehigh",
    "result": "MD 11-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 144,
    "winner": "Seth Myerson",
    "winner_school": "Appalachian State",
    "loser": "Aaron Strobel",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-7"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 145,
    "winner": "Mark Bodo",
    "winner_school": "Pittsburgh",
    "loser": "Chad Flack",
    "loser_school": "Oregon State",
    "result": "MD 16-8"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 146,
    "winner": "Rob Neidlinger",
    "winner_school": "Penn State",
    "loser": "Keno Brown",
    "loser_school": "Coppin State",
    "result": "Dec 14-12 SV"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 147,
    "winner": "Dan Madson",
    "winner_school": "NC State",
    "loser": "Kevin Drew",
    "loser_school": "Lock Haven",
    "result": "Dec 4-1"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 148,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Mike Benson",
    "loser_school": "Ohio",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 149,
    "winner": "Bryan Stout",
    "winner_school": "Clarion",
    "loser": "Scott Stay",
    "loser_school": "North Carolina",
    "result": "Dec 8-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 150,
    "winner": "Aaron Stark",
    "winner_school": "Wisconsin",
    "loser": "Craig Fenstermaker",
    "loser_school": "Virginia",
    "result": "MD 12-0"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 151,
    "winner": "Paschal Duru",
    "winner_school": "CSU Bakersfield",
    "loser": "Demond Rodez",
    "loser_school": "Northern Illinois",
    "result": "MD 17-6"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 152,
    "winner": "Tony Wieland",
    "winner_school": "Northern Iowa",
    "loser": "Eric Sanders",
    "loser_school": "UNC Greensboro",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "190",
    "bout": 153,
    "winner": "Karl Roesler",
    "winner_school": "Illinois",
    "loser": "Jason Klohs",
    "loser_school": "Wyoming",
    "result": "Dec 8-1"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 309,
    "winner": "Casey Strand",
    "winner_school": "Arizona State",
    "loser": "Jeremy Clayton",
    "loser_school": "Boise State",
    "result": "Dec 6-3"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 310,
    "winner": "John Kading",
    "winner_school": "Oklahoma",
    "loser": "Anthony Gary",
    "loser_school": "Ohio State",
    "result": "Dec 3-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 311,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Seth Myerson",
    "loser_school": "Appalachian State",
    "result": "Fall 5:15"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 312,
    "winner": "Mark Bodo",
    "winner_school": "Pittsburgh",
    "loser": "Rob Neidlinger",
    "loser_school": "Penn State",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 313,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Dan Madson",
    "loser_school": "NC State",
    "result": "Dec 5-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 314,
    "winner": "Bryan Stout",
    "winner_school": "Clarion",
    "loser": "Aaron Stark",
    "loser_school": "Wisconsin",
    "result": "MD 9-0"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 315,
    "winner": "Paschal Duru",
    "winner_school": "CSU Bakersfield",
    "loser": "Tony Wieland",
    "loser_school": "Northern Iowa",
    "result": "MD 14-5"
  },
  {
    "round": "ChampR2",
    "weight": "190",
    "bout": 316,
    "winner": "Brian Picklo",
    "winner_school": "Michigan State",
    "loser": "Karl Roesler",
    "loser_school": "Illinois",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 318,
    "winner": "Eric Sanders",
    "winner_school": "UNC Greensboro",
    "loser": "Demond Rodez",
    "loser_school": "Northern Illinois",
    "result": "Fall 1:24"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 319,
    "winner": "Craig Fenstermaker",
    "winner_school": "Virginia",
    "loser": "Scott Stay",
    "loser_school": "North Carolina",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 320,
    "winner": "Mike Benson",
    "winner_school": "Ohio",
    "loser": "Kevin Drew",
    "loser_school": "Lock Haven",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 321,
    "winner": "Chad Flack",
    "winner_school": "Oregon State",
    "loser": "Keno Brown",
    "loser_school": "Coppin State",
    "result": "Fall 3:25"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 322,
    "winner": "John Leonardis",
    "winner_school": "Lehigh",
    "loser": "Aaron Strobel",
    "loser_school": "Oklahoma State",
    "result": "Dec 8-7"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 323,
    "winner": "Ben Nachtrieb",
    "winner_school": "Indiana",
    "loser": "Matthew McRoberts",
    "loser_school": "Boston University",
    "result": "Dec 4-1"
  },
  {
    "round": "ConsR1",
    "weight": "190",
    "bout": 324,
    "winner": "Mike Jenson",
    "winner_school": "Rider",
    "loser": "Carlos Eason",
    "loser_school": "Cornell",
    "result": "Dec 9-2"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 405,
    "winner": "Seth Myerson",
    "winner_school": "Appalachian State",
    "loser": "Jason Klohs",
    "loser_school": "Wyoming",
    "result": "Dec 12-8"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 406,
    "winner": "Eric Sanders",
    "winner_school": "UNC Greensboro",
    "loser": "Rob Neidlinger",
    "loser_school": "Penn State",
    "result": "Fall 3:23"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 407,
    "winner": "Jeremy Clayton",
    "winner_school": "Boise State",
    "loser": "Craig Fenstermaker",
    "loser_school": "Virginia",
    "result": "DEF"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 408,
    "winner": "Mike Benson",
    "winner_school": "Ohio",
    "loser": "Anthony Gary",
    "loser_school": "Ohio State",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 409,
    "winner": "Tony Wieland",
    "winner_school": "Northern Iowa",
    "loser": "Chad Flack",
    "loser_school": "Oregon State",
    "result": "Fall 2:27"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 410,
    "winner": "John Leonardis",
    "winner_school": "Lehigh",
    "loser": "Karl Roesler",
    "loser_school": "Illinois",
    "result": "Dec 7-5 SV"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 411,
    "winner": "Dan Madson",
    "winner_school": "NC State",
    "loser": "Ben Nachtrieb",
    "loser_school": "Indiana",
    "result": "MD 10-1"
  },
  {
    "round": "ConsR2",
    "weight": "190",
    "bout": 412,
    "winner": "Aaron Stark",
    "winner_school": "Wisconsin",
    "loser": "Mike Jenson",
    "loser_school": "Rider",
    "result": "Dec 4-2"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 485,
    "winner": "John Kading",
    "winner_school": "Oklahoma",
    "loser": "Casey Strand",
    "loser_school": "Arizona State",
    "result": "Dec 10-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 486,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Mark Bodo",
    "loser_school": "Pittsburgh",
    "result": "Dec 4-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 487,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Bryan Stout",
    "loser_school": "Clarion",
    "result": "Dec 8-7"
  },
  {
    "round": "QuarterFinals",
    "weight": "190",
    "bout": 488,
    "winner": "Paschal Duru",
    "winner_school": "CSU Bakersfield",
    "loser": "Brian Picklo",
    "loser_school": "Michigan State",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR3",
    "weight": "190",
    "bout": 489,
    "winner": "Seth Myerson",
    "winner_school": "Appalachian State",
    "loser": "Eric Sanders",
    "loser_school": "UNC Greensboro",
    "result": "MD 14-5"
  },
  {
    "round": "ConsR3",
    "weight": "190",
    "bout": 490,
    "winner": "Mike Benson",
    "winner_school": "Ohio",
    "loser": "Jeremy Clayton",
    "loser_school": "Boise State",
    "result": "Dec 9-5"
  },
  {
    "round": "ConsR3",
    "weight": "190",
    "bout": 491,
    "winner": "Tony Wieland",
    "winner_school": "Northern Iowa",
    "loser": "John Leonardis",
    "loser_school": "Lehigh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "ConsR3",
    "weight": "190",
    "bout": 492,
    "winner": "Dan Madson",
    "winner_school": "NC State",
    "loser": "Aaron Stark",
    "loser_school": "Wisconsin",
    "result": "Dec 7-1"
  },
  {
    "round": "ConsR4",
    "weight": "190",
    "bout": 533,
    "winner": "Bryan Stout",
    "winner_school": "Clarion",
    "loser": "Seth Myerson",
    "loser_school": "Appalachian State",
    "result": "MD 9-0"
  },
  {
    "round": "ConsR4",
    "weight": "190",
    "bout": 534,
    "winner": "Brian Picklo",
    "winner_school": "Michigan State",
    "loser": "Mike Benson",
    "loser_school": "Ohio",
    "result": "Dec 5-1"
  },
  {
    "round": "ConsR4",
    "weight": "190",
    "bout": 535,
    "winner": "Tony Wieland",
    "winner_school": "Northern Iowa",
    "loser": "Casey Strand",
    "loser_school": "Arizona State",
    "result": "Dec 2-2 TB"
  },
  {
    "round": "ConsR4",
    "weight": "190",
    "bout": 536,
    "winner": "Mark Bodo",
    "winner_school": "Pittsburgh",
    "loser": "Dan Madson",
    "loser_school": "NC State",
    "result": "Dec 8-5"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 573,
    "winner": "John Kading",
    "winner_school": "Oklahoma",
    "loser": "Ryan Tobin",
    "loser_school": "Nebraska",
    "result": "Dec 8-2"
  },
  {
    "round": "SemiFinals",
    "weight": "190",
    "bout": 574,
    "winner": "Paschal Duru",
    "winner_school": "CSU Bakersfield",
    "loser": "Lee Fullhart",
    "loser_school": "Iowa",
    "result": "Dec 11-6"
  },
  {
    "round": "ConsQtr",
    "weight": "190",
    "bout": 575,
    "winner": "Brian Picklo",
    "winner_school": "Michigan State",
    "loser": "Bryan Stout",
    "loser_school": "Clarion",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsQtr",
    "weight": "190",
    "bout": 576,
    "winner": "Mark Bodo",
    "winner_school": "Pittsburgh",
    "loser": "Tony Wieland",
    "loser_school": "Northern Iowa",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsSemi",
    "weight": "190",
    "bout": 597,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Brian Picklo",
    "loser_school": "Michigan State",
    "result": "Dec 8-5"
  },
  {
    "round": "ConsSemi",
    "weight": "190",
    "bout": 598,
    "winner": "Lee Fullhart",
    "winner_school": "Iowa",
    "loser": "Mark Bodo",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "3rdPlace",
    "weight": "190",
    "bout": 625,
    "winner": "Ryan Tobin",
    "winner_school": "Nebraska",
    "loser": "Lee Fullhart",
    "loser_school": "Iowa",
    "result": "Dec 10-6"
  },
  {
    "round": "5thPlace",
    "weight": "190",
    "bout": 626,
    "winner": "Brian Picklo",
    "winner_school": "Michigan State",
    "loser": "Mark Bodo",
    "loser_school": "Pittsburgh",
    "result": "Dec 3-1 SV"
  },
  {
    "round": "7thPlace",
    "weight": "190",
    "bout": 627,
    "winner": "Bryan Stout",
    "winner_school": "Clarion",
    "loser": "Tony Wieland",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-0"
  },
  {
    "round": "Finals",
    "weight": "190",
    "bout": 639,
    "winner": "John Kading",
    "winner_school": "Oklahoma",
    "loser": "Paschal Duru",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 7-3"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 155,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "Stephen Terebieniec",
    "loser_school": "Kent State",
    "result": "Fall 1:22"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 156,
    "winner": "John Degl",
    "winner_school": "Iowa",
    "loser": "Marland Houston",
    "loser_school": "Morgan State",
    "result": "Dec 12-5"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 157,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Ben Lee",
    "loser_school": "Oklahoma State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 158,
    "winner": "Pat Wiltanger",
    "winner_school": "Pittsburgh",
    "loser": "Darin Priesendorf",
    "loser_school": "Fresno State",
    "result": "Dec 5-3"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 159,
    "winner": "Nick Hall",
    "winner_school": "Old Dominion",
    "loser": "Jamie Huntington",
    "loser_school": "Drexel",
    "result": "MD 9-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 160,
    "winner": "Trey Swan",
    "winner_school": "Oklahoma",
    "loser": "Rich Polkinghorn",
    "loser_school": "Oregon",
    "result": "Dec 4-3"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 161,
    "winner": "Nick Nutter",
    "winner_school": "Ohio State",
    "loser": "Shawn Stipich",
    "loser_school": "Boise State",
    "result": "Dec 2-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 162,
    "winner": "Justin Harty",
    "winner_school": "North Carolina",
    "loser": "Joey Allen",
    "loser_school": "Penn",
    "result": "Fall 1:48"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 163,
    "winner": "Joe Eaton",
    "winner_school": "Lock Haven",
    "loser": "Bill Tassogloy",
    "loser_school": "Rider",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 164,
    "winner": "Billy Pierce",
    "winner_school": "Minnesota",
    "loser": "Zach Feldman",
    "loser_school": "Virginia",
    "result": "MD 13-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 165,
    "winner": "Seth Brady",
    "winner_school": "Illinois",
    "loser": "Jeremy Karle",
    "loser_school": "Marquette",
    "result": "Dec 11-4"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 166,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Burt Beamer",
    "loser_school": "Northern Iowa",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 167,
    "winner": "Leslie Apedoe",
    "winner_school": "VMI",
    "loser": "Pat Schuster",
    "loser_school": "Edinboro",
    "result": "Dec 10-5"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 168,
    "winner": "Tony Vaughn",
    "winner_school": "Purdue",
    "loser": "Darren Jarina",
    "loser_school": "Clarion",
    "result": "MD 10-1"
  },
  {
    "round": "ChampR1",
    "weight": "275",
    "bout": 169,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Monty Cheff",
    "loser_school": "Cornell",
    "result": "Dec 5-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 325,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "John Degl",
    "loser_school": "Iowa",
    "result": "MD 13-3"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 326,
    "winner": "Pat Wiltanger",
    "winner_school": "Pittsburgh",
    "loser": "Airron Richardson",
    "loser_school": "Michigan",
    "result": "Dec 4-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 327,
    "winner": "Nick Hall",
    "winner_school": "Old Dominion",
    "loser": "Trey Swan",
    "loser_school": "Oklahoma",
    "result": "MD 10-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 328,
    "winner": "Justin Harty",
    "winner_school": "North Carolina",
    "loser": "Nick Nutter",
    "loser_school": "Ohio State",
    "result": "Dec 7-6 TB"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 329,
    "winner": "Billy Pierce",
    "winner_school": "Minnesota",
    "loser": "Joe Eaton",
    "loser_school": "Lock Haven",
    "result": "MD 14-4"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 330,
    "winner": "Seth Brady",
    "winner_school": "Illinois",
    "loser": "Stephen Neal",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 3-2"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 331,
    "winner": "Tony Vaughn",
    "winner_school": "Purdue",
    "loser": "Leslie Apedoe",
    "loser_school": "VMI",
    "result": "Dec 9-3"
  },
  {
    "round": "ChampR2",
    "weight": "275",
    "bout": 332,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Jerry McCoy",
    "loser_school": "Millersville",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 334,
    "winner": "Pat Schuster",
    "winner_school": "Edinboro",
    "loser": "Darren Jarina",
    "loser_school": "Clarion",
    "result": "Dec 2-1"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 335,
    "winner": "Burt Beamer",
    "winner_school": "Northern Iowa",
    "loser": "Jeremy Karle",
    "loser_school": "Marquette",
    "result": "Fall 3:29"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 336,
    "winner": "Zach Feldman",
    "winner_school": "Virginia",
    "loser": "Bill Tassogloy",
    "loser_school": "Rider",
    "result": "Dec 4-0"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 337,
    "winner": "Shawn Stipich",
    "winner_school": "Boise State",
    "loser": "Joey Allen",
    "loser_school": "Penn",
    "result": "Dec 7-3"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 338,
    "winner": "Rich Polkinghorn",
    "winner_school": "Oregon",
    "loser": "Jamie Huntington",
    "loser_school": "Drexel",
    "result": "Dec 5-2"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 339,
    "winner": "Ben Lee",
    "winner_school": "Oklahoma State",
    "loser": "Darin Priesendorf",
    "loser_school": "Fresno State",
    "result": "Dec 5-3 SV"
  },
  {
    "round": "ConsR1",
    "weight": "275",
    "bout": 340,
    "winner": "Stephen Terebieniec",
    "winner_school": "Kent State",
    "loser": "Marland Houston",
    "loser_school": "Morgan State",
    "result": "Dec 3-0"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 413,
    "winner": "Monty Cheff",
    "winner_school": "Cornell",
    "loser": "Trey Swan",
    "loser_school": "Oklahoma",
    "result": "Dec 6-4 SV"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 414,
    "winner": "Nick Nutter",
    "winner_school": "Ohio State",
    "loser": "Pat Schuster",
    "loser_school": "Edinboro",
    "result": "MD 13-5"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 415,
    "winner": "John Degl",
    "winner_school": "Iowa",
    "loser": "Burt Beamer",
    "loser_school": "Northern Iowa",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 416,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Zach Feldman",
    "loser_school": "Virginia",
    "result": "Dec 8-2"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 417,
    "winner": "Shawn Stipich",
    "winner_school": "Boise State",
    "loser": "Leslie Apedoe",
    "loser_school": "VMI",
    "result": "Dec 7-5"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 418,
    "winner": "Jerry McCoy",
    "winner_school": "Millersville",
    "loser": "Rich Polkinghorn",
    "loser_school": "Oregon",
    "result": "Dec 9-3"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 419,
    "winner": "Ben Lee",
    "winner_school": "Oklahoma State",
    "loser": "Joe Eaton",
    "loser_school": "Lock Haven",
    "result": "Dec 3-2"
  },
  {
    "round": "ConsR2",
    "weight": "275",
    "bout": 420,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Stephen Terebieniec",
    "loser_school": "Kent State",
    "result": "Dec 9-4"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 493,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "Pat Wiltanger",
    "loser_school": "Pittsburgh",
    "result": "DEF"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 494,
    "winner": "Justin Harty",
    "winner_school": "North Carolina",
    "loser": "Nick Hall",
    "loser_school": "Old Dominion",
    "result": "Dec 2-0"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 495,
    "winner": "Billy Pierce",
    "winner_school": "Minnesota",
    "loser": "Seth Brady",
    "loser_school": "Illinois",
    "result": "Dec 6-3"
  },
  {
    "round": "QuarterFinals",
    "weight": "275",
    "bout": 496,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Tony Vaughn",
    "loser_school": "Purdue",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR3",
    "weight": "275",
    "bout": 497,
    "winner": "Nick Nutter",
    "winner_school": "Ohio State",
    "loser": "Monty Cheff",
    "loser_school": "Cornell",
    "result": "Dec 8-4"
  },
  {
    "round": "ConsR3",
    "weight": "275",
    "bout": 498,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "John Degl",
    "loser_school": "Iowa",
    "result": "MD 16-4"
  },
  {
    "round": "ConsR3",
    "weight": "275",
    "bout": 499,
    "winner": "Jerry McCoy",
    "winner_school": "Millersville",
    "loser": "Shawn Stipich",
    "loser_school": "Boise State",
    "result": "Dec 2-1 TB"
  },
  {
    "round": "ConsR3",
    "weight": "275",
    "bout": 500,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Ben Lee",
    "loser_school": "Oklahoma State",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsR4",
    "weight": "275",
    "bout": 537,
    "winner": "Nick Nutter",
    "winner_school": "Ohio State",
    "loser": "Seth Brady",
    "loser_school": "Illinois",
    "result": "Fall 1:36"
  },
  {
    "round": "ConsR4",
    "weight": "275",
    "bout": 538,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Tony Vaughn",
    "loser_school": "Purdue",
    "result": "Dec 6-4"
  },
  {
    "round": "ConsR4",
    "weight": "275",
    "bout": 539,
    "winner": "Pat Wiltanger",
    "winner_school": "Pittsburgh",
    "loser": "Jerry McCoy",
    "loser_school": "Millersville",
    "result": "Dec 4-3"
  },
  {
    "round": "ConsR4",
    "weight": "275",
    "bout": 540,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Nick Hall",
    "loser_school": "Old Dominion",
    "result": "M FOR"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 577,
    "winner": "Justin Harty",
    "winner_school": "North Carolina",
    "loser": "Tolly Thompson",
    "loser_school": "Nebraska",
    "result": "Dec 6-5"
  },
  {
    "round": "SemiFinals",
    "weight": "275",
    "bout": 578,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Billy Pierce",
    "loser_school": "Minnesota",
    "result": "Dec 3-1"
  },
  {
    "round": "ConsQtr",
    "weight": "275",
    "bout": 579,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Nick Nutter",
    "loser_school": "Ohio State",
    "result": "Dec 7-2"
  },
  {
    "round": "ConsQtr",
    "weight": "275",
    "bout": 580,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Pat Wiltanger",
    "loser_school": "Pittsburgh",
    "result": "Dec 10-4"
  },
  {
    "round": "ConsSemi",
    "weight": "275",
    "bout": 599,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "Airron Richardson",
    "loser_school": "Michigan",
    "result": "Dec 5-3"
  },
  {
    "round": "ConsSemi",
    "weight": "275",
    "bout": 600,
    "winner": "Stephen Neal",
    "winner_school": "CSU Bakersfield",
    "loser": "Billy Pierce",
    "loser_school": "Minnesota",
    "result": "M FOR"
  },
  {
    "round": "3rdPlace",
    "weight": "275",
    "bout": 628,
    "winner": "Tolly Thompson",
    "winner_school": "Nebraska",
    "loser": "Stephen Neal",
    "loser_school": "CSU Bakersfield",
    "result": "Dec 4-1"
  },
  {
    "round": "5thPlace",
    "weight": "275",
    "bout": 629,
    "winner": "Airron Richardson",
    "winner_school": "Michigan",
    "loser": "Billy Pierce",
    "loser_school": "Minnesota",
    "result": "M FOR"
  },
  {
    "round": "7thPlace",
    "weight": "275",
    "bout": 630,
    "winner": "Nick Nutter",
    "winner_school": "Ohio State",
    "loser": "Pat Wiltanger",
    "loser_school": "Pittsburgh",
    "result": "Dec 2-0"
  },
  {
    "round": "Finals",
    "weight": "275",
    "bout": 640,
    "winner": "Jeff Walter",
    "winner_school": "Wisconsin",
    "loser": "Justin Harty",
    "loser_school": "North Carolina",
    "result": "Dec 3-2"
  }
];
if (typeof module === "object" && module.exports) module.exports = resultData;
